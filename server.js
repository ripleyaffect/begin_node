var http = require('http');
var url = require('url');

function start(route, handle) { 
	function onRequest(request, response) {
		var postData = "";
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " recieved");
		route(handle, pathname, response, request);
	};

	http.Server(onRequest).listen(8000);
	console.log("The server has started");
};

exports.start = start;