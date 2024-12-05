const eventloop = () => {
        console.log("Hi");
        setTimeout(()=> console.log("set Timeout Hello"), 0);
        Promise.resolve(()=> console.log("Hello from promise")).then((res)=> res())
        console.log("b");

}

eventloop()