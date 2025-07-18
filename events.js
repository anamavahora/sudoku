'use strict';
/**
* Simple callback handling
*
*/
let evnts = {};
evnts.dict = {};

evnts.fireEvent = function(eventName) {
	let callbacks = evnts.dict[eventName];
	if (callbacks == null) return;
	for(let i=0; i< callbacks.length; i++) {
		callbacks[i]();
	}
};

evnts.addCallback = function (eventName, callback) {
	if (evnts.dict[eventName] == null) {
		evnts.dict[eventName] = [];
	}
	evnts.dict[eventName].push(callback);
};
