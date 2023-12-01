import ContactUsForm from '@components/ui/ContactUsForm/ContactUsForm';
import CONTACTS_DATA from '@/libs/content/contacts';
import PhoneIcon from '@assets/icons/icon-phone.svg?react';
import MapIcon from '@assets/icons/icon-map.svg?react';
import EmailIcon from '@assets/icons/icon-email.svg?react';

import scss from './ContactUs.module.scss';
import SocialLinks from '../ui/SocialLinks/SocialLinks';

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
                <li key={phone}>
                  <a href={`tel:${phone}`}>
                    <PhoneIcon className={scss.contactIcon} />
                    {phone}
                  </a>
                </li>
              ))}
          </ul>
        </li>
        <li>
          <p className={scss.contactLabel}>E-mail:</p>
          <a href={`mailto:${CONTACTS_DATA.email}`}>
            <EmailIcon className={scss.contactIcon} />
            {CONTACTS_DATA.email}
          </a>
        </li>

        <li>
          <p className={scss.contactLabel}>Address:</p>
          <a
            href={`http://maps.google.com/?q=:${CONTACTS_DATA.address}`}
            target="_blank"
            rel="noreferrer"
          >
            <MapIcon className={scss.contactIcon} />
            {CONTACTS_DATA.address}
          </a>
        </li>
        <li>
          <p className={scss.contactLabel}>Social Networks:</p>
          <SocialLinks linkStyle={{ padding: '12px' }} />
        </li>
      </ul>
      <ContactUsForm />
    </section>
  );
};

export default ContactUs;
