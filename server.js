const server = require('http').createServer((req, res) => {
  res.writeHead(200).end('متلعبش في حاجة');
});

function keepAlive() {
  server.listen(3000,() => {
    console.log('App listening on port 3000.');
  });
}

module.exports = keepAlive;