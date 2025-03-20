import Image from 'next/image';

import RoadMapImg from '@/shared/assets/roadmap.png';

export const DesktopMap = () => {
  return (
    <>
      <Image alt='roadmap' className='w-full brightness-[80%]' src={RoadMapImg} />
      <div className='absolute top-16 w-64 text-center left-1/2 -translate-x-1/2 -ml-14'>
        Cura Genesis Collection.
        <br />
        Collection supply 100, all animated and 1/1
      </div>
      <div className='absolute top-[19.5rem] right-16 w-64 text-center'>
        Game development for Genesis Collection holders.
        <br />
        Available locations: Dungeons
        <br />
        Rewards: Coins, Gems, Airdrops, Whitelists, Ordinals of other collections
      </div>
      <div className='absolute top-[19rem] left-64 w-64 text-center'>
        Preparing for the creation of a second gen.
        <br />
        Drawing of the collection, Marketing, Events
      </div>
      <div className='absolute top-1/2 mt-12 w-64 text-center left-36'>
        Shop in game.
        <br />
        Ability to buy whitelists and airdrops for second gen for coins
      </div>
      <div className='absolute top-1/2 mt-4 w-64 text-center right-72'>
        Arena.
        <br />A public location in the game with a leaderboard
        <br />
        Rewards: Whitelists for the second Cura gen
      </div>
      <div className='absolute bottom-40 text-center right-48'>
        Release of the second gen.
        <br />
        TBA
      </div>
      <div className='absolute left-1/2 -translate-x-1/2 -ml-12 -bottom-12'>
        Continuing the adventure.
      </div>
    </>
  );
};
