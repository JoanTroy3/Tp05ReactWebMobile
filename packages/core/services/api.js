const API_URL = "https://randomuser.me/api/";

export const fetchUser = async () => {
        const response = await fetch(`${API_URL}`);
        return await response.json();
};