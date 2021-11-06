// routes/hello-hapi.js
const routesShops = require('./shops');
const routesOrders = require('./orders');
const routesUsers = require('./users');
module.exports = [
  ...routesShops,
	...routesOrders,
	...routesUsers
]