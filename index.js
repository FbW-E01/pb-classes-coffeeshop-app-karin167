class CoffeeShop {
	constructor (name, menu, orders) {
		this.name = name
		this.menu = menu
		this.orders = orders
		
	}
	addOrder(itemName){
		let found = false; 
		this.menu.forEach(element => { 
			if (element.item === itemName){
				found = true
			}
			
		});
		if (found ){
			return this.orders.push(itemName);
		}
		return "This item is currently unavailable";
		}

	fulfillOrder(){
		if(this.orders.length !== 0){
		return "The " + this.orders.shift() + " is ready!";
		} else {
			return "All orders have been fulfilled!";
		}
	}
	listOrders(){
		return this.orders
	}
	dueAmount(){
		let amount = 0;
		for(let i = 0; i < this.orders.length; i++) {
			for(let j = 0; j < this.menu.length; j++) {
				if (this.orders[i] === this.menu[j].item) {
					amount = amount + this.menu[j].price;
					//break;
				}
			}
		}

		return amount;
	}
}
	


const menu = [
  { item: "Espresso", type: "drink", price: 2.50 },
  { item: "Macchiato",        type: "drink", price: 3.00 },
  { item: "Americano",        type: "drink", price: 3.00 },
  { item: "Flat white",       type: "drink", price: 3.00 },
  { item: "Muffin",           type: "food",  price: 2.50 },
  { item: "Stuffin",          type: "food",  price: 51.50 },
  { item: "Unicorn muffin",   type: "food",  price: 2.50 },
  { item: "Pegasos muffin",   type: "food",  price: 2.50 },
  { item: "Toast",            type: "food",  price: 1.50 },
  { item: "A single potato",  type: "food",  price: 0.50 },
  { item: "A single bean",    type: "food",  price: 0.05 },
];

const coffe = new CoffeeShop("City OF Coffe", menu,[])
console.log(coffe);
console.log(coffe.addOrder("Toast"));
console.log(coffe.listOrders());
console.log(coffe.addOrder("Pegasos muffin"));
console.log(coffe.listOrders());

console.log('Due amount: €:', coffe.dueAmount());
console.log(coffe.fulfillOrder());
console.log(coffe.fulfillOrder());
console.log(coffe.listOrders());
