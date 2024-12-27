'use client'

import { useState, useEffect } from 'react'
import { PostData } from './markdown'

let elasticlunr: any
let index: any

interface SearchResult {
  ref: string;
  score: number;
  doc: PostData;
}

interface ElasticLunrThis {
  addField: (field: string) => void;
  setRef: (field: string) => void;
}

export async function createSearchIndex(posts: PostData[]) {
  if (!elasticlunr) {
    elasticlunr = (await import('elasticlunr')).default
  }

  index = elasticlunr(function(this: ElasticLunrThis) {
    this.addField('title')
    this.addField('content')
    this.setRef('id')
  })

  posts.forEach((post) => {
    index.addDoc({
      id: post.id,
      title: post.title,
      content: post.content || '',
    })
  })
}

export function searchPosts(query: string): SearchResult[] {
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

export function useSearch(posts: PostData[]) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])

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
