import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { UserIndividual } from 'interfaces/User';
import { UserRole, UserSize } from 'const/user';
import { useAddUserMutation } from 'services/user';
import { setStatusMessage } from 'store/slices/notificationSlice';
import { setUser } from 'store/slices/userSlice';
import { uuid4 } from 'uuid4';

import styles from './../../../styles/form.module.scss';
import mainStyles from './../../../styles/main.module.scss';
import loginStyles from './../../../styles/login.module.scss';

export default function UserForm() {
    const [currentStep, setCurrentStep] = useState(0);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [addUser] = useAddUserMutation();
    const maxStep = 1;

    const {
        register,
        handleSubmit,
        //formState: { errors }, //todo: add isLoading and errors state
    } = useForm<UserIndividual>();

    const handleNextStep = (shift: number) => {
        const nextStep = currentStep + shift;

        setCurrentStep(nextStep);
    };

    const onSubmit: SubmitHandler<UserIndividual> = async (data) => {
        const result = await addUser({
            ...data,
            role: UserRole.INDIVIDUAL,
            id: uuid4(),
        });

        if (result) {
            sessionStorage.setItem('user', JSON.stringify(result));

            dispatch(setStatusMessage('Welcome to Walk for Animals!'));
            dispatch(setUser(result));
            navigate('/');
        } else {
            dispatch(setStatusMessage('Please try again'));
        }
    };

    return (
        <div className={`${styles.formContainer} ${mainStyles.content}`}>
            <form
                className={`${styles.userForm} ${loginStyles.loginForm}`}
                onSubmit={handleSubmit(onSubmit)}
            >
                <div
                    className={`${styles.userFormItem} ${currentStep !== 0 ? styles.userFormItemHidden : ''}`}
                >
                    <h2 className={styles.formHeader}>
                        Set your fundraising goal
                    </h2>
                    <div>
                        <label
                            htmlFor="fundraisingGoal"
                            className={loginStyles.loginFormLabel}
                        >
                            Your fundraising goal:
                        </label>
                        <input
                            type="text"
                            id="fundraisingGoal"
                            value="$350.00"
                            size={15}
                            maxLength={15}
                            required
                            className={loginStyles.loginFormInput}
                            {...register('fundraisingGoal')}
                        />
                        <br />
                        <span className={styles.userFormTip}>
                            Suggested goal:&nbsp;$350.00
                        </span>
                    </div>

                    <div>
                        <p>
                            Lead by example! Kick things off by making a
                            donation. (Average donation is $75.){' '}
                        </p>
                        <label
                            className={loginStyles.loginFormLabel}
                            htmlFor="donation"
                        >
                            Personal donation amount:
                        </label>
                        <input
                            className={loginStyles.loginFormInput}
                            type="text"
                            id="donation"
                            size={15}
                            maxLength={15}
                            required
                            {...register('donation')}
                        />
                    </div>
                </div>

                <div
                    className={`${styles.userFormItem} ${currentStep !== 1 ? styles.userFormItemHidden : ''}`}
                >
                    <h2 className={styles.formHeader}>Registration</h2>
                    <p>
                        <span>*</span>Indicates Required
                    </p>
                    <p className={styles.userFormSubhead}>
                        Personal information
                    </p>
                    <div>
                        <label
                            className={loginStyles.loginFormLabel}
                            htmlFor="firstName"
                        >
                            <span>*</span>First:
                        </label>
                        <input
                            required
                            className={loginStyles.loginFormInput}
                            id="firstName"
                            {...register('firstName')}
                        />
                    </div>

                    <div>
                        <label
                            className={loginStyles.loginFormLabel}
                            htmlFor="lastName"
                        >
                            <span>*</span>Last:
                        </label>
                        <input
                            required
                            className={loginStyles.loginFormInput}
                            id="lastName"
                            {...register('lastName')}
                        />
                    </div>

                    <p className={styles.userFormSubhead}>
                        Contact information
                    </p>
                    <div>
                        <label
                            className={loginStyles.loginFormLabel}
                            htmlFor="street"
                        >
                            <span>*</span>Street:
                        </label>
                        <input
                            className={loginStyles.loginFormInput}
                            required
                            id="street"
                            {...register('street')}
                        />
                    </div>

                    <div>
                        <label
                            className={loginStyles.loginFormLabel}
                            htmlFor="city"
                        >
                            <span>*</span>City:
                        </label>
                        <input
                            className={loginStyles.loginFormInput}
                            required
                            id="city"
                            {...register('city')}
                        />
                    </div>
                    <div>
                        <label
                            className={loginStyles.loginFormLabel}
                            htmlFor="postCode"
                        >
                            <span>*</span>ZIP / Post Code:
                        </label>
                        <input
                            required
                            className={loginStyles.loginFormInput}
                            id="postCode"
                            {...register('postCode')}
                        />
                    </div>

                    <p className={styles.userFormSubhead}>
                        Participant Center access information
                    </p>
                    <div>
                        <label
                            className={loginStyles.loginFormLabel}
                            htmlFor="login"
                        >
                            <span>*</span>User Name:
                        </label>
                        <input
                            className={loginStyles.loginFormInput}
                            required
                            id="login"
                            {...register('login')}
                        />
                    </div>
                    <div>
                        <label
                            className={loginStyles.loginFormLabel}
                            htmlFor="password"
                        >
                            <span>*</span>Password
                        </label>
                        <input
                            className={loginStyles.loginFormInput}
                            required
                            id="password"
                            type="password"
                            minLength={6}
                            maxLength={20}
                            {...register('password')}
                        />
                        <span className={styles.userFormTipItalic}>
                            6 to 20 characters
                        </span>
                    </div>
                    <p className={styles.userFormSubhead}>
                        Additional information
                    </p>
                    <div>
                        <label
                            className={loginStyles.loginFormLabel}
                            htmlFor="size"
                        >
                            Raise $100 by March 31, and we`ll send you your Walk
                            T-shirt before the event so you can wear it proudly
                            on Walk day. What is your T-shirt size?
                        </label>
                        <select {...register('size')} id="size">
                            <option value={UserSize.XS}>{UserSize.XS}</option>
                            <option value={UserSize.S}>{UserSize.S}</option>
                            <option value={UserSize.M}>{UserSize.M}</option>
                            <option value={UserSize.L}>{UserSize.L}</option>
                            <option value={UserSize.XL}>{UserSize.XL}</option>
                            <option value={UserSize.XXL}>{UserSize.XXL}</option>
                            <option value={UserSize.XXXL}>
                                {UserSize.XXXXL}
                            </option>
                            <option value={UserSize.XXXXL}>
                                {UserSize.XXXXL}
                            </option>
                        </select>
                    </div>
                </div>

                <div className={styles.actions}>
                    {currentStep > 0 && (
                        <div
                            className={`${mainStyles.buttonContainer} ${mainStyles.shortButton}`}
                        >
                            <button
                                type="button"
                                onClick={() => handleNextStep(-1)}
                            >
                                Previous Step
                            </button>
                        </div>
                    )}
                    {currentStep < maxStep && (
                        <div
                            className={`${mainStyles.buttonContainer} ${mainStyles.shortButton}`}
                        >
                            <button
                                type="button"
                                onClick={() => handleNextStep(1)}
                            >
                                Next Step
                            </button>
                        </div>
                    )}
                    {currentStep === maxStep && (
                        <div
                            className={`${mainStyles.buttonContainer} ${mainStyles.shortButton}`}
                        >
                            <button type="submit">Submit</button>
                        </div>
                    )}
                </div>
            </form>
        </div>
    );
}
