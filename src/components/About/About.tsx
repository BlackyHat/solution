import Separator from '@components/ui/Separator/Separator';
import ResponsiveImg from '@components/ui/ResponsiveImg/ResponsiveImg';

import ABOUT from '@/libs/content/values';
import scss from './About.module.scss';

const About = () => {
  return (
    <section className={scss.section} id="about-section">
      <div className={scss.titleWrapper}>
        <h2 className={scss.sectionTitle}>{ABOUT.title}</h2>
        <p className={scss.sectionInfo}>{ABOUT.description}</p>
      </div>
      <ul className={scss.valuesList}>
        {ABOUT.values.length > 0 &&
          ABOUT.values.map(({ type, alt, name, title, desc, icon }) => {
            if (type === 'poster') {
              return (
                <li key={name} className={scss.valuesPoster}>
                  <ResponsiveImg
                    alt={alt}
                    name={name}
                    className={scss.poster}
                  />
                </li>
              );
            } else {
              const Icon = icon;
              return (
                <li key={title} className={scss.valuesItem}>
                  <div className={scss.valuesItemTitleWrapper}>
                    {Icon && <Icon className={scss.valuesIcon} />}
                    <h3 className={scss.valuesItemTitle}>{title}</h3>
                  </div>
                  <Separator />
                  <p className={scss.valuesItemInfo}>{desc}</p>
                </li>
              );
            }
          })}
      </ul>
    </section>
  );
};

export default About;
