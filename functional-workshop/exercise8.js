function duckCount() {
    // SOLUTION GOES HERE
    return Array.prototype.filter.call(arguments, (function(arg) {
    	return Object.prototype.hasOwnProperty.call(arg, 'quack');
    })).length;
  }

  module.exports = duckCount