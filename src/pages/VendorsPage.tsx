import styles from './../styles/main.module.scss';

export default function VendorsPage() {
    return (
        <div className={styles.content}>
            <h2>Food and event vendors</h2>
            <p>
                Visit our vendors and participate in fun animal-related
                activities with your pet. While some vendors may accept credit
                cards, we encourage our Walk participants to bring cash. There
                will be two ATM access points on the event grounds.
            </p>
            <p>
                We do our very best to accommodate dietary restrictions and
                provide a variety of affordable food options for our Walkers.
                Please note a valid I.D. will be required to purchase alcoholic
                beverages.
            </p>
            <h3>Participating vendors</h3>
            <p>
                We`re still working to confirm this year`s amazing group of
                vendors.{' '}
                <strong>
                    Check back soon for a list of all food and retail vendors.
                </strong>
            </p>

            <div className={styles.contentNote}>
                <h3>Become a vendor at the Walk for Animals</h3>
                <p>
                    Interested in a terrific way to reach potential new animal
                    loving customers? Humans and pets visit vendors before,
                    during, and after the Walk. Enjoy exposure to thousands of
                    animal lovers at the Walk for Animals!
                </p>
                <p>
                    <a
                        href="https://secure.animalhumanesociety.org/site/SPageNavigator/WalkforAnimals/wfavendors_app.html"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Learn more about becoming a vendor at the Walk for
                        Animals
                    </a>
                    .
                </p>
            </div>
            <p>&nbsp;</p>
        </div>
    );
}
