import { Link } from 'react-router-dom';
import styles from './../styles/notfound.module.scss';
import mainStyles from './../styles/main.module.scss';

export default function NotFoundPage() {
    return (
        <div className={styles.container}>
            <h3>404 - Page Not Found</h3>
            <p>Sorry, the page you are looking for does not exist.</p>
            <div>
                <Link to="/" className={mainStyles.link}>
                    Go Back Home
                </Link>
            </div>
        </div>
    );
}
