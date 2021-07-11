import useLoginWithGoogle from "@hooks/auth/useLoginWithGoogle";
import useValidateUser from "@hooks/auth/useValidateUser";
import React, { useContext, useEffect, useState } from "react";
import { useGoogleLogin } from "react-google-login";
import { useHistory } from "react-router";

interface AuthValueProps {
	currentUser: any;
	googleLogin: any;
	validateUser: any;
	googleLoginError: string;
	updateCart: any;
}

const AuthContext = React.createContext<Partial<AuthValueProps>>({});

export function useAuth() {
	return useContext(AuthContext);
}

export default function AuthProvider(props: any) {
	const [currentUser, setCurrentUser] = useState();
	const [googleLoginError, setGoogleLoginError] = useState("");
	const [cart, setCart] = useState<any>([]);

	const { mutate: validateUser, isLoading, data, isSuccess, isError } = useValidateUser();
	const { mutate: loginWithGoogle } = useLoginWithGoogle();
	const history = useHistory();

	const onGoogleLoginSuccess = (res: any) => {
		setGoogleLoginError("");
		const payload: any = { id_token: res.tokenObj.id_token };
		loginWithGoogle(payload, {
			onSuccess: () => validateUser(),
			onError: err => setGoogleLoginError((err as any).message),
		});
	};

	const onGoogleLoginFailure = (res: any) => {
		setGoogleLoginError("Failed to sign in with Google");
	};

	const { signIn: googleLogin } = useGoogleLogin({
		onSuccess: onGoogleLoginSuccess,
		onFailure: onGoogleLoginFailure,
		clientId: "720135140574-kdm53595i7grlh1ptt1brrnsjlit5uoq.apps.googleusercontent.com",
		responseType: "id_token",
	});

	// useEffect(() => {
	// 	validateUser();
	// }, []);

	useEffect(() => {
		if (isSuccess) {
			setCurrentUser(data?.data);
			history.replace("/");
		}
	}, [isSuccess]);

	// TODO: To be commented before deploying
	useEffect(() => {
		if (isError) {
			const data: any = {
				roles: [],
				_id: "606a74120939c6de0b8ed01c",
				firstName: "Jane",
				lastName: "Doe",
				email: "ashwinbhatkal@gmail.com",
				password: "$2b$10$0qvKmNuDB6iGP5KXWBAgzuZ5zSR9FwN4ehn.FF4lRRIe/W7FHRuR6",
				contactNumber: "9878909878",
				isSuperUser: true,
				verified: true,
				createdAt: "2021-04-05T02:21:06.643Z",
				updatedAt: "2021-04-05T02:56:54.306Z",
				__v: 0,
			};
			setCurrentUser(data);
			history.replace("/");
		}
	}, [isError]);

	const updateCart = (type: string, object: any) => {
		let items = [...cart];
		switch (type) {
			case "Add":
				items.push(object);
				setCart(items);
				break;
			case "Remove":
				items = items.filter(item => item.id !== object.id);
				break;
		}
	};

	const value = {
		currentUser,
		googleLogin,
		validateUser,
		googleLoginError,
		updateCart,
	};

	return (
		<AuthContext.Provider value={value}>{!isLoading && props.children}</AuthContext.Provider>
	);
}
