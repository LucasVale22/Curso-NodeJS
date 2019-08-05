module.exports.formulario_inclusao_noticia = function(application, req, res){
	res.render("admin/form_add_noticia", {validacao: {}, noticia: {}});
}

module.exports.noticias_salvar = function(application, req, res){
	var noticia = req.body; //qdo enviamos informações via POST, o express popula a propriedade body do request, logo os dados enviados do formulario via post serão acessados atravpés do body

		req.assert('titulo', 'Título é obrigatório').notEmpty();
		req.assert('resumo', 'Resumo é obrigatório').notEmpty();
		req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
		req.assert('autor', 'Autor é obrigatório').notEmpty();
		req.assert('data_noticia', 'Data é obrigatória').notEmpty().isDate({format: 'YYYY-MM-DD'});
		req.assert('noticia', 'Notícia é obrigatória').notEmpty();

		var erros = req.validationErrors();

		if(erros){
			res.render("admin/form_add_noticia", {validacao: erros, noticia: noticia});
			return;
		}

		var connection = application.config.dbConnection(); //estabelecendo conexao com o BD
		var noticiasModel = new application.app.models.NoticiasDAO(connection); //model sendo recuperado

		noticiasModel.salvarNoticia(noticia, function(error, result){ //salvando a noticia
			res.redirect('/noticias');	//redireciona pra pagina "noticias" que ja implementa toda logica de exibição		
		});	
}