// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Arjit\'s Cybersecurity Blog ⭐',
  tagline: 'Hello :)',
  favicon: 'img/favicon.ico',

  future: { v4: true },

  url: 'https://arjitpraveen.github.io',
  baseUrl: '/',
  organizationName: 'arjitpraveen',
  projectName: 'arjitpraveen.github.io',
  trailingSlash: false,
  deploymentBranch: 'main',
  
  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

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

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: { respectPrefersColorScheme: true },
      navbar: {
        title: 'My Site',
        logo: { alt: 'My Site Logo', src: 'img/logo.svg' },
        items: [
          { type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Tutorial' },
          { to: '/blog', label: 'Blog', position: 'left' },
          { href: 'https://github.com/facebook/docusaurus', label: 'GitHub', position: 'right' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          { title: 'Docs', items: [{ label: 'Tutorial', to: '/docs/intro' }] },
          { title: 'Community', items: [
              { label: 'Stack Overflow', href: 'https://stackoverflow.com/questions/tagged/docusaurus' },
              { label: 'Discord', href: 'https://discordapp.com/invite/docusaurus' },
              { label: 'X', href: 'https://x.com/docusaurus' },
            ] },
          { title: 'More', items: [
              { label: 'Blog', to: '/blog' },
              { label: 'GitHub', href: 'https://github.com/facebook/docusaurus' },
            ] },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: { theme: prismThemes.github, darkTheme: prismThemes.dracula },
    }),
};

export default config;
