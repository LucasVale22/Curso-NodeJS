var http = require('http');

var opcoes = {
    hostname: 'localhost',
    port: 80,
    path: '/teste',
    method: 'get',
    headers: {
        'Accept' : 'application/json',
        'Content-type' : 'application/json'
    }
};

var html = 'nome=José'; //x-www-form-urlencoded
var json = {nome: 'José'};
var string_json = JSON.stringify(json);

var buffer_corpo_response = [];

var req = http.request(opcoes, function(res){
    res.on('data', function(pedaco){
        buffer_corpo_response.push(pedaco);
    });

    res.on('end', function(){
        var corpo_response = Buffer.concat(buffer_corpo_response).toString();
        console.log(corpo_response);
        console.log(res.statusCode);
    });
});

req.write(string_json);
req.end();