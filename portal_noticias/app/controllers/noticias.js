module.exports.noticias = function (application, req, res) {

	var connection = application.config.dbConnection();
	var noticiasModel = new application.app.models.NoticiasDAO(connection); //criando sempre uma nova instancia com o "new" a partir da classe Noticias dentro

	noticiasModel.getNoticias(function(error, result){ //primeiro parâmetro indica a operação no BD segundo parâmetro é uma função de callback com o reultado e possíveis erros
		res.render("noticias/noticias", {noticias : result});				//passar para view renderizar/exibir nosso reultado (passado em foramto json)
	});	

}

module.exports.noticia = function (application, req, res) {
	var connection = application.config.dbConnection();
		var noticiasModel = new application.app.models.NoticiasDAO(connection);
		
		var id_noticia = req.query;

		noticiasModel.getNoticia(id_noticia, function(error, result){ 
			res.render("noticias/noticia", {noticia : result});				
		});	
}