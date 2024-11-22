const eventLoop = () => {
    console.log("One")
    setTimeout(()=> {console.log("Two")},0)
    Promise.resolve().then(()=>console.log("Three"))
    console.log("Four")

}

eventLoop()

//Here Promise.resolve is a micro task, so it will be completed first
//Where as setTimeout and setInterval are macrotasks, which are completed after completing all the microtasks.
