import { FC } from 'react';
import ResponsiveImg from '@/components/ui/ResponsiveImg/ResponsiveImg';
import Separator from '@/components/ui/Separator/Separator';

import ArrowIcon from '@assets/icons/icon-arrow-left.svg?react';
import scss from './Slide.module.scss';

interface SlideProps {
  name: string;
  title: string;
  desc: string;
  date: string;
  onClick: () => void;
}

const Slide: FC<SlideProps> = ({ name, title, desc, date, onClick }) => {
  return (
    <div className={scss.slide}>
      <ResponsiveImg name={name} alt={title} />
      <div className={scss.wrapper}>
        <div className={scss.labelWrapper}>
          <p className={scss.label}>{title}</p>
          <button
            title="More details..."
            aria-label="more details"
            className={scss.btnMore}
            onClick={onClick}
          >
            <ArrowIcon className={scss.btnIcon} aria-label="arrow" />
          </button>
        </div>
        <Separator />
        <p className={scss.meta}>
          <span>{desc}</span>
          <span className={scss.dataBadge}>{date}</span>
        </p>
      </div>
    </div>
  );
};

export default Slide;
