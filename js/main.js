
function botao(){

    /*O "getElementById" vai pegar o "id agradecimanto" da parte "index.html" e com a função
    ".innerHTML" vai devolver o palavra "OBRIGADO POR CLICAR!!!" no fotmato especificado no
    "index.html", nesse caso o h3.*/
    document.getElementById("agradecimanto").innerHTML = "OBRIGADO POR CLICAR!!!";

    //console.log(document.getElementById("agradecimanto"));
    //alert("Obrigado por Clicar :)");
}

function redirecionar(){
    //Função para abrir uma pagina web em outra aba.
    window.open("https://www.youtube.com/channel/UCiehgZm99q4YvxClCN_NaAw");

    //Função para abrir um pagina web na mesma aba.
    //window.location.href = "https://www.youtube.com/channel/UCiehgZm99q4YvxClCN_NaAw";
}

function trocar(elemento){

    //Essa função agora esta trocando o texto a pos passar o mouse emcima da palavra... contida na centença <p id="mousemove" onmouseover="trocar()">Passe o mouse aqui</p> localizada na "index.html"
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";

    //Ultilizado elemento para poder gerar ação em diferentes elementos sem um interferir no outro
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";

    //Ultilizado elemento para poder gerar ação em diferentes elementos sem um interferir no outro
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Pagina caregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/*function validaridade(idade){
    var validar;
    if(idade>=18){
        validar=true
    }else{
        validar=false
    }
    return validar;
}

var idade = prompt("Qual sua Idade? ");
console.log(validaridade(idade));
*/

//função com numeros..
/*function soma(n1, n2){
    return n1 + n2;
}*/

//alert(soma(5, 10));
/*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

alert(setReplace("Vai Japão", "Japão", "Brasil"));*/

//----------------------------------------------------------------------------------------------//

//Trabalhando com Data(s).
/*var d = new Date();
alert(d.getMonth() + 1);
alert(d.getDay());
alert(d.getHours());*/


//----------------------------------------------------------------------------------------------//

/*var count;

for(count=0; count <= 5; count++){
    alert(count);
}*/



/*var count = 0;

//Estrutura de repetição
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
}*/

//----------------------------------------------------------------------------------------------//

//O prompt pode servir como uma validação de dados como idade antes de exibir o conteudo da pagina.
/*var idade = prompt("Qual a sua Idade?");
//var idade = 18;

if (idade => 18){
    alert("Maior de idade!!!");
}else{
    alert("Menor de idade!!!");
}*/

//----------------------------------------------------------------------------------------------//

/*var frutas = [{nome: "Maça", cor:"Vermelha"}, {nome: "Uva", cor:"Roxa"}]
console.log(frutas);
alert(frutas[1].nome);


var fruta = {nome: "Maça", cor:"Vermelha"}
console.log(fruta.nome);
alert(fruta.cor);*/

//----------------------------------------------------------------------------------------------//

//var lista = ["Maça", "Pera", "Laranja"]

//Acrecenta uma informação no final da lista/Arrey.
//lista.push("Uva");
//remove a ultima informação da lista/Arrey.
//lista.pop("Pera");
//O length serve para contar o numero de elementos do Arrey.
//console.log(lista.length);

//console.log(lista);

//Remove a propiedade de Arrey e apresenta como string normal.
//console.log(lista.toString());

//Remove a propiedade de Arrey e apresenta como string normal alem de add um divisor de sua escolha.
//console.log(lista.join(" - "));

//----------------------------------------------------------------------------------------------//

//var nome = "Anderson Fernando";
//var idade = 26;
//var frase = "Japão tem muitos Animes bons!!!";

//alert serve para apresentar uma mensagem antes de iniciar a pagina.
//alert("Meu Primeiro JS");
//alert("Bem Vindo " + nome + " sua idade é " + idade);
//Se depois da Variavel X for add um .replace é possibel alterar uma(s) palavra(s) palavra(s)
//alert(frase.replace("Japão", "Brasil não"));

//----------------------------------------------------------------------------------------------//

//Auxilia a ver os resultados do codigo direto na pagina ao inspecionar a pagina na opção CONSOLE.
//console.log (nome);
//console.log (idade);
//Se depois da Variavel X for add um .replace é possibel alterar uma(s) palavra(s) palavra(s)
//console.log (frase.replace("Japão", "Brasil não"));

