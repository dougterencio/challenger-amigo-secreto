//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeAmigos = [];
const lista = document.getElementById("listaDeAmigos");
const inputNome = document.getElementById("amigo");
const resultado = document.getElementById("resultado");

function adicionarAmigo() {
    const nomeAmigo = inputNome.value.trim();

    if (!nomeAmigo) {
        alert("Por favor, digite um nome válido!")
        return
    }

    if (listaDeAmigos.includes(nomeAmigo)) { // se o nome for igual a um que já esteja na lista...
        alert("Esse amigo já foi incluido.");
        return
    }

    listaDeAmigos.push(nomeAmigo); // coloca o nome na lista
    atualizarLista()
    inputNome.value = ""; // Limpa o input
}

function atualizarLista() {
    lista.innerHTML = "";  // Limpa a lista antes de atualizar

    listaDeAmigos.forEach((amigo, index) => {
        const item = document.createElement("li");
        item.textContent = amigo;

        // Criação do botão para remover nomes
        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Excluir";
        botaoRemover.classList.add("button-remove"); // Adiciona a classe "button-remove"
        botaoRemover.onclick = () => removerAmigo(index);

        item.appendChild(botaoRemover);
        lista.appendChild(item);
    });
}


function removerAmigo(index) {
    listaDeAmigos.splice(index, 1);
    atualizarLista();
}

function sortearAmigo() {
    if (listaDeAmigos.length == 0) {
        alert("Adicione pelo menos um amigo para sortear.");
        return;
    }

    const amigoSorteado = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];
    resultado.innerHTML = `<li>O Amigo secreto sorteado é: <strong>${amigoSorteado}</strong></li>`;
}

function limparLista() {
    listaDeAmigos = [];
    atualizarLista();
    resultado.innerHTML = "";
}

function reiniciarSorteio() {
    listaDeAmigos = [];
    resultado.innerHTML = "";
    lista.innerHTML = "";
    alert("O jogo foi reiniciado.")
}