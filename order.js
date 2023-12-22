var order = [

    ]
window.onload = () => {
    //localStorage.clear();
    document.getElementById('current-user').innerHTML="<p>"+localStorage.getItem('current_user')+"</p>"

    retrieveOrder();
    const tab_switchers = document.querySelectorAll('[data-switcher]');

    for (let i = 0; i < tab_switchers.length; i++) {
        const tab_switcher = tab_switchers[i];
        const page_id = tab_switcher.dataset.tab;

        tab_switcher.addEventListener('click', () => {
            document.querySelector('.tabs .tab.is-active').classList.remove('is-active');
            tab_switcher.parentNode.classList.add('is-active');

            SwitchPage(page_id);

        });
        
    }
}   


var products = [
  {
    productId: 1,
    productName: "Choconut Crush",
    GRANDE: 90.00,
    TALL: 70.00,
    imgUrl: "Choconutcrush.jpeg"
  },
  {
    productId: 2,
    productName: "Strawberry Blossom",
    GRANDE: 100.00,
    TALL: 80.00,
    imgUrl: "Strawberryblossom.jpg"
  },
  {
    productId: 3,
    productName: "Banana Reviver",
    GRANDE: 90.00,
    TALL: 70.00,
    imgUrl: "Bananareviver.jpeg"
  },
  {
    productId: 4,
    productName: "Apple Spice",
    GRANDE: 90.00,
    TALL: 70.00,
    imgUrl: "Apple-Spice-Smoothie.jpg"
  },
  {
    productId: 5,
    productName: "Avocado Smoothie",
    GRANDE: 90.00,
    TALL: 70.00,
    imgUrl: "Avocado smoothies.jpg"
  },
  {
    productId: 6,
    productName: "Blueberry Coconut",
    GRANDE: 90.00,
    TALL: 70.00,
    imgUrl: "Blueberry-Coconut-Smoothie.jpg"
  },
  {
    productId: 7,
    productName: "Mixed Berry",
    GRANDE: 100.00,
    TALL: 80.00,
    imgUrl: "Mixed berry smoothie.jpeg"
  },
  {
    productId: 8,
    productName: "Black Forest",
    GRANDE: 90.00,
    TALL: 70.00,
    imgUrl: "Black-Forest-Smoothie.jpg"
  },
  {
    productId: 9,
    productName: "Matcha Power",
    GRANDE: 90.00,
    TALL: 70.00,
    imgUrl: "Matchapower.jpeg"
  },
  {
    productId: 10,
    productName: "Caramel Cappuccino",
    GRANDE: 170.00,
    TALL: 140.00,
    imgUrl: "Caramelcappuccino.jpeg"
  },
  {
    productId: 11,
    productName: "Iced Americano",
    GRANDE: 150.00,
    TALL: 120.00,
    imgUrl: "Icedamericano.jpeg"
  },
  {
    productId: 12,
    productName: "Caramel Latte",
    GRANDE: 150.00,
    TALL: 120.00,
    imgUrl: "Caramellatte.jpeg"
  },
  {
    productId: 13,
    productName: "Iced Baraco",
    GRANDE: 150.00,
    TALL: 120.00,
    imgUrl: "Icedbaraco.jpeg"
  },
  {
    productId: 14,
    productName: "Iced Honey Cinnamon Latte",
    GRANDE: 150.00,
    TALL: 120.00,
    imgUrl: "iced-honey-cinnamon-latte.jpg"
  },
  {
    productId: 15,
    productName: "Peanut Butter Iced Coffee",
    GRANDE: 150.00,
    TALL: 120.00,
    imgUrl: "peanut-butter-ice coffee.jpg"
  },
  {
    productId: 16,
    productName: "Cropped Iced Ube Latte",
    GRANDE: 150.00,
    TALL: 120.00,
    imgUrl: "cropped-iced-ube-latte.jpg"
  },
  {
    productId: 17,
    productName: "Espresso",
    GRANDE: 150.00,
    TALL: 120.00,
    imgUrl: "Espresso.jpeg"
  },
  {
    productId: 18,
    productName: "White Hot Chocolate",
    GRANDE: 150.00,
    TALL: 120.00,
    imgUrl: "white-hot-chocolate-.jpg"
  },
  {
    productId: 19,
    productName: "Mexican Hot Choco",
    GRANDE: 150.00,
    TALL: 120.00,
    imgUrl: "Mexican-Hot-Chocolate.jpg"
  },
  {
    productId: 20,
    productName: "Americano",
    GRANDE: 150.00,
    TALL: 120.00,
    imgUrl: "Americano.jpeg"
  },
  {
    productId: 21,
    productName: "Nutella Hot Coffee",
    GRANDE: 150.00,
    TALL: 120.00,
    imgUrl: "nutella hot coffee.jpg"
  },
  {
    productId: 22,
    productName: "Vanilla Keto Coffee",
    GRANDE: 180.00,
    TALL: 150.00,
    imgUrl: "vanilla-keto-coffee (1).jpg"
  },

  /*Dessert */
  {
    productId: 23,
    productName: "Vanilla Cupcake",
    BOX: 200.00,
    SOLO: 55.00,
    imgUrl: "Vanilla-Cupcake.jpg"
  },
  {
    productId: 24,
    productName: "Moist Choco Cupcake",
    BOX: 200.00,
    SOLO: 55.00,
    imgUrl: "super Moist chocolate cupcakes.jpg"
  },
  {
    productId: 25,
    productName: "Mini Cheescake",
    BOX: 300.00,
    SOLO: 48.00,
    imgUrl: "mini cheesecakes.jpg"
  },
  {
    productId: 26,
    productName: "Marshmallow Choko Poke",
    BOX: 350.00,
    SOLO: 65.00,
    imgUrl: "marshmallow chocolate poke cake.jpg"
  },
  {
    productId: 27,
    productName: "Coffee Cake",
    BOX: 300.00,
    SOLO: 65.00,
    imgUrl: "coffe cake.jpg"
  },
  {
    productId: 28,
    productName: "Bomboloni-Italian Doughnut",
    BOX: 150.00,
    SOLO: 40.00,
    imgUrl: "bomboloni-italian Doughnuts.jpg"
  },
  {
    productId: 29,
    productName: "Chocolate Glazed Doughnut",
    BOX: 150.00,
    SOLO: 35.00,
    imgUrl: "chocolate Glazed baked donut.jpg"
  },
  // Add more products as needed
];


function retrieveOrder(){
    var storedOrder=JSON.parse(localStorage.getItem('order')); 

    for (var i = 0; i < storedOrder.length; i++) {
        console.log(storedOrder[i]['size']);
        cartAppend(storedOrder[i]['size'],storedOrder[i]['item'])
    }
}
function SwitchPage (page_id) {
    const current_page = document.querySelector('.pages .page.is-active');
    current_page.classList.remove('is-active');

    const next_page= document.querySelector(`.pages .page[data-page="${page_id}"]`);
    next_page.classList.add('is-active');
}
function Tall(id){
    cartAppend("TALL",id);
}
function Grande(id){
    cartAppend("GRANDE",id);
}
function Solo(id){
  cartAppend("SOLO",id);
}
function Box(id){
  cartAppend("BOX",id);
}


function cartAppend(size,item){

    var itemsAdded= {
        size: size,
        item: item,
        enteredBy:localStorage.getItem('current_user')
    };

    order.push(itemsAdded);



    var itemHolder=document.getElementById('items');
    var itemCode=size+item;
    var items = "";
    var productInfo = getProductInfo(item);
    console.log(productInfo);
    
    //set price
    	switch (size){
    		case "TALL":
    			var price = productInfo.TALL;
    			break;
    		case "GRANDE":
    			var price = productInfo.GRANDE;
    			break;
        case "SOLO":
          var price = productInfo.SOLO;
          break;
        case "BOX":
          var price = productInfo.BOX;
          break;
    		default:
    			var price = 0;
    			break;

    	}
    //


    if(!itemExist(itemCode)){
    	 items += "<div id = '"+itemCode+"' class='cartItem'><div class='image'><img src='Kope Pictures\\"+productInfo.imgUrl+"' alt=''></div><div class='name'>"+productInfo.productName+"</div><div class='selection'>"+size+"</div><div id='"+itemCode+"_price' class='totalPrice' name='price[]'>"+price+"</div><div class='quantity'><span onclick=\"qty('SUB','"+size+"',"+item+")\" class='minus'><</span><span id='"+itemCode+"_qty'>1</span><span onclick=\"qty('ADD','"+size+"',"+item+")\"  class='plus'>></span></div><div onclick =\"removeItem('"+itemCode+"')\" class='remove'><a><i class='fa-solid fa-trash'></i></a></div></div>";

    	itemHolder.innerHTML+= items;
    	console.log(items);
    }
    else{

    	qtyChanged("ADD",itemCode,price);
    }

	
    var totalprice = 0;

    var priceInputs = document.getElementsByName('price[]');

    for (var i = 0; i < priceInputs.length; i++) {
  		var priceValue = priceInputs[i].innerHTML;

  		totalprice = totalprice + parseInt(priceValue);

	}
	document.getElementById('total').innerHTML = "₱"+totalprice;
	document.getElementById('count').innerHTML=priceInputs.length;
	
}

function itemExist(itemCode){
	var element = document.getElementById(itemCode);

	if(element){
		return true;
	}
	else{
		return false;
	}
}

function removeItem(itemElement){
	
	document.getElementById(itemElement).remove();

	var totalprice = 0;

    var priceInputs = document.getElementsByName('price[]');

    for (var i = 0; i < priceInputs.length; i++) {
  		var priceValue = priceInputs[i].innerHTML;

  		totalprice = totalprice + parseInt(priceValue);

	}
	document.getElementById('total').innerHTML = "₱"+totalprice;
	document.getElementById('count').innerHTML=priceInputs.length;
}
function getProductInfo(itemId){
	for (var i = 0; i < products.length; i++) {

		if (products[i].productId === itemId) {
      		return products[i];
    	}
	}
}

function qty(action,size,item){
	//alert(item);
	var productInfo = getProductInfo(item);
	
    //set price
    	switch (size){
    		case "TALL":
    			var price = productInfo.TALL;
    			break;
    		case "GRANDE":
    			var price = productInfo.GRANDE;
    			break;
    		default:
    			var price = 0;
    			break;

    	}
	var itemCode=size+item;
    cartAppend(size,item)
	qtyChanged(action,itemCode,price);
	
}


function qtyChanged(operand,itemCode,price){
	var currentQty= document.getElementById(itemCode+'_qty');
	switch(operand){
		case "ADD":
			var updateQty = parseInt(currentQty.innerHTML)+1;
			break;
		case "SUB":
			var updateQty = parseInt(currentQty.innerHTML)-1;
			break;
		default:
			break;

	}

	
    
    currentQty.innerHTML=updateQty;

    if(updateQty<1){
    	removeItem(itemCode);
    }

    var cost = price*updateQty;
    document.getElementById(itemCode+"_price").innerHTML=cost



    var totalprice = 0;

    var priceInputs = document.getElementsByName('price[]');

    for (var i = 0; i < priceInputs.length; i++) {
  		var priceValue = priceInputs[i].innerHTML;

  		totalprice = totalprice + parseInt(priceValue);

	}
	document.getElementById('total').innerHTML = "₱"+totalprice;
	document.getElementById('count').innerHTML=priceInputs.length;
}

function checkout(){
    localStorage.setItem('order',JSON.stringify(order));
}

/*const product = [
    {
        id: 0,
        image: 'Kope Pictures\Choconutcrush.jpeg',
        title: 'Chocolate Crush',
        price: 120,
    },
    {
        id: 1,
        image: '',
        title: '',
        price: 60,
    },
    {
        id:2, 
        image: '',
        title: '',
        price: 150,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
            
        <div class ='bottom'>
        <p>${title}</p>
        <h2>₱ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to Order</button>"+
        `</div>
        </div>`
            
    )
*/