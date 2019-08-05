var mysql = require('mysql');

var connMySQL = function(){
	return mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'mysqlMY5QL',
		database: 'portal_noticias'
	});
}

module.exports = function (){  		//isto faz com que a função seja retornada dentro de uma variável e evite a conexão automática ao BD toda vez que rodarmos o servidor
	return connMySQL;
}