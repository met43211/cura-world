import { AdaptiveLayout } from '@/shared/ui/layouts/adaptive-layout';
import { InViewAnimationLayout } from '@/shared/ui/layouts/in-view-animation-layout/in-view-animation-layout';
import { About } from '@/widgets/about';
import { Collection } from '@/widgets/collection';
import { Contacts } from '@/widgets/constacts';
import { Details } from '@/widgets/details';
import { FAQBlock } from '@/widgets/faq';
import { Hero } from '@/widgets/hero';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <AdaptiveLayout>
        <InViewAnimationLayout>
          <About />
        </InViewAnimationLayout>
      </AdaptiveLayout>
      <InViewAnimationLayout>
        <Collection />
      </InViewAnimationLayout>
      <AdaptiveLayout>
        <InViewAnimationLayout>
          <Details />
        </InViewAnimationLayout>
        <InViewAnimationLayout>
          <FAQBlock />
        </InViewAnimationLayout>
        <InViewAnimationLayout>
          <Contacts />
        </InViewAnimationLayout>
      </AdaptiveLayout>
    </>
  );
};
