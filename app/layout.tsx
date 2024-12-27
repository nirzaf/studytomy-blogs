import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getSortedPostsData } from '@/lib/markdown'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next.js Advanced Blog',
  description: 'A feature-rich blog built with Next.js and TypeScript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const posts = getSortedPostsData()

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen">
            <Header posts={posts} />
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

