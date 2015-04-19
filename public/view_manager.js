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


var ViewManager = (function() {
	var _like;

	var _disableLike = function() {
		_like.attr("disabled", "true");
		_like.addClass("like_button_face_active");
		_like.children("span").css("display", "none");
		_like.find("div").css("display", "");
	};
	var _enableLike = function() {
		_like.removeAttr("disabled");
		_like.removeClass("like_button_face_active");
		_like.children("span").css("display", "");
		_like.find("div").css("display", "none");
	};
	return function(like) {
		_like = like;
		return {
			"disableLike": _disableLike,
			"enableLike": _enableLike
		};
	};
})();
