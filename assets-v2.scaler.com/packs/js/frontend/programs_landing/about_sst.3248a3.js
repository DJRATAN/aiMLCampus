!function(){try{var t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},e=(new Error).stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="2d84b286-90f2-4956-b03d-6e3cef8167ae",t._sentryDebugIdIdentifier="sentry-dbid-2d84b286-90f2-4956-b03d-6e3cef8167ae")}catch(t){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"db086200f718138aa73bffbb900b8feeeccac433"},function(t){function e(e){for(var o,a,r=e[0],l=e[1],c=e[2],u=0,f=[];u<r.length;u++)a=r[u],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&f.push(n[a][0]),n[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);for(d&&d(e);f.length;)f.shift()();return s.push.apply(s,c||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],o=!0,r=1;r<i.length;r++){var l=i[r];0!==n[l]&&(o=!1)}o&&(s.splice(e--,1),t=a(a.s=i[0]))}return t}var o={},n={179:0},s=[];function a(e){if(o[e])return o[e].exports;var i=o[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=o,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(i,o,function(e){return t[e]}.bind(null,o));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="https://assets-v2.scaler.com/packs/";var r=window.webpackJsonp=window.webpackJsonp||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var d=l;s.push(["bujj",0,1,3,5,2,4,33]),i()}({"0rnE":function(t,e,i){var o,n;
/* @preserve
    _____ __ _     __                _
   / ___// /(_)___/ /___  ____      (_)___
  / (_ // // // _  // -_)/ __/_    / /(_-<
  \___//_//_/ \_,_/ \__//_/  (_)__/ //___/
                              |___/

  Version: 1.7.3
  Author: Nick Piscitelli (pickykneee)
  Website: https://nickpiscitelli.com
  Documentation: http://nickpiscitelli.github.io/Glider.js
  License: MIT License
  Release Date: October 25th, 2018

*/void 0===(n="function"==typeof(o=function(){var t="undefined"!=typeof window?window:this,e=t.Glider=function(e,i){var o=this;if(e._glider)return e._glider;if(o.ele=e,o.ele.classList.add("glider"),o.ele._glider=o,o.opt=Object.assign({},{slidesToScroll:1,slidesToShow:1,resizeLock:!0,duration:.5,easing:function(t,e,i,o,n){return o*(e/=n)*e+i}},i),o.animate_id=o.page=o.slide=0,o.arrows={},o._opt=o.opt,o.opt.skipTrack)o.track=o.ele.children[0];else for(o.track=document.createElement("div"),o.ele.appendChild(o.track);1!==o.ele.children.length;)o.track.appendChild(o.ele.children[0]);o.track.classList.add("glider-track"),o.init(),o.resize=o.init.bind(o,!0),o.event(o.ele,"add",{scroll:o.updateControls.bind(o)}),o.event(t,"add",{resize:o.resize})},i=e.prototype;return i.init=function(t,e){var i=this,o=0,n=0;i.slides=i.track.children,[].forEach.call(i.slides,(function(t){t.classList.add("glider-slide")})),i.containerWidth=i.ele.clientWidth;var s=i.settingsBreakpoint();if(e||(e=s),"auto"===i.opt.slidesToShow||void 0!==i.opt._autoSlide){var a=i.containerWidth/i.opt.itemWidth;i.opt._autoSlide=i.opt.slidesToShow=i.opt.exactWidth?a:Math.floor(a)}"auto"===i.opt.slidesToScroll&&(i.opt.slidesToScroll=Math.floor(i.opt.slidesToShow)),i.itemWidth=i.opt.exactWidth?i.opt.itemWidth:i.containerWidth/i.opt.slidesToShow,[].forEach.call(i.slides,(function(t){t.style.height="auto",t.style.width=i.itemWidth+"px",o+=i.itemWidth,n=Math.max(t.offsetHeight,n)})),i.track.style.width=o+"px",i.trackWidth=o,i.isDrag=!1,i.preventClick=!1,i.opt.resizeLock&&i.scrollTo(i.slide*i.itemWidth,0),(s||e)&&(i.bindArrows(),i.buildDots(),i.bindDrag()),i.updateControls(),i.emit(t?"refresh":"loaded")},i.bindDrag=function(){var t=this;t.mouse=t.mouse||t.handleMouse.bind(t);var e=function(){t.mouseDown=void 0,t.ele.classList.remove("drag"),t.isDrag&&(t.preventClick=!0),t.isDrag=!1},i={mouseup:e,mouseleave:e,mousedown:function(e){e.preventDefault(),e.stopPropagation(),t.mouseDown=e.clientX,t.ele.classList.add("drag")},mousemove:t.mouse,click:function(e){t.preventClick&&(e.preventDefault(),e.stopPropagation()),t.preventClick=!1}};t.ele.classList.toggle("draggable",!0===t.opt.draggable),t.event(t.ele,"remove",i),t.opt.draggable&&t.event(t.ele,"add",i)},i.buildDots=function(){var t=this;if(t.opt.dots){if("string"==typeof t.opt.dots?t.dots=document.querySelector(t.opt.dots):t.dots=t.opt.dots,t.dots){t.dots.innerHTML="",t.dots.classList.add("glider-dots");for(var e=0;e<Math.ceil(t.slides.length/t.opt.slidesToShow);++e){var i=document.createElement("button");i.dataset.index=e,i.setAttribute("aria-label","Page "+(e+1)),i.className="glider-dot "+(e?"":"active"),t.event(i,"add",{click:t.scrollItem.bind(t,e,!0)}),t.dots.appendChild(i)}}}else t.dots&&(t.dots.innerHTML="")},i.bindArrows=function(){var t=this;t.opt.arrows?["prev","next"].forEach((function(e){var i=t.opt.arrows[e];i&&("string"==typeof i&&(i=document.querySelector(i)),i._func=i._func||t.scrollItem.bind(t,e),t.event(i,"remove",{click:i._func}),t.event(i,"add",{click:i._func}),t.arrows[e]=i)})):Object.keys(t.arrows).forEach((function(e){var i=t.arrows[e];t.event(i,"remove",{click:i._func})}))},i.updateControls=function(t){var e=this;t&&!e.opt.scrollPropagate&&t.stopPropagation();var i=e.containerWidth>=e.trackWidth;e.opt.rewind||(e.arrows.prev&&e.arrows.prev.classList.toggle("disabled",e.ele.scrollLeft<=0||i),e.arrows.next&&e.arrows.next.classList.toggle("disabled",Math.ceil(e.ele.scrollLeft+e.containerWidth)>=Math.floor(e.trackWidth)||i)),e.slide=Math.round(e.ele.scrollLeft/e.itemWidth),e.page=Math.round(e.ele.scrollLeft/e.containerWidth);var o=e.slide+Math.floor(Math.floor(e.opt.slidesToShow)/2),n=Math.floor(e.opt.slidesToShow)%2?0:o+1;1===Math.floor(e.opt.slidesToShow)&&(n=0),e.ele.scrollLeft+e.containerWidth>=Math.floor(e.trackWidth)&&(e.page=e.dots?e.dots.children.length-1:0),[].forEach.call(e.slides,(function(t,i){var s=t.classList,a=s.contains("visible"),r=e.ele.scrollLeft,l=e.ele.scrollLeft+e.containerWidth,c=e.itemWidth*i,d=c+e.itemWidth;[].forEach.call(s,(function(t){/^left|right/.test(t)&&s.remove(t)})),s.toggle("active",e.slide===i),o===i||n&&n===i?s.add("center"):(s.remove("center"),s.add([i<o?"left":"right",Math.abs(i-(i<o?o:n||o))].join("-")));var u=Math.ceil(c)>=r&&Math.floor(d)<=l;s.toggle("visible",u),u!==a&&e.emit("slide-"+(u?"visible":"hidden"),{slide:i})})),e.dots&&[].forEach.call(e.dots.children,(function(t,i){t.classList.toggle("active",e.page===i)})),t&&e.opt.scrollLock&&(clearTimeout(e.scrollLock),e.scrollLock=setTimeout((function(){clearTimeout(e.scrollLock),Math.abs(e.ele.scrollLeft/e.itemWidth-e.slide)>.02&&(e.mouseDown||e.scrollItem(e.round(e.ele.scrollLeft/e.itemWidth)))}),e.opt.scrollLockDelay||250))},i.scrollItem=function(t,e,i){i&&i.preventDefault();var o=this,n=t;if(++o.animate_id,!0===e)t*=o.containerWidth,t=Math.round(t/o.itemWidth)*o.itemWidth;else{if("string"==typeof t){var s="prev"===t;if(t=o.opt.slidesToScroll%1||o.opt.slidesToShow%1?o.round(o.ele.scrollLeft/o.itemWidth):o.slide,s?t-=o.opt.slidesToScroll:t+=o.opt.slidesToScroll,o.opt.rewind){var a=o.ele.scrollLeft;t=s&&!a?o.slides.length:!s&&a+o.containerWidth>=Math.floor(o.trackWidth)?0:t}}t=Math.max(Math.min(t,o.slides.length),0),o.slide=t,t=o.itemWidth*t}return o.scrollTo(t,o.opt.duration*Math.abs(o.ele.scrollLeft-t),(function(){o.updateControls(),o.emit("animated",{value:n,type:"string"==typeof n?"arrow":e?"dot":"slide"})})),!1},i.settingsBreakpoint=function(){var e=this,i=e._opt.responsive;if(i){i.sort((function(t,e){return e.breakpoint-t.breakpoint}));for(var o=0;o<i.length;++o){var n=i[o];if(t.innerWidth>=n.breakpoint)return e.breakpoint!==n.breakpoint&&(e.opt=Object.assign({},e._opt,n.settings),e.breakpoint=n.breakpoint,!0)}}var s=0!==e.breakpoint;return e.opt=Object.assign({},e._opt),e.breakpoint=0,s},i.scrollTo=function(e,i,o){var n=this,s=(new Date).getTime(),a=n.animate_id,r=function(){var l=(new Date).getTime()-s;n.ele.scrollLeft=n.ele.scrollLeft+(e-n.ele.scrollLeft)*n.opt.easing(0,l,0,1,i),l<i&&a===n.animate_id?t.requestAnimationFrame(r):(n.ele.scrollLeft=e,o&&o.call(n))};t.requestAnimationFrame(r)},i.removeItem=function(t){var e=this;e.slides.length&&(e.track.removeChild(e.slides[t]),e.refresh(!0),e.emit("remove"))},i.addItem=function(t){var e=this;e.track.appendChild(t),e.refresh(!0),e.emit("add")},i.handleMouse=function(t){var e=this;e.mouseDown&&(e.isDrag=!0,e.ele.scrollLeft+=(e.mouseDown-t.clientX)*(e.opt.dragVelocity||3.3),e.mouseDown=t.clientX)},i.round=function(t){var e=1/(this.opt.slidesToScroll%1||1);return Math.round(t*e)/e},i.refresh=function(t){this.init(!0,t)},i.setOption=function(t,e){var i=this;i.breakpoint&&!e?i._opt.responsive.forEach((function(e){e.breakpoint===i.breakpoint&&(e.settings=Object.assign({},e.settings,t))})):i._opt=Object.assign({},i._opt,t),i.breakpoint=0,i.settingsBreakpoint()},i.destroy=function(){var e=this,i=e.ele.cloneNode(!0),o=function(t){t.removeAttribute("style"),[].forEach.call(t.classList,(function(e){/^glider/.test(e)&&t.classList.remove(e)}))};i.children[0].outerHTML=i.children[0].innerHTML,o(i),[].forEach.call(i.getElementsByTagName("*"),o),e.ele.parentNode.replaceChild(i,e.ele),e.event(t,"remove",{resize:e.resize}),e.emit("destroy")},i.emit=function(e,i){var o=new t.CustomEvent("glider-"+e,{bubbles:!this.opt.eventPropagate,detail:i});this.ele.dispatchEvent(o)},i.event=function(t,e,i){var o=t[e+"EventListener"].bind(t);Object.keys(i).forEach((function(t){o(t,i[t])}))},e})?o.call(e,i,e,t):o)||(t.exports=n)},"5aLN":function(t,e,i){"use strict";var o=".tabs__trigger";e.a={initialize:function(){var t=new URLSearchParams(window.location.search).get("tab"),e=document.querySelector("".concat(o,'[data-name="').concat(t,'"]'));null==e||e.click()}}},Q37M:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var o=i("dOFO"),n=i("qTF4"),s=i("42jw");function a(t){return Object(o.a)(t)||Object(n.a)(t)||Object(s.a)()}},SVOY:function(t,e,i){"use strict";var o="".concat("video_library","__yt-video"),n="".concat("video_library","__yt-overlay"),s=document.querySelectorAll(".".concat(o));e.a={initialize:function(){s.forEach((function(t){t.addEventListener("click",(function(){var e=t.parentNode,i=null==e?void 0:e.querySelector(".".concat(n));null==i||i.classList.add("hidden")}))}))}}},UKch:function(t,e,i){
/*!
 * Toastify js 1.8.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */
var o,n;o=this,n=function(t){var e=function(t){return new e.lib.init(t)};function i(t,e){return!(!t||"string"!=typeof e||!(t.className&&t.className.trim().split(/\s+/gi).indexOf(e)>-1))}return e.lib=e.prototype={toastify:"1.8.0",constructor:e,init:function(t){return t||(t={}),this.options={},this.toastElement=null,this.options.text=t.text||"Hi there!",this.options.node=t.node,this.options.duration=0===t.duration?0:t.duration||3e3,this.options.selector=t.selector,this.options.callback=t.callback||function(){},this.options.destination=t.destination,this.options.newWindow=t.newWindow||!1,this.options.close=t.close||!1,this.options.gravity="bottom"===t.gravity?"toastify-bottom":"toastify-top",this.options.positionLeft=t.positionLeft||!1,this.options.position=t.position||"",this.options.backgroundColor=t.backgroundColor,this.options.avatar=t.avatar||"",this.options.className=t.className||"",this.options.stopOnFocus=void 0===t.stopOnFocus||t.stopOnFocus,this.options.onClick=t.onClick,this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var t=document.createElement("div");if(t.className="toastify on "+this.options.className,this.options.position?t.className+=" toastify-"+this.options.position:!0===this.options.positionLeft?(t.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):t.className+=" toastify-right",t.className+=" "+this.options.gravity,this.options.backgroundColor&&(t.style.background=this.options.backgroundColor),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)t.appendChild(this.options.node);else if(t.innerHTML=this.options.text,""!==this.options.avatar){var e=document.createElement("img");e.src=this.options.avatar,e.className="toastify-avatar","left"==this.options.position||!0===this.options.positionLeft?t.appendChild(e):t.insertAdjacentElement("beforeend",e)}if(!0===this.options.close){var i=document.createElement("span");i.innerHTML="&#10006;",i.className="toast-close",i.addEventListener("click",function(t){t.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}.bind(this));var o=window.innerWidth>0?window.innerWidth:screen.width;("left"==this.options.position||!0===this.options.positionLeft)&&o>360?t.insertAdjacentElement("afterbegin",i):t.appendChild(i)}if(this.options.stopOnFocus&&this.options.duration>0){const e=this;t.addEventListener("mouseover",(function(e){window.clearTimeout(t.timeOutValue)})),t.addEventListener("mouseleave",(function(){t.timeOutValue=window.setTimeout((function(){e.removeElement(t)}),e.options.duration)}))}return void 0!==this.options.destination&&t.addEventListener("click",function(t){t.stopPropagation(),!0===this.options.newWindow?window.open(this.options.destination,"_blank"):window.location=this.options.destination}.bind(this)),"function"==typeof this.options.onClick&&void 0===this.options.destination&&t.addEventListener("click",function(t){t.stopPropagation(),this.options.onClick()}.bind(this)),t},showToast:function(){var t;if(this.toastElement=this.buildToast(),!(t=void 0===this.options.selector?document.body:document.getElementById(this.options.selector)))throw"Root element is not defined";return t.insertBefore(this.toastElement,t.firstChild),e.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout(function(){this.removeElement(this.toastElement)}.bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(t){t.className=t.className.replace(" on",""),window.setTimeout(function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),t.parentNode&&t.parentNode.removeChild(t),this.options.callback.call(t),e.reposition()}.bind(this),400)}},e.reposition=function(){for(var t,e={top:15,bottom:15},o={top:15,bottom:15},n={top:15,bottom:15},s=document.getElementsByClassName("toastify"),a=0;a<s.length;a++){t=!0===i(s[a],"toastify-top")?"toastify-top":"toastify-bottom";var r=s[a].offsetHeight;t=t.substr(9,t.length-1),(window.innerWidth>0?window.innerWidth:screen.width)<=360?(s[a].style[t]=n[t]+"px",n[t]+=r+15):!0===i(s[a],"toastify-left")?(s[a].style[t]=e[t]+"px",e[t]+=r+15):(s[a].style[t]=o[t]+"px",o[t]+=r+15)}return this},e.lib.init.prototype=e.lib,e},t.exports?t.exports=n():o.Toastify=n()},bujj:function(t,e,i){"use strict";i.r(e);var o=i("RUa/"),n=i("GTbB"),s=i("W0PK"),a=i("5aLN"),r=i("2/eO"),l=i("k5BP"),c=i("m4Uv"),d=i("j4gs"),u=i("G41i"),f=i("g5NP"),p=i("SVOY"),h=i("vuml"),m=i("R1bl"),v=i("nvkq"),g=i("bP8M"),b=i("wLD4");window.addEventListener("load",(function(){Object(o.r)()&&(window.header=new n.m("main-site-header",{inPageLinks:!0,sticky:!0})),n.e.initialize(),h.a.initialize(),f.a.initialize(),c.a.initialize(),s.a.initialize(),n.B.initialize(),n.b.initialize(),n.q.initialize(),n.C.initialize(),u.a.initialize(),g.a.initialize(),r.a.initialize(),p.a.initialize(),new m.a("waitlist-modal","waitlist-login-mobile"),v.a.initialize(),d.a.initialize(),a.a.initialize(),l.a.initialize(),b.a.initialize()})),window.addEventListener("tracking_initialized",(function(){var t;null===(t=window.TrackingHelper)||void 0===t||t.setContext("mix_panel_data",{product:"scaler_school_of_technology",subproduct:"faq"})}))},g5NP:function(t,e,i){"use strict";var o=i("RUa/");e.a={initialize:function(){window.addEventListener("scroll",(function(){var t=document.querySelector(".header__nav-item--active");Object(o.o)()?null==t||t.scrollIntoView(!0):null==t||t.scrollIntoView({behavior:"smooth",inline:"center"})}))}}},j4gs:function(t,e,i){"use strict";var o=i("q8Yx"),n=i("gOfx"),s="ug-exit-intent-modal",a="event-exit-intent-modal",r=".ug-exit-intent-modal__call-button",l=document.getElementById(s);function c(){return!sessionStorage.getItem(s)}function d(){sessionStorage.setItem(s,"true")}function u(t){(function(t){return!t.toElement&&!t.relatedTarget&&t.clientY<10})(t)&&(document.removeEventListener("mouseout",u),o.a.open(s,!0))}function f(t){t===s&&d()}function p(t){t===s&&(o.a.close(s),d())}function h(){Object(n.a)()?c&&l.classList.contains(a)&&setTimeout((function(){o.a.open(s,!0),d()}),15e3):document.addEventListener("mouseout",u)}e.a={initialize:function(){var t;null===(t=document.querySelector(r))||void 0===t||t.addEventListener("click",(function(){p(s)})),l&&c()&&(h(),o.b.on("open",f),o.b.on("dismissed",p))}}},m4Uv:function(t,e,i){"use strict";var o=function(t,e){t&&e&&e.addEventListener("click",(function(){if(!t.querySelector("iframe")){var i=function(t){var e=document.createElement("iframe");return e.width=t.width,e.height=t.height,e.setAttribute("allowfullscreen",""),e.setAttribute("frameborder","0"),e.setAttribute("allow","autoplay"),e}(e);e.classList.add("hidden"),t.appendChild(i),function(t,e,i){t.appendChild(e),function(t,e){e.setAttribute("src","".concat(t,"?autoplay=1&rel=0"))}(i,e)}(t,i,e.dataset.url)}}))};e.a={initialize:function(){document.querySelectorAll(".yt-video-embedding").forEach((function(t){return o(t,t.querySelector(":scope > img"))}))}}},nvkq:function(t,e,i){"use strict";var o=function(){var t,e=new URLSearchParams(window.location.search).get("open-waitlist-form");return(null===(t=window.GTMData)||void 0===t?void 0:t.isLoggedIn)&&"true"===sessionStorage.sstRegistration&&"true"===e};e.a={initialize:function(){if(o()){var t,e=window.GTMData,i=e.email,n=e.isNewUser;null===(t=window.GTMtracker)||void 0===t||t.trackEvent("loginWithPhoneFormatter",{email:i,newUser:n})}sessionStorage.removeItem("sstRegistration")}}},wLD4:function(t,e,i){"use strict";var o=i("Z/sY"),n=i.n(o),s="f-action",a="f-action--active";function r(){return window.pageYOffset||document.documentElement.scrollTop}e.a={initialize:function(){var t=document.querySelector(".".concat(s));if(t){var e=t.getAttribute("data-target"),i=document.getElementById(e),o=r(),l=null,c=n()((function(){var e=r();e<(i?window.pageYOffset+i.getBoundingClientRect().top+i.offsetHeight:window.innerHeight)?(clearTimeout(l),t.classList.remove(a)):e>o&&(l=setTimeout((function(){t.classList.add(a)}),300)),o=e}),300);window.addEventListener("scroll",c)}}}}});
//# sourceMappingURL=about_sst.3248a3.js.map