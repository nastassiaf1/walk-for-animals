import Accordion from 'components/Accordion';
import styles from './../styles/main.module.scss';
import FundraisingtipsData from 'data/fundraisingtips';

export default function FundraisingtipsPage() {
    return (
        <div className={styles.content}>
            <h2>Fundraising Tips and Tools</h2>
            <img
                className={styles.previewImg}
                src="./../../public/images/fundraising.png"
                alt="Walk for Animals 2023 parking map"
            />
            <p>
                For more than 50 years, we’ve been walking to create second
                chances for animals in need — all thanks to dedicated animal
                lovers like you.{' '}
            </p>
            <p>
                By fundraising for the Walk for Animals, you`re ensuring local
                dogs, cats, and critters receive the shelter, medical treatment,
                and love they deserve. You’re also helping community members
                care for their beloved pets by providing nonjudgmental
                education, compassionate resources like free pet food and our
                Pet Helpline, and low-cost, accessible veterinary services.
                Every dollar you raise goes directly toward creating happier,
                healthier lives for animals in our shelters — and beyond.
            </p>
            <p>
                Fundraising comes easily when you do it from the heart. Be
                creative and make it personal. And remember, you`re working hard
                for a wonderful cause — to help animals and the people who love
                them.
            </p>

            <Accordion data={FundraisingtipsData} />
        </div>
    );
}
