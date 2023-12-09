"use client";

import { useState, useEffect } from "react";

const useWindowScroll = () => {

    const [windowScrollPos, setWindowScrollPos] = useState(true);
    
    useEffect(() => {
        const scrollPos = (event: Event) => {
            window.scrollY > 50 ? setWindowScrollPos(true) : setWindowScrollPos(false);
        };

        window.addEventListener("scroll", scrollPos);

        return () => window.removeEventListener("scroll", scrollPos);
    }), [setWindowScrollPos];

    return [windowScrollPos];
};

export default useWindowScroll