<!DOCTYPE html>
<html>
<head>
	<title>Imposto</title>
</head>
<body>
<?php 
	include('header.html');
	include('menu.html');
?>
<div class="container" style="min-height: 400px; padding-top: 50px;">
		<div class="row">
			<div class="col">
				<h5>Valor de custo</h5>
				<br>
				<form class="row g-3">
					<div class="col input-group">
						<span class="input-group-text" id="basic-addon1">R$</span>
						<input type="number" class="form-control" id="valorCusto" placeholder="Digite o valor de custo">
					</div>
				</form>
				<br>
				<br>
				<h5>Margem de lucro</h5>
				<br>
				<form class="row g-3">
					<div class="col input-group mb-3">
						<input type="number" class="form-control" id="margemLucro" placeholder="Digite a margem de lucro">
						<span class="input-group-text" id="basic-addon1">%</span>
					</div>
				</form>
				<br>
				<div class="col">
						<input type="button" class="btn btn-outline-secondary" onclick="calcular()" value="Calcular">
				</div>
			</div>
	   
			<div class="col"> 
				<h5>Valor de venda</h5>
				<br>
				<li class="list-group-item" id="vendaResultado">...</li>
				<br>
				<ol class="list-group">
					<li class="list-group-item align-items-start">
					<div class="ms-2 me-auto">
						<div class="fw-bold">PIS</div>
						<div id="pisResultado">...</div>
					</div>
					</li>
					<li class="list-group-item  align-items-start">
					<div class="ms-2 me-auto">
						<div class="fw-bold">COFINS</div>
						<div id="cofinsResultado">...</div>
					</div>
					</li>
					<li class="list-group-item  align-items-start">
					<div class="ms-2 me-auto">
						<div class="fw-bold">LUCRO</div>
						<div id="lucroResultado">...</div>
					</div>
					</li>
				</ol>
			</div>
		</div>		
    </div>
<?php 
	include('footer.html');
?>
</body>
</html>

<script src="../assets/js/imposto.js"></script>