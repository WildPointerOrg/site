export const SITE = {
  name: 'WildPointer',
  title: 'WildPointer — Open Community Building Open-Source Products',
  description:
    'Open volunteer community building real open-source products through transparent collaboration.',
  github: 'https://github.com/wildwildpointer',
  telegram: 'https://t.me/chechestor',
  email: 'mailto:wildwildpointer@gmail.com',
  linkedin: 'https://www.linkedin.com/company/wildpointer',
  registry:
    'https://docs.google.com/document/d/175_0ydccuobLuq9lwsbwxwha74-dvb0JUyEoPQ0k4OU/edit?usp=drive_link',
  drive: 'https://drive.google.com/drive/folders/1BtWFqoJgypN-O1KAxZ4StLzoNHQOomFE?usp=drive_link',
  miro: 'https://miro.com/app/board/uXjVGkdA9jc=/?share_link_id=967284923762',
  /** Placeholder until integrated with community metrics */
  memberCount: 15,
  /** Public form for contributors (view URL; same form as the Google Forms editor link) */
  contributorFormUrl:
    'https://docs.google.com/forms/d/1AY6j3WVeqDKPmuSzvTryYdFpK4cPb38EaiGUInWtauk/viewform'
} as const;

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'SDLC', href: '/sdlc/' },
  { label: 'Roles', href: '/roles/' },
  { label: 'Join', href: '/join/' },
  { label: 'GitHub', href: SITE.github, external: true }
] as const;
