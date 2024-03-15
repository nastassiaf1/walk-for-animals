import { NavLink } from 'react-router-dom';

import navStyle from './../styles/nav.module.scss';

export default function Navigation() {
    return (
        <nav className={navStyle.nav} aria-label="Main Navigation">
            <NavLink
                to="/events"
                className={({ isActive, isPending }) =>
                    `${navStyle.navItem} ${isPending ? navStyle.pending : ''} ${isActive ? navStyle.active : ''}`
                }
            >
                Event Info
            </NavLink>
            <NavLink
                to="/fundraising"
                className={({ isActive, isPending }) =>
                    `${navStyle.navItem} ${isPending ? navStyle.pending : ''} ${isActive ? navStyle.active : ''}`
                }
            >
                Fundraising
            </NavLink>
            <NavLink
                to="/prizes"
                className={({ isActive, isPending }) =>
                    `${navStyle.navItem} ${isPending ? navStyle.pending : ''} ${isActive ? navStyle.active : ''}`
                }
            >
                Prizes
            </NavLink>
            <button
                className={`${navStyle.button} ${navStyle.buttonLighter}`}
                type="button"
            >
                Register
            </button>
            <button
                className={`${navStyle.button} ${navStyle.buttonDarker}`}
                type="button"
            >
                Donate
            </button>
        </nav>
    );
}
