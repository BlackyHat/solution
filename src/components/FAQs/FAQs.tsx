import { useState } from 'react';
import Accordion from './components/Accordion/Accordion';
import ArrowIcon from '@assets/icons/icon-arrow.svg?react';

import scss from './FAQs.module.scss';
import FAQ_INFO from '@/libs/content/faqs';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleAccordionClick = (idx: number) => {
    if (idx === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(idx);
    }
  };

  return (
    <section className={scss.section} id="faq-section">
      <h2 className={scss.sectionTitle}>{FAQ_INFO.title}</h2>
      <ul className={scss.accordeonList}>
        {FAQ_INFO.answers.length > 0 &&
          FAQ_INFO.answers.map(({ question, answer }, idx) => (
            <Accordion
              key={question}
              question={question}
              answer={answer}
              isActive={idx === activeIndex}
              setActive={() => handleAccordionClick(idx)}
            />
          ))}
      </ul>
      <p className={scss.moreInfo}>Didn't find the answer to your question?</p>
      <button type="button" className={scss.btnContact}>
        Contact Us
        <ArrowIcon className={scss.arrowIcon} aria-label="arrow down" />
      </button>
    </section>
  );
};

export default FAQs;
