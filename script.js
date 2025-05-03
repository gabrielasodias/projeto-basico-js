const botao = document.querySelector("#verificar");

botao.addEventListener("click", () => {
    const nome = document.querySelector("#nome").value;
    const idade = document.querySelector("#idade").value;
    const resposta = document.querySelector("#resposta");

    if (nome === "" || isNaN(idade) || idade < 0) {
        resposta.textContent = "Por favor, preencha os campos corretamente!";
        return;
    }
    
    let categoria = "";

    if (idade < 12) {
    categoria = "uma criança 👶";
    } else if (idade < 18) {
    categoria = "um(a) adolescente 🧒";
    } else if (idade < 60) {
    categoria = "um(a) adulto(a) 👩‍🦱";
    } else {
    categoria = "um(a) idoso(a) 👵";
    }

    resposta.textContent = `Olá, ${nome}! Você é ${categoria}`;
    resposta.classList.add("visivel");

})

const limpar = document.querySelector("#limpar");

limpar.addEventListener("click", function () {
  document.querySelector("#nome").value = "";
  document.querySelector("#idade").value = "";
  resposta.textContent = "";
  resposta.classList.remove("visivel");
  document.querySelector("#nome").focus();
});