function NoticiasDAO(connection){
	this._connection = connection;
}

//propriedades da classe recebendo funções

NoticiasDAO.prototype.getNoticias = function(callback){
		this._connection.query('select * from noticias order by data_criacao desc', callback);	
	}

NoticiasDAO.prototype.getNoticia = function(id_noticia, callback){
		this._connection.query('select * from noticias where id_noticia = ' + id_noticia.id_noticia, callback);	
	}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
		this._connection.query('insert into noticias set ?', noticia, callback); //o mysql suporta o formato json substituindo o conteudo on está o "?"
	}	                                                                    //os rotulos das variaveis json devem possuir o mesmo nome das colunas da tabela sql

NoticiasDAO.prototype.get5UltimasNoticias = function(callback){
	this._connection.query('select * from noticias order by data_criacao desc limit 5', callback);
}

module.exports = function(){

	return NoticiasDAO;

}