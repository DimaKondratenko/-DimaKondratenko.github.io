let productsCountEl =  document.getElementById("products-count");
console.log(productsCountEl);

let addToCartButtons = document.querySelectorAll("br + .moredetal");
console.log(addToCartButtons);
for(let i = 0; i < addToCartButtons.length; i++) {
	addToCartButtons[i].addEventListener("click" , function() {
      let prevProductsCount = +productsCountEl.textContent;
      productsCountEl.textContent = prevProductsCount + 1;
	})
} 