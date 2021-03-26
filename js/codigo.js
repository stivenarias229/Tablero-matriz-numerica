//declarando el arreglo bidimensional de 5 x 10
var casillas = new Array(10);
//Es la que va a controlar el turno si es 1 el turno es para jugador, si es 0 el turno es para marcar automatico
var turno = 1;

for (var i = 0; i < 10; i++) {
	casillas[i] = new Array(5);
}

//variable contadora de los intentos del usuario
var contador = 5;
var modo_juegos = document.getElementById('modo_juego').value;

//Llenando la matriz con los cudros del tablero
for(var i=0; i< 10; i++){
	for(var j=0; j< 5; j++){
		casillas[i][j] = '<div class="casilla" onclick="marcar_casilla('+i+','+j+')">O</div>';
		document.getElementById('contenedor').innerHTML += casillas[i][j];
	}
}

//Imprimiendo la variable entera de los intentos disponibles
//document.getElementById('contenedor').innerHTML = casillas;

//Imprimiendo el tablero en pantalla
document.getElementById('etiqueta_contador').innerHTML = contador;


//Funcion para marcar la fila y la columna de la casilla que selecciono el usuario
function marcar_casilla(i, j){
	modo_juegos = document.getElementById('modo_juego').value;

	
	if(contador >= 0){
		if(modo_juegos == 'manual'){
			var fil=0
			while(fil < 10 ){
				casillas[fil][j] = '<div class="presionada">x</div>';
				fil++;
			}
			for(var col=0; col< 5; col++){
				casillas[i][col] = '<div class="presionada">x</div>';
			}
			casillas[i][j] = '<div class="presionada">x</div>';

			contador--;
			document.getElementById('etiqueta_contador').innerHTML = contador;

			document.getElementById('contenedor').innerHTML = casillas;
		}else{
			//Marcar la casilla seleccionada por el usuario
			var fil=0
			while(fil < 10 ){
				casillas[fil][j] = '<div class="presionada">x</div>';
				fil++;
			}
			for(var col=0; col< 5; col++){
				casillas[i][col] = '<div class="presionada">x</div>';
			}
			casillas[i][j] = '<div class="presionada">x</div>';

			contador--;
			document.getElementById('etiqueta_contador').innerHTML = contador;

			document.getElementById('contenedor').innerHTML = casillas;

			//Marcar automaticamente.
			var num_fila = Math.floor(Math.random() * ((10 - 0) + 0));
			var num_colum = Math.floor(Math.random() * ((5 - 0) + 0));
			console.log(num_fila);
			console.log(num_colum);

			var fil=0;
			while(fil < 10 ){
				casillas[fil][num_colum] = '<div class="presionada">x</div>';
				fil++;
			}
			for(var col=0; col< 5; col++){
				casillas[num_fila][col] = '<div class="presionada">x</div>';
			}

			casillas[num_fila][num_colum] = '<div class="presionada">x</div>';
			
			document.getElementById('contenedor').innerHTML = casillas;
			contador--;
			document.getElementById('etiqueta_contador').innerHTML = contador;
		}
	}
}
