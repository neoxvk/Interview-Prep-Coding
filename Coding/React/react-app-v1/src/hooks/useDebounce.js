import { useEffect, useState } from "react"

const useDebounce = (value, delay) => {

    //To store the delayed version of the value
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(()=> {
        const handler = setTimeout(()=> {
            setDebouncedValue(value)
        }, delay)

        return () => clearTimeout(handler);

    },[value, delay])

    return debouncedValue
    
    
}

export default useDebounce