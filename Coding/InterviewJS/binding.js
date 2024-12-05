const binding = () => {
    var obj = {
        name: "Vivek Ramtenki",
        age: 26,
        display : function (){
            console.log(this.name)
        }
    }

    var obj1 = { 
        name: "ABCD"
    }

    obj.display.call(obj1)


    var arrowobj = {
      name: "Vivek",
      age: 26,
      display: ()=> {
        console.log(this);
      }
    };

    var arrowobj1 = {
      name: "ABCD",
    };

    arrowobj.display.call(arrowobj1)

    

}
binding();