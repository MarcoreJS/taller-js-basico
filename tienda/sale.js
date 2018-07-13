class Sale {
    constructor(customer, iva = 0.16) {
        this.customer = customer;
        this.products = this.customer.cart;
        this.date = Useful.getFormattedDate();
        this.iva = iva;
    }

    checkout() {
        this.subTotal = 0;
        this.subTotal = this.customer.getCartSubTotal();
        this.total = Useful.getIva(this.subTotal, this.iva);

        return this;
    }

    getIva(){
        return this.iva;
    }

    getProducts() {
        console.table(this.products);
        return this.products;
    }
}

