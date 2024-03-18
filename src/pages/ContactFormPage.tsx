import { Link } from 'react-router-dom';
import ContactForm from 'components/ContactForm';
import styles from './../styles/contact.module.scss';

export default function ContactFormPage() {
    return (
        <div className={styles.contactForm}>
            <div className={styles.contactFormContainer}>
                <h1 className={styles.contactFormLogo}>
                    <Link to="/" aria-label="Animal Humane Society">
                        <img
                            src="./../../public/images/whitelogo.png"
                            alt="Animal Humane Society"
                        />
                    </Link>
                </h1>
                <ContactForm />
                <div className={styles.contactFormFooter}>
                    This site is protected by reCAPTCHA Enterprise and the
                    Google{' '}
                    <a href="https://policies.google.com/privacy">
                        Privacy Policy
                    </a>{' '}
                    and{' '}
                    <a href="https://policies.google.com/terms">
                        Terms of Service
                    </a>{' '}
                    apply.
                </div>
            </div>
        </div>
    );
}
