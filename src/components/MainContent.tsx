/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';

import styles from './../styles/main.module.scss';

export default function MainContent() {
    return (
        <>
            <div className={styles.mainImgContainer}></div>
            <div className={styles.content}>
                <h2>Walk for Animals is back and better than ever</h2>
                <p>
                    <strong>
                        On Saturday, May 4, join thousands of animal lovers and
                        their pets at the Minnesota State Fairgrounds to make
                        more second chances possible for animals in need — one
                        step at a time.
                    </strong>
                </p>
                <p>
                    The Walk is Animal Humane Society’s largest fundraising
                    event of the year, and we’re excited to bring you and your
                    pets even more fun, food, and chances to make a difference.
                </p>
                <p className={styles.contacts}>
                    <Link aria-label="Link to Register page" to="/wfaregister">
                        Register today
                    </Link>
                    to start changing animals' lives.
                </p>
                <h3>Sign up now</h3>
                <p>
                    Show up in style. When you raise $100 by March 31, we'll
                    ensure you receive your Walk T-shirt before the event so you
                    can wear it proudly on Walk day!
                </p>
                <p>
                    Registration is free and easy, plus every dollar raised
                    helps dogs, cats, and critters in our community.
                </p>
                <div
                    className={styles.buttonContainer}
                    role="button"
                    aria-label="Register to fundraise"
                >
                    <Link to="/wfaregister">Register to fundraise</Link>
                </div>
                <h3>Make a donation</h3>
                <p>
                    Make a general donation to the Walk, or search for a
                    specific walker or team to make a gift and support their
                    fundraising efforts.
                </p>
                <div
                    className={styles.buttonContainer}
                    role="button"
                    aria-label="Make a donation"
                >
                    <Link to="/wfadonate">Make a donation</Link>
                </div>
                <h3>Volunteer</h3>
                <p>
                    The Walk wouldn’t be possible without our incredible
                    volunteers. Sign up to volunteer and enjoy being a part of
                    this extraordinary day.
                </p>
                <div
                    className={styles.buttonContainer}
                    role="button"
                    aria-label="Sign up to volunteer"
                >
                    <Link to="/wfavolunteer">Sign up to volunteer</Link>
                </div>
                <h3>Why join us for Walk for Animals?</h3>
                <p>
                    With so many incredible activities, vendors, and fun
                    planned, it’s hard to choose just one reason you should
                    register for the Walk.
                </p>
                <p>
                    It could be the chance to meet (and pet!) so many sweet
                    animals. It could be the delicious food options available
                    for you to munch on after you walk.
                </p>
                <p>
                    But the biggest reason to join us is to help make more
                    second chances possible for animals in Minnesota and beyond.
                </p>
                <p>
                    Every step you take during the event is another second
                    chance given to an animal in need — what could be better
                    than that?
                </p>
                <h3>Questions?</h3>
                <p className={styles.contacts}>
                    If you have questions, fill out our
                    <a href="https://animalhumanesociety.wufoo.com/forms/contact-us?field1=Walk%20for%20Animals">
                        contact form
                    </a>
                    or call <a href="tel:763-432-4841">763-432-4841</a>.
                </p>
                <p style={{ padding: '30px 0px 30px 0px' }}>&nbsp;</p>
                <hr />
                <p>&nbsp;</p>
                <h3>Two paws up for our great partners!</h3>
                <div>
                    <a
                        href="https://www.purina.com/"
                        target="_blank"
                        aria-label="Link to Purine sponsor's website"
                        rel="noreferrer"
                    >
                        <img
                            style={{
                                float: 'left',
                                width: '18%',
                                marginRight: '2%',
                            }}
                            src="https://secure.animalhumanesociety.org/images/content/pagebuilder/Purina_Logo__400x400.png"
                            alt="Purina"
                        />
                    </a>
                    <a
                        href="https://easween.com/"
                        target="_blank"
                        aria-label="Link to EA Sween sponsor's website"
                        rel="noreferrer"
                    >
                        <img
                            style={{
                                float: 'left',
                                width: '18%',
                                marginRight: '2%',
                            }}
                            src="https://secure.animalhumanesociety.org/images/content/pagebuilder/EA_Sween_Company_Logo.png"
                            alt="EA Sween"
                        />
                    </a>
                    <a
                        href="https://deliexpress.com/"
                        target="_blank"
                        aria-label="Link to Deli Express sponsor's website"
                        rel="noreferrer"
                    >
                        <img
                            style={{ float: 'left', width: '18%' }}
                            src="https://secure.animalhumanesociety.org/images/content/pagebuilder/Deli_Express_400x400.jpg"
                            alt="Deli Express"
                        />
                    </a>
                    <a
                        href="https://www.metlife.com/"
                        target="_blank"
                        aria-label="Link to Met Life sponsor's website"
                        rel="noreferrer"
                    >
                        <img
                            style={{
                                float: 'left',
                                width: '18%',
                                marginRight: '2%',
                            }}
                            src="	https://secure.animalhumanesociety.org/images/content/pagebuilder/metlife_eng_logo_rgb.png"
                            alt="Met Life"
                        />
                    </a>
                    <a
                        href="https://www.fox9.com/"
                        target="_blank"
                        aria-label="Link to Fox 9 sponsor's website"
                        rel="noreferrer"
                    >
                        <img
                            style={{
                                float: 'left',
                                width: '18%',
                                marginRight: '2%',
                            }}
                            src="https://secure.animalhumanesociety.org/images/content/pagebuilder/Fox9_logo.jpg"
                            alt="Fox 9"
                        />
                    </a>
                    <a
                        href="https://www.mytalk1071.com/"
                        target="_blank"
                        aria-label="Link to MyTalk sponsor's website"
                        rel="noreferrer"
                    >
                        <img
                            style={{
                                float: 'left',
                                width: '18%',
                                marginRight: '2%',
                            }}
                            src="https://secure.animalhumanesociety.org/images/content/pagebuilder/My_Talk_400x400px_white_bgd.png?t=1707841212912"
                            alt="MyTalk 107.1"
                        />
                    </a>
                    <a
                        href="https://www.adamspestcontrol.com/"
                        target="_blank"
                        aria-label="Link to Adam's Pest Control sponsor's website"
                        rel="noreferrer"
                    >
                        <img
                            style={{
                                float: 'left',
                                width: '18%',
                                marginRight: '2%',
                            }}
                            src="https://secure.animalhumanesociety.org/images/content/pagebuilder/Adams_Pest_Control_400x400-27.png"
                            alt="Adam's Pest Control"
                        />
                    </a>
                    <a
                        href="https://www.leinie.com/av?url=https://www.leinie.com/home"
                        target="_blank"
                        aria-label="Link to Leinenkugel sponsor's website"
                        rel="noreferrer"
                    >
                        <img
                            style={{
                                float: 'left',
                                width: '18%',
                                marginRight: '2%',
                            }}
                            src="https://secure.animalhumanesociety.org/images/content/pagebuilder/Leinenkugel_s_logo_400x400.png"
                            alt="Leinenkugel's logo"
                        />
                    </a>
                    <a
                        href="https://www.facebook.com/ShanghaiHenris/"
                        target="_blank"
                        aria-label="Link to Shanghai Henris sponsor's website"
                        rel="noreferrer"
                    >
                        <img
                            style={{
                                float: 'left',
                                width: '18%',
                                marginRight: '2%',
                            }}
                            src="https://secure.animalhumanesociety.org/images/content/pagebuilder/Shanghai_Henri_logo.jpg"
                            alt="Shanghai Henri's"
                        />
                    </a>
                </div>
            </div>
        </>
    );
}
