import e,{useState as t}from"react";import{Editor as r}from"react-draft-wysiwyg";import"react-draft-wysiwyg/dist/react-draft-wysiwyg.css";function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}!function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===r&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(".input{border:1px solid #d3d3d3;border-radius:5px;height:35px;outline:none;padding-left:5px}.localEditor{height:45vh;margin-bottom:20px;overflow-y:auto}.localEditorBorder{border:1px solid #d3d3d3;border-radius:5px;overflow-y:auto}input[type=file]{color:#0000}.inputfile{opacity:0;overflow:hidden;position:absolute}");var o,a={exports:{}},i={exports:{}},c={};var s,l,u,p,f,d,y,m,b,h,g,v,w,E,S={};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function x(){return l||(l=1,"production"===process.env.NODE_ENV?i.exports=function(){if(o)return c;o=1;var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,u=e?Symbol.for("react.async_mode"):60111,p=e?Symbol.for("react.concurrent_mode"):60111,f=e?Symbol.for("react.forward_ref"):60112,d=e?Symbol.for("react.suspense"):60113,y=e?Symbol.for("react.suspense_list"):60120,m=e?Symbol.for("react.memo"):60115,b=e?Symbol.for("react.lazy"):60116,h=e?Symbol.for("react.block"):60121,g=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,w=e?Symbol.for("react.scope"):60119;function E(e){if("object"==typeof e&&null!==e){var o=e.$$typeof;switch(o){case t:switch(e=e.type){case u:case p:case n:case i:case a:case d:return e;default:switch(e=e&&e.$$typeof){case l:case f:case b:case m:case s:return e;default:return o}}case r:return o}}}function S(e){return E(e)===p}return c.AsyncMode=u,c.ConcurrentMode=p,c.ContextConsumer=l,c.ContextProvider=s,c.Element=t,c.ForwardRef=f,c.Fragment=n,c.Lazy=b,c.Memo=m,c.Portal=r,c.Profiler=i,c.StrictMode=a,c.Suspense=d,c.isAsyncMode=function(e){return S(e)||E(e)===u},c.isConcurrentMode=S,c.isContextConsumer=function(e){return E(e)===l},c.isContextProvider=function(e){return E(e)===s},c.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},c.isForwardRef=function(e){return E(e)===f},c.isFragment=function(e){return E(e)===n},c.isLazy=function(e){return E(e)===b},c.isMemo=function(e){return E(e)===m},c.isPortal=function(e){return E(e)===r},c.isProfiler=function(e){return E(e)===i},c.isStrictMode=function(e){return E(e)===a},c.isSuspense=function(e){return E(e)===d},c.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===p||e===i||e===a||e===d||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===m||e.$$typeof===s||e.$$typeof===l||e.$$typeof===f||e.$$typeof===g||e.$$typeof===v||e.$$typeof===w||e.$$typeof===h)},c.typeOf=E,c}():i.exports=(s||(s=1,"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,s=e?Symbol.for("react.async_mode"):60111,l=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,p=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,d=e?Symbol.for("react.memo"):60115,y=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,h=e?Symbol.for("react.responder"):60118,g=e?Symbol.for("react.scope"):60119;function v(e){if("object"==typeof e&&null!==e){var f=e.$$typeof;switch(f){case t:var m=e.type;switch(m){case s:case l:case n:case a:case o:case p:return m;default:var b=m&&m.$$typeof;switch(b){case c:case u:case y:case d:case i:return b;default:return f}}case r:return f}}}var w=s,E=l,x=c,T=i,C=t,O=u,N=n,j=y,$=d,P=r,k=a,D=o,R=p,_=!1;function I(e){return v(e)===l}S.AsyncMode=w,S.ConcurrentMode=E,S.ContextConsumer=x,S.ContextProvider=T,S.Element=C,S.ForwardRef=O,S.Fragment=N,S.Lazy=j,S.Memo=$,S.Portal=P,S.Profiler=k,S.StrictMode=D,S.Suspense=R,S.isAsyncMode=function(e){return _||(_=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),I(e)||v(e)===s},S.isConcurrentMode=I,S.isContextConsumer=function(e){return v(e)===c},S.isContextProvider=function(e){return v(e)===i},S.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},S.isForwardRef=function(e){return v(e)===u},S.isFragment=function(e){return v(e)===n},S.isLazy=function(e){return v(e)===y},S.isMemo=function(e){return v(e)===d},S.isPortal=function(e){return v(e)===r},S.isProfiler=function(e){return v(e)===a},S.isStrictMode=function(e){return v(e)===o},S.isSuspense=function(e){return v(e)===p},S.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===l||e===a||e===o||e===p||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===d||e.$$typeof===i||e.$$typeof===c||e.$$typeof===u||e.$$typeof===b||e.$$typeof===h||e.$$typeof===g||e.$$typeof===m)},S.typeOf=v}()),S)),i.exports}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/function T(){if(p)return u;p=1;var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;return u=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(n,o){for(var a,i,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(n),s=1;s<arguments.length;s++){for(var l in a=Object(arguments[s]))t.call(a,l)&&(c[l]=a[l]);if(e){i=e(a);for(var u=0;u<i.length;u++)r.call(a,i[u])&&(c[i[u]]=a[i[u]])}}return c},u}function C(){if(d)return f;d=1;return f="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}function O(){return m?y:(m=1,y=Function.call.bind(Object.prototype.hasOwnProperty))}if("production"!==process.env.NODE_ENV){var N=x();a.exports=function(){if(v)return g;v=1;var e=x(),t=T(),r=C(),n=O(),o=function(){if(h)return b;h=1;var e=function(){};if("production"!==process.env.NODE_ENV){var t=C(),r={},n=O();e=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}}function o(o,a,i,c,s){if("production"!==process.env.NODE_ENV)for(var l in o)if(n(o,l)){var u;try{if("function"!=typeof o[l]){var p=Error((c||"React class")+": "+i+" type `"+l+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof o[l]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw p.name="Invariant Violation",p}u=o[l](a,l,c,i,null,t)}catch(e){u=e}if(!u||u instanceof Error||e((c||"React class")+": type specification of "+i+" `"+l+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof u+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),u instanceof Error&&!(u.message in r)){r[u.message]=!0;var f=s?s():"";e("Failed "+i+" type: "+u.message+(null!=f?f:""))}}}return o.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(r={})},b=o}(),a=function(){};function i(){return null}return"production"!==process.env.NODE_ENV&&(a=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}),g=function(c,s){var l="function"==typeof Symbol&&Symbol.iterator,u="@@iterator",p="<<anonymous>>",f={array:b("array"),bigint:b("bigint"),bool:b("boolean"),func:b("function"),number:b("number"),object:b("object"),string:b("string"),symbol:b("symbol"),any:m(i),arrayOf:function(e){return m((function(t,n,o,a,i){if("function"!=typeof e)return new y("Property `"+i+"` of component `"+o+"` has invalid PropType notation inside arrayOf.");var c=t[n];if(!Array.isArray(c))return new y("Invalid "+a+" `"+i+"` of type `"+v(c)+"` supplied to `"+o+"`, expected an array.");for(var s=0;s<c.length;s++){var l=e(c,s,o,a,i+"["+s+"]",r);if(l instanceof Error)return l}return null}))},element:m((function(e,t,r,n,o){var a=e[t];return c(a)?null:new y("Invalid "+n+" `"+o+"` of type `"+v(a)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:m((function(t,r,n,o,a){var i=t[r];return e.isValidElementType(i)?null:new y("Invalid "+o+" `"+a+"` of type `"+v(i)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return m((function(t,r,n,o,a){if(!(t[r]instanceof e)){var i=e.name||p;return new y("Invalid "+o+" `"+a+"` of type `"+((c=t[r]).constructor&&c.constructor.name?c.constructor.name:p)+"` supplied to `"+n+"`, expected instance of `"+i+"`.")}var c;return null}))},node:m((function(e,t,r,n,o){return g(e[t])?null:new y("Invalid "+n+" `"+o+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return m((function(t,o,a,i,c){if("function"!=typeof e)return new y("Property `"+c+"` of component `"+a+"` has invalid PropType notation inside objectOf.");var s=t[o],l=v(s);if("object"!==l)return new y("Invalid "+i+" `"+c+"` of type `"+l+"` supplied to `"+a+"`, expected an object.");for(var u in s)if(n(s,u)){var p=e(s,u,a,i,c+"."+u,r);if(p instanceof Error)return p}return null}))},oneOf:function(e){return Array.isArray(e)?m((function(t,r,n,o,a){for(var i=t[r],c=0;c<e.length;c++)if(d(i,e[c]))return null;var s=JSON.stringify(e,(function(e,t){return"symbol"===w(t)?String(t):t}));return new y("Invalid "+o+" `"+a+"` of value `"+String(i)+"` supplied to `"+n+"`, expected one of "+s+".")})):("production"!==process.env.NODE_ENV&&a(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),i)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&a("Invalid argument supplied to oneOfType, expected an instance of array."),i;for(var t=0;t<e.length;t++){var o=e[t];if("function"!=typeof o)return a("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+E(o)+" at index "+t+"."),i}return m((function(t,o,a,i,c){for(var s=[],l=0;l<e.length;l++){var u=(0,e[l])(t,o,a,i,c,r);if(null==u)return null;u.data&&n(u.data,"expectedType")&&s.push(u.data.expectedType)}return new y("Invalid "+i+" `"+c+"` supplied to `"+a+"`"+(s.length>0?", expected one of type ["+s.join(", ")+"]":"")+".")}))},shape:function(e){return m((function(t,n,o,a,i){var c=t[n],s=v(c);if("object"!==s)return new y("Invalid "+a+" `"+i+"` of type `"+s+"` supplied to `"+o+"`, expected `object`.");for(var l in e){var u=e[l];if("function"!=typeof u)return h(o,a,i,l,w(u));var p=u(c,l,o,a,i+"."+l,r);if(p)return p}return null}))},exact:function(e){return m((function(o,a,i,c,s){var l=o[a],u=v(l);if("object"!==u)return new y("Invalid "+c+" `"+s+"` of type `"+u+"` supplied to `"+i+"`, expected `object`.");var p=t({},o[a],e);for(var f in p){var d=e[f];if(n(e,f)&&"function"!=typeof d)return h(i,c,s,f,w(d));if(!d)return new y("Invalid "+c+" `"+s+"` key `"+f+"` supplied to `"+i+"`.\nBad object: "+JSON.stringify(o[a],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=d(l,f,i,c,s+"."+f,r);if(m)return m}return null}))}};function d(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function y(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function m(e){if("production"!==process.env.NODE_ENV)var t={},n=0;function o(o,i,c,l,u,f,d){if(l=l||p,f=f||c,d!==r){if(s){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var b=l+":"+c;!t[b]&&n<3&&(a("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+l+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),t[b]=!0,n++)}}return null==i[c]?o?null===i[c]?new y("The "+u+" `"+f+"` is marked as required in `"+l+"`, but its value is `null`."):new y("The "+u+" `"+f+"` is marked as required in `"+l+"`, but its value is `undefined`."):null:e(i,c,l,u,f)}var i=o.bind(null,!1);return i.isRequired=o.bind(null,!0),i}function b(e){return m((function(t,r,n,o,a,i){var c=t[r];return v(c)!==e?new y("Invalid "+o+" `"+a+"` of type `"+w(c)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function h(e,t,r,n,o){return new y((e||"React class")+": "+t+" type `"+r+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function g(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(g);if(null===e||c(e))return!0;var t=function(e){var t=e&&(l&&e[l]||e[u]);if("function"==typeof t)return t}(e);if(!t)return!1;var r,n=t.call(e);if(t!==e.entries){for(;!(r=n.next()).done;)if(!g(r.value))return!1}else for(;!(r=n.next()).done;){var o=r.value;if(o&&!g(o[1]))return!1}return!0;default:return!1}}function v(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function w(e){if(null==e)return""+e;var t=v(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function E(e){var t=w(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return y.prototype=Error.prototype,f.checkPropTypes=o,f.resetWarningCache=o.resetWarningCache,f.PropTypes=f,f},g}()(N.isElement,!0)}else a.exports=function(){if(E)return w;E=1;var e=C();function t(){}function r(){}return r.resetWarningCache=t,w=function(){function n(t,r,n,o,a,i){if(i!==e){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function o(){return n}n.isRequired=n;var a={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:o,element:n,elementType:n,instanceOf:o,node:n,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:r,resetWarningCache:t};return a.PropTypes=a,a}}()();var j=n(a.exports);let $={subTopicName:"",subTopicDescription:"",contentData:"",uploadContent:[],selected:!1},P={topicName:"",selected:!1,topicDescription:"",contentData:"",uploadContent:[],subTopics:[]};const k=({primary:n,LessonPlanObj:o,onSubmit:a})=>{console.log(n,"primary",o);const[i,c]=t(o),[s,l]=t(1),[u,p]=t(1),f=(e,t)=>{const r=i?.map(((r,n)=>{if(n+1!==s)return r;switch(t){case"topicName":return{...r,topicName:e};case"topicDescription":return{...r,topicDescription:e};case"topicContent":return{...r,contentData:e};case"uploadContent":return{...r,uploadContent:[...r?.uploadContent,e]};default:return r}}));c(r)},d=(e,t)=>{const r=i?.map(((r,n)=>{if(n+1===s){let n=r?.subTopics?.map(((r,n)=>{if(n+1!==u)return r;switch(t){case"subTopicName":return{...r,subTopicName:e};case"subTopicDescription":return{...r,subTopicDescription:e};case"subTopicContent":return{...r,contentData:e};case"uploadContent":return{...r,uploadContent:[...r?.uploadContent,e]};default:return r}}));return{...r,subTopics:n}}return r}));c(r)},y=(t,n,o)=>e.createElement("div",{id:o},((t,r)=>e.createElement("div",null,e.createElement("h5",{style:{marginBottom:10}},"topic"===r?"Topic Name :":"SubTopic Name :"),e.createElement("input",{className:"input",placeholder:"topic"===r?"Topic Name":"SubTopic Name",style:{flex:1,width:"99.3%"},value:"topic"===r?t.topicName:t.subTopicName,onChange:e=>"topic"===r?f(e.target.value,"topicName"):d(e.target.value,"subTopicName")}),e.createElement("h5",{style:{marginBottom:10}},"topic"===r?"Topic Description :":"SubTopic Description :"),e.createElement("textarea",{style:{height:200,borderColor:"lightgray",borderRadius:5,marginTop:10,padding:5,maxHeight:100,minHeight:100,minWidth:"99.5%",maxWidth:"99.5%",outline:"none"},name:"description",placeholder:"Description",value:"topic"===r?t.topicDescription:t.subTopicDescription,onChange:e=>"topic"===r?f(e.target.value,"topicDescription"):d(e.target.value,"subTopicDescription")})))(t,n),((t,n)=>e.createElement(e.Fragment,null,e.createElement("h5",{style:{marginBottom:10}},"Content :"),e.createElement(r,{initialContentState:t?.contentData,onChange:e=>"topic"===n?f(e,"topicContent"):d(e,"subTopicContent"),toolbarClassName:"toolbarClassName localToolBar",wrapperClassName:"wrapperClassName localEditor localEditorBorder",editorClassName:"editorClassName localEditor",style:{width:"100%"}})))(t,n),((t,r)=>{let n=t?.uploadContent?.length>0;return e.createElement("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap"}},e.createElement("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap"}},n&&t?.uploadContent?.map((t=>e.createElement("img",{src:t,alt:"",style:{height:94,width:100,marginRight:10,marginBottom:10}})))),e.createElement("div",{style:{marginBottom:20,width:n?100:200,height:94,flexDirection:"row",justifyContent:"center",alignItems:"center",border:"2px #8687a7 dashed",borderRadius:5}},e.createElement("input",{type:"file",name:"file",id:"file",multiple:!0,accept:"audio/*,audio/*,image/*,application/*,text/*,.js,.c,.py,.cpp",className:"inputfile",style:{height:94,width:n?100:200},onChange:e=>{""!==e.target.value&&("topic"===r?f(e.target.value,"uploadContent"):d(e.target.value,"uploadContent"))}}),e.createElement("h5",{htmlFor:"file",style:{marginLeft:n?43:35,marginTop:n?33:40,color:"#8687a7",fontSize:n?22:14}},e.createElement("p",null,n?"+":"Upload Media & Files"))))})(t,n)),m=i?.length,b=i?.[s-1]?.subTopics?.length;return e.createElement("div",{style:{padding:"20px"}},e.createElement("div",{style:{alignContent:"center",display:"flex",flexDirection:"row",flexWrap:"wrap"}},[...new Array(m)]?.map(((t,r)=>e.createElement("div",{style:{flexDirection:"row",position:"relative"}},e.createElement("button",{style:{height:30,width:65,borderRadius:5,marginRight:10,marginBottom:15,borderStyle:"solid",borderWidth:s===r+1?0:1,backgroundColor:s===r+1?"#3133b1":"transparent",color:s===r+1?"white":"black",position:"relative"},onClick:()=>{l(r+1),p(1)}},"Topic ",r+1),m>1&&e.createElement("button",{style:{position:"absolute",top:-10,left:50,color:"red",borderRadius:40,borderWidth:0,transform:"rotate(45deg)"},onClick:()=>(e=>{let t=i?.length,r=i?.filter(((t,r)=>r!==e));c(r),s===t&&l(s-1)})(r)},"+")))),e.createElement("div",null,e.createElement("button",{style:{height:30,width:65,borderRadius:5,marginRight:10,marginBottom:15,borderStyle:"solid",border:"2px #8687a7 dashed",backgroundColor:"transparent",fontSize:15,color:"#8687a7"},onClick:()=>{c([...i,P])}},"+"))),i?.map(((e,t)=>s===t+1?y(e,"topic",`topic ${t}`):null)),e.createElement("div",{style:{display:"flex",flexDirection:0===b?"column":"row",flexWrap:"wrap"}},[...new Array(b)]?.map(((t,r)=>e.createElement("div",{style:{flexDirection:"row",position:"relative"}},e.createElement("button",{style:{height:30,width:100,borderRadius:5,marginRight:10,marginBottom:15,borderStyle:"solid",borderWidth:u===r+1?0:1,backgroundColor:u===r+1?"#3133b1":"transparent",color:u===r+1?"white":"black"},onClick:()=>p(r+1)},"Sub Topic ",r+1),e.createElement("button",{style:{position:"absolute",top:-10,left:85,color:"red",borderRadius:40,borderWidth:0,transform:"rotate(45deg)"},onClick:()=>(e=>{let t=i?.map(((t,r)=>{if(r===s-1){let r=t?.subTopics?.length,n=t?.subTopics?.filter(((t,r)=>r!==e));return u===r&&p(u-1),{...t,subTopics:n}}return t}));c(t)})(r)},"+")))),0===b&&e.createElement("h5",null,"Add SubTopic :"),e.createElement("button",{style:{height:30,width:65,borderRadius:5,marginRight:10,marginBottom:15,borderStyle:"solid",border:"2px #8687a7 dashed",backgroundColor:"transparent",fontSize:15,color:"#8687a7"},onClick:()=>{let e=i?.map(((e,t)=>{if(t+1===s){let t=[...e.subTopics,$];return{...e,subTopics:t}}return e}));c(e)}},"+")),i?.length>0&&i[s-1]?.subTopics?.map(((e,t)=>u===t+1?y(e,"subTopic",`sub ${t}`):null)),e.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}},e.createElement("button",{style:{height:30,width:100,borderRadius:5,borderWidth:0,backgroundColor:"#3133b1",color:"white"},onClick:()=>{a&&a(i)}},"Submit")))};var D=k;k.propTypes={primary:j.string,LessonPlanObj:j.array,onSubmit:j.func},k.defaultProps={primary:"Testing",LessonPlanObj:[{topicName:"",selected:!1,topicDescription:"",contentData:"",uploadContent:["https://svbk-lms.s3.ap-south-1.amazonaws.com/aautie/images.jpeg","https://svbk-lms.s3.ap-south-1.amazonaws.com/aautie/Wallpaper.jpeg"],subTopics:[]}],onSubmit:void 0};export{D as LessonPlan};
