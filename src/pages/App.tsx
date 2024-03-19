import { Link, Outlet } from 'react-router-dom';
import Navigation from 'components/Navigation';
import Footer from 'components/Footer';
import StatusMessage from 'components/Notification';

import layoutStyle from './../styles/layout.module.scss';
import headerStyle from './../styles/header.module.scss';
import './../styles/global.scss';

export default function App() {
    return (
        <>
            <header className={layoutStyle.header}>
                <h1>
                    <Link aria-label="Link to Home page" to="/">
                        <img
                            src="../../public/images/logo.png"
                            className={headerStyle.logo}
                            alt="Walk for Animals"
                        />
                    </Link>
                </h1>
                <Navigation />
            </header>

            <main className={layoutStyle.main}>
                <Outlet />
            </main>

            <Footer />

            <StatusMessage />
        </>
    );
}
