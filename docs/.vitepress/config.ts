import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Studytomy Blogs",
  description: "Knowledge sharing platform by Studymunity",
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
      { icon: 'github', link: 'https://github.com/nirzaf' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present'
    },
    // Add custom theme colors
    appearance: 'dark',
    colors: {
      primary: {
        50: '#EAE2B7',
        100: '#FCBF49',
        500: '#F77F00',
        600: '#D62828',
        700: '#003049'
      }
    }
  },
  // Add custom CSS
  head: [
    ['style', {}, `
      :root {
        --vp-c-bg: #003049;
        --vp-c-text: #EAE2B7;
        --vp-c-brand: #F77F00;
        --vp-c-brand-light: #FCBF49;
        --vp-c-brand-lighter: #EAE2B7;
        --vp-c-brand-dark: #D62828;
        --vp-c-brand-darker: #953137;
        
        --vp-c-sponsor: #FC8862;
        
        --vp-c-bg-alt: #2b2e44;
        --vp-c-bg-soft: #2b2e44;
        --vp-c-bg-mute: #a0949c;
        
        --vp-c-divider: #a1a4b0;
        --vp-c-divider-light: #a1a4b0;
        
        --vp-c-text-1: #EAE2B7;
        --vp-c-text-2: #a1a4b0;
        --vp-c-text-3: #a0949c;
        
        --vp-button-brand-bg: #F77F00;
        --vp-button-brand-hover-bg: #FCBF49;
        --vp-button-brand-active-bg: #D62828;
        
        --vp-custom-block-info-bg: #2b2e44;
        --vp-custom-block-info-border: #003049;
        --vp-custom-block-tip-bg: #2b2e44;
        --vp-custom-block-tip-border: #F77F00;
        --vp-custom-block-warning-bg: #2b2e44;
        --vp-custom-block-warning-border: #FCBF49;
        --vp-custom-block-danger-bg: #2b2e44;
        --vp-custom-block-danger-border: #D62828;
      }
    `]
  ]
})