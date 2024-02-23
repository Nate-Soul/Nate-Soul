"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface PagingContextProps {
    currentPage: number;
    totalPages: number;
    canGoNext: boolean;
    canGoPrev: boolean;
    goToNext: () => void,
    goToPrev: () => void,
    goToPage: (page: number) => void,
}

interface PagingProviderProps {
    children: ReactNode; 
    totalItems: number; 
    itemsPerPage: number;
}

const PagingContext = createContext<PagingContextProps | undefined>(undefined);

const usePagingContext = () : PagingContextProps => {
    const context = useContext(PagingContext);
    if (!context) {
        throw new Error("UsePagingContext Must be used within a PagingContextProvider");
    }
    return context;
};

const PagingContextProvider: React.FC<PagingProviderProps> = ({children, totalItems, itemsPerPage}) => {
    const [currentPage, setCurrentPage] = useState<number>(1);

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const canGoPrev  = currentPage > 1;
    const canGoNext  = currentPage < totalPages;
    
    const goToNext = () => {
        canGoNext ? setCurrentPage((prev) => prev + 1) : setCurrentPage(1);
    };

    const goToPrev = () => {
        canGoPrev ? setCurrentPage((prev) => prev - 1) : setCurrentPage(1);
    };

    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        } else {
            setCurrentPage(1);
        }
    };

    return (
        <PagingContext.Provider 
            value={{ 
                currentPage,
                totalPages,
                canGoNext,
                canGoPrev,
                goToNext,
                goToPrev,
                goToPage,
            }}
        >
            {children}
        </PagingContext.Provider>
    );

};

export { PagingContextProvider, usePagingContext };