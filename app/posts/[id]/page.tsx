import { getPostData, getSortedPostsData } from '@/lib/markdown'
import { calculateReadingTime } from '@/lib/readingTime'
import { notFound } from 'next/navigation'
import ReadingProgress from '@/components/ReadingProgress'
import SocialShare from '@/components/SocialShare'
import { Metadata } from 'next'

export async function generateMetadata(
  { params }: { params: { id: string } }
): Promise<Metadata> {
  const post = await getPostData(params.id)
  
  if (!post) {
    return {
      title: 'Post Not Found'
    }
  }

  return {
    title: post.title,
    description: post.description || `Read ${post.title} on our blog`
  }
}

export async function generateStaticParams() {
  const posts = getSortedPostsData()
  return posts.map((post) => ({
    id: post.id,
  }))
}

export default async function Page({
  params,
}: {
  params: { id: string }
}) {
  const postData = await getPostData(params.id)

  if (!postData || !postData.contentHtml) {
    notFound()
  }

  const readingTime = calculateReadingTime(postData.contentHtml || '')
  const postUrl = `https://yourblog.com/posts/${params.id}`

  return (
    <>
      <ReadingProgress />
      <article className="prose lg:prose-xl dark:prose-invert mx-auto">
        <h1>{postData.title}</h1>
        <div className="text-gray-500 dark:text-gray-400">
          <time>{postData.date}</time>
          <span className="mx-2">•</span>
          <span>{readingTime} min read</span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <SocialShare url={postUrl} title={postData.title} />
      </article>
    </>
  )
}
