const Hapi = require('@hapi/hapi');
require('env2')('./.env');
const config = require('./config');
const routes = require('./routes/index');
const pluginHapiSwagger = require('./plugins/swagger');
const pluginHapiPagination = require('./plugins/hapi-pagination');
const hapiAuthJWT2 = require('hapi-auth-jwt2');
const pluginHapiAuthJWT2 = require('./plugins/hapi-auth-jwt2');

const server = new Hapi.Server({
  port: config.port,
  host: config.host,
	routes: {
    cors: true
	}
});

const init = async () => {
  await server.register([
    ...pluginHapiSwagger,
    pluginHapiPagination,
		hapiAuthJWT2,
  ]);
	pluginHapiAuthJWT2(server);
  server.route(routes);
  // 启动服务
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

init();