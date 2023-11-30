import { useEffect, FC, MouseEvent, KeyboardEvent } from 'react';
import { createPortal } from 'react-dom';
import scss from './Modal.module.scss';

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose && onClose();
      }
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
  // const handleClose = (e: MouseEvent<HTMLButtonElement>) => {
  //   if (e.target === e.currentTarget) {
  //     onClose && onClose();
  //   }
  // };

  return createPortal(
    <>
      <div className={scss.modalOverlay} onClick={handleClickBackdrop}></div>
      <div className={scss.modalBody}>
        {/* <button onClick={handleClose} className={scss.closeButton}>
          <PlusIcon className={scss.closeButtonIcon} />
        </button> */}
        {children}
      </div>
    </>,
    document.getElementById('portal') as HTMLElement
  );
};

export default Modal;
