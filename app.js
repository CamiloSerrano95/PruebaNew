var objectJS = {
	nombre: "Camilo",
	edad: 22
	printer:function() {
		console.log(this. nombre + " " + this.edad);
	}
}; 

console.log("Objecto: ", objectJS);

var jsonstring = JSON.stringify(objectJS);

console.log(jsonstring);

var objectJson = JSON.parse(jsonstring);

console.log(objectJson.nombre);
console.log(objectJson.edad);