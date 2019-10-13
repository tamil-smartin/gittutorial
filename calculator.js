import addition from "./addition";

class calculator {
    constructor() {
        this.add = addition;


    }

    summation() {
        console.log(this.add.sumOf2Num());
    }
}