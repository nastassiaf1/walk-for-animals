import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { User } from 'interfaces/User';
import { userApi } from 'services/user';
import { setStatusMessage } from 'store/slices/notificationSlice';
import { setUser } from 'store/slices/userSlice';

import styles from './../styles/login.module.scss';
import navStyles from './../styles/nav.module.scss';

export default function LoginDialog({ onClose }: { onClose: () => void }) {
    const { register, handleSubmit } = useForm<User>();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [trigger, { isLoading }] =
        userApi.endpoints.getUserByNameAndPassword.useLazyQuery();

    const onSubmit: SubmitHandler<User> = async (userData) => {
        const result = await trigger(userData);

        if (result.data) {
            sessionStorage.setItem('user', JSON.stringify(result.data));

            dispatch(setStatusMessage('Welcome to Walk for Animals!'));
            dispatch(setUser(result.data));
            navigate('/');
            onClose();
        } else {
            dispatch(setStatusMessage('Please try again'));
        }
    };

    return (
        <div className={styles.loginDialogWrapper}>
            <p className={styles.loginDialogDescription}>
                If you`re already registered for the 2024 Walk for Animals, log
                in here to access your Participant Center.
            </p>
            <form
                className={styles.loginDialog}
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className={styles.loginDialogItem}>
                    <label htmlFor="login">Username: </label>
                    <input
                        id="login"
                        {...register('login', { required: true })}
                    />
                </div>
                <div className={styles.loginDialogItem}>
                    <label htmlFor="password">Password: </label>
                    <input
                        id="password"
                        {...register('password', { required: true })}
                    />
                </div>
                <button
                    className={`${navStyles.button} ${navStyles.buttonLighter} ${styles.loginDialogButton}`}
                    disabled={isLoading}
                >
                    Sign in
                </button>
            </form>
        </div>
    );
}
