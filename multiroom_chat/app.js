/* importar as cofigurações do servidor */
var app = require('./config/server');

/* parametrizar a porta de escuta */
var server = app.listen(3000, function(){ //porta padrão de todos os navegadores
	console.log('Servidor Online');
});

var io = require('socket.io').listen(server); /*tanto requisições http ou websockets agora são recebidas e interpetadas*/

app.set('io', io); /*a função set tbm permite criar variáveis globais|criou uma variável io */

/*criar a conexão por websocket */
io.on('connection', function(socket){ /* a instância do objeto io vai buscar pelo evento connection chamado no lado do cliente */
	console.log('Usuário conectou');

	socket.on('disconnect', function(){
		console.log('Usuário desconectou');
	});

	socket.on('msgParaServidor', function(data){
		/*disparo de evento de diálogo*/
		socket.emit(
			'msgParaCliente', 
			{apelido: data.apelido, mensagem: data.mensagem}
		);

		socket.broadcast.emit(
			'msgParaCliente', 
			{apelido: data.apelido, mensagem: data.mensagem}
		);

		/*disparo de participantes*/
		if(parseInt(data.apelido_atualizado_nos_clientes) == 0){
			socket.emit(
				'participantesParaCliente', 
				{apelido: data.apelido}
			);

			socket.broadcast.emit(
				'participantesParaCliente', 
				{apelido: data.apelido}
			);
		}
	});
}); 

