import { createBrowserRouter } from 'react-router-dom';
import App from 'pages/App';
import ErrorPage from 'pages/ErrorPage';
import MainContent from 'components/MainContent';
import ContactFormPage from 'pages/ContactFormPage';
import PrizesPage from 'pages/PrizesPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                errorElement: <ErrorPage />,
                children: [
                    {
                        path: '/',
                        element: <MainContent />,
                    },
                    {
                        path: '/prizes',
                        element: <PrizesPage />,
                    },
                ],
            },
        ],
    },
    {
        path: '/contact-form',
        element: <ContactFormPage />,
        errorElement: <ErrorPage />,
    },
]);

export default router;
