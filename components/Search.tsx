'use client'

import Link from 'next/link'
import { useSearch } from '@/lib/search'

interface SearchProps {
  posts: Array<{
    id: string
    title: string
    content: string
  }>
}

export default function Search({ posts }: SearchProps) {
  const { query, setQuery, results } = useSearch(posts)

  return (
    <div className="relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search posts..."
        className="w-full p-2 border rounded"
      />
      {results.length > 0 && (
        <ul className="absolute z-10 w-full bg-white dark:bg-gray-800 border rounded mt-1">
          {results.map((result) => (
            <li key={result.ref} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
              <Link href={`/posts/${result.ref}`} className="block">
                {result.doc.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

