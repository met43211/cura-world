import { AdaptiveLayout } from '@/shared/ui/layouts/adaptive-layout';
import { InViewAnimationLayout } from '@/shared/ui/layouts/in-view-animation-layout/in-view-animation-layout';
import { About } from '@/widgets/about';
import { Hero } from '@/widgets/hero';

export const HomePage = () => {
  return (
    <AdaptiveLayout>
      <InViewAnimationLayout>
        <Hero />
      </InViewAnimationLayout>

      <InViewAnimationLayout>
        <About />
      </InViewAnimationLayout>
    </AdaptiveLayout>
  );
};
