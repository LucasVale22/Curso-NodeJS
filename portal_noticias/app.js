var app = require('./config/server'); //requisito minhas configurações no módulo do servidor

//incluindo o módulo noticia.js
//var rotaNoticias = require('./app/routes/noticias');  //poderia ser var rotaNoticias = require('./app/routes/noticias')(app);
//rotaNoticias(app);

//incluindo o módulo home.js
//var rotaHome = require('./app/routes/home');
//rotaHome(app);

//var rotaFormInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia');
//rotaFormInclusaoNoticia(app);

app.listen(3000, function(){
	console.log('Servidor ON');
});