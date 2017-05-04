function Pokemon(nombre,color,poderDeAtaque){
	this.nombre = nombre;
	this.color = color;

	this.nivelDeAmistad = 0;

	this.vida = 100;
	this.poderDeAtaque = poderDeAtaque;

	this.mostrarPokemon = function(){
		return("Hola, soy: "+ this.nombre + " y soy de color: "+ this.color);
	};
	this.aumentarAmistad = function(Valor){
		this.nivelDeAmistad = this.nivelDeAmistad + valor;
	};
	this.atacar = function(pokemon){
		pokemon.vida = pokemon.vida - this.poderDeAtaque;
		return pokemon.vida;
	};
};

//Pikachu.atacar(Charmander)
//document.write(Charmander.vida);

function pelear(){

var uno = document.getElementById("opcion1").value;
var dos = document.getElementById("opcion2").value;
var pokemon1 = new Pokemon(uno,"amarillo",100);
var pokemon2 = new Pokemon(dos,"rojo",20);
pokemon1.atacar(pokemon2);

	var resultado = document.getElementById("mostrar");
   var muestra = (pokemon1.nombre + " atacó a " + pokemon2.nombre + ". Y " + pokemon2.nombre + " tiene una vida de " + pokemon2.vida);
		resultado.innerHTML = muestra;

	//document.getElementById('mostrar').innerHTML += ("<center><li>"+holi+"</li></center>");
}