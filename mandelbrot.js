'use strict';

// Mandelbrot calculation proudly "inspired" by
// https://rosettacode.org/wiki/Mandelbrot_set

function mandelbrotIter(cx, cy, maxIter) {
    var x = 0.0;
    var y = 0.0;

    var xx = x * x;
    var yy = y * y;
    var xy = x * y;
   
    for (var i = 1; i < maxIter; i++) {
        if ((xx + yy) >= 4.0) {
            break;
        }

        x = xx - yy + cx;
        y = 2 * xy + cy;

        xx = x * x;
        yy = y * y;
        xy = x * y;
    }

    return i;
}

module.exports.mandelbrot = function(xmin, xmax, ymin, ymax, xres, yres, maxIter) {
    var pixels = new Array(xres * yres);

    // Delta per pixel
    var dx = (xmax - xmin) / xres;
    var dy = (ymax - ymin) / yres;

    // Loop row-by-row
    var ppos=0;
    for (var iy = 0; iy < yres; ++iy) {
        var y = ymin + dy * iy;

        for (var ix = 0; ix < xres; ++ix) {
            var x = xmin + dx * ix;

            var iter = mandelbrotIter(x, y, maxIter);

            pixels[ppos++] = iter
        }
    }

    return pixels;
};
