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
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ComicStockwebApi) {
      root.ComicStockwebApi = {};
    }
    root.ComicStockwebApi.CreatorDto = factory(root.ComicStockwebApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CreatorDto model module.
   * @module model/CreatorDto
   * @version v1
   */

  /**
   * Constructs a new <code>CreatorDto</code>.
   * @alias module:model/CreatorDto
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>CreatorDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreatorDto} obj Optional instance to populate.
   * @return {module:model/CreatorDto} The populated <code>CreatorDto</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('countryOfResidence')) {
        obj['countryOfResidence'] = ApiClient.convertToType(data['countryOfResidence'], 'String');
      }
      if (data.hasOwnProperty('taxReferenceNumber')) {
        obj['taxReferenceNumber'] = ApiClient.convertToType(data['taxReferenceNumber'], 'String');
      }
      if (data.hasOwnProperty('emailAddress')) {
        obj['emailAddress'] = ApiClient.convertToType(data['emailAddress'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} countryOfResidence
   */
  exports.prototype['countryOfResidence'] = undefined;
  /**
   * @member {String} taxReferenceNumber
   */
  exports.prototype['taxReferenceNumber'] = undefined;
  /**
   * @member {String} emailAddress
   */
  exports.prototype['emailAddress'] = undefined;



  return exports;
}));

