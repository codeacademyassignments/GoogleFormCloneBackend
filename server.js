const Hapi = require('hapi');
const routes = require('./routes/allRoutes');

const server = Hapi.server({
  port: 8080,
  host: 'localhost',
});

server.route(routes);

// const init = async () => {
//   await server.start();
//   console.log(`Server running at: ${server.info.uri}`);
// };

if (!module.parent) {
  server.start();
}

module.exports = server;
