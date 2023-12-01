import { Children, useState, useRef, useEffect, useMemo } from 'react';
import Slider from 'react-slick';

import Slide from '../Slide/Slide';
import CASES from '@/libs/content/cases';
import ArrowIcon from '@assets/icons/icon-arrow-left.svg?react';

import './slick.scss';
import './slick-theme.scss';
import scss from './CasesSlider.module.scss';

const CasesSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [totalSlides, setTotalSlides] = useState(0);
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    if (sliderRef.current) {
      const childrenCount = Children.count(sliderRef.current.props.children);
      setTotalSlides(childrenCount);
    }
  }, []);
  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const formattedNumber = (num: number) => String(num).padStart(2, '0');
  const memoizedSLides = useMemo(() => {
    return [...CASES.slides];
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    afterChange: (current: number) => setCurrentSlide(current),
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          swipeToSlide: true,
        },
      },
    ],
  };

  return (
    <>
      <div className={scss.titleWrapper}>
        <h2 className={scss.sliderTitle}>{CASES.title}</h2>
        <div className={scss.actionsWrapper}>
          <p>
            <span>{formattedNumber(currentSlide + 1)}</span> /
            {formattedNumber(totalSlides)}
          </p>
          <ul className={scss.actionBtns}>
            <li>
              <button
                type="button"
                className={scss.actionBtnPrev}
                onClick={previous}
              >
                <ArrowIcon className={scss.btnIcon} aria-label="previous" />
              </button>
            </li>
            <li>
              <button
                type="button"
                className={scss.actionBtnNext}
                onClick={next}
              >
                <ArrowIcon className={scss.btnIcon} aria-label="next" />
              </button>
            </li>
          </ul>
        </div>
      </div>

      <Slider {...settings} ref={sliderRef}>
        {memoizedSLides.length > 0 &&
          memoizedSLides.map(({ name, title, desc, date }) => (
            <Slide
              key={title}
              name={name}
              title={title}
              desc={desc}
              date={date}
              onClick={next}
            />
          ))}
      </Slider>
    </>
  );
};

export default CasesSlider;
