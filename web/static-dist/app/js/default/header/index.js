webpackJsonp(["app/js/default/header/index"],{"37a604d9c0c3ece890dd":function(e,c,o){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var n=o("fe53252afd7b6c35cb73"),i=o.n(n),t=$(".js-switch-pc"),a=$(".js-switch-mobile");t.length&&t.on("click",function(){i.a.set("PCVersion",1),window.location.reload()}),a.length&&a.on("click",function(){i.a.remove("PCVersion"),window.location.reload()}),$(".js-back").click(function(){1!==history.length?history.go(-1):location.href="/"})}},["37a604d9c0c3ece890dd"]);