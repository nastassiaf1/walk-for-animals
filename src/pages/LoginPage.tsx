import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SubmitHandler, useForm } from 'react-hook-form';
import { userApi } from 'services/user';
import { useNavigate } from 'react-router-dom';
import { User } from 'interfaces/user';

import mainStyles from './../styles/main.module.scss';
import styles from './../styles/login.module.scss';
import { setStatusMessage } from 'store/slices/notificationSlice';
import { setUser } from 'store/slices/userSlice';

export default function LoginPage() {
    const [isEmailInputVisible, setIsEmailInputVisible] = useState(false);
    const [notImplementedError, setNotImplementedError] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // login imitation
    const [trigger, { isLoading }] =
        userApi.endpoints.getUserByNameAndPassword.useLazyQuery();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<User>();

    const onSubmit: SubmitHandler<User> = async (userData) => {
        const result = await trigger(userData);

        if (result.data) {
            sessionStorage.setItem('user', JSON.stringify(result.data));

            dispatch(setStatusMessage('Welcome to Walk for Animals!'));
            dispatch(setUser(result.data));
            navigate('/');
        } else {
            dispatch(setStatusMessage('Please try again'));
        }
    };

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
                        <form
                            className={styles.loginForm}
                            onSubmit={handleSubmit(onSubmit)}
                        >
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
                                className={`${mainStyles.buttonContainer} ${
                                    isLoading ||
                                    !!errors.login ||
                                    !!errors.password
                                        ? mainStyles.buttonContainerDisabled
                                        : ''
                                } ${styles.button}`}
                            >
                                <button type="submit">Log in</button>
                            </div>
                            <div>
                                <button
                                    className={styles.loginFormAddButton}
                                    type="button"
                                    onClick={() =>
                                        setIsEmailInputVisible(
                                            !isEmailInputVisible
                                        )
                                    }
                                >
                                    Email me my login information
                                </button>
                            </div>
                            {isEmailInputVisible && (
                                <div
                                    className={
                                        notImplementedError
                                            ? mainStyles.errorContainer
                                            : ''
                                    }
                                >
                                    {notImplementedError && (
                                        <span className={mainStyles.error}>
                                            The system cannot send email at this
                                            time. Contact Luminate Client Care.
                                        </span>
                                    )}
                                    <label
                                        className={styles.loginFormLabel}
                                        htmlFor="email"
                                    >
                                        <span>*</span> Email:
                                    </label>
                                    <input
                                        id="email"
                                        className={styles.loginFormInput}
                                        {...register('email', {
                                            required: true,
                                        })}
                                    />
                                    <div
                                        className={`${mainStyles.buttonContainer}  ${styles.button}`}
                                    >
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setNotImplementedError(true)
                                            }
                                        >
                                            Send User Name
                                        </button>
                                    </div>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
