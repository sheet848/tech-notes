// bind polyfill

let car1 = {
    color: "red",
    company: "Ferrari",
};

function purchaseCar(currency, price) {
    console.log(`I have purchased ${this.color} - ${this.company} car for ${currency} ${price}`);
}

Function.prototype.myBind = function (context = {}, ...args) {
    if(typeof this !== "function") {
        throw new Error(this + "not callable");
    }

    context.fn = this;

    return function (...newArgs) {
        return context.fn(...args, ...newArgs);
    }
};

//const newFunc = purchaseCar.bind(car1);
//console.log(newFunc("$", 5000000));

const newFunc = purchaseCar.myBind(car1, "$");
console.log(newFunc(5000000));
