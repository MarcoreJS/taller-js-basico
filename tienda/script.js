var client = new Customer('Curie', 'hi.im.curie@gmail.com', 1, 'F');
var store = [];
var sale;

store.push(new Product('Deli MIX', 90, 'DMCSH10'));
store.push(new Product('Sobre whiskas salmon', 9, 'SWS'));
store.push(new Product('Sobre whiskas parrillada', 9, 'SWP'));
store.push(new Product('Sobre whiskas atun', 9, 'SWA'));
store.push(new Product('Leche deslactosada LALA', 18, 'LDLALA'));

store.forEach(pr => {
    client.addToCart(pr);
});

sale = new Sale(client);
