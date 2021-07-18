import axios from "axios";
import { url } from "../config";
import { SET_CURRENT_USER, GET_ERRORS } from "./types";

const rootUrl = url;

//Register User
export const registerUser = (userData, history) => dispatch => {
	axios
		.post(`${rootUrl}/api/v1/auth/login/customer`, userData)
		.then(res => history.push("/login"))
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data,
			})
		);
};

// // Set logged in user
// export const setCurrentUser = decoded => {
// 	return {
// 		type: SET_CURRENT_USER,
// 		payload: decoded,
// 	};
// };
// // GET
// export const setCategory = cat => dispatch => {
// 	console.log("action", cat);
// 	axios
// 		.get(`${rootUrl}/api/hospital/userAccess/${cat}/`)
// 		.then(res => {
// 			console.log(res.data);
// 			dispatch({
// 				type: GET_CATEGORIE,
// 				payload: res.data,
// 			});
// 		})
// 		.catch(err =>
// 			dispatch({
// 				type: GET_CATEGORIE,
// 				payload: {},
// 			})
// 		);
// };

// export const forgotUser = (userData, history) => dispatch => {
// 	axios
// 		.post(`${rootUrl}/api/users/forgot-password`, userData)
// 		.then(res => {
// 			alert("Link is send to registered email id if it exits");
// 		})
// 		.then(res => history.push("/login"))
// 		.catch(err =>
// 			dispatch({
// 				type: GET_ERRORS,
// 				payload: err,
// 			})
// 		);
// };

// export const forgotPasswordUser = userData => dispatch => {
// 	axios
// 		.post(`${rootUrl}/api/users/forgot`, userData)
// 		.then(res => {
// 			alert("Your Password Is updated succesfully");
// 		})
// 		.catch(err => console.log(err));
// };

// export const loginUser = userData => dispatch => {
// 	let use = axios
// 		.post(`${rootUrl}/api/careProvider/login/`, userData)
// 		.then(res => {
// 			console.log(res);

// 			//Save to Local Storage
// 			const { token, user } = res.data;

// 			//Set token to is
// 			localStorage.setItem("jwtToken", token);

// 			localStorage.setItem("user", JSON.stringify(user));

// 			//Set token Auth header
// 			setAuthToken(token);

// 			//Decode token to get user data
// 			const decoded = jwt_decode(token);

// 			// Calling day login Tracker Route
// 			axios.post(`${url}/api/careProvider/dayTracker`, {
// 				logger_user_name: user.user_name,
// 				log_in_person_name: user.care_provider_name,
// 				log_in_out_serial: "1",
// 			});
// 			//set current user
// 			dispatch(setCurrentUser(decoded));
// 			dispatch(setCategory(user.care_provider_indfier));
// 			return res.data;
// 		})
// 		.catch(
// 			err => {
// 				dispatch(setCategory("err"));
// 				throw err.response.data;
// 			}
// 			// dispatch({
// 			//   type: GET_ERRORS,
// 			//   payload: err.response.data
// 			// })
// 		);
// 	return use;
// };

// // Log user out
// export const logoutUser = user => dispatch => {
// 	console.log(user);
// 	// Calling Day login Tracker Route
// 	if (user) {
// 		axios
// 			.post(`${url}/api/careProvider/dayTracker`, {
// 				logger_user_name: user.user_name,
// 				log_in_person_name: user.care_provider_name,
// 				log_in_out_serial: "2",
// 			})
// 			.then(r => {
// 				localStorage.removeItem("user");
// 			});
// 	}

// 	// Remove token from localStorage
// 	localStorage.removeItem("jwtToken");
// 	// Remove auth header for future requests
// 	setAuthToken(false);
// 	// Set current user to {} which will set isAuthenticated to false
// 	dispatch(setCurrentUser({}));
// };
