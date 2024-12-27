import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import highlight from 'rehype-highlight'
import math from 'remark-math'
import katex from 'rehype-katex'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
  // Check if the directory exists
  if (!fs.existsSync(postsDirectory)) {
    console.warn("Posts directory does not exist. Returning empty array.");
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    return {
      id,
      content: matterResult.content,
      ...(matterResult.data as { date: string; title: string }),
    }
  })

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  
  // Check if the file exists
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Post not found: ${id}`);
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .use(highlight)
    .use(math)
    .use(katex)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    id,
    contentHtml,
    ...(matterResult.data as { date: string; title: string }),
  }
}

