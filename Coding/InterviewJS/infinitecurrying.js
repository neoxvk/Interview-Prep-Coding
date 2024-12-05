const infiniteCurrying = () => {
    const add = (a) => {
        return function (b){
            return function(){
               return a + b
            }
        }
    }
    console.log(add(5)(2)())

    const addinf = (a) => {
        return function(b){
            if(b) return addinf(a + b)

            return a
        }

    }
    console.log(addinf(3)(6)(12)(12)())

}

infiniteCurrying()

