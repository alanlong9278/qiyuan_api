const Hapi = require('@hapi/hapi');
require('env2')('./.env');
const config = require('./config');
const routes = require('./routes/index');
const routesShops = require('./routes/shops');
const routesOrders = require('./routes/orders');
const pluginHapiSwagger = require('./plugins/swagger');
const pluginHapiPagination = require('./plugins/hapi-pagination');

const server = new Hapi.Server({
  port: config.port,
  host: config.host,
});

const init = async () => {
  await server.register([
    ...pluginHapiSwagger,
    pluginHapiPagination
  ]);
  server.route([
    // 创建一个简单的hello hapi接口
    ...routes,
    ...routesShops,
    ...routesOrders,
  ]);
  // 启动服务
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

init();