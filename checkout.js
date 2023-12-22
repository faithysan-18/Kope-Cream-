document.getElementById('full-name').value=localStorage.getItem('current_user');
function showdets() {
    document.getElementById("details-two").style.display="block";
}

function unshowdets() {
    document.getElementById("details-two").style.display='none';
}