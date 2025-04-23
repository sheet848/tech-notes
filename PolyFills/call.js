// call function

let car1 = {
    color: "red",
    company: "Ferrari",
};

function purchaseCar(currency, price) {
    console.log(`I have purchased ${this.color} - ${this.company} car for ${currency} ${price}`);
}

Function.prototype.myCall =  function (context={}, ...args) {
    if(typeof this !== "function") {
        throw new Error(this + "not callable");
    }

    context.fn = this;
    context.fn(...args);
}

purchaseCar.myCall(car1, "$", 5000000);
