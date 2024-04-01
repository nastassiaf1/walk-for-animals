import { Link } from 'react-router-dom';

import styles from './../styles/main.module.scss';
import { UserRole } from 'const/user';

export default function TeamPage() {
    return (
        <>
            <div className={styles.content}>
                <h2>Team info</h2>
                <p>
                    What’s more fun than making a difference for animals?{' '}
                    <strong>Doing it with other animal lovers.</strong>
                </p>
                <p>
                    We haven’t gotten to where we are today by going it alone.
                    Together, we can create a more humane world for animals.
                </p>
                <p>
                    When you work together, you make participating in the Walk
                    even more meaningful. More team members means more ways to
                    create second chances for animals in need.
                </p>
                <p>
                    Start or join a Walk for Animals team today to increase your
                    impact and make a difference with those who matter most.
                </p>
                <p>
                    <strong>
                        Three or more people are required to form a Walk team.
                    </strong>
                </p>
                <p></p>
                <div className={styles.buttonContainer}>
                    <Link to={`/login?type=${UserRole.TEAM}`}>
                        Create a team
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
                <h3>How are prizes awarded if I’m part of a team?</h3>
                <p>
                    Prizes are awarded based on individual fundraising
                    accomplishments regardless of team affiliation. Team
                    donations do not count toward individual fundraising totals.
                </p>
            </div>
        </>
    );
}
