import { navVariantsType } from "../types/motionTypes";

export const navVariants: navVariantsType = {
    hidden: {
        opacity: 0,
        y: -50,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 140,
        },
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 80,
            delay: 1,
        },
    },
};

export const slideIn = (
    direction: string, 
    type: string, 
    delay: number, 
    duration: number
) => ({
    hidden: {
        x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
        y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
        x: 0,
        y: 0,
        transition: {
            type,
            delay,
            duration,
            ease: 'easeOut'
        },
    },
});

export const staggerContainer = {

}

export const textVariant = (delay: number) => ({
    hidden: {
        y: 50,
        opacity: 0,
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            duration: 1.25,
            delay,
        },
    },
});

export const textContainer = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
    },
};

