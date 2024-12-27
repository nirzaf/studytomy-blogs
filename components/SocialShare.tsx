'use client'

import { Twitter, Facebook, Linkedin } from 'lucide-react'

interface SocialShareProps {
  url: string
  title: string
}

const SocialShare: React.FC<SocialShareProps> = ({ url, title }) => {
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  return (
    <div className="flex space-x-4 mt-4">
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-500"
        aria-label="Share on Twitter"
      >
        <Twitter />
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-700"
        aria-label="Share on Facebook"
      >
        <Facebook />
      </a>
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-800 hover:text-blue-900"
        aria-label="Share on LinkedIn"
      >
        <Linkedin />
      </a>
    </div>
  )
}

export default SocialShare

