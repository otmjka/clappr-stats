!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("Clappr")):"function"==typeof define&&define.amd?define(["Clappr"],e):"object"==typeof exports?exports.ClapprStats=e(require("Clappr")):t.ClapprStats=e(t.Clappr)}(this,function(t){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=6)}([function(t,e,n){"use strict";var r,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(t){"object"===("undefined"==typeof window?"undefined":i(window))&&(r=window)}t.exports=r},function(t,e,n){"use strict";t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,n){"use strict";function r(t,e){e=o(e,t)?[e]:i(e);for(var n=0,r=e.length;null!=t&&n<r;)t=t[s(e[n++])];return n&&n==r?t:void 0}function i(t){return b(t)?t:f(t)}function o(t,e){if(b(t))return!1;var n=void 0===t?"undefined":l(t);return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!u(t))||(_.test(t)||!d.test(t)||null!=e&&t in Object(e))}function s(t){if("string"==typeof t||u(t))return t;var e=t+"";return"0"==e&&1/t==-h?"-0":e}function a(t){return!!t&&"object"==(void 0===t?"undefined":l(t))}function u(t){return"symbol"==(void 0===t?"undefined":l(t))||a(t)&&m.call(t)==p}function c(t,e,n){var i=null==t?void 0:r(t,e);return void 0===i?n:i}var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f=n(5),h=1/0,p="[object Symbol]",d=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,_=/^\w*$/,y=Object.prototype,m=y.toString,b=Array.isArray;t.exports=c},function(e,n){e.exports=t},function(t,e,n){"use strict";(function(t,n){function r(t){return t&&t.Object===Object?t:null}function i(t){if("string"==typeof t)return t;if(s(t))return E?E.call(t):"";var e=t+"";return"0"==e&&1/t==-u?"-0":e}function o(t){return!!t&&"object"==(void 0===t?"undefined":a(t))}function s(t){return"symbol"==(void 0===t?"undefined":a(t))||o(t)&&v.call(t)==c}var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=1/0,c="[object Symbol]",l={function:!0,object:!0},f=l[a(e)]&&e&&!e.nodeType?e:void 0,h=l[a(t)]&&t&&!t.nodeType?t:void 0,p=r(f&&h&&"object"==(void 0===n?"undefined":a(n))&&n),d=r(l["undefined"==typeof self?"undefined":a(self)]&&self),_=r(l["undefined"==typeof window?"undefined":a(window)]&&window),y=r(l[a(void 0)]&&void 0),m=p||_!==(y&&y.window)&&_||d||y||Function("return this")(),b=Object.prototype,v=b.toString,w=m.Symbol,T=w?w.prototype:void 0,E=T?T.toString:void 0;t.exports=i}).call(e,n(1)(t),n(0))},function(t,e,n){"use strict";(function(t,r){function i(t){return t&&t.Object===Object?t:null}function o(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function s(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function a(){this.__data__=at?at(null):{}}function u(t){return this.has(t)&&delete this.__data__[t]}function c(t){var e=this.__data__;if(at){var n=e[t];return n===L?void 0:n}return nt.call(e,t)?e[t]:void 0}function l(t){var e=this.__data__;return at?void 0!==e[t]:nt.call(e,t)}function f(t,e){return this.__data__[t]=at&&void 0===e?L:e,this}function h(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function p(){this.__data__=[]}function d(t){var e=this.__data__,n=P(e,t);return!(n<0)&&(n==e.length-1?e.pop():ot.call(e,n,1),!0)}function _(t){var e=this.__data__,n=P(e,t);return n<0?void 0:e[n][1]}function y(t){return P(this.__data__,t)>-1}function m(t,e){var n=this.__data__,r=P(n,t);return r<0?n.push([t,e]):n[r][1]=e,this}function b(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function v(){this.__data__={hash:new s,map:new(st||h),string:new s}}function w(t){return k(this,t).delete(t)}function T(t){return k(this,t).get(t)}function E(t){return k(this,t).has(t)}function g(t,e){return k(this,t).set(t,e),this}function P(t,e){for(var n=t.length;n--;)if(C(t[n][0],e))return n;return-1}function k(t,e){var n=t.__data__;return O(e)?n["string"==typeof e?"string":"hash"]:n.map}function S(t,e){var n=t[e];return B(n)?n:void 0}function O(t){var e=void 0===t?"undefined":M(t);return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}function N(t){if(null!=t){try{return et.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function x(t,e){if("function"!=typeof t||e&&"function"!=typeof e)throw new TypeError(I);var n=function n(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var s=t.apply(this,r);return n.cache=o.set(i,s),s};return n.cache=new(x.Cache||b),n}function C(t,e){return t===e||t!==t&&e!==e}function R(t){var e=A(t)?rt.call(t):"";return e==H||e==U}function A(t){var e=void 0===t?"undefined":M(t);return!!t&&("object"==e||"function"==e)}function B(t){return!!A(t)&&(R(t)||o(t)?it:V).test(N(t))}function F(t){return null==t?"":j(t)}var M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j=n(4),I="Expected a function",L="__lodash_hash_undefined__",H="[object Function]",U="[object GeneratorFunction]",D=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g,G=/[\\^$.*+?()[\]{}|]/g,Y=/\\(\\)?/g,V=/^\[object .+?Constructor\]$/,$={function:!0,object:!0},z=$[M(e)]&&e&&!e.nodeType?e:void 0,K=$[M(t)]&&t&&!t.nodeType?t:void 0,W=i(z&&K&&"object"==(void 0===r?"undefined":M(r))&&r),q=i($["undefined"==typeof self?"undefined":M(self)]&&self),J=i($["undefined"==typeof window?"undefined":M(window)]&&window),X=i($[M(void 0)]&&void 0),Q=W||J!==(X&&X.window)&&J||q||X||Function("return this")(),Z=Array.prototype,tt=Object.prototype,et=Function.prototype.toString,nt=tt.hasOwnProperty,rt=tt.toString,it=RegExp("^"+et.call(nt).replace(G,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ot=Z.splice,st=S(Q,"Map"),at=S(Object,"create");s.prototype.clear=a,s.prototype.delete=u,s.prototype.get=c,s.prototype.has=l,s.prototype.set=f,h.prototype.clear=p,h.prototype.delete=d,h.prototype.get=_,h.prototype.has=y,h.prototype.set=m,b.prototype.clear=v,b.prototype.delete=w,b.prototype.get=T,b.prototype.has=E,b.prototype.set=g;var ut=x(function(t){var e=[];return F(t).replace(D,function(t,n,r,i){e.push(r?i.replace(Y,"$1"):n||t)}),e});x.Cache=b,t.exports=ut}).call(e,n(1)(t),n(0))},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=n(3),u=n(2),c=function(t){return t&&t.__esModule?t:{default:t}}(u),l=function(t){function e(t){r(this,e);var n=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n._runEach=(0,c.default)(t,"options.clapprStats.runEach",5e3),n._onReport=(0,c.default)(t,"options.clapprStats.onReport",n._defaultReport),n._uriToMeasureLatency=(0,c.default)(t,"options.clapprStats.uriToMeasureLatency"),n._urisToMeasureBandwidth=(0,c.default)(t,"options.clapprStats.urisToMeasureBandwidth"),n._runBandwidthTestEvery=(0,c.default)(t,"options.clapprStats.runBandwidthTestEvery",10),n._bwMeasureCount=0,n._completion={watch:(0,c.default)(t,"options.clapprStats.onCompletion",[]),lastCalled:0},n._newMetrics(),n.on(e.REPORT_EVENT,n._onReport),n}return o(e,t),s(e,[{key:"_now",value:function(){return window.performance&&"function"==typeof window.performance.now?window.performance.now():new Date}},{key:"_inc",value:function(t){this._metrics.counters[t]+=1}},{key:"_timerHasStarted",value:function(t){return void 0!==this["_start"+t]}},{key:"_start",value:function(t){this["_start"+t]=this._now()}},{key:"_stop",value:function(t){this._metrics.timers[t]+=this._now()-this["_start"+t]}},{key:"_defaultReport",value:function(t){console.log(t)}},{key:"name",get:function(){return"clappr_stats"}},{key:"_playbackName",get:function(){return this.container.playback.name}},{key:"_playbackType",get:function(){return this.container.getPlaybackType()}}]),s(e,[{key:"bindEvents",value:function(){var t=this;this.listenTo(this.container,a.Events.CONTAINER_BITRATE,this.onBitrate),this.listenTo(this.container,a.Events.CONTAINER_STOP,this.stopReporting),this.listenTo(this.container,a.Events.CONTAINER_ENDED,this.stopReporting),this.listenToOnce(this.container.playback,a.Events.PLAYBACK_PLAY_INTENT,this.startTimers),this.listenToOnce(this.container,a.Events.CONTAINER_PLAY,this.onFirstPlaying),this.listenTo(this.container,a.Events.CONTAINER_PLAY,this.onPlay),this.listenTo(this.container,a.Events.CONTAINER_PAUSE,this.onPause),this.listenToOnce(this.container,a.Events.CONTAINER_STATE_BUFFERING,this.onBuffering),this.listenTo(this.container,a.Events.CONTAINER_SEEK,this.onSeek),this.listenTo(this.container,a.Events.CONTAINER_ERROR,function(){return t._inc("error")}),this.listenTo(this.container,a.Events.CONTAINER_FULLSCREEN,function(){return t._inc("fullscreen")}),this.listenTo(this.container,a.Events.CONTAINER_PLAYBACKDVRSTATECHANGED,function(e){e&&t._inc("dvrUsage")}),this.listenTo(this.container.playback,a.Events.PLAYBACK_PROGRESS,this.onProgress),this.listenTo(this.container.playback,a.Events.PLAYBACK_TIMEUPDATE,this.onTimeUpdate)}},{key:"onBitrate",value:function(t){var e=parseInt((0,c.default)(t,"bitrate",0),10),n=this._now();if(this._metrics.extra.bitratesHistory.length>0){var r=this._metrics.extra.bitratesHistory[this._metrics.extra.bitratesHistory.length-1];r.end=n,r.time=n-r.start}this._metrics.extra.bitratesHistory.push({start:this._now(),bitrate:e}),this._inc("changeLevel")}},{key:"stopReporting",value:function(){this._buildReport(),clearInterval(this._intervalId),this._newMetrics(),this.stopListening(),this.bindEvents()}},{key:"startTimers",value:function(){this._intervalId=setInterval(this._buildReport.bind(this),this._runEach),this._start("session"),this._start("startup")}},{key:"onFirstPlaying",value:function(){this.listenTo(this.container,a.Events.CONTAINER_TIMEUPDATE,this.onContainerUpdateWhilePlaying),this._start("watch"),this._stop("startup")}},{key:"playAfterPause",value:function(){this._stop("pause"),this._start("watch")}},{key:"onPlay",value:function(){this._inc("play")}},{key:"onPause",value:function(){this._stop("watch"),this._start("pause"),this._inc("pause"),this.listenToOnce(this.container,a.Events.CONTAINER_PLAY,this.playAfterPause)}},{key:"onSeek",value:function(t){this._inc("seek"),this._metrics.extra.watchHistory.push([1e3*t,1e3*t])}},{key:"onTimeUpdate",value:function(t){var e=1e3*t.current,n=1e3*t.total,r=this._metrics.extra.watchHistory.length;if(this._metrics.extra.duration=n,this._metrics.extra.currentTime=e,this._metrics.extra.watchedPercentage=e/n*100,0===r?this._metrics.extra.watchHistory.push([e,e]):this._metrics.extra.watchHistory[r-1][1]=e,this._metrics.extra.bitratesHistory.length>0){var i=this._metrics.extra.bitratesHistory[this._metrics.extra.bitratesHistory.length-1];i.end||(i.time=this._now()-i.start)}this._onCompletion()}},{key:"onContainerUpdateWhilePlaying",value:function(){this.container.playback.isPlaying()&&(this._stop("watch"),this._start("watch"))}},{key:"onBuffering",value:function(){this._inc("buffering"),this._start("buffering"),this.listenToOnce(this.container,a.Events.CONTAINER_STATE_BUFFERFULL,this.onBufferfull)}},{key:"onBufferfull",value:function(){this._stop("buffering"),this.listenToOnce(this.container,a.Events.CONTAINER_STATE_BUFFERING,this.onBuffering)}},{key:"onProgress",value:function(t){this._metrics.extra.buffersize=1e3*t.current}},{key:"_newMetrics",value:function(){this._metrics={counters:{play:0,pause:0,error:0,buffering:0,decodedFrames:0,droppedFrames:0,fps:0,changeLevel:0,seek:0,fullscreen:0,dvrUsage:0},timers:{startup:0,watch:0,pause:0,buffering:0,session:0,latency:0},extra:{playbackName:"",playbackType:"",bitratesHistory:[],bitrateWeightedMean:0,bitrateMostUsed:0,buffersize:0,watchHistory:[],watchedPercentage:0,bufferingPercentage:0,bandwidth:0,duration:0,currentTime:0}}}},{key:"_onCompletion",value:function(){var t=this._metrics.extra.watchedPercentage,n=this._completion.watch,r=t<=this._completion.lastCalled;-1==n.indexOf(t)||r||(a.Log.info(this.name+" PERCENTAGE_EVENT: "+t),this._completion.lastCalled=t,this.trigger(e.PERCENTAGE_EVENT,t))}},{key:"_buildReport",value:function(){this._stop("session"),this._start("session"),this._metrics.extra.playbackName=this._playbackName,this._metrics.extra.playbackType=this._playbackType,this._calculateBitrates(),this._calculatePercentages(),this._fetchFPS(),this._measureLatency(),this._measureBandwidth(),this.trigger(e.REPORT_EVENT,JSON.parse(JSON.stringify(this._metrics)))}},{key:"_fetchFPS",value:function(){var t={html5_video:this._html5FetchFPS,hls:this._html5FetchFPS,dash_shaka_playback:this._html5FetchFPS};t[this._playbackName]&&t[this._playbackName].call(this)}},{key:"_calculateBitrates",value:function(){this._metrics.extra.bitrateWeightedMean=this._metrics.extra.bitratesHistory.map(function(t){return t.bitrate*t.time}).reduce(function(t,e){return t+e},0)/this._metrics.timers.watch,this._metrics.extra.bitrateMostUsed=this._metrics.extra.bitratesHistory.slice().sort(function(t,e){return t.time<e.time})[0]}},{key:"_calculatePercentages",value:function(){this._metrics.extra.duration>0&&(this._metrics.extra.bufferingPercentage=this._metrics.timers.buffering/this._metrics.extra.duration*100)}},{key:"_html5FetchFPS",value:function(){var t=this.container.playback.el,e=t.webkitDecodedFrameCount||t.mozDecodedFrames||0,n=t.webkitDroppedFrameCount||t.mozParsedFrames-t.mozDecodedFrames||0,r=e-(this._lastDecodedFramesCount||0);this._metrics.counters.decodedFrames=e,this._metrics.counters.droppedFrames=n,this._metrics.counters.fps=r/(this._runEach/1e3),this._lastDecodedFramesCount=e}},{key:"_measureLatency",value:function(){var t=this;if(this._uriToMeasureLatency){var e,n=[],r=function(){e=n[2]-n[1],t._metrics.timers.latency=e};!function e(){if(n.push(t._now()),n.length>2)r();else{var i=new Image;i.onload=e,i.src=t._uriToMeasureLatency+"?"+Math.random()+"="+t._now()}}()}}},{key:"_measureBandwidth",value:function(){var t=this;if(this._urisToMeasureBandwidth&&this._bwMeasureCount%this._runBandwidthTestEvery==0){var e=0,n=function(n){var r=(t._urisToMeasureBandwidth[e-1].end-t._urisToMeasureBandwidth[e-1].start)/1e3,i=8*n.loaded/r,o=i/1e3;t._metrics.extra.bandwidth=o,t._urisToMeasureBandwidth.forEach(function(t){t.start=0,t.end=0,t.expired=!1,clearTimeout(t.timer)})};!function r(i){if(e>0&&(t._urisToMeasureBandwidth[e-1].end=t._now(),clearTimeout(t._urisToMeasureBandwidth[e-1].timer)),e>=t._urisToMeasureBandwidth.length||e>0&&t._urisToMeasureBandwidth[e-1].expired)n(i);else{var o=new XMLHttpRequest;o.open("GET",t._urisToMeasureBandwidth[e].url,!0),o.responseType="arraybuffer",o.onload=o.onabort=r,t._urisToMeasureBandwidth[e].start=t._now(),t._urisToMeasureBandwidth[e].timer=setTimeout(function(e){t._urisToMeasureBandwidth[e].expired=!0,o.abort()},t._urisToMeasureBandwidth[e].timeout,e),o.send()}e++}()}this._bwMeasureCount++}}]),e}(a.ContainerPlugin);e.default=l,l.REPORT_EVENT="clappr:stats:report",l.PERCENTAGE_EVENT="clappr:stats:percentage",t.exports=e.default}])});