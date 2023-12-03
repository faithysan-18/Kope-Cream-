window.onload = () => {
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
    GRANDE: 150.00,
    TALL: 120.00,
    imgUrl: "Choconutcrush.jpeg"
  },
  {
    productId: 2,
    productName: "Strawberry Blossom",
    GRANDE: 150.00,
    TALL: 120.00,
    imgUrl: "Strawberryblossom.jpg"
  },
  // Add more products as needed
];

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

function cartAppend(size,item){

    var itemHolder=document.getElementById('items');
    var itemCode=size+item;
    var items = "";
    var productInfo = getProductInfo(item);
    console.log(productInfo);

    if(!itemExist(itemCode)){
    	 items += "<div id = '"+itemCode+"' class='cartItem'><div class='image'><img src='Kope Pictures\\Choconutcrush.jpeg' alt=''></div><div class='name'>Choconut Crush</div><div id='"+itemCode+"_price' class='totalPrice' name='price[]'>₱ 120.00</div><div class='quantity'><span class='minus'><</span><span id='"+itemCode+"_qty'>1</span><span class='plus'>></span></div><div class='remove'><a><i class='fa-solid fa-trash'></i></a></div></div>";

    	itemHolder.innerHTML+= items;
    	console.log(items);
    }
    else{

    	var currentQty= document.getElementById(itemCode+'_qty');
    	var updateQty = parseInt(currentQty.innerHTML)+1;
    	currentQty.innerHTML=updateQty;

    }

    

    var priceInputs = document.getElementsByName('price[]');
    for (var i = 0; i < priceInputs.length; i++) {
  		var priceValue = priceInputs[i].innerHTML;
  		console.log("Value of input with name 'price[]':", priceValue);
	}
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

function getProductInfo(itemId){
	for (var i = 0; i < products.length; i++) {

		if (products[i].productId === itemId) {
      		return products[i];
    	}
	}
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