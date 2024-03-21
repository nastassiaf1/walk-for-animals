import { Link } from 'react-router-dom';

import styles from './../styles/event.module.scss';
import mainStyles from './../styles/main.module.scss';

export default function EventsPage() {
    return (
        <div className={mainStyles.content}>
            <h2>Event information</h2>
            <div>
                <img
                    src="./../../public/images/dogs.jpeg"
                    alt="Walk for Animals"
                    className={styles.eventImg}
                />
            </div>
            <p>
                <strong>
                    Rain or shine, gates will open at <time>9 AM</time> on{' '}
                    <time dateTime="2024-05-04">Saturday, May 4</time>, at the
                    International Bazaar on the Minnesota State Fairgrounds.
                    We`ll begin walking at 10 AM and wrap up our fun-filled day
                    by <time>1 PM</time>.
                </strong>
            </p>
            <p>
                All animal lovers are welcome at the Walk! Didn`t fundraise? No
                problem. There are plenty of opportunities to make a difference
                at the Walk with cash, credit card, and virtual payment
                donations.
            </p>
            <h3>Walk route and location</h3>
            <p>
                This year, we`re back at the Minnesota State Fairgrounds to
                celebrate second chances.
            </p>
            <p>
                Walkers will start on Spruce Street, turn left onto Randell
                Avenue, and then make their way down Underwood Street. The walk
                route is approximately one mile, and you can turn around at any
                time.{' '}
            </p>
            <p>
                <strong>Check back for a detailed route map.</strong>
            </p>
            <h3>How to bring your pet to the Walk</h3>
            <p>
                For the safety of your dog and others, we highly recommend a 4’
                or 6’ flat leash. Retractable leashes are not advised.
            </p>
            <p>
                We also recommend that small animals like cats, rabbits, and
                ferrets enjoy the Walk for Animals from the comfort and safety
                of a carrier or covered stroller.
            </p>
            <h3>What to bring</h3>
            <ul>
                <li>
                    <p>
                        Good news: There’s no need to check-in for prizes! To
                        make it convenient for our Walk attendees, all prizes
                        will be shipped to you following the event.
                    </p>
                    <p>
                        You may mail your donations in advance (must be
                        postmarked by May 10 to be counted towards prizes), so
                        there will be nothing for you to bring or pick up on
                        Walk day! If you prefer to drop off your cash and check
                        donations along with a completed{' '}
                        <a href="https://ahs.nyc3.cdn.digitaloceanspaces.com/live/public/media/files/2024-02/wfa24_donationtracker.pdf">
                            donation tracking form
                        </a>
                        , you can do so at the donation drop-off tent.
                    </p>
                </li>
                <li>
                    <p>
                        Cash for food and merchandise purchases as not all
                        vendors take credit cards. ATMs are also available at
                        the event.
                    </p>
                </li>
                <li>
                    <p>
                        Weather-appropriate clothing and supplies such as hats,
                        sunglasses, sunscreen, or an umbrella.
                    </p>
                </li>
                <li>
                    <p>
                        To reduce waste, please bring your own water in a
                        reusable container.
                    </p>
                </li>
            </ul>
            <h3>Food, entertainment, and more</h3>
            <p>
                After you walk, it`s time to celebrate! The Walk features an
                array of food and beverage vendors to delight your taste buds,
                as well as an incredible lineup of local retailers, rescues, and
                pet service providers.{' '}
                <a href="SPageNavigator/wfavendors">
                    See who`ll be joining us.
                </a>
            </p>
            <p>
                We`ll also have a number of fun activities for pets and people
                alike! Stop by the International Bazaar to dive into the fun.
            </p>
            <p>
                <strong>Event schedule</strong>
            </p>
            <ul>
                <li>
                    <p>
                        <strong>
                            <time>9 AM</time>: Walk for Animals grounds open
                        </strong>
                    </p>
                    <p>
                        Activities, vendors, and food trucks are ready for your
                        arrival.
                    </p>
                    <p>
                        <span className={styles.eventTextUnderline}>
                            Donation drop-off
                        </span>
                    </p>
                    <p>
                        Drop off your donations any time between 9 AM and 12:30
                        PM to be counted toward your fundraising goal and the
                        prizes you receive.
                    </p>
                    <p>
                        <strong>Note:</strong> Fundraising prizes will be mailed
                        to you post-event.
                    </p>
                </li>
                <li>
                    <p>
                        <strong>
                            <time>10 AM</time>: Walk begins!
                        </strong>
                    </p>
                    <p>
                        We’ll kick off the Walk at <time>10 AM</time>. The route
                        will be available for thousands of animal lovers and
                        their pets to prove that every step is a second chance.
                    </p>
                </li>

                <li>
                    <p>
                        <strong>
                            <time>12:30 PMБ/</time>: Donation drop-off closes
                        </strong>
                    </p>
                </li>
                <li>
                    <p>
                        <strong>
                            <time>1 PM</time>: Walk for Animals grounds close
                        </strong>
                    </p>
                    <p>All activities, vendors, and main stage close.</p>
                </li>
            </ul>
            <p>
                <strong>
                    Check back soon for more details on vendors, activities, and
                    all the fun we have planned!
                </strong>
            </p>
            <h4>Questions?</h4>
            <p className={mainStyles.contacts}>
                Check out our <a href="SPageNavigator/wfafaqs">FAQ page</a>. If
                your questions aren`t answered there, fill out our{' '}
                <Link to="/contact-form" target="_blank">
                    contact form
                </Link>{' '}
                or call <a href="tel:763-432-4841">763-432-4841</a>.
            </p>
        </div>
    );
}
