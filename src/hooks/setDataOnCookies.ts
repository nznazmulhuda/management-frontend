import Cookies from "js-cookie";

// Function to save JSON data to cookies
export const SaveToCookies = (key: string, jsonData: object) => {
	const jsonString = JSON.stringify(jsonData);
	Cookies.set(key, jsonString, {
		expires: 1,
		path: "/",
		secure: true,
	});

	return;
};
