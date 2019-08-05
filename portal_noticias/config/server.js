//configuração do servidor

var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
const expressValidator = require('express-validator');

var app = express();
app.set('view engine', 'ejs');
app.set('views','./app/views') //a inclusao é feita a partir do nível do diretorio app onde o arquivo é oincluido

app.use(express.static('./app/public')); //contrai e permite o acesso a todos os arquivos estaticos
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

consign()
	.include('app/routes')
	.then('config/dbConnection.js') //requisitar conexao com o db para todas as rotas
	.then('app/models')
	.then('app/controllers')
	.into(app); //faz um scan na pasta routes incluindo no servidor para que tpdas as rotas sejam acessadas de uma única vez na aplicação

module.exports = app;
