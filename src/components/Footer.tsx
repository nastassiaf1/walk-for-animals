import styles from './../styles/footer.module.scss';

export default function Footer() {
    return (
        <div className={styles.footer} role="contentinfo">
            <div className={styles.footerContent}>
                <div className={styles.footerLinks}>
                    <p className={styles.footerLogo}>
                        <a
                            href="https://www.animalhumanesociety.org/"
                            target="_blank"
                            aria-label="Animal Humane Society"
                            rel="noreferrer"
                        >
                            <img
                                src="../../public/images/whitelogo.png"
                                alt="Animal Humane Society"
                                width="220px"
                            />
                        </a>
                    </p>
                    <p className={styles.footerSources}>
                        <a href="http://www.animalhumanesociety.org/press/media-resources">
                            Media Resources
                        </a>{' '}
                        •{' '}
                        <a href="http://www.animalhumanesociety.org/donate/privacy-policy">
                            Privacy Policy
                        </a>{' '}
                        •{' '}
                        <a href="http://www.animalhumanesociety.org/contactus">
                            Contact Us
                        </a>
                    </p>
                    <p className={styles.footerMedia}>
                        <a
                            href="http://www.facebook.com/animalhumanesociety"
                            target="_blank"
                            aria-label="Link to Facebook"
                            rel="noreferrer"
                        >
                            <img
                                src="https://secure.animalhumanesociety.org/images/content/pagebuilder/white_facebook_logo.png"
                                alt="Facebook"
                            />
                        </a>{' '}
                        &nbsp;&nbsp;
                        <a
                            href="http://instagram.com/animalhumanemn"
                            target="_blank"
                            aria-label="Link to Instagram"
                            rel="noreferrer"
                        >
                            <img
                                src="https://secure.animalhumanesociety.org/images/content/pagebuilder/instagram-logo-white.png"
                                alt="Instagram"
                            />
                        </a>{' '}
                        &nbsp;&nbsp;
                        <a
                            href="http://animalhumanemn.tumblr.com/"
                            target="_blank"
                            aria-label="Link to Tumblr"
                            rel="noreferrer"
                        >
                            <img
                                src="https://secure.animalhumanesociety.org/images/content/pagebuilder/tumblr-logo-white-512.png
                                "
                                alt="Tumblr"
                            />
                        </a>{' '}
                        &nbsp;&nbsp;
                        <a
                            href="https://www.youtube.com/user/animalhumanesociety"
                            target="_blank"
                            aria-label="Link to YouTube"
                            rel="noreferrer"
                        >
                            <img
                                src="https://secure.animalhumanesociety.org/images/content/pagebuilder/youtube.png"
                                alt="YouTube"
                            />
                        </a>{' '}
                        &nbsp;&nbsp;
                        <a
                            href="https://www.tiktok.com/@animalhumanemn"
                            target="_blank"
                            aria-label="Link to Tik-Tok"
                            rel="noreferrer"
                        >
                            <img
                                src="https://secure.animalhumanesociety.org/images/content/pagebuilder/210630_TikTok_icon.png"
                                alt="TikTok"
                                width="18"
                                height="20"
                            />
                        </a>
                    </p>
                    <p className={styles.footerSources}>
                        © 2024 Animal Humane Society
                    </p>
                </div>
            </div>
        </div>
    );
}
