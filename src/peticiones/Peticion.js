const URL_BASE = "https://valorant-api.com/v1/agents";

export const getDataFromValorant = async(url = URL_BASE) => {
    try {
        const response = await fetch(url);
        const data = response.json();
        return data;
    }catch(error) {
        console.log(error.message);
    }
}