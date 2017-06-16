webpackJsonp(["app/js/question-manage/form/index"],{0:function(e,t){e.exports=jQuery},"228720083c8f03b23e6d":function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n("fed3b995e613c074e80b"),u=function(e){return e&&e.__esModule?e:{default:e}}(s);jQuery.validator.addMethod("fillCheck",function(e,t){return this.optional(t)||/(\[\[(.+?)\]\])/i.test(e)},"请输入正确的答案,如今天是[[晴|阴|雨]]天");var l=function(e){function t(e){a(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.titleEditorToolBarName="Question",n.initTitleEditor(n.validator),n.initAnalysisEditor(),n.$titleField=$("#"+n.titleFieldId),n.init(),n}return o(t,e),r(t,[{key:"init",value:function(){this.$titleField.rules("add",{fillCheck:!0})}}]),t}(u.default);t.default=l},"2cf47b8094e4851a7f1f":function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var r=n("fed3b995e613c074e80b"),s=n.n(r),u=n("5fdcf1aea784583ca083"),l=n.n(u),c=n("33a776824bec073629e5"),f=n.n(c),d=n("b13eefde5dd7af09b834"),p=n.n(d),h=n("ae88c18278ce1387fd20"),b=n.n(h),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),y=function(e){function t(e){a(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.isSubmit=!1,n.$submit=null,n.$questionOptions=$("#question-options"),n.dataSource=n.$questionOptions.data("choices"),n.dataAnswer=n.$questionOptions.data("answer"),n.dataSource?(n.dataSource=JSON.parse(n.dataSource),n.dataAnswer=JSON.parse(n.dataAnswer)):(n.dataSource=[],n.dataAnswer=[]),n.imageUploadUrl=n.$questionOptions.data("imageUploadUrl"),n.imageDownloadUrl=n.$questionOptions.data("imageDownloadUrl"),n.initTitleEditor(n.validator),n.initAnalysisEditor(),n.initOptions(),n.subscriptionMessage(),n}return o(t,e),m(t,[{key:"_initEvent",value:function(){var e=this;this.$form.on("click","[data-role=submit]",function(t){return e.submitForm(t)})}},{key:"submitForm",value:function(e){this.$submit=$(e.currentTarget);var t=this.$submit.data("submission");this.$form.find("[name=submission]").val(t),this.validator.form()&&this.isSubmit&&this.submit(),this.isSubmit||this.publishMessage()}},{key:"submit",value:function(){this.$submit.button("loading"),this.$form.submit()}},{key:"initOptions",value:function(){l.a.render(f.a.createElement(p.a,{imageUploadUrl:this.imageUploadUrl,imageDownloadUrl:this.imageDownloadUrl,dataSource:this.dataSource,dataAnswer:this.dataAnswer,minCheckedNum:2}),document.getElementById("question-options"))}},{key:"publishMessage",value:function(){b.a.publish({channel:"manage-question",topic:"question-create-form-validator-start",data:{isValidator:!0}})}},{key:"subscriptionMessage",value:function(){var e=this;b.a.subscribe({channel:"manage-question",topic:"question-create-form-validator-end",callback:function(t,n){e.isSubmit=t.isValidator,e.isSubmit&&e.validator.form()&&e.submit()}})}}]),t}(s.a);t.a=y},"3c1fcf442037b440aea5":function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n("fed3b995e613c074e80b"),u=function(e){return e&&e.__esModule?e:{default:e}}(s),l=function(e){function t(e){a(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.initTitleEditor(n.validator),n.initAnalysisEditor(),n.$answerField=$('[name="answer[]"]'),n.init(),n}return o(t,e),r(t,[{key:"init",value:function(){this.$answerField.rules("add",{required:!0,messages:{required:Translator.trans("请输入正确答案")}})}}]),t}(u.default);t.default=l},"56f8edb912e68ea9e223":function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=n("fed3b995e613c074e80b"),o=n.n(i),r=n("2cf47b8094e4851a7f1f"),s=n("e85a87f5cf404e5d12c1"),u=n("5a8ff9f4ed340a8713f6"),l=n("3c1fcf442037b440aea5"),c=n.n(l),f=n("228720083c8f03b23e6d"),d=n.n(f),p=n("7fed9bfb1a62b2d3ee74"),h=n("d10d1a490b8cc019f3a3"),b=n("1be2a74362f00ba903a0"),m=n.n(b),y=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),v=function(){function e(){a(this,e)}return y(e,null,[{key:"getCreator",value:function(t,n){switch(t){case"single_choice":e=new s.a(n);break;case"uncertain_choice":e=new u.a(n);break;case"choice":e=new r.a(n);break;case"determine":e=new c.a(n);break;case"essay":e=new p.a(n);break;case"fill":e=new d.a(n);break;case"material":e=new h.a(n);break;default:e=new o.a(n),e.initTitleEditor(),e.initAnalysisEditor()}return e}}]),e}(),g=$('[data-role="question-form"]'),w=$('[data-role="question-form"]').find('[name="type"]').val();v.getCreator(w,g),new m.a($('[data-role="courseId"]'),$('[data-role="lessonId"]'))},"5a8ff9f4ed340a8713f6":function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var r=n("2cf47b8094e4851a7f1f"),s=n("5fdcf1aea784583ca083"),u=n.n(s),l=n("33a776824bec073629e5"),c=n.n(l),f=n("b13eefde5dd7af09b834"),d=n.n(f),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),h=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),p(t,[{key:"initOptions",value:function(){u.a.render(c.a.createElement(d.a,{imageUploadUrl:this.imageUploadUrl,imageDownloadUrl:this.imageDownloadUrl,dataSource:this.dataSource,dataAnswer:this.dataAnswer}),document.getElementById("question-options"))}}]),t}(r.a);t.a=h},"7fed9bfb1a62b2d3ee74":function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var r=n("fed3b995e613c074e80b"),s=n.n(r),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=function(e){function t(e){a(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.initTitleEditor(n.validator),n.initAnalysisEditor(),n.answerFieldId="question-answer-field",n.$answerField=$("#"+n.answerFieldId),n.init(),n}return o(t,e),u(t,[{key:"init",value:function(){var e=this;this.$answerField.rules("add",{required:!0});var t=CKEDITOR.replace(this.answerFieldId,{toolbar:"Minimal",filebrowserImageUploadUrl:this.$answerField.data("imageUploadUrl"),height:this.$answerField.height()});t.on("change",function(){e.$answerField.val(t.getData())}),t.on("blur",function(){e.$answerField.val(t.getData())})}}]),t}(s.a);t.a=l},b13eefde5dd7af09b834:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t,n,a,i){var o={optionId:Math.random().toString().replace(".",""),optionLabel:"选项"+(0,w.numberConvertLetter)(a),inputValue:t,checked:i};n.Options[o.optionId]=t.length>0?1:0,i&&(n.checkedNum+=1),e.push(o)}function u(e,t,n){for(var a=0;a<e.length;a++)e[a].optionId==n?(e[a].checked&&(t.checkedNum=0),e.splice(a,1),delete t.Options[n],a--):e[a].optionLabel="选项"+(0,w.numberConvertLetter)(a+1)}function l(e,t,n,a,i){var o=0;e.map(function(t,r){i?t.optionId!=n||a?a||(e[r].checked=!1):e[r].checked=!0:t.optionId==n&&(e[r].checked=!a),e[r].checked&&o++}),t.checkedNum=o}function c(e,t,n,a){e.map(function(t,i){t.optionId==n&&(e[i].inputValue=a)})}Object.defineProperty(t,"__esModule",{value:!0});var f=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),d=n("33a776824bec073629e5"),p=a(d),h=n("e7f6be29a6dce7725ed1"),b=a(h),m=n("b334fd7e4c5a19234db2"),y=a(m),v=n("ae88c18278ce1387fd20"),g=a(v),w=n("3c398f87808202f19beb"),O=function(e){function t(e){i(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.state={dataSource:[],isValidator:!1},n.validatorDatas={checkedNum:0,Options:{}};var a=n.props.dataSource,r=n.props.dataAnswer;if(a.length>0)a.map(function(e,t){for(var a=!1,i=0;i<r.length;i++)t==r[i]&&(a=!0);s(n.state.dataSource,e,n.validatorDatas,t+1,a)});else for(var u=1;u<=n.props.defaultNum;u++)s(n.state.dataSource,"",n.validatorDatas,u,!1);return n.subscriptionMessage(),n}return r(t,e),f(t,[{key:"subscriptionMessage",value:function(){var e=this;g.default.subscribe({channel:"manage-question",topic:"question-create-form-validator-start",callback:function(t,n){e.validatorOptions(t)}})}},{key:"publishMessage",value:function(e){g.default.publish({channel:"manage-question",topic:"question-create-form-validator-end",data:{isValidator:e}})}},{key:"validatorOptions",value:function(e){var t=0;this.setState({isValidator:e.isValidator});for(var n in this.validatorDatas.Options)t+=this.validatorDatas.Options[n];t<this.state.dataSource.length||(this.validatorDatas.checkedNum<this.props.minCheckedNum?(0,y.default)("danger","至少选择"+this.props.minCheckedNum+"个答案!"):this.publishMessage(!0))}},{key:"addOption",value:function(){if(this.state.dataSource.length>=this.props.maxNum)return void(0,y.default)("danger","选项最多"+this.props.maxNum+"个!");s(this.state.dataSource,"",this.validatorDatas,this.state.dataSource.length+1,!1),this.setState({dataSource:this.state.dataSource})}},{key:"changeOptionChecked",value:function(e,t){l(this.state.dataSource,this.validatorDatas,e,t,this.props.isRadio),this.setState({dataSource:this.state.dataSource}),this.validatorDatas.checkedNum<=0&&this.publishMessage(!1)}},{key:"deleteOption",value:function(e){if(this.state.dataSource.length<=this.props.minNum)return void(0,y.default)("danger","选项最少"+this.props.minNum+"个!");u(this.state.dataSource,this.validatorDatas,e),this.setState({dataSource:this.state.dataSource})}},{key:"updateInputValue",value:function(e,t){c(this.state.dataSource,this.validatorDatas,e,t),this.validatorDatas.Options[e]=t.length>0?1:0,t.length<=0&&this.publishMessage(!1),this.setState({dataSource:this.state.dataSource})}},{key:"render",value:function(){var e=this;return p.default.createElement("div",{className:"question-options-group"},this.state.dataSource.map(function(t,n){return p.default.createElement(b.default,{imageUploadUrl:e.props.imageUploadUrl,imageDownloadUrl:e.props.imageDownloadUrl,isRadio:e.props.isRadio,publishMessage:function(t){return e.publishMessage(t)},validatorDatas:e.validatorDatas,isValidator:e.state.isValidator,datas:t,key:n,index:n,deleteOption:function(t){return e.deleteOption(t)},changeOptionChecked:function(t,n){return e.changeOptionChecked(t,n)},updateInputValue:function(t,n){return e.updateInputValue(t,n)}})}),p.default.createElement("div",{className:"form-group"},p.default.createElement("div",{className:"col-md-8 col-md-offset-2"},p.default.createElement("a",{className:"btn btn-success btn-sm pull-right",onClick:function(){return e.addOption()}},"新增选项"))))}}]),t}(d.Component);t.default=O,O.defaultProps={defaultNum:4,maxNum:10,minNum:2,isRadio:!1,minCheckedNum:1}},d10d1a490b8cc019f3a3:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var r=n("fed3b995e613c074e80b"),s=n.n(r),u=function(e){function t(e){a(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.initTitleEditor(n.validator),n.initAnalysisEditor(),n}return o(t,e),t}(s.a);t.a=u},d5fb0e67d2d4c1ebaaed:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n("b334fd7e4c5a19234db2"),r=function(e){return e&&e.__esModule?e:{default:e}}(o),s=function(){function e(t){a(this,e),this.$ele=t,this.initEvent()}return i(e,[{key:"initEvent",value:function(){var e=this;this.$ele.on("click",'[data-role="delte-item"]',function(t){return e._deleteItem(t)})}},{key:"_deleteItem",value:function(e){var t=$(e.currentTarget).button("loading");$.post(t.data("url"),{},function(e){"ok"==e.msg&&((0,r.default)("success",Translator.trans("删除成功！")),t.closest(".js-attachment-list").siblings(".js-upload-file").show(),t.closest(".js-attachment-list").closest("div").siblings('[data-role="fileId"]').val(""),t.closest("div").remove(),$(".js-upload-file").show())})}}]),e}();t.default=s},e7f6be29a6dce7725ed1:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n("33a776824bec073629e5"),u=function(e){return e&&e.__esModule?e:{default:e}}(s),l=function(e){function t(e){a(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={datas:n.props.datas},n.editor=null,n.editorBody=null,n.editorHtml=null,n}return o(t,e),r(t,[{key:"componentDidMount",value:function(){this.initCkeditor()}},{key:"deleteOption",value:function(e){this.editorHtml=null,this.props.deleteOption(e.currentTarget.attributes["data-option-id"].value)}},{key:"onChangeChecked",value:function(e){this.updateInputValue(this.editor.getData()),this.props.changeOptionChecked(e.currentTarget.attributes["data-option-id"].value,this.props.datas.checked)}},{key:"initCkeditor",value:function(e){if(this.editor)this.editor.setData(datas.inputValue);else{this.editor=CKEDITOR.replace(this.props.datas.optionId,{toolbar:"Minimal",filebrowserImageUploadUrl:this.props.imageUploadUrl,height:120});var t=this;this.editor.on("instanceReady",function(){t.editorBody=$("#"+[t.props.datas.optionId]).parent().find("iframe").contents().find("body")}),this.editor.on("change",function(){setTimeout(function(){t.updateInputValue(t.editor.getData())},100)}),this.editor.on("blur",function(){setTimeout(function(){t.updateInputValue(t.editor.getData())},100)})}}},{key:"updateInputValue",value:function(e){this.editorHtml=e,this.props.updateInputValue(this.props.datas.optionId,e)}},{key:"render",value:function(){var e=this,t=this.props.isValidator&&this.props.datas.inputValue.length<=0,n="checkbox";return this.props.isRadio&&(n="radio"),this.editorBody&&this.editorHtml!=this.props.datas.inputValue&&this.editorBody.html(this.props.datas.inputValue),u.default.createElement("div",{className:"form-group"},u.default.createElement("div",{className:"col-sm-2 control-label"},u.default.createElement("label",{className:"choice-label control-label-required"},this.props.datas.optionLabel)),u.default.createElement("div",{className:"col-sm-8 controls"},u.default.createElement("textarea",{className:"form-control datas-input col-md-8",id:this.props.datas.optionId,defaultValue:this.props.datas.inputValue,name:"choices[]",value:this.props.datas.inputValue,"data-image-upload-url":this.props.imageUploadUrl,"data-image-download-url":this.props.imageDownloadUrl}),u.default.createElement("div",{className:"mtm"},u.default.createElement("label",null,u.default.createElement("input",{type:n,name:"answer[]","data-option-id":this.props.datas.optionId,value:this.props.index,checked:this.props.datas.checked,className:"answer-checkbox",onChange:function(t){return e.onChangeChecked(t)}}),"正确答案")),u.default.createElement("p",{className:t?"color-danger":"hidden"},"请输入选项内容")),u.default.createElement("div",{className:"col-sm-2"},u.default.createElement("a",{className:"btn btn-default btn-sm","data-option-id":this.props.datas.optionId,onClick:function(t){return e.deleteOption(t)},href:"javascript:;"},u.default.createElement("i",{className:"glyphicon glyphicon-trash"}))))}}]),t}(s.Component);t.default=l},e85a87f5cf404e5d12c1:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var r=n("2cf47b8094e4851a7f1f"),s=n("5fdcf1aea784583ca083"),u=n.n(s),l=n("33a776824bec073629e5"),c=n.n(l),f=n("b13eefde5dd7af09b834"),d=n.n(f),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),h=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),p(t,[{key:"initOptions",value:function(){u.a.render(c.a.createElement(d.a,{imageUploadUrl:this.imageUploadUrl,imageDownloadUrl:this.imageDownloadUrl,dataSource:this.dataSource,dataAnswer:this.dataAnswer,isRadio:!0}),document.getElementById("question-options"))}}]),t}(r.a);t.a=h},fed3b995e613c074e80b:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n("d5fb0e67d2d4c1ebaaed"),r=function(e){return e&&e.__esModule?e:{default:e}}(o),s=function(){function e(t){a(this,e),this.$form=t,this.titleFieldId="question-stem-field",this.analysisFieldId="question-analysis-field",this.validator=null,this.titleEditorToolBarName="Minimal",this._init(),this.attachmentActions=new r.default(t)}return i(e,[{key:"_init",value:function(){this._initEvent(),this._initValidate()}},{key:"_initEvent",value:function(){var e=this;this.$form.on("click","[data-role=submit]",function(t){return e.submitForm(t)})}},{key:"submitForm",value:function(e){var t=$(e.currentTarget).data("submission");this.$form.find("[name=submission]").val(t);var n=this;this.validator.form()&&($(e.currentTarget).button("loading"),n.$form.submit())}},{key:"_initValidate",value:function(){var e=this.$form.validate({onkeyup:!1,rules:{'[data-role="target"]':{required:!0},difficulty:{required:!0},stem:{required:!0},score:{required:!0,number:!0,max:999,min:0}},messages:{'[data-role="target"]':"请选择从属",difficulty:"请选择难度"}});this.validator=e}},{key:"initTitleEditor",value:function(e){var t=$("#"+this.titleFieldId),n=CKEDITOR.replace(this.titleFieldId,{toolbar:this.titleEditorToolBarName,filebrowserImageUploadUrl:t.data("imageUploadUrl"),height:t.height()});n.on("change",function(){t.val(n.getData()),e.form()}),n.on("blur",function(){t.val(n.getData()),e.form()})}},{key:"initAnalysisEditor",value:function(){var e=$("#"+this.analysisFieldId),t=CKEDITOR.replace(this.analysisFieldId,{toolbar:this.titleEditorToolBarName,filebrowserImageUploadUrl:e.data("imageUploadUrl"),height:e.height()});t.on("change",function(){e.val(t.getData())})}},{key:"titleEditorToolBarName",set:function(e){this._titleEditorToolBarName=e},get:function(){return this._titleEditorToolBarName}}]),e}();t.default=s}},["56f8edb912e68ea9e223"]);