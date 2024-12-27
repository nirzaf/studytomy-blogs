import Link from 'next/link'
import { getSortedPostsData } from '@/lib/markdown'

export default function Home() {
  const allPostsData = getSortedPostsData()

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Welcome to My Blog</h1>
      {allPostsData.length > 0 ? (
        <ul className="space-y-4">
          {allPostsData.map(({ id, date, title }) => (
            <li key={id} className="bg-white dark:bg-gray-700 shadow rounded-lg p-6">
              <Link href={`/posts/${id}`} className="text-2xl font-semibold hover:underline">
                {title}
              </Link>
              <br />
              <small className="text-gray-500 dark:text-gray-400">{date}</small>
            </li>
          ))}
        </ul>
      ) : (
        <p>No posts found. Check back later for new content!</p>
      )}
    </div>
  )
}

