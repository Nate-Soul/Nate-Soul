// "use client";

import useSWR from "swr";

const fetcher = async (url: string) => {

    const res = await fetch(url);

    if (!res.ok) {
        throw new Error("There was an error in Network Response");
    }

    return res.json();
};

const useFetchSWR = (url: string) => {

    const { data, error, isLoading } = useSWR(url, fetcher);

    return {
        data,
        error,
        isLoading
    };
     
};

export default useFetchSWR;