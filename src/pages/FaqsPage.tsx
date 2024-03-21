import { Link } from 'react-router-dom';
import styles from './../styles/main.module.scss';

export default function FaqsPage() {
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
            <div className="accordion">
                <div className="accordionItem">
                    <div className="accordionHead">
                        <div className="accordionIcon"></div>
                        <h2>
                            + Do I need to fundraise to attend the Walk for
                            Animals?
                        </h2>
                    </div>
                    <div className="accordionContent">
                        <p>
                            All animal lovers are welcome at the Walk for
                            Animals whether they have fundraised or not.&nbsp;To
                            safeguard all our constituents against spam and
                            phishing, TeamRaiser now requires a minimum of $5
                            raised to send emails from your Participant Center.
                        </p>
                    </div>
                </div>
                <div className="accordionItem">
                    <div className="accordionHead">
                        <div className="accordionIcon"></div>
                        <h2>+ Is it free to attend the Walk for Animals?</h2>
                    </div>
                    <div className="accordionContent">
                        <p>
                            While there’s no admission fee, the Walk for Animals
                            is Animal Humane Society’s largest and most
                            important fundraising event of the year, helping to
                            make thousands of new beginnings possible for
                            animals in need each year. The suggested donation
                            for non-fundraisers is $20 per person.
                        </p>
                    </div>
                </div>
                <div className="accordionItem">
                    <div className="accordionHead">
                        <div className="accordionIcon"></div>
                        <h2>
                            + How do I customize my personal fundraising page?
                        </h2>
                    </div>
                    <div className="accordionContent">
                        <p>
                            When logged in to your Participant Center, scroll
                            down to the section titled “Personal Page.” Here
                            you’ll see the option to edit your personal page
                            content, including the page title, body copy, and
                            photo. If you’re part of a team, you’ll also have
                            the option to edit your team page content in this
                            area. Just be sure you’re working in the “My Team”
                            tab to edit team content and fundraising goals.
                        </p>
                        <img
                            src="https://secure2.convio.net/ahs/images/content/pagebuilder/Participant-Center-Edit-Content-1.jpg?t=1709237044646"
                            alt="Editing your participant center"
                        />

                        <p>
                            You’ll also see your personal page URL. Select the
                            “URL Settings” button to create a personalized URL
                            if you’d like.
                        </p>

                        <p>
                            Also toward the bottom of your Participant Center
                            you’ll find the option to edit your fundraising
                            goal.
                        </p>

                        <img
                            src="https://secure2.convio.net/ahs/images/content/pagebuilder/Participant-Center-Fundraising-Goal.jpg?t=1709237252013"
                            alt="Editing your fundraising goal."
                        />
                    </div>
                </div>

                <div className="accordionItem">
                    <div className="accordionHead">
                        <div className="accordionIcon"></div>
                        <h2>+ How do I fundraise for the Walk on Facebook?</h2>
                    </div>
                    <div className="accordionContent">
                        <p>
                            Sharing your fundraiser on Facebook is quick and
                            easy. From your Participant Center, locate the dark
                            blue box that reads “Reach your goal faster” and
                            select the “Edit fundraising content” button.
                        </p>

                        <img
                            src="https://secure2.convio.net/ahs/images/content/pagebuilder/Participant-Center-Connect-to-FB.png?t=1709237501167"
                            alt="Sharing your fundraiser on Facebook."
                        />

                        <p>
                            A pop-up should appear stating that the Luminate
                            Integration App is requesting access to manage your
                            fundraiser. Follow the prompts to grant access, and
                            you’ll also have the option to edit the title and
                            content of your fundraiser.{' '}
                        </p>

                        <img
                            src="https://secure2.convio.net/ahs/images/content/pagebuilder/Facebook-Fundraiser-Permissions.png?t=1709237733956"
                            alt="Facebook fundraiser permission."
                        />

                        <p>
                            In the dark blue box in your Participant Center,
                            you’ll now see that your fundraiser has successfully
                            been connected to Facebook. From this box, you can
                            navigate directly to your Facebook fundraiser, or
                            copy the unique URL for your Facebook fundraiser.
                            Please note: To grant Facebook access, you’ll need
                            to have pop-ups enabled on your web browser.{' '}
                        </p>

                        <p>
                            Don’t forget — there are several graphics available
                            for you to share on social media which can be found
                            in our{' '}
                            <a href="https://secure.animalhumanesociety.org/site/SPageNavigator/WalkforAnimals/wfatoolkit.html">
                                digital fundraising toolkit.{' '}
                            </a>
                        </p>
                    </div>
                </div>

                <div className="accordionItem">
                    <div className="accordionHead">
                        <div className="accordionIcon"></div>
                        <h2>
                            + How do I send emails from my Participant Center?{' '}
                        </h2>
                    </div>
                    <div className="accordionContent">
                        <p>
                            We want to help make fundraising easy with helpful
                            tools and support. That’s why you’ll find several
                            ready-to-use, easily customizable email templates in
                            your Participant Center.
                        </p>

                        <p>
                            You’ll want to start by adding contacts to your
                            address book. When logged in, select #2 in the list
                            of “What to do next.” Here you can add contacts
                            individually, or import a group of contacts. If
                            you’re a returning walker, you’ll see contacts and
                            prior donors saved here already.{' '}
                        </p>

                        <img
                            src="https://secure2.convio.net/ahs/images/content/pagebuilder/Participant-Center-What-Next.jpg?t=1709238101295"
                            alt="What to do next."
                        />

                        <p>
                            Now you’re ready to email your friends, family, and
                            coworkers! From the contacts page, you can select
                            the email addresses you’d like to contact in bulk.
                            To return to the email page in the future, select #3
                            in the list of “What to do next” when you login, or
                            navigate to the “Email” tab.
                        </p>

                        <p>
                            Choose from several email templates, including three
                            requests for support and one thank you. Each
                            template can be customized however you’d like, or
                            you can choose to create your own from scratch. Then
                            select an email header to accompany your email. From
                            here you can save your customized template for
                            future use, or simply select the “Preview &amp;
                            Send” button to review your email and then send it
                            on to your recipients.{' '}
                        </p>

                        <img
                            src="https://secure2.convio.net/ahs/images/content/pagebuilder/Participant-Center-Compose-Email.png?t=1709238235021"
                            alt="Composing an email."
                        />

                        <p>
                            All emails sent from your Participant Center will
                            automatically include a direct link to your personal
                            page at the bottom of the email.{' '}
                        </p>
                    </div>
                </div>

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
