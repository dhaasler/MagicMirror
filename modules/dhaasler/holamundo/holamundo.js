//mi primer modulo

Module.register("holamundo",{
	defaults: {
		text: "¡Hola mundo!"
	},
	getDom: function() {
		var salida = document.createElement("div");
		salida.innerHTML = this.config.text;
		return salida;
	}
});
