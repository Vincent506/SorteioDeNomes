let amigos = [];


function limpar(){
    let trash = document.querySelector('input');
    trash.value = '';
}

function adicionarAmigo(){
    let novo = document.querySelector('input').value;    
    if (novo == null) {
        alert('Por Favor insira um nome');
        return;
    }else{
        if (amigos.includes(novo)) {
        alert(`O nome ${novo} ja foi acidionado`);
        return;
        
    }
    amigos.push(novo);
    exibirLista();
    limpar();
    }
}

function exibirLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let index = 1; index < amigos.length; index++){
        const elemento = document.createElement('li');
        elemento.textContent = amigos[index];

        lista.appendChild(elemento);
    }
}

adicionarAmigo();