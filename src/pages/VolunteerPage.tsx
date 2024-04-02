import { Link } from 'react-router-dom';

import mainStyles from './../styles/main.module.scss';

export default function VolunteerPage() {
    return (
        <>
            <div className={mainStyles.mainImgContainer}></div>
            <div className={mainStyles.content}>
                <h2>Volunteer</h2>

                <p>
                    Volunteers make the Walk for Animals possible. And thanks to
                    incredible animal lovers like you,{' '}
                    <strong>
                        all Walk for Animals 2024 volunteer roles have been
                        filled!
                    </strong>{' '}
                    Thank you for your interest in volunteering, and please
                    consider volunteering at the Walk for Animals next year.
                </p>

                <h3>Questions?</h3>
                <p className={mainStyles.contacts}>
                    If you have additional questions, fill out our{' '}
                    <Link to="/contact-form" target="_blank">
                        contact form
                    </Link>{' '}
                    or call <a href="tel:763-432-4841">763-432-4841</a>.
                </p>
            </div>
        </>
    );
}
