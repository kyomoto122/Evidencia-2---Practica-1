const inputPeso    = document.getElementById("peso");
const inputAltura  = document.getElementById("altura");
const outputIMC    = document.getElementById("imc");
const outputResult = document.getElementById("resultado");
const btnCalcular  = document.getElementById("btnCalcular");
const btnLimpiar   = document.getElementById("btnLimpiar");

btnLimpiar.addEventListener("click", e => {
    e.preventDefault();

    inputPeso.value    = "";
    inputAltura.value  = "";
    outputIMC.value    = "";
    outputResult.value = "";

    inputPeso.focus();
});

btnCalcular.addEventListener("click", e => {
    e.preventDefault();

    let peso   = parseFloat(inputPeso.value);
    let altura = parseFloat(inputAltura.value);
    let imc    = peso / (altura * altura);

    outputIMC.value = imc;

    if (imc < 18.5) {
        outputResult.value = "Bajo peso";
    } else if (imc >= 18.5 && imc <= 25) {
        outputResult.value = "Peso normal";
    } else {
        outputResult.value = "Sin clasificación";
    }
});