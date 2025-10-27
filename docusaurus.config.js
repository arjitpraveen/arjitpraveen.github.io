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
          { type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Reads' },
          { to: '/blog', label: 'Blog', position: 'left' },
          { href: 'https://www.linkedin.com/in/arjitpraveen', label: 'Stack Smash Squad blog', position: 'right' },
          { href: 'https://www.linkedin.com/in/arjitpraveen', label: 'Linkedin', position: 'right' },
          { href: 'https://github.com/arjitpraveen', label: 'GitHub', position: 'right' },
          { href: 'https://open.spotify.com/playlist/3iwGDEGFGVsPCLvbZde1nn?si=47d7834e5e014679', label: 'Da Beats', position: 'right' },
        ],
      },
      // footer: {
      //   style: 'dark',
      //   links: [
      //     { title: 'Docs', items: [{ label: 'Tutorial', to: '/docs/intro' }] },
      //     // { title: 'Community', items: [
      //     //     { label: 'Stack Overflow', href: 'https://stackoverflow.com/questions/tagged/docusaurus' },
      //     //     { label: 'Discord', href: 'https://discordapp.com/invite/docusaurus' },
      //     //     { label: 'X', href: 'https://x.com/docusaurus' },
      //     //   ] },
      //     { title: 'More', items: [
      //         { label: 'Blog', to: '/blog' },
      //         { label: 'GitHub', href: 'https://github.com/arjitpraveen' },
      //       ] },
      //     { title: 'About Me', items: [
      //         { html: `
      //             <p style="font-size: 0.9rem; margin: 0;">
      //               I'm a retro-loving dev who still runs Windows 95 in a VM. 
      //               I code, collect floppy disks, and believe the Start button is peak UX.
      //             </p>
      //         `,},
      //       ] },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} Made with 💖 by Arjit. Built with Docusaurus.`,
      // },
      footer: {
        style: 'dark',
        links: [
          { title: 'Docs', items: [{ label: 'Tutorial', to: '/docs/intro' }] },
          { title: 'More', items: [
              { label: 'Blog', to: '/blog' },
              { label: 'GitHub', href: 'https://github.com/arjitpraveen' },
            ] },
          {
            title: 'About Me',
            items: [
              {
                html: `
                  <div style="
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    font-family: 'MS Sans Serif', Tahoma, sans-serif;
                    font-size: 11px;
                    line-height: 1.4;
                  ">
                    <img 
                      src="https://media.licdn.com/dms/image/v2/D4D03AQEyfZ7sGr6kog/profile-displayphoto-scale_400_400/B4DZfjWKaeHMAg-/0/1751865928444?e=1762992000&v=beta&t=ljFJlsM9XrgwyaO9p5KQpcJJL8xaDGu7ol5MurqxpL8" 
                      alt="Arjit" 
                      width="64" 
                      height="64" 
                    />
                    <div>
                      <strong>Arjit Praveen</strong><br/>
                      Cybersecurity enthusiast proficient in Python, Bash and C, <br/>
                      Interested in penetration testing and malware analysis. <br/> 
                      Enjoys participating in CTF competitions, doing math and reading in pastime.
                    </div>
                  </div>
                `,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Made with 💖 by Arjit. Built with Docusaurus.`,
      },
      prism: { theme: prismThemes.github, darkTheme: prismThemes.dracula },
    }),
};

export default config;
