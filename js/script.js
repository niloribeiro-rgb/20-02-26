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

function primeira() {
    let numero1;
    let numero2;

    numero1 = prompt("numero1?");
    // numero2=print("numero2?");
    numero2 = prompt("numero2?")

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

function segunda() {

    let senha = prompt("qual a senha?");
    if (senha == 1234) {
        alert("acesso permitido")
    }
    else {
        alert("acesso negado")
    }

}
function terceira() {

    let peso = prompt("qual o seu peso (kg) (virgula: . )");
    let altura = prompt("qual a sua altura (m) (virgula: . )");
    let imc = Number(peso) / (Number(altura) * Number(altura));
    alert("seu imc:" + imc)

    if(imc<18.5){
        alert("abaixo do peso.");
    }
    else if(imc>=18 & imc<24.9){
        alert("peso normal");
    }
    else if(imc>=25 & imc<29.9){
        alert("sobrepeso");
    }
    else if(imc>=30 & imc<34.9){
        alert("obesidade I")
    }
     else if(imc>=35 & imc<39.9){
        alert("obesidade II")
    }
     else if(imc>=40){
        alert("obesidade III")
    }
}
