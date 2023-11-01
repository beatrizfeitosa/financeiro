function calcular() {
    var salarioBruto = document.getElementById('salarioBruto').value;
    var irrf, inss, fgts, salarioLiquido;
    
    const salarioL = document.querySelector("#salarioLiquido")
    const inssValor = document.querySelector("#inss")
    const irrfValor = document.querySelector("#irrf")
    const fgtsValor = document.querySelector("#fgts")

    //calculo do inss
    if (salarioBruto <= 1212.1) {
        inss = 90.9;
    } else if (salarioBruto <= 2427.35) {
        inss = 90.9 + (salarioBruto - 1212.1) * 0.09;
    } else if (salarioBruto <= 3641.03) {
        inss = 90.9 + 109.38 + (salarioBruto - 2427.35) * 0.12;
    } else if (salarioBruto <= 7087.22) {
        inss = 90.9 + 109.38 + 145.65 + (salarioBruto - 3641.03) * 0.14;
    }

    //calculo do irrf
    var baseCalculo = salarioBruto - inss;
    if (baseCalculo <= 1903.98) {
        irrf = 0.0;
    } else if (baseCalculo <= 2826.65) {
        irrf =  baseCalculo * 0.075 - 142.80;
    } else if (baseCalculo <= 3751.05) {
        irrf = baseCalculo * 0.15 - 354.80;
    } else if (baseCalculo <= 4664.68) {
        irrf = baseCalculo * 0.225 - 636.13;
    } else if (baseCalculo > 4664.68){
        irrf = baseCalculo * 0.227 - 869.36;
    }

    //calculo do fgts
    fgts = 0.08 * salarioBruto;

    //calculo do salario liquido
    salarioLiquido = salarioBruto - irrf - inss;

    //mostrar resultado
    salarioL.innerHTML = "R$ " + salarioLiquido.toFixed(2);
    inssValor.innerHTML = "R$ " + inss.toFixed(2);
    irrfValor.innerHTML = "R$ " + irrf.toFixed(2);
    fgtsValor.innerHTML = "R$ " + fgts.toFixed(2);
};

