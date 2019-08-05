module.exports.iniciaChat = function (application, req, res) {
	
	var dadosForm = req.body;


	req.assert('apelido', 'Nome ou apelido é obrigatório.').notEmpty(); //nome do campo que está sendo transitado no input (form) do chat.ejs (view)
	req.assert('apelido', 'Nome ou apelido deve conter entre 3 e 15 caracteres.').len(3,15);

	var erros = req.validationErrors();

	if(erros){
		res.render('index', {validacao: erros}); //o proprio send já finaliza nosso processamento
		return; //só é obrigatório pra outra coisa que não seja send, pois o bloco abaixo do if continuará sendo procesaado
	}

	application.get('io').emit(
		'msgParaCliente',
		{apelido: dadosForm.apelido, mensagem: 'acabou de entrar no chat!'}
		);

	res.render('chat', {dadosForm: dadosForm});
}