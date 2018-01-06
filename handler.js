'use strict';

var mandelbrot = require('./mandelbrot.js');

module.exports.handler = (event, context, callback) => {
  var mincre = parseFloat(event.pathParameters.mincre);
  var mincim = parseFloat(event.pathParameters.mincim);
  var maxcre = parseFloat(event.pathParameters.maxcre);
  var maxcim = parseFloat(event.pathParameters.maxcim);
  var xres = parseInt(event.pathParameters.xres, 10);
  var yres = parseInt(event.pathParameters.yres, 10);
  var infn = parseInt(event.pathParameters.infn, 10);

  var pixels = mandelbrot.mandelbrot(mincre, maxcre, mincim, maxcim, xres, yres, infn);

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      pixels: pixels,
    }),
  };
  
  callback(null, response);
};
