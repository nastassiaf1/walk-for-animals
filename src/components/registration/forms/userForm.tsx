import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { UserIndividual } from 'interfaces/User';
import { UserSize } from 'const/user';
import { useAddUserMutation } from 'services/user';
import { setStatusMessage } from 'store/slices/notificationSlice';
import { setUser } from 'store/slices/userSlice';

import styles from './../../../styles/form.module.scss';

export default function UserForm() {
    const [currentStep, setCurrentStep] = useState(0);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [addUser, { isLoading }] = useAddUserMutation();
    const maxStep = 1;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserIndividual>();

    const handleNextStep = (shift: number) => {
        const nextStep = currentStep + shift;

        setCurrentStep(nextStep);
    };

    const onSubmit: SubmitHandler<UserIndividual> = async (data) => {
        const result = await addUser(data);

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
        <div className={styles.formContainer}>
            <form
                className={styles.registrationForm}
                onSubmit={handleSubmit(onSubmit)}
            >
                <div
                    className={`${styles.registrationFormItem} ${currentStep === 0 ? styles.registrationFormItemActive : ''}`}
                >
                    <h2 className={styles.formHeader}>
                        Set your fundraising goal
                    </h2>
                    <div>
                        <label htmlFor="fundraisingGoal">
                            Your fundraising goal:
                        </label>
                        <input
                            type="text"
                            id="fundraisingGoal"
                            value="$350.00"
                            size={15}
                            maxLength={15}
                            required
                            {...register('fundraisingGoal')}
                        />
                        <span>Suggested goal:&nbsp;$350.00</span>
                    </div>

                    <div>
                        <p>
                            Lead by example! Kick things off by making a
                            donation. (Average donation is $75.){' '}
                        </p>
                        <label htmlFor="donation">
                            Personal donation amount:
                        </label>
                        <input
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
                    className={`${styles.registrationFormItem} ${currentStep === maxStep ? styles.registrationFormItemActive : ''}`}
                >
                    <h2 className={styles.formHeader}>Registration</h2>
                    <p>
                        <span>*</span>Indicates Required
                    </p>
                    <p>Personal information</p>
                    <div>
                        <label htmlFor="firstName">
                            <span>*</span>First:
                        </label>
                        <input
                            required
                            id="firstName"
                            {...register('firstName')}
                        />
                    </div>

                    <div>
                        <label htmlFor="lastName">
                            <span>*</span>Last:
                        </label>
                        <input
                            required
                            id="lastName"
                            {...register('lastName')}
                        />
                    </div>

                    <p>Contact information</p>
                    <div>
                        <label htmlFor="street">
                            <span>*</span>Street:
                        </label>
                        <input required id="street" {...register('street')} />
                    </div>

                    <div>
                        <label htmlFor="city">
                            <span>*</span>City:
                        </label>
                        <input required id="city" {...register('city')} />
                    </div>
                    <div>
                        <label htmlFor="postCode">
                            <span>*</span>ZIP / Post Code:
                        </label>
                        <input
                            required
                            id="postCode"
                            {...register('postCode')}
                        />
                    </div>

                    <p>Participant Center access information</p>
                    <div>
                        <label htmlFor="login">
                            <span>*</span>User Name:
                        </label>
                        <input required id="login" {...register('login')} />
                    </div>
                    <div>
                        <label htmlFor="password">
                            <span>*</span>Password
                        </label>
                        <input
                            required
                            id="password"
                            type="password"
                            minLength={6}
                            maxLength={20}
                            {...register('password')}
                        />
                        <span>6 to 20 characters</span>
                    </div>
                    <p>Additional information</p>
                    <div>
                        <label htmlFor="size">
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

                <div className={styles.formActions}>
                    {currentStep > 0 && (
                        <button
                            type="button"
                            onClick={() => handleNextStep(-1)}
                        >
                            Previous Step
                        </button>
                    )}
                    {currentStep < maxStep && (
                        <button type="button" onClick={() => handleNextStep(1)}>
                            Next Step
                        </button>
                    )}
                    {currentStep === maxStep && (
                        <button type="submit">Submit</button>
                    )}
                </div>
            </form>
        </div>
    );
}
