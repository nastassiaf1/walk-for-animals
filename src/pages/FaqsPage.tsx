import { useState } from 'react';
import { Link } from 'react-router-dom';
import FaqsData from 'constants/faqs';

import styles from './../styles/main.module.scss';
import accStyles from './../styles/accordion.module.scss';

export default function FaqsPage() {
    const [activeAccordionIndex, setActiveAccordionIndex] = useState(null);

    const toggleAccordion = (index: number) => {
        setActiveAccordionIndex(index === activeAccordionIndex ? null : index);
    };

    return (
        <div className={styles.content}>
            <h2>Walk Day FAQ</h2>
            <div>
                <img
                    src="./../../public/images/walk33.jpeg"
                    alt="Walk for Animals"
                    className={styles.previewImg}
                />
            </div>
            <p>
                The Walk is Animal Humane Society’s largest fundraising event of
                the year. Thousands of animal lovers fundraise to give deserving
                animals a second chance. Event day is a celebration of all
                they’ve made possible.
            </p>
            <p>
                In addition to the walk itself, the community gathers with their
                pets for a festive day of live music, activities, food, vendors,
                and more!
            </p>
            <p className={styles.contacts}>
                If you have questions that aren`t answered here, please fill out
                our{' '}
                <Link to="/contact-form" target="_blank">
                    contact form
                </Link>{' '}
                or call <a href="tel:763-432-4841">763-432-4841</a>.
            </p>

            <div className={accStyles.accordion}>
                {FaqsData.map((faq, index) => (
                    <div
                        className={`${accStyles.accordionItem} ${index === activeAccordionIndex ? accStyles.accordionItemActive : ''}`}
                        key={index}
                    >
                        <div
                            className={accStyles.accordionHead}
                            onClick={() => toggleAccordion(index)}
                        >
                            <h2>+ {faq.question}</h2>
                        </div>
                        <div className={accStyles.accordionContent}>
                            {faq.answer}
                        </div>
                    </div>
                ))}
                <p>&nbsp;</p>
                <hr />
                <p>&nbsp;</p>
                <p>
                    <strong>WAIVER AND RELEASE</strong>
                    <br /> I give Animal Humane Society permission to use my
                    name and photos taken of me during the event in any
                    promotional material, publication, or on the website. I
                    understand that participating in the event can be a
                    hazardous activity. I also understand that I am
                    participating at my own sole risk. I agree that Animal
                    Humane Society, its agents, employees, sponsors, cooperating
                    organizations, and all parties connected to this event,
                    shall not be liable for any claims, demands, injuries,
                    damages, actions, or causes of action, arising out of acts
                    of active or passive negligence. I, and anyone entitled to
                    act on my behalf, expressly release and discharge all such
                    claims and liabilities, even though that liability may arise
                    out of my own negligence or carelessness. I certify that I
                    have read and understand the intent of this waiver and
                    release.
                </p>
                <p>
                    If you need further assistance please call the Walk helpline
                    at <a href="tel:763-432-4841">763-432-4841</a> or fill out
                    our{' '}
                    <Link to="/contact-form" target="_blank">
                        contact form
                    </Link>{' '}
                    .
                </p>
            </div>
        </div>
    );
}
