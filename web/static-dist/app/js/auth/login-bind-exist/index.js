webpackJsonp(["app/js/auth/login-bind-exist/index"],{0:function(e,t){e.exports=jQuery},c795ae8c58f473675075:function(e,t,i){"use strict";var a=i("b334fd7e4c5a19234db2"),r=function(e){return e&&e.__esModule?e:{default:e}}(a),n=$("#bind-exist-form"),o=n.find("#set-bind-exist-btn"),s=n.validate({rules:{emailOrMobile:{required:!0,email_or_mobile:!0},password:{required:!0}}});o.click(function(){s.form()&&(o.button("loading"),$("#bind-exist-form-error").hide(),$.post(n.attr("action"),n.serialize(),function(e){if(!e.success)return $("#bind-exist-form-error").html(e.message).show(),void o.button("reset");(0,r.default)("success",Translator.trans("绑定帐号成功，正在跳转至首页！")),window.location.href=e._target_path},"json").fail(function(){(0,r.default)("danger",Translator.trans("绑定失败，帐号或密码错误。"))}).always(function(){o.button("reset")}))}),$.validator.addMethod("email_or_mobile",function(e,t,i){var a=e,r=/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,n=/^1\d{10}$/,o=!1,s=r.test(a),d=n.test(a);return d?$(".email_mobile_msg").removeClass("hidden"):$(".email_mobile_msg").addClass("hidden"),(s||d)&&(o=!0),this.optional(t)||o},Translator.trans("请输入正确格式的Email/手机"))}},["c795ae8c58f473675075"]);