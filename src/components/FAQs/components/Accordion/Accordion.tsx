import { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
const dropIn = {
  hidden: {
    y: '-60%',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.2,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '60%',
    opacity: 0,
  },
};

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
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {isActive && (
          <motion.p
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={scss.accordionInfo}
          >
            {answer}
          </motion.p>
        )}
      </AnimatePresence>
    </li>
  );
};

export default Accordion;
