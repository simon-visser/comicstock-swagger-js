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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ComicStockwebApi);
  }
}(this, function(expect, ComicStockwebApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ComicStockwebApi.OrderDto();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('OrderDto', function() {
    it('should create an instance of OrderDto', function() {
      // uncomment below and update the code to test OrderDto
      //var instane = new ComicStockwebApi.OrderDto();
      //expect(instance).to.be.a(ComicStockwebApi.OrderDto);
    });

    it('should have the property total (base name: "total")', function() {
      // uncomment below and update the code to test the property total
      //var instane = new ComicStockwebApi.OrderDto();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ComicStockwebApi.OrderDto();
      //expect(instance).to.be();
    });

    it('should have the property orderDate (base name: "orderDate")', function() {
      // uncomment below and update the code to test the property orderDate
      //var instane = new ComicStockwebApi.OrderDto();
      //expect(instance).to.be();
    });

    it('should have the property issue (base name: "issue")', function() {
      // uncomment below and update the code to test the property issue
      //var instane = new ComicStockwebApi.OrderDto();
      //expect(instance).to.be();
    });

    it('should have the property items (base name: "items")', function() {
      // uncomment below and update the code to test the property items
      //var instane = new ComicStockwebApi.OrderDto();
      //expect(instance).to.be();
    });

    it('should have the property deliveryStatus (base name: "deliveryStatus")', function() {
      // uncomment below and update the code to test the property deliveryStatus
      //var instane = new ComicStockwebApi.OrderDto();
      //expect(instance).to.be();
    });

    it('should have the property shipmentReference (base name: "shipmentReference")', function() {
      // uncomment below and update the code to test the property shipmentReference
      //var instane = new ComicStockwebApi.OrderDto();
      //expect(instance).to.be();
    });

    it('should have the property shipmentDate (base name: "shipmentDate")', function() {
      // uncomment below and update the code to test the property shipmentDate
      //var instane = new ComicStockwebApi.OrderDto();
      //expect(instance).to.be();
    });

  });

}));
