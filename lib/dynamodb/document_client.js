var AWS = require('../core');


AWS.DynamoDB.DocumentClient = AWS.util.inherit({

  constructor: function DocumentClient(options) {
    var self = this;
    self.options = options || {};
    self.configure(self.options);
  },

  configure: function configure(options) {
    var self = this;
    self.service = options.service;
    self.bindServiceObject(options.params);
  },

  bindServiceObject: function bindServiceObject(params) {
    var self = this;
    params = params || {};

    if (!self.service) {
      self.service = new AWS.DynamoDB({params: params});
    } else {
      var config = AWS.util.copy(self.service.config);
      self.service = new self.service.constructor.__super__(config);
      self.service.config.params =
        AWS.util.merge(self.service.config.params || {}, params);
    }
  },

  // Returns a KeyCondition object.
  getKeyConditions: function(attribute, operator) {

  },

  // Performs a batchGetItem
  batchGet: function(params, callback) {

  },

  // Performs a batchWriteItem
  batchPut: function(params, callback) {

  },

  // Performs a deleteItem
  delete: function(params, callback) {

  },

  // Performs a getItem
  get: function(params, callback) {

  },

  // Performs a putItem
  put: function(params, callback) {

  },

  // Performs an updateItem
  update: function(params, callback) {

  },

  // Performs a scan
  scan: function(params, callback) {

  },

  // Performs a query
  query: function(params, callback) {

  }

});

module.exports = AWS.DynamoDB.DocumentClient;