// módulo para mostrar la hora

Module.register("reloj",{

	//Lo primero es hacer actualizarse el módulo, volviendo a iniciarse cada X tiempo
	start: function() {
		var self = this;
		setInterval(function() {
			self.updateDom(000); //ajusta, en milisegundos, la velocidad de aparición de la info, si cambia
		}, 1000); //este es el X tiempo que tarda en volver a iniciar el módulo, en milisegundos
	},

	//declaro el script que necesito para sacar la hora del ordenador
    getScripts: function() {
		return ["moment.js"];
	},

	getDom: function() {
		var self = this;
		var salida = document.createElement("div");
		var importante = document.createElement("span"); // creamos dos subhijos para la salida
		var extra = document.createElement("span");		// y así poner los segundos en otra tonalidad de color
		salida.appendChild(importante);
		salida.appendChild(extra);
		var hora = moment().hour();
        var minuto = moment().minute();
        var segundo = moment().second();
		importante.innerHTML = hora + ":" + minuto;
		extra.innerHTML = " " + segundo;
		extra.className = this.config.classes ? this.config.classes : "gris";
		return salida;
	}
});