import { StaticImageData } from 'next/image';

import Alien from '@/shared/assets/collection/alien.gif';
import Car from '@/shared/assets/collection/car.gif';
import DrManhattan from '@/shared/assets/collection/dr_manhattan.gif';
import Ghostrider from '@/shared/assets/collection/ghostrider.gif';
import GojuSatoro from '@/shared/assets/collection/goju_satoro.gif';
import Greengoblin from '@/shared/assets/collection/greengoblin.gif';
import Itachi from '@/shared/assets/collection/itachi.gif';
import Lich from '@/shared/assets/collection/lich.gif';
import Mario from '@/shared/assets/collection/mario.gif';
import Onepunchman from '@/shared/assets/collection/onepunchman.gif';
import Pacificrim from '@/shared/assets/collection/pacificrim.gif';
import Scream from '@/shared/assets/collection/scream.gif';
import Sonic from '@/shared/assets/collection/sonic.gif';
import Trump from '@/shared/assets/collection/trump.gif';
import Vergil from '@/shared/assets/collection/vergil.gif';

interface Collection {
  alt: string;
  src: StaticImageData;
}

export const collection: Collection[] = [
  {
    alt: 'Alien',
    src: Alien,
  },
  {
    alt: 'Car',
    src: Car,
  },
  {
    alt: 'DrManhattan',
    src: DrManhattan,
  },
  {
    alt: 'Ghostrider',
    src: Ghostrider,
  },
  {
    alt: 'GojuSatoro',
    src: GojuSatoro,
  },
  {
    alt: 'Greengoblin',
    src: Greengoblin,
  },
  {
    alt: 'Itachi',
    src: Itachi,
  },
  {
    alt: 'Lich',
    src: Lich,
  },
  {
    alt: 'Mario',
    src: Mario,
  },
  {
    alt: 'Pacificrim',
    src: Pacificrim,
  },
  {
    alt: 'Scream',
    src: Scream,
  },
  {
    alt: 'Onepunchman',
    src: Onepunchman,
  },
  {
    alt: 'Sonic',
    src: Sonic,
  },
  {
    alt: 'Trump',
    src: Trump,
  },
  {
    alt: 'Vergil',
    src: Vergil,
  },
];
