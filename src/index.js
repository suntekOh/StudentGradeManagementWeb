import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root, { loader as rootLoader, action as rootAction } from "./components/root";
import IdentityRoot, { loader as identityRootLoader, action as identityRootAction } from "./components/identity/identity-root";
import Login from "./components/identity/login";
import ForgotPassword from './components/identity/forgot-password';
import PrepareSignUp from './components/identity/prepare-signup';
import { action as signUpAction } from './components/identity/signup';
import ErrorPage from "./components/error-page";


const root = ReactDOM.createRoot(document.getElementById('root'));

const router =
    createBrowserRouter([
        {
            path: "/",
            element: <Root />,
            loader: rootLoader,
            action: rootAction,
            errorElement: <ErrorPage />,
            //children: [
            //    {
            //        errorElement: <ErrorPage />,
            //        children: [
            //            { index: true, element: <Index /> },
            //            {
            //                path: "contacts/:contactId",
            //                element: <Contact />,
            //                loader: contactLoader,
            //                action: contactAction,
            //            },
            //            /* the rest of the routes */
            //        ],
            //    },
            //],
        },
        {
            path: "/identity",
            element: <IdentityRoot />,
            loader: identityRootLoader,
            action: identityRootAction,
            /*        errorElement: <ErrorPage />,*/
            /*                    errorElement: <ErrorPage />,*/
            children: [
                /*                        { index: true, element: <Index /> },*/
                {
                    path: "login",
                    element: <Login />,
                },
                {
                    path: "forgotpassword",
                    element: <ForgotPassword />
                },
                {
                    path: "prepare-signup",
                    element: <PrepareSignUp />
                },
                {
                    path: "signup",
                    action: signUpAction
                },
            ],
        },
    ]);

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

