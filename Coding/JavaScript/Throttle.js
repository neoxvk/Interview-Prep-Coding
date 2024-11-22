const throttle = (func, limit) => {
    let inThrottle;  //A flag to track if the function is called
    return function(...args){
        const context = this;
        if(!inThrottle){
            func.apply(context, args)
                inThrottle = true;
                setTimeout(()=> inThrottle=false, limit)
            
        }
    }

}

// Function to be throttled
function logMessage() {
    console.log("Throttled function executed at", new Date().toLocaleTimeString());
}

// Create a throttled version of the function
const throttledLogMessage = throttle(logMessage, 2000); // Limit to once every 2 seconds

// Simulating rapid events (e.g., button clicks or window scrolls)
setInterval(() => {
    throttledLogMessage();
}, 500); // Called every 500ms, but throttled to execute every 2 seconds
