document.getElementById('full-name').value=localStorage.getItem('current_user');

console.log(localStorage.getItem('order'));
function showdets() {
    document.getElementById("details-two").style.display="block";
}

function unshowdets() {
    document.getElementById("details-two").style.display='none';
}