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
    define(['ApiClient', 'model/OrderDto', 'model/OrderInput'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/OrderDto'), require('../model/OrderInput'));
  } else {
    // Browser globals (root is window)
    if (!root.ComicStockwebApi) {
      root.ComicStockwebApi = {};
    }
    root.ComicStockwebApi.OrdersApi = factory(root.ComicStockwebApi.ApiClient, root.ComicStockwebApi.OrderDto, root.ComicStockwebApi.OrderInput);
  }
}(this, function(ApiClient, OrderDto, OrderInput) {
  'use strict';

  /**
   * Orders service.
   * @module api/OrdersApi
   * @version v1
   */

  /**
   * Constructs a new OrdersApi. 
   * @alias module:api/OrdersApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the ordersDelete operation.
     * @callback module:api/OrdersApi~ordersDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {module:api/OrdersApi~ordersDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.ordersDelete = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling ordersDelete");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/Orders/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the ordersDelete_0 operation.
     * @callback module:api/OrdersApi~ordersDelete_0Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {String} issueId 
     * @param {String} stockId 
     * @param {module:api/OrdersApi~ordersDelete_0Callback} callback The callback function, accepting three arguments: error, data, response
     */
    this.ordersDelete_0 = function(id, issueId, stockId, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling ordersDelete_0");
      }

      // verify the required parameter 'issueId' is set
      if (issueId === undefined || issueId === null) {
        throw new Error("Missing the required parameter 'issueId' when calling ordersDelete_0");
      }

      // verify the required parameter 'stockId' is set
      if (stockId === undefined || stockId === null) {
        throw new Error("Missing the required parameter 'stockId' when calling ordersDelete_0");
      }


      var pathParams = {
        'IssueId': issueId,
        'stockId': stockId
      };
      var queryParams = {
        'id': id
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/Orders/{IssueId}/stock/{stockId}/Delete', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the ordersDelete_1 operation.
     * @callback module:api/OrdersApi~ordersDelete_1Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {String} supplierId 
     * @param {String} issueId 
     * @param {module:api/OrdersApi~ordersDelete_1Callback} callback The callback function, accepting three arguments: error, data, response
     */
    this.ordersDelete_1 = function(id, supplierId, issueId, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling ordersDelete_1");
      }

      // verify the required parameter 'supplierId' is set
      if (supplierId === undefined || supplierId === null) {
        throw new Error("Missing the required parameter 'supplierId' when calling ordersDelete_1");
      }

      // verify the required parameter 'issueId' is set
      if (issueId === undefined || issueId === null) {
        throw new Error("Missing the required parameter 'issueId' when calling ordersDelete_1");
      }


      var pathParams = {
        'supplierId': supplierId,
        'issueId': issueId
      };
      var queryParams = {
        'id': id
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/Orders/{supplierId}/issues/{issueId}/Delete', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the ordersGet operation.
     * @callback module:api/OrdersApi~ordersGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/OrderDto>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/OrdersApi~ordersGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/OrderDto>}
     */
    this.ordersGet = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json', 'application/vnd.api+json', 'application/xml', 'text/xml'];
      var returnType = [OrderDto];

      return this.apiClient.callApi(
        '/api/Orders', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the ordersGet_0 operation.
     * @callback module:api/OrdersApi~ordersGet_0Callback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {module:api/OrdersApi~ordersGet_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrderDto}
     */
    this.ordersGet_0 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling ordersGet_0");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json', 'application/vnd.api+json', 'application/xml', 'text/xml'];
      var returnType = OrderDto;

      return this.apiClient.callApi(
        '/api/Orders/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the ordersGet_1 operation.
     * @callback module:api/OrdersApi~ordersGet_1Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/OrderDto>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} issueId 
     * @param {String} stockId 
     * @param {module:api/OrdersApi~ordersGet_1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/OrderDto>}
     */
    this.ordersGet_1 = function(issueId, stockId, callback) {
      var postBody = null;

      // verify the required parameter 'issueId' is set
      if (issueId === undefined || issueId === null) {
        throw new Error("Missing the required parameter 'issueId' when calling ordersGet_1");
      }

      // verify the required parameter 'stockId' is set
      if (stockId === undefined || stockId === null) {
        throw new Error("Missing the required parameter 'stockId' when calling ordersGet_1");
      }


      var pathParams = {
        'IssueId': issueId,
        'stockId': stockId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json', 'application/vnd.api+json', 'application/xml', 'text/xml'];
      var returnType = [OrderDto];

      return this.apiClient.callApi(
        '/api/Orders/{IssueId}/stock/{stockId}/Get', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the ordersGet_2 operation.
     * @callback module:api/OrdersApi~ordersGet_2Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/OrderDto>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} supplierId 
     * @param {String} issueId 
     * @param {module:api/OrdersApi~ordersGet_2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/OrderDto>}
     */
    this.ordersGet_2 = function(supplierId, issueId, callback) {
      var postBody = null;

      // verify the required parameter 'supplierId' is set
      if (supplierId === undefined || supplierId === null) {
        throw new Error("Missing the required parameter 'supplierId' when calling ordersGet_2");
      }

      // verify the required parameter 'issueId' is set
      if (issueId === undefined || issueId === null) {
        throw new Error("Missing the required parameter 'issueId' when calling ordersGet_2");
      }


      var pathParams = {
        'supplierId': supplierId,
        'issueId': issueId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json', 'application/vnd.api+json', 'application/xml', 'text/xml'];
      var returnType = [OrderDto];

      return this.apiClient.callApi(
        '/api/Orders/{supplierId}/issues/{issueId}/Get', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the ordersPut operation.
     * @callback module:api/OrdersApi~ordersPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/OrderInput} input 
     * @param {module:api/OrdersApi~ordersPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrderDto}
     */
    this.ordersPut = function(input, callback) {
      var postBody = input;

      // verify the required parameter 'input' is set
      if (input === undefined || input === null) {
        throw new Error("Missing the required parameter 'input' when calling ordersPut");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'text/json', 'application/vnd.api+json', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'text/json', 'application/vnd.api+json', 'application/xml', 'text/xml'];
      var returnType = OrderDto;

      return this.apiClient.callApi(
        '/api/Orders', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the ordersPut_0 operation.
     * @callback module:api/OrdersApi~ordersPut_0Callback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/OrderInput} input 
     * @param {String} issueId 
     * @param {String} stockId 
     * @param {module:api/OrdersApi~ordersPut_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrderDto}
     */
    this.ordersPut_0 = function(input, issueId, stockId, callback) {
      var postBody = input;

      // verify the required parameter 'input' is set
      if (input === undefined || input === null) {
        throw new Error("Missing the required parameter 'input' when calling ordersPut_0");
      }

      // verify the required parameter 'issueId' is set
      if (issueId === undefined || issueId === null) {
        throw new Error("Missing the required parameter 'issueId' when calling ordersPut_0");
      }

      // verify the required parameter 'stockId' is set
      if (stockId === undefined || stockId === null) {
        throw new Error("Missing the required parameter 'stockId' when calling ordersPut_0");
      }


      var pathParams = {
        'IssueId': issueId,
        'stockId': stockId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'text/json', 'application/vnd.api+json', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'text/json', 'application/vnd.api+json', 'application/xml', 'text/xml'];
      var returnType = OrderDto;

      return this.apiClient.callApi(
        '/api/Orders/{IssueId}/stock/{stockId}/Put', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the ordersPut_1 operation.
     * @callback module:api/OrdersApi~ordersPut_1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/OrderInput} input 
     * @param {String} supplierId 
     * @param {String} issueId 
     * @param {module:api/OrdersApi~ordersPut_1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrderDto}
     */
    this.ordersPut_1 = function(input, supplierId, issueId, callback) {
      var postBody = input;

      // verify the required parameter 'input' is set
      if (input === undefined || input === null) {
        throw new Error("Missing the required parameter 'input' when calling ordersPut_1");
      }

      // verify the required parameter 'supplierId' is set
      if (supplierId === undefined || supplierId === null) {
        throw new Error("Missing the required parameter 'supplierId' when calling ordersPut_1");
      }

      // verify the required parameter 'issueId' is set
      if (issueId === undefined || issueId === null) {
        throw new Error("Missing the required parameter 'issueId' when calling ordersPut_1");
      }


      var pathParams = {
        'supplierId': supplierId,
        'issueId': issueId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'text/json', 'application/vnd.api+json', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'text/json', 'application/vnd.api+json', 'application/xml', 'text/xml'];
      var returnType = OrderDto;

      return this.apiClient.callApi(
        '/api/Orders/{supplierId}/issues/{issueId}/Put', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
