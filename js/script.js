// let valor= 1;

// let soma;
// soma= valor + 100;

// console.log(soma)

// let nota1;
// let nota2;
// let media;

// nota1=Number(prompt("sua nota 1?"));
// nota2=Number(prompt("nota 2?"));


// media= (nota1 + nota2) /2;

// alert("media:" + media);

// if(media >= 6){
//     console.log("cidadão aprovado");
//     console.log("media=" + media);
// }
// else{
//     console.log("reprovado");
//     console.log("nota="+media)
// }

// let nome1;
// let nome2;

// nome1=prompt("seu nome");
// nome2=prompt("seu sobrenome:");

// alert(nome1+" "+nome2);

function one() {
    let numero1;
    let numero2;

    numero1 = Number(prompt("numero1?"));
    // numero2=print("numero2?");
    numero2 = Number(prompt("numero2?"));

    if (numero1 == numero2) {
        alert("são iguais");
    }
    else {
        alert("são diferentes");
        if (numero1 > numero2) {
            alert("o " + numero1 + " é o maior e o " + numero2 + " é menor")
        }
        else {
            alert("o " + numero2 + " é o maior e o " + numero1 + " o é menor")
        }
    }
}

function two() {

    let senha = prompt("qual a senha?");
    if (senha == 1234) {
        alert("acesso permitido")
    }
    else {
        alert("acesso negado")
    }

}
function three() {

    let peso = prompt("qual o seu peso (kg) (virgula: . )");
    let altura = prompt("qual a sua altura (m) (virgula: . )");
    let imc = Number(peso) / (Number(altura) * Number(altura));
    alert("seu imc:" + imc)

    if (imc < 18.5) {
        alert("abaixo do peso.");
    }
    else if (imc >= 18 & imc < 24.9) {
        alert("peso normal");
    }
    else if (imc >= 25 & imc < 29.9) {
        alert("sobrepeso");
    }
    else if (imc >= 30 & imc < 34.9) {
        alert("obesidade I")
    }
    else if (imc >= 35 & imc < 39.9) {
        alert("obesidade II")
    }
    else if (imc >= 40) {
        alert("obesidade III")
    }
}
function four() {
    let salario = Number(prompt("Seu salario?"));
    let parcela = Number(prompt("valor da parcela?"));

    let trintaPorcentoDoSalario = salario * (30 / 100);

    if (parcela <= trintaPorcentoDoSalario) {
        alert("eprestimo aprovado " + "(a parcela é maior ou igual a salario dividido por 30%) " + " valor maximo aprovado= " + trintaPorcentoDoSalario);
    }
    else {
        alert("emprestimo negado " + "(a parcela NãO é maior ou igual a salario dividido por 30%) " + "30% do salario= " + trintaPorcentoDoSalario);
    }

}
function five() {
    let idade = Number(prompt("qual sua idade"));

    if (idade < 0) {
        alert("ops! você escreveu sua idade como negativa");
    }
    else if (idade >= 0 & idade <= 12) {
        alert(" criança");
    }
    else if (idade >= 13 & idade <= 17) {
        alert("adolescente");
    }
    else if (idade >= 18 & idade <= 59) {
        alert("adulto");
    }
    else if (idade >= 60 & idade <= 130) {
        alert("idoso");
    }
    else {
        alert("ops! algo de errado ocorreu");
    }
}
function six() {
    let velocidade = Number(prompt(" velocidade do veiculo"));

    if (velocidade <= 80) {
        alert("sem multa");
    }
    else if (velocidade > 80 & velocidade <= 100) {
        alert("multa leve R$100");
    }
    else if (velocidade > 100 & velocidade <= 120) {
        alert("multa grave R$300");
    }
    else if (velocidade > 120) {
        alert("multa gravíssima R$600");
    }
}
function seven() {
    let ano = prompt("qual o ano");

    let restoDeAnoDivididoPorQuatro = ano % 4;
    let restoDeAnoDivididoPorCem = ano % 100;
    let restoDeAnoDivididoPorQuatrocentos = ano % 400;


    if (restoDeAnoDivididoPorQuatro == 0 & restoDeAnoDivididoPorCem != 0 || restoDeAnoDivididoPorQuatrocentos == 0) {
        alert("ano é bissexto porque é divisivel por 4 e nao por 100 ou é divisivel por 400")
    }
    else {
        alert("ano NAO é bissexto porque NAO é divisivel por 4 e nao por 100 ou é divisivel por 400")
    }
}
function eight() {
    let numero1 = prompt("numero 1?")
    let numero2 = prompt("numero 2?")
    let operador = prompt("qual a operação? (+,-,*,/)")

    if (operador == "+" || operador == "-" || operador == "*" || operador == "/") {
        if (operador == "+") {
            let soma = Number(numero1) + Number(numero2);
            alert("resultado=" + soma)
        }
        else if (operador == "-") {
            let subtracao = Number(numero1) - Number(numero2);
            alert("resultado=" + subtracao)
        }
        else if (operador == "*") {
            let vezes = Number(numero1) * Number(numero2);
            alert("resultado=" + vezes)
        }
        else if (operador == "/") {
            if (numero2 == 0) {
                alert("erro! divisão por 0")
            }
            else {
                let divisao = Number(numero1) / Number(numero2);
                alert("resultado=" + divisao)
            }
        }
    }
    else {
        alert("carectere errado ou diferente das opcoes")
    }
}
function nine() {
    let ladoA = Number(prompt("lado A?"));
    let ladoB = Number(prompt("lado B?"));
    let ladoC = Number(prompt("lado C?"));

    if ((ladoA + ladoB) > ladoC && (ladoA + ladoC) > ladoB && (ladoB + ladoC) > ladoA) {
        if (ladoA == ladoB && ladoB == ladoC) {
            alert("é equilatero");
        }
        else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
            alert("isóceles");
        }
        else if (ladoA != ladoB && ladoC != ladoB) {
            alert("é escaleno")
        }

    }
    else {
        alert("não é triangulo")
    }

}
function ten() {
    let usuario = prompt("usuario?");
    let senha = prompt("qual senha");

    if (usuario == "admin" && senha == 1234) {
        alert("acesso permitido");
    }
    else {
        if (usuario == "admin" && senha != 1234) {
            alert("senha incorreta");
        }
        else {
            alert("usuario errado");
        }
    }
}
function eleven() {
    let valorcompra = Number(prompt("qual o valor da compra?"));

    if (valorcompra <= 100) {
        alert(" valor pagar=" + valorcompra + " (0% de desconconto)");
    }
    else if (valorcompra > 100 && valorcompra <= 500) {
        let valordesconto = valorcompra * 10 / 100;
        let valorpagar = valorcompra - valordesconto;
        alert("valor desconto=" + valordesconto + " valor pagar=" + valorpagar + " (10% de desconconto)");
    }
    else if (valorcompra > 500) {
        let valordesconto = valorcompra * 20 / 100;
        let valorpagar = valorcompra - valordesconto;
        alert("valor desconto=" + valordesconto + " valor pagar=" + valorpagar + " (20% de desconconto)");
    }
}
function twelve() {
    let numero = Number(prompt("um numero inteiro?"))
    let numeroresto = numero % 2;
    if (numero > 0) {
        alert("positivo")
    }
    else if (numero < 0) {
        alert("negativo")
    }
    else if (numero == 0) {
        alert("zero")
    }

    if (numeroresto == 0) {
        alert("par")
    }
    else {
        alert("ímpar")
    }
}
function thirteen() {
    let idade = Number(prompt("qual a sua idade"));

    if (idade >= 0) {
        if (idade < 16) {
            alert("nao vota")
        }
        else if (idade >= 16 & idade <= 17) {
            alert("voto facultativo");
        }
        else if (idade >= 18 & idade < 70) {
            alert("voto obrigatorio");
        }
        else if (idade >= 70) {
            alert("voto facultativo");
        }
    }
    else{
        alert("idade negativa")
    }
}
function fourteen(){
    let temperatura = Number(prompt("qual o valor da temperatura?"));
    let unidade = prompt("qual a unidade de medida da temperatura (C ou F)");

    let paraFahrenheit = (temperatura*9/5)+32;
    let paraCelsius = (temperatura-32)*5/9;
    if(unidade="C"){
        alert(temperatura+" °C="+paraFahrenheit+"°F");
    }
    else if(unidade="F"){
        alert(temperatura+" °F="+paraCelsius+"°C");
    }
    else{
        alert("erro");
    }
}
function fifteen(){
     let valorvendido = Number(prompt("qual o valor vendido"));

     if(valorvendido<=2000){
        alert("comissao="+valorvendido+" valor total "+((valorvendido*5/100)+valorvendido)+" (5%)")
     }
     else if(valorvendido>2000 & valorvendido<= 5000){
        alert("comissao="+valorvendido+" valor total "+((valorvendido*10/100)+valorvendido)+" (10%)")
     }
     else if(valorvendido>5000){
        alert("comissao="+valorvendido+" valor total "+((valorvendido*15/100)+valorvendido)+" (15%)")
     }
}
function sixteen(){
    let numero = Number(prompt("qual numero?"));

    if(numero>0 && numero <100){
        alert("dentro da caixa");
    }
    else{
        alert("fora da caixa");
    }
}
