"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[21606],{542473:e=>{e.exports=function(){}},400119:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(667294),i=n(883119),a=n(195480),o=n(214877),l=n(549629),c=n(205841),s=n(140017),u=n(572345),d=n(561916),v=n(785893);function h({component:e,cropSource:t,fadeBottomEdge:n,filterOptions:a,filterType:l,handleFilterChange:h,maxContentHeight:f,paddingX:p,showVerifiedMerchants:m,uiType:g,viewParameter:y,viewType:_}){let x=(0,s.ZP)(),{logContextEvent:b}=(0,o.v)(),w=n=>{let r=a[n];b({aux_data:{commerce_data:JSON.stringify({filter_value:r.string_value??r.numeric_value??r.search_type,select:!r.checked,source:(0,d.Z)({cropSource:t,viewType:_})}),filter_type:l},component:e,event_type:101,view_parameter:y,view_type:_}),h(n)},[j,P]=(0,r.useState)(!1),k=(0,r.useRef)(null),D=(0,r.useCallback)(()=>{if(!n||!k.current)return;let{scrollTop:e,scrollHeight:t,clientHeight:r}=k.current;P(t-e-r<10)},[n]);return(0,r.useEffect)(()=>{n&&D()}),(0,v.jsxs)(i.xu,{maxHeight:f||void 0,position:"relative",children:[(0,v.jsxs)(i.xu,{ref:k,maxHeight:f||void 0,onScroll:D,overflow:"auto",paddingX:p,children:["check-circles"===g&&a.map(({label:e,image_url:t,is_verified_merchant:n,checked:r},a)=>(0,v.jsx)(i.iP,{onTap:()=>w(a),children:(0,v.jsxs)(i.xu,{alignItems:"center","data-test-id":"multi-select-option",direction:"row",display:"flex",marginBottom:3,children:[(0,v.jsx)(i.xu,{marginEnd:3,children:(0,v.jsx)(c.qE,{name:e,size:"sm",src:t})}),(0,v.jsxs)(i.kC,{alignItems:"center",direction:"row",flex:"grow",children:[(0,v.jsx)(i.xv,{lineClamp:1,overflow:"breakAll",children:e}),m&&n&&(0,v.jsx)(i.xu,{marginStart:1,children:(0,v.jsx)(u.Z,{isVerifiedMerchant:!0,size:"xs"})})]}),(0,v.jsx)(i.xu,{"data-test-id":r?"option-selected":void 0,margin:-2,marginBottom:-3,marginTop:-3,children:(0,v.jsx)(i.hU,{accessibilityLabel:x.bt("Options de filtre de domaine", "Domain Filter Option", "UnifiedFilter.MultiSelectFilter.domainFilterOptionAccessibilityLabel", undefined, true),icon:r?"check-circle":"circle",iconColor:"darkGray",onClick:()=>w(a),size:"lg"})})]})},e)),"check-boxes"===g&&a.map(({label:e,image_url:t,is_verified_merchant:n,checked:r},a)=>(0,v.jsxs)(i.xu,{alignItems:"center","data-test-id":"multi-select-option",direction:"row",display:"flex",marginBottom:3,children:[(0,v.jsx)(i.xu,{marginEnd:3,children:t?.startsWith("color_")?(0,v.jsx)(i.xu,{borderStyle:"sm",dangerouslySetInlineStyle:{__style:{backgroundColor:t.split("_")[1]}},height:20,rounding:"circle",width:20}):(0,v.jsx)(c.qE,{name:e,size:"sm",src:t})}),(0,v.jsxs)(i.kC,{alignItems:"center",direction:"row",flex:"grow",children:[(0,v.jsx)(i.__,{htmlFor:`multi-select-filter--${e}`,children:(0,v.jsx)(i.xv,{lineClamp:1,overflow:"breakAll",children:e})}),m&&n&&(0,v.jsx)(i.xu,{marginStart:1,children:(0,v.jsx)(u.Z,{isVerifiedMerchant:!0,size:"xs"})})]}),(0,v.jsx)(i.xu,{"data-test-id":r?"option-selected":void 0,margin:1,children:(0,v.jsx)(i.XZ,{checked:r,id:`multi-select-filter--${e}`,onChange:()=>w(a)})})]},e))]}),n&&(0,v.jsx)(i.xu,{bottom:!0,dangerouslySetInlineStyle:{__style:{background:"linear-gradient(0deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)",pointerEvents:"none",transition:"opacity 0.1s",opacity:j?0:1}},"data-test-id":"multi-select-filter-fade-bottom-edge",height:30,position:"absolute",width:"100%"})]})}function f({children:e,filterOptions:t,filterType:n,title:l,viewLogData:c,viewParameter:u,viewType:d}){let{logContextEvent:h}=(0,o.v)(),f=(0,s.ZP)(),p=(0,a.Z)(),[m,g]=(0,r.useState)(!0),y=p?14325:13469;return(0,v.jsxs)(r.Fragment,{children:[(0,v.jsx)(i.xu,{marginBottom:2,children:(0,v.jsxs)(i.kC,{alignItems:"center",justifyContent:"between",children:[(0,v.jsx)(i.xv,{weight:"bold",children:l||f.bt("Vendeurs", "Sellers", "UnifiedFilter.MultiSelectFilter.sellersHeaderText", undefined, true)}),(0,v.jsx)(i.xu,{flex:"none",children:(0,v.jsx)(i.hU,{accessibilityLabel:f.bt("Filtre de domaine", "Domain filter", "UnifiedFilter.MultiSelectFilter.domainFilterAccessibilityLabel", undefined, true),icon:m?"arrow-up":"arrow-down",iconColor:"darkGray",onClick:()=>{g(!m),h({aux_data:{commerce_data:JSON.stringify({filter:m?"collapsed":"expanded"}),filter_type:n},component:y,element:p?13522:11547,event_type:101,view_parameter:u,view_type:d}),m||h(c)},size:"sm"})})]})}),m?e:(0,v.jsx)(i.xu,{width:"80%",children:(0,v.jsx)(i.xv,{color:"subtle",size:"200",children:function(e=[],t){let n=e.filter(e=>e.checked),r=n.length;return 0===r?t.bt("Tous", "All", "UnifiedFilter.MultiSelectFilter.allDomainsSelectedText", undefined, true):`(${r}) ${n.map(e=>e.label).join(", ")}`}(t,f)})})]})}function p({cropSource:e,fadeBottomEdge:t,filterOptions:n,filterType:r,handleFilterChange:i,isCollapsible:c,maxContentHeight:s,paddingX:u,showVerifiedMerchants:p,title:m,uiType:g,viewParameter:y,viewType:_}){let{logContextEvent:x}=(0,o.v)(),b=(0,a.Z)()?14325:13469,w={aux_data:{commerce_data:JSON.stringify({source:(0,d.Z)({cropSource:e,viewType:_})}),filter_type:r},component:b,event_type:13,view_parameter:y,view_type:_},j=(0,v.jsx)(h,{component:b,cropSource:e,fadeBottomEdge:t,filterOptions:n,filterType:r,handleFilterChange:t=>{let a=n[t];x({aux_data:{commerce_data:JSON.stringify({filter_value:a.string_value??a.numeric_value??a.search_type,select:!a.checked,source:(0,d.Z)({cropSource:e,viewType:_})}),filter_type:r},component:b,event_type:101,view_parameter:y,view_type:_}),i(t)},maxContentHeight:s,paddingX:u,showVerifiedMerchants:p,uiType:g,viewParameter:y,viewType:_});return(0,v.jsx)(l.Z,{log:w,children:c?(0,v.jsx)(f,{filterOptions:n,filterType:r,title:m,viewLogData:w,viewParameter:y,viewType:_,children:j}):j})}},412421:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(667294),i=n(883119),a=n(195480),o=n(214877),l=n(367295),c=n(140017),s=n(494125),u=n(750701),d=n(561916),v=n(785893);function h({children:e,currencyCode:t,defaultMaxPrice:n,defaultMinPrice:s,filterType:u,logViewEvent:d,maxPrice:h,minPrice:f,title:p,viewParameter:m,viewType:g}){let{logContextEvent:y}=(0,o.v)(),_=(0,c.ZP)(),x=(0,a.Z)(),b=l.XD[t]||"",w=Math.ceil(n),j=Math.floor(s),[P,k]=(0,r.useState)(!0),D=x?14324:13468;return(0,v.jsxs)(r.Fragment,{children:[(0,v.jsxs)(i.kC,{alignItems:"center",justifyContent:"between",children:[(0,v.jsx)(i.xu,{"data-test-id":"price-filter-label",children:(0,v.jsx)(i.xv,{weight:"bold",children:p||_.bt("Prix", "Price", "Header of product price filter", undefined, true)})}),(0,v.jsx)(i.xu,{flex:"none",children:(0,v.jsx)(i.hU,{accessibilityLabel:_.bt("Filtre de prix", "Price filter", "accessibility label for the icon button to open or close price filter", undefined, true),icon:P?"arrow-up":"arrow-down",iconColor:"darkGray",onClick:()=>{k(!P),y({event_type:101,component:D,element:x?13522:11547,view_type:g,view_parameter:m,aux_data:{commerce_data:JSON.stringify({filter:P?"collapsed":"expanded"}),filter_type:u}}),P||d()},size:"sm"})})]}),P?e:(0,v.jsx)(i.xv,{color:"subtle",size:"200",children:-1===h&&-1===f?_.bt("Tous", "All", "text indicates that no price filter is currently applied for filtering", undefined, true):-1===h?`${b}${f} – ${b}${w}+`:-1===f?`${b}${j} – ${b}${h}`:`${b}${f} – ${b}${h}`})]})}function f({cropSource:e,currencyCode:t,defaultMaxPrice:n,defaultMinPrice:r,handleMaxPriceChange:a,handleMinPriceChange:o,instructions:l,maxPrice:c,minPrice:s,onRangeChange:d}){return(0,v.jsx)(i.xu,{paddingY:4,children:(0,v.jsx)(u.Z,{cropSource:e,currencyType:t,handlePriceChange:([e,t])=>{d?.(),e!==s&&o(e),t!==c&&a(t)},instructions:l||"",lowerBound:r,maxPrice:c,minPrice:s,upperBound:n})})}function p({cropSource:e,currencyCode:t,defaultMaxPrice:n,defaultMinPrice:i,filterType:l,handleMaxPriceChange:c,handleMinPriceChange:u,instructions:p,isCollapsible:m,maxPrice:g,minPrice:y,onRangeChange:_,title:x,viewParameter:b,viewType:w}){let{logContextEvent:j}=(0,o.v)(),P=(0,a.Z)(),k=()=>{j({event_type:13,component:P?14324:13468,view_type:w,view_parameter:b,aux_data:{commerce_data:JSON.stringify({source:(0,d.Z)({cropSource:e,viewType:w})}),filter_type:l}})};return(0,s.Z)(()=>{k()}),(0,v.jsx)(r.Fragment,{children:m?(0,v.jsx)(h,{currencyCode:t,defaultMaxPrice:n,defaultMinPrice:i,filterType:l,logViewEvent:k,maxPrice:g,minPrice:y,title:x,viewParameter:b,viewType:w,children:(0,v.jsx)(f,{cropSource:e,currencyCode:t,defaultMaxPrice:n,defaultMinPrice:i,handleMaxPriceChange:c,handleMinPriceChange:u,instructions:p,isCollapsible:!0,maxPrice:g,minPrice:y,onRangeChange:_})}):(0,v.jsx)(f,{cropSource:e,currencyCode:t,defaultMaxPrice:n,defaultMinPrice:i,handleMaxPriceChange:c,handleMinPriceChange:u,instructions:p,maxPrice:g,minPrice:y,onRangeChange:_})})}},195480:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(340523),i=n(149722);function a(){let{isAuth:e,country:t}=(0,i.Z)(),{checkExperiment:n}=(0,r.F)();if(!e)return!1;let{anyEnabled:a}=n("web_search_unified_content_filters_international");return"US"===t||a}},367295:(e,t,n)=>{n.d(t,{MF:()=>a,PB:()=>o,Ul:()=>l,XD:()=>r});let r={AUD:"A$",BRL:"R$",CAD:"$",CZK:"Kč",DKK:"kr",EUR:"€",GBP:"£",HUF:"Ft",MXN:"$",NOK:"kr",NZD:"NZ$",RON:"lei",SEK:"kr",USD:"$",JPY:"¥",CHF:"₣"},i=function(e){return 1.1.toLocaleString(e).substring(1,2)},a=function(e,t){return","===i(t)&&e&&e.length>0&&!isNaN(e)?e.replace(".",","):e},o=function(e,t){return","===i(t)&&e?e.replace(",","."):e};function l(e,t,n,r=!1){let{minimumFractionDigits:i,maximumFractionDigits:a}=new Intl.NumberFormat(t,{style:"currency",currency:n}).resolvedOptions(),o=void 0===i?2:i,c=void 0===a?2:a;return e.toLocaleString(t,{maximumFractionDigits:r&&c>0?3:c,minimumFractionDigits:r&&o>0?3:o})}},490166:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(883119),i=n(785893);function a({children:e,onMouseEnter:t,onMouseLeave:n,onTouch:a,rounding:o,fullWidth:l=!1,pressState:c="none",accessibilityLabel:s,role:u}){let d=(Array.isArray(c)?c:[c]).includes("compress");return(0,i.jsx)(r.iP,{accessibilityLabel:s,fullWidth:l,onMouseEnter:t&&(({event:e})=>t(e)),onMouseLeave:n&&(({event:e})=>n(e)),onTap:a&&(({event:e})=>a(e)),role:u,rounding:o,tapStyle:d?"compress":"none",children:e})}},943484:(e,t,n)=>{n.d(t,{Z:()=>r});function r(e){return e&&5!==e?4===e?"stela":null:"related_products"}},597553:(e,t,n)=>{n.d(t,{VF:()=>i,pG:()=>r,vc:()=>a});let r=348,i=7,a=4},561916:(e,t,n)=>{n.d(t,{Z:()=>r});function r({cropSource:e,viewType:t}){return 2===t?"search":e&&5!==e?4===e?"stela":null:"related_products"}},750701:(e,t,n)=>{n.d(t,{Z:()=>ei});var r=n(667294),i=n(542473),a=n.n(i),o=Math.sqrt(50),l=Math.sqrt(10),c=Math.sqrt(2);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach(function(t){var r;r=n[t],t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function d(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t,n){return t&&v(e.prototype,t),n&&v(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function f(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function g(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=p(e);return n=t?Reflect.construct(r,arguments,p(this).constructor):r.apply(this,arguments),function(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return g(e)}(this,n)}}function _(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var a=[],o=!0,l=!1;try{for(i=i.call(e);!(o=(n=i.next()).done)&&(a.push(n.value),!t||a.length!==t);o=!0);}catch(e){l=!0,r=e}finally{try{o||null==i.return||i.return()}finally{if(l)throw r}}return a}}(e,t)||b(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e){return function(e){if(Array.isArray(e))return w(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||b(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){if(e){if("string"==typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return w(e,t)}}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var j="react-compound-slider:";function P(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(t,n){return t.val>n.val?e?-1:1:n.val>t.val?e?1:-1:0}}function k(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=e.findIndex(function(e){return e.key===t});if(-1!==i){var a=e[i],o=a.key;return a.val===n?e:[].concat(x(e.slice(0,i)),[{key:o,val:n}],x(e.slice(i+1))).sort(P(r))}return e}function D(e,t){if(!e)return[0,0];var n=e.getBoundingClientRect();return[t?n.top:n.left,t?n.bottom:n.right]}function S(e){var t=e.type,n=e.touches;return!n||n.length>1||"touchend"===(void 0===t?"":t).toLowerCase()&&n.length>0}function M(e,t){return e?t.touches[0].clientY:t.touches[0].pageX}function T(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,i=0;return{handles:e.map(function(e){var t=n.getValue(e);return e!==t&&(i+=1,a()(!r,"".concat(j," Invalid value encountered. Changing ").concat(e," to ").concat(t,"."))),t}).map(function(e,t){return{key:"$$-".concat(t),val:e}}).sort(P(t)),changes:i}}function E(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.forEach(function(t){return t&&t(e)})}}var C=function(){return{value:0,percent:0}},A=function(e){f(n,e);var t=y(n);function n(){var e;d(this,n);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).getRailProps=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.props,r=n.emitMouse,i=n.emitTouch;return u(u({},t),{},{onMouseDown:E(t&&t.onMouseDown,r),onTouchStart:E(t&&t.onTouchStart,i)})},e}return h(n,[{key:"render",value:function(){var e=this.getRailProps,t=this.props,n=t.getEventData,i=t.activeHandleID,a=(0,t.children)({getEventData:n||C,activeHandleID:void 0===i?"":i,getRailProps:e});return a&&r.Children.only(a)}}]),n}(r.Component),O=function(e){f(n,e);var t=y(n);function n(){var e;d(this,n);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).autofocus=function(e){e.target instanceof HTMLElement&&e.target.focus()},e.getHandleProps=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.props,i=r.emitKeyboard,a=r.emitMouse,o=r.emitTouch;return u(u({},n),{},{onKeyDown:E(n&&n.onKeyDown,function(e){return i&&i(e,t)}),onMouseDown:E(n&&n.onMouseDown,e.autofocus,function(e){return a&&a(e,t)}),onTouchStart:E(n&&n.onTouchStart,function(e){return o&&o(e,t)})})},e}return h(n,[{key:"render",value:function(){var e=this.getHandleProps,t=this.props,n=t.activeHandleID,i=t.children,a=t.handles,o=i({handles:void 0===a?[]:a,activeHandleID:void 0===n?"":n,getHandleProps:e});return o&&r.Children.only(o)}}]),n}(r.Component),I=function(){function e(){d(this,e),this.interpolator=void 0,this.domain=[0,1],this.range=[0,1],this.domain=[0,1],this.range=[0,1],this.interpolator=null}return h(e,[{key:"createInterpolator",value:function(e,t){var n=this,r=e[0],i=e[1],a=t[0],o=t[1];return i<r?function(e){return n.interpolateValue(o,a)(n.deinterpolateValue(i,r)(e))}:function(e){return n.interpolateValue(a,o)(n.deinterpolateValue(r,i)(e))}}},{key:"interpolateValue",value:function(e,t){return t-=e=+e,function(n){return e+t*n}}},{key:"deinterpolateValue",value:function(e,t){return(t-=e=+e)?function(n){return(n-e)/t}:function(){return t}}},{key:"rescale",value:function(){return this.interpolator=null,this}},{key:"getValue",value:function(e){var t=this.domain,n=this.range;return(this.interpolator||(this.interpolator=this.createInterpolator(t,n)))(+e)}},{key:"setDomain",value:function(e){return this.domain=[e[0],e[1]],this.rescale(),this}},{key:"getDomain",value:function(){return this.domain}},{key:"setRange",value:function(e){return this.range=[e[0],e[1]],this}},{key:"getRange",value:function(){return this.range}},{key:"getTicks",value:function(e){var t=this.domain;return function(e,t,n){var r,i,a,s,u,d,v,h=-1;if(n=+n,(e=+e)==(t=+t)&&n>0)return[e];if((s=t<e)&&(u=e,e=t,t=u),0==(i=Math.floor(Math.log(r=(t-e)/Math.max(0,n))/Math.LN10),a=r/Math.pow(10,i),v=i>=0?(a>=o?10:a>=l?5:a>=c?2:1)*Math.pow(10,i):-Math.pow(10,-i)/(a>=o?10:a>=l?5:a>=c?2:1))||!isFinite(v))return[];if(v>0){let n=Math.round(e/v),r=Math.round(t/v);for(n*v<e&&++n,r*v>t&&--r,d=Array(u=r-n+1);++h<u;)d[h]=(n+h)*v}else{let n=Math.round(e*(v=-v)),r=Math.round(t*v);for(n/v<e&&++n,r/v>t&&--r,d=Array(u=r-n+1);++h<u;)d[h]=(n+h)/v}return s&&d.reverse(),d}(t[0],t[t.length-1],e||10)}}]),e}(),F=function(){return{value:0,percent:0}},H=function(e){f(n,e);var t=y(n);function n(){return d(this,n),t.apply(this,arguments)}return h(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.values,i=e.scale,a=void 0===i?new I:i,o=e.count,l=e.getEventData,c=e.activeHandleID,s=t({getEventData:void 0===l?F:l,activeHandleID:void 0===c?"":c,ticks:(n||a.getTicks(void 0===o?10:o)).map(function(e){return{id:"$$-".concat(e),value:e,percent:a.getValue(e)}})});return s&&r.Children.only(s)}}]),n}(r.Component),L=function(){return{value:0,percent:0}},Z=function(e){f(n,e);var t=y(n);function n(){var e;d(this,n);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).getTrackProps=function(t){var n=e.props,r=n.emitMouse,i=n.emitTouch;return u(u({},t||{}),{},{onMouseDown:E(t&&t.onMouseDown,r),onTouchStart:E(t&&t.onTouchStart,i)})},e}return h(n,[{key:"render",value:function(){for(var e=this.getTrackProps,t=this.props,n=t.children,i=t.left,a=void 0===i||i,o=t.right,l=void 0===o||o,c=t.scale,s=void 0===c?new I:c,u=t.handles,d=void 0===u?[]:u,v=t.getEventData,h=t.activeHandleID,f=s.getDomain(),p=[],m=0;m<d.length+1;m++){var g=d[m-1],y=d[m];0===m&&!0===a?g={id:"$",value:f[0],percent:0}:m===d.length&&!0===l&&(y={id:"$",value:f[1],percent:100}),g&&y&&p.push({id:"".concat(g.id,"-").concat(y.id),source:g,target:y})}var _=n({getEventData:void 0===v?L:v,activeHandleID:void 0===h?"":h,tracks:p,getTrackProps:e});return _&&r.Children.only(_)}}]),n}(r.Component);function R(e,t,n){return Math.min(Math.max(e,t),n)}var $=h(function e(){var t=this;d(this,e),this.step=1,this.domain=[0,1],this.range=[0,1],this.setDomain=function(e){return t.domain=[e[0],e[1]],t},this.setRange=function(e){return t.range=[e[0],e[1]],t},this.setStep=function(e){return t.step=e,t},this.getValue=function(e){var n=_(t.domain,2),r=n[0],i=n[1],a=_(t.range,2),o=a[0],l=a[1],c=t.step,s=c*Math.round((R(e,r,i)-r)/(i-r)*(l-o)/c)+o;return R(s,o<l?o:l,l>o?l:o)}}),U="undefined"!=typeof window&&"undefined"!=typeof document,z=function(){},V=function(e){if(!(0,r.isValidElement)(e))return!1;var t=e.type,n=t?t.name:"";return n===O.name||n===A.name||n===H.name||n===Z.name},N=function(e,t,n,r){var i=r?e-t:e+t;return r?Math.max(n[0],i):Math.min(n[1],i)},B=function(e,t,n,r){var i=r?e+t:e-t;return r?Math.min(n[1],i):Math.max(n[0],i)},K=[0,100],Y=function(e){f(n,e);var t=y(n);function n(){var e;d(this,n);for(var i=arguments.length,a=Array(i),o=0;o<i;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={step:.1,values:[],domain:K,handles:[],reversed:!1,activeHandleID:"",valueToPerc:null,valueToStep:null,pixelToStep:null},e.slider=r.createRef(),e.onKeyDown=function(t,n){var r=["ArrowRight","ArrowUp"],i=["ArrowDown","ArrowLeft"],a=g(e),o=a.state.handles,l=a.props,c=l.step,s=void 0===c?.1:c,u=l.reversed,d=void 0!==u&&u,v=l.vertical,h=l.domain,f=void 0===h?[0,100]:h,p=t.key||"".concat(t.keyCode);if(r.concat(i).includes(p)){if(void 0!==v&&v){var m=[i,r];r=m[0],i=m[1]}t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault();var y=o.find(function(e){return e.key===n});if(y){var _=y.val,x=_;r.includes(p)?x=N(_,s,f,d):i.includes(p)&&(x=B(_,s,f,d));var b=o.map(function(e){return e.key===n?{key:e.key,val:x}:e});e.submitUpdate(b,!0)}}},e.onMouseDown=function(t,n){e.onStart(t,n,!1)},e.onTouchStart=function(t,n){S(t)||e.onStart(t,n,!0)},e.getEventData=function(t,n){var r,i=g(e),a=i.state,o=a.pixelToStep,l=a.valueToPerc,c=i.props.vertical;return o.setDomain(D(e.slider.current,c)),n&&t instanceof TouchEvent?r=o.getValue(M(c,t)):t instanceof MouseEvent&&(r=o.getValue(c?t.clientY:t.pageX)),{value:r,percent:l.getValue(r)}},e.onMouseMove=function(t){var n=g(e),r=n.state,i=r.handles,a=r.pixelToStep,o=r.activeHandleID,l=n.props,c=l.vertical,s=l.reversed;a.setDomain(D(e.slider.current,c));var u=k(i,void 0===o?"":o,a.getValue(c?t.clientY:t.pageX),void 0!==s&&s);e.submitUpdate(u)},e.onTouchMove=function(t){var n=g(e),r=n.state,i=r.handles,a=r.pixelToStep,o=r.activeHandleID,l=n.props,c=l.vertical,s=l.reversed;if(!(null===a||S(t))){a.setDomain(D(e.slider.current,c));var u=k(i,o,a.getValue(M(c,t)),s);e.submitUpdate(u)}},e.onMouseUp=function(){var t=g(e),n=t.state,r=n.handles,i=void 0===r?[]:r,a=n.activeHandleID,o=t.props,l=o.onChange,c=void 0===l?z:l,s=o.onSlideEnd,u=void 0===s?z:s;c(i.map(function(e){return e.val})),u(i.map(function(e){return e.val}),{activeHandleID:a}),e.setState({activeHandleID:""}),U&&(document.removeEventListener("mousemove",e.onMouseMove),document.removeEventListener("mouseup",e.onMouseUp))},e.onTouchEnd=function(){var t=g(e),n=t.state,r=n.handles,i=n.activeHandleID,a=t.props,o=a.onChange,l=void 0===o?z:o,c=a.onSlideEnd,s=void 0===c?z:c;l(r.map(function(e){return e.val})),s(r.map(function(e){return e.val}),{activeHandleID:i}),e.setState({activeHandleID:""}),U&&(document.removeEventListener("touchmove",e.onTouchMove),document.removeEventListener("touchend",e.onTouchEnd))},e}return h(n,[{key:"componentDidMount",value:function(){var e=this.state.pixelToStep,t=this.props.vertical;e.setDomain(D(this.slider.current,t))}},{key:"componentWillUnmount",value:function(){this.removeListeners()}},{key:"removeListeners",value:function(){U&&(document.removeEventListener("mousemove",this.onMouseMove),document.removeEventListener("mouseup",this.onMouseUp),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"onStart",value:function(e,t,n){var r=this.state.handles,i=this.props.onSlideStart,a=void 0===i?z:i;!n&&e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),r.find(function(e){return e.key===t})?(this.setState({activeHandleID:t}),a(r.map(function(e){return e.val}),{activeHandleID:t}),n?this.addTouchEvents():this.addMouseEvents()):(this.setState({activeHandleID:""}),this.handleRailAndTrackClicks(e,n))}},{key:"handleRailAndTrackClicks",value:function(e,t){var n,r=this,i=this.state,a=i.handles,o=i.pixelToStep,l=this.props,c=l.vertical,s=l.reversed,u=this.slider;o.setDomain(D(u.current,c)),n=t?o.getValue(M(c,e)):o.getValue(c?e.clientY:e.pageX);for(var d="",v=1/0,h=0;h<a.length;h++){var f=a[h],p=f.key,m=Math.abs(f.val-n);m<v&&(d=p,v=m)}var g=k(a,d,n,void 0!==s&&s);this.setState({activeHandleID:d},function(){r.submitUpdate(g,!0),t?r.addTouchEvents():r.addMouseEvents()})}},{key:"addMouseEvents",value:function(){U&&(document.addEventListener("mousemove",this.onMouseMove),document.addEventListener("mouseup",this.onMouseUp))}},{key:"addTouchEvents",value:function(){U&&(document.addEventListener("touchmove",this.onTouchMove),document.addEventListener("touchend",this.onTouchEnd))}},{key:"submitUpdate",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.props,r=n.mode,i=void 0===r?1:r,o=n.step,l=void 0===o?.1:o,c=n.onUpdate,s=void 0===c?z:c,u=n.onChange,d=void 0===u?z:u,v=n.reversed,h=void 0!==v&&v,f=this.state.valueToStep.getValue;this.setState(function(n){var r=n.handles,o=[];if("function"==typeof i)o=i(r,e,l,h,f),a()(Array.isArray(o),"Custom mode function did not return an array.");else switch(i){case 1:o=e;break;case 2:o=function(e,t){for(var n=0;n<e.length;n++)if(e[n].key!==t[n].key||t[n+1]&&t[n].val===t[n+1].val)return e;return t}(r,e);break;case 3:o=function e(t,n,r,i,a){for(var o=-1,l=!0,c=0;c<t.length;c++){var s=t[c],u=n[c];if(!u||u.key!==s.key)return t;u.val!==s.val&&(o=c,l=u.val-s.val>0)}if(-1===o)return t;for(var d=l?r:-r,v=0;v<n.length;v++){var h=n[v],f=n[v+1];if(f&&h.val===f.val){if(v===o){var p=f.val+d;if(a(p)!==p)return t;var m=k(n,f.key,f.val+d,i),g=e(n,m,r,i,a);if(g===n)return t;return g}var y=h.val+d;if(a(y)!==y)return t;var _=k(n,h.key,h.val+d,i),x=e(n,_,r,i,a);if(x===n)return t;return x}}return n}(r,e,l,h,f);break;default:o=e,a()(!1,"".concat(j," Invalid mode value."))}return s(o.map(function(e){return e.val})),t&&d(o.map(function(e){return e.val})),{handles:o}})}},{key:"render",value:function(){var e=this,t=this.state,n=t.handles,i=t.valueToPerc,a=t.activeHandleID,o=this.props,l=o.className,c=o.rootStyle,s=void 0===c?{}:c,d=o.rootProps,v=void 0===d?{}:d,h=o.component,f=void 0===h?"div":h,p=o.disabled,m=void 0!==p&&p,g=o.flatten,y=n.map(function(e){var t=e.key,n=e.val;return{id:t,value:n,percent:i.getValue(n)}}),_=r.Children.map(this.props.children,function(t){return!0===V(t)?r.cloneElement(t,{scale:i,handles:y,activeHandleID:a,getEventData:e.getEventData,emitKeyboard:m?z:e.onKeyDown,emitMouse:m?z:e.onMouseDown,emitTouch:m?z:e.onTouchStart}):t});return void 0!==g&&g?r.createElement(r.Fragment,null,r.createElement(f,u(u({},v),{},{style:s,className:l,ref:this.slider})),_):r.createElement(r.Fragment,null,r.createElement(f,u(u({},v),{},{style:s,className:l,ref:this.slider}),_))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n,r,i=e.step,o=void 0===i?.1:i,l=e.values,c=e.domain,s=void 0===c?K:c,u=e.reversed,d=void 0!==u&&u,v=e.onUpdate,h=void 0===v?z:v,f=e.onChange,p=void 0===f?z:f,m=e.warnOnChanges,g=void 0!==m&&m,y=t.valueToPerc,b=t.valueToStep,w=t.pixelToStep,P={};if(y&&b&&w||(y=new I,b=new $,w=new $,P.valueToPerc=y,P.valueToStep=b,P.pixelToStep=w),t.domain===K||null===t.step||null===t.domain||null===t.reversed||o!==t.step||s[0]!==t.domain[0]||s[1]!==t.domain[1]||d!==t.reversed){var k=_(s,2),D=k[0],S=k[1];b.setStep(o).setRange([D,S]).setDomain([D,S]),!0===d?(y.setDomain([D,S]).setRange([100,0]),w.setStep(o).setRange([S,D])):(y.setDomain([D,S]).setRange([0,100]),w.setStep(o).setRange([D,S])),a()(S>D,"".concat(j," Max must be greater than min (even if reversed). Max is ").concat(S,". Min is ").concat(D,"."));var M=T(l||t.values,d,b,g),E=M.handles;(M.changes||void 0===l||l===t.values)&&(h(E.map(function(e){return e.val})),p(E.map(function(e){return e.val}))),P.step=o,P.values=l,P.domain=s===K?x(s):s,P.handles=E,P.reversed=d}else{if(!((n=l)===(r=t.values)||n.length===r.length&&n.reduce(function(e,t,n){return e&&r[n]===t},!0))){var C=T(l,d,b,g),A=C.handles;C.changes&&(h(A.map(function(e){return e.val})),p(A.map(function(e){return e.val}))),P.values=l,P.handles=A}}return Object.keys(P).length?P:null}}]),n}(r.PureComponent),X=n(883119),J=n(587703),G=n(696534),q=n(140017),W=n(72461),Q=n(5859),ee=n(943484),et=n(785893);let en=({domain:[e,t],handle:{id:n,value:r,percent:i},getHandleProps:a,touched:o,activeHandleID:l})=>(0,et.jsx)("div",{"aria-valuemax":t,"aria-valuemin":e,"aria-valuenow":r,role:"slider",style:{left:`${i}%`,position:"absolute",marginLeft:"-11px",marginTop:"-6px",border:"1px solid white",zIndex:2,width:15,height:15,cursor:"pointer",borderRadius:"50%",backgroundColor:"black",transform:o&&l===n?"scale(2)":"scale(1)",transition:"transform 0.2s"},...a(n)}),er=({source:e,target:t,getTrackProps:n,backgroundColor:r})=>(0,et.jsx)("div",{style:{position:"absolute",height:5,zIndex:1,backgroundColor:r||"black",borderRadius:7,cursor:"pointer",left:`${e.percent}%`,width:`${t.percent-e.percent}%`},...n()}),ei=function({cropSource:e,currencyType:t,minPrice:n,maxPrice:i,lowerBound:a,upperBound:o,handlePriceChange:l,withTitle:c,instructions:s}){let u=(0,q.ZP)(),d=(0,W.Z)(),v=(0,J.Z)(),{locale:h}=(0,Q.B)(),f={position:"absolute",width:"100%",height:5,borderRadius:7,cursor:"pointer",backgroundColor:(0,G.Yc)()?"#454545":"lightGrey"},p=[Math.ceil(a),Math.ceil(o)],m=[Math.ceil(n),Math.ceil(i)],[g,y]=(0,r.useState)([!1,!1]);(0,r.useEffect)(()=>{v({event_type:120,component:13468,view_parameter:3396,view_type:72,aux_data:{commerce_data:JSON.stringify({source:(0,ee.Z)(e)})}})},[]);let _={currency:t,style:"currency",minimum_fraction_digits:0,maximum_fraction_digits:2};return(0,et.jsxs)(r.Fragment,{children:[c&&(0,et.jsx)(X.xu,{"data-test-id":"price-filter-label",paddingY:4,children:(0,et.jsx)(X.xv,{children:u.bt("Gamme de prix", "Price range", "FeedFiltering.PriceFilter.PriceRange", undefined, true)})}),(0,et.jsxs)(X.xu,{alignItems:"center",display:"flex",justifyContent:"between",marginBottom:3,children:[(0,et.jsx)(X.xv,{weight:"bold",children:(0,et.jsx)(X.xu,{dangerouslySetInlineStyle:{__style:{transform:g[0]?"translateZ(0) translateY(0) scale(1.25)":""}},"data-test-id":"min-price-filter",children:d(h,m[0],_)})}),(0,et.jsx)(X.xv,{weight:"bold",children:(0,et.jsx)(X.xu,{dangerouslySetInlineStyle:{__style:{transform:g[1]?"translateZ(0) translateY(0) scale(1.25)":"",textAlign:"right"}},"data-test-id":"max-price-filter",children:d(h,m[1],{..._,uplimit:o})})})]},"priceSliderValues"),(0,et.jsxs)(Y,{domain:p,mode:2,onChange:()=>{y([!1,!1])},onUpdate:e=>{l(e);let[t,n]=m,[r,i]=e;t!==r?y([!0,!1]):n!==i&&y([!1,!0])},rootStyle:{margin:"5%",position:"relative",width:"90%"},step:1,values:m,children:[(0,et.jsx)(A,{children:({getRailProps:e})=>(0,et.jsx)("div",{"data-test-id":"slider-handles-rail",style:f,...e()})}),(0,et.jsx)(O,{children:({handles:e,getHandleProps:t,activeHandleID:n})=>(0,et.jsx)("div",{className:"slider-handles","data-test-id":"slider-handles",children:e.map((e,r)=>(0,et.jsx)(en,{activeHandleID:n,domain:p,getHandleProps:t,handle:e,touched:g[r]},e.id))})}),(0,et.jsx)(Z,{left:!1,right:!1,children:({tracks:e,getTrackProps:t})=>(0,et.jsx)("div",{className:"slider-tracks",children:e.map(({id:e,source:n,target:r})=>(0,et.jsx)(er,{backgroundColor:(0,G.Yc)()?"white":"black",getTrackProps:t,source:n,target:r},e))})})]}),(0,et.jsx)(X.xu,{alignItems:"center",display:"flex",flex:"grow",justifyContent:"center",marginTop:12,children:(0,et.jsx)(X.xv,{children:s||u.bt("Faites glisser pour changer le prix", "Drag to change price", "FeedFiltering.PriceFilter.PriceDragText", undefined, true)})})]})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/21606.fr-105d3c9bc079513d.mjs.map