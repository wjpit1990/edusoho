webpackJsonp(["app/js/teacher/index"],{"7840d638cc48059df0fc":function(e,t){$("body").on("click",".teacher-item .follow-btn",function(){var e=$(this);$.post(e.data("url"),function(){1===e.data("loggedin")&&(e.hide(),e.closest(".teacher-item").find(".unfollow-btn").show())})}).on("click",".unfollow-btn",function(){var e=$(this);$.post(e.data("url"),function(){}).always(function(){e.hide(),e.closest(".teacher-item").find(".follow-btn").show()})})},ac59ea92748d495b5ede:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var c=n("7840d638cc48059df0fc");n.n(c)}},["ac59ea92748d495b5ede"]);