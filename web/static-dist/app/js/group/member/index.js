webpackJsonp(["app/js/group/member/index"],{0:function(n,t){n.exports=jQuery},ebd34a43396ac67ad4f7:function(n,t,r){"use strict";var e=r("b334fd7e4c5a19234db2"),a=function(n){return n&&n.__esModule?n:{default:n}}(e);$("#exit-btn").length>0&&$("#exit-btn").click(function(){if(!confirm(Translator.trans("真的要退出该小组？您在该小组的信息将删除！")))return!1}),$("#delete-btn").click(function(){return $(":checkbox:checked").length<1?(alert(Translator.trans("请选择要踢出的成员！")),!1):!!confirm(Translator.trans("真的要踢出该成员？"))&&void $.post($("#member-form").attr("action"),$("#member-form").serialize(),function(){(0,a.default)("success",Translator.trans("踢出成功！")),setTimeout(function(){window.location.reload()},1500)}).error(function(){(0,a.default)("danger",Translator.trans("踢出失败！"))})}),$("#set-admin-btn").click(function(){return $(":checkbox:checked").length<1?(alert(Translator.trans("请选择要任职的成员！")),!1):!!confirm(Translator.trans("真的要任职该成员？"))&&void $.post($("#set-admin-url").attr("value"),$("#member-form").serialize(),function(){(0,a.default)("success",Translator.trans("任职成功！")),setTimeout(function(){window.location.reload()},1500)}).error(function(){})}),$("#remove-admin-btn").click(function(){return $(":checkbox:checked").length<1?(alert(Translator.trans("请选择要设置的成员！")),!1):!!confirm(Translator.trans("真的要取消副组长？"))&&void $.post($("#admin-form").attr("action"),$("#admin-form").serialize(),function(){(0,a.default)("success",Translator.trans("设置成功！")),setTimeout(function(){window.location.reload()},1500)}).error(function(){})})}},["ebd34a43396ac67ad4f7"]);