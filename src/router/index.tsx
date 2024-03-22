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
                        path: '/wfafundraisingtips',
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
