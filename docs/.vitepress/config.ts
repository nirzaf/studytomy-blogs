import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "StudyToMy Blogs",
  description: "Your Learning Platform",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Documentation', link: '/docs/' },
      { text: 'Community', link: '/community/' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Introduction', link: '/guide/' },
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Installation', link: '/guide/installation' }
          ]
        }
      ],
      '/docs/': [
        {
          text: 'Documentation',
          items: [
            { text: 'Overview', link: '/docs/' },
            { text: 'API Reference', link: '/docs/api' },
            { text: 'Configuration', link: '/docs/configuration' }
          ]
        }
      ],
      '/community/': [
        {
          text: 'Community',
          items: [
            { text: 'Overview', link: '/community/' },
            { text: 'Contributing', link: '/community/contributing' },
            { text: 'Code of Conduct', link: '/community/code-of-conduct' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/studytomy' }
    ]
  },

  // Custom theme colors
  appearance: 'light',
  
  // Theme related colors
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            :root {
              // Primary Colors
              --vp-c-brand: #F77F00;
              --vp-c-brand-light: #e56b49;
              --vp-c-brand-lighter: #FC8862;
              --vp-c-brand-dark: #D62828;
              --vp-c-brand-darker: #953137;

              // Background colors
              --vp-c-bg: #ffffff;
              --vp-c-bg-soft: #ffffff;
              --vp-c-bg-mute: #ffffff;
              --vp-c-bg-alt: #ffffff;

              // Text colors
              --vp-c-text-1: #2b2e44;
              --vp-c-text-2: #003049;
              --vp-c-text-3: #a1a4b0;

              // Border colors
              --vp-c-border: #a1a4b0;
              --vp-c-divider: #a1a4b0;
              --vp-c-gutter: #ffffff;

              // Code block colors
              --vp-code-block-bg: #2b2e44;
              --vp-code-block-color: #ffffff;
              --vp-code-line-highlight-bg: #F77F00;
              --vp-code-line-number-color: #a1a4b0;

              // Custom button colors
              --vp-button-brand-bg: #F77F00;
              --vp-button-brand-hover-bg: #e56b49;
              --vp-button-brand-active-bg: #D62828;

              // Custom layout colors
              --vp-custom-block-info-bg: #EAE2B7;
              --vp-custom-block-info-border: #F77F00;
              --vp-custom-block-tip-bg: #EAE2B7;
              --vp-custom-block-tip-border: #F77F00;
              --vp-custom-block-warning-bg: #FCBF49;
              --vp-custom-block-warning-border: #F77F00;
            }
          `
        }
      }
    }
  }
})