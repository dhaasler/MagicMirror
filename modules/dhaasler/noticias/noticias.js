//noticias.js - modulo para mostrar titulares de noticias recogidas por RSS

Module.register("noticias",{
	
	//Lo primero es hacer actualizarse el módulo, volviendo a iniciarse cada X tiempo
	/*start: function() {
		var self = this;
		setInterval(function() {
			self.updateDom(2000); //ajusta, en milisegundos, la velocidad de aparición de la info, si cambia
		}, 10000); //este es el X tiempo que tarda en volver a iniciar el módulo, en milisegundos
	},*/

	//declaro el script que necesito para sacar la hora del ordenador
    getScripts: function() {
		return ["moment.js"];
	},
	getDom: function () {
	    var salida = document.createElement("div");
	    var sourceAndTimestamp = document.createElement("div");
	    salida = registerFeeds();
	    return salida;
	},
});