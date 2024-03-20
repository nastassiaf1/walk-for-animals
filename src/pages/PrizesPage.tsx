import { Link } from 'react-router-dom';
import Gallery from 'components/Gallery';

import styles from './../styles/main.module.scss';

export default function PrizesPage() {
    return (
        <>
            <div className={styles.mainImgContainer}></div>
            <div className={styles.content}>
                <h2>Prizes</h2>
                <p>
                    We share in your passion for animals and greatly appreciate
                    the time and energy you invest in raising funds for the Walk
                    for Animals. Whether it’s through serving as a Team Captain,
                    holding a fundraiser, sending countless emails, creating
                    social posts, or all of the above — these prizes are small
                    tokens of our immense thanks for all you do to help animals
                    in our community.
                </p>
                <p>
                    <strong>
                        All mailed donations must be postmarked by May 10 in
                        order to be counted for prizes.
                    </strong>{' '}
                    Please mail all cash and check donations to:
                </p>
                <p>
                    Animal Humane Society
                    <br /> Attn: Donor Services
                    <br /> 845 Meadow Lane N<br /> Golden Valley, MN 55422
                </p>
                <p>
                    In mid-May, we`ll email a redemption form to all Walkers who
                    qualified for prizes. We`ll ship your awesome prizes right
                    to your door, free of charge. You’ll also have the option to
                    donate the cost of prizes back to AHS.
                </p>
                <p className={styles.contacts}>
                    If you did not receive an email requesting completion of our
                    prize redemption form, please fill out our{' '}
                    <Link to="/contact-form" target="_blank">
                        contact form
                    </Link>{' '}
                    or call <a href="tel:763-432-4841">763-432-4841</a>.
                </p>
                <h3>How are prizes awarded if I’m part of a team?</h3>
                <p>
                    Prizes are awarded based on individual fundraising
                    accomplishments regardless of team affiliation. Team
                    donations do not count toward individual fundraising totals.
                </p>
                <h3>Walk for Animals fundraising prizes</h3>

                <Gallery />
                <br />
                <div>&nbsp;</div>
                <br />
            </div>
        </>
    );
}
