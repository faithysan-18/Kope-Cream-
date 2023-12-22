document.getElementById('full-name').value=localStorage.getItem('current_user');

 var storedOrder=JSON.parse(localStorage.getItem('order'));
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
            case "SOLO":
                var price = info.SOLO;
                break;
            case "BOX":
                var price = info.BOX;
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





document.getElementById('full-name').value=localStorage.getItem('current_user');
function showdets() {
    document.getElementById("details-two").style.display="block";
}

function unshowdets() {
    document.getElementById("details-two").style.display='none';
}


let input = document.getElementById('phone','address','pay','cardnumber','cardholder', 'expiry1','expiry2','expiry3');
let button = document.getElementById('btn');

button.disabled = true;   // Make button disabled initially
input.addEventListener('keyup', function(event){
   
   let val = event.target.value;  // input's current value
   
   if(val===''){
       button.disabled = true;  // Make button disabled
   }
   else{
       button.disabled = false;  // Make button enabled 
   }
   
});