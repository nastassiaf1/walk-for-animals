import { createRoot } from 'react-dom/client';
import router from './router';
import { RouterProvider } from 'react-router-dom';

const root = createRoot(document.getElementById('app'));

root.render(<RouterProvider router={router}></RouterProvider>);
