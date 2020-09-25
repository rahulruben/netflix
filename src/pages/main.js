import React from 'react';
import { Switch, withRouter } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import { Home, Browse, SignIn, SignUp } from '../pages';
import { IsUserRedirect, ProtectedRoute } from '../helpers/routes';
import { useAuthListener } from '../hooks';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { AnimationWrapper } from '../helpers/animation-wrapper';

function Main({ location }) {
	const user = useAuthListener();
	return (
		<AnimationWrapper>
			<TransitionGroup className="transition-group">
				<CSSTransition
					key={location.key}
					timeout={{ enter: 300, exit: 300 }}
					classNames="fade"
				>
					<Switch location={location}>
						<IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
							<SignIn />
						</IsUserRedirect>
						<IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
							<SignUp />
						</IsUserRedirect>
						<ProtectedRoute user={user} path={ROUTES.BROWSE}>
							<Browse />
						</ProtectedRoute>
						<IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
							<Home />
						</IsUserRedirect>
					</Switch>
				</CSSTransition>
			</TransitionGroup>
		</AnimationWrapper>
	);
}

export default withRouter(Main);
