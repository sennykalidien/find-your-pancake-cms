'use strict';

/**
 * Pancakeingredient.js controller
 *
 * @description: A set of functions called "actions" for managing `Pancakeingredient`.
 */

module.exports = {

  /**
   * Retrieve pancakeingredient records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.pancakeingredient.search(ctx.query);
    } else {
      return strapi.services.pancakeingredient.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a pancakeingredient record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.pancakeingredient.fetch(ctx.params);
  },

  /**
   * Count pancakeingredient records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.pancakeingredient.count(ctx.query, populate);
  },

  /**
   * Create a/an pancakeingredient record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.pancakeingredient.add(ctx.request.body);
  },

  /**
   * Update a/an pancakeingredient record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.pancakeingredient.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an pancakeingredient record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.pancakeingredient.remove(ctx.params);
  }
};
