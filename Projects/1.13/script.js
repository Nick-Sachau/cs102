let calculator = {
    // a: ##
    // b: ##
    read() {
        this.a = Number(prompt(`Enter your first value.`, 0));
        this.b = Number(prompt(`Enter your second value.`, 0));
    },

    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    },
}

calculator.read();

alert(calculator.sum());

alert(calculator.mul());