!function(E){function e(e){for(var t,o,u=e[0],S=e[1],s=e[2],T=0,c=[];T<u.length;T++)o=u[T],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&c.push(n[o][0]),n[o]=0;for(t in S)Object.prototype.hasOwnProperty.call(S,t)&&(E[t]=S[t]);for(a&&a(e);c.length;)c.shift()();return _.push.apply(_,s||[]),r()}function r(){for(var E,e=0;e<_.length;e++){for(var r=_[e],t=!0,u=1;u<r.length;u++){var S=r[u];0!==n[S]&&(t=!1)}t&&(_.splice(e--,1),E=o(o.s=r[0]))}return E}var t={},n={33:0},_=[];function o(e){if(t[e])return t[e].exports;var r=t[e]={i:e,l:!1,exports:{}};return E[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(E){var e=[],r=n[E];if(0!==r)if(r)e.push(r[2]);else{var t=new Promise((function(e,t){r=n[E]=[e,t]}));e.push(r[2]=t);var _,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=function(E){return o.p+"js/"+({28:"babel-worker"}[E]||E)+"-"+{28:"e2c46b2b2c60ca5ec1c4"}[E]+".chunk.js"}(E);var S=new Error;_=function(e){u.onerror=u.onload=null,clearTimeout(s);var r=n[E];if(0!==r){if(r){var t=e&&("load"===e.type?"missing":e.type),_=e&&e.target&&e.target.src;S.message="Loading chunk "+E+" failed.\n("+t+": "+_+")",S.name="ChunkLoadError",S.type=t,S.request=_,r[1](S)}n[E]=void 0}};var s=setTimeout((function(){_({type:"timeout",target:u})}),12e4);u.onerror=u.onload=_,document.head.appendChild(u)}return Promise.all(e)},o.m=E,o.c=t,o.d=function(E,e,r){o.o(E,e)||Object.defineProperty(E,e,{enumerable:!0,get:r})},o.r=function(E){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(E,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(E,"__esModule",{value:!0})},o.t=function(E,e){if(1&e&&(E=o(E)),8&e)return E;if(4&e&&"object"==typeof E&&E&&E.__esModule)return E;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:E}),2&e&&"string"!=typeof E)for(var t in E)o.d(r,t,function(e){return E[e]}.bind(null,t));return r},o.n=function(E){var e=E&&E.__esModule?function(){return E.default}:function(){return E};return o.d(e,"a",e),e},o.o=function(E,e){return Object.prototype.hasOwnProperty.call(E,e)},o.p="https://static.codepen.io/assets/packs/",o.oe=function(E){throw console.error(E),E};var u=(self||this).webpackJsonp=(self||this).webpackJsonp||[],S=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var a=S;_.push([496,1]),r()}({45:function(E,e,r){"use strict";r.d(e,"d",(function(){return T})),r.d(e,"i",(function(){return A})),r.d(e,"a",(function(){return O})),r.d(e,"j",(function(){return R})),r.d(e,"f",(function(){return I})),r.d(e,"h",(function(){return D})),r.d(e,"g",(function(){return P})),r.d(e,"c",(function(){return f})),r.d(e,"e",(function(){return C})),r.d(e,"b",(function(){return p}));var t=r(47),n=r.n(t),_=r(218),o=r.n(_),u=r(5),S=function(){},s=function(){return document.querySelector('meta[name="csrf-token"]').getAttribute("content")},a=function(E,e){return E.set("X-CSRF-Token",s()).set("X-Requested-With","XMLHttpRequest").accept("*/*").send(e)},T=function(E,e){var r=e.dispatch,t=e.getState,_=e.method,o=e.url,S=i(e,E),s=t().requests,T="".concat(_,"_").concat(o);return!s[T]&&(r(function(E){return{type:u.a.SEND_REQUEST,payload:{requestKey:E}}}(T)),function(E){var e=E.method,r=E.url,t=E.params,_=n.a[e](r);return"get"===e?_.query(t):a(_,t)}(e).timeout(12e5).end((function(E,t){r(function(E){return{type:u.a.RECEIVE_REQUEST,payload:{requestKey:E}}}(T)),c(S,e,E,t)})))},c=function(E,e,r,t){var n=E.onError,_=E.onServerError,o=E.onFail,u=E.onTimeout,S=E.onSuccess,s=e.custom404Handler;return r?r.timeout?u():r.status?404===r.status&&s?s():_(r.response):n(r):200===t.status?S(t.body):o(t)},i=function(E,e){return{onError:E.customFailHandler||e.error(E.dispatch,E),onServerError:E.customFailHandler||e.serverError(E.dispatch,E),onFail:E.customFailHandler||e.fail(E.dispatch,E),onTimeout:E.customFailHandler||e.timeout(E.dispatch,E),onSuccess:E.onSuccess||S}},A=function(E,e,r){return a(n.a.post(E),e).end((function(E,e){r(E,e)}))},O=function(E,e){return new Promise((function(r){var t=new XMLHttpRequest;t.open("POST",E,!0),t.timeout=3e4,t.setRequestHeader("Content-Type","text/plain; charset=utf-8"),t.onload=function(){var E={};try{E=JSON.parse(t.responseText)}catch(E){}t.status>=200&&t.status<400?r({error:null,data:E}):r({error:{message:"Server Error",request:t},data:E})};var n=JSON.stringify(e);t.send(n)}))},R=function(E){var e=E.params,r=E.url;return n.a.post(r).set("X-CSRF-Token",s()).set("X-Requested-With","XMLHttpRequest").accept("*/*").send(e)},L=0,I=function(){var E=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};return new Promise((function(e,r){(L+=1)>100&&(alert("You're session expired. Refresh the page to continue"),r("Session Expired")),A("/processor_jwts",null,(function(t,n){var _;if(t)r(t);else{var o=null===(_=JSON.parse(n.text).payload)||void 0===_?void 0:_.jwt;o?(window.__jwt=o,e(o),E(o)):r("No JWT")}}))}))},D=function(E){var e;n.a.post(E.url).send((e=E.params,Object.keys(e).map((function(E){return encodeURIComponent(E)+"="+encodeURIComponent(e[E])})).join("&"))).accept("*/*").end((function(e,r){E.onSuccess(e,r)}))},P=function(E){n.a.get(E.url).then((function(e){E.onSuccess&&E.onSuccess(e)})).catch((function(e){E.onError&&E.onError(e)}))},f=function(E){n.a.get(E.url).use(o()({timeout:1e4})).end((function(e,r){E.onSuccess(r)}))},C=function(E,e,r){var t=new FormData;Object.keys(e).forEach((function(E){t.append(E,e[E])})),n.a.post(E).send(t).end((function(E,e){r(E,e)}))},p=function(E,e){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return new Promise((function(t){var n=new XMLHttpRequest;n.onload=function(){var E=r?JSON.parse(n.responseText):n.responseText;if(n.status>=200&&n.status<300)t(E);else{var e="Server Error";E.error&&E.error.message&&(e+=": "+E.error.message),t({error:{message:e,request:n}})}},n.onerror=function(){t({error:{message:"Request Error",request:n}})},n.open("POST",E,!0),n.timeout=3e4,n.setRequestHeader("Content-Type","text/plain; charset=utf-8"),n.send(JSON.stringify(e))}))}},496:function(E,e,r){"use strict";r.r(e);var t={};r.r(t),r.d(t,"postMessage",(function(){return D})),r.d(t,"run",(function(){return P}));var n={};r.r(n),r.d(n,"run",(function(){return C}));var _={};r.r(_),r.d(_,"run",(function(){return m}));var o,u=r(115),S=r.n(u),s=r(300),a=r.n(s),T=r(32),c=r.n(T),i=r(41),A=r.n(i),O=r(4),R=r.n(O);function L(E,e){var r=Object.keys(E);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(E);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(E,e).enumerable}))),r.push.apply(r,t)}return r}function I(E){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?L(Object(r),!0).forEach((function(e){R()(E,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(E,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(e){Object.defineProperty(E,e,Object.getOwnPropertyDescriptor(r,e))}))}return E}var D=function(E){return new Promise((function(e){o.onmessage=function(E){e(function(E){if(window.__packages_enabled)return E;var e=E.errors,r=E.payload;if(!e)return E;var t=e.filter((function(E){return"error"===E.errorType}));return{errors:t,payload:{js:I(I({},r.js),{},{errors:t})}}}(E.data))},o.postMessage(E)}))},P=function(E){return new Promise((function(E){return o?E():r.e(28).then(r.t.bind(null,808,7)).then((function(e){var r=e.default;o=r(),E()}))})).then((function(){return D(E.js)}))},f=r(45);function C(E){return p.apply(this,arguments)}function p(){return(p=A()(c.a.mark((function E(e){var r,t,n,_,o;return c.a.wrap((function(E){for(;;)switch(E.prev=E.next){case 0:return r=e.js,E.next=3,l(r.textInput);case 3:return t=E.sent,n=t.error,_=t.result,o=t.modulesBaseUrl,E.abrupt("return",{success:!0,payload:{js:{contentType:"js",errors:F(n),id:"js",show:!1,logs:[],metadata:{modulesBaseUrl:o},textOutput:_}},errors:[]});case 6:case"end":return E.stop()}}),E)})))).apply(this,arguments)}var U=["https://dart-services.appspot.com/api/dartservices/v1/compileDDC?alt=json","https://dart-services-0.appspot.com/api/dartservices/v1/compileDDC?alt=json"];function N(){var E=Math.floor(Math.random()*Math.floor(U.length));return U[E]}function l(E){return d.apply(this,arguments)}function d(){return(d=A()(c.a.mark((function E(e){var r,t;return c.a.wrap((function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Object(f.a)(N(),{source:e});case 2:return r=E.sent,t=r.data,E.abrupt("return",t);case 5:case"end":return E.stop()}}),E)})))).apply(this,arguments)}function F(E){return E?[{code:"PROCESSING",info:{},level:"ERROR",line:1,message:E.message,syntax:"none",type:"js"}]:[]}var v=function(E){var e=a()(JSON.stringify(E)),r=window.__preprocessors_url,t=window.__jwt;return"".concat(r,"/process/").concat(e,"?token=").concat(t)},G=function(){var E=A()(c.a.mark((function E(){var e;return c.a.wrap((function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Object(f.j)({url:"/processor_jwts",params:""});case 2:e=E.sent,window.__jwt=e.body.payload.jwt;case 4:case"end":return E.stop()}}),E)})));return function(){return E.apply(this,arguments)}}();function y(E){var e=E.errors;return!(E.success||!e.auth_token_expired&&!e.auth_token_fail)}var h=function(){var E=A()(c.a.mark((function E(e){var r,t,n;return c.a.wrap((function(E){for(;;)switch(E.prev=E.next){case 0:return r=v(e),E.next=3,Object(f.a)(r,e);case 3:return t=E.sent,n=t.data,E.abrupt("return",n);case 6:case"end":return E.stop()}}),E)})));return function(e){return E.apply(this,arguments)}}(),m=function(){var E=A()(c.a.mark((function E(e){var r;return c.a.wrap((function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,h(e);case 2:if(!y(r=E.sent)){E.next=7;break}return E.next=6,G();case 6:return E.abrupt("return",h(e));case 7:return E.abrupt("return",r);case 8:case"end":return E.stop()}}),E)})));return function(e){return E.apply(this,arguments)}}(),b="babel",j="flutter",w="none",M="js",g="babel",V="flutter",H="preprocessors-service";function J(E,e){var r=Object.keys(E);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(E);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(E,e).enumerable}))),r.push.apply(r,t)}return r}function x(E){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?J(Object(r),!0).forEach((function(e){R()(E,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(E,Object.getOwnPropertyDescriptors(r)):J(Object(r)).forEach((function(e){Object.defineProperty(E,e,Object.getOwnPropertyDescriptor(r,e))}))}return E}var k=function(E){return Object.keys(E).reduce((function(e,r){var t=function(E){if(E.contentType!==M)return H;switch(E.syntax){case b:case w:return g;case j:return V;default:return H}}(E[r]);return e[t]||(e[t]={}),e[t][r]=E[r],e}),{})},B=function(E){var e=k(E);return Object.keys(e).map((function(E){return function(E){return E===g?t:E===V?n:_}(E).run(e[E])}))},W=function(E){return E.reduce((function(E,e){return E.payload=x(x({},E.payload),e.payload),e.success||(E.success=!1,E.errors=e.errors),E}),{errors:null,payload:{},success:!0})},q=function(){var E=A()(c.a.mark((function E(e){var r,t;return c.a.wrap((function(E){for(;;)switch(E.prev=E.next){case 0:return r=B(e),E.next=3,Promise.all(r);case 3:return t=E.sent,E.abrupt("return",W(t));case 5:case"end":return E.stop()}}),E)})));return function(e){return E.apply(this,arguments)}}();window.ProcessorRouter={hashObject:function(E){var e="object"===S()(E)?E:{},r=JSON.stringify(e);return{key:a()(r),value:r}},route:q}},5:function(E,e,r){"use strict";e.a={ADD_NEW_FILE:"ADD_NEW_FILE",ADD_NEW_FILES_AND_FOLDERS:"ADD_NEW_FILES_AND_FOLDERS",DUPLICATE_FILE:"DUPLICATE_FILE",UPDATE_NEWEST_FILE:"UPDATE_NEWEST_FILE",UPDATE_FILE_NAME:"UPDATE_FILE_NAME",UPDATE_FILE_CONTENT:"UPDATE_FILE_CONTENT",RESET_FILE_CONTENT:"RESET_FILE_CONTENT",UPDATE_FILE_ERRORS:"UPDATE_FILE_ERRORS",UPDATE_MEDIA_FILES:"UPDATE_MEDIA_FILES",FLUSH_FILES_CONTENT:"FLUSH_FILES_CONTENT",ADD_FILE_ERROR:"ADD_FILE_ERROR",BABEL_ENTRY_FILE_ERROR:"BABEL_ENTRY_FILE_ERROR",CLEAR_FILE_ERRORS:"CLEAR_FILE_ERRORS",SET_FILE_CONTENT_TO_LOADING:"SET_FILE_CONTENT_TO_LOADING",SET_FILE_CONTENT_LOAD_ERROR:"SET_FILE_CONTENT_LOAD_ERROR",UPDATE_DRAGGED_FILE_LOCATION:"UPDATE_DRAGGED_FILE_LOCATION",RECEIVE_FILES_SAVE_SUCCESS:"RECEIVE_FILES_SAVE_SUCCESS",FILE_FINISHED_COMPILING:"FILE_FINISHED_COMPILING",FILE_FINISHED_PROCESSING:"FILE_FINISHED_PROCESSING",FILE_STARTED_PROCESSING:"FILE_STARTED_PROCESSING",RELOAD_OPEN_PROCESSED_FILES:"RELOAD_OPEN_PROCESSED_FILES",DELETE_FILE:"DELETE_FILE",DELETE_FILES:"DELETE_FILES",CREATE_NEW_FILE:"CREATE_NEW_FILE",UPDATE_NEW_FILE_NAME:"UPDATE_NEW_FILE_NAME",CANCEL_NEW_FILE_NAME:"CANCEL_NEW_FILE_NAME",FINISHED_CREATING_NEW_FILE:"FINISHED_CREATING_NEW_FILE",ADD_OPEN_FILE:"ADD_OPEN_FILE",SET_OPEN_FILES:"SET_OPEN_FILES",UPDATE_FILE_DRAGGING_STATE:"UPDATE_FILE_DRAGGING_STATE",UPDATE_FILE_DRAGGING_OVER_STATE:"UPDATE_FILE_DRAGGING_OVER_STATE",MANUAL_FILE_UPLOAD:"MANUAL_FILE_UPLOAD",TOGGLE_FOLDER_OPEN_STATE:"TOGGLE_FOLDER_OPEN_STATE",SET_EDITING:"SET_EDITING",SET_EDITING_WITH_FILE_NAME:"SET_EDITING_WITH_FILE_NAME",SET_RENAMING_FILE:"SET_RENAMING_FILE",SET_SIDEBAR_SELECTED:"SET_SIDEBAR_SELECTED",SET_PROJECT_TITLE_EDITING_STATE:"SET_PROJECT_TITLE_EDITING_STATE",SET_LAYOUT_STATE:"SET_LAYOUT_STATE",SET_RENDERING_FILE:"SET_RENDERING_FILE",TRIGGER_RENDER:"TRIGGER_RENDER",SET_CANCELLED_RENDER:"SET_CANCELLED_RENDER",ADD_GULP_LOG:"ADD_GULP_LOG",SET_GULP_CONSOLE_OPEN_STATE:"SET_GULP_CONSOLE_OPEN_STATE",CLEAR_GULP_CONSOLE:"CLEAR_GULP_CONSOLE",UPDATE_PROCESSING_QUEUE:"UPDATE_PROCESSING_QUEUE",UPDATE_PROCESSING_SAVE_STATUS:"UPDATE_PROCESSING_SAVE_STATUS",CLEAR_ALL_PROCESSING_INDICATORS:"CLEAR_ALL_PROCESSING_INDICATORS",UPDATE_RESOURCE_SEARCH_TYPE:"UPDATE_RESOURCE_SEARCH_TYPE",UPDATE_RESOURCE_SEARCH_TERM:"UPDATE_RESOURCE_SEARCH_TERM",UPDATE_RESURCE_SEARCH_RESULTS:"UPDATE_RESOURCE_SEARCH_RESULTS",TOGGLE_EXTERNAL_RESOURCES:"TOGGLE_EXTERNAL_RESOURCES",TOGGLE_DIALOG:"TOGGLE_DIALOG",CLOSE_THIS_DIALOG:"CLOSE_THIS_DIALOG",CLOSE_ALL_POPUPS:"CLOSE_ALL_POPUPS",SET_PROJECT_DELETE_DIALOG_INPUT:"SET_PROJECT_DELETE_DIALOG_INPUT",OPEN_MODAL:"OPEN_MODAL",CLOSE_ALL_MODALS:"CLOSE_ALL_MODALS",ADD_MESSAGE:"ADD_MESSAGE",CLEAR_MESSAGES:"CLEAR_MESSAGES",RECIEVE_PROJECT_UI_STATE_SAVE_SUCCESS:"RECIEVE_PROJECT_UI_STATE_SAVE_SUCCESS",DEPLOYMENT_IN_PROGRESS:"DEPLOYMENT_IN_PROGRESS",FAILED_TO_DEPLOY:"FAILED_TO_DEPLOY",UPDATE_CNAME_STATUS:"UPDATE_CNAME_STATUS",OPEN_CONTEXT_MENU:"OPEN_CONTEXT_MENU",CLOSE_CONTEXT_MENU:"CLOSE_CONTEXT_MENU",UPDATE_EXPORT_STATUS:"UPDATE_EXPORT_STATUS",RECEIVE_PROJECT_SAVE_SUCCESS:"RECEIVE_PROJECT_SAVE_SUCCESS",RECEIVE_PROJECT_SAVE_FAILURE:"RECEIVE_PROJECT_SAVE_FAILURE",RECEIVE_UPLOADS_SAVE_SUCCESS:"RECEIVE_UPLOADS_SAVE_SUCCESS",ROLLBACK_STATE:"ROLLBACK_STATE",ROLLBACK_UPLOAD_STATE:"ROLLBACK_UPLOAD_STATE",RECEIVE_PROJECT_DELETE_FAILURE:"RECEIVE_PROJECT_DELETE_FAILURE",RECIEVE_SMS_SUCCESS:"RECIEVE_SMS_SUCCESS",RECIEVE_SMS_FAILURE:"RECIEVE_SMS_FAILURE",UPDATE_PROJECT:"UPDATE_PROJECT",UPDATE_PROJECT_EDITOR_SETTINGS:"UPDATE_PROJECT_EDITOR_SETTINGS",UPDATE_PROJECT_USER:"UPDATE_PROJECT_USER",UPDATE_PROCESSED_PROJECT:"UPDATE_PROCESSED_PROJECT",UPDATE_USER_TEAM:"UPDATE_USER_TEAM",UPDATE_READONLY:"UPDATE_READONLY",UPDATE_OTHER_EDITORS_OPEN:"UPDATE_OTHER_EDITORS_OPEN",RECIEVE_UPDATE_USER_TEAM_FAILURE:"RECIEVE_UPDATE_USER_TEAM_FAILURE",RECEIVE_BOILERPLATES_SUCCESS:"RECEIVE_BOILERPLATES_SUCCESS",RECEIVE_BOILERPLATES_FAILURE:"RECEIVE_BOILERPLATES_FAILURE",RECEIVE_CLONE_SUCCESS:"RECEIVE_CLONE_SUCCESS",RECEIVE_CLONE_FAILURE:"RECEIVE_CLONE_FAILURE",UPDATE_FILE_SAVE_QUEUE:"UPDATE_FILE_SAVE_QUEUE",UPDATE_PROJECT_UPLOADS_QUEUE:"UPDATE_PROJECT_UPLOADS_QUEUE",UPDATE_PROJECT_DEPLOY_STATUS:"UPDATE_PROJECT_DEPLOY_STATUS",UPDATE_SCREENSHOT_STATUS:"UPDATE_SCREENSHOT_STATUS",UPDATE_PROJECT_UPLOADS_STATE:"UPDATE_PROJECT_UPLOADS_STATE",UPLOADS_PROCESS_COMPLETE:"UPLOADS_PROCESS_COMPLETE",RECEIVE_GLOBAL_ASSET_DELETE_FAILURE:"RECEIVE_GLOBAL_ASSET_DELETE_FAILURE",REMOVE_GLOBAL_ASSET_DATA_FROM_LIST:"REMOVE_GLOBAL_ASSET_DATA_FROM_LIST",UPDATE_FILE_SEARCH:"UPDATE_FILE_SEARCH",SET_FILE_SEARCH:"SET_FILE_SEARCH",UPDATE_FILES_ACTIVE_FILE:"UPDATE_FILES_ACTIVE_FILE",SET_SPINNING_STATE:"SET_SPINNING_STATE",SEND_REQUEST:"SEND_REQUEST",RECEIVE_REQUEST:"RECEIVE_REQUEST",USER_HAS_LOGGED_OUT:"USER_HAS_LOGGED_OUT"}}});