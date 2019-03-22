/*! jQuery Mobile v1.4.2 | Copyright 2010, 2014 jQuery Foundation, Inc. | jquery.org/license */

(function(e,t,n){typeof define=="function"&&define.amd?define(["jquery"],function(r){return n(r,e,t),r.mobile}):n(e.jQuery,e,t)})(this,document,function(e,t,n,r){(function(e,t,n,r){function T(e){while(e&&typeof e.originalEvent!="undefined")e=e.originalEvent;return e}function N(t,n){var i=t.type,s,o,a,l,c,h,p,d,v;t=e.Event(t),t.type=n,s=t.originalEvent,o=e.event.props,i.search(/^(mouse|click)/)>-1&&(o=f);if(s)for(p=o.length,l;p;)l=o[--p],t[l]=s[l];i.search(/mouse(down|up)|click/)>-1&&!t.which&&(t.which=1);if(i.search(/^touch/)!==-1){a=T(s),i=a.touches,c=a.changedTouches,h=i&&i.length?i[0]:c&&c.length?c[0]:r;if(h)for(d=0,v=u.length;d<v;d++)l=u[d],t[l]=h[l]}return t}function C(t){var n={},r,s;while(t){r=e.data(t,i);for(s in r)r[s]&&(n[s]=n.hasVirtualBinding=!0);t=t.parentNode}return n}function k(t,n){var r;while(t){r=e.data(t,i);if(r&&(!n||r[n]))return t;t=t.parentNode}return null}function L(){g=!1}function A(){g=!0}function O(){E=0,v.length=0,m=!1,A()}function M(){L()}function _(){D(),c=setTimeout(function(){c=0,O()},e.vmouse.resetTimerDuration)}function D(){c&&(clearTimeout(c),c=0)}function P(t,n,r){var i;if(r&&r[t]||!r&&k(n.target,t))i=N(n,t),e(n.target).trigger(i);return i}function H(t){var n=e.data(t.target,s),r;!m&&(!E||E!==n)&&(r=P("v"+t.type,t),r&&(r.isDefaultPrevented()&&t.preventDefault(),r.isPropagationStopped()&&t.stopPropagation(),r.isImmediatePropagationStopped()&&t.stopImmediatePropagation()))}function B(t){var n=T(t).touches,r,i,o;n&&n.length===1&&(r=t.target,i=C(r),i.hasVirtualBinding&&(E=w++,e.data(r,s,E),D(),M(),d=!1,o=T(t).touches[0],h=o.pageX,p=o.pageY,P("vmouseover",t,i),P("vmousedown",t,i)))}function j(e){if(g)return;d||P("vmousecancel",e,C(e.target)),d=!0,_()}function F(t){if(g)return;var n=T(t).touches[0],r=d,i=e.vmouse.moveDistanceThreshold,s=C(t.target);d=d||Math.abs(n.pageX-h)>i||Math.abs(n.pageY-p)>i,d&&!r&&P("vmousecancel",t,s),P("vmousemove",t,s),_()}function I(e){if(g)return;A();var t=C(e.target),n,r;P("vmouseup",e,t),d||(n=P("vclick",e,t),n&&n.isDefaultPrevented()&&(r=T(e).changedTouches[0],v.push({touchID:E,x:r.clientX,y:r.clientY}),m=!0)),P("vmouseout",e,t),d=!1,_()}function q(t){var n=e.data(t,i),r;if(n)for(r in n)if(n[r])return!0;return!1}function R(){}function U(t){var n=t.substr(1);return{setup:function(){q(this)||e.data(this,i,{});var r=e.data(this,i);r[t]=!0,l[t]=(l[t]||0)+1,l[t]===1&&b.bind(n,H),e(this).bind(n,R),y&&(l.touchstart=(l.touchstart||0)+1,l.touchstart===1&&b.bind("touchstart",B).bind("touchend",I).bind("touchmove",F).bind("scroll",j))},teardown:function(){--l[t],l[t]||b.unbind(n,H),y&&(--l.touchstart,l.touchstart||b.unbind("touchstart",B).unbind("touchmove",F).unbind("touchend",I).unbind("scroll",j));var r=e(this),s=e.data(this,i);s&&(s[t]=!1),r.unbind(n,R),q(this)||r.removeData(i)}}}var i="virtualMouseBindings",s="virtualTouchID",o="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),u="clientX clientY pageX pageY screenX screenY".split(" "),a=e.event.mouseHooks?e.event.mouseHooks.props:[],f=e.event.props.concat(a),l={},c=0,h=0,p=0,d=!1,v=[],m=!1,g=!1,y="addEventListener"in n,b=e(n),w=1,E=0,S,x;e.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500};for(x=0;x<o.length;x++)e.event.special[o[x]]=U(o[x]);y&&n.addEventListener("click",function(t){var n=v.length,r=t.target,i,o,u,a,f,l;if(n){i=t.clientX,o=t.clientY,S=e.vmouse.clickDistanceThreshold,u=r;while(u){for(a=0;a<n;a++){f=v[a],l=0;if(u===r&&Math.abs(f.x-i)<S&&Math.abs(f.y-o)<S||e.data(u,s)===f.touchID){t.preventDefault(),t.stopPropagation();return}}u=u.parentNode}}},!0)})(e,t,n),function(e){e.mobile={}}(e),function(e,t){var r={touch:"ontouchend"in n};e.mobile.support=e.mobile.support||{},e.extend(e.support,r),e.extend(e.mobile.support,r)}(e),function(e,t,r){function l(t,n,i,s){var o=i.type;i.type=n,s?e.event.trigger(i,r,t):e.event.dispatch.call(t,i),i.type=o}var i=e(n),s=e.mobile.support.touch,o="touchmove scroll",u=s?"touchstart":"mousedown",a=s?"touchend":"mouseup",f=s?"touchmove":"mousemove";e.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "),function(t,n){e.fn[n]=function(e){return e?this.bind(n,e):this.trigger(n)},e.attrFn&&(e.attrFn[n]=!0)}),e.event.special.scrollstart={enabled:!0,setup:function(){function s(e,n){r=n,l(t,r?"scrollstart":"scrollstop",e)}var t=this,n=e(t),r,i;n.bind(o,function(t){if(!e.event.special.scrollstart.enabled)return;r||s(t,!0),clearTimeout(i),i=setTimeout(function(){s(t,!1)},50)})},teardown:function(){e(this).unbind(o)}},e.event.special.tap={tapholdThreshold:750,emitTapOnTaphold:!0,setup:function(){var t=this,n=e(t),r=!1;n.bind("vmousedown",function(s){function a(){clearTimeout(u)}function f(){a(),n.unbind("vclick",c).unbind("vmouseup",a),i.unbind("vmousecancel",f)}function c(e){f(),!r&&o===e.target?l(t,"tap",e):r&&e.stopPropagation()}r=!1;if(s.which&&s.which!==1)return!1;var o=s.target,u;n.bind("vmouseup",a).bind("vclick",c),i.bind("vmousecancel",f),u=setTimeout(function(){e.event.special.tap.emitTapOnTaphold||(r=!0),l(t,"taphold",e.Event("taphold",{target:o}))},e.event.special.tap.tapholdThreshold)})},teardown:function(){e(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup"),i.unbind("vmousecancel")}},e.event.special.swipe={scrollSupressionThreshold:30,durationThreshold:1e3,horizontalDistanceThreshold:30,verticalDistanceThreshold:30,getLocation:function(e){var n=t.pageXOffset,r=t.pageYOffset,i=e.clientX,s=e.clientY;if(e.pageY===0&&Math.floor(s)>Math.floor(e.pageY)||e.pageX===0&&Math.floor(i)>Math.floor(e.pageX))i-=n,s-=r;else if(s<e.pageY-r||i<e.pageX-n)i=e.pageX-n,s=e.pageY-r;return{x:i,y:s}},start:function(t){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t,r=e.event.special.swipe.getLocation(n);return{time:(new Date).getTime(),coords:[r.x,r.y],origin:e(t.target)}},stop:function(t){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t,r=e.event.special.swipe.getLocation(n);return{time:(new Date).getTime(),coords:[r.x,r.y]}},handleSwipe:function(t,n,r,i){if(n.time-t.time<e.event.special.swipe.durationThreshold&&Math.abs(t.coords[0]-n.coords[0])>e.event.special.swipe.horizontalDistanceThreshold&&Math.abs(t.coords[1]-n.coords[1])<e.event.special.swipe.verticalDistanceThreshold){var s=t.coords[0]>n.coords[0]?"swipeleft":"swiperight";return l(r,"swipe",e.Event("swipe",{target:i,swipestart:t,swipestop:n}),!0),l(r,s,e.Event(s,{target:i,swipestart:t,swipestop:n}),!0),!0}return!1},eventInProgress:!1,setup:function(){var t,n=this,r=e(n),s={};t=e.data(this,"mobile-events"),t||(t={length:0},e.data(this,"mobile-events",t)),t.length++,t.swipe=s,s.start=function(t){if(e.event.special.swipe.eventInProgress)return;e.event.special.swipe.eventInProgress=!0;var r,o=e.event.special.swipe.start(t),u=t.target,l=!1;s.move=function(t){if(!o)return;r=e.event.special.swipe.stop(t),l||(l=e.event.special.swipe.handleSwipe(o,r,n,u),l&&(e.event.special.swipe.eventInProgress=!1)),Math.abs(o.coords[0]-r.coords[0])>e.event.special.swipe.scrollSupressionThreshold&&t.preventDefault()},s.stop=function(){l=!0,e.event.special.swipe.eventInProgress=!1,i.off(f,s.move),s.move=null},i.on(f,s.move).one(a,s.stop)},r.on(u,s.start)},teardown:function(){var t,n;t=e.data(this,"mobile-events"),t&&(n=t.swipe,delete t.swipe,t.length--,t.length===0&&e.removeData(this,"mobile-events")),n&&(n.start&&e(this).off(u,n.start),n.move&&i.off(f,n.move),n.stop&&i.off(a,n.stop))}},e.each({scrollstop:"scrollstart",taphold:"tap",swipeleft:"swipe",swiperight:"swipe"},function(t,n){e.event.special[t]={setup:function(){e(this).bind(n,e.noop)},teardown:function(){e(this).unbind(n)}}})}(e,this),function(e,t,n){e.extend(e.mobile,{version:"1.4.2",subPageUrlKey:"ui-page",hideUrlBar:!0,keepNative:":jqmData(role='none'), :jqmData(role='nojs')",activePageClass:"ui-page-active",activeBtnClass:"ui-btn-active",focusClass:"ui-focus",ajaxEnabled:!0,hashListeningEnabled:!0,linkBindingEnabled:!0,defaultPageTransition:"fade",maxTransitionWidth:!1,minScrollBack:0,defaultDialogTransition:"pop",pageLoadErrorMessage:"Error Loading Page",pageLoadErrorMessageTheme:"a",phonegapNavigationEnabled:!1,autoInitializePage:!0,pushStateEnabled:!0,ignoreContentEnabled:!1,buttonMarkup:{hoverDelay:200},dynamicBaseEnabled:!0,pageContainer:e(),allowCrossDomainPages:!1,dialogHashKey:"&ui-state=dialog"})}(e,this),function(e,t,n){var r={},i=e.find,s=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,o=/:jqmData\(([^)]*)\)/g;e.extend(e.mobile,{ns:"",getAttribute:function(t,n){var r;t=t.jquery?t[0]:t,t&&t.getAttribute&&(r=t.getAttribute("data-"+e.mobile.ns+n));try{r=r==="true"?!0:r==="false"?!1:r==="null"?null:+r+""===r?+r:s.test(r)?JSON.parse(r):r}catch(i){}return r},nsNormalizeDict:r,nsNormalize:function(t){return r[t]||(r[t]=e.camelCase(e.mobile.ns+t))},closestPageData:function(e){return e.closest(":jqmData(role='page'), :jqmData(role='dialog')").data("mobile-page")}}),e.fn.jqmData=function(t,r){var i;return typeof t!="undefined"&&(t&&(t=e.mobile.nsNormalize(t)),arguments.length<2||r===n?i=this.data(t):i=this.data(t,r)),i},e.jqmData=function(t,n,r){var i;return typeof n!="undefined"&&(i=e.data(t,n?e.mobile.nsNormalize(n):n,r)),i},e.fn.jqmRemoveData=function(t){return this.removeData(e.mobile.nsNormalize(t))},e.jqmRemoveData=function(t,n){return e.removeData(t,e.mobile.nsNormalize(n))},e.find=function(t,n,r,s){return t.indexOf(":jqmData")>-1&&(t=t.replace(o,"[data-"+(e.mobile.ns||"")+"$1]")),i.call(this,t,n,r,s)},e.extend(e.find,i)}(e,this),function(e,t){function s(t,n){var r,i,s,u=t.nodeName.toLowerCase();return"area"===u?(r=t.parentNode,i=r.name,!t.href||!i||r.nodeName.toLowerCase()!=="map"?!1:(s=e("img[usemap=#"+i+"]")[0],!!s&&o(s))):(/input|select|textarea|button|object/.test(u)?!t.disabled:"a"===u?t.href||n:n)&&o(t)}function o(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return e.css(this,"visibility")==="hidden"}).length}var r=0,i=/^ui-id-\d+$/;e.ui=e.ui||{},e.extend(e.ui,{version:"c0ab71056b936627e8a7821f03c044aec6280a40",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({focus:function(t){return function(n,r){return typeof n=="number"?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),r&&r.call(t)},n)}):t.apply(this,arguments)}}(e.fn.focus),scrollParent:function(){var t;return e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?t=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):t=this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(this[0].ownerDocument||n):t},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++r)})},removeUniqueId:function(){return this.each(function(){i.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(n){return!!e.data(n,t)}}):function(t,n,r){return!!e.data(t,r[3])},focusable:function(t){return s(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var n=e.attr(t,"tabindex"),r=isNaN(n);return(r||n>=0)&&s(t,!r)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(n,r){function u(t,n,r,s){return e.each(i,function(){n-=parseFloat(e.css(t,"padding"+this))||0,r&&(n-=parseFloat(e.css(t,"border"+this+"Width"))||0),s&&(n-=parseFloat(e.css(t,"margin"+this))||0)}),n}var i=r==="Width"?["Left","Right"]:["Top","Bottom"],s=r.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+r]=function(n){return n===t?o["inner"+r].call(this):this.each(function(){e(this).css(s,u(this,n)+"px")})},e.fn["outer"+r]=function(t,n){return typeof t!="number"?o["outer"+r].call(this,t):this.each(function(){e(this).css(s,u(this,t,!0,n)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(n){return arguments.length?t.call(this,e.camelCase(n)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.support.selectstart="onselectstart"in n.createElement("div"),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(r){if(r!==t)return this.css("zIndex",r);if(this.length){var i=e(this[0]),s,o;while(i.length&&i[0]!==n){s=i.css("position");if(s==="absolute"||s==="relative"||s==="fixed"){o=parseInt(i.css("zIndex"),10);if(!isNaN(o)&&o!==0)return o}i=i.parent()}}return 0}}),e.ui.plugin={add:function(t,n,r){var i,s=e.ui[t].prototype;for(i in r)s.plugins[i]=s.plugins[i]||[],s.plugins[i].push([n,r[i]])},call:function(e,t,n,r){var i,s=e.plugins[t];if(!s)return;if(!r&&(!e.element[0].parentNode||e.element[0].parentNode.nodeType===11))return;for(i=0;i<s.length;i++)e.options[s[i][0]]&&s[i][1].apply(e.element,n)}}}(e),function(e,t,r){var i=function(t,n){var r=t.parent(),i=[],s=r.children(":jqmData(role='header')"),o=t.children(":jqmData(role='header')"),u=r.children(":jqmData(role='footer')"),a=t.children(":jqmData(role='footer')");return o.length===0&&s.length>0&&(i=i.concat(s.toArray())),a.length===0&&u.length>0&&(i=i.concat(u.toArray())),e.each(i,function(t,r){n-=e(r).outerHeight()}),Math.max(0,n)};e.extend(e.mobile,{window:e(t),document:e(n),keyCode:e.ui.keyCode,behaviors:{},silentScroll:function(n){e.type(n)!=="number"&&(n=e.mobile.defaultHomeScroll),e.event.special.scrollstart.enabled=!1,setTimeout(function(){t.scrollTo(0,n),e.mobile.document.trigger("silentscroll",{x:0,y:n})},20),setTimeout(function(){e.event.special.scrollstart.enabled=!0},150)},getClosestBaseUrl:function(t){var n=e(t).closest(".ui-page").jqmData("url"),r=e.mobile.path.documentBase.hrefNoHash;if(!e.mobile.dynamicBaseEnabled||!n||!e.mobile.path.isPath(n))n=r;return e.mobile.path.makeUrlAbsolute(n,r)},removeActiveLinkClass:function(t){!!e.mobile.activeClickedLink&&(!e.mobile.activeClickedLink.closest("."+e.mobile.activePageClass).length||t)&&e.mobile.activeClickedLink.removeClass(e.mobile.activeBtnClass),e.mobile.activeClickedLink=null},getInheritedTheme:function(e,t){var n=e[0],r="",i=/ui-(bar|body|overlay)-([a-z])\b/,s,o;while(n){s=n.className||"";if(s&&(o=i.exec(s))&&(r=o[2]))break;n=n.parentNode}return r||t||"a"},enhanceable:function(e){return this.haveParents(e,"enhance")},hijackable:function(e){return this.haveParents(e,"ajax")},haveParents:function(t,n){if(!e.mobile.ignoreContentEnabled)return t;var r=t.length,i=e(),s,o,u,a,f;for(a=0;a<r;a++){o=t.eq(a),u=!1,s=t[a];while(s){f=s.getAttribute?s.getAttribute("data-"+e.mobile.ns+n):"";if(f==="false"){u=!0;break}s=s.parentNode}u||(i=i.add(o))}return i},getScreenHeight:function(){return t.innerHeight||e.mobile.window.height()},resetActivePageHeight:function(t){var n=e("."+e.mobile.activePageClass),r=n.height(),s=n.outerHeight(!0);t=i(n,typeof t=="number"?t:e.mobile.getScreenHeight()),n.css("min-height",t-(s-r))},loading:function(){var t=this.loading._widget||e(e.mobile.loader.prototype.defaultHtml).loader(),n=t.loader.apply(t,arguments);return this.loading._widget=t,n}}),e.addDependents=function(t,n){var r=e(t),i=r.jqmData("dependents")||e();r.jqmData("dependents",e(i).add(n))},e.fn.extend({removeWithDependents:function(){e.removeWithDependents(this)},enhanceWithin:function(){var t,n={},r=e.mobile.page.prototype.keepNativeSelector(),i=this;e.mobile.nojs&&e.mobile.nojs(this),e.mobile.links&&e.mobile.links(this),e.mobile.degradeInputsWithin&&e.mobile.degradeInputsWithin(this),e.fn.buttonMarkup&&this.find(e.fn.buttonMarkup.initSelector).not(r).jqmEnhanceable().buttonMarkup(),e.fn.fieldcontain&&this.find(":jqmData(role='fieldcontain')").not(r).jqmEnhanceable().fieldcontain(),e.each(e.mobile.widgets,function(t,s){if(s.initSelector){var o=e.mobile.enhanceable(i.find(s.initSelector));o.length>0&&(o=o.not(r)),o.length>0&&(n[s.prototype.widgetName]=o)}});for(t in n)n[t][t]();return this},addDependents:function(t){e.addDependents(this,t)},getEncodedText:function(){return e("<a>").text(this.text()).html()},jqmEnhanceable:function(){return e.mobile.enhanceable(this)},jqmHijackable:function(){return e.mobile.hijackable(this)}}),e.removeWithDependents=function(t){var n=e(t);(n.jqmData("dependents")||e()).remove(),n.remove()},e.addDependents=function(t,n){var r=e(t),i=r.jqmData("dependents")||e();r.jqmData("dependents",e(i).add(n))},e.find.matches=function(t,n){return e.find(t,null,null,n)},e.find.matchesSelector=function(t,n){return e.find(n,null,null,[t]).length>0}}(e,this),function(e,r){t.matchMedia=t.matchMedia||function(e,t){var n,r=e.documentElement,i=r.firstElementChild||r.firstChild,s=e.createElement("body"),o=e.createElement("div");return o.id="mq-test-1",o.style.cssText="position:absolute;top:-100em",s.style.background="none",s.appendChild(o),function(e){return o.innerHTML='&shy;<style media="'+e+'"> #mq-test-1 { width: 42px; }</style>',r.insertBefore(s,i),n=o.offsetWidth===42,r.removeChild(s),{matches:n,media:e}}}(n),e.mobile.media=function(e){return t.matchMedia(e).matches}}(e),function(e,n){e.extend(e.support,{orientation:"orientation"in t&&"onorientationchange"in t})}(e),function(e,r){function i(e){var t=e.charAt(0).toUpperCase()+e.substr(1),n=(e+" "+u.join(t+" ")+t).split(" "),i;for(i in n)if(o[n[i]]!==r)return!0}function h(){var n=t,r=!!n.document.createElementNS&&!!n.document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect&&(!n.opera||navigator.userAgent.indexOf("Chrome")!==-1),i=function(t){(!t||!r)&&e("html").addClass("ui-nosvg")},s=new n.Image;s.onerror=function(){i(!1)},s.onload=function(){i(s.width===1&&s.height===1)},s.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="}function p(){var i="transform-3d",o=e.mobile.media("(-"+u.join("-"+i+"),(-")+"-"+i+"),("+i+")"),a,f,l;if(o)return!!o;a=n.createElement("div"),f={MozTransform:"-moz-transform",transform:"transform"},s.append(a);for(l in f)a.style[l]!==r&&(a.style[l]="translate3d( 100px, 1px, 1px )",o=t.getComputedStyle(a).getPropertyValue(f[l]));return!!o&&o!=="none"}function d(){var t=location.protocol+"//"+location.host+location.pathname+"ui-dir/",n=e("head base"),r=null,i="",o,u;return n.length?i=n.attr("href"):n=r=e("<base>",{href:t}).appendTo("head"),o=e("<a href='testurl' />").prependTo(s),u=o[0].href,n[0].href=i||location.pathname,r&&r.remove(),u.indexOf(t)===0}function v(){var e=n.createElement("x"),r=n.documentElement,i=t.getComputedStyle,s;return"pointerEvents"in e.style?(e.style.pointerEvents="auto",e.style.pointerEvents="x",r.appendChild(e),s=i&&i(e,"").pointerEvents==="auto",r.removeChild(e),!!s):!1}function m(){var e=n.createElement("div");return typeof e.getBoundingClientRect!="undefined"}function g(){var e=t,n=navigator.userAgent,r=navigator.platform,i=n.match(/AppleWebKit\/([0-9]+)/),s=!!i&&i[1],o=n.match(/Fennec\/([0-9]+)/),u=!!o&&o[1],a=n.match(/Opera Mobi\/([0-9]+)/),f=!!a&&a[1];return(r.indexOf("iPhone")>-1||r.indexOf("iPad")>-1||r.indexOf("iPod")>-1)&&s&&s<534||e.operamini&&{}.toString.call(e.operamini)==="[object OperaMini]"||a&&f<7458||n.indexOf("Android")>-1&&s&&s<533||u&&u<6||"palmGetResource"in t&&s&&s<534||n.indexOf("MeeGo")>-1&&n.indexOf("NokiaBrowser/8.5.0")>-1?!1:!0}var s=e("<body>").prependTo("html"),o=s[0].style,u=["Webkit","Moz","O"],a="palmGetResource"in t,f=t.operamini&&{}.toString.call(t.operamini)==="[object OperaMini]",l=t.blackberry&&!i("-webkit-transform"),c;e.extend(e.mobile,{browser:{}}),e.mobile.browser.oldIE=function(){var e=3,t=n.createElement("div"),r=t.all||[];do t.innerHTML="<!--[if gt IE "+ ++e+"]><br><![endif]-->";while(r[0]);return e>4?e:!e}(),e.extend(e.support,{pushState:"pushState"in history&&"replaceState"in history&&!(t.navigator.userAgent.indexOf("Firefox")>=0&&t.top!==t)&&t.navigator.userAgent.search(/CriOS/)===-1,mediaquery:e.mobile.media("only all"),cssPseudoElement:!!i("content"),touchOverflow:!!i("overflowScrolling"),cssTransform3d:p(),boxShadow:!!i("boxShadow")&&!l,fixedPosition:g(),scrollTop:("pageXOffset"in t||"scrollTop"in n.documentElement||"scrollTop"in s[0])&&!a&&!f,dynamicBaseTag:d(),cssPointerEvents:v(),boundingRect:m(),inlineSVG:h}),s.remove(),c=function(){var e=t.navigator.userAgent;return e.indexOf("Nokia")>-1&&(e.indexOf("Symbian/3")>-1||e.indexOf("Series60/5")>-1)&&e.indexOf("AppleWebKit")>-1&&e.match(/(BrowserNG|NokiaBrowser)\/7\.[0-3]/)}(),e.mobile.gradeA=function(){return(e.support.mediaquery&&e.support.cssPseudoElement||e.mobile.browser.oldIE&&e.mobile.browser.oldIE>=8)&&(e.support.boundingRect||e.fn.jquery.match(/1\.[0-7+]\.[0-9+]?/)!==null)},e.mobile.ajaxBlacklist=t.blackberry&&!t.WebKitPoint||f||c,c&&e(function(){e("head link[rel='stylesheet']").attr("rel","alternate stylesheet").attr("rel","stylesheet")}),e.support.boxShadow||e("html").addClass("ui-noboxshadow")}(e)});

/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 *
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

(function(window) {

    'use strict';

    // class helper functions from bonzo https://github.com/ded/bonzo

    function classReg(className) {
        return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }

    // classList support for class management
    // altho to be fair, the api sucks because it won't accept multiple classes at once
    var hasClass, addClass, removeClass;

    if ('classList' in document.documentElement) {
        hasClass = function(elem, c) {
            return elem.classList.contains(c);
        };
        addClass = function(elem, c) {
            elem.classList.add(c);
        };
        removeClass = function(elem, c) {
            elem.classList.remove(c);
        };
    } else {
        hasClass = function(elem, c) {
            return classReg(c).test(elem.className);
        };
        addClass = function(elem, c) {
            if (!hasClass(elem, c)) {
                elem.className = elem.className + ' ' + c;
            }
        };
        removeClass = function(elem, c) {
            elem.className = elem.className.replace(classReg(c), ' ');
        };
    }

    function toggleClass(elem, c) {
        var fn = hasClass(elem, c) ? removeClass : addClass;
        fn(elem, c);
    }

    var classie = {
        // full names
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        // short names
        has: hasClass,
        add: addClass,
        remove: removeClass,
        toggle: toggleClass
    };

    // transport
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(classie);
    } else {
        // browser global
        window.classie = classie;
    }

})(window);

/**
 * uisearch.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
;
(function(window) {

    'use strict';

    // EventListener | @jon_neal | //github.com/jonathantneal/EventListener
    !window.addEventListener && window.Element && (function() {
        function addToPrototype(name, method) {
            Window.prototype[name] = HTMLDocument.prototype[name] = Element.prototype[name] = method;
        }

        var registry = [];

        addToPrototype("addEventListener", function(type, listener) {
            var target = this;

            registry.unshift({
                __listener: function(event) {
                    event.currentTarget = target;
                    event.pageX = event.clientX + document.documentElement.scrollLeft;
                    event.pageY = event.clientY + document.documentElement.scrollTop;
                    event.preventDefault = function() {
                        event.returnValue = false
                    };
                    event.relatedTarget = event.fromElement || null;
                    event.stopPropagation = function() {
                        event.cancelBubble = true
                    };
                    event.relatedTarget = event.fromElement || null;
                    event.target = event.srcElement || target;
                    event.timeStamp = +new Date;

                    listener.call(target, event);
                },
                listener: listener,
                target: target,
                type: type
            });

            this.attachEvent("on" + type, registry[0].__listener);
        });

        addToPrototype("removeEventListener", function(type, listener) {
            for (var index = 0, length = registry.length; index < length; ++index) {
                if (registry[index].target == this && registry[index].type == type && registry[index].listener == listener) {
                    return this.detachEvent("on" + type, registry.splice(index, 1)[0].__listener);
                }
            }
        });

        addToPrototype("dispatchEvent", function(eventObject) {
            try {
                return this.fireEvent("on" + eventObject.type, eventObject);
            } catch (error) {
                for (var index = 0, length = registry.length; index < length; ++index) {
                    if (registry[index].target == this && registry[index].type == eventObject.type) {
                        registry[index].call(this, eventObject);
                    }
                }
            }
        });
    })();

    // http://stackoverflow.com/a/11381730/989439

    function mobilecheck() {
        var check = false;
        (function(a) {
            if (/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    }

    // http://www.jonathantneal.com/blog/polyfills-and-prototypes/
    !String.prototype.trim && (String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, '');
    });

    function UISearch(el, options) {
    	if(el != null) {
	    	this.el = el;
	        this.inputEl = el.querySelector('form > input.sb-search-input');
	        this._initEvents();
    	}
    }

    UISearch.prototype = {
        _initEvents: function() {
            var self = this,
                initSearchFn = function(ev) {
                    ev.stopPropagation();
                    // trim its value
                    self.inputEl.value = self.inputEl.value.trim();

                    if (!classie.has(self.el, 'sb-search-open')) { // open it
                        ev.preventDefault();
                        self.open();
                    } else if (classie.has(self.el, 'sb-search-open') && /^\s*$/.test(self.inputEl.value)) { // close it
                        ev.preventDefault();
                        self.close();
                    }
                }

            this.el.addEventListener('click', initSearchFn);
            this.el.addEventListener('touchstart', initSearchFn);
            this.inputEl.addEventListener('click', function(ev) {
                ev.stopPropagation();
            });
            this.inputEl.addEventListener('touchstart', function(ev) {
                ev.stopPropagation();
            });
        },
        open: function() {
            var self = this;
            classie.add(this.el, 'sb-search-open');
            // focus the input
            if (!mobilecheck()) {
                this.inputEl.focus();
            }
            // close the search input if body is clicked
            var bodyFn = function(ev) {
                self.close();
                this.removeEventListener('click', bodyFn);
                this.removeEventListener('touchstart', bodyFn);
            };
            document.addEventListener('click', bodyFn);
            document.addEventListener('touchstart', bodyFn);
        },
        close: function() {
            this.inputEl.blur();
            classie.remove(this.el, 'sb-search-open');
        }
    }

    // add to global namespace
    window.UISearch = UISearch;

})(window);

/*
 * File: jquery.flexisel.js
 * Version: 1.0.2
 * Description: Responsive carousel jQuery plugin
 * Author: 9bit Studios
 * Copyright 2012, 9bit Studios
 * http://www.9bitstudios.com
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */
(function($) {
    $.fn.flexisel = function(options) {

        var defaults = $.extend({
            visibleItems: 4,
            animationSpeed: 200,
            autoPlay: false,
            autoPlaySpeed: 3000,
            pauseOnHover: true,
            setMaxWidthAndHeight: false,
            enableResponsiveBreakpoints: true,
            clone: true,
            responsiveBreakpoints: {
                portrait: {
                    changePoint: 480,
                    visibleItems: 1
                },
                landscape: {
                    changePoint: 640,
                    visibleItems: 2
                },
                tablet: {
                    changePoint: 768,
                    visibleItems: 3
                }
            }
        }, options);

        /******************************
        Private Variables
         *******************************/

        var object = $(this);
        var settings = $.extend(defaults, options);
        var itemsWidth; // Declare the global width of each item in carousel
        var canNavigate = true;
        var itemsVisible = settings.visibleItems; // Get visible items
        var totalItems = object.children().length; // Get number of elements
        var responsivePoints = [];

        /******************************
        Public Methods
        *******************************/
        var methods = {
            init: function() {
                return this.each(function() {
                    methods.appendHTML();
                    methods.setEventHandlers();
                    methods.initializeItems();
                });
            },

            /******************************
            Initialize Items
            Fully initialize everything. Plugin is loaded and ready after finishing execution
        *******************************/
            initializeItems: function() {
                var mainParent = object.parents('.customers-carousel');
                var listParent = object.parent();
                var innerHeight = listParent.height();
                var childSet = object.children();
                var childSetInners = childSet.children();
                methods.sortResponsiveObject(settings.responsiveBreakpoints);

                var innerWidth = listParent.width(); // Set widths
                itemsWidth = (innerWidth) / itemsVisible;
                childSet.width(itemsWidth);
                childSetInners.width(itemsWidth);
                if (settings.clone) {
                    childSet.last().insertBefore(childSet.first());
                    childSet.last().insertBefore(childSet.first());
                    object.css({
                        'left': -itemsWidth
                    });
                }

                object.fadeIn();
                mainParent.css('visibility', 'visible');
                $(window).trigger("resize"); // needed to position arrows correctly

            },

            /******************************
            Append HTML
            Add additional markup needed by plugin to the DOM
        *******************************/
            appendHTML: function() {
                object.addClass("nbs-flexisel-ul");
                object.wrap("<div class='nbs-flexisel-container'><div class='nbs-flexisel-inner'></div></div>");
                object.find("li").addClass("nbs-flexisel-item");

                if (settings.setMaxWidthAndHeight) {
                    var baseWidth = $(".nbs-flexisel-item img").width();
                    var baseHeight = $(".nbs-flexisel-item img").height();
                    $(".nbs-flexisel-item img").css("max-width", baseWidth);
                    $(".nbs-flexisel-item img").css("max-height", baseHeight);
                }
                // $("<div class='nbs-flexisel-nav-left'></div><div class='nbs-flexisel-nav-right'></div>").insertAfter(object);
                $("<div class='nbs-flexisel-nav-left'></div><div class='nbs-flexisel-nav-right'></div>").appendTo('.nbs-flexisel-container');
                if (settings.clone) {
                    var cloneContent = object.children().clone();
                    object.append(cloneContent);
                }
            },
            /******************************
            Set Event Handlers
        Set events: click, resize, etc
            *******************************/
            setEventHandlers: function() {

                var listParent = object.parent();
                var childSet = object.children();
                var childSetInners = childSet.children();
                var leftArrow = $('.nbs-flexisel-container').find($(".nbs-flexisel-nav-left"));
                var rightArrow = $('.nbs-flexisel-container').find($(".nbs-flexisel-nav-right"));

                $(window).on("resize", function(event) {

                    methods.setResponsiveEvents();

                    var innerWidth = $(listParent).width();
                    var innerHeight = $(listParent).height();

                    itemsWidth = (innerWidth) / itemsVisible;

                    childSet.width(itemsWidth);
                    childSetInners.width(itemsWidth);
                    if (settings.clone) {
                        object.css({
                            'left': -itemsWidth
                        });
                    } else {
                        object.css({
                            'left': 0
                        });
                    }

                    var halfArrowHeight = (leftArrow.height()) / 2;
                    var arrowMargin = (innerHeight / 2) - halfArrowHeight;
                    leftArrow.css("top", arrowMargin + "px");
                    rightArrow.css("top", arrowMargin + "px");

                });
                $(leftArrow).on("click", function(event) {
                    methods.scrollLeft();
                });
                $(rightArrow).on("click", function(event) {
                    methods.scrollRight();
                });
                if (settings.pauseOnHover == true) {
                    $(".nbs-flexisel-item").on({
                        mouseenter: function() {
                            canNavigate = false;
                        },
                        mouseleave: function() {
                            canNavigate = true;
                        }
                    });
                }
                if (settings.autoPlay == true) {

                    setInterval(function() {
                        if (canNavigate == true)
                            methods.scrollRight();
                    }, settings.autoPlaySpeed);
                }

            },
            /******************************
            Set Responsive Events
            Set breakpoints depending on responsiveBreakpoints
            *******************************/

            setResponsiveEvents: function() {
                var contentWidth = $('html').width();

                if (settings.enableResponsiveBreakpoints) {

                    var largestCustom = responsivePoints[responsivePoints.length - 1].changePoint; // sorted array

                    for (var i in responsivePoints) {

                        if (contentWidth >= largestCustom) { // set to default if width greater than largest custom responsiveBreakpoint
                            itemsVisible = settings.visibleItems;
                            break;
                        } else { // determine custom responsiveBreakpoint to use

                            if (contentWidth < responsivePoints[i].changePoint) {
                                itemsVisible = responsivePoints[i].visibleItems;
                                break;
                            } else
                                continue;
                        }
                    }
                }
            },

            /******************************
            Sort Responsive Object
            Gets all the settings in resposiveBreakpoints and sorts them into an array
            *******************************/

            sortResponsiveObject: function(obj) {

                var responsiveObjects = [];

                for (var i in obj) {
                    responsiveObjects.push(obj[i]);
                }

                responsiveObjects.sort(function(a, b) {
                    return a.changePoint - b.changePoint;
                });

                responsivePoints = responsiveObjects;
            },

            /******************************
            Scroll Left
            *******************************/
            scrollLeft: function() {
                if (object.position().left < 0) {
                    if (canNavigate == true) {
                        canNavigate = false;

                        var listParent = object.parent();
                        var listParentWidth = listParent.width();
                        var innerWidth = listParent.width();

                        itemsWidth = (innerWidth) / itemsVisible;

                        var childSet = object.children();

                        object.animate({
                            // 'left': "+=" + itemsWidth
                            'left': "+=" + listParentWidth
                        }, {
                            queue: false,
                            duration: settings.animationSpeed,
                            easing: "linear",
                            complete: function() {
                                if (settings.clone) {
                                    childSet.last().insertBefore(
                                        childSet.first()); // Get the first list item and put it after the last list item (that's how the infinite effects is made)
                                }
                                methods.adjustScroll();
                                canNavigate = true;
                            }
                        });
                    }
                }
            },
            /******************************
            Scroll Right
            *******************************/
            scrollRight: function() {
                var listParent = object.parent();
                var listParentWidth = listParent.width();
                var innerWidth = listParent.width();

                itemsWidth = (innerWidth) / itemsVisible;

                var difObject = (itemsWidth - innerWidth);
                var objPosition = (object.position().left + ((totalItems - itemsVisible) * itemsWidth) - innerWidth);

                if ((difObject <= Math.ceil(objPosition)) && (!settings.clone)) {
                    if (canNavigate == true) {
                        canNavigate = false;

                        object.animate({
                            'left': "-=" + itemsWidth
                        }, {
                            queue: false,
                            duration: settings.animationSpeed,
                            easing: "linear",
                            complete: function() {
                                methods.adjustScroll();
                                canNavigate = true;
                            }
                        });
                    }
                } else if (settings.clone) {
                    if (canNavigate == true) {
                        canNavigate = false;

                        var childSet = object.children();

                        object.animate({
                            'left': "-=" + listParentWidth
                        }, {
                            queue: false,
                            duration: settings.animationSpeed,
                            easing: "linear",
                            complete: function() {
                                childSet.first().insertAfter(childSet.last()); // Get the first list item and put it after the last list item (that's how the infinite effects is made)
                                methods.adjustScroll();
                                canNavigate = true;
                            }
                        });
                    }
                };
            },
            /******************************
            Adjust Scroll
             *******************************/
            adjustScroll: function() {
                var listParent = object.parent();
                var listParentWidth = listParent.width();
                var childSet = object.children();

                var innerWidth = listParent.width();
                itemsWidth = (innerWidth) / itemsVisible;
                childSet.width(itemsWidth);
                if (settings.clone) {
                    object.css({
                        'left': -listParentWidth
                    });
                }
            }
        };
        if (methods[options]) { // $("#element").pluginName('methodName', 'arg1', 'arg2');
            return methods[options].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof options === 'object' || !options) { // $("#element").pluginName({ option: 1, option:2 });
            return methods.init.apply(this);
        } else {
            $.error('Method "' + method + '" does not exist in flexisel plugin!');
        }
    };
})(jQuery);







/*jquery easein*/
jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b+c;return-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b+c;return d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b+c;return-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b*b+c;return d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){if(b==0)return c;if(b==e)return c+d;if((b/=e/2)<1)return d/2*Math.pow(2,10*(b-1))+c;return d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){if((b/=e/2)<1)return-d/2*(Math.sqrt(1-b*b)-1)+c;return d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;if(!g)g=e*.3*1.5;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);if(b<1)return-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c;return h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;if((b/=e/2)<1)return d/2*b*b*(((f*=1.525)+1)*b-f)+c;return d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){if((b/=e)<1/2.75){return d*7.5625*b*b+c}else if(b<2/2.75){return d*(7.5625*(b-=1.5/2.75)*b+.75)+c}else if(b<2.5/2.75){return d*(7.5625*(b-=2.25/2.75)*b+.9375)+c}else{return d*(7.5625*(b-=2.625/2.75)*b+.984375)+c}},easeInOutBounce:function(a,b,c,d,e){if(b<e/2)return jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+c;return jQuery.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c}});


/*!
 * jQuery Transit - CSS3 transitions and transformations
 * (c) 2011-2012 Rico Sta. Cruz <rico@ricostacruz.com>
 * MIT Licensed.
 *
 * http://ricostacruz.com/jquery.transit
 * http://github.com/rstacruz/jquery.transit
 */
(function(k){k.transit={version:"0.9.9",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:true,useTransitionEnd:false};var d=document.createElement("div");var q={};function b(v){if(v in d.style){return v}var u=["Moz","Webkit","O","ms"];var r=v.charAt(0).toUpperCase()+v.substr(1);if(v in d.style){return v}for(var t=0;t<u.length;++t){var s=u[t]+r;if(s in d.style){return s}}}function e(){d.style[q.transform]="";d.style[q.transform]="rotateY(90deg)";return d.style[q.transform]!==""}var a=navigator.userAgent.toLowerCase().indexOf("chrome")>-1;q.transition=b("transition");q.transitionDelay=b("transitionDelay");q.transform=b("transform");q.transformOrigin=b("transformOrigin");q.transform3d=e();var i={transition:"transitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"};var f=q.transitionEnd=i[q.transition]||null;for(var p in q){if(q.hasOwnProperty(p)&&typeof k.support[p]==="undefined"){k.support[p]=q[p]}}d=null;k.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};k.cssHooks["transit:transform"]={get:function(r){return k(r).data("transform")||new j()},set:function(s,r){var t=r;if(!(t instanceof j)){t=new j(t)}if(q.transform==="WebkitTransform"&&!a){s.style[q.transform]=t.toString(true)}else{s.style[q.transform]=t.toString()}k(s).data("transform",t)}};k.cssHooks.transform={set:k.cssHooks["transit:transform"].set};if(k.fn.jquery<"1.8"){k.cssHooks.transformOrigin={get:function(r){return r.style[q.transformOrigin]},set:function(r,s){r.style[q.transformOrigin]=s}};k.cssHooks.transition={get:function(r){return r.style[q.transition]},set:function(r,s){r.style[q.transition]=s}}}n("scale");n("translate");n("rotate");n("rotateX");n("rotateY");n("rotate3d");n("perspective");n("skewX");n("skewY");n("x",true);n("y",true);function j(r){if(typeof r==="string"){this.parse(r)}return this}j.prototype={setFromString:function(t,s){var r=(typeof s==="string")?s.split(","):(s.constructor===Array)?s:[s];r.unshift(t);j.prototype.set.apply(this,r)},set:function(s){var r=Array.prototype.slice.apply(arguments,[1]);if(this.setter[s]){this.setter[s].apply(this,r)}else{this[s]=r.join(",")}},get:function(r){if(this.getter[r]){return this.getter[r].apply(this)}else{return this[r]||0}},setter:{rotate:function(r){this.rotate=o(r,"deg")},rotateX:function(r){this.rotateX=o(r,"deg")},rotateY:function(r){this.rotateY=o(r,"deg")},scale:function(r,s){if(s===undefined){s=r}this.scale=r+","+s},skewX:function(r){this.skewX=o(r,"deg")},skewY:function(r){this.skewY=o(r,"deg")},perspective:function(r){this.perspective=o(r,"px")},x:function(r){this.set("translate",r,null)},y:function(r){this.set("translate",null,r)},translate:function(r,s){if(this._translateX===undefined){this._translateX=0}if(this._translateY===undefined){this._translateY=0}if(r!==null&&r!==undefined){this._translateX=o(r,"px")}if(s!==null&&s!==undefined){this._translateY=o(s,"px")}this.translate=this._translateX+","+this._translateY}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||0},scale:function(){var r=(this.scale||"1,1").split(",");if(r[0]){r[0]=parseFloat(r[0])}if(r[1]){r[1]=parseFloat(r[1])}return(r[0]===r[1])?r[0]:r},rotate3d:function(){var t=(this.rotate3d||"0,0,0,0deg").split(",");for(var r=0;r<=3;++r){if(t[r]){t[r]=parseFloat(t[r])}}if(t[3]){t[3]=o(t[3],"deg")}return t}},parse:function(s){var r=this;s.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(t,v,u){r.setFromString(v,u)})},toString:function(t){var s=[];for(var r in this){if(this.hasOwnProperty(r)){if((!q.transform3d)&&((r==="rotateX")||(r==="rotateY")||(r==="perspective")||(r==="transformOrigin"))){continue}if(r[0]!=="_"){if(t&&(r==="scale")){s.push(r+"3d("+this[r]+",1)")}else{if(t&&(r==="translate")){s.push(r+"3d("+this[r]+",0)")}else{s.push(r+"("+this[r]+")")}}}}}return s.join(" ")}};function m(s,r,t){if(r===true){s.queue(t)}else{if(r){s.queue(r,t)}else{t()}}}function h(s){var r=[];k.each(s,function(t){t=k.camelCase(t);t=k.transit.propertyMap[t]||k.cssProps[t]||t;t=c(t);if(k.inArray(t,r)===-1){r.push(t)}});return r}function g(s,v,x,r){var t=h(s);if(k.cssEase[x]){x=k.cssEase[x]}var w=""+l(v)+" "+x;if(parseInt(r,10)>0){w+=" "+l(r)}var u=[];k.each(t,function(z,y){u.push(y+" "+w)});return u.join(", ")}k.fn.transition=k.fn.transit=function(z,s,y,C){var D=this;var u=0;var w=true;if(typeof s==="function"){C=s;s=undefined}if(typeof y==="function"){C=y;y=undefined}if(typeof z.easing!=="undefined"){y=z.easing;delete z.easing}if(typeof z.duration!=="undefined"){s=z.duration;delete z.duration}if(typeof z.complete!=="undefined"){C=z.complete;delete z.complete}if(typeof z.queue!=="undefined"){w=z.queue;delete z.queue}if(typeof z.delay!=="undefined"){u=z.delay;delete z.delay}if(typeof s==="undefined"){s=k.fx.speeds._default}if(typeof y==="undefined"){y=k.cssEase._default}s=l(s);var E=g(z,s,y,u);var B=k.transit.enabled&&q.transition;var t=B?(parseInt(s,10)+parseInt(u,10)):0;if(t===0){var A=function(F){D.css(z);if(C){C.apply(D)}if(F){F()}};m(D,w,A);return D}var x={};var r=function(H){var G=false;var F=function(){if(G){D.unbind(f,F)}if(t>0){D.each(function(){this.style[q.transition]=(x[this]||null)})}if(typeof C==="function"){C.apply(D)}if(typeof H==="function"){H()}};if((t>0)&&(f)&&(k.transit.useTransitionEnd)){G=true;D.bind(f,F)}else{window.setTimeout(F,t)}D.each(function(){if(t>0){this.style[q.transition]=E}k(this).css(z)})};var v=function(F){this.offsetWidth;r(F)};m(D,w,v);return this};function n(s,r){if(!r){k.cssNumber[s]=true}k.transit.propertyMap[s]=q.transform;k.cssHooks[s]={get:function(v){var u=k(v).css("transit:transform");return u.get(s)},set:function(v,w){var u=k(v).css("transit:transform");u.setFromString(s,w);k(v).css({"transit:transform":u})}}}function c(r){return r.replace(/([A-Z])/g,function(s){return"-"+s.toLowerCase()})}function o(s,r){if((typeof s==="string")&&(!s.match(/^[\-0-9\.]+$/))){return s}else{return""+s+r}}function l(s){var r=s;if(k.fx.speeds[r]){r=k.fx.speeds[r]}return o(r,"ms")}k.transit.getTransitionValue=g})(jQuery);





/**
 * jQuery.browser.mobile (http://detectmobilebrowser.com/)
 *
 * jQuery.browser.mobile will be true if the browser is a mobile device
 *
 **/
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);


















/*!
 * skrollr core
 *
 * Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr
 *
 * Free to use under terms of MIT license
 */
(function(window, document, undefined) {
	'use strict';

	/*
	 * Global api.
	 */
	var skrollr = {
		get: function() {
			return _instance;
		},
		//Main entry point.
		init: function(options) {
			return _instance || new Skrollr(options);
		},
		VERSION: '0.6.22'
	};

	//Minify optimization.
	var hasProp = Object.prototype.hasOwnProperty;
	var Math = window.Math;
	var getStyle = window.getComputedStyle;

	//They will be filled when skrollr gets initialized.
	var documentElement;
	var body;

	var EVENT_TOUCHSTART = 'touchstart';
	var EVENT_TOUCHMOVE = 'touchmove';
	var EVENT_TOUCHCANCEL = 'touchcancel';
	var EVENT_TOUCHEND = 'touchend';

	var SKROLLABLE_CLASS = 'skrollable';
	var SKROLLABLE_BEFORE_CLASS = SKROLLABLE_CLASS + '-before';
	var SKROLLABLE_BETWEEN_CLASS = SKROLLABLE_CLASS + '-between';
	var SKROLLABLE_AFTER_CLASS = SKROLLABLE_CLASS + '-after';

	var SKROLLR_CLASS = 'skrollr';
	var NO_SKROLLR_CLASS = 'no-' + SKROLLR_CLASS;
	var SKROLLR_DESKTOP_CLASS = SKROLLR_CLASS + '-desktop';
	var SKROLLR_MOBILE_CLASS = SKROLLR_CLASS + '-mobile';

	var DEFAULT_EASING = 'linear';
	var DEFAULT_DURATION = 1000;//ms
	var DEFAULT_MOBILE_DECELERATION = 0.004;//pixel/ms²

	var DEFAULT_SMOOTH_SCROLLING_DURATION = 200;//ms

	var ANCHOR_START = 'start';
	var ANCHOR_END = 'end';
	var ANCHOR_CENTER = 'center';
	var ANCHOR_BOTTOM = 'bottom';

	//The property which will be added to the DOM element to hold the ID of the skrollable.
	var SKROLLABLE_ID_DOM_PROPERTY = '___skrollable_id';

	var rxTouchIgnoreTags = /^(?:input|textarea|button|select)$/i;

	var rxTrim = /^\s+|\s+$/g;

	//Find all data-attributes. data-[_constant]-[offset]-[anchor]-[anchor].
	var rxKeyframeAttribute = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/;

	var rxPropValue = /\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi;

	//Easing function names follow the property in square brackets.
	var rxPropEasing = /^([a-z\-]+)\[(\w+)\]$/;

	var rxCamelCase = /-([a-z0-9_])/g;
	var rxCamelCaseFn = function(str, letter) {
		return letter.toUpperCase();
	};

	//Numeric values with optional sign.
	var rxNumericValue = /[\-+]?[\d]*\.?[\d]+/g;

	//Used to replace occurences of {?} with a number.
	var rxInterpolateString = /\{\?\}/g;

	//Finds rgb(a) colors, which don't use the percentage notation.
	var rxRGBAIntegerColor = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g;

	//Finds all gradients.
	var rxGradient = /[a-z\-]+-gradient/g;

	//Vendor prefix. Will be set once skrollr gets initialized.
	var theCSSPrefix = '';
	var theDashedCSSPrefix = '';

	//Will be called once (when skrollr gets initialized).
	var detectCSSPrefix = function() {
		//Only relevant prefixes. May be extended.
		//Could be dangerous if there will ever be a CSS property which actually starts with "ms". Don't hope so.
		var rxPrefixes = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;

		//Detect prefix for current browser by finding the first property using a prefix.
		if(!getStyle) {
			return;
		}

		var style = getStyle(body, null);

		for(var k in style) {
			//We check the key and if the key is a number, we check the value as well, because safari's getComputedStyle returns some weird array-like thingy.
			theCSSPrefix = (k.match(rxPrefixes) || (+k == k && style[k].match(rxPrefixes)));

			if(theCSSPrefix) {
				break;
			}
		}

		//Did we even detect a prefix?
		if(!theCSSPrefix) {
			theCSSPrefix = theDashedCSSPrefix = '';

			return;
		}

		theCSSPrefix = theCSSPrefix[0];

		//We could have detected either a dashed prefix or this camelCaseish-inconsistent stuff.
		if(theCSSPrefix.slice(0,1) === '-') {
			theDashedCSSPrefix = theCSSPrefix;

			//There's no logic behind these. Need a look up.
			theCSSPrefix = ({
				'-webkit-': 'webkit',
				'-moz-': 'Moz',
				'-ms-': 'ms',
				'-o-': 'O'
			})[theCSSPrefix];
		} else {
			theDashedCSSPrefix = '-' + theCSSPrefix.toLowerCase() + '-';
		}
	};

	var polyfillRAF = function() {
		var requestAnimFrame = window.requestAnimationFrame || window[theCSSPrefix.toLowerCase() + 'RequestAnimationFrame'];

		var lastTime = _now();

		if(_isMobile || !requestAnimFrame) {
			requestAnimFrame = function(callback) {
				//How long did it take to render?
				var deltaTime = _now() - lastTime;
				var delay = Math.max(0, 1000 / 60 - deltaTime);

				return window.setTimeout(function() {
					lastTime = _now();
					callback();
				}, delay);
			};
		}

		return requestAnimFrame;
	};

	var polyfillCAF = function() {
		var cancelAnimFrame = window.cancelAnimationFrame || window[theCSSPrefix.toLowerCase() + 'CancelAnimationFrame'];

		if(_isMobile || !cancelAnimFrame) {
			cancelAnimFrame = function(timeout) {
				return window.clearTimeout(timeout);
			};
		}

		return cancelAnimFrame;
	};

	//Built-in easing functions.
	var easings = {
		begin: function() {
			return 0;
		},
		end: function() {
			return 1;
		},
		linear: function(p) {
			return p;
		},
		quadratic: function(p) {
			return p * p;
		},
		cubic: function(p) {
			return p * p * p;
		},
		swing: function(p) {
			return (-Math.cos(p * Math.PI) / 2) + 0.5;
		},
		sqrt: function(p) {
			return Math.sqrt(p);
		},
		outCubic: function(p) {
			return (Math.pow((p - 1), 3) + 1);
		},
		//see https://www.desmos.com/calculator/tbr20s8vd2 for how I did this
		bounce: function(p) {
			var a;

			if(p <= 0.5083) {
				a = 3;
			} else if(p <= 0.8489) {
				a = 9;
			} else if(p <= 0.96208) {
				a = 27;
			} else if(p <= 0.99981) {
				a = 91;
			} else {
				return 1;
			}

			return 1 - Math.abs(3 * Math.cos(p * a * 1.028) / a);
		}
	};

	/**
	 * Constructor.
	 */
	function Skrollr(options) {
		documentElement = document.documentElement;
		body = document.body;

		detectCSSPrefix();

		_instance = this;

		options = options || {};

		_constants = options.constants || {};

		//We allow defining custom easings or overwrite existing.
		if(options.easing) {
			for(var e in options.easing) {
				easings[e] = options.easing[e];
			}
		}

		_edgeStrategy = options.edgeStrategy || 'set';

		_listeners = {
			//Function to be called right before rendering.
			beforerender: options.beforerender,

			//Function to be called right after finishing rendering.
			render: options.render,

			//Function to be called whenever an element with the `data-emit-events` attribute passes a keyframe.
			keyframe: options.keyframe
		};

		//forceHeight is true by default
		_forceHeight = options.forceHeight !== false;

		if(_forceHeight) {
			_scale = options.scale || 1;
		}

		_mobileDeceleration = options.mobileDeceleration || DEFAULT_MOBILE_DECELERATION;

		_smoothScrollingEnabled = options.smoothScrolling !== false;
		_smoothScrollingDuration = options.smoothScrollingDuration || DEFAULT_SMOOTH_SCROLLING_DURATION;

		//Dummy object. Will be overwritten in the _render method when smooth scrolling is calculated.
		_smoothScrolling = {
			targetTop: _instance.getScrollTop()
		};

		//A custom check function may be passed.
		_isMobile = ((options.mobileCheck || function() {
			return (/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera);
		})());

		if(_isMobile) {
			_skrollrBody = document.getElementById('skrollr-body');

			//Detect 3d transform if there's a skrollr-body (only needed for #skrollr-body).
			if(_skrollrBody) {
				_detect3DTransforms();
			}

			_initMobile();
			_updateClass(documentElement, [SKROLLR_CLASS, SKROLLR_MOBILE_CLASS], [NO_SKROLLR_CLASS]);
		} else {
			_updateClass(documentElement, [SKROLLR_CLASS, SKROLLR_DESKTOP_CLASS], [NO_SKROLLR_CLASS]);
		}

		//Triggers parsing of elements and a first reflow.
		_instance.refresh();

		_addEvent(window, 'resize orientationchange', function() {
			var width = documentElement.clientWidth;
			var height = documentElement.clientHeight;

			//Only reflow if the size actually changed (#271).
			if(height !== _lastViewportHeight || width !== _lastViewportWidth) {
				_lastViewportHeight = height;
				_lastViewportWidth = width;

				_requestReflow = true;
			}
		});

		var requestAnimFrame = polyfillRAF();

		//Let's go.
		(function animloop(){
			_render();
			_animFrame = requestAnimFrame(animloop);
		}());

		return _instance;
	}

	/**
	 * (Re)parses some or all elements.
	 */
	Skrollr.prototype.refresh = function(elements) {
		var elementIndex;
		var elementsLength;
		var ignoreID = false;

		//Completely reparse anything without argument.
		if(elements === undefined) {
			//Ignore that some elements may already have a skrollable ID.
			ignoreID = true;

			_skrollables = [];
			_skrollableIdCounter = 0;

			elements = document.getElementsByTagName('*');
		} else if(elements.length === undefined) {
			//We also accept a single element as parameter.
			elements = [elements];
		}

		elementIndex = 0;
		elementsLength = elements.length;

		for(; elementIndex < elementsLength; elementIndex++) {
			var el = elements[elementIndex];
			var anchorTarget = el;
			var keyFrames = [];

			//If this particular element should be smooth scrolled.
			var smoothScrollThis = _smoothScrollingEnabled;

			//The edge strategy for this particular element.
			var edgeStrategy = _edgeStrategy;

			//If this particular element should emit keyframe events.
			var emitEvents = false;

			//If we're reseting the counter, remove any old element ids that may be hanging around.
			if(ignoreID && SKROLLABLE_ID_DOM_PROPERTY in el) {
				delete el[SKROLLABLE_ID_DOM_PROPERTY];
			}

			if(!el.attributes) {
				continue;
			}

			//Iterate over all attributes and search for key frame attributes.
			var attributeIndex = 0;
			var attributesLength = el.attributes.length;

			for (; attributeIndex < attributesLength; attributeIndex++) {
				var attr = el.attributes[attributeIndex];

				if(attr.name === 'data-anchor-target') {
					anchorTarget = document.querySelector(attr.value);

					if(anchorTarget === null) {
						throw 'Unable to find anchor target "' + attr.value + '"';
					}

					continue;
				}

				//Global smooth scrolling can be overridden by the element attribute.
				if(attr.name === 'data-smooth-scrolling') {
					smoothScrollThis = attr.value !== 'off';

					continue;
				}

				//Global edge strategy can be overridden by the element attribute.
				if(attr.name === 'data-edge-strategy') {
					edgeStrategy = attr.value;

					continue;
				}

				//Is this element tagged with the `data-emit-events` attribute?
				if(attr.name === 'data-emit-events') {
					emitEvents = true;

					continue;
				}

				var match = attr.name.match(rxKeyframeAttribute);

				if(match === null) {
					continue;
				}

				var kf = {
					props: attr.value,
					//Point back to the element as well.
					element: el,
					//The name of the event which this keyframe will fire, if emitEvents is
					eventType: attr.name.replace(rxCamelCase, rxCamelCaseFn)
				};

				keyFrames.push(kf);

				var constant = match[1];

				if(constant) {
					//Strip the underscore prefix.
					kf.constant = constant.substr(1);
				}

				//Get the key frame offset.
				var offset = match[2];

				//Is it a percentage offset?
				if(/p$/.test(offset)) {
					kf.isPercentage = true;
					kf.offset = (offset.slice(0, -1) | 0) / 100;
				} else {
					kf.offset = (offset | 0);
				}

				var anchor1 = match[3];

				//If second anchor is not set, the first will be taken for both.
				var anchor2 = match[4] || anchor1;

				//"absolute" (or "classic") mode, where numbers mean absolute scroll offset.
				if(!anchor1 || anchor1 === ANCHOR_START || anchor1 === ANCHOR_END) {
					kf.mode = 'absolute';

					//data-end needs to be calculated after all key frames are known.
					if(anchor1 === ANCHOR_END) {
						kf.isEnd = true;
					} else if(!kf.isPercentage) {
						//For data-start we can already set the key frame w/o calculations.
						//#59: "scale" options should only affect absolute mode.
						kf.offset = kf.offset * _scale;
					}
				}
				//"relative" mode, where numbers are relative to anchors.
				else {
					kf.mode = 'relative';
					kf.anchors = [anchor1, anchor2];
				}
			}

			//Does this element have key frames?
			if(!keyFrames.length) {
				continue;
			}

			//Will hold the original style and class attributes before we controlled the element (see #80).
			var styleAttr, classAttr;

			var id;

			if(!ignoreID && SKROLLABLE_ID_DOM_PROPERTY in el) {
				//We already have this element under control. Grab the corresponding skrollable id.
				id = el[SKROLLABLE_ID_DOM_PROPERTY];
				styleAttr = _skrollables[id].styleAttr;
				classAttr = _skrollables[id].classAttr;
			} else {
				//It's an unknown element. Asign it a new skrollable id.
				id = (el[SKROLLABLE_ID_DOM_PROPERTY] = _skrollableIdCounter++);
				styleAttr = el.style.cssText;
				classAttr = _getClass(el);
			}

			_skrollables[id] = {
				element: el,
				styleAttr: styleAttr,
				classAttr: classAttr,
				anchorTarget: anchorTarget,
				keyFrames: keyFrames,
				smoothScrolling: smoothScrollThis,
				edgeStrategy: edgeStrategy,
				emitEvents: emitEvents,
				lastFrameIndex: -1
			};

			_updateClass(el, [SKROLLABLE_CLASS], []);
		}

		//Reflow for the first time.
		_reflow();

		//Now that we got all key frame numbers right, actually parse the properties.
		elementIndex = 0;
		elementsLength = elements.length;

		for(; elementIndex < elementsLength; elementIndex++) {
			var sk = _skrollables[elements[elementIndex][SKROLLABLE_ID_DOM_PROPERTY]];

			if(sk === undefined) {
				continue;
			}

			//Parse the property string to objects
			_parseProps(sk);

			//Fill key frames with missing properties from left and right
			_fillProps(sk);
		}

		return _instance;
	};

	/**
	 * Transform "relative" mode to "absolute" mode.
	 * That is, calculate anchor position and offset of element.
	 */
	Skrollr.prototype.relativeToAbsolute = function(element, viewportAnchor, elementAnchor) {
		var viewportHeight = documentElement.clientHeight;
		var box = element.getBoundingClientRect();
		var absolute = box.top;

		//#100: IE doesn't supply "height" with getBoundingClientRect.
		var boxHeight = box.bottom - box.top;

		if(viewportAnchor === ANCHOR_BOTTOM) {
			absolute -= viewportHeight;
		} else if(viewportAnchor === ANCHOR_CENTER) {
			absolute -= viewportHeight / 2;
		}

		if(elementAnchor === ANCHOR_BOTTOM) {
			absolute += boxHeight;
		} else if(elementAnchor === ANCHOR_CENTER) {
			absolute += boxHeight / 2;
		}

		//Compensate scrolling since getBoundingClientRect is relative to viewport.
		absolute += _instance.getScrollTop();

		return (absolute + 0.5) | 0;
	};

	/**
	 * Animates scroll top to new position.
	 */
	Skrollr.prototype.animateTo = function(top, options) {
		options = options || {};

		var now = _now();
		var scrollTop = _instance.getScrollTop();

		//Setting this to a new value will automatically cause the current animation to stop, if any.
		_scrollAnimation = {
			startTop: scrollTop,
			topDiff: top - scrollTop,
			targetTop: top,
			duration: options.duration || DEFAULT_DURATION,
			startTime: now,
			endTime: now + (options.duration || DEFAULT_DURATION),
			easing: easings[options.easing || DEFAULT_EASING],
			done: options.done
		};

		//Don't queue the animation if there's nothing to animate.
		if(!_scrollAnimation.topDiff) {
			if(_scrollAnimation.done) {
				_scrollAnimation.done.call(_instance, false);
			}

			_scrollAnimation = undefined;
		}

		return _instance;
	};

	/**
	 * Stops animateTo animation.
	 */
	Skrollr.prototype.stopAnimateTo = function() {
		if(_scrollAnimation && _scrollAnimation.done) {
			_scrollAnimation.done.call(_instance, true);
		}

		_scrollAnimation = undefined;
	};

	/**
	 * Returns if an animation caused by animateTo is currently running.
	 */
	Skrollr.prototype.isAnimatingTo = function() {
		return !!_scrollAnimation;
	};

	Skrollr.prototype.isMobile = function() {
		return _isMobile;
	};

	Skrollr.prototype.setScrollTop = function(top, force) {
		_forceRender = (force === true);

		if(_isMobile) {
			_mobileOffset = Math.min(Math.max(top, 0), _maxKeyFrame);
		} else {
			window.scrollTo(0, top);
		}

		return _instance;
	};

	Skrollr.prototype.getScrollTop = function() {
		if(_isMobile) {
			return _mobileOffset;
		} else {
			return window.pageYOffset || documentElement.scrollTop || body.scrollTop || 0;
		}
	};

	Skrollr.prototype.getMaxScrollTop = function() {
		return _maxKeyFrame;
	};

	Skrollr.prototype.on = function(name, fn) {
		_listeners[name] = fn;

		return _instance;
	};

	Skrollr.prototype.off = function(name) {
		delete _listeners[name];

		return _instance;
	};

	Skrollr.prototype.destroy = function() {
		var cancelAnimFrame = polyfillCAF();
		cancelAnimFrame(_animFrame);
		_removeAllEvents();

		_updateClass(documentElement, [NO_SKROLLR_CLASS], [SKROLLR_CLASS, SKROLLR_DESKTOP_CLASS, SKROLLR_MOBILE_CLASS]);

		var skrollableIndex = 0;
		var skrollablesLength = _skrollables.length;

		for(; skrollableIndex < skrollablesLength; skrollableIndex++) {
			_reset(_skrollables[skrollableIndex].element);
		}

		documentElement.style.overflow = body.style.overflow = '';
		documentElement.style.height = body.style.height = '';

		if(_skrollrBody) {
			skrollr.setStyle(_skrollrBody, 'transform', 'none');
		}

		_instance = undefined;
		_skrollrBody = undefined;
		_listeners = undefined;
		_forceHeight = undefined;
		_maxKeyFrame = 0;
		_scale = 1;
		_constants = undefined;
		_mobileDeceleration = undefined;
		_direction = 'down';
		_lastTop = -1;
		_lastViewportWidth = 0;
		_lastViewportHeight = 0;
		_requestReflow = false;
		_scrollAnimation = undefined;
		_smoothScrollingEnabled = undefined;
		_smoothScrollingDuration = undefined;
		_smoothScrolling = undefined;
		_forceRender = undefined;
		_skrollableIdCounter = 0;
		_edgeStrategy = undefined;
		_isMobile = false;
		_mobileOffset = 0;
		_translateZ = undefined;
	};

	/*
		Private methods.
	*/

	var _initMobile = function() {
		var initialElement;
		var initialTouchY;
		var initialTouchX;
		var currentElement;
		var currentTouchY;
		var currentTouchX;
		var lastTouchY;
		var deltaY;

		var initialTouchTime;
		var currentTouchTime;
		var lastTouchTime;
		var deltaTime;

		_addEvent(documentElement, [EVENT_TOUCHSTART, EVENT_TOUCHMOVE, EVENT_TOUCHCANCEL, EVENT_TOUCHEND].join(' '), function(e) {
			var touch = e.changedTouches[0];

			currentElement = e.target;

			//We don't want text nodes.
			while(currentElement.nodeType === 3) {
				currentElement = currentElement.parentNode;
			}

			currentTouchY = touch.clientY;
			currentTouchX = touch.clientX;
			currentTouchTime = e.timeStamp;

			if(!rxTouchIgnoreTags.test(currentElement.tagName)) {
				e.preventDefault();
			}

			switch(e.type) {
				case EVENT_TOUCHSTART:
					//The last element we tapped on.
					if(initialElement) {
						initialElement.blur();
					}

					_instance.stopAnimateTo();

					initialElement = currentElement;

					initialTouchY = lastTouchY = currentTouchY;
					initialTouchX = currentTouchX;
					initialTouchTime = currentTouchTime;

					break;
				case EVENT_TOUCHMOVE:
					//Prevent default event on touchIgnore elements in case they don't have focus yet.
					if(rxTouchIgnoreTags.test(currentElement.tagName) && document.activeElement !== currentElement) {
						e.preventDefault();
					}

					deltaY = currentTouchY - lastTouchY;
					deltaTime = currentTouchTime - lastTouchTime;

					_instance.setScrollTop(_mobileOffset - deltaY, true);

					lastTouchY = currentTouchY;
					lastTouchTime = currentTouchTime;
					break;
				default:
				case EVENT_TOUCHCANCEL:
				case EVENT_TOUCHEND:
					var distanceY = initialTouchY - currentTouchY;
					var distanceX = initialTouchX - currentTouchX;
					var distance2 = distanceX * distanceX + distanceY * distanceY;

					//Check if it was more like a tap (moved less than 7px).
					if(distance2 < 49) {
						if(!rxTouchIgnoreTags.test(initialElement.tagName)) {
							initialElement.focus();

							//It was a tap, click the element.
							var clickEvent = document.createEvent('MouseEvents');
							clickEvent.initMouseEvent('click', true, true, e.view, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null);
							initialElement.dispatchEvent(clickEvent);
						}

						return;
					}

					initialElement = undefined;

					var speed = deltaY / deltaTime;

					//Cap speed at 3 pixel/ms.
					speed = Math.max(Math.min(speed, 3), -3);

					var duration = Math.abs(speed / _mobileDeceleration);
					var targetOffset = speed * duration + 0.5 * _mobileDeceleration * duration * duration;
					var targetTop = _instance.getScrollTop() - targetOffset;

					//Relative duration change for when scrolling above bounds.
					var targetRatio = 0;

					//Change duration proportionally when scrolling would leave bounds.
					if(targetTop > _maxKeyFrame) {
						targetRatio = (_maxKeyFrame - targetTop) / targetOffset;

						targetTop = _maxKeyFrame;
					} else if(targetTop < 0) {
						targetRatio = -targetTop / targetOffset;

						targetTop = 0;
					}

					duration = duration * (1 - targetRatio);

					_instance.animateTo((targetTop + 0.5) | 0, {easing: 'outCubic', duration: duration});
					break;
			}
		});

		//Just in case there has already been some native scrolling, reset it.
		window.scrollTo(0, 0);
		documentElement.style.overflow = body.style.overflow = 'hidden';
	};

	/**
	 * Updates key frames which depend on others / need to be updated on resize.
	 * That is "end" in "absolute" mode and all key frames in "relative" mode.
	 * Also handles constants, because they may change on resize.
	 */
	var _updateDependentKeyFrames = function() {
		var viewportHeight = documentElement.clientHeight;
		var processedConstants = _processConstants();
		var skrollable;
		var element;
		var anchorTarget;
		var keyFrames;
		var keyFrameIndex;
		var keyFramesLength;
		var kf;
		var skrollableIndex;
		var skrollablesLength;
		var offset;
		var constantValue;

		//First process all relative-mode elements and find the max key frame.
		skrollableIndex = 0;
		skrollablesLength = _skrollables.length;

		for(; skrollableIndex < skrollablesLength; skrollableIndex++) {
			skrollable = _skrollables[skrollableIndex];
			element = skrollable.element;
			anchorTarget = skrollable.anchorTarget;
			keyFrames = skrollable.keyFrames;

			keyFrameIndex = 0;
			keyFramesLength = keyFrames.length;

			for(; keyFrameIndex < keyFramesLength; keyFrameIndex++) {
				kf = keyFrames[keyFrameIndex];

				offset = kf.offset;
				constantValue = processedConstants[kf.constant] || 0;

				kf.frame = offset;

				if(kf.isPercentage) {
					//Convert the offset to percentage of the viewport height.
					offset = offset * viewportHeight;

					//Absolute + percentage mode.
					kf.frame = offset;
				}

				if(kf.mode === 'relative') {
					_reset(element);

					kf.frame = _instance.relativeToAbsolute(anchorTarget, kf.anchors[0], kf.anchors[1]) - offset;

					_reset(element, true);
				}

				kf.frame += constantValue;

				//Only search for max key frame when forceHeight is enabled.
				if(_forceHeight) {
					//Find the max key frame, but don't use one of the data-end ones for comparison.
					if(!kf.isEnd && kf.frame > _maxKeyFrame) {
						_maxKeyFrame = kf.frame;
					}
				}
			}
		}

		//#133: The document can be larger than the maxKeyFrame we found.
		_maxKeyFrame = Math.max(_maxKeyFrame, _getDocumentHeight());

		//Now process all data-end keyframes.
		skrollableIndex = 0;
		skrollablesLength = _skrollables.length;

		for(; skrollableIndex < skrollablesLength; skrollableIndex++) {
			skrollable = _skrollables[skrollableIndex];
			keyFrames = skrollable.keyFrames;

			keyFrameIndex = 0;
			keyFramesLength = keyFrames.length;

			for(; keyFrameIndex < keyFramesLength; keyFrameIndex++) {
				kf = keyFrames[keyFrameIndex];

				constantValue = processedConstants[kf.constant] || 0;

				if(kf.isEnd) {
					kf.frame = _maxKeyFrame - kf.offset + constantValue;
				}
			}

			skrollable.keyFrames.sort(_keyFrameComparator);
		}
	};

	/**
	 * Calculates and sets the style properties for the element at the given frame.
	 * @param fakeFrame The frame to render at when smooth scrolling is enabled.
	 * @param actualFrame The actual frame we are at.
	 */
	var _calcSteps = function(fakeFrame, actualFrame) {
		//Iterate over all skrollables.
		var skrollableIndex = 0;
		var skrollablesLength = _skrollables.length;

		for(; skrollableIndex < skrollablesLength; skrollableIndex++) {
			var skrollable = _skrollables[skrollableIndex];
			var element = skrollable.element;
			var frame = skrollable.smoothScrolling ? fakeFrame : actualFrame;
			var frames = skrollable.keyFrames;
			var framesLength = frames.length;
			var firstFrame = frames[0];
			var lastFrame = frames[frames.length - 1];
			var beforeFirst = frame < firstFrame.frame;
			var afterLast = frame > lastFrame.frame;
			var firstOrLastFrame = beforeFirst ? firstFrame : lastFrame;
			var emitEvents = skrollable.emitEvents;
			var lastFrameIndex = skrollable.lastFrameIndex;
			var key;
			var value;

			//If we are before/after the first/last frame, set the styles according to the given edge strategy.
			if(beforeFirst || afterLast) {
				//Check if we already handled this edge case last time.
				//Note: using setScrollTop it's possible that we jumped from one edge to the other.
				if(beforeFirst && skrollable.edge === -1 || afterLast && skrollable.edge === 1) {
					continue;
				}

				//Add the skrollr-before or -after class.
				if(beforeFirst) {
					_updateClass(element, [SKROLLABLE_BEFORE_CLASS], [SKROLLABLE_AFTER_CLASS, SKROLLABLE_BETWEEN_CLASS]);

					//This handles the special case where we exit the first keyframe.
					if(emitEvents && lastFrameIndex > -1) {
						_emitEvent(element, firstFrame.eventType, _direction);
						skrollable.lastFrameIndex = -1;
					}
				} else {
					_updateClass(element, [SKROLLABLE_AFTER_CLASS], [SKROLLABLE_BEFORE_CLASS, SKROLLABLE_BETWEEN_CLASS]);

					//This handles the special case where we exit the last keyframe.
					if(emitEvents && lastFrameIndex < framesLength) {
						_emitEvent(element, lastFrame.eventType, _direction);
						skrollable.lastFrameIndex = framesLength;
					}
				}

				//Remember that we handled the edge case (before/after the first/last keyframe).
				skrollable.edge = beforeFirst ? -1 : 1;

				switch(skrollable.edgeStrategy) {
					case 'reset':
						_reset(element);
						continue;
					case 'ease':
						//Handle this case like it would be exactly at first/last keyframe and just pass it on.
						frame = firstOrLastFrame.frame;
						break;
					default:
					case 'set':
						var props = firstOrLastFrame.props;

						for(key in props) {
							if(hasProp.call(props, key)) {
								value = _interpolateString(props[key].value);

								//Set style or attribute.
								if(key.indexOf('@') === 0) {
									element.setAttribute(key.substr(1), value);
								} else {
									skrollr.setStyle(element, key, value);
								}
							}
						}

						continue;
				}
			} else {
				//Did we handle an edge last time?
				if(skrollable.edge !== 0) {
					_updateClass(element, [SKROLLABLE_CLASS, SKROLLABLE_BETWEEN_CLASS], [SKROLLABLE_BEFORE_CLASS, SKROLLABLE_AFTER_CLASS]);
					skrollable.edge = 0;
				}
			}

			//Find out between which two key frames we are right now.
			var keyFrameIndex = 0;

			for(; keyFrameIndex < framesLength - 1; keyFrameIndex++) {
				if(frame >= frames[keyFrameIndex].frame && frame <= frames[keyFrameIndex + 1].frame) {
					var left = frames[keyFrameIndex];
					var right = frames[keyFrameIndex + 1];

					for(key in left.props) {
						if(hasProp.call(left.props, key)) {
							var progress = (frame - left.frame) / (right.frame - left.frame);

							//Transform the current progress using the given easing function.
							progress = left.props[key].easing(progress);

							//Interpolate between the two values
							value = _calcInterpolation(left.props[key].value, right.props[key].value, progress);

							value = _interpolateString(value);

							//Set style or attribute.
							if(key.indexOf('@') === 0) {
								element.setAttribute(key.substr(1), value);
							} else {
								skrollr.setStyle(element, key, value);
							}
						}
					}

					//Are events enabled on this element?
					//This code handles the usual cases of scrolling through different keyframes.
					//The special cases of before first and after last keyframe are handled above.
					if(emitEvents) {
						//Did we pass a new keyframe?
						if(lastFrameIndex !== keyFrameIndex) {
							if(_direction === 'down') {
								_emitEvent(element, left.eventType, _direction);
							} else {
								_emitEvent(element, right.eventType, _direction);
							}

							skrollable.lastFrameIndex = keyFrameIndex;
						}
					}

					break;
				}
			}
		}
	};

	/**
	 * Renders all elements.
	 */
	var _render = function() {
		if(_requestReflow) {
			_requestReflow = false;
			_reflow();
		}

		//We may render something else than the actual scrollbar position.
		var renderTop = _instance.getScrollTop();

		//If there's an animation, which ends in current render call, call the callback after rendering.
		var afterAnimationCallback;
		var now = _now();
		var progress;

		//Before actually rendering handle the scroll animation, if any.
		if(_scrollAnimation) {
			//It's over
			if(now >= _scrollAnimation.endTime) {
				renderTop = _scrollAnimation.targetTop;
				afterAnimationCallback = _scrollAnimation.done;
				_scrollAnimation = undefined;
			} else {
				//Map the current progress to the new progress using given easing function.
				progress = _scrollAnimation.easing((now - _scrollAnimation.startTime) / _scrollAnimation.duration);

				renderTop = (_scrollAnimation.startTop + progress * _scrollAnimation.topDiff) | 0;
			}

			_instance.setScrollTop(renderTop, true);
		}
		//Smooth scrolling only if there's no animation running and if we're not forcing the rendering.
		else if(!_forceRender) {
			var smoothScrollingDiff = _smoothScrolling.targetTop - renderTop;

			//The user scrolled, start new smooth scrolling.
			if(smoothScrollingDiff) {
				_smoothScrolling = {
					startTop: _lastTop,
					topDiff: renderTop - _lastTop,
					targetTop: renderTop,
					startTime: _lastRenderCall,
					endTime: _lastRenderCall + _smoothScrollingDuration
				};
			}

			//Interpolate the internal scroll position (not the actual scrollbar).
			if(now <= _smoothScrolling.endTime) {
				//Map the current progress to the new progress using easing function.
				progress = easings.sqrt((now - _smoothScrolling.startTime) / _smoothScrollingDuration);

				renderTop = (_smoothScrolling.startTop + progress * _smoothScrolling.topDiff) | 0;
			}
		}

		//That's were we actually "scroll" on mobile.
		if(_isMobile && _skrollrBody) {
			//Set the transform ("scroll it").
			skrollr.setStyle(_skrollrBody, 'transform', 'translate(0, ' + -(_mobileOffset) + 'px) ' + _translateZ);
		}

		//Did the scroll position even change?
		if(_forceRender || _lastTop !== renderTop) {
			//Remember in which direction are we scrolling?
			_direction = (renderTop > _lastTop) ? 'down' : (renderTop < _lastTop ? 'up' : _direction);

			_forceRender = false;

			var listenerParams = {
				curTop: renderTop,
				lastTop: _lastTop,
				maxTop: _maxKeyFrame,
				direction: _direction
			};

			//Tell the listener we are about to render.
			var continueRendering = _listeners.beforerender && _listeners.beforerender.call(_instance, listenerParams);

			//The beforerender listener function is able the cancel rendering.
			if(continueRendering !== false) {
				//Now actually interpolate all the styles.
				_calcSteps(renderTop, _instance.getScrollTop());

				//Remember when we last rendered.
				_lastTop = renderTop;

				if(_listeners.render) {
					_listeners.render.call(_instance, listenerParams);
				}
			}

			if(afterAnimationCallback) {
				afterAnimationCallback.call(_instance, false);
			}
		}

		_lastRenderCall = now;
	};

	/**
	 * Parses the properties for each key frame of the given skrollable.
	 */
	var _parseProps = function(skrollable) {
		//Iterate over all key frames
		var keyFrameIndex = 0;
		var keyFramesLength = skrollable.keyFrames.length;

		for(; keyFrameIndex < keyFramesLength; keyFrameIndex++) {
			var frame = skrollable.keyFrames[keyFrameIndex];
			var easing;
			var value;
			var prop;
			var props = {};

			var match;

			while((match = rxPropValue.exec(frame.props)) !== null) {
				prop = match[1];
				value = match[2];

				easing = prop.match(rxPropEasing);

				//Is there an easing specified for this prop?
				if(easing !== null) {
					prop = easing[1];
					easing = easing[2];
				} else {
					easing = DEFAULT_EASING;
				}

				//Exclamation point at first position forces the value to be taken literal.
				value = value.indexOf('!') ? _parseProp(value) : [value.slice(1)];

				//Save the prop for this key frame with his value and easing function
				props[prop] = {
					value: value,
					easing: easings[easing]
				};
			}

			frame.props = props;
		}
	};

	/**
	 * Parses a value extracting numeric values and generating a format string
	 * for later interpolation of the new values in old string.
	 *
	 * @param val The CSS value to be parsed.
	 * @return Something like ["rgba(?%,?%, ?%,?)", 100, 50, 0, .7]
	 * where the first element is the format string later used
	 * and all following elements are the numeric value.
	 */
	var _parseProp = function(val) {
		var numbers = [];

		//One special case, where floats don't work.
		//We replace all occurences of rgba colors
		//which don't use percentage notation with the percentage notation.
		rxRGBAIntegerColor.lastIndex = 0;
		val = val.replace(rxRGBAIntegerColor, function(rgba) {
			return rgba.replace(rxNumericValue, function(n) {
				return n / 255 * 100 + '%';
			});
		});

		//Handle prefixing of "gradient" values.
		//For now only the prefixed value will be set. Unprefixed isn't supported anyway.
		if(theDashedCSSPrefix) {
			rxGradient.lastIndex = 0;
			val = val.replace(rxGradient, function(s) {
				return theDashedCSSPrefix + s;
			});
		}

		//Now parse ANY number inside this string and create a format string.
		val = val.replace(rxNumericValue, function(n) {
			numbers.push(+n);
			return '{?}';
		});

		//Add the formatstring as first value.
		numbers.unshift(val);

		return numbers;
	};

	/**
	 * Fills the key frames with missing left and right hand properties.
	 * If key frame 1 has property X and key frame 2 is missing X,
	 * but key frame 3 has X again, then we need to assign X to key frame 2 too.
	 *
	 * @param sk A skrollable.
	 */
	var _fillProps = function(sk) {
		//Will collect the properties key frame by key frame
		var propList = {};
		var keyFrameIndex;
		var keyFramesLength;

		//Iterate over all key frames from left to right
		keyFrameIndex = 0;
		keyFramesLength = sk.keyFrames.length;

		for(; keyFrameIndex < keyFramesLength; keyFrameIndex++) {
			_fillPropForFrame(sk.keyFrames[keyFrameIndex], propList);
		}

		//Now do the same from right to fill the last gaps

		propList = {};

		//Iterate over all key frames from right to left
		keyFrameIndex = sk.keyFrames.length - 1;

		for(; keyFrameIndex >= 0; keyFrameIndex--) {
			_fillPropForFrame(sk.keyFrames[keyFrameIndex], propList);
		}
	};

	var _fillPropForFrame = function(frame, propList) {
		var key;

		//For each key frame iterate over all right hand properties and assign them,
		//but only if the current key frame doesn't have the property by itself
		for(key in propList) {
			//The current frame misses this property, so assign it.
			if(!hasProp.call(frame.props, key)) {
				frame.props[key] = propList[key];
			}
		}

		//Iterate over all props of the current frame and collect them
		for(key in frame.props) {
			propList[key] = frame.props[key];
		}
	};

	/**
	 * Calculates the new values for two given values array.
	 */
	var _calcInterpolation = function(val1, val2, progress) {
		var valueIndex;
		var val1Length = val1.length;

		//They both need to have the same length
		if(val1Length !== val2.length) {
			throw 'Can\'t interpolate between "' + val1[0] + '" and "' + val2[0] + '"';
		}

		//Add the format string as first element.
		var interpolated = [val1[0]];

		valueIndex = 1;

		for(; valueIndex < val1Length; valueIndex++) {
			//That's the line where the two numbers are actually interpolated.
			interpolated[valueIndex] = val1[valueIndex] + ((val2[valueIndex] - val1[valueIndex]) * progress);
		}

		return interpolated;
	};

	/**
	 * Interpolates the numeric values into the format string.
	 */
	var _interpolateString = function(val) {
		var valueIndex = 1;

		rxInterpolateString.lastIndex = 0;

		return val[0].replace(rxInterpolateString, function() {
			return val[valueIndex++];
		});
	};

	/**
	 * Resets the class and style attribute to what it was before skrollr manipulated the element.
	 * Also remembers the values it had before reseting, in order to undo the reset.
	 */
	var _reset = function(elements, undo) {
		//We accept a single element or an array of elements.
		elements = [].concat(elements);

		var skrollable;
		var element;
		var elementsIndex = 0;
		var elementsLength = elements.length;

		for(; elementsIndex < elementsLength; elementsIndex++) {
			element = elements[elementsIndex];
			skrollable = _skrollables[element[SKROLLABLE_ID_DOM_PROPERTY]];

			//Couldn't find the skrollable for this DOM element.
			if(!skrollable) {
				continue;
			}

			if(undo) {
				//Reset class and style to the "dirty" (set by skrollr) values.
				element.style.cssText = skrollable.dirtyStyleAttr;
				_updateClass(element, skrollable.dirtyClassAttr);
			} else {
				//Remember the "dirty" (set by skrollr) class and style.
				skrollable.dirtyStyleAttr = element.style.cssText;
				skrollable.dirtyClassAttr = _getClass(element);

				//Reset class and style to what it originally was.
				element.style.cssText = skrollable.styleAttr;
				_updateClass(element, skrollable.classAttr);
			}
		}
	};

	/**
	 * Detects support for 3d transforms by applying it to the skrollr-body.
	 */
	var _detect3DTransforms = function() {
		_translateZ = 'translateZ(0)';
		skrollr.setStyle(_skrollrBody, 'transform', _translateZ);

		var computedStyle = getStyle(_skrollrBody);
		var computedTransform = computedStyle.getPropertyValue('transform');
		var computedTransformWithPrefix = computedStyle.getPropertyValue(theDashedCSSPrefix + 'transform');
		var has3D = (computedTransform && computedTransform !== 'none') || (computedTransformWithPrefix && computedTransformWithPrefix !== 'none');

		if(!has3D) {
			_translateZ = '';
		}
	};

	/**
	 * Set the CSS property on the given element. Sets prefixed properties as well.
	 */
	skrollr.setStyle = function(el, prop, val) {
		var style = el.style;

		//Camel case.
		prop = prop.replace(rxCamelCase, rxCamelCaseFn).replace('-', '');

		//Make sure z-index gets a <integer>.
		//This is the only <integer> case we need to handle.
		if(prop === 'zIndex') {
			if(isNaN(val)) {
				//If it's not a number, don't touch it.
				//It could for example be "auto" (#351).
				style[prop] = val;
			} else {
				//Floor the number.
				style[prop] = '' + (val | 0);
			}
		}
		//#64: "float" can't be set across browsers. Needs to use "cssFloat" for all except IE.
		else if(prop === 'float') {
			style.styleFloat = style.cssFloat = val;
		}
		else {
			//Need try-catch for old IE.
			try {
				//Set prefixed property if there's a prefix.
				if(theCSSPrefix) {
					style[theCSSPrefix + prop.slice(0,1).toUpperCase() + prop.slice(1)] = val;
				}

				//Set unprefixed.
				style[prop] = val;
			} catch(ignore) {}
		}
	};

	/**
	 * Cross browser event handling.
	 */
	var _addEvent = skrollr.addEvent = function(element, names, callback) {
		var intermediate = function(e) {
			//Normalize IE event stuff.
			e = e || window.event;

			if(!e.target) {
				e.target = e.srcElement;
			}

			if(!e.preventDefault) {
				e.preventDefault = function() {
					e.returnValue = false;
					e.defaultPrevented = true;
				};
			}

			return callback.call(this, e);
		};

		names = names.split(' ');

		var name;
		var nameCounter = 0;
		var namesLength = names.length;

		for(; nameCounter < namesLength; nameCounter++) {
			name = names[nameCounter];

			if(element.addEventListener) {
				element.addEventListener(name, callback, false);
			} else {
				element.attachEvent('on' + name, intermediate);
			}

			//Remember the events to be able to flush them later.
			_registeredEvents.push({
				element: element,
				name: name,
				listener: callback
			});
		}
	};

	var _removeEvent = skrollr.removeEvent = function(element, names, callback) {
		names = names.split(' ');

		var nameCounter = 0;
		var namesLength = names.length;

		for(; nameCounter < namesLength; nameCounter++) {
			if(element.removeEventListener) {
				element.removeEventListener(names[nameCounter], callback, false);
			} else {
				element.detachEvent('on' + names[nameCounter], callback);
			}
		}
	};

	var _removeAllEvents = function() {
		var eventData;
		var eventCounter = 0;
		var eventsLength = _registeredEvents.length;

		for(; eventCounter < eventsLength; eventCounter++) {
			eventData = _registeredEvents[eventCounter];

			_removeEvent(eventData.element, eventData.name, eventData.listener);
		}

		_registeredEvents = [];
	};

	var _emitEvent = function(element, name, direction) {
		if(_listeners.keyframe) {
			_listeners.keyframe.call(_instance, element, name, direction);
		}
	};

	var _reflow = function() {
		var pos = _instance.getScrollTop();

		//Will be recalculated by _updateDependentKeyFrames.
		_maxKeyFrame = 0;

		if(_forceHeight && !_isMobile) {
			//un-"force" the height to not mess with the calculations in _updateDependentKeyFrames (#216).
			body.style.height = '';
		}

		_updateDependentKeyFrames();

		if(_forceHeight && !_isMobile) {
			//"force" the height.
			body.style.height = (_maxKeyFrame + documentElement.clientHeight) + 'px';
		}

		//The scroll offset may now be larger than needed (on desktop the browser/os prevents scrolling farther than the bottom).
		if(_isMobile) {
			_instance.setScrollTop(Math.min(_instance.getScrollTop(), _maxKeyFrame));
		} else {
			//Remember and reset the scroll pos (#217).
			_instance.setScrollTop(pos, true);
		}

		_forceRender = true;
	};

	/*
	 * Returns a copy of the constants object where all functions and strings have been evaluated.
	 */
	var _processConstants = function() {
		var viewportHeight = documentElement.clientHeight;
		var copy = {};
		var prop;
		var value;

		for(prop in _constants) {
			value = _constants[prop];

			if(typeof value === 'function') {
				value = value.call(_instance);
			}
			//Percentage offset.
			else if((/p$/).test(value)) {
				value = (value.slice(0, -1) / 100) * viewportHeight;
			}

			copy[prop] = value;
		}

		return copy;
	};

	/*
	 * Returns the height of the document.
	 */
	var _getDocumentHeight = function() {
		var skrollrBodyHeight = (_skrollrBody && _skrollrBody.offsetHeight || 0);
		var bodyHeight = Math.max(skrollrBodyHeight, body.scrollHeight, body.offsetHeight, documentElement.scrollHeight, documentElement.offsetHeight, documentElement.clientHeight);

		return bodyHeight - documentElement.clientHeight;
	};

	/**
	 * Returns a string of space separated classnames for the current element.
	 * Works with SVG as well.
	 */
	var _getClass = function(element) {
		var prop = 'className';

		//SVG support by using className.baseVal instead of just className.
		if(window.SVGElement && element instanceof window.SVGElement) {
			element = element[prop];
			prop = 'baseVal';
		}

		return element[prop];
	};

	/**
	 * Adds and removes a CSS classes.
	 * Works with SVG as well.
	 * add and remove are arrays of strings,
	 * or if remove is ommited add is a string and overwrites all classes.
	 */
	var _updateClass = function(element, add, remove) {
		var prop = 'className';

		//SVG support by using className.baseVal instead of just className.
		if(window.SVGElement && element instanceof window.SVGElement) {
			element = element[prop];
			prop = 'baseVal';
		}

		//When remove is ommited, we want to overwrite/set the classes.
		if(remove === undefined) {
			element[prop] = add;
			return;
		}

		//Cache current classes. We will work on a string before passing back to DOM.
		var val = element[prop];

		//All classes to be removed.
		var classRemoveIndex = 0;
		var removeLength = remove.length;

		for(; classRemoveIndex < removeLength; classRemoveIndex++) {
			val = _untrim(val).replace(_untrim(remove[classRemoveIndex]), ' ');
		}

		val = _trim(val);

		//All classes to be added.
		var classAddIndex = 0;
		var addLength = add.length;

		for(; classAddIndex < addLength; classAddIndex++) {
			//Only add if el not already has class.
			if(_untrim(val).indexOf(_untrim(add[classAddIndex])) === -1) {
				val += ' ' + add[classAddIndex];
			}
		}

		element[prop] = _trim(val);
	};

	var _trim = function(a) {
		return a.replace(rxTrim, '');
	};

	/**
	 * Adds a space before and after the string.
	 */
	var _untrim = function(a) {
		return ' ' + a + ' ';
	};

	var _now = Date.now || function() {
		return +new Date();
	};

	var _keyFrameComparator = function(a, b) {
		return a.frame - b.frame;
	};

	/*
	 * Private variables.
	 */

	//Singleton
	var _instance;

	/*
		A list of all elements which should be animated associated with their the metadata.
		Exmaple skrollable with two key frames animating from 100px width to 20px:

		skrollable = {
			element: <the DOM element>,
			styleAttr: <style attribute of the element before skrollr>,
			classAttr: <class attribute of the element before skrollr>,
			keyFrames: [
				{
					frame: 100,
					props: {
						width: {
							value: ['{?}px', 100],
							easing: <reference to easing function>
						}
					},
					mode: "absolute"
				},
				{
					frame: 200,
					props: {
						width: {
							value: ['{?}px', 20],
							easing: <reference to easing function>
						}
					},
					mode: "absolute"
				}
			]
		};
	*/
	var _skrollables;

	var _skrollrBody;

	var _listeners;
	var _forceHeight;
	var _maxKeyFrame = 0;

	var _scale = 1;
	var _constants;

	var _mobileDeceleration;

	//Current direction (up/down).
	var _direction = 'down';

	//The last top offset value. Needed to determine direction.
	var _lastTop = -1;

	//The last time we called the render method (doesn't mean we rendered!).
	var _lastRenderCall = _now();

	//For detecting if it actually resized (#271).
	var _lastViewportWidth = 0;
	var _lastViewportHeight = 0;

	var _requestReflow = false;

	//Will contain data about a running scrollbar animation, if any.
	var _scrollAnimation;

	var _smoothScrollingEnabled;

	var _smoothScrollingDuration;

	//Will contain settins for smooth scrolling if enabled.
	var _smoothScrolling;

	//Can be set by any operation/event to force rendering even if the scrollbar didn't move.
	var _forceRender;

	//Each skrollable gets an unique ID incremented for each skrollable.
	//The ID is the index in the _skrollables array.
	var _skrollableIdCounter = 0;

	var _edgeStrategy;


	//Mobile specific vars. Will be stripped by UglifyJS when not in use.
	var _isMobile = false;

	//The virtual scroll offset when using mobile scrolling.
	var _mobileOffset = 0;

	//If the browser supports 3d transforms, this will be filled with 'translateZ(0)' (empty string otherwise).
	var _translateZ;

	//Will contain data about registered events by skrollr.
	var _registeredEvents = [];

	//Animation frame id returned by RequestAnimationFrame (or timeout when RAF is not supported).
	var _animFrame;

	//Expose skrollr as either a global variable or a require.js module
	if(typeof define === 'function' && define.amd) {
		define('skrollr', function () {
			return skrollr;
		});
	} else {
		window.skrollr = skrollr;
	}

}(window, document));











/*! http://mths.be/placeholder v2.0.8 by @mathias */
;(function(window, document, $) {

	// Opera Mini v7 doesn’t support placeholder although its DOM seems to indicate so
	var isOperaMini = Object.prototype.toString.call(window.operamini) == '[object OperaMini]';
	var isInputSupported = 'placeholder' in document.createElement('input') && !isOperaMini;
	var isTextareaSupported = 'placeholder' in document.createElement('textarea') && !isOperaMini;
	var prototype = $.fn;
	var valHooks = $.valHooks;
	var propHooks = $.propHooks;
	var hooks;
	var placeholder;

	if (isInputSupported && isTextareaSupported) {

		placeholder = prototype.placeholder = function() {
			return this;
		};

		placeholder.input = placeholder.textarea = true;

	} else {

		placeholder = prototype.placeholder = function() {
			var $this = this;
			$this
				.filter((isInputSupported ? 'textarea' : ':input') + '[placeholder]')
				.not('.placeholder')
				.bind({
					'focus.placeholder': clearPlaceholder,
					'blur.placeholder': setPlaceholder
				})
				.data('placeholder-enabled', true)
				.trigger('blur.placeholder');
			return $this;
		};

		placeholder.input = isInputSupported;
		placeholder.textarea = isTextareaSupported;

		hooks = {
			'get': function(element) {
				var $element = $(element);

				var $passwordInput = $element.data('placeholder-password');
				if ($passwordInput) {
					return $passwordInput[0].value;
				}

				return $element.data('placeholder-enabled') && $element.hasClass('placeholder') ? '' : element.value;
			},
			'set': function(element, value) {
				var $element = $(element);

				var $passwordInput = $element.data('placeholder-password');
				if ($passwordInput) {
					return $passwordInput[0].value = value;
				}

				if (!$element.data('placeholder-enabled')) {
					return element.value = value;
				}
				if (value == '') {
					element.value = value;
					// Issue #56: Setting the placeholder causes problems if the element continues to have focus.
					if (element != safeActiveElement()) {
						// We can't use `triggerHandler` here because of dummy text/password inputs :(
						setPlaceholder.call(element);
					}
				} else if ($element.hasClass('placeholder')) {
					clearPlaceholder.call(element, true, value) || (element.value = value);
				} else {
					element.value = value;
				}
				// `set` can not return `undefined`; see http://jsapi.info/jquery/1.7.1/val#L2363
				return $element;
			}
		};

		if (!isInputSupported) {
			valHooks.input = hooks;
			propHooks.value = hooks;
		}
		if (!isTextareaSupported) {
			valHooks.textarea = hooks;
			propHooks.value = hooks;
		}

		$(function() {
			// Look for forms
			$(document).delegate('form', 'submit.placeholder', function() {
				// Clear the placeholder values so they don't get submitted
				var $inputs = $('.placeholder', this).each(clearPlaceholder);
				setTimeout(function() {
					$inputs.each(setPlaceholder);
				}, 10);
			});
		});

		// Clear placeholder values upon page reload
		$(window).bind('beforeunload.placeholder', function() {
			$('.placeholder').each(function() {
				this.value = '';
			});
		});

	}

	function args(elem) {
		// Return an object of element attributes
		var newAttrs = {};
		var rinlinejQuery = /^jQuery\d+$/;
		$.each(elem.attributes, function(i, attr) {
			if (attr.specified && !rinlinejQuery.test(attr.name)) {
				newAttrs[attr.name] = attr.value;
			}
		});
		return newAttrs;
	}

	function clearPlaceholder(event, value) {
		var input = this;
		var $input = $(input);
		if (input.value == $input.attr('placeholder') && $input.hasClass('placeholder')) {
			if ($input.data('placeholder-password')) {
				$input = $input.hide().next().show().attr('id', $input.removeAttr('id').data('placeholder-id'));
				// If `clearPlaceholder` was called from `$.valHooks.input.set`
				if (event === true) {
					return $input[0].value = value;
				}
				$input.focus();
			} else {
				input.value = '';
				$input.removeClass('placeholder');
				input == safeActiveElement() && input.select();
			}
		}
	}

	function setPlaceholder() {
		var $replacement;
		var input = this;
		var $input = $(input);
		var id = this.id;
		if (input.value == '') {
			if (input.type == 'password') {
				if (!$input.data('placeholder-textinput')) {
					try {
						$replacement = $input.clone().attr({ 'type': 'text' });
					} catch(e) {
						$replacement = $('<input>').attr($.extend(args(this), { 'type': 'text' }));
					}
					$replacement
						.removeAttr('name')
						.data({
							'placeholder-password': $input,
							'placeholder-id': id
						})
						.bind('focus.placeholder', clearPlaceholder);
					$input
						.data({
							'placeholder-textinput': $replacement,
							'placeholder-id': id
						})
						.before($replacement);
				}
				$input = $input.removeAttr('id').hide().prev().attr('id', id).show();
				// Note: `$input[0] != input` now!
			}
			$input.addClass('placeholder');
			$input[0].value = $input.attr('placeholder');
		} else {
			$input.removeClass('placeholder');
		}
	}

	function safeActiveElement() {
		// Avoid IE9 `document.activeElement` of death
		// https://github.com/mathiasbynens/jquery-placeholder/pull/99
		try {
			return document.activeElement;
		} catch (exception) {}
	}

}(this, document, jQuery));
;
'use strict';
/*jshint devel:true, loopfunc: true */
/*global jQuery:false, skrollr: false */
//Search bar size
(function($, window, document, undefined) {
    var pluginName = 'searchBarSize',
        defaults = {

        };

    function Plugin(element, options) {
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        init: function() {
            var $this = this;
            if ($(window).width() < 992) return;
            this.setSizeAndMargin();
            $(window).resize(function() {
                $this.setSizeAndMargin();
            });

            $(this.element).fadeIn();
        },
        setSizeAndMargin: function() {
            var sB = $(this.element),
                container = sB.parents('.navbar-container'),
                containerInner = sB.parents('.navbar-holder'),
                containerPT = (~~container.outerWidth() - ~~container.width()) / 2,
                containerWidth = ~~container.outerWidth(),
                navBarWidth = ~~sB.parents('#navbar').width(),
                right,
                maxWidth,
                newWidth;

            right = ((navBarWidth - containerWidth) / 2 + containerPT) - 10;
            maxWidth = right;
            if (maxWidth > 250) {
                newWidth = 250;
                containerInner.css('padding-right', 0);
            } else if (maxWidth < 150) {
                var paddingRight = 150 - maxWidth;
                newWidth = 150;
                containerInner.css('padding-right', paddingRight);
                if ($(window).width() < 992) {
                    containerInner.css('padding-right', 0);
                }
            } else {
                newWidth = maxWidth;
                containerInner.css('padding-right', 0);
            }
            // newWidth = ((100 + right) > 250) ? 250 : (100 + right);
            sB.css({
                'width': newWidth,
                'right': '-' + right + 'px'
            });

        }
    };

    $.fn[pluginName] = function(options) {
        this.each(function() {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
            }
        });

        return this;
    };

})(jQuery, window, document);
//Main slider
(function($, window, document, undefined) {
    var pluginName = 'mainSlider',
        defaults = {

        };

    function Plugin(element, options) {
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        init: function() {
            var $this = this;
            this.ratio = 2.55;
            this.setSliderSize();

            $(window).resize(function() {
                $this.setSliderSize();
            });

            if(this.settings.slide) {
                this.startSlideShow();
            }

            $(window).trigger('resize');
        },
        setSliderSize: function() {
            var windowWidth = $(window).width(),
                windowHeight = $(window).height(),
                textHolder = $(this.element).find('.text-holder'),
                textHolderHeight = textHolder.height(),
                navBarHeight = $('#navbar').height(),
                scaledHeight = windowWidth / this.ratio,
                availableSpaceForSlider = windowHeight * (3 / 4),
                sliderHeight = (availableSpaceForSlider < scaledHeight) ? scaledHeight : availableSpaceForSlider,
                points = {
                    'min': 400,
                    'h425': 425,
                    'h450': 450,
                    'h475': 475,
                    'h500': 500,
                    'h525': 525
                },
                sliderHeightClass = '',
                minSliderHeight = 0;

            //If less than 400, set height 400px;
            minSliderHeight = navBarHeight + textHolderHeight;
            if(sliderHeight <= (minSliderHeight + 80)) {
                sliderHeight = minSliderHeight + 80;
                if(sliderHeight < 400) {
                    sliderHeight = 400;
                }
            } else if(sliderHeight < 400) {
                sliderHeight = 400;
            }

            $(this.element).css('height', sliderHeight);
        },

        startSlideShow: function() {
            var $this = this;

            function changeSlides(a) {
                var holder = $($this.element),
                    slides = holder.find('.slide'),
                    interval = 4500;
                slides.eq(a).transition({
                    left: 0,
                    opacity: 1
                }, 1000, 'easeOutQuad', function() {
                    var n = $(this);
                    setTimeout(function() {
                        n.transition({
                            left: '-150%',
                            opacity: 0
                        }, 750, 'easeInQuad').transition({
                            left: '150%',
                            opacity: 0
                        }, 0), changeSlides((a + 1) % slides.length);
                    }, interval);
                });
            }
            changeSlides(0);
        }
    };


    $.fn[pluginName] = function(options) {
        this.each(function() {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
            }
        });

        return this;
    };

})(jQuery, window, document);


//Cup smoke
(function($, window, document, undefined) {
    var pluginName = 'cupSmoke',
        defaults = {

        };

    function Plugin(element, options) {
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        init: function() {
            this.makeSmoke();
        },
        makeSmoke: function() {
            var a = 0;
            for (; a < 15; a += 1) {
                setTimeout(
                    function b() {
                        //creative 'smoke' div
                        var a = Math.random() * 1e3 + 4e3,
                            c = $('<div />', {
                                'class': 'smoke',
                                css: {
                                    top: Math.random() * 100 - 110,
                                    right: -20
                                }
                            });
                        $(c).appendTo('.smoke-inner');
                        $.when($(c).animate({}, {
                            duration: a / 4,
                            easing: 'linear',
                            queue: false,
                            complete: function() {
                                $(c).animate({}, {
                                    duration: a / 3,
                                    easing: 'linear',
                                    queue: false
                                });
                            }
                        }), $(c).animate({
                            right: 300,
                            top: 60
                        }, {
                            duration: a,
                            easing: 'linear',
                            queue: false
                        })).then(function() {
                            $(c).remove();
                            b();
                        });
                    },
                    Math.random() * 3e3
                );
            }
        }
    };

    $.fn[pluginName] = function(options) {
        this.each(function() {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
            }
        });

        return this;
    };

})(jQuery, window, document);




//Testimonials slider
(function($, window, document, undefined) {
    var pluginName = 'testimonialsSlider',
        defaults = {};

    function Plugin(element, options) {
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        init: function() {
            var $this = this;
            this.splitTestimonialsToSlides();
            $(window).resize(function() {
                $this.checkWindowSize();
                $this.setMarginsForLogos();
            });

            this.logosActions();
            this.controlsActions();
        },
        checkWindowSize: function() {
            var containerWidth = $('.testimonials-logos-frame').width();
            if (typeof window.containerWidth == 'undefined') return;
            var $this = this,
                previousSize = $this.windowSize(window.containerWidth),
                currentSize = $this.windowSize(containerWidth);
            if (previousSize !== currentSize) {
                $this.splitTestimonialsToSlides();
            }
        },

        windowSize: function(size) {
            if (size < 992) {
                return 's';
            }  else {
                return 'b';
            }
        },

        splitTestimonialsToSlides: function() {
            var $this = this,
                testimonialsBlock = $($this.element),
                container = $('.testimonials-logos-frame'),
                containerWidth = container.width(),
                tlogos = container.find('.t-logo'),
                maxTestimonials = 0;
            window.containerWidth = containerWidth;

            container.append(tlogos);
            var slides = container.find('.testimonials-logos-slide');
            if (slides.length) {
                slides.remove();
            }
            if (containerWidth < 992) {
                maxTestimonials = 3;
            } else {
                maxTestimonials = 5;
            }

            for (var i = 0; i < tlogos.length; i += maxTestimonials) {
                var slideTestimonials = tlogos.slice(i, i + maxTestimonials);
                slideTestimonials.wrapAll('<div class="testimonials-logos-slide"><div class="slide-holder"></div></div>');

                $('.testimonials-logos-slide').each(function(index){
                    var sl = $(this);
                    if(index === 0) {
                        sl.addClass('active').css('left', 0);
                    } else {
                        sl.css({'left': '150%', 'opacity' : 0});
                    }

                });
            }
            container.css('visibility', 'visible');

            testimonialsBlock.find('.testimonial').fadeOut();

            this.addControls();
            this.setActiveTestimonial();
            this.setMarginsForLogos();
        },


        setTestimonialsBlockHeight: function(){
            var holder = $(this.element),
                frame = holder.find('.testimonials-frame'),
                activeTestimonial = frame.find('.active'),
                someSpace = (frame.width() < 768) ? 20 : 40;

            frame.css('height', (activeTestimonial.height() + someSpace));
        },

        setActiveTestimonial: function(){
            var holder = $(this.element),
                frame = holder.find('.testimonials-frame'),
                logosframe = holder.find('.testimonials-logos-section'),
                logosframeWidth = logosframe.width(),
                visibleItems,
                medianItem;

            if(logosframeWidth < 992) {
                visibleItems = 3;
                medianItem = 2;
            } else {
                visibleItems = 5;
                medianItem  = 3;
            }
            frame.find('.testimonial').removeClass('active').fadeOut();
            holder.find('.t-logo').removeClass('active');

            frame.find('.testimonial').eq(medianItem-1).addClass('active').fadeIn();
            holder.find('.t-logo').eq(medianItem-1).addClass('active');
            holder.find('.slider-controls .point').eq(0).addClass('active');

            this.setTestimonialsBlockHeight();
        },

        setMarginsForLogos: function(){
            var holder = $(this.element),
                frame = holder.find('.testimonials-logos-section'),
                frameWidth = frame.width(),
                slides = holder.find('.testimonials-logos-slide'),
                slidesHolder = slides.find('.slide-holder'),
                items = frame.find('.t-logo'),
                activeItem = frame.find('.t-logo.active'),
                activeSlide = activeItem.parents('.testimonials-logos-slide'),
                itemWidth = activeItem.outerWidth(),
                visibleItems = 0,
                medianItem = 0;

            if(frameWidth < 992) {
                visibleItems = 3;
                medianItem = 2;
            } else {
                visibleItems = 5;
                medianItem  = 3;
            }

            var marginLeft = (frameWidth - visibleItems*itemWidth)/(visibleItems - 1);
            items.each(function() {
                $(this).css('margin-left', marginLeft);
            });

            //set margin for holder
            var slideIndex = slides.index(activeSlide);
            var index = activeSlide.find('.t-logo').index(activeItem);
            if((index + 1) == medianItem) {
                activeSlide.find('.slide-holder').css('left', '-'+marginLeft+'px');
            } else {
                var diff = medianItem - (index + 1);
                activeSlide.find('.slide-holder').css('left', diff*(marginLeft + itemWidth) - marginLeft);
            }

        },


        addControls: function() {
            var controls = $(this.element).find('.slider-controls-holder');
            if (controls.length) {
                controls.remove();
            }

            var pointsLen = $(this.element).find('.testimonials-logos-frame').children().length;
            var controlsBlock = $(
                '<div class="slider-controls-holder">' +
                '<div class="slider-controls">' +
                '</div>' +
                '</div>');
            for (var i = 0; i < pointsLen; i++) {
                var point = $('<div class="point"></div>');
                controlsBlock.find('.slider-controls').append(point);
            }
            $(this.element).append(controlsBlock);
        },

        controlsActions: function(){
            var $this = this;
            $(document).on('click', '.point', function(event) {
                if ($(event.currentTarget).hasClass('active')) return;
                var index = $('.slider-controls .point').index(this);
                $this.goToSlide(index);
            });
        },

        logosActions: function(){
            var $this = this;
            $(document).on('mouseover', '.t-logo', function(event) {
                if ($(event.currentTarget).hasClass('active')) return;

                var index = $('.t-logo').index(this);
                $this.goToTestimonial(index);
            });
        },

        goToTestimonial: function(index) {
            var holder = $(this.element),
                frame = holder.find('.testimonials-frame'),
                testimonials = frame.find('.testimonial'),
                activeTestimonial = frame.find('.testimonial.active'),
                block = holder.find('.testimonials-logos-slide'),
                items = block.find('.t-logo');

            activeTestimonial.fadeOut().removeClass('active');
            testimonials.eq(index).fadeIn().addClass('active');

            items.removeClass('active');
            items.eq(index).addClass('active');

            this.setTestimonialsBlockHeight();
            this.setMarginsForLogos();
        },

        goToSlide: function(index) {
            var holder = $(this.element),
                frame = holder.find('.testimonials-frame'),
                logosFrame = holder.find('.testimonials-logos-section'),
                logosFrameWidth = logosFrame.width(),
                testimonials = frame.find('.testimonial'),
                activeTestimonial = frame.find('.testimonial.active'),
                slides = holder.find('.testimonials-logos-slide'),
                items = slides.find('.t-logo'),
                visibleItems = 0,
                medianItem = 0;

            if(logosFrameWidth < 992) {
                visibleItems = 3;
                medianItem = 2;
            } else {
                visibleItems = 5;
                medianItem  = 3;
            }

            //set new testimonial
            items.removeClass('active');

            slides.filter('.active').removeClass('active').css({'left': '-150%', 'opacity' : 0}).delay(800).queue(
                function(next){
                    $(this).css({'left': '150%'});
                    next();
                });
            var activeSlide = slides.eq(index).addClass('active').css({'left': 0, 'opacity' : 1});

            var nextLogo = activeSlide.find('.t-logo').eq(medianItem-1);
            nextLogo.addClass('active');

            var nextLogoIndex = logosFrame.find('.t-logo').index(nextLogo);
            activeTestimonial.fadeOut().removeClass('active');
            frame.find('.testimonial').eq(nextLogoIndex).fadeIn().addClass('active');


            $('.slider-controls .point').removeClass('active');
            $('.slider-controls .point').eq(index).addClass('active');

            this.setTestimonialsBlockHeight();
            this.setMarginsForLogos();
        }
    };


    $.fn[pluginName] = function(options) {
        this.each(function() {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
            }
        });

        return this;
    };

})(jQuery, window, document);


//Testimonials slider
(function($, window, document, undefined) {
    var pluginName = 'parallaxAnimations',
        defaults = {};

    function Plugin(element, options) {
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        skr: '',
        init: function() {
            var $this = this;
            this.feature1Animations();
            this.feature2Animations();
            this.otherFeaturesAnimations();
            this.benefitsAnimations();
            this.testimonialsAnimations();
            this.skr = skrollr.init({forceHeight:false, smoothScrollingDuration: 400});
            window.windowWidth = $(window).width();

            //Update after window resize
            var doit;
            function resizedw(){
                $this.checkWindowSize();
            }
            window.onresize = function() {
                clearTimeout(doit);
                doit = setTimeout(function() {
                    resizedw();
                }, 100);
            };
        },
        checkWindowSize: function() {
            var $this = this;
            var windowWidth = $(window).width();
            if (typeof window.windowWidth == 'undefined') return;

            var $this = this,
                previousSize = $this.windowSize(window.windowWidth),
                currentSize = $this.windowSize(windowWidth);

            if (previousSize !== currentSize) {
                window.windowWidth = $(window).width();

                $this.feature1Animations();
                $this.feature2Animations();
                $this.otherFeaturesAnimations();
                $this.benefitsAnimations();
                $this.testimonialsAnimations();
                $this.skr.destroy();
                $this.skr = skrollr.init({forceHeight:false, smoothScrollingDuration: 400});
            }
        },

        windowSize: function(size) {
            if(size >= 1400) {
                return 'xl';
            } else if(size < 1400 && size >= 1200) {
                return 'lg';
            } else if(size < 1200 && size >= 992) {
                return 'md';
            } else if(size < 992 && size >= 768) {
                return 'sm';
            } else if(size < 768) {
                return 'xs';
            }
        },

        feature1Animations: function(){
            var holder = $(this.element).find('.feature-img1');

            var feature1 = holder.find('.feature1-img');
            feature1.attr('data-anchor-target', '.feature-img1');
            feature1.attr('data-bottom-top', 'transform: translateY(80%);');
            feature1.attr('data-center', 'transform: translateY(0%);');

        },
        feature2Animations: function(){
            var holder = $(this.element).find('.feature2'),
                el1 = holder.find('.el1'),
                el2 = holder.find('.el2'),
                el3 = holder.find('.el3');

            el1.attr('data-anchor-target', '.feature2-img-section');
            el1.attr('data-bottom-top', 'transform: translateY(70%);');
            el1.attr('data-center', 'transform: translateY(0%);');

            el2.attr('data-anchor-target', '.feature2-img-section');
            el2.attr('data-bottom-top', 'transform: translateY(80%);');
            el2.attr('data-center', 'transform: translateY(0%);');

            el3.attr('data-anchor-target', '.feature2-img-section');
            el3.attr('data-bottom-top', 'transform: translateY(-50%);');
            el3.attr('data-center', 'transform: translateY(0%);');

        },
        otherFeaturesAnimations: function(){
            var holder = $(this.element).find('.other-features'),
                feature3 = holder.find('.f3 .elem'),
                feature4 = holder.find('.f4 .elem'),
                feature5 = holder.find('.f5 .elem');

            feature3.attr('data-anchor-target', '.other-features .f3');
            feature3.attr('data-100-bottom', 'transform: translateY(120%);');
            feature3.attr('data-center-bottom', 'transform: translateY(0%);');

            feature4.attr('data-anchor-target', '.other-features .f4');
            feature4.attr('data-100-bottom', 'transform:rotate(0deg);');
            feature4.attr('data-top', 'transform:rotate(720deg);');

            feature5.attr('data-anchor-target', '.other-features .f5');
            feature5.attr('data-100-bottom', 'transform: translateY(120%);');
            feature5.attr('data-center-bottom', 'transform: translateY(0%);');

        },
        benefitsAnimations: function(){
            var holder = $(this.element).find('.benefits'),
                block = holder.find('.benefits-holder'),
                blockWidth = block.width(),
                b1 = holder.find('.b1'),
                b2 = holder.find('.b2'),
                b3 = holder.find('.b3'),
                b4 = holder.find('.b4'),
                margin1,
                margin2;

            switch(blockWidth) {
                case 1400:
                    margin1 = 525;
                    margin2 = 175;
                    break;
                case 1200:
                    margin1 = 455;
                    margin2 = 155;
                    break;
                case 992:
                    margin1 = 375;
                    margin2 = 125;
                    break;
                case 768:
                    margin1 = 285;
                    margin2 = 95;
                    break;
                default:
                    margin1 = 100;
                    margin2 = 100;
                    break;
            }


            b1.attr('data-anchor-target', '.benefit .b1');
            b1.attr('data-50-bottom', 'transform: translateX('+margin1+'px);');
            b1.attr('data-center', 'transform: translateX(0px);');

            b2.attr('data-anchor-target', '.benefit .b2');
            b2.attr('data-50-bottom', 'transform: translateX('+margin2+'px);');
            b2.attr('data-center', 'transform: translateX(0px);');

            b3.attr('data-anchor-target', '.benefit .b3');
            b3.attr('data-50-bottom', 'transform: translateX(-'+margin2+'px);');
            b3.attr('data-center', 'transform: translateX(0px);');

            b4.attr('data-anchor-target', '.benefit .b4');
            b4.attr('data-50-bottom', 'transform: translateX(-'+margin1+'px);');
            b4.attr('data-center', 'transform: translateX(0px);');

            holder.find('.icons-block').each(function(index){
                var ic = $(this);
                ic.attr('data-20-bottom', 'opacity: 0;');
                ic.attr('data-center', 'opacity: 1;');
            });
        },
        testimonialsAnimations: function(){
            var holder = $(this.element).find('.testimonials-frame');

            holder.find('.q1').each(function(){
                var q = $(this);

                q.attr('data-anchor-target', '.testimonials-frame');
                q.attr('data-center-top', 'transform: translateX(-250%);');
                q.attr('data-center', 'transform: translateX(0%);');
            });
            holder.find('.q2').each(function(){
                var q = $(this);

                q.attr('data-anchor-target', '.testimonials-frame');
                q.attr('data-center-top', 'transform: translateX(250%);');
                q.attr('data-center', 'transform: translateX(0%);');
            });
            holder.find('.testimonial').each(function(){
                var t = $(this);

                t.css('opacity', 1);

                t.attr('data-anchor-target', '.testimonials-frame');
                t.attr('data-bottom-top', 'transform: translateY(100%); opacity:0;');
                t.attr('data-center', 'transform: translateY(0%); opacity:1;');
            });
        }
    };


    $.fn[pluginName] = function(options) {
        this.each(function() {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
            }
        });

        return this;
    };

})(jQuery, window, document);

//featuresAndBenefitsSectionsSizes
(function($, window, document, undefined) {
    var pluginName = 'featuresAndBenefitsSectionsSizes',
        defaults = {

        };

    function Plugin(element, options) {
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        init: function() {
            var $this = this;
            this.features = $(this.element).find('.other-features .feature');
            this.benefits = $(this.element).find('.benefits-frame .benefit');

            $this.changeSizes();
            $(window).resize(function() {
                $this.changeSizes();
            });
        },

        changeSizes: function() {
            var $this = this,
                windowWidth = $(window).width(),
                featureHeaderMaxHeight = 0,
                featureContentMaxHeight = 0,
                benefitHeaderMaxHeight = 0,
                benefitContentMaxHeight = 0;

            this.features.each(function() {
                var feature = $(this),
                    featureHeaderHeight = feature.find('.heading-holder').css('height', 'auto').height(),
                    featureContentHeight = feature.find('p').css('height', 'auto').height();

                featureHeaderMaxHeight = (featureHeaderHeight > featureHeaderMaxHeight) ? featureHeaderHeight : featureHeaderMaxHeight;
                featureContentMaxHeight = (featureContentHeight > featureContentMaxHeight) ? featureContentHeight : featureContentMaxHeight;
            });

            this.benefits.each(function() {
                var benefit = $(this),
                    benefitHeaderHeight = benefit.find('h3').css('height', 'auto').height(),
                    benefitContentHeight = benefit.find('p').css('height', 'auto').height();

                benefitHeaderMaxHeight = (benefitHeaderHeight > benefitHeaderMaxHeight) ? benefitHeaderHeight : benefitHeaderMaxHeight;
                benefitContentMaxHeight = (benefitContentHeight > benefitContentMaxHeight) ? benefitContentHeight : benefitContentMaxHeight;
            });

            if (windowWidth < 768) {
                $this.features.each(function() {
                    $(this).find('.heading-holder').css('height', 'auto');
                    $(this).find('p').css('height', 'auto');
                });
                $this.benefits.each(function() {
                    $(this).find('h3').css('height', 'auto');
                    $(this).find('p').css('height', 'auto');
                });
            } else {
                $this.features.each(function() {
                    $(this).find('.heading-holder').css('height', featureHeaderMaxHeight);
                    $(this).find('p').css('height', featureContentMaxHeight);
                });
                $this.benefits.each(function() {
                    $(this).find('h3').css('height', benefitHeaderMaxHeight);
                    $(this).find('p').css('height', benefitContentMaxHeight);
                });
            }
        }
    };


    $.fn[pluginName] = function(options) {
        this.each(function() {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
            }
        });

        return this;
    };

})(jQuery, window, document);

//Semi-transparent navigation bar
(function($, window, document, undefined) {
    var pluginName = 'navBar',
        defaults = {

        };

    function Plugin(element, options) {
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        init: function() {
            var $this = this;
            $this.fadeNav();
            $(window).scroll(function() {
                $this.fadeNav();
            });
        },

        fadeNav: function() {
            var offset = this.getScrollXY();
            offset[1] > 0 ? $(this.element).addClass('semi-transparent') : $(this.element).removeClass('semi-transparent');
        },

        getScrollXY: function() {
            var scrOfX = 0,
                scrOfY = 0;
            if (typeof(window.pageYOffset) == 'number') {
                //Netscape compliant
                scrOfY = window.pageYOffset;
                scrOfX = window.pageXOffset;
            } else if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
                //DOM compliant
                scrOfY = document.body.scrollTop;
                scrOfX = document.body.scrollLeft;
            } else if (document.documentElement && (document.documentElement.scrollLeft ||
                document.documentElement.scrollTop)) {
                //IE6 standards compliant mode
                scrOfY = document.documentElement.scrollTop;
                scrOfX = document.documentElement.scrollLeft;
            }

            return [scrOfX, scrOfY];
        }
    };


    $.fn[pluginName] = function(options) {
        this.each(function() {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
            }
        });

        return this;
    };

})(jQuery, window, document);



//Page animations
(function($, window, document, undefined) {
    var pluginName = 'pageAnimations',
        defaults = {

        };

    function Plugin(element, options) {
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        init: function() {
            $('.feature1-img').css('visibility', 'hidden');
            $('.feature2-img').css('visibility', 'hidden');
            $(window).scroll(function() {
                var viewport = $(window),
                    viewportTop = viewport.scrollTop(),
                    viewportBottom = viewport.scrollTop() + viewport.height();

                //Show elements when it's 20% visible on screen
                $('.feature1-img').each(function() {
                    var neededVisibleHeight = (~~$(this).height()) * 0.2,
                        elementPos = $(this).offset().top,
                        pointToShow = elementPos + neededVisibleHeight;
                    //&& ($(window).width() > 767)
                    if (pointToShow > viewportTop && pointToShow < viewportBottom) {
                        $(this).addClass('slowlySlideUp');
                        setTimeout(function() {
                            $('.magnifier').css('visibility', 'visible');
                        }, 3050);
                    }
                });
                $('.feature2-img').each(function() {
                    var neededVisibleHeight = (~~$(this).height()) * 0.2,
                        elementPos = $(this).offset().top,
                        pointToShow = elementPos + neededVisibleHeight;
                    if (pointToShow > viewportTop && pointToShow < viewportBottom) {
                        $(this).addClass('slowlySlideFromMiddleToTop');
                    }
                });
            });
        }
    };

    $.fn[pluginName] = function(options) {
        this.each(function() {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
            }
        });

        return this;
    };

})(jQuery, window, document);

//Benefits
(function($, window, document, undefined) {
    var pluginName = 'benefitsActions',
        defaults = {

        };

    function Plugin(element, options) {
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        init: function() {
            var holder = $(this.element),
                benefits = holder.find('.benefit'),
                bubbles = holder.find('.bubble');


            benefits.on('click', function(event) {
                var benefit = $(event.currentTarget);
                benefits.find('.circle').removeClass('has-dot');
                benefit.find('.circle').addClass('has-dot');
            });
            bubbles.each(function() {
                var bl = $(this);

                bl.hover(function(event) {
                    var trigger = $(event.currentTarget);
                    holder.find('.bubble').not(trigger).addClass('small');
                }, function() {
                    holder.find('.bubble').removeClass('small');
                });

            });
        }
    };

    $.fn[pluginName] = function(options) {
        this.each(function() {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
            }
        });

        return this;
    };

})(jQuery, window, document);




//Cutsomers slider
(function($, window, document, undefined) {
    var pluginName = 'customersSlider',
        defaults = {

        };

    function Plugin(element, options) {
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        init: function() {
            var $this = this;

            $(window).load(function() {
                $this.carouselSize = $this.detectCarouselSize();
                var holder = $($this.element),
                    carousel = $(
                        '<div class="carousel">' +
                        '<div class="carousel-holder">' +
                        '<div class="carousel-inner">' +
                        '<div class="carousel-list">' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '<div class="carousel-nav-left"></div>' +
                        '<div class="carousel-nav-right"></div>');
                holder.append(carousel);

                $this.makeSlides();
                $this.controls();

                $(window).resize(function() {
                    var newState = $this.detectCarouselSize();

                    if (newState !== $this.carouselSize) {
                        $this.carouselSize = newState;
                        $this.makeSlides();
                        $this.current = 0;
                    } else {
                        $this.setMarginsForSlides();
                    }
                });
            });
        },

        current: 0,

        carouselSize: 'state8',

        breakpoints: {
            state1: {
                changePoint: 480,
                visibleItems: 1
            },
            state2: {
                changePoint: 640,
                visibleItems: 2
            },
            state3: {
                changePoint: 768,
                visibleItems: 3
            },
            state4: {
                changePoint: 900,
                visibleItems: 4
            },
            state5: {
                changePoint: 1050,
                visibleItems: 5
            },
            state6: {
                changePoint: 1200,
                visibleItems: 6
            },
            state7: {
                changePoint: 1350,
                visibleItems: 7
            },
            state8: {
                changePoint: 'more',
                visibleItems: 8
            }
        },

        clickBlockingDuration: 150,
        sliderStopwatch: 150,

        detectCarouselSize: function() {
            var $this = this,
                size = $(window).width(),
                state;

            if (size <= $this.breakpoints.state1.changePoint) {
                state = 'state1';
            } else if (size > $this.breakpoints.state1.changePoint && size <= $this.breakpoints.state2.changePoint) {
                state = 'state2';
            } else if (size > $this.breakpoints.state2.changePoint && size <= $this.breakpoints.state3.changePoint) {
                state = 'state3';
            } else if (size > $this.breakpoints.state3.changePoint && size <= $this.breakpoints.state4.changePoint) {
                state = 'state4';
            } else if (size > $this.breakpoints.state4.changePoint && size <= $this.breakpoints.state5.changePoint) {
                state = 'state5';
            } else if (size > $this.breakpoints.state5.changePoint && size <= $this.breakpoints.state6.changePoint) {
                state = 'state6';
            } else if (size > $this.breakpoints.state6.changePoint && size <= $this.breakpoints.state7.changePoint) {
                state = 'state7';
            } else {
                state = 'state8';
            }

            return state;
        },
        makeSlides: function() {
            var holder = $(this.element),
                list = holder.find('.carousel-list'),
                items = holder.find('.customers-items .item'),
                listWidth = holder.find('.carousel').width(),
                itemsPerSlide = this.breakpoints[this.carouselSize].visibleItems;

            //Set list width
            holder.find('.carousel-list').css('width', listWidth).empty();
            for (var i = 0; i < items.length; i += itemsPerSlide) {
                var slideItems = items.slice(i, i + itemsPerSlide).clone();
                list.append(slideItems);
                slideItems.wrapAll('<div class="slide" style="width: ' + listWidth + 'px; left:150%; opacity: 0;"></div>');
                list.find('.slide').first().css({
                    'left': 0,
                    'opacity': 1
                });
            }
            this.setMarginsForSlides();
        },
        setMarginsForSlides: function() {
            var holder = $(this.element),
                list = holder.find('.carousel-list'),
                listWidth = holder.find('.carousel').width(),
                slides = list.find('.slide');

            holder.find('.carousel-list').css('width', listWidth);

            slides.each(function() {
                var slide = $(this),
                    slideWidth = listWidth,
                    items = slide.find('.item'),
                    itemsWidth = 0;

                slide.css({
                    'padding-left': 0,
                    'padding-right': 0,
                    'width': slideWidth
                });
                items.each(function() {
                    itemsWidth += $(this).width();
                });
                var marginLeft = (slideWidth - itemsWidth) / (items.length - 1);
                marginLeft = (marginLeft > 90) ? 90 : marginLeft;

                items.each(function(index) {
                    if (index === 0) return;
                    // Shorten margin on last item to prevent it from dropping out of slide container 
                    else if (index == (items.length - 1)) $(this).css('margin-left', marginLeft - 1);
                    else $(this).css('margin-left', marginLeft);
                });

                var itemsAndMargins = itemsWidth + marginLeft * (items.length - 1),
                    slidePadding = (slideWidth - itemsAndMargins) / 2;

                slide.css({
                    'padding-left': slidePadding,
                    'padding-right': slidePadding
                });
            });
        },
        controls: function() {
            var $this = this,
                holder = $(this.element),
                list = holder.find('.carousel-list');

            $(document).on('click', '.carousel-nav-left', function() {
                // Initially, there was a transition event counter implemented to track and 
                // manage rapid slide transitions. Unfortunately it doesn't work reliably 
                // across browsers so we implement this watchdog mechanism instead 
                if ( $this.sliderStopwatch != $this.clickBlockingDuration ) return;
                setTimeout(function(){
                    $this.sliderStopwatch += $this.clickBlockingDuration;
                }, $this.clickBlockingDuration);
                $this.sliderStopwatch = 0;
                var next = $this.current - 1;
                var slides = list.find('.slide');
                if (next < 0) next = slides.length - 1;
                $this.goToSlide(next, true);
            });

            $(document).on('click', '.carousel-nav-right', function() {
                if ( $this.sliderStopwatch != $this.clickBlockingDuration ) return;
                setTimeout(function(){
                    $this.sliderStopwatch += + $this.clickBlockingDuration;
                }, $this.clickBlockingDuration);
                $this.sliderStopwatch = 0;
                var next = $this.current + 1;
                var slides = list.find('.slide');
                if (next >= slides.length) next = 0;
                $this.goToSlide(next, false);
            });
        },
        goToSlide: function(next, left) {
            var $this = this,
                holder = $(this.element),
                list = holder.find('.carousel-list'),
                slides = list.find('.slide'),
            // Delay between outgoing and incoming slide.
                delayBetweenTransitions = 150;

            // Outgoing slide
            if (left) {
                slides.eq($this.current).transition({
                    left: '150%',
                    opacity: 0
                }, 500, 'easeInQuad');
            }
            else {
                slides.eq($this.current).transition({
                    left: '-150%',
                    opacity: 0
                }, 500, 'easeInQuad');
            }
            // Incoming slide
            setTimeout(function(){
                $this.transitionInProgress++;
                if (left) {
                    slides.eq(next).css('left', '-150%');
                    slides.eq(next).transition({
                        left: '0',
                        opacity: 1
                    }, 667, 'easeOutQuad');
                }
                else {
                    slides.eq(next).css('left', '150%');
                    slides.eq(next).transition({
                        left: '0',
                        opacity: 1
                    }, 667, 'easeOutQuad');
                }
            }, delayBetweenTransitions);

            $this.current = next;
        }
    };

    $.fn[pluginName] = function(options) {
        this.each(function() {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
            }
        });

        return this;
    };

})(jQuery, window, document);




//Team section
(function($, window, document, undefined) {
    var pluginName = 'teamSection',
        defaults = {

        };

    function Plugin(element, options) {
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        init: function() {
            var $this = this;


            $(window).load(function() {
                $this.splitMembersToRows();
                $this.membersActions();
                $($this.element).find('.t-overlay').fadeOut();

                $(window).resize(function() {
                    $this.checkWindowSize();
                    $this.setImagesSizesInRows();
                });
            });
        },

        checkWindowSize: function() {
            var containerWidth = $(window).width();
            if (typeof window.windowWidth == 'undefined') return;
            var $this = this,
                previousSize = $this.windowSize(window.windowWidth),
                currentSize = $this.windowSize(containerWidth);
            if (previousSize !== currentSize) {
                $this.splitMembersToRows();
            }
        },

        windowSize: function(size) {
            if (size >= 1920) {
                return 5;
            } else if(size >= 1200 && size < 1920) {
                return 4;
            } else if (size >= 768 && size < 1200) {
                return 3;
            } else {
                return 1;
            }
        },



        splitMembersToRows: function(){
            var $this = this,
                holder = $(this.element),
                members = holder.find('.member'),
                maxMembers = 5,
                windowWidth = $(window).width();

            holder.append(members);
            var rows = holder.find('.team-row, .summary-row');
            if (rows.length) {rows.remove();}

            if (windowWidth >= 1920) {
                maxMembers = 5;
            } else if(windowWidth >= 1200 && windowWidth < 1920) {
                maxMembers = 4;
            } else if (windowWidth >= 768 && windowWidth < 1200) {
                maxMembers = 3;
            } else {
                maxMembers = 1;
            }

            window.windowWidth = $(window).width();


            for (var i = 0; i < members.length; i += maxMembers) {
                var rowMembers = members.slice(i, i + maxMembers);
                rowMembers.wrapAll('<div class="team-row"><div class="team-row-holder"></div></div>');
            }

            holder.find('.team-row').each(function(){
                var row = $(this),
                    content = '';

                if(maxMembers == 1) {
                    content = row.find('.summary-info').clone();
                }
                var s = $('<div class="summary-row"><div class="summary-row-holder"><div class="opener"><div class="opener-holder">&nbsp;</div></div><div class="summary-row-content">'+content+'</div></div></div>');
                s.find('.summary-row-content').append(content);
                s.insertAfter(row);
            });

            holder.find('.photo').removeClass('active').addClass('grey');
            this.setImagesSizesInRows();
        },

        setImagesSizesInRows: function(){
            var $this = this,
                holder = $(this.element),
                rows = holder.find('.team-row'),
                maxMembers = 5,
                windowWidth = $(window).width();


            if (windowWidth >= 1920) {
                maxMembers = 5;
            } else if(windowWidth >= 1200 && windowWidth < 1920) {
                maxMembers = 4;
            } else if (windowWidth >= 768 && windowWidth < 1200) {
                maxMembers = 3;
            } else {
                maxMembers = 1;
            }

            rows.each(function(){
                var row = $(this),
                    members = row.find('.member'),
                    rowWidth = row.width(),
                    imagesWidth = 0;

                if(members.length < maxMembers) {
                    rowWidth = rowWidth*(members.length/maxMembers);
                    row.find('.team-row-holder').css('width', rowWidth);
                }

                members.each(function(){
                    var photo = $(this).find('.photo'),
                        photoWidth = photo[0].naturalWidth,
                        photoHeight = photo[0].naturalHeight;

                    imagesWidth += (photoWidth);
                });
                var ratio = imagesWidth/rowWidth;
                members.each(function(){
                    var photo = $(this).find('.photo'),
                        photoWidth = photo[0].naturalWidth,
                        photoHeight = photo[0].naturalHeight;

                    var newWidth = Math.floor(photoWidth/ratio),
                        newHeight = Math.ceil(photoHeight/ratio) - 2;

                    $(this).css({
                        'width': newWidth,
                        'height': newHeight
                    });
                });
            });
        },

        setSizes: function(ratio) {

        },

        membersActions: function() {
            var $this = this,
                holder = $(this.element),
                members = holder.find('.member');

            members.each(function(){
                var member = $(this);
                member.hover(function(){
                    $(this).find('.photo').removeClass('grey');
                }, function(){
                    var photo = $(this).find('.photo');
                    if(!photo.hasClass('active')) {
                        photo.addClass('grey');
                    }

                });

                member.on('click', function(event){
                    var trigger = $(event.currentTarget),
                        info = trigger.find('.summary-info').clone(),
                        parentRow = trigger.parents('.team-row'),
                        summaryRow = parentRow.next(),
                        targetBlock = summaryRow.find('.summary-row-content'),
                        posL = trigger.position().left;

                    targetBlock.empty().append(info);
                    summaryRow.find('.opener').css('left', posL + 50);
                    holder.find('.summary-row').hide();
                    summaryRow.show();

                    holder.find('.photo').removeClass('active').addClass('grey');
                    trigger.find('.photo').addClass('active').removeClass('grey');
                });
            });

            $(document).on('click', '.summary-row .opener', function(){
                holder.find('.photo').removeClass('active').addClass('grey');
                holder.find('.summary-row').hide();
            });
        }
    };

    $.fn[pluginName] = function(options) {
        this.each(function() {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
            }
        });

        return this;
    };

})(jQuery, window, document);




//Responsive Customers Table
(function($, window, document, undefined) {
    var pluginName = 'customersTable',
        defaults = {

        };

    function Plugin(element, options) {
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        init: function() {
            var $this = this;
            this.emptyBlocks();

            $(window).resize(function() {
                $this.checkWindowSize();
            });
        },

        checkWindowSize: function() {
            var windowWidth = $(window).width();
            if (typeof window.windowWidth == 'undefined') return;
            var $this = this,
                previousSize = $this.blocksInRow(window.windowWidth),
                currentSize = $this.blocksInRow(windowWidth);
            if (previousSize !== currentSize) {
                $this.emptyBlocks();
            }
        },

        blocksInRow: function(size) {
            if (size >= 1200) {
                return 5;
            } else if(size >= 992 && size < 1400) {
                return 4;
            } else if (size >= 768 && size < 992) {
                return 3;
            } else if (size >= 480 && size < 768) {
                return 2;
            } else {
                return 1;
            }
        },

        emptyBlocks: function(){
            var $this = this,
                holder = $(this.element);

            window.windowWidth = $(window).width();
            holder.find('.empty-block').remove();

            var blocks = holder.find('.client-logo-block'),
                len = blocks.length,
                blocksInRow = this.blocksInRow(window.windowWidth),
                rows = Math.ceil(len/blocksInRow),
                needToAdd = (blocksInRow*rows - len);
            if(needToAdd > 0) {
                for(var i = 0; i < needToAdd; i++) {
                    holder.append('<div class="client-logo-block empty-block"><div class="holder"><div class="inner"></div></div></div>');
                }
            }

        }
    };

    $.fn[pluginName] = function(options) {
        this.each(function() {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
            }
        });

        return this;
    };

})(jQuery, window, document);





//Signup Popup
(function($, window, document, undefined) {
    var pluginName = 'signUpPopup',
    /*
     defaults = {
     'first_name': ['First Name', 'Please enter your first name'],
     'last_name': ['Last Name', 'Please enter your last name'],
     'email': ['Email', 'Please enter your email'],
     'password': ['Password', 'Please enter your password'],
     };
     */
        defaults = {
            'edit-firstname': ['First Name', 'Please enter your first name'],
            'edit-lastname': ['Last Name', 'Please enter your last name'],
            'edit-email': ['Email', 'Please enter your email'],
            'edit-password': ['Password', 'Please enter your password'],
        };

    function Plugin(element, options) {
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        init: function() {
            var $this = this,
                popup = $(this.element);

            var fade = $('<div class="fade"></div>');
            $('body').append(fade);

            function testinput(re, str){
                if (str.search(re) != -1) {
                    return true;
                }else{
                    return false;
                }
            }

            var location = window.location.href;
            var signup = "/#signup";
            if(testinput(signup, location)){
                event.preventDefault();
                fade.css({
                    'display': 'block',
                    'opacity': 1
                });
                popup.fadeIn();
                $this.centerizePopup();
            }


            $(document).on('click', '.signup-btn:not(".signup-btn.middle-start-free")', function(event) {
                event.preventDefault();
                fade.css({
                    'display': 'block',
                    'opacity': 1
                });
                popup.fadeIn();
                $this.centerizePopup();
            });
            $(document).on('click', '#main_mobile_menu_start_testing_now, #center_get_started_block a:contains("Start Testing Now")', function(event) {
                event.preventDefault();
                fade.css({
                    'display': 'block',
                    'opacity': 1
                });
                popup.fadeIn();
                $this.centerizePopup();
            });

            $(document).on('click', '#main_b_start_testing_now, #main_a_start_testing_now, #main_c_start_testing_now', function(event) {
                event.preventDefault();
                fade.css({
                    'display': 'block',
                    'opacity': 1
                });
                popup.fadeIn();
                $this.centerizePopup();
                return false;
            });

            $(document).on('click', '.blazemeter_news_and_events_bottom_block_with_button a:contains("Start Testing Now")', function(event) {
                event.preventDefault();
                fade.css({
                    'display': 'block',
                    'opacity': 1
                });
                popup.fadeIn();
                $this.centerizePopup();
            });

            $(document).on('click', '#block-block-21 .new_blog_get_started_button', function(event) {
                event.preventDefault();
                fade.css({
                    'display': 'block',
                    'opacity': 1
                });
                popup.fadeIn();
                $this.centerizePopup();
                return false;
            });

            $(document).on('click', '.section-features .features_page_get_started_link', function(event) {
                event.preventDefault();
                fade.css({
                    'display': 'block',
                    'opacity': 1
                });
                popup.fadeIn();
                $this.centerizePopup();

            });




            $(document).on('click', '.new_blog_get_started_button', function(event) {
                event.preventDefault();
                fade.css({
                    'display': 'block',
                    'opacity': 1
                });
                popup.fadeIn();
                $this.centerizePopup();
            });
            $(document).on('click', '.get_started_button, .button.get_started_button', function(event) {
                event.preventDefault();
                fade.css({
                    'display': 'block',
                    'opacity': 1
                });
                popup.fadeIn();
                $this.centerizePopup();
                return false;
            });

            $('.hero').on('click', '.get_started_button, button.get_started_button', function(event) {
                event.preventDefault();
                fade.css({
                    'display': 'block',
                    'opacity': 1
                });
                popup.fadeIn();
                $this.centerizePopup();
            });

            $(document).on('click', '#block-block-17 a', function(event) {
                event.preventDefault();
                fade.css({
                    'display': 'block',
                    'opacity': 1
                });
                popup.fadeIn();
                $this.centerizePopup();
            });
            $(document).on('click', '.popup .close-popup', function(event) {
                event.preventDefault();
                fade.css({
                    'display': 'none',
                    'opacity': 0
                });
                popup.fadeOut();
            });

            if(window.location.pathname == '/pricing') {
                var current_year10 = new Date().getFullYear() + 10;
                for (i = new Date().getFullYear(); i <= current_year10; i++)
                {
                    $('#yearpicker').append($('<option />').val(i).html(i));
                }
                var d = new Date();
                var n = d.getMonth() + 1;
                if(n<10) {
                    n = '0' + n;
                }
                jQuery(".payment-exp-month").val(n);
            }

            var pricing_page = 'https://blazemeter.com/';
            jQuery.ajax({
                url: 'https://cdn.api.twitter.com/1/urls/count.json?url=blazemeter.com',
                type: 'GET',
                dataType: 'JSONP'
            }).always(function(data) {
                jQuery('#social-tw-box').text(data.count);
            });

            jQuery.ajax({
                url: 'https://graph.facebook.com/http://blazemeter.com',
                type: 'GET',
                dataType: 'JSONP'
            }).always(function(data) {
                if (data.shares) {
                    jQuery('#social-fb-box').text(data.shares);
                }
            });

            jQuery.getJSON( 'https://www.linkedin.com/countserv/count/share?url='+pricing_page+'&callback=?', function( linkdindata ) {
                jQuery('#social-linkedin-box').text(linkdindata.count);
            });


            var createJson = {
                "method": "pos.plusones.get",
                "id": "p",
                "params": {
                    "nolog": true,
                    "id": "http://blazemeter.com",
                    "source": "widget",
                    "userId": "@viewer",
                    "groupId": "@self"
                },
                "jsonrpc": "2.0",
                "key": "p",
                "apiVersion": "v1"
            };
            createJson = JSON.stringify(createJson);
            var xmlhttp = new XMLHttpRequest();
            var apikey = 'AIzaSyCKSbrvQasunBoV16zDH9R33D88CeLr9gQ';
            var url = "https://clients6.google.com/rpc?key=" + apikey;

            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4) {
                    if (xmlhttp.status === 200) {
                        var response = JSON.parse(xmlhttp.response);
                        var counter = response.result.metadata.globalCounts.count;
                        jQuery('#social-gplus-box').text(counter);
                    }
                }
            }
            xmlhttp.open("POST", url, true);
            xmlhttp.setRequestHeader('Content-type', 'application/json');
            xmlhttp.send(createJson);

            $(document).on('click', '.plan-switch', function(event) {
                event.preventDefault();

                jQuery('.payment-amount').removeClass('custom-plan');

                var button_clicked = $(this).attr('id');
                if(button_clicked == 'switch-basic') {
                    if($('.billed-annually').hasClass('active')) {
                        $('.plan-selected').val('BASIC-ANNUAL');
                        $('.original-amount').val('99');
                        var price_pro_ann = $('.price .swap.swap-basic').attr('data-annual') + '9';
                        changePopupPrices(price_pro_ann, $('.billed-annually').hasClass('active'));
                    } else {
                        $('.plan-selected').val('BASIC-MONTHLY');
                        $('.original-amount').val('149');
                        var price_pro_monthly = $('.price .swap.swap-basic').attr('data-monthly') + '9';
                        changePopupPrices(price_pro_monthly, $('.billed-annually').hasClass('active'));
                    }
                    $('.payment-plan-name').html('<span class="plan">PLAN</span> BASIC');
                    $('.subscribed').text("You're subscribed to the Basic plan!");
                } else if(button_clicked == 'switch-pro') {
                    if($('.billed-annually').hasClass('active')) {
                        $('.plan-selected').val('PRO-ANNUAL');
                        $('.original-amount').val('499');
                        var price_pro_ann = $('.price .swap.swap-pro').attr('data-annual') + '9';
                        changePopupPrices(price_pro_ann, $('.billed-annually').hasClass('active'));
                    } else {
                        $('.plan-selected').val('PRO-MONTHLY');
                        $('.original-amount').val('649');
                        var price_pro_monthly = $('.price .swap.swap-pro').attr('data-monthly') + '9';
                        changePopupPrices(price_pro_monthly, $('.billed-annually').hasClass('active'));
                    }
                    $('.payment-plan-name').html('<span class="plan">PLAN</span> PRO');
                    $('.subscribed').text("You're subscribed to the Pro plan!");
                } else if(button_clicked == 'switch-ondemand') {
                    $('.plan-selected').val('ON-DEMAND');
                    $('#plan-actions span').text('Billed Once');
                    $('.payment-plan-name').html('<span class="plan">PLAN</span> ON DEMAND');
                    $('.subscribed').text("You're subscribed to the On Demand plan!");
                    $('.payment-amount').html('$1499');
                    $('.original-amount').val('1499');
                    $('.plan-amount').val('149900');
                    var demand_amount = 1499;
                    var formatted_amount = formatAmount(demand_amount);
                    $('.payment-button').text('Pay ' + formatted_amount);
                }

                if($(this).hasClass('has-card')) {
                    var blockId = jQuery(this).closest(".plan-block .plan-block-info").attr("id");
                    resetUpgradeBlock(blockId);
                }
                else{
                    fade.css({
                        'display': 'block',
                        'opacity': 1
                    });
                    $('.payment_popup').fadeIn();
                }

            });

            function resetUpgradeBlock(blockId) {
                if(blockId == 'basic-info') {
                    jQuery('#basic-info').hide();
                    jQuery('#basic-charge-card').prop('checked', true);
                    jQuery('input[type=checkbox][name=charge-type]').parent().show();
                    jQuery('#basic-payment').show();
                    jQuery("#basic-charge-coupon").prop("checked", false);
                    jQuery('#basic-payment .payment-charge-coupon').hide();
                    jQuery('#pro-info').show();
                    jQuery('#pro-payment').hide();
                } else if(blockId == 'pro-info'){
                    jQuery('#pro-info').hide();
                    jQuery('#pro-charge-card').prop('checked', true);
                    jQuery('input[type=checkbox][name=charge-type]').parent().show();
                    jQuery('#pro-payment').show();
                    jQuery("#pro-charge-coupon").prop("checked", false);
                    jQuery('#pro-payment .payment-charge-coupon').hide();
                    jQuery('#basic-info').show();
                    jQuery('#basic-payment').hide();
                }
                jQuery('.coupon-success').text('');
                jQuery('.payment-error').text('');
                jQuery('input[name=charge-type]').prop('disabled', false);
                jQuery('.remove-coupon-charge').click();
            };

            function changePopupPrices(amount, annually) {
                if(annually == true) {
                    $('.payment-amount').html('$'+ amount +'/<small>mo</small>');
                    $('#plan-actions span').text('Billed Annually');
                    $('.plan-amount').val(amount * 100);
                    var formatted_amount = formatAmount(amount * 12);
                    $('.payment-button').text('Pay $'+ formatted_amount +'/Year');
                } else {
                    $('.payment-amount').html('$'+ amount +'/<small>mo</small>');
                    $('.plan-amount').val(amount * 100);
                    $('#plan-actions span').text('');
                    var formatted_amount = formatAmount(amount);
                    $('.payment-button').text('Pay $'+ formatted_amount +'/mo');
                }
            };

            $(document).on('click', '.stripe-coupon', function(event) {
                event.preventDefault();
                $( '.payment-coupon' ).show();
                $( '.payment-coupon-button' ).css('display', 'inline-block');
                $(".payment-coupon").prop('disabled', false);
                return false;
            });

            $(document).on('click', '.close-payment-popup', function(event) {
                event.preventDefault();
                window.planinfo = {};
                jQuery('.fade').css({
                    'display': 'none',
                    'opacity': 0
                });
                $('.payment_popup').fadeOut();
                var not_first_click = false;
                jQuery('.payment-error').text('');
                jQuery('.coupon-success').text('');
                jQuery('.payment-coupon-inp').val('');
                jQuery('.check-coupon').click();
                jQuery(".payment-coupon-button.remove-coupon").click();
                if (jQuery('#coupon_code').is(':checked')) {jQuery('.check-coupon').click();}
                jQuery('.credit-card-error').removeClass('credit-card-error');
                if(jQuery(this).hasClass('close-payed-popup')) {
                    location.replace(blazemeter_bza_url+'/app');
                }
            });

            $(document).on('click', '.back-to', function(event) {
                jQuery('.payment-coupon-inp').val('');
                jQuery('.check-coupon').click();
                jQuery(".payment-coupon-button.remove-coupon").click();
                if (jQuery('#coupon_code').is(':checked')) {jQuery('.check-coupon').click();}
                jQuery('.pay-popup').show();
                jQuery('.payed-popup').hide();
                jQuery('.fade').css({
                    'display': 'none',
                    'opacity': 0
                });
                $('.payment_popup').fadeOut();
                location.reload();
            });
            $(document).on('click', '.popup .close-popup', function(event) {
                event.preventDefault();
                fade.css({
                    'display': 'none',
                    'opacity': 0
                });
                popup.fadeOut();
            });

            //$(document).on('click', '.cta-video-link a, #mobile-recording-video', function(event) {
            //    event.preventDefault();
            //    fade.css({
            //        'display': 'block',
            //        'opacity': 1
            //    });
            //    $('#youtube-popup').fadeIn();
            //    $this.centerizePopup();
            //});
            $(document).on('click', '.cta-video-link a', function(event) {
                event.preventDefault();
                fade.css({
                    'display': 'block',
                    'opacity': 1
                });
                $('#youtube-popup').fadeIn();
                $this.centerizePopup();
            });

            $(document).on('click', '.resource-header-img', function(event) {
                event.preventDefault();
                fade.css({
                    'display': 'block',
                    'opacity': 1
                });
                $('#youtube-popup').fadeIn();
                //$this.centerizePopup();
            });

            $(document).on('click', '.close-youtube-popup a', function(event) {
                event.preventDefault();
                fade.css({
                    'display': 'none',
                    'opacity': 0
                });
                setTimeout(function(){ $('#youtube-popup iframe').attr('src', $('#youtube-popup iframe').attr('src')); }, 500);
                $('#youtube-popup').fadeOut();
            });

            $("#blazemeter-site-commercial-register").submit(function(event) {
                var valid = $this.validateInput();
                if( !validateEmail($('#blazemeter-site-commercial-register #edit-mail').val())) {
                    $('#blazemeter-site-commercial-register #edit-mail').val('');
                    $('#blazemeter-site-commercial-register .form-item-mail').addClass('form-error');
                    $('#blazemeter-site-commercial-register #edit-mail').attr('Placeholder', 'Please enter valid e-mail');
                    return false;
                }
                if (valid) {
                    $('#blazemeter-site-commercial-register .main-btn').hide();
                   // $('.progress-button').show();
                    $('.progress-button').trigger('click');
                    $('.popup .close-popup').hide();
                    return true;
                }
                event.preventDefault();
                return false;


            });

            // front page signup
            $("#blazemeter-site-commercial-register-c").submit(function(event) {
                var valid = $this.validateInput();
                var pass = jQuery('#blazemeter-site-commercial-register-c #edit-password').val();
                if( !validateEmail($('#blazemeter-site-commercial-register-c #edit-email').val())) {
                    $('#blazemeter-site-commercial-register-c #edit-email').val('');
                    $('#blazemeter-site-commercial-register-c .form-item-email').addClass('form-error');
                    $('#blazemeter-site-commercial-register-c #edit-email').attr('Placeholder', 'Please enter valid e-mail');
                    valid = false;
                }
                if(pass.length > 0 && pass.length < 8) {
                    $('#blazemeter-site-commercial-register-c #edit-password').val('');
                    $('#blazemeter-site-commercial-register-c .form-item-password').addClass('form-error');
                    $('#blazemeter-site-commercial-register-c #edit-password').attr('Placeholder', 'Password must be at least 8 characters');
                    valid = false;
                }
                if (valid) {
                   // $('#blazemeter-site-commercial-register-c .main-btn').hide();
                   // $('.progress-button').show();
                    $('.progress-button').trigger('click');
                    $('.popup .close-popup').hide();
                    return true;
                }
                event.preventDefault();
                return false;
            });

            $('input').keypress(function(e) {
                if(e.which == 13) {
                    $(this).closest("form").submit();
                    e.preventDefault();
                    return false;
                }
            });

            function validateEmail(emailAddress) {
                var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
                return pattern.test(emailAddress);
            };

            function formatAmount(nStr) {
                return nStr;
                /*nStr += '';
                 var x = nStr.split('.');
                 var x1 = x[0];
                 var x2 = x.length > 1 ? '.' + x[1] : '';
                 var rgx = /(\d+)(\d{3})/;
                 while (rgx.test(x1)) {
                 x1 = x1.replace(rgx, '$1' + ',' + '$2');
                 }
                 var amount = x1 + x2;
                 return amount;*/
            }

            $(document).on('keyup', '.popup-form-row[data-field="required"] input', function(event) {
                var input = $(event.currentTarget),
                    inputId = input.attr('id');
                if (input.parent().hasClass('error') && $.trim(input.val()).length) {
                    input.parent().removeClass('error');
                    input.attr('placeholder', $this.settings[inputId][0]);
                }
            });

            $(window).resize(function() {
                if (popup.is(':visible')) {
                    $this.centerizePopup();
                }
            });
        },
        centerizePopup: function() {
            var popup = $(this.element),
                popupHeight = popup.height(),
                windowHeight = $(window).height();
            var popupTop = (windowHeight - popupHeight) / 2;
            if (popupTop < 0) popupTop = 0;

            // popup.css('top', popupTop + $(window).scrollTop());
            popup.css('top', popupTop);
        },
        validateInput: function() {
            var $this = this,
                popup = $(this.element),
                fields = popup.find('input.required'),
                errors = [];

            fields.each(function() {
                var field = $(this);
                if (!$.trim(field.val()).length) {
                    errors.push(field.attr('id'));
                }
            });

            if (!errors.length) {
                return true;
            } else {
                $this.showErrors(errors);
                return false;
            }
        },

        showErrors: function(errors) {
            var $this = this,
                popup = $(this.element);
            $.each(errors, function(index, error) {
                // console.log(error);
                var input = popup.find('#' + error);
                if(!input.length) return;
                input.parent().addClass('form-error');
                // console.log($this.settings[error]);
                var msg = $this.settings[error][1];
                input.attr('placeholder', msg);
            });
        }


    };

    $.fn[pluginName] = function(options) {
        this.each(function() {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
            }
        });

        return this;
    };

})(jQuery, window, document);


//Signup Popup B
(function($, window, document, undefined) {
    var pluginName = 'signUpPopupB',
    /*
     defaults = {
     'first_name': ['First Name', 'Please enter your first name'],
     'last_name': ['Last Name', 'Please enter your last name'],
     'email': ['Email', 'Please enter your email'],
     'password': ['Password', 'Please enter your password'],
     };
     */
        defaults = {
            'edit-firstname': ['First Name', 'First Name'],
            'edit-lastname': ['Last Name', 'Last Name'],
            'edit-email': ['Email', 'Please enter your email'],
            'edit-password': ['Password', 'Please enter your password'],
        };

    function Plugin(element, options) {
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        init: function() {
            var $this = this,
                popup = $(this.element);

            $("#blazemeter-site-commercial-register-b").submit(function(event){
                var valid = $this.validateInput();
                if( !validateEmail($('#blazemeter-site-commercial-register-b #edit-mail').val())) {
                    $('#blazemeter-site-commercial-register-b #edit-mail').val('');
                    $('#blazemeter-site-commercial-register-b .form-item-mail').addClass('form-error');
                    $('#blazemeter-site-commercial-register-b #edit-mail').attr('Placeholder', 'Please enter valid e-mail');
                    return false;
                }
                if (valid) {
                    var siteUrl = $("input[name=siteUrl]").val();
                    if(siteUrl == 'aws_signup') {
                        var xmlhttp = new XMLHttpRequest();
                        var portalID = $("input[name=portalID]").val();
                        var formGUID = $("input[name=formGUID]").val();
                        var firstname = $('#blazemeter-site-commercial-register-b #edit-firstname').val();
                        var lastname = $('#blazemeter-site-commercial-register-b #edit-lastname').val();
                        var email = $('#blazemeter-site-commercial-register-b #edit-mail').val();
                        xmlhttp.open("POST", "https://forms.hubspot.com/uploads/form/v2/" + portalID + "/" + formGUID, false);
                        var params = "firstname=" + encodeURIComponent(firstname) + "&lastname=" + encodeURIComponent(lastname) + "&email=" + email + "&siteUrl=" + encodeURIComponent(siteUrl);
                        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                        xmlhttp.send(params);
                    }
                    return true;
                }
                event.preventDefault();
                return false;


            });

            function validateEmail(emailAddress) {
                var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
                return pattern.test(emailAddress);
            };

            $(document).on('keyup', '.popup-form-row[data-field="required"] input', function(event) {
                var input = $(event.currentTarget),
                    inputId = input.attr('id');
                if (input.parent().hasClass('error') && $.trim(input.val()).length) {
                    input.parent().removeClass('error');
                    input.attr('placeholder', $this.settings[inputId][0]);
                }
            });
        },
        validateInput: function() {
            var $this = this,
                popup = $(this.element),
                fields = popup.find('input.required'),
                errors = [];

            fields.each(function() {
                var field = $(this);
                if (!$.trim(field.val()).length) {
                    errors.push(field.attr('id'));
                }
            });

            if (!errors.length) {
                return true;
            } else {
                $this.showErrors(errors);
                return false;
            }
        },


        showErrors: function(errors) {
            var $this = this,
                popup = $(this.element);
            $.each(errors, function(index, error) {
                // console.log(error);
                var input = popup.find('#' + error);
                if(!input.length) return;
                input.parent().addClass('form-error');
                // console.log($this.settings[error]);
                var msg = $this.settings[error][1];
                input.attr('placeholder', msg);
            });
        }


    };

    $.fn[pluginName] = function(options) {
        this.each(function() {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
            }
        });

        return this;
    };

})(jQuery, window, document);

//Signup Popup
(function($, window, document, undefined) {
    var pluginName = 'signUpPopupCompetitor',
        defaults = {
            'edit-firstname': ['First Name', 'Please enter your first name'],
            'edit-lastname': ['Last Name', 'Please enter your last name'],
            'edit-email': ['Email', 'Please enter your email'],
            'edit-password': ['Password', 'Please enter your password'],
        };

    function Plugin(element, options) {
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        init: function() {
            var $this = this,
                popup = $(this.element);

            var fade = $('<div class="fade"></div>');
            $('body').append(fade);

            $(document).on('click', '.signup-btn-competitor', function(event) {
                event.preventDefault();
                fade.css({
                    'display': 'block',
                    'opacity': 1
                });
                popup.fadeIn();
                $this.centerizePopup();
            });
            $(document).on('click', '.popup .close-popup', function(event) {
                event.preventDefault();
                fade.css({
                    'display': 'none',
                    'opacity': 0
                });
                popup.fadeOut();
            });

            $("#blazemeter-site-competitor-register").submit(function(event){
                var valid = $this.validateInput();
                //console.log(valid);
                if (valid) {
                    fade.css({
                        'display': 'none',
                        'opacity': 0
                    });
                    popup.fadeOut();
                    //alert('Account created!');
                    return true;
                }
                event.preventDefault();
                return false;


            })

            $(document).on('keyup', '.popup-form-row[data-field="required"] input', function(event) {
                var input = $(event.currentTarget),
                    inputId = input.attr('id');
                if (input.parent().hasClass('error') && $.trim(input.val()).length) {
                    input.parent().removeClass('error');
                    input.attr('placeholder', $this.settings[inputId][0]);
                }
            });

            $(window).resize(function() {
                if (popup.is(':visible')) {
                    $this.centerizePopup();
                }
            });
        },
        centerizePopup: function() {
            var popup = $(this.element),
                popupHeight = popup.height(),
                windowHeight = $(window).height();
            var popupTop = (windowHeight - popupHeight) / 2;
            if (popupTop < 0) popupTop = 0;

            // popup.css('top', popupTop + $(window).scrollTop());
            popup.css('top', popupTop);
        },
        validateInput: function() {
            var $this = this,
                popup = $(this.element),
                fields = popup.find('input.required'),
                errors = [];

            fields.each(function() {
                var field = $(this);
                if (!$.trim(field.val()).length) {
                    errors.push(field.attr('id'));
                }
            });

            if (!errors.length) {
                return true;
            } else {
                $this.showErrors(errors);
                return false;
            }
        },

        showErrors: function(errors) {
            var $this = this,
                popup = $(this.element);
            $.each(errors, function(index, error) {
                // console.log(error);
                var input = popup.find('#' + error);
                if(!input.length) return;
                input.parent().addClass('form-error');
                // console.log($this.settings[error]);
                var msg = $this.settings[error][1];
                input.attr('placeholder', msg);
            });
        }


    };

    $.fn[pluginName] = function(options) {
        this.each(function() {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
            }
        });

        return this;
    };

})(jQuery, window, document);


//Custom selects
(function($, window, document, undefined) {
    var pluginName = 'customSelects',
        defaults = {

        };

    function Plugin(element, options) {
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        init: function() {
            this.replaceSelects();
        },
        replaceSelects: function(){
            var $this = this,
                elem = $(this.element),
                elemWidth = elem.width(),
                options = elem.find('option'),
                randId =  Math.floor(Math.random() * (99999999999 - 11111111) + 11111111);
            elem.wrap('<div class="bzm-select-holder" data-id="'+randId+'"></div>');

            if(!options.length) return;

            var valueHolder = $('<div class="value-holder"><div class="val" data-val="'+options.eq(0).attr('value')+'">'+options.eq(0).text()+'</div><div class="trigger-ico-holder"><div class="trigger-ico"></div></div></div>');
            var list = $('<ul class="bzm-select-options" data-id="'+randId+'" style="width:'+elemWidth+'px;"></ul>');

            options.each(function(){
                var opt = $(this);
                list.append('<li class="select-option" data-value="'+opt.attr('value')+'">'+opt.text()+'</li>');
            });
            elem.parents('.bzm-select-holder').append(valueHolder).append(list);

            $(document).on('click', '.bzm-select-holder[data-id="'+randId+'"] .value-holder', function(event){
                event.preventDefault();
                var trigger = $(event.currentTarget),
                    triggerOffset = trigger.offset(),
                    optsList = trigger.next('.bzm-select-options');

                if(trigger.hasClass('opened')) {
                    var list = $('body > .bzm-select-options[data-id="'+randId+'"]'),
                        holder = $('.bzm-select-holder[data-id="'+randId+'"]');
                    holder.find('.value-holder').removeClass('opened');
                    list.fadeOut();
                    holder.append(list);
                    trigger.removeClass('opened');
                    $('.dd-layer').remove();
                } else {
                    trigger.addClass('opened');
                    $('body').append(optsList);
                    $this.ddPosition();
                    optsList.fadeIn();
                }
            });

            $(document).on('mousedown', function(event) {
                event.stopPropagation();
                event.stopImmediatePropagation();
                var trigger = $(event.target);
                if (!trigger.parents('.bzm-select-options').length && (typeof event.toElement !== 'undefined')) {
                    event.stopPropagation();
                    $('body > .bzm-select-options').each(function() {
                        var id = $(this).attr('data-id'),
                            holder = $('.bzm-select-holder[data-id="'+id+'"]');
                        holder.append($(this));
                        holder.find('.value-holder').removeClass('opened');
                        $('.dd-layer').remove();
                    });
                }
            });

            $(document).on('click', '.bzm-select-options[data-id="'+randId+'"] li', function(event){
                event.preventDefault();
                var trigger = $(event.currentTarget),
                    list = trigger.parents('.bzm-select-options'),
                    id = trigger.parents('.bzm-select-options').attr('data-id'),
                    val = trigger.attr('data-value'),
                    valText = trigger.text(),
                    holder = $('.bzm-select-holder[data-id="'+id+'"]'),
                    valueHolder = holder.find('.value-holder'),
                    valFrame = valueHolder.find('.val'),
                    sel = holder.find('.bzm-select');

                valFrame.attr('data-val', val).text(valText);

                sel.val(val);
                list.fadeOut()
                holder.append(list);
                valueHolder.removeClass('opened');
                $('.dd-layer').remove();
            });
        },
        ddPosition: function(){
            var $this = this,
                dd = $('body > .bzm-select-options'),
                id = dd.attr('data-id'),
                holder = $('.bzm-select-holder[data-id="'+id+'"]'),
                valueHolder = holder.find('.value-holder'),
                valueHolderOffset = valueHolder.offset();

            var ddLayer = $('<div class="dd-layer"></div>');

            $('body').append(ddLayer);
            ddLayer.css('height', $(document).height());

            dd.css({
                'top': valueHolderOffset.top + valueHolder.outerHeight(),
                'left' : valueHolderOffset.left,
                'width' : valueHolder.outerWidth()
            });
        }
    };

    $.fn[pluginName] = function(options) {
        this.each(function() {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
            }
        });

        return this;
    };

})(jQuery, window, document);


//Tabs
(function($, window, document, undefined) {
    var pluginName = 'tabs',
        defaults = {

        };

    function Plugin(element, options) {
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        init: function() {
            var $this = this,
                holder = $(this.element),
                tabsNav = holder.find('.bz-tabs-nav'),
                tabs = tabsNav.find('a'),
                tabsContHolder = holder.find('.bz-tabs-content');

            tabs.on('click', function(event){
                event.preventDefault();
                var trigger = $(event.currentTarget),
                    id = trigger.attr('href');
                if(trigger.parents('li').hasClass('active')) { return; }
                tabsNav.find('li').removeClass('active');
                trigger.parents('li').addClass('active');

                tabsContHolder.find('.tab-content').hide();
                tabsContHolder.find(id).fadeIn();
            });
        }
    };

    $.fn[pluginName] = function(options) {
        this.each(function() {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
            }
        });

        return this;
    };

})(jQuery, window, document);


//Resize textarea
(function($, window, document, undefined) {
    var pluginName = 'resizeTextarea',
        defaults = {

        };

    function Plugin(element, options) {
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        init: function() {
            var $this = this,
                elem = $(this.element),
                handler = elem.parents('.form-row').find('.resizer'),
                maxH = 220,
                minH = 100;

            var startY,
                currentY,
                interval;


            handler.on('mousedown', function(event) {
                var textarea = $(event.currentTarget).parents('.form-row').find('.textarea-resize-vertical');
                var tH = textarea.outerHeight();

                function handleMouseMove(event) {
                    event = event || window.event;
                    currentY = event.clientY;
                }

                function getMousePosition() {
                    if (currentY) {
                        if (startY != currentY) {
                            var diff = currentY - startY;
                            if ((tH + diff) < maxH && (tH + diff) > minH) {
                                textarea.css('height', tH + diff);
                            }
                        }
                    }
                }

                window.onmousemove = handleMouseMove;
                interval = setInterval(getMousePosition, 10);


                event = event || window.event;
                startY = event.clientY;
                event.preventDefault();
                event.stopPropagation();
            });
            $(document).on('mouseup', function() {
                clearInterval(interval);
            });
        }
    };

    $.fn[pluginName] = function(options) {
        this.each(function() {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
            }
        });

        return this;
    };

})(jQuery, window, document);

;
(function($, Drupal, window, document, undefined) {
    Drupal.behaviors.nick_behavior = {
        attach: function(context, settings) {
            
            [].slice.call( document.querySelectorAll( '.progress-button' ) ).forEach( function( bttn ) {
				new ProgressButton( bttn, {
					callback : function( instance ) {
						var progress = 0,
							interval = setInterval( function() {
								progress = Math.min( progress + Math.random() * 0.1, 1 );
								instance._setProgress( progress );
								if( progress === 1 ) {
									instance._stop(1);
									clearInterval( interval );
								}
							}, 800 );
					}
				} );
			} );
                        
            $('input, textarea').placeholder();
            $('#navbar').navBar();
            $('#submenu').navBar();
            $('.content-menu-bar').navBar();
            new UISearch(document.getElementById('sb-search'));
            $('.search-block').searchBarSize();
            /* $(document).on('click', '.nav-opener', function(event) {
                $('.navbar-holder').toggleClass('opened');
            }); */
			$('.nav-opener').click(function() {
				$('.navbar-holder').toggleClass('opened');
			});

            $('.main-slider').mainSlider({
                slide: false
            });
            $('.customers-carousel').customersSlider();
            $('.main-section3').featuresAndBenefitsSectionsSizes();
            $('.testimonials-section').testimonialsSlider();

            $('#signup-popup').signUpPopup();
            $('#signup-popup-b').signUpPopupB();
			$('#signup-popup-competitor').signUpPopupCompetitor();
            //$('.main-section3').parallaxAnimations(); fix responsive mobile footer


            //Team
            $('.team-section').teamSection();
            $('.leadership .member-item').matchHeight();

            //Customers
            // $('.clients-table').customersTable();

            //Pricing
            // $('.pricing-section1').prToggle();
            // $('.pricing-section1').pricingTables();

            //Pricing Tooltips
            $(".ttt").tipper({
                direction: "right",
                follow: false
            });

            $('.bzm-select, .contact-form .form-select').customSelects();
            $('.bz-tabs').tabs();

            $('.textarea-resize-vertical').resizeTextarea();
        }
    };


})(jQuery, Drupal, this, this.document);;
/*!
* jQuery Cycle2; version: 2.1.6 build: 20141007
* http://jquery.malsup.com/cycle2/
* Copyright (c) 2014 M. Alsup; Dual licensed: MIT/GPL
*/
!function(a){"use strict";function b(a){return(a||"").toLowerCase()}var c="2.1.6";a.fn.cycle=function(c){var d;return 0!==this.length||a.isReady?this.each(function(){var d,e,f,g,h=a(this),i=a.fn.cycle.log;if(!h.data("cycle.opts")){(h.data("cycle-log")===!1||c&&c.log===!1||e&&e.log===!1)&&(i=a.noop),i("--c2 init--"),d=h.data();for(var j in d)d.hasOwnProperty(j)&&/^cycle[A-Z]+/.test(j)&&(g=d[j],f=j.match(/^cycle(.*)/)[1].replace(/^[A-Z]/,b),i(f+":",g,"("+typeof g+")"),d[f]=g);e=a.extend({},a.fn.cycle.defaults,d,c||{}),e.timeoutId=0,e.paused=e.paused||!1,e.container=h,e._maxZ=e.maxZ,e.API=a.extend({_container:h},a.fn.cycle.API),e.API.log=i,e.API.trigger=function(a,b){return e.container.trigger(a,b),e.API},h.data("cycle.opts",e),h.data("cycle.API",e.API),e.API.trigger("cycle-bootstrap",[e,e.API]),e.API.addInitialSlides(),e.API.preInitSlideshow(),e.slides.length&&e.API.initSlideshow()}}):(d={s:this.selector,c:this.context},a.fn.cycle.log("requeuing slideshow (dom not ready)"),a(function(){a(d.s,d.c).cycle(c)}),this)},a.fn.cycle.API={opts:function(){return this._container.data("cycle.opts")},addInitialSlides:function(){var b=this.opts(),c=b.slides;b.slideCount=0,b.slides=a(),c=c.jquery?c:b.container.find(c),b.random&&c.sort(function(){return Math.random()-.5}),b.API.add(c)},preInitSlideshow:function(){var b=this.opts();b.API.trigger("cycle-pre-initialize",[b]);var c=a.fn.cycle.transitions[b.fx];c&&a.isFunction(c.preInit)&&c.preInit(b),b._preInitialized=!0},postInitSlideshow:function(){var b=this.opts();b.API.trigger("cycle-post-initialize",[b]);var c=a.fn.cycle.transitions[b.fx];c&&a.isFunction(c.postInit)&&c.postInit(b)},initSlideshow:function(){var b,c=this.opts(),d=c.container;c.API.calcFirstSlide(),"static"==c.container.css("position")&&c.container.css("position","relative"),a(c.slides[c.currSlide]).css({opacity:1,display:"block",visibility:"visible"}),c.API.stackSlides(c.slides[c.currSlide],c.slides[c.nextSlide],!c.reverse),c.pauseOnHover&&(c.pauseOnHover!==!0&&(d=a(c.pauseOnHover)),d.hover(function(){c.API.pause(!0)},function(){c.API.resume(!0)})),c.timeout&&(b=c.API.getSlideOpts(c.currSlide),c.API.queueTransition(b,b.timeout+c.delay)),c._initialized=!0,c.API.updateView(!0),c.API.trigger("cycle-initialized",[c]),c.API.postInitSlideshow()},pause:function(b){var c=this.opts(),d=c.API.getSlideOpts(),e=c.hoverPaused||c.paused;b?c.hoverPaused=!0:c.paused=!0,e||(c.container.addClass("cycle-paused"),c.API.trigger("cycle-paused",[c]).log("cycle-paused"),d.timeout&&(clearTimeout(c.timeoutId),c.timeoutId=0,c._remainingTimeout-=a.now()-c._lastQueue,(c._remainingTimeout<0||isNaN(c._remainingTimeout))&&(c._remainingTimeout=void 0)))},resume:function(a){var b=this.opts(),c=!b.hoverPaused&&!b.paused;a?b.hoverPaused=!1:b.paused=!1,c||(b.container.removeClass("cycle-paused"),0===b.slides.filter(":animated").length&&b.API.queueTransition(b.API.getSlideOpts(),b._remainingTimeout),b.API.trigger("cycle-resumed",[b,b._remainingTimeout]).log("cycle-resumed"))},add:function(b,c){var d,e=this.opts(),f=e.slideCount,g=!1;"string"==a.type(b)&&(b=a.trim(b)),a(b).each(function(){var b,d=a(this);c?e.container.prepend(d):e.container.append(d),e.slideCount++,b=e.API.buildSlideOpts(d),e.slides=c?a(d).add(e.slides):e.slides.add(d),e.API.initSlide(b,d,--e._maxZ),d.data("cycle.opts",b),e.API.trigger("cycle-slide-added",[e,b,d])}),e.API.updateView(!0),g=e._preInitialized&&2>f&&e.slideCount>=1,g&&(e._initialized?e.timeout&&(d=e.slides.length,e.nextSlide=e.reverse?d-1:1,e.timeoutId||e.API.queueTransition(e)):e.API.initSlideshow())},calcFirstSlide:function(){var a,b=this.opts();a=parseInt(b.startingSlide||0,10),(a>=b.slides.length||0>a)&&(a=0),b.currSlide=a,b.reverse?(b.nextSlide=a-1,b.nextSlide<0&&(b.nextSlide=b.slides.length-1)):(b.nextSlide=a+1,b.nextSlide==b.slides.length&&(b.nextSlide=0))},calcNextSlide:function(){var a,b=this.opts();b.reverse?(a=b.nextSlide-1<0,b.nextSlide=a?b.slideCount-1:b.nextSlide-1,b.currSlide=a?0:b.nextSlide+1):(a=b.nextSlide+1==b.slides.length,b.nextSlide=a?0:b.nextSlide+1,b.currSlide=a?b.slides.length-1:b.nextSlide-1)},calcTx:function(b,c){var d,e=b;return e._tempFx?d=a.fn.cycle.transitions[e._tempFx]:c&&e.manualFx&&(d=a.fn.cycle.transitions[e.manualFx]),d||(d=a.fn.cycle.transitions[e.fx]),e._tempFx=null,this.opts()._tempFx=null,d||(d=a.fn.cycle.transitions.fade,e.API.log('Transition "'+e.fx+'" not found.  Using fade.')),d},prepareTx:function(a,b){var c,d,e,f,g,h=this.opts();return h.slideCount<2?void(h.timeoutId=0):(!a||h.busy&&!h.manualTrump||(h.API.stopTransition(),h.busy=!1,clearTimeout(h.timeoutId),h.timeoutId=0),void(h.busy||(0!==h.timeoutId||a)&&(d=h.slides[h.currSlide],e=h.slides[h.nextSlide],f=h.API.getSlideOpts(h.nextSlide),g=h.API.calcTx(f,a),h._tx=g,a&&void 0!==f.manualSpeed&&(f.speed=f.manualSpeed),h.nextSlide!=h.currSlide&&(a||!h.paused&&!h.hoverPaused&&h.timeout)?(h.API.trigger("cycle-before",[f,d,e,b]),g.before&&g.before(f,d,e,b),c=function(){h.busy=!1,h.container.data("cycle.opts")&&(g.after&&g.after(f,d,e,b),h.API.trigger("cycle-after",[f,d,e,b]),h.API.queueTransition(f),h.API.updateView(!0))},h.busy=!0,g.transition?g.transition(f,d,e,b,c):h.API.doTransition(f,d,e,b,c),h.API.calcNextSlide(),h.API.updateView()):h.API.queueTransition(f))))},doTransition:function(b,c,d,e,f){var g=b,h=a(c),i=a(d),j=function(){i.animate(g.animIn||{opacity:1},g.speed,g.easeIn||g.easing,f)};i.css(g.cssBefore||{}),h.animate(g.animOut||{},g.speed,g.easeOut||g.easing,function(){h.css(g.cssAfter||{}),g.sync||j()}),g.sync&&j()},queueTransition:function(b,c){var d=this.opts(),e=void 0!==c?c:b.timeout;return 0===d.nextSlide&&0===--d.loop?(d.API.log("terminating; loop=0"),d.timeout=0,e?setTimeout(function(){d.API.trigger("cycle-finished",[d])},e):d.API.trigger("cycle-finished",[d]),void(d.nextSlide=d.currSlide)):void 0!==d.continueAuto&&(d.continueAuto===!1||a.isFunction(d.continueAuto)&&d.continueAuto()===!1)?(d.API.log("terminating automatic transitions"),d.timeout=0,void(d.timeoutId&&clearTimeout(d.timeoutId))):void(e&&(d._lastQueue=a.now(),void 0===c&&(d._remainingTimeout=b.timeout),d.paused||d.hoverPaused||(d.timeoutId=setTimeout(function(){d.API.prepareTx(!1,!d.reverse)},e))))},stopTransition:function(){var a=this.opts();a.slides.filter(":animated").length&&(a.slides.stop(!1,!0),a.API.trigger("cycle-transition-stopped",[a])),a._tx&&a._tx.stopTransition&&a._tx.stopTransition(a)},advanceSlide:function(a){var b=this.opts();return clearTimeout(b.timeoutId),b.timeoutId=0,b.nextSlide=b.currSlide+a,b.nextSlide<0?b.nextSlide=b.slides.length-1:b.nextSlide>=b.slides.length&&(b.nextSlide=0),b.API.prepareTx(!0,a>=0),!1},buildSlideOpts:function(c){var d,e,f=this.opts(),g=c.data()||{};for(var h in g)g.hasOwnProperty(h)&&/^cycle[A-Z]+/.test(h)&&(d=g[h],e=h.match(/^cycle(.*)/)[1].replace(/^[A-Z]/,b),f.API.log("["+(f.slideCount-1)+"]",e+":",d,"("+typeof d+")"),g[e]=d);g=a.extend({},a.fn.cycle.defaults,f,g),g.slideNum=f.slideCount;try{delete g.API,delete g.slideCount,delete g.currSlide,delete g.nextSlide,delete g.slides}catch(i){}return g},getSlideOpts:function(b){var c=this.opts();void 0===b&&(b=c.currSlide);var d=c.slides[b],e=a(d).data("cycle.opts");return a.extend({},c,e)},initSlide:function(b,c,d){var e=this.opts();c.css(b.slideCss||{}),d>0&&c.css("zIndex",d),isNaN(b.speed)&&(b.speed=a.fx.speeds[b.speed]||a.fx.speeds._default),b.sync||(b.speed=b.speed/2),c.addClass(e.slideClass)},updateView:function(a,b){var c=this.opts();if(c._initialized){var d=c.API.getSlideOpts(),e=c.slides[c.currSlide];!a&&b!==!0&&(c.API.trigger("cycle-update-view-before",[c,d,e]),c.updateView<0)||(c.slideActiveClass&&c.slides.removeClass(c.slideActiveClass).eq(c.currSlide).addClass(c.slideActiveClass),a&&c.hideNonActive&&c.slides.filter(":not(."+c.slideActiveClass+")").css("visibility","hidden"),0===c.updateView&&setTimeout(function(){c.API.trigger("cycle-update-view",[c,d,e,a])},d.speed/(c.sync?2:1)),0!==c.updateView&&c.API.trigger("cycle-update-view",[c,d,e,a]),a&&c.API.trigger("cycle-update-view-after",[c,d,e]))}},getComponent:function(b){var c=this.opts(),d=c[b];return"string"==typeof d?/^\s*[\>|\+|~]/.test(d)?c.container.find(d):a(d):d.jquery?d:a(d)},stackSlides:function(b,c,d){var e=this.opts();b||(b=e.slides[e.currSlide],c=e.slides[e.nextSlide],d=!e.reverse),a(b).css("zIndex",e.maxZ);var f,g=e.maxZ-2,h=e.slideCount;if(d){for(f=e.currSlide+1;h>f;f++)a(e.slides[f]).css("zIndex",g--);for(f=0;f<e.currSlide;f++)a(e.slides[f]).css("zIndex",g--)}else{for(f=e.currSlide-1;f>=0;f--)a(e.slides[f]).css("zIndex",g--);for(f=h-1;f>e.currSlide;f--)a(e.slides[f]).css("zIndex",g--)}a(c).css("zIndex",e.maxZ-1)},getSlideIndex:function(a){return this.opts().slides.index(a)}},a.fn.cycle.log=function(){window.console&&console.log&&console.log("[cycle2] "+Array.prototype.join.call(arguments," "))},a.fn.cycle.version=function(){return"Cycle2: "+c},a.fn.cycle.transitions={custom:{},none:{before:function(a,b,c,d){a.API.stackSlides(c,b,d),a.cssBefore={opacity:1,visibility:"visible",display:"block"}}},fade:{before:function(b,c,d,e){var f=b.API.getSlideOpts(b.nextSlide).slideCss||{};b.API.stackSlides(c,d,e),b.cssBefore=a.extend(f,{opacity:0,visibility:"visible",display:"block"}),b.animIn={opacity:1},b.animOut={opacity:0}}},fadeout:{before:function(b,c,d,e){var f=b.API.getSlideOpts(b.nextSlide).slideCss||{};b.API.stackSlides(c,d,e),b.cssBefore=a.extend(f,{opacity:1,visibility:"visible",display:"block"}),b.animOut={opacity:0}}},scrollHorz:{before:function(a,b,c,d){a.API.stackSlides(b,c,d);var e=a.container.css("overflow","hidden").width();a.cssBefore={left:d?e:-e,top:0,opacity:1,visibility:"visible",display:"block"},a.cssAfter={zIndex:a._maxZ-2,left:0},a.animIn={left:0},a.animOut={left:d?-e:e}}}},a.fn.cycle.defaults={allowWrap:!0,autoSelector:".cycle-slideshow[data-cycle-auto-init!=false]",delay:0,easing:null,fx:"fade",hideNonActive:!0,loop:0,manualFx:void 0,manualSpeed:void 0,manualTrump:!0,maxZ:100,pauseOnHover:!1,reverse:!1,slideActiveClass:"cycle-slide-active",slideClass:"cycle-slide",slideCss:{position:"absolute",top:0,left:0},slides:"> img",speed:500,startingSlide:0,sync:!0,timeout:4e3,updateView:0},a(document).ready(function(){a(a.fn.cycle.defaults.autoSelector).cycle()})}(jQuery),/*! Cycle2 autoheight plugin; Copyright (c) M.Alsup, 2012; version: 20130913 */
function(a){"use strict";function b(b,d){var e,f,g,h=d.autoHeight;if("container"==h)f=a(d.slides[d.currSlide]).outerHeight(),d.container.height(f);else if(d._autoHeightRatio)d.container.height(d.container.width()/d._autoHeightRatio);else if("calc"===h||"number"==a.type(h)&&h>=0){if(g="calc"===h?c(b,d):h>=d.slides.length?0:h,g==d._sentinelIndex)return;d._sentinelIndex=g,d._sentinel&&d._sentinel.remove(),e=a(d.slides[g].cloneNode(!0)),e.removeAttr("id name rel").find("[id],[name],[rel]").removeAttr("id name rel"),e.css({position:"static",visibility:"hidden",display:"block"}).prependTo(d.container).addClass("cycle-sentinel cycle-slide").removeClass("cycle-slide-active"),e.find("*").css("visibility","hidden"),d._sentinel=e}}function c(b,c){var d=0,e=-1;return c.slides.each(function(b){var c=a(this).height();c>e&&(e=c,d=b)}),d}function d(b,c,d,e){var f=a(e).outerHeight();c.container.animate({height:f},c.autoHeightSpeed,c.autoHeightEasing)}function e(c,f){f._autoHeightOnResize&&(a(window).off("resize orientationchange",f._autoHeightOnResize),f._autoHeightOnResize=null),f.container.off("cycle-slide-added cycle-slide-removed",b),f.container.off("cycle-destroyed",e),f.container.off("cycle-before",d),f._sentinel&&(f._sentinel.remove(),f._sentinel=null)}a.extend(a.fn.cycle.defaults,{autoHeight:0,autoHeightSpeed:250,autoHeightEasing:null}),a(document).on("cycle-initialized",function(c,f){function g(){b(c,f)}var h,i=f.autoHeight,j=a.type(i),k=null;("string"===j||"number"===j)&&(f.container.on("cycle-slide-added cycle-slide-removed",b),f.container.on("cycle-destroyed",e),"container"==i?f.container.on("cycle-before",d):"string"===j&&/\d+\:\d+/.test(i)&&(h=i.match(/(\d+)\:(\d+)/),h=h[1]/h[2],f._autoHeightRatio=h),"number"!==j&&(f._autoHeightOnResize=function(){clearTimeout(k),k=setTimeout(g,50)},a(window).on("resize orientationchange",f._autoHeightOnResize)),setTimeout(g,30))})}(jQuery),/*! caption plugin for Cycle2;  version: 20130306 */
function(a){"use strict";a.extend(a.fn.cycle.defaults,{caption:"> .cycle-caption",captionTemplate:"{{slideNum}} / {{slideCount}}",overlay:"> .cycle-overlay",overlayTemplate:"<div>{{title}}</div><div>{{desc}}</div>",captionModule:"caption"}),a(document).on("cycle-update-view",function(b,c,d,e){if("caption"===c.captionModule){a.each(["caption","overlay"],function(){var a=this,b=d[a+"Template"],f=c.API.getComponent(a);f.length&&b?(f.html(c.API.tmpl(b,d,c,e)),f.show()):f.hide()})}}),a(document).on("cycle-destroyed",function(b,c){var d;a.each(["caption","overlay"],function(){var a=this,b=c[a+"Template"];c[a]&&b&&(d=c.API.getComponent("caption"),d.empty())})})}(jQuery),/*! command plugin for Cycle2;  version: 20140415 */
function(a){"use strict";var b=a.fn.cycle;a.fn.cycle=function(c){var d,e,f,g=a.makeArray(arguments);return"number"==a.type(c)?this.cycle("goto",c):"string"==a.type(c)?this.each(function(){var h;return d=c,f=a(this).data("cycle.opts"),void 0===f?void b.log('slideshow must be initialized before sending commands; "'+d+'" ignored'):(d="goto"==d?"jump":d,e=f.API[d],a.isFunction(e)?(h=a.makeArray(g),h.shift(),e.apply(f.API,h)):void b.log("unknown command: ",d))}):b.apply(this,arguments)},a.extend(a.fn.cycle,b),a.extend(b.API,{next:function(){var a=this.opts();if(!a.busy||a.manualTrump){var b=a.reverse?-1:1;a.allowWrap===!1&&a.currSlide+b>=a.slideCount||(a.API.advanceSlide(b),a.API.trigger("cycle-next",[a]).log("cycle-next"))}},prev:function(){var a=this.opts();if(!a.busy||a.manualTrump){var b=a.reverse?1:-1;a.allowWrap===!1&&a.currSlide+b<0||(a.API.advanceSlide(b),a.API.trigger("cycle-prev",[a]).log("cycle-prev"))}},destroy:function(){this.stop();var b=this.opts(),c=a.isFunction(a._data)?a._data:a.noop;clearTimeout(b.timeoutId),b.timeoutId=0,b.API.stop(),b.API.trigger("cycle-destroyed",[b]).log("cycle-destroyed"),b.container.removeData(),c(b.container[0],"parsedAttrs",!1),b.retainStylesOnDestroy||(b.container.removeAttr("style"),b.slides.removeAttr("style"),b.slides.removeClass(b.slideActiveClass)),b.slides.each(function(){var d=a(this);d.removeData(),d.removeClass(b.slideClass),c(this,"parsedAttrs",!1)})},jump:function(a,b){var c,d=this.opts();if(!d.busy||d.manualTrump){var e=parseInt(a,10);if(isNaN(e)||0>e||e>=d.slides.length)return void d.API.log("goto: invalid slide index: "+e);if(e==d.currSlide)return void d.API.log("goto: skipping, already on slide",e);d.nextSlide=e,clearTimeout(d.timeoutId),d.timeoutId=0,d.API.log("goto: ",e," (zero-index)"),c=d.currSlide<d.nextSlide,d._tempFx=b,d.API.prepareTx(!0,c)}},stop:function(){var b=this.opts(),c=b.container;clearTimeout(b.timeoutId),b.timeoutId=0,b.API.stopTransition(),b.pauseOnHover&&(b.pauseOnHover!==!0&&(c=a(b.pauseOnHover)),c.off("mouseenter mouseleave")),b.API.trigger("cycle-stopped",[b]).log("cycle-stopped")},reinit:function(){var a=this.opts();a.API.destroy(),a.container.cycle()},remove:function(b){for(var c,d,e=this.opts(),f=[],g=1,h=0;h<e.slides.length;h++)c=e.slides[h],h==b?d=c:(f.push(c),a(c).data("cycle.opts").slideNum=g,g++);d&&(e.slides=a(f),e.slideCount--,a(d).remove(),b==e.currSlide?e.API.advanceSlide(1):b<e.currSlide?e.currSlide--:e.currSlide++,e.API.trigger("cycle-slide-removed",[e,b,d]).log("cycle-slide-removed"),e.API.updateView())}}),a(document).on("click.cycle","[data-cycle-cmd]",function(b){b.preventDefault();var c=a(this),d=c.data("cycle-cmd"),e=c.data("cycle-context")||".cycle-slideshow";a(e).cycle(d,c.data("cycle-arg"))})}(jQuery),/*! hash plugin for Cycle2;  version: 20130905 */
function(a){"use strict";function b(b,c){var d;return b._hashFence?void(b._hashFence=!1):(d=window.location.hash.substring(1),void b.slides.each(function(e){if(a(this).data("cycle-hash")==d){if(c===!0)b.startingSlide=e;else{var f=b.currSlide<e;b.nextSlide=e,b.API.prepareTx(!0,f)}return!1}}))}a(document).on("cycle-pre-initialize",function(c,d){b(d,!0),d._onHashChange=function(){b(d,!1)},a(window).on("hashchange",d._onHashChange)}),a(document).on("cycle-update-view",function(a,b,c){c.hash&&"#"+c.hash!=window.location.hash&&(b._hashFence=!0,window.location.hash=c.hash)}),a(document).on("cycle-destroyed",function(b,c){c._onHashChange&&a(window).off("hashchange",c._onHashChange)})}(jQuery),/*! loader plugin for Cycle2;  version: 20131121 */
function(a){"use strict";a.extend(a.fn.cycle.defaults,{loader:!1}),a(document).on("cycle-bootstrap",function(b,c){function d(b,d){function f(b){var f;"wait"==c.loader?(h.push(b),0===j&&(h.sort(g),e.apply(c.API,[h,d]),c.container.removeClass("cycle-loading"))):(f=a(c.slides[c.currSlide]),e.apply(c.API,[b,d]),f.show(),c.container.removeClass("cycle-loading"))}function g(a,b){return a.data("index")-b.data("index")}var h=[];if("string"==a.type(b))b=a.trim(b);else if("array"===a.type(b))for(var i=0;i<b.length;i++)b[i]=a(b[i])[0];b=a(b);var j=b.length;j&&(b.css("visibility","hidden").appendTo("body").each(function(b){function g(){0===--i&&(--j,f(k))}var i=0,k=a(this),l=k.is("img")?k:k.find("img");return k.data("index",b),l=l.filter(":not(.cycle-loader-ignore)").filter(':not([src=""])'),l.length?(i=l.length,void l.each(function(){this.complete?g():a(this).load(function(){g()}).on("error",function(){0===--i&&(c.API.log("slide skipped; img not loaded:",this.src),0===--j&&"wait"==c.loader&&e.apply(c.API,[h,d]))})})):(--j,void h.push(k))}),j&&c.container.addClass("cycle-loading"))}var e;c.loader&&(e=c.API.add,c.API.add=d)})}(jQuery),/*! pager plugin for Cycle2;  version: 20140415 */
function(a){"use strict";function b(b,c,d){var e,f=b.API.getComponent("pager");f.each(function(){var f=a(this);if(c.pagerTemplate){var g=b.API.tmpl(c.pagerTemplate,c,b,d[0]);e=a(g).appendTo(f)}else e=f.children().eq(b.slideCount-1);e.on(b.pagerEvent,function(a){b.pagerEventBubble||a.preventDefault(),b.API.page(f,a.currentTarget)})})}function c(a,b){var c=this.opts();if(!c.busy||c.manualTrump){var d=a.children().index(b),e=d,f=c.currSlide<e;c.currSlide!=e&&(c.nextSlide=e,c._tempFx=c.pagerFx,c.API.prepareTx(!0,f),c.API.trigger("cycle-pager-activated",[c,a,b]))}}a.extend(a.fn.cycle.defaults,{pager:"> .cycle-pager",pagerActiveClass:"cycle-pager-active",pagerEvent:"click.cycle",pagerEventBubble:void 0,pagerTemplate:"<span>&bull;</span>"}),a(document).on("cycle-bootstrap",function(a,c,d){d.buildPagerLink=b}),a(document).on("cycle-slide-added",function(a,b,d,e){b.pager&&(b.API.buildPagerLink(b,d,e),b.API.page=c)}),a(document).on("cycle-slide-removed",function(b,c,d){if(c.pager){var e=c.API.getComponent("pager");e.each(function(){var b=a(this);a(b.children()[d]).remove()})}}),a(document).on("cycle-update-view",function(b,c){var d;c.pager&&(d=c.API.getComponent("pager"),d.each(function(){a(this).children().removeClass(c.pagerActiveClass).eq(c.currSlide).addClass(c.pagerActiveClass)}))}),a(document).on("cycle-destroyed",function(a,b){var c=b.API.getComponent("pager");c&&(c.children().off(b.pagerEvent),b.pagerTemplate&&c.empty())})}(jQuery),/*! prevnext plugin for Cycle2;  version: 20140408 */
function(a){"use strict";a.extend(a.fn.cycle.defaults,{next:"> .cycle-next",nextEvent:"click.cycle",disabledClass:"disabled",prev:"> .cycle-prev",prevEvent:"click.cycle",swipe:!1}),a(document).on("cycle-initialized",function(a,b){if(b.API.getComponent("next").on(b.nextEvent,function(a){a.preventDefault(),b.API.next()}),b.API.getComponent("prev").on(b.prevEvent,function(a){a.preventDefault(),b.API.prev()}),b.swipe){var c=b.swipeVert?"swipeUp.cycle":"swipeLeft.cycle swipeleft.cycle",d=b.swipeVert?"swipeDown.cycle":"swipeRight.cycle swiperight.cycle";b.container.on(c,function(){b._tempFx=b.swipeFx,b.API.next()}),b.container.on(d,function(){b._tempFx=b.swipeFx,b.API.prev()})}}),a(document).on("cycle-update-view",function(a,b){if(!b.allowWrap){var c=b.disabledClass,d=b.API.getComponent("next"),e=b.API.getComponent("prev"),f=b._prevBoundry||0,g=void 0!==b._nextBoundry?b._nextBoundry:b.slideCount-1;b.currSlide==g?d.addClass(c).prop("disabled",!0):d.removeClass(c).prop("disabled",!1),b.currSlide===f?e.addClass(c).prop("disabled",!0):e.removeClass(c).prop("disabled",!1)}}),a(document).on("cycle-destroyed",function(a,b){b.API.getComponent("prev").off(b.nextEvent),b.API.getComponent("next").off(b.prevEvent),b.container.off("swipeleft.cycle swiperight.cycle swipeLeft.cycle swipeRight.cycle swipeUp.cycle swipeDown.cycle")})}(jQuery),/*! progressive loader plugin for Cycle2;  version: 20130315 */
function(a){"use strict";a.extend(a.fn.cycle.defaults,{progressive:!1}),a(document).on("cycle-pre-initialize",function(b,c){if(c.progressive){var d,e,f=c.API,g=f.next,h=f.prev,i=f.prepareTx,j=a.type(c.progressive);if("array"==j)d=c.progressive;else if(a.isFunction(c.progressive))d=c.progressive(c);else if("string"==j){if(e=a(c.progressive),d=a.trim(e.html()),!d)return;if(/^(\[)/.test(d))try{d=a.parseJSON(d)}catch(k){return void f.log("error parsing progressive slides",k)}else d=d.split(new RegExp(e.data("cycle-split")||"\n")),d[d.length-1]||d.pop()}i&&(f.prepareTx=function(a,b){var e,f;return a||0===d.length?void i.apply(c.API,[a,b]):void(b&&c.currSlide==c.slideCount-1?(f=d[0],d=d.slice(1),c.container.one("cycle-slide-added",function(a,b){setTimeout(function(){b.API.advanceSlide(1)},50)}),c.API.add(f)):b||0!==c.currSlide?i.apply(c.API,[a,b]):(e=d.length-1,f=d[e],d=d.slice(0,e),c.container.one("cycle-slide-added",function(a,b){setTimeout(function(){b.currSlide=1,b.API.advanceSlide(-1)},50)}),c.API.add(f,!0)))}),g&&(f.next=function(){var a=this.opts();if(d.length&&a.currSlide==a.slideCount-1){var b=d[0];d=d.slice(1),a.container.one("cycle-slide-added",function(a,b){g.apply(b.API),b.container.removeClass("cycle-loading")}),a.container.addClass("cycle-loading"),a.API.add(b)}else g.apply(a.API)}),h&&(f.prev=function(){var a=this.opts();if(d.length&&0===a.currSlide){var b=d.length-1,c=d[b];d=d.slice(0,b),a.container.one("cycle-slide-added",function(a,b){b.currSlide=1,b.API.advanceSlide(-1),b.container.removeClass("cycle-loading")}),a.container.addClass("cycle-loading"),a.API.add(c,!0)}else h.apply(a.API)})}})}(jQuery),/*! tmpl plugin for Cycle2;  version: 20121227 */
function(a){"use strict";a.extend(a.fn.cycle.defaults,{tmplRegex:"{{((.)?.*?)}}"}),a.extend(a.fn.cycle.API,{tmpl:function(b,c){var d=new RegExp(c.tmplRegex||a.fn.cycle.defaults.tmplRegex,"g"),e=a.makeArray(arguments);return e.shift(),b.replace(d,function(b,c){var d,f,g,h,i=c.split(".");for(d=0;d<e.length;d++)if(g=e[d]){if(i.length>1)for(h=g,f=0;f<i.length;f++)g=h,h=h[i[f]]||c;else h=g[c];if(a.isFunction(h))return h.apply(g,e);if(void 0!==h&&null!==h&&h!=c)return h}return c})}})}(jQuery);
//# sourceMappingURL=jquery.cycle2.js.map;
// jQuery HC-Sticky
// =============
// Version: 1.2.43
// Copyright: Some Web Media
// Author: Some Web Guy
// Author URL: http://twitter.com/some_web_guy
// Website: http://someweblog.com/
// Plugin URL: https://github.com/somewebmedia/hc-sticky
// License: Released under the MIT License www.opensource.org/licenses/mit-license.php
// Description: Cross-browser jQuery plugin that makes any element attached to the page and always visible while you scroll.

(function(e,t,n){"use strict";var r=function(e){console.log(e)};var i=e(t),s=t.document,o=e(s);var u=function(){var e,t=3,n=s.createElement("div"),r=n.getElementsByTagName("i");while(n.innerHTML="<!--[if gt IE "+ ++t+"]><i></i><![endif]-->",r[0]){}return t>4?t:e}();var a=function(){var e=t.pageXOffset!==n?t.pageXOffset:s.compatMode=="CSS1Compat"?t.document.documentElement.scrollLeft:t.document.body.scrollLeft,r=t.pageYOffset!==n?t.pageYOffset:s.compatMode=="CSS1Compat"?t.document.documentElement.scrollTop:t.document.body.scrollTop;if(typeof a.x=="undefined"){a.x=e;a.y=r}if(typeof a.distanceX=="undefined"){a.distanceX=e;a.distanceY=r}else{a.distanceX=e-a.x;a.distanceY=r-a.y}var i=a.x-e,o=a.y-r;a.direction=i<0?"right":i>0?"left":o<=0?"down":o>0?"up":"first";a.x=e;a.y=r};i.on("scroll",a);e.fn.style=function(n){if(!n)return null;var r=e(this),i;var o=r.clone().css("display","none");o.find("input:radio").attr("name","copy-"+Math.floor(Math.random()*100+1));r.after(o);var u=function(e,n){var i;if(e.currentStyle){i=e.currentStyle[n.replace(/-\w/g,function(e){return e.toUpperCase().replace("-","")})]}else if(t.getComputedStyle){i=s.defaultView.getComputedStyle(e,null).getPropertyValue(n)}i=/margin/g.test(n)?parseInt(i)===r[0].offsetLeft?i:"auto":i;return i};if(typeof n=="string"){i=u(o[0],n)}else{i={};e.each(n,function(e,t){i[t]=u(o[0],t)})}o.remove();return i||null};e.fn.extend({hcSticky:function(r){if(this.length==0)return this;this.pluginOptions("hcSticky",{top:0,bottom:0,bottomEnd:0,innerTop:0,innerSticker:null,className:"sticky",wrapperClassName:"wrapper-sticky",stickTo:null,responsive:true,followScroll:true,offResolutions:null,onStart:e.noop,onStop:e.noop,on:true,fn:null},r||{},{reinit:function(){e(this).hcSticky()},stop:function(){e(this).pluginOptions("hcSticky",{on:false}).each(function(){var t=e(this),n=t.pluginOptions("hcSticky"),r=t.parent("."+n.wrapperClassName);var i=t.offset().top-r.offset().top;t.css({position:"absolute",top:i,bottom:"auto",left:"auto",right:"auto"}).removeClass(n.className)})},off:function(){e(this).pluginOptions("hcSticky",{on:false}).each(function(){var t=e(this),n=t.pluginOptions("hcSticky"),r=t.parent("."+n.wrapperClassName);t.css({position:"relative",top:"auto",bottom:"auto",left:"auto",right:"auto"}).removeClass(n.className);r.css("height","auto")})},on:function(){e(this).each(function(){e(this).pluginOptions("hcSticky",{on:true,remember:{offsetTop:i.scrollTop()}}).hcSticky()})},destroy:function(){var t=e(this),n=t.pluginOptions("hcSticky"),r=t.parent("."+n.wrapperClassName);t.removeData("hcStickyInit").css({position:r.css("position"),top:r.css("top"),bottom:r.css("bottom"),left:r.css("left"),right:r.css("right")}).removeClass(n.className);i.off("resize",n.fn.resize).off("scroll",n.fn.scroll);t.unwrap()}});if(r&&typeof r.on!="undefined"){if(r.on){this.hcSticky("on")}else{this.hcSticky("off")}}if(typeof r=="string")return this;return this.each(function(){var r=e(this),s=r.pluginOptions("hcSticky");var f=function(){var e=r.parent("."+s.wrapperClassName);if(e.length>0){e.css({height:r.outerHeight(true),width:function(){var t=e.style("width");if(t.indexOf("%")>=0||t=="auto"){if(r.css("box-sizing")=="border-box"||r.css("-moz-box-sizing")=="border-box"){r.css("width",e.width())}else{r.css("width",e.width()-parseInt(r.css("padding-left")-parseInt(r.css("padding-right"))))}return t}else{return r.outerWidth(true)}}()});return e}else{return false}}()||function(){var t=r.style(["width","margin-left","left","right","top","bottom","float","display"]);var n=r.css("display");var i=e("<div>",{"class":s.wrapperClassName}).css({display:n,height:r.outerHeight(true),width:function(){if(t["width"].indexOf("%")>=0||t["width"]=="auto"&&n!="inline-block"&&n!="inline"){r.css("width",parseFloat(r.css("width")));return t["width"]}else if(t["width"]=="auto"&&(n=="inline-block"||n=="inline")){return r.width()}else{return t["margin-left"]=="auto"?r.outerWidth():r.outerWidth(true)}}(),margin:t["margin-left"]?"auto":null,position:function(){var e=r.css("position");return e=="static"?"relative":e}(),"float":t["float"]||null,left:t["left"],right:t["right"],top:t["top"],bottom:t["bottom"],"vertical-align":"top"});r.wrap(i);if(u===7){if(e("head").find("style#hcsticky-iefix").length===0){e('<style id="hcsticky-iefix">.'+s.wrapperClassName+" {zoom: 1;}</style>").appendTo("head")}}return r.parent()}();if(r.data("hcStickyInit"))return;r.data("hcStickyInit",true);var l=s.stickTo&&(s.stickTo=="document"||s.stickTo.nodeType&&s.stickTo.nodeType==9||typeof s.stickTo=="object"&&s.stickTo instanceof(typeof HTMLDocument!="undefined"?HTMLDocument:Document))?true:false;var c=s.stickTo?l?o:typeof s.stickTo=="string"?e(s.stickTo):s.stickTo:f.parent();r.css({top:"auto",bottom:"auto",left:"auto",right:"auto"});i.load(function(){if(r.outerHeight(true)>c.height()){f.css("height",r.outerHeight(true));r.hcSticky("reinit")}});var h=function(e){if(r.hasClass(s.className))return;e=e||{};r.css({position:"fixed",top:e.top||0,left:e.left||f.offset().left}).addClass(s.className);s.onStart.apply(r[0]);f.addClass("sticky-active")},p=function(e){e=e||{};e.position=e.position||"absolute";e.top=e.top||0;e.left=e.left||0;if(r.css("position")!="fixed"&&parseInt(r.css("top"))==e.top)return;r.css({position:e.position,top:e.top,left:e.left}).removeClass(s.className);s.onStop.apply(r[0]);f.removeClass("sticky-active")};var d=function(t){if(!s.on||!r.is(":visible"))return;if(r.outerHeight(true)>=c.height()){p();return}var n=s.innerSticker?e(s.innerSticker).position().top:s.innerTop?s.innerTop:0,o=f.offset().top,u=c.height()-s.bottomEnd+(l?0:o),d=f.offset().top-s.top+n,v=r.outerHeight(true)+s.bottom,m=i.height(),g=i.scrollTop(),y=r.offset().top,b=y-g,w;if(typeof s.remember!="undefined"&&s.remember){var E=y-s.top-n;if(v-n>m&&s.followScroll){if(E<g&&g+m<=E+r.height()){s.remember=false}}else{if(s.remember.offsetTop>E){if(g<=E){h({top:s.top-n});s.remember=false}}else{if(g>=E){h({top:s.top-n});s.remember=false}}}return}if(g>d){if(u+s.bottom-(s.followScroll&&m<v?0:s.top)<=g+v-n-(v-n>m-(d-n)&&s.followScroll?(w=v-m-n)>0?w:0:0)){p({top:u-v+s.bottom-o})}else if(v-n>m&&s.followScroll){if(b+v<=m){if(a.direction=="down"){h({top:m-v})}else{if(b<0&&r.css("position")=="fixed"){p({top:y-(d+s.top-n)-a.distanceY})}}}else{if(a.direction=="up"&&y>=g+s.top-n){h({top:s.top-n})}else if(a.direction=="down"&&y+v>m&&r.css("position")=="fixed"){p({top:y-(d+s.top-n)-a.distanceY})}}}else{h({top:s.top-n})}}else{p()}};var v=false,m=false;var g=function(){b();y();if(!s.on)return;var e=function(){if(r.css("position")=="fixed"){r.css("left",f.offset().left)}else{r.css("left",0)}};if(s.responsive){if(!m){m=r.clone().attr("style","").css({visibility:"hidden",height:0,overflow:"hidden",paddingTop:0,paddingBottom:0,marginTop:0,marginBottom:0});f.after(m)}var t=f.style("width");var n=m.style("width");if(n=="auto"&&t!="auto"){n=parseInt(r.css("width"))}if(n!=t){f.width(n)}if(v){clearTimeout(v)}v=setTimeout(function(){v=false;m.remove();m=false},250)}e();if(r.outerWidth(true)!=f.width()){var i=r.css("box-sizing")=="border-box"||r.css("-moz-box-sizing")=="border-box"?f.width():f.width()-parseInt(r.css("padding-left"))-parseInt(r.css("padding-right"));i=i-parseInt(r.css("margin-left"))-parseInt(r.css("margin-right"));r.css("width",i)}};r.pluginOptions("hcSticky",{fn:{scroll:d,resize:g}});var y=function(){if(s.offResolutions){if(!e.isArray(s.offResolutions)){s.offResolutions=[s.offResolutions]}var t=true;e.each(s.offResolutions,function(e,n){if(n<0){if(i.width()<n*-1){t=false;r.hcSticky("off")}}else{if(i.width()>n){t=false;r.hcSticky("off")}}});if(t&&!s.on){r.hcSticky("on")}}};y();i.on("resize",g);var b=function(){var r=false;if(e._data(t,"events").scroll!=n){e.each(e._data(t,"events").scroll,function(e,t){if(t.handler==s.fn.scroll){r=true}})}if(!r){s.fn.scroll(true);i.on("scroll",s.fn.scroll)}};b()})}})})(jQuery,this);(function(e,t){"use strict";e.fn.extend({pluginOptions:function(n,r,i,s){if(!this.data(n))this.data(n,{});if(n&&typeof r=="undefined")return this.data(n).options;i=i||r||{};if(typeof i=="object"||i===t){return this.each(function(){var t=e(this);if(!t.data(n).options){t.data(n,{options:e.extend(r,i||{})});if(s){t.data(n).commands=s}}else{t.data(n,e.extend(t.data(n),{options:e.extend(t.data(n).options,i||{})}))}})}else if(typeof i=="string"){return this.each(function(){e(this).data(n).commands[i].call(this)})}else{return this}}})})(jQuery)
;
/*!
 * jQuery Scrollspy Plugin
 * Author: @sxalexander
 * Licensed under the MIT license
 */
;(function ( $, window, document, undefined ) {

    $.fn.extend({
      scrollspy: function ( options ) {
        
          var defaults = {
            min: 0,
            max: 0,
            mode: 'vertical',
            namespace: 'scrollspy',
            buffer: 0,
            container: window,
            onEnter: options.onEnter ? options.onEnter : [],
            onLeave: options.onLeave ? options.onLeave : [],
            onTick: options.onTick ? options.onTick : []
          }
          
          var options = $.extend( {}, defaults, options );

          return this.each(function (i) {

              var element = this;
              var o = options;
              var $container = $(o.container);
              var mode = o.mode;
              var buffer = o.buffer;
              var enters = leaves = 0;
              var inside = false;
                            
              /* add listener to container */
              $container.bind('scroll.' + o.namespace, function(e){
                  var position = {top: $(this).scrollTop(), left: $(this).scrollLeft()};
                  var xy = (mode == 'vertical') ? position.top + buffer : position.left + buffer;
                  var max = o.max;
                  var min = o.min;
                  
                  /* fix max */
                  if($.isFunction(o.max)){
                    max = o.max();
                  }

                  /* fix max */
                  if($.isFunction(o.min)){
                    min = o.min();
                  }

                  if(max == 0){
                      max = (mode == 'vertical') ? $container.height() : $container.outerWidth() + $(element).outerWidth();
                  }
                  
                  /* if we have reached the minimum bound but are below the max ... */
                  if(xy >= min && xy <= max){
                    /* trigger enter event */
                    if(!inside){
                       inside = true;
                       enters++;
                       
                       /* fire enter event */
                       $(element).trigger('scrollEnter', {position: position})
                       if($.isFunction(o.onEnter)){
                         o.onEnter(element, position);
                       }
                      
                     }
                     
                     /* trigger tick event */
                     $(element).trigger('scrollTick', {position: position, inside: inside, enters: enters, leaves: leaves})
                     if($.isFunction(o.onTick)){
                       o.onTick(element, position, inside, enters, leaves);
                     }
                  }else{
                    
                    if(inside){
                      inside = false;
                      leaves++;
                      /* trigger leave event */
                      $(element).trigger('scrollLeave', {position: position, leaves:leaves})

                      if($.isFunction(o.onLeave)){
                        o.onLeave(element, position);
                      }
                    }
                  }
              }); 

          });
      }

    })

    
})( jQuery, window, document, undefined );
;
/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );
;
/* Modernizr 2.7.1 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransforms3d-csstransitions-shiv-cssclasses-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function z(a){j.cssText=a}function A(a,b){return z(m.join(a+";")+(b||""))}function B(a,b){return typeof a===b}function C(a,b){return!!~(""+a).indexOf(b)}function D(a,b){for(var d in a){var e=a[d];if(!C(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function E(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:B(f,"function")?f.bind(d||b):f}return!1}function F(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return B(b,"string")||B(b,"undefined")?D(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),E(e,b,c))}var d="2.7.1",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},x={}.hasOwnProperty,y;!B(x,"undefined")&&!B(x.call,"undefined")?y=function(a,b){return x.call(a,b)}:y=function(a,b){return b in a&&B(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.csstransforms3d=function(){var a=!!F("perspective");return a&&"webkitPerspective"in g.style&&w("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},q.csstransitions=function(){return F("transition")};for(var G in q)y(q,G)&&(v=G.toLowerCase(),e[v]=q[G](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)y(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},z(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return D([a])},e.testAllProps=F,e.testStyles=w,e.prefixed=function(a,b,c){return b?F(a,b,c):F(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+t.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};;
/**
 * progressButton.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
;( function( window ) {
	
	'use strict';

	// https://gist.github.com/edankwan/4389601
	Modernizr.addTest('csstransformspreserve3d', function () {
		var prop = Modernizr.prefixed('transformStyle');
		var val = 'preserve-3d';
		var computedStyle;
		if(!prop) return false;

		prop = prop.replace(/([A-Z])/g, function(str,m1){ return '-' + m1.toLowerCase(); }).replace(/^ms-/,'-ms-');

		Modernizr.testStyles('#modernizr{' + prop + ':' + val + ';}', function (el, rule) {
			computedStyle = window.getComputedStyle ? getComputedStyle(el, null).getPropertyValue(prop) : '';
		});

		return (computedStyle === val);
	});

	function extend( a, b ) {
		for( var key in b ) { 
			if( b.hasOwnProperty( key ) ) {
				a[key] = b[key];
			}
		}
		return a;
	}

	// support
	var support = { transitions : Modernizr.csstransitions, transforms3d : Modernizr.csstransforms3d && Modernizr.csstransformspreserve3d },
		// transition end event name
		transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ];

	function ProgressButton( el, options ) {
		this.button = el;
		this.options = extend( {}, this.options );
  		extend( this.options, options );
  		this._init();
	}

	ProgressButton.prototype.options = {
		// time in ms that the status (success or error will be displayed)
		// during this time the button will be disabled
		statusTime : 1500
	};

	ProgressButton.prototype._init = function() {
		this._validate();
		// create structure
		this._create();
		// init events
		this._initEvents();
	};

	ProgressButton.prototype._validate = function() {
		// we will consider the fill/horizontal as default
		if( this.button.getAttribute( 'data-style' ) === null ) {
			this.button.setAttribute( 'data-style', 'fill' );
		}
		if( this.button.getAttribute( 'data-vertical' ) === null && this.button.getAttribute( 'data-horizontal' ) === null ) {
			this.button.setAttribute( 'data-horizontal', '' );
		}
		if( !support.transforms3d && this.button.getAttribute( 'data-perspective' ) !== null ) {
			this.button.removeAttribute( 'data-perspective' );
			this.button.setAttribute( 'data-style', 'fill' );
			this.button.removeAttribute( 'data-vertical' );
			this.button.setAttribute( 'data-horizontal', '' );
		}
	};

	ProgressButton.prototype._create = function() {
		var textEl = document.createElement( 'span' );
		textEl.className = 'content';
		textEl.innerHTML = this.button.innerHTML;
		var progressEl = document.createElement( 'span' );
		progressEl.className = 'progress';

		var progressInnerEl = document.createElement( 'span' );
		progressInnerEl.className = 'progress-inner';
		progressEl.appendChild( progressInnerEl );
		// clear content
		this.button.innerHTML = '';

		if( this.button.getAttribute( 'data-perspective' ) !== null ) {
			var progressWrapEl = document.createElement( 'span' );
			progressWrapEl.className = 'progress-wrap';
			progressWrapEl.appendChild( textEl );
			progressWrapEl.appendChild( progressEl );
			this.button.appendChild( progressWrapEl );
		}
		else {
			this.button.appendChild( textEl );
			this.button.appendChild( progressEl );
		}
		
		// the element that serves as the progress bar
		this.progress = progressInnerEl;

		// property to change on the progress element
		if( this.button.getAttribute( 'data-horizontal' ) !== null ) {
			this.progressProp = 'width';
		}
		else if( this.button.getAttribute( 'data-vertical' ) !== null ) {
			this.progressProp = 'height';
		}
		this._enable();
	};

	ProgressButton.prototype._setProgress = function( val ) {
		this.progress.style[ this.progressProp ] = 100 * val + '%';
	};

	ProgressButton.prototype._initEvents = function() {
		var self = this;
		this.button.addEventListener( 'click', function() {
			// disable the button
			self.button.setAttribute( 'disabled', '' );
			// add class state-loading to the button (applies a specific transform to the button depending which data-style is defined - defined in the stylesheets)
			classie.remove( self.progress, 'notransition' );
			classie.add( this, 'state-loading' );

			setTimeout( function() {
				if( typeof self.options.callback === 'function' ) {
					self.options.callback( self );
				}
				else {
					self._setProgress( 1 );
					var onEndTransFn = function( ev ) {
						if( support.transitions && ev.propertyName !== self.progressProp ) return;
						this.removeEventListener( transEndEventName, onEndTransFn );
						self._stop();
					};
					
					if( support.transitions ) {
						self.progress.addEventListener( transEndEventName, onEndTransFn );
					}
					else {
						onEndTransFn.call();
					}
					
				}
			}, 
			self.button.getAttribute( 'data-style' ) === 'fill' || 
			self.button.getAttribute( 'data-style' ) === 'top-line' ||
			self.button.getAttribute( 'data-style' ) === 'lateral-lines' ? 0 : 200 ); // TODO: change timeout to transitionend event callback
		} );
	};

	ProgressButton.prototype._stop = function( status ) {
		var self = this;

		setTimeout( function() {
			// fade out progress bar
			self.progress.style.opacity = 0;
			var onEndTransFn = function( ev ) {
				if( support.transitions && ev.propertyName !== 'opacity' ) return;
				this.removeEventListener( transEndEventName, onEndTransFn );
				classie.add( self.progress, 'notransition' );
				self.progress.style[ self.progressProp ] = '0%';
				self.progress.style.opacity = 1;
			};

			if( support.transitions ) {
				self.progress.addEventListener( transEndEventName, onEndTransFn );
			}
			else {
				onEndTransFn.call();
			}
			
			
			// add class state-success to the button
			if( typeof status === 'number' ) {
				var statusClass = status >= 0 ? 'state-success' : 'state-error';
				classie.add( self.button, statusClass );
				// after options.statusTime remove status
				setTimeout( function() {
					classie.remove( self.button, statusClass );
					self._enable();
				}, self.options.statusTime );
			}
			else {
				self._enable();
			}

			// remove class state-loading from the button
			classie.remove( self.button, 'state-loading' );
		}, 100 );
	};

	// enable button
	ProgressButton.prototype._enable = function() {
		this.button.removeAttribute( 'disabled' );
	}

	// add to global namespace
	window.ProgressButton = ProgressButton;

})( window );;
jQuery(document).ready(function () {
    window.planinfo = {};
    var base = Drupal.settings.blazemeter.blazemeter_bza_url;
    var cookieName = Drupal.settings.blazemeter.blazemeter_cookie;

    jQuery('.back-to').attr('target', '');
    // PRICING PAGE Q&A expander
    jQuery(".pricing-question span").css('cursor', 'pointer');
    jQuery(".pricing-question span").click(function () {
        jQuery(this).parent().toggleClass('active');
        jQuery(this).parent().find('.pricing-answer > div').slideToggle('500', "easeInOutExpo", function () {
            // Animation complete.
        });
    });
    // PRICING PAGE Support table expander
    jQuery('.support-level').click(function () {
        jQuery('.support-level').each(function () {
            jQuery(this).toggleClass('expanded');
            jQuery('.features-table').toggleClass('support-level-expanded');
        });
        jQuery('.support-level-table').toggleClass('expanded');
    });

    jQuery('.billed-annually').click(function () {
        var price_basic = jQuery('.price .swap.swap-basic').attr('data-annual');
        var price_pro = jQuery('.price .swap.swap-pro').attr('data-annual');
        jQuery('.price .swap.swap-basic').text(price_basic);
        jQuery('.price .swap.swap-pro').text(price_pro);
        jQuery(this).addClass('active');
        jQuery('.billed-monthly').removeClass('active');
        jQuery('.basic-tests').html('<span class="val">200</span> Tests/Year');
        jQuery('.pro-tests').html('<span class="val">250</span> Tests/Year');
        jQuery('#switch-basic.basic-annually').show();
        jQuery('.plan-block-info').show();
        jQuery('.plan-block-payment').hide();
        jQuery('#switch-basic.basic-monthly').hide();
        jQuery('#switch-pro.pro-annually').show();
        jQuery('#switch-pro.pro-monthly').hide();
    });
    jQuery('.billed-monthly').click(function () {
        var price_basic = jQuery('.price .swap.swap-basic').attr('data-monthly');
        var price_pro = jQuery('.price .swap.swap-pro').attr('data-monthly');
        jQuery('.price .swap.swap-basic').text(price_basic);
        jQuery('.price .swap.swap-pro').text(price_pro);
        jQuery(this).addClass('active');
        jQuery('.plan-block-info').show();
        jQuery('.plan-block-payment').hide();
        jQuery('.billed-annually').removeClass('active');
        jQuery('.basic-tests').html('<span class="val">15</span> Tests');
        jQuery('.pro-tests').html('<span class="val">20</span> Tests');
        jQuery('#switch-basic.basic-annually').hide();
        jQuery('#switch-basic.basic-monthly').show();
        jQuery('#switch-pro.pro-annually').hide();
        jQuery('#switch-pro.pro-monthly').show();
    });


    if (window.location.pathname == '/pricing') {
        var plan = getParameterByName('a');
        try {
            var decrypted_url = atob(plan);
        } catch (err) {
        }
        var cookieValue = readCookieBZM(cookieName);
        if (cookieValue.length > 0) {
            cookieValue = JSON.parse(cookieValue);
        }
        var cookieUid = cookieValue.uid;
        var name = getParameterByUrl('name', decrypted_url);
        var amount = getParameterByUrl('amount', decrypted_url);
        var planid = getParameterByUrl('planid', decrypted_url);
        var interval = getParameterByUrl('interval', decrypted_url);
        var recurring = getParameterByUrl('recurring', decrypted_url);



        var interval_count = getParameterByUrl('plan_interval_count', decrypted_url);
        window.planinfo.recuring = recurring;
        window.planinfo.interval = interval;
        window.planinfo.interval_count = interval_count;
        window.planinfo.interval_modified = false;

        if (name && amount && planid && interval) {
            if (cookieUid > 0) {
                var fade_pricing_popup = jQuery('<div class=fade></div>');
                jQuery('body').append(fade_pricing_popup);
                fade_pricing_popup.css({
                    'display': 'block',
                    'opacity': 1
                });
                jQuery('.payment_popup').fadeIn();
                jQuery('.payment-amount').addClass('custom-plan');
                var current_toggle = jQuery('.toggles').attr('data-selected');
                if (current_toggle == 'an') {
                    jQuery('.plan-action.month').removeClass('active');
                    jQuery('.plan-action.year').addClass('active');
                }
                jQuery('.plan-selected').val(planid);
                jQuery('.payment-plan-name').html('<span class=plan>PLAN</span> ' + name);
                jQuery('.subscribed').text('You are subscribed to the ' + name + ' plan!');
                jQuery('.payment-amount').html('$' + amount);
                jQuery('.plan-amount').val(amount * 100);
                jQuery('.original-amount').val(amount);
                var formatted_amount = formatAmount(amount);
                jQuery('.payment-button').text('Pay $' + formatted_amount);
                if(interval_count > 0) {
                    var multiInterval = "";
                    if(interval_count > 1) {
                        multiInterval = "s";
                    }
                    if(recurring == 'true') {
                        jQuery('#plan-actions span').text('');
                        jQuery('.payment-amount').html('$' + amount + '/<small>' + interval_count + ' ' + interval + multiInterval + '</small>');
                        jQuery('.payment-button').text('Pay $' + formatted_amount + '/' + interval_count + ' ' + interval + multiInterval) ;
                    }
                    else {
                        jQuery('#plan-actions span').text('One time payment. Plan expires in ' + interval_count + ' ' + interval + multiInterval + '.');
                    }
                } else {
                    if (!recurring || recurring == 'true') {
                        if (interval == 'year') {
                            jQuery('#plan-actions span').text('Billed Annually');
                        } else if (interval == 'month') {
                            jQuery('#plan-actions span').text('Billed Monthly');
                        } else if (interval == 'day') {
                            jQuery('#plan-actions span').text('Billed Daily');
                        } else if (interval == 'week') {
                            jQuery('#plan-actions span').text('Billed Weekly');
                        }
                    }}
            } else {
                var destination = location.href;
                window.location.replace(base + '/app/sign-in?destination=' + destination);
            }

        }

    }

    jQuery(".check-coupon").click(function () {
        if (jQuery(this).hasClass("disabled")) {
            return;
        }
        if (jQuery("#coupon_code").is(':checked')) {
            jQuery('.payment-have-coupon').hide();
        } else {
            jQuery('.payment-have-coupon').show();
        }
    });

    jQuery("#coupon_code").keypress(function (e) {
        if (e.keyCode == 32) {
            jQuery(".check-coupon").click();
        }
    });

    jQuery(".payment-holder .payment-cvc").on('keydown', function (e) {
        var keyCode = e.keyCode || e.which;
        if (keyCode == 9) {
            if (jQuery("#coupon_code").prop("checked") == false) {
                jQuery(".check-coupon").click();
            }
        }
    });

    jQuery(".payment-coupon-button.apply-coupon").click(function () {
        var coupon_code = jQuery('.payment-coupon-inp').val();
        if (coupon_code) {
            jQuery('.payment-coupon-inp').removeClass('credit-card-error');
            jQuery(this).text('Applying...');
            if (validateCoupon(coupon_code)) {
                var xmlhttpCPN = new XMLHttpRequest();
                xmlhttpCPN.onreadystatechange = function () {
                    if (xmlhttpCPN.readyState == 4) {

                        var response = JSON.parse(xmlhttpCPN.response);

                        if (xmlhttpCPN.status != 200) {
                            jQuery('#coupon_code').prop('disabled', false);
                            jQuery('.check-coupon').removeClass('disabled');
                            jQuery('.payment-coupon-inp').prop('disabled', false);
                            jQuery('.payment-coupon-button.apply-coupon').text('Apply');
                            jQuery('.coupon-success').text('');
                            jQuery('.payment-error').text('Coupon is invalid.');
                        } else {
                            if (response.result.valid == true) {
                                jQuery('#coupon_code').prop('disabled', true);
                                jQuery('.check-coupon').addClass('disabled');
                                jQuery('.payment-coupon-inp').prop('disabled', true);
                                jQuery(".payment-coupon-button.apply-coupon").hide();
                                jQuery('.payment-coupon-button.remove-coupon').show();

                                var percentOff = response.result.percentOff;
                                var amountOff = response.result.amountOff;
                                if (percentOff != null) {
                                    percentOff = percentOff / 100;
                                    var old_charge = jQuery('.plan-amount').val() / 100;
                                    if (jQuery('.billed-annually').hasClass('active') && !jQuery('.payment-amount').hasClass('custom-plan')) {
                                        old_charge = old_charge * 12;
                                    }

                                    var amount_off = percentOff * old_charge;
                                    var new_charge = old_charge - amount_off;
                                    jQuery('.plan-amount').val(new_charge * 100);
                                    new_charge = new_charge.toFixed(2);
                                    jQuery('.plan-amount').val(new_charge * 100);
                                    //if (jQuery('#plan-actions span').text() != 'Billed Once') {
                                    //    if (jQuery('.billed-annually').hasClass('active')) {
                                    //        jQuery('.payment-button').text('Pay $' + new_charge + '/Year');
                                    //    } else {
                                    //        jQuery('.payment-button').text('Pay $' + new_charge + '/mo');
                                    //    }
                                    //} else {
                                    //    jQuery('.payment-button').text('Pay $' + new_charge);
                                    //}
                                    if (jQuery('#plan-actions span').text() != 'Billed Once') {
                                        if (jQuery('.billed-annually').hasClass('active')) {
                                            jQuery('.payment-button').text('Pay $' + new_charge + '/Year');
                                        } else {
                                            jQuery('.payment-button').text('Pay $' + new_charge + '/mo');
                                        }

                                    }
                                    if(window.planinfo.interval_count > 1 && window.planinfo.interval_modified == false ) {
                                        window.planinfo.interval += "s";
                                        window.planinfo.interval_modified = true;
                                    }
                                    if(window.planinfo.recuring == "true") {
                                        jQuery('.payment-button').text('Pay $' + new_charge + '/' + window.planinfo.interval_count + " " + window.planinfo.interval );
                                    }
                                    if(planinfo.recuring == "false") {
                                        jQuery('.payment-button').text('Pay $' + new_charge);

                                    }

                                    ///////////////////////////////


                                    ///////////////////
                                    jQuery('.coupon-success').text('Coupon successfully applied, ' + response.result.percentOff + '% off.');
                                    jQuery('.payment-error').text('');
                                } else if (amountOff != null) {

                                    //if (jQuery('#plan-actions span').text() != 'Billed Once') {
                                    //    if (jQuery('.billed-annually').hasClass('active')) {
                                    //        jQuery('.payment-button').text('Pay $' + new_charge + '/Year');
                                    //    } else {
                                    //        jQuery('.payment-button').text('Pay $' + new_charge + '/mo');
                                    //    }
                                    //} else {
                                    //    jQuery('.payment-button').text('Pay $' + new_charge);
                                    //}
                                    if (jQuery('#plan-actions span').text() != 'Billed Once' || jQuery('#plan-actions span').text() !=  '1 Year (discounted)') {
                                        if (jQuery('.billed-annually').hasClass('active')) {
                                            var old_charge = (jQuery('.plan-amount').val() / 100) * 12 ;
                                            var new_charge = old_charge - amountOff;
                                            jQuery('.plan-amount').val(new_charge);
                                            new_charge = new_charge.toFixed(2);
                                            jQuery('.payment-button').text('Pay $' + new_charge + '/Year');
                                        } else {
                                            var old_charge = jQuery('.plan-amount').val() / 100;
                                            var new_charge = old_charge - amountOff;
                                            jQuery('.plan-amount').val(new_charge * 100);
                                            new_charge = new_charge.toFixed(2);
                                            jQuery('.payment-button').text('Pay $' + new_charge + '/mo');
                                        }

                                    }
                                    if(window.planinfo.interval_count > 1 && window.planinfo.interval_modified == false ) {
                                        window.planinfo.interval += "s";
                                        window.planinfo.interval_modified = true;
                                    }
                                    if(window.planinfo.recuring == "true") {
                                        jQuery('.payment-button').text('Pay $' + new_charge + '/' + window.planinfo.interval_count + " " + window.planinfo.interval );
                                    }
                                    if(planinfo.recuring == "false") {
                                        jQuery('.payment-button').text('Pay $' + new_charge);

                                    }
                                    jQuery('.coupon-success').text('Coupon successfully applied, ' + response.result.amountOff + '$ off.');
                                    jQuery('.payment-error').text('');
                                }
                            } else {
                                jQuery('#coupon_code').prop('disabled', false);
                                jQuery('.check-coupon').removeClass('disabled');
                                jQuery('.payment-coupon-inp').prop('disabled', false);
                                jQuery('.payment-coupon-button.apply-coupon').text('Apply');
                                jQuery('.coupon-success').text('');
                                jQuery('.payment-error').text('Coupon is not valid anymore.');
                            }
                        }
                    }
                }
                xmlhttpCPN.open("GET", base + "/api/coupons/" + coupon_code, true);
                xmlhttpCPN.setRequestHeader('Content-type', 'application/json');
                xmlhttpCPN.setRequestHeader('Access-Control-Allow-Methods', 'GET');
                xmlhttpCPN.withCredentials = true;
                xmlhttpCPN.send();
            } else {
                jQuery('.payment-coupon-inp').addClass('credit-card-error');
                jQuery('.payment-error').text('Coupon not found.');
            }
        } else {
            jQuery('.payment-coupon-inp').addClass('credit-card-error');
        }
    });

    jQuery(".payment-coupon-button.remove-coupon").click(function () {
        if (jQuery('.payment-amount').hasClass('custom-plan')) {
            jQuery('.plan-amount').val(jQuery('.original-amount').val() * 100);
            var formatted_amount = formatAmount(jQuery('.original-amount').val());
             if (window.planinfo.recuring == "true") {
                jQuery('.payment-button').text('Pay $' + formatted_amount + "/" + window.planinfo.interval_count + " " + window.planinfo.interval);
            }
            else {
                jQuery('.payment-button').text('Pay $' + formatted_amount);

            }

        } else {
            if (jQuery('.billed-annually').hasClass('active')) {
                jQuery('.plan-amount').val(jQuery('.original-amount').val() * 100);
                var formatted_amount = formatAmount(jQuery('.original-amount').val() * 12);
                jQuery('.payment-button').text('Pay $' + formatted_amount + '/Year');
            } else {
                jQuery('.plan-amount').val(jQuery('.original-amount').val() * 100);
                var formatted_amount = formatAmount(jQuery('.original-amount').val());
                jQuery('.payment-button').text('Pay $' + formatted_amount + '/mo');
            }
        }
        jQuery('.payment-coupon-inp').prop('disabled', false);
        jQuery('.payment-coupon-inp').val('');
        jQuery('#coupon_code').prop('disabled', false);
        jQuery('.check-coupon').removeClass('disabled');
        jQuery('.coupon-success').text('');
        jQuery('.coupon-error').text('');
        jQuery('.payment-coupon-button.apply-coupon').show();
        jQuery('.payment-coupon-button.apply-coupon').text('Apply');
        jQuery('.payment-coupon-button.remove-coupon').hide();
    });


    jQuery(document).on('click', '.cancel-payment', function (event) {
        event.preventDefault();
        var blockId = jQuery(this).closest(".plan-block .plan-block-payment").attr("id");
        if (blockId == 'basic-payment') {
            jQuery('#basic-info').show();
            jQuery('#basic-payment').hide();
        } else if (blockId == 'pro-payment') {
            jQuery('#pro-info').show();
            jQuery('#pro-payment').hide();
        }
        return false;
    });

    jQuery('.charge-card').change(function () {

        //coupon checkbox toggle
        if (this.value == 'card_new') {
            jQuery('input[type=checkbox][name=charge-type]').parent().hide();
            jQuery('.payment-error').hide();
            jQuery('.coupon-success').hide();
            jQuery('.payment-charge-coupon').hide();
            jQuery(".remove-coupon-charge").click();
        }
        else {
            jQuery('input[type=checkbox][name=charge-type]').parent().show();
            var inpID = jQuery(this).attr("id");
            if (inpID.indexOf("coupon") < 0) {
                jQuery('#pro-charge-coupon').prop("checked", false);
                jQuery('#basic-charge-coupon').prop("checked", false);
            }
            if (jQuery('.charge-cpn').hasClass('disabled')) {
                jQuery('.select-coupon').prop('disabled', false);
                jQuery('.select-coupon').prop('checked', true);
                jQuery('.select-coupon').prop('disabled', true);
                jQuery('.payment-charge-coupon').show();
                jQuery(".remove-coupon-charge").click();
            }
            jQuery('.payment-error').show();
            jQuery('.coupon-success').show();

        }

        var inputId = jQuery(this).attr('id');
        if (inputId == 'pro-charge-coupon' || inputId == 'basic-charge-coupon') {
            var blockId = jQuery(this).closest(".plan-block .plan-block-payment").attr("id");
            if (jQuery(this).is(":checked")) {
                if (blockId == 'basic-payment') {
                    jQuery('#basic-payment .payment-charge-coupon').show();
                } else if (blockId == 'pro-payment') {
                    jQuery('#pro-payment .payment-charge-coupon').show();
                }
            } else {
                if (blockId == 'basic-payment') {
                    jQuery('#basic-payment .payment-charge-coupon').hide();
                } else if (blockId == 'pro-payment') {
                    jQuery('#pro-payment .payment-charge-coupon').hide();
                }
            }
        }
    });

    jQuery('.apply-coupon-charge').click(function (event) {
        var blockId = jQuery(this).closest(".plan-block .plan-block-payment").attr("id");
        var coupon_code = jQuery('#' + blockId + ' .payment-coupon-charge').val();
        if (coupon_code) {
            jQuery(this).text('Applying...');
            if (validateCoupon(coupon_code)) {
                var xmlhttpCPN = new XMLHttpRequest();
                xmlhttpCPN.onreadystatechange = function () {
                    if (xmlhttpCPN.readyState == 4) {
                        var response = JSON.parse(xmlhttpCPN.response);
//@todo: add div elements for coupon-success and errors
                        if (xmlhttpCPN.status != 200) {
                            jQuery('#' + blockId + ' #pro-charge-coupon').prop('disabled', false);
                            jQuery('#' + blockId + ' .charge-cpn').removeClass('disabled');
                            jQuery('#' + blockId + ' .payment-coupon-charge').prop('disabled', false);
                            jQuery('#' + blockId + ' .apply-coupon-charge').text('Apply');
                            jQuery('#' + blockId + '.coupon-success').text('');
                            jQuery('#' + blockId + ' .payment-error').text('Coupon is invalid.');
                        } else {
                            if (response.result.valid == true) {
                                jQuery('#' + blockId + ' #pro-charge-coupon').prop('disabled', true);
                                jQuery('#' + blockId + ' .charge-cpn').addClass('disabled');
                                jQuery('#' + blockId + ' .payment-coupon-charge').prop('disabled', true);
                                jQuery('#' + blockId + ' .payment-coupon-button.apply-coupon-charge').hide();
                                jQuery('#' + blockId + ' .payment-coupon-button.remove-coupon-charge').show();
                                var percentOff = response.result.percentOff;
                                var amountOff = response.result.amountOff;
                                if (percentOff != null) {
                                    percentOff = percentOff / 100;
                                    var old_charge = jQuery('.plan-amount').val() / 100;
                                    if (jQuery('.billed-annually').hasClass('active') && !jQuery('.payment-amount').hasClass('custom-plan')) {
                                        old_charge = old_charge * 12;
                                    }
                                    var amount_off = percentOff * old_charge;
                                    var new_charge = old_charge - amount_off;
                                    jQuery('.plan-amount').val(new_charge * 100);
                                    new_charge = new_charge.toFixed(2);
                                    jQuery('.plan-amount').val(new_charge * 100);
                                    if (jQuery('#plan-actions span').text() != 'Billed Once') {
                                        if (jQuery('.billed-annually').hasClass('active')) {

                                            jQuery('.payment-button').text('Pay $' + new_charge + '/Year');
                                        } else {
                                            jQuery('.payment-button').text('Pay $' + new_charge + '/mo');
                                        }
                                    } else {
                                        jQuery('.payment-button').text('Pay $' + new_charge);
                                    }
                                    jQuery('.coupon-success').text('Coupon successfully applied, ' + response.result.percentOff + '% off.');
                                    jQuery('#' + blockId + ' .select-coupon').prop('disabled', true);
                                    jQuery('.payment-error').text('');
                                } else if (amountOff != null) {
                                    var old_charge = jQuery('.plan-amount').val() / 100;
                                    var new_charge = old_charge - amountOff;
                                    jQuery('.plan-amount').val(new_charge * 100);
                                    new_charge = new_charge.toFixed(2);
                                    if (jQuery('#plan-actions span').text() != 'Billed Once') {
                                        if (jQuery('.billed-annually').hasClass('active')) {
                                            new_charge = (old_charge * 12) - amountOff;
                                            jQuery('#' + blockId + ' .payment-button').text('Pay $' + new_charge + '/Year');
                                        } else {
                                            jQuery('#' + blockId + ' .payment-button').text('Pay $' + new_charge + '/mo');
                                        }
                                    } else {
                                        jQuery('#' + blockId + ' .payment-button').text('Pay $' + new_charge);
                                    }
                                    jQuery('#' + blockId + ' .coupon-success').text('Coupon successfully applied, ' + response.result.amountOff + '$ off.');
                                    jQuery('#' + blockId + ' .select-coupon').prop('disabled', true);
                                    jQuery('#' + blockId + ' .payment-error').text('');
                                }
                            } else {
                                jQuery('#' + blockId + ' #pro-charge-coupon').prop('disabled', false);
                                jQuery('#' + blockId + ' .charge-cpn').removeClass('disabled');
                                jQuery('#' + blockId + ' .payment-coupon-charge').prop('disabled', false);
                                jQuery('#' + blockId + ' .apply-coupon-charge').text('Apply');
                                jQuery('.coupon-success').text('');
                                jQuery('#' + blockId + ' .payment-error').text('Coupon is not valid anymore.');
                            }
                        }
                    }
                }
                xmlhttpCPN.open("GET", base + "/api/coupons/" + coupon_code, true);
                xmlhttpCPN.setRequestHeader('Content-type', 'application/json');
                xmlhttpCPN.setRequestHeader('Access-Control-Allow-Methods', 'GET');
                xmlhttpCPN.withCredentials = true;
                xmlhttpCPN.send();
            } else {
                jQuery('.payment-coupon-inp').addClass('credit-card-error');
                jQuery('.payment-error').text('Coupon not found.');
            }
        } else {
            jQuery('.payment-coupon-inp').addClass('credit-card-error');
        }
    });

    jQuery('.remove-coupon-charge').click(function (event) {
        var blockId = jQuery(this).closest(".plan-block .plan-block-payment").attr("id");
        jQuery(this).hide();
        jQuery('#' + blockId + ' .apply-coupon-charge').show();
        jQuery('#' + blockId + ' .apply-coupon-charge').text('Apply');
        jQuery('#' + blockId + ' .select-coupon').prop('disabled', false);
        jQuery('#' + blockId + ' .charge-cpn').removeClass('disabled');
        jQuery('#' + blockId + ' .coupon-success').text('');
        jQuery('#' + blockId + ' .payment-coupon-charge').val('');
        jQuery('#' + blockId + ' .payment-coupon-charge').prop('disabled', false);
        if (jQuery('.billed-annually').hasClass('active')) {
            jQuery('#' + blockId + ' .payment-button').text('Pay $' + jQuery('.original-amount').val() * 12);
        }
        else {
            jQuery('#' + blockId + ' .payment-button').text('Pay $' + jQuery('.original-amount').val());
        }
        jQuery('.plan-amount').val(jQuery('.original-amount').val() * 100);
    });

    jQuery(document).on('click', '.confirm-payment', function (event) {
        event.preventDefault();

        var planid = jQuery('.plan-selected').val();
        var blockId = jQuery(this).closest(".plan-block .plan-block-payment").attr("id");
        var payment_type = jQuery('#' + blockId + ' input[name=charge-type]:checked').val();

        var coupon_checked = jQuery('#' + blockId + ' input:checkbox').val();
        coupon_field = jQuery('#' + blockId + ' .charge-coupon:disabled').val();

        if (payment_type == 'card_new') {
            jQuery(".remove-coupon-charge").click();
            jQuery(".payment-coupon-button.remove-coupon").click();
            var fade = jQuery('<div class="fade"></div>');
            jQuery('body').append(fade);
            fade.css({
                'display': 'block',
                'opacity': 1
            });
            jQuery('.payment_popup').fadeIn();
        }

        else {

            var xmlhttpGET = new XMLHttpRequest();
            xmlhttpGET.onreadystatechange = function () {
                if (xmlhttpGET.readyState == 4) {
                    var response = JSON.parse(xmlhttpGET.response);
                    if (xmlhttpGET.status == 200) {
                        var sub_id = response.result.subscription[0]._id;
                        var planid = jQuery('.plan-selected').val();
                        if (sub_id) {
                            //PATCH /subscription
                            var xmlhttpMB = new XMLHttpRequest();
                            xmlhttpMB.onreadystatechange = function () {
                                if (xmlhttpMB.readyState == 4) {
                                    var response = JSON.parse(xmlhttpMB.response);
                                    if (xmlhttpMB.status == 200) {
                                        if (blockId == 'basic-payment') {
                                            jQuery('#basic-payment').html('<img class="payment-success" src="/sites/all/themes/blazeng/images/payment-success.png"><span class="success-upgrade">Your account has been upgraded/downgraded</span><a href="' + base + '/app" class="success-back back-to">Back to your tests</a>');
                                            track("Purchase","Purchase Basic",planid);
                                        } else if (blockId == 'pro-payment') {
                                            jQuery('#pro-payment').html('<img class="payment-success" src="/sites/all/themes/blazeng/images/payment-success.png"><span class="success-upgrade">Your account has been upgraded/downgraded</span><a href="' + base + '/app" class="success-back back-to">Back to your tests</a>');
                                            track("Purchase","Purchase Pro",planid);
                                        }
                                    } else {

                                        jQuery('.payment-error').html('Something has happened and we couldn’t process your card. Try again or <a href="https://blazemeter.com/contact-us">Contact us.</a>');
                                        track("Purchase-Error","Purchase Error",planid);
                                    }
                                }
                            }
                            var params = 'subscription_id=' + sub_id + '&plan_id=' + planid;
                            if (coupon_field && coupon_checked == 'on') {
                                var params = params + '&coupon_id=' + coupon_field;
                            }

                            xmlhttpMB.open("PATCH", base + "/api/latest/user/subscription?" + params, true);
                            xmlhttpMB.setRequestHeader('Content-type', 'application/json');
                            xmlhttpMB.setRequestHeader('Access-Control-Allow-Methods', 'PATCH');
                            xmlhttpMB.withCredentials = true;
                            xmlhttpMB.send();
                        }
                    } else {
                        if (xmlhttpGET.status == 404) {
                            jQuery('.payment-error').text('Error occurred.');
                        } else {
                            jQuery('.payment-error').text(response.error.message);
                        }
                    }
                }

            }
            xmlhttpGET.open("GET", base + "/api/latest/user/subscription", true);
            xmlhttpGET.setRequestHeader('Content-type', 'application/json');
            xmlhttpGET.setRequestHeader('Access-Control-Allow-Methods', 'GET');
            xmlhttpGET.withCredentials = true;
            xmlhttpGET.send();

        }
        return false;
    });

    jQuery('#payment-form').submit(function (event) {
        jQuery('.payment-error').text('');
        jQuery('.coupon-success').text('');
        var validCard = Stripe.card.validateCardNumber(jQuery('.payment-number').val());
        var validExpiry = Stripe.card.validateExpiry(jQuery('.payment-exp-month').val(), jQuery('.payment-exp-year').val());
        var validCvc = Stripe.card.validateCVC(jQuery('.payment-cvc').val());
        var fullName = jQuery('.payment-full-name').val();
        if (validCard != true || validExpiry != true || validCvc != true || !fullName) {
            if (validCard == false) {
                jQuery('.payment-number').addClass('credit-card-error');
            } else {
                jQuery('.payment-number').removeClass('credit-card-error');
            }
            if (validExpiry == false) {
                jQuery('.payment-exp-year').addClass('credit-card-error');
                jQuery('.payment-exp-month').addClass('credit-card-error');
            } else {
                jQuery('.payment-exp-year').removeClass('credit-card-error');
                jQuery('.payment-exp-month').removeClass('credit-card-error');
            }
            if (validCvc == false) {
                jQuery('.payment-cvc').addClass('credit-card-error');
            } else {
                jQuery('.payment-cvc').removeClass('credit-card-error');
            }
            if (!fullName) {
                jQuery('.payment-full-name').addClass('credit-card-error');
            } else {
                jQuery('.payment-full-name').removeClass('credit-card-error');
            }
        } else {
            var $form = jQuery(this);
            // Disable the submit button to prevent repeated clicks
            $form.find('button').prop('disabled', true);
            $form.find('button').text('Paying...');
            var plan_Selected = jQuery('.plan-selected').val();
            var chargeAmount = jQuery('.plan-amount').val();
            Stripe.card.createToken($form, stripeResponseHandler);
        }
        // Prevent the form from submitting with the default action
        return false;
    });

    function stripeResponseHandler(status, response) {
        var $form = jQuery('#payment-form');
        if (response.error) {
            $form.find('.payment-errors').text('* ' + response.error.message);
            if (response.error.code == "incorrect_number" || response.error.code == "invalid_number") {
                jQuery('.payment-number').addClass('credit-card-error');
            } else {
                jQuery('.payment-number').removeClass('credit-card-error');
            }
            if (response.error.code == "invalid_expiry_year") {
                jQuery('.payment-exp-year').addClass('credit-card-error');
            } else {
                jQuery('.payment-exp-year').removeClass('credit-card-error');
            }
            if (response.error.code == "invalid_expiry_month") {
                jQuery('.payment-exp-month').addClass('credit-card-error');
            } else {
                jQuery('.payment-exp-month').removeClass('credit-card-error');
            }
            if (response.error.code == "invalid_cvc") {
                jQuery('.payment-cvc').addClass('credit-card-error');
            } else {
                jQuery('.payment-cvc').removeClass('credit-card-error');
            }
            $form.find('button').prop('disabled', false);
            resetPaymentPopup('');
        } else {
            jQuery('.credit-card-error').removeClass('credit-card-error');
            jQuery('.payment-errors').text('');
            var token = response.id;
            $form.find('.payment-errors').text('');

            var cookieValue = readCookieBZM(cookieName);
            if (cookieValue.length > 0) {
                cookieValue = JSON.parse(cookieValue);
            }
            else {
                cookieValue = null;
            }
            if (cookieValue.nb == false) {
                //If Plimus user then move to Stripe
                var xmlhttpMB = new XMLHttpRequest();
                xmlhttpMB.onreadystatechange = function () {
                    if (xmlhttpMB.readyState == 4) {
                        var response = JSON.parse(xmlhttpMB.response);
                        if (xmlhttpMB.status == 200 && response.result.success) {
                            preparePayment(token, base);
                        } else {
                            resetPaymentPopup('Something has happened and we couldn’t process your card. Try again or <a href="https://blazemeter.com/contact-us">contact us.</a>');
                        }
                    }
                }
                xmlhttpMB.open("POST", base + "/api/latest/user/moveBilling/", true);
                xmlhttpMB.setRequestHeader('Content-type', 'application/json');
                xmlhttpMB.setRequestHeader('Access-Control-Allow-Methods', 'POST');
                xmlhttpMB.withCredentials = true;
                xmlhttpMB.send();
            }
            else {
                preparePayment(token, base);
            }
        }
    }

    jQuery(document).on('click', '.pricing_mobile_more_features', function(){
        //jQuery(".pricing_more_features_block")
        jQuery(this).parent().toggleClass('right_angles').next('.pricing_more_features_block').slideToggle('fast');
        jQuery(this).toggleClass('mark');
        if(jQuery(this).hasClass('mark')){
            jQuery(this).text('Less features');
        }else{
            jQuery(this).text('More features');
        }
    })

});

function preparePayment(token, base) {
    var planid = jQuery('.plan-selected').val();
    var couponId = jQuery('.payment-coupon-inp').val();
    var xmlhttpGET = new XMLHttpRequest();
    xmlhttpGET.onreadystatechange = function () {
        if (xmlhttpGET.readyState == 4) {
            var response = JSON.parse(xmlhttpGET.response);
            if (xmlhttpGET.status == 200) {
                var sub_id = response.result.subscription[0]._id;
                if (sub_id) {
                    var useCoupons = jQuery('.payment-coupon-inp').prop('disabled');
                    if (useCoupons != false) {
                        var params = 'token=' + token + '&plan_id=' + planid + '&coupon_id=' + couponId;
                        var newcardparams = 'subscription_id=' + sub_id + '&plan_id=' + planid + '&coupon_id=' + couponId;
                    } else {
                        var params = 'token=' + token + '&plan_id=' + planid;
                        var newcardparams = 'subscription_id=' + sub_id + '&plan_id=' + planid;
                    }
                    if (jQuery('input[value=card_new]').is(":checked")) {
                        submitnewcardPayment(token, newcardparams, base);
                    } else {
                        submitPayment(params, sub_id, base);
                    }
                }
            } else {
                if (xmlhttpGET.status == 404) {
                    resetPaymentPopup('Error occurred.');
                } else {
                    resetPaymentPopup(response.error.message);
                }
            }
        }
    }
    xmlhttpGET.open("GET", base + "/api/latest/user/subscription", true);
    xmlhttpGET.setRequestHeader('Content-type', 'application/json');
    xmlhttpGET.setRequestHeader('Access-Control-Allow-Methods', 'GET');
    xmlhttpGET.withCredentials = true;
    xmlhttpGET.send();


}

function readCookieBZM(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}

function submitPayment(params, sub_id, baseURL) {
    var xmlhttpPOST = new XMLHttpRequest();
    xmlhttpPOST.onreadystatechange = function () {
        if (xmlhttpPOST.readyState == 4) {
            var response = JSON.parse(xmlhttpPOST.response);
            if (xmlhttpPOST.status != 200) {
                if (xmlhttpPOST.status == 404) {
                    resetPaymentPopup('Error occurred.');
                } else {
                    resetPaymentPopup(response.error.message);
                }
            } else {
                jQuery('.payment-button').prop('disabled', false);
                jQuery('.payment-button').text('Pay $' + jQuery('.plan-amount').val() / 100);
                jQuery('.coupon-success').text('');
                jQuery(".payment-coupon-button.remove-coupon").click();
                jQuery('.pay-popup').hide();
                jQuery('.payed-popup').show();
                sendUserInfo(baseURL);
            }
        }
    }
    xmlhttpPOST.open("POST", baseURL + "/api/latest/user/addCardETSubscribe/" + sub_id + '?' + params, true);
    xmlhttpPOST.setRequestHeader('Content-type', 'application/json');
    xmlhttpPOST.setRequestHeader('Access-Control-Allow-Methods', 'POST');
    xmlhttpPOST.withCredentials = true;
    xmlhttpPOST.send();
}

function submitnewcardPayment(token, params, baseURL) {
    var xmlhttpPOST = new XMLHttpRequest();
    xmlhttpPOST.onreadystatechange = function () {
        if (xmlhttpPOST.readyState == 4) {
            var response = JSON.parse(xmlhttpPOST.response);
            if (xmlhttpPOST.status != 200) {
                if (xmlhttpPOST.status == 404) {
                    resetPaymentPopup('Error occurred.');
                } else {
                    resetPaymentPopup(response.error.message);
                }
            } else {
                var xmlhttpUB = new XMLHttpRequest();
                xmlhttpUB.onreadystatechange = function () {
                    if (xmlhttpUB.readyState == 4) {
                        var response = JSON.parse(xmlhttpUB.response);
                        if (xmlhttpPOST.status != 200) {
                            if (xmlhttpPOST.status == 404) {
                                resetPaymentPopup('Error occurred.');
                            } else {
                                resetPaymentPopup(response.error.message);
                            }
                        } else {
                            jQuery('.payment-button').prop('disabled', false);
                            jQuery('.payment-button').text('Pay $' + jQuery('.plan-amount').val() / 100);
                            jQuery('.coupon-success').text('');
                            jQuery(".payment-coupon-button.remove-coupon").click();
                            jQuery('.pay-popup').hide();
                            jQuery('.payed-popup').show();
                            sendUserInfo(baseURL);
                        }
                    }
                }
                xmlhttpUB.open("PATCH", baseURL + "/api/latest/user/subscription?" + params, true);
                xmlhttpUB.setRequestHeader('Content-type', 'application/json');
                xmlhttpUB.setRequestHeader('Access-Control-Allow-Methods', 'PATCH');
                xmlhttpUB.withCredentials = true;
                xmlhttpUB.send();
            }
        }
    }
    xmlhttpPOST.open("POST", baseURL + "/api/latest/user/cards?token=" + token, true);
    xmlhttpPOST.setRequestHeader('Content-type', 'application/json');
    xmlhttpPOST.setRequestHeader('Access-Control-Allow-Methods', 'POST');
    xmlhttpPOST.withCredentials = true;
    xmlhttpPOST.send();
}

function sendUserInfo(baseURL) {
    var fullName = jQuery('.payment-full-name').val();
    var company = jQuery('.payment-company').val();
    var phoneNumber = jQuery('.payment-phone').val();
    userBillingInfo = 'full_name=' + fullName + '&phone_number=' + phoneNumber + '&company_name=' + company;
    var xmlhttpUB = new XMLHttpRequest();
    xmlhttpUB.onreadystatechange = function () {
        //do nothing
    }
    xmlhttpUB.open("PATCH", baseURL + "/api/latest/user/billing?" + userBillingInfo, true);
    xmlhttpUB.setRequestHeader('Content-type', 'application/json');
    xmlhttpUB.setRequestHeader('Access-Control-Allow-Methods', 'PATCH');
    xmlhttpUB.withCredentials = true;
    xmlhttpUB.send();
}

function formatAmount(nStr) {
    return nStr;
    /*nStr += '';
     var x = nStr.split('.');
     var x1 = x[0];
     var x2 = x.length > 1 ? '.' + x[1] : '';
     var rgx = /(\d+)(\d{3})/;
     while (rgx.test(x1)) {
     x1 = x1.replace(rgx, '$1' + ',' + '$2');
     }
     var amount = x1 + x2;
     return amount;*/
}

function validateCoupon(coupon_code) {
    var myRegExp = /^(\w+\s?)*$/;
    return myRegExp.test(coupon_code);
}

function resetPaymentPopup(err_msg) {
    var res = err_msg.split("Bad Request:");
    if (res[1]) {
        err_msg = res[1];
    }
    jQuery('.payment-button').prop('disabled', false);
    if (jQuery('.payment-amount').hasClass('custom-plan')) {
        jQuery('.payment-button').text('Pay $' + jQuery('.plan-amount').val() / 100);
    } else {
        if (jQuery('.billed-annually').hasClass('active')) {
            jQuery('.payment-button').text('Pay $' + jQuery('.plan-amount').val() / 100 * 12 + '/Year');
        } else {
            jQuery('.payment-button').text('Pay $' + jQuery('.plan-amount').val() / 100 + '/mo');
        }
    }
    jQuery('.payment-error').html(err_msg);
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function getParameterByUrl(name, url) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec('?' + url);
    //Fix http://stackoverflow.com/questions/20700393/urierror-malformed-uri-sequence
    if (results != null) {
        if (results[1] && results[1].indexOf('%') > 0) {
            var res = results[1].replace(/%([^\d].)/, "%25$1");
        } else if (results[1]) {
            var res = results[1];
        }
    } else {
        results = null
    }
    return results === null ? "" : decodeURIComponent(res.replace(/\+/g, " "));
}

;
jQuery(function () {

    jQuery(".auth-block .signup-btn").bind("click", function () {
        track("Signup", "Signup Button Click", "Start testing button nav bar");

    });
    jQuery("#main_c_start_testing_now").bind("click", function () {
        track("Signup", "Signup Button Click", "Start testing button HP 3rd ");


    });
    jQuery("#main_b_start_testing_now").bind("click", function () {
        track("Signup", "Signup Button Click", "Start testing button HP 1st ");
    });
    jQuery(".section-pricing a:contains('START TESTING NOW')").eq(0).bind("click", function () {
        track("Signup", "Signup Button Click", "Start testing button Pricing 1st  ");
    });
    jQuery(".section-pricing a:contains('START TESTING NOW')").eq(1).bind("click", function () {
        track("Signup", "Signup Button Click", "Start testing button Pricing 2nd ");
    });
    jQuery(".section-pricing a:contains('START TESTING NOW')").eq(2).bind("click", function () {
        track("Signup", "Signup Button Click", "Start testing button Pricing 3rd  ");
    });
    jQuery("#center_get_started_block a:contains('START TESTING NOW')").bind("click", function () {
        track("Signup", "Signup Button Click", "Start testing button Blog 1st");
    });
    jQuery("#block-block-21 a:contains('START TESTING NOW')").bind("click", function () {

        track("Signup", "Signup Button Click", "Start testing side banner blog");
    });
    jQuery(".btn-Google").bind("click", function () {
        track("Signup", "Signup Form", "Google + Signup click");


    });
    jQuery("#edit-submit--3").bind("click", function () {
        track("Contact Us", "Sales", "Form Submited");


    });
    jQuery("#edit-submit--4").bind("click", function () {
        track("Contact Us", "Support", "Form Submited");


    });
    jQuery("#edit-submit--5").bind("click", function () {
        track("Contact Us", "Press", "Form Submited");


    });
    jQuery("#blazemeter-site-commercial-register-c #edit-email").bind("focusout", function () {
        var val = jQuery(this).val();
        if(val.length > 0)
        track("Signup", "Signup Form", "Insert Email");

    });
    jQuery("#blazemeter-site-commercial-register-c #edit-firstname").bind("focusout", function () {
        var val = jQuery(this).val();
        if(val.length > 0)
        track("Signup", "Signup Form", "Insert First Name");

    });
    jQuery("#blazemeter-site-commercial-register-c #edit-lastname").bind("focusout", function () {
        var val = jQuery(this).val();
        if(val.length > 0)
        track("Signup", "Signup Form", "Insert Last Name");

    });
    jQuery("#blazemeter-site-commercial-register-c #edit-password").bind("focusout", function () {
        var val = jQuery(this).val();
        if(val.length > 0)
        track("Signup", "Signup Form", "Insert Password");

    });
    jQuery(".intercom-launcher-button ").bind("click", function () {

      //  start_chat_icon();
    });
    jQuery(".intercom-composer-textarea textarea").bind("click", function () {

      //  intercom_insert_question();
    });
    jQuery(".contact-section-frame a:contains('Sales'),.contact-section-frame a:contains('Support'), .contact-section-frame a:contains('Press')").bind("click", function () {
        var tab = jQuery(this).text();
        track("Contact Us", tab, "Form Selected");

    });

});

function track(category, label, action) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(
        {
            'event': category + '-' + action,
            'ga_category': category,
            'ga_label': label,
            'ga_action': action
        }
    );
}
;
// Copyright 2013-2014 Kevin Cox

/*******************************************************************************
*                                                                              *
*  This software is provided 'as-is', without any express or implied           *
*  warranty. In no event will the authors be held liable for any damages       *
*  arising from the use of this software.                                      *
*                                                                              *
*  Permission is granted to anyone to use this software for any purpose,       *
*  including commercial applications, and to alter it and redistribute it      *
*  freely, subject to the following restrictions:                              *
*                                                                              *
*  1. The origin of this software must not be misrepresented; you must not     *
*     claim that you wrote the original software. If you use this software in  *
*     a product, an acknowledgment in the product documentation would be       *
*     appreciated but is not required.                                         *
*                                                                              *
*  2. Altered source versions must be plainly marked as such, and must not be  *
*     misrepresented as being the original software.                           *
*                                                                              *
*  3. This notice may not be removed or altered from any source distribution.  *
*                                                                              *
*******************************************************************************/

+function(){
"use strict";

var array = /\[([^\[]*)\]$/;

/// URL Regex.
/**
 * This regex splits the URL into parts.  The capture groups catch the important
 * bits.
 * 
 * Each section is optional, so to work on any part find the correct top level
 * `(...)?` and mess around with it.
 */
var regex = /^(?:([a-z]*):)?(?:\/\/)?(?:([^:@]*)(?::([^@]*))?@)?([a-z-._]+)?(?::([0-9]*))?(\/[^?#]*)?(?:\?([^#]*))?(?:#(.*))?$/i;
//               1 - scheme                2 - user    3 = pass 4 - host        5 - port  6 - path        7 - query    8 - hash

var noslash = ["mailto","bitcoin"];

var self = {
	/** Parse a query string.
	 *
	 * This function parses a query string (sometimes called the search
	 * string).  It takes a query string and returns a map of the results.
	 *
	 * Keys are considered to be everything up to the first '=' and values are
	 * everything afterwords.  Since URL-decoding is done after parsing, keys
	 * and values can have any values, however, '=' have to be encoded in keys
	 * while '?' and '&' have to be encoded anywhere (as they delimit the
	 * kv-pairs).
	 *
	 * Keys and values will always be strings, except if there is a key with no
	 * '=' in which case it will be considered a flag and will be set to true.
	 * Later values will override earlier values.
	 *
	 * Array keys are also supported.  By default keys in the form of `name[i]`
	 * will be returned like that as strings.  However, if you set the `array`
	 * flag in the options object they will be parsed into arrays.  Note that
	 * although the object returned is an `Array` object all keys will be
	 * written to it.  This means that if you have a key such as `k[forEach]`
	 * it will overwrite the `forEach` function on that array.  Also note that
	 * string properties always take precedence over array properties,
	 * irrespective of where they are in the query string.
	 *
	 *   url.get("array[1]=test&array[foo]=bar",{array:true}).array[1]  === "test"
	 *   url.get("array[1]=test&array[foo]=bar",{array:true}).array.foo === "bar"
	 *   url.get("array=notanarray&array[0]=1",{array:true}).array      === "notanarray"
	 *
	 * If array parsing is enabled keys in the form of `name[]` will
	 * automatically be given the next available index.  Note that this can be
	 * overwritten with later values in the query string.  For this reason is
	 * is best not to mix the two formats, although it is safe (and often
	 * useful) to add an automatic index argument to the end of a query string.
	 *
	 *   url.get("a[]=0&a[]=1&a[0]=2", {array:true})  -> {a:["2","1"]};
	 *   url.get("a[0]=0&a[1]=1&a[]=2", {array:true}) -> {a:["0","1","2"]};
	 *
	 * @param{string} q The query string (the part after the '?').
	 * @param{{full:boolean,array:boolean}=} opt Options.
	 *
	 * - full: If set `q` will be treated as a full url and `q` will be built.
	 *   by calling #parse to retrieve the query portion.
	 * - array: If set keys in the form of `key[i]` will be treated
	 *   as arrays/maps.
	 *
	 * @return{!Object.<string, string|Array>} The parsed result.
	 */
	"get": function(q, opt){
		q = q || "";
		if ( typeof opt          == "undefined" ) opt = {};
		if ( typeof opt["full"]  == "undefined" ) opt["full"] = false;
		if ( typeof opt["array"] == "undefined" ) opt["array"] = false;
		
		if ( opt["full"] === true )
		{
			q = self["parse"](q, {"get":false})["query"] || "";
		}
		
		var o = {};
		
		var c = q.split("&");
		for (var i = 0; i < c.length; i++)
		{
			if (!c[i].length) continue;
			
			var d = c[i].indexOf("=");
			var k = c[i], v = true;
			if ( d >= 0 )
			{
				k = c[i].substr(0, d);
				v = c[i].substr(d+1);
				
				v = decodeURIComponent(v);
			}
			
			if (opt["array"])
			{
				var inds = [];
				var ind;
				var curo = o;
				var curk = k;
				while (ind = curk.match(array)) // Array!
				{
					curk = curk.substr(0, ind.index);
					inds.unshift(decodeURIComponent(ind[1]));
				}
				curk = decodeURIComponent(curk);
				if (inds.some(function(i)
				{
					if ( typeof curo[curk] == "undefined" ) curo[curk] = [];
					if (!Array.isArray(curo[curk]))
					{
						//console.log("url.get: Array property "+curk+" already exists as string!");
						return true;
					}
					
					curo = curo[curk];
					
					if ( i === "" ) i = curo.length;
					
					curk = i;
				})) continue;
				curo[curk] = v;
				continue;
			}
			
			k = decodeURIComponent(k);
			
			//typeof o[k] == "undefined" || console.log("Property "+k+" already exists!");
			o[k] = v;
		}
		
		return o;
	},
	
	/** Build a get query from an object.
	 *
	 * This constructs a query string from the kv pairs in `data`.  Calling
	 * #get on the string returned should return an object identical to the one
	 * passed in except all non-boolean scalar types become strings and all
	 * object types become arrays (non-integer keys are still present, see
	 * #get's documentation for more details).
	 *
	 * This always uses array syntax for describing arrays.  If you want to
	 * serialize them differently (like having the value be a JSON array and
	 * have a plain key) you will need to do that before passing it in.
	 *
	 * All keys and values are supported (binary data anyone?) as they are
	 * properly URL-encoded and #get properly decodes.
	 *
	 * @param{Object} data The kv pairs.
	 * @param{string} prefix The properly encoded array key to put the
	 *   properties.  Mainly intended for internal use.
	 * @return{string} A URL-safe string.
	 */
	"buildget": function(data, prefix){
		var itms = [];
		for ( var k in data )
		{
			var ek = encodeURIComponent(k);
			if ( typeof prefix != "undefined" )
				ek = prefix+"["+ek+"]";
			
			var v = data[k];
			
			switch (typeof v)
			{
				case 'boolean':
					itms.push(ek);
					break;
				case 'number':
					v = v.toString();
				case 'string':
					itms.push(ek+"="+encodeURIComponent(v));
					break;
				case 'object':
					itms.push(self["buildget"](v, ek));
					break;
			}
		}
		return itms.join("&");
	},
	
	/** Parse a URL
	 * 
	 * This breaks up a URL into components.  It attempts to be very liberal
	 * and returns the best result in most cases.  This means that you can
	 * often pass in part of a URL and get correct categories back.  Notably,
	 * this works for emails and Jabber IDs, as well as adding a '?' to the
	 * beginning of a string will parse the whole thing as a query string.  If
	 * an item is not found the property will be undefined.  In some cases an
	 * empty string will be returned if the surrounding syntax but the actual
	 * value is empty (example: "://example.com" will give a empty string for
	 * scheme.)  Notably the host name will always be set to something.
	 * 
	 * Returned properties.
	 * 
	 * - **scheme:** The url scheme. (ex: "mailto" or "https")
	 * - **user:** The username.
	 * - **pass:** The password.
	 * - **host:** The hostname. (ex: "localhost", "123.456.7.8" or "example.com")
	 * - **port:** The port, as a number. (ex: 1337)
	 * - **path:** The path. (ex: "/" or "/about.html")
	 * - **query:** "The query string. (ex: "foo=bar&v=17&format=json")
	 * - **get:** The query string parsed with get.  If `opt.get` is `false` this
	 *   will be absent
	 * - **hash:** The value after the hash. (ex: "myanchor")
	 *   be undefined even if `query` is set.
	 *
	 * @param{string} url The URL to parse.
	 * @param{{get:Object}=} opt Options:
	 *
	 * - get: An options argument to be passed to #get or false to not call #get.
	 *    **DO NOT** set `full`.
	 *
	 * @return{!Object} An object with the parsed values.
	 */
	"parse": function(url, opt) {
		
		if ( typeof opt == "undefined" ) opt = {};
		
		var md = url.match(regex) || [];
		
		var r = {
			"url":    url,
			
			"scheme": md[1],
			"user":   md[2],
			"pass":   md[3],
			"host":   md[4],
			"port":   md[5] && +md[5],
			"path":   md[6],
			"query":  md[7],
			"hash":   md[8],
		};
		
		if ( opt.get !== false )
			r["get"] = r["query"] && self["get"](r["query"], opt.get);
		
		return r;
	},
	
	/** Build a URL from components.
	 * 
	 * This pieces together a url from the properties of the passed in object.
	 * In general passing the result of `parse()` should return the URL.  There
	 * may differences in the get string as the keys and values might be more
	 * encoded then they were originally were.  However, calling `get()` on the
	 * two values should yield the same result.
	 * 
	 * Here is how the parameters are used.
	 * 
	 *  - url: Used only if no other values are provided.  If that is the case
	 *     `url` will be returned verbatim.
	 *  - scheme: Used if defined.
	 *  - user: Used if defined.
	 *  - pass: Used if defined.
	 *  - host: Used if defined.
	 *  - path: Used if defined.
	 *  - query: Used only if `get` is not provided and non-empty.
	 *  - get: Used if non-empty.  Passed to #buildget and the result is used
	 *    as the query string.
	 *  - hash: Used if defined.
	 * 
	 * These are the options that are valid on the options object.
	 * 
	 *  - useemptyget: If truthy, a question mark will be appended for empty get
	 *    strings.  This notably makes `build()` and `parse()` fully symmetric.
	 *
	 * @param{Object} data The pieces of the URL.
	 * @param{Object} opt Options for building the url.
	 * @return{string} The URL.
	 */
	"build": function(data, opt){
		opt = opt || {};
		
		var r = "";
		
		if ( typeof data["scheme"] != "undefined" )
		{
			r += data["scheme"];
			r += (noslash.indexOf(data["scheme"])>=0)?":":"://";
		}
		if ( typeof data["user"] != "undefined" )
		{
			r += data["user"];
			if ( typeof data["pass"] == "undefined" )
			{
				r += "@";
			}
		}
		if ( typeof data["pass"] != "undefined" ) r += ":" + data["pass"] + "@";
		if ( typeof data["host"] != "undefined" ) r += data["host"];
		if ( typeof data["port"] != "undefined" ) r += ":" + data["port"];
		if ( typeof data["path"] != "undefined" ) r += data["path"];
		
		if (opt["useemptyget"])
		{
			if      ( typeof data["get"]   != "undefined" ) r += "?" + self["buildget"](data["get"]);
			else if ( typeof data["query"] != "undefined" ) r += "?" + data["query"];
		}
		else
		{
			// If .get use it.  If .get leads to empty, use .query.
			var q = data["get"] && self["buildget"](data["get"]) || data["query"];
			if (q) r += "?" + q;
		}
		
		if ( typeof data["hash"] != "undefined" ) r += "#" + data["hash"];
		
		return r || data["url"] || "";
	},
};

if ( typeof define != "undefined" && define["amd"] ) define(self);
else if ( typeof module != "undefined" ) module['exports'] = self;
else window["url"] = self;

}();
;
/*! VelocityJS.org (1.1.0). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
!function(e){function t(e){var t=e.length,r=$.type(e);return"function"===r||$.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===r||0===t||"number"==typeof t&&t>0&&t-1 in e}if(!e.jQuery){var $=function(e,t){return new $.fn.init(e,t)};$.isWindow=function(e){return null!=e&&e==e.window},$.type=function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?a[o.call(e)]||"object":typeof e},$.isArray=Array.isArray||function(e){return"array"===$.type(e)},$.isPlainObject=function(e){var t;if(!e||"object"!==$.type(e)||e.nodeType||$.isWindow(e))return!1;try{if(e.constructor&&!n.call(e,"constructor")&&!n.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}for(t in e);return void 0===t||n.call(e,t)},$.each=function(e,r,a){var n,o=0,i=e.length,s=t(e);if(a){if(s)for(;i>o&&(n=r.apply(e[o],a),n!==!1);o++);else for(o in e)if(n=r.apply(e[o],a),n===!1)break}else if(s)for(;i>o&&(n=r.call(e[o],o,e[o]),n!==!1);o++);else for(o in e)if(n=r.call(e[o],o,e[o]),n===!1)break;return e},$.data=function(e,t,a){if(void 0===a){var n=e[$.expando],o=n&&r[n];if(void 0===t)return o;if(o&&t in o)return o[t]}else if(void 0!==t){var n=e[$.expando]||(e[$.expando]=++$.uuid);return r[n]=r[n]||{},r[n][t]=a,a}},$.removeData=function(e,t){var a=e[$.expando],n=a&&r[a];n&&$.each(t,function(e,t){delete n[t]})},$.extend=function(){var e,t,r,a,n,o,i=arguments[0]||{},s=1,l=arguments.length,u=!1;for("boolean"==typeof i&&(u=i,i=arguments[s]||{},s++),"object"!=typeof i&&"function"!==$.type(i)&&(i={}),s===l&&(i=this,s--);l>s;s++)if(null!=(n=arguments[s]))for(a in n)e=i[a],r=n[a],i!==r&&(u&&r&&($.isPlainObject(r)||(t=$.isArray(r)))?(t?(t=!1,o=e&&$.isArray(e)?e:[]):o=e&&$.isPlainObject(e)?e:{},i[a]=$.extend(u,o,r)):void 0!==r&&(i[a]=r));return i},$.queue=function(e,r,a){function n(e,r){var a=r||[];return null!=e&&(t(Object(e))?!function(e,t){for(var r=+t.length,a=0,n=e.length;r>a;)e[n++]=t[a++];if(r!==r)for(;void 0!==t[a];)e[n++]=t[a++];return e.length=n,e}(a,"string"==typeof e?[e]:e):[].push.call(a,e)),a}if(e){r=(r||"fx")+"queue";var o=$.data(e,r);return a?(!o||$.isArray(a)?o=$.data(e,r,n(a)):o.push(a),o):o||[]}},$.dequeue=function(e,t){$.each(e.nodeType?[e]:e,function(e,r){t=t||"fx";var a=$.queue(r,t),n=a.shift();"inprogress"===n&&(n=a.shift()),n&&("fx"===t&&a.unshift("inprogress"),n.call(r,function(){$.dequeue(r,t)}))})},$.fn=$.prototype={init:function(e){if(e.nodeType)return this[0]=e,this;throw new Error("Not a DOM node.")},offset:function(){var t=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:t.top+(e.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:t.left+(e.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function e(){for(var e=this.offsetParent||document;e&&"html"===!e.nodeType.toLowerCase&&"static"===e.style.position;)e=e.offsetParent;return e||document}var t=this[0],e=e.apply(t),r=this.offset(),a=/^(?:body|html)$/i.test(e.nodeName)?{top:0,left:0}:$(e).offset();return r.top-=parseFloat(t.style.marginTop)||0,r.left-=parseFloat(t.style.marginLeft)||0,e.style&&(a.top+=parseFloat(e.style.borderTopWidth)||0,a.left+=parseFloat(e.style.borderLeftWidth)||0),{top:r.top-a.top,left:r.left-a.left}}};var r={};$.expando="velocity"+(new Date).getTime(),$.uuid=0;for(var a={},n=a.hasOwnProperty,o=a.toString,i="Boolean Number String Function Array Date RegExp Object Error".split(" "),s=0;s<i.length;s++)a["[object "+i[s]+"]"]=i[s].toLowerCase();$.fn.init.prototype=$.fn,e.Velocity={Utilities:$}}}(window),function(e){"object"==typeof module&&"object"==typeof module.exports?module.exports=e():"function"==typeof define&&define.amd?define(e):e()}(function(){return function(e,t,r,a){function n(e){for(var t=-1,r=e?e.length:0,a=[];++t<r;){var n=e[t];n&&a.push(n)}return a}function o(e){return g.isWrapped(e)?e=[].slice.call(e):g.isNode(e)&&(e=[e]),e}function i(e){var t=$.data(e,"velocity");return null===t?a:t}function s(e){return function(t){return Math.round(t*e)*(1/e)}}function l(e,r,a,n){function o(e,t){return 1-3*t+3*e}function i(e,t){return 3*t-6*e}function s(e){return 3*e}function l(e,t,r){return((o(t,r)*e+i(t,r))*e+s(t))*e}function u(e,t,r){return 3*o(t,r)*e*e+2*i(t,r)*e+s(t)}function c(t,r){for(var n=0;m>n;++n){var o=u(r,e,a);if(0===o)return r;var i=l(r,e,a)-t;r-=i/o}return r}function p(){for(var t=0;b>t;++t)w[t]=l(t*x,e,a)}function f(t,r,n){var o,i,s=0;do i=r+(n-r)/2,o=l(i,e,a)-t,o>0?n=i:r=i;while(Math.abs(o)>h&&++s<v);return i}function d(t){for(var r=0,n=1,o=b-1;n!=o&&w[n]<=t;++n)r+=x;--n;var i=(t-w[n])/(w[n+1]-w[n]),s=r+i*x,l=u(s,e,a);return l>=y?c(t,s):0==l?s:f(t,r,r+x)}function g(){V=!0,(e!=r||a!=n)&&p()}var m=4,y=.001,h=1e-7,v=10,b=11,x=1/(b-1),S="Float32Array"in t;if(4!==arguments.length)return!1;for(var P=0;4>P;++P)if("number"!=typeof arguments[P]||isNaN(arguments[P])||!isFinite(arguments[P]))return!1;e=Math.min(e,1),a=Math.min(a,1),e=Math.max(e,0),a=Math.max(a,0);var w=S?new Float32Array(b):new Array(b),V=!1,C=function(t){return V||g(),e===r&&a===n?t:0===t?0:1===t?1:l(d(t),r,n)};C.getControlPoints=function(){return[{x:e,y:r},{x:a,y:n}]};var T="generateBezier("+[e,r,a,n]+")";return C.toString=function(){return T},C}function u(e,t){var r=e;return g.isString(e)?v.Easings[e]||(r=!1):r=g.isArray(e)&&1===e.length?s.apply(null,e):g.isArray(e)&&2===e.length?b.apply(null,e.concat([t])):g.isArray(e)&&4===e.length?l.apply(null,e):!1,r===!1&&(r=v.Easings[v.defaults.easing]?v.defaults.easing:h),r}function c(e){if(e)for(var t=(new Date).getTime(),r=0,n=v.State.calls.length;n>r;r++)if(v.State.calls[r]){var o=v.State.calls[r],s=o[0],l=o[2],u=o[3],f=!!u;u||(u=v.State.calls[r][3]=t-16);for(var d=Math.min((t-u)/l.duration,1),m=0,y=s.length;y>m;m++){var h=s[m],b=h.element;if(i(b)){var S=!1;if(l.display!==a&&null!==l.display&&"none"!==l.display){if("flex"===l.display){var w=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];$.each(w,function(e,t){x.setPropertyValue(b,"display",t)})}x.setPropertyValue(b,"display",l.display)}l.visibility!==a&&"hidden"!==l.visibility&&x.setPropertyValue(b,"visibility",l.visibility);for(var V in h)if("element"!==V){var C=h[V],T,k=g.isString(C.easing)?v.Easings[C.easing]:C.easing;if(1===d)T=C.endValue;else if(T=C.startValue+(C.endValue-C.startValue)*k(d),!f&&T===C.currentValue)continue;if(C.currentValue=T,x.Hooks.registered[V]){var A=x.Hooks.getRoot(V),F=i(b).rootPropertyValueCache[A];F&&(C.rootPropertyValue=F)}var E=x.setPropertyValue(b,V,C.currentValue+(0===parseFloat(T)?"":C.unitType),C.rootPropertyValue,C.scrollData);x.Hooks.registered[V]&&(i(b).rootPropertyValueCache[A]=x.Normalizations.registered[A]?x.Normalizations.registered[A]("extract",null,E[1]):E[1]),"transform"===E[0]&&(S=!0)}l.mobileHA&&i(b).transformCache.translate3d===a&&(i(b).transformCache.translate3d="(0px, 0px, 0px)",S=!0),S&&x.flushTransformCache(b)}}l.display!==a&&"none"!==l.display&&(v.State.calls[r][2].display=!1),l.visibility!==a&&"hidden"!==l.visibility&&(v.State.calls[r][2].visibility=!1),l.progress&&l.progress.call(o[1],o[1],d,Math.max(0,u+l.duration-t),u),1===d&&p(r)}v.State.isTicking&&P(c)}function p(e,t){if(!v.State.calls[e])return!1;for(var r=v.State.calls[e][0],n=v.State.calls[e][1],o=v.State.calls[e][2],s=v.State.calls[e][4],l=!1,u=0,c=r.length;c>u;u++){var p=r[u].element;if(t||o.loop||("none"===o.display&&x.setPropertyValue(p,"display",o.display),"hidden"===o.visibility&&x.setPropertyValue(p,"visibility",o.visibility)),o.loop!==!0&&($.queue(p)[1]===a||!/\.velocityQueueEntryFlag/i.test($.queue(p)[1]))&&i(p)){i(p).isAnimating=!1,i(p).rootPropertyValueCache={};var f=!1;$.each(x.Lists.transforms3D,function(e,t){var r=/^scale/.test(t)?1:0,n=i(p).transformCache[t];i(p).transformCache[t]!==a&&new RegExp("^\\("+r+"[^.]").test(n)&&(f=!0,delete i(p).transformCache[t])}),o.mobileHA&&(f=!0,delete i(p).transformCache.translate3d),f&&x.flushTransformCache(p),x.Values.removeClass(p,"velocity-animating")}if(!t&&o.complete&&!o.loop&&u===c-1)try{o.complete.call(n,n)}catch(d){setTimeout(function(){throw d},1)}s&&o.loop!==!0&&s(n),o.loop!==!0||t||($.each(i(p).tweensContainer,function(e,t){/^rotate/.test(e)&&360===parseFloat(t.endValue)&&(t.endValue=0,t.startValue=360)}),v(p,"reverse",{loop:!0,delay:o.delay})),o.queue!==!1&&$.dequeue(p,o.queue)}v.State.calls[e]=!1;for(var g=0,m=v.State.calls.length;m>g;g++)if(v.State.calls[g]!==!1){l=!0;break}l===!1&&(v.State.isTicking=!1,delete v.State.calls,v.State.calls=[])}var f=function(){if(r.documentMode)return r.documentMode;for(var e=7;e>4;e--){var t=r.createElement("div");if(t.innerHTML="<!--[if IE "+e+"]><span></span><![endif]-->",t.getElementsByTagName("span").length)return t=null,e}return a}(),d=function(){var e=0;return t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(t){var r=(new Date).getTime(),a;return a=Math.max(0,16-(r-e)),e=r+a,setTimeout(function(){t(r+a)},a)}}(),g={isString:function(e){return"string"==typeof e},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isNode:function(e){return e&&e.nodeType},isNodeList:function(e){return"object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e))&&e.length!==a&&(0===e.length||"object"==typeof e[0]&&e[0].nodeType>0)},isWrapped:function(e){return e&&(e.jquery||t.Zepto&&t.Zepto.zepto.isZ(e))},isSVG:function(e){return t.SVGElement&&e instanceof t.SVGElement},isEmptyObject:function(e){for(var t in e)return!1;return!0}},$,m=!1;if(e.fn&&e.fn.jquery?($=e,m=!0):$=t.Velocity.Utilities,8>=f&&!m)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(7>=f)return void(jQuery.fn.velocity=jQuery.fn.animate);var y=400,h="swing",v={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:t.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:r.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:$,Redirects:{},Easings:{},Promise:t.Promise,defaults:{queue:"",duration:y,easing:h,begin:a,complete:a,progress:a,display:a,visibility:a,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(e){$.data(e,"velocity",{isSVG:g.isSVG(e),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:1,patch:0},debug:!1};t.pageYOffset!==a?(v.State.scrollAnchor=t,v.State.scrollPropertyLeft="pageXOffset",v.State.scrollPropertyTop="pageYOffset"):(v.State.scrollAnchor=r.documentElement||r.body.parentNode||r.body,v.State.scrollPropertyLeft="scrollLeft",v.State.scrollPropertyTop="scrollTop");var b=function(){function e(e){return-e.tension*e.x-e.friction*e.v}function t(t,r,a){var n={x:t.x+a.dx*r,v:t.v+a.dv*r,tension:t.tension,friction:t.friction};return{dx:n.v,dv:e(n)}}function r(r,a){var n={dx:r.v,dv:e(r)},o=t(r,.5*a,n),i=t(r,.5*a,o),s=t(r,a,i),l=1/6*(n.dx+2*(o.dx+i.dx)+s.dx),u=1/6*(n.dv+2*(o.dv+i.dv)+s.dv);return r.x=r.x+l*a,r.v=r.v+u*a,r}return function a(e,t,n){var o={x:-1,v:0,tension:null,friction:null},i=[0],s=0,l=1e-4,u=.016,c,p,f;for(e=parseFloat(e)||500,t=parseFloat(t)||20,n=n||null,o.tension=e,o.friction=t,c=null!==n,c?(s=a(e,t),p=s/n*u):p=u;;)if(f=r(f||o,p),i.push(1+f.x),s+=16,!(Math.abs(f.x)>l&&Math.abs(f.v)>l))break;return c?function(e){return i[e*(i.length-1)|0]}:s}}();v.Easings={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},spring:function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)}},$.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(e,t){v.Easings[t[0]]=l.apply(null,t[1])});var x=v.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var e=0;e<x.Lists.colors.length;e++){var t="color"===x.Lists.colors[e]?"0 0 0 1":"255 255 255 1";x.Hooks.templates[x.Lists.colors[e]]=["Red Green Blue Alpha",t]}var r,a,n;if(f)for(r in x.Hooks.templates){a=x.Hooks.templates[r],n=a[0].split(" ");var o=a[1].match(x.RegEx.valueSplit);"Color"===n[0]&&(n.push(n.shift()),o.push(o.shift()),x.Hooks.templates[r]=[n.join(" "),o.join(" ")])}for(r in x.Hooks.templates){a=x.Hooks.templates[r],n=a[0].split(" ");for(var e in n){var i=r+n[e],s=e;x.Hooks.registered[i]=[r,s]}}},getRoot:function(e){var t=x.Hooks.registered[e];return t?t[0]:e},cleanRootPropertyValue:function(e,t){return x.RegEx.valueUnwrap.test(t)&&(t=t.match(x.RegEx.valueUnwrap)[1]),x.Values.isCSSNullValue(t)&&(t=x.Hooks.templates[e][1]),t},extractValue:function(e,t){var r=x.Hooks.registered[e];if(r){var a=r[0],n=r[1];return t=x.Hooks.cleanRootPropertyValue(a,t),t.toString().match(x.RegEx.valueSplit)[n]}return t},injectValue:function(e,t,r){var a=x.Hooks.registered[e];if(a){var n=a[0],o=a[1],i,s;return r=x.Hooks.cleanRootPropertyValue(n,r),i=r.toString().match(x.RegEx.valueSplit),i[o]=t,s=i.join(" ")}return r}},Normalizations:{registered:{clip:function(e,t,r){switch(e){case"name":return"clip";case"extract":var a;return x.RegEx.wrappedValueAlreadyExtracted.test(r)?a=r:(a=r.toString().match(x.RegEx.valueUnwrap),a=a?a[1].replace(/,(\s+)?/g," "):r),a;case"inject":return"rect("+r+")"}},blur:function(e,t,r){switch(e){case"name":return"-webkit-filter";case"extract":var a=parseFloat(r);if(!a&&0!==a){var n=r.toString().match(/blur\(([0-9]+[A-z]+)\)/i);a=n?n[1]:0}return a;case"inject":return parseFloat(r)?"blur("+r+")":"none"}},opacity:function(e,t,r){if(8>=f)switch(e){case"name":return"filter";case"extract":var a=r.toString().match(/alpha\(opacity=(.*)\)/i);return r=a?a[1]/100:1;case"inject":return t.style.zoom=1,parseFloat(r)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(r),10)+")"}else switch(e){case"name":return"opacity";case"extract":return r;case"inject":return r}}},register:function(){9>=f||v.State.isGingerbread||(x.Lists.transformsBase=x.Lists.transformsBase.concat(x.Lists.transforms3D));for(var e=0;e<x.Lists.transformsBase.length;e++)!function(){var t=x.Lists.transformsBase[e];x.Normalizations.registered[t]=function(e,r,n){switch(e){case"name":return"transform";case"extract":return i(r)===a||i(r).transformCache[t]===a?/^scale/i.test(t)?1:0:i(r).transformCache[t].replace(/[()]/g,"");case"inject":var o=!1;switch(t.substr(0,t.length-1)){case"translate":o=!/(%|px|em|rem|vw|vh|\d)$/i.test(n);break;case"scal":case"scale":v.State.isAndroid&&i(r).transformCache[t]===a&&1>n&&(n=1),o=!/(\d)$/i.test(n);break;case"skew":o=!/(deg|\d)$/i.test(n);break;case"rotate":o=!/(deg|\d)$/i.test(n)}return o||(i(r).transformCache[t]="("+n+")"),i(r).transformCache[t]}}}();for(var e=0;e<x.Lists.colors.length;e++)!function(){var t=x.Lists.colors[e];x.Normalizations.registered[t]=function(e,r,n){switch(e){case"name":return t;case"extract":var o;if(x.RegEx.wrappedValueAlreadyExtracted.test(n))o=n;else{var i,s={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(n)?i=s[n]!==a?s[n]:s.black:x.RegEx.isHex.test(n)?i="rgb("+x.Values.hexToRgb(n).join(" ")+")":/^rgba?\(/i.test(n)||(i=s.black),o=(i||n).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=f||3!==o.split(" ").length||(o+=" 1"),o;case"inject":return 8>=f?4===n.split(" ").length&&(n=n.split(/\s+/).slice(0,3).join(" ")):3===n.split(" ").length&&(n+=" 1"),(8>=f?"rgb":"rgba")+"("+n.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},SVGAttribute:function(e){var t="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(f||v.State.isAndroid&&!v.State.isChrome)&&(t+="|transform"),new RegExp("^("+t+")$","i").test(e)},prefixCheck:function(e){if(v.State.prefixMatches[e])return[v.State.prefixMatches[e],!0];for(var t=["","Webkit","Moz","ms","O"],r=0,a=t.length;a>r;r++){var n;if(n=0===r?e:t[r]+e.replace(/^\w/,function(e){return e.toUpperCase()}),g.isString(v.State.prefixElement.style[n]))return v.State.prefixMatches[e]=n,[n,!0]}return[e,!1]}},Values:{hexToRgb:function(e){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,a;return e=e.replace(t,function(e,t,r,a){return t+t+r+r+a+a}),a=r.exec(e),a?[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)]:[0,0,0]},isCSSNullValue:function(e){return 0==e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)?"":"px"},getDisplayType:function(e){var t=e&&e.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":/^(tr)$/i.test(t)?"table-row":"block"},addClass:function(e,t){e.classList?e.classList.add(t):e.className+=(e.className.length?" ":"")+t},removeClass:function(e,t){e.classList?e.classList.remove(t):e.className=e.className.toString().replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(e,r,n,o){function s(e,r){function n(){u&&x.setPropertyValue(e,"display","none")}var l=0;if(8>=f)l=$.css(e,r);else{var u=!1;if(/^(width|height)$/.test(r)&&0===x.getPropertyValue(e,"display")&&(u=!0,x.setPropertyValue(e,"display",x.Values.getDisplayType(e))),!o){if("height"===r&&"border-box"!==x.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var c=e.offsetHeight-(parseFloat(x.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(x.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(x.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(x.getPropertyValue(e,"paddingBottom"))||0);return n(),c}if("width"===r&&"border-box"!==x.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var p=e.offsetWidth-(parseFloat(x.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(x.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(x.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(x.getPropertyValue(e,"paddingRight"))||0);return n(),p}}var d;d=i(e)===a?t.getComputedStyle(e,null):i(e).computedStyle?i(e).computedStyle:i(e).computedStyle=t.getComputedStyle(e,null),(f||v.State.isFirefox)&&"borderColor"===r&&(r="borderTopColor"),l=9===f&&"filter"===r?d.getPropertyValue(r):d[r],(""===l||null===l)&&(l=e.style[r]),n()}if("auto"===l&&/^(top|right|bottom|left)$/i.test(r)){var g=s(e,"position");("fixed"===g||"absolute"===g&&/top|left/i.test(r))&&(l=$(e).position()[r]+"px")}return l}var l;if(x.Hooks.registered[r]){var u=r,c=x.Hooks.getRoot(u);n===a&&(n=x.getPropertyValue(e,x.Names.prefixCheck(c)[0])),x.Normalizations.registered[c]&&(n=x.Normalizations.registered[c]("extract",e,n)),l=x.Hooks.extractValue(u,n)}else if(x.Normalizations.registered[r]){var p,d;p=x.Normalizations.registered[r]("name",e),"transform"!==p&&(d=s(e,x.Names.prefixCheck(p)[0]),x.Values.isCSSNullValue(d)&&x.Hooks.templates[r]&&(d=x.Hooks.templates[r][1])),l=x.Normalizations.registered[r]("extract",e,d)}return/^[\d-]/.test(l)||(l=i(e)&&i(e).isSVG&&x.Names.SVGAttribute(r)?/^(height|width)$/i.test(r)?e.getBBox()[r]:e.getAttribute(r):s(e,x.Names.prefixCheck(r)[0])),x.Values.isCSSNullValue(l)&&(l=0),v.debug>=2&&console.log("Get "+r+": "+l),l},setPropertyValue:function(e,r,a,n,o){var s=r;if("scroll"===r)o.container?o.container["scroll"+o.direction]=a:"Left"===o.direction?t.scrollTo(a,o.alternateValue):t.scrollTo(o.alternateValue,a);else if(x.Normalizations.registered[r]&&"transform"===x.Normalizations.registered[r]("name",e))x.Normalizations.registered[r]("inject",e,a),s="transform",a=i(e).transformCache[r];else{if(x.Hooks.registered[r]){var l=r,u=x.Hooks.getRoot(r);n=n||x.getPropertyValue(e,u),a=x.Hooks.injectValue(l,a,n),r=u}if(x.Normalizations.registered[r]&&(a=x.Normalizations.registered[r]("inject",e,a),r=x.Normalizations.registered[r]("name",e)),s=x.Names.prefixCheck(r)[0],8>=f)try{e.style[s]=a}catch(c){v.debug&&console.log("Browser does not support ["+a+"] for ["+s+"]")}else i(e)&&i(e).isSVG&&x.Names.SVGAttribute(r)?e.setAttribute(r,a):e.style[s]=a;v.debug>=2&&console.log("Set "+r+" ("+s+"): "+a)}return[s,a]},flushTransformCache:function(e){function t(t){return parseFloat(x.getPropertyValue(e,t))}var r="";if((f||v.State.isAndroid&&!v.State.isChrome)&&i(e).isSVG){var a={translate:[t("translateX"),t("translateY")],skewX:[t("skewX")],skewY:[t("skewY")],scale:1!==t("scale")?[t("scale"),t("scale")]:[t("scaleX"),t("scaleY")],rotate:[t("rotateZ"),0,0]};$.each(i(e).transformCache,function(e){/^translate/i.test(e)?e="translate":/^scale/i.test(e)?e="scale":/^rotate/i.test(e)&&(e="rotate"),a[e]&&(r+=e+"("+a[e].join(" ")+") ",delete a[e])})}else{var n,o;$.each(i(e).transformCache,function(t){return n=i(e).transformCache[t],"transformPerspective"===t?(o=n,!0):(9===f&&"rotateZ"===t&&(t="rotate"),void(r+=t+n+" "))}),o&&(r="perspective"+o+" "+r)}x.setPropertyValue(e,"transform",r)}};x.Hooks.register(),x.Normalizations.register(),v.hook=function(e,t,r){var n=a;return e=o(e),$.each(e,function(e,o){if(i(o)===a&&v.init(o),r===a)n===a&&(n=v.CSS.getPropertyValue(o,t));else{var s=v.CSS.setPropertyValue(o,t,r);"transform"===s[0]&&v.CSS.flushTransformCache(o),n=s}}),n};var S=function(){function e(){return f?k.promise||null:d}function s(){function e(e){function f(e,t){var r=a,n=a,i=a;return g.isArray(e)?(r=e[0],!g.isArray(e[1])&&/^[\d-]/.test(e[1])||g.isFunction(e[1])||x.RegEx.isHex.test(e[1])?i=e[1]:(g.isString(e[1])&&!x.RegEx.isHex.test(e[1])||g.isArray(e[1]))&&(n=t?e[1]:u(e[1],s.duration),e[2]!==a&&(i=e[2]))):r=e,t||(n=n||s.easing),g.isFunction(r)&&(r=r.call(o,V,w)),g.isFunction(i)&&(i=i.call(o,V,w)),[r||0,n,i]}function d(e,t){var r,a;return a=(t||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(e){return r=e,""}),r||(r=x.Values.getUnitType(e)),[a,r]}function m(){var e={myParent:o.parentNode||r.body,position:x.getPropertyValue(o,"position"),fontSize:x.getPropertyValue(o,"fontSize")},a=e.position===L.lastPosition&&e.myParent===L.lastParent,n=e.fontSize===L.lastFontSize;L.lastParent=e.myParent,L.lastPosition=e.position,L.lastFontSize=e.fontSize;var s=100,l={};if(n&&a)l.emToPx=L.lastEmToPx,l.percentToPxWidth=L.lastPercentToPxWidth,l.percentToPxHeight=L.lastPercentToPxHeight;else{var u=i(o).isSVG?r.createElementNS("http://www.w3.org/2000/svg","rect"):r.createElement("div");v.init(u),e.myParent.appendChild(u),$.each(["overflow","overflowX","overflowY"],function(e,t){v.CSS.setPropertyValue(u,t,"hidden")}),v.CSS.setPropertyValue(u,"position",e.position),v.CSS.setPropertyValue(u,"fontSize",e.fontSize),v.CSS.setPropertyValue(u,"boxSizing","content-box"),$.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(e,t){v.CSS.setPropertyValue(u,t,s+"%")}),v.CSS.setPropertyValue(u,"paddingLeft",s+"em"),l.percentToPxWidth=L.lastPercentToPxWidth=(parseFloat(x.getPropertyValue(u,"width",null,!0))||1)/s,l.percentToPxHeight=L.lastPercentToPxHeight=(parseFloat(x.getPropertyValue(u,"height",null,!0))||1)/s,l.emToPx=L.lastEmToPx=(parseFloat(x.getPropertyValue(u,"paddingLeft"))||1)/s,e.myParent.removeChild(u)}return null===L.remToPx&&(L.remToPx=parseFloat(x.getPropertyValue(r.body,"fontSize"))||16),null===L.vwToPx&&(L.vwToPx=parseFloat(t.innerWidth)/100,L.vhToPx=parseFloat(t.innerHeight)/100),l.remToPx=L.remToPx,l.vwToPx=L.vwToPx,l.vhToPx=L.vhToPx,v.debug>=1&&console.log("Unit ratios: "+JSON.stringify(l),o),l}if(s.begin&&0===V)try{s.begin.call(h,h)}catch(y){setTimeout(function(){throw y},1)}if("scroll"===A){var S=/^x$/i.test(s.axis)?"Left":"Top",C=parseFloat(s.offset)||0,T,F,E;s.container?g.isWrapped(s.container)||g.isNode(s.container)?(s.container=s.container[0]||s.container,T=s.container["scroll"+S],E=T+$(o).position()[S.toLowerCase()]+C):s.container=null:(T=v.State.scrollAnchor[v.State["scrollProperty"+S]],F=v.State.scrollAnchor[v.State["scrollProperty"+("Left"===S?"Top":"Left")]],E=$(o).offset()[S.toLowerCase()]+C),l={scroll:{rootPropertyValue:!1,startValue:T,currentValue:T,endValue:E,unitType:"",easing:s.easing,scrollData:{container:s.container,direction:S,alternateValue:F}},element:o},v.debug&&console.log("tweensContainer (scroll): ",l.scroll,o)}else if("reverse"===A){if(!i(o).tweensContainer)return void $.dequeue(o,s.queue);"none"===i(o).opts.display&&(i(o).opts.display="auto"),"hidden"===i(o).opts.visibility&&(i(o).opts.visibility="visible"),i(o).opts.loop=!1,i(o).opts.begin=null,i(o).opts.complete=null,P.easing||delete s.easing,P.duration||delete s.duration,s=$.extend({},i(o).opts,s);var j=$.extend(!0,{},i(o).tweensContainer);for(var H in j)if("element"!==H){var N=j[H].startValue;j[H].startValue=j[H].currentValue=j[H].endValue,j[H].endValue=N,g.isEmptyObject(P)||(j[H].easing=s.easing),v.debug&&console.log("reverse tweensContainer ("+H+"): "+JSON.stringify(j[H]),o)}l=j}else if("start"===A){var j;i(o).tweensContainer&&i(o).isAnimating===!0&&(j=i(o).tweensContainer),$.each(b,function(e,t){if(RegExp("^"+x.Lists.colors.join("$|^")+"$").test(e)){var r=f(t,!0),n=r[0],o=r[1],i=r[2];if(x.RegEx.isHex.test(n)){for(var s=["Red","Green","Blue"],l=x.Values.hexToRgb(n),u=i?x.Values.hexToRgb(i):a,c=0;c<s.length;c++){var p=[l[c]];o&&p.push(o),u!==a&&p.push(u[c]),b[e+s[c]]=p}delete b[e]}}});for(var O in b){var z=f(b[O]),q=z[0],M=z[1],I=z[2];O=x.Names.camelCase(O);var B=x.Hooks.getRoot(O),W=!1;if(i(o).isSVG||x.Names.prefixCheck(B)[1]!==!1||x.Normalizations.registered[B]!==a){(s.display!==a&&null!==s.display&&"none"!==s.display||s.visibility!==a&&"hidden"!==s.visibility)&&/opacity|filter/.test(O)&&!I&&0!==q&&(I=0),s._cacheValues&&j&&j[O]?(I===a&&(I=j[O].endValue+j[O].unitType),W=i(o).rootPropertyValueCache[B]):x.Hooks.registered[O]?I===a?(W=x.getPropertyValue(o,B),I=x.getPropertyValue(o,O,W)):W=x.Hooks.templates[B][1]:I===a&&(I=x.getPropertyValue(o,O));var G,D,X,Y=!1;if(G=d(O,I),I=G[0],X=G[1],G=d(O,q),q=G[0].replace(/^([+-\/*])=/,function(e,t){return Y=t,""}),D=G[1],I=parseFloat(I)||0,q=parseFloat(q)||0,"%"===D&&(/^(fontSize|lineHeight)$/.test(O)?(q/=100,D="em"):/^scale/.test(O)?(q/=100,D=""):/(Red|Green|Blue)$/i.test(O)&&(q=q/100*255,D="")),/[\/*]/.test(Y))D=X;else if(X!==D&&0!==I)if(0===q)D=X;else{p=p||m();var Q=/margin|padding|left|right|width|text|word|letter/i.test(O)||/X$/.test(O)||"x"===O?"x":"y";switch(X){case"%":I*="x"===Q?p.percentToPxWidth:p.percentToPxHeight;break;case"px":break;default:I*=p[X+"ToPx"]}switch(D){case"%":I*=1/("x"===Q?p.percentToPxWidth:p.percentToPxHeight);break;case"px":break;default:I*=1/p[D+"ToPx"]}}switch(Y){case"+":q=I+q;break;case"-":q=I-q;break;case"*":q=I*q;break;case"/":q=I/q}l[O]={rootPropertyValue:W,startValue:I,currentValue:I,endValue:q,unitType:D,easing:M},v.debug&&console.log("tweensContainer ("+O+"): "+JSON.stringify(l[O]),o)}else v.debug&&console.log("Skipping ["+B+"] due to a lack of browser support.")}l.element=o}l.element&&(x.Values.addClass(o,"velocity-animating"),R.push(l),""===s.queue&&(i(o).tweensContainer=l,i(o).opts=s),i(o).isAnimating=!0,V===w-1?(v.State.calls.length>1e4&&(v.State.calls=n(v.State.calls)),v.State.calls.push([R,h,s,null,k.resolver]),v.State.isTicking===!1&&(v.State.isTicking=!0,c())):V++)}var o=this,s=$.extend({},v.defaults,P),l={},p;switch(i(o)===a&&v.init(o),parseFloat(s.delay)&&s.queue!==!1&&$.queue(o,s.queue,function(e){v.velocityQueueEntryFlag=!0,i(o).delayTimer={setTimeout:setTimeout(e,parseFloat(s.delay)),next:e}}),s.duration.toString().toLowerCase()){case"fast":s.duration=200;break;case"normal":s.duration=y;break;case"slow":s.duration=600;break;default:s.duration=parseFloat(s.duration)||1}v.mock!==!1&&(v.mock===!0?s.duration=s.delay=1:(s.duration*=parseFloat(v.mock)||1,s.delay*=parseFloat(v.mock)||1)),s.easing=u(s.easing,s.duration),s.begin&&!g.isFunction(s.begin)&&(s.begin=null),s.progress&&!g.isFunction(s.progress)&&(s.progress=null),s.complete&&!g.isFunction(s.complete)&&(s.complete=null),s.display!==a&&null!==s.display&&(s.display=s.display.toString().toLowerCase(),"auto"===s.display&&(s.display=v.CSS.Values.getDisplayType(o))),s.visibility!==a&&null!==s.visibility&&(s.visibility=s.visibility.toString().toLowerCase()),s.mobileHA=s.mobileHA&&v.State.isMobile&&!v.State.isGingerbread,s.queue===!1?s.delay?setTimeout(e,s.delay):e():$.queue(o,s.queue,function(t,r){return r===!0?(k.promise&&k.resolver(h),!0):(v.velocityQueueEntryFlag=!0,void e(t))}),""!==s.queue&&"fx"!==s.queue||"inprogress"===$.queue(o)[0]||$.dequeue(o)}var l=arguments[0]&&($.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||g.isString(arguments[0].properties)),f,d,m,h,b,P;if(g.isWrapped(this)?(f=!1,m=0,h=this,d=this):(f=!0,m=1,h=l?arguments[0].elements:arguments[0]),h=o(h)){l?(b=arguments[0].properties,P=arguments[0].options):(b=arguments[m],P=arguments[m+1]);var w=h.length,V=0;if("stop"!==b&&!$.isPlainObject(P)){var C=m+1;P={};for(var T=C;T<arguments.length;T++)g.isArray(arguments[T])||!/^(fast|normal|slow)$/i.test(arguments[T])&&!/^\d/.test(arguments[T])?g.isString(arguments[T])||g.isArray(arguments[T])?P.easing=arguments[T]:g.isFunction(arguments[T])&&(P.complete=arguments[T]):P.duration=arguments[T]}var k={promise:null,resolver:null,rejecter:null};f&&v.Promise&&(k.promise=new v.Promise(function(e,t){k.resolver=e,k.rejecter=t}));var A;switch(b){case"scroll":A="scroll";break;case"reverse":A="reverse";break;case"stop":$.each(h,function(e,t){i(t)&&i(t).delayTimer&&(clearTimeout(i(t).delayTimer.setTimeout),i(t).delayTimer.next&&i(t).delayTimer.next(),delete i(t).delayTimer)});var F=[];return $.each(v.State.calls,function(e,t){t&&$.each(t[1],function(r,n){var o=g.isString(P)?P:"";return P!==a&&t[2].queue!==o?!0:void $.each(h,function(t,r){r===n&&(P!==a&&($.each($.queue(r,o),function(e,t){g.isFunction(t)&&t(null,!0)}),$.queue(r,o,[])),i(r)&&""===o&&$.each(i(r).tweensContainer,function(e,t){t.endValue=t.currentValue}),F.push(e))})})}),$.each(F,function(e,t){p(t,!0)}),k.promise&&k.resolver(h),e();default:if(!$.isPlainObject(b)||g.isEmptyObject(b)){if(g.isString(b)&&v.Redirects[b]){var E=$.extend({},P),j=E.duration,H=E.delay||0;return E.backwards===!0&&(h=$.extend(!0,[],h).reverse()),$.each(h,function(e,t){parseFloat(E.stagger)?E.delay=H+parseFloat(E.stagger)*e:g.isFunction(E.stagger)&&(E.delay=H+E.stagger.call(t,e,w)),E.drag&&(E.duration=parseFloat(j)||(/^(callout|transition)/.test(b)?1e3:y),E.duration=Math.max(E.duration*(E.backwards?1-e/w:(e+1)/w),.75*E.duration,200)),v.Redirects[b].call(t,t,E||{},e,w,h,k.promise?k:a)
}),e()}var N="Velocity: First argument ("+b+") was not a property map, a known action, or a registered redirect. Aborting.";return k.promise?k.rejecter(new Error(N)):console.log(N),e()}A="start"}var L={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},R=[];$.each(h,function(e,t){g.isNode(t)&&s.call(t)});var E=$.extend({},v.defaults,P),O;if(E.loop=parseInt(E.loop),O=2*E.loop-1,E.loop)for(var z=0;O>z;z++){var q={delay:E.delay,progress:E.progress};z===O-1&&(q.display=E.display,q.visibility=E.visibility,q.complete=E.complete),S(h,"reverse",q)}return e()}};v=$.extend(S,v),v.animate=S;var P=t.requestAnimationFrame||d;return v.State.isMobile||r.hidden===a||r.addEventListener("visibilitychange",function(){r.hidden?(P=function(e){return setTimeout(function(){e(!0)},16)},c()):P=t.requestAnimationFrame||d}),e.Velocity=v,e!==t&&(e.fn.velocity=S,e.fn.velocity.defaults=v.defaults),$.each(["Down","Up"],function(e,t){v.Redirects["slide"+t]=function(e,r,n,o,i,s){var l=$.extend({},r),u=l.begin,c=l.complete,p={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},f={};l.display===a&&(l.display="Down"===t?"inline"===v.CSS.Values.getDisplayType(e)?"inline-block":"block":"none"),l.begin=function(){u&&u.call(i,i);for(var r in p){f[r]=e.style[r];var a=v.CSS.getPropertyValue(e,r);p[r]="Down"===t?[a,0]:[0,a]}f.overflow=e.style.overflow,e.style.overflow="hidden"},l.complete=function(){for(var t in f)e.style[t]=f[t];c&&c.call(i,i),s&&s.resolver(i)},v(e,p,l)}}),$.each(["In","Out"],function(e,t){v.Redirects["fade"+t]=function(e,r,n,o,i,s){var l=$.extend({},r),u={opacity:"In"===t?1:0},c=l.complete;l.complete=n!==o-1?l.begin=null:function(){c&&c.call(i,i),s&&s.resolver(i)},l.display===a&&(l.display="In"===t?"auto":"none"),v(this,u,l)}}),v}(window.jQuery||window.Zepto||window,window,document)});
;
/* 
 * Tipper v3.1.0 - 2014-11-25 
 * A jQuery plugin for simple tooltips. Part of the formstone library. 
 * http://formstone.it/tipper/ 
 * 
 * Copyright 2014 Ben Plum; MIT Licensed 
 */

;(function ($, window) {
	"use strict";

	var $body,
		$tipper,
		pos;

	/**
	 * @options
	 * @param delay [int] <0> "Hover delay"
	 * @param direction [string] <'top'> "Tooltip direction"
	 * @param follow [boolean] <false> "Flag to follow mouse"
	 * @param formatter [function] <$.noop> "Text format function"
	 * @param margin [int] <15> "Tooltip margin"
	 * @param match [boolean] <false> "Flag to match mouse position"
	 */
	var options = {
		delay: 0,
		direction: "top",
		follow: false,
		formatter: $.noop,
		margin: 15,
		match: false
	};

	var pub = {

		/**
		 * @method
		 * @name defaults
		 * @description Sets default plugin options
		 * @param opts [object] <{}> "Options object"
		 * @example $.tipper("defaults", opts);
		 */
		defaults: function(opts) {
			options = $.extend(options, opts || {});

			return (typeof this === 'object') ? $(this) : true;
		},

		/**
		 * @method
		 * @name destroy
		 * @description Removes instance of plugin
		 * @example $(".target").tipper("destroy");
		 */
		destroy: function() {
			return $(this).trigger("mouseleave.tipper")
						  .off(".tipper")
						  .removeClass("tipper-attached");
		}
	};


	/**
	 * @method private
	 * @name init
	 * @description Initializes plugin
	 * @param opts [object] "Initialization options"
	 */
	function init(opts) {
		options.formatter = format;

		$body = $("body");

		return $(this).not(".tipper-attached")
					  .addClass("tipper-attached")
					  .on("mouseenter.tipper", $.extend({}, options, opts || {}), build);
	}

	/**
	 * @method private
	 * @name build
	 * @description Builds target instance
	 * @param e [object] "Event data"
	 */
	function build(e) {
		var $target = $(this),
		data = $.extend(true, {}, e.data, $target.data("tipper-options"));

		data.$target = $target;
		pos = {
			left: e.pageX,
			top: e.pageY
		};

		if (data.delay) {
			data.timer = startTimer(data.timer, data.delay, function() {
				doBuild(data.$target, data);
			});
		} else {
			doBuild(data.$target, data);
		}

		data.$target.one("mouseleave.tipper", data, onMouseOut);

		if (!data.follow && data.match) {
			data.$target.on("mousemove.tipper", data, onMouseMove)
						.trigger("mousemove");
		}
	}

	/**
	 * @method private
	 * @name doBuild
	 * @description Builds target instance
	 * @param $target [jQuery object] "Target element"
	 * @param data [object] "Instance data"
	 */
	function doBuild($target, data) {
		var html = '';

		html += '<div class="tipper ' + data.direction + '">';
		html += '<div class="tipper-content">';
		html += data.formatter.apply($body, [$target]);
		html += '<span class="tipper-caret"></span>';
		html += '</div>';
		html += '</div>';

		data.$target = $target;
		data.$tipper = $(html);

		$body.append(data.$tipper);

		data.$content = data.$tipper.find(".tipper-content");
		data.$caret = data.$tipper.find(".tipper-caret");
		data.offset = $target.offset();
		data.height = $target.outerHeight();
		data.width  = $target.outerWidth();

		data.tipperPos = {};
		data.caretPos = {};
		data.contentPos = {};

		var caretHeight   = data.$caret.outerHeight(true),
			caretWidth    = data.$caret.outerWidth(true),
			contentHeight = data.$content.outerHeight(true),
			contentWidth  = data.$content.outerWidth(true);

		// position content
		if (data.direction === "right" || data.direction === "left") {
			data.caretPos.top = (contentHeight - caretHeight) / 2;
			data.contentPos.top = -contentHeight / 2;
			if (data.direction === "right") {
				data.contentPos.left = data.margin;
			} else if (data.direction === "left") {
				data.contentPos.left = -(contentWidth + data.margin);
			}
		} else {
			data.caretPos.left = (contentWidth - caretWidth) / 2;
			data.contentPos.left = -contentWidth / 2;

			if (data.direction === "bottom") {
				data.contentPos.top = data.margin;
			} else if (data.direction === "top") {
				data.contentPos.top = -(contentHeight + data.margin);
			}
		}

		// modify dom
		data.$content.css(data.contentPos);
		data.$caret.css(data.caretPos);

		// Position tipper
		if (data.follow) {
			data.$target.on("mousemove.tipper", data, onMouseMove)
						.trigger("mousemove");
		} else if (data.match) {
			if (data.direction === "right" || data.direction === "left") {
				data.tipperPos.top = pos.top;
				if (data.direction === "right") {
					data.tipperPos.left = data.offset.left + data.width;
				} else if (data.direction === "left") {
					data.tipperPos.left = data.offset.left;
				}
			} else {
				data.tipperPos.left = pos.left;
				if (data.direction === "bottom") {
					data.tipperPos.top = data.offset.top + data.height;
				} else if (data.direction === "top") {
					data.tipperPos.top = data.offset.top;
				}
			}

			data.$tipper.css(data.tipperPos);
		} else {
			if (data.direction === "right" || data.direction === "left") {
				data.tipperPos.top = data.offset.top + (data.height / 2);
				if (data.direction === "right") {
					data.tipperPos.left = data.offset.left + data.width;
				} else if (data.direction === "left") {
					data.tipperPos.left = data.offset.left;
				}
			} else {
				data.tipperPos.left = data.offset.left + (data.width / 2);
				if (data.direction === "bottom") {
					data.tipperPos.top = data.offset.top + data.height;
				} else if (data.direction === "top") {
					data.tipperPos.top = data.offset.top;
				}
			}

			data.$tipper.css(data.tipperPos);
		}

		data.$tipper.addClass("visible");
	}

	/**
	 * @method private
	 * @name format
	 * @description Formats tooltip text
	 * @param $target [jQuery object] "Target element"
	 * @return [string] "Formatted text"
	 */
	function format($target) {
		return $target.data("title");
	}

	/**
	 * @method private
	 * @name onMouseMove
	 * @description Handles mousemove event
	 * @param e [object] "Event data"
	 */
	function onMouseMove(e) {
		var data = e.data;

		pos = {
			left: e.pageX,
			top: e.pageY
		};

		if (data.follow && typeof data.$tipper !== "undefined") {
			data.$tipper.css({ left: pos.left, top: pos.top });
		}
	}

	/**
	 * @method private
	 * @name onMouseOut
	 * @description Handles mouseout event
	 * @param e [object] "Event data"
	 */
	function onMouseOut(e) {
		var data = e.data;

		clearTimer(data.timer);

		if (typeof data.$tipper !== "undefined") {
			data.$tipper.remove();
			data.$target.off("mousemove.tipper mouseleave.tipper");

			pos = null;
		}
	}

	/**
	 * @method private
	 * @name startTimer
	 * @description Starts an internal timer
	 * @param timer [int] "Timer ID"
	 * @param time [int] "Time until execution"
	 * @param callback [int] "Function to execute"
	 */
	function startTimer(timer, time, callback) {
		clearTimer(timer);
		return setTimeout(callback, time);
	}

	/**
	 * @method private
	 * @name clearTimer
	 * @description Clears an internal timer
	 * @param timer [int] "Timer ID"
	 */
	function clearTimer(timer) {
		if (timer) {
			clearTimeout(timer);
			timer = null;
		}
	}

	$.fn.tipper = function(method) {
		if (pub[method]) {
			return pub[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return init.apply(this, arguments);
		}
		return this;
	};

	$.tipper = function(method) {
		if (method === "defaults") {
			pub.defaults.apply(this, Array.prototype.slice.call(arguments, 1));
		}
	};
})(jQuery);;
/**
* jquery.matchHeight.js v0.5.2
* http://brm.io/jquery-match-height/
* License: MIT
*/

;(function($) {
    /*
    *  internal
    */

    var _previousResizeWidth = -1,
        _updateTimeout = -1;

    /*
    *  _rows
    *  utility function returns array of jQuery selections representing each row
    *  (as displayed after float wrapping applied by browser)
    */

    var _rows = function(elements) {
        var tolerance = 1,
            $elements = $(elements),
            lastTop = null,
            rows = [];

        // group elements by their top position
        $elements.each(function(){
            var $that = $(this),
                top = $that.offset().top - _parse($that.css('margin-top')),
                lastRow = rows.length > 0 ? rows[rows.length - 1] : null;

            if (lastRow === null) {
                // first item on the row, so just push it
                rows.push($that);
            } else {
                // if the row top is the same, add to the row group
                if (Math.floor(Math.abs(lastTop - top)) <= tolerance) {
                    rows[rows.length - 1] = lastRow.add($that);
                } else {
                    // otherwise start a new row group
                    rows.push($that);
                }
            }

            // keep track of the last row top
            lastTop = top;
        });

        return rows;
    };

    /*
    *  _parse
    *  value parse utility function
    */

    var _parse = function(value) {
        // parse value and convert NaN to 0
        return parseFloat(value) || 0;
    };

    /*
    *  _parseOptions
    *  handle plugin options
    */

    var _parseOptions = function(options) {
        var opts = {
            byRow: true,
            remove: false,
            property: 'height'
        };

        if (typeof options === 'object') {
            return $.extend(opts, options);
        }

        if (typeof options === 'boolean') {
            opts.byRow = options;
        } else if (options === 'remove') {
            opts.remove = true;
        }

        return opts;
    };

    /*
    *  matchHeight
    *  plugin definition
    */

    var matchHeight = $.fn.matchHeight = function(options) {
        var opts = _parseOptions(options);

        // handle remove
        if (opts.remove) {
            var that = this;

            // remove fixed height from all selected elements
            this.css(opts.property, '');

            // remove selected elements from all groups
            $.each(matchHeight._groups, function(key, group) {
                group.elements = group.elements.not(that);
            });

            // TODO: cleanup empty groups

            return this;
        }

        if (this.length <= 1)
            return this;

        // keep track of this group so we can re-apply later on load and resize events
        matchHeight._groups.push({
            elements: this,
            options: opts
        });

        // match each element's height to the tallest element in the selection
        matchHeight._apply(this, opts);

        return this;
    };

    /*
    *  plugin global options
    */

    matchHeight._groups = [];
    matchHeight._throttle = 80;
    matchHeight._maintainScroll = false;
    matchHeight._beforeUpdate = null;
    matchHeight._afterUpdate = null;

    /*
    *  matchHeight._apply
    *  apply matchHeight to given elements
    */

    matchHeight._apply = function(elements, options) {
        var opts = _parseOptions(options),
            $elements = $(elements),
            rows = [$elements];

        // take note of scroll position
        var scrollTop = $(window).scrollTop(),
            htmlHeight = $('html').outerHeight(true);

        // get hidden parents
        var $hiddenParents = $elements.parents().filter(':hidden');

        // cache the original inline style
        $hiddenParents.each(function() {
            var $that = $(this);
            $that.data('style-cache', $that.attr('style'));
        });

        // temporarily must force hidden parents visible
        $hiddenParents.css('display', 'block');

        // get rows if using byRow, otherwise assume one row
        if (opts.byRow) {

            // must first force an arbitrary equal height so floating elements break evenly
            $elements.each(function() {
                var $that = $(this),
                    display = $that.css('display') === 'inline-block' ? 'inline-block' : 'block';

                // cache the original inline style
                $that.data('style-cache', $that.attr('style'));

                $that.css({
                    'display': display,
                    'padding-top': '0',
                    'padding-bottom': '0',
                    'margin-top': '0',
                    'margin-bottom': '0',
                    'border-top-width': '0',
                    'border-bottom-width': '0',
                    'height': '100px'
                });
            });

            // get the array of rows (based on element top position)
            rows = _rows($elements);

            // revert original inline styles
            $elements.each(function() {
                var $that = $(this);
                $that.attr('style', $that.data('style-cache') || '');
            });
        }

        $.each(rows, function(key, row) {
            var $row = $(row),
                maxHeight = 0;

            // skip apply to rows with only one item
            if (opts.byRow && $row.length <= 1) {
                $row.css(opts.property, '');
                return;
            }

            // iterate the row and find the max height
            $row.each(function(){
                var $that = $(this),
                    display = $that.css('display') === 'inline-block' ? 'inline-block' : 'block';

                // ensure we get the correct actual height (and not a previously set height value)
                var css = { 'display': display };
                css[opts.property] = '';
                $that.css(css);

                // find the max height (including padding, but not margin)
                if ($that.outerHeight(false) > maxHeight)
                    maxHeight = $that.outerHeight(false);

                // revert display block
                $that.css('display', '');
            });

            // iterate the row and apply the height to all elements
            $row.each(function(){
                var $that = $(this),
                    verticalPadding = 0;

                // handle padding and border correctly (required when not using border-box)
                if ($that.css('box-sizing') !== 'border-box') {
                    verticalPadding += _parse($that.css('border-top-width')) + _parse($that.css('border-bottom-width'));
                    verticalPadding += _parse($that.css('padding-top')) + _parse($that.css('padding-bottom'));
                }

                // set the height (accounting for padding and border)
                $that.css(opts.property, maxHeight - verticalPadding);
            });
        });

        // revert hidden parents
        $hiddenParents.each(function() {
            var $that = $(this);
            $that.attr('style', $that.data('style-cache') || null);
        });

        // restore scroll position if enabled
        if (matchHeight._maintainScroll)
            $(window).scrollTop((scrollTop / htmlHeight) * $('html').outerHeight(true));

        return this;
    };

    /*
    *  matchHeight._applyDataApi
    *  applies matchHeight to all elements with a data-match-height attribute
    */

    matchHeight._applyDataApi = function() {
        var groups = {};

        // generate groups by their groupId set by elements using data-match-height
        $('[data-match-height], [data-mh]').each(function() {
            var $this = $(this),
                groupId = $this.attr('data-match-height') || $this.attr('data-mh');
            if (groupId in groups) {
                groups[groupId] = groups[groupId].add($this);
            } else {
                groups[groupId] = $this;
            }
        });

        // apply matchHeight to each group
        $.each(groups, function() {
            this.matchHeight(true);
        });
    };

    /*
    *  matchHeight._update
    *  updates matchHeight on all current groups with their correct options
    */

    var _update = function(event) {
        if (matchHeight._beforeUpdate)
            matchHeight._beforeUpdate(event, matchHeight._groups);

        $.each(matchHeight._groups, function() {
            matchHeight._apply(this.elements, this.options);
        });

        if (matchHeight._afterUpdate)
            matchHeight._afterUpdate(event, matchHeight._groups);
    };

    matchHeight._update = function(throttle, event) {
        // prevent update if fired from a resize event
        // where the viewport width hasn't actually changed
        // fixes an event looping bug in IE8
        if (event && event.type === 'resize') {
            var windowWidth = $(window).width();
            if (windowWidth === _previousResizeWidth)
                return;
            _previousResizeWidth = windowWidth;
        }

        // throttle updates
        if (!throttle) {
            _update(event);
        } else if (_updateTimeout === -1) {
            _updateTimeout = setTimeout(function() {
                _update(event);
                _updateTimeout = -1;
            }, matchHeight._throttle);
        }
    };

    /*
    *  bind events
    */

    // apply on DOM ready event
    $(matchHeight._applyDataApi);

    // update heights on load and resize events
    $(window).bind('load', function(event) {
        matchHeight._update(false, event);
    });

    // throttled update heights on resize events
    $(window).bind('resize orientationchange', function(event) {
        matchHeight._update(true, event);
    });

})(jQuery);;
/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */
// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - https://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {
    // To understand behaviors, see https://drupal.org/node/756722#behaviors


    Drupal.behaviors.blazeng_custom_behavior = {
        attach: function (context, settings) {

            function track(category, label, action) {
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push(
                    {
                        'ga_category': category,
                        'ga_label': label,
                        'ga_action': action
                    }
                );
            }

            //var child =  jQuery(".blog-content").children();
            //jQuery(".blog-content").text(" ");
            //
            //jQuery(".blog-content").html(child);

            var base = Drupal.settings.blazemeter.blazemeter_bza_url;
            var cookieName = Drupal.settings.blazemeter.blazemeter_cookie;

            loadUser();
            jQuery('#billing').show();
             jQuery('.billed-annually').addClass("active");
            //setTimeout(function () {
            //    //jQuery(".billed-monthly").click();
            //}, 500);
            jQuery('.starts-from').hide();
            $("#pro-test-number").addClass('pro-tests');
            $("#basic-test-number").addClass('basic-tests');

            var urlObject = url.parse(document.location.href);

            if (urlObject) {
                var queryObject = url.get(urlObject.query);

                if (queryObject["op"] == "Sign Up") {

                    setTimeout(function () {

                        var popupError = $('<div class="popupError">' + queryObject["error[error][0]"] + '</div>');
                        $('.popup-holder .title').after(popupError);

                        $("#edit-firstname").val(queryObject["firstname"]);
                        $("#edit-lastname").val(queryObject["lastname"]);
                        $("#edit-field-comp-0-value").val(queryObject["field_comp[0][value]"]);

                        $('#signup-popup').fadeIn();
                        $('div.fade').css({
                            'display': 'block',
                            'opacity': 1
                        });

                    }, 200);

                }
            }

            function loadUser() {

                var cookieValue = readCookie(cookieName);
                if (cookieValue.length > 0) {
                    cookieValue = JSON.parse(cookieValue);
                    uid = cookieValue.uid;
                    var name = cookieValue.name;
                    var plan = cookieValue.plan;
                    var nb = cookieValue.nb;
                    var email = cookieValue.email;
                    if (uid != 0) {

                        $("#sign-block").html("<div class='welcome'><span>Hello " + name + ".</span><a class='backToTests' href=\"" + base + "\">Back to your Tests</a><a class='logout' href=\"" + base + "/logout\">Logout</a></div>");
                        $("#sign-block").removeClass('not-logged');
                        //setTimeout(function () {
                        //    $(".billed-monthly").click();
                        //}, 500);
                        $(".signup-link").hide();
                        //jQuery(".get_started_button").css("visibility","hidden");

                        //jQuery("#try_it_now").css("visibility","hidden");
                        $('.frontregi').hide();

                        $('.section-features .features_page_get_started_link').attr('href', 'http://info.blazemeter.com/jmeter-training-course');
                        $('.section-features .features_page_get_started_link').on('click', function () {
                            location.href = "http://info.blazemeter.com/jmeter-training-course";
                            return false;
                        });

                        $(".signup-btn").hide();


                        $(".section-pricing .cta-background.last .pricing-section-holder h2").text("5 Day Free JMeter Course");
                        $(".section-pricing .cta-background.last .pricing-section-holder h4").hide();
                        $(".section-pricing .cta-background.last .pricing-section-holder .signup-btn, .section-pricing .features-learn.pricing .signup-btn").show().text("Get Started").attr("href", "http://info.blazemeter.com/jmeter-training-course");
                        $(".section-pricing .cta-background.last .pricing-section-holder .signup-btn, .section-pricing .features-learn.pricing .signup-btn, .main_mobile_menu_start_testing_now").show().text("Get Started").on('click', function () {
                            location.href = "http://info.blazemeter.com/jmeter-training-course";
                            return false;
                        });


                        //jQuery("#block-block-21").hide();
                        //jQuery("#block-block-17").hide();
                        //jQuery("a:contains('Get Started')").hide();

                        var input = jQuery(".new_blog_aside:contains('Start Testing For Free')").find("input").get();
                        if (input[0] != undefined) {
                            jQuery(".new_blog_aside:contains('Start Testing For Free')").html("5 Day Free JMeter Course" + input[0].outerHTML);
                            jQuery(".new_blog_get_started_button").attr("value", "Get Started")

                        }

                        jQuery("p:contains('Start Testing For Free')").html("5 Day Free JMeter Course");
                        //jQuery(".get_started_button").text("GET STARTED");
                        jQuery("#main_b_start_testing_now, .get_started_button, #try_it_now,.new_blog_get_started_button,p:contains('Start Testing For Free')").bind("click", function () {
                            location.href = "http://info.blazemeter.com/jmeter-training-course";
                            return false;
                        });

                        jQuery(document).on("click", "#main_b_start_testing_now, .get_started_button, #try_it_now,.new_blog_get_started_button,p:contains('Start Testing For Free')", function(){
                            location.href = "http://info.blazemeter.com/jmeter-training-course";
                            return false;
                        });

                        jQuery(".hero").on("click", "#main_b_start_testing_now, .get_started_button, #try_it_now,.new_blog_get_started_button,p:contains('Start Testing For Free')", function(){
                            location.href = "http://info.blazemeter.com/jmeter-training-course";
                            return false;
                        });


                        jQuery("form#subscribe a").text("Get Started");
                        jQuery("form#subscribe a").attr("href", "http://info.blazemeter.com/jmeter-training-course");
                        //jQuery("form#subscribe a").bind("click",function(){
                        //    location.href = "http://info.blazemeter.com/jmeter-training-course";
                        //    return false;
                        //});


                        //jQuery("p:contains('Start your 14-days free trial')").hide();
                        jQuery(".page-blog .blog-sidebar, .node-type-blog .blog-sidebar").css("background-color", "white");
                        $("#billing").show();
                        $("#pro-test-number").addClass('pro-tests');
                        $("#basic-test-number").addClass('basic-tests');
                        $(".starts-from").css('display', 'none');
                        $('#switch-basic, #switch-pro, #switch-ondemand').removeClass('signup-btn');
                        $('#switch-basic, #switch-pro, #switch-ondemand').attr('href', '#');
                        $('.row-hidden, .pricing-section1 .row-hidden').show();
                        $('.row-start-testing').hide();
                        // Show "You are already signed up"
                        $(".dev-signed").show();
                        jQuery(".signup-button-holder").html('');
                        jQuery(".step__register .link-holder").html('<a class="signup">You are logged in</a>');
                        if (nb == false) {
                            $('#switch-basic.basic-annually, #switch-pro.pro-annually, #switch-ondemand').css('display', 'block');
                            $('#switch-basic, #switch-pro, #switch-ondemand').addClass('signed-up');
                        } else {
                            retrieveUserCard(plan);
                        }

                        jQuery('a:contains("Start Testing Now"), a:contains("GET STARTED")').bind("click", function () {
                            location.replace(blazemeter_bza_url + '/app');
                            return false;
                        })
                    }
                }
            }

            function readCookie(c_name) {
                if (document.cookie.length > 0) {
                    c_start = document.cookie.indexOf(c_name + "=");
                    if (c_start != -1) {
                        c_start = c_start + c_name.length + 1;
                        c_end = document.cookie.indexOf(";", c_start);
                        if (c_end == -1) {
                            c_end = document.cookie.length;
                        }
                        return unescape(document.cookie.substring(c_start, c_end));
                    }
                }
                return "";
            }

            function loadPricingButtons(plan, buttonClass) {
                var sales_url = document.location.origin;
                sales_url = sales_url = "/contact-us#sales";
                $('#switch-basic.basic-monthly, #switch-pro.pro-monthly, #switch-ondemand').css('display', 'block');
                switch (plan) {
                    case 'FREETIER':
                    case 'freetier':
                    case null:
                    case 'FREE-TIER':
                    case "Free-Trial":
                        $('#switch-basic, #switch-pro, #switch-ondemand').addClass(buttonClass);
                        break;
                    case 'BASIC-MONTHLY':
                        $('#switch-basic.basic-monthly').off();
                        $('#switch-basic.basic-monthly').removeClass('main-btn');
                        $('#switch-basic.basic-monthly').removeClass('plan-switch');
                        $('#switch-basic.basic-monthly').html('Your Current Plan');
                        $('#switch-basic.basic-monthly').addClass('current-plan');
                        $('#switch-basic.basic-monthly').removeAttr('href');
                        $('#switch-basic.basic-annually').addClass(buttonClass);
                        $('#switch-pro.pro-annually').addClass(buttonClass);
                        $('#switch-pro.pro-monthly').addClass(buttonClass);
                        break;
                    case 'BASIC-ANNUAL':
                    case 'BASIC':
                        $('#switch-basic.basic-annually').off();
                        $('#switch-basic.basic-annually').removeClass('main-btn');
                        $('#switch-basic.basic-annually').removeClass('plan-switch');
                        $('#switch-basic.basic-annually').html('Your Current Plan');
                        $('#switch-basic.basic-annually').addClass('current-plan');
                        $('#switch-basic.basic-annually').removeAttr('href');
                        $('#switch-basic.basic-monthly').html('Contact Us');
                        $('#switch-basic.basic-monthly').attr('href', sales_url);
                        $('#switch-pro.pro-annually').addClass(buttonClass);
                        $('#switch-pro.pro-monthly').html('Contact Us');
                        $('#switch-pro.pro-monthly').attr('href', sales_url);
                        break;
                    case 'PRO-MONTHLY':
                        $('#switch-pro.pro-monthly').off();
                        $('#switch-pro.pro-monthly').removeClass('main-btn');
                        $('#switch-pro.pro-monthly').removeClass('plan-switch');
                        $('#switch-pro.pro-monthly').html('Your Current Plan');
                        $('#switch-pro.pro-monthly').addClass('current-plan');
                        $('#switch-pro.pro-monthly').removeAttr('href');
                        $('#switch-pro.pro-annually').addClass(buttonClass);
                        $('#switch-basic.basic-annually').addClass(buttonClass);
                        $('.basic-monthly').html('Contact Us');
                        $('.basic-monthly').attr('href', sales_url);
                        break;
                    case 'PRO-ANNUAL':
                    case 'PRO':
                        $('#switch-pro.pro-annually').off();
                        $('#switch-pro.pro-annually').removeClass('main-btn');
                        $('#switch-pro.pro-annually').removeClass('plan-switch');
                        $('#switch-pro.pro-annually').html('Your Current Plan');
                        $('#switch-pro.pro-annually').addClass('current-plan');
                        $('#switch-pro.pro-annually').removeAttr('href');
                        $('#switch-pro.pro-monthly').html('Contact Us');
                        $('#switch-basic.basic-annually').html('Contact Us');
                        $('.basic-annually, .basic-monthly').html('Contact Us');
                        $('.basic-annually, .basic-monthly').attr('href', sales_url);
                        $('#switch-pro.pro-monthly').attr('href', sales_url);
                        $('#switch-basic.basic-annually').attr('href', sales_url);
                        break;
                    default:
                        $('#switch-basic, #switch-pro, #switch-ondemand').html('Contact Us');
                        $('#switch-basic, #switch-pro, #switch-ondemand').attr('href', sales_url);
                }
                jQuery("a:contains('Contact Us')").bind("click", function () {
                    window.location.replace($(this).attr("href"));
                    return false;

                });
                jQuery('.billed-annually').addClass("active");
                jQuery('.billed-monthly').removeClass("active");
            }

            function retrieveUserCard(plan) {
                var xmlhttpUC = new XMLHttpRequest();
                xmlhttpUC.onreadystatechange = function () {
                    if (xmlhttpUC.readyState == 4) {
                        var response = JSON.parse(xmlhttpUC.response);
                        if (xmlhttpUC.status == 200) {
                            if (jQuery.isEmptyObject(response.result.data[0]) == false) {
                                $(".last-cc-number").val(response.result.data[0].last4);
                                loadPricingButtons(plan, 'has-card');
                            } else {
                                loadPricingButtons(plan, 'signed-up');
                            }
                        }
                    }
                }
                xmlhttpUC.open("GET", base + "/api/latest/user/cards", true);
                xmlhttpUC.setRequestHeader('Content-type', 'application/json');
                xmlhttpUC.withCredentials = true;
                xmlhttpUC.send();
            }

            /* Leadership popup */

            //final width --> this is the quick view image slider width
            //maxQuickWidth --> this is the max-width of the quick-view panel

            var sliderFinalWidth = 400;
            var maxQuickWidth = 1000;

            //open the quick view panel
            $('.member-item-link a').on('click', function (event) {
                var selectedImage = $(this).parent().parent().parent().find('img');
                //console.log(selectedImage);
                //var slectedImageUrl = selectedImage.attr('src');
                var slectedImageUrl = selectedImage.attr('src');


                $('body').addClass('overlay-layer');
                animateQuickView(selectedImage, sliderFinalWidth, maxQuickWidth, 'open');

                //update the visible slider image in the quick view panel
                //you don't need to implement/use the updateQuickView if retrieving the quick view data with ajax
                //updateQuickView(slectedImageUrl);
                $('.cd-quick-view').removeClass('selected');
                $(this).parent().parent().parent().find('.cd-quick-view').addClass('selected');
            });

            //close the quick view panel
            $('body').on('click', function (event) {
                if ($(event.target).is('.cd-close') || $(event.target).is('body.overlay-layer')) {
                    closeQuickView(sliderFinalWidth, maxQuickWidth);
                }
            });
            $(document).keyup(function (event) {
                //check if user has pressed 'Esc'
                if (event.which == '27') {
                    closeQuickView(sliderFinalWidth, maxQuickWidth);
                }
            });

            //quick view slider implementation
            $('.cd-slider-navigation a').on('click', function () {
                updateSlider($(this));
            });

            //center quick-view on window resize
            $(window).on('resize', function () {
                if ($('.cd-quick-view').hasClass('is-visible')) {
                    window.requestAnimationFrame(resizeQuickView);
                }
            });

            function updateSlider(navigation) {
                var sliderConatiner = navigation.parents('.cd-slider-wrapper').find('.cd-slider'),
                    activeSlider = sliderConatiner.children('.selected').removeClass('selected');
                if (navigation.hasClass('cd-next')) {
                    (!activeSlider.is(':last-child')) ? activeSlider.next().addClass('selected') : sliderConatiner.children('li').eq(0).addClass('selected');
                } else {
                    (!activeSlider.is(':first-child')) ? activeSlider.prev().addClass('selected') : sliderConatiner.children('li').last().addClass('selected');
                }
            }

            function updateQuickView(url) {
                $('.cd-quick-view .cd-slider li').removeClass('selected').find('img[src="' + url + '"]').parent('li').addClass('selected');
            }

            function resizeQuickView() {
                var quickViewLeft = ($(window).width() - $('.cd-quick-view').width()) / 2,
                    quickViewTop = ($(window).height() - $('.cd-quick-view').height()) / 2;
                $('.cd-quick-view').css({
                    "top": quickViewTop,
                    "left": quickViewLeft,
                });
            }

            function closeQuickView(finalWidth, maxQuickWidth) {
                var close = $('.cd-close'),
                    activeSliderUrl = close.siblings('.cd-slider-wrapper').find('.selected img').attr('src'),
                    selectedImage = $('.empty-box').find('img');
                //update the image in the gallery
                if (!$('.cd-quick-view').hasClass('velocity-animating') && $('.cd-quick-view').hasClass('add-content')) {
                    selectedImage.attr('src', activeSliderUrl);
                    animateQuickView(selectedImage, finalWidth, maxQuickWidth, 'close');
                } else {
                    closeNoAnimation(selectedImage, finalWidth, maxQuickWidth);
                }
            }

            function animateQuickView(image, finalWidth, maxQuickWidth, animationType) {
                //store some image data (width, top position, ...)
                //store window data to calculate quick view panel position
                var parentListItem = image.parent('.member-item-image'),
                    topSelected = image.offset().top - $(window).scrollTop(),
                    leftSelected = image.offset().left,
                    widthSelected = image.width(),
                    heightSelected = image.height(),
                    windowWidth = $(window).width(),
                    windowHeight = $(window).height(),
                    finalLeft = (windowWidth - finalWidth) / 2,
                    finalHeight = finalWidth * heightSelected / widthSelected,
                    finalTop = (windowHeight - finalHeight) / 2,
                    quickViewWidth = (windowWidth * .8 < maxQuickWidth) ? windowWidth * .8 : maxQuickWidth,
                    quickViewLeft = (windowWidth - quickViewWidth) / 2;

                if (animationType == 'open') {
                    //hide the image in the gallery
                    parentListItem.addClass('empty-box');
                    //place the quick view over the image gallery and give it the dimension of the gallery image
                    $('.cd-quick-view').css({
                        "top": topSelected,
                        "left": leftSelected,
                        "width": widthSelected,
                    }).velocity({
                        //animate the quick view: animate its width and center it in the viewport
                        //during this animation, only the slider image is visible
                        'top': finalTop + 'px',
                        'left': finalLeft + 'px',
                        'width': finalWidth + 'px',
                    }, 1000, [400, 20], function () {
                        //animate the quick view: animate its width to the final value
                        $('.cd-quick-view').addClass('animate-width').velocity({
                            'left': quickViewLeft + 'px',
                            'width': quickViewWidth + 'px',
                        }, 300, 'ease', function () {
                            //show quick view content
                            $('.cd-quick-view').addClass('add-content');
                        });
                    }).addClass('is-visible');
                } else {
                    //close the quick view reverting the animation
                    $('.cd-quick-view').removeClass('add-content').velocity({
                        'top': finalTop + 'px',
                        'left': finalLeft + 'px',
                        'width': finalWidth + 'px'
                    }, 300, 'ease', function () {
                        $('body').removeClass('overlay-layer');
                        $('.cd-quick-view').removeClass('animate-width').velocity({
                            "top": topSelected,
                            "left": leftSelected,
                            "width": widthSelected,
                        }, 500, 'ease', function () {
                            $('.cd-quick-view').removeClass('is-visible');
                            parentListItem.removeClass('empty-box');
                        });
                    });
                }
            }

            function closeNoAnimation(image, finalWidth, maxQuickWidth) {
                if ($(".cd-quick-view")[0]) {
                    var parentListItem = image.parent('member-item-image'),
                        topSelected = image.offset().top - $(window).scrollTop(),
                        leftSelected = image.offset().left,
                        widthSelected = image.width();

                    //close the quick view reverting the animation
                    $('body').removeClass('overlay-layer');
                    parentListItem.removeClass('empty-box');
                    $('.cd-quick-view').velocity("stop").removeClass('add-content animate-width is-visible').css({
                        "top": topSelected,
                        "left": leftSelected,
                        "width": widthSelected
                    });
                }
            }


            var lnk = document.links;
            var hashes = String(window.location.href.slice(window.location.href.indexOf('?') + 1).split('&'));
            var count_get_chars = hashes.length;
            var loc = window.location.href;
            var count_url_chars = loc.length;
            var clear_loc = loc.substring(0, (count_url_chars) - (count_get_chars + 1));

            var screen_width = jQuery(window).width();
            jQuery(window).resize(function () {
                screen_width = jQuery(window).width();
            });


            var pathname = window.location.pathname;
            var content_wrapper = null;
            var news = "/blazemeter-news";
            var media = "/media";
            var events = "/events";
            for (j = 0; j < lnk.length; j++) {
                if (lnk [j].href == document.URL || lnk [j].href == clear_loc) {
                    jQuery(lnk [j]).addClass('top_main_menu_current_link');
                }
            }

            function transparent_header_on_any_page() {
                if (pathname.match(/news*/i)) {
                    content_wrapper = ".section-blazemeter-news";
                } else if (pathname.match(/media*/i)) {
                    content_wrapper = ".section-media";
                } else if (pathname.match(/events*/i)) {
                    content_wrapper = ".section-events";
                }

                jQuery(window).scroll(function () {
                    if (jQuery(window).scrollTop() >= 100) {
                        jQuery(content_wrapper + " #main_header a, " + content_wrapper + " .auth-block .link-holder a, " + content_wrapper + " a.signup.signup-btn").removeClass('blazemeter_news_header_top_position');
                        jQuery(content_wrapper + " #main_header a, " + content_wrapper + " .auth-block .link-holder a, " + content_wrapper + " a.signup.signup-btn").addClass('blazemeter_news_header_untop_position');
                        jQuery(content_wrapper + " #main_header").css({
                            'background': '#ffffff',
                            '-webkit-box-shadow': '0px 7px 30px -15px rgba(74,74,98, .5)',
                            '-moz-box-shadow': '0px 7px 30px -15px rgba(74,74,98, .5)',
                            'box-shadow': '0px 7px 30px -15px rgba(74,74,98, .5)'
                        });
                        jQuery(content_wrapper + " a#logo_image").css({
                            'background': 'url(/new_images/new_top_black_logo.svg) no-repeat',
                            'width': '224px',
                            'height': '35px',
                            'position': 'absolute',
                            'top': '13px'
                        });

                        jQuery(content_wrapper + " #main_header a, " + content_wrapper + " .auth-block .link-holder a, " + content_wrapper + " a.signup.signup-btn").css({
                            'color': '#4a4a62'
                        });

                        jQuery(content_wrapper + " a.signup.signup-btn").attr("id", "link_holder_on_main");
                        jQuery(content_wrapper + " .nav-links-list.menu-submenu").addClass("main_page_menu_hover_red");
                        jQuery(content_wrapper + ".link-holder.signup-link").attr("id", "main_page_auth_menu_hover_red");
                        jQuery(content_wrapper + " .welcome").attr("id", "main_page_welcome_menu_hover_red");
                    } else {
                        jQuery(content_wrapper + " #main_header").css({
                            'background': 'transparent',
                            '-webkit-box-shadow': '0px 0px 0px 0px rgba(74,74,98, .5)',
                            '-moz-box-shadow': '0px 0px 0px 0px rgba(74,74,98, .5)',
                            'box-shadow': '0px 0px 0px 0px rgba(74,74,98, .5)'
                        });
                        jQuery(content_wrapper + " a#logo_image").css({
                            'background': 'url(/new_images/new_top_fold_logo.svg) no-repeat',
                            'width': '224px',
                            'height': '35px',
                            'position': 'absolute',
                            'top': '13px'
                        });

                        jQuery(content_wrapper + " #main_header a, " + content_wrapper + " .auth-block .link-holder a, " + content_wrapper + " a.signup.signup-btn").removeClass('blazemeter_news_header_untop_position');
                        jQuery(content_wrapper + " #main_header a, " + content_wrapper + " .auth-block .link-holder a, " + content_wrapper + " a.signup.signup-btn").css({
                            'color': '#ffffff'
                        }).addClass('blazemeter_news_header_top_position');
                        jQuery(content_wrapper + " a.signup.signup-btn").removeAttr("id");
                        jQuery(content_wrapper + " .nav-links-list.menu-submenu").removeAttr("id");
                        jQuery(content_wrapper + " .link-holder.signup-link").removeAttr("id");
                        jQuery(content_wrapper + " .welcome").removeAttr("id");
                    }
                });
            }


            if (screen_width <= 4000 && screen_width > 1024) {
                //transparent_header_on_any_page();
            }


            jQuery(".section-usecases .features-groups .group-switch a, .features_page_text_links").removeAttr("style");

            jQuery(".get_started_button_second_main_slide").on('click', function () {
                location.href = "http://info.blazemeter.com/testing_opensourcetools?utm_source=hpbanner&utm_medium=BM&utm_campaign=webinar_mar9_stopwaitingstarttesting";
                return false;
            });


            jQuery('article, .blog-content, .region-header, #main__content--responsive, #main__content').on('click', function(){
                jQuery(".top_main_menu").removeClass('visible');
                jQuery("#main_mobile_hamburger").removeClass('move_hamburger');
                jQuery("#logo_image img").removeClass('hidden_main_logo');
                jQuery(".wrapper_mobile_hamburger").removeClass('moved');
            });


            jQuery('body').on('click', '#main_mobile_hamburger', function(){
                jQuery(".top_main_menu").toggleClass('visible');
                jQuery("#main_mobile_hamburger").toggleClass('move_hamburger');
                jQuery("#logo_image img").toggleClass('hidden_main_logo');
                jQuery(".wrapper_mobile_hamburger").toggleClass('moved');
            });
        }
    };

})(jQuery, Drupal, this, this.document);;
