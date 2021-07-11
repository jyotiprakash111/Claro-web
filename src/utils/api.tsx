// This file contains the configuration for the HTTP client library
import axios from "axios";

const baseURL = "http://13.234.241.199:8080/api/v1";

const api = axios.create({
	baseURL,
	responseType: "json",
	withCredentials: true,
});

// Add any request/response interceptors here

export default api;
