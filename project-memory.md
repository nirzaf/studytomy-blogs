# Project Memory: Next.js Advanced Blog

## Project Context
- Project Name: next-js-advanced-blog
- Current Next.js Version: 13.5.6 (downgraded from 15.1.3)
- Package Manager: pnpm
- Main Dependencies:
  - React: 19.0.0
  - React DOM: 19.0.0
  - TypeScript: 5.7.2
  - TailwindCSS: 3.4.17
  - Node Types: 22.10.2
  - next-themes: 0.4.4 (dark mode support)
  - lucide-react: 0.469.0 (icon components)

## Update History
### 2024-12-28
1. Major Framework Updates:
   - Next.js upgraded to v15.1.3
     - Improved performance with server actions
     - Enhanced static and dynamic rendering
     - Partial prerendering (PPR) support
     - Better error overlay and debugging
     - Improved image optimization

   - React & React DOM upgraded to v19.0.0
     - Breaking Changes to Watch:
       - New concurrent rendering features
       - Updated Hooks behavior
       - Strict Mode improvements
       - New suspense features
       - Updated event system

2. Development Environment:
   - Switched to pnpm for better dependency management
   - Updated TypeScript to 5.7.2 with improved type inference
   - TailwindCSS upgraded to 3.4.17
     - New color palette system
     - Extended animation utilities
     - Improved JIT compiler
   - Added missing dependencies:
     - next-themes for dark mode support
     - lucide-react for modern icons

3. Content Processing Updates:
   - Remark ecosystem updated:
     - remark: 15.0.1
     - remark-html: 16.0.1
     - remark-math: 6.0.0
   - rehype-highlight: 7.0.1
     - Improved syntax highlighting
     - New theme options

## Required Code Adjustments
1. Next.js 15 Changes:
   - Review and update app router usage
   - Check server component patterns
   - Update metadata API usage
   - Review image component implementations

2. React 19 Migration Points:
   - Audit use of useEffect for potential updates
   - Review component lifecycle methods
   - Check Suspense boundaries
   - Update event handlers if using synthetic events
   - Test concurrent features compatibility

## Project Features
- Advanced blog functionality
- Uses gray-matter for markdown processing
- SEO optimization with next-seo
- Math rendering with KaTeX
- Syntax highlighting with rehype-highlight v7.0.1
- Search functionality with elasticlunr

## Technical Stack
- Framework: Next.js 13
- Styling: TailwindCSS
- Content: Markdown with various plugins
- Language: TypeScript
- Package Manager: pnpm

## Performance Considerations
- Enable partial prerendering for faster page loads
- Implement React 19 concurrent features where beneficial
- Utilize new Next.js 15 caching strategies
- Take advantage of improved image optimization

## Recent Changes
### 2024-12-28
1. Added missing globals.css:
   - Created app/globals.css with TailwindCSS imports
   - Added base styles for light/dark mode
   - Configured gradient background
   - Set up responsive color schemes

2. Added KaTeX Dependencies:
   - Installed rehype-katex@7.0.1
   - Added katex for math rendering support
   - Configured markdown processing pipeline

3. Fixed TypeScript Issues:
   - Created explicit PostParams and PostSearchParams interfaces
   - Added proper type annotations for all page exports
   - Improved type safety with Promise return types
   - Enhanced params and searchParams typing

4. Fixed Theme Hydration:
   - Added mounted state to ThemeProvider
   - Prevented hydration mismatch with SSR
   - Improved client-side theme initialization
   - Enhanced dark mode switching reliability

5. Framework Version Management:
   - Downgraded Next.js from 15.1.3 to 13.5.6 for better type compatibility
   - Resolved TypeScript compilation issues
   - Maintained app router functionality
   - Improved build stability

6. Enhanced Markdown Processing:
   - Added PostData interface for better type safety
   - Included optional description field in post metadata
   - Improved error handling in getPostData
   - Optimized remark plugin order

7. Git Configuration:
   - Added detailed .next directory exclusions
   - Specified individual build artifacts to ignore
   - Added webpack cache directories
   - Ensured comprehensive build output exclusion

8. Improved Error Handling:
   - Added null check for contentHtml in post pages
   - Enhanced 404 handling for missing content
   - Strengthened type safety in content rendering
   - Improved user experience for missing data

9. Type System Improvements:
   - Exported PostData interface from markdown module
   - Added ElasticLunrThis interface for search
   - Fixed this type annotations in elasticlunr
   - Enhanced search result type safety

## Next Steps
1. Test all routes and components for breaking changes
2. Update error boundaries for new React patterns
3. Implement new Next.js 15 features where applicable
4. Review and update SEO implementation
5. Performance audit with new features