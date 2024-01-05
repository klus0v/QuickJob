import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/error/error.tsx';
import Job from './pages/job/job.tsx';
import History from './pages/history/history.tsx';
import Profile from './pages/profile/profile.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/job',
        element: <Job />,
    },
    {
        path: '/history',
        element: <History />,
    },
    {
        path: '/profile',
        element: <Profile />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
