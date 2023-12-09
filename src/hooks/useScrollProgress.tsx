import { useState, useEffect } from 'react'

const useScrollProgress = () => {

  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress: number = window.scrollY;
      const scrollHeight: number    = document.body.scrollHeight - window.innerHeight

      if (scrollHeight) {
        const calculatedScroll: number = Number((currentProgress / scrollHeight).toFixed(2)) * 100
        setCompletion(calculatedScroll);
      }
    }

    //add event listener 
    window.addEventListener("scroll", updateScrollCompletion);

    //remove event listener
    window.removeEventListener("scroll", updateScrollCompletion);
  }, []);

  return { completion }
}

export default useScrollProgress
