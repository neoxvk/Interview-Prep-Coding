const objectPrototype = () => {

    const person = {
        greet: function() {
            console.log("Hello", this.name)
        }
    }

    const john = Object.create(person, {
        name: {
            value: "John",
            writable: true,
            configurable: true,
            enumerable: true
        }
    })

    john.greet()

}
objectPrototype()