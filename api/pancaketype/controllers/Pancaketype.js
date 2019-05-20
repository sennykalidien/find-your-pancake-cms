'use strict';

/**
 * Pancaketype.js controller
 *
 * @description: A set of functions called "actions" for managing `Pancaketype`.
 */

module.exports = {

  /**
   * Retrieve pancaketype records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.pancaketype.search(ctx.query);
    } else {
      return strapi.services.pancaketype.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a pancaketype record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.pancaketype.fetch(ctx.params);
  },

  /**
   * Count pancaketype records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.pancaketype.count(ctx.query, populate);
  },

  /**
   * Create a/an pancaketype record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.pancaketype.add(ctx.request.body);
  },

  /**
   * Update a/an pancaketype record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.pancaketype.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an pancaketype record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.pancaketype.remove(ctx.params);
  }
};
