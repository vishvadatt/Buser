import axios from 'axios';

// const url = `http://localhost:9001`;
// export const url = `http://52.22.34.128`;


export const url = `https://api.buserinstitute.com`;

export const axiosInstance = axios.create({
	baseURL: `${url}/api/`,
	headers: {
		'Content-Type': 'application/json',
	},
});

axiosInstance.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem('token');
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);
