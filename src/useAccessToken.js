import { useQuery } from "@tanstack/react-query";
import fetchAccessToken from "./fetchAccessToken";

const useAccessToken = () => {
    console.log("fetching");
    const results = useQuery(["access-token"], fetchAccessToken, {
        staleTime: 1, // 1 hour based on api docs
        refetchOnWindowFocus: false,
    });
    console.log(results.data);
    return results?.data || null;
};

export default useAccessToken;
