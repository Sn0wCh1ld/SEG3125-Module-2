
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.99
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.35
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 10.00
	},
	{
		name: "steak",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 8.00
	},
	{
		name: "pasta",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 1.99
	},
	{
		name: "pre-made garden salad",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 4.99
	},
	{
		name: "bunch of bananas",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 2.99
	},
	{
		name: "organic banana",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 3.99
	},
	{
		name: "water",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.49
	},
	{
		name: "breaded chicken wings",
		vegetarian: false,
		glutenFree: false,
		organic: false,
		price: 7.99
	},
	{
		name: "doritos",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 1.99
	}
];




// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restrictions) {
	prods.sort(comparePrice);
	
	
	let selectedProducts = [];

	for (let i = 0; i < prods.length; i += 1) {
		if (!((restrictions.includes("Vegetarian") && (!prods[i].vegetarian)) ||
			(restrictions.includes("GlutenFree") && (!prods[i].glutenFree) ||
				(restrictions.includes("Organic") && (!prods[i].organic))
			))) {
			
			selectedProducts.push(prods[i]);
		}
	}

	return selectedProducts;
}

function comparePrice(item1, item2) {
	if (item1.price < item2.price) {
		return -1;
	}
	if (item1.price > item2.price) {
		return 1;
	}
	return 0;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	console.log(chosenProducts);

	totalPrice = 0;
	for (let i = 0; i < products.length; i += 1) {
		let formattedName = formatProductName(products[i].name, products[i].price);
		if (chosenProducts.indexOf(formattedName) > -1) {
			totalPrice += products[i].price;
		}
	}
	return totalPrice.toFixed(2);
}
