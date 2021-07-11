import { useAuth } from "@contexts/Auth";
import React from "react";
import { Redirect, Route } from "react-router";

// export default function PrivateRoute({ Component, ...rest}) {
export default function PrivateRoute() {
	const { currentUser } = useAuth();

	// return <Route {...rest} render={
	return (
		<Route
			render={props => {
				// return currentUser ? <Component {...props} /> : <Redirect to="/" />
				return <Redirect to="/" />;
			}}
		/>
	);
}
