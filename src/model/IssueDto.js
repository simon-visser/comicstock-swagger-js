/**
 * ComicStock.WebApi
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd && false) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', 'model/CreatorDto', 'model/ResourceDto', 'model/StockDto'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CreatorDto'), require('./ResourceDto'), require('./StockDto'));
  } else {
    // Browser globals (root is window)
    if (!root.ComicStockwebApi) {
      root.ComicStockwebApi = {};
    }
    root.ComicStockwebApi.IssueDto = factory(root.ComicStockwebApi.ApiClient, root.ComicStockwebApi.CreatorDto, root.ComicStockwebApi.ResourceDto, root.ComicStockwebApi.StockDto);
  }
}(this, function(ApiClient, CreatorDto, ResourceDto, StockDto) {
  'use strict';




  /**
   * The IssueDto model module.
   * @module model/IssueDto
   * @version v1
   */

  /**
   * Constructs a new <code>IssueDto</code>.
   * @alias module:model/IssueDto
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>IssueDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IssueDto} obj Optional instance to populate.
   * @return {module:model/IssueDto} The populated <code>IssueDto</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('seriesNumber')) {
        obj['seriesNumber'] = ApiClient.convertToType(data['seriesNumber'], 'Number');
      }
      if (data.hasOwnProperty('publicationDate')) {
        obj['publicationDate'] = ApiClient.convertToType(data['publicationDate'], 'Date');
      }
      if (data.hasOwnProperty('publisherId')) {
        obj['publisherId'] = ApiClient.convertToType(data['publisherId'], 'Number');
      }
      if (data.hasOwnProperty('publisher')) {
        obj['publisher'] = ApiClient.convertToType(data['publisher'], 'String');
      }
      if (data.hasOwnProperty('creators')) {
        obj['creators'] = ApiClient.convertToType(data['creators'], [CreatorDto]);
      }
      if (data.hasOwnProperty('stock')) {
        obj['stock'] = ApiClient.convertToType(data['stock'], [StockDto]);
      }
      if (data.hasOwnProperty('thumbnail')) {
        obj['thumbnail'] = ResourceDto.constructFromObject(data['thumbnail']);
      }
      if (data.hasOwnProperty('images')) {
        obj['images'] = ApiClient.convertToType(data['images'], [ResourceDto]);
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {Number} seriesNumber
   */
  exports.prototype['seriesNumber'] = undefined;
  /**
   * @member {Date} publicationDate
   */
  exports.prototype['publicationDate'] = undefined;
  /**
   * @member {Number} publisherId
   */
  exports.prototype['publisherId'] = undefined;
  /**
   * @member {module:model/IssueDto.PublisherEnum} publisher
   */
  exports.prototype['publisher'] = undefined;
  /**
   * @member {Array.<module:model/CreatorDto>} creators
   */
  exports.prototype['creators'] = undefined;
  /**
   * @member {Array.<module:model/StockDto>} stock
   */
  exports.prototype['stock'] = undefined;
  /**
   * @member {module:model/ResourceDto} thumbnail
   */
  exports.prototype['thumbnail'] = undefined;
  /**
   * @member {Array.<module:model/ResourceDto>} images
   */
  exports.prototype['images'] = undefined;


  /**
   * Allowed values for the <code>publisher</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PublisherEnum = {
    /**
     * value: "Dc"
     * @const
     */
    "Dc": "Dc",
    /**
     * value: "Marvel"
     * @const
     */
    "Marvel": "Marvel",
    /**
     * value: "Darkhorse"
     * @const
     */
    "Darkhorse": "Darkhorse"  };


  return exports;
}));


