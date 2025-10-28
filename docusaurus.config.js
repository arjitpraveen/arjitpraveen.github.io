// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Arjit\'s Cybersecurity Blog ⭐',
  tagline: 'My notes, case studies, activities/projects and CTF write-ups! ',
  favicon: 'img/favicon.ico',

  future: { v4: true },

  url: 'https://arjitpraveen.github.io',
  baseUrl: '/',
  organizationName: 'arjitpraveen',
  projectName: 'arjitpraveen.github.io',
  trailingSlash: false,
  
  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // ============================================== PRESETS ==============================================
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/arjitpraveen/arjitpraveen.github.io/edit/main/docs/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: { type: ['rss', 'atom'], xslt: true },
          editUrl:
            'https://github.com/arjitpraveen/arjitpraveen.github.io/edit/main/blog/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: { customCss: './src/css/custom.css' },
      }),
    ],
  ],

  themes: ['@docusaurus/theme-mermaid'],

  markdown: {
    mermaid: true,
  },

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        indexDocs: true,
        indexBlog: true,
        language: ['en'],
        hashed: true,
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'ctf-guide',
        path: 'ctf-guide',
        routeBasePath: 'ctf-guide',
        sidebarPath: require.resolve('./sidebars_ctf.js'),
        editUrl:
          'https://github.com/arjitpraveen/arjitpraveen.github.io/edit/main/ctf-guide/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'archive',
        path: 'archive',
        routeBasePath: 'archive',
        sidebarPath: require.resolve('./sidebars_archive.js'),
        editUrl:
          'https://github.com/arjitpraveen/arjitpraveen.github.io/edit/main/archive-notes/',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: { defaultMode: 'dark', disableSwitch: true, respectPrefersColorScheme: true },
      navbar: {
        title: 'Arjit Praveen',
        logo: { alt: 'My Site Logo', src: 'img/tacnayn.webp' },
        items: [
          // ----------- left links -----------
          { type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Reads' },
          { to: '/blog', label: 'Blog', position: 'left' },
          { to: '/ctf-guide/intro', label: 'CTF Guide', position: 'left' },
          { to: '/archive/intro', label: 'Archive', position: 'left' },
          // ---------- right links ----------
          { href: 'https://www.linkedin.com/in/arjitpraveen', label: 'Linkedin', position: 'right' },
          { href: 'https://github.com/arjitpraveen', label: 'GitHub', position: 'right' },
          { href: 'https://open.spotify.com/playlist/3iwGDEGFGVsPCLvbZde1nn?si=47d7834e5e014679', label: 'Da Beats', position: 'right' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          { title: 'Docs', items: [{ label: 'Tutorial', to: '/docs/intro' }] },
          { title: 'More', items: [
              { label: 'Blog', to: '/blog' },
              { label: 'GitHub', href: 'https://github.com/arjitpraveen' },
            ] },
          { title: 'About Me', items: [
              { html: `
                  <p style="font-size: 0.9rem; margin: 0;">
                    Cybersecurity enthusiast and aspiring <span style="color:red;">red teamer</span> with a passion in pentesting and malware analysis. I'm proficient in Python, bash and C. And enjoy participating in CTFs, reading, and doing math.
                  </p>
              `,},
            ] },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Made with 💖 by Arjit. Built with Docusaurus.`,
      },
      
      prism: { theme: prismThemes.github, darkTheme: prismThemes.vsDark, additionalLanguages: ['bash'] },
    }),
};

export default config;
