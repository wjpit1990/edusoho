webpackJsonp(["app/js/share/index"],{b9d20259081cd188be85:function(e,i,a){"use strict";function s(e,i){if(0==$(".weixin-share-modal").length){$("body").append(n(i));var a=$(".weixin-share-modal");a.on("show.bs.modal",function(){a.find(".weixin-share-qrcode").empty(),a.find(".weixin-share-loading").show(),a.find(".weixin-share-qrcode").html('<img src="'+e.data("qrcodeUrl")+'">'),a.find(".weixin-share-qrcode img").load(function(){a.find(".weixin-share-loading").hide()})})}$(".weixin-share-modal").modal("show")}function n(e){var i="";return i+='<div class="modal fade weixin-share-modal" tabindex="-1" role="dialog" aria-hidden="true">',i+='  <div class="modal-dialog modal-sm">',i+='    <div class="modal-content">',i+='      <div class="modal-header">',i+='        <button type="button" class="close" data-dismiss="modal" aria-label="关闭"><span aria-hidden="true">×</span></button>',i+='        <h4 class="modal-title">分享到微信朋友圈</h4>',i+="      </div>",i+='      <div class="modal-body">',i+='        <p class="weixin-share-loading" style="text-align:center;">正在加载二维码...</p>',i+='        <p class="weixin-share-qrcode text-center"></p>',i+='        <p class="text-muted text-center"><small>打开微信，点击底部的“发现”，</small><br><small>使用 “扫一扫” 即可将网页分享到我的朋友圈。</small></p>',i+="      </div>",i+="    </div>",i+="  </div>",i+="</div>"}function t(e){var i={};return i.url=e.url,i.title=e.message,""!=e.picture&&(-1!=e.picture.indexOf("://")?i.pic=e.picture:i.pic=document.domain+e.picture),"http://service.weibo.com/share/share.php?"+d(i)}function r(e){var i={};return i.url=e.url,i.title=e.title,i.summary=e.summary,i.desc=e.message,""!=e.picture&&(i.pics=e.picture),"http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?"+d(i)}function o(e){var i={};return i.url=e.url,i.title=e.title,i.summary=e.summary,i.desc=e.message,""!=e.picture&&(i.pics=e.picture),"http://connect.qq.com/widget/shareqq/index.html?"+d(i)}function d(e){var i=[];for(var a in e)i.push(a+"="+encodeURIComponent(e[a]||""));return i.join("&")}$("body").on("click",".js-social-share",function(){var e=$(this),i=e.data("share"),a=e.parents(".js-social-share-params").data(),n="";switch($(".point-share-url").length>0&&$.post($(".point-share-url").val(),function(){}),i){case"weibo":n=t(a),window.open(n);break;case"qzone":n=r(a),window.open(n);break;case"qq":n=o(a),window.open(n);break;case"weixin":s(e,a)}})}},["b9d20259081cd188be85"]);