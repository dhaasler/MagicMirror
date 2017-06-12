//mi módulo para mostrar el tiempo

Module.register("tiempo",{
    defaults: {
        url: "http://api.openweathermap.org/data/2.5/weather?id=3117735&units=metric&lang=es&APPID=bf23444551f5949a76033debdd45f6ea" 
    },
    start: function() {
		var self = this;
		this.obtenido = false;
		this.temp = 'Cargando temperatura';
		this.cogerTiempo();
	},
    getDom: function() {
        Log.info("get dom");
        var self = this;
		var salida = document.createElement("div");
		salida.className =  "large bright thin";
		salida.innerHTML = this.temp;
		return salida;
	},
    cogerTiempo: function() {
        var self = this;
        if (!this.obtenido) {
            var weatherRequest = new XMLHttpRequest();
	        weatherRequest.open("GET", this.config.url, true);              //hacemos la petición a la URL de mi API
		    weatherRequest.onreadystatechange = function() {
		    	if (this.readyState === 4) {
		    	    if (this.status === 200) {                              //comprueba la validez de la URL
		    		    var data = JSON.parse(this.response);               
		    		    self.temp = parseInt(data.main.temp) + " ºC";       //recuperamos el valor de temperatura
		    		    self.obtenido = true;
	        	    self.updateDom(1000);                               //animación de 1 segundo
				    } else {
				        self.cogerTiempo();
			        }
		        } else {
		            self.cogerTiempo();
		        }
	        };
	        weatherRequest.send();
        }
    }
})