import { FC } from 'react';
import Modal from '@components/ui/Modal/Modal';
import SocialLinks from '@components/ui/SocialLinks/SocialLinks';

import CloseIcon from '@assets/icons/icon-close.svg?react';
import ArrowIcon from '@assets/icons/icon-arrow.svg?react';

import scss from './BurgerMenu.module.scss';
import NAV from '@/libs/content/nav';

interface BurgerMenuProps {
  onClose: () => void;
}

const BurgerMenu: FC<BurgerMenuProps> = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <div className={scss.wrapper}>
        <div>
          <button type="button" className={scss.closeBtn} onClick={onClose}>
            <CloseIcon className={scss.closeBtnIcon} />
            <span>close</span>
          </button>
          <ul className={scss.navList}>
            {NAV.length > 0 &&
              NAV.map(({ title, link }) => (
                <li>
                  <a href={`#${link}-section`} title={title} onClick={onClose}>
                    <span>{title}</span>
                    <ArrowIcon className={scss.arrowBtnIcon} />
                  </a>
                </li>
              ))}
          </ul>
        </div>
        <SocialLinks color="white" />
      </div>
    </Modal>
  );
};

export default BurgerMenu;
