function calcular() {
    var valorCusto = document.getElementById('valorCusto').value;
    var margemLucro = document.getElementById('margemLucro').value;
    var valorVenda, pis, cofins, lucro, totalImposto, valorCustoImposto;

    const vendaResultado = document.querySelector("#vendaResultado")
    const pisResultado = document.querySelector("#pisResultado")
    const cofinsResultado = document.querySelector("#cofinsResultado")
    const lucroResultado = document.querySelector("#lucroResultado")

    pis = valorCusto * 0.0065; //calculo do pis
    cofins = valorCusto * 0.03; //calculo do cofins
    totalImposto = pis + cofins; //soma dos impostos
    valorCustoImposto = parseFloat(valorCusto) + totalImposto; //valor do produto com imposto
    lucro = (margemLucro / 100) * valorCustoImposto; //calculo da margem de lucro
    valorVenda = valorCustoImposto + lucro; //valor líquido do produto

    //mostrar resultado
    vendaResultado.innerHTML = "R$ " + valorVenda.toFixed(2);
    pisResultado.innerHTML = "R$ " + pis.toFixed(2);
    cofinsResultado.innerHTML = "R$ " + cofins.toFixed(2);
    lucroResultado.innerHTML = "R$ " + lucro.toFixed(2);
};

