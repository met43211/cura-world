import { BlocksLinks } from '@/shared/model/blocks-links';

interface NavLink {
  title: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { title: 'about', href: BlocksLinks.ABOUT },
  { title: 'roadmap', href: BlocksLinks.ROADMAP },
  { title: 'collection', href: BlocksLinks.COLLECTION },
  { title: 'details', href: BlocksLinks.DETAILS },
  { title: 'faq', href: BlocksLinks.FAQ },
  { title: 'contacts', href: BlocksLinks.CONTACTS },
];
