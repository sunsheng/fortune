(function($, undefined) {
	var session = {};
	$.wbms = $.wbms || {};
	if (window.sessionStorage) {
		$.extend($.wbms, {
			getLocal: function() {
				var val = sessionStorage.getItem("wbms");
				val = JSON.parse(val);
				return val;
			},
			getItem: function(key) {
				var val = sessionStorage.getItem("wbms");
				val = JSON.parse(val);
				return val[key];
			},
			setItem: function(key, value) {
				var val = sessionStorage.getItem("wbms");
				val = JSON.parse(val);
				val[key] = value;
				sessionStorage.setItem("wbms", JSON.stringify(val));
			},
			removeItem: function(key) {
				var val = sessionStorage.getItem("wbms");
				val = JSON.parse(val);
				if (val[key])
					delete val[key];
				sessionStorage.setItem("wbms", JSON.stringify(val));

			},
			clear: function(key) {
				sessionStorage.removeItem("wbms");
			}
		});
		if (!sessionStorage.getItem("wbms")) {
			var wbms = {};
			sessionStorage.setItem("wbms", JSON.stringify(wbms));
		}

	} else {
		$.extend($.wbms, {
			init: function() {
				if (!session.userData) {
					try {
						session.name = "local";
						session.userData = document.createElement('INPUT'); //这里使用hidden的input元素
						session.userData.type = "hidden";
						session.userData.style.display = "none";
						session.userData.addBehavior("#default#userData"); //这是userData的语法
						document.body.appendChild(session.userData);
						var expires = new Date();
						expires.setDate(expires.getDate() + 365);
						session.userData.expires = expires.toUTCString(); //设定过期时间
						var wbms = {};
						session.userData.setAttribute("wbms", JSON.stringify(wbms));
					} catch (e) {
						return false;
					}
				}
				return true;
			},
			getItem: function(key) {
				if (session.init()) {
					session.userData.load(session.name);
					var val = session.userData.getAttribute("wbms");
					val = JSON.parse(val);
					return val[key];
				}
			},
			setItem: function(key, value) {
				if (session.init()) {
					var val = session.userData.getAttribute("wbms");
					val = JSON.parse(val);
					val[key] = value;
					session.userData.load(session.name);
					session.userData.setAttribute("wbms", JSON.stringify(val));
					session.userData.save(session.name);
				}
			},
			removeItem: function(key) {
				if (session.init()) {
					var val = session.userData.getAttribute("wbms");
					val = JSON.parse(val);
					if (val[key]){
						delete val[key];	
					}
					session.userData.load(session.name);
					session.userData.setAttribute("wbms", JSON.stringify(val));
					session.userData.save(session.name);
				}
			}
		});
	}
})(jQuery);