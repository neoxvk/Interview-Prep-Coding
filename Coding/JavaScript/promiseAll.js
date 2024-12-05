function showText(text, time){
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            resolve(text);
        }, time)
    })
}

// Promise.all([
//     showText("Heya", 1000),
//     Promise.resolve("hoyaaaa")
// ]).then((value)=> console.log(value))

function myPromiseAll(promises){
    let result = []
    return new Promise((resolve, reject)=> {
        promises.forEach((p, index)=> {
            p.then((res)=> {
                result.push(res);
                if(index === promises.length - 1){
                    resolve(result)
                }
            }).catch((err)=> reject(err))
        })
    })
}

myPromiseAll([
    showText("Heya", 1000),
    Promise.resolve("hoyaaaa")
]).then((value)=> console.log(value))