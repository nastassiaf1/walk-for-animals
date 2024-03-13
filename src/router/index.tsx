import { createBrowserRouter } from 'react-router-dom';
import App from 'pages/App';
import ErrorPage from 'pages/ErrorPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
    },
]);

export default router;
