const form = document.getElementById('novoItem');
const lista = document.getElementById('lista');
const itens = JSON.parse(localStorage.getItem("itens")) || [];

itens.forEach( (elemento) => {
    criaElemento(elemento);
});

form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    
    const nome = evento.target.elements['nome'].value;
    const quantidade = evento.target.elements['quantidade'].value;

    const itemAtual = {
        "nome": nome,
        "quantidade": quantidade
    }

    criaElemento(itemAtual);

    itens.push(itemAtual);

    localStorage.setItem("itens", JSON.stringify(itens));

    form.reset();
});

function criaElemento(itemAtual){
    const novoItem = document.createElement('li');
    novoItem.classList.add("item");

    const numeroItem = document.createElement("strong");
    numeroItem.innerHTML = itemAtual.quantidade;

    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += itemAtual.nome;

    lista.appendChild(novoItem);
}