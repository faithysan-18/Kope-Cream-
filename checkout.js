document.getElementById('full-name').value=localStorage.getItem('current_user');

 var storedOrder=JSON.parse(localStorage.getItem('order'));
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


checkoutAppend();

function getOrderByUser(){
   
    var userOrder= [];
    for (var i = 0; i < storedOrder.length; i++) {
        
        if(storedOrder[i]['enteredBy']==localStorage.getItem('current_user')){
           userOrder.push(storedOrder[i]);
        }
    }
    return(userOrder);
}

function checkoutAppend(){
    var items = getOrderByUser();
    console.log(items);

    for (var i = 0; i < items.length; i++) {

        var itemCode=items[i]['size']+items[i]['item'];
        var exist =itemExist(itemCode);
        var info =getProductInfo(items[i]['item']);

        switch (items[i]['size']){
            case "TALL":
                var price = info.TALL;
                break;
            case "GRANDE":
                var price = info.GRANDE;
                break;
            default:
                var price = 0;
                break;

        }



        if(!exist){
            var template="<div class='cart-image' id = '"+itemCode+"'><img src='Kope Pictures\\"+info.imgUrl+"' alt=''></div> <div class='cart-name'>"+info.productName+"</div><div class='cart-size'>"+items[i]['size']+"</div><div class='cart-quantity' id = '"+itemCode+"_qty'> 1</div><div class='cart-cost' name = 'costs[]' id = '"+itemCode+"_cost'>"+price+"</div>";

            document.getElementById('cart-list').innerHTML+=template;
        }
        else{
            var newQty = parseInt(document.getElementById(itemCode+"_qty").innerHTML)+1;
            document.getElementById(itemCode+"_qty").innerHTML=newQty;
            var newprice = price * newQty;
            document.getElementById(itemCode+"_cost").innerHTML=newprice;
        }

         


        var totalprice = 0;

        var priceInputs = document.getElementsByName('costs[]');

        for (var j = 0; j < priceInputs.length; j++) {
            var priceValue = priceInputs[j].innerHTML;

            totalprice = totalprice + parseInt(priceValue);

        }
        document.getElementById('totalpayment').innerHTML = "₱"+totalprice;

        

    
    }
    
}

function getProductInfo(itemId){
    for (var i = 0; i < products.length; i++) {

        if (products[i].productId === itemId) {
            return products[i];
        }
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

function showdets() {
    document.getElementById("details-two").style.display="block";
}

function unshowdets() {
    document.getElementById("details-two").style.display='none';
}