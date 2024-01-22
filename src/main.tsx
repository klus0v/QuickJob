import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/error/error.tsx';
import Job from './pages/job/job.tsx';
import History from './pages/history/history.tsx';
import Profile from './pages/profile/profile.tsx';
import CreateJob from './pages/createJob/createJob.tsx';
import { Provider } from 'react-redux';
import store from './store/store.ts';
import EditJob from './pages/editJob/editJob.tsx';

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
    {
        path: '/job/create',
        element: <CreateJob />,
    },
    {
        path: '/job/:id',
        element: <Job />,
    },
    {
        path: '/edit',
        element: <EditJob />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>,
);
