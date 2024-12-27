'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'
import Search from './Search'

interface HeaderProps {
  posts: Array<{
    id: string
    title: string
    content: string
  }>
}

const Header = ({ posts }: HeaderProps) => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800 dark:text-white">
          My Blog
        </Link>
        <div className="flex items-center space-x-4">
          {posts.length > 0 && <Search posts={posts} />}
          <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
            Home
          </Link>
          <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
            About
          </Link>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header

