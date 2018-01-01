const http = require('http');
const fs = require('fs');
const PORT = 7777;
const getTypeOfFile = function(file){
  let typeOfFile = file.split('.')[1];
  let headers = {
    'js':'text/javascript',
    'jpg':'text/jpg',
    'html':'text/html',
    'css':'text/css',
    'pdf':'text/pdf',
    'ico':'image/ico',
    'gif':'image/gif'
  }
  return headers[typeOfFile];
}

const errorFileHandler = function(res){
  res.statusCode = 404;
  res.statusMessage = 'Resource not found';
  res.write('Resource not found');
  res.end();
}

const existsFileHandler = function(file,res){
  let typeOfFile = getTypeOfFile(file);
  res.writeHead(200,{'Content-Type':typeOfFile})
  let contents = fs.readFileSync(file,'utf8');
  res.write(contents);
  res.end();
}

const fileHandler = function(file,res){
  if(!fs.existsSync(file)){
    errorFileHandler(res);
    return;
  }
  if()
  existsFileHandler(file,res);
}

let requestHandler = function(req,res){
  let filePath = req.url.replace('/','');
  let method = req.method;
  if(filePath == ''){
    filePath = 'index.html'
  }
  console.log(`${method}  ${req.url}`);
  fileHandler(filePath,res);
}
const server = http.createServer(requestHandler);
console.log(`listening at ${PORT}`);
console.log('waiting for requests');
server.listen(PORT);
