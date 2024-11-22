//Debounce is a technique to optimize event handling. In scenarios where events are triggered frequently like resizing, scrolling or searching.

//Debouncing ensures that the function is executed only after a specific time has passed since the last invocation.

const debounce = (func, delay) => { 
    let timeout;
    return function (...args){
        const context = this;
        clearTimeout(timeout); //clears the previous timer
        timeout = setTimeout(()=> {
            func.apply(context, args) // execte the function after delay
        }, delay)
    }
}

function handleSearch(value){
    console.log(`Searching for ${value}`)
}

//attach debounce function to theinput value

const searchInput = document.getElementById('search');
const debounceSearch = debounce((event) => handleSearch(event.target.value), 300)

