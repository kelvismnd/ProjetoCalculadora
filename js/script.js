function preencher(valor){

	document.getElementById("visor").value +=valor;

}

function calcular(){
	var calculo = document.getElementById("visor").value;
	document.getElementById("visor").value = eval(calculo);
}