let amigos = [];

//Função que serve para limpar o input da página HTML
function limpar(){
    let trash = document.querySelector('input');
    trash.value = '';
}

//Função que insere um amigo ao array de sorteio(com alguns tratamentos de erro)
function adicionarAmigo(){
    
    let novo = document.querySelector('input').value;    
    //tratamento de erro para o usuario não inserir um campo vazio(sem nome)
    if (novo == "") {
        alert('Por Favor insira um nome');
        limpar();
        return;
    }else{
        //tratamento de erro para o usuario não inserir nomes repetidos
        if (amigos.includes(novo)) {
        alert(`O nome ${novo} ja foi acidionado`);
        limpar();
        return;
        
    }
    
        amigos.push(novo);
        exibirLista();
        limpar();
    }
}
//Função que mostra o array em um campo da pagina
function exibirLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let index = 0; index < amigos.length; index++){
        const elemento = document.createElement('li');
        elemento.textContent = amigos[index];

        lista.appendChild(elemento);
    }
}
//Função que sorteia um elemento aleatorio do array
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