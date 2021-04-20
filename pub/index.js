#!/usr/bin/node


const http = require("http");
const node_static = require("node-static");

console.log("Inicializando servidor chat");

let public_files = new node_static.Server("pub");

http.createServer( (request, response) => {
	console.log("Archivo"+request.url);

	public_files.serve(request, response);
}).listen(8080);
