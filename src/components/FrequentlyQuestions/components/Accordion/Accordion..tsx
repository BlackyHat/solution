import { FC } from 'react';
import scss from './Accordion.module.scss';
import PlusIcon from '@assets/plus.svg?react';
import MinusIcon from '@assets/minus.svg?react';
import Separator from '@/components/ui/Separator/Separator';

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
          <MinusIcon className={scss.iconMinus} />
        ) : (
          <PlusIcon className={scss.iconPlus} />
        )}
        <p className={scss.accordionTitle}>{question}</p>
      </div>
      {isActive && <p className={scss.accordionInfo}>{answer}</p>}
    </li>
  );
};

export default Accordion;
