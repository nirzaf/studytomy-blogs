# Project Memory

## Latest Changes (2024-12-27)

### Fixed 404 Routes
- Updated Astro configuration in `astro.config.mjs` to properly handle routing and markdown files
- Added new pages in `src/pages` directory:
  - `/guide/index.astro`
  - `/docs/index.astro`
  - `/community/index.astro`
- Each page imports its corresponding markdown content from the `docs` directory
- Added proper layout and styling using Tailwind's typography plugin

### Project Structure
- Content files are stored in `/docs` directory
- Page components are in `/src/pages` directory
- Using Astro's file-based routing system
- Markdown files are imported and rendered in Astro components

### Dependencies
- Astro v4.0.7
- Tailwind CSS v3.4.0
- @tailwindcss/typography for markdown styling
- Using PNPM as package manager (v8.9.0)

## Next Steps
- Consider adding navigation components
- Add more content to documentation sections
- Implement search functionality
- Add interactive components if needed