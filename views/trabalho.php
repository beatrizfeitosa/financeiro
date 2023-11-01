<!DOCTYPE html>
<html>
<head>
	<title>Trabalho</title>
</head>
<body>
<?php 
	include('header.html');
	include('menu.html');
?>
<div class="container" style="min-height: 400px; padding-top: 50px;">
		<div class="row">
			<div class="col">
				<h5>Salário Líquido</h5>
				<br>
				<form class="row g-3">
					<div class="col input-group">
						<span class="input-group-text" id="basic-addon1">R$</span>
						<input type="number" class="form-control" id="salarioLiquido" placeholder="Digite o salário líquido">
					</div>
				</form>
				<br>
				<br>
				<h5>Tempo trabalhado</h5>
				<br>
				<form class="row g-3">
					<div class="col input-group mb-3">
						<input type="number" class="form-control" id="tempoTrabalhado" placeholder="Digite o tempo trabalhado">
						<span class="input-group-text" id="basic-addon1">meses</span>
					</div>
				</form>
				<br>
				<h5>Possui férias vencidas?</h5>
				<div class="form-check">
		  			<input class="form-check-input" type="radio" name="flexRadioDefault" id="radioSim">
		  			<label class="form-check-label" for="radioSim">Sim</label>
				</div>
				<div class="form-check">
		  			<input class="form-check-input" type="radio" name="flexRadioDefault" id="radioNao">
		  			<label class="form-check-label" for="radioNao">Não</label>
				</div>
				<br>
				<div class="col">
						<input type="button" class="btn btn-outline-secondary" onclick="calcular()" value="Calcular">
				</div>
			</div>
	   
			<div class="col"> 
				<h5>Rescisão do contrato de trabalho</h5>
				<br>
				<li class="list-group-item" id="valorRescisao">...</li>			
			</div>
		</div>		
</div>
<?php 
	include('footer.html');
?>
</body>
</html>

<script src="../assets/js/trabalho.js"></script>
