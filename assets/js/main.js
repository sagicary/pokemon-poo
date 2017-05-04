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
		pokemon.vida = this.vida - this.poderDeAtaque;
		return pokemon.vida;
	};
};

//Pikachu.atacar(Charmander)
//document.write(Charmander.vida);


function pelear(){

var uno = document.getElementById("opcion1").value;
var dos = document.getElementById("opcion2").value;
var pokemon1 = new Pokemon(uno,"amarillo",Math.floor(Math.random(0,100)*101));
var pokemon2 = new Pokemon(dos,"rojo",20);
//console.log (pokemon1.atacar(pokemon2));
(pokemon1.atacar(pokemon2));
if (uno=="Pikachu"){
	var imagen = "https://cdn.iconverticons.com/files/png/fa2966e51dfb847f_256x256.png"
}else if(uno=="Charmander"){
	var imagen = "https://pbs.twimg.com/profile_images/669526334213767168/yNRInnlA.png"
}else if(uno=="Squirtle"){
	var imagen = "https://mlpforums.com/uploads/post_images/sig-4663395.squirtle.gif"
}else if(uno=="Meowth"){
	var imagen ="http://a0.memecaptain.com/src_thumbs/119375.png"
}else if(uno=="Bulbasaur"){
	var imagen = "https://3.bp.blogspot.com/-STkdspWw1Oc/VtT4it5zi3I/AAAAAAAAAAM/GcQBXe5DOd8/s1600/001Bulbasaur_AG_anime_3.png"
}
if (dos=="Pikachu"){
	var imagen2 = "https://cdn.iconverticons.com/files/png/fa2966e51dfb847f_256x256.png"
}else if(dos=="Charmander"){
	var imagen2 = "https://pbs.twimg.com/profile_images/669526334213767168/yNRInnlA.png"
}else if(dos=="Squirtle"){
	var imagen2 = "https://mlpforums.com/uploads/post_images/sig-4663395.squirtle.gif"
}else if(dos=="Meowth"){
	var imagen2 ="http://a0.memecaptain.com/src_thumbs/119375.png"
}else if(dos=="Bulbasaur"){
	var imagen2 = "https://3.bp.blogspot.com/-STkdspWw1Oc/VtT4it5zi3I/AAAAAAAAAAM/GcQBXe5DOd8/s1600/001Bulbasaur_AG_anime_3.png"
}


if (uno==dos){
	alert ("No se puede elegir el mismo pokemon para la batalla, elige otro :)");
}else{
	var resultado = document.getElementById("mostrar");
   var muestra = ("<img src='"+imagen+"' width='100' heigth='100'><img src='"+imagen2+"' width='100' heigth='100'><br>"+pokemon1.nombre + " atacó a " + pokemon2.nombre + ". Y " + pokemon2.nombre + " tiene una vida de " + pokemon2.vida);
		resultado.innerHTML = muestra;
}
	//document.getElementById('mostrar').innerHTML += ("<center><li>"+holi+"</li></center>");
}
