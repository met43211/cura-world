import { Discord } from '@/shared/assets/icons/discord';
import { ME } from '@/shared/assets/icons/me';
import { X } from '@/shared/assets/icons/x';

interface SocialMedia {
  href: string;
  icon: React.ReactNode;
}
export const socialMedia: SocialMedia[] = [
  { href: 'ewf', icon: <Discord /> },
  { href: 'wfe', icon: <X /> },
  { href: 'wefg', icon: <ME /> },
];
