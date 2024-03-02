import Link from "next/link";
import { ChevronRightIcon, ChevronLeftIcon } from "lucide-react";

interface PaginationBarProps {
    itemsCount: number;
    prevURL: string | null;
    nextURL: string | null;
    currentPageParam: number;
    itemsPerPage: number;
    totalPages: number;
}


const PaginationBar: React.FC<PaginationBarProps> = (
    { 
        itemsCount, 
        prevURL, 
        nextURL, 
        currentPageParam, 
        itemsPerPage, 
        totalPages
    }
    ) => {

    let currentPage = currentPageParam;

    const limit         = currentPage * itemsPerPage;
    const offset        = ((currentPage - 1) * itemsPerPage) + 1;

    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            return page;
        } else {
            return 1;
        }
    };

    const getPageNumber = (url: string) => {
        const searchParams = new URLSearchParams(new URL(url).search);
        const pageParamString = searchParams.get("page");
        
        // Convert pageParamString to a number if it's not null
        const pageParam = pageParamString !== null ? parseInt(pageParamString) : 1;

        return pageParam;
    }

  return (
    <div className="flex flex-col gap-4 items-center justify-center sm:justify-between sm:flex-row mt-12">
        <nav>
            <ul className="flex items-center">
                <li className="page-item">
                    <Link 
                        href={prevURL ? `/projects/?page=${getPageNumber(prevURL)}` : "#"} 
                        className="page-link rounded-s-3xl">
                        <ChevronLeftIcon size={20}/>
                    </Link>
                </li>
                { Array.from({length: totalPages}, (_, index) => (
                <li 
                    className="page-item"
                    key={index}
                >
                    <Link 
                        href={`/projects/?page=${goToPage(index + 1)}`}
                        className={`page-link ${currentPage === index + 1 ? 'active' : '' }`}
                    >
                        {index + 1}
                    </Link>
                </li>))
                }
                <li className="page-item">
                    <Link 
                        href={nextURL ? `/projects/?page=${getPageNumber(nextURL)}` : "#"}
                        className="page-link rounded-e-3xl">
                        <ChevronRightIcon size={20}/>
                    </Link>
                </li>
            </ul>
        </nav>
        <p className="text-gray-600 text-sm">
            Showing <span>{offset}</span>
            {limit < itemsCount && (<span> to {limit}</span>)}
            <span> of {itemsCount} Results</span> 
        </p>
    </div>
  )
}

export default PaginationBar