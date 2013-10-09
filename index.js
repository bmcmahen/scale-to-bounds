/**
 * Return the maximum size given a set of bounds
 * while maintaining the original aspect ratio.
 * @param  {Number} ow original width
 * @param  {Number} oh original height
 * @param  {Number} mw max width
 * @param  {Number} mh max height
 * @return {Object}
 */

module.exports = function(ow, oh, mw, mh){
  var scale = Math.min(mw / ow, mh / oh);
  if (scale > 1) scale = 1;
  return {
    width : ow * scale,
    height : oh * scale
  };
};