const jsonServer = require("json-server"); 
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

server.listen(4500);



// const PORT = 5001;
// const path = require('path');
// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const router = jsonServer.router(path.join(__dirname, 'db.json'));
// const middlewares = jsonServer.defaults();
// server.use(middlewares);
// server.use(jsonServer.bodyParser);
// server.use('/sonu', router);
// server.listen(PORT, () => console.log(`JSON Server is running on port ${PORT}`));




// deploy jsone-server