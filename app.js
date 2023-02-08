const http = require("http");

const server = http.createServer((req, res) => {
  res.write("welcome to my home Page");
  res.end();
});

server.listen(5000);
