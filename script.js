let itens = [];
let info = document.querySelector('#list-item');
let exibir = document.querySelector('#exibir-itens');
let btnInserir = document.querySelector('#btn-inserir');
let btnApagar = document.querySelector('#btn-apagar');
let btnRemover = document.querySelector('#btn-remover');
let btnImprimir = document.querySelector('#btn-imprimir')



const atualizarLista = () => {
let lista = "<ol>";
for (let i = 0; i < itens.length; i++) {
lista += "<li class='alert alert-light'>" + itens[i] + '</li>';
}
lista += "</ol>";
exibir.innerHTML = "<p><kbd>LISTA ATUAL</kbd></p>" + lista;
info.value = "";
};

const inserir = () => {
if (info.value === "") {
exibir.innerHTML = "coloque um item";
} else {
itens.push(info.value);
atualizarLista();
}
};

const apagarLista = () => {
itens = [];
atualizarLista();
};

const removerUltimoItem = () => {
if (itens.length > 0) {
itens.pop();
atualizarLista();
}
};

const imprimirLista = () => {
let lista = "";
for (let i = 0; i < itens.length; i++) {
lista += itens[i] + "<br>";
}
let novaJanela = window.open('', '', 'width=200,height=100');
novaJanela.document.write(lista);
novaJanela.document.close();
novaJanela.focus();
novaJanela.print();
};
btnInserir.addEventListener('click', inserir);
btnApagar.addEventListener('click', apagarLista);
btnRemover.addEventListener('click', removerUltimoItem);
btnImprimir.addEventListener('click', imprimirLista);
btnImprimir.addEventListener('click', imprimirLista);
