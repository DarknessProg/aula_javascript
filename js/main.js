
function clicou(){
    document.getElementById("Agradecimento").innerHTML="<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("Agradecimento"))
    //alert("Obrigado por clicar");
}

function Redirecionar(){
    window.open("https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:P%C3%A1gina_principal");
    //window.location.href = "https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:P%C3%A1gina_principal";
}

function Trocar(elemento){
    elemento.innerHTML="<b>Obrigado por passar o mouse</b>"
    //document.getElementById("mousemove").innerHTML="<b>Obrigado por passar o mouse</b>";
    //alert("Trocar texto");
}

function Voltar(elemento){
    elemento.innerHTML="Passe o mouse aqui"
    //document.getElementById("mousemove").innerHTML="<b>Passe o mouse aqui</b>";
}

function load(){
    alert("Pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}


/*
function soma(n1, n2){
    return n1+n2;
}
var validar;
function validaIdade(idade){
    //var validar;
    if (idade>=18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}


var idade = prompt("Qual a sua idade: ");
console.log(validaIdade(idade));
//alert(soma(5, 10));
*/

/*
var d = new Date()
alert(d)
alert(d.getDay());
alert(d.getMonth()+1);
alert(d.getHours());
*/

/*
var cont;
for(cont=0; cont<=5;  cont++){
    console.log(cont);
}
*/

/*
var cont = 0;
while(cont <= 5){
    console.log(cont);
    cont++
}
*/

/*
var idade = prompt("Qual a sua idade:");
if(idade>=18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};
*/

/*
var frutas = [{nome:"Maçã", cor:"Vermelha"}, {nome:"Uva", cor:"Roxa"}];
console.log(frutas);
console.log(frutas[0].nome);
alert(frutas[1].cor);
*/

//var fruta = {Nome:"Maçã", Cor:"Vermelha"};
//console.log(fruta);
//console.log(fruta.Nome);
//alert(fruta.Cor);


//var lista = ["Maçã", "Pera", "Laranja"];
//lista.push("Uva");
//console.log(lista);
//console.log(lista[1]);
//lista.pop();
//console.log(lista);
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista.join("-"));


//var nome = "Rafael Moraes";
//var n1 = 20;
//var n2 = 10;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + n1 + " anos");
//console.log(nome);
//console.log(n1+n2);
//console.log(frase.replace("Japão", "Brasil"));
//alert(frase.replace("Japão", "Brasil"))