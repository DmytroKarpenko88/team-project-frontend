(self.webpackChunkteam_project_frontend=self.webpackChunkteam_project_frontend||[]).push([[885],{9504:function(e,n,t){e.exports=t(269)},269:function(e,n,t){"use strict";var o,r=(o=t(2791))&&"object"==typeof o&&"default"in o?o.default:o,a=t(4164);function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function s(e,n){e.prototype=Object.create(n.prototype),function(e,n){for(var t=Object.getOwnPropertyNames(n),o=0;o<t.length;o++){var r=t[o],a=Object.getOwnPropertyDescriptor(n,r);a&&a.configurable&&void 0===e[r]&&Object.defineProperty(e,r,a)}}(e.prototype.constructor=e,n)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var l=function(e,n,t,o,r,a,i,s){if(!e){var u;if(void 0===n)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[t,o,r,a,i,s],c=0;(u=new Error(n.replace(/%s/g,(function(){return l[c++]})))).name="Invariant Violation"}throw u.framesToPop=1,u}};function c(e,n,t){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=n,e.selectionEnd=t;else{var o=e.createTextRange();o.collapse(!0),o.moveStart("character",n),o.moveEnd("character",t-n),o.select()}}var f={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"};function p(e,n,t){var o="",r="",a=null,i=[];if(void 0===n&&(n="_"),null==t&&(t=f),!e||"string"!=typeof e)return{maskChar:n,formatChars:t,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var s=!1;return e.split("").forEach((function(e){s=!s&&"\\"===e||(s||!t[e]?(i.push(o.length),o.length===i.length-1&&(r+=e)):a=o.length+1,o+=e,!1)})),{maskChar:n,formatChars:t,prefix:r,mask:o,lastEditablePosition:a,permanents:i}}function h(e,n){return-1!==e.permanents.indexOf(n)}function v(e,n,t){var o=e.mask,r=e.formatChars;if(!t)return!1;if(h(e,n))return o[n]===t;var a=r[o[n]];return new RegExp(a).test(t)}function d(e,n){return n.split("").every((function(n,t){return h(e,t)||!v(e,t,n)}))}function m(e,n){var t=e.maskChar,o=e.prefix;if(!t){for(;n.length>o.length&&h(e,n.length-1);)n=n.slice(0,n.length-1);return n.length}for(var r=o.length,a=n.length;a>=o.length;a--){var i=n[a];if(!h(e,a)&&v(e,a,i)){r=a+1;break}}return r}function g(e,n){return m(e,n)===e.mask.length}function k(e,n){var t=e.maskChar,o=e.mask,r=e.prefix;if(!t){for((n=w(e,"",n,0)).length<r.length&&(n=r);n.length<o.length&&h(e,n.length);)n+=o[n.length];return n}if(n)return w(e,k(e,""),n,0);for(var a=0;a<o.length;a++)h(e,a)?n+=o[a]:n+=t;return n}function w(e,n,t,o){var r=e.mask,a=e.maskChar,i=e.prefix,s=t.split(""),u=g(e,n);return!a&&o>n.length&&(n+=r.slice(n.length,o)),s.every((function(t){for(;c=t,h(e,l=o)&&c!==r[l];){if(o>=n.length&&(n+=r[o]),s=t,a&&h(e,o)&&s===a)return!0;if(++o>=r.length)return!1}var s,l,c;return!v(e,o,t)&&t!==a||(o<n.length?n=a||u||o<i.length?n.slice(0,o)+t+n.slice(o+1):(n=n.slice(0,o)+t+n.slice(o),k(e,n)):a||(n+=t),++o<r.length)})),n}function C(e,n){for(var t=e.mask,o=n;o<t.length;++o)if(!h(e,o))return o;return null}function S(e){return e||0===e?e+"":""}function O(e,n,t,o,r){var a=e.mask,i=e.prefix,s=e.lastEditablePosition,u=n,l="",c=0,f=0,p=Math.min(r.start,t.start);return t.end>r.start?f=(c=function(e,n,t,o){var r=e.mask,a=e.maskChar,i=t.split(""),s=o;return i.every((function(n){for(;i=n,h(e,t=o)&&i!==r[t];)if(++o>=r.length)return!1;var t,i;return(v(e,o,n)||n===a)&&o++,o<r.length})),o-s}(e,0,l=u.slice(r.start,t.end),p))?r.length:0:u.length<o.length&&(f=o.length-u.length),u=o,f&&(1!==f||r.length||(p=r.start===t.start?C(e,t.start):function(e,n){for(var t=n;0<=t;--t)if(!h(e,t))return t;return null}(e,t.start)),u=function(e,n,t,o){var r=t+o,a=e.maskChar,i=e.mask,s=e.prefix,u=n.split("");if(a)return u.map((function(n,o){return o<t||r<=o?n:h(e,o)?i[o]:a})).join("");for(var l=r;l<u.length;l++)h(e,l)&&(u[l]="");return t=Math.max(s.length,t),u.splice(t,r-t),n=u.join(""),k(e,n)}(e,u,p,f)),u=w(e,u,l,p),(p+=c)>=a.length?p=a.length:p<i.length&&!c?p=i.length:p>=i.length&&p<s&&c&&(p=C(e,p)),l||(l=null),{value:u=k(e,u),enteredString:l,selection:{start:p,end:p}}}function y(e){return"function"==typeof e}function b(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function M(e){return(b()?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame:function(){return setTimeout(e,1e3/60)})(e)}function I(e){(b()||clearTimeout)(e)}var D=function(e){function n(n){var t=e.call(this,n)||this;t.focused=!1,t.mounted=!1,t.previousSelection=null,t.selectionDeferId=null,t.saveSelectionLoopDeferId=null,t.saveSelectionLoop=function(){t.previousSelection=t.getSelection(),t.saveSelectionLoopDeferId=M(t.saveSelectionLoop)},t.runSaveSelectionLoop=function(){null===t.saveSelectionLoopDeferId&&t.saveSelectionLoop()},t.stopSaveSelectionLoop=function(){null!==t.saveSelectionLoopDeferId&&(I(t.saveSelectionLoopDeferId),t.saveSelectionLoopDeferId=null,t.previousSelection=null)},t.getInputDOMNode=function(){if(!t.mounted)return null;var e=a.findDOMNode(u(u(t))),n="undefined"!=typeof window&&e instanceof window.Element;if(e&&!n)return null;if("INPUT"!==e.nodeName&&(e=e.querySelector("input")),!e)throw new Error("react-input-mask: inputComponent doesn't contain input node");return e},t.getInputValue=function(){var e=t.getInputDOMNode();return e?e.value:null},t.setInputValue=function(e){var n=t.getInputDOMNode();n&&(t.value=e,n.value=e)},t.setCursorToEnd=function(){var e=m(t.maskOptions,t.value),n=C(t.maskOptions,e);null!==n&&t.setCursorPosition(n)},t.setSelection=function(e,n,o){void 0===o&&(o={});var r=t.getInputDOMNode(),a=t.isFocused();r&&a&&(o.deferred||c(r,e,n),null!==t.selectionDeferId&&I(t.selectionDeferId),t.selectionDeferId=M((function(){t.selectionDeferId=null,c(r,e,n)})),t.previousSelection={start:e,end:n,length:Math.abs(n-e)})},t.getSelection=function(){return function(e){var n=0,t=0;if("selectionStart"in e&&"selectionEnd"in e)n=e.selectionStart,t=e.selectionEnd;else{var o=document.selection.createRange();o.parentElement()===e&&(n=-o.moveStart("character",-e.value.length),t=-o.moveEnd("character",-e.value.length))}return{start:n,end:t,length:t-n}}(t.getInputDOMNode())},t.getCursorPosition=function(){return t.getSelection().start},t.setCursorPosition=function(e){t.setSelection(e,e)},t.isFocused=function(){return t.focused},t.getBeforeMaskedValueChangeConfig=function(){var e=t.maskOptions,n=e.mask,o=e.maskChar,r=e.permanents,a=e.formatChars;return{mask:n,maskChar:o,permanents:r,alwaysShowMask:!!t.props.alwaysShowMask,formatChars:a}},t.isInputAutofilled=function(e,n,o,r){var a=t.getInputDOMNode();try{if(a.matches(":-webkit-autofill"))return!0}catch(l){}return!t.focused||r.end<o.length&&n.end===e.length},t.onChange=function(e){var n=u(u(t)).beforePasteState,o=u(u(t)).previousSelection,r=t.props.beforeMaskedValueChange,a=t.getInputValue(),i=t.value,s=t.getSelection();t.isInputAutofilled(a,s,i,o)&&(i=k(t.maskOptions,""),o={start:0,end:0,length:0}),n&&(o=n.selection,i=n.value,s={start:o.start+a.length,end:o.start+a.length,length:0},a=i.slice(0,o.start)+a+i.slice(o.end),t.beforePasteState=null);var l=O(t.maskOptions,a,s,i,o),c=l.enteredString,f=l.selection,p=l.value;if(y(r)){var h=r({value:p,selection:f},{value:i,selection:o},c,t.getBeforeMaskedValueChangeConfig());p=h.value,f=h.selection}t.setInputValue(p),y(t.props.onChange)&&t.props.onChange(e),t.isWindowsPhoneBrowser?t.setSelection(f.start,f.end,{deferred:!0}):t.setSelection(f.start,f.end)},t.onFocus=function(e){var n=t.props.beforeMaskedValueChange,o=t.maskOptions,r=o.mask,a=o.prefix;if(t.focused=!0,t.mounted=!0,r){if(t.value)m(t.maskOptions,t.value)<t.maskOptions.mask.length&&t.setCursorToEnd();else{var i=k(t.maskOptions,a),s=k(t.maskOptions,i),u=m(t.maskOptions,s),l=C(t.maskOptions,u),c={start:l,end:l};if(y(n)){var f=n({value:s,selection:c},{value:t.value,selection:null},null,t.getBeforeMaskedValueChangeConfig());s=f.value,c=f.selection}var p=s!==t.getInputValue();p&&t.setInputValue(s),p&&y(t.props.onChange)&&t.props.onChange(e),t.setSelection(c.start,c.end)}t.runSaveSelectionLoop()}y(t.props.onFocus)&&t.props.onFocus(e)},t.onBlur=function(e){var n=t.props.beforeMaskedValueChange,o=t.maskOptions.mask;if(t.stopSaveSelectionLoop(),t.focused=!1,o&&!t.props.alwaysShowMask&&d(t.maskOptions,t.value)){var r="";y(n)&&(r=n({value:r,selection:null},{value:t.value,selection:t.previousSelection},null,t.getBeforeMaskedValueChangeConfig()).value);var a=r!==t.getInputValue();a&&t.setInputValue(r),a&&y(t.props.onChange)&&t.props.onChange(e)}y(t.props.onBlur)&&t.props.onBlur(e)},t.onMouseDown=function(e){if(!t.focused&&document.addEventListener){t.mouseDownX=e.clientX,t.mouseDownY=e.clientY,t.mouseDownTime=(new Date).getTime();document.addEventListener("mouseup",(function e(n){if(document.removeEventListener("mouseup",e),t.focused){var o=Math.abs(n.clientX-t.mouseDownX),r=Math.abs(n.clientY-t.mouseDownY),a=Math.max(o,r),i=(new Date).getTime()-t.mouseDownTime;(a<=10&&i<=200||a<=5&&i<=300)&&t.setCursorToEnd()}}))}y(t.props.onMouseDown)&&t.props.onMouseDown(e)},t.onPaste=function(e){y(t.props.onPaste)&&t.props.onPaste(e),e.defaultPrevented||(t.beforePasteState={value:t.getInputValue(),selection:t.getSelection()},t.setInputValue(""))},t.handleRef=function(e){null==t.props.children&&y(t.props.inputRef)&&t.props.inputRef(e)};var o=n.mask,r=n.maskChar,i=n.formatChars,s=n.alwaysShowMask,l=n.beforeMaskedValueChange,f=n.defaultValue,h=n.value;t.maskOptions=p(o,r,i),null==f&&(f=""),null==h&&(h=f);var v=S(h);if(t.maskOptions.mask&&(s||v)&&(v=k(t.maskOptions,v),y(l))){var g=n.value;null==n.value&&(g=f),v=l({value:v,selection:null},{value:g=S(g),selection:null},null,t.getBeforeMaskedValueChangeConfig()).value}return t.value=v,t}s(n,e);var t=n.prototype;return t.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=function(){var e=new RegExp("windows","i"),n=new RegExp("phone","i"),t=navigator.userAgent;return e.test(t)&&n.test(t)}(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},t.componentDidUpdate=function(){var e=this.previousSelection,n=this.props,t=n.beforeMaskedValueChange,o=n.alwaysShowMask,r=n.mask,a=n.maskChar,i=n.formatChars,s=this.maskOptions,u=o||this.isFocused(),l=null!=this.props.value,c=l?S(this.props.value):this.value,f=e?e.start:null;if(this.maskOptions=p(r,a,i),this.maskOptions.mask){!s.mask&&this.isFocused()&&this.runSaveSelectionLoop();var h=this.maskOptions.mask&&this.maskOptions.mask!==s.mask;if(s.mask||l||(c=this.getInputValue()),(h||this.maskOptions.mask&&(c||u))&&(c=k(this.maskOptions,c)),h){var v=m(this.maskOptions,c);(null===f||v<f)&&(f=g(this.maskOptions,c)?v:C(this.maskOptions,v))}!this.maskOptions.mask||!d(this.maskOptions,c)||u||l&&this.props.value||(c="");var w={start:f,end:f};if(y(t)){var O=t({value:c,selection:w},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());c=O.value,w=O.selection}this.value=c;var b=this.getInputValue()!==this.value;b?(this.setInputValue(this.value),this.forceUpdate()):h&&this.forceUpdate();var M=!1;null!=w.start&&null!=w.end&&(M=!e||e.start!==w.start||e.end!==w.end),(M||b)&&this.setSelection(w.start,w.end)}else s.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},t.componentWillUnmount=function(){this.mounted=!1,null!==this.selectionDeferId&&I(this.selectionDeferId),this.stopSaveSelectionLoop()},t.render=function(){var e,n=this.props,t=(n.mask,n.alwaysShowMask,n.maskChar,n.formatChars,n.inputRef,n.beforeMaskedValueChange,n.children),o=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],0<=n.indexOf(t)||(r[t]=e[t]);return r}(n,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(t){y(t)||l(!1);var a=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],s=i({},o);a.forEach((function(e){return delete s[e]})),e=t(s),a.filter((function(n){return null!=e.props[n]&&e.props[n]!==o[n]})).length&&l(!1)}else e=r.createElement("input",i({ref:this.handleRef},o));var u={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(o.disabled||o.readOnly||(u.onChange=this.onChange,u.onPaste=this.onPaste,u.onMouseDown=this.onMouseDown),null!=o.value&&(u.value=this.value)),e=r.cloneElement(e,u)},n}(r.Component);e.exports=D},6916:function(e,n,t){"use strict";t.d(n,{P1:function(){return u}});var o="NOT_FOUND";var r=function(e,n){return e===n};function a(e,n){var t="object"===typeof n?n:{equalityCheck:n},a=t.equalityCheck,i=void 0===a?r:a,s=t.maxSize,u=void 0===s?1:s,l=t.resultEqualityCheck,c=function(e){return function(n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var o=n.length,r=0;r<o;r++)if(!e(n[r],t[r]))return!1;return!0}}(i),f=1===u?function(e){var n;return{get:function(t){return n&&e(n.key,t)?n.value:o},put:function(e,t){n={key:e,value:t}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(c):function(e,n){var t=[];function r(e){var r=t.findIndex((function(t){return n(e,t.key)}));if(r>-1){var a=t[r];return r>0&&(t.splice(r,1),t.unshift(a)),a.value}return o}return{get:r,put:function(n,a){r(n)===o&&(t.unshift({key:n,value:a}),t.length>e&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(u,c);function p(){var n=f.get(arguments);if(n===o){if(n=e.apply(null,arguments),l){var t=f.getEntries(),r=t.find((function(e){return l(e.value,n)}));r&&(n=r.value)}f.put(arguments,n)}return n}return p.clearCache=function(){return f.clear()},p}function i(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function s(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),o=1;o<n;o++)t[o-1]=arguments[o];var r=function(){for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];var a,s=0,u={memoizeOptions:void 0},l=o.pop();if("object"===typeof l&&(u=l,l=o.pop()),"function"!==typeof l)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof l+"]");var c=u,f=c.memoizeOptions,p=void 0===f?t:f,h=Array.isArray(p)?p:[p],v=i(o),d=e.apply(void 0,[function(){return s++,l.apply(null,arguments)}].concat(h)),m=e((function(){for(var e=[],n=v.length,t=0;t<n;t++)e.push(v[t].apply(null,arguments));return a=d.apply(null,e)}));return Object.assign(m,{resultFunc:l,memoizedResultFunc:d,dependencies:v,lastResult:function(){return a},recomputations:function(){return s},resetRecomputations:function(){return s=0}}),m};return r}var u=s(a)}}]);
//# sourceMappingURL=885.5780c8c8.chunk.js.map