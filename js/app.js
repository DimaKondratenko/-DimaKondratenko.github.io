let productsCountEl =  document.getElementById("products-count");
console.log(productsCountEl);

let addToCartButtons = document.querySelectorAll("br + .moredetal");
console.log(addToCartButtons);
for(let i = 0; i < addToCartButtons.length; i++) {
	addToCartButtons[i].addEventListener("click" , function() {
      let prevProductsCount = +productsCountEl.textContent;
      productsCountEl.textContent = prevProductsCount + 1;
      // Или одной строкой
      // productsCountEl.textContent = +productsCountEl.textContent + 1;
      // При решении вопроса удаляем консоли
	})
} 


//change like state

let likeButtons = document.querySelectorAll(".heart");
	console.log(likeButtons);
for( let i = 0;   i < likeButtons.length; i++) {
	likeButtons[i].addEventListener('click', function(){
		 // if(likeButtons[i].classList.contains("liked")){
		 // 	likeButtons[i].classList.remove("liked");
		 // }else {
		 // 	likeButtons[i].classList.add("liked");
		 // }
		 // likeButtons[i].classList.toggle("liked"); //Аналог if{} else{}
		 //Еще есть обьектная модель но она нам в данной ситуации не подходит
		 likeButtons[i].style.backgroundColor ="red";
	})
}

 
$('.slider').slick({
	dots: true,
	autoplay:true,
	autoplaySpeed: 2000,


});
