import { FC } from 'react';
import ResponsiveImg from '@/components/ui/ResponsiveImg/ResponsiveImg';
import Separator from '@/components/ui/Separator/Separator';

import ButtonIcon from '@assets/icons/icon-arrow-left.svg?react';
import scss from './Slide.module.scss';

interface SlideProps {
  name: string;
  title: string;
  desc: string;
  date: string;
}

const Slide: FC<SlideProps> = ({ name, title, desc, date }) => {
  return (
    <div className={scss.slide}>
      <ResponsiveImg name={name} />
      <div className={scss.wrapper}>
        <div className={scss.labelWrapper}>
          <p className={scss.label}>{title}</p>
          <button
            title="More details..."
            aria-label="more details"
            className={scss.btnMore}
          >
            <ButtonIcon className={scss.btnIcon} />
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
