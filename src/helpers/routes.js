import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
    const isUserLoggedIn = user.user;
    return (
        <Route
            {...rest}
            render={() => {
                if (!isUserLoggedIn) {
                    return children;
                }

                if (isUserLoggedIn) {
                    return (
                        <Redirect
                            to={{
                                pathname: loggedInPath
                            }}
                        />
                    );
                }

                return null;
            }}
        />
    )
}

export function ProtectedRoute({ user, children, ...rest }) {
    const isUserLoggedIn = user.user;
    return (
        <Route
            {...rest}
            render={({ location }) => {
                if (isUserLoggedIn) {
                    return children;
                }

                if (!isUserLoggedIn) {
                    return (
                        <Redirect
                            to={{
                                pathname: ROUTES.SIGN_IN,
                                state: { from: location }
                            }}
                        />
                    )
                }

                return null;
            }}
        />
    )
}