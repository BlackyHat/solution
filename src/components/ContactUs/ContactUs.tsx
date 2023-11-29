import ContactUsForm from '@components/ui/ContactUsForm/ContactUsForm';

import FbIcon from '@assets/facebook-icon.svg?react';
import InstaIcon from '@assets/instagram-icon.svg?react';
import PhoneIcon from '@assets/call.svg?react';
import MapIcon from '@assets/map.svg?react';
import EmailIcon from '@assets/sms.svg?react';

import scss from './ContactUs.module.scss';

const ContactUs = () => {
  return (
    <section className={scss.section}>
      <h2 className={scss.sectionTitle}>Contact us</h2>
      <ul className={scss.contactList}>
        <li>
          <p className={scss.contactLabel}>Phone:</p>
          <ul className={scss.phoneList}>
            <li>
              <PhoneIcon className={scss.contactIcon} />
              <p>38 (098) 12 34 567</p>
            </li>
            <li>
              <PhoneIcon className={scss.contactIcon} />
              <p>38 (093) 12 34 567</p>
            </li>
          </ul>
        </li>
        <li>
          <p className={scss.contactLabel}>E-mail:</p>
          <div className={scss.labelWrapper}>
            <EmailIcon className={scss.contactIcon} />
            <p>office@ecosolution.com</p>
          </div>
        </li>

        <li>
          <p className={scss.contactLabel}>Address:</p>
          <div className={scss.labelWrapper}>
            <MapIcon className={scss.contactIcon} />
            <p>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
          </div>
        </li>
        <li>
          <p className={scss.contactLabel}>Social Networks:</p>
          <ul className={scss.socialList}>
            <li>
              <a href="" className={scss.socialLink}>
                <FbIcon />
              </a>
            </li>
            <li>
              <a href="" className={scss.socialLink}>
                <InstaIcon />
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <ContactUsForm />
    </section>
  );
};

export default ContactUs;
