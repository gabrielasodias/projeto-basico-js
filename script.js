const botao = document.querySelector("#verificar");

botao.addEventListener("click", () => {
    const nome = document.querySelector("#nome").value;
    const idade = document.querySelector("#idade").value;
    const resposta = document.querySelector("#resposta");

    resposta.style.color = "green";


    if(idade >= 18) {
        resposta.innerHTML = `Olá ${nome}, você é maior de idade!`;
    } else {
        resposta.innerHTML = `Olá ${nome}, você ainda é menor de idade!`;
    }
})