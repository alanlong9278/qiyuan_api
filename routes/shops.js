const Joi = require('joi');
const models = require("../models");
const { paginationDefine } = require('../utils/router-helper');

const GROUP_NAME = 'shops';

module.exports = [
  {
    method: 'GET',
    path: `/${GROUP_NAME}`,
    handler: async (request, h) => {
      const { rows: results, count: totalCount } = await models.shops.findAndCountAll({
        attributes: [
          'id',
          'name',
        ],
        limit: request.query.limit,
        offset: (request.query.page - 1) * request.query.limit,
      });
      return h.response({ results, totalCount });
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '获取店铺列表',
      validate: {
        query: Joi.object(paginationDefine),
      },
			auth: false
    },
  },
  {
    method: 'GET',
    path: `/${GROUP_NAME}/{shopId}/goods`,
    handler: async (request, h) => {
       // 增加带有 where 的条件查询
      const { rows: results, count: totalCount } = await models.goods.findAndCountAll({
        // 基于 shop_id 的条件查询
        where: {
          shop_id: request.params.shopId,
        },
        attributes: [
          'id',
          'name',
        ],
        limit: request.query.limit,
        offset: (request.query.page - 1) * request.query.limit,
      });
      return h.response({ results, totalCount });
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '获取店铺的商品列表',
			auth: false
    },
  },
	{
    method: 'POST',
    path: `/${GROUP_NAME}`,
    handler: async (request, h) => {
			const result = await models.shops.create({
				name: 'test1',
				thumb_url: 'xxxx'
			});
      return h.response({ result });
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '获取店铺列表',
      validate: {
        payload: Joi.object({
					name: Joi.string(),
					thumb_url: Joi.string()
				}),
      },
			auth: false,
    },
  },
];