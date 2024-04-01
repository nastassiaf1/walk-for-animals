import { Outlet, createBrowserRouter } from 'react-router-dom';
import App from 'pages/App';
import ErrorPage from 'pages/ErrorPage';
import MainContent from 'components/MainContent';
import ContactFormPage from 'pages/ContactFormPage';
import PrizesPage from 'pages/PrizesPage';
import EventsPage from 'pages/EventsPage';
import VendorsPage from 'pages/VendorsPage';
import FaqsPage from 'pages/FaqsPage';
import ParkingPage from 'pages/ParkingPage';
import FundraisingtipsPage from 'pages/FundraisingtipsPage';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import RegistrationForm from 'components/RegistrationForm';

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
                    {
                        path: '/register',
                        element: <RegisterPage />,
                    },
                    {
                        path: '/login',
                        element: <LoginPage />,
                    },
                    {
                        path: '/create-acc',
                        element: <RegistrationForm />,
                    },
                    {
                        path: '/events',
                        element: <Outlet />,
                        children: [
                            {
                                path: '',
                                element: <EventsPage />,
                            },
                            {
                                path: 'wfavendors',
                                element: <VendorsPage />,
                            },
                            {
                                path: 'parking',
                                element: <ParkingPage />,
                            },
                            {
                                path: 'wfafaqs',
                                element: <FaqsPage />,
                            },
                        ],
                    },
                    {
                        path: '/fundraising',
                        element: <Outlet />,
                        children: [
                            {
                                path: '',
                                element: <FundraisingtipsPage />,
                            },
                        ],
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
