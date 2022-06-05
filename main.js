let shop = document.getElementById("shop");
let shopItemData = [
	{
		id: "d-1",
		name: "pem shoe",
		price: 25,
		desc:
			" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit ",
		img: "./assets/photo-1560769629-975ec94e6a86.avif",
	},
	{
		id: "d-2",
		name: "adidas shoe",
		price: 26,
		desc:
			" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit ",
		img: "./assets/photo-1560769629-975ec94e6a86.avif",
	},
	{
		id: "d-3",
		name: "nike shoe",
		price: 27,
		desc:
			" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit ",
		img: "./assets/photo-1560769629-975ec94e6a86.avif",
	},
	{
		id: "d-4",
		name: "puma shoe",
		price: 28,
		desc:
			" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit ",
		img: "./assets/photo-1560769629-975ec94e6a86.avif",
	},
]; //
let generateShop = () => {
	return (shop.innerHTML = shopItemData
		.map((item) => {
			return ` <div id='product-${item.id}' class="item">
		<img class="img-fit" src = "${item.img}" alt=""> 
		<div class="details">
			<h3 class="title"> ${item.name}</h3>
			<p> ${item.desc}</p>
			<div class="price-quantity">
				<h2>${item.price}</h2>
				<div class="buttons">
					<i class="bi bi-dash-lg"></i>
					<div id=${id} class="quantit">0</div>
					<i class="bi bi-plus-lg"></i>
				</div>
			</div>
		</div>
	</div>`;
		})
		.join(""));
};
generateShop();

generateShop();
