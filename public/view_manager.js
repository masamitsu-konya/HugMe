var NumberAnimatedEffect = function(container) {
	var _container = container;
	var _startCount = 0;
	var _endCount = 0;
	var _change = function(count) {
		_container.text(count);
	}
	return function(count) {
		_change(count);
	}
};
