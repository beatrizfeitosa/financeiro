function calcular() {
	var salarioLiquido = document.getElementById('salarioLiquido').value;
	var tempoTrabalhado = document.getElementById('tempoTrabalhado').value;
	const valorRescisao = document.querySelector("#valorRescisao")
	var possuiFerias, valorContribuicao, ferias = 0, rescisao

	//verifica se tem férias ou não
	if(document.getElementById("radioSim").checked){
	    possuiFerias = true
	}

	if(document.getElementById("radioNao").checked){
	    possuiFerias = false
	}

	valorContribuicao = (salarioLiquido * 0.08) * tempoTrabalhado //valor de contribuicao (fgts * meses contribuidos)

	if (possuiFerias == true) { //calculo de ferias 1/3 do salario a cada 12 meses
		ferias = Math.floor(tempoTrabalhado/12) * (salarioLiquido * (1/3)) 
	}

	console.log(possuiFerias)
	console.log(ferias)
	console.log(valorContribuicao)

	//calculo da rescisao do contrato de trabalho
	rescisao = valorContribuicao + ferias + parseFloat(salarioLiquido); 

	//mostrar resultado
    valorRescisao.innerHTML = "R$ " + rescisao.toFixed(2);
}