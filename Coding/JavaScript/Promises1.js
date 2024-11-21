//Promise.all()
/*

It takes an array of promises and return a single promise.
    - Resolves when all promises resolve, with an array of their results
    - Rejects if any promise reject, with the reason for the first rejection.
*/

// In react also, we will use let's say we have social media app. 
//We want to render comments api, post api, likes api and shares api at the same time.
//So, in this case we will render all the things at once 

const promiseAll = (promises) => {
    return new Promise((resolve, reject)=> {
        if(!Array.isArray(promises)){
            return reject(new TypeError("Input must be an array!"))
        }

        let resolvedPromiseCount = 0
        const results = []

        promises.forEach((promise, index)=> {
            Promise.resolve(promise) //Ensure it's a promise
            .then((value)=> {
                results[index] = value   //Store resolved value
                resolvedPromiseCount++;

                //If all the promises are resolved
                if(resolvedPromiseCount === promises.length){
                    resolve(results)
                }
            })
            .catch((error) => {
                //Reject main promise if any promise rejects
                reject(error)
            })
        })

        //Edge case
        if(promises.length === 0){
            resolve([])
        }
    })
}

const p1 = Promise.resolve(1);
const p2 = new Promise((resolve)=> setTimeout(()=> resolve(2), 1000))
const p3 = Promise.resolve(3);
const p4 = Promise.reject("Error");


promiseAll([p1, p2, p3])
    .then((results) => console.log("Resolved1", results))
    .catch((error) => console.error("Rejected1", error))

promiseAll([p1, p2, p4])
  .then((results) => console.log("Resolved2", results))
  .catch((error) => console.error("Rejected2", error));

