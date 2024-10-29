import Cookies from "js-cookie";

export const getFromCookies = (key: string) => {
	const cookieValue = Cookies.get(key);
	return cookieValue ? JSON.parse(cookieValue) : null;
};
