'use client'

import React, { useCallback, useEffect, useRef } from 'react'
import Image from 'next/image'
import { PromoCard } from '@/types/interfaces'

// embla
import useEmblaCarousel from 'embla-carousel-react'

import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType
} from 'embla-carousel'
import ClassNames from 'embla-carousel-class-names'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
  // NextButton,
  // PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'

//interfaces
interface PromoCarouselProps {
  PromoCard: PromoCard[]
}

// constants
const options: EmblaOptionsType = { loop: true }
const TWEEN_FACTOR_BASE = 0.1

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max)

const MainPageCarousel: React.FC<PromoCarouselProps> = ({ PromoCard }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [ClassNames()])
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)
  const {
    // prevBtnDisabled,
    // nextBtnDisabled,
    // onPrevButtonClick,
    // onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const tweenFactor = useRef(0)
  const tweenNodes = useRef<HTMLElement[]>([])

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map(slideNode => {
      return slideNode.querySelector('.embla__slide__img') as HTMLElement
    })
  }, [])

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
  }, [])

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     emblaApi?.scrollNext(); // Scroll to the next item
  //   }, 5000);

  //   return () => clearInterval(interval); // Clean up the interval on unmount
  // }, [emblaApi]);

  const tweenScale = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine()
      const scrollProgress = emblaApi.scrollProgress()
      const slidesInView = emblaApi.slidesInView()
      const isScrollEvent = eventName === 'scroll'

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress
        const slidesInSnap = engine.slideRegistry[snapIndex]

        slidesInSnap.forEach(slideIndex => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach(loopItem => {
              const target = loopItem.target()

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target)

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress)
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress)
                }
              }
            })
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
          const scale = numberWithinRange(tweenValue, 0, 1).toString()
          const tweenNode = tweenNodes.current[slideIndex]
          tweenNode.style.transform = `scale(${scale})`
        })
      })
    },
    []
  )

  useEffect(() => {
    if (!emblaApi) return

    setTweenNodes(emblaApi)
    setTweenFactor(emblaApi)
    tweenScale(emblaApi)

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenScale)
      .on('scroll', tweenScale)
      .on('slideFocus', tweenScale)
  }, [emblaApi, tweenScale])

  return (
    <section className='embla'>
      <div
        className='embla__viewport pt-16 pb-2 cursor-grab active:cursor-grabbing'
        ref={emblaRef}
      >
        <div className='embla__container'>
          {/* cards with badges */}
          {PromoCard.map((PromoCard, index) => (
            <div
              className={`embla__slide !basis-auto flex justify-center items-center`}
              key={index}
            >
              {/* w-[1200px] h-[425px] */}
              <div
                className='embla__slide__img flex-col md:flex-row pb-[60px] md:pb-0 h-[387px] md:h-[320px] lg:h-[336px] w-[350px] md:w-[680px] lg:w-[920px]
               2xl:h-[450px] 2xl:w-[1120px]'
              >
                <Image
                  className='inset-0 -z-10'
                  src={PromoCard.bgUrl}
                  alt='gradient background'
                  fill={true}
                />

                {/* poster section */}
                <div className='w-full h-full z-10 md:order-2 '>
                  <div className='relative h-[168px] w-[350px] md:h-[100%] md:w-[90%] block'>
                    <Image
                      src={PromoCard.imgUrl}
                      alt={'Promo Poster'}
                      fill={true}
                      style={{ objectFit: 'contain', scale: '115%' }} // Ensures the aspect ratio is maintained
                    />
                  </div>
                </div>

                {/* promo text section */}
                <div
                  className='z-10 !basis-[50%] flex flex-col items-center mx-auto mb-0 font-semibold text-center text-[70px] leading-[100%] md:flex-grow-0 md:flex-shrink-0 md:basis-auto
                md:w-[50%] md:m-0'
                >
                  <div
                    className='flex items-center justify-center w-[138px] h-[25px] mt-[25px] mx-0 mb-[10px] bg-[#ffffff1a] rounded-[79px]
                  md:w-[155px] md:h-[30px] md:mt-0 md:mx-0 md:mb-[15px] lg:w-[170px] lg:h-[33px] 2xl:w-[236px] 2xl:h-[41px]'
                  >
                    <span className='text-[12px] leading-[140%] text-white md:text-[13px] lg:text-[15px] 2xl:text-[21px]'>
                      {PromoCard.badgeText}
                    </span>
                  </div>

                  <span className='font-extrabold leading-[140%] text-white mt-0 mx-[10px] mb-[15px]  text-[25px] lg:text-[32px] lg:max-w-[75%] 2xl:text-[42px] '>
                    {PromoCard.promoTitle}
                  </span>

                  <button
                    className='flex items-center justify-center text-center rounded-[10px]  
                  cursor-pointer transition-all duration-[.2s] ease-in-out h-[50px] bg-[#ff0960] w-[250px] mb-[20px] mx-auto mt-0 md:w-[200px] lg:w-[250px] 2xl:w-[340px]'
                  >
                    <span className='text-white font-bold text-center uppercase text-[18px] tracking-[0.06em]'>
                      {PromoCard.buttonText}
                    </span>
                  </button>

                  <div className='py-0 px-[10px] font-medium text-[13px] leading-[140%] md:max-w-[80%] md:my-0 md:mx-auto lg:text-[15px]'>
                    <span className='text-white'>
                      {PromoCard.promoDescription}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* card with no badge (different styling) */}
          <div
            className={`embla__slide !basis-auto flex justify-center items-center`}
          >
            {/* w-[1200px] h-[425px] */}
            <div
              className='embla__slide__img flex-col md:flex-row pb-[60px] md:pb-0 h-[387px] md:h-[320px] lg:h-[336px] w-[350px] md:w-[680px] lg:w-[920px]
               2xl:h-[450px] 2xl:w-[1120px]'
            >
              <Image
                className='inset-0 -z-10'
                src={'/assets/promos/bg1.svg'}
                alt='gradient background'
                fill={true}
              />

              {/* poster section */}
              <div className='w-full h-full z-10 md:order-2 '>
                <div className='relative h-[168px] w-[350px] md:h-[100%] md:w-[90%] block'>
                  <Image
                    src={'/assets/promos/img5.webp'}
                    alt={'Promo Logo'}
                    fill={true}
                    style={{ objectFit: 'contain', scale: '115%' }} // Ensures the aspect ratio is maintained
                  />
                </div>
              </div>

              {/* promo text section */}
              <div
                className='z-10 !basis-[50%] flex flex-col items-center mx-auto mb-0 font-semibold text-center text-[70px] leading-[100%] md:flex-grow-0 md:flex-shrink-0 md:basis-auto
                md:w-[50%] md:m-0'
              >
                <span className='font-extrabold leading-[140%] text-white mb-[-10px] mx-[10px]  text-[64px] xl:text-[100px] 2xl:text-[115px] xl:mb-[-20px] lg:max-w-[75%]'>
                  <p className=''>{'400%'}</p>
                </span>

                <span className='font-medium leading-[140%] text-white mt-0 mx-[10px] mb-[15px]  text-[21px] md:text-[24px] lg:max-w-[75%] 2xl:text-[36px] '>
                  {'Up to €1,000 / 1 BTC '}
                </span>

                <button
                  className='flex items-center justify-center text-center rounded-[10px]  
                  cursor-pointer transition-all duration-[.2s] ease-in-out h-[50px] bg-[#ff0960] w-[250px] mb-[20px] mx-auto mt-0 md:w-[200px] lg:w-[250px] 2xl:w-[340px]'
                >
                  <span className='text-white font-bold text-center uppercase text-[18px] tracking-[0.06em]'>
                    {'GET IT NOW'}
                  </span>
                </button>

                <div className='py-0 px-[10px] font-medium text-[13px] leading-[140%] md:max-w-[80%] md:my-0 md:mx-auto lg:text-[15px]'>
                  <span className='text-white'>
                    {
                      'Increase your chances of winning big with a 400% welcome bonus (up to €1,000 / 1 BTC). New players only. Bonus terms apply.'
                    }
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='embla__controls'>
        {/* <div className='embla__buttons'>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div> */}

        <div className='embla__dots'>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default MainPageCarousel
