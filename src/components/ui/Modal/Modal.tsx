import { useEffect, FC, MouseEvent } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import scss from './Modal.module.scss';
interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}
interface KeyboardEvent {
  key: string;
}

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
};

const Modal: FC<ModalProps> = ({ onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') {
        onClose && onClose();
      }
      return;
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleClickBackdrop = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose && onClose();
    }
  };

  return createPortal(
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={scss.modalOverlay}
        onClick={handleClickBackdrop}
      ></motion.div>
      <motion.div
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={scss.modalBody}
      >
        {children}
      </motion.div>
    </>,
    document.getElementById('portal') as HTMLElement
  );
};

export default Modal;
