!function(t){function e(s){if(n[s])return n[s].exports;var i=n[s]={i:s,l:!1,exports:{}};return t[s].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,s){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:s})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/static-dist/",e(e.s=16)}({16:function(t,e,n){t.exports=n("b6d74d4423d778ef8d29")},b6d74d4423d778ef8d29:function(t,e){jQuery.fn.extend({insertAtCaret:function(t){return this.each(function(e){if(document.selection)this.focus(),sel=document.selection.createRange(),sel.text=t,this.focus();else if(this.selectionStart||"0"==this.selectionStart){var n=this.selectionStart,s=this.selectionEnd,i=this.scrollTop;this.value=this.value.substring(0,n)+t+this.value.substring(s,this.value.length),this.focus(),this.selectionStart=n+t.length,this.selectionEnd=n+t.length,this.scrollTop=i}else this.value+=t,this.focus()})}})}});