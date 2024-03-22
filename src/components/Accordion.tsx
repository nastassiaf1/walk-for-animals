import { useState } from 'react';
import { AccordionData } from 'interfaces/Accordion';

import styles from './../styles/accordion.module.scss';
import mainStyles from './../styles/main.module.scss';

export default function Accordion({ data }: { data: AccordionData[] }) {
    const [activeAccordionIndex, setActiveAccordionIndex] = useState(null);

    const toggleAccordion = (index: number) => {
        setActiveAccordionIndex(index === activeAccordionIndex ? null : index);
    };

    return (
        <div className={`${styles.accordion} ${mainStyles.content}`}>
            {data.map((item, index) => (
                <div
                    className={`${styles.accordionItem} ${index === activeAccordionIndex ? styles.accordionItemActive : ''}`}
                    key={index}
                >
                    <div
                        className={styles.accordionHead}
                        onClick={() => toggleAccordion(index)}
                    >
                        <h2>+ {item.header}</h2>
                    </div>
                    <div className={styles.accordionContent}>
                        {item.description}
                    </div>
                </div>
            ))}
        </div>
    );
}
