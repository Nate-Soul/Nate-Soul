import { usePagingContext } from "@/context/PagingContext";

const PaginationBar = () => {

  const { 
    totalPages, 
    canGoNext, 
    canGoPrev, 
    currentPage, 
    goToNext, 
    goToPage, 
    goToPrev 
  } = usePagingContext();

  return (
    <div className="flex items-center justify-between mt-12">
      <nav>
        <ul className="flex items-center">
            <li className="page-item">
                <button 
                    className="page-link rounded-s-3xl" 
                    onClick={goToPrev} 
                    disabled={!canGoPrev}
                >
                    <span className="bi bi-chevron-left"></span>
                </button>
            </li>
            { Array.from({length: totalPages}, (_, index) => (
            <li 
                className="page-item"
                key={index}
            >
                <button 
                    className={`page-link ${currentPage === index + 1 ? 'active' : '' }`}
                    onClick={() => goToPage(index + 1)}
                >
                    {index + 1}
                </button>
            </li>))
            }
            <li className="page-item">
                <button 
                    className="page-link rounded-e-3xl" 
                    onClick={goToNext} 
                    disabled={!canGoNext}
                >
                    <span className="bi bi-chevron-right"></span>
                </button>
            </li>
        </ul>
      </nav>
      <p className="text-gray-600 text-sm">Showing <span>0</span> to <span>5</span> of <span>2000</span> Results</p>
    </div>
  )
}

export default PaginationBar