//saludos.js - modulo que te da los buenos días y te dice algunas cosas

Module.register("saludos",{
	
	//Lo primero es hacer actualizarse el módulo, volviendo a iniciarse cada X tiempo
	start: function() {
		var self = this;
		setInterval(function() {
			self.updateDom(2000); //ajusta, en milisegundos, la velocidad de aparición de la info, si cambia
		}, 10000); //este es el X tiempo que tarda en volver a iniciar el módulo, en milisegundos
	},
	
	//declaro el script que necesito para sacar la hora del ordenador
    getScripts: function() {
		return ["moment.js"];
	},
	
	getDom: function() {
		var salida = document.createElement("div");
		var numero = Math.random();                  //randomizo un número entre 0 y 1 para compararlo con un valor fijo y si
		                                             //es mayor que 0.5, muestro una frase genérica, si es menor, muestro el
		                                             //saludo acorde con la hora del día
		salida.className = this.config.classes ? this.config.classes : "thin bright";
		var hora = moment().hour(); 
		if (numero > 0.5) {
		    if (hora >= 5 && hora <12) {
		        salida.innerHTML = 'Buenos días, David';
		        }
		        else if (hora >= 12 && hora <21) {
	    		    salida.innerHTML = 'Buenas tardes, David';
	        	}
	        	else {
	    	        salida.innerHTML = 'Buenas noches, David';
	            }
	    }
	    else {
            salida.innerHTML = 'Espero que tengas un buen día';
	    }
		return salida;
	    }
});