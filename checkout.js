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