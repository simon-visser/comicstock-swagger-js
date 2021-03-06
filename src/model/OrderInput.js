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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ComicStockwebApi) {
      root.ComicStockwebApi = {};
    }
    root.ComicStockwebApi.OrderInput = factory(root.ComicStockwebApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OrderInput model module.
   * @module model/OrderInput
   * @version v1
   */

  /**
   * Constructs a new <code>OrderInput</code>.
   * @alias module:model/OrderInput
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>OrderInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderInput} obj Optional instance to populate.
   * @return {module:model/OrderInput} The populated <code>OrderInput</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('orderId')) {
        obj['orderId'] = ApiClient.convertToType(data['orderId'], 'Number');
      }
      if (data.hasOwnProperty('deliveryStatus')) {
        obj['deliveryStatus'] = ApiClient.convertToType(data['deliveryStatus'], 'String');
      }
      if (data.hasOwnProperty('shipmentReference')) {
        obj['shipmentReference'] = ApiClient.convertToType(data['shipmentReference'], 'String');
      }
      if (data.hasOwnProperty('shipmentDate')) {
        obj['shipmentDate'] = ApiClient.convertToType(data['shipmentDate'], 'Date');
      }
    }
    return obj;
  }

  /**
   * @member {Number} orderId
   */
  exports.prototype['orderId'] = undefined;
  /**
   * @member {module:model/OrderInput.DeliveryStatusEnum} deliveryStatus
   */
  exports.prototype['deliveryStatus'] = undefined;
  /**
   * @member {String} shipmentReference
   */
  exports.prototype['shipmentReference'] = undefined;
  /**
   * @member {Date} shipmentDate
   */
  exports.prototype['shipmentDate'] = undefined;


  /**
   * Allowed values for the <code>deliveryStatus</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DeliveryStatusEnum = {
    /**
     * value: "Cancelled"
     * @const
     */
    "Cancelled": "Cancelled",
    /**
     * value: "Delivered"
     * @const
     */
    "Delivered": "Delivered",
    /**
     * value: "Pending"
     * @const
     */
    "Pending": "Pending"  };


  return exports;
}));


