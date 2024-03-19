import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
    selectStatusMessage,
    setStatusMessage,
} from 'store/slices/notificationSlice';

import styles from './../styles/notification.module.scss';

export default function StatusMessage() {
    const statusMessage = useSelector(selectStatusMessage);
    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(setStatusMessage(null));
        }, 3000);

        return () => clearTimeout(timer);
    }, [statusMessage, dispatch]);

    return createPortal(
        <div className={styles.notification}>
            {statusMessage && (
                <p className={styles.notificationMessage}>{statusMessage}</p>
            )}
        </div>,
        document.body
    );
}
