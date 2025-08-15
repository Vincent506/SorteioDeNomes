let amigos = [];


function limpar(){
    let trash = document.querySelector('input');
    trash.value = '';
}


function adicionarAmigo(){
    
    let novo = document.querySelector('input').value;    
    if (novo == "") {
        alert('Por Favor insira um nome');
        limpar();
        return;
    }else{
        if (amigos.includes(novo)) {
        alert(`O nome ${novo} ja foi acidionado`);
        limpar();
        return;
        
    }
    
        amigos.push(novo);
        exibirLista();
        console.log(amigos);
        limpar();
    }
}

function exibirLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let index = 0; index < amigos.length; index++){
        const elemento = document.createElement('li');
        elemento.textContent = amigos[index];

        lista.appendChild(elemento);
    }
}

function sortearAmigo(){

    if (amigos.length<2) {
        alert('Adicione pelo menos 2 nomes para efetuar o sorteio');
        return;
    }else{
        let index = parseInt(Math.random()*amigos.length);
        let lucky = document.getElementById('resultado');
        lucky.innerHTML = amigos[index];
        return;
    }

}