import config from "./config";
const fetchAccessToken = async () => {
    const url = "https://api.petfinder.com/v2/oauth2/token";
    const clientId = config.apiKey;
    const clientSecret = config.secretKey;

    const data = {
        grant_type: "client_credentials",
        client_id: clientId,
        client_secret: clientSecret,
    };

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(data),
    };
    const apiRes = await fetch(url, requestOptions);

    if (!apiRes.ok) {
        throw new Error(`Error in access token`);
    }

    return apiRes.json();
};

export default fetchAccessToken;
