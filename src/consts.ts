import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'arjit',
  description:
    'Personal website to record learing progress.',
  href: 'https://chr0mazone.github.io',
  author: 'arjit',
  locale: 'en-US',
  featuredPostCount: 4,
  postsPerPage: 5,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/',
    label: 'home'
  },
  {
    href: '/blog',
    label: 'blog',
  },
  // {
  //   href: '/authors',
  //   label: 'authors',
  // },
  {
    href: '/about',
    label: 'about',
  },
  {
    href: '/tags',
    label: 'tags',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/chr0mazone',
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/arjitpraveen/',
    label: 'LinkedIn',
  },
  // {
  //   href: 'mailto:jason@enscribe.dev',
  //   label: 'Email',
  // },
  // {
  //   href: '/rss.xml',
  //   label: 'RSS',
  // },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}

// export type Site = {
//   TITLE: string
//   DESCRIPTION: string
//   EMAIL: string
//   NUM_POSTS_ON_HOMEPAGE: number
//   POSTS_PER_PAGE: number
//   SITEURL: string
// }

export type Link = {
  href: string
  label: string
  external?: boolean
}
