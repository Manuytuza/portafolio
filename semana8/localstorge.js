const btnLogin = document.querySelector("#btn-login");

btnLogin.onclick = function(event){
    event.preventDefault();
    const inputs = document.querySelectorAll("input");

    inputs.forEach((input) => {localStorage.setItem(input.name, input.value)
    });
    
};

const email = localStorage.getItem("email");
const password = localStorage.getItem("password");

function login(){
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    form.style.display = "none";
    usuarioSection.style.display ="block";
    titleEmail.innerHTML = email;
    titlePassword.innerHTML = password;

}

const form = document.querySelector("#section-login");
const titleEmail = document.querySelector("#email");
const titlePassword = document.querySelector("#password");

const btnCerrarSesion = document.querySelector("cerrar-sesion");
if(email !== null && password !== null){ login(); }
    else{
        usuarioSection.style.display = "none";
    }

    btnCerrarSesion.onclick = function(){
        localStorage.removeItem("password");
        localStorage.removeItem("email")
        form.style.display= "block";
        usuarioSection.style.display ="none";
    }
