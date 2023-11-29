import Separator from '../ui/Separator/Separator';
import scss from './About.module.scss';
import ValueIcon from '../../assets/value-icon-1.svg?react';
import ValueIcon2 from '../../assets/value-icon-2.svg?react';
import ValueIcon3 from '../../assets/value-icon-3.svg?react';
import ValueIcon4 from '../../assets/value-icon-4.svg?react';

const VALUES = [
  {
    title: 'Openness',
    desc: 'to the world, people, new ideas and projects',
    icon: ValueIcon,
  },
  {
    title: 'Responsibility',
    desc: 'we are aware that the results of our work have an impact on our lives and the lives of future generations',
    icon: ValueIcon2,
  },
  {
    title: 'Innovation',
    desc: 'we use the latest technology to implement non-standard solutions',
    icon: ValueIcon3,
  },
  {
    title: 'Quality',
    desc: 'we do not strive to be the first among others, but we want to be the best in our businesss',
    icon: ValueIcon4,
  },
];

const About = () => {
  return (
    <section className={scss.section}>
      <h2 className={scss.sectionTitle}>Main values of our company</h2>
      <p className={scss.sectionInfo}>
        EcoSolution envisions a world where sustainable energy solutions power a
        brighter and cleaner future for all. We aspire to be at the forefront of
        the global shift towards renewable energy, leading the way in innovative
        technologies that harness the power of nature to meet the world's energy
        needs.
      </p>
      <ul className={scss.valuesList}>
        {VALUES &&
          VALUES.map(({ title, desc, icon }) => {
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
