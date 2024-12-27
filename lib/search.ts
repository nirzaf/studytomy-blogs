'use client'

import { useState, useEffect } from 'react'

let elasticlunr: any
let index: any

export async function createSearchIndex(posts: any[]) {
  if (!elasticlunr) {
    elasticlunr = (await import('elasticlunr')).default
  }

  index = elasticlunr(function () {
    this.addField('title')
    this.addField('content')
    this.setRef('id')
  })

  posts.forEach((post) => {
    index.addDoc({
      id: post.id,
      title: post.title,
      content: post.content,
    })
  })
}

export function searchPosts(query: string) {
  if (!index) {
    throw new Error('Search index not initialized')
  }

  return index.search(query, {
    fields: {
      title: {boost: 2},
      content: {boost: 1},
    },
    expand: true,
  })
}

export function useSearch(posts: any[]) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<any[]>([])

  useEffect(() => {
    createSearchIndex(posts)
  }, [posts])

  useEffect(() => {
    if (query.length > 2) {
      try {
        const searchResults = searchPosts(query)
        setResults(searchResults)
      } catch (error) {
        console.error('Search error:', error)
        setResults([])
      }
    } else {
      setResults([])
    }
  }, [query])

  return { query, setQuery, results }
}

