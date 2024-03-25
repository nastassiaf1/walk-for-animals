import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { User } from 'interfaces/user';

import mainStyles from './../styles/main.module.scss';
import styles from './../styles/login.module.scss';

export default function LoginPage() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<User>();

    return (
        <>
            <div className={mainStyles.mainImgContainer}></div>
            <div className={mainStyles.content}>
                <h2>Log in or create a new account</h2>
                <div className={styles.loginContainer}>
                    <div>
                        <p className={styles.description}>
                            New to the Walk? Start the <br /> process here.
                        </p>
                        <div
                            className={`${mainStyles.buttonContainer} ${styles.button}`}
                        >
                            <Link to="/create-acc">Create an account</Link>
                        </div>
                    </div>
                    <div>
                        <p className={styles.description}>
                            If you`ve participated in the Walk
                            <br /> for Animals before, log in below.
                        </p>
                        <form className={styles.loginForm}>
                            <label
                                className={styles.loginFormLabel}
                                htmlFor="login"
                            >
                                <span>*</span> User Name:
                            </label>
                            <input
                                id="login"
                                className={styles.loginFormInput}
                                {...register('login', { required: true })}
                            />
                            <label
                                className={styles.loginFormLabel}
                                htmlFor="password"
                            >
                                <span>*</span> Password:
                            </label>
                            <input
                                id="password"
                                className={styles.loginFormInput}
                                {...register('password', { required: true })}
                            />
                            <div
                                className={`${mainStyles.buttonContainer} ${styles.button}`}
                            >
                                <Link to="/create-acc">Log in</Link>
                            </div>
                            <div>
                                <button className={styles.loginFormAddButton}>
                                    Email me my login information
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
