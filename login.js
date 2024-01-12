
function openForm() {
    document.getElementById("all").style.display = "block";
}


function login(){
    var user=document.getElementById('username').value
    localStorage.setItem('current_user',user);
   
}
function closebtn()
  {
    document.getElementById("all").style.display='none';
  }



function newAccount() {
    document.getElementById("all-two").style.display = "block";
    document.getElementById("all").style.display = 'none';
}

function closebtntwo()
  {
    document.getElementById("all-forms").style.display='none';
  }

function loginAgain() {
    document.getElementById("all").style.display='block';
    document.getElementById("all-two").style.display='none';
}

function confirmLogin() {
  document.getElementById("all").style.display='block';
  document.getElementById("all-two").style.display='none';
}


const passwordInput = document.querySelector("#password")
const eye = document.querySelector("#eye")

eye.addEventListener("click", function(){
    this.classList.toggle("fa-eye")
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password"
    passwordInput.setAttribute("type", type)
  })


const passwordInputtwo = document.querySelector("#passtwo")
const eyetwo = document.querySelector("#eyeTwo")
  
eyetwo.addEventListener("click", function(){
      this.classList.toggle("fa-eye")
      const typetwo = passwordInputtwo.getAttribute("type") === "password" ? "text" : "password"
      passwordInputtwo.setAttribute("type", typetwo)
    })


const passwordInputthree = document.querySelector("#psw-repeat")
const eyethree = document.querySelector("#eyeThree")
    
eyethree.addEventListener("click", function(){
        this.classList.toggle("fa-eye")
        const typethree = passwordInputthree.getAttribute("type") === "password" ? "text" : "password"
        passwordInputthree.setAttribute("type", typethree)
      })


      function validateForm() {
        const password = document.getElementById('passtwo').value;
        const confirmPassword = document.getElementById('psw-repeat').value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return false;
        }
      }
