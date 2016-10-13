'use strict';
module.exports = function() {
	let randomNumber = getRandomArbitrary(0, 1000001)

	function getRandomArbitrary(min, max) {
  		return Math.random() * (max - min) + min;
	}

  	return  function secretNumber() {
  				return randomNumber
  			}
};