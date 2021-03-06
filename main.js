let shop = document.getElementById("shop");
let shopItemData = [
	{
		id: " sh1",
		name: "pem shoe",
		price: 25,
		desc:
			" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit ",
		img: "./assets/photo-1560769629-975ec94e6a86.avif",
	},
	{
		id: " sh2",
		name: "adidas shoe",
		price: 26,
		desc:
			" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit ",
		img: "./assets/photo-1560769629-975ec94e6a86.avif",
	},
	{
		id: " sh3",
		name: "nike shoe",
		price: 27,
		desc:
			" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit ",
		img: "./assets/photo-1560769629-975ec94e6a86.avif",
	},
	{
		id: " sh4",
		name: "puma shoe",
		price: 28,
		desc:
			" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit ",
		img: "./assets/photo-1560769629-975ec94e6a86.avif",
	},
]; //

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {
	return (shop.innerHTML = shopItemData
		.map((item) => { 

			let { id, name, price, desc, img } = item;
			let search = basket.find((x) => x.id === item.id);		
		 console.log(item.item);
			return `
	<div id='product-${id}' class="item">
		<img class="img-fit" src = "${img}" alt=""> 
		<div class="details">
			<h3 class="title"> ${name}</h3>
			<p> ${desc}</p>
			<div class="price-quantity">
				<h2>${price}</h2>
				<div class="buttons">
					<i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
					<div id=${id} class="quantit"  >  
						${search === undefined ? 0 : search.item}
					</div>
					<i onclick="increment(${id})" class="bi bi-plus-lg"></i>
				</div>
			</div>
		</div>
	</div>
	`;
		})
		.join(""));
};
generateShop(); 
let increment = (id) => {
	let selectedItem = id;
	let search = basket.find((item) => item.id === selectedItem.id);

	if (search === undefined) {
		basket.push({
			id: selectedItem.id,
			item: 1,
		});
	} else {
		search.item += 1;
	}
	localStorage.setItem("data", JSON.stringify(basket));

	update(selectedItem.id);
};

let decrement = (id) => {
	let selectedItem = id;
	let search = basket.find((item) => item.id === selectedItem.id);
	if(search===undefined || search.item===0) return;
	else {
		search.item--;
	}
	localStorage.setItem("data", JSON.stringify(basket));

	update(selectedItem.id);
};

let update = (id) => {
	let search = basket.find((item) => item.id === id);
	let count = document.getElementById(id);
	count.innerHTML = search.item;
	calculation();
};

let calculation = () => {
	let cartIcon = document.getElementById("cartAmount");
	cartIcon.innerHTML = basket.map((x) => x.item).reduce((a, b) => a + b, 0);
};
calculation();