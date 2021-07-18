import { SET_CURRENT_USER } from "../actions/types";

const initialState = {
	isAuthenticated: false,
	user: {},
};

export default function (state = initialState, action) {
	switch (action.type) {
		case SET_CURRENT_USER:
			return {
				...state,
				isAuthenticated: action.payload,
				user: action.payload,
			};

		default:
			return state;
	}
}

// //Log User Out
// export const logoutUser = () => dispatch => {
// 	//Remove token from localStorage
// 	localStorage.removeItem("jwtToken");

// 	//Remove auth header for future requests
// 	setAuthToken(false);

// 	//Set current user to {} which will set isAuthenticated to false
// 	dispatch(setCurrentUser({}));
// };
