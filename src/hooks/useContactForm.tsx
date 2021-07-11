import api from "@utils/api";
import { useMutation } from "react-query";

const useContactForm = () =>
	useMutation(() =>
		api
			.post(`http://13.234.241.199:8080/api/v1/partner/contactform`)
			.then((res: any) => res.data)
			.catch((error: any) => Promise.reject(error?.response?.data))
	);

export default useContactForm;
