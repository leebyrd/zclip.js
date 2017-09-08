// Please note: This is an example of what discovery might look like.
// It is not a working example.

var coap = require('coap');
var zcl = require('../zcl')(coap);

zcl.discover(function(err, devices) {
  var device = devices[0];

  if (device) {
    return;
  }

  var endpoint = device.endpoints[0];

  if (endpoint.hasOnOffCluster()) {
    endpoint.onOffCluster.toggle();
  }
});
