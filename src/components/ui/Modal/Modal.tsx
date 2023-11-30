import { useEffect, FC, MouseEvent } from 'react';
import { createPortal } from 'react-dom';
import scss from './Modal.module.scss';

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}
interface KeyboardEvent {
  key: string;
}

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
      <div className={scss.modalOverlay} onClick={handleClickBackdrop}></div>
      <div className={scss.modalBody}>{children}</div>
    </>,
    document.getElementById('portal') as HTMLElement
  );
};

export default Modal;
