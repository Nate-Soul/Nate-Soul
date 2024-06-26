export type navVariantsType = {
    hidden: {
        opacity: number;
        y: number;
        transition: {
            type: string;
            stiffness: number;
            damping: number;
        };
    };
    show: {
        opacity: number;
        y: number;
        transition: {
            type: string;
            stiffness: number;
            delay: number;
        };
    };
}

export type staggerContainerType = {
    hidden: {};
    show: {
        transition: {
            staggerChildren: number;
            delayChildren: number;
        };
    };
}