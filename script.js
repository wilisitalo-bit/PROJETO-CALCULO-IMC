function calcularIMC() {

    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    let resultado = document.getElementById("resultado");

    // Verificar se os campos foram preenchidos
    if (peso === "" || altura === "") {

        resultado.innerHTML = "Preencha todos os campos!";
        resultado.style.color = "#f87171";

        return;
    }

    peso = Number(peso);
    altura = Number(altura);

    // Validar valores
    if (peso <= 0 || altura <= 0) {

        resultado.innerHTML = "Digite valores maiores que zero!";
        resultado.style.color = "#f87171";

        return;
    }

    // Calcular IMC
    let imc = peso / (altura ** 2);

    let classificacao = "";

    // Classificação do IMC
    if (imc < 18.5) {

        classificacao = "Abaixo do peso";

    } else if (imc < 25) {

        classificacao = "Peso ideal";

    } else if (imc < 30) {

        classificacao = "Sobrepeso";

    } else if (imc < 35) {

        classificacao = "Obesidade";

    } else if (imc < 40) {

        classificacao = "Obesidade severa";

    } else {

        classificacao = "Obesidade mórbida";

    }

    // Exibir resultado
    resultado.innerHTML =
        "Seu IMC é: " + imc.toFixed(2) +
        "<br><br>" +
        "Classificação: " + classificacao;

    resultado.style.color = "#4ade80";

}
