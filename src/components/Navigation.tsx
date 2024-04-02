import { useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import LoginForm from './LoginForm';

import styles from './../styles/nav.module.scss';
import loginStyles from './../styles/login.module.scss';

export default function Navigation() {
    const [isLoginDialogVisible, setIsLoginDialogVisible] = useState(false);
    const dialogRef = useRef(null);

    const showDialog = () => setIsLoginDialogVisible(true);

    const hideDialog = () => {
        if (!dialogRef.current.contains(document.activeElement)) {
            setIsLoginDialogVisible(false);
        }
    };
    return (
        <nav className={styles.nav} aria-label="Main Navigation">
            <div className={styles.navItem}>
                <NavLink
                    to="/events"
                    className={({ isActive, isPending }) =>
                        `${styles.navItemLink} ${isPending ? styles.pending : ''} ${isActive ? styles.active : ''}`
                    }
                >
                    Event Info
                </NavLink>
                <div className={styles.navDropdown}>
                    <Link to="/events">General info</Link>
                    <Link to="/events/wfavendors">Food &amp; retail</Link>
                    <Link to="/events/parking">Parking</Link>
                    <Link to="/events/wfafaqs">Event FAQs</Link>
                </div>
            </div>

            <div className={styles.navItem}>
                <NavLink
                    to="/fundraising"
                    className={({ isActive, isPending }) =>
                        `${styles.navItemLink} ${isPending ? styles.pending : ''} ${isActive ? styles.active : ''}`
                    }
                >
                    Fundraising
                </NavLink>
                <div className={styles.navDropdown}>
                    <Link to="/fundraising">Fundraising tips & tools</Link>
                    <Link to="/fundraising/gifts">Matching gifts</Link>
                    <Link to="/fundraising/teams">Teams</Link>
                </div>
            </div>

            <div className={styles.navItem}>
                <NavLink
                    to="/prizes"
                    className={({ isActive, isPending }) =>
                        `${styles.navItemLink} ${isPending ? styles.pending : ''} ${isActive ? styles.active : ''}`
                    }
                >
                    Prizes
                </NavLink>
            </div>

            <Link
                className={`${styles.button} ${styles.buttonLighter}`}
                type="button"
                to="/register"
            >
                Register
            </Link>
            <Link
                className={`${styles.button} ${styles.buttonDarker}`}
                type="button"
                to="/donate"
            >
                Donate
            </Link>

            <div
                className={loginStyles.dialogWrapper}
                onMouseEnter={showDialog}
                onMouseLeave={hideDialog}
                ref={dialogRef}
            >
                <button
                    className={`${styles.button} ${styles.loginButton}`}
                    type="button"
                >
                    <img
                        src="./../../public/images/Login_icon_2.png"
                        alt="Login"
                    />
                </button>

                {isLoginDialogVisible && (
                    <div className={loginStyles.dialog}>
                        <LoginForm
                            onClose={() => setIsLoginDialogVisible(false)}
                        />
                    </div>
                )}
            </div>
        </nav>
    );
}
