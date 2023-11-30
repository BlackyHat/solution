import ContactUsForm from '@components/ui/ContactUsForm/ContactUsForm';
import CONTACTS_DATA from '@/libs/content/contacts';
import FbIcon from '@assets/icons/icon-fb.svg?react';
import InstaIcon from '@assets/icons/icon-instagram.svg?react';
import PhoneIcon from '@assets/icons/icon-phone.svg?react';
import MapIcon from '@assets/icons/icon-map.svg?react';
import EmailIcon from '@assets/icons/icon-email.svg?react';

import scss from './ContactUs.module.scss';

const ContactUs = () => {
  return (
    <section className={scss.section} id="contact-us-section">
      <h2 className={scss.sectionTitle}>Contact us</h2>
      <ul className={scss.contactList}>
        <li>
          <p className={scss.contactLabel}>Phone:</p>
          <ul className={scss.phoneList}>
            {CONTACTS_DATA.phones.length > 0 &&
              CONTACTS_DATA.phones.map((phone) => (
                <li>
                  <PhoneIcon className={scss.contactIcon} />
                  <p>{phone}</p>
                </li>
              ))}
          </ul>
        </li>
        <li>
          <p className={scss.contactLabel}>E-mail:</p>
          <div className={scss.labelWrapper}>
            <EmailIcon className={scss.contactIcon} />
            <p>{CONTACTS_DATA.email}</p>
          </div>
        </li>

        <li>
          <p className={scss.contactLabel}>Address:</p>
          <div className={scss.labelWrapper}>
            <MapIcon className={scss.contactIcon} />
            <p>{CONTACTS_DATA.address}</p>
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
