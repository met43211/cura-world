'use client';

import React, { useCallback } from 'react';
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';

import { DotButton, useDotButton } from './dot-buttons';
import { NextButton, PrevButton, usePrevNextButtons } from './arrow-buttons';

import './styles.css';
import { Flex } from '../flex';

type PropType = {
  slides: React.ReactNode[];
  options?: EmblaOptionsType;
};

const Carousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;

    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false ? autoplay.reset : autoplay.stop;

    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi, onNavButtonClick);

  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi, onNavButtonClick);

  return (
    <section className='embla'>
      <Flex align='center' className='md:mb-8 mb-16' justify='end'>
        <Flex width='fit' className='hidden md:flex'>
          <PrevButton onClick={onPrevButtonClick} />
          <NextButton onClick={onNextButtonClick} />
        </Flex>
      </Flex>

      <div ref={emblaRef} className='embla__viewport'>
        <div className='embla__container'>
          {slides.map((slide, index) => (
            <div key={index} className='embla__slide'>
              <div className='embla__slide-content'>{slide}</div>
              <div className='w-[calc(100%-16px)] h-full bg-primary rounded-pixel-xl absolute top-0 -z-10 left-2' />
            </div>
          ))}
        </div>
      </div>

      <div className='embla__dots'>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            className={'embla__dot'.concat(index === selectedIndex ? ' embla__dot--selected' : '')}
            onClick={() => onDotButtonClick(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;
