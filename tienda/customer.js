//explicar prototype
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

    getCartSubTotal() { 
        let r = 0;
        this.cart.forEach(prod => {
            r += prod.price;
        });
        return r;
    }
}