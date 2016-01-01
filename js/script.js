var equacao; 

function preencher(valorBotao){
	equacao = document.getElementById('visor').value += valorBotao;
}

function calcular(){
	var result = eval(equacao);
	document.getElementById('visor').value = '';
	document.getElementById('visor').value = result;
}

function limparPorNum(){
    var numeros = document.getElementById('visor').value;
    
    var str = new String(numeros);
 
    var menosUmNumero = str.substring(0,(str.length - 1));

    document.getElementById('visor').value = menosUmNumero;
}

function raiz(){
    var valor = document.getElementById('visor').value;

    var x = Math.sqrt(valor);

    document.getElementById('visor').value = x;
    
}