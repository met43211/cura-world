import { Discord } from '@/shared/assets/icons/discord';
import { ME } from '@/shared/assets/icons/me';
import { X } from '@/shared/assets/icons/x';

interface SocialMedia {
  href: string;
  icon: React.ReactNode;
}
export const socialMedia: SocialMedia[] = [
  { href: 'https://discord.gg/fKq5ubFWGn', icon: <Discord /> },
  { href: 'https://x.com/OrdinalsCura', icon: <X /> },
  { href: 'https://magiceden.io/ordinals/marketplace/cura', icon: <ME /> },
];
