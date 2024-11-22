import { useEffect, useRef } from "react"

const useThrottle = (callback, delay) => {

    const lastCall = useRef(0) // TO track last throttled time

    useEffect(()=> {
        const handler = () => {
            const now = new Date(); // current Date
            if(now-lastCall >= delay){
                callback();
                lastCall.current = now
            }
        }
        return handler;  //return throttled handler
    },[callback, delay])

    return lastCall

}

export default useThrottle