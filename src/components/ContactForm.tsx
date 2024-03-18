import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import { ContactFormValues } from 'interfaces/ContactForm';

import styles from './../styles/form.module.scss';
import contactPageStyles from './../styles/contact.module.scss';

export default function ContactForm() {
    const [focused, setFocused] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ContactFormValues>();

    const onSubmit: SubmitHandler<ContactFormValues> = (data) => {
        console.log(data);
    };

    return (
        <>
            <h2 className={contactPageStyles.contactFormHeader}>Contact us</h2>
            <form
                className={styles.form}
                onSubmit={handleSubmit(onSubmit)}
                noValidate
            >
                <div
                    className={`${styles.formItem} ${focused === 'subject' ? styles.formItemHighlight : ''}`}
                >
                    <label className={styles.formLabel} htmlFor="subject">
                        Subject <span>*</span>
                    </label>
                    <select
                        {...register('subject', { required: true })}
                        id="subject"
                        onFocus={() => setFocused('subject')}
                        onBlur={() => setFocused(null)}
                    >
                        <option value="" disabled>
                            Select a topic
                        </option>
                        <option value="Walk">Walk for animals</option>
                        <option value="Adoption">Adoption</option>
                        <option value="Donations">Donations</option>
                        <option value="Training">Pet training</option>
                        <option value="Volunteering">Volunteering</option>
                        <option value="Veterinary">
                            Public veterinary care
                        </option>
                    </select>
                    {errors.subject && <p>This field is required</p>}
                </div>

                <div
                    className={`${styles.formItem} ${focused === 'name' ? styles.formItemHighlight : ''}`}
                >
                    <label className={styles.formLabel} htmlFor="name">
                        Name <span>*</span>
                    </label>
                    <input
                        type="text"
                        {...register('name', { required: true })}
                        id="name"
                        onFocus={() => setFocused('name')}
                        onBlur={() => setFocused(null)}
                    />
                    {errors.name && <p>This field is required</p>}
                </div>

                <div
                    className={`${styles.formItem} ${focused === 'email' ? styles.formItemHighlight : ''}`}
                >
                    <label className={styles.formLabel} htmlFor="email">
                        Email <span>*</span>
                    </label>
                    <input
                        type="email"
                        {...register('email', { required: true })}
                        id="email"
                        onFocus={() => setFocused('email')}
                        onBlur={() => setFocused(null)}
                    />
                    {errors.email && <p>This field is required</p>}
                </div>

                <div
                    className={`${styles.formItem} ${focused === 'phoneNumber' ? styles.formItemHighlight : ''}`}
                >
                    <label className={styles.formLabel} htmlFor="phoneNumber">
                        Phone Number <span>*</span>
                    </label>
                    <input
                        type="tel"
                        {...register('phoneNumber', { required: true })}
                        id="phoneNumber"
                        onFocus={() => setFocused('phoneNumber')}
                        onBlur={() => setFocused(null)}
                    />
                    {errors.phoneNumber && <p>This field is required</p>}
                </div>

                <div
                    className={`${styles.formItem} ${focused === 'message' ? styles.formItemHighlight : ''}`}
                >
                    <label className={styles.formLabel} htmlFor="message">
                        Message <span>*</span>
                    </label>
                    <textarea
                        {...register('message', { required: true })}
                        id="message"
                        cols={50}
                        rows={10}
                        placeholder="Please add a short message. Include your phone number if you prefer a call back."
                        onFocus={() => setFocused('message')}
                        onBlur={() => setFocused(null)}
                    />
                    {errors.message && <p>This field is required</p>}
                </div>

                <div
                    className={`${styles.formItem} ${focused === 'translationOptions' ? styles.formItemHighlight : ''}`}
                >
                    <label
                        className={styles.formLabel}
                        htmlFor="translationOptions"
                    >
                        Translation options <span>*</span>
                    </label>
                    <textarea
                        {...register('translationOptions', { required: true })}
                        id="translationOptions"
                        cols={50}
                        rows={10}
                        placeholder="To request a call back with translation services, please identify your language."
                        onFocus={() => setFocused('translationOptions')}
                        onBlur={() => setFocused(null)}
                    />
                    {errors.translationOptions && <p>This field is required</p>}
                </div>

                <button type="submit">Submit</button>
            </form>
        </>
    );
}
