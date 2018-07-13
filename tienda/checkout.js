class Checkout extends Sale {
    constructor(sale) {
        super(sale.customer);
        this.subTotal = 0;
        this.subTotal = this.customer.getCartSubTotal();
        this.total = Useful.getIva(this.subTotal, this.iva);
    }
}