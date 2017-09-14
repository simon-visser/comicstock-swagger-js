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
    define(['ApiClient', 'model/CreatorDto'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreatorDto'));
  } else {
    // Browser globals (root is window)
    if (!root.ComicStockwebApi) {
      root.ComicStockwebApi = {};
    }
    root.ComicStockwebApi.CreatorsApi = factory(root.ComicStockwebApi.ApiClient, root.ComicStockwebApi.CreatorDto);
  }
}(this, function(ApiClient, CreatorDto) {
  'use strict';

  /**
   * Creators service.
   * @module api/CreatorsApi
   * @version v1
   */

  /**
   * Constructs a new CreatorsApi. 
   * @alias module:api/CreatorsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the creatorsDelete operation.
     * @callback module:api/CreatorsApi~creatorsDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {module:api/CreatorsApi~creatorsDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.creatorsDelete = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling creatorsDelete");
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
        '/api/Creators/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the creatorsDelete_0 operation.
     * @callback module:api/CreatorsApi~creatorsDelete_0Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {String} issueId 
     * @param {String} stockId 
     * @param {module:api/CreatorsApi~creatorsDelete_0Callback} callback The callback function, accepting three arguments: error, data, response
     */
    this.creatorsDelete_0 = function(id, issueId, stockId, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling creatorsDelete_0");
      }

      // verify the required parameter 'issueId' is set
      if (issueId === undefined || issueId === null) {
        throw new Error("Missing the required parameter 'issueId' when calling creatorsDelete_0");
      }

      // verify the required parameter 'stockId' is set
      if (stockId === undefined || stockId === null) {
        throw new Error("Missing the required parameter 'stockId' when calling creatorsDelete_0");
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
        '/api/Creators/{IssueId}/stock/{stockId}/Delete', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the creatorsDelete_1 operation.
     * @callback module:api/CreatorsApi~creatorsDelete_1Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {String} supplierId 
     * @param {String} issueId 
     * @param {module:api/CreatorsApi~creatorsDelete_1Callback} callback The callback function, accepting three arguments: error, data, response
     */
    this.creatorsDelete_1 = function(id, supplierId, issueId, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling creatorsDelete_1");
      }

      // verify the required parameter 'supplierId' is set
      if (supplierId === undefined || supplierId === null) {
        throw new Error("Missing the required parameter 'supplierId' when calling creatorsDelete_1");
      }

      // verify the required parameter 'issueId' is set
      if (issueId === undefined || issueId === null) {
        throw new Error("Missing the required parameter 'issueId' when calling creatorsDelete_1");
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
        '/api/Creators/{supplierId}/issues/{issueId}/Delete', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the creatorsGet operation.
     * @callback module:api/CreatorsApi~creatorsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CreatorDto>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/CreatorsApi~creatorsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/CreatorDto>}
     */
    this.creatorsGet = function(callback) {
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
      var returnType = [CreatorDto];

      return this.apiClient.callApi(
        '/api/Creators', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the creatorsGet_0 operation.
     * @callback module:api/CreatorsApi~creatorsGet_0Callback
     * @param {String} error Error message, if any.
     * @param {module:model/CreatorDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {module:api/CreatorsApi~creatorsGet_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreatorDto}
     */
    this.creatorsGet_0 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling creatorsGet_0");
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
      var returnType = CreatorDto;

      return this.apiClient.callApi(
        '/api/Creators/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the creatorsGet_1 operation.
     * @callback module:api/CreatorsApi~creatorsGet_1Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CreatorDto>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} issueId 
     * @param {String} stockId 
     * @param {module:api/CreatorsApi~creatorsGet_1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/CreatorDto>}
     */
    this.creatorsGet_1 = function(issueId, stockId, callback) {
      var postBody = null;

      // verify the required parameter 'issueId' is set
      if (issueId === undefined || issueId === null) {
        throw new Error("Missing the required parameter 'issueId' when calling creatorsGet_1");
      }

      // verify the required parameter 'stockId' is set
      if (stockId === undefined || stockId === null) {
        throw new Error("Missing the required parameter 'stockId' when calling creatorsGet_1");
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
      var returnType = [CreatorDto];

      return this.apiClient.callApi(
        '/api/Creators/{IssueId}/stock/{stockId}/Get', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the creatorsGet_2 operation.
     * @callback module:api/CreatorsApi~creatorsGet_2Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CreatorDto>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} supplierId 
     * @param {String} issueId 
     * @param {module:api/CreatorsApi~creatorsGet_2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/CreatorDto>}
     */
    this.creatorsGet_2 = function(supplierId, issueId, callback) {
      var postBody = null;

      // verify the required parameter 'supplierId' is set
      if (supplierId === undefined || supplierId === null) {
        throw new Error("Missing the required parameter 'supplierId' when calling creatorsGet_2");
      }

      // verify the required parameter 'issueId' is set
      if (issueId === undefined || issueId === null) {
        throw new Error("Missing the required parameter 'issueId' when calling creatorsGet_2");
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
      var returnType = [CreatorDto];

      return this.apiClient.callApi(
        '/api/Creators/{supplierId}/issues/{issueId}/Get', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the creatorsPost operation.
     * @callback module:api/CreatorsApi~creatorsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreatorDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/CreatorDto} creator 
     * @param {module:api/CreatorsApi~creatorsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreatorDto}
     */
    this.creatorsPost = function(creator, callback) {
      var postBody = creator;

      // verify the required parameter 'creator' is set
      if (creator === undefined || creator === null) {
        throw new Error("Missing the required parameter 'creator' when calling creatorsPost");
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
      var contentTypes = ['application/json', 'text/json', 'application/vnd.api+json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'text/json', 'application/vnd.api+json', 'application/xml', 'text/xml'];
      var returnType = CreatorDto;

      return this.apiClient.callApi(
        '/api/Creators', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the creatorsPost_0 operation.
     * @callback module:api/CreatorsApi~creatorsPost_0Callback
     * @param {String} error Error message, if any.
     * @param {module:model/CreatorDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/CreatorDto} creator 
     * @param {String} issueId 
     * @param {String} stockId 
     * @param {module:api/CreatorsApi~creatorsPost_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreatorDto}
     */
    this.creatorsPost_0 = function(creator, issueId, stockId, callback) {
      var postBody = creator;

      // verify the required parameter 'creator' is set
      if (creator === undefined || creator === null) {
        throw new Error("Missing the required parameter 'creator' when calling creatorsPost_0");
      }

      // verify the required parameter 'issueId' is set
      if (issueId === undefined || issueId === null) {
        throw new Error("Missing the required parameter 'issueId' when calling creatorsPost_0");
      }

      // verify the required parameter 'stockId' is set
      if (stockId === undefined || stockId === null) {
        throw new Error("Missing the required parameter 'stockId' when calling creatorsPost_0");
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
      var contentTypes = ['application/json', 'text/json', 'application/vnd.api+json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'text/json', 'application/vnd.api+json', 'application/xml', 'text/xml'];
      var returnType = CreatorDto;

      return this.apiClient.callApi(
        '/api/Creators/{IssueId}/stock/{stockId}/Post', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the creatorsPost_1 operation.
     * @callback module:api/CreatorsApi~creatorsPost_1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/CreatorDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/CreatorDto} creator 
     * @param {String} supplierId 
     * @param {String} issueId 
     * @param {module:api/CreatorsApi~creatorsPost_1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreatorDto}
     */
    this.creatorsPost_1 = function(creator, supplierId, issueId, callback) {
      var postBody = creator;

      // verify the required parameter 'creator' is set
      if (creator === undefined || creator === null) {
        throw new Error("Missing the required parameter 'creator' when calling creatorsPost_1");
      }

      // verify the required parameter 'supplierId' is set
      if (supplierId === undefined || supplierId === null) {
        throw new Error("Missing the required parameter 'supplierId' when calling creatorsPost_1");
      }

      // verify the required parameter 'issueId' is set
      if (issueId === undefined || issueId === null) {
        throw new Error("Missing the required parameter 'issueId' when calling creatorsPost_1");
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
      var contentTypes = ['application/json', 'text/json', 'application/vnd.api+json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'text/json', 'application/vnd.api+json', 'application/xml', 'text/xml'];
      var returnType = CreatorDto;

      return this.apiClient.callApi(
        '/api/Creators/{supplierId}/issues/{issueId}/Post', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the creatorsPut operation.
     * @callback module:api/CreatorsApi~creatorsPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreatorDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/CreatorDto} creator 
     * @param {module:api/CreatorsApi~creatorsPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreatorDto}
     */
    this.creatorsPut = function(creator, callback) {
      var postBody = creator;

      // verify the required parameter 'creator' is set
      if (creator === undefined || creator === null) {
        throw new Error("Missing the required parameter 'creator' when calling creatorsPut");
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
      var contentTypes = ['application/json', 'text/json', 'application/vnd.api+json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'text/json', 'application/vnd.api+json', 'application/xml', 'text/xml'];
      var returnType = CreatorDto;

      return this.apiClient.callApi(
        '/api/Creators', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the creatorsPut_0 operation.
     * @callback module:api/CreatorsApi~creatorsPut_0Callback
     * @param {String} error Error message, if any.
     * @param {module:model/CreatorDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/CreatorDto} creator 
     * @param {String} issueId 
     * @param {String} stockId 
     * @param {module:api/CreatorsApi~creatorsPut_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreatorDto}
     */
    this.creatorsPut_0 = function(creator, issueId, stockId, callback) {
      var postBody = creator;

      // verify the required parameter 'creator' is set
      if (creator === undefined || creator === null) {
        throw new Error("Missing the required parameter 'creator' when calling creatorsPut_0");
      }

      // verify the required parameter 'issueId' is set
      if (issueId === undefined || issueId === null) {
        throw new Error("Missing the required parameter 'issueId' when calling creatorsPut_0");
      }

      // verify the required parameter 'stockId' is set
      if (stockId === undefined || stockId === null) {
        throw new Error("Missing the required parameter 'stockId' when calling creatorsPut_0");
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
      var contentTypes = ['application/json', 'text/json', 'application/vnd.api+json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'text/json', 'application/vnd.api+json', 'application/xml', 'text/xml'];
      var returnType = CreatorDto;

      return this.apiClient.callApi(
        '/api/Creators/{IssueId}/stock/{stockId}/Put', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the creatorsPut_1 operation.
     * @callback module:api/CreatorsApi~creatorsPut_1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/CreatorDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/CreatorDto} creator 
     * @param {String} supplierId 
     * @param {String} issueId 
     * @param {module:api/CreatorsApi~creatorsPut_1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreatorDto}
     */
    this.creatorsPut_1 = function(creator, supplierId, issueId, callback) {
      var postBody = creator;

      // verify the required parameter 'creator' is set
      if (creator === undefined || creator === null) {
        throw new Error("Missing the required parameter 'creator' when calling creatorsPut_1");
      }

      // verify the required parameter 'supplierId' is set
      if (supplierId === undefined || supplierId === null) {
        throw new Error("Missing the required parameter 'supplierId' when calling creatorsPut_1");
      }

      // verify the required parameter 'issueId' is set
      if (issueId === undefined || issueId === null) {
        throw new Error("Missing the required parameter 'issueId' when calling creatorsPut_1");
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
      var contentTypes = ['application/json', 'text/json', 'application/vnd.api+json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'text/json', 'application/vnd.api+json', 'application/xml', 'text/xml'];
      var returnType = CreatorDto;

      return this.apiClient.callApi(
        '/api/Creators/{supplierId}/issues/{issueId}/Put', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));