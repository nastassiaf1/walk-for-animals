import { AccordionData } from 'interfaces/Accordion';
import { Link } from 'react-router-dom';

const FundraisingtipsData: AccordionData[] = [
    {
        header: 'Digital Fundraising Toolkit',
        description: (
            <p>
                We’re here to support you on every step of your Walk for Animals
                journey.{' '}
                <a
                    href="https://secure.animalhumanesociety.org/site/SPageNavigator/WalkforAnimals/wfatoolkit.html"
                    target="_blank"
                    rel="noreferrer"
                >
                    Check out our Digital Fundraising Toolkit
                </a>{' '}
                which includes graphics, downloadable posters, and sample social
                media posts to share with your network!
            </p>
        ),
    },
    {
        header: 'Fundraising ideas for everyone',
        description: (
            <ol style={{ paddingLeft: '40px', fontWeight: 'bold' }}>
                <li style={{ marginTop: '18px', marginBottom: '18px' }}>
                    Start early.{' '}
                    <span style={{ fontWeight: 'normal' }}>
                        The sooner you start asking for donations, the more time
                        you`ll have to grow your fundraising total.
                    </span>
                </li>
                <li style={{ marginTop: '18px', marginBottom: '18px' }}>
                    Set your fundraising goal.{' '}
                    <span style={{ fontWeight: 'normal' }}>
                        Give yourself something to aim for. Many people who do
                        this raise more than they thought they would!
                    </span>
                </li>
                <li style={{ marginTop: '18px', marginBottom: '18px' }}>
                    Make a personal donation.{' '}
                    <span style={{ fontWeight: 'normal' }}>
                        Be the first to show your commitment to animals in need.
                    </span>
                </li>
                <li style={{ marginTop: '18px', marginBottom: '18px' }}>
                    Update your personal fundraising page.{' '}
                    <span style={{ fontWeight: 'normal' }}>
                        Share your love for animals by telling your story and
                        uploading a picture of you and the animals in your life.
                    </span>
                </li>
                <li style={{ marginTop: '18px', marginBottom: '18px' }}>
                    Send emails.{' '}
                    <span style={{ fontWeight: 'normal' }}>
                        Whether you’re using the email tools in your Participant
                        Center or your personal email account, sending emails to
                        your friends, family, and coworkers is a great way to
                        get your message out. Share your story and include the
                        link to your personal fundraising page if you`re
                        fundraising online. Don`t be afraid to follow up if
                        people don`t respond!
                    </span>
                </li>
                <li style={{ marginTop: '18px', marginBottom: '18px' }}>
                    Reach out on social media.{' '}
                    <span style={{ fontWeight: 'normal' }}>
                        Send messages and share your fundraising progress on
                        Facebook, Instagram, TikTok, etc. And don`t forget to
                        thank donors on social media, too!
                    </span>
                </li>
                <li style={{ marginTop: '18px', marginBottom: '18px' }}>
                    Write letters.{' '}
                    <span style={{ fontWeight: 'normal' }}>
                        A personal letter always goes a long way. Share your
                        message about why you are walking!
                    </span>
                </li>
                <li style={{ marginTop: '18px', marginBottom: '18px' }}>
                    Ask your employer (and your donors) about matching gifts.{' '}
                    <span style={{ fontWeight: 'normal' }}>
                        Many companies match their employees` donations. Ask
                        your donors if their company will match their gift.
                    </span>
                </li>
                <li style={{ marginTop: '18px', marginBottom: '18px' }}>
                    Encourage friends and family to get involved.{' '}
                    <span style={{ fontWeight: 'normal' }}>
                        Create your own Walk for Animals team! When you come
                        together, you can make an even bigger impact for local
                        animals. Inspire some friendly competition and see who
                        can raise the most on your team — and every member will
                        be eligible for prizes based on their individual
                        fundraising!
                    </span>
                </li>
                <li style={{ marginTop: '18px', marginBottom: '18px' }}>
                    Have fun with it!{' '}
                    <span style={{ fontWeight: 'normal' }}>
                        There are plenty of creative ways you can inspire your
                        network to support your fundraising. Consider putting on
                        a crafting or bake sale, setting up a lemonade stand, or
                        hosting a car wash. Whatever you choose, put the “fun”
                        in fundraising!
                    </span>
                </li>
            </ol>
        ),
    },
    {
        header: 'Fundraising ideas for teams and employers',
        description: (
            <ol style={{ paddingLeft: '40px', fontWeight: 'bold' }}>
                <li style={{ marginTop: '18px', marginBottom: '18px' }}>
                    Get organized.{' '}
                    <span style={{ fontWeight: 'normal' }}>
                        Host a get-together with your team! A coffee break or
                        happy hour is a great way to discuss all your creative
                        ideas to collectively reach your team goal.
                    </span>
                </li>
                <li style={{ marginTop: '18px', marginBottom: '18px' }}>
                    Movie night.{' '}
                    <span style={{ fontWeight: 'normal' }}>
                        Host a movie night in person and ask for an “admission
                        fee” (donation) or virtually with the help of online
                        tools like Teleparty or GroupWatch. Then, post your
                        donation link in the chat.
                    </span>
                </li>
                <li style={{ marginTop: '18px', marginBottom: '18px' }}>
                    Pet photo contest.{' '}
                    <span style={{ fontWeight: 'normal' }}>
                        Invite your friends (and their friends) to enter their
                        pet’s best photo, charge a few dollars for a good cause,
                        and the winner will be selected by online voters!
                    </span>
                </li>
                <li style={{ marginTop: '18px', marginBottom: '18px' }}>
                    Game night.{' '}
                    <span style={{ fontWeight: 'normal' }}>
                        Gather your friends and host a fun night of games,
                        donations, and prizes.
                    </span>
                </li>
                <li style={{ marginTop: '18px', marginBottom: '18px' }}>
                    Write a letter.{' '}
                    <span style={{ fontWeight: 'normal' }}>
                        A personal letter always goes a long way. Share your
                        message about why you’re walking!
                    </span>
                </li>
                <li style={{ marginTop: '18px', marginBottom: '18px' }}>
                    Prize drawing.{' '}
                    <span style={{ fontWeight: 'normal' }}>
                        Request a $10 donation from your coworkers in exchange
                        for being entered into a drawing for gift certificates,
                        prime parking spaces, or virtual events.
                    </span>
                </li>
                <li style={{ marginTop: '18px', marginBottom: '18px' }}>
                    Host a trivia event.{' '}
                    <span style={{ fontWeight: 'normal' }}>
                        Offer employees the opportunity to participate in a
                        trivia event at work — either in person or virtually —
                        in exchange for a donation.
                    </span>
                </li>
                <li style={{ marginTop: '18px', marginBottom: '18px' }}>
                    Funny activity for a cause.{' '}
                    <span style={{ fontWeight: 'normal' }}>
                        A favorite for all employees. Make a donation and have
                        your boss do a funny activity — from eating a pet’s
                        favorite treat to doing a funny dance in a meeting, the
                        possibilities are endless and help support animals.
                    </span>
                </li>
                <li style={{ marginTop: '18px', marginBottom: '18px' }}>
                    Create friendly competition.{' '}
                    <span style={{ fontWeight: 'normal' }}>
                        Motivate your crew! Offer a prize to your team’s top
                        fundraisers to inspire each walker to contribute even
                        more to your team total.
                    </span>
                </li>
            </ol>
        ),
    },
    {
        header: 'Donation tracking form for cash and check gifts',
        description: (
            <>
                <p>
                    As you collect offline donations, please send cash and
                    checks to Animal Humane Society (Attn: Donor Services, 845
                    Meadow Lane N, Golden Valley, MN 55422) with a completed{' '}
                    <a
                        href="https://ahs.nyc3.cdn.digitaloceanspaces.com/live/public/media/files/2024-02/wfa24_donationtracker.pdf"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Donation Tracker form
                    </a>
                    . For mailed donations to be counted toward prizes, your
                    offline gifts must be postmarked by Friday, May 10.
                </p>
                <p>
                    All mailed cash and checks received by Wednesday, May 1,
                    will be entered and appear on each Walker`s record by
                    Saturday, May 4. Gifts that arrive in the mail after that
                    date will not be added until after the Walk. Rest assured,
                    all gifts postmarked by May 10 will count toward your
                    fundraising total and the prizes you’ll earn.
                </p>
                <p>
                    It`s important to use the{' '}
                    <a
                        href="https://ahs.nyc3.cdn.digitaloceanspaces.com/live/public/media/files/2024-02/wfa24_donationtracker.pdf"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Donation Tracker form
                    </a>{' '}
                    so that donors (especially those making cash donations)
                    receive acknowledgement and a donation receipt.
                </p>
                <p>
                    If you have additional questions or need assistance tracking
                    down a missing donation, please contact us by filling out
                    our{' '}
                    <Link to="/contact-form" target="_blank">
                        contact form
                    </Link>{' '}
                    or calling <a href="tel:763-432-4841">763-432-4841</a>.
                </p>
            </>
        ),
    },
    {
        header: 'Facts to help you fundraise',
        description: (
            <>
                <p>About Animal Humane Society:</p>
                <ul>
                    <li>
                        Each year, Animal Humane Society cares for more than
                        13,000 local dogs, cats, and critters in our locations
                        in Golden Valley, Coon Rapids, Saint Paul, and Woodbury,
                        MN.
                    </li>
                    <li>
                        Animal Humane Society was established in 1878 and
                        incorporated as a nonprofit charitable organization in
                        1891. As an independent Minnesota nonprofit, not
                        affiliated with any national humane societies, AHS
                        relies on the generosity of our community of animal
                        lovers to ensure our doors are open to every animal in
                        need.{' '}
                    </li>
                    <li>
                        For more than 50 years, Animal Humane Society’s Walk for
                        Animals has been our largest fundraising event of the
                        year, with thousands of attendees gathering every spring
                        to donate and create second chances for local animals.
                    </li>
                </ul>
                <p>Animal Humane Society`s impact on the community:</p>
                <ul>
                    <li>
                        Last year, more than 11,000 animals at AHS were adopted
                        into new homes, reunited with owners, or released into
                        the care of other organizations.
                    </li>
                    <li>
                        AHS veterinary centers can provide more than 11,000
                        low-cost services to our community in a given year,
                        including medical and wellness appointments, dental and
                        specialty surgeries, and spay/neuter surgeries.{' '}
                    </li>
                    <li>
                        Through our community outreach efforts, we’re able to
                        partner with local pet food pantries to distribute more
                        than 37,000 pounds of dog and cat food to pet parents.{' '}
                    </li>
                    <li>
                        Through AHS educational programs, children of all ages
                        can learn more about animal welfare and how they can
                        create a more humane world for animals. Last year, more
                        than 4,800 participants attended classes, day camps, and
                        more at AHS locations across the Twin Cities area.{' '}
                    </li>
                    <li>
                        More than 70 family-friendly pet training classes are
                        provided at AHS each week, in addition to one-on-one
                        training, therapy animal courses, play groups, and
                        agility classes. More than 1,100 local pets attended
                        training classes last year.{' '}
                    </li>
                    <li>
                        Our free Pet Helpline answered more than 58,000 phone
                        calls last year, providing care and resources to help
                        pet parents with everything from solving behavioral
                        problems to finding pet-friendly housing.{' '}
                    </li>
                </ul>
            </>
        ),
    },
];

export default FundraisingtipsData;
