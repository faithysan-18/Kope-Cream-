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