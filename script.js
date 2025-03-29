var depoimento = document.querySelector(".depoimento");
var openn = document.querySelector("#open");
var teste = document.querySelectorAll(".teste")

openn.onclick = function click(){

    for(var i = 0; i < teste.length; i++){
        teste[i].classList.toggle("remove");

    }
    for(var i = 0; i < teste.length; i++){
        teste[i].classList.toggle("configBox");
    }


    if(depoimento.classList.contains("remove")){
        console.log("if");
        depoimento.classList.remove("remove");
        openn.innerHTML = "Clique aqui e saiba mais sobre os nossos princípios";
    }
    else{
        console.log("else");
        depoimento.classList.add("remove");
        openn.innerHTML = "Clique novamente para fechar";
    }

}

//botão hambuguer
let hambuguer = document.getElementById("button-hamburguer")
let nav = document.querySelector(".nav-list")

hambuguer.onclick = ()=>{
    if((window.innerWidth < 999) && nav.style.display == "flex"){
        nav.style.display = "none"

    }else{
        nav.style.display = "flex"
    }
    console.log("click")
}


