import Separator from '@components/ui/Separator/Separator';
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
          ABOUT.values.map(({ title, desc, icon }) => {
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
          })}
      </ul>
    </section>
  );
};

export default About;
