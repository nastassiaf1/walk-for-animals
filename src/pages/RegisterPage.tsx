import { Link } from 'react-router-dom';

import styles from './../styles/main.module.scss';
import { UserRole } from 'const/user';

export default function RegisterPage() {
    return (
        <>
            <div className={styles.content}>
                <h2>Register for Walk for Animals</h2>
                <p>
                    When animal lovers like you come together, no matter the
                    circumstances, incredible things happen.
                </p>
                <p>
                    When you walk for animals, you walk for more lifesaving
                    medical treatments, more animals rescued from abuse and
                    neglect, and more resources provided to pets in underserved
                    communities.
                </p>
                <p>
                    <strong>
                        When you walk for animals, every step is a second
                        chance.
                    </strong>
                </p>
                <p>
                    We make it easy to make a difference. When you register
                    today, we’ll ensure you have everything you need to raise
                    money like a pro.
                </p>
                <p>
                    Help us reach our fundraising goal to give more animals the
                    second chances they deserve, all while having tons of fun at
                    the best animal get-together in town.
                </p>
                <p>
                    <strong>Something to make your day extra special:</strong>{' '}
                    When you raise $100 by March 31, we’ll ensure you receive
                    your Walk T-shirt before the event, so you can wear it
                    proudly on Walk day!
                </p>
                <h3>Sign up</h3>
                <p>
                    The Walk for Animals will be hosted on{' '}
                    <strong>Saturday, May 4</strong> at the International Bazaar
                    of the Minnesota State Fairgrounds.
                </p>
                <p></p>
                <div className={styles.buttonContainer}>
                    <Link to={`/login?type=${UserRole.INDIVIDUAL}`}>
                        Register as an individual
                    </Link>
                </div>
                <p></p>
                <p></p>
                <div className={styles.buttonContainer}>
                    <Link to={`/login?type=${UserRole.TEAMMATE}`}>
                        Join an existing team
                    </Link>
                </div>
                <p></p>
                <p></p>
                <div className={styles.buttonContainer}>
                    <Link to={`/login?type=${UserRole.TEAM}`}>
                        Create a team
                    </Link>
                </div>
                <p>
                    If you need assistance registering, please fill out our{' '}
                    <Link to="/contact-form" target="_blank">
                        contact form
                    </Link>{' '}
                    or call the Walk helpline at{' '}
                    <a href="tel:763-432-4841">763-432-4841</a>.
                </p>
                <h3>Volunteer at the Walk</h3>
                <p>
                    Your help is needed to make the Walk a success!{' '}
                    <Link to="/volunteer">
                        Available volunteer roles will be posted soon
                    </Link>
                    .
                </p>
                <hr></hr>
                <p>
                    <strong>WAIVER AND RELEASE</strong>
                </p>
                <p>
                    By completing your Walk for Animals registration, you agree
                    to the following:
                </p>
                <p>
                    I give Animal Humane Society permission to use my name and
                    photos taken of me during the event in any promotional
                    material, publication, or on the website. I understand that
                    participating in the event can be a hazardous activity. I
                    also understand that I am participating at my own sole risk.
                    I agree that Animal Humane Society, its agents, employees,
                    sponsors, cooperating organizations, and all parties
                    connected to this event, shall not be liable for any claims,
                    demands, injuries, damages, actions, or causes of action,
                    arising out of acts of active or passive negligence. I, and
                    anyone entitled to act on my behalf, expressly release and
                    discharge all such claims and liabilities, even though that
                    liability may arise out of my own negligence or
                    carelessness. I certify that I have read and understand the
                    intent of this waiver and release.
                </p>
                <p>
                    If you need further assistance, please fill out our{' '}
                    <Link to="/contact-form" target="_blank">
                        contact form
                    </Link>{' '}
                    or call the Walk helpline at{' '}
                    <a href="tel:763-432-4841">763-432-4841</a>.
                </p>
            </div>
        </>
    );
}
