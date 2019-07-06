var lista = document.querySelector('ul');
var input = document.querySelector('#visor');
var botao = document.querySelector('#btn');

botao.addEventListener("click", addLista);

function addLista(){
    var newItem = document.createElement('li');
    newItem.textContent = input.value;
    lista.appendChild(newItem)
    input.value = '';
}
input.addEventListener('keyup', function(event){
    if(event.keyCode == 13){
        addLista()
    }
})