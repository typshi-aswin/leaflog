import { createBrowserRouter } from 'react-router-dom';
import Login from './application/authentication/Login/Login';
import Home from './application/home/Home';
import Profile from './application/profile/Profile';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
    },

    {
        path:'/home',
        element: <Home />
    },
    
    {
        path: '/profile',
        element: <Profile />
    }

]);