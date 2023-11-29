import { Children, useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import Slide from '../Slide/Slide';
import ButtonIcon from '@assets/arrow2.svg?react';

import './slick.scss';
import './slick-theme.scss';
import scss from './CasesSlider.module.scss';

const SLIDES_DATA = [
  {
    name: 'slide-1',
    title: 'Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”',
    desc: 'Wind Power for auto field irrigation',
    date: 'July 2023',
  },
  {
    name: 'slide-2',
    title: 'Zhytomyr city Private Enterprise “Bosch',
    desc: 'Solar Panels for industrial use',
    date: 'November 2023',
  },
  {
    name: 'slide-3',
    title: 'Rivne city Private Enterprise “Biotech”',
    desc: 'Thermal modules',
    date: 'October 2023',
  },
  {
    name: 'slide-4',
    title: 'Kherson city Private Enterprise “HealthyFarm”',
    desc: 'Wind power',
    date: 'September 2021',
  },
  {
    name: 'slide-5',
    title: 'Zaporizhia city Private Enterprise “Biotech”',
    desc: 'Mini nuclear stations',
    date: 'May 2021',
  },
];

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
      <div className={scss.actionsWrapper}>
        <p>
          <span>{currentSlide + 1}</span> / {totalSlides}
        </p>
        <ul className={scss.actionBtns}>
          <li>
            <button
              type="button"
              className={scss.actionBtnPrev}
              onClick={previous}
            >
              <ButtonIcon className={scss.btnIcon} />
            </button>
          </li>
          <li>
            <button type="button" className={scss.actionBtnNext} onClick={next}>
              <ButtonIcon className={scss.btnIcon} />
            </button>
          </li>
        </ul>
      </div>
      <Slider {...settings} ref={sliderRef}>
        {SLIDES_DATA.length > 0 &&
          SLIDES_DATA.map(({ name, title, desc, date }) => (
            <Slide
              key={title}
              name={name}
              title={title}
              desc={desc}
              date={date}
            />
          ))}
      </Slider>
    </>
  );
};

export default CasesSlider;
