'use strict'

//variáveis
let btnCalcular = document.getElementById('calcular');
let btnLimpar = document.getElementById('limpar');

//eventos
btnCalcular.addEventListener('click', imc, false);
btnLimpar.addEventListener('click', limpeza, false);

//funções
function imc(e){
	let altura = document.getElementById('altura').value;
	let peso = document.getElementById('peso').value;
	if((altura.length == 0) || (peso.length == 0)){
		alert("É necessário preencher todos os campos!");
	}else{
		let alt = altura.replace(',','.');
		let pes = peso.replace(',','.');
		let imc = (pes/Math.pow(alt,2)).toFixed(1);
		document.getElementById('resultado').innerHTML = imc;
	}
}

function limpeza(e){
	document.getElementById('altura').value = "";
	document.getElementById('peso').value = "";
	document.getElementById('resultado').innerHTML = "";
}