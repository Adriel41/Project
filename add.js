function add(a, b){
    return a + b;
}
const result = add(5, 10);

class Calculator {
    constructor() {
        this.result = 0;
    }

    add(a, b) {
        this.result = a + b;
        return this.result;
    }
}