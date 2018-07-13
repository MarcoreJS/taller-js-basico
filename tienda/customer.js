class Customer {
    constructor(name, email, age, gender, cart = []) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.gender = gender;
        this.cart = cart;
    }

    addToCart(prod) {
        this.cart.push(prod);
    }
}

Customer.prototype.getCartSubTotal = function() {
    let result = 0;
    this.cart.forEach(prod => {
        result += prod.price;
    });
    return result;
}