import { FC } from 'react';

import PlusIcon from '@assets/icons/icon-plus.svg?react';
import MinusIcon from '@assets/icons/icon-minus.svg?react';
import Separator from '@/components/ui/Separator/Separator';
import scss from './Accordion.module.scss';

interface AccordionProps {
  question: string;
  answer: string;
  isActive: boolean;
  setActive: () => void;
}

const Accordion: FC<AccordionProps> = ({
  isActive,
  question,
  answer,
  setActive,
}) => {
  return (
    <li className={scss.accordionItem}>
      <Separator />
      <div className={scss.titleWrapper} onClick={setActive}>
        {isActive ? (
          <MinusIcon className={scss.iconMinus} aria-label="close" />
        ) : (
          <PlusIcon className={scss.iconPlus} aria-label="show" />
        )}
        <p className={scss.accordionTitle}>{question}</p>
      </div>
      {isActive && <p className={scss.accordionInfo}>{answer}</p>}
    </li>
  );
};

export default Accordion;
