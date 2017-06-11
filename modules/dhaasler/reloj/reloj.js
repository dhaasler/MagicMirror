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
		var fecha = document.createElement("div");
		var salida = document.createElement("div");
		var horayminutos = document.createElement("span"); // creamos subhijos para la salida
		var segundos = document.createElement("span");		// y así poner los segundos en otra tonalidad de color
		var hora = moment().hour();
        var minuto = moment().format("mm");  //que se vean minutos y segundos con dos dígitos
        var segundo = moment().format("ss");
        var dia = moment().format("dddd, DD [de] MMMM");		//para leer la fecha en ese formato
        fecha.innerHTML = dia;
		horayminutos.innerHTML = hora + ":" + minuto;
		segundos.innerHTML = " " + segundo;
		segundos.className =  "bright gris light";
		horayminutos.className = "time bright large light";
		salida.appendChild(fecha);
		salida.appendChild(horayminutos);					//se unen las salidas
		salida.appendChild(segundos);
		return salida;
	}
});