import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "JavaScript Frameworks",
  description: "A comprehensive guide to modern JavaScript frameworks",
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Guide', link: '/guide/introduction' },
      { text: 'Frameworks', link: '/frameworks/overview' },
      { text: 'Best Practices', link: '/best-practices/overview' },
      { text: 'Community', link: '/community/' }
    ],
    search: {
      provider: 'local',
      options: {
        detailedView: true,
        miniSearch: {
          // Filter specific fields
          fields: ['title', 'text', 'headers'],
          // Assign different weights to fields
          boost: {
            title: 4,
            text: 2,
            headers: 1
          },
          // Fuzzy search configuration
          fuzzy: 0.2,
          // Prefix search configuration
          prefix: true
        }
      }
    },
    sidebar: {
      '/guide/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/guide/introduction' },
            { text: 'Installation', link: '/guide/installation' },
            { text: 'First Steps', link: '/guide/first-steps' }
          ]
        }
      ],
      '/frameworks/': [
        {
          text: 'Popular Frameworks',
          items: [
            { text: 'Overview', link: '/frameworks/overview' },
            { text: 'React', link: '/frameworks/react' },
            { text: 'Vue', link: '/frameworks/vue' },
            { text: 'Angular', link: '/frameworks/angular' },
            { text: 'Svelte', link: '/frameworks/svelte' }
          ]
        }
      ],
      '/best-practices/': [
        {
          text: 'Best Practices',
          items: [
            { text: 'Overview', link: '/best-practices/overview' },
            { text: 'File Structure', link: '/best-practices/file-structure' },
            { text: 'Component Design', link: '/best-practices/component-design' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-org/js-frameworks-docs' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present'
    }
  }
})