
const btnGo = document.getElementById("btn-go");
const btnBack = document.getElementById("btn-back")
const card = document.querySelectorAll(".card");
let cartaoAtual = 0;

function hideSelectedCard(){
    const selectedCard = document.querySelector(".select");
          selectedCard.classList.remove("select");
}

function showCard(indiceCartao){
    card[indiceCartao].classList.add("select");
}

btnGo.addEventListener("click",function() {
    if(cartaoAtual === card.length - 1) cartaoAtual = -1
    hideSelectedCard();
    cartaoAtual++;
    showCard(cartaoAtual);

});
btnBack.addEventListener("click",function() {
    if(cartaoAtual === 0 ) cartaoAtual = 3
    hideSelectedCard();
    cartaoAtual--;
    showCard(cartaoAtual);
}
);