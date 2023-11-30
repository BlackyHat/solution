import { FC } from 'react';
import scss from './BurgerMenu.module.scss';
import Modal from '@components/ui/Modal/Modal';
import CloseIcon from '@assets/close-icon.svg?react';
import ArrowIcon from '@assets/arrow2.svg?react';
import FbIcon from '@assets/facebook-icon.svg?react';
import InstaIcon from '@assets/instagram-icon.svg?react';

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
            <li>
              <a href="#main-section" title="Main" onClick={onClose}>
                <span>Main</span>
                <ArrowIcon className={scss.arrowBtnIcon} />
              </a>
            </li>
            <li>
              <a href="#about-section" title="About" onClick={onClose}>
                <span>About</span>
                <ArrowIcon className={scss.arrowBtnIcon} />
              </a>
            </li>
            <li>
              <a href="#cases-section" title="Cases" onClick={onClose}>
                <span>Cases</span>
                <ArrowIcon className={scss.arrowBtnIcon} />
              </a>
            </li>
            <li>
              <a href="#faq-section" title="FAQ" onClick={onClose}>
                <span>FAQ</span>
                <ArrowIcon className={scss.arrowBtnIcon} />
              </a>
            </li>
            <li>
              <a
                href="#contact-us-section"
                title="Contact Us"
                onClick={onClose}
              >
                <span>Contact Us</span>
                <ArrowIcon className={scss.arrowBtnIcon} />
              </a>
            </li>
          </ul>
        </div>
        <ul className={scss.socialList}>
          <li>
            <a href="" className={scss.socialLink}>
              <FbIcon className={scss.socialFB} />
            </a>
          </li>
          <li>
            <a href="" className={scss.socialLink}>
              <InstaIcon className={scss.socialInsta} />
            </a>
          </li>
        </ul>
      </div>
    </Modal>
  );
};

export default BurgerMenu;
