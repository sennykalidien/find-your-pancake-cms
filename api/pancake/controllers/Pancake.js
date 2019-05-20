'use strict';

/**
 * Pancake.js controller
 *
 * @description: A set of functions called "actions" for managing `Pancake`.
 */

module.exports = {

  /**
   * Retrieve pancake records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.pancake.search(ctx.query);
    } else {
      return strapi.services.pancake.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a pancake record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.pancake.fetch(ctx.params);
  },

  /**
   * Count pancake records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.pancake.count(ctx.query, populate);
  },

  /**
   * Create a/an pancake record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.pancake.add(ctx.request.body);
  },

  /**
   * Update a/an pancake record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.pancake.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an pancake record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.pancake.remove(ctx.params);
  }
};
