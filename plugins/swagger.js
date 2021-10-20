const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const packageModule = require('package');
const HapiSwagger = require('hapi-swagger');

module.exports = [
  Inert,
  Vision,
  {
    plugin: HapiSwagger,
    options: {
      info: {
        title: '接口文档',
        version: packageModule.version,
      },
      // 定义接口以tags属性定义为分组
      grouping: 'tags',
      tags: [
        { name: 'tests', description: '测试相关' },
        { name: 'shops', description: '店铺、商品相关' },
        { name: 'orders', description: '订单相关' },
      ],
    },
  },
];