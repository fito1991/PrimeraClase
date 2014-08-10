function aleatorio(minimo, maximo)
{
	var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
	return numero;
}

var opciones = document.getElementsByName("ppt");
var opcionMaquina = aleatorio(0,4);
var piedra = 0;
var papel = 1;
var tijera = 2;
var lagarto = 3;
var spock = 4;

function jugar()
{
	var opcionUsuario;

	for(i = 0; i < opciones.length; i++)
	{
		if(opciones[i].checked)
		{
			opcionUsuario = i;
		}
	}

	if(document.frm.ppt[0].checked == false & document.frm.ppt[1].checked == false & document.frm.ppt[2].checked == false & document.frm.ppt[3].checked == false & document.frm.ppt[4].checked == false )
	{
		alert("Seleccione una opcion");
	}
	else if(opcionMaquina == piedra)
	{
		document.getElementById('seleccion').innerHTML = "GoogleChrome selecciono piedra" ;
		document.getElementById('submit').disabled = true;
		document.getElementById('radio').disabled = true;
		document.getElementById('radio1').disabled = true;
		document.getElementById('radio2').disabled = true;
		document.getElementById('radio3').disabled = true;
		document.getElementById('radio4').disabled = true;
	}
	else if(opcionMaquina == papel)
	{
		document.getElementById('seleccion').innerHTML = "GoogleChrome selecciono papel";
		document.getElementById('submit').disabled = true;
		document.getElementById('radio').disabled = true;
		document.getElementById('radio1').disabled = true;
		document.getElementById('radio2').disabled = true;
		document.getElementById('radio3').disabled = true;
		document.getElementById('radio4').disabled = true;
	}
	else if(opcionMaquina == tijera)
	{
		document.getElementById('seleccion').innerHTML = "GoogleChrome selecciono tijera";
		document.getElementById('submit').disabled = true;
		document.getElementById('radio').disabled = true;
		document.getElementById('radio1').disabled = true;
		document.getElementById('radio2').disabled = true;
		document.getElementById('radio3').disabled = true;
		document.getElementById('radio4').disabled = true;
	}
	else if(opcionMaquina == lagarto)
	{
		document.getElementById('seleccion').innerHTML = "GoogleChrome selecciono lagarto";
		document.getElementById('submit').disabled = true;
		document.getElementById('radio').disabled = true;
		document.getElementById('radio1').disabled = true;
		document.getElementById('radio2').disabled = true;
		document.getElementById('radio3').disabled = true;
		document.getElementById('radio4').disabled = true;
	}
	else if(opcionMaquina == spock)
	{
		document.getElementById('seleccion').innerHTML = "GoogleChrome selecciono spock";
		document.getElementById('submit').disabled = true;
		document.getElementById('radio').disabled = true;
		document.getElementById('radio1').disabled = true;
		document.getElementById('radio2').disabled = true;
		document.getElementById('radio3').disabled = true;
		document.getElementById('radio4').disabled = true;
	}

	if(opcionMaquina == opcionUsuario)
	{
		document.getElementById('respuesta').innerHTML = "!Es un EMPATE! o.o" ;
	}
	//----PIEDRA----//
	else if(opcionMaquina == piedra & opcionUsuario == papel)
	{
		document.getElementById('respuesta').innerHTML = "¡Ganaste! :D " ;
	}
	else if(opcionMaquina == piedra & opcionUsuario == tijera)
	{
		document.getElementById('respuesta').innerHTML = "¡JA JA!¡Perdiste! :D " ;
	}
	else if(opcionMaquina == piedra & opcionUsuario == lagarto)
	{
		document.getElementById('respuesta').innerHTML = "¡JA JA!¡Perdiste! :D " ;
	}
	else if(opcionMaquina == piedra & opcionUsuario == spock)
	{
		document.getElementById('respuesta').innerHTML = "¡Ganaste! :D " ;
	}	
	//----PAPEL----//
	else if(opcionMaquina == papel & opcionUsuario == tijera)
	{
		document.getElementById('respuesta').innerHTML = "¡Ganaste! :D " ;
	}	
	else if(opcionMaquina == papel & opcionUsuario == piedra)
	{
		document.getElementById('respuesta').innerHTML = "¡JA JA!¡Perdiste! :D " ;
	}
	else if(opcionMaquina == papel & opcionUsuario == lagarto)
	{
		document.getElementById('respuesta').innerHTML = "¡Ganaste! :D " ;
	}
	else if(opcionMaquina == papel & opcionUsuario == spock)
	{
		document.getElementById('respuesta').innerHTML = "¡JA JA!¡Perdiste! :D " ;
	}
	//----TIJERA----//
	else if(opcionMaquina == tijera & opcionUsuario == piedra)
	{
		document.getElementById('respuesta').innerHTML = "¡Ganaste! :D " ;
	}
	else if(opcionMaquina == tijera & opcionUsuario == papel)
	{
		document.getElementById('respuesta').innerHTML = "¡JA JA!¡Perdiste! :D " ;
	}
	else if(opcionMaquina == tijera & opcionUsuario == lagarto)
	{
		document.getElementById('respuesta').innerHTML = "¡JA JA!¡Perdiste! :D " ;
	}
	else if(opcionMaquina == tijera & opcionUsuario == spock)
	{
		document.getElementById('respuesta').innerHTML = "¡Ganaste! :D " ;
	}
	//----LAGARTO----//
	else if(opcionMaquina == lagarto & opcionUsuario == piedra)
	{
		document.getElementById('respuesta').innerHTML = "¡Ganaste! :D " ;
	}
	else if(opcionMaquina == lagarto & opcionUsuario == papel)
	{
		document.getElementById('respuesta').innerHTML = "¡JA JA!¡Perdiste! :D " ;
	}
	else if(opcionMaquina == lagarto & opcionUsuario == tijera)
	{
		document.getElementById('respuesta').innerHTML = "¡Ganaste! :D " ;
	}
	else if(opcionMaquina == lagarto & opcionUsuario == spock)
	{
		document.getElementById('respuesta').innerHTML = "¡JA JA!¡Perdiste! :D " ;
	}
	//----SPOCK----///
	else if(opcionMaquina == spock & opcionUsuario == piedra)
	{
		document.getElementById('respuesta').innerHTML = "¡JA JA!¡Perdiste! :D " ;
	}
	else if(opcionMaquina == spock & opcionUsuario == papel)
	{
		document.getElementById('respuesta').innerHTML = "¡Ganaste! :D " ;
	}	
	else if(opcionMaquina == spock & opcionUsuario == tijera)
	{
		document.getElementById('respuesta').innerHTML = "¡JA JA!¡Perdiste! :D " ;
	}
	else if(opcionMaquina == spock & opcionUsuario == lagarto)
	{
		document.getElementById('respuesta').innerHTML = "¡Ganaste! :D" ;
	}	
}
