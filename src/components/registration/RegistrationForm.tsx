import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Team, Teammate, UserIndividual } from 'interfaces/User';
import { TeamDivision, UserRole, UserSize } from 'const/user';
import { useAddUserMutation } from 'services/user';
import { setStatusMessage } from 'store/slices/notificationSlice';
import { setUser } from 'store/slices/userSlice';
import { uuid4 } from 'uuid4';

import styles from './../../styles/form.module.scss';
import mainStyles from './../../styles/main.module.scss';
import loginStyles from './../../styles/login.module.scss';

export default function UserForm() {
    const [currentStep, setCurrentStep] = useState(0);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [addUser] = useAddUserMutation();
    const location = useLocation();
    const userType = new URLSearchParams(location.search).get('type');
    const maxStep = userType === UserRole.INDIVIDUAL ? 1 : 2;

    const {
        register,
        handleSubmit,
        //formState: { errors }, //todo: add isLoading and errors state
    } = useForm<UserIndividual | Teammate | Team>();

    const handleNextStep = (shift: number) => {
        const nextStep = currentStep + shift;

        setCurrentStep(nextStep);
    };

    const onSubmit: SubmitHandler<UserIndividual | Teammate | Team> = async (
        data
    ) => {
        const result = await addUser({
            ...data,
            role: userType as UserRole,
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
                {userType === UserRole.TEAM && (
                    <div
                        className={`${styles.userFormItem} ${currentStep !== maxStep - 2 ? styles.userFormItemHidden : ''}`}
                    >
                        <h2 className={styles.formHeader}>Create a new team</h2>
                        <p>
                            Gather your animal-loving friends and combine your
                            fundraising power to make an even bigger impact on
                            the lives of animals.
                        </p>

                        <p>
                            <strong>
                                Three or more people are required to form a Walk
                                team.
                            </strong>{' '}
                            Team members can be anyone — family, friends,
                            coworkers, or neighbors!
                        </p>

                        <div className={styles.note}>
                            <h3>Returning users, log in first!</h3>
                            <span>
                                <b>Note: </b>To reactivate your team from last
                                year, you must be{' '}
                                <Link to={`/login?type=${userType}`}>
                                    signed in
                                </Link>
                            </span>
                            <p>
                                <br />
                            </p>
                        </div>

                        <div>
                            <label
                                htmlFor="teamName"
                                className={loginStyles.loginFormLabel}
                            >
                                <span>*</span> Team name:
                            </label>
                            <div>
                                <input
                                    type="text"
                                    id="teamName"
                                    size={15}
                                    maxLength={15}
                                    required
                                    className={loginStyles.loginFormInput}
                                    {...register('teamName')}
                                />
                            </div>
                        </div>
                        <br />
                        <div>
                            <label
                                className={loginStyles.loginFormLabel}
                                htmlFor="division"
                            >
                                Team division:
                            </label>
                            <select {...register('division')} id="division">
                                <option value={TeamDivision.FRIENDS_AND_FAMILY}>
                                    {TeamDivision.FRIENDS_AND_FAMILY}
                                </option>
                                <option value={TeamDivision.COMPANY_TEAM}>
                                    {TeamDivision.COMPANY_TEAM}
                                </option>
                                <option value={TeamDivision.AHS}>
                                    {TeamDivision.AHS}
                                </option>
                            </select>
                        </div>
                    </div>
                )}

                <div
                    className={`${styles.userFormItem} ${currentStep !== maxStep - 1 ? styles.userFormItemHidden : ''}`}
                >
                    <h2 className={styles.formHeader}>
                        Set your fundraising goal
                    </h2>
                    <div>
                        <label
                            htmlFor="fundraisingGoal"
                            className={loginStyles.loginFormLabel}
                        >
                            {userType === UserRole.TEAM
                                ? 'Team fundraising goal:'
                                : 'Your fundraising goal:'}
                        </label>
                        <div className={styles.inputIconWrapper}>
                            <input
                                type="text"
                                id="fundraisingGoal"
                                value={
                                    userType === UserRole.TEAM
                                        ? '1.000.00'
                                        : '350.00'
                                }
                                size={15}
                                maxLength={15}
                                required
                                className={loginStyles.loginFormInput}
                                {...register('fundraisingGoal')}
                            />
                        </div>
                        <span className={styles.userFormTip}>
                            {userType === UserRole.TEAM
                                ? 'Suggested Team Goal:  $1,000.00'
                                : 'Suggested goal:&nbsp;$350.00'}
                        </span>
                    </div>

                    {userType === UserRole.INDIVIDUAL && (
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
                            <div className={styles.inputIconWrapper}>
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
                    )}
                </div>

                <div
                    className={`${styles.userFormItem} ${currentStep !== maxStep ? styles.userFormItemHidden : ''}`}
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
