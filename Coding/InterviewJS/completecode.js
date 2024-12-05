const calc = {
    total : 0,
    add: function(a){
        this.total = this.total + a;
        return this;
    },
    multiply: function (a){
        this.total *= a;
        return this;
    },
    subtract: function(a){
        this.total -= a
        return this;
    }
}


const result = calc.add(10).multiply(4).subtract(30).add(20)
console.log(result.total)