import Image from 'next/image';

import RoadMapPhone from '@/shared/assets/roadmap_tablet.png';

export const PhoneMap = () => {
  return (
    <>
      <Image alt='roadmap' className='w-full brightness-75 block' src={RoadMapPhone} />
      <div className='absolute top-16 w-48 text-center left-1/2 -translate-x-1/2 -ml-16 text-xs'>
        Cura Genesis Collection.
        <br />
        Collection supply 100, all animated and 1/1
      </div>
      <div className='absolute top-32 -right-8 w-48 text-xs text-center'>
        Game development for Genesis Collection holders.
        <br />
        Available locations: Dungeons
        <br />
        Rewards: Coins, Gems, Airdrops...
      </div>
      <div className='absolute top-48 left-0 text-xs w-40 text-center'>
        Preparing for the creation of a second gen.
        <br />
        Drawing of the collection, Marketing, Events
      </div>
      <div className='absolute top-1/2 -mt-2 w-40 text-xs text-center right-4'>
        Shop in game.
        <br />
        Ability to buy whitelists and airdrops for second gen for coins
      </div>
      <div className='absolute top-1/2 mt-12 w-48 text-xs text-center -left-6'>
        Arena.
        <br />A public location in the game with a leaderboard
        <br />
        Rewards: Whitelists for the second Cura gen
      </div>
      <div className='absolute bottom-20 right-12 text-xs text-center w-32'>
        Release of the second gen.
        <br />
        TBA
      </div>
      <div className='absolute left-1/2 text-xs -translate-x-1/2 -ml-2 -bottom-6'>
        Continuing the adventure.
      </div>
    </>
  );
};
