/*
1) exporta-se uma função, pois quando ela for chamada no modulo app.js, queremos executar os comandos contidos 
dentro dessa função. Ou seja, para retornar esses comandos, precisamos encapsulá-los em formato de função.
2) precisamos passar o 'app' como parametro da função para atuarmos sobre ela
*/

//var dbConnection = require('../../config/dbConnection'); //recuperando a função de conexão, a partir da outra pasta config

module.exports = function(application) {  

	//connection = dbConnection(); 

	application.get('/noticias', function(req, res){
		application.app.controllers.noticias.noticias(application, req, res);														//a variavel "noticias" vai se comórtar na view como um array
	});

	application.get('/noticia', function(req, res){

		application.app.controllers.noticias.noticia(application, req, res);																

	});

};