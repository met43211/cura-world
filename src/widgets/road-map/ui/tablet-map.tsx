import Image from 'next/image';

import RoadMapTablet from '@/shared/assets/roadmap_tablet.png';

export const TabletMap = () => {
  return (
    <>
      <Image alt='roadmap' className='w-full brightness-[80%] block' src={RoadMapTablet} />
      <div className='absolute top-48 w-64 text-center left-1/2 -translate-x-1/2 -ml-40'>
        Cura Genesis Collection.
        <br />
        Collection supply 100, all animated and 1/1
      </div>
      <div className='absolute top-96 right-20 w-64 text-center'>
        Game development for Genesis Collection holders.
        <br />
        Available locations: Dungeons
        <br />
        Rewards: Coins, Gems, Airdrops, Whitelists, Ordinals of other collections
      </div>
      <div className='absolute top-[33rem] left-24 w-64 text-center'>
        Preparing for the creation of a second gen.
        <br />
        Drawing of the collection, Marketing, Events
      </div>
      <div className='absolute top-1/2 mt-6 w-64 text-center right-24'>
        Shop in game.
        <br />
        Ability to buy whitelists and airdrops for second gen for coins
      </div>
      <div className='absolute top-1/2 mt-44 w-64 text-center left-20'>
        Arena.
        <br />A public location in the game with a leaderboard
        <br />
        Rewards: Whitelists for the second Cura gen
      </div>
      <div className='absolute bottom-60 text-center right-40'>
        Release of the second gen.
        <br />
        TBA
      </div>
      <div className='absolute left-1/2 -translate-x-1/2 -ml-8 -bottom-12'>
        Continuing the adventure.
      </div>
    </>
  );
};
