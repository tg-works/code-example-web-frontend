const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3001;
const contentTypeStr = 'content-type';


const server = http.createServer((req, res) => {
	const reqUrl = req.url;
	const reqHeaders = req.headers;
	const reqMethod = req.method;
	const reqHeadersStr = JSON.stringify(reqHeaders);
	const reqParams = url.parse(req.url,true).query;
	const reqParamsStr = JSON.stringify(reqParams);
	let reqBody;
	if (req.method == 'POST') {
	    req.on('data', function(chunk) {
	      console.log("Received body data:");
	      console.log(chunk.toString());
	      reqBody = chunk;
	    });
	}

	console.log('request url: ' + reqUrl);
	console.log('request method: ' + reqMethod);
	console.log('request headers: ' + reqHeadersStr);
	console.log('request params: ' + reqParamsStr);
	console.log('request body: ' + reqBody);
	

	let responseBody = {};
	responseBody.url = reqUrl;
	responseBody.method = reqMethod;
	responseBody.headers = {contentTypeStr: reqHeaders[contentTypeStr]};
	responseBody.params = reqParams;
	responseBody.body = reqBody;
	let responseBodyStr = JSON.stringify(responseBody);
	console.log(new Date() + ' - ' + responseBodyStr);

	res.statusCode = 200;
	res.setHeader(contentTypeStr, 'application/json');
	res.end(responseBodyStr);
	console.log()
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`)
});