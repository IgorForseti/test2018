/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],E=C.document,r=Object.getPrototypeOf,s=t.slice,g=t.concat,u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.4.1",k=function(e,t){return new k.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function d(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}k.fn=k.prototype={jquery:f,constructor:k,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=k.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return k.each(this,e)},map:function(n){return this.pushStack(k.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},k.extend=k.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(k.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||k.isPlainObject(n)?n:{},i=!1,a[t]=k.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},k.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){b(e,{nonce:t&&t.nonce})},each:function(e,t){var n,r=0;if(d(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(d(Object(e))?k.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(d(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g.apply([],a)},guid:1,support:y}),"function"==typeof Symbol&&(k.fn[Symbol.iterator]=t[Symbol.iterator]),k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var h=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,k="sizzle"+1*new Date,m=n.document,S=0,r=0,p=ue(),x=ue(),N=ue(),A=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",$=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",F=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp($),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+$),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(m.childNodes),m.childNodes),t[m.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&((e?e.ownerDocument||e:m)!==C&&T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!A[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&U.test(t)){(s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=k),o=(l=h(t)).length;while(o--)l[o]="#"+s+" "+xe(l[o]);c=l.join(","),f=ee.test(t)&&ye(e.parentNode)||e}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){A(t,!0)}finally{s===k&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[k]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:m;return r!==C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),m!==C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=k,!C.getElementsByName||!C.getElementsByName(k).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){a.appendChild(e).innerHTML="<a id='"+k+"'></a><select id='"+k+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+k+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+k+"+*").length||v.push(".#.+[+~]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",$)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e===C||e.ownerDocument===m&&y(m,e)?-1:t===C||t.ownerDocument===m&&y(m,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===C?-1:t===C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]===m?-1:s[r]===m?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if((e.ownerDocument||e)!==C&&T(e),d.matchesSelector&&E&&!A[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){A(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!==C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!==C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=p[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&p(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(F," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[S,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[S,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[k]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[k]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[S,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[k]||(e[k]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===S&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[k]&&(v=Ce(v)),y&&!y[k]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[k]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=N[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[k]?i.push(a):o.push(a);(a=N(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=S+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t===C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument===C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(S=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(S=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=k.split("").sort(D).join("")===k,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);k.find=h,k.expr=h.selectors,k.expr[":"]=k.expr.pseudos,k.uniqueSort=k.unique=h.uniqueSort,k.text=h.getText,k.isXMLDoc=h.isXML,k.contains=h.contains,k.escapeSelector=h.escape;var T=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&k(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},N=k.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?k.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?k.grep(e,function(e){return e===n!==r}):"string"!=typeof n?k.grep(e,function(e){return-1<i.call(n,e)!==r}):k.filter(n,e,r)}k.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?k.find.matchesSelector(r,e)?[r]:[]:k.find.matches(e,k.grep(t,function(e){return 1===e.nodeType}))},k.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(k(e).filter(function(){for(t=0;t<r;t++)if(k.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)k.find(e,i[t],n);return 1<r?k.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&N.test(e)?k(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(k.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:L.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof k?t[0]:t,k.merge(this,k.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),D.test(r[1])&&k.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(k):k.makeArray(e,this)}).prototype=k.fn,q=k(E);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}k.fn.extend({has:function(e){var t=k(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(k.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&k(e);if(!N.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&k.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?k.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(k(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(k.uniqueSort(k.merge(this.get(),k(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),k.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return T(e,"parentNode")},parentsUntil:function(e,t,n){return T(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return T(e,"nextSibling")},prevAll:function(e){return T(e,"previousSibling")},nextUntil:function(e,t,n){return T(e,"nextSibling",n)},prevUntil:function(e,t,n){return T(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return"undefined"!=typeof e.contentDocument?e.contentDocument:(A(e,"template")&&(e=e.content||e),k.merge([],e.childNodes))}},function(r,i){k.fn[r]=function(e,t){var n=k.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=k.filter(t,n)),1<this.length&&(O[r]||k.uniqueSort(n),H.test(r)&&n.reverse()),this.pushStack(n)}});var R=/[^\x20\t\r\n\f]+/g;function M(e){return e}function I(e){throw e}function W(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}k.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},k.each(e.match(R)||[],function(e,t){n[t]=!0}),n):k.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){k.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return k.each(arguments,function(e,t){var n;while(-1<(n=k.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<k.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},k.extend({Deferred:function(e){var o=[["notify","progress",k.Callbacks("memory"),k.Callbacks("memory"),2],["resolve","done",k.Callbacks("once memory"),k.Callbacks("once memory"),0,"resolved"],["reject","fail",k.Callbacks("once memory"),k.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return k.Deferred(function(r){k.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,M,s),l(u,o,I,s)):(u++,t.call(e,l(u,o,M,s),l(u,o,I,s),l(u,o,M,o.notifyWith))):(a!==M&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){k.Deferred.exceptionHook&&k.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==I&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(k.Deferred.getStackHook&&(t.stackTrace=k.Deferred.getStackHook()),C.setTimeout(t))}}return k.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:M,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:M)),o[2][3].add(l(0,e,m(n)?n:I))}).promise()},promise:function(e){return null!=e?k.extend(e,a):a}},s={};return k.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=k.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(W(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)W(i[t],a(t),o.reject);return o.promise()}});var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;k.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&$.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},k.readyException=function(e){C.setTimeout(function(){throw e})};var F=k.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),k.ready()}k.fn.ready=function(e){return F.then(e)["catch"](function(e){k.readyException(e)}),this},k.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--k.readyWait:k.isReady)||(k.isReady=!0)!==e&&0<--k.readyWait||F.resolveWith(E,[k])}}),k.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(k.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var _=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)_(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(k(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},z=/^-ms-/,U=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function V(e){return e.replace(z,"ms-").replace(U,X)}var G=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=k.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},G(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[V(t)]=n;else for(r in t)i[V(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][V(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(V):(t=V(t))in r?[t]:t.match(R)||[]).length;while(n--)delete r[t[n]]}(void 0===t||k.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!k.isEmptyObject(t)}};var Q=new Y,J=new Y,K=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function ee(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:K.test(i)?JSON.parse(i):i)}catch(e){}J.set(e,t,n)}else n=void 0;return n}k.extend({hasData:function(e){return J.hasData(e)||Q.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n){return Q.access(e,t,n)},_removeData:function(e,t){Q.remove(e,t)}}),k.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=J.get(o),1===o.nodeType&&!Q.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=V(r.slice(5)),ee(o,r,i[r]));Q.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){J.set(this,n)}):_(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=J.get(o,n))?t:void 0!==(t=ee(o,n))?t:void 0;this.each(function(){J.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){J.remove(this,e)})}}),k.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Q.get(e,t),n&&(!r||Array.isArray(n)?r=Q.access(e,t,k.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=k.queue(e,t),r=n.length,i=n.shift(),o=k._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){k.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Q.get(e,n)||Q.access(e,n,{empty:k.Callbacks("once memory").add(function(){Q.remove(e,[t+"queue",n])})})}}),k.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?k.queue(this[0],t):void 0===n?this:this.each(function(){var e=k.queue(this,t,n);k._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&k.dequeue(this,t)})},dequeue:function(e){return this.each(function(){k.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=k.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Q.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ne=new RegExp("^(?:([+-])=|)("+te+")([a-z%]*)$","i"),re=["Top","Right","Bottom","Left"],ie=E.documentElement,oe=function(e){return k.contains(e.ownerDocument,e)},ae={composed:!0};ie.getRootNode&&(oe=function(e){return k.contains(e.ownerDocument,e)||e.getRootNode(ae)===e.ownerDocument});var se=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&oe(e)&&"none"===k.css(e,"display")},ue=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};function le(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return k.css(e,t,"")},u=s(),l=n&&n[3]||(k.cssNumber[t]?"":"px"),c=e.nodeType&&(k.cssNumber[t]||"px"!==l&&+u)&&ne.exec(k.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)k.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,k.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ce={};function fe(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Q.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&se(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ce[s])||(o=a.body.appendChild(a.createElement(s)),u=k.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ce[s]=u)))):"none"!==n&&(l[c]="none",Q.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}k.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){se(this)?k(this).show():k(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?k.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Q.set(e[n],"globalEval",!t||Q.get(t[n],"globalEval"))}ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;var me,xe,be=/<|&#?\w+;/;function we(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))k.merge(p,o.nodeType?[o]:o);else if(be.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+k.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;k.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<k.inArray(o,r))i&&i.push(o);else if(l=oe(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}me=E.createDocumentFragment().appendChild(E.createElement("div")),(xe=E.createElement("input")).setAttribute("type","radio"),xe.setAttribute("checked","checked"),xe.setAttribute("name","t"),me.appendChild(xe),y.checkClone=me.cloneNode(!0).cloneNode(!0).lastChild.checked,me.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!me.cloneNode(!0).lastChild.defaultValue;var Te=/^key/,Ce=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ee=/^([^.]*)(?:\.(.+)|)/;function ke(){return!0}function Se(){return!1}function Ne(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ae(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ae(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Se;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return k().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=k.guid++)),e.each(function(){k.event.add(this,t,i,r,n)})}function De(e,i,o){o?(Q.set(e,i,!1),k.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Q.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(k.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Q.set(this,i,r),t=o(this,i),this[i](),r!==(n=Q.get(this,i))||t?Q.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Q.set(this,i,{value:k.event.trigger(k.extend(r[0],k.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Q.get(e,i)&&k.event.add(e,i,ke)}k.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.get(t);if(v){n.handler&&(n=(o=n).handler,i=o.selector),i&&k.find.matchesSelector(ie,i),n.guid||(n.guid=k.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof k&&k.event.triggered!==e.type?k.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(R)||[""]).length;while(l--)d=g=(s=Ee.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=k.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=k.event.special[d]||{},c=k.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&k.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),k.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.hasData(e)&&Q.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(R)||[""]).length;while(l--)if(d=g=(s=Ee.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=k.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||k.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)k.event.remove(e,d+t[l],n,r,!0);k.isEmptyObject(u)&&Q.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=k.event.fix(e),u=new Array(arguments.length),l=(Q.get(this,"events")||{})[s.type]||[],c=k.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){a=k.event.handlers.call(this,s,l),t=0;while((i=a[t++])&&!s.isPropagationStopped()){s.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!s.isImmediatePropagationStopped())s.rnamespace&&!1!==o.namespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((k.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<k(i,this).index(l):k.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(k.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[k.expando]?e:new k.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click",ke),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Q.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},k.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},k.Event=function(e,t){if(!(this instanceof k.Event))return new k.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?ke:Se,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&k.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[k.expando]=!0},k.Event.prototype={constructor:k.Event,isDefaultPrevented:Se,isPropagationStopped:Se,isImmediatePropagationStopped:Se,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=ke,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=ke,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=ke,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},k.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Te.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ce.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},k.event.addProp),k.each({focus:"focusin",blur:"focusout"},function(e,t){k.event.special[e]={setup:function(){return De(this,e,Ne),!1},trigger:function(){return De(this,e),!0},delegateType:t}}),k.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){k.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||k.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),k.fn.extend({on:function(e,t,n,r){return Ae(this,e,t,n,r)},one:function(e,t,n,r){return Ae(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,k(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Se),this.each(function(){k.event.remove(this,e,n,t)})}});var je=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,qe=/<script|<style|<link/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,He=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&k(e).children("tbody")[0]||e}function Pe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Re(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Me(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(Q.hasData(e)&&(o=Q.access(e),a=Q.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)k.event.add(t,i,l[i][n]);J.hasData(e)&&(s=J.access(e),u=k.extend({},s),J.set(t,u))}}function Ie(n,r,i,o){r=g.apply([],r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Le.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Ie(t,r,i,o)});if(f&&(t=(e=we(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=k.map(ve(e,"script"),Pe)).length;c<f;c++)u=e,c!==p&&(u=k.clone(u,!0,!0),s&&k.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,k.map(a,Re),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Q.access(u,"globalEval")&&k.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?k._evalUrl&&!u.noModule&&k._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")}):b(u.textContent.replace(He,""),u,l))}return n}function We(e,t,n){for(var r,i=t?k.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||k.cleanData(ve(r)),r.parentNode&&(n&&oe(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}k.extend({htmlPrefilter:function(e){return e.replace(je,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=oe(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||k.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Me(o[r],a[r]);else Me(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=k.event.special,o=0;void 0!==(n=e[o]);o++)if(G(n)){if(t=n[Q.expando]){if(t.events)for(r in t.events)i[r]?k.event.remove(n,r):k.removeEvent(n,r,t.handle);n[Q.expando]=void 0}n[J.expando]&&(n[J.expando]=void 0)}}}),k.fn.extend({detach:function(e){return We(this,e,!0)},remove:function(e){return We(this,e)},text:function(e){return _(this,function(e){return void 0===e?k.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Ie(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e)})},prepend:function(){return Ie(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(k.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return k.clone(this,e,t)})},html:function(e){return _(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!qe.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=k.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(k.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Ie(this,arguments,function(e){var t=this.parentNode;k.inArray(this,n)<0&&(k.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),k.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){k.fn[e]=function(e){for(var t,n=[],r=k(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),k(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var $e=new RegExp("^("+te+")(?!px)[a-z%]+$","i"),Fe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Be=new RegExp(re.join("|"),"i");function _e(e,t,n){var r,i,o,a,s=e.style;return(n=n||Fe(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||oe(e)||(a=k.style(e,t)),!y.pixelBoxStyles()&&$e.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){s.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ie.appendChild(s).appendChild(u);var e=C.getComputedStyle(u);n="1%"!==e.top,a=12===t(e.marginLeft),u.style.right="60%",o=36===t(e.right),r=36===t(e.width),u.style.position="absolute",i=12===t(u.offsetWidth/3),ie.removeChild(s),u=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s=E.createElement("div"),u=E.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===u.style.backgroundClip,k.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),i}}))}();var Ue=["Webkit","Moz","ms"],Xe=E.createElement("div").style,Ve={};function Ge(e){var t=k.cssProps[e]||Ve[e];return t||(e in Xe?e:Ve[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Ue.length;while(n--)if((e=Ue[n]+t)in Xe)return e}(e)||e)}var Ye=/^(none|table(?!-c[ea]).+)/,Qe=/^--/,Je={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"};function Ze(e,t,n){var r=ne.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function et(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=k.css(e,n+re[a],!0,i)),r?("content"===n&&(u-=k.css(e,"padding"+re[a],!0,i)),"margin"!==n&&(u-=k.css(e,"border"+re[a]+"Width",!0,i))):(u+=k.css(e,"padding"+re[a],!0,i),"padding"!==n?u+=k.css(e,"border"+re[a]+"Width",!0,i):s+=k.css(e,"border"+re[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function tt(e,t,n){var r=Fe(e),i=(!y.boxSizingReliable()||n)&&"border-box"===k.css(e,"boxSizing",!1,r),o=i,a=_e(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if($e.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||"auto"===a||!parseFloat(a)&&"inline"===k.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===k.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+et(e,t,n||(i?"border":"content"),o,r,a)+"px"}function nt(e,t,n,r,i){return new nt.prototype.init(e,t,n,r,i)}k.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=_e(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=V(t),u=Qe.test(t),l=e.style;if(u||(t=Ge(s)),a=k.cssHooks[t]||k.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=ne.exec(n))&&i[1]&&(n=le(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(k.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=V(t);return Qe.test(t)||(t=Ge(s)),(a=k.cssHooks[t]||k.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=_e(e,t,r)),"normal"===i&&t in Ke&&(i=Ke[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),k.each(["height","width"],function(e,u){k.cssHooks[u]={get:function(e,t,n){if(t)return!Ye.test(k.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?tt(e,u,n):ue(e,Je,function(){return tt(e,u,n)})},set:function(e,t,n){var r,i=Fe(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===k.css(e,"boxSizing",!1,i),s=n?et(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-et(e,u,"border",!1,i)-.5)),s&&(r=ne.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=k.css(e,u)),Ze(0,t,s)}}}),k.cssHooks.marginLeft=ze(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(_e(e,"marginLeft"))||e.getBoundingClientRect().left-ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),k.each({margin:"",padding:"",border:"Width"},function(i,o){k.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+re[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(k.cssHooks[i+o].set=Ze)}),k.fn.extend({css:function(e,t){return _(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Fe(e),i=t.length;a<i;a++)o[t[a]]=k.css(e,t[a],!1,r);return o}return void 0!==n?k.style(e,t,n):k.css(e,t)},e,t,1<arguments.length)}}),((k.Tween=nt).prototype={constructor:nt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||k.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(k.cssNumber[n]?"":"px")},cur:function(){var e=nt.propHooks[this.prop];return e&&e.get?e.get(this):nt.propHooks._default.get(this)},run:function(e){var t,n=nt.propHooks[this.prop];return this.options.duration?this.pos=t=k.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):nt.propHooks._default.set(this),this}}).init.prototype=nt.prototype,(nt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=k.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){k.fx.step[e.prop]?k.fx.step[e.prop](e):1!==e.elem.nodeType||!k.cssHooks[e.prop]&&null==e.elem.style[Ge(e.prop)]?e.elem[e.prop]=e.now:k.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=nt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},k.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},k.fx=nt.prototype.init,k.fx.step={};var rt,it,ot,at,st=/^(?:toggle|show|hide)$/,ut=/queueHooks$/;function lt(){it&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(lt):C.setTimeout(lt,k.fx.interval),k.fx.tick())}function ct(){return C.setTimeout(function(){rt=void 0}),rt=Date.now()}function ft(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=re[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function pt(e,t,n){for(var r,i=(dt.tweeners[t]||[]).concat(dt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function dt(o,e,t){var n,a,r=0,i=dt.prefilters.length,s=k.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=rt||ct(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:k.extend({},e),opts:k.extend(!0,{specialEasing:{},easing:k.easing._default},t),originalProperties:e,originalOptions:t,startTime:rt||ct(),duration:t.duration,tweens:[],createTween:function(e,t){var n=k.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=V(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=k.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=dt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(k._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return k.map(c,pt,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),k.fx.timer(k.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}k.Animation=k.extend(dt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return le(n.elem,e,ne.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(R);for(var n,r=0,i=e.length;r<i;r++)n=e[r],dt.tweeners[n]=dt.tweeners[n]||[],dt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&se(e),v=Q.get(e,"fxshow");for(r in n.queue||(null==(a=k._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,k.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],st.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||k.style(e,r)}if((u=!k.isEmptyObject(t))||!k.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Q.get(e,"display")),"none"===(c=k.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=k.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===k.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Q.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&fe([e],!0),p.done(function(){for(r in g||fe([e]),Q.remove(e,"fxshow"),d)k.style(e,r,d[r])})),u=pt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?dt.prefilters.unshift(e):dt.prefilters.push(e)}}),k.speed=function(e,t,n){var r=e&&"object"==typeof e?k.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return k.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in k.fx.speeds?r.duration=k.fx.speeds[r.duration]:r.duration=k.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&k.dequeue(this,r.queue)},r},k.fn.extend({fadeTo:function(e,t,n,r){return this.filter(se).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=k.isEmptyObject(t),o=k.speed(e,n,r),a=function(){var e=dt(this,k.extend({},t),o);(i||Q.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=k.timers,r=Q.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&ut.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||k.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Q.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=k.timers,o=n?n.length:0;for(t.finish=!0,k.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),k.each(["toggle","show","hide"],function(e,r){var i=k.fn[r];k.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(ft(r,!0),e,t,n)}}),k.each({slideDown:ft("show"),slideUp:ft("hide"),slideToggle:ft("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){k.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),k.timers=[],k.fx.tick=function(){var e,t=0,n=k.timers;for(rt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||k.fx.stop(),rt=void 0},k.fx.timer=function(e){k.timers.push(e),k.fx.start()},k.fx.interval=13,k.fx.start=function(){it||(it=!0,lt())},k.fx.stop=function(){it=null},k.fx.speeds={slow:600,fast:200,_default:400},k.fn.delay=function(r,e){return r=k.fx&&k.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},ot=E.createElement("input"),at=E.createElement("select").appendChild(E.createElement("option")),ot.type="checkbox",y.checkOn=""!==ot.value,y.optSelected=at.selected,(ot=E.createElement("input")).value="t",ot.type="radio",y.radioValue="t"===ot.value;var ht,gt=k.expr.attrHandle;k.fn.extend({attr:function(e,t){return _(this,k.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){k.removeAttr(this,e)})}}),k.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?k.prop(e,t,n):(1===o&&k.isXMLDoc(e)||(i=k.attrHooks[t.toLowerCase()]||(k.expr.match.bool.test(t)?ht:void 0)),void 0!==n?null===n?void k.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=k.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(R);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ht={set:function(e,t,n){return!1===t?k.removeAttr(e,n):e.setAttribute(n,n),n}},k.each(k.expr.match.bool.source.match(/\w+/g),function(e,t){var a=gt[t]||k.find.attr;gt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=gt[o],gt[o]=r,r=null!=a(e,t,n)?o:null,gt[o]=i),r}});var vt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;function mt(e){return(e.match(R)||[]).join(" ")}function xt(e){return e.getAttribute&&e.getAttribute("class")||""}function bt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(R)||[]}k.fn.extend({prop:function(e,t){return _(this,k.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[k.propFix[e]||e]})}}),k.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&k.isXMLDoc(e)||(t=k.propFix[t]||t,i=k.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=k.find.attr(e,"tabindex");return t?parseInt(t,10):vt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(k.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),k.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){k.propFix[this.toLowerCase()]=this}),k.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).addClass(t.call(this,e,xt(this)))});if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).removeClass(t.call(this,e,xt(this)))});if(!arguments.length)return this.attr("class","");if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){k(this).toggleClass(i.call(this,e,xt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=k(this),r=bt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=xt(this))&&Q.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Q.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+mt(xt(n))+" ").indexOf(t))return!0;return!1}});var wt=/\r/g;k.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,k(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=k.map(t,function(e){return null==e?"":e+""})),(r=k.valHooks[this.type]||k.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=k.valHooks[t.type]||k.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(wt,""):null==e?"":e:void 0}}),k.extend({valHooks:{option:{get:function(e){var t=k.find.attr(e,"value");return null!=t?t:mt(k.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=k(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=k.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<k.inArray(k.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),k.each(["radio","checkbox"],function(){k.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<k.inArray(k(e).val(),t)}},y.checkOn||(k.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var Tt=/^(?:focusinfocus|focusoutblur)$/,Ct=function(e){e.stopPropagation()};k.extend(k.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!Tt.test(d+k.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[k.expando]?e:new k.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:k.makeArray(t,[e]),c=k.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,Tt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Q.get(o,"events")||{})[e.type]&&Q.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&G(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!G(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),k.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Ct),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Ct),k.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=k.extend(new k.Event,n,{type:e,isSimulated:!0});k.event.trigger(r,null,t)}}),k.fn.extend({trigger:function(e,t){return this.each(function(){k.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return k.event.trigger(e,t,n,!0)}}),y.focusin||k.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){k.event.simulate(r,e.target,k.event.fix(e))};k.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=Q.access(e,r);t||e.addEventListener(n,i,!0),Q.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=Q.access(e,r)-1;t?Q.access(e,r,t):(e.removeEventListener(n,i,!0),Q.remove(e,r))}}});var Et=C.location,kt=Date.now(),St=/\?/;k.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||k.error("Invalid XML: "+e),t};var Nt=/\[\]$/,At=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen)/i;function qt(n,e,r,i){var t;if(Array.isArray(e))k.each(e,function(e,t){r||Nt.test(n)?i(n,t):qt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)qt(n+"["+t+"]",e[t],r,i)}k.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!k.isPlainObject(e))k.each(e,function(){i(this.name,this.value)});else for(n in e)qt(n,e[n],t,i);return r.join("&")},k.fn.extend({serialize:function(){return k.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=k.prop(this,"elements");return e?k.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!k(this).is(":disabled")&&jt.test(this.nodeName)&&!Dt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=k(this).val();return null==n?null:Array.isArray(n)?k.map(n,function(e){return{name:t.name,value:e.replace(At,"\r\n")}}):{name:t.name,value:n.replace(At,"\r\n")}}).get()}});var Lt=/%20/g,Ht=/#.*$/,Ot=/([?&])_=[^&]*/,Pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Rt=/^(?:GET|HEAD)$/,Mt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Ft=E.createElement("a");function Bt(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(R)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function _t(t,i,o,a){var s={},u=t===Wt;function l(e){var r;return s[e]=!0,k.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function zt(e,t){var n,r,i=k.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&k.extend(!0,e,r),e}Ft.href=Et.href,k.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":k.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,k.ajaxSettings),t):zt(k.ajaxSettings,e)},ajaxPrefilter:Bt(It),ajaxTransport:Bt(Wt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=k.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?k(y):k.event,x=k.Deferred(),b=k.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Pt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace(Mt,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(R)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Ft.protocol+"//"+Ft.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=k.param(v.data,v.traditional)),_t(It,v,t,T),h)return T;for(i in(g=k.event&&v.global)&&0==k.active++&&k.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Rt.test(v.type),f=v.url.replace(Ht,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Lt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(St.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Ot,"$1"),o=(St.test(f)?"&":"?")+"_="+kt+++o),v.url=f+o),v.ifModified&&(k.lastModified[f]&&T.setRequestHeader("If-Modified-Since",k.lastModified[f]),k.etag[f]&&T.setRequestHeader("If-None-Match",k.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+$t+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=_t(Wt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(k.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(k.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--k.active||k.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return k.get(e,t,n,"json")},getScript:function(e,t){return k.get(e,void 0,t,"script")}}),k.each(["get","post"],function(e,i){k[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),k.ajax(k.extend({url:e,type:i,dataType:r,data:t,success:n},k.isPlainObject(e)&&e))}}),k._evalUrl=function(e,t){return k.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){k.globalEval(e,t)}})},k.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=k(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){k(this).wrapInner(n.call(this,e))}):this.each(function(){var e=k(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){k(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){k(this).replaceWith(this.childNodes)}),this}}),k.expr.pseudos.hidden=function(e){return!k.expr.pseudos.visible(e)},k.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},k.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Ut={0:200,1223:204},Xt=k.ajaxSettings.xhr();y.cors=!!Xt&&"withCredentials"in Xt,y.ajax=Xt=!!Xt,k.ajaxTransport(function(i){var o,a;if(y.cors||Xt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Ut[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),k.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),k.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return k.globalEval(e),e}}}),k.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),k.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=k("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Vt,Gt=[],Yt=/(=)\?(?=&|$)|\?\?/;k.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Gt.pop()||k.expando+"_"+kt++;return this[e]=!0,e}}),k.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Yt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Yt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Yt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||k.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?k(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Gt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Vt=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Vt.childNodes.length),k.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=D.exec(e))?[t.createElement(i[1])]:(i=we([e],t,o),o&&o.length&&k(o).remove(),k.merge([],i.childNodes)));var r,i,o},k.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=mt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&k.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?k("<div>").append(k.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},k.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){k.fn[t]=function(e){return this.on(t,e)}}),k.expr.pseudos.animated=function(t){return k.grep(k.timers,function(e){return t===e.elem}).length},k.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=k.css(e,"position"),c=k(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=k.css(e,"top"),u=k.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,k.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},k.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){k.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===k.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===k.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=k(e).offset()).top+=k.css(e,"borderTopWidth",!0),i.left+=k.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-k.css(r,"marginTop",!0),left:t.left-i.left-k.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===k.css(e,"position"))e=e.offsetParent;return e||ie})}}),k.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;k.fn[t]=function(e){return _(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),k.each(["top","left"],function(e,n){k.cssHooks[n]=ze(y.pixelPosition,function(e,t){if(t)return t=_e(e,n),$e.test(t)?k(e).position()[n]+"px":t})}),k.each({Height:"height",Width:"width"},function(a,s){k.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){k.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return _(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?k.css(e,t,i):k.style(e,t,n,i)},s,n?e:void 0,n)}})}),k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){k.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),k.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),k.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),k.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||k.guid++,i},k.holdReady=function(e){e?k.readyWait++:k.ready(!0)},k.isArray=Array.isArray,k.parseJSON=JSON.parse,k.nodeName=A,k.isFunction=m,k.isWindow=x,k.camelCase=V,k.type=w,k.now=Date.now,k.isNumeric=function(e){var t=k.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return k});var Qt=C.jQuery,Jt=C.$;return k.noConflict=function(e){return C.$===k&&(C.$=Jt),e&&C.jQuery===k&&(C.jQuery=Qt),k},e||(C.jQuery=C.$=k),k});

/*!
  * Bootstrap v4.4.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("jquery")):"function"==typeof define&&define.amd?define(["exports","jquery"],t):t((e=e||self).bootstrap={},e.jQuery)}(this,function(e,p){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function t(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}function l(o){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?t(Object(r),!0).forEach(function(e){var t,n,i;t=o,i=r[n=e],n in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(r,e))})}return o}p=p&&p.hasOwnProperty("default")?p.default:p;var n="transitionend";function o(e){var t=this,n=!1;return p(this).one(m.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||m.triggerTransitionEnd(t)},e),this}var m={TRANSITION_END:"bsTransitionEnd",getUID:function(e){for(;e+=~~(1e6*Math.random()),document.getElementById(e););return e},getSelectorFromElement:function(e){var t=e.getAttribute("data-target");if(!t||"#"===t){var n=e.getAttribute("href");t=n&&"#"!==n?n.trim():""}try{return document.querySelector(t)?t:null}catch(e){return null}},getTransitionDurationFromElement:function(e){if(!e)return 0;var t=p(e).css("transition-duration"),n=p(e).css("transition-delay"),i=parseFloat(t),o=parseFloat(n);return i||o?(t=t.split(",")[0],n=n.split(",")[0],1e3*(parseFloat(t)+parseFloat(n))):0},reflow:function(e){return e.offsetHeight},triggerTransitionEnd:function(e){p(e).trigger(n)},supportsTransitionEnd:function(){return Boolean(n)},isElement:function(e){return(e[0]||e).nodeType},typeCheckConfig:function(e,t,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],r=t[i],s=r&&m.isElement(r)?"element":(a=r,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(o).test(s))throw new Error(e.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+o+'".')}var a},findShadowRoot:function(e){if(!document.documentElement.attachShadow)return null;if("function"!=typeof e.getRootNode)return e instanceof ShadowRoot?e:e.parentNode?m.findShadowRoot(e.parentNode):null;var t=e.getRootNode();return t instanceof ShadowRoot?t:null},jQueryDetection:function(){if("undefined"==typeof p)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e=p.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1===e[0]&&9===e[1]&&e[2]<1||4<=e[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}};m.jQueryDetection(),p.fn.emulateTransitionEnd=o,p.event.special[m.TRANSITION_END]={bindType:n,delegateType:n,handle:function(e){if(p(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}};var r="alert",a="bs.alert",c="."+a,h=p.fn[r],u={CLOSE:"close"+c,CLOSED:"closed"+c,CLICK_DATA_API:"click"+c+".data-api"},f="alert",d="fade",g="show",_=function(){function i(e){this._element=e}var e=i.prototype;return e.close=function(e){var t=this._element;e&&(t=this._getRootElement(e)),this._triggerCloseEvent(t).isDefaultPrevented()||this._removeElement(t)},e.dispose=function(){p.removeData(this._element,a),this._element=null},e._getRootElement=function(e){var t=m.getSelectorFromElement(e),n=!1;return t&&(n=document.querySelector(t)),n=n||p(e).closest("."+f)[0]},e._triggerCloseEvent=function(e){var t=p.Event(u.CLOSE);return p(e).trigger(t),t},e._removeElement=function(t){var n=this;if(p(t).removeClass(g),p(t).hasClass(d)){var e=m.getTransitionDurationFromElement(t);p(t).one(m.TRANSITION_END,function(e){return n._destroyElement(t,e)}).emulateTransitionEnd(e)}else this._destroyElement(t)},e._destroyElement=function(e){p(e).detach().trigger(u.CLOSED).remove()},i._jQueryInterface=function(n){return this.each(function(){var e=p(this),t=e.data(a);t||(t=new i(this),e.data(a,t)),"close"===n&&t[n](this)})},i._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}}]),i}();p(document).on(u.CLICK_DATA_API,'[data-dismiss="alert"]',_._handleDismiss(new _)),p.fn[r]=_._jQueryInterface,p.fn[r].Constructor=_,p.fn[r].noConflict=function(){return p.fn[r]=h,_._jQueryInterface};var v="button",y="bs.button",E="."+y,b=".data-api",w=p.fn[v],T="active",C="btn",S="focus",D='[data-toggle^="button"]',I='[data-toggle="buttons"]',A='[data-toggle="button"]',O='[data-toggle="buttons"] .btn',N='input:not([type="hidden"])',k=".active",L=".btn",P={CLICK_DATA_API:"click"+E+b,FOCUS_BLUR_DATA_API:"focus"+E+b+" blur"+E+b,LOAD_DATA_API:"load"+E+b},x=function(){function n(e){this._element=e}var e=n.prototype;return e.toggle=function(){var e=!0,t=!0,n=p(this._element).closest(I)[0];if(n){var i=this._element.querySelector(N);if(i){if("radio"===i.type)if(i.checked&&this._element.classList.contains(T))e=!1;else{var o=n.querySelector(k);o&&p(o).removeClass(T)}else"checkbox"===i.type?"LABEL"===this._element.tagName&&i.checked===this._element.classList.contains(T)&&(e=!1):e=!1;e&&(i.checked=!this._element.classList.contains(T),p(i).trigger("change")),i.focus(),t=!1}}this._element.hasAttribute("disabled")||this._element.classList.contains("disabled")||(t&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(T)),e&&p(this._element).toggleClass(T))},e.dispose=function(){p.removeData(this._element,y),this._element=null},n._jQueryInterface=function(t){return this.each(function(){var e=p(this).data(y);e||(e=new n(this),p(this).data(y,e)),"toggle"===t&&e[t]()})},s(n,null,[{key:"VERSION",get:function(){return"4.4.1"}}]),n}();p(document).on(P.CLICK_DATA_API,D,function(e){var t=e.target;if(p(t).hasClass(C)||(t=p(t).closest(L)[0]),!t||t.hasAttribute("disabled")||t.classList.contains("disabled"))e.preventDefault();else{var n=t.querySelector(N);if(n&&(n.hasAttribute("disabled")||n.classList.contains("disabled")))return void e.preventDefault();x._jQueryInterface.call(p(t),"toggle")}}).on(P.FOCUS_BLUR_DATA_API,D,function(e){var t=p(e.target).closest(L)[0];p(t).toggleClass(S,/^focus(in)?$/.test(e.type))}),p(window).on(P.LOAD_DATA_API,function(){for(var e=[].slice.call(document.querySelectorAll(O)),t=0,n=e.length;t<n;t++){var i=e[t],o=i.querySelector(N);o.checked||o.hasAttribute("checked")?i.classList.add(T):i.classList.remove(T)}for(var r=0,s=(e=[].slice.call(document.querySelectorAll(A))).length;r<s;r++){var a=e[r];"true"===a.getAttribute("aria-pressed")?a.classList.add(T):a.classList.remove(T)}}),p.fn[v]=x._jQueryInterface,p.fn[v].Constructor=x,p.fn[v].noConflict=function(){return p.fn[v]=w,x._jQueryInterface};var j="carousel",H="bs.carousel",R="."+H,F=".data-api",M=p.fn[j],W={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},U={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},B="next",q="prev",K="left",Q="right",V={SLIDE:"slide"+R,SLID:"slid"+R,KEYDOWN:"keydown"+R,MOUSEENTER:"mouseenter"+R,MOUSELEAVE:"mouseleave"+R,TOUCHSTART:"touchstart"+R,TOUCHMOVE:"touchmove"+R,TOUCHEND:"touchend"+R,POINTERDOWN:"pointerdown"+R,POINTERUP:"pointerup"+R,DRAG_START:"dragstart"+R,LOAD_DATA_API:"load"+R+F,CLICK_DATA_API:"click"+R+F},Y="carousel",z="active",X="slide",G="carousel-item-right",$="carousel-item-left",J="carousel-item-next",Z="carousel-item-prev",ee="pointer-event",te=".active",ne=".active.carousel-item",ie=".carousel-item",oe=".carousel-item img",re=".carousel-item-next, .carousel-item-prev",se=".carousel-indicators",ae="[data-slide], [data-slide-to]",le='[data-ride="carousel"]',ce={TOUCH:"touch",PEN:"pen"},he=function(){function r(e,t){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(t),this._element=e,this._indicatorsElement=this._element.querySelector(se),this._touchSupported="ontouchstart"in document.documentElement||0<navigator.maxTouchPoints,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var e=r.prototype;return e.next=function(){this._isSliding||this._slide(B)},e.nextWhenVisible=function(){!document.hidden&&p(this._element).is(":visible")&&"hidden"!==p(this._element).css("visibility")&&this.next()},e.prev=function(){this._isSliding||this._slide(q)},e.pause=function(e){e||(this._isPaused=!0),this._element.querySelector(re)&&(m.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},e.cycle=function(e){e||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},e.to=function(e){var t=this;this._activeElement=this._element.querySelector(ne);var n=this._getItemIndex(this._activeElement);if(!(e>this._items.length-1||e<0))if(this._isSliding)p(this._element).one(V.SLID,function(){return t.to(e)});else{if(n===e)return this.pause(),void this.cycle();var i=n<e?B:q;this._slide(i,this._items[e])}},e.dispose=function(){p(this._element).off(R),p.removeData(this._element,H),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},e._getConfig=function(e){return e=l({},W,{},e),m.typeCheckConfig(j,e,U),e},e._handleSwipe=function(){var e=Math.abs(this.touchDeltaX);if(!(e<=40)){var t=e/this.touchDeltaX;(this.touchDeltaX=0)<t&&this.prev(),t<0&&this.next()}},e._addEventListeners=function(){var t=this;this._config.keyboard&&p(this._element).on(V.KEYDOWN,function(e){return t._keydown(e)}),"hover"===this._config.pause&&p(this._element).on(V.MOUSEENTER,function(e){return t.pause(e)}).on(V.MOUSELEAVE,function(e){return t.cycle(e)}),this._config.touch&&this._addTouchEventListeners()},e._addTouchEventListeners=function(){var t=this;if(this._touchSupported){var n=function(e){t._pointerEvent&&ce[e.originalEvent.pointerType.toUpperCase()]?t.touchStartX=e.originalEvent.clientX:t._pointerEvent||(t.touchStartX=e.originalEvent.touches[0].clientX)},i=function(e){t._pointerEvent&&ce[e.originalEvent.pointerType.toUpperCase()]&&(t.touchDeltaX=e.originalEvent.clientX-t.touchStartX),t._handleSwipe(),"hover"===t._config.pause&&(t.pause(),t.touchTimeout&&clearTimeout(t.touchTimeout),t.touchTimeout=setTimeout(function(e){return t.cycle(e)},500+t._config.interval))};p(this._element.querySelectorAll(oe)).on(V.DRAG_START,function(e){return e.preventDefault()}),this._pointerEvent?(p(this._element).on(V.POINTERDOWN,function(e){return n(e)}),p(this._element).on(V.POINTERUP,function(e){return i(e)}),this._element.classList.add(ee)):(p(this._element).on(V.TOUCHSTART,function(e){return n(e)}),p(this._element).on(V.TOUCHMOVE,function(e){return function(e){e.originalEvent.touches&&1<e.originalEvent.touches.length?t.touchDeltaX=0:t.touchDeltaX=e.originalEvent.touches[0].clientX-t.touchStartX}(e)}),p(this._element).on(V.TOUCHEND,function(e){return i(e)}))}},e._keydown=function(e){if(!/input|textarea/i.test(e.target.tagName))switch(e.which){case 37:e.preventDefault(),this.prev();break;case 39:e.preventDefault(),this.next()}},e._getItemIndex=function(e){return this._items=e&&e.parentNode?[].slice.call(e.parentNode.querySelectorAll(ie)):[],this._items.indexOf(e)},e._getItemByDirection=function(e,t){var n=e===B,i=e===q,o=this._getItemIndex(t),r=this._items.length-1;if((i&&0===o||n&&o===r)&&!this._config.wrap)return t;var s=(o+(e===q?-1:1))%this._items.length;return-1==s?this._items[this._items.length-1]:this._items[s]},e._triggerSlideEvent=function(e,t){var n=this._getItemIndex(e),i=this._getItemIndex(this._element.querySelector(ne)),o=p.Event(V.SLIDE,{relatedTarget:e,direction:t,from:i,to:n});return p(this._element).trigger(o),o},e._setActiveIndicatorElement=function(e){if(this._indicatorsElement){var t=[].slice.call(this._indicatorsElement.querySelectorAll(te));p(t).removeClass(z);var n=this._indicatorsElement.children[this._getItemIndex(e)];n&&p(n).addClass(z)}},e._slide=function(e,t){var n,i,o,r=this,s=this._element.querySelector(ne),a=this._getItemIndex(s),l=t||s&&this._getItemByDirection(e,s),c=this._getItemIndex(l),h=Boolean(this._interval);if(o=e===B?(n=$,i=J,K):(n=G,i=Z,Q),l&&p(l).hasClass(z))this._isSliding=!1;else if(!this._triggerSlideEvent(l,o).isDefaultPrevented()&&s&&l){this._isSliding=!0,h&&this.pause(),this._setActiveIndicatorElement(l);var u=p.Event(V.SLID,{relatedTarget:l,direction:o,from:a,to:c});if(p(this._element).hasClass(X)){p(l).addClass(i),m.reflow(l),p(s).addClass(n),p(l).addClass(n);var f=parseInt(l.getAttribute("data-interval"),10);f?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=f):this._config.interval=this._config.defaultInterval||this._config.interval;var d=m.getTransitionDurationFromElement(s);p(s).one(m.TRANSITION_END,function(){p(l).removeClass(n+" "+i).addClass(z),p(s).removeClass(z+" "+i+" "+n),r._isSliding=!1,setTimeout(function(){return p(r._element).trigger(u)},0)}).emulateTransitionEnd(d)}else p(s).removeClass(z),p(l).addClass(z),this._isSliding=!1,p(this._element).trigger(u);h&&this.cycle()}},r._jQueryInterface=function(i){return this.each(function(){var e=p(this).data(H),t=l({},W,{},p(this).data());"object"==typeof i&&(t=l({},t,{},i));var n="string"==typeof i?i:t.slide;if(e||(e=new r(this,t),p(this).data(H,e)),"number"==typeof i)e.to(i);else if("string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}else t.interval&&t.ride&&(e.pause(),e.cycle())})},r._dataApiClickHandler=function(e){var t=m.getSelectorFromElement(this);if(t){var n=p(t)[0];if(n&&p(n).hasClass(Y)){var i=l({},p(n).data(),{},p(this).data()),o=this.getAttribute("data-slide-to");o&&(i.interval=!1),r._jQueryInterface.call(p(n),i),o&&p(n).data(H).to(o),e.preventDefault()}}},s(r,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return W}}]),r}();p(document).on(V.CLICK_DATA_API,ae,he._dataApiClickHandler),p(window).on(V.LOAD_DATA_API,function(){for(var e=[].slice.call(document.querySelectorAll(le)),t=0,n=e.length;t<n;t++){var i=p(e[t]);he._jQueryInterface.call(i,i.data())}}),p.fn[j]=he._jQueryInterface,p.fn[j].Constructor=he,p.fn[j].noConflict=function(){return p.fn[j]=M,he._jQueryInterface};var ue="collapse",fe="bs.collapse",de="."+fe,pe=p.fn[ue],me={toggle:!0,parent:""},ge={toggle:"boolean",parent:"(string|element)"},_e={SHOW:"show"+de,SHOWN:"shown"+de,HIDE:"hide"+de,HIDDEN:"hidden"+de,CLICK_DATA_API:"click"+de+".data-api"},ve="show",ye="collapse",Ee="collapsing",be="collapsed",we="width",Te="height",Ce=".show, .collapsing",Se='[data-toggle="collapse"]',De=function(){function a(t,e){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(e),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(Se)),i=0,o=n.length;i<o;i++){var r=n[i],s=m.getSelectorFromElement(r),a=[].slice.call(document.querySelectorAll(s)).filter(function(e){return e===t});null!==s&&0<a.length&&(this._selector=s,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var e=a.prototype;return e.toggle=function(){p(this._element).hasClass(ve)?this.hide():this.show()},e.show=function(){var e,t,n=this;if(!this._isTransitioning&&!p(this._element).hasClass(ve)&&(this._parent&&0===(e=[].slice.call(this._parent.querySelectorAll(Ce)).filter(function(e){return"string"==typeof n._config.parent?e.getAttribute("data-parent")===n._config.parent:e.classList.contains(ye)})).length&&(e=null),!(e&&(t=p(e).not(this._selector).data(fe))&&t._isTransitioning))){var i=p.Event(_e.SHOW);if(p(this._element).trigger(i),!i.isDefaultPrevented()){e&&(a._jQueryInterface.call(p(e).not(this._selector),"hide"),t||p(e).data(fe,null));var o=this._getDimension();p(this._element).removeClass(ye).addClass(Ee),this._element.style[o]=0,this._triggerArray.length&&p(this._triggerArray).removeClass(be).attr("aria-expanded",!0),this.setTransitioning(!0);var r="scroll"+(o[0].toUpperCase()+o.slice(1)),s=m.getTransitionDurationFromElement(this._element);p(this._element).one(m.TRANSITION_END,function(){p(n._element).removeClass(Ee).addClass(ye).addClass(ve),n._element.style[o]="",n.setTransitioning(!1),p(n._element).trigger(_e.SHOWN)}).emulateTransitionEnd(s),this._element.style[o]=this._element[r]+"px"}}},e.hide=function(){var e=this;if(!this._isTransitioning&&p(this._element).hasClass(ve)){var t=p.Event(_e.HIDE);if(p(this._element).trigger(t),!t.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",m.reflow(this._element),p(this._element).addClass(Ee).removeClass(ye).removeClass(ve);var i=this._triggerArray.length;if(0<i)for(var o=0;o<i;o++){var r=this._triggerArray[o],s=m.getSelectorFromElement(r);if(null!==s)p([].slice.call(document.querySelectorAll(s))).hasClass(ve)||p(r).addClass(be).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[n]="";var a=m.getTransitionDurationFromElement(this._element);p(this._element).one(m.TRANSITION_END,function(){e.setTransitioning(!1),p(e._element).removeClass(Ee).addClass(ye).trigger(_e.HIDDEN)}).emulateTransitionEnd(a)}}},e.setTransitioning=function(e){this._isTransitioning=e},e.dispose=function(){p.removeData(this._element,fe),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},e._getConfig=function(e){return(e=l({},me,{},e)).toggle=Boolean(e.toggle),m.typeCheckConfig(ue,e,ge),e},e._getDimension=function(){return p(this._element).hasClass(we)?we:Te},e._getParent=function(){var e,n=this;m.isElement(this._config.parent)?(e=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(e=this._config.parent[0])):e=document.querySelector(this._config.parent);var t='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',i=[].slice.call(e.querySelectorAll(t));return p(i).each(function(e,t){n._addAriaAndCollapsedClass(a._getTargetFromElement(t),[t])}),e},e._addAriaAndCollapsedClass=function(e,t){var n=p(e).hasClass(ve);t.length&&p(t).toggleClass(be,!n).attr("aria-expanded",n)},a._getTargetFromElement=function(e){var t=m.getSelectorFromElement(e);return t?document.querySelector(t):null},a._jQueryInterface=function(i){return this.each(function(){var e=p(this),t=e.data(fe),n=l({},me,{},e.data(),{},"object"==typeof i&&i?i:{});if(!t&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),t||(t=new a(this,n),e.data(fe,t)),"string"==typeof i){if("undefined"==typeof t[i])throw new TypeError('No method named "'+i+'"');t[i]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return me}}]),a}();p(document).on(_e.CLICK_DATA_API,Se,function(e){"A"===e.currentTarget.tagName&&e.preventDefault();var n=p(this),t=m.getSelectorFromElement(this),i=[].slice.call(document.querySelectorAll(t));p(i).each(function(){var e=p(this),t=e.data(fe)?"toggle":n.data();De._jQueryInterface.call(e,t)})}),p.fn[ue]=De._jQueryInterface,p.fn[ue].Constructor=De,p.fn[ue].noConflict=function(){return p.fn[ue]=pe,De._jQueryInterface};var Ie="undefined"!=typeof window&&"undefined"!=typeof document&&"undefined"!=typeof navigator,Ae=function(){for(var e=["Edge","Trident","Firefox"],t=0;t<e.length;t+=1)if(Ie&&0<=navigator.userAgent.indexOf(e[t]))return 1;return 0}();var Oe=Ie&&window.Promise?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},Ae))}};function Ne(e){return e&&"[object Function]"==={}.toString.call(e)}function ke(e,t){if(1!==e.nodeType)return[];var n=e.ownerDocument.defaultView.getComputedStyle(e,null);return t?n[t]:n}function Le(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}function Pe(e){if(!e)return document.body;switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body;case"#document":return e.body}var t=ke(e),n=t.overflow,i=t.overflowX,o=t.overflowY;return/(auto|scroll|overlay)/.test(n+o+i)?e:Pe(Le(e))}function xe(e){return e&&e.referenceNode?e.referenceNode:e}var je=Ie&&!(!window.MSInputMethodContext||!document.documentMode),He=Ie&&/MSIE 10/.test(navigator.userAgent);function Re(e){return 11===e?je:10===e?He:je||He}function Fe(e){if(!e)return document.documentElement;for(var t=Re(10)?document.body:null,n=e.offsetParent||null;n===t&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&"BODY"!==i&&"HTML"!==i?-1!==["TH","TD","TABLE"].indexOf(n.nodeName)&&"static"===ke(n,"position")?Fe(n):n:e?e.ownerDocument.documentElement:document.documentElement}function Me(e){return null!==e.parentNode?Me(e.parentNode):e}function We(e,t){if(!(e&&e.nodeType&&t&&t.nodeType))return document.documentElement;var n=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,i=n?e:t,o=n?t:e,r=document.createRange();r.setStart(i,0),r.setEnd(o,0);var s=r.commonAncestorContainer;if(e!==s&&t!==s||i.contains(o))return function(e){var t=e.nodeName;return"BODY"!==t&&("HTML"===t||Fe(e.firstElementChild)===e)}(s)?s:Fe(s);var a=Me(e);return a.host?We(a.host,t):We(e,Me(t).host)}function Ue(e,t){var n="top"===(1<arguments.length&&void 0!==t?t:"top")?"scrollTop":"scrollLeft",i=e.nodeName;if("BODY"!==i&&"HTML"!==i)return e[n];var o=e.ownerDocument.documentElement;return(e.ownerDocument.scrollingElement||o)[n]}function Be(e,t){var n="x"===t?"Left":"Top",i="Left"==n?"Right":"Bottom";return parseFloat(e["border"+n+"Width"],10)+parseFloat(e["border"+i+"Width"],10)}function qe(e,t,n,i){return Math.max(t["offset"+e],t["scroll"+e],n["client"+e],n["offset"+e],n["scroll"+e],Re(10)?parseInt(n["offset"+e])+parseInt(i["margin"+("Height"===e?"Top":"Left")])+parseInt(i["margin"+("Height"===e?"Bottom":"Right")]):0)}function Ke(e){var t=e.body,n=e.documentElement,i=Re(10)&&getComputedStyle(n);return{height:qe("Height",t,n,i),width:qe("Width",t,n,i)}}var Qe=function(e,t,n){return t&&Ve(e.prototype,t),n&&Ve(e,n),e};function Ve(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function Ye(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ze=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};function Xe(e){return ze({},e,{right:e.left+e.width,bottom:e.top+e.height})}function Ge(e){var t={};try{if(Re(10)){t=e.getBoundingClientRect();var n=Ue(e,"top"),i=Ue(e,"left");t.top+=n,t.left+=i,t.bottom+=n,t.right+=i}else t=e.getBoundingClientRect()}catch(e){}var o={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},r="HTML"===e.nodeName?Ke(e.ownerDocument):{},s=r.width||e.clientWidth||o.width,a=r.height||e.clientHeight||o.height,l=e.offsetWidth-s,c=e.offsetHeight-a;if(l||c){var h=ke(e);l-=Be(h,"x"),c-=Be(h,"y"),o.width-=l,o.height-=c}return Xe(o)}function $e(e,t,n){var i=2<arguments.length&&void 0!==n&&n,o=Re(10),r="HTML"===t.nodeName,s=Ge(e),a=Ge(t),l=Pe(e),c=ke(t),h=parseFloat(c.borderTopWidth,10),u=parseFloat(c.borderLeftWidth,10);i&&r&&(a.top=Math.max(a.top,0),a.left=Math.max(a.left,0));var f=Xe({top:s.top-a.top-h,left:s.left-a.left-u,width:s.width,height:s.height});if(f.marginTop=0,f.marginLeft=0,!o&&r){var d=parseFloat(c.marginTop,10),p=parseFloat(c.marginLeft,10);f.top-=h-d,f.bottom-=h-d,f.left-=u-p,f.right-=u-p,f.marginTop=d,f.marginLeft=p}return(o&&!i?t.contains(l):t===l&&"BODY"!==l.nodeName)&&(f=function(e,t,n){var i=2<arguments.length&&void 0!==n&&n,o=Ue(t,"top"),r=Ue(t,"left"),s=i?-1:1;return e.top+=o*s,e.bottom+=o*s,e.left+=r*s,e.right+=r*s,e}(f,t)),f}function Je(e){if(!e||!e.parentElement||Re())return document.documentElement;for(var t=e.parentElement;t&&"none"===ke(t,"transform");)t=t.parentElement;return t||document.documentElement}function Ze(e,t,n,i,o){var r=4<arguments.length&&void 0!==o&&o,s={top:0,left:0},a=r?Je(e):We(e,xe(t));if("viewport"===i)s=function(e,t){var n=1<arguments.length&&void 0!==t&&t,i=e.ownerDocument.documentElement,o=$e(e,i),r=Math.max(i.clientWidth,window.innerWidth||0),s=Math.max(i.clientHeight,window.innerHeight||0),a=n?0:Ue(i),l=n?0:Ue(i,"left");return Xe({top:a-o.top+o.marginTop,left:l-o.left+o.marginLeft,width:r,height:s})}(a,r);else{var l=void 0;"scrollParent"===i?"BODY"===(l=Pe(Le(t))).nodeName&&(l=e.ownerDocument.documentElement):l="window"===i?e.ownerDocument.documentElement:i;var c=$e(l,a,r);if("HTML"!==l.nodeName||function e(t){var n=t.nodeName;if("BODY"===n||"HTML"===n)return!1;if("fixed"===ke(t,"position"))return!0;var i=Le(t);return!!i&&e(i)}(a))s=c;else{var h=Ke(e.ownerDocument),u=h.height,f=h.width;s.top+=c.top-c.marginTop,s.bottom=u+c.top,s.left+=c.left-c.marginLeft,s.right=f+c.left}}var d="number"==typeof(n=n||0);return s.left+=d?n:n.left||0,s.top+=d?n:n.top||0,s.right-=d?n:n.right||0,s.bottom-=d?n:n.bottom||0,s}function et(e,t,i,n,o,r){var s=5<arguments.length&&void 0!==r?r:0;if(-1===e.indexOf("auto"))return e;var a=Ze(i,n,s,o),l={top:{width:a.width,height:t.top-a.top},right:{width:a.right-t.right,height:a.height},bottom:{width:a.width,height:a.bottom-t.bottom},left:{width:t.left-a.left,height:a.height}},c=Object.keys(l).map(function(e){return ze({key:e},l[e],{area:function(e){return e.width*e.height}(l[e])})}).sort(function(e,t){return t.area-e.area}),h=c.filter(function(e){var t=e.width,n=e.height;return t>=i.clientWidth&&n>=i.clientHeight}),u=0<h.length?h[0].key:c[0].key,f=e.split("-")[1];return u+(f?"-"+f:"")}function tt(e,t,n,i){var o=3<arguments.length&&void 0!==i?i:null;return $e(n,o?Je(t):We(t,xe(n)),o)}function nt(e){var t=e.ownerDocument.defaultView.getComputedStyle(e),n=parseFloat(t.marginTop||0)+parseFloat(t.marginBottom||0),i=parseFloat(t.marginLeft||0)+parseFloat(t.marginRight||0);return{width:e.offsetWidth+i,height:e.offsetHeight+n}}function it(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function ot(e,t,n){n=n.split("-")[0];var i=nt(e),o={width:i.width,height:i.height},r=-1!==["right","left"].indexOf(n),s=r?"top":"left",a=r?"left":"top",l=r?"height":"width",c=r?"width":"height";return o[s]=t[s]+t[l]/2-i[l]/2,o[a]=n===a?t[a]-i[c]:t[it(a)],o}function rt(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function st(e,n,t){return(void 0===t?e:e.slice(0,function(e,t,n){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===n});var i=rt(e,function(e){return e[t]===n});return e.indexOf(i)}(e,"name",t))).forEach(function(e){e.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var t=e.function||e.fn;e.enabled&&Ne(t)&&(n.offsets.popper=Xe(n.offsets.popper),n.offsets.reference=Xe(n.offsets.reference),n=t(n,e))}),n}function at(e,n){return e.some(function(e){var t=e.name;return e.enabled&&t===n})}function lt(e){for(var t=[!1,"ms","Webkit","Moz","O"],n=e.charAt(0).toUpperCase()+e.slice(1),i=0;i<t.length;i++){var o=t[i],r=o?""+o+n:e;if("undefined"!=typeof document.body.style[r])return r}return null}function ct(e){var t=e.ownerDocument;return t?t.defaultView:window}function ht(e,t,n,i){n.updateBound=i,ct(e).addEventListener("resize",n.updateBound,{passive:!0});var o=Pe(e);return function e(t,n,i,o){var r="BODY"===t.nodeName,s=r?t.ownerDocument.defaultView:t;s.addEventListener(n,i,{passive:!0}),r||e(Pe(s.parentNode),n,i,o),o.push(s)}(o,"scroll",n.updateBound,n.scrollParents),n.scrollElement=o,n.eventsEnabled=!0,n}function ut(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=function(e,t){return ct(e).removeEventListener("resize",t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener("scroll",t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}(this.reference,this.state))}function ft(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function dt(n,i){Object.keys(i).forEach(function(e){var t="";-1!==["width","height","top","right","bottom","left"].indexOf(e)&&ft(i[e])&&(t="px"),n.style[e]=i[e]+t})}function pt(e,t){function n(e){return e}var i=e.offsets,o=i.popper,r=i.reference,s=Math.round,a=Math.floor,l=s(r.width),c=s(o.width),h=-1!==["left","right"].indexOf(e.placement),u=-1!==e.placement.indexOf("-"),f=t?h||u||l%2==c%2?s:a:n,d=t?s:n;return{left:f(l%2==1&&c%2==1&&!u&&t?o.left-1:o.left),top:d(o.top),bottom:d(o.bottom),right:f(o.right)}}var mt=Ie&&/Firefox/i.test(navigator.userAgent);function gt(e,t,n){var i=rt(e,function(e){return e.name===t}),o=!!i&&e.some(function(e){return e.name===n&&e.enabled&&e.order<i.order});if(!o){var r="`"+t+"`",s="`"+n+"`";console.warn(s+" modifier is required by "+r+" modifier in order to work, be sure to include it before "+r+"!")}return o}var _t=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],vt=_t.slice(3);function yt(e,t){var n=1<arguments.length&&void 0!==t&&t,i=vt.indexOf(e),o=vt.slice(i+1).concat(vt.slice(0,i));return n?o.reverse():o}var Et="flip",bt="clockwise",wt="counterclockwise";function Tt(e,o,r,t){var s=[0,0],a=-1!==["right","left"].indexOf(t),n=e.split(/(\+|\-)/).map(function(e){return e.trim()}),i=n.indexOf(rt(n,function(e){return-1!==e.search(/,|\s/)}));n[i]&&-1===n[i].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var l=/\s*,\s*|\s+/,c=-1!==i?[n.slice(0,i).concat([n[i].split(l)[0]]),[n[i].split(l)[1]].concat(n.slice(i+1))]:[n];return(c=c.map(function(e,t){var n=(1===t?!a:a)?"height":"width",i=!1;return e.reduce(function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,i=!0,e):i?(e[e.length-1]+=t,i=!1,e):e.concat(t)},[]).map(function(e){return function(e,t,n,i){var o=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+o[1],s=o[2];if(!r)return e;if(0!==s.indexOf("%"))return"vh"!==s&&"vw"!==s?r:("vh"===s?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*r;var a=void 0;switch(s){case"%p":a=n;break;case"%":case"%r":default:a=i}return Xe(a)[t]/100*r}(e,n,o,r)})})).forEach(function(n,i){n.forEach(function(e,t){ft(e)&&(s[i]+=e*("-"===n[t-1]?-1:1))})}),s}var Ct={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,n=t.split("-")[0],i=t.split("-")[1];if(i){var o=e.offsets,r=o.reference,s=o.popper,a=-1!==["bottom","top"].indexOf(n),l=a?"left":"top",c=a?"width":"height",h={start:Ye({},l,r[l]),end:Ye({},l,r[l]+r[c]-s[c])};e.offsets.popper=ze({},s,h[i])}return e}},offset:{order:200,enabled:!0,fn:function(e,t){var n=t.offset,i=e.placement,o=e.offsets,r=o.popper,s=o.reference,a=i.split("-")[0],l=void 0;return l=ft(+n)?[+n,0]:Tt(n,r,s,a),"left"===a?(r.top+=l[0],r.left-=l[1]):"right"===a?(r.top+=l[0],r.left+=l[1]):"top"===a?(r.left+=l[0],r.top-=l[1]):"bottom"===a&&(r.left+=l[0],r.top+=l[1]),e.popper=r,e},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,i){var t=i.boundariesElement||Fe(e.instance.popper);e.instance.reference===t&&(t=Fe(t));var n=lt("transform"),o=e.instance.popper.style,r=o.top,s=o.left,a=o[n];o.top="",o.left="",o[n]="";var l=Ze(e.instance.popper,e.instance.reference,i.padding,t,e.positionFixed);o.top=r,o.left=s,o[n]=a,i.boundaries=l;var c=i.priority,h=e.offsets.popper,u={primary:function(e){var t=h[e];return h[e]<l[e]&&!i.escapeWithReference&&(t=Math.max(h[e],l[e])),Ye({},e,t)},secondary:function(e){var t="right"===e?"left":"top",n=h[t];return h[e]>l[e]&&!i.escapeWithReference&&(n=Math.min(h[t],l[e]-("right"===e?h.width:h.height))),Ye({},t,n)}};return c.forEach(function(e){var t=-1!==["left","top"].indexOf(e)?"primary":"secondary";h=ze({},h,u[t](e))}),e.offsets.popper=h,e},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,n=t.popper,i=t.reference,o=e.placement.split("-")[0],r=Math.floor,s=-1!==["top","bottom"].indexOf(o),a=s?"right":"bottom",l=s?"left":"top",c=s?"width":"height";return n[a]<r(i[l])&&(e.offsets.popper[l]=r(i[l])-n[c]),n[l]>r(i[a])&&(e.offsets.popper[l]=r(i[a])),e}},arrow:{order:500,enabled:!0,fn:function(e,t){var n;if(!gt(e.instance.modifiers,"arrow","keepTogether"))return e;var i=t.element;if("string"==typeof i){if(!(i=e.instance.popper.querySelector(i)))return e}else if(!e.instance.popper.contains(i))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var o=e.placement.split("-")[0],r=e.offsets,s=r.popper,a=r.reference,l=-1!==["left","right"].indexOf(o),c=l?"height":"width",h=l?"Top":"Left",u=h.toLowerCase(),f=l?"left":"top",d=l?"bottom":"right",p=nt(i)[c];a[d]-p<s[u]&&(e.offsets.popper[u]-=s[u]-(a[d]-p)),a[u]+p>s[d]&&(e.offsets.popper[u]+=a[u]+p-s[d]),e.offsets.popper=Xe(e.offsets.popper);var m=a[u]+a[c]/2-p/2,g=ke(e.instance.popper),_=parseFloat(g["margin"+h],10),v=parseFloat(g["border"+h+"Width"],10),y=m-e.offsets.popper[u]-_-v;return y=Math.max(Math.min(s[c]-p,y),0),e.arrowElement=i,e.offsets.arrow=(Ye(n={},u,Math.round(y)),Ye(n,f,""),n),e},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(m,g){if(at(m.instance.modifiers,"inner"))return m;if(m.flipped&&m.placement===m.originalPlacement)return m;var _=Ze(m.instance.popper,m.instance.reference,g.padding,g.boundariesElement,m.positionFixed),v=m.placement.split("-")[0],y=it(v),E=m.placement.split("-")[1]||"",b=[];switch(g.behavior){case Et:b=[v,y];break;case bt:b=yt(v);break;case wt:b=yt(v,!0);break;default:b=g.behavior}return b.forEach(function(e,t){if(v!==e||b.length===t+1)return m;v=m.placement.split("-")[0],y=it(v);var n=m.offsets.popper,i=m.offsets.reference,o=Math.floor,r="left"===v&&o(n.right)>o(i.left)||"right"===v&&o(n.left)<o(i.right)||"top"===v&&o(n.bottom)>o(i.top)||"bottom"===v&&o(n.top)<o(i.bottom),s=o(n.left)<o(_.left),a=o(n.right)>o(_.right),l=o(n.top)<o(_.top),c=o(n.bottom)>o(_.bottom),h="left"===v&&s||"right"===v&&a||"top"===v&&l||"bottom"===v&&c,u=-1!==["top","bottom"].indexOf(v),f=!!g.flipVariations&&(u&&"start"===E&&s||u&&"end"===E&&a||!u&&"start"===E&&l||!u&&"end"===E&&c),d=!!g.flipVariationsByContent&&(u&&"start"===E&&a||u&&"end"===E&&s||!u&&"start"===E&&c||!u&&"end"===E&&l),p=f||d;(r||h||p)&&(m.flipped=!0,(r||h)&&(v=b[t+1]),p&&(E=function(e){return"end"===e?"start":"start"===e?"end":e}(E)),m.placement=v+(E?"-"+E:""),m.offsets.popper=ze({},m.offsets.popper,ot(m.instance.popper,m.offsets.reference,m.placement)),m=st(m.instance.modifiers,m,"flip"))}),m},behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,n=t.split("-")[0],i=e.offsets,o=i.popper,r=i.reference,s=-1!==["left","right"].indexOf(n),a=-1===["top","left"].indexOf(n);return o[s?"left":"top"]=r[n]-(a?o[s?"width":"height"]:0),e.placement=it(t),e.offsets.popper=Xe(o),e}},hide:{order:800,enabled:!0,fn:function(e){if(!gt(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,n=rt(e.instance.modifiers,function(e){return"preventOverflow"===e.name}).boundaries;if(t.bottom<n.top||t.left>n.right||t.top>n.bottom||t.right<n.left){if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var n=t.x,i=t.y,o=e.offsets.popper,r=rt(e.instance.modifiers,function(e){return"applyStyle"===e.name}).gpuAcceleration;void 0!==r&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var s=void 0!==r?r:t.gpuAcceleration,a=Fe(e.instance.popper),l=Ge(a),c={position:o.position},h=pt(e,window.devicePixelRatio<2||!mt),u="bottom"===n?"top":"bottom",f="right"===i?"left":"right",d=lt("transform"),p=void 0,m=void 0;if(m="bottom"==u?"HTML"===a.nodeName?-a.clientHeight+h.bottom:-l.height+h.bottom:h.top,p="right"==f?"HTML"===a.nodeName?-a.clientWidth+h.right:-l.width+h.right:h.left,s&&d)c[d]="translate3d("+p+"px, "+m+"px, 0)",c[u]=0,c[f]=0,c.willChange="transform";else{var g="bottom"==u?-1:1,_="right"==f?-1:1;c[u]=m*g,c[f]=p*_,c.willChange=u+", "+f}var v={"x-placement":e.placement};return e.attributes=ze({},v,e.attributes),e.styles=ze({},c,e.styles),e.arrowStyles=ze({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(e){return dt(e.instance.popper,e.styles),function(t,n){Object.keys(n).forEach(function(e){!1!==n[e]?t.setAttribute(e,n[e]):t.removeAttribute(e)})}(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&dt(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,n,i,o){var r=tt(o,t,e,n.positionFixed),s=et(n.placement,r,t,e,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return t.setAttribute("x-placement",s),dt(t,{position:n.positionFixed?"fixed":"absolute"}),n},gpuAcceleration:void 0}}},St=(Qe(Dt,[{key:"update",value:function(){return function(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=tt(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=et(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=ot(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",e=st(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}.call(this)}},{key:"destroy",value:function(){return function(){return this.state.isDestroyed=!0,at(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[lt("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}.call(this)}},{key:"enableEventListeners",value:function(){return function(){this.state.eventsEnabled||(this.state=ht(this.reference,this.options,this.state,this.scheduleUpdate))}.call(this)}},{key:"disableEventListeners",value:function(){return ut.call(this)}}]),Dt);function Dt(e,t){var n=this,i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Dt),this.scheduleUpdate=function(){return requestAnimationFrame(n.update)},this.update=Oe(this.update.bind(this)),this.options=ze({},Dt.Defaults,i),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=e&&e.jquery?e[0]:e,this.popper=t&&t.jquery?t[0]:t,this.options.modifiers={},Object.keys(ze({},Dt.Defaults.modifiers,i.modifiers)).forEach(function(e){n.options.modifiers[e]=ze({},Dt.Defaults.modifiers[e]||{},i.modifiers?i.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return ze({name:e},n.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(e){e.enabled&&Ne(e.onLoad)&&e.onLoad(n.reference,n.popper,n.options,e,n.state)}),this.update();var o=this.options.eventsEnabled;o&&this.enableEventListeners(),this.state.eventsEnabled=o}St.Utils=("undefined"!=typeof window?window:global).PopperUtils,St.placements=_t,St.Defaults=Ct;var It="dropdown",At="bs.dropdown",Ot="."+At,Nt=".data-api",kt=p.fn[It],Lt=new RegExp("38|40|27"),Pt={HIDE:"hide"+Ot,HIDDEN:"hidden"+Ot,SHOW:"show"+Ot,SHOWN:"shown"+Ot,CLICK:"click"+Ot,CLICK_DATA_API:"click"+Ot+Nt,KEYDOWN_DATA_API:"keydown"+Ot+Nt,KEYUP_DATA_API:"keyup"+Ot+Nt},xt="disabled",jt="show",Ht="dropup",Rt="dropright",Ft="dropleft",Mt="dropdown-menu-right",Wt="position-static",Ut='[data-toggle="dropdown"]',Bt=".dropdown form",qt=".dropdown-menu",Kt=".navbar-nav",Qt=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Vt="top-start",Yt="top-end",zt="bottom-start",Xt="bottom-end",Gt="right-start",$t="left-start",Jt={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic",popperConfig:null},Zt={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string",popperConfig:"(null|object)"},en=function(){function c(e,t){this._element=e,this._popper=null,this._config=this._getConfig(t),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var e=c.prototype;return e.toggle=function(){if(!this._element.disabled&&!p(this._element).hasClass(xt)){var e=p(this._menu).hasClass(jt);c._clearMenus(),e||this.show(!0)}},e.show=function(e){if(void 0===e&&(e=!1),!(this._element.disabled||p(this._element).hasClass(xt)||p(this._menu).hasClass(jt))){var t={relatedTarget:this._element},n=p.Event(Pt.SHOW,t),i=c._getParentFromElement(this._element);if(p(i).trigger(n),!n.isDefaultPrevented()){if(!this._inNavbar&&e){if("undefined"==typeof St)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var o=this._element;"parent"===this._config.reference?o=i:m.isElement(this._config.reference)&&(o=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(o=this._config.reference[0])),"scrollParent"!==this._config.boundary&&p(i).addClass(Wt),this._popper=new St(o,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===p(i).closest(Kt).length&&p(document.body).children().on("mouseover",null,p.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),p(this._menu).toggleClass(jt),p(i).toggleClass(jt).trigger(p.Event(Pt.SHOWN,t))}}},e.hide=function(){if(!this._element.disabled&&!p(this._element).hasClass(xt)&&p(this._menu).hasClass(jt)){var e={relatedTarget:this._element},t=p.Event(Pt.HIDE,e),n=c._getParentFromElement(this._element);p(n).trigger(t),t.isDefaultPrevented()||(this._popper&&this._popper.destroy(),p(this._menu).toggleClass(jt),p(n).toggleClass(jt).trigger(p.Event(Pt.HIDDEN,e)))}},e.dispose=function(){p.removeData(this._element,At),p(this._element).off(Ot),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},e.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},e._addEventListeners=function(){var t=this;p(this._element).on(Pt.CLICK,function(e){e.preventDefault(),e.stopPropagation(),t.toggle()})},e._getConfig=function(e){return e=l({},this.constructor.Default,{},p(this._element).data(),{},e),m.typeCheckConfig(It,e,this.constructor.DefaultType),e},e._getMenuElement=function(){if(!this._menu){var e=c._getParentFromElement(this._element);e&&(this._menu=e.querySelector(qt))}return this._menu},e._getPlacement=function(){var e=p(this._element.parentNode),t=zt;return e.hasClass(Ht)?(t=Vt,p(this._menu).hasClass(Mt)&&(t=Yt)):e.hasClass(Rt)?t=Gt:e.hasClass(Ft)?t=$t:p(this._menu).hasClass(Mt)&&(t=Xt),t},e._detectNavbar=function(){return 0<p(this._element).closest(".navbar").length},e._getOffset=function(){var t=this,e={};return"function"==typeof this._config.offset?e.fn=function(e){return e.offsets=l({},e.offsets,{},t._config.offset(e.offsets,t._element)||{}),e}:e.offset=this._config.offset,e},e._getPopperConfig=function(){var e={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(e.modifiers.applyStyle={enabled:!1}),l({},e,{},this._config.popperConfig)},c._jQueryInterface=function(t){return this.each(function(){var e=p(this).data(At);if(e||(e=new c(this,"object"==typeof t?t:null),p(this).data(At,e)),"string"==typeof t){if("undefined"==typeof e[t])throw new TypeError('No method named "'+t+'"');e[t]()}})},c._clearMenus=function(e){if(!e||3!==e.which&&("keyup"!==e.type||9===e.which))for(var t=[].slice.call(document.querySelectorAll(Ut)),n=0,i=t.length;n<i;n++){var o=c._getParentFromElement(t[n]),r=p(t[n]).data(At),s={relatedTarget:t[n]};if(e&&"click"===e.type&&(s.clickEvent=e),r){var a=r._menu;if(p(o).hasClass(jt)&&!(e&&("click"===e.type&&/input|textarea/i.test(e.target.tagName)||"keyup"===e.type&&9===e.which)&&p.contains(o,e.target))){var l=p.Event(Pt.HIDE,s);p(o).trigger(l),l.isDefaultPrevented()||("ontouchstart"in document.documentElement&&p(document.body).children().off("mouseover",null,p.noop),t[n].setAttribute("aria-expanded","false"),r._popper&&r._popper.destroy(),p(a).removeClass(jt),p(o).removeClass(jt).trigger(p.Event(Pt.HIDDEN,s)))}}}},c._getParentFromElement=function(e){var t,n=m.getSelectorFromElement(e);return n&&(t=document.querySelector(n)),t||e.parentNode},c._dataApiKeydownHandler=function(e){if((/input|textarea/i.test(e.target.tagName)?!(32===e.which||27!==e.which&&(40!==e.which&&38!==e.which||p(e.target).closest(qt).length)):Lt.test(e.which))&&(e.preventDefault(),e.stopPropagation(),!this.disabled&&!p(this).hasClass(xt))){var t=c._getParentFromElement(this),n=p(t).hasClass(jt);if(n||27!==e.which)if(n&&(!n||27!==e.which&&32!==e.which)){var i=[].slice.call(t.querySelectorAll(Qt)).filter(function(e){return p(e).is(":visible")});if(0!==i.length){var o=i.indexOf(e.target);38===e.which&&0<o&&o--,40===e.which&&o<i.length-1&&o++,o<0&&(o=0),i[o].focus()}}else{if(27===e.which){var r=t.querySelector(Ut);p(r).trigger("focus")}p(this).trigger("click")}}},s(c,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return Jt}},{key:"DefaultType",get:function(){return Zt}}]),c}();p(document).on(Pt.KEYDOWN_DATA_API,Ut,en._dataApiKeydownHandler).on(Pt.KEYDOWN_DATA_API,qt,en._dataApiKeydownHandler).on(Pt.CLICK_DATA_API+" "+Pt.KEYUP_DATA_API,en._clearMenus).on(Pt.CLICK_DATA_API,Ut,function(e){e.preventDefault(),e.stopPropagation(),en._jQueryInterface.call(p(this),"toggle")}).on(Pt.CLICK_DATA_API,Bt,function(e){e.stopPropagation()}),p.fn[It]=en._jQueryInterface,p.fn[It].Constructor=en,p.fn[It].noConflict=function(){return p.fn[It]=kt,en._jQueryInterface};var tn="modal",nn="bs.modal",on="."+nn,rn=p.fn[tn],sn={backdrop:!0,keyboard:!0,focus:!0,show:!0},an={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},ln={HIDE:"hide"+on,HIDE_PREVENTED:"hidePrevented"+on,HIDDEN:"hidden"+on,SHOW:"show"+on,SHOWN:"shown"+on,FOCUSIN:"focusin"+on,RESIZE:"resize"+on,CLICK_DISMISS:"click.dismiss"+on,KEYDOWN_DISMISS:"keydown.dismiss"+on,MOUSEUP_DISMISS:"mouseup.dismiss"+on,MOUSEDOWN_DISMISS:"mousedown.dismiss"+on,CLICK_DATA_API:"click"+on+".data-api"},cn="modal-dialog-scrollable",hn="modal-scrollbar-measure",un="modal-backdrop",fn="modal-open",dn="fade",pn="show",mn="modal-static",gn=".modal-dialog",_n=".modal-body",vn='[data-toggle="modal"]',yn='[data-dismiss="modal"]',En=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",bn=".sticky-top",wn=function(){function o(e,t){this._config=this._getConfig(t),this._element=e,this._dialog=e.querySelector(gn),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var e=o.prototype;return e.toggle=function(e){return this._isShown?this.hide():this.show(e)},e.show=function(e){var t=this;if(!this._isShown&&!this._isTransitioning){p(this._element).hasClass(dn)&&(this._isTransitioning=!0);var n=p.Event(ln.SHOW,{relatedTarget:e});p(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),p(this._element).on(ln.CLICK_DISMISS,yn,function(e){return t.hide(e)}),p(this._dialog).on(ln.MOUSEDOWN_DISMISS,function(){p(t._element).one(ln.MOUSEUP_DISMISS,function(e){p(e.target).is(t._element)&&(t._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return t._showElement(e)}))}},e.hide=function(e){var t=this;if(e&&e.preventDefault(),this._isShown&&!this._isTransitioning){var n=p.Event(ln.HIDE);if(p(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=p(this._element).hasClass(dn);if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),p(document).off(ln.FOCUSIN),p(this._element).removeClass(pn),p(this._element).off(ln.CLICK_DISMISS),p(this._dialog).off(ln.MOUSEDOWN_DISMISS),i){var o=m.getTransitionDurationFromElement(this._element);p(this._element).one(m.TRANSITION_END,function(e){return t._hideModal(e)}).emulateTransitionEnd(o)}else this._hideModal()}}},e.dispose=function(){[window,this._element,this._dialog].forEach(function(e){return p(e).off(on)}),p(document).off(ln.FOCUSIN),p.removeData(this._element,nn),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},e.handleUpdate=function(){this._adjustDialog()},e._getConfig=function(e){return e=l({},sn,{},e),m.typeCheckConfig(tn,e,an),e},e._triggerBackdropTransition=function(){var e=this;if("static"===this._config.backdrop){var t=p.Event(ln.HIDE_PREVENTED);if(p(this._element).trigger(t),t.defaultPrevented)return;this._element.classList.add(mn);var n=m.getTransitionDurationFromElement(this._element);p(this._element).one(m.TRANSITION_END,function(){e._element.classList.remove(mn)}).emulateTransitionEnd(n),this._element.focus()}else this.hide()},e._showElement=function(e){var t=this,n=p(this._element).hasClass(dn),i=this._dialog?this._dialog.querySelector(_n):null;this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),p(this._dialog).hasClass(cn)&&i?i.scrollTop=0:this._element.scrollTop=0,n&&m.reflow(this._element),p(this._element).addClass(pn),this._config.focus&&this._enforceFocus();function o(){t._config.focus&&t._element.focus(),t._isTransitioning=!1,p(t._element).trigger(r)}var r=p.Event(ln.SHOWN,{relatedTarget:e});if(n){var s=m.getTransitionDurationFromElement(this._dialog);p(this._dialog).one(m.TRANSITION_END,o).emulateTransitionEnd(s)}else o()},e._enforceFocus=function(){var t=this;p(document).off(ln.FOCUSIN).on(ln.FOCUSIN,function(e){document!==e.target&&t._element!==e.target&&0===p(t._element).has(e.target).length&&t._element.focus()})},e._setEscapeEvent=function(){var t=this;this._isShown&&this._config.keyboard?p(this._element).on(ln.KEYDOWN_DISMISS,function(e){27===e.which&&t._triggerBackdropTransition()}):this._isShown||p(this._element).off(ln.KEYDOWN_DISMISS)},e._setResizeEvent=function(){var t=this;this._isShown?p(window).on(ln.RESIZE,function(e){return t.handleUpdate(e)}):p(window).off(ln.RESIZE)},e._hideModal=function(){var e=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop(function(){p(document.body).removeClass(fn),e._resetAdjustments(),e._resetScrollbar(),p(e._element).trigger(ln.HIDDEN)})},e._removeBackdrop=function(){this._backdrop&&(p(this._backdrop).remove(),this._backdrop=null)},e._showBackdrop=function(e){var t=this,n=p(this._element).hasClass(dn)?dn:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=un,n&&this._backdrop.classList.add(n),p(this._backdrop).appendTo(document.body),p(this._element).on(ln.CLICK_DISMISS,function(e){t._ignoreBackdropClick?t._ignoreBackdropClick=!1:e.target===e.currentTarget&&t._triggerBackdropTransition()}),n&&m.reflow(this._backdrop),p(this._backdrop).addClass(pn),!e)return;if(!n)return void e();var i=m.getTransitionDurationFromElement(this._backdrop);p(this._backdrop).one(m.TRANSITION_END,e).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){p(this._backdrop).removeClass(pn);var o=function(){t._removeBackdrop(),e&&e()};if(p(this._element).hasClass(dn)){var r=m.getTransitionDurationFromElement(this._backdrop);p(this._backdrop).one(m.TRANSITION_END,o).emulateTransitionEnd(r)}else o()}else e&&e()},e._adjustDialog=function(){var e=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&e&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!e&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},e._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},e._checkScrollbar=function(){var e=document.body.getBoundingClientRect();this._isBodyOverflowing=e.left+e.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},e._setScrollbar=function(){var o=this;if(this._isBodyOverflowing){var e=[].slice.call(document.querySelectorAll(En)),t=[].slice.call(document.querySelectorAll(bn));p(e).each(function(e,t){var n=t.style.paddingRight,i=p(t).css("padding-right");p(t).data("padding-right",n).css("padding-right",parseFloat(i)+o._scrollbarWidth+"px")}),p(t).each(function(e,t){var n=t.style.marginRight,i=p(t).css("margin-right");p(t).data("margin-right",n).css("margin-right",parseFloat(i)-o._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=p(document.body).css("padding-right");p(document.body).data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}p(document.body).addClass(fn)},e._resetScrollbar=function(){var e=[].slice.call(document.querySelectorAll(En));p(e).each(function(e,t){var n=p(t).data("padding-right");p(t).removeData("padding-right"),t.style.paddingRight=n||""});var t=[].slice.call(document.querySelectorAll(""+bn));p(t).each(function(e,t){var n=p(t).data("margin-right");"undefined"!=typeof n&&p(t).css("margin-right",n).removeData("margin-right")});var n=p(document.body).data("padding-right");p(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},e._getScrollbarWidth=function(){var e=document.createElement("div");e.className=hn,document.body.appendChild(e);var t=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),t},o._jQueryInterface=function(n,i){return this.each(function(){var e=p(this).data(nn),t=l({},sn,{},p(this).data(),{},"object"==typeof n&&n?n:{});if(e||(e=new o(this,t),p(this).data(nn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n](i)}else t.show&&e.show(i)})},s(o,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return sn}}]),o}();p(document).on(ln.CLICK_DATA_API,vn,function(e){var t,n=this,i=m.getSelectorFromElement(this);i&&(t=document.querySelector(i));var o=p(t).data(nn)?"toggle":l({},p(t).data(),{},p(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||e.preventDefault();var r=p(t).one(ln.SHOW,function(e){e.isDefaultPrevented()||r.one(ln.HIDDEN,function(){p(n).is(":visible")&&n.focus()})});wn._jQueryInterface.call(p(t),o,this)}),p.fn[tn]=wn._jQueryInterface,p.fn[tn].Constructor=wn,p.fn[tn].noConflict=function(){return p.fn[tn]=rn,wn._jQueryInterface};var Tn=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],Cn={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Sn=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,Dn=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function In(e,r,t){if(0===e.length)return e;if(t&&"function"==typeof t)return t(e);for(var n=(new window.DOMParser).parseFromString(e,"text/html"),s=Object.keys(r),a=[].slice.call(n.body.querySelectorAll("*")),i=function(e){var t=a[e],n=t.nodeName.toLowerCase();if(-1===s.indexOf(t.nodeName.toLowerCase()))return t.parentNode.removeChild(t),"continue";var i=[].slice.call(t.attributes),o=[].concat(r["*"]||[],r[n]||[]);i.forEach(function(e){!function(e,t){var n=e.nodeName.toLowerCase();if(-1!==t.indexOf(n))return-1===Tn.indexOf(n)||Boolean(e.nodeValue.match(Sn)||e.nodeValue.match(Dn));for(var i=t.filter(function(e){return e instanceof RegExp}),o=0,r=i.length;o<r;o++)if(n.match(i[o]))return!0;return!1}(e,o)&&t.removeAttribute(e.nodeName)})},o=0,l=a.length;o<l;o++)i(o);return n.body.innerHTML}var An="tooltip",On="bs.tooltip",Nn="."+On,kn=p.fn[An],Ln="bs-tooltip",Pn=new RegExp("(^|\\s)"+Ln+"\\S+","g"),xn=["sanitize","whiteList","sanitizeFn"],jn={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object",popperConfig:"(null|object)"},Hn={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},Rn={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:Cn,popperConfig:null},Fn="show",Mn="out",Wn={HIDE:"hide"+Nn,HIDDEN:"hidden"+Nn,SHOW:"show"+Nn,SHOWN:"shown"+Nn,INSERTED:"inserted"+Nn,CLICK:"click"+Nn,FOCUSIN:"focusin"+Nn,FOCUSOUT:"focusout"+Nn,MOUSEENTER:"mouseenter"+Nn,MOUSELEAVE:"mouseleave"+Nn},Un="fade",Bn="show",qn=".tooltip-inner",Kn=".arrow",Qn="hover",Vn="focus",Yn="click",zn="manual",Xn=function(){function i(e,t){if("undefined"==typeof St)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=e,this.config=this._getConfig(t),this.tip=null,this._setListeners()}var e=i.prototype;return e.enable=function(){this._isEnabled=!0},e.disable=function(){this._isEnabled=!1},e.toggleEnabled=function(){this._isEnabled=!this._isEnabled},e.toggle=function(e){if(this._isEnabled)if(e){var t=this.constructor.DATA_KEY,n=p(e.currentTarget).data(t);n||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),p(e.currentTarget).data(t,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(p(this.getTipElement()).hasClass(Bn))return void this._leave(null,this);this._enter(null,this)}},e.dispose=function(){clearTimeout(this._timeout),p.removeData(this.element,this.constructor.DATA_KEY),p(this.element).off(this.constructor.EVENT_KEY),p(this.element).closest(".modal").off("hide.bs.modal",this._hideModalHandler),this.tip&&p(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},e.show=function(){var t=this;if("none"===p(this.element).css("display"))throw new Error("Please use show on visible elements");var e=p.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){p(this.element).trigger(e);var n=m.findShadowRoot(this.element),i=p.contains(null!==n?n:this.element.ownerDocument.documentElement,this.element);if(e.isDefaultPrevented()||!i)return;var o=this.getTipElement(),r=m.getUID(this.constructor.NAME);o.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&p(o).addClass(Un);var s="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,a=this._getAttachment(s);this.addAttachmentClass(a);var l=this._getContainer();p(o).data(this.constructor.DATA_KEY,this),p.contains(this.element.ownerDocument.documentElement,this.tip)||p(o).appendTo(l),p(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new St(this.element,o,this._getPopperConfig(a)),p(o).addClass(Bn),"ontouchstart"in document.documentElement&&p(document.body).children().on("mouseover",null,p.noop);var c=function(){t.config.animation&&t._fixTransition();var e=t._hoverState;t._hoverState=null,p(t.element).trigger(t.constructor.Event.SHOWN),e===Mn&&t._leave(null,t)};if(p(this.tip).hasClass(Un)){var h=m.getTransitionDurationFromElement(this.tip);p(this.tip).one(m.TRANSITION_END,c).emulateTransitionEnd(h)}else c()}},e.hide=function(e){function t(){n._hoverState!==Fn&&i.parentNode&&i.parentNode.removeChild(i),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),p(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),e&&e()}var n=this,i=this.getTipElement(),o=p.Event(this.constructor.Event.HIDE);if(p(this.element).trigger(o),!o.isDefaultPrevented()){if(p(i).removeClass(Bn),"ontouchstart"in document.documentElement&&p(document.body).children().off("mouseover",null,p.noop),this._activeTrigger[Yn]=!1,this._activeTrigger[Vn]=!1,this._activeTrigger[Qn]=!1,p(this.tip).hasClass(Un)){var r=m.getTransitionDurationFromElement(i);p(i).one(m.TRANSITION_END,t).emulateTransitionEnd(r)}else t();this._hoverState=""}},e.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},e.isWithContent=function(){return Boolean(this.getTitle())},e.addAttachmentClass=function(e){p(this.getTipElement()).addClass(Ln+"-"+e)},e.getTipElement=function(){return this.tip=this.tip||p(this.config.template)[0],this.tip},e.setContent=function(){var e=this.getTipElement();this.setElementContent(p(e.querySelectorAll(qn)),this.getTitle()),p(e).removeClass(Un+" "+Bn)},e.setElementContent=function(e,t){"object"!=typeof t||!t.nodeType&&!t.jquery?this.config.html?(this.config.sanitize&&(t=In(t,this.config.whiteList,this.config.sanitizeFn)),e.html(t)):e.text(t):this.config.html?p(t).parent().is(e)||e.empty().append(t):e.text(p(t).text())},e.getTitle=function(){var e=this.element.getAttribute("data-original-title");return e=e||("function"==typeof this.config.title?this.config.title.call(this.element):this.config.title)},e._getPopperConfig=function(e){var t=this;return l({},{placement:e,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:Kn},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(e){e.originalPlacement!==e.placement&&t._handlePopperPlacementChange(e)},onUpdate:function(e){return t._handlePopperPlacementChange(e)}},{},this.config.popperConfig)},e._getOffset=function(){var t=this,e={};return"function"==typeof this.config.offset?e.fn=function(e){return e.offsets=l({},e.offsets,{},t.config.offset(e.offsets,t.element)||{}),e}:e.offset=this.config.offset,e},e._getContainer=function(){return!1===this.config.container?document.body:m.isElement(this.config.container)?p(this.config.container):p(document).find(this.config.container)},e._getAttachment=function(e){return Hn[e.toUpperCase()]},e._setListeners=function(){var i=this;this.config.trigger.split(" ").forEach(function(e){if("click"===e)p(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(e){return i.toggle(e)});else if(e!==zn){var t=e===Qn?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=e===Qn?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;p(i.element).on(t,i.config.selector,function(e){return i._enter(e)}).on(n,i.config.selector,function(e){return i._leave(e)})}}),this._hideModalHandler=function(){i.element&&i.hide()},p(this.element).closest(".modal").on("hide.bs.modal",this._hideModalHandler),this.config.selector?this.config=l({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},e._fixTitle=function(){var e=typeof this.element.getAttribute("data-original-title");!this.element.getAttribute("title")&&"string"==e||(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},e._enter=function(e,t){var n=this.constructor.DATA_KEY;(t=t||p(e.currentTarget).data(n))||(t=new this.constructor(e.currentTarget,this._getDelegateConfig()),p(e.currentTarget).data(n,t)),e&&(t._activeTrigger["focusin"===e.type?Vn:Qn]=!0),p(t.getTipElement()).hasClass(Bn)||t._hoverState===Fn?t._hoverState=Fn:(clearTimeout(t._timeout),t._hoverState=Fn,t.config.delay&&t.config.delay.show?t._timeout=setTimeout(function(){t._hoverState===Fn&&t.show()},t.config.delay.show):t.show())},e._leave=function(e,t){var n=this.constructor.DATA_KEY;(t=t||p(e.currentTarget).data(n))||(t=new this.constructor(e.currentTarget,this._getDelegateConfig()),p(e.currentTarget).data(n,t)),e&&(t._activeTrigger["focusout"===e.type?Vn:Qn]=!1),t._isWithActiveTrigger()||(clearTimeout(t._timeout),t._hoverState=Mn,t.config.delay&&t.config.delay.hide?t._timeout=setTimeout(function(){t._hoverState===Mn&&t.hide()},t.config.delay.hide):t.hide())},e._isWithActiveTrigger=function(){for(var e in this._activeTrigger)if(this._activeTrigger[e])return!0;return!1},e._getConfig=function(e){var t=p(this.element).data();return Object.keys(t).forEach(function(e){-1!==xn.indexOf(e)&&delete t[e]}),"number"==typeof(e=l({},this.constructor.Default,{},t,{},"object"==typeof e&&e?e:{})).delay&&(e.delay={show:e.delay,hide:e.delay}),"number"==typeof e.title&&(e.title=e.title.toString()),"number"==typeof e.content&&(e.content=e.content.toString()),m.typeCheckConfig(An,e,this.constructor.DefaultType),e.sanitize&&(e.template=In(e.template,e.whiteList,e.sanitizeFn)),e},e._getDelegateConfig=function(){var e={};if(this.config)for(var t in this.config)this.constructor.Default[t]!==this.config[t]&&(e[t]=this.config[t]);return e},e._cleanTipClass=function(){var e=p(this.getTipElement()),t=e.attr("class").match(Pn);null!==t&&t.length&&e.removeClass(t.join(""))},e._handlePopperPlacementChange=function(e){var t=e.instance;this.tip=t.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(e.placement))},e._fixTransition=function(){var e=this.getTipElement(),t=this.config.animation;null===e.getAttribute("x-placement")&&(p(e).removeClass(Un),this.config.animation=!1,this.hide(),this.show(),this.config.animation=t)},i._jQueryInterface=function(n){return this.each(function(){var e=p(this).data(On),t="object"==typeof n&&n;if((e||!/dispose|hide/.test(n))&&(e||(e=new i(this,t),p(this).data(On,e)),"string"==typeof n)){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return Rn}},{key:"NAME",get:function(){return An}},{key:"DATA_KEY",get:function(){return On}},{key:"Event",get:function(){return Wn}},{key:"EVENT_KEY",get:function(){return Nn}},{key:"DefaultType",get:function(){return jn}}]),i}();p.fn[An]=Xn._jQueryInterface,p.fn[An].Constructor=Xn,p.fn[An].noConflict=function(){return p.fn[An]=kn,Xn._jQueryInterface};var Gn="popover",$n="bs.popover",Jn="."+$n,Zn=p.fn[Gn],ei="bs-popover",ti=new RegExp("(^|\\s)"+ei+"\\S+","g"),ni=l({},Xn.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),ii=l({},Xn.DefaultType,{content:"(string|element|function)"}),oi="fade",ri="show",si=".popover-header",ai=".popover-body",li={HIDE:"hide"+Jn,HIDDEN:"hidden"+Jn,SHOW:"show"+Jn,SHOWN:"shown"+Jn,INSERTED:"inserted"+Jn,CLICK:"click"+Jn,FOCUSIN:"focusin"+Jn,FOCUSOUT:"focusout"+Jn,MOUSEENTER:"mouseenter"+Jn,MOUSELEAVE:"mouseleave"+Jn},ci=function(e){function i(){return e.apply(this,arguments)||this}!function(e,t){e.prototype=Object.create(t.prototype),(e.prototype.constructor=e).__proto__=t}(i,e);var t=i.prototype;return t.isWithContent=function(){return this.getTitle()||this._getContent()},t.addAttachmentClass=function(e){p(this.getTipElement()).addClass(ei+"-"+e)},t.getTipElement=function(){return this.tip=this.tip||p(this.config.template)[0],this.tip},t.setContent=function(){var e=p(this.getTipElement());this.setElementContent(e.find(si),this.getTitle());var t=this._getContent();"function"==typeof t&&(t=t.call(this.element)),this.setElementContent(e.find(ai),t),e.removeClass(oi+" "+ri)},t._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},t._cleanTipClass=function(){var e=p(this.getTipElement()),t=e.attr("class").match(ti);null!==t&&0<t.length&&e.removeClass(t.join(""))},i._jQueryInterface=function(n){return this.each(function(){var e=p(this).data($n),t="object"==typeof n?n:null;if((e||!/dispose|hide/.test(n))&&(e||(e=new i(this,t),p(this).data($n,e)),"string"==typeof n)){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return ni}},{key:"NAME",get:function(){return Gn}},{key:"DATA_KEY",get:function(){return $n}},{key:"Event",get:function(){return li}},{key:"EVENT_KEY",get:function(){return Jn}},{key:"DefaultType",get:function(){return ii}}]),i}(Xn);p.fn[Gn]=ci._jQueryInterface,p.fn[Gn].Constructor=ci,p.fn[Gn].noConflict=function(){return p.fn[Gn]=Zn,ci._jQueryInterface};var hi="scrollspy",ui="bs.scrollspy",fi="."+ui,di=p.fn[hi],pi={offset:10,method:"auto",target:""},mi={offset:"number",method:"string",target:"(string|element)"},gi={ACTIVATE:"activate"+fi,SCROLL:"scroll"+fi,LOAD_DATA_API:"load"+fi+".data-api"},_i="dropdown-item",vi="active",yi='[data-spy="scroll"]',Ei=".nav, .list-group",bi=".nav-link",wi=".nav-item",Ti=".list-group-item",Ci=".dropdown",Si=".dropdown-item",Di=".dropdown-toggle",Ii="offset",Ai="position",Oi=function(){function n(e,t){var n=this;this._element=e,this._scrollElement="BODY"===e.tagName?window:e,this._config=this._getConfig(t),this._selector=this._config.target+" "+bi+","+this._config.target+" "+Ti+","+this._config.target+" "+Si,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,p(this._scrollElement).on(gi.SCROLL,function(e){return n._process(e)}),this.refresh(),this._process()}var e=n.prototype;return e.refresh=function(){var t=this,e=this._scrollElement===this._scrollElement.window?Ii:Ai,o="auto"===this._config.method?e:this._config.method,r=o===Ai?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map(function(e){var t,n=m.getSelectorFromElement(e);if(n&&(t=document.querySelector(n)),t){var i=t.getBoundingClientRect();if(i.width||i.height)return[p(t)[o]().top+r,n]}return null}).filter(function(e){return e}).sort(function(e,t){return e[0]-t[0]}).forEach(function(e){t._offsets.push(e[0]),t._targets.push(e[1])})},e.dispose=function(){p.removeData(this._element,ui),p(this._scrollElement).off(fi),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},e._getConfig=function(e){if("string"!=typeof(e=l({},pi,{},"object"==typeof e&&e?e:{})).target){var t=p(e.target).attr("id");t||(t=m.getUID(hi),p(e.target).attr("id",t)),e.target="#"+t}return m.typeCheckConfig(hi,e,mi),e},e._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},e._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},e._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},e._process=function(){var e=this._getScrollTop()+this._config.offset,t=this._getScrollHeight(),n=this._config.offset+t-this._getOffsetHeight();if(this._scrollHeight!==t&&this.refresh(),n<=e){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&e<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;){this._activeTarget!==this._targets[o]&&e>=this._offsets[o]&&("undefined"==typeof this._offsets[o+1]||e<this._offsets[o+1])&&this._activate(this._targets[o])}}},e._activate=function(t){this._activeTarget=t,this._clear();var e=this._selector.split(",").map(function(e){return e+'[data-target="'+t+'"],'+e+'[href="'+t+'"]'}),n=p([].slice.call(document.querySelectorAll(e.join(","))));n.hasClass(_i)?(n.closest(Ci).find(Di).addClass(vi),n.addClass(vi)):(n.addClass(vi),n.parents(Ei).prev(bi+", "+Ti).addClass(vi),n.parents(Ei).prev(wi).children(bi).addClass(vi)),p(this._scrollElement).trigger(gi.ACTIVATE,{relatedTarget:t})},e._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter(function(e){return e.classList.contains(vi)}).forEach(function(e){return e.classList.remove(vi)})},n._jQueryInterface=function(t){return this.each(function(){var e=p(this).data(ui);if(e||(e=new n(this,"object"==typeof t&&t),p(this).data(ui,e)),"string"==typeof t){if("undefined"==typeof e[t])throw new TypeError('No method named "'+t+'"');e[t]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return pi}}]),n}();p(window).on(gi.LOAD_DATA_API,function(){for(var e=[].slice.call(document.querySelectorAll(yi)),t=e.length;t--;){var n=p(e[t]);Oi._jQueryInterface.call(n,n.data())}}),p.fn[hi]=Oi._jQueryInterface,p.fn[hi].Constructor=Oi,p.fn[hi].noConflict=function(){return p.fn[hi]=di,Oi._jQueryInterface};var Ni="bs.tab",ki="."+Ni,Li=p.fn.tab,Pi={HIDE:"hide"+ki,HIDDEN:"hidden"+ki,SHOW:"show"+ki,SHOWN:"shown"+ki,CLICK_DATA_API:"click"+ki+".data-api"},xi="dropdown-menu",ji="active",Hi="disabled",Ri="fade",Fi="show",Mi=".dropdown",Wi=".nav, .list-group",Ui=".active",Bi="> li > .active",qi='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',Ki=".dropdown-toggle",Qi="> .dropdown-menu .active",Vi=function(){function i(e){this._element=e}var e=i.prototype;return e.show=function(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&p(this._element).hasClass(ji)||p(this._element).hasClass(Hi))){var e,i,t=p(this._element).closest(Wi)[0],o=m.getSelectorFromElement(this._element);if(t){var r="UL"===t.nodeName||"OL"===t.nodeName?Bi:Ui;i=(i=p.makeArray(p(t).find(r)))[i.length-1]}var s=p.Event(Pi.HIDE,{relatedTarget:this._element}),a=p.Event(Pi.SHOW,{relatedTarget:i});if(i&&p(i).trigger(s),p(this._element).trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){o&&(e=document.querySelector(o)),this._activate(this._element,t);var l=function(){var e=p.Event(Pi.HIDDEN,{relatedTarget:n._element}),t=p.Event(Pi.SHOWN,{relatedTarget:i});p(i).trigger(e),p(n._element).trigger(t)};e?this._activate(e,e.parentNode,l):l()}}},e.dispose=function(){p.removeData(this._element,Ni),this._element=null},e._activate=function(e,t,n){function i(){return o._transitionComplete(e,r,n)}var o=this,r=(!t||"UL"!==t.nodeName&&"OL"!==t.nodeName?p(t).children(Ui):p(t).find(Bi))[0],s=n&&r&&p(r).hasClass(Ri);if(r&&s){var a=m.getTransitionDurationFromElement(r);p(r).removeClass(Fi).one(m.TRANSITION_END,i).emulateTransitionEnd(a)}else i()},e._transitionComplete=function(e,t,n){if(t){p(t).removeClass(ji);var i=p(t.parentNode).find(Qi)[0];i&&p(i).removeClass(ji),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!1)}if(p(e).addClass(ji),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),m.reflow(e),e.classList.contains(Ri)&&e.classList.add(Fi),e.parentNode&&p(e.parentNode).hasClass(xi)){var o=p(e).closest(Mi)[0];if(o){var r=[].slice.call(o.querySelectorAll(Ki));p(r).addClass(ji)}e.setAttribute("aria-expanded",!0)}n&&n()},i._jQueryInterface=function(n){return this.each(function(){var e=p(this),t=e.data(Ni);if(t||(t=new i(this),e.data(Ni,t)),"string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}}]),i}();p(document).on(Pi.CLICK_DATA_API,qi,function(e){e.preventDefault(),Vi._jQueryInterface.call(p(this),"show")}),p.fn.tab=Vi._jQueryInterface,p.fn.tab.Constructor=Vi,p.fn.tab.noConflict=function(){return p.fn.tab=Li,Vi._jQueryInterface};var Yi="toast",zi="bs.toast",Xi="."+zi,Gi=p.fn[Yi],$i={CLICK_DISMISS:"click.dismiss"+Xi,HIDE:"hide"+Xi,HIDDEN:"hidden"+Xi,SHOW:"show"+Xi,SHOWN:"shown"+Xi},Ji="fade",Zi="hide",eo="show",to="showing",no={animation:"boolean",autohide:"boolean",delay:"number"},io={animation:!0,autohide:!0,delay:500},oo='[data-dismiss="toast"]',ro=function(){function i(e,t){this._element=e,this._config=this._getConfig(t),this._timeout=null,this._setListeners()}var e=i.prototype;return e.show=function(){var e=this,t=p.Event($i.SHOW);if(p(this._element).trigger(t),!t.isDefaultPrevented()){this._config.animation&&this._element.classList.add(Ji);var n=function(){e._element.classList.remove(to),e._element.classList.add(eo),p(e._element).trigger($i.SHOWN),e._config.autohide&&(e._timeout=setTimeout(function(){e.hide()},e._config.delay))};if(this._element.classList.remove(Zi),m.reflow(this._element),this._element.classList.add(to),this._config.animation){var i=m.getTransitionDurationFromElement(this._element);p(this._element).one(m.TRANSITION_END,n).emulateTransitionEnd(i)}else n()}},e.hide=function(){if(this._element.classList.contains(eo)){var e=p.Event($i.HIDE);p(this._element).trigger(e),e.isDefaultPrevented()||this._close()}},e.dispose=function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains(eo)&&this._element.classList.remove(eo),p(this._element).off($i.CLICK_DISMISS),p.removeData(this._element,zi),this._element=null,this._config=null},e._getConfig=function(e){return e=l({},io,{},p(this._element).data(),{},"object"==typeof e&&e?e:{}),m.typeCheckConfig(Yi,e,this.constructor.DefaultType),e},e._setListeners=function(){var e=this;p(this._element).on($i.CLICK_DISMISS,oo,function(){return e.hide()})},e._close=function(){function e(){t._element.classList.add(Zi),p(t._element).trigger($i.HIDDEN)}var t=this;if(this._element.classList.remove(eo),this._config.animation){var n=m.getTransitionDurationFromElement(this._element);p(this._element).one(m.TRANSITION_END,e).emulateTransitionEnd(n)}else e()},i._jQueryInterface=function(n){return this.each(function(){var e=p(this),t=e.data(zi);if(t||(t=new i(this,"object"==typeof n&&n),e.data(zi,t)),"string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n](this)}})},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"DefaultType",get:function(){return no}},{key:"Default",get:function(){return io}}]),i}();p.fn[Yi]=ro._jQueryInterface,p.fn[Yi].Constructor=ro,p.fn[Yi].noConflict=function(){return p.fn[Yi]=Gi,ro._jQueryInterface},e.Alert=_,e.Button=x,e.Carousel=he,e.Collapse=De,e.Dropdown=en,e.Modal=wn,e.Popover=ci,e.Scrollspy=Oi,e.Tab=Vi,e.Toast=ro,e.Tooltip=Xn,e.Util=m,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=bootstrap.bundle.min.js.map
/*!
 * AdminLTE v3.0.5 (https://adminlte.io)
 * Copyright 2014-2020 Colorlib <http://colorlib.com>
 * Licensed under MIT (https://github.com/ColorlibHQ/AdminLTE/blob/master/LICENSE)
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).adminlte={})}(this,(function(t){"use strict";var e=function(t){var e="ControlSidebar",i="lte.controlsidebar",n=t.fn[e],s={COLLAPSED:"collapsed.lte.controlsidebar",EXPANDED:"expanded.lte.controlsidebar"},o=".control-sidebar",a=".control-sidebar-content",r='[data-widget="control-sidebar"]',l=".main-header",c=".main-footer",d="control-sidebar-animate",h="control-sidebar-open",f="control-sidebar-slide-open",u="layout-fixed",g="layout-navbar-fixed",p="layout-sm-navbar-fixed",_="layout-md-navbar-fixed",m="layout-lg-navbar-fixed",v="layout-xl-navbar-fixed",C="layout-footer-fixed",y="layout-sm-footer-fixed",b="layout-md-footer-fixed",w="layout-lg-footer-fixed",x="layout-xl-footer-fixed",E={controlsidebarSlide:!0,scrollbarTheme:"os-theme-light",scrollbarAutoHide:"l"},A=function(){function e(t,e){this._element=t,this._config=e,this._init()}var n=e.prototype;return n.collapse=function(){this._config.controlsidebarSlide?(t("html").addClass(d),t("body").removeClass(f).delay(300).queue((function(){t(o).hide(),t("html").removeClass(d),t(this).dequeue()}))):t("body").removeClass(h);var e=t.Event(s.COLLAPSED);t(this._element).trigger(e)},n.show=function(){this._config.controlsidebarSlide?(t("html").addClass(d),t(o).show().delay(10).queue((function(){t("body").addClass(f).delay(300).queue((function(){t("html").removeClass(d),t(this).dequeue()})),t(this).dequeue()}))):t("body").addClass(h);var e=t.Event(s.EXPANDED);t(this._element).trigger(e)},n.toggle=function(){t("body").hasClass(h)||t("body").hasClass(f)?this.collapse():this.show()},n._init=function(){var e=this;this._fixHeight(),this._fixScrollHeight(),t(window).resize((function(){e._fixHeight(),e._fixScrollHeight()})),t(window).scroll((function(){(t("body").hasClass(h)||t("body").hasClass(f))&&e._fixScrollHeight()}))},n._fixScrollHeight=function(){var e={scroll:t(document).height(),window:t(window).height(),header:t(l).outerHeight(),footer:t(c).outerHeight()},i=Math.abs(e.window+t(window).scrollTop()-e.scroll),n=t(window).scrollTop(),s=!1,r=!1;t("body").hasClass(u)&&((t("body").hasClass(g)||t("body").hasClass(p)||t("body").hasClass(_)||t("body").hasClass(m)||t("body").hasClass(v))&&"fixed"===t(l).css("position")&&(s=!0),(t("body").hasClass(C)||t("body").hasClass(y)||t("body").hasClass(b)||t("body").hasClass(w)||t("body").hasClass(x))&&"fixed"===t(c).css("position")&&(r=!0),0===n&&0===i?(t(o).css("bottom",e.footer),t(o).css("top",e.header),t(o+", "+o+" "+a).css("height",e.window-(e.header+e.footer))):i<=e.footer?!1===r?(t(o).css("bottom",e.footer-i),t(o+", "+o+" "+a).css("height",e.window-(e.footer-i))):t(o).css("bottom",e.footer):n<=e.header?!1===s?(t(o).css("top",e.header-n),t(o+", "+o+" "+a).css("height",e.window-(e.header-n))):t(o).css("top",e.header):!1===s?(t(o).css("top",0),t(o+", "+o+" "+a).css("height",e.window)):t(o).css("top",e.header))},n._fixHeight=function(){var e=t(window).height(),i=t(l).outerHeight(),n=t(c).outerHeight();if(t("body").hasClass(u)){var s=e-i;(t("body").hasClass(C)||t("body").hasClass(y)||t("body").hasClass(b)||t("body").hasClass(w)||t("body").hasClass(x))&&"fixed"===t(c).css("position")&&(s=e-i-n),t(o+" "+a).css("height",s),"undefined"!=typeof t.fn.overlayScrollbars&&t(o+" "+a).overlayScrollbars({className:this._config.scrollbarTheme,sizeAutoCapable:!0,scrollbars:{autoHide:this._config.scrollbarAutoHide,clickScrolling:!0}})}},e._jQueryInterface=function(n){return this.each((function(){var s=t(this).data(i),o=t.extend({},E,t(this).data());if(s||(s=new e(this,o),t(this).data(i,s)),"undefined"===s[n])throw new Error(n+" is not a function");s[n]()}))},e}();return t(document).on("click",r,(function(e){e.preventDefault(),A._jQueryInterface.call(t(this),"toggle")})),t.fn[e]=A._jQueryInterface,t.fn[e].Constructor=A,t.fn[e].noConflict=function(){return t.fn[e]=n,A._jQueryInterface},A}(jQuery),i=function(t){var e="Layout",i=t.fn[e],n=".main-header",s=".main-sidebar",o=".main-sidebar .sidebar",a=".content-wrapper",r=".control-sidebar-content",l='[data-widget="control-sidebar"]',c=".main-footer",d='[data-widget="pushmenu"]',h=".login-box",f=".register-box",u="sidebar-focused",g="layout-fixed",p="control-sidebar-slide-open",_="control-sidebar-open",m={scrollbarTheme:"os-theme-light",scrollbarAutoHide:"l",panelAutoHeight:!0,loginRegisterAutoHeight:!0},v=function(){function e(t,e){this._config=e,this._element=t,this._init()}var i=e.prototype;return i.fixLayoutHeight=function(e){void 0===e&&(e=null);var i=0;(t("body").hasClass(p)||t("body").hasClass(_)||"control_sidebar"==e)&&(i=t(r).height());var s={window:t(window).height(),header:0!==t(n).length?t(n).outerHeight():0,footer:0!==t(c).length?t(c).outerHeight():0,sidebar:0!==t(o).length?t(o).height():0,control_sidebar:i},l=this._max(s),d=this._config.panelAutoHeight;!0===d&&(d=0),!1!==d&&(l==s.control_sidebar?t(a).css("min-height",l+d):l==s.window?t(a).css("min-height",l+d-s.header-s.footer):t(a).css("min-height",l+d-s.header),this._isFooterFixed()&&t(a).css("min-height",parseFloat(t(a).css("min-height"))+s.footer)),t("body").hasClass(g)&&(!1!==d&&t(a).css("min-height",l+d-s.header-s.footer),"undefined"!=typeof t.fn.overlayScrollbars&&t(o).overlayScrollbars({className:this._config.scrollbarTheme,sizeAutoCapable:!0,scrollbars:{autoHide:this._config.scrollbarAutoHide,clickScrolling:!0}}))},i.fixLoginRegisterHeight=function(){if(0===t(h+", "+f).length)t("body, html").css("height","auto");else if(0!==t(h+", "+f).length){var e=t(h+", "+f).height();t("body").css("min-height")!==e&&t("body").css("min-height",e)}},i._init=function(){var e=this;this.fixLayoutHeight(),!0===this._config.loginRegisterAutoHeight?this.fixLoginRegisterHeight():Number.isInteger(this._config.loginRegisterAutoHeight)&&setInterval(this.fixLoginRegisterHeight,this._config.loginRegisterAutoHeight),t(o).on("collapsed.lte.treeview expanded.lte.treeview",(function(){e.fixLayoutHeight()})),t(d).on("collapsed.lte.pushmenu shown.lte.pushmenu",(function(){e.fixLayoutHeight()})),t(l).on("collapsed.lte.controlsidebar",(function(){e.fixLayoutHeight()})).on("expanded.lte.controlsidebar",(function(){e.fixLayoutHeight("control_sidebar")})),t(window).resize((function(){e.fixLayoutHeight()})),setTimeout((function(){t("body.hold-transition").removeClass("hold-transition")}),50)},i._max=function(t){var e=0;return Object.keys(t).forEach((function(i){t[i]>e&&(e=t[i])})),e},i._isFooterFixed=function(){return"fixed"===t(".main-footer").css("position")},e._jQueryInterface=function(i){return void 0===i&&(i=""),this.each((function(){var n=t(this).data("lte.layout"),s=t.extend({},m,t(this).data());n||(n=new e(t(this),s),t(this).data("lte.layout",n)),"init"===i||""===i?n._init():"fixLayoutHeight"!==i&&"fixLoginRegisterHeight"!==i||n[i]()}))},e}();return t(window).on("load",(function(){v._jQueryInterface.call(t("body"))})),t(o+" a").on("focusin",(function(){t(s).addClass(u)})),t(o+" a").on("focusout",(function(){t(s).removeClass(u)})),t.fn[e]=v._jQueryInterface,t.fn[e].Constructor=v,t.fn[e].noConflict=function(){return t.fn[e]=i,v._jQueryInterface},v}(jQuery),n=function(t){var e="PushMenu",i=".lte.pushmenu",n=t.fn[e],s={COLLAPSED:"collapsed"+i,SHOWN:"shown"+i},o={autoCollapseSize:992,enableRemember:!1,noTransitionAfterReload:!0},a='[data-widget="pushmenu"]',r="body",l="#sidebar-overlay",c=".wrapper",d="sidebar-collapse",h="sidebar-open",f="sidebar-closed",u=function(){function e(e,i){this._element=e,this._options=t.extend({},o,i),t(l).length||this._addOverlay(),this._init()}var n=e.prototype;return n.expand=function(){this._options.autoCollapseSize&&t(window).width()<=this._options.autoCollapseSize&&t(r).addClass(h),t(r).removeClass(d).removeClass(f),this._options.enableRemember&&localStorage.setItem("remember"+i,h);var e=t.Event(s.SHOWN);t(this._element).trigger(e)},n.collapse=function(){this._options.autoCollapseSize&&t(window).width()<=this._options.autoCollapseSize&&t(r).removeClass(h).addClass(f),t(r).addClass(d),this._options.enableRemember&&localStorage.setItem("remember"+i,d);var e=t.Event(s.COLLAPSED);t(this._element).trigger(e)},n.toggle=function(){t(r).hasClass(d)?this.expand():this.collapse()},n.autoCollapse=function(e){void 0===e&&(e=!1),this._options.autoCollapseSize&&(t(window).width()<=this._options.autoCollapseSize?t(r).hasClass(h)||this.collapse():1==e&&(t(r).hasClass(h)?t(r).removeClass(h):t(r).hasClass(f)&&this.expand()))},n.remember=function(){this._options.enableRemember&&(localStorage.getItem("remember"+i)==d?this._options.noTransitionAfterReload?t("body").addClass("hold-transition").addClass(d).delay(50).queue((function(){t(this).removeClass("hold-transition"),t(this).dequeue()})):t("body").addClass(d):this._options.noTransitionAfterReload?t("body").addClass("hold-transition").removeClass(d).delay(50).queue((function(){t(this).removeClass("hold-transition"),t(this).dequeue()})):t("body").removeClass(d))},n._init=function(){var e=this;this.remember(),this.autoCollapse(),t(window).resize((function(){e.autoCollapse(!0)}))},n._addOverlay=function(){var e=this,i=t("<div />",{id:"sidebar-overlay"});i.on("click",(function(){e.collapse()})),t(c).append(i)},e._jQueryInterface=function(i){return this.each((function(){var n=t(this).data("lte.pushmenu"),s=t.extend({},o,t(this).data());n||(n=new e(this,s),t(this).data("lte.pushmenu",n)),"string"==typeof i&&i.match(/collapse|expand|toggle/)&&n[i]()}))},e}();return t(document).on("click",a,(function(e){e.preventDefault();var i=e.currentTarget;"pushmenu"!==t(i).data("widget")&&(i=t(i).closest(a)),u._jQueryInterface.call(t(i),"toggle")})),t(window).on("load",(function(){u._jQueryInterface.call(t(a))})),t.fn[e]=u._jQueryInterface,t.fn[e].Constructor=u,t.fn[e].noConflict=function(){return t.fn[e]=n,u._jQueryInterface},u}(jQuery),s=function(t){var e="Treeview",i=t.fn[e],n={SELECTED:"selected.lte.treeview",EXPANDED:"expanded.lte.treeview",COLLAPSED:"collapsed.lte.treeview",LOAD_DATA_API:"load.lte.treeview"},s=".nav-item",o=".nav-treeview",a=".menu-open",r='[data-widget="treeview"]',l="menu-open",c="sidebar-collapse",d={trigger:r+" "+".nav-link",animationSpeed:300,accordion:!0,expandSidebar:!1,sidebarButtonSelector:'[data-widget="pushmenu"]'},h=function(){function e(t,e){this._config=e,this._element=t}var i=e.prototype;return i.init=function(){this._setupListeners()},i.expand=function(e,i){var s=this,r=t.Event(n.EXPANDED);if(this._config.accordion){var c=i.siblings(a).first(),d=c.find(o).first();this.collapse(d,c)}e.stop().slideDown(this._config.animationSpeed,(function(){i.addClass(l),t(s._element).trigger(r)})),this._config.expandSidebar&&this._expandSidebar()},i.collapse=function(e,i){var s=this,r=t.Event(n.COLLAPSED);e.stop().slideUp(this._config.animationSpeed,(function(){i.removeClass(l),t(s._element).trigger(r),e.find(a+" > "+o).slideUp(),e.find(a).removeClass(l)}))},i.toggle=function(e){var i=t(e.currentTarget),n=i.parent(),a=n.find("> "+o);if(a.is(o)||(n.is(s)||(a=n.parent().find("> "+o)),a.is(o))){e.preventDefault();var r=i.parents(s).first();r.hasClass(l)?this.collapse(t(a),r):this.expand(t(a),r)}},i._setupListeners=function(){var e=this;t(document).on("click",this._config.trigger,(function(t){e.toggle(t)}))},i._expandSidebar=function(){t("body").hasClass(c)&&t(this._config.sidebarButtonSelector).PushMenu("expand")},e._jQueryInterface=function(i){return this.each((function(){var n=t(this).data("lte.treeview"),s=t.extend({},d,t(this).data());n||(n=new e(t(this),s),t(this).data("lte.treeview",n)),"init"===i&&n[i]()}))},e}();return t(window).on(n.LOAD_DATA_API,(function(){t(r).each((function(){h._jQueryInterface.call(t(this),"init")}))})),t.fn[e]=h._jQueryInterface,t.fn[e].Constructor=h,t.fn[e].noConflict=function(){return t.fn[e]=i,h._jQueryInterface},h}(jQuery),o=function(t){var e="DirectChat",i=t.fn[e],n="toggled{EVENT_KEY}",s='[data-widget="chat-pane-toggle"]',o=".direct-chat",a="direct-chat-contacts-open",r=function(){function e(t,e){this._element=t}return e.prototype.toggle=function(){t(this._element).parents(o).first().toggleClass(a);var e=t.Event(n);t(this._element).trigger(e)},e._jQueryInterface=function(i){return this.each((function(){var n=t(this).data("lte.directchat");n||(n=new e(t(this)),t(this).data("lte.directchat",n)),n[i]()}))},e}();return t(document).on("click",s,(function(e){e&&e.preventDefault(),r._jQueryInterface.call(t(this),"toggle")})),t.fn[e]=r._jQueryInterface,t.fn[e].Constructor=r,t.fn[e].noConflict=function(){return t.fn[e]=i,r._jQueryInterface},r}(jQuery),a=function(t){var e="TodoList",i=t.fn[e],n='[data-widget="todo-list"]',s="done",o={onCheck:function(t){return t},onUnCheck:function(t){return t}},a=function(){function e(t,e){this._config=e,this._element=t,this._init()}var i=e.prototype;return i.toggle=function(e){e.parents("li").toggleClass(s),t(e).prop("checked")?this.check(e):this.unCheck(t(e))},i.check=function(t){this._config.onCheck.call(t)},i.unCheck=function(t){this._config.onUnCheck.call(t)},i._init=function(){var e=this;t(n).find("input:checkbox:checked").parents("li").toggleClass(s),t(n).on("change","input:checkbox",(function(i){e.toggle(t(i.target))}))},e._jQueryInterface=function(i){return this.each((function(){var n=t(this).data("lte.todolist"),s=t.extend({},o,t(this).data());n||(n=new e(t(this),s),t(this).data("lte.todolist",n)),"init"===i&&n[i]()}))},e}();return t(window).on("load",(function(){a._jQueryInterface.call(t(n))})),t.fn[e]=a._jQueryInterface,t.fn[e].Constructor=a,t.fn[e].noConflict=function(){return t.fn[e]=i,a._jQueryInterface},a}(jQuery),r=function(t){var e="CardWidget",i=".lte.cardwidget",n=t.fn[e],s={EXPANDED:"expanded"+i,COLLAPSED:"collapsed"+i,MAXIMIZED:"maximized"+i,MINIMIZED:"minimized"+i,REMOVED:"removed"+i},o="card",a="collapsed-card",r="collapsing-card",l="expanding-card",c="was-collapsed",d="maximized-card",h={DATA_REMOVE:'[data-card-widget="remove"]',DATA_COLLAPSE:'[data-card-widget="collapse"]',DATA_MAXIMIZE:'[data-card-widget="maximize"]',CARD:"."+o,CARD_HEADER:".card-header",CARD_BODY:".card-body",CARD_FOOTER:".card-footer",COLLAPSED:"."+a},f={animationSpeed:"normal",collapseTrigger:h.DATA_COLLAPSE,removeTrigger:h.DATA_REMOVE,maximizeTrigger:h.DATA_MAXIMIZE,collapseIcon:"fa-minus",expandIcon:"fa-plus",maximizeIcon:"fa-expand",minimizeIcon:"fa-compress"},u=function(){function e(e,i){this._element=e,this._parent=e.parents(h.CARD).first(),e.hasClass(o)&&(this._parent=e),this._settings=t.extend({},f,i)}var i=e.prototype;return i.collapse=function(){var e=this;this._parent.addClass(r).children(h.CARD_BODY+", "+h.CARD_FOOTER).slideUp(this._settings.animationSpeed,(function(){e._parent.addClass(a).removeClass(r)})),this._parent.find("> "+h.CARD_HEADER+" "+this._settings.collapseTrigger+" ."+this._settings.collapseIcon).addClass(this._settings.expandIcon).removeClass(this._settings.collapseIcon);var i=t.Event(s.COLLAPSED);this._element.trigger(i,this._parent)},i.expand=function(){var e=this;this._parent.addClass(l).children(h.CARD_BODY+", "+h.CARD_FOOTER).slideDown(this._settings.animationSpeed,(function(){e._parent.removeClass(a).removeClass(l)})),this._parent.find("> "+h.CARD_HEADER+" "+this._settings.collapseTrigger+" ."+this._settings.expandIcon).addClass(this._settings.collapseIcon).removeClass(this._settings.expandIcon);var i=t.Event(s.EXPANDED);this._element.trigger(i,this._parent)},i.remove=function(){this._parent.slideUp();var e=t.Event(s.REMOVED);this._element.trigger(e,this._parent)},i.toggle=function(){this._parent.hasClass(a)?this.expand():this.collapse()},i.maximize=function(){this._parent.find(this._settings.maximizeTrigger+" ."+this._settings.maximizeIcon).addClass(this._settings.minimizeIcon).removeClass(this._settings.maximizeIcon),this._parent.css({height:this._parent.height(),width:this._parent.width(),transition:"all .15s"}).delay(150).queue((function(){t(this).addClass(d),t("html").addClass(d),t(this).hasClass(a)&&t(this).addClass(c),t(this).dequeue()}));var e=t.Event(s.MAXIMIZED);this._element.trigger(e,this._parent)},i.minimize=function(){this._parent.find(this._settings.maximizeTrigger+" ."+this._settings.minimizeIcon).addClass(this._settings.maximizeIcon).removeClass(this._settings.minimizeIcon),this._parent.css("cssText","height:"+this._parent[0].style.height+" !important;width:"+this._parent[0].style.width+" !important; transition: all .15s;").delay(10).queue((function(){t(this).removeClass(d),t("html").removeClass(d),t(this).css({height:"inherit",width:"inherit"}),t(this).hasClass(c)&&t(this).removeClass(c),t(this).dequeue()}));var e=t.Event(s.MINIMIZED);this._element.trigger(e,this._parent)},i.toggleMaximize=function(){this._parent.hasClass(d)?this.minimize():this.maximize()},i._init=function(e){var i=this;this._parent=e,t(this).find(this._settings.collapseTrigger).click((function(){i.toggle()})),t(this).find(this._settings.maximizeTrigger).click((function(){i.toggleMaximize()})),t(this).find(this._settings.removeTrigger).click((function(){i.remove()}))},e._jQueryInterface=function(i){var n=t(this).data("lte.cardwidget"),s=t.extend({},f,t(this).data());n||(n=new e(t(this),s),t(this).data("lte.cardwidget","string"==typeof i?n:i)),"string"==typeof i&&i.match(/collapse|expand|remove|toggle|maximize|minimize|toggleMaximize/)?n[i]():"object"==typeof i&&n._init(t(this))},e}();return t(document).on("click",h.DATA_COLLAPSE,(function(e){e&&e.preventDefault(),u._jQueryInterface.call(t(this),"toggle")})),t(document).on("click",h.DATA_REMOVE,(function(e){e&&e.preventDefault(),u._jQueryInterface.call(t(this),"remove")})),t(document).on("click",h.DATA_MAXIMIZE,(function(e){e&&e.preventDefault(),u._jQueryInterface.call(t(this),"toggleMaximize")})),t.fn[e]=u._jQueryInterface,t.fn[e].Constructor=u,t.fn[e].noConflict=function(){return t.fn[e]=n,u._jQueryInterface},u}(jQuery),l=function(t){var e="CardRefresh",i=t.fn[e],n={LOADED:"loaded.lte.cardrefresh",OVERLAY_ADDED:"overlay.added.lte.cardrefresh",OVERLAY_REMOVED:"overlay.removed.lte.cardrefresh"},s="card",o={CARD:"."+s,DATA_REFRESH:'[data-card-widget="card-refresh"]'},a={source:"",sourceSelector:"",params:{},trigger:o.DATA_REFRESH,content:".card-body",loadInContent:!0,loadOnInit:!0,responseType:"",overlayTemplate:'<div class="overlay"><i class="fas fa-2x fa-sync-alt fa-spin"></i></div>',onLoadStart:function(){},onLoadDone:function(t){return t}},r=function(){function e(e,i){if(this._element=e,this._parent=e.parents(o.CARD).first(),this._settings=t.extend({},a,i),this._overlay=t(this._settings.overlayTemplate),e.hasClass(s)&&(this._parent=e),""===this._settings.source)throw new Error("Source url was not defined. Please specify a url in your CardRefresh source option.")}var i=e.prototype;return i.load=function(){this._addOverlay(),this._settings.onLoadStart.call(t(this)),t.get(this._settings.source,this._settings.params,function(e){this._settings.loadInContent&&(""!=this._settings.sourceSelector&&(e=t(e).find(this._settings.sourceSelector).html()),this._parent.find(this._settings.content).html(e)),this._settings.onLoadDone.call(t(this),e),this._removeOverlay()}.bind(this),""!==this._settings.responseType&&this._settings.responseType);var e=t.Event(n.LOADED);t(this._element).trigger(e)},i._addOverlay=function(){this._parent.append(this._overlay);var e=t.Event(n.OVERLAY_ADDED);t(this._element).trigger(e)},i._removeOverlay=function(){this._parent.find(this._overlay).remove();var e=t.Event(n.OVERLAY_REMOVED);t(this._element).trigger(e)},i._init=function(e){var i=this;t(this).find(this._settings.trigger).on("click",(function(){i.load()})),this._settings.loadOnInit&&this.load()},e._jQueryInterface=function(i){var n=t(this).data("lte.cardrefresh"),s=t.extend({},a,t(this).data());n||(n=new e(t(this),s),t(this).data("lte.cardrefresh","string"==typeof i?n:i)),"string"==typeof i&&i.match(/load/)?n[i]():n._init(t(this))},e}();return t(document).on("click",o.DATA_REFRESH,(function(e){e&&e.preventDefault(),r._jQueryInterface.call(t(this),"load")})),t(document).ready((function(){t(o.DATA_REFRESH).each((function(){r._jQueryInterface.call(t(this))}))})),t.fn[e]=r._jQueryInterface,t.fn[e].Constructor=r,t.fn[e].noConflict=function(){return t.fn[e]=i,r._jQueryInterface},r}(jQuery),c=function(t){var e="Dropdown",i=t.fn[e],n=".navbar",s=".dropdown-menu",o=".dropdown-menu.show",a='[data-toggle="dropdown"]',r="dropdown-menu-right",l={},c=function(){function e(t,e){this._config=e,this._element=t}var i=e.prototype;return i.toggleSubmenu=function(){this._element.siblings().show().toggleClass("show"),this._element.next().hasClass("show")||this._element.parents(".dropdown-menu").first().find(".show").removeClass("show").hide(),this._element.parents("li.nav-item.dropdown.show").on("hidden.bs.dropdown",(function(e){t(".dropdown-submenu .show").removeClass("show").hide()}))},i.fixPosition=function(){var e=t(o);if(0!==e.length){e.hasClass(r)?(e.css("left","inherit"),e.css("right",0)):(e.css("left",0),e.css("right","inherit"));var i=e.offset(),n=e.width(),s=t(window).width()-i.left;i.left<0?(e.css("left","inherit"),e.css("right",i.left-5)):s<n&&(e.css("left","inherit"),e.css("right",0))}},e._jQueryInterface=function(i){return this.each((function(){var n=t(this).data("lte.dropdown"),s=t.extend({},l,t(this).data());n||(n=new e(t(this),s),t(this).data("lte.dropdown",n)),"toggleSubmenu"!==i&&"fixPosition"!=i||n[i]()}))},e}();return t(s+" "+a).on("click",(function(e){e.preventDefault(),e.stopPropagation(),c._jQueryInterface.call(t(this),"toggleSubmenu")})),t(n+" "+a).on("click",(function(e){e.preventDefault(),setTimeout((function(){c._jQueryInterface.call(t(this),"fixPosition")}),1)})),t.fn[e]=c._jQueryInterface,t.fn[e].Constructor=c,t.fn[e].noConflict=function(){return t.fn[e]=i,c._jQueryInterface},c}(jQuery),d=function(t){var e="Toasts",i=t.fn[e],n={INIT:"init.lte.toasts",CREATED:"created.lte.toasts",REMOVED:"removed.lte.toasts"},s="#toastsContainerTopRight",o="#toastsContainerTopLeft",a="#toastsContainerBottomRight",r="#toastsContainerBottomLeft",l="toasts-top-right",c="toasts-top-left",d="toasts-bottom-right",h="toasts-bottom-left",f="topRight",u="topLeft",g="bottomRight",p="bottomLeft",_={position:f,fixed:!0,autohide:!1,autoremove:!0,delay:1e3,fade:!0,icon:null,image:null,imageAlt:null,imageHeight:"25px",title:null,subtitle:null,close:!0,body:null,class:null},m=function(){function e(e,i){this._config=i,this._prepareContainer();var s=t.Event(n.INIT);t("body").trigger(s)}var i=e.prototype;return i.create=function(){var e=t('<div class="toast" role="alert" aria-live="assertive" aria-atomic="true"/>');e.data("autohide",this._config.autohide),e.data("animation",this._config.fade),this._config.class&&e.addClass(this._config.class),this._config.delay&&500!=this._config.delay&&e.data("delay",this._config.delay);var i=t('<div class="toast-header">');if(null!=this._config.image){var s=t("<img />").addClass("rounded mr-2").attr("src",this._config.image).attr("alt",this._config.imageAlt);null!=this._config.imageHeight&&s.height(this._config.imageHeight).width("auto"),i.append(s)}if(null!=this._config.icon&&i.append(t("<i />").addClass("mr-2").addClass(this._config.icon)),null!=this._config.title&&i.append(t("<strong />").addClass("mr-auto").html(this._config.title)),null!=this._config.subtitle&&i.append(t("<small />").html(this._config.subtitle)),1==this._config.close){var o=t('<button data-dismiss="toast" />').attr("type","button").addClass("ml-2 mb-1 close").attr("aria-label","Close").append('<span aria-hidden="true">&times;</span>');null==this._config.title&&o.toggleClass("ml-2 ml-auto"),i.append(o)}e.append(i),null!=this._config.body&&e.append(t('<div class="toast-body" />').html(this._config.body)),t(this._getContainerId()).prepend(e);var a=t.Event(n.CREATED);t("body").trigger(a),e.toast("show"),this._config.autoremove&&e.on("hidden.bs.toast",(function(){t(this).delay(200).remove();var e=t.Event(n.REMOVED);t("body").trigger(e)}))},i._getContainerId=function(){return this._config.position==f?s:this._config.position==u?o:this._config.position==g?a:this._config.position==p?r:void 0},i._prepareContainer=function(){if(0===t(this._getContainerId()).length){var e=t("<div />").attr("id",this._getContainerId().replace("#",""));this._config.position==f?e.addClass(l):this._config.position==u?e.addClass(c):this._config.position==g?e.addClass(d):this._config.position==p&&e.addClass(h),t("body").append(e)}this._config.fixed?t(this._getContainerId()).addClass("fixed"):t(this._getContainerId()).removeClass("fixed")},e._jQueryInterface=function(i,n){return this.each((function(){var s=t.extend({},_,n),o=new e(t(this),s);"create"===i&&o[i]()}))},e}();return t.fn[e]=m._jQueryInterface,t.fn[e].Constructor=m,t.fn[e].noConflict=function(){return t.fn[e]=i,m._jQueryInterface},m}(jQuery);t.CardRefresh=l,t.CardWidget=r,t.ControlSidebar=e,t.DirectChat=o,t.Dropdown=c,t.Layout=i,t.PushMenu=n,t.Toasts=d,t.TodoList=a,t.Treeview=s,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=adminlte.min.js.map
/*!
 DataTables 1.10.20
 ©2008-2019 SpryMedia Ltd - datatables.net/license
*/
(function(h){"function"===typeof define&&define.amd?define(["jquery"],function(E){return h(E,window,document)}):"object"===typeof exports?module.exports=function(E,H){E||(E=window);H||(H="undefined"!==typeof window?require("jquery"):require("jquery")(E));return h(H,E,E.document)}:h(jQuery,window,document)})(function(h,E,H,k){function $(a){var b,c,d={};h.each(a,function(e){if((b=e.match(/^([^A-Z]+?)([A-Z])/))&&-1!=="a aa ai ao as b fn i m o s ".indexOf(b[1]+" "))c=e.replace(b[0],b[2].toLowerCase()),
d[c]=e,"o"===b[1]&&$(a[e])});a._hungarianMap=d}function J(a,b,c){a._hungarianMap||$(a);var d;h.each(b,function(e){d=a._hungarianMap[e];if(d!==k&&(c||b[d]===k))"o"===d.charAt(0)?(b[d]||(b[d]={}),h.extend(!0,b[d],b[e]),J(a[d],b[d],c)):b[d]=b[e]})}function Ea(a){var b=n.defaults.oLanguage,c=b.sDecimal;c&&Fa(c);if(a){var d=a.sZeroRecords;!a.sEmptyTable&&(d&&"No data available in table"===b.sEmptyTable)&&F(a,a,"sZeroRecords","sEmptyTable");!a.sLoadingRecords&&(d&&"Loading..."===b.sLoadingRecords)&&F(a,
a,"sZeroRecords","sLoadingRecords");a.sInfoThousands&&(a.sThousands=a.sInfoThousands);(a=a.sDecimal)&&c!==a&&Fa(a)}}function gb(a){A(a,"ordering","bSort");A(a,"orderMulti","bSortMulti");A(a,"orderClasses","bSortClasses");A(a,"orderCellsTop","bSortCellsTop");A(a,"order","aaSorting");A(a,"orderFixed","aaSortingFixed");A(a,"paging","bPaginate");A(a,"pagingType","sPaginationType");A(a,"pageLength","iDisplayLength");A(a,"searching","bFilter");"boolean"===typeof a.sScrollX&&(a.sScrollX=a.sScrollX?"100%":
"");"boolean"===typeof a.scrollX&&(a.scrollX=a.scrollX?"100%":"");if(a=a.aoSearchCols)for(var b=0,c=a.length;b<c;b++)a[b]&&J(n.models.oSearch,a[b])}function hb(a){A(a,"orderable","bSortable");A(a,"orderData","aDataSort");A(a,"orderSequence","asSorting");A(a,"orderDataType","sortDataType");var b=a.aDataSort;"number"===typeof b&&!h.isArray(b)&&(a.aDataSort=[b])}function ib(a){if(!n.__browser){var b={};n.__browser=b;var c=h("<div/>").css({position:"fixed",top:0,left:-1*h(E).scrollLeft(),height:1,width:1,
overflow:"hidden"}).append(h("<div/>").css({position:"absolute",top:1,left:1,width:100,overflow:"scroll"}).append(h("<div/>").css({width:"100%",height:10}))).appendTo("body"),d=c.children(),e=d.children();b.barWidth=d[0].offsetWidth-d[0].clientWidth;b.bScrollOversize=100===e[0].offsetWidth&&100!==d[0].clientWidth;b.bScrollbarLeft=1!==Math.round(e.offset().left);b.bBounding=c[0].getBoundingClientRect().width?!0:!1;c.remove()}h.extend(a.oBrowser,n.__browser);a.oScroll.iBarWidth=n.__browser.barWidth}
function jb(a,b,c,d,e,f){var g,j=!1;c!==k&&(g=c,j=!0);for(;d!==e;)a.hasOwnProperty(d)&&(g=j?b(g,a[d],d,a):a[d],j=!0,d+=f);return g}function Ga(a,b){var c=n.defaults.column,d=a.aoColumns.length,c=h.extend({},n.models.oColumn,c,{nTh:b?b:H.createElement("th"),sTitle:c.sTitle?c.sTitle:b?b.innerHTML:"",aDataSort:c.aDataSort?c.aDataSort:[d],mData:c.mData?c.mData:d,idx:d});a.aoColumns.push(c);c=a.aoPreSearchCols;c[d]=h.extend({},n.models.oSearch,c[d]);la(a,d,h(b).data())}function la(a,b,c){var b=a.aoColumns[b],
d=a.oClasses,e=h(b.nTh);if(!b.sWidthOrig){b.sWidthOrig=e.attr("width")||null;var f=(e.attr("style")||"").match(/width:\s*(\d+[pxem%]+)/);f&&(b.sWidthOrig=f[1])}c!==k&&null!==c&&(hb(c),J(n.defaults.column,c,!0),c.mDataProp!==k&&!c.mData&&(c.mData=c.mDataProp),c.sType&&(b._sManualType=c.sType),c.className&&!c.sClass&&(c.sClass=c.className),c.sClass&&e.addClass(c.sClass),h.extend(b,c),F(b,c,"sWidth","sWidthOrig"),c.iDataSort!==k&&(b.aDataSort=[c.iDataSort]),F(b,c,"aDataSort"));var g=b.mData,j=S(g),i=
b.mRender?S(b.mRender):null,c=function(a){return"string"===typeof a&&-1!==a.indexOf("@")};b._bAttrSrc=h.isPlainObject(g)&&(c(g.sort)||c(g.type)||c(g.filter));b._setter=null;b.fnGetData=function(a,b,c){var d=j(a,b,k,c);return i&&b?i(d,b,a,c):d};b.fnSetData=function(a,b,c){return N(g)(a,b,c)};"number"!==typeof g&&(a._rowReadObject=!0);a.oFeatures.bSort||(b.bSortable=!1,e.addClass(d.sSortableNone));a=-1!==h.inArray("asc",b.asSorting);c=-1!==h.inArray("desc",b.asSorting);!b.bSortable||!a&&!c?(b.sSortingClass=
d.sSortableNone,b.sSortingClassJUI=""):a&&!c?(b.sSortingClass=d.sSortableAsc,b.sSortingClassJUI=d.sSortJUIAscAllowed):!a&&c?(b.sSortingClass=d.sSortableDesc,b.sSortingClassJUI=d.sSortJUIDescAllowed):(b.sSortingClass=d.sSortable,b.sSortingClassJUI=d.sSortJUI)}function aa(a){if(!1!==a.oFeatures.bAutoWidth){var b=a.aoColumns;Ha(a);for(var c=0,d=b.length;c<d;c++)b[c].nTh.style.width=b[c].sWidth}b=a.oScroll;(""!==b.sY||""!==b.sX)&&ma(a);t(a,null,"column-sizing",[a])}function ba(a,b){var c=na(a,"bVisible");
return"number"===typeof c[b]?c[b]:null}function ca(a,b){var c=na(a,"bVisible"),c=h.inArray(b,c);return-1!==c?c:null}function W(a){var b=0;h.each(a.aoColumns,function(a,d){d.bVisible&&"none"!==h(d.nTh).css("display")&&b++});return b}function na(a,b){var c=[];h.map(a.aoColumns,function(a,e){a[b]&&c.push(e)});return c}function Ia(a){var b=a.aoColumns,c=a.aoData,d=n.ext.type.detect,e,f,g,j,i,h,m,q,u;e=0;for(f=b.length;e<f;e++)if(m=b[e],u=[],!m.sType&&m._sManualType)m.sType=m._sManualType;else if(!m.sType){g=
0;for(j=d.length;g<j;g++){i=0;for(h=c.length;i<h;i++){u[i]===k&&(u[i]=B(a,i,e,"type"));q=d[g](u[i],a);if(!q&&g!==d.length-1)break;if("html"===q)break}if(q){m.sType=q;break}}m.sType||(m.sType="string")}}function kb(a,b,c,d){var e,f,g,j,i,l,m=a.aoColumns;if(b)for(e=b.length-1;0<=e;e--){l=b[e];var q=l.targets!==k?l.targets:l.aTargets;h.isArray(q)||(q=[q]);f=0;for(g=q.length;f<g;f++)if("number"===typeof q[f]&&0<=q[f]){for(;m.length<=q[f];)Ga(a);d(q[f],l)}else if("number"===typeof q[f]&&0>q[f])d(m.length+
q[f],l);else if("string"===typeof q[f]){j=0;for(i=m.length;j<i;j++)("_all"==q[f]||h(m[j].nTh).hasClass(q[f]))&&d(j,l)}}if(c){e=0;for(a=c.length;e<a;e++)d(e,c[e])}}function O(a,b,c,d){var e=a.aoData.length,f=h.extend(!0,{},n.models.oRow,{src:c?"dom":"data",idx:e});f._aData=b;a.aoData.push(f);for(var g=a.aoColumns,j=0,i=g.length;j<i;j++)g[j].sType=null;a.aiDisplayMaster.push(e);b=a.rowIdFn(b);b!==k&&(a.aIds[b]=f);(c||!a.oFeatures.bDeferRender)&&Ja(a,e,c,d);return e}function oa(a,b){var c;b instanceof
h||(b=h(b));return b.map(function(b,e){c=Ka(a,e);return O(a,c.data,e,c.cells)})}function B(a,b,c,d){var e=a.iDraw,f=a.aoColumns[c],g=a.aoData[b]._aData,j=f.sDefaultContent,i=f.fnGetData(g,d,{settings:a,row:b,col:c});if(i===k)return a.iDrawError!=e&&null===j&&(K(a,0,"Requested unknown parameter "+("function"==typeof f.mData?"{function}":"'"+f.mData+"'")+" for row "+b+", column "+c,4),a.iDrawError=e),j;if((i===g||null===i)&&null!==j&&d!==k)i=j;else if("function"===typeof i)return i.call(g);return null===
i&&"display"==d?"":i}function lb(a,b,c,d){a.aoColumns[c].fnSetData(a.aoData[b]._aData,d,{settings:a,row:b,col:c})}function La(a){return h.map(a.match(/(\\.|[^\.])+/g)||[""],function(a){return a.replace(/\\\./g,".")})}function S(a){if(h.isPlainObject(a)){var b={};h.each(a,function(a,c){c&&(b[a]=S(c))});return function(a,c,f,g){var j=b[c]||b._;return j!==k?j(a,c,f,g):a}}if(null===a)return function(a){return a};if("function"===typeof a)return function(b,c,f,g){return a(b,c,f,g)};if("string"===typeof a&&
(-1!==a.indexOf(".")||-1!==a.indexOf("[")||-1!==a.indexOf("("))){var c=function(a,b,f){var g,j;if(""!==f){j=La(f);for(var i=0,l=j.length;i<l;i++){f=j[i].match(da);g=j[i].match(X);if(f){j[i]=j[i].replace(da,"");""!==j[i]&&(a=a[j[i]]);g=[];j.splice(0,i+1);j=j.join(".");if(h.isArray(a)){i=0;for(l=a.length;i<l;i++)g.push(c(a[i],b,j))}a=f[0].substring(1,f[0].length-1);a=""===a?g:g.join(a);break}else if(g){j[i]=j[i].replace(X,"");a=a[j[i]]();continue}if(null===a||a[j[i]]===k)return k;a=a[j[i]]}}return a};
return function(b,e){return c(b,e,a)}}return function(b){return b[a]}}function N(a){if(h.isPlainObject(a))return N(a._);if(null===a)return function(){};if("function"===typeof a)return function(b,d,e){a(b,"set",d,e)};if("string"===typeof a&&(-1!==a.indexOf(".")||-1!==a.indexOf("[")||-1!==a.indexOf("("))){var b=function(a,d,e){var e=La(e),f;f=e[e.length-1];for(var g,j,i=0,l=e.length-1;i<l;i++){g=e[i].match(da);j=e[i].match(X);if(g){e[i]=e[i].replace(da,"");a[e[i]]=[];f=e.slice();f.splice(0,i+1);g=f.join(".");
if(h.isArray(d)){j=0;for(l=d.length;j<l;j++)f={},b(f,d[j],g),a[e[i]].push(f)}else a[e[i]]=d;return}j&&(e[i]=e[i].replace(X,""),a=a[e[i]](d));if(null===a[e[i]]||a[e[i]]===k)a[e[i]]={};a=a[e[i]]}if(f.match(X))a[f.replace(X,"")](d);else a[f.replace(da,"")]=d};return function(c,d){return b(c,d,a)}}return function(b,d){b[a]=d}}function Ma(a){return C(a.aoData,"_aData")}function pa(a){a.aoData.length=0;a.aiDisplayMaster.length=0;a.aiDisplay.length=0;a.aIds={}}function qa(a,b,c){for(var d=-1,e=0,f=a.length;e<
f;e++)a[e]==b?d=e:a[e]>b&&a[e]--; -1!=d&&c===k&&a.splice(d,1)}function ea(a,b,c,d){var e=a.aoData[b],f,g=function(c,d){for(;c.childNodes.length;)c.removeChild(c.firstChild);c.innerHTML=B(a,b,d,"display")};if("dom"===c||(!c||"auto"===c)&&"dom"===e.src)e._aData=Ka(a,e,d,d===k?k:e._aData).data;else{var j=e.anCells;if(j)if(d!==k)g(j[d],d);else{c=0;for(f=j.length;c<f;c++)g(j[c],c)}}e._aSortData=null;e._aFilterData=null;g=a.aoColumns;if(d!==k)g[d].sType=null;else{c=0;for(f=g.length;c<f;c++)g[c].sType=null;
Na(a,e)}}function Ka(a,b,c,d){var e=[],f=b.firstChild,g,j,i=0,l,m=a.aoColumns,q=a._rowReadObject,d=d!==k?d:q?{}:[],u=function(a,b){if("string"===typeof a){var c=a.indexOf("@");-1!==c&&(c=a.substring(c+1),N(a)(d,b.getAttribute(c)))}},G=function(a){if(c===k||c===i)j=m[i],l=h.trim(a.innerHTML),j&&j._bAttrSrc?(N(j.mData._)(d,l),u(j.mData.sort,a),u(j.mData.type,a),u(j.mData.filter,a)):q?(j._setter||(j._setter=N(j.mData)),j._setter(d,l)):d[i]=l;i++};if(f)for(;f;){g=f.nodeName.toUpperCase();if("TD"==g||
"TH"==g)G(f),e.push(f);f=f.nextSibling}else{e=b.anCells;f=0;for(g=e.length;f<g;f++)G(e[f])}if(b=b.firstChild?b:b.nTr)(b=b.getAttribute("id"))&&N(a.rowId)(d,b);return{data:d,cells:e}}function Ja(a,b,c,d){var e=a.aoData[b],f=e._aData,g=[],j,i,l,m,q,k;if(null===e.nTr){j=c||H.createElement("tr");e.nTr=j;e.anCells=g;j._DT_RowIndex=b;Na(a,e);m=0;for(q=a.aoColumns.length;m<q;m++){l=a.aoColumns[m];i=(k=c?!1:!0)?H.createElement(l.sCellType):d[m];i._DT_CellIndex={row:b,column:m};g.push(i);if(k||(!c||l.mRender||
l.mData!==m)&&(!h.isPlainObject(l.mData)||l.mData._!==m+".display"))i.innerHTML=B(a,b,m,"display");l.sClass&&(i.className+=" "+l.sClass);l.bVisible&&!c?j.appendChild(i):!l.bVisible&&c&&i.parentNode.removeChild(i);l.fnCreatedCell&&l.fnCreatedCell.call(a.oInstance,i,B(a,b,m),f,b,m)}t(a,"aoRowCreatedCallback",null,[j,f,b,g])}e.nTr.setAttribute("role","row")}function Na(a,b){var c=b.nTr,d=b._aData;if(c){var e=a.rowIdFn(d);e&&(c.id=e);d.DT_RowClass&&(e=d.DT_RowClass.split(" "),b.__rowc=b.__rowc?ra(b.__rowc.concat(e)):
e,h(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass));d.DT_RowAttr&&h(c).attr(d.DT_RowAttr);d.DT_RowData&&h(c).data(d.DT_RowData)}}function mb(a){var b,c,d,e,f,g=a.nTHead,j=a.nTFoot,i=0===h("th, td",g).length,l=a.oClasses,m=a.aoColumns;i&&(e=h("<tr/>").appendTo(g));b=0;for(c=m.length;b<c;b++)f=m[b],d=h(f.nTh).addClass(f.sClass),i&&d.appendTo(e),a.oFeatures.bSort&&(d.addClass(f.sSortingClass),!1!==f.bSortable&&(d.attr("tabindex",a.iTabIndex).attr("aria-controls",a.sTableId),Oa(a,f.nTh,b))),
f.sTitle!=d[0].innerHTML&&d.html(f.sTitle),Pa(a,"header")(a,d,f,l);i&&fa(a.aoHeader,g);h(g).find(">tr").attr("role","row");h(g).find(">tr>th, >tr>td").addClass(l.sHeaderTH);h(j).find(">tr>th, >tr>td").addClass(l.sFooterTH);if(null!==j){a=a.aoFooter[0];b=0;for(c=a.length;b<c;b++)f=m[b],f.nTf=a[b].cell,f.sClass&&h(f.nTf).addClass(f.sClass)}}function ga(a,b,c){var d,e,f,g=[],j=[],i=a.aoColumns.length,l;if(b){c===k&&(c=!1);d=0;for(e=b.length;d<e;d++){g[d]=b[d].slice();g[d].nTr=b[d].nTr;for(f=i-1;0<=f;f--)!a.aoColumns[f].bVisible&&
!c&&g[d].splice(f,1);j.push([])}d=0;for(e=g.length;d<e;d++){if(a=g[d].nTr)for(;f=a.firstChild;)a.removeChild(f);f=0;for(b=g[d].length;f<b;f++)if(l=i=1,j[d][f]===k){a.appendChild(g[d][f].cell);for(j[d][f]=1;g[d+i]!==k&&g[d][f].cell==g[d+i][f].cell;)j[d+i][f]=1,i++;for(;g[d][f+l]!==k&&g[d][f].cell==g[d][f+l].cell;){for(c=0;c<i;c++)j[d+c][f+l]=1;l++}h(g[d][f].cell).attr("rowspan",i).attr("colspan",l)}}}}function P(a){var b=t(a,"aoPreDrawCallback","preDraw",[a]);if(-1!==h.inArray(!1,b))D(a,!1);else{var b=
[],c=0,d=a.asStripeClasses,e=d.length,f=a.oLanguage,g=a.iInitDisplayStart,j="ssp"==y(a),i=a.aiDisplay;a.bDrawing=!0;g!==k&&-1!==g&&(a._iDisplayStart=j?g:g>=a.fnRecordsDisplay()?0:g,a.iInitDisplayStart=-1);var g=a._iDisplayStart,l=a.fnDisplayEnd();if(a.bDeferLoading)a.bDeferLoading=!1,a.iDraw++,D(a,!1);else if(j){if(!a.bDestroying&&!nb(a))return}else a.iDraw++;if(0!==i.length){f=j?a.aoData.length:l;for(j=j?0:g;j<f;j++){var m=i[j],q=a.aoData[m];null===q.nTr&&Ja(a,m);var u=q.nTr;if(0!==e){var G=d[c%
e];q._sRowStripe!=G&&(h(u).removeClass(q._sRowStripe).addClass(G),q._sRowStripe=G)}t(a,"aoRowCallback",null,[u,q._aData,c,j,m]);b.push(u);c++}}else c=f.sZeroRecords,1==a.iDraw&&"ajax"==y(a)?c=f.sLoadingRecords:f.sEmptyTable&&0===a.fnRecordsTotal()&&(c=f.sEmptyTable),b[0]=h("<tr/>",{"class":e?d[0]:""}).append(h("<td />",{valign:"top",colSpan:W(a),"class":a.oClasses.sRowEmpty}).html(c))[0];t(a,"aoHeaderCallback","header",[h(a.nTHead).children("tr")[0],Ma(a),g,l,i]);t(a,"aoFooterCallback","footer",[h(a.nTFoot).children("tr")[0],
Ma(a),g,l,i]);d=h(a.nTBody);d.children().detach();d.append(h(b));t(a,"aoDrawCallback","draw",[a]);a.bSorted=!1;a.bFiltered=!1;a.bDrawing=!1}}function T(a,b){var c=a.oFeatures,d=c.bFilter;c.bSort&&ob(a);d?ha(a,a.oPreviousSearch):a.aiDisplay=a.aiDisplayMaster.slice();!0!==b&&(a._iDisplayStart=0);a._drawHold=b;P(a);a._drawHold=!1}function pb(a){var b=a.oClasses,c=h(a.nTable),c=h("<div/>").insertBefore(c),d=a.oFeatures,e=h("<div/>",{id:a.sTableId+"_wrapper","class":b.sWrapper+(a.nTFoot?"":" "+b.sNoFooter)});
a.nHolding=c[0];a.nTableWrapper=e[0];a.nTableReinsertBefore=a.nTable.nextSibling;for(var f=a.sDom.split(""),g,j,i,l,m,q,k=0;k<f.length;k++){g=null;j=f[k];if("<"==j){i=h("<div/>")[0];l=f[k+1];if("'"==l||'"'==l){m="";for(q=2;f[k+q]!=l;)m+=f[k+q],q++;"H"==m?m=b.sJUIHeader:"F"==m&&(m=b.sJUIFooter);-1!=m.indexOf(".")?(l=m.split("."),i.id=l[0].substr(1,l[0].length-1),i.className=l[1]):"#"==m.charAt(0)?i.id=m.substr(1,m.length-1):i.className=m;k+=q}e.append(i);e=h(i)}else if(">"==j)e=e.parent();else if("l"==
j&&d.bPaginate&&d.bLengthChange)g=qb(a);else if("f"==j&&d.bFilter)g=rb(a);else if("r"==j&&d.bProcessing)g=sb(a);else if("t"==j)g=tb(a);else if("i"==j&&d.bInfo)g=ub(a);else if("p"==j&&d.bPaginate)g=vb(a);else if(0!==n.ext.feature.length){i=n.ext.feature;q=0;for(l=i.length;q<l;q++)if(j==i[q].cFeature){g=i[q].fnInit(a);break}}g&&(i=a.aanFeatures,i[j]||(i[j]=[]),i[j].push(g),e.append(g))}c.replaceWith(e);a.nHolding=null}function fa(a,b){var c=h(b).children("tr"),d,e,f,g,j,i,l,m,q,k;a.splice(0,a.length);
f=0;for(i=c.length;f<i;f++)a.push([]);f=0;for(i=c.length;f<i;f++){d=c[f];for(e=d.firstChild;e;){if("TD"==e.nodeName.toUpperCase()||"TH"==e.nodeName.toUpperCase()){m=1*e.getAttribute("colspan");q=1*e.getAttribute("rowspan");m=!m||0===m||1===m?1:m;q=!q||0===q||1===q?1:q;g=0;for(j=a[f];j[g];)g++;l=g;k=1===m?!0:!1;for(j=0;j<m;j++)for(g=0;g<q;g++)a[f+g][l+j]={cell:e,unique:k},a[f+g].nTr=d}e=e.nextSibling}}}function sa(a,b,c){var d=[];c||(c=a.aoHeader,b&&(c=[],fa(c,b)));for(var b=0,e=c.length;b<e;b++)for(var f=
0,g=c[b].length;f<g;f++)if(c[b][f].unique&&(!d[f]||!a.bSortCellsTop))d[f]=c[b][f].cell;return d}function ta(a,b,c){t(a,"aoServerParams","serverParams",[b]);if(b&&h.isArray(b)){var d={},e=/(.*?)\[\]$/;h.each(b,function(a,b){var c=b.name.match(e);c?(c=c[0],d[c]||(d[c]=[]),d[c].push(b.value)):d[b.name]=b.value});b=d}var f,g=a.ajax,j=a.oInstance,i=function(b){t(a,null,"xhr",[a,b,a.jqXHR]);c(b)};if(h.isPlainObject(g)&&g.data){f=g.data;var l="function"===typeof f?f(b,a):f,b="function"===typeof f&&l?l:h.extend(!0,
b,l);delete g.data}l={data:b,success:function(b){var c=b.error||b.sError;c&&K(a,0,c);a.json=b;i(b)},dataType:"json",cache:!1,type:a.sServerMethod,error:function(b,c){var d=t(a,null,"xhr",[a,null,a.jqXHR]);-1===h.inArray(!0,d)&&("parsererror"==c?K(a,0,"Invalid JSON response",1):4===b.readyState&&K(a,0,"Ajax error",7));D(a,!1)}};a.oAjaxData=b;t(a,null,"preXhr",[a,b]);a.fnServerData?a.fnServerData.call(j,a.sAjaxSource,h.map(b,function(a,b){return{name:b,value:a}}),i,a):a.sAjaxSource||"string"===typeof g?
a.jqXHR=h.ajax(h.extend(l,{url:g||a.sAjaxSource})):"function"===typeof g?a.jqXHR=g.call(j,b,i,a):(a.jqXHR=h.ajax(h.extend(l,g)),g.data=f)}function nb(a){return a.bAjaxDataGet?(a.iDraw++,D(a,!0),ta(a,wb(a),function(b){xb(a,b)}),!1):!0}function wb(a){var b=a.aoColumns,c=b.length,d=a.oFeatures,e=a.oPreviousSearch,f=a.aoPreSearchCols,g,j=[],i,l,m,k=Y(a);g=a._iDisplayStart;i=!1!==d.bPaginate?a._iDisplayLength:-1;var u=function(a,b){j.push({name:a,value:b})};u("sEcho",a.iDraw);u("iColumns",c);u("sColumns",
C(b,"sName").join(","));u("iDisplayStart",g);u("iDisplayLength",i);var G={draw:a.iDraw,columns:[],order:[],start:g,length:i,search:{value:e.sSearch,regex:e.bRegex}};for(g=0;g<c;g++)l=b[g],m=f[g],i="function"==typeof l.mData?"function":l.mData,G.columns.push({data:i,name:l.sName,searchable:l.bSearchable,orderable:l.bSortable,search:{value:m.sSearch,regex:m.bRegex}}),u("mDataProp_"+g,i),d.bFilter&&(u("sSearch_"+g,m.sSearch),u("bRegex_"+g,m.bRegex),u("bSearchable_"+g,l.bSearchable)),d.bSort&&u("bSortable_"+
g,l.bSortable);d.bFilter&&(u("sSearch",e.sSearch),u("bRegex",e.bRegex));d.bSort&&(h.each(k,function(a,b){G.order.push({column:b.col,dir:b.dir});u("iSortCol_"+a,b.col);u("sSortDir_"+a,b.dir)}),u("iSortingCols",k.length));b=n.ext.legacy.ajax;return null===b?a.sAjaxSource?j:G:b?j:G}function xb(a,b){var c=ua(a,b),d=b.sEcho!==k?b.sEcho:b.draw,e=b.iTotalRecords!==k?b.iTotalRecords:b.recordsTotal,f=b.iTotalDisplayRecords!==k?b.iTotalDisplayRecords:b.recordsFiltered;if(d){if(1*d<a.iDraw)return;a.iDraw=1*
d}pa(a);a._iRecordsTotal=parseInt(e,10);a._iRecordsDisplay=parseInt(f,10);d=0;for(e=c.length;d<e;d++)O(a,c[d]);a.aiDisplay=a.aiDisplayMaster.slice();a.bAjaxDataGet=!1;P(a);a._bInitComplete||va(a,b);a.bAjaxDataGet=!0;D(a,!1)}function ua(a,b){var c=h.isPlainObject(a.ajax)&&a.ajax.dataSrc!==k?a.ajax.dataSrc:a.sAjaxDataProp;return"data"===c?b.aaData||b[c]:""!==c?S(c)(b):b}function rb(a){var b=a.oClasses,c=a.sTableId,d=a.oLanguage,e=a.oPreviousSearch,f=a.aanFeatures,g='<input type="search" class="'+b.sFilterInput+
'"/>',j=d.sSearch,j=j.match(/_INPUT_/)?j.replace("_INPUT_",g):j+g,b=h("<div/>",{id:!f.f?c+"_filter":null,"class":b.sFilter}).append(h("<label/>").append(j)),f=function(){var b=!this.value?"":this.value;b!=e.sSearch&&(ha(a,{sSearch:b,bRegex:e.bRegex,bSmart:e.bSmart,bCaseInsensitive:e.bCaseInsensitive}),a._iDisplayStart=0,P(a))},g=null!==a.searchDelay?a.searchDelay:"ssp"===y(a)?400:0,i=h("input",b).val(e.sSearch).attr("placeholder",d.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT",
g?Qa(f,g):f).on("keypress.DT",function(a){if(13==a.keyCode)return!1}).attr("aria-controls",c);h(a.nTable).on("search.dt.DT",function(b,c){if(a===c)try{i[0]!==H.activeElement&&i.val(e.sSearch)}catch(d){}});return b[0]}function ha(a,b,c){var d=a.oPreviousSearch,e=a.aoPreSearchCols,f=function(a){d.sSearch=a.sSearch;d.bRegex=a.bRegex;d.bSmart=a.bSmart;d.bCaseInsensitive=a.bCaseInsensitive};Ia(a);if("ssp"!=y(a)){yb(a,b.sSearch,c,b.bEscapeRegex!==k?!b.bEscapeRegex:b.bRegex,b.bSmart,b.bCaseInsensitive);
f(b);for(b=0;b<e.length;b++)zb(a,e[b].sSearch,b,e[b].bEscapeRegex!==k?!e[b].bEscapeRegex:e[b].bRegex,e[b].bSmart,e[b].bCaseInsensitive);Ab(a)}else f(b);a.bFiltered=!0;t(a,null,"search",[a])}function Ab(a){for(var b=n.ext.search,c=a.aiDisplay,d,e,f=0,g=b.length;f<g;f++){for(var j=[],i=0,l=c.length;i<l;i++)e=c[i],d=a.aoData[e],b[f](a,d._aFilterData,e,d._aData,i)&&j.push(e);c.length=0;h.merge(c,j)}}function zb(a,b,c,d,e,f){if(""!==b){for(var g=[],j=a.aiDisplay,d=Ra(b,d,e,f),e=0;e<j.length;e++)b=a.aoData[j[e]]._aFilterData[c],
d.test(b)&&g.push(j[e]);a.aiDisplay=g}}function yb(a,b,c,d,e,f){var e=Ra(b,d,e,f),g=a.oPreviousSearch.sSearch,j=a.aiDisplayMaster,i,f=[];0!==n.ext.search.length&&(c=!0);i=Bb(a);if(0>=b.length)a.aiDisplay=j.slice();else{if(i||c||d||g.length>b.length||0!==b.indexOf(g)||a.bSorted)a.aiDisplay=j.slice();b=a.aiDisplay;for(c=0;c<b.length;c++)e.test(a.aoData[b[c]]._sFilterRow)&&f.push(b[c]);a.aiDisplay=f}}function Ra(a,b,c,d){a=b?a:Sa(a);c&&(a="^(?=.*?"+h.map(a.match(/"[^"]+"|[^ ]+/g)||[""],function(a){if('"'===
a.charAt(0))var b=a.match(/^"(.*)"$/),a=b?b[1]:a;return a.replace('"',"")}).join(")(?=.*?")+").*$");return RegExp(a,d?"i":"")}function Bb(a){var b=a.aoColumns,c,d,e,f,g,j,i,h,m=n.ext.type.search;c=!1;d=0;for(f=a.aoData.length;d<f;d++)if(h=a.aoData[d],!h._aFilterData){j=[];e=0;for(g=b.length;e<g;e++)c=b[e],c.bSearchable?(i=B(a,d,e,"filter"),m[c.sType]&&(i=m[c.sType](i)),null===i&&(i=""),"string"!==typeof i&&i.toString&&(i=i.toString())):i="",i.indexOf&&-1!==i.indexOf("&")&&(wa.innerHTML=i,i=Xb?wa.textContent:
wa.innerText),i.replace&&(i=i.replace(/[\r\n\u2028]/g,"")),j.push(i);h._aFilterData=j;h._sFilterRow=j.join("  ");c=!0}return c}function Cb(a){return{search:a.sSearch,smart:a.bSmart,regex:a.bRegex,caseInsensitive:a.bCaseInsensitive}}function Db(a){return{sSearch:a.search,bSmart:a.smart,bRegex:a.regex,bCaseInsensitive:a.caseInsensitive}}function ub(a){var b=a.sTableId,c=a.aanFeatures.i,d=h("<div/>",{"class":a.oClasses.sInfo,id:!c?b+"_info":null});c||(a.aoDrawCallback.push({fn:Eb,sName:"information"}),
d.attr("role","status").attr("aria-live","polite"),h(a.nTable).attr("aria-describedby",b+"_info"));return d[0]}function Eb(a){var b=a.aanFeatures.i;if(0!==b.length){var c=a.oLanguage,d=a._iDisplayStart+1,e=a.fnDisplayEnd(),f=a.fnRecordsTotal(),g=a.fnRecordsDisplay(),j=g?c.sInfo:c.sInfoEmpty;g!==f&&(j+=" "+c.sInfoFiltered);j+=c.sInfoPostFix;j=Fb(a,j);c=c.fnInfoCallback;null!==c&&(j=c.call(a.oInstance,a,d,e,f,g,j));h(b).html(j)}}function Fb(a,b){var c=a.fnFormatNumber,d=a._iDisplayStart+1,e=a._iDisplayLength,
f=a.fnRecordsDisplay(),g=-1===e;return b.replace(/_START_/g,c.call(a,d)).replace(/_END_/g,c.call(a,a.fnDisplayEnd())).replace(/_MAX_/g,c.call(a,a.fnRecordsTotal())).replace(/_TOTAL_/g,c.call(a,f)).replace(/_PAGE_/g,c.call(a,g?1:Math.ceil(d/e))).replace(/_PAGES_/g,c.call(a,g?1:Math.ceil(f/e)))}function ia(a){var b,c,d=a.iInitDisplayStart,e=a.aoColumns,f;c=a.oFeatures;var g=a.bDeferLoading;if(a.bInitialised){pb(a);mb(a);ga(a,a.aoHeader);ga(a,a.aoFooter);D(a,!0);c.bAutoWidth&&Ha(a);b=0;for(c=e.length;b<
c;b++)f=e[b],f.sWidth&&(f.nTh.style.width=w(f.sWidth));t(a,null,"preInit",[a]);T(a);e=y(a);if("ssp"!=e||g)"ajax"==e?ta(a,[],function(c){var f=ua(a,c);for(b=0;b<f.length;b++)O(a,f[b]);a.iInitDisplayStart=d;T(a);D(a,!1);va(a,c)},a):(D(a,!1),va(a))}else setTimeout(function(){ia(a)},200)}function va(a,b){a._bInitComplete=!0;(b||a.oInit.aaData)&&aa(a);t(a,null,"plugin-init",[a,b]);t(a,"aoInitComplete","init",[a,b])}function Ta(a,b){var c=parseInt(b,10);a._iDisplayLength=c;Ua(a);t(a,null,"length",[a,c])}
function qb(a){for(var b=a.oClasses,c=a.sTableId,d=a.aLengthMenu,e=h.isArray(d[0]),f=e?d[0]:d,d=e?d[1]:d,e=h("<select/>",{name:c+"_length","aria-controls":c,"class":b.sLengthSelect}),g=0,j=f.length;g<j;g++)e[0][g]=new Option("number"===typeof d[g]?a.fnFormatNumber(d[g]):d[g],f[g]);var i=h("<div><label/></div>").addClass(b.sLength);a.aanFeatures.l||(i[0].id=c+"_length");i.children().append(a.oLanguage.sLengthMenu.replace("_MENU_",e[0].outerHTML));h("select",i).val(a._iDisplayLength).on("change.DT",
function(){Ta(a,h(this).val());P(a)});h(a.nTable).on("length.dt.DT",function(b,c,d){a===c&&h("select",i).val(d)});return i[0]}function vb(a){var b=a.sPaginationType,c=n.ext.pager[b],d="function"===typeof c,e=function(a){P(a)},b=h("<div/>").addClass(a.oClasses.sPaging+b)[0],f=a.aanFeatures;d||c.fnInit(a,b,e);f.p||(b.id=a.sTableId+"_paginate",a.aoDrawCallback.push({fn:function(a){if(d){var b=a._iDisplayStart,i=a._iDisplayLength,h=a.fnRecordsDisplay(),m=-1===i,b=m?0:Math.ceil(b/i),i=m?1:Math.ceil(h/
i),h=c(b,i),k,m=0;for(k=f.p.length;m<k;m++)Pa(a,"pageButton")(a,f.p[m],m,h,b,i)}else c.fnUpdate(a,e)},sName:"pagination"}));return b}function Va(a,b,c){var d=a._iDisplayStart,e=a._iDisplayLength,f=a.fnRecordsDisplay();0===f||-1===e?d=0:"number"===typeof b?(d=b*e,d>f&&(d=0)):"first"==b?d=0:"previous"==b?(d=0<=e?d-e:0,0>d&&(d=0)):"next"==b?d+e<f&&(d+=e):"last"==b?d=Math.floor((f-1)/e)*e:K(a,0,"Unknown paging action: "+b,5);b=a._iDisplayStart!==d;a._iDisplayStart=d;b&&(t(a,null,"page",[a]),c&&P(a));
return b}function sb(a){return h("<div/>",{id:!a.aanFeatures.r?a.sTableId+"_processing":null,"class":a.oClasses.sProcessing}).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0]}function D(a,b){a.oFeatures.bProcessing&&h(a.aanFeatures.r).css("display",b?"block":"none");t(a,null,"processing",[a,b])}function tb(a){var b=h(a.nTable);b.attr("role","grid");var c=a.oScroll;if(""===c.sX&&""===c.sY)return a.nTable;var d=c.sX,e=c.sY,f=a.oClasses,g=b.children("caption"),j=g.length?g[0]._captionSide:null,
i=h(b[0].cloneNode(!1)),l=h(b[0].cloneNode(!1)),m=b.children("tfoot");m.length||(m=null);i=h("<div/>",{"class":f.sScrollWrapper}).append(h("<div/>",{"class":f.sScrollHead}).css({overflow:"hidden",position:"relative",border:0,width:d?!d?null:w(d):"100%"}).append(h("<div/>",{"class":f.sScrollHeadInner}).css({"box-sizing":"content-box",width:c.sXInner||"100%"}).append(i.removeAttr("id").css("margin-left",0).append("top"===j?g:null).append(b.children("thead"))))).append(h("<div/>",{"class":f.sScrollBody}).css({position:"relative",
overflow:"auto",width:!d?null:w(d)}).append(b));m&&i.append(h("<div/>",{"class":f.sScrollFoot}).css({overflow:"hidden",border:0,width:d?!d?null:w(d):"100%"}).append(h("<div/>",{"class":f.sScrollFootInner}).append(l.removeAttr("id").css("margin-left",0).append("bottom"===j?g:null).append(b.children("tfoot")))));var b=i.children(),k=b[0],f=b[1],u=m?b[2]:null;if(d)h(f).on("scroll.DT",function(){var a=this.scrollLeft;k.scrollLeft=a;m&&(u.scrollLeft=a)});h(f).css(e&&c.bCollapse?"max-height":"height",e);
a.nScrollHead=k;a.nScrollBody=f;a.nScrollFoot=u;a.aoDrawCallback.push({fn:ma,sName:"scrolling"});return i[0]}function ma(a){var b=a.oScroll,c=b.sX,d=b.sXInner,e=b.sY,b=b.iBarWidth,f=h(a.nScrollHead),g=f[0].style,j=f.children("div"),i=j[0].style,l=j.children("table"),j=a.nScrollBody,m=h(j),q=j.style,u=h(a.nScrollFoot).children("div"),n=u.children("table"),o=h(a.nTHead),p=h(a.nTable),r=p[0],t=r.style,s=a.nTFoot?h(a.nTFoot):null,U=a.oBrowser,V=U.bScrollOversize,Yb=C(a.aoColumns,"nTh"),Q,L,R,xa,v=[],
x=[],y=[],z=[],A,B=function(a){a=a.style;a.paddingTop="0";a.paddingBottom="0";a.borderTopWidth="0";a.borderBottomWidth="0";a.height=0};L=j.scrollHeight>j.clientHeight;if(a.scrollBarVis!==L&&a.scrollBarVis!==k)a.scrollBarVis=L,aa(a);else{a.scrollBarVis=L;p.children("thead, tfoot").remove();s&&(R=s.clone().prependTo(p),Q=s.find("tr"),R=R.find("tr"));xa=o.clone().prependTo(p);o=o.find("tr");L=xa.find("tr");xa.find("th, td").removeAttr("tabindex");c||(q.width="100%",f[0].style.width="100%");h.each(sa(a,
xa),function(b,c){A=ba(a,b);c.style.width=a.aoColumns[A].sWidth});s&&I(function(a){a.style.width=""},R);f=p.outerWidth();if(""===c){t.width="100%";if(V&&(p.find("tbody").height()>j.offsetHeight||"scroll"==m.css("overflow-y")))t.width=w(p.outerWidth()-b);f=p.outerWidth()}else""!==d&&(t.width=w(d),f=p.outerWidth());I(B,L);I(function(a){y.push(a.innerHTML);v.push(w(h(a).css("width")))},L);I(function(a,b){if(h.inArray(a,Yb)!==-1)a.style.width=v[b]},o);h(L).height(0);s&&(I(B,R),I(function(a){z.push(a.innerHTML);
x.push(w(h(a).css("width")))},R),I(function(a,b){a.style.width=x[b]},Q),h(R).height(0));I(function(a,b){a.innerHTML='<div class="dataTables_sizing">'+y[b]+"</div>";a.childNodes[0].style.height="0";a.childNodes[0].style.overflow="hidden";a.style.width=v[b]},L);s&&I(function(a,b){a.innerHTML='<div class="dataTables_sizing">'+z[b]+"</div>";a.childNodes[0].style.height="0";a.childNodes[0].style.overflow="hidden";a.style.width=x[b]},R);if(p.outerWidth()<f){Q=j.scrollHeight>j.offsetHeight||"scroll"==m.css("overflow-y")?
f+b:f;if(V&&(j.scrollHeight>j.offsetHeight||"scroll"==m.css("overflow-y")))t.width=w(Q-b);(""===c||""!==d)&&K(a,1,"Possible column misalignment",6)}else Q="100%";q.width=w(Q);g.width=w(Q);s&&(a.nScrollFoot.style.width=w(Q));!e&&V&&(q.height=w(r.offsetHeight+b));c=p.outerWidth();l[0].style.width=w(c);i.width=w(c);d=p.height()>j.clientHeight||"scroll"==m.css("overflow-y");e="padding"+(U.bScrollbarLeft?"Left":"Right");i[e]=d?b+"px":"0px";s&&(n[0].style.width=w(c),u[0].style.width=w(c),u[0].style[e]=
d?b+"px":"0px");p.children("colgroup").insertBefore(p.children("thead"));m.trigger("scroll");if((a.bSorted||a.bFiltered)&&!a._drawHold)j.scrollTop=0}}function I(a,b,c){for(var d=0,e=0,f=b.length,g,j;e<f;){g=b[e].firstChild;for(j=c?c[e].firstChild:null;g;)1===g.nodeType&&(c?a(g,j,d):a(g,d),d++),g=g.nextSibling,j=c?j.nextSibling:null;e++}}function Ha(a){var b=a.nTable,c=a.aoColumns,d=a.oScroll,e=d.sY,f=d.sX,g=d.sXInner,j=c.length,i=na(a,"bVisible"),l=h("th",a.nTHead),m=b.getAttribute("width"),k=b.parentNode,
u=!1,n,o,p=a.oBrowser,d=p.bScrollOversize;(n=b.style.width)&&-1!==n.indexOf("%")&&(m=n);for(n=0;n<i.length;n++)o=c[i[n]],null!==o.sWidth&&(o.sWidth=Gb(o.sWidthOrig,k),u=!0);if(d||!u&&!f&&!e&&j==W(a)&&j==l.length)for(n=0;n<j;n++)i=ba(a,n),null!==i&&(c[i].sWidth=w(l.eq(n).width()));else{j=h(b).clone().css("visibility","hidden").removeAttr("id");j.find("tbody tr").remove();var r=h("<tr/>").appendTo(j.find("tbody"));j.find("thead, tfoot").remove();j.append(h(a.nTHead).clone()).append(h(a.nTFoot).clone());
j.find("tfoot th, tfoot td").css("width","");l=sa(a,j.find("thead")[0]);for(n=0;n<i.length;n++)o=c[i[n]],l[n].style.width=null!==o.sWidthOrig&&""!==o.sWidthOrig?w(o.sWidthOrig):"",o.sWidthOrig&&f&&h(l[n]).append(h("<div/>").css({width:o.sWidthOrig,margin:0,padding:0,border:0,height:1}));if(a.aoData.length)for(n=0;n<i.length;n++)u=i[n],o=c[u],h(Hb(a,u)).clone(!1).append(o.sContentPadding).appendTo(r);h("[name]",j).removeAttr("name");o=h("<div/>").css(f||e?{position:"absolute",top:0,left:0,height:1,
right:0,overflow:"hidden"}:{}).append(j).appendTo(k);f&&g?j.width(g):f?(j.css("width","auto"),j.removeAttr("width"),j.width()<k.clientWidth&&m&&j.width(k.clientWidth)):e?j.width(k.clientWidth):m&&j.width(m);for(n=e=0;n<i.length;n++)k=h(l[n]),g=k.outerWidth()-k.width(),k=p.bBounding?Math.ceil(l[n].getBoundingClientRect().width):k.outerWidth(),e+=k,c[i[n]].sWidth=w(k-g);b.style.width=w(e);o.remove()}m&&(b.style.width=w(m));if((m||f)&&!a._reszEvt)b=function(){h(E).on("resize.DT-"+a.sInstance,Qa(function(){aa(a)}))},
d?setTimeout(b,1E3):b(),a._reszEvt=!0}function Gb(a,b){if(!a)return 0;var c=h("<div/>").css("width",w(a)).appendTo(b||H.body),d=c[0].offsetWidth;c.remove();return d}function Hb(a,b){var c=Ib(a,b);if(0>c)return null;var d=a.aoData[c];return!d.nTr?h("<td/>").html(B(a,c,b,"display"))[0]:d.anCells[b]}function Ib(a,b){for(var c,d=-1,e=-1,f=0,g=a.aoData.length;f<g;f++)c=B(a,f,b,"display")+"",c=c.replace(Zb,""),c=c.replace(/&nbsp;/g," "),c.length>d&&(d=c.length,e=f);return e}function w(a){return null===
a?"0px":"number"==typeof a?0>a?"0px":a+"px":a.match(/\d$/)?a+"px":a}function Y(a){var b,c,d=[],e=a.aoColumns,f,g,j,i;b=a.aaSortingFixed;c=h.isPlainObject(b);var l=[];f=function(a){a.length&&!h.isArray(a[0])?l.push(a):h.merge(l,a)};h.isArray(b)&&f(b);c&&b.pre&&f(b.pre);f(a.aaSorting);c&&b.post&&f(b.post);for(a=0;a<l.length;a++){i=l[a][0];f=e[i].aDataSort;b=0;for(c=f.length;b<c;b++)g=f[b],j=e[g].sType||"string",l[a]._idx===k&&(l[a]._idx=h.inArray(l[a][1],e[g].asSorting)),d.push({src:i,col:g,dir:l[a][1],
index:l[a]._idx,type:j,formatter:n.ext.type.order[j+"-pre"]})}return d}function ob(a){var b,c,d=[],e=n.ext.type.order,f=a.aoData,g=0,j,i=a.aiDisplayMaster,h;Ia(a);h=Y(a);b=0;for(c=h.length;b<c;b++)j=h[b],j.formatter&&g++,Jb(a,j.col);if("ssp"!=y(a)&&0!==h.length){b=0;for(c=i.length;b<c;b++)d[i[b]]=b;g===h.length?i.sort(function(a,b){var c,e,g,j,i=h.length,k=f[a]._aSortData,n=f[b]._aSortData;for(g=0;g<i;g++)if(j=h[g],c=k[j.col],e=n[j.col],c=c<e?-1:c>e?1:0,0!==c)return"asc"===j.dir?c:-c;c=d[a];e=d[b];
return c<e?-1:c>e?1:0}):i.sort(function(a,b){var c,g,j,i,k=h.length,n=f[a]._aSortData,o=f[b]._aSortData;for(j=0;j<k;j++)if(i=h[j],c=n[i.col],g=o[i.col],i=e[i.type+"-"+i.dir]||e["string-"+i.dir],c=i(c,g),0!==c)return c;c=d[a];g=d[b];return c<g?-1:c>g?1:0})}a.bSorted=!0}function Kb(a){for(var b,c,d=a.aoColumns,e=Y(a),a=a.oLanguage.oAria,f=0,g=d.length;f<g;f++){c=d[f];var j=c.asSorting;b=c.sTitle.replace(/<.*?>/g,"");var i=c.nTh;i.removeAttribute("aria-sort");c.bSortable&&(0<e.length&&e[0].col==f?(i.setAttribute("aria-sort",
"asc"==e[0].dir?"ascending":"descending"),c=j[e[0].index+1]||j[0]):c=j[0],b+="asc"===c?a.sSortAscending:a.sSortDescending);i.setAttribute("aria-label",b)}}function Wa(a,b,c,d){var e=a.aaSorting,f=a.aoColumns[b].asSorting,g=function(a,b){var c=a._idx;c===k&&(c=h.inArray(a[1],f));return c+1<f.length?c+1:b?null:0};"number"===typeof e[0]&&(e=a.aaSorting=[e]);c&&a.oFeatures.bSortMulti?(c=h.inArray(b,C(e,"0")),-1!==c?(b=g(e[c],!0),null===b&&1===e.length&&(b=0),null===b?e.splice(c,1):(e[c][1]=f[b],e[c]._idx=
b)):(e.push([b,f[0],0]),e[e.length-1]._idx=0)):e.length&&e[0][0]==b?(b=g(e[0]),e.length=1,e[0][1]=f[b],e[0]._idx=b):(e.length=0,e.push([b,f[0]]),e[0]._idx=0);T(a);"function"==typeof d&&d(a)}function Oa(a,b,c,d){var e=a.aoColumns[c];Xa(b,{},function(b){!1!==e.bSortable&&(a.oFeatures.bProcessing?(D(a,!0),setTimeout(function(){Wa(a,c,b.shiftKey,d);"ssp"!==y(a)&&D(a,!1)},0)):Wa(a,c,b.shiftKey,d))})}function ya(a){var b=a.aLastSort,c=a.oClasses.sSortColumn,d=Y(a),e=a.oFeatures,f,g;if(e.bSort&&e.bSortClasses){e=
0;for(f=b.length;e<f;e++)g=b[e].src,h(C(a.aoData,"anCells",g)).removeClass(c+(2>e?e+1:3));e=0;for(f=d.length;e<f;e++)g=d[e].src,h(C(a.aoData,"anCells",g)).addClass(c+(2>e?e+1:3))}a.aLastSort=d}function Jb(a,b){var c=a.aoColumns[b],d=n.ext.order[c.sSortDataType],e;d&&(e=d.call(a.oInstance,a,b,ca(a,b)));for(var f,g=n.ext.type.order[c.sType+"-pre"],j=0,i=a.aoData.length;j<i;j++)if(c=a.aoData[j],c._aSortData||(c._aSortData=[]),!c._aSortData[b]||d)f=d?e[j]:B(a,j,b,"sort"),c._aSortData[b]=g?g(f):f}function za(a){if(a.oFeatures.bStateSave&&
!a.bDestroying){var b={time:+new Date,start:a._iDisplayStart,length:a._iDisplayLength,order:h.extend(!0,[],a.aaSorting),search:Cb(a.oPreviousSearch),columns:h.map(a.aoColumns,function(b,d){return{visible:b.bVisible,search:Cb(a.aoPreSearchCols[d])}})};t(a,"aoStateSaveParams","stateSaveParams",[a,b]);a.oSavedState=b;a.fnStateSaveCallback.call(a.oInstance,a,b)}}function Lb(a,b,c){var d,e,f=a.aoColumns,b=function(b){if(b&&b.time){var g=t(a,"aoStateLoadParams","stateLoadParams",[a,b]);if(-1===h.inArray(!1,
g)&&(g=a.iStateDuration,!(0<g&&b.time<+new Date-1E3*g)&&!(b.columns&&f.length!==b.columns.length))){a.oLoadedState=h.extend(!0,{},b);b.start!==k&&(a._iDisplayStart=b.start,a.iInitDisplayStart=b.start);b.length!==k&&(a._iDisplayLength=b.length);b.order!==k&&(a.aaSorting=[],h.each(b.order,function(b,c){a.aaSorting.push(c[0]>=f.length?[0,c[1]]:c)}));b.search!==k&&h.extend(a.oPreviousSearch,Db(b.search));if(b.columns){d=0;for(e=b.columns.length;d<e;d++)g=b.columns[d],g.visible!==k&&(f[d].bVisible=g.visible),
g.search!==k&&h.extend(a.aoPreSearchCols[d],Db(g.search))}t(a,"aoStateLoaded","stateLoaded",[a,b])}}c()};if(a.oFeatures.bStateSave){var g=a.fnStateLoadCallback.call(a.oInstance,a,b);g!==k&&b(g)}else c()}function Aa(a){var b=n.settings,a=h.inArray(a,C(b,"nTable"));return-1!==a?b[a]:null}function K(a,b,c,d){c="DataTables warning: "+(a?"table id="+a.sTableId+" - ":"")+c;d&&(c+=". For more information about this error, please see http://datatables.net/tn/"+d);if(b)E.console&&console.log&&console.log(c);
else if(b=n.ext,b=b.sErrMode||b.errMode,a&&t(a,null,"error",[a,d,c]),"alert"==b)alert(c);else{if("throw"==b)throw Error(c);"function"==typeof b&&b(a,d,c)}}function F(a,b,c,d){h.isArray(c)?h.each(c,function(c,d){h.isArray(d)?F(a,b,d[0],d[1]):F(a,b,d)}):(d===k&&(d=c),b[c]!==k&&(a[d]=b[c]))}function Ya(a,b,c){var d,e;for(e in b)b.hasOwnProperty(e)&&(d=b[e],h.isPlainObject(d)?(h.isPlainObject(a[e])||(a[e]={}),h.extend(!0,a[e],d)):a[e]=c&&"data"!==e&&"aaData"!==e&&h.isArray(d)?d.slice():d);return a}function Xa(a,
b,c){h(a).on("click.DT",b,function(b){h(a).blur();c(b)}).on("keypress.DT",b,function(a){13===a.which&&(a.preventDefault(),c(a))}).on("selectstart.DT",function(){return!1})}function z(a,b,c,d){c&&a[b].push({fn:c,sName:d})}function t(a,b,c,d){var e=[];b&&(e=h.map(a[b].slice().reverse(),function(b){return b.fn.apply(a.oInstance,d)}));null!==c&&(b=h.Event(c+".dt"),h(a.nTable).trigger(b,d),e.push(b.result));return e}function Ua(a){var b=a._iDisplayStart,c=a.fnDisplayEnd(),d=a._iDisplayLength;b>=c&&(b=
c-d);b-=b%d;if(-1===d||0>b)b=0;a._iDisplayStart=b}function Pa(a,b){var c=a.renderer,d=n.ext.renderer[b];return h.isPlainObject(c)&&c[b]?d[c[b]]||d._:"string"===typeof c?d[c]||d._:d._}function y(a){return a.oFeatures.bServerSide?"ssp":a.ajax||a.sAjaxSource?"ajax":"dom"}function ja(a,b){var c=[],c=Mb.numbers_length,d=Math.floor(c/2);b<=c?c=Z(0,b):a<=d?(c=Z(0,c-2),c.push("ellipsis"),c.push(b-1)):(a>=b-1-d?c=Z(b-(c-2),b):(c=Z(a-d+2,a+d-1),c.push("ellipsis"),c.push(b-1)),c.splice(0,0,"ellipsis"),c.splice(0,
0,0));c.DT_el="span";return c}function Fa(a){h.each({num:function(b){return Ba(b,a)},"num-fmt":function(b){return Ba(b,a,Za)},"html-num":function(b){return Ba(b,a,Ca)},"html-num-fmt":function(b){return Ba(b,a,Ca,Za)}},function(b,c){v.type.order[b+a+"-pre"]=c;b.match(/^html\-/)&&(v.type.search[b+a]=v.type.search.html)})}function Nb(a){return function(){var b=[Aa(this[n.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));return n.ext.internal[a].apply(this,b)}}var n=function(a){this.$=function(a,
b){return this.api(!0).$(a,b)};this._=function(a,b){return this.api(!0).rows(a,b).data()};this.api=function(a){return a?new r(Aa(this[v.iApiIndex])):new r(this)};this.fnAddData=function(a,b){var c=this.api(!0),d=h.isArray(a)&&(h.isArray(a[0])||h.isPlainObject(a[0]))?c.rows.add(a):c.row.add(a);(b===k||b)&&c.draw();return d.flatten().toArray()};this.fnAdjustColumnSizing=function(a){var b=this.api(!0).columns.adjust(),c=b.settings()[0],d=c.oScroll;a===k||a?b.draw(!1):(""!==d.sX||""!==d.sY)&&ma(c)};this.fnClearTable=
function(a){var b=this.api(!0).clear();(a===k||a)&&b.draw()};this.fnClose=function(a){this.api(!0).row(a).child.hide()};this.fnDeleteRow=function(a,b,c){var d=this.api(!0),a=d.rows(a),e=a.settings()[0],h=e.aoData[a[0][0]];a.remove();b&&b.call(this,e,h);(c===k||c)&&d.draw();return h};this.fnDestroy=function(a){this.api(!0).destroy(a)};this.fnDraw=function(a){this.api(!0).draw(a)};this.fnFilter=function(a,b,c,d,e,h){e=this.api(!0);null===b||b===k?e.search(a,c,d,h):e.column(b).search(a,c,d,h);e.draw()};
this.fnGetData=function(a,b){var c=this.api(!0);if(a!==k){var d=a.nodeName?a.nodeName.toLowerCase():"";return b!==k||"td"==d||"th"==d?c.cell(a,b).data():c.row(a).data()||null}return c.data().toArray()};this.fnGetNodes=function(a){var b=this.api(!0);return a!==k?b.row(a).node():b.rows().nodes().flatten().toArray()};this.fnGetPosition=function(a){var b=this.api(!0),c=a.nodeName.toUpperCase();return"TR"==c?b.row(a).index():"TD"==c||"TH"==c?(a=b.cell(a).index(),[a.row,a.columnVisible,a.column]):null};
this.fnIsOpen=function(a){return this.api(!0).row(a).child.isShown()};this.fnOpen=function(a,b,c){return this.api(!0).row(a).child(b,c).show().child()[0]};this.fnPageChange=function(a,b){var c=this.api(!0).page(a);(b===k||b)&&c.draw(!1)};this.fnSetColumnVis=function(a,b,c){a=this.api(!0).column(a).visible(b);(c===k||c)&&a.columns.adjust().draw()};this.fnSettings=function(){return Aa(this[v.iApiIndex])};this.fnSort=function(a){this.api(!0).order(a).draw()};this.fnSortListener=function(a,b,c){this.api(!0).order.listener(a,
b,c)};this.fnUpdate=function(a,b,c,d,e){var h=this.api(!0);c===k||null===c?h.row(b).data(a):h.cell(b,c).data(a);(e===k||e)&&h.columns.adjust();(d===k||d)&&h.draw();return 0};this.fnVersionCheck=v.fnVersionCheck;var b=this,c=a===k,d=this.length;c&&(a={});this.oApi=this.internal=v.internal;for(var e in n.ext.internal)e&&(this[e]=Nb(e));this.each(function(){var e={},g=1<d?Ya(e,a,!0):a,j=0,i,e=this.getAttribute("id"),l=!1,m=n.defaults,q=h(this);if("table"!=this.nodeName.toLowerCase())K(null,0,"Non-table node initialisation ("+
this.nodeName+")",2);else{gb(m);hb(m.column);J(m,m,!0);J(m.column,m.column,!0);J(m,h.extend(g,q.data()),!0);var u=n.settings,j=0;for(i=u.length;j<i;j++){var o=u[j];if(o.nTable==this||o.nTHead&&o.nTHead.parentNode==this||o.nTFoot&&o.nTFoot.parentNode==this){var r=g.bRetrieve!==k?g.bRetrieve:m.bRetrieve;if(c||r)return o.oInstance;if(g.bDestroy!==k?g.bDestroy:m.bDestroy){o.oInstance.fnDestroy();break}else{K(o,0,"Cannot reinitialise DataTable",3);return}}if(o.sTableId==this.id){u.splice(j,1);break}}if(null===
e||""===e)this.id=e="DataTables_Table_"+n.ext._unique++;var p=h.extend(!0,{},n.models.oSettings,{sDestroyWidth:q[0].style.width,sInstance:e,sTableId:e});p.nTable=this;p.oApi=b.internal;p.oInit=g;u.push(p);p.oInstance=1===b.length?b:q.dataTable();gb(g);Ea(g.oLanguage);g.aLengthMenu&&!g.iDisplayLength&&(g.iDisplayLength=h.isArray(g.aLengthMenu[0])?g.aLengthMenu[0][0]:g.aLengthMenu[0]);g=Ya(h.extend(!0,{},m),g);F(p.oFeatures,g,"bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));
F(p,g,["asStripeClasses","ajax","fnServerData","fnFormatNumber","sServerMethod","aaSorting","aaSortingFixed","aLengthMenu","sPaginationType","sAjaxSource","sAjaxDataProp","iStateDuration","sDom","bSortCellsTop","iTabIndex","fnStateLoadCallback","fnStateSaveCallback","renderer","searchDelay","rowId",["iCookieDuration","iStateDuration"],["oSearch","oPreviousSearch"],["aoSearchCols","aoPreSearchCols"],["iDisplayLength","_iDisplayLength"]]);F(p.oScroll,g,[["sScrollX","sX"],["sScrollXInner","sXInner"],
["sScrollY","sY"],["bScrollCollapse","bCollapse"]]);F(p.oLanguage,g,"fnInfoCallback");z(p,"aoDrawCallback",g.fnDrawCallback,"user");z(p,"aoServerParams",g.fnServerParams,"user");z(p,"aoStateSaveParams",g.fnStateSaveParams,"user");z(p,"aoStateLoadParams",g.fnStateLoadParams,"user");z(p,"aoStateLoaded",g.fnStateLoaded,"user");z(p,"aoRowCallback",g.fnRowCallback,"user");z(p,"aoRowCreatedCallback",g.fnCreatedRow,"user");z(p,"aoHeaderCallback",g.fnHeaderCallback,"user");z(p,"aoFooterCallback",g.fnFooterCallback,
"user");z(p,"aoInitComplete",g.fnInitComplete,"user");z(p,"aoPreDrawCallback",g.fnPreDrawCallback,"user");p.rowIdFn=S(g.rowId);ib(p);var s=p.oClasses;h.extend(s,n.ext.classes,g.oClasses);q.addClass(s.sTable);p.iInitDisplayStart===k&&(p.iInitDisplayStart=g.iDisplayStart,p._iDisplayStart=g.iDisplayStart);null!==g.iDeferLoading&&(p.bDeferLoading=!0,e=h.isArray(g.iDeferLoading),p._iRecordsDisplay=e?g.iDeferLoading[0]:g.iDeferLoading,p._iRecordsTotal=e?g.iDeferLoading[1]:g.iDeferLoading);var w=p.oLanguage;
h.extend(!0,w,g.oLanguage);w.sUrl&&(h.ajax({dataType:"json",url:w.sUrl,success:function(a){Ea(a);J(m.oLanguage,a);h.extend(true,w,a);ia(p)},error:function(){ia(p)}}),l=!0);null===g.asStripeClasses&&(p.asStripeClasses=[s.sStripeOdd,s.sStripeEven]);var e=p.asStripeClasses,v=q.children("tbody").find("tr").eq(0);-1!==h.inArray(!0,h.map(e,function(a){return v.hasClass(a)}))&&(h("tbody tr",this).removeClass(e.join(" ")),p.asDestroyStripes=e.slice());e=[];u=this.getElementsByTagName("thead");0!==u.length&&
(fa(p.aoHeader,u[0]),e=sa(p));if(null===g.aoColumns){u=[];j=0;for(i=e.length;j<i;j++)u.push(null)}else u=g.aoColumns;j=0;for(i=u.length;j<i;j++)Ga(p,e?e[j]:null);kb(p,g.aoColumnDefs,u,function(a,b){la(p,a,b)});if(v.length){var U=function(a,b){return a.getAttribute("data-"+b)!==null?b:null};h(v[0]).children("th, td").each(function(a,b){var c=p.aoColumns[a];if(c.mData===a){var d=U(b,"sort")||U(b,"order"),e=U(b,"filter")||U(b,"search");if(d!==null||e!==null){c.mData={_:a+".display",sort:d!==null?a+".@data-"+
d:k,type:d!==null?a+".@data-"+d:k,filter:e!==null?a+".@data-"+e:k};la(p,a)}}})}var V=p.oFeatures,e=function(){if(g.aaSorting===k){var a=p.aaSorting;j=0;for(i=a.length;j<i;j++)a[j][1]=p.aoColumns[j].asSorting[0]}ya(p);V.bSort&&z(p,"aoDrawCallback",function(){if(p.bSorted){var a=Y(p),b={};h.each(a,function(a,c){b[c.src]=c.dir});t(p,null,"order",[p,a,b]);Kb(p)}});z(p,"aoDrawCallback",function(){(p.bSorted||y(p)==="ssp"||V.bDeferRender)&&ya(p)},"sc");var a=q.children("caption").each(function(){this._captionSide=
h(this).css("caption-side")}),b=q.children("thead");b.length===0&&(b=h("<thead/>").appendTo(q));p.nTHead=b[0];b=q.children("tbody");b.length===0&&(b=h("<tbody/>").appendTo(q));p.nTBody=b[0];b=q.children("tfoot");if(b.length===0&&a.length>0&&(p.oScroll.sX!==""||p.oScroll.sY!==""))b=h("<tfoot/>").appendTo(q);if(b.length===0||b.children().length===0)q.addClass(s.sNoFooter);else if(b.length>0){p.nTFoot=b[0];fa(p.aoFooter,p.nTFoot)}if(g.aaData)for(j=0;j<g.aaData.length;j++)O(p,g.aaData[j]);else(p.bDeferLoading||
y(p)=="dom")&&oa(p,h(p.nTBody).children("tr"));p.aiDisplay=p.aiDisplayMaster.slice();p.bInitialised=true;l===false&&ia(p)};g.bStateSave?(V.bStateSave=!0,z(p,"aoDrawCallback",za,"state_save"),Lb(p,g,e)):e()}});b=null;return this},v,r,o,s,$a={},Ob=/[\r\n\u2028]/g,Ca=/<.*?>/g,$b=/^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,ac=RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)","g"),Za=/[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi,M=function(a){return!a||
!0===a||"-"===a?!0:!1},Pb=function(a){var b=parseInt(a,10);return!isNaN(b)&&isFinite(a)?b:null},Qb=function(a,b){$a[b]||($a[b]=RegExp(Sa(b),"g"));return"string"===typeof a&&"."!==b?a.replace(/\./g,"").replace($a[b],"."):a},ab=function(a,b,c){var d="string"===typeof a;if(M(a))return!0;b&&d&&(a=Qb(a,b));c&&d&&(a=a.replace(Za,""));return!isNaN(parseFloat(a))&&isFinite(a)},Rb=function(a,b,c){return M(a)?!0:!(M(a)||"string"===typeof a)?null:ab(a.replace(Ca,""),b,c)?!0:null},C=function(a,b,c){var d=[],
e=0,f=a.length;if(c!==k)for(;e<f;e++)a[e]&&a[e][b]&&d.push(a[e][b][c]);else for(;e<f;e++)a[e]&&d.push(a[e][b]);return d},ka=function(a,b,c,d){var e=[],f=0,g=b.length;if(d!==k)for(;f<g;f++)a[b[f]][c]&&e.push(a[b[f]][c][d]);else for(;f<g;f++)e.push(a[b[f]][c]);return e},Z=function(a,b){var c=[],d;b===k?(b=0,d=a):(d=b,b=a);for(var e=b;e<d;e++)c.push(e);return c},Sb=function(a){for(var b=[],c=0,d=a.length;c<d;c++)a[c]&&b.push(a[c]);return b},ra=function(a){var b;a:{if(!(2>a.length)){b=a.slice().sort();
for(var c=b[0],d=1,e=b.length;d<e;d++){if(b[d]===c){b=!1;break a}c=b[d]}}b=!0}if(b)return a.slice();b=[];var e=a.length,f,g=0,d=0;a:for(;d<e;d++){c=a[d];for(f=0;f<g;f++)if(b[f]===c)continue a;b.push(c);g++}return b};n.util={throttle:function(a,b){var c=b!==k?b:200,d,e;return function(){var b=this,g=+new Date,j=arguments;d&&g<d+c?(clearTimeout(e),e=setTimeout(function(){d=k;a.apply(b,j)},c)):(d=g,a.apply(b,j))}},escapeRegex:function(a){return a.replace(ac,"\\$1")}};var A=function(a,b,c){a[b]!==k&&
(a[c]=a[b])},da=/\[.*?\]$/,X=/\(\)$/,Sa=n.util.escapeRegex,wa=h("<div>")[0],Xb=wa.textContent!==k,Zb=/<.*?>/g,Qa=n.util.throttle,Tb=[],x=Array.prototype,bc=function(a){var b,c,d=n.settings,e=h.map(d,function(a){return a.nTable});if(a){if(a.nTable&&a.oApi)return[a];if(a.nodeName&&"table"===a.nodeName.toLowerCase())return b=h.inArray(a,e),-1!==b?[d[b]]:null;if(a&&"function"===typeof a.settings)return a.settings().toArray();"string"===typeof a?c=h(a):a instanceof h&&(c=a)}else return[];if(c)return c.map(function(){b=
h.inArray(this,e);return-1!==b?d[b]:null}).toArray()};r=function(a,b){if(!(this instanceof r))return new r(a,b);var c=[],d=function(a){(a=bc(a))&&c.push.apply(c,a)};if(h.isArray(a))for(var e=0,f=a.length;e<f;e++)d(a[e]);else d(a);this.context=ra(c);b&&h.merge(this,b);this.selector={rows:null,cols:null,opts:null};r.extend(this,this,Tb)};n.Api=r;h.extend(r.prototype,{any:function(){return 0!==this.count()},concat:x.concat,context:[],count:function(){return this.flatten().length},each:function(a){for(var b=
0,c=this.length;b<c;b++)a.call(this,this[b],b,this);return this},eq:function(a){var b=this.context;return b.length>a?new r(b[a],this[a]):null},filter:function(a){var b=[];if(x.filter)b=x.filter.call(this,a,this);else for(var c=0,d=this.length;c<d;c++)a.call(this,this[c],c,this)&&b.push(this[c]);return new r(this.context,b)},flatten:function(){var a=[];return new r(this.context,a.concat.apply(a,this.toArray()))},join:x.join,indexOf:x.indexOf||function(a,b){for(var c=b||0,d=this.length;c<d;c++)if(this[c]===
a)return c;return-1},iterator:function(a,b,c,d){var e=[],f,g,j,h,l,m=this.context,n,o,s=this.selector;"string"===typeof a&&(d=c,c=b,b=a,a=!1);g=0;for(j=m.length;g<j;g++){var t=new r(m[g]);if("table"===b)f=c.call(t,m[g],g),f!==k&&e.push(f);else if("columns"===b||"rows"===b)f=c.call(t,m[g],this[g],g),f!==k&&e.push(f);else if("column"===b||"column-rows"===b||"row"===b||"cell"===b){o=this[g];"column-rows"===b&&(n=Da(m[g],s.opts));h=0;for(l=o.length;h<l;h++)f=o[h],f="cell"===b?c.call(t,m[g],f.row,f.column,
g,h):c.call(t,m[g],f,g,h,n),f!==k&&e.push(f)}}return e.length||d?(a=new r(m,a?e.concat.apply([],e):e),b=a.selector,b.rows=s.rows,b.cols=s.cols,b.opts=s.opts,a):this},lastIndexOf:x.lastIndexOf||function(a,b){return this.indexOf.apply(this.toArray.reverse(),arguments)},length:0,map:function(a){var b=[];if(x.map)b=x.map.call(this,a,this);else for(var c=0,d=this.length;c<d;c++)b.push(a.call(this,this[c],c));return new r(this.context,b)},pluck:function(a){return this.map(function(b){return b[a]})},pop:x.pop,
push:x.push,reduce:x.reduce||function(a,b){return jb(this,a,b,0,this.length,1)},reduceRight:x.reduceRight||function(a,b){return jb(this,a,b,this.length-1,-1,-1)},reverse:x.reverse,selector:null,shift:x.shift,slice:function(){return new r(this.context,this)},sort:x.sort,splice:x.splice,toArray:function(){return x.slice.call(this)},to$:function(){return h(this)},toJQuery:function(){return h(this)},unique:function(){return new r(this.context,ra(this))},unshift:x.unshift});r.extend=function(a,b,c){if(c.length&&
b&&(b instanceof r||b.__dt_wrapper)){var d,e,f,g=function(a,b,c){return function(){var d=b.apply(a,arguments);r.extend(d,d,c.methodExt);return d}};d=0;for(e=c.length;d<e;d++)f=c[d],b[f.name]="function"===f.type?g(a,f.val,f):"object"===f.type?{}:f.val,b[f.name].__dt_wrapper=!0,r.extend(a,b[f.name],f.propExt)}};r.register=o=function(a,b){if(h.isArray(a))for(var c=0,d=a.length;c<d;c++)r.register(a[c],b);else for(var e=a.split("."),f=Tb,g,j,c=0,d=e.length;c<d;c++){g=(j=-1!==e[c].indexOf("()"))?e[c].replace("()",
""):e[c];var i;a:{i=0;for(var l=f.length;i<l;i++)if(f[i].name===g){i=f[i];break a}i=null}i||(i={name:g,val:{},methodExt:[],propExt:[],type:"object"},f.push(i));c===d-1?(i.val=b,i.type="function"===typeof b?"function":h.isPlainObject(b)?"object":"other"):f=j?i.methodExt:i.propExt}};r.registerPlural=s=function(a,b,c){r.register(a,c);r.register(b,function(){var a=c.apply(this,arguments);return a===this?this:a instanceof r?a.length?h.isArray(a[0])?new r(a.context,a[0]):a[0]:k:a})};o("tables()",function(a){var b;
if(a){b=r;var c=this.context;if("number"===typeof a)a=[c[a]];else var d=h.map(c,function(a){return a.nTable}),a=h(d).filter(a).map(function(){var a=h.inArray(this,d);return c[a]}).toArray();b=new b(a)}else b=this;return b});o("table()",function(a){var a=this.tables(a),b=a.context;return b.length?new r(b[0]):a});s("tables().nodes()","table().node()",function(){return this.iterator("table",function(a){return a.nTable},1)});s("tables().body()","table().body()",function(){return this.iterator("table",
function(a){return a.nTBody},1)});s("tables().header()","table().header()",function(){return this.iterator("table",function(a){return a.nTHead},1)});s("tables().footer()","table().footer()",function(){return this.iterator("table",function(a){return a.nTFoot},1)});s("tables().containers()","table().container()",function(){return this.iterator("table",function(a){return a.nTableWrapper},1)});o("draw()",function(a){return this.iterator("table",function(b){"page"===a?P(b):("string"===typeof a&&(a="full-hold"===
a?!1:!0),T(b,!1===a))})});o("page()",function(a){return a===k?this.page.info().page:this.iterator("table",function(b){Va(b,a)})});o("page.info()",function(){if(0===this.context.length)return k;var a=this.context[0],b=a._iDisplayStart,c=a.oFeatures.bPaginate?a._iDisplayLength:-1,d=a.fnRecordsDisplay(),e=-1===c;return{page:e?0:Math.floor(b/c),pages:e?1:Math.ceil(d/c),start:b,end:a.fnDisplayEnd(),length:c,recordsTotal:a.fnRecordsTotal(),recordsDisplay:d,serverSide:"ssp"===y(a)}});o("page.len()",function(a){return a===
k?0!==this.context.length?this.context[0]._iDisplayLength:k:this.iterator("table",function(b){Ta(b,a)})});var Ub=function(a,b,c){if(c){var d=new r(a);d.one("draw",function(){c(d.ajax.json())})}if("ssp"==y(a))T(a,b);else{D(a,!0);var e=a.jqXHR;e&&4!==e.readyState&&e.abort();ta(a,[],function(c){pa(a);for(var c=ua(a,c),d=0,e=c.length;d<e;d++)O(a,c[d]);T(a,b);D(a,!1)})}};o("ajax.json()",function(){var a=this.context;if(0<a.length)return a[0].json});o("ajax.params()",function(){var a=this.context;if(0<
a.length)return a[0].oAjaxData});o("ajax.reload()",function(a,b){return this.iterator("table",function(c){Ub(c,!1===b,a)})});o("ajax.url()",function(a){var b=this.context;if(a===k){if(0===b.length)return k;b=b[0];return b.ajax?h.isPlainObject(b.ajax)?b.ajax.url:b.ajax:b.sAjaxSource}return this.iterator("table",function(b){h.isPlainObject(b.ajax)?b.ajax.url=a:b.ajax=a})});o("ajax.url().load()",function(a,b){return this.iterator("table",function(c){Ub(c,!1===b,a)})});var bb=function(a,b,c,d,e){var f=
[],g,j,i,l,m,n;i=typeof b;if(!b||"string"===i||"function"===i||b.length===k)b=[b];i=0;for(l=b.length;i<l;i++){j=b[i]&&b[i].split&&!b[i].match(/[\[\(:]/)?b[i].split(","):[b[i]];m=0;for(n=j.length;m<n;m++)(g=c("string"===typeof j[m]?h.trim(j[m]):j[m]))&&g.length&&(f=f.concat(g))}a=v.selector[a];if(a.length){i=0;for(l=a.length;i<l;i++)f=a[i](d,e,f)}return ra(f)},cb=function(a){a||(a={});a.filter&&a.search===k&&(a.search=a.filter);return h.extend({search:"none",order:"current",page:"all"},a)},db=function(a){for(var b=
0,c=a.length;b<c;b++)if(0<a[b].length)return a[0]=a[b],a[0].length=1,a.length=1,a.context=[a.context[b]],a;a.length=0;return a},Da=function(a,b){var c,d,e,f=[],g=a.aiDisplay;e=a.aiDisplayMaster;var j=b.search;c=b.order;d=b.page;if("ssp"==y(a))return"removed"===j?[]:Z(0,e.length);if("current"==d){c=a._iDisplayStart;for(d=a.fnDisplayEnd();c<d;c++)f.push(g[c])}else if("current"==c||"applied"==c)if("none"==j)f=e.slice();else if("applied"==j)f=g.slice();else{if("removed"==j){var i={};c=0;for(d=g.length;c<
d;c++)i[g[c]]=null;f=h.map(e,function(a){return!i.hasOwnProperty(a)?a:null})}}else if("index"==c||"original"==c){c=0;for(d=a.aoData.length;c<d;c++)"none"==j?f.push(c):(e=h.inArray(c,g),(-1===e&&"removed"==j||0<=e&&"applied"==j)&&f.push(c))}return f};o("rows()",function(a,b){a===k?a="":h.isPlainObject(a)&&(b=a,a="");var b=cb(b),c=this.iterator("table",function(c){var e=b,f;return bb("row",a,function(a){var b=Pb(a),i=c.aoData;if(b!==null&&!e)return[b];f||(f=Da(c,e));if(b!==null&&h.inArray(b,f)!==-1)return[b];
if(a===null||a===k||a==="")return f;if(typeof a==="function")return h.map(f,function(b){var c=i[b];return a(b,c._aData,c.nTr)?b:null});if(a.nodeName){var b=a._DT_RowIndex,l=a._DT_CellIndex;if(b!==k)return i[b]&&i[b].nTr===a?[b]:[];if(l)return i[l.row]&&i[l.row].nTr===a.parentNode?[l.row]:[];b=h(a).closest("*[data-dt-row]");return b.length?[b.data("dt-row")]:[]}if(typeof a==="string"&&a.charAt(0)==="#"){b=c.aIds[a.replace(/^#/,"")];if(b!==k)return[b.idx]}b=Sb(ka(c.aoData,f,"nTr"));return h(b).filter(a).map(function(){return this._DT_RowIndex}).toArray()},
c,e)},1);c.selector.rows=a;c.selector.opts=b;return c});o("rows().nodes()",function(){return this.iterator("row",function(a,b){return a.aoData[b].nTr||k},1)});o("rows().data()",function(){return this.iterator(!0,"rows",function(a,b){return ka(a.aoData,b,"_aData")},1)});s("rows().cache()","row().cache()",function(a){return this.iterator("row",function(b,c){var d=b.aoData[c];return"search"===a?d._aFilterData:d._aSortData},1)});s("rows().invalidate()","row().invalidate()",function(a){return this.iterator("row",
function(b,c){ea(b,c,a)})});s("rows().indexes()","row().index()",function(){return this.iterator("row",function(a,b){return b},1)});s("rows().ids()","row().id()",function(a){for(var b=[],c=this.context,d=0,e=c.length;d<e;d++)for(var f=0,g=this[d].length;f<g;f++){var h=c[d].rowIdFn(c[d].aoData[this[d][f]]._aData);b.push((!0===a?"#":"")+h)}return new r(c,b)});s("rows().remove()","row().remove()",function(){var a=this;this.iterator("row",function(b,c,d){var e=b.aoData,f=e[c],g,h,i,l,m;e.splice(c,1);
g=0;for(h=e.length;g<h;g++)if(i=e[g],m=i.anCells,null!==i.nTr&&(i.nTr._DT_RowIndex=g),null!==m){i=0;for(l=m.length;i<l;i++)m[i]._DT_CellIndex.row=g}qa(b.aiDisplayMaster,c);qa(b.aiDisplay,c);qa(a[d],c,!1);0<b._iRecordsDisplay&&b._iRecordsDisplay--;Ua(b);c=b.rowIdFn(f._aData);c!==k&&delete b.aIds[c]});this.iterator("table",function(a){for(var c=0,d=a.aoData.length;c<d;c++)a.aoData[c].idx=c});return this});o("rows.add()",function(a){var b=this.iterator("table",function(b){var c,f,g,h=[];f=0;for(g=a.length;f<
g;f++)c=a[f],c.nodeName&&"TR"===c.nodeName.toUpperCase()?h.push(oa(b,c)[0]):h.push(O(b,c));return h},1),c=this.rows(-1);c.pop();h.merge(c,b);return c});o("row()",function(a,b){return db(this.rows(a,b))});o("row().data()",function(a){var b=this.context;if(a===k)return b.length&&this.length?b[0].aoData[this[0]]._aData:k;var c=b[0].aoData[this[0]];c._aData=a;h.isArray(a)&&c.nTr.id&&N(b[0].rowId)(a,c.nTr.id);ea(b[0],this[0],"data");return this});o("row().node()",function(){var a=this.context;return a.length&&
this.length?a[0].aoData[this[0]].nTr||null:null});o("row.add()",function(a){a instanceof h&&a.length&&(a=a[0]);var b=this.iterator("table",function(b){return a.nodeName&&"TR"===a.nodeName.toUpperCase()?oa(b,a)[0]:O(b,a)});return this.row(b[0])});var eb=function(a,b){var c=a.context;if(c.length&&(c=c[0].aoData[b!==k?b:a[0]])&&c._details)c._details.remove(),c._detailsShow=k,c._details=k},Vb=function(a,b){var c=a.context;if(c.length&&a.length){var d=c[0].aoData[a[0]];if(d._details){(d._detailsShow=b)?
d._details.insertAfter(d.nTr):d._details.detach();var e=c[0],f=new r(e),g=e.aoData;f.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");0<C(g,"_details").length&&(f.on("draw.dt.DT_details",function(a,b){e===b&&f.rows({page:"current"}).eq(0).each(function(a){a=g[a];a._detailsShow&&a._details.insertAfter(a.nTr)})}),f.on("column-visibility.dt.DT_details",function(a,b){if(e===b)for(var c,d=W(b),f=0,h=g.length;f<h;f++)c=g[f],c._details&&c._details.children("td[colspan]").attr("colspan",
d)}),f.on("destroy.dt.DT_details",function(a,b){if(e===b)for(var c=0,d=g.length;c<d;c++)g[c]._details&&eb(f,c)}))}}};o("row().child()",function(a,b){var c=this.context;if(a===k)return c.length&&this.length?c[0].aoData[this[0]]._details:k;if(!0===a)this.child.show();else if(!1===a)eb(this);else if(c.length&&this.length){var d=c[0],c=c[0].aoData[this[0]],e=[],f=function(a,b){if(h.isArray(a)||a instanceof h)for(var c=0,k=a.length;c<k;c++)f(a[c],b);else a.nodeName&&"tr"===a.nodeName.toLowerCase()?e.push(a):
(c=h("<tr><td/></tr>").addClass(b),h("td",c).addClass(b).html(a)[0].colSpan=W(d),e.push(c[0]))};f(a,b);c._details&&c._details.detach();c._details=h(e);c._detailsShow&&c._details.insertAfter(c.nTr)}return this});o(["row().child.show()","row().child().show()"],function(){Vb(this,!0);return this});o(["row().child.hide()","row().child().hide()"],function(){Vb(this,!1);return this});o(["row().child.remove()","row().child().remove()"],function(){eb(this);return this});o("row().child.isShown()",function(){var a=
this.context;return a.length&&this.length?a[0].aoData[this[0]]._detailsShow||!1:!1});var cc=/^([^:]+):(name|visIdx|visible)$/,Wb=function(a,b,c,d,e){for(var c=[],d=0,f=e.length;d<f;d++)c.push(B(a,e[d],b));return c};o("columns()",function(a,b){a===k?a="":h.isPlainObject(a)&&(b=a,a="");var b=cb(b),c=this.iterator("table",function(c){var e=a,f=b,g=c.aoColumns,j=C(g,"sName"),i=C(g,"nTh");return bb("column",e,function(a){var b=Pb(a);if(a==="")return Z(g.length);if(b!==null)return[b>=0?b:g.length+b];if(typeof a===
"function"){var e=Da(c,f);return h.map(g,function(b,f){return a(f,Wb(c,f,0,0,e),i[f])?f:null})}var k=typeof a==="string"?a.match(cc):"";if(k)switch(k[2]){case "visIdx":case "visible":b=parseInt(k[1],10);if(b<0){var n=h.map(g,function(a,b){return a.bVisible?b:null});return[n[n.length+b]]}return[ba(c,b)];case "name":return h.map(j,function(a,b){return a===k[1]?b:null});default:return[]}if(a.nodeName&&a._DT_CellIndex)return[a._DT_CellIndex.column];b=h(i).filter(a).map(function(){return h.inArray(this,
i)}).toArray();if(b.length||!a.nodeName)return b;b=h(a).closest("*[data-dt-column]");return b.length?[b.data("dt-column")]:[]},c,f)},1);c.selector.cols=a;c.selector.opts=b;return c});s("columns().header()","column().header()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].nTh},1)});s("columns().footer()","column().footer()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].nTf},1)});s("columns().data()","column().data()",function(){return this.iterator("column-rows",
Wb,1)});s("columns().dataSrc()","column().dataSrc()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].mData},1)});s("columns().cache()","column().cache()",function(a){return this.iterator("column-rows",function(b,c,d,e,f){return ka(b.aoData,f,"search"===a?"_aFilterData":"_aSortData",c)},1)});s("columns().nodes()","column().nodes()",function(){return this.iterator("column-rows",function(a,b,c,d,e){return ka(a.aoData,e,"anCells",b)},1)});s("columns().visible()","column().visible()",
function(a,b){var c=this,d=this.iterator("column",function(b,c){if(a===k)return b.aoColumns[c].bVisible;var d=b.aoColumns,j=d[c],i=b.aoData,l,m,n;if(a!==k&&j.bVisible!==a){if(a){var o=h.inArray(!0,C(d,"bVisible"),c+1);l=0;for(m=i.length;l<m;l++)n=i[l].nTr,d=i[l].anCells,n&&n.insertBefore(d[c],d[o]||null)}else h(C(b.aoData,"anCells",c)).detach();j.bVisible=a}});a!==k&&this.iterator("table",function(d){ga(d,d.aoHeader);ga(d,d.aoFooter);d.aiDisplay.length||h(d.nTBody).find("td[colspan]").attr("colspan",
W(d));za(d);c.iterator("column",function(c,d){t(c,null,"column-visibility",[c,d,a,b])});(b===k||b)&&c.columns.adjust()});return d});s("columns().indexes()","column().index()",function(a){return this.iterator("column",function(b,c){return"visible"===a?ca(b,c):c},1)});o("columns.adjust()",function(){return this.iterator("table",function(a){aa(a)},1)});o("column.index()",function(a,b){if(0!==this.context.length){var c=this.context[0];if("fromVisible"===a||"toData"===a)return ba(c,b);if("fromData"===
a||"toVisible"===a)return ca(c,b)}});o("column()",function(a,b){return db(this.columns(a,b))});o("cells()",function(a,b,c){h.isPlainObject(a)&&(a.row===k?(c=a,a=null):(c=b,b=null));h.isPlainObject(b)&&(c=b,b=null);if(null===b||b===k)return this.iterator("table",function(b){var d=a,e=cb(c),f=b.aoData,g=Da(b,e),j=Sb(ka(f,g,"anCells")),i=h([].concat.apply([],j)),l,n=b.aoColumns.length,o,s,r,t,w,v;return bb("cell",d,function(a){var c=typeof a==="function";if(a===null||a===k||c){o=[];s=0;for(r=g.length;s<
r;s++){l=g[s];for(t=0;t<n;t++){w={row:l,column:t};if(c){v=f[l];a(w,B(b,l,t),v.anCells?v.anCells[t]:null)&&o.push(w)}else o.push(w)}}return o}if(h.isPlainObject(a))return a.column!==k&&a.row!==k&&h.inArray(a.row,g)!==-1?[a]:[];c=i.filter(a).map(function(a,b){return{row:b._DT_CellIndex.row,column:b._DT_CellIndex.column}}).toArray();if(c.length||!a.nodeName)return c;v=h(a).closest("*[data-dt-row]");return v.length?[{row:v.data("dt-row"),column:v.data("dt-column")}]:[]},b,e)});var d=c?{page:c.page,order:c.order,
search:c.search}:{},e=this.columns(b,d),f=this.rows(a,d),g,j,i,l,d=this.iterator("table",function(a,b){var c=[];g=0;for(j=f[b].length;g<j;g++){i=0;for(l=e[b].length;i<l;i++)c.push({row:f[b][g],column:e[b][i]})}return c},1),d=c&&c.selected?this.cells(d,c):d;h.extend(d.selector,{cols:b,rows:a,opts:c});return d});s("cells().nodes()","cell().node()",function(){return this.iterator("cell",function(a,b,c){return(a=a.aoData[b])&&a.anCells?a.anCells[c]:k},1)});o("cells().data()",function(){return this.iterator("cell",
function(a,b,c){return B(a,b,c)},1)});s("cells().cache()","cell().cache()",function(a){a="search"===a?"_aFilterData":"_aSortData";return this.iterator("cell",function(b,c,d){return b.aoData[c][a][d]},1)});s("cells().render()","cell().render()",function(a){return this.iterator("cell",function(b,c,d){return B(b,c,d,a)},1)});s("cells().indexes()","cell().index()",function(){return this.iterator("cell",function(a,b,c){return{row:b,column:c,columnVisible:ca(a,c)}},1)});s("cells().invalidate()","cell().invalidate()",
function(a){return this.iterator("cell",function(b,c,d){ea(b,c,a,d)})});o("cell()",function(a,b,c){return db(this.cells(a,b,c))});o("cell().data()",function(a){var b=this.context,c=this[0];if(a===k)return b.length&&c.length?B(b[0],c[0].row,c[0].column):k;lb(b[0],c[0].row,c[0].column,a);ea(b[0],c[0].row,"data",c[0].column);return this});o("order()",function(a,b){var c=this.context;if(a===k)return 0!==c.length?c[0].aaSorting:k;"number"===typeof a?a=[[a,b]]:a.length&&!h.isArray(a[0])&&(a=Array.prototype.slice.call(arguments));
return this.iterator("table",function(b){b.aaSorting=a.slice()})});o("order.listener()",function(a,b,c){return this.iterator("table",function(d){Oa(d,a,b,c)})});o("order.fixed()",function(a){if(!a){var b=this.context,b=b.length?b[0].aaSortingFixed:k;return h.isArray(b)?{pre:b}:b}return this.iterator("table",function(b){b.aaSortingFixed=h.extend(!0,{},a)})});o(["columns().order()","column().order()"],function(a){var b=this;return this.iterator("table",function(c,d){var e=[];h.each(b[d],function(b,
c){e.push([c,a])});c.aaSorting=e})});o("search()",function(a,b,c,d){var e=this.context;return a===k?0!==e.length?e[0].oPreviousSearch.sSearch:k:this.iterator("table",function(e){e.oFeatures.bFilter&&ha(e,h.extend({},e.oPreviousSearch,{sSearch:a+"",bRegex:null===b?!1:b,bSmart:null===c?!0:c,bCaseInsensitive:null===d?!0:d}),1)})});s("columns().search()","column().search()",function(a,b,c,d){return this.iterator("column",function(e,f){var g=e.aoPreSearchCols;if(a===k)return g[f].sSearch;e.oFeatures.bFilter&&
(h.extend(g[f],{sSearch:a+"",bRegex:null===b?!1:b,bSmart:null===c?!0:c,bCaseInsensitive:null===d?!0:d}),ha(e,e.oPreviousSearch,1))})});o("state()",function(){return this.context.length?this.context[0].oSavedState:null});o("state.clear()",function(){return this.iterator("table",function(a){a.fnStateSaveCallback.call(a.oInstance,a,{})})});o("state.loaded()",function(){return this.context.length?this.context[0].oLoadedState:null});o("state.save()",function(){return this.iterator("table",function(a){za(a)})});
n.versionCheck=n.fnVersionCheck=function(a){for(var b=n.version.split("."),a=a.split("."),c,d,e=0,f=a.length;e<f;e++)if(c=parseInt(b[e],10)||0,d=parseInt(a[e],10)||0,c!==d)return c>d;return!0};n.isDataTable=n.fnIsDataTable=function(a){var b=h(a).get(0),c=!1;if(a instanceof n.Api)return!0;h.each(n.settings,function(a,e){var f=e.nScrollHead?h("table",e.nScrollHead)[0]:null,g=e.nScrollFoot?h("table",e.nScrollFoot)[0]:null;if(e.nTable===b||f===b||g===b)c=!0});return c};n.tables=n.fnTables=function(a){var b=
!1;h.isPlainObject(a)&&(b=a.api,a=a.visible);var c=h.map(n.settings,function(b){if(!a||a&&h(b.nTable).is(":visible"))return b.nTable});return b?new r(c):c};n.camelToHungarian=J;o("$()",function(a,b){var c=this.rows(b).nodes(),c=h(c);return h([].concat(c.filter(a).toArray(),c.find(a).toArray()))});h.each(["on","one","off"],function(a,b){o(b+"()",function(){var a=Array.prototype.slice.call(arguments);a[0]=h.map(a[0].split(/\s/),function(a){return!a.match(/\.dt\b/)?a+".dt":a}).join(" ");var d=h(this.tables().nodes());
d[b].apply(d,a);return this})});o("clear()",function(){return this.iterator("table",function(a){pa(a)})});o("settings()",function(){return new r(this.context,this.context)});o("init()",function(){var a=this.context;return a.length?a[0].oInit:null});o("data()",function(){return this.iterator("table",function(a){return C(a.aoData,"_aData")}).flatten()});o("destroy()",function(a){a=a||!1;return this.iterator("table",function(b){var c=b.nTableWrapper.parentNode,d=b.oClasses,e=b.nTable,f=b.nTBody,g=b.nTHead,
j=b.nTFoot,i=h(e),f=h(f),k=h(b.nTableWrapper),m=h.map(b.aoData,function(a){return a.nTr}),o;b.bDestroying=!0;t(b,"aoDestroyCallback","destroy",[b]);a||(new r(b)).columns().visible(!0);k.off(".DT").find(":not(tbody *)").off(".DT");h(E).off(".DT-"+b.sInstance);e!=g.parentNode&&(i.children("thead").detach(),i.append(g));j&&e!=j.parentNode&&(i.children("tfoot").detach(),i.append(j));b.aaSorting=[];b.aaSortingFixed=[];ya(b);h(m).removeClass(b.asStripeClasses.join(" "));h("th, td",g).removeClass(d.sSortable+
" "+d.sSortableAsc+" "+d.sSortableDesc+" "+d.sSortableNone);f.children().detach();f.append(m);g=a?"remove":"detach";i[g]();k[g]();!a&&c&&(c.insertBefore(e,b.nTableReinsertBefore),i.css("width",b.sDestroyWidth).removeClass(d.sTable),(o=b.asDestroyStripes.length)&&f.children().each(function(a){h(this).addClass(b.asDestroyStripes[a%o])}));c=h.inArray(b,n.settings);-1!==c&&n.settings.splice(c,1)})});h.each(["column","row","cell"],function(a,b){o(b+"s().every()",function(a){var d=this.selector.opts,e=
this;return this.iterator(b,function(f,g,h,i,l){a.call(e[b](g,"cell"===b?h:d,"cell"===b?d:k),g,h,i,l)})})});o("i18n()",function(a,b,c){var d=this.context[0],a=S(a)(d.oLanguage);a===k&&(a=b);c!==k&&h.isPlainObject(a)&&(a=a[c]!==k?a[c]:a._);return a.replace("%d",c)});n.version="1.10.20";n.settings=[];n.models={};n.models.oSearch={bCaseInsensitive:!0,sSearch:"",bRegex:!1,bSmart:!0};n.models.oRow={nTr:null,anCells:null,_aData:[],_aSortData:null,_aFilterData:null,_sFilterRow:null,_sRowStripe:"",src:null,
idx:-1};n.models.oColumn={idx:null,aDataSort:null,asSorting:null,bSearchable:null,bSortable:null,bVisible:null,_sManualType:null,_bAttrSrc:!1,fnCreatedCell:null,fnGetData:null,fnSetData:null,mData:null,mRender:null,nTh:null,nTf:null,sClass:null,sContentPadding:null,sDefaultContent:null,sName:null,sSortDataType:"std",sSortingClass:null,sSortingClassJUI:null,sTitle:null,sType:null,sWidth:null,sWidthOrig:null};n.defaults={aaData:null,aaSorting:[[0,"asc"]],aaSortingFixed:[],ajax:null,aLengthMenu:[10,
25,50,100],aoColumns:null,aoColumnDefs:null,aoSearchCols:[],asStripeClasses:null,bAutoWidth:!0,bDeferRender:!1,bDestroy:!1,bFilter:!0,bInfo:!0,bLengthChange:!0,bPaginate:!0,bProcessing:!1,bRetrieve:!1,bScrollCollapse:!1,bServerSide:!1,bSort:!0,bSortMulti:!0,bSortCellsTop:!1,bSortClasses:!0,bStateSave:!1,fnCreatedRow:null,fnDrawCallback:null,fnFooterCallback:null,fnFormatNumber:function(a){return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,this.oLanguage.sThousands)},fnHeaderCallback:null,fnInfoCallback:null,
fnInitComplete:null,fnPreDrawCallback:null,fnRowCallback:null,fnServerData:null,fnServerParams:null,fnStateLoadCallback:function(a){try{return JSON.parse((-1===a.iStateDuration?sessionStorage:localStorage).getItem("DataTables_"+a.sInstance+"_"+location.pathname))}catch(b){}},fnStateLoadParams:null,fnStateLoaded:null,fnStateSaveCallback:function(a,b){try{(-1===a.iStateDuration?sessionStorage:localStorage).setItem("DataTables_"+a.sInstance+"_"+location.pathname,JSON.stringify(b))}catch(c){}},fnStateSaveParams:null,
iStateDuration:7200,iDeferLoading:null,iDisplayLength:10,iDisplayStart:0,iTabIndex:0,oClasses:{},oLanguage:{oAria:{sSortAscending:": activate to sort column ascending",sSortDescending:": activate to sort column descending"},oPaginate:{sFirst:"First",sLast:"Last",sNext:"Next",sPrevious:"Previous"},sEmptyTable:"No data available in table",sInfo:"Showing _START_ to _END_ of _TOTAL_ entries",sInfoEmpty:"Showing 0 to 0 of 0 entries",sInfoFiltered:"(filtered from _MAX_ total entries)",sInfoPostFix:"",sDecimal:"",
sThousands:",",sLengthMenu:"Show _MENU_ entries",sLoadingRecords:"Loading...",sProcessing:"Processing...",sSearch:"Search:",sSearchPlaceholder:"",sUrl:"",sZeroRecords:"No matching records found"},oSearch:h.extend({},n.models.oSearch),sAjaxDataProp:"data",sAjaxSource:null,sDom:"lfrtip",searchDelay:null,sPaginationType:"simple_numbers",sScrollX:"",sScrollXInner:"",sScrollY:"",sServerMethod:"GET",renderer:null,rowId:"DT_RowId"};$(n.defaults);n.defaults.column={aDataSort:null,iDataSort:-1,asSorting:["asc",
"desc"],bSearchable:!0,bSortable:!0,bVisible:!0,fnCreatedCell:null,mData:null,mRender:null,sCellType:"td",sClass:"",sContentPadding:"",sDefaultContent:null,sName:"",sSortDataType:"std",sTitle:null,sType:null,sWidth:null};$(n.defaults.column);n.models.oSettings={oFeatures:{bAutoWidth:null,bDeferRender:null,bFilter:null,bInfo:null,bLengthChange:null,bPaginate:null,bProcessing:null,bServerSide:null,bSort:null,bSortMulti:null,bSortClasses:null,bStateSave:null},oScroll:{bCollapse:null,iBarWidth:0,sX:null,
sXInner:null,sY:null},oLanguage:{fnInfoCallback:null},oBrowser:{bScrollOversize:!1,bScrollbarLeft:!1,bBounding:!1,barWidth:0},ajax:null,aanFeatures:[],aoData:[],aiDisplay:[],aiDisplayMaster:[],aIds:{},aoColumns:[],aoHeader:[],aoFooter:[],oPreviousSearch:{},aoPreSearchCols:[],aaSorting:null,aaSortingFixed:[],asStripeClasses:null,asDestroyStripes:[],sDestroyWidth:0,aoRowCallback:[],aoHeaderCallback:[],aoFooterCallback:[],aoDrawCallback:[],aoRowCreatedCallback:[],aoPreDrawCallback:[],aoInitComplete:[],
aoStateSaveParams:[],aoStateLoadParams:[],aoStateLoaded:[],sTableId:"",nTable:null,nTHead:null,nTFoot:null,nTBody:null,nTableWrapper:null,bDeferLoading:!1,bInitialised:!1,aoOpenRows:[],sDom:null,searchDelay:null,sPaginationType:"two_button",iStateDuration:0,aoStateSave:[],aoStateLoad:[],oSavedState:null,oLoadedState:null,sAjaxSource:null,sAjaxDataProp:null,bAjaxDataGet:!0,jqXHR:null,json:k,oAjaxData:k,fnServerData:null,aoServerParams:[],sServerMethod:null,fnFormatNumber:null,aLengthMenu:null,iDraw:0,
bDrawing:!1,iDrawError:-1,_iDisplayLength:10,_iDisplayStart:0,_iRecordsTotal:0,_iRecordsDisplay:0,oClasses:{},bFiltered:!1,bSorted:!1,bSortCellsTop:null,oInit:null,aoDestroyCallback:[],fnRecordsTotal:function(){return"ssp"==y(this)?1*this._iRecordsTotal:this.aiDisplayMaster.length},fnRecordsDisplay:function(){return"ssp"==y(this)?1*this._iRecordsDisplay:this.aiDisplay.length},fnDisplayEnd:function(){var a=this._iDisplayLength,b=this._iDisplayStart,c=b+a,d=this.aiDisplay.length,e=this.oFeatures,f=
e.bPaginate;return e.bServerSide?!1===f||-1===a?b+d:Math.min(b+a,this._iRecordsDisplay):!f||c>d||-1===a?d:c},oInstance:null,sInstance:null,iTabIndex:0,nScrollHead:null,nScrollFoot:null,aLastSort:[],oPlugins:{},rowIdFn:null,rowId:null};n.ext=v={buttons:{},classes:{},builder:"-source-",errMode:"alert",feature:[],search:[],selector:{cell:[],column:[],row:[]},internal:{},legacy:{ajax:null},pager:{},renderer:{pageButton:{},header:{}},order:{},type:{detect:[],search:{},order:{}},_unique:0,fnVersionCheck:n.fnVersionCheck,
iApiIndex:0,oJUIClasses:{},sVersion:n.version};h.extend(v,{afnFiltering:v.search,aTypes:v.type.detect,ofnSearch:v.type.search,oSort:v.type.order,afnSortData:v.order,aoFeatures:v.feature,oApi:v.internal,oStdClasses:v.classes,oPagination:v.pager});h.extend(n.ext.classes,{sTable:"dataTable",sNoFooter:"no-footer",sPageButton:"paginate_button",sPageButtonActive:"current",sPageButtonDisabled:"disabled",sStripeOdd:"odd",sStripeEven:"even",sRowEmpty:"dataTables_empty",sWrapper:"dataTables_wrapper",sFilter:"dataTables_filter",
sInfo:"dataTables_info",sPaging:"dataTables_paginate paging_",sLength:"dataTables_length",sProcessing:"dataTables_processing",sSortAsc:"sorting_asc",sSortDesc:"sorting_desc",sSortable:"sorting",sSortableAsc:"sorting_asc_disabled",sSortableDesc:"sorting_desc_disabled",sSortableNone:"sorting_disabled",sSortColumn:"sorting_",sFilterInput:"",sLengthSelect:"",sScrollWrapper:"dataTables_scroll",sScrollHead:"dataTables_scrollHead",sScrollHeadInner:"dataTables_scrollHeadInner",sScrollBody:"dataTables_scrollBody",
sScrollFoot:"dataTables_scrollFoot",sScrollFootInner:"dataTables_scrollFootInner",sHeaderTH:"",sFooterTH:"",sSortJUIAsc:"",sSortJUIDesc:"",sSortJUI:"",sSortJUIAscAllowed:"",sSortJUIDescAllowed:"",sSortJUIWrapper:"",sSortIcon:"",sJUIHeader:"",sJUIFooter:""});var Mb=n.ext.pager;h.extend(Mb,{simple:function(){return["previous","next"]},full:function(){return["first","previous","next","last"]},numbers:function(a,b){return[ja(a,b)]},simple_numbers:function(a,b){return["previous",ja(a,b),"next"]},full_numbers:function(a,
b){return["first","previous",ja(a,b),"next","last"]},first_last_numbers:function(a,b){return["first",ja(a,b),"last"]},_numbers:ja,numbers_length:7});h.extend(!0,n.ext.renderer,{pageButton:{_:function(a,b,c,d,e,f){var g=a.oClasses,j=a.oLanguage.oPaginate,i=a.oLanguage.oAria.paginate||{},l,m,n=0,o=function(b,d){var k,s,r,t,v=g.sPageButtonDisabled,w=function(b){Va(a,b.data.action,true)};k=0;for(s=d.length;k<s;k++){t=d[k];if(h.isArray(t)){r=h("<"+(t.DT_el||"div")+"/>").appendTo(b);o(r,t)}else{l=null;
m=t;r=a.iTabIndex;switch(t){case "ellipsis":b.append('<span class="ellipsis">&#x2026;</span>');break;case "first":l=j.sFirst;if(e===0){r=-1;m=m+(" "+v)}break;case "previous":l=j.sPrevious;if(e===0){r=-1;m=m+(" "+v)}break;case "next":l=j.sNext;if(e===f-1){r=-1;m=m+(" "+v)}break;case "last":l=j.sLast;if(e===f-1){r=-1;m=m+(" "+v)}break;default:l=t+1;m=e===t?g.sPageButtonActive:""}if(l!==null){r=h("<a>",{"class":g.sPageButton+" "+m,"aria-controls":a.sTableId,"aria-label":i[t],"data-dt-idx":n,tabindex:r,
id:c===0&&typeof t==="string"?a.sTableId+"_"+t:null}).html(l).appendTo(b);Xa(r,{action:t},w);n++}}}},s;try{s=h(b).find(H.activeElement).data("dt-idx")}catch(r){}o(h(b).empty(),d);s!==k&&h(b).find("[data-dt-idx="+s+"]").focus()}}});h.extend(n.ext.type.detect,[function(a,b){var c=b.oLanguage.sDecimal;return ab(a,c)?"num"+c:null},function(a){if(a&&!(a instanceof Date)&&!$b.test(a))return null;var b=Date.parse(a);return null!==b&&!isNaN(b)||M(a)?"date":null},function(a,b){var c=b.oLanguage.sDecimal;return ab(a,
c,!0)?"num-fmt"+c:null},function(a,b){var c=b.oLanguage.sDecimal;return Rb(a,c)?"html-num"+c:null},function(a,b){var c=b.oLanguage.sDecimal;return Rb(a,c,!0)?"html-num-fmt"+c:null},function(a){return M(a)||"string"===typeof a&&-1!==a.indexOf("<")?"html":null}]);h.extend(n.ext.type.search,{html:function(a){return M(a)?a:"string"===typeof a?a.replace(Ob," ").replace(Ca,""):""},string:function(a){return M(a)?a:"string"===typeof a?a.replace(Ob," "):a}});var Ba=function(a,b,c,d){if(0!==a&&(!a||"-"===a))return-Infinity;
b&&(a=Qb(a,b));a.replace&&(c&&(a=a.replace(c,"")),d&&(a=a.replace(d,"")));return 1*a};h.extend(v.type.order,{"date-pre":function(a){a=Date.parse(a);return isNaN(a)?-Infinity:a},"html-pre":function(a){return M(a)?"":a.replace?a.replace(/<.*?>/g,"").toLowerCase():a+""},"string-pre":function(a){return M(a)?"":"string"===typeof a?a.toLowerCase():!a.toString?"":a.toString()},"string-asc":function(a,b){return a<b?-1:a>b?1:0},"string-desc":function(a,b){return a<b?1:a>b?-1:0}});Fa("");h.extend(!0,n.ext.renderer,
{header:{_:function(a,b,c,d){h(a.nTable).on("order.dt.DT",function(e,f,g,h){if(a===f){e=c.idx;b.removeClass(c.sSortingClass+" "+d.sSortAsc+" "+d.sSortDesc).addClass(h[e]=="asc"?d.sSortAsc:h[e]=="desc"?d.sSortDesc:c.sSortingClass)}})},jqueryui:function(a,b,c,d){h("<div/>").addClass(d.sSortJUIWrapper).append(b.contents()).append(h("<span/>").addClass(d.sSortIcon+" "+c.sSortingClassJUI)).appendTo(b);h(a.nTable).on("order.dt.DT",function(e,f,g,h){if(a===f){e=c.idx;b.removeClass(d.sSortAsc+" "+d.sSortDesc).addClass(h[e]==
"asc"?d.sSortAsc:h[e]=="desc"?d.sSortDesc:c.sSortingClass);b.find("span."+d.sSortIcon).removeClass(d.sSortJUIAsc+" "+d.sSortJUIDesc+" "+d.sSortJUI+" "+d.sSortJUIAscAllowed+" "+d.sSortJUIDescAllowed).addClass(h[e]=="asc"?d.sSortJUIAsc:h[e]=="desc"?d.sSortJUIDesc:c.sSortingClassJUI)}})}}});var fb=function(a){return"string"===typeof a?a.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):a};n.render={number:function(a,b,c,d,e){return{display:function(f){if("number"!==typeof f&&"string"!==
typeof f)return f;var g=0>f?"-":"",h=parseFloat(f);if(isNaN(h))return fb(f);h=h.toFixed(c);f=Math.abs(h);h=parseInt(f,10);f=c?b+(f-h).toFixed(c).substring(2):"";return g+(d||"")+h.toString().replace(/\B(?=(\d{3})+(?!\d))/g,a)+f+(e||"")}}},text:function(){return{display:fb,filter:fb}}};h.extend(n.ext.internal,{_fnExternApiFunc:Nb,_fnBuildAjax:ta,_fnAjaxUpdate:nb,_fnAjaxParameters:wb,_fnAjaxUpdateDraw:xb,_fnAjaxDataSrc:ua,_fnAddColumn:Ga,_fnColumnOptions:la,_fnAdjustColumnSizing:aa,_fnVisibleToColumnIndex:ba,
_fnColumnIndexToVisible:ca,_fnVisbleColumns:W,_fnGetColumns:na,_fnColumnTypes:Ia,_fnApplyColumnDefs:kb,_fnHungarianMap:$,_fnCamelToHungarian:J,_fnLanguageCompat:Ea,_fnBrowserDetect:ib,_fnAddData:O,_fnAddTr:oa,_fnNodeToDataIndex:function(a,b){return b._DT_RowIndex!==k?b._DT_RowIndex:null},_fnNodeToColumnIndex:function(a,b,c){return h.inArray(c,a.aoData[b].anCells)},_fnGetCellData:B,_fnSetCellData:lb,_fnSplitObjNotation:La,_fnGetObjectDataFn:S,_fnSetObjectDataFn:N,_fnGetDataMaster:Ma,_fnClearTable:pa,
_fnDeleteIndex:qa,_fnInvalidate:ea,_fnGetRowElements:Ka,_fnCreateTr:Ja,_fnBuildHead:mb,_fnDrawHead:ga,_fnDraw:P,_fnReDraw:T,_fnAddOptionsHtml:pb,_fnDetectHeader:fa,_fnGetUniqueThs:sa,_fnFeatureHtmlFilter:rb,_fnFilterComplete:ha,_fnFilterCustom:Ab,_fnFilterColumn:zb,_fnFilter:yb,_fnFilterCreateSearch:Ra,_fnEscapeRegex:Sa,_fnFilterData:Bb,_fnFeatureHtmlInfo:ub,_fnUpdateInfo:Eb,_fnInfoMacros:Fb,_fnInitialise:ia,_fnInitComplete:va,_fnLengthChange:Ta,_fnFeatureHtmlLength:qb,_fnFeatureHtmlPaginate:vb,_fnPageChange:Va,
_fnFeatureHtmlProcessing:sb,_fnProcessingDisplay:D,_fnFeatureHtmlTable:tb,_fnScrollDraw:ma,_fnApplyToChildren:I,_fnCalculateColumnWidths:Ha,_fnThrottle:Qa,_fnConvertToWidth:Gb,_fnGetWidestNode:Hb,_fnGetMaxLenString:Ib,_fnStringToCss:w,_fnSortFlatten:Y,_fnSort:ob,_fnSortAria:Kb,_fnSortListener:Wa,_fnSortAttachListener:Oa,_fnSortingClasses:ya,_fnSortData:Jb,_fnSaveState:za,_fnLoadState:Lb,_fnSettingsFromNode:Aa,_fnLog:K,_fnMap:F,_fnBindAction:Xa,_fnCallbackReg:z,_fnCallbackFire:t,_fnLengthOverflow:Ua,
_fnRenderer:Pa,_fnDataSource:y,_fnRowAttributes:Na,_fnExtend:Ya,_fnCalculateEnd:function(){}});h.fn.dataTable=n;n.$=h;h.fn.dataTableSettings=n.settings;h.fn.dataTableExt=n.ext;h.fn.DataTable=function(a){return h(this).dataTable(a).api()};h.each(n,function(a,b){h.fn.DataTable[a]=b});return h.fn.dataTable});

/*!
 DataTables Bootstrap 4 integration
 ©2011-2017 SpryMedia Ltd - datatables.net/license
*/
(function(b){"function"===typeof define&&define.amd?define(["jquery","datatables.net"],function(a){return b(a,window,document)}):"object"===typeof exports?module.exports=function(a,d){a||(a=window);if(!d||!d.fn.dataTable)d=require("datatables.net")(a,d).$;return b(d,a,a.document)}:b(jQuery,window,document)})(function(b,a,d,m){var f=b.fn.dataTable;b.extend(!0,f.defaults,{dom:"<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
renderer:"bootstrap"});b.extend(f.ext.classes,{sWrapper:"dataTables_wrapper dt-bootstrap4",sFilterInput:"form-control form-control-sm",sLengthSelect:"custom-select custom-select-sm form-control form-control-sm",sProcessing:"dataTables_processing card",sPageButton:"paginate_button page-item"});f.ext.renderer.pageButton.bootstrap=function(a,h,r,s,j,n){var o=new f.Api(a),t=a.oClasses,k=a.oLanguage.oPaginate,u=a.oLanguage.oAria.paginate||{},e,g,p=0,q=function(d,f){var l,h,i,c,m=function(a){a.preventDefault();
!b(a.currentTarget).hasClass("disabled")&&o.page()!=a.data.action&&o.page(a.data.action).draw("page")};l=0;for(h=f.length;l<h;l++)if(c=f[l],b.isArray(c))q(d,c);else{g=e="";switch(c){case "ellipsis":e="&#x2026;";g="disabled";break;case "first":e=k.sFirst;g=c+(0<j?"":" disabled");break;case "previous":e=k.sPrevious;g=c+(0<j?"":" disabled");break;case "next":e=k.sNext;g=c+(j<n-1?"":" disabled");break;case "last":e=k.sLast;g=c+(j<n-1?"":" disabled");break;default:e=c+1,g=j===c?"active":""}e&&(i=b("<li>",
{"class":t.sPageButton+" "+g,id:0===r&&"string"===typeof c?a.sTableId+"_"+c:null}).append(b("<a>",{href:"#","aria-controls":a.sTableId,"aria-label":u[c],"data-dt-idx":p,tabindex:a.iTabIndex,"class":"page-link"}).html(e)).appendTo(d),a.oApi._fnBindAction(i,{action:c},m),p++)}},i;try{i=b(h).find(d.activeElement).data("dt-idx")}catch(v){}q(b(h).empty().html('<ul class="pagination"/>').children("ul"),s);i!==m&&b(h).find("[data-dt-idx="+i+"]").focus()};return f});

/*!
 Responsive 2.2.3
 2014-2018 SpryMedia Ltd - datatables.net/license
*/
(function(d){"function"===typeof define&&define.amd?define(["jquery","datatables.net"],function(l){return d(l,window,document)}):"object"===typeof exports?module.exports=function(l,j){l||(l=window);if(!j||!j.fn.dataTable)j=require("datatables.net")(l,j).$;return d(j,l,l.document)}:d(jQuery,window,document)})(function(d,l,j,q){function t(a,b,c){var e=b+"-"+c;if(n[e])return n[e];for(var d=[],a=a.cell(b,c).node().childNodes,b=0,c=a.length;b<c;b++)d.push(a[b]);return n[e]=d}function r(a,b,d){var e=b+
"-"+d;if(n[e]){for(var a=a.cell(b,d).node(),d=n[e][0].parentNode.childNodes,b=[],f=0,g=d.length;f<g;f++)b.push(d[f]);d=0;for(f=b.length;d<f;d++)a.appendChild(b[d]);n[e]=q}}var o=d.fn.dataTable,i=function(a,b){if(!o.versionCheck||!o.versionCheck("1.10.10"))throw"DataTables Responsive requires DataTables 1.10.10 or newer";this.s={dt:new o.Api(a),columns:[],current:[]};this.s.dt.settings()[0].responsive||(b&&"string"===typeof b.details?b.details={type:b.details}:b&&!1===b.details?b.details={type:!1}:
b&&!0===b.details&&(b.details={type:"inline"}),this.c=d.extend(!0,{},i.defaults,o.defaults.responsive,b),a.responsive=this,this._constructor())};d.extend(i.prototype,{_constructor:function(){var a=this,b=this.s.dt,c=b.settings()[0],e=d(l).width();b.settings()[0]._responsive=this;d(l).on("resize.dtr orientationchange.dtr",o.util.throttle(function(){var b=d(l).width();b!==e&&(a._resize(),e=b)}));c.oApi._fnCallbackReg(c,"aoRowCreatedCallback",function(e){-1!==d.inArray(!1,a.s.current)&&d(">td, >th",
e).each(function(e){e=b.column.index("toData",e);!1===a.s.current[e]&&d(this).css("display","none")})});b.on("destroy.dtr",function(){b.off(".dtr");d(b.table().body()).off(".dtr");d(l).off("resize.dtr orientationchange.dtr");d.each(a.s.current,function(b,e){!1===e&&a._setColumnVis(b,!0)})});this.c.breakpoints.sort(function(a,b){return a.width<b.width?1:a.width>b.width?-1:0});this._classLogic();this._resizeAuto();c=this.c.details;!1!==c.type&&(a._detailsInit(),b.on("column-visibility.dtr",function(){a._timer&&
clearTimeout(a._timer);a._timer=setTimeout(function(){a._timer=null;a._classLogic();a._resizeAuto();a._resize();a._redrawChildren()},100)}),b.on("draw.dtr",function(){a._redrawChildren()}),d(b.table().node()).addClass("dtr-"+c.type));b.on("column-reorder.dtr",function(){a._classLogic();a._resizeAuto();a._resize()});b.on("column-sizing.dtr",function(){a._resizeAuto();a._resize()});b.on("preXhr.dtr",function(){var e=[];b.rows().every(function(){this.child.isShown()&&e.push(this.id(true))});b.one("draw.dtr",
function(){a._resizeAuto();a._resize();b.rows(e).every(function(){a._detailsDisplay(this,false)})})});b.on("init.dtr",function(){a._resizeAuto();a._resize();d.inArray(false,a.s.current)&&b.columns.adjust()});this._resize()},_columnsVisiblity:function(a){var b=this.s.dt,c=this.s.columns,e,f,g=c.map(function(a,b){return{columnIdx:b,priority:a.priority}}).sort(function(a,b){return a.priority!==b.priority?a.priority-b.priority:a.columnIdx-b.columnIdx}),h=d.map(c,function(e,c){return!1===b.column(c).visible()?
"not-visible":e.auto&&null===e.minWidth?!1:!0===e.auto?"-":-1!==d.inArray(a,e.includeIn)}),m=0;e=0;for(f=h.length;e<f;e++)!0===h[e]&&(m+=c[e].minWidth);e=b.settings()[0].oScroll;e=e.sY||e.sX?e.iBarWidth:0;m=b.table().container().offsetWidth-e-m;e=0;for(f=h.length;e<f;e++)c[e].control&&(m-=c[e].minWidth);var s=!1;e=0;for(f=g.length;e<f;e++){var k=g[e].columnIdx;"-"===h[k]&&(!c[k].control&&c[k].minWidth)&&(s||0>m-c[k].minWidth?(s=!0,h[k]=!1):h[k]=!0,m-=c[k].minWidth)}g=!1;e=0;for(f=c.length;e<f;e++)if(!c[e].control&&
!c[e].never&&!1===h[e]){g=!0;break}e=0;for(f=c.length;e<f;e++)c[e].control&&(h[e]=g),"not-visible"===h[e]&&(h[e]=!1);-1===d.inArray(!0,h)&&(h[0]=!0);return h},_classLogic:function(){var a=this,b=this.c.breakpoints,c=this.s.dt,e=c.columns().eq(0).map(function(a){var b=this.column(a),e=b.header().className,a=c.settings()[0].aoColumns[a].responsivePriority;a===q&&(b=d(b.header()).data("priority"),a=b!==q?1*b:1E4);return{className:e,includeIn:[],auto:!1,control:!1,never:e.match(/\bnever\b/)?!0:!1,priority:a}}),
f=function(a,b){var c=e[a].includeIn;-1===d.inArray(b,c)&&c.push(b)},g=function(d,c,g,k){if(g)if("max-"===g){k=a._find(c).width;c=0;for(g=b.length;c<g;c++)b[c].width<=k&&f(d,b[c].name)}else if("min-"===g){k=a._find(c).width;c=0;for(g=b.length;c<g;c++)b[c].width>=k&&f(d,b[c].name)}else{if("not-"===g){c=0;for(g=b.length;c<g;c++)-1===b[c].name.indexOf(k)&&f(d,b[c].name)}}else e[d].includeIn.push(c)};e.each(function(a,e){for(var c=a.className.split(" "),f=!1,i=0,l=c.length;i<l;i++){var j=d.trim(c[i]);
if("all"===j){f=!0;a.includeIn=d.map(b,function(a){return a.name});return}if("none"===j||a.never){f=!0;return}if("control"===j){f=!0;a.control=!0;return}d.each(b,function(a,b){var d=b.name.split("-"),c=j.match(RegExp("(min\\-|max\\-|not\\-)?("+d[0]+")(\\-[_a-zA-Z0-9])?"));c&&(f=!0,c[2]===d[0]&&c[3]==="-"+d[1]?g(e,b.name,c[1],c[2]+c[3]):c[2]===d[0]&&!c[3]&&g(e,b.name,c[1],c[2]))})}f||(a.auto=!0)});this.s.columns=e},_detailsDisplay:function(a,b){var c=this,e=this.s.dt,f=this.c.details;if(f&&!1!==f.type){var g=
f.display(a,b,function(){return f.renderer(e,a[0],c._detailsObj(a[0]))});(!0===g||!1===g)&&d(e.table().node()).triggerHandler("responsive-display.dt",[e,a,g,b])}},_detailsInit:function(){var a=this,b=this.s.dt,c=this.c.details;"inline"===c.type&&(c.target="td:first-child, th:first-child");b.on("draw.dtr",function(){a._tabIndexes()});a._tabIndexes();d(b.table().body()).on("keyup.dtr","td, th",function(a){a.keyCode===13&&d(this).data("dtr-keyboard")&&d(this).click()});var e=c.target;d(b.table().body()).on("click.dtr mousedown.dtr mouseup.dtr",
"string"===typeof e?e:"td, th",function(c){if(d(b.table().node()).hasClass("collapsed")&&d.inArray(d(this).closest("tr").get(0),b.rows().nodes().toArray())!==-1){if(typeof e==="number"){var g=e<0?b.columns().eq(0).length+e:e;if(b.cell(this).index().column!==g)return}g=b.row(d(this).closest("tr"));c.type==="click"?a._detailsDisplay(g,false):c.type==="mousedown"?d(this).css("outline","none"):c.type==="mouseup"&&d(this).blur().css("outline","")}})},_detailsObj:function(a){var b=this,c=this.s.dt;return d.map(this.s.columns,
function(e,d){if(!e.never&&!e.control)return{title:c.settings()[0].aoColumns[d].sTitle,data:c.cell(a,d).render(b.c.orthogonal),hidden:c.column(d).visible()&&!b.s.current[d],columnIndex:d,rowIndex:a}})},_find:function(a){for(var b=this.c.breakpoints,c=0,e=b.length;c<e;c++)if(b[c].name===a)return b[c]},_redrawChildren:function(){var a=this,b=this.s.dt;b.rows({page:"current"}).iterator("row",function(c,e){b.row(e);a._detailsDisplay(b.row(e),!0)})},_resize:function(){var a=this,b=this.s.dt,c=d(l).width(),
e=this.c.breakpoints,f=e[0].name,g=this.s.columns,h,m=this.s.current.slice();for(h=e.length-1;0<=h;h--)if(c<=e[h].width){f=e[h].name;break}var i=this._columnsVisiblity(f);this.s.current=i;e=!1;h=0;for(c=g.length;h<c;h++)if(!1===i[h]&&!g[h].never&&!g[h].control&&!1===!b.column(h).visible()){e=!0;break}d(b.table().node()).toggleClass("collapsed",e);var k=!1,j=0;b.columns().eq(0).each(function(b,c){!0===i[c]&&j++;i[c]!==m[c]&&(k=!0,a._setColumnVis(b,i[c]))});k&&(this._redrawChildren(),d(b.table().node()).trigger("responsive-resize.dt",
[b,this.s.current]),0===b.page.info().recordsDisplay&&d("td",b.table().body()).eq(0).attr("colspan",j))},_resizeAuto:function(){var a=this.s.dt,b=this.s.columns;if(this.c.auto&&-1!==d.inArray(!0,d.map(b,function(a){return a.auto}))){d.isEmptyObject(n)||d.each(n,function(b){b=b.split("-");r(a,1*b[0],1*b[1])});a.table().node();var c=a.table().node().cloneNode(!1),e=d(a.table().header().cloneNode(!1)).appendTo(c),f=d(a.table().body()).clone(!1,!1).empty().appendTo(c),g=a.columns().header().filter(function(b){return a.column(b).visible()}).to$().clone(!1).css("display",
"table-cell").css("min-width",0);d(f).append(d(a.rows({page:"current"}).nodes()).clone(!1)).find("th, td").css("display","");if(f=a.table().footer()){var f=d(f.cloneNode(!1)).appendTo(c),h=a.columns().footer().filter(function(b){return a.column(b).visible()}).to$().clone(!1).css("display","table-cell");d("<tr/>").append(h).appendTo(f)}d("<tr/>").append(g).appendTo(e);"inline"===this.c.details.type&&d(c).addClass("dtr-inline collapsed");d(c).find("[name]").removeAttr("name");d(c).css("position","relative");
c=d("<div/>").css({width:1,height:1,overflow:"hidden",clear:"both"}).append(c);c.insertBefore(a.table().node());g.each(function(c){c=a.column.index("fromVisible",c);b[c].minWidth=this.offsetWidth||0});c.remove()}},_setColumnVis:function(a,b){var c=this.s.dt,e=b?"":"none";d(c.column(a).header()).css("display",e);d(c.column(a).footer()).css("display",e);c.column(a).nodes().to$().css("display",e);d.isEmptyObject(n)||c.cells(null,a).indexes().each(function(a){r(c,a.row,a.column)})},_tabIndexes:function(){var a=
this.s.dt,b=a.cells({page:"current"}).nodes().to$(),c=a.settings()[0],e=this.c.details.target;b.filter("[data-dtr-keyboard]").removeData("[data-dtr-keyboard]");"number"===typeof e?a.cells(null,e,{page:"current"}).nodes().to$().attr("tabIndex",c.iTabIndex).data("dtr-keyboard",1):("td:first-child, th:first-child"===e&&(e=">td:first-child, >th:first-child"),d(e,a.rows({page:"current"}).nodes()).attr("tabIndex",c.iTabIndex).data("dtr-keyboard",1))}});i.breakpoints=[{name:"desktop",width:Infinity},{name:"tablet-l",
width:1024},{name:"tablet-p",width:768},{name:"mobile-l",width:480},{name:"mobile-p",width:320}];i.display={childRow:function(a,b,c){if(b){if(d(a.node()).hasClass("parent"))return a.child(c(),"child").show(),!0}else{if(a.child.isShown())return a.child(!1),d(a.node()).removeClass("parent"),!1;a.child(c(),"child").show();d(a.node()).addClass("parent");return!0}},childRowImmediate:function(a,b,c){if(!b&&a.child.isShown()||!a.responsive.hasHidden())return a.child(!1),d(a.node()).removeClass("parent"),
!1;a.child(c(),"child").show();d(a.node()).addClass("parent");return!0},modal:function(a){return function(b,c,e){if(c)d("div.dtr-modal-content").empty().append(e());else{var f=function(){g.remove();d(j).off("keypress.dtr")},g=d('<div class="dtr-modal"/>').append(d('<div class="dtr-modal-display"/>').append(d('<div class="dtr-modal-content"/>').append(e())).append(d('<div class="dtr-modal-close">&times;</div>').click(function(){f()}))).append(d('<div class="dtr-modal-background"/>').click(function(){f()})).appendTo("body");
d(j).on("keyup.dtr",function(a){27===a.keyCode&&(a.stopPropagation(),f())})}a&&a.header&&d("div.dtr-modal-content").prepend("<h2>"+a.header(b)+"</h2>")}}};var n={};i.renderer={listHiddenNodes:function(){return function(a,b,c){var e=d('<ul data-dtr-index="'+b+'" class="dtr-details"/>'),f=!1;d.each(c,function(b,c){c.hidden&&(d('<li data-dtr-index="'+c.columnIndex+'" data-dt-row="'+c.rowIndex+'" data-dt-column="'+c.columnIndex+'"><span class="dtr-title">'+c.title+"</span> </li>").append(d('<span class="dtr-data"/>').append(t(a,
c.rowIndex,c.columnIndex))).appendTo(e),f=!0)});return f?e:!1}},listHidden:function(){return function(a,b,c){return(a=d.map(c,function(a){return a.hidden?'<li data-dtr-index="'+a.columnIndex+'" data-dt-row="'+a.rowIndex+'" data-dt-column="'+a.columnIndex+'"><span class="dtr-title">'+a.title+'</span> <span class="dtr-data">'+a.data+"</span></li>":""}).join(""))?d('<ul data-dtr-index="'+b+'" class="dtr-details"/>').append(a):!1}},tableAll:function(a){a=d.extend({tableClass:""},a);return function(b,
c,e){b=d.map(e,function(a){return'<tr data-dt-row="'+a.rowIndex+'" data-dt-column="'+a.columnIndex+'"><td>'+a.title+":</td> <td>"+a.data+"</td></tr>"}).join("");return d('<table class="'+a.tableClass+' dtr-details" width="100%"/>').append(b)}}};i.defaults={breakpoints:i.breakpoints,auto:!0,details:{display:i.display.childRow,renderer:i.renderer.listHidden(),target:0,type:"inline"},orthogonal:"display"};var p=d.fn.dataTable.Api;p.register("responsive()",function(){return this});p.register("responsive.index()",
function(a){a=d(a);return{column:a.data("dtr-index"),row:a.parent().data("dtr-index")}});p.register("responsive.rebuild()",function(){return this.iterator("table",function(a){a._responsive&&a._responsive._classLogic()})});p.register("responsive.recalc()",function(){return this.iterator("table",function(a){a._responsive&&(a._responsive._resizeAuto(),a._responsive._resize())})});p.register("responsive.hasHidden()",function(){var a=this.context[0];return a._responsive?-1!==d.inArray(!1,a._responsive.s.current):
!1});p.registerPlural("columns().responsiveHidden()","column().responsiveHidden()",function(){return this.iterator("column",function(a,b){return a._responsive?a._responsive.s.current[b]:!1},1)});i.version="2.2.3";d.fn.dataTable.Responsive=i;d.fn.DataTable.Responsive=i;d(j).on("preInit.dt.dtr",function(a,b){if("dt"===a.namespace&&(d(b.nTable).hasClass("responsive")||d(b.nTable).hasClass("dt-responsive")||b.oInit.responsive||o.defaults.responsive)){var c=b.oInit.responsive;!1!==c&&new i(b,d.isPlainObject(c)?
c:{})}});return i});

/*!
 Bootstrap 4 integration for DataTables' Responsive
 ©2016 SpryMedia Ltd - datatables.net/license
*/
(function(c){"function"===typeof define&&define.amd?define(["jquery","datatables.net-bs4","datatables.net-responsive"],function(a){return c(a,window,document)}):"object"===typeof exports?module.exports=function(a,b){a||(a=window);if(!b||!b.fn.dataTable)b=require("datatables.net-bs4")(a,b).$;b.fn.dataTable.Responsive||require("datatables.net-responsive")(a,b);return c(b,a,a.document)}:c(jQuery,window,document)})(function(c){var a=c.fn.dataTable,b=a.Responsive.display,g=b.modal,e=c('<div class="modal fade dtr-bs-modal" role="dialog"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"/></div></div></div>');
b.modal=function(a){return function(b,d,f){if(c.fn.modal){if(!d){if(a&&a.header){var d=e.find("div.modal-header"),h=d.find("button").detach();d.empty().append('<h4 class="modal-title">'+a.header(b)+"</h4>").append(h)}e.find("div.modal-body").empty().append(f());e.appendTo("body").modal()}}else g(b,d,f)}};return a.Responsive});

/*!
 * Select2 4.0.13
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 */
;(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node/CommonJS
    module.exports = function (root, jQuery) {
      if (jQuery === undefined) {
        // require('jQuery') returns a factory that requires window to
        // build a jQuery instance, we normalize how we use modules
        // that require this pattern but the window provided is a noop
        // if it's defined (how jquery works)
        if (typeof window !== 'undefined') {
          jQuery = require('jquery');
        }
        else {
          jQuery = require('jquery')(root);
        }
      }
      factory(jQuery);
      return jQuery;
    };
  } else {
    // Browser globals
    factory(jQuery);
  }
} (function (jQuery) {
  // This is needed so we can catch the AMD loader configuration and use it
  // The inner file should be wrapped (by `banner.start.js`) in a function that
  // returns the AMD loader references.
  var S2 =(function () {
  // Restore the Select2 AMD loader so it can be used
  // Needed mostly in the language files, where the loader is not inserted
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) {
    var S2 = jQuery.fn.select2.amd;
  }
var S2;(function () { if (!S2 || !S2.requirejs) {
if (!S2) { S2 = {}; } else { require = S2; }
/**
 * @license almond 0.3.3 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, http://github.com/requirejs/almond/LICENSE
 */
//Going sloppy to avoid 'use strict' string cost, but strict practices should
//be followed.
/*global setTimeout: false */

var requirejs, require, define;
(function (undef) {
    var main, req, makeMap, handlers,
        defined = {},
        waiting = {},
        config = {},
        defining = {},
        hasOwn = Object.prototype.hasOwnProperty,
        aps = [].slice,
        jsSuffixRegExp = /\.js$/;

    function hasProp(obj, prop) {
        return hasOwn.call(obj, prop);
    }

    /**
     * Given a relative module name, like ./something, normalize it to
     * a real name that can be mapped to a path.
     * @param {String} name the relative name
     * @param {String} baseName a real name that the name arg is relative
     * to.
     * @returns {String} normalized name
     */
    function normalize(name, baseName) {
        var nameParts, nameSegment, mapValue, foundMap, lastIndex,
            foundI, foundStarMap, starI, i, j, part, normalizedBaseParts,
            baseParts = baseName && baseName.split("/"),
            map = config.map,
            starMap = (map && map['*']) || {};

        //Adjust any relative paths.
        if (name) {
            name = name.split('/');
            lastIndex = name.length - 1;

            // If wanting node ID compatibility, strip .js from end
            // of IDs. Have to do this here, and not in nameToUrl
            // because node allows either .js or non .js to map
            // to same file.
            if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
                name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
            }

            // Starts with a '.' so need the baseName
            if (name[0].charAt(0) === '.' && baseParts) {
                //Convert baseName to array, and lop off the last part,
                //so that . matches that 'directory' and not name of the baseName's
                //module. For instance, baseName of 'one/two/three', maps to
                //'one/two/three.js', but we want the directory, 'one/two' for
                //this normalization.
                normalizedBaseParts = baseParts.slice(0, baseParts.length - 1);
                name = normalizedBaseParts.concat(name);
            }

            //start trimDots
            for (i = 0; i < name.length; i++) {
                part = name[i];
                if (part === '.') {
                    name.splice(i, 1);
                    i -= 1;
                } else if (part === '..') {
                    // If at the start, or previous value is still ..,
                    // keep them so that when converted to a path it may
                    // still work when converted to a path, even though
                    // as an ID it is less than ideal. In larger point
                    // releases, may be better to just kick out an error.
                    if (i === 0 || (i === 1 && name[2] === '..') || name[i - 1] === '..') {
                        continue;
                    } else if (i > 0) {
                        name.splice(i - 1, 2);
                        i -= 2;
                    }
                }
            }
            //end trimDots

            name = name.join('/');
        }

        //Apply map config if available.
        if ((baseParts || starMap) && map) {
            nameParts = name.split('/');

            for (i = nameParts.length; i > 0; i -= 1) {
                nameSegment = nameParts.slice(0, i).join("/");

                if (baseParts) {
                    //Find the longest baseName segment match in the config.
                    //So, do joins on the biggest to smallest lengths of baseParts.
                    for (j = baseParts.length; j > 0; j -= 1) {
                        mapValue = map[baseParts.slice(0, j).join('/')];

                        //baseName segment has  config, find if it has one for
                        //this name.
                        if (mapValue) {
                            mapValue = mapValue[nameSegment];
                            if (mapValue) {
                                //Match, update name to the new value.
                                foundMap = mapValue;
                                foundI = i;
                                break;
                            }
                        }
                    }
                }

                if (foundMap) {
                    break;
                }

                //Check for a star map match, but just hold on to it,
                //if there is a shorter segment match later in a matching
                //config, then favor over this star map.
                if (!foundStarMap && starMap && starMap[nameSegment]) {
                    foundStarMap = starMap[nameSegment];
                    starI = i;
                }
            }

            if (!foundMap && foundStarMap) {
                foundMap = foundStarMap;
                foundI = starI;
            }

            if (foundMap) {
                nameParts.splice(0, foundI, foundMap);
                name = nameParts.join('/');
            }
        }

        return name;
    }

    function makeRequire(relName, forceSync) {
        return function () {
            //A version of a require function that passes a moduleName
            //value for items that may need to
            //look up paths relative to the moduleName
            var args = aps.call(arguments, 0);

            //If first arg is not require('string'), and there is only
            //one arg, it is the array form without a callback. Insert
            //a null so that the following concat is correct.
            if (typeof args[0] !== 'string' && args.length === 1) {
                args.push(null);
            }
            return req.apply(undef, args.concat([relName, forceSync]));
        };
    }

    function makeNormalize(relName) {
        return function (name) {
            return normalize(name, relName);
        };
    }

    function makeLoad(depName) {
        return function (value) {
            defined[depName] = value;
        };
    }

    function callDep(name) {
        if (hasProp(waiting, name)) {
            var args = waiting[name];
            delete waiting[name];
            defining[name] = true;
            main.apply(undef, args);
        }

        if (!hasProp(defined, name) && !hasProp(defining, name)) {
            throw new Error('No ' + name);
        }
        return defined[name];
    }

    //Turns a plugin!resource to [plugin, resource]
    //with the plugin being undefined if the name
    //did not have a plugin prefix.
    function splitPrefix(name) {
        var prefix,
            index = name ? name.indexOf('!') : -1;
        if (index > -1) {
            prefix = name.substring(0, index);
            name = name.substring(index + 1, name.length);
        }
        return [prefix, name];
    }

    //Creates a parts array for a relName where first part is plugin ID,
    //second part is resource ID. Assumes relName has already been normalized.
    function makeRelParts(relName) {
        return relName ? splitPrefix(relName) : [];
    }

    /**
     * Makes a name map, normalizing the name, and using a plugin
     * for normalization if necessary. Grabs a ref to plugin
     * too, as an optimization.
     */
    makeMap = function (name, relParts) {
        var plugin,
            parts = splitPrefix(name),
            prefix = parts[0],
            relResourceName = relParts[1];

        name = parts[1];

        if (prefix) {
            prefix = normalize(prefix, relResourceName);
            plugin = callDep(prefix);
        }

        //Normalize according
        if (prefix) {
            if (plugin && plugin.normalize) {
                name = plugin.normalize(name, makeNormalize(relResourceName));
            } else {
                name = normalize(name, relResourceName);
            }
        } else {
            name = normalize(name, relResourceName);
            parts = splitPrefix(name);
            prefix = parts[0];
            name = parts[1];
            if (prefix) {
                plugin = callDep(prefix);
            }
        }

        //Using ridiculous property names for space reasons
        return {
            f: prefix ? prefix + '!' + name : name, //fullName
            n: name,
            pr: prefix,
            p: plugin
        };
    };

    function makeConfig(name) {
        return function () {
            return (config && config.config && config.config[name]) || {};
        };
    }

    handlers = {
        require: function (name) {
            return makeRequire(name);
        },
        exports: function (name) {
            var e = defined[name];
            if (typeof e !== 'undefined') {
                return e;
            } else {
                return (defined[name] = {});
            }
        },
        module: function (name) {
            return {
                id: name,
                uri: '',
                exports: defined[name],
                config: makeConfig(name)
            };
        }
    };

    main = function (name, deps, callback, relName) {
        var cjsModule, depName, ret, map, i, relParts,
            args = [],
            callbackType = typeof callback,
            usingExports;

        //Use name if no relName
        relName = relName || name;
        relParts = makeRelParts(relName);

        //Call the callback to define the module, if necessary.
        if (callbackType === 'undefined' || callbackType === 'function') {
            //Pull out the defined dependencies and pass the ordered
            //values to the callback.
            //Default to [require, exports, module] if no deps
            deps = !deps.length && callback.length ? ['require', 'exports', 'module'] : deps;
            for (i = 0; i < deps.length; i += 1) {
                map = makeMap(deps[i], relParts);
                depName = map.f;

                //Fast path CommonJS standard dependencies.
                if (depName === "require") {
                    args[i] = handlers.require(name);
                } else if (depName === "exports") {
                    //CommonJS module spec 1.1
                    args[i] = handlers.exports(name);
                    usingExports = true;
                } else if (depName === "module") {
                    //CommonJS module spec 1.1
                    cjsModule = args[i] = handlers.module(name);
                } else if (hasProp(defined, depName) ||
                           hasProp(waiting, depName) ||
                           hasProp(defining, depName)) {
                    args[i] = callDep(depName);
                } else if (map.p) {
                    map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});
                    args[i] = defined[depName];
                } else {
                    throw new Error(name + ' missing ' + depName);
                }
            }

            ret = callback ? callback.apply(defined[name], args) : undefined;

            if (name) {
                //If setting exports via "module" is in play,
                //favor that over return value and exports. After that,
                //favor a non-undefined return value over exports use.
                if (cjsModule && cjsModule.exports !== undef &&
                        cjsModule.exports !== defined[name]) {
                    defined[name] = cjsModule.exports;
                } else if (ret !== undef || !usingExports) {
                    //Use the return value from the function.
                    defined[name] = ret;
                }
            }
        } else if (name) {
            //May just be an object definition for the module. Only
            //worry about defining if have a module name.
            defined[name] = callback;
        }
    };

    requirejs = require = req = function (deps, callback, relName, forceSync, alt) {
        if (typeof deps === "string") {
            if (handlers[deps]) {
                //callback in this case is really relName
                return handlers[deps](callback);
            }
            //Just return the module wanted. In this scenario, the
            //deps arg is the module name, and second arg (if passed)
            //is just the relName.
            //Normalize module name, if it contains . or ..
            return callDep(makeMap(deps, makeRelParts(callback)).f);
        } else if (!deps.splice) {
            //deps is a config object, not an array.
            config = deps;
            if (config.deps) {
                req(config.deps, config.callback);
            }
            if (!callback) {
                return;
            }

            if (callback.splice) {
                //callback is an array, which means it is a dependency list.
                //Adjust args if there are dependencies
                deps = callback;
                callback = relName;
                relName = null;
            } else {
                deps = undef;
            }
        }

        //Support require(['a'])
        callback = callback || function () {};

        //If relName is a function, it is an errback handler,
        //so remove it.
        if (typeof relName === 'function') {
            relName = forceSync;
            forceSync = alt;
        }

        //Simulate async callback;
        if (forceSync) {
            main(undef, deps, callback, relName);
        } else {
            //Using a non-zero value because of concern for what old browsers
            //do, and latest browsers "upgrade" to 4 if lower value is used:
            //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
            //If want a value immediately, use require('id') instead -- something
            //that works in almond on the global level, but not guaranteed and
            //unlikely to work in other AMD implementations.
            setTimeout(function () {
                main(undef, deps, callback, relName);
            }, 4);
        }

        return req;
    };

    /**
     * Just drops the config on the floor, but returns req in case
     * the config return value is used.
     */
    req.config = function (cfg) {
        return req(cfg);
    };

    /**
     * Expose module registry for debugging and tooling
     */
    requirejs._defined = defined;

    define = function (name, deps, callback) {
        if (typeof name !== 'string') {
            throw new Error('See almond README: incorrect module build, no module name');
        }

        //This module may not have dependencies
        if (!deps.splice) {
            //deps is not an array, so probably means
            //an object literal or factory function for
            //the value. Adjust args.
            callback = deps;
            deps = [];
        }

        if (!hasProp(defined, name) && !hasProp(waiting, name)) {
            waiting[name] = [name, deps, callback];
        }
    };

    define.amd = {
        jQuery: true
    };
}());

S2.requirejs = requirejs;S2.require = require;S2.define = define;
}
}());
S2.define("almond", function(){});

/* global jQuery:false, $:false */
S2.define('jquery',[],function () {
  var _$ = jQuery || $;

  if (_$ == null && console && console.error) {
    console.error(
      'Select2: An instance of jQuery or a jQuery-compatible library was not ' +
      'found. Make sure that you are including jQuery before Select2 on your ' +
      'web page.'
    );
  }

  return _$;
});

S2.define('select2/utils',[
  'jquery'
], function ($) {
  var Utils = {};

  Utils.Extend = function (ChildClass, SuperClass) {
    var __hasProp = {}.hasOwnProperty;

    function BaseConstructor () {
      this.constructor = ChildClass;
    }

    for (var key in SuperClass) {
      if (__hasProp.call(SuperClass, key)) {
        ChildClass[key] = SuperClass[key];
      }
    }

    BaseConstructor.prototype = SuperClass.prototype;
    ChildClass.prototype = new BaseConstructor();
    ChildClass.__super__ = SuperClass.prototype;

    return ChildClass;
  };

  function getMethods (theClass) {
    var proto = theClass.prototype;

    var methods = [];

    for (var methodName in proto) {
      var m = proto[methodName];

      if (typeof m !== 'function') {
        continue;
      }

      if (methodName === 'constructor') {
        continue;
      }

      methods.push(methodName);
    }

    return methods;
  }

  Utils.Decorate = function (SuperClass, DecoratorClass) {
    var decoratedMethods = getMethods(DecoratorClass);
    var superMethods = getMethods(SuperClass);

    function DecoratedClass () {
      var unshift = Array.prototype.unshift;

      var argCount = DecoratorClass.prototype.constructor.length;

      var calledConstructor = SuperClass.prototype.constructor;

      if (argCount > 0) {
        unshift.call(arguments, SuperClass.prototype.constructor);

        calledConstructor = DecoratorClass.prototype.constructor;
      }

      calledConstructor.apply(this, arguments);
    }

    DecoratorClass.displayName = SuperClass.displayName;

    function ctr () {
      this.constructor = DecoratedClass;
    }

    DecoratedClass.prototype = new ctr();

    for (var m = 0; m < superMethods.length; m++) {
      var superMethod = superMethods[m];

      DecoratedClass.prototype[superMethod] =
        SuperClass.prototype[superMethod];
    }

    var calledMethod = function (methodName) {
      // Stub out the original method if it's not decorating an actual method
      var originalMethod = function () {};

      if (methodName in DecoratedClass.prototype) {
        originalMethod = DecoratedClass.prototype[methodName];
      }

      var decoratedMethod = DecoratorClass.prototype[methodName];

      return function () {
        var unshift = Array.prototype.unshift;

        unshift.call(arguments, originalMethod);

        return decoratedMethod.apply(this, arguments);
      };
    };

    for (var d = 0; d < decoratedMethods.length; d++) {
      var decoratedMethod = decoratedMethods[d];

      DecoratedClass.prototype[decoratedMethod] = calledMethod(decoratedMethod);
    }

    return DecoratedClass;
  };

  var Observable = function () {
    this.listeners = {};
  };

  Observable.prototype.on = function (event, callback) {
    this.listeners = this.listeners || {};

    if (event in this.listeners) {
      this.listeners[event].push(callback);
    } else {
      this.listeners[event] = [callback];
    }
  };

  Observable.prototype.trigger = function (event) {
    var slice = Array.prototype.slice;
    var params = slice.call(arguments, 1);

    this.listeners = this.listeners || {};

    // Params should always come in as an array
    if (params == null) {
      params = [];
    }

    // If there are no arguments to the event, use a temporary object
    if (params.length === 0) {
      params.push({});
    }

    // Set the `_type` of the first object to the event
    params[0]._type = event;

    if (event in this.listeners) {
      this.invoke(this.listeners[event], slice.call(arguments, 1));
    }

    if ('*' in this.listeners) {
      this.invoke(this.listeners['*'], arguments);
    }
  };

  Observable.prototype.invoke = function (listeners, params) {
    for (var i = 0, len = listeners.length; i < len; i++) {
      listeners[i].apply(this, params);
    }
  };

  Utils.Observable = Observable;

  Utils.generateChars = function (length) {
    var chars = '';

    for (var i = 0; i < length; i++) {
      var randomChar = Math.floor(Math.random() * 36);
      chars += randomChar.toString(36);
    }

    return chars;
  };

  Utils.bind = function (func, context) {
    return function () {
      func.apply(context, arguments);
    };
  };

  Utils._convertData = function (data) {
    for (var originalKey in data) {
      var keys = originalKey.split('-');

      var dataLevel = data;

      if (keys.length === 1) {
        continue;
      }

      for (var k = 0; k < keys.length; k++) {
        var key = keys[k];

        // Lowercase the first letter
        // By default, dash-separated becomes camelCase
        key = key.substring(0, 1).toLowerCase() + key.substring(1);

        if (!(key in dataLevel)) {
          dataLevel[key] = {};
        }

        if (k == keys.length - 1) {
          dataLevel[key] = data[originalKey];
        }

        dataLevel = dataLevel[key];
      }

      delete data[originalKey];
    }

    return data;
  };

  Utils.hasScroll = function (index, el) {
    // Adapted from the function created by @ShadowScripter
    // and adapted by @BillBarry on the Stack Exchange Code Review website.
    // The original code can be found at
    // http://codereview.stackexchange.com/q/13338
    // and was designed to be used with the Sizzle selector engine.

    var $el = $(el);
    var overflowX = el.style.overflowX;
    var overflowY = el.style.overflowY;

    //Check both x and y declarations
    if (overflowX === overflowY &&
        (overflowY === 'hidden' || overflowY === 'visible')) {
      return false;
    }

    if (overflowX === 'scroll' || overflowY === 'scroll') {
      return true;
    }

    return ($el.innerHeight() < el.scrollHeight ||
      $el.innerWidth() < el.scrollWidth);
  };

  Utils.escapeMarkup = function (markup) {
    var replaceMap = {
      '\\': '&#92;',
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      '\'': '&#39;',
      '/': '&#47;'
    };

    // Do not try to escape the markup if it's not a string
    if (typeof markup !== 'string') {
      return markup;
    }

    return String(markup).replace(/[&<>"'\/\\]/g, function (match) {
      return replaceMap[match];
    });
  };

  // Append an array of jQuery nodes to a given element.
  Utils.appendMany = function ($element, $nodes) {
    // jQuery 1.7.x does not support $.fn.append() with an array
    // Fall back to a jQuery object collection using $.fn.add()
    if ($.fn.jquery.substr(0, 3) === '1.7') {
      var $jqNodes = $();

      $.map($nodes, function (node) {
        $jqNodes = $jqNodes.add(node);
      });

      $nodes = $jqNodes;
    }

    $element.append($nodes);
  };

  // Cache objects in Utils.__cache instead of $.data (see #4346)
  Utils.__cache = {};

  var id = 0;
  Utils.GetUniqueElementId = function (element) {
    // Get a unique element Id. If element has no id,
    // creates a new unique number, stores it in the id
    // attribute and returns the new id.
    // If an id already exists, it simply returns it.

    var select2Id = element.getAttribute('data-select2-id');
    if (select2Id == null) {
      // If element has id, use it.
      if (element.id) {
        select2Id = element.id;
        element.setAttribute('data-select2-id', select2Id);
      } else {
        element.setAttribute('data-select2-id', ++id);
        select2Id = id.toString();
      }
    }
    return select2Id;
  };

  Utils.StoreData = function (element, name, value) {
    // Stores an item in the cache for a specified element.
    // name is the cache key.
    var id = Utils.GetUniqueElementId(element);
    if (!Utils.__cache[id]) {
      Utils.__cache[id] = {};
    }

    Utils.__cache[id][name] = value;
  };

  Utils.GetData = function (element, name) {
    // Retrieves a value from the cache by its key (name)
    // name is optional. If no name specified, return
    // all cache items for the specified element.
    // and for a specified element.
    var id = Utils.GetUniqueElementId(element);
    if (name) {
      if (Utils.__cache[id]) {
        if (Utils.__cache[id][name] != null) {
          return Utils.__cache[id][name];
        }
        return $(element).data(name); // Fallback to HTML5 data attribs.
      }
      return $(element).data(name); // Fallback to HTML5 data attribs.
    } else {
      return Utils.__cache[id];
    }
  };

  Utils.RemoveData = function (element) {
    // Removes all cached items for a specified element.
    var id = Utils.GetUniqueElementId(element);
    if (Utils.__cache[id] != null) {
      delete Utils.__cache[id];
    }

    element.removeAttribute('data-select2-id');
  };

  return Utils;
});

S2.define('select2/results',[
  'jquery',
  './utils'
], function ($, Utils) {
  function Results ($element, options, dataAdapter) {
    this.$element = $element;
    this.data = dataAdapter;
    this.options = options;

    Results.__super__.constructor.call(this);
  }

  Utils.Extend(Results, Utils.Observable);

  Results.prototype.render = function () {
    var $results = $(
      '<ul class="select2-results__options" role="listbox"></ul>'
    );

    if (this.options.get('multiple')) {
      $results.attr('aria-multiselectable', 'true');
    }

    this.$results = $results;

    return $results;
  };

  Results.prototype.clear = function () {
    this.$results.empty();
  };

  Results.prototype.displayMessage = function (params) {
    var escapeMarkup = this.options.get('escapeMarkup');

    this.clear();
    this.hideLoading();

    var $message = $(
      '<li role="alert" aria-live="assertive"' +
      ' class="select2-results__option"></li>'
    );

    var message = this.options.get('translations').get(params.message);

    $message.append(
      escapeMarkup(
        message(params.args)
      )
    );

    $message[0].className += ' select2-results__message';

    this.$results.append($message);
  };

  Results.prototype.hideMessages = function () {
    this.$results.find('.select2-results__message').remove();
  };

  Results.prototype.append = function (data) {
    this.hideLoading();

    var $options = [];

    if (data.results == null || data.results.length === 0) {
      if (this.$results.children().length === 0) {
        this.trigger('results:message', {
          message: 'noResults'
        });
      }

      return;
    }

    data.results = this.sort(data.results);

    for (var d = 0; d < data.results.length; d++) {
      var item = data.results[d];

      var $option = this.option(item);

      $options.push($option);
    }

    this.$results.append($options);
  };

  Results.prototype.position = function ($results, $dropdown) {
    var $resultsContainer = $dropdown.find('.select2-results');
    $resultsContainer.append($results);
  };

  Results.prototype.sort = function (data) {
    var sorter = this.options.get('sorter');

    return sorter(data);
  };

  Results.prototype.highlightFirstItem = function () {
    var $options = this.$results
      .find('.select2-results__option[aria-selected]');

    var $selected = $options.filter('[aria-selected=true]');

    // Check if there are any selected options
    if ($selected.length > 0) {
      // If there are selected options, highlight the first
      $selected.first().trigger('mouseenter');
    } else {
      // If there are no selected options, highlight the first option
      // in the dropdown
      $options.first().trigger('mouseenter');
    }

    this.ensureHighlightVisible();
  };

  Results.prototype.setClasses = function () {
    var self = this;

    this.data.current(function (selected) {
      var selectedIds = $.map(selected, function (s) {
        return s.id.toString();
      });

      var $options = self.$results
        .find('.select2-results__option[aria-selected]');

      $options.each(function () {
        var $option = $(this);

        var item = Utils.GetData(this, 'data');

        // id needs to be converted to a string when comparing
        var id = '' + item.id;

        if ((item.element != null && item.element.selected) ||
            (item.element == null && $.inArray(id, selectedIds) > -1)) {
          $option.attr('aria-selected', 'true');
        } else {
          $option.attr('aria-selected', 'false');
        }
      });

    });
  };

  Results.prototype.showLoading = function (params) {
    this.hideLoading();

    var loadingMore = this.options.get('translations').get('searching');

    var loading = {
      disabled: true,
      loading: true,
      text: loadingMore(params)
    };
    var $loading = this.option(loading);
    $loading.className += ' loading-results';

    this.$results.prepend($loading);
  };

  Results.prototype.hideLoading = function () {
    this.$results.find('.loading-results').remove();
  };

  Results.prototype.option = function (data) {
    var option = document.createElement('li');
    option.className = 'select2-results__option';

    var attrs = {
      'role': 'option',
      'aria-selected': 'false'
    };

    var matches = window.Element.prototype.matches ||
      window.Element.prototype.msMatchesSelector ||
      window.Element.prototype.webkitMatchesSelector;

    if ((data.element != null && matches.call(data.element, ':disabled')) ||
        (data.element == null && data.disabled)) {
      delete attrs['aria-selected'];
      attrs['aria-disabled'] = 'true';
    }

    if (data.id == null) {
      delete attrs['aria-selected'];
    }

    if (data._resultId != null) {
      option.id = data._resultId;
    }

    if (data.title) {
      option.title = data.title;
    }

    if (data.children) {
      attrs.role = 'group';
      attrs['aria-label'] = data.text;
      delete attrs['aria-selected'];
    }

    for (var attr in attrs) {
      var val = attrs[attr];

      option.setAttribute(attr, val);
    }

    if (data.children) {
      var $option = $(option);

      var label = document.createElement('strong');
      label.className = 'select2-results__group';

      var $label = $(label);
      this.template(data, label);

      var $children = [];

      for (var c = 0; c < data.children.length; c++) {
        var child = data.children[c];

        var $child = this.option(child);

        $children.push($child);
      }

      var $childrenContainer = $('<ul></ul>', {
        'class': 'select2-results__options select2-results__options--nested'
      });

      $childrenContainer.append($children);

      $option.append(label);
      $option.append($childrenContainer);
    } else {
      this.template(data, option);
    }

    Utils.StoreData(option, 'data', data);

    return option;
  };

  Results.prototype.bind = function (container, $container) {
    var self = this;

    var id = container.id + '-results';

    this.$results.attr('id', id);

    container.on('results:all', function (params) {
      self.clear();
      self.append(params.data);

      if (container.isOpen()) {
        self.setClasses();
        self.highlightFirstItem();
      }
    });

    container.on('results:append', function (params) {
      self.append(params.data);

      if (container.isOpen()) {
        self.setClasses();
      }
    });

    container.on('query', function (params) {
      self.hideMessages();
      self.showLoading(params);
    });

    container.on('select', function () {
      if (!container.isOpen()) {
        return;
      }

      self.setClasses();

      if (self.options.get('scrollAfterSelect')) {
        self.highlightFirstItem();
      }
    });

    container.on('unselect', function () {
      if (!container.isOpen()) {
        return;
      }

      self.setClasses();

      if (self.options.get('scrollAfterSelect')) {
        self.highlightFirstItem();
      }
    });

    container.on('open', function () {
      // When the dropdown is open, aria-expended="true"
      self.$results.attr('aria-expanded', 'true');
      self.$results.attr('aria-hidden', 'false');

      self.setClasses();
      self.ensureHighlightVisible();
    });

    container.on('close', function () {
      // When the dropdown is closed, aria-expended="false"
      self.$results.attr('aria-expanded', 'false');
      self.$results.attr('aria-hidden', 'true');
      self.$results.removeAttr('aria-activedescendant');
    });

    container.on('results:toggle', function () {
      var $highlighted = self.getHighlightedResults();

      if ($highlighted.length === 0) {
        return;
      }

      $highlighted.trigger('mouseup');
    });

    container.on('results:select', function () {
      var $highlighted = self.getHighlightedResults();

      if ($highlighted.length === 0) {
        return;
      }

      var data = Utils.GetData($highlighted[0], 'data');

      if ($highlighted.attr('aria-selected') == 'true') {
        self.trigger('close', {});
      } else {
        self.trigger('select', {
          data: data
        });
      }
    });

    container.on('results:previous', function () {
      var $highlighted = self.getHighlightedResults();

      var $options = self.$results.find('[aria-selected]');

      var currentIndex = $options.index($highlighted);

      // If we are already at the top, don't move further
      // If no options, currentIndex will be -1
      if (currentIndex <= 0) {
        return;
      }

      var nextIndex = currentIndex - 1;

      // If none are highlighted, highlight the first
      if ($highlighted.length === 0) {
        nextIndex = 0;
      }

      var $next = $options.eq(nextIndex);

      $next.trigger('mouseenter');

      var currentOffset = self.$results.offset().top;
      var nextTop = $next.offset().top;
      var nextOffset = self.$results.scrollTop() + (nextTop - currentOffset);

      if (nextIndex === 0) {
        self.$results.scrollTop(0);
      } else if (nextTop - currentOffset < 0) {
        self.$results.scrollTop(nextOffset);
      }
    });

    container.on('results:next', function () {
      var $highlighted = self.getHighlightedResults();

      var $options = self.$results.find('[aria-selected]');

      var currentIndex = $options.index($highlighted);

      var nextIndex = currentIndex + 1;

      // If we are at the last option, stay there
      if (nextIndex >= $options.length) {
        return;
      }

      var $next = $options.eq(nextIndex);

      $next.trigger('mouseenter');

      var currentOffset = self.$results.offset().top +
        self.$results.outerHeight(false);
      var nextBottom = $next.offset().top + $next.outerHeight(false);
      var nextOffset = self.$results.scrollTop() + nextBottom - currentOffset;

      if (nextIndex === 0) {
        self.$results.scrollTop(0);
      } else if (nextBottom > currentOffset) {
        self.$results.scrollTop(nextOffset);
      }
    });

    container.on('results:focus', function (params) {
      params.element.addClass('select2-results__option--highlighted');
    });

    container.on('results:message', function (params) {
      self.displayMessage(params);
    });

    if ($.fn.mousewheel) {
      this.$results.on('mousewheel', function (e) {
        var top = self.$results.scrollTop();

        var bottom = self.$results.get(0).scrollHeight - top + e.deltaY;

        var isAtTop = e.deltaY > 0 && top - e.deltaY <= 0;
        var isAtBottom = e.deltaY < 0 && bottom <= self.$results.height();

        if (isAtTop) {
          self.$results.scrollTop(0);

          e.preventDefault();
          e.stopPropagation();
        } else if (isAtBottom) {
          self.$results.scrollTop(
            self.$results.get(0).scrollHeight - self.$results.height()
          );

          e.preventDefault();
          e.stopPropagation();
        }
      });
    }

    this.$results.on('mouseup', '.select2-results__option[aria-selected]',
      function (evt) {
      var $this = $(this);

      var data = Utils.GetData(this, 'data');

      if ($this.attr('aria-selected') === 'true') {
        if (self.options.get('multiple')) {
          self.trigger('unselect', {
            originalEvent: evt,
            data: data
          });
        } else {
          self.trigger('close', {});
        }

        return;
      }

      self.trigger('select', {
        originalEvent: evt,
        data: data
      });
    });

    this.$results.on('mouseenter', '.select2-results__option[aria-selected]',
      function (evt) {
      var data = Utils.GetData(this, 'data');

      self.getHighlightedResults()
          .removeClass('select2-results__option--highlighted');

      self.trigger('results:focus', {
        data: data,
        element: $(this)
      });
    });
  };

  Results.prototype.getHighlightedResults = function () {
    var $highlighted = this.$results
    .find('.select2-results__option--highlighted');

    return $highlighted;
  };

  Results.prototype.destroy = function () {
    this.$results.remove();
  };

  Results.prototype.ensureHighlightVisible = function () {
    var $highlighted = this.getHighlightedResults();

    if ($highlighted.length === 0) {
      return;
    }

    var $options = this.$results.find('[aria-selected]');

    var currentIndex = $options.index($highlighted);

    var currentOffset = this.$results.offset().top;
    var nextTop = $highlighted.offset().top;
    var nextOffset = this.$results.scrollTop() + (nextTop - currentOffset);

    var offsetDelta = nextTop - currentOffset;
    nextOffset -= $highlighted.outerHeight(false) * 2;

    if (currentIndex <= 2) {
      this.$results.scrollTop(0);
    } else if (offsetDelta > this.$results.outerHeight() || offsetDelta < 0) {
      this.$results.scrollTop(nextOffset);
    }
  };

  Results.prototype.template = function (result, container) {
    var template = this.options.get('templateResult');
    var escapeMarkup = this.options.get('escapeMarkup');

    var content = template(result, container);

    if (content == null) {
      container.style.display = 'none';
    } else if (typeof content === 'string') {
      container.innerHTML = escapeMarkup(content);
    } else {
      $(container).append(content);
    }
  };

  return Results;
});

S2.define('select2/keys',[

], function () {
  var KEYS = {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    ESC: 27,
    SPACE: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    DELETE: 46
  };

  return KEYS;
});

S2.define('select2/selection/base',[
  'jquery',
  '../utils',
  '../keys'
], function ($, Utils, KEYS) {
  function BaseSelection ($element, options) {
    this.$element = $element;
    this.options = options;

    BaseSelection.__super__.constructor.call(this);
  }

  Utils.Extend(BaseSelection, Utils.Observable);

  BaseSelection.prototype.render = function () {
    var $selection = $(
      '<span class="select2-selection" role="combobox" ' +
      ' aria-haspopup="true" aria-expanded="false">' +
      '</span>'
    );

    this._tabindex = 0;

    if (Utils.GetData(this.$element[0], 'old-tabindex') != null) {
      this._tabindex = Utils.GetData(this.$element[0], 'old-tabindex');
    } else if (this.$element.attr('tabindex') != null) {
      this._tabindex = this.$element.attr('tabindex');
    }

    $selection.attr('title', this.$element.attr('title'));
    $selection.attr('tabindex', this._tabindex);
    $selection.attr('aria-disabled', 'false');

    this.$selection = $selection;

    return $selection;
  };

  BaseSelection.prototype.bind = function (container, $container) {
    var self = this;

    var resultsId = container.id + '-results';

    this.container = container;

    this.$selection.on('focus', function (evt) {
      self.trigger('focus', evt);
    });

    this.$selection.on('blur', function (evt) {
      self._handleBlur(evt);
    });

    this.$selection.on('keydown', function (evt) {
      self.trigger('keypress', evt);

      if (evt.which === KEYS.SPACE) {
        evt.preventDefault();
      }
    });

    container.on('results:focus', function (params) {
      self.$selection.attr('aria-activedescendant', params.data._resultId);
    });

    container.on('selection:update', function (params) {
      self.update(params.data);
    });

    container.on('open', function () {
      // When the dropdown is open, aria-expanded="true"
      self.$selection.attr('aria-expanded', 'true');
      self.$selection.attr('aria-owns', resultsId);

      self._attachCloseHandler(container);
    });

    container.on('close', function () {
      // When the dropdown is closed, aria-expanded="false"
      self.$selection.attr('aria-expanded', 'false');
      self.$selection.removeAttr('aria-activedescendant');
      self.$selection.removeAttr('aria-owns');

      self.$selection.trigger('focus');

      self._detachCloseHandler(container);
    });

    container.on('enable', function () {
      self.$selection.attr('tabindex', self._tabindex);
      self.$selection.attr('aria-disabled', 'false');
    });

    container.on('disable', function () {
      self.$selection.attr('tabindex', '-1');
      self.$selection.attr('aria-disabled', 'true');
    });
  };

  BaseSelection.prototype._handleBlur = function (evt) {
    var self = this;

    // This needs to be delayed as the active element is the body when the tab
    // key is pressed, possibly along with others.
    window.setTimeout(function () {
      // Don't trigger `blur` if the focus is still in the selection
      if (
        (document.activeElement == self.$selection[0]) ||
        ($.contains(self.$selection[0], document.activeElement))
      ) {
        return;
      }

      self.trigger('blur', evt);
    }, 1);
  };

  BaseSelection.prototype._attachCloseHandler = function (container) {

    $(document.body).on('mousedown.select2.' + container.id, function (e) {
      var $target = $(e.target);

      var $select = $target.closest('.select2');

      var $all = $('.select2.select2-container--open');

      $all.each(function () {
        if (this == $select[0]) {
          return;
        }

        var $element = Utils.GetData(this, 'element');

        $element.select2('close');
      });
    });
  };

  BaseSelection.prototype._detachCloseHandler = function (container) {
    $(document.body).off('mousedown.select2.' + container.id);
  };

  BaseSelection.prototype.position = function ($selection, $container) {
    var $selectionContainer = $container.find('.selection');
    $selectionContainer.append($selection);
  };

  BaseSelection.prototype.destroy = function () {
    this._detachCloseHandler(this.container);
  };

  BaseSelection.prototype.update = function (data) {
    throw new Error('The `update` method must be defined in child classes.');
  };

  /**
   * Helper method to abstract the "enabled" (not "disabled") state of this
   * object.
   *
   * @return {true} if the instance is not disabled.
   * @return {false} if the instance is disabled.
   */
  BaseSelection.prototype.isEnabled = function () {
    return !this.isDisabled();
  };

  /**
   * Helper method to abstract the "disabled" state of this object.
   *
   * @return {true} if the disabled option is true.
   * @return {false} if the disabled option is false.
   */
  BaseSelection.prototype.isDisabled = function () {
    return this.options.get('disabled');
  };

  return BaseSelection;
});

S2.define('select2/selection/single',[
  'jquery',
  './base',
  '../utils',
  '../keys'
], function ($, BaseSelection, Utils, KEYS) {
  function SingleSelection () {
    SingleSelection.__super__.constructor.apply(this, arguments);
  }

  Utils.Extend(SingleSelection, BaseSelection);

  SingleSelection.prototype.render = function () {
    var $selection = SingleSelection.__super__.render.call(this);

    $selection.addClass('select2-selection--single');

    $selection.html(
      '<span class="select2-selection__rendered"></span>' +
      '<span class="select2-selection__arrow" role="presentation">' +
        '<b role="presentation"></b>' +
      '</span>'
    );

    return $selection;
  };

  SingleSelection.prototype.bind = function (container, $container) {
    var self = this;

    SingleSelection.__super__.bind.apply(this, arguments);

    var id = container.id + '-container';

    this.$selection.find('.select2-selection__rendered')
      .attr('id', id)
      .attr('role', 'textbox')
      .attr('aria-readonly', 'true');
    this.$selection.attr('aria-labelledby', id);

    this.$selection.on('mousedown', function (evt) {
      // Only respond to left clicks
      if (evt.which !== 1) {
        return;
      }

      self.trigger('toggle', {
        originalEvent: evt
      });
    });

    this.$selection.on('focus', function (evt) {
      // User focuses on the container
    });

    this.$selection.on('blur', function (evt) {
      // User exits the container
    });

    container.on('focus', function (evt) {
      if (!container.isOpen()) {
        self.$selection.trigger('focus');
      }
    });
  };

  SingleSelection.prototype.clear = function () {
    var $rendered = this.$selection.find('.select2-selection__rendered');
    $rendered.empty();
    $rendered.removeAttr('title'); // clear tooltip on empty
  };

  SingleSelection.prototype.display = function (data, container) {
    var template = this.options.get('templateSelection');
    var escapeMarkup = this.options.get('escapeMarkup');

    return escapeMarkup(template(data, container));
  };

  SingleSelection.prototype.selectionContainer = function () {
    return $('<span></span>');
  };

  SingleSelection.prototype.update = function (data) {
    if (data.length === 0) {
      this.clear();
      return;
    }

    var selection = data[0];

    var $rendered = this.$selection.find('.select2-selection__rendered');
    var formatted = this.display(selection, $rendered);

    $rendered.empty().append(formatted);

    var title = selection.title || selection.text;

    if (title) {
      $rendered.attr('title', title);
    } else {
      $rendered.removeAttr('title');
    }
  };

  return SingleSelection;
});

S2.define('select2/selection/multiple',[
  'jquery',
  './base',
  '../utils'
], function ($, BaseSelection, Utils) {
  function MultipleSelection ($element, options) {
    MultipleSelection.__super__.constructor.apply(this, arguments);
  }

  Utils.Extend(MultipleSelection, BaseSelection);

  MultipleSelection.prototype.render = function () {
    var $selection = MultipleSelection.__super__.render.call(this);

    $selection.addClass('select2-selection--multiple');

    $selection.html(
      '<ul class="select2-selection__rendered"></ul>'
    );

    return $selection;
  };

  MultipleSelection.prototype.bind = function (container, $container) {
    var self = this;

    MultipleSelection.__super__.bind.apply(this, arguments);

    this.$selection.on('click', function (evt) {
      self.trigger('toggle', {
        originalEvent: evt
      });
    });

    this.$selection.on(
      'click',
      '.select2-selection__choice__remove',
      function (evt) {
        // Ignore the event if it is disabled
        if (self.isDisabled()) {
          return;
        }

        var $remove = $(this);
        var $selection = $remove.parent();

        var data = Utils.GetData($selection[0], 'data');

        self.trigger('unselect', {
          originalEvent: evt,
          data: data
        });
      }
    );
  };

  MultipleSelection.prototype.clear = function () {
    var $rendered = this.$selection.find('.select2-selection__rendered');
    $rendered.empty();
    $rendered.removeAttr('title');
  };

  MultipleSelection.prototype.display = function (data, container) {
    var template = this.options.get('templateSelection');
    var escapeMarkup = this.options.get('escapeMarkup');

    return escapeMarkup(template(data, container));
  };

  MultipleSelection.prototype.selectionContainer = function () {
    var $container = $(
      '<li class="select2-selection__choice">' +
        '<span class="select2-selection__choice__remove" role="presentation">' +
          '&times;' +
        '</span>' +
      '</li>'
    );

    return $container;
  };

  MultipleSelection.prototype.update = function (data) {
    this.clear();

    if (data.length === 0) {
      return;
    }

    var $selections = [];

    for (var d = 0; d < data.length; d++) {
      var selection = data[d];

      var $selection = this.selectionContainer();
      var formatted = this.display(selection, $selection);

      $selection.append(formatted);

      var title = selection.title || selection.text;

      if (title) {
        $selection.attr('title', title);
      }

      Utils.StoreData($selection[0], 'data', selection);

      $selections.push($selection);
    }

    var $rendered = this.$selection.find('.select2-selection__rendered');

    Utils.appendMany($rendered, $selections);
  };

  return MultipleSelection;
});

S2.define('select2/selection/placeholder',[
  '../utils'
], function (Utils) {
  function Placeholder (decorated, $element, options) {
    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

    decorated.call(this, $element, options);
  }

  Placeholder.prototype.normalizePlaceholder = function (_, placeholder) {
    if (typeof placeholder === 'string') {
      placeholder = {
        id: '',
        text: placeholder
      };
    }

    return placeholder;
  };

  Placeholder.prototype.createPlaceholder = function (decorated, placeholder) {
    var $placeholder = this.selectionContainer();

    $placeholder.html(this.display(placeholder));
    $placeholder.addClass('select2-selection__placeholder')
                .removeClass('select2-selection__choice');

    return $placeholder;
  };

  Placeholder.prototype.update = function (decorated, data) {
    var singlePlaceholder = (
      data.length == 1 && data[0].id != this.placeholder.id
    );
    var multipleSelections = data.length > 1;

    if (multipleSelections || singlePlaceholder) {
      return decorated.call(this, data);
    }

    this.clear();

    var $placeholder = this.createPlaceholder(this.placeholder);

    this.$selection.find('.select2-selection__rendered').append($placeholder);
  };

  return Placeholder;
});

S2.define('select2/selection/allowClear',[
  'jquery',
  '../keys',
  '../utils'
], function ($, KEYS, Utils) {
  function AllowClear () { }

  AllowClear.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    if (this.placeholder == null) {
      if (this.options.get('debug') && window.console && console.error) {
        console.error(
          'Select2: The `allowClear` option should be used in combination ' +
          'with the `placeholder` option.'
        );
      }
    }

    this.$selection.on('mousedown', '.select2-selection__clear',
      function (evt) {
        self._handleClear(evt);
    });

    container.on('keypress', function (evt) {
      self._handleKeyboardClear(evt, container);
    });
  };

  AllowClear.prototype._handleClear = function (_, evt) {
    // Ignore the event if it is disabled
    if (this.isDisabled()) {
      return;
    }

    var $clear = this.$selection.find('.select2-selection__clear');

    // Ignore the event if nothing has been selected
    if ($clear.length === 0) {
      return;
    }

    evt.stopPropagation();

    var data = Utils.GetData($clear[0], 'data');

    var previousVal = this.$element.val();
    this.$element.val(this.placeholder.id);

    var unselectData = {
      data: data
    };
    this.trigger('clear', unselectData);
    if (unselectData.prevented) {
      this.$element.val(previousVal);
      return;
    }

    for (var d = 0; d < data.length; d++) {
      unselectData = {
        data: data[d]
      };

      // Trigger the `unselect` event, so people can prevent it from being
      // cleared.
      this.trigger('unselect', unselectData);

      // If the event was prevented, don't clear it out.
      if (unselectData.prevented) {
        this.$element.val(previousVal);
        return;
      }
    }

    this.$element.trigger('input').trigger('change');

    this.trigger('toggle', {});
  };

  AllowClear.prototype._handleKeyboardClear = function (_, evt, container) {
    if (container.isOpen()) {
      return;
    }

    if (evt.which == KEYS.DELETE || evt.which == KEYS.BACKSPACE) {
      this._handleClear(evt);
    }
  };

  AllowClear.prototype.update = function (decorated, data) {
    decorated.call(this, data);

    if (this.$selection.find('.select2-selection__placeholder').length > 0 ||
        data.length === 0) {
      return;
    }

    var removeAll = this.options.get('translations').get('removeAllItems');

    var $remove = $(
      '<span class="select2-selection__clear" title="' + removeAll() +'">' +
        '&times;' +
      '</span>'
    );
    Utils.StoreData($remove[0], 'data', data);

    this.$selection.find('.select2-selection__rendered').prepend($remove);
  };

  return AllowClear;
});

S2.define('select2/selection/search',[
  'jquery',
  '../utils',
  '../keys'
], function ($, Utils, KEYS) {
  function Search (decorated, $element, options) {
    decorated.call(this, $element, options);
  }

  Search.prototype.render = function (decorated) {
    var $search = $(
      '<li class="select2-search select2-search--inline">' +
        '<input class="select2-search__field" type="search" tabindex="-1"' +
        ' autocomplete="off" autocorrect="off" autocapitalize="none"' +
        ' spellcheck="false" role="searchbox" aria-autocomplete="list" />' +
      '</li>'
    );

    this.$searchContainer = $search;
    this.$search = $search.find('input');

    var $rendered = decorated.call(this);

    this._transferTabIndex();

    return $rendered;
  };

  Search.prototype.bind = function (decorated, container, $container) {
    var self = this;

    var resultsId = container.id + '-results';

    decorated.call(this, container, $container);

    container.on('open', function () {
      self.$search.attr('aria-controls', resultsId);
      self.$search.trigger('focus');
    });

    container.on('close', function () {
      self.$search.val('');
      self.$search.removeAttr('aria-controls');
      self.$search.removeAttr('aria-activedescendant');
      self.$search.trigger('focus');
    });

    container.on('enable', function () {
      self.$search.prop('disabled', false);

      self._transferTabIndex();
    });

    container.on('disable', function () {
      self.$search.prop('disabled', true);
    });

    container.on('focus', function (evt) {
      self.$search.trigger('focus');
    });

    container.on('results:focus', function (params) {
      if (params.data._resultId) {
        self.$search.attr('aria-activedescendant', params.data._resultId);
      } else {
        self.$search.removeAttr('aria-activedescendant');
      }
    });

    this.$selection.on('focusin', '.select2-search--inline', function (evt) {
      self.trigger('focus', evt);
    });

    this.$selection.on('focusout', '.select2-search--inline', function (evt) {
      self._handleBlur(evt);
    });

    this.$selection.on('keydown', '.select2-search--inline', function (evt) {
      evt.stopPropagation();

      self.trigger('keypress', evt);

      self._keyUpPrevented = evt.isDefaultPrevented();

      var key = evt.which;

      if (key === KEYS.BACKSPACE && self.$search.val() === '') {
        var $previousChoice = self.$searchContainer
          .prev('.select2-selection__choice');

        if ($previousChoice.length > 0) {
          var item = Utils.GetData($previousChoice[0], 'data');

          self.searchRemoveChoice(item);

          evt.preventDefault();
        }
      }
    });

    this.$selection.on('click', '.select2-search--inline', function (evt) {
      if (self.$search.val()) {
        evt.stopPropagation();
      }
    });

    // Try to detect the IE version should the `documentMode` property that
    // is stored on the document. This is only implemented in IE and is
    // slightly cleaner than doing a user agent check.
    // This property is not available in Edge, but Edge also doesn't have
    // this bug.
    var msie = document.documentMode;
    var disableInputEvents = msie && msie <= 11;

    // Workaround for browsers which do not support the `input` event
    // This will prevent double-triggering of events for browsers which support
    // both the `keyup` and `input` events.
    this.$selection.on(
      'input.searchcheck',
      '.select2-search--inline',
      function (evt) {
        // IE will trigger the `input` event when a placeholder is used on a
        // search box. To get around this issue, we are forced to ignore all
        // `input` events in IE and keep using `keyup`.
        if (disableInputEvents) {
          self.$selection.off('input.search input.searchcheck');
          return;
        }

        // Unbind the duplicated `keyup` event
        self.$selection.off('keyup.search');
      }
    );

    this.$selection.on(
      'keyup.search input.search',
      '.select2-search--inline',
      function (evt) {
        // IE will trigger the `input` event when a placeholder is used on a
        // search box. To get around this issue, we are forced to ignore all
        // `input` events in IE and keep using `keyup`.
        if (disableInputEvents && evt.type === 'input') {
          self.$selection.off('input.search input.searchcheck');
          return;
        }

        var key = evt.which;

        // We can freely ignore events from modifier keys
        if (key == KEYS.SHIFT || key == KEYS.CTRL || key == KEYS.ALT) {
          return;
        }

        // Tabbing will be handled during the `keydown` phase
        if (key == KEYS.TAB) {
          return;
        }

        self.handleSearch(evt);
      }
    );
  };

  /**
   * This method will transfer the tabindex attribute from the rendered
   * selection to the search box. This allows for the search box to be used as
   * the primary focus instead of the selection container.
   *
   * @private
   */
  Search.prototype._transferTabIndex = function (decorated) {
    this.$search.attr('tabindex', this.$selection.attr('tabindex'));
    this.$selection.attr('tabindex', '-1');
  };

  Search.prototype.createPlaceholder = function (decorated, placeholder) {
    this.$search.attr('placeholder', placeholder.text);
  };

  Search.prototype.update = function (decorated, data) {
    var searchHadFocus = this.$search[0] == document.activeElement;

    this.$search.attr('placeholder', '');

    decorated.call(this, data);

    this.$selection.find('.select2-selection__rendered')
                   .append(this.$searchContainer);

    this.resizeSearch();
    if (searchHadFocus) {
      this.$search.trigger('focus');
    }
  };

  Search.prototype.handleSearch = function () {
    this.resizeSearch();

    if (!this._keyUpPrevented) {
      var input = this.$search.val();

      this.trigger('query', {
        term: input
      });
    }

    this._keyUpPrevented = false;
  };

  Search.prototype.searchRemoveChoice = function (decorated, item) {
    this.trigger('unselect', {
      data: item
    });

    this.$search.val(item.text);
    this.handleSearch();
  };

  Search.prototype.resizeSearch = function () {
    this.$search.css('width', '25px');

    var width = '';

    if (this.$search.attr('placeholder') !== '') {
      width = this.$selection.find('.select2-selection__rendered').width();
    } else {
      var minimumWidth = this.$search.val().length + 1;

      width = (minimumWidth * 0.75) + 'em';
    }

    this.$search.css('width', width);
  };

  return Search;
});

S2.define('select2/selection/eventRelay',[
  'jquery'
], function ($) {
  function EventRelay () { }

  EventRelay.prototype.bind = function (decorated, container, $container) {
    var self = this;
    var relayEvents = [
      'open', 'opening',
      'close', 'closing',
      'select', 'selecting',
      'unselect', 'unselecting',
      'clear', 'clearing'
    ];

    var preventableEvents = [
      'opening', 'closing', 'selecting', 'unselecting', 'clearing'
    ];

    decorated.call(this, container, $container);

    container.on('*', function (name, params) {
      // Ignore events that should not be relayed
      if ($.inArray(name, relayEvents) === -1) {
        return;
      }

      // The parameters should always be an object
      params = params || {};

      // Generate the jQuery event for the Select2 event
      var evt = $.Event('select2:' + name, {
        params: params
      });

      self.$element.trigger(evt);

      // Only handle preventable events if it was one
      if ($.inArray(name, preventableEvents) === -1) {
        return;
      }

      params.prevented = evt.isDefaultPrevented();
    });
  };

  return EventRelay;
});

S2.define('select2/translation',[
  'jquery',
  'require'
], function ($, require) {
  function Translation (dict) {
    this.dict = dict || {};
  }

  Translation.prototype.all = function () {
    return this.dict;
  };

  Translation.prototype.get = function (key) {
    return this.dict[key];
  };

  Translation.prototype.extend = function (translation) {
    this.dict = $.extend({}, translation.all(), this.dict);
  };

  // Static functions

  Translation._cache = {};

  Translation.loadPath = function (path) {
    if (!(path in Translation._cache)) {
      var translations = require(path);

      Translation._cache[path] = translations;
    }

    return new Translation(Translation._cache[path]);
  };

  return Translation;
});

S2.define('select2/diacritics',[

], function () {
  var diacritics = {
    '\u24B6': 'A',
    '\uFF21': 'A',
    '\u00C0': 'A',
    '\u00C1': 'A',
    '\u00C2': 'A',
    '\u1EA6': 'A',
    '\u1EA4': 'A',
    '\u1EAA': 'A',
    '\u1EA8': 'A',
    '\u00C3': 'A',
    '\u0100': 'A',
    '\u0102': 'A',
    '\u1EB0': 'A',
    '\u1EAE': 'A',
    '\u1EB4': 'A',
    '\u1EB2': 'A',
    '\u0226': 'A',
    '\u01E0': 'A',
    '\u00C4': 'A',
    '\u01DE': 'A',
    '\u1EA2': 'A',
    '\u00C5': 'A',
    '\u01FA': 'A',
    '\u01CD': 'A',
    '\u0200': 'A',
    '\u0202': 'A',
    '\u1EA0': 'A',
    '\u1EAC': 'A',
    '\u1EB6': 'A',
    '\u1E00': 'A',
    '\u0104': 'A',
    '\u023A': 'A',
    '\u2C6F': 'A',
    '\uA732': 'AA',
    '\u00C6': 'AE',
    '\u01FC': 'AE',
    '\u01E2': 'AE',
    '\uA734': 'AO',
    '\uA736': 'AU',
    '\uA738': 'AV',
    '\uA73A': 'AV',
    '\uA73C': 'AY',
    '\u24B7': 'B',
    '\uFF22': 'B',
    '\u1E02': 'B',
    '\u1E04': 'B',
    '\u1E06': 'B',
    '\u0243': 'B',
    '\u0182': 'B',
    '\u0181': 'B',
    '\u24B8': 'C',
    '\uFF23': 'C',
    '\u0106': 'C',
    '\u0108': 'C',
    '\u010A': 'C',
    '\u010C': 'C',
    '\u00C7': 'C',
    '\u1E08': 'C',
    '\u0187': 'C',
    '\u023B': 'C',
    '\uA73E': 'C',
    '\u24B9': 'D',
    '\uFF24': 'D',
    '\u1E0A': 'D',
    '\u010E': 'D',
    '\u1E0C': 'D',
    '\u1E10': 'D',
    '\u1E12': 'D',
    '\u1E0E': 'D',
    '\u0110': 'D',
    '\u018B': 'D',
    '\u018A': 'D',
    '\u0189': 'D',
    '\uA779': 'D',
    '\u01F1': 'DZ',
    '\u01C4': 'DZ',
    '\u01F2': 'Dz',
    '\u01C5': 'Dz',
    '\u24BA': 'E',
    '\uFF25': 'E',
    '\u00C8': 'E',
    '\u00C9': 'E',
    '\u00CA': 'E',
    '\u1EC0': 'E',
    '\u1EBE': 'E',
    '\u1EC4': 'E',
    '\u1EC2': 'E',
    '\u1EBC': 'E',
    '\u0112': 'E',
    '\u1E14': 'E',
    '\u1E16': 'E',
    '\u0114': 'E',
    '\u0116': 'E',
    '\u00CB': 'E',
    '\u1EBA': 'E',
    '\u011A': 'E',
    '\u0204': 'E',
    '\u0206': 'E',
    '\u1EB8': 'E',
    '\u1EC6': 'E',
    '\u0228': 'E',
    '\u1E1C': 'E',
    '\u0118': 'E',
    '\u1E18': 'E',
    '\u1E1A': 'E',
    '\u0190': 'E',
    '\u018E': 'E',
    '\u24BB': 'F',
    '\uFF26': 'F',
    '\u1E1E': 'F',
    '\u0191': 'F',
    '\uA77B': 'F',
    '\u24BC': 'G',
    '\uFF27': 'G',
    '\u01F4': 'G',
    '\u011C': 'G',
    '\u1E20': 'G',
    '\u011E': 'G',
    '\u0120': 'G',
    '\u01E6': 'G',
    '\u0122': 'G',
    '\u01E4': 'G',
    '\u0193': 'G',
    '\uA7A0': 'G',
    '\uA77D': 'G',
    '\uA77E': 'G',
    '\u24BD': 'H',
    '\uFF28': 'H',
    '\u0124': 'H',
    '\u1E22': 'H',
    '\u1E26': 'H',
    '\u021E': 'H',
    '\u1E24': 'H',
    '\u1E28': 'H',
    '\u1E2A': 'H',
    '\u0126': 'H',
    '\u2C67': 'H',
    '\u2C75': 'H',
    '\uA78D': 'H',
    '\u24BE': 'I',
    '\uFF29': 'I',
    '\u00CC': 'I',
    '\u00CD': 'I',
    '\u00CE': 'I',
    '\u0128': 'I',
    '\u012A': 'I',
    '\u012C': 'I',
    '\u0130': 'I',
    '\u00CF': 'I',
    '\u1E2E': 'I',
    '\u1EC8': 'I',
    '\u01CF': 'I',
    '\u0208': 'I',
    '\u020A': 'I',
    '\u1ECA': 'I',
    '\u012E': 'I',
    '\u1E2C': 'I',
    '\u0197': 'I',
    '\u24BF': 'J',
    '\uFF2A': 'J',
    '\u0134': 'J',
    '\u0248': 'J',
    '\u24C0': 'K',
    '\uFF2B': 'K',
    '\u1E30': 'K',
    '\u01E8': 'K',
    '\u1E32': 'K',
    '\u0136': 'K',
    '\u1E34': 'K',
    '\u0198': 'K',
    '\u2C69': 'K',
    '\uA740': 'K',
    '\uA742': 'K',
    '\uA744': 'K',
    '\uA7A2': 'K',
    '\u24C1': 'L',
    '\uFF2C': 'L',
    '\u013F': 'L',
    '\u0139': 'L',
    '\u013D': 'L',
    '\u1E36': 'L',
    '\u1E38': 'L',
    '\u013B': 'L',
    '\u1E3C': 'L',
    '\u1E3A': 'L',
    '\u0141': 'L',
    '\u023D': 'L',
    '\u2C62': 'L',
    '\u2C60': 'L',
    '\uA748': 'L',
    '\uA746': 'L',
    '\uA780': 'L',
    '\u01C7': 'LJ',
    '\u01C8': 'Lj',
    '\u24C2': 'M',
    '\uFF2D': 'M',
    '\u1E3E': 'M',
    '\u1E40': 'M',
    '\u1E42': 'M',
    '\u2C6E': 'M',
    '\u019C': 'M',
    '\u24C3': 'N',
    '\uFF2E': 'N',
    '\u01F8': 'N',
    '\u0143': 'N',
    '\u00D1': 'N',
    '\u1E44': 'N',
    '\u0147': 'N',
    '\u1E46': 'N',
    '\u0145': 'N',
    '\u1E4A': 'N',
    '\u1E48': 'N',
    '\u0220': 'N',
    '\u019D': 'N',
    '\uA790': 'N',
    '\uA7A4': 'N',
    '\u01CA': 'NJ',
    '\u01CB': 'Nj',
    '\u24C4': 'O',
    '\uFF2F': 'O',
    '\u00D2': 'O',
    '\u00D3': 'O',
    '\u00D4': 'O',
    '\u1ED2': 'O',
    '\u1ED0': 'O',
    '\u1ED6': 'O',
    '\u1ED4': 'O',
    '\u00D5': 'O',
    '\u1E4C': 'O',
    '\u022C': 'O',
    '\u1E4E': 'O',
    '\u014C': 'O',
    '\u1E50': 'O',
    '\u1E52': 'O',
    '\u014E': 'O',
    '\u022E': 'O',
    '\u0230': 'O',
    '\u00D6': 'O',
    '\u022A': 'O',
    '\u1ECE': 'O',
    '\u0150': 'O',
    '\u01D1': 'O',
    '\u020C': 'O',
    '\u020E': 'O',
    '\u01A0': 'O',
    '\u1EDC': 'O',
    '\u1EDA': 'O',
    '\u1EE0': 'O',
    '\u1EDE': 'O',
    '\u1EE2': 'O',
    '\u1ECC': 'O',
    '\u1ED8': 'O',
    '\u01EA': 'O',
    '\u01EC': 'O',
    '\u00D8': 'O',
    '\u01FE': 'O',
    '\u0186': 'O',
    '\u019F': 'O',
    '\uA74A': 'O',
    '\uA74C': 'O',
    '\u0152': 'OE',
    '\u01A2': 'OI',
    '\uA74E': 'OO',
    '\u0222': 'OU',
    '\u24C5': 'P',
    '\uFF30': 'P',
    '\u1E54': 'P',
    '\u1E56': 'P',
    '\u01A4': 'P',
    '\u2C63': 'P',
    '\uA750': 'P',
    '\uA752': 'P',
    '\uA754': 'P',
    '\u24C6': 'Q',
    '\uFF31': 'Q',
    '\uA756': 'Q',
    '\uA758': 'Q',
    '\u024A': 'Q',
    '\u24C7': 'R',
    '\uFF32': 'R',
    '\u0154': 'R',
    '\u1E58': 'R',
    '\u0158': 'R',
    '\u0210': 'R',
    '\u0212': 'R',
    '\u1E5A': 'R',
    '\u1E5C': 'R',
    '\u0156': 'R',
    '\u1E5E': 'R',
    '\u024C': 'R',
    '\u2C64': 'R',
    '\uA75A': 'R',
    '\uA7A6': 'R',
    '\uA782': 'R',
    '\u24C8': 'S',
    '\uFF33': 'S',
    '\u1E9E': 'S',
    '\u015A': 'S',
    '\u1E64': 'S',
    '\u015C': 'S',
    '\u1E60': 'S',
    '\u0160': 'S',
    '\u1E66': 'S',
    '\u1E62': 'S',
    '\u1E68': 'S',
    '\u0218': 'S',
    '\u015E': 'S',
    '\u2C7E': 'S',
    '\uA7A8': 'S',
    '\uA784': 'S',
    '\u24C9': 'T',
    '\uFF34': 'T',
    '\u1E6A': 'T',
    '\u0164': 'T',
    '\u1E6C': 'T',
    '\u021A': 'T',
    '\u0162': 'T',
    '\u1E70': 'T',
    '\u1E6E': 'T',
    '\u0166': 'T',
    '\u01AC': 'T',
    '\u01AE': 'T',
    '\u023E': 'T',
    '\uA786': 'T',
    '\uA728': 'TZ',
    '\u24CA': 'U',
    '\uFF35': 'U',
    '\u00D9': 'U',
    '\u00DA': 'U',
    '\u00DB': 'U',
    '\u0168': 'U',
    '\u1E78': 'U',
    '\u016A': 'U',
    '\u1E7A': 'U',
    '\u016C': 'U',
    '\u00DC': 'U',
    '\u01DB': 'U',
    '\u01D7': 'U',
    '\u01D5': 'U',
    '\u01D9': 'U',
    '\u1EE6': 'U',
    '\u016E': 'U',
    '\u0170': 'U',
    '\u01D3': 'U',
    '\u0214': 'U',
    '\u0216': 'U',
    '\u01AF': 'U',
    '\u1EEA': 'U',
    '\u1EE8': 'U',
    '\u1EEE': 'U',
    '\u1EEC': 'U',
    '\u1EF0': 'U',
    '\u1EE4': 'U',
    '\u1E72': 'U',
    '\u0172': 'U',
    '\u1E76': 'U',
    '\u1E74': 'U',
    '\u0244': 'U',
    '\u24CB': 'V',
    '\uFF36': 'V',
    '\u1E7C': 'V',
    '\u1E7E': 'V',
    '\u01B2': 'V',
    '\uA75E': 'V',
    '\u0245': 'V',
    '\uA760': 'VY',
    '\u24CC': 'W',
    '\uFF37': 'W',
    '\u1E80': 'W',
    '\u1E82': 'W',
    '\u0174': 'W',
    '\u1E86': 'W',
    '\u1E84': 'W',
    '\u1E88': 'W',
    '\u2C72': 'W',
    '\u24CD': 'X',
    '\uFF38': 'X',
    '\u1E8A': 'X',
    '\u1E8C': 'X',
    '\u24CE': 'Y',
    '\uFF39': 'Y',
    '\u1EF2': 'Y',
    '\u00DD': 'Y',
    '\u0176': 'Y',
    '\u1EF8': 'Y',
    '\u0232': 'Y',
    '\u1E8E': 'Y',
    '\u0178': 'Y',
    '\u1EF6': 'Y',
    '\u1EF4': 'Y',
    '\u01B3': 'Y',
    '\u024E': 'Y',
    '\u1EFE': 'Y',
    '\u24CF': 'Z',
    '\uFF3A': 'Z',
    '\u0179': 'Z',
    '\u1E90': 'Z',
    '\u017B': 'Z',
    '\u017D': 'Z',
    '\u1E92': 'Z',
    '\u1E94': 'Z',
    '\u01B5': 'Z',
    '\u0224': 'Z',
    '\u2C7F': 'Z',
    '\u2C6B': 'Z',
    '\uA762': 'Z',
    '\u24D0': 'a',
    '\uFF41': 'a',
    '\u1E9A': 'a',
    '\u00E0': 'a',
    '\u00E1': 'a',
    '\u00E2': 'a',
    '\u1EA7': 'a',
    '\u1EA5': 'a',
    '\u1EAB': 'a',
    '\u1EA9': 'a',
    '\u00E3': 'a',
    '\u0101': 'a',
    '\u0103': 'a',
    '\u1EB1': 'a',
    '\u1EAF': 'a',
    '\u1EB5': 'a',
    '\u1EB3': 'a',
    '\u0227': 'a',
    '\u01E1': 'a',
    '\u00E4': 'a',
    '\u01DF': 'a',
    '\u1EA3': 'a',
    '\u00E5': 'a',
    '\u01FB': 'a',
    '\u01CE': 'a',
    '\u0201': 'a',
    '\u0203': 'a',
    '\u1EA1': 'a',
    '\u1EAD': 'a',
    '\u1EB7': 'a',
    '\u1E01': 'a',
    '\u0105': 'a',
    '\u2C65': 'a',
    '\u0250': 'a',
    '\uA733': 'aa',
    '\u00E6': 'ae',
    '\u01FD': 'ae',
    '\u01E3': 'ae',
    '\uA735': 'ao',
    '\uA737': 'au',
    '\uA739': 'av',
    '\uA73B': 'av',
    '\uA73D': 'ay',
    '\u24D1': 'b',
    '\uFF42': 'b',
    '\u1E03': 'b',
    '\u1E05': 'b',
    '\u1E07': 'b',
    '\u0180': 'b',
    '\u0183': 'b',
    '\u0253': 'b',
    '\u24D2': 'c',
    '\uFF43': 'c',
    '\u0107': 'c',
    '\u0109': 'c',
    '\u010B': 'c',
    '\u010D': 'c',
    '\u00E7': 'c',
    '\u1E09': 'c',
    '\u0188': 'c',
    '\u023C': 'c',
    '\uA73F': 'c',
    '\u2184': 'c',
    '\u24D3': 'd',
    '\uFF44': 'd',
    '\u1E0B': 'd',
    '\u010F': 'd',
    '\u1E0D': 'd',
    '\u1E11': 'd',
    '\u1E13': 'd',
    '\u1E0F': 'd',
    '\u0111': 'd',
    '\u018C': 'd',
    '\u0256': 'd',
    '\u0257': 'd',
    '\uA77A': 'd',
    '\u01F3': 'dz',
    '\u01C6': 'dz',
    '\u24D4': 'e',
    '\uFF45': 'e',
    '\u00E8': 'e',
    '\u00E9': 'e',
    '\u00EA': 'e',
    '\u1EC1': 'e',
    '\u1EBF': 'e',
    '\u1EC5': 'e',
    '\u1EC3': 'e',
    '\u1EBD': 'e',
    '\u0113': 'e',
    '\u1E15': 'e',
    '\u1E17': 'e',
    '\u0115': 'e',
    '\u0117': 'e',
    '\u00EB': 'e',
    '\u1EBB': 'e',
    '\u011B': 'e',
    '\u0205': 'e',
    '\u0207': 'e',
    '\u1EB9': 'e',
    '\u1EC7': 'e',
    '\u0229': 'e',
    '\u1E1D': 'e',
    '\u0119': 'e',
    '\u1E19': 'e',
    '\u1E1B': 'e',
    '\u0247': 'e',
    '\u025B': 'e',
    '\u01DD': 'e',
    '\u24D5': 'f',
    '\uFF46': 'f',
    '\u1E1F': 'f',
    '\u0192': 'f',
    '\uA77C': 'f',
    '\u24D6': 'g',
    '\uFF47': 'g',
    '\u01F5': 'g',
    '\u011D': 'g',
    '\u1E21': 'g',
    '\u011F': 'g',
    '\u0121': 'g',
    '\u01E7': 'g',
    '\u0123': 'g',
    '\u01E5': 'g',
    '\u0260': 'g',
    '\uA7A1': 'g',
    '\u1D79': 'g',
    '\uA77F': 'g',
    '\u24D7': 'h',
    '\uFF48': 'h',
    '\u0125': 'h',
    '\u1E23': 'h',
    '\u1E27': 'h',
    '\u021F': 'h',
    '\u1E25': 'h',
    '\u1E29': 'h',
    '\u1E2B': 'h',
    '\u1E96': 'h',
    '\u0127': 'h',
    '\u2C68': 'h',
    '\u2C76': 'h',
    '\u0265': 'h',
    '\u0195': 'hv',
    '\u24D8': 'i',
    '\uFF49': 'i',
    '\u00EC': 'i',
    '\u00ED': 'i',
    '\u00EE': 'i',
    '\u0129': 'i',
    '\u012B': 'i',
    '\u012D': 'i',
    '\u00EF': 'i',
    '\u1E2F': 'i',
    '\u1EC9': 'i',
    '\u01D0': 'i',
    '\u0209': 'i',
    '\u020B': 'i',
    '\u1ECB': 'i',
    '\u012F': 'i',
    '\u1E2D': 'i',
    '\u0268': 'i',
    '\u0131': 'i',
    '\u24D9': 'j',
    '\uFF4A': 'j',
    '\u0135': 'j',
    '\u01F0': 'j',
    '\u0249': 'j',
    '\u24DA': 'k',
    '\uFF4B': 'k',
    '\u1E31': 'k',
    '\u01E9': 'k',
    '\u1E33': 'k',
    '\u0137': 'k',
    '\u1E35': 'k',
    '\u0199': 'k',
    '\u2C6A': 'k',
    '\uA741': 'k',
    '\uA743': 'k',
    '\uA745': 'k',
    '\uA7A3': 'k',
    '\u24DB': 'l',
    '\uFF4C': 'l',
    '\u0140': 'l',
    '\u013A': 'l',
    '\u013E': 'l',
    '\u1E37': 'l',
    '\u1E39': 'l',
    '\u013C': 'l',
    '\u1E3D': 'l',
    '\u1E3B': 'l',
    '\u017F': 'l',
    '\u0142': 'l',
    '\u019A': 'l',
    '\u026B': 'l',
    '\u2C61': 'l',
    '\uA749': 'l',
    '\uA781': 'l',
    '\uA747': 'l',
    '\u01C9': 'lj',
    '\u24DC': 'm',
    '\uFF4D': 'm',
    '\u1E3F': 'm',
    '\u1E41': 'm',
    '\u1E43': 'm',
    '\u0271': 'm',
    '\u026F': 'm',
    '\u24DD': 'n',
    '\uFF4E': 'n',
    '\u01F9': 'n',
    '\u0144': 'n',
    '\u00F1': 'n',
    '\u1E45': 'n',
    '\u0148': 'n',
    '\u1E47': 'n',
    '\u0146': 'n',
    '\u1E4B': 'n',
    '\u1E49': 'n',
    '\u019E': 'n',
    '\u0272': 'n',
    '\u0149': 'n',
    '\uA791': 'n',
    '\uA7A5': 'n',
    '\u01CC': 'nj',
    '\u24DE': 'o',
    '\uFF4F': 'o',
    '\u00F2': 'o',
    '\u00F3': 'o',
    '\u00F4': 'o',
    '\u1ED3': 'o',
    '\u1ED1': 'o',
    '\u1ED7': 'o',
    '\u1ED5': 'o',
    '\u00F5': 'o',
    '\u1E4D': 'o',
    '\u022D': 'o',
    '\u1E4F': 'o',
    '\u014D': 'o',
    '\u1E51': 'o',
    '\u1E53': 'o',
    '\u014F': 'o',
    '\u022F': 'o',
    '\u0231': 'o',
    '\u00F6': 'o',
    '\u022B': 'o',
    '\u1ECF': 'o',
    '\u0151': 'o',
    '\u01D2': 'o',
    '\u020D': 'o',
    '\u020F': 'o',
    '\u01A1': 'o',
    '\u1EDD': 'o',
    '\u1EDB': 'o',
    '\u1EE1': 'o',
    '\u1EDF': 'o',
    '\u1EE3': 'o',
    '\u1ECD': 'o',
    '\u1ED9': 'o',
    '\u01EB': 'o',
    '\u01ED': 'o',
    '\u00F8': 'o',
    '\u01FF': 'o',
    '\u0254': 'o',
    '\uA74B': 'o',
    '\uA74D': 'o',
    '\u0275': 'o',
    '\u0153': 'oe',
    '\u01A3': 'oi',
    '\u0223': 'ou',
    '\uA74F': 'oo',
    '\u24DF': 'p',
    '\uFF50': 'p',
    '\u1E55': 'p',
    '\u1E57': 'p',
    '\u01A5': 'p',
    '\u1D7D': 'p',
    '\uA751': 'p',
    '\uA753': 'p',
    '\uA755': 'p',
    '\u24E0': 'q',
    '\uFF51': 'q',
    '\u024B': 'q',
    '\uA757': 'q',
    '\uA759': 'q',
    '\u24E1': 'r',
    '\uFF52': 'r',
    '\u0155': 'r',
    '\u1E59': 'r',
    '\u0159': 'r',
    '\u0211': 'r',
    '\u0213': 'r',
    '\u1E5B': 'r',
    '\u1E5D': 'r',
    '\u0157': 'r',
    '\u1E5F': 'r',
    '\u024D': 'r',
    '\u027D': 'r',
    '\uA75B': 'r',
    '\uA7A7': 'r',
    '\uA783': 'r',
    '\u24E2': 's',
    '\uFF53': 's',
    '\u00DF': 's',
    '\u015B': 's',
    '\u1E65': 's',
    '\u015D': 's',
    '\u1E61': 's',
    '\u0161': 's',
    '\u1E67': 's',
    '\u1E63': 's',
    '\u1E69': 's',
    '\u0219': 's',
    '\u015F': 's',
    '\u023F': 's',
    '\uA7A9': 's',
    '\uA785': 's',
    '\u1E9B': 's',
    '\u24E3': 't',
    '\uFF54': 't',
    '\u1E6B': 't',
    '\u1E97': 't',
    '\u0165': 't',
    '\u1E6D': 't',
    '\u021B': 't',
    '\u0163': 't',
    '\u1E71': 't',
    '\u1E6F': 't',
    '\u0167': 't',
    '\u01AD': 't',
    '\u0288': 't',
    '\u2C66': 't',
    '\uA787': 't',
    '\uA729': 'tz',
    '\u24E4': 'u',
    '\uFF55': 'u',
    '\u00F9': 'u',
    '\u00FA': 'u',
    '\u00FB': 'u',
    '\u0169': 'u',
    '\u1E79': 'u',
    '\u016B': 'u',
    '\u1E7B': 'u',
    '\u016D': 'u',
    '\u00FC': 'u',
    '\u01DC': 'u',
    '\u01D8': 'u',
    '\u01D6': 'u',
    '\u01DA': 'u',
    '\u1EE7': 'u',
    '\u016F': 'u',
    '\u0171': 'u',
    '\u01D4': 'u',
    '\u0215': 'u',
    '\u0217': 'u',
    '\u01B0': 'u',
    '\u1EEB': 'u',
    '\u1EE9': 'u',
    '\u1EEF': 'u',
    '\u1EED': 'u',
    '\u1EF1': 'u',
    '\u1EE5': 'u',
    '\u1E73': 'u',
    '\u0173': 'u',
    '\u1E77': 'u',
    '\u1E75': 'u',
    '\u0289': 'u',
    '\u24E5': 'v',
    '\uFF56': 'v',
    '\u1E7D': 'v',
    '\u1E7F': 'v',
    '\u028B': 'v',
    '\uA75F': 'v',
    '\u028C': 'v',
    '\uA761': 'vy',
    '\u24E6': 'w',
    '\uFF57': 'w',
    '\u1E81': 'w',
    '\u1E83': 'w',
    '\u0175': 'w',
    '\u1E87': 'w',
    '\u1E85': 'w',
    '\u1E98': 'w',
    '\u1E89': 'w',
    '\u2C73': 'w',
    '\u24E7': 'x',
    '\uFF58': 'x',
    '\u1E8B': 'x',
    '\u1E8D': 'x',
    '\u24E8': 'y',
    '\uFF59': 'y',
    '\u1EF3': 'y',
    '\u00FD': 'y',
    '\u0177': 'y',
    '\u1EF9': 'y',
    '\u0233': 'y',
    '\u1E8F': 'y',
    '\u00FF': 'y',
    '\u1EF7': 'y',
    '\u1E99': 'y',
    '\u1EF5': 'y',
    '\u01B4': 'y',
    '\u024F': 'y',
    '\u1EFF': 'y',
    '\u24E9': 'z',
    '\uFF5A': 'z',
    '\u017A': 'z',
    '\u1E91': 'z',
    '\u017C': 'z',
    '\u017E': 'z',
    '\u1E93': 'z',
    '\u1E95': 'z',
    '\u01B6': 'z',
    '\u0225': 'z',
    '\u0240': 'z',
    '\u2C6C': 'z',
    '\uA763': 'z',
    '\u0386': '\u0391',
    '\u0388': '\u0395',
    '\u0389': '\u0397',
    '\u038A': '\u0399',
    '\u03AA': '\u0399',
    '\u038C': '\u039F',
    '\u038E': '\u03A5',
    '\u03AB': '\u03A5',
    '\u038F': '\u03A9',
    '\u03AC': '\u03B1',
    '\u03AD': '\u03B5',
    '\u03AE': '\u03B7',
    '\u03AF': '\u03B9',
    '\u03CA': '\u03B9',
    '\u0390': '\u03B9',
    '\u03CC': '\u03BF',
    '\u03CD': '\u03C5',
    '\u03CB': '\u03C5',
    '\u03B0': '\u03C5',
    '\u03CE': '\u03C9',
    '\u03C2': '\u03C3',
    '\u2019': '\''
  };

  return diacritics;
});

S2.define('select2/data/base',[
  '../utils'
], function (Utils) {
  function BaseAdapter ($element, options) {
    BaseAdapter.__super__.constructor.call(this);
  }

  Utils.Extend(BaseAdapter, Utils.Observable);

  BaseAdapter.prototype.current = function (callback) {
    throw new Error('The `current` method must be defined in child classes.');
  };

  BaseAdapter.prototype.query = function (params, callback) {
    throw new Error('The `query` method must be defined in child classes.');
  };

  BaseAdapter.prototype.bind = function (container, $container) {
    // Can be implemented in subclasses
  };

  BaseAdapter.prototype.destroy = function () {
    // Can be implemented in subclasses
  };

  BaseAdapter.prototype.generateResultId = function (container, data) {
    var id = container.id + '-result-';

    id += Utils.generateChars(4);

    if (data.id != null) {
      id += '-' + data.id.toString();
    } else {
      id += '-' + Utils.generateChars(4);
    }
    return id;
  };

  return BaseAdapter;
});

S2.define('select2/data/select',[
  './base',
  '../utils',
  'jquery'
], function (BaseAdapter, Utils, $) {
  function SelectAdapter ($element, options) {
    this.$element = $element;
    this.options = options;

    SelectAdapter.__super__.constructor.call(this);
  }

  Utils.Extend(SelectAdapter, BaseAdapter);

  SelectAdapter.prototype.current = function (callback) {
    var data = [];
    var self = this;

    this.$element.find(':selected').each(function () {
      var $option = $(this);

      var option = self.item($option);

      data.push(option);
    });

    callback(data);
  };

  SelectAdapter.prototype.select = function (data) {
    var self = this;

    data.selected = true;

    // If data.element is a DOM node, use it instead
    if ($(data.element).is('option')) {
      data.element.selected = true;

      this.$element.trigger('input').trigger('change');

      return;
    }

    if (this.$element.prop('multiple')) {
      this.current(function (currentData) {
        var val = [];

        data = [data];
        data.push.apply(data, currentData);

        for (var d = 0; d < data.length; d++) {
          var id = data[d].id;

          if ($.inArray(id, val) === -1) {
            val.push(id);
          }
        }

        self.$element.val(val);
        self.$element.trigger('input').trigger('change');
      });
    } else {
      var val = data.id;

      this.$element.val(val);
      this.$element.trigger('input').trigger('change');
    }
  };

  SelectAdapter.prototype.unselect = function (data) {
    var self = this;

    if (!this.$element.prop('multiple')) {
      return;
    }

    data.selected = false;

    if ($(data.element).is('option')) {
      data.element.selected = false;

      this.$element.trigger('input').trigger('change');

      return;
    }

    this.current(function (currentData) {
      var val = [];

      for (var d = 0; d < currentData.length; d++) {
        var id = currentData[d].id;

        if (id !== data.id && $.inArray(id, val) === -1) {
          val.push(id);
        }
      }

      self.$element.val(val);

      self.$element.trigger('input').trigger('change');
    });
  };

  SelectAdapter.prototype.bind = function (container, $container) {
    var self = this;

    this.container = container;

    container.on('select', function (params) {
      self.select(params.data);
    });

    container.on('unselect', function (params) {
      self.unselect(params.data);
    });
  };

  SelectAdapter.prototype.destroy = function () {
    // Remove anything added to child elements
    this.$element.find('*').each(function () {
      // Remove any custom data set by Select2
      Utils.RemoveData(this);
    });
  };

  SelectAdapter.prototype.query = function (params, callback) {
    var data = [];
    var self = this;

    var $options = this.$element.children();

    $options.each(function () {
      var $option = $(this);

      if (!$option.is('option') && !$option.is('optgroup')) {
        return;
      }

      var option = self.item($option);

      var matches = self.matches(params, option);

      if (matches !== null) {
        data.push(matches);
      }
    });

    callback({
      results: data
    });
  };

  SelectAdapter.prototype.addOptions = function ($options) {
    Utils.appendMany(this.$element, $options);
  };

  SelectAdapter.prototype.option = function (data) {
    var option;

    if (data.children) {
      option = document.createElement('optgroup');
      option.label = data.text;
    } else {
      option = document.createElement('option');

      if (option.textContent !== undefined) {
        option.textContent = data.text;
      } else {
        option.innerText = data.text;
      }
    }

    if (data.id !== undefined) {
      option.value = data.id;
    }

    if (data.disabled) {
      option.disabled = true;
    }

    if (data.selected) {
      option.selected = true;
    }

    if (data.title) {
      option.title = data.title;
    }

    var $option = $(option);

    var normalizedData = this._normalizeItem(data);
    normalizedData.element = option;

    // Override the option's data with the combined data
    Utils.StoreData(option, 'data', normalizedData);

    return $option;
  };

  SelectAdapter.prototype.item = function ($option) {
    var data = {};

    data = Utils.GetData($option[0], 'data');

    if (data != null) {
      return data;
    }

    if ($option.is('option')) {
      data = {
        id: $option.val(),
        text: $option.text(),
        disabled: $option.prop('disabled'),
        selected: $option.prop('selected'),
        title: $option.prop('title')
      };
    } else if ($option.is('optgroup')) {
      data = {
        text: $option.prop('label'),
        children: [],
        title: $option.prop('title')
      };

      var $children = $option.children('option');
      var children = [];

      for (var c = 0; c < $children.length; c++) {
        var $child = $($children[c]);

        var child = this.item($child);

        children.push(child);
      }

      data.children = children;
    }

    data = this._normalizeItem(data);
    data.element = $option[0];

    Utils.StoreData($option[0], 'data', data);

    return data;
  };

  SelectAdapter.prototype._normalizeItem = function (item) {
    if (item !== Object(item)) {
      item = {
        id: item,
        text: item
      };
    }

    item = $.extend({}, {
      text: ''
    }, item);

    var defaults = {
      selected: false,
      disabled: false
    };

    if (item.id != null) {
      item.id = item.id.toString();
    }

    if (item.text != null) {
      item.text = item.text.toString();
    }

    if (item._resultId == null && item.id && this.container != null) {
      item._resultId = this.generateResultId(this.container, item);
    }

    return $.extend({}, defaults, item);
  };

  SelectAdapter.prototype.matches = function (params, data) {
    var matcher = this.options.get('matcher');

    return matcher(params, data);
  };

  return SelectAdapter;
});

S2.define('select2/data/array',[
  './select',
  '../utils',
  'jquery'
], function (SelectAdapter, Utils, $) {
  function ArrayAdapter ($element, options) {
    this._dataToConvert = options.get('data') || [];

    ArrayAdapter.__super__.constructor.call(this, $element, options);
  }

  Utils.Extend(ArrayAdapter, SelectAdapter);

  ArrayAdapter.prototype.bind = function (container, $container) {
    ArrayAdapter.__super__.bind.call(this, container, $container);

    this.addOptions(this.convertToOptions(this._dataToConvert));
  };

  ArrayAdapter.prototype.select = function (data) {
    var $option = this.$element.find('option').filter(function (i, elm) {
      return elm.value == data.id.toString();
    });

    if ($option.length === 0) {
      $option = this.option(data);

      this.addOptions($option);
    }

    ArrayAdapter.__super__.select.call(this, data);
  };

  ArrayAdapter.prototype.convertToOptions = function (data) {
    var self = this;

    var $existing = this.$element.find('option');
    var existingIds = $existing.map(function () {
      return self.item($(this)).id;
    }).get();

    var $options = [];

    // Filter out all items except for the one passed in the argument
    function onlyItem (item) {
      return function () {
        return $(this).val() == item.id;
      };
    }

    for (var d = 0; d < data.length; d++) {
      var item = this._normalizeItem(data[d]);

      // Skip items which were pre-loaded, only merge the data
      if ($.inArray(item.id, existingIds) >= 0) {
        var $existingOption = $existing.filter(onlyItem(item));

        var existingData = this.item($existingOption);
        var newData = $.extend(true, {}, item, existingData);

        var $newOption = this.option(newData);

        $existingOption.replaceWith($newOption);

        continue;
      }

      var $option = this.option(item);

      if (item.children) {
        var $children = this.convertToOptions(item.children);

        Utils.appendMany($option, $children);
      }

      $options.push($option);
    }

    return $options;
  };

  return ArrayAdapter;
});

S2.define('select2/data/ajax',[
  './array',
  '../utils',
  'jquery'
], function (ArrayAdapter, Utils, $) {
  function AjaxAdapter ($element, options) {
    this.ajaxOptions = this._applyDefaults(options.get('ajax'));

    if (this.ajaxOptions.processResults != null) {
      this.processResults = this.ajaxOptions.processResults;
    }

    AjaxAdapter.__super__.constructor.call(this, $element, options);
  }

  Utils.Extend(AjaxAdapter, ArrayAdapter);

  AjaxAdapter.prototype._applyDefaults = function (options) {
    var defaults = {
      data: function (params) {
        return $.extend({}, params, {
          q: params.term
        });
      },
      transport: function (params, success, failure) {
        var $request = $.ajax(params);

        $request.then(success);
        $request.fail(failure);

        return $request;
      }
    };

    return $.extend({}, defaults, options, true);
  };

  AjaxAdapter.prototype.processResults = function (results) {
    return results;
  };

  AjaxAdapter.prototype.query = function (params, callback) {
    var matches = [];
    var self = this;

    if (this._request != null) {
      // JSONP requests cannot always be aborted
      if ($.isFunction(this._request.abort)) {
        this._request.abort();
      }

      this._request = null;
    }

    var options = $.extend({
      type: 'GET'
    }, this.ajaxOptions);

    if (typeof options.url === 'function') {
      options.url = options.url.call(this.$element, params);
    }

    if (typeof options.data === 'function') {
      options.data = options.data.call(this.$element, params);
    }

    function request () {
      var $request = options.transport(options, function (data) {
        var results = self.processResults(data, params);

        if (self.options.get('debug') && window.console && console.error) {
          // Check to make sure that the response included a `results` key.
          if (!results || !results.results || !$.isArray(results.results)) {
            console.error(
              'Select2: The AJAX results did not return an array in the ' +
              '`results` key of the response.'
            );
          }
        }

        callback(results);
      }, function () {
        // Attempt to detect if a request was aborted
        // Only works if the transport exposes a status property
        if ('status' in $request &&
            ($request.status === 0 || $request.status === '0')) {
          return;
        }

        self.trigger('results:message', {
          message: 'errorLoading'
        });
      });

      self._request = $request;
    }

    if (this.ajaxOptions.delay && params.term != null) {
      if (this._queryTimeout) {
        window.clearTimeout(this._queryTimeout);
      }

      this._queryTimeout = window.setTimeout(request, this.ajaxOptions.delay);
    } else {
      request();
    }
  };

  return AjaxAdapter;
});

S2.define('select2/data/tags',[
  'jquery'
], function ($) {
  function Tags (decorated, $element, options) {
    var tags = options.get('tags');

    var createTag = options.get('createTag');

    if (createTag !== undefined) {
      this.createTag = createTag;
    }

    var insertTag = options.get('insertTag');

    if (insertTag !== undefined) {
        this.insertTag = insertTag;
    }

    decorated.call(this, $element, options);

    if ($.isArray(tags)) {
      for (var t = 0; t < tags.length; t++) {
        var tag = tags[t];
        var item = this._normalizeItem(tag);

        var $option = this.option(item);

        this.$element.append($option);
      }
    }
  }

  Tags.prototype.query = function (decorated, params, callback) {
    var self = this;

    this._removeOldTags();

    if (params.term == null || params.page != null) {
      decorated.call(this, params, callback);
      return;
    }

    function wrapper (obj, child) {
      var data = obj.results;

      for (var i = 0; i < data.length; i++) {
        var option = data[i];

        var checkChildren = (
          option.children != null &&
          !wrapper({
            results: option.children
          }, true)
        );

        var optionText = (option.text || '').toUpperCase();
        var paramsTerm = (params.term || '').toUpperCase();

        var checkText = optionText === paramsTerm;

        if (checkText || checkChildren) {
          if (child) {
            return false;
          }

          obj.data = data;
          callback(obj);

          return;
        }
      }

      if (child) {
        return true;
      }

      var tag = self.createTag(params);

      if (tag != null) {
        var $option = self.option(tag);
        $option.attr('data-select2-tag', true);

        self.addOptions([$option]);

        self.insertTag(data, tag);
      }

      obj.results = data;

      callback(obj);
    }

    decorated.call(this, params, wrapper);
  };

  Tags.prototype.createTag = function (decorated, params) {
    var term = $.trim(params.term);

    if (term === '') {
      return null;
    }

    return {
      id: term,
      text: term
    };
  };

  Tags.prototype.insertTag = function (_, data, tag) {
    data.unshift(tag);
  };

  Tags.prototype._removeOldTags = function (_) {
    var $options = this.$element.find('option[data-select2-tag]');

    $options.each(function () {
      if (this.selected) {
        return;
      }

      $(this).remove();
    });
  };

  return Tags;
});

S2.define('select2/data/tokenizer',[
  'jquery'
], function ($) {
  function Tokenizer (decorated, $element, options) {
    var tokenizer = options.get('tokenizer');

    if (tokenizer !== undefined) {
      this.tokenizer = tokenizer;
    }

    decorated.call(this, $element, options);
  }

  Tokenizer.prototype.bind = function (decorated, container, $container) {
    decorated.call(this, container, $container);

    this.$search =  container.dropdown.$search || container.selection.$search ||
      $container.find('.select2-search__field');
  };

  Tokenizer.prototype.query = function (decorated, params, callback) {
    var self = this;

    function createAndSelect (data) {
      // Normalize the data object so we can use it for checks
      var item = self._normalizeItem(data);

      // Check if the data object already exists as a tag
      // Select it if it doesn't
      var $existingOptions = self.$element.find('option').filter(function () {
        return $(this).val() === item.id;
      });

      // If an existing option wasn't found for it, create the option
      if (!$existingOptions.length) {
        var $option = self.option(item);
        $option.attr('data-select2-tag', true);

        self._removeOldTags();
        self.addOptions([$option]);
      }

      // Select the item, now that we know there is an option for it
      select(item);
    }

    function select (data) {
      self.trigger('select', {
        data: data
      });
    }

    params.term = params.term || '';

    var tokenData = this.tokenizer(params, this.options, createAndSelect);

    if (tokenData.term !== params.term) {
      // Replace the search term if we have the search box
      if (this.$search.length) {
        this.$search.val(tokenData.term);
        this.$search.trigger('focus');
      }

      params.term = tokenData.term;
    }

    decorated.call(this, params, callback);
  };

  Tokenizer.prototype.tokenizer = function (_, params, options, callback) {
    var separators = options.get('tokenSeparators') || [];
    var term = params.term;
    var i = 0;

    var createTag = this.createTag || function (params) {
      return {
        id: params.term,
        text: params.term
      };
    };

    while (i < term.length) {
      var termChar = term[i];

      if ($.inArray(termChar, separators) === -1) {
        i++;

        continue;
      }

      var part = term.substr(0, i);
      var partParams = $.extend({}, params, {
        term: part
      });

      var data = createTag(partParams);

      if (data == null) {
        i++;
        continue;
      }

      callback(data);

      // Reset the term to not include the tokenized portion
      term = term.substr(i + 1) || '';
      i = 0;
    }

    return {
      term: term
    };
  };

  return Tokenizer;
});

S2.define('select2/data/minimumInputLength',[

], function () {
  function MinimumInputLength (decorated, $e, options) {
    this.minimumInputLength = options.get('minimumInputLength');

    decorated.call(this, $e, options);
  }

  MinimumInputLength.prototype.query = function (decorated, params, callback) {
    params.term = params.term || '';

    if (params.term.length < this.minimumInputLength) {
      this.trigger('results:message', {
        message: 'inputTooShort',
        args: {
          minimum: this.minimumInputLength,
          input: params.term,
          params: params
        }
      });

      return;
    }

    decorated.call(this, params, callback);
  };

  return MinimumInputLength;
});

S2.define('select2/data/maximumInputLength',[

], function () {
  function MaximumInputLength (decorated, $e, options) {
    this.maximumInputLength = options.get('maximumInputLength');

    decorated.call(this, $e, options);
  }

  MaximumInputLength.prototype.query = function (decorated, params, callback) {
    params.term = params.term || '';

    if (this.maximumInputLength > 0 &&
        params.term.length > this.maximumInputLength) {
      this.trigger('results:message', {
        message: 'inputTooLong',
        args: {
          maximum: this.maximumInputLength,
          input: params.term,
          params: params
        }
      });

      return;
    }

    decorated.call(this, params, callback);
  };

  return MaximumInputLength;
});

S2.define('select2/data/maximumSelectionLength',[

], function (){
  function MaximumSelectionLength (decorated, $e, options) {
    this.maximumSelectionLength = options.get('maximumSelectionLength');

    decorated.call(this, $e, options);
  }

  MaximumSelectionLength.prototype.bind =
    function (decorated, container, $container) {
      var self = this;

      decorated.call(this, container, $container);

      container.on('select', function () {
        self._checkIfMaximumSelected();
      });
  };

  MaximumSelectionLength.prototype.query =
    function (decorated, params, callback) {
      var self = this;

      this._checkIfMaximumSelected(function () {
        decorated.call(self, params, callback);
      });
  };

  MaximumSelectionLength.prototype._checkIfMaximumSelected =
    function (_, successCallback) {
      var self = this;

      this.current(function (currentData) {
        var count = currentData != null ? currentData.length : 0;
        if (self.maximumSelectionLength > 0 &&
          count >= self.maximumSelectionLength) {
          self.trigger('results:message', {
            message: 'maximumSelected',
            args: {
              maximum: self.maximumSelectionLength
            }
          });
          return;
        }

        if (successCallback) {
          successCallback();
        }
      });
  };

  return MaximumSelectionLength;
});

S2.define('select2/dropdown',[
  'jquery',
  './utils'
], function ($, Utils) {
  function Dropdown ($element, options) {
    this.$element = $element;
    this.options = options;

    Dropdown.__super__.constructor.call(this);
  }

  Utils.Extend(Dropdown, Utils.Observable);

  Dropdown.prototype.render = function () {
    var $dropdown = $(
      '<span class="select2-dropdown">' +
        '<span class="select2-results"></span>' +
      '</span>'
    );

    $dropdown.attr('dir', this.options.get('dir'));

    this.$dropdown = $dropdown;

    return $dropdown;
  };

  Dropdown.prototype.bind = function () {
    // Should be implemented in subclasses
  };

  Dropdown.prototype.position = function ($dropdown, $container) {
    // Should be implemented in subclasses
  };

  Dropdown.prototype.destroy = function () {
    // Remove the dropdown from the DOM
    this.$dropdown.remove();
  };

  return Dropdown;
});

S2.define('select2/dropdown/search',[
  'jquery',
  '../utils'
], function ($, Utils) {
  function Search () { }

  Search.prototype.render = function (decorated) {
    var $rendered = decorated.call(this);

    var $search = $(
      '<span class="select2-search select2-search--dropdown">' +
        '<input class="select2-search__field" type="search" tabindex="-1"' +
        ' autocomplete="off" autocorrect="off" autocapitalize="none"' +
        ' spellcheck="false" role="searchbox" aria-autocomplete="list" />' +
      '</span>'
    );

    this.$searchContainer = $search;
    this.$search = $search.find('input');

    $rendered.prepend($search);

    return $rendered;
  };

  Search.prototype.bind = function (decorated, container, $container) {
    var self = this;

    var resultsId = container.id + '-results';

    decorated.call(this, container, $container);

    this.$search.on('keydown', function (evt) {
      self.trigger('keypress', evt);

      self._keyUpPrevented = evt.isDefaultPrevented();
    });

    // Workaround for browsers which do not support the `input` event
    // This will prevent double-triggering of events for browsers which support
    // both the `keyup` and `input` events.
    this.$search.on('input', function (evt) {
      // Unbind the duplicated `keyup` event
      $(this).off('keyup');
    });

    this.$search.on('keyup input', function (evt) {
      self.handleSearch(evt);
    });

    container.on('open', function () {
      self.$search.attr('tabindex', 0);
      self.$search.attr('aria-controls', resultsId);

      self.$search.trigger('focus');

      window.setTimeout(function () {
        self.$search.trigger('focus');
      }, 0);
    });

    container.on('close', function () {
      self.$search.attr('tabindex', -1);
      self.$search.removeAttr('aria-controls');
      self.$search.removeAttr('aria-activedescendant');

      self.$search.val('');
      self.$search.trigger('blur');
    });

    container.on('focus', function () {
      if (!container.isOpen()) {
        self.$search.trigger('focus');
      }
    });

    container.on('results:all', function (params) {
      if (params.query.term == null || params.query.term === '') {
        var showSearch = self.showSearch(params);

        if (showSearch) {
          self.$searchContainer.removeClass('select2-search--hide');
        } else {
          self.$searchContainer.addClass('select2-search--hide');
        }
      }
    });

    container.on('results:focus', function (params) {
      if (params.data._resultId) {
        self.$search.attr('aria-activedescendant', params.data._resultId);
      } else {
        self.$search.removeAttr('aria-activedescendant');
      }
    });
  };

  Search.prototype.handleSearch = function (evt) {
    if (!this._keyUpPrevented) {
      var input = this.$search.val();

      this.trigger('query', {
        term: input
      });
    }

    this._keyUpPrevented = false;
  };

  Search.prototype.showSearch = function (_, params) {
    return true;
  };

  return Search;
});

S2.define('select2/dropdown/hidePlaceholder',[

], function () {
  function HidePlaceholder (decorated, $element, options, dataAdapter) {
    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

    decorated.call(this, $element, options, dataAdapter);
  }

  HidePlaceholder.prototype.append = function (decorated, data) {
    data.results = this.removePlaceholder(data.results);

    decorated.call(this, data);
  };

  HidePlaceholder.prototype.normalizePlaceholder = function (_, placeholder) {
    if (typeof placeholder === 'string') {
      placeholder = {
        id: '',
        text: placeholder
      };
    }

    return placeholder;
  };

  HidePlaceholder.prototype.removePlaceholder = function (_, data) {
    var modifiedData = data.slice(0);

    for (var d = data.length - 1; d >= 0; d--) {
      var item = data[d];

      if (this.placeholder.id === item.id) {
        modifiedData.splice(d, 1);
      }
    }

    return modifiedData;
  };

  return HidePlaceholder;
});

S2.define('select2/dropdown/infiniteScroll',[
  'jquery'
], function ($) {
  function InfiniteScroll (decorated, $element, options, dataAdapter) {
    this.lastParams = {};

    decorated.call(this, $element, options, dataAdapter);

    this.$loadingMore = this.createLoadingMore();
    this.loading = false;
  }

  InfiniteScroll.prototype.append = function (decorated, data) {
    this.$loadingMore.remove();
    this.loading = false;

    decorated.call(this, data);

    if (this.showLoadingMore(data)) {
      this.$results.append(this.$loadingMore);
      this.loadMoreIfNeeded();
    }
  };

  InfiniteScroll.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('query', function (params) {
      self.lastParams = params;
      self.loading = true;
    });

    container.on('query:append', function (params) {
      self.lastParams = params;
      self.loading = true;
    });

    this.$results.on('scroll', this.loadMoreIfNeeded.bind(this));
  };

  InfiniteScroll.prototype.loadMoreIfNeeded = function () {
    var isLoadMoreVisible = $.contains(
      document.documentElement,
      this.$loadingMore[0]
    );

    if (this.loading || !isLoadMoreVisible) {
      return;
    }

    var currentOffset = this.$results.offset().top +
      this.$results.outerHeight(false);
    var loadingMoreOffset = this.$loadingMore.offset().top +
      this.$loadingMore.outerHeight(false);

    if (currentOffset + 50 >= loadingMoreOffset) {
      this.loadMore();
    }
  };

  InfiniteScroll.prototype.loadMore = function () {
    this.loading = true;

    var params = $.extend({}, {page: 1}, this.lastParams);

    params.page++;

    this.trigger('query:append', params);
  };

  InfiniteScroll.prototype.showLoadingMore = function (_, data) {
    return data.pagination && data.pagination.more;
  };

  InfiniteScroll.prototype.createLoadingMore = function () {
    var $option = $(
      '<li ' +
      'class="select2-results__option select2-results__option--load-more"' +
      'role="option" aria-disabled="true"></li>'
    );

    var message = this.options.get('translations').get('loadingMore');

    $option.html(message(this.lastParams));

    return $option;
  };

  return InfiniteScroll;
});

S2.define('select2/dropdown/attachBody',[
  'jquery',
  '../utils'
], function ($, Utils) {
  function AttachBody (decorated, $element, options) {
    this.$dropdownParent = $(options.get('dropdownParent') || document.body);

    decorated.call(this, $element, options);
  }

  AttachBody.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('open', function () {
      self._showDropdown();
      self._attachPositioningHandler(container);

      // Must bind after the results handlers to ensure correct sizing
      self._bindContainerResultHandlers(container);
    });

    container.on('close', function () {
      self._hideDropdown();
      self._detachPositioningHandler(container);
    });

    this.$dropdownContainer.on('mousedown', function (evt) {
      evt.stopPropagation();
    });
  };

  AttachBody.prototype.destroy = function (decorated) {
    decorated.call(this);

    this.$dropdownContainer.remove();
  };

  AttachBody.prototype.position = function (decorated, $dropdown, $container) {
    // Clone all of the container classes
    $dropdown.attr('class', $container.attr('class'));

    $dropdown.removeClass('select2');
    $dropdown.addClass('select2-container--open');

    $dropdown.css({
      position: 'absolute',
      top: -999999
    });

    this.$container = $container;
  };

  AttachBody.prototype.render = function (decorated) {
    var $container = $('<span></span>');

    var $dropdown = decorated.call(this);
    $container.append($dropdown);

    this.$dropdownContainer = $container;

    return $container;
  };

  AttachBody.prototype._hideDropdown = function (decorated) {
    this.$dropdownContainer.detach();
  };

  AttachBody.prototype._bindContainerResultHandlers =
      function (decorated, container) {

    // These should only be bound once
    if (this._containerResultsHandlersBound) {
      return;
    }

    var self = this;

    container.on('results:all', function () {
      self._positionDropdown();
      self._resizeDropdown();
    });

    container.on('results:append', function () {
      self._positionDropdown();
      self._resizeDropdown();
    });

    container.on('results:message', function () {
      self._positionDropdown();
      self._resizeDropdown();
    });

    container.on('select', function () {
      self._positionDropdown();
      self._resizeDropdown();
    });

    container.on('unselect', function () {
      self._positionDropdown();
      self._resizeDropdown();
    });

    this._containerResultsHandlersBound = true;
  };

  AttachBody.prototype._attachPositioningHandler =
      function (decorated, container) {
    var self = this;

    var scrollEvent = 'scroll.select2.' + container.id;
    var resizeEvent = 'resize.select2.' + container.id;
    var orientationEvent = 'orientationchange.select2.' + container.id;

    var $watchers = this.$container.parents().filter(Utils.hasScroll);
    $watchers.each(function () {
      Utils.StoreData(this, 'select2-scroll-position', {
        x: $(this).scrollLeft(),
        y: $(this).scrollTop()
      });
    });

    $watchers.on(scrollEvent, function (ev) {
      var position = Utils.GetData(this, 'select2-scroll-position');
      $(this).scrollTop(position.y);
    });

    $(window).on(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent,
      function (e) {
      self._positionDropdown();
      self._resizeDropdown();
    });
  };

  AttachBody.prototype._detachPositioningHandler =
      function (decorated, container) {
    var scrollEvent = 'scroll.select2.' + container.id;
    var resizeEvent = 'resize.select2.' + container.id;
    var orientationEvent = 'orientationchange.select2.' + container.id;

    var $watchers = this.$container.parents().filter(Utils.hasScroll);
    $watchers.off(scrollEvent);

    $(window).off(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent);
  };

  AttachBody.prototype._positionDropdown = function () {
    var $window = $(window);

    var isCurrentlyAbove = this.$dropdown.hasClass('select2-dropdown--above');
    var isCurrentlyBelow = this.$dropdown.hasClass('select2-dropdown--below');

    var newDirection = null;

    var offset = this.$container.offset();

    offset.bottom = offset.top + this.$container.outerHeight(false);

    var container = {
      height: this.$container.outerHeight(false)
    };

    container.top = offset.top;
    container.bottom = offset.top + container.height;

    var dropdown = {
      height: this.$dropdown.outerHeight(false)
    };

    var viewport = {
      top: $window.scrollTop(),
      bottom: $window.scrollTop() + $window.height()
    };

    var enoughRoomAbove = viewport.top < (offset.top - dropdown.height);
    var enoughRoomBelow = viewport.bottom > (offset.bottom + dropdown.height);

    var css = {
      left: offset.left,
      top: container.bottom
    };

    // Determine what the parent element is to use for calculating the offset
    var $offsetParent = this.$dropdownParent;

    // For statically positioned elements, we need to get the element
    // that is determining the offset
    if ($offsetParent.css('position') === 'static') {
      $offsetParent = $offsetParent.offsetParent();
    }

    var parentOffset = {
      top: 0,
      left: 0
    };

    if (
      $.contains(document.body, $offsetParent[0]) ||
      $offsetParent[0].isConnected
      ) {
      parentOffset = $offsetParent.offset();
    }

    css.top -= parentOffset.top;
    css.left -= parentOffset.left;

    if (!isCurrentlyAbove && !isCurrentlyBelow) {
      newDirection = 'below';
    }

    if (!enoughRoomBelow && enoughRoomAbove && !isCurrentlyAbove) {
      newDirection = 'above';
    } else if (!enoughRoomAbove && enoughRoomBelow && isCurrentlyAbove) {
      newDirection = 'below';
    }

    if (newDirection == 'above' ||
      (isCurrentlyAbove && newDirection !== 'below')) {
      css.top = container.top - parentOffset.top - dropdown.height;
    }

    if (newDirection != null) {
      this.$dropdown
        .removeClass('select2-dropdown--below select2-dropdown--above')
        .addClass('select2-dropdown--' + newDirection);
      this.$container
        .removeClass('select2-container--below select2-container--above')
        .addClass('select2-container--' + newDirection);
    }

    this.$dropdownContainer.css(css);
  };

  AttachBody.prototype._resizeDropdown = function () {
    var css = {
      width: this.$container.outerWidth(false) + 'px'
    };

    if (this.options.get('dropdownAutoWidth')) {
      css.minWidth = css.width;
      css.position = 'relative';
      css.width = 'auto';
    }

    this.$dropdown.css(css);
  };

  AttachBody.prototype._showDropdown = function (decorated) {
    this.$dropdownContainer.appendTo(this.$dropdownParent);

    this._positionDropdown();
    this._resizeDropdown();
  };

  return AttachBody;
});

S2.define('select2/dropdown/minimumResultsForSearch',[

], function () {
  function countResults (data) {
    var count = 0;

    for (var d = 0; d < data.length; d++) {
      var item = data[d];

      if (item.children) {
        count += countResults(item.children);
      } else {
        count++;
      }
    }

    return count;
  }

  function MinimumResultsForSearch (decorated, $element, options, dataAdapter) {
    this.minimumResultsForSearch = options.get('minimumResultsForSearch');

    if (this.minimumResultsForSearch < 0) {
      this.minimumResultsForSearch = Infinity;
    }

    decorated.call(this, $element, options, dataAdapter);
  }

  MinimumResultsForSearch.prototype.showSearch = function (decorated, params) {
    if (countResults(params.data.results) < this.minimumResultsForSearch) {
      return false;
    }

    return decorated.call(this, params);
  };

  return MinimumResultsForSearch;
});

S2.define('select2/dropdown/selectOnClose',[
  '../utils'
], function (Utils) {
  function SelectOnClose () { }

  SelectOnClose.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('close', function (params) {
      self._handleSelectOnClose(params);
    });
  };

  SelectOnClose.prototype._handleSelectOnClose = function (_, params) {
    if (params && params.originalSelect2Event != null) {
      var event = params.originalSelect2Event;

      // Don't select an item if the close event was triggered from a select or
      // unselect event
      if (event._type === 'select' || event._type === 'unselect') {
        return;
      }
    }

    var $highlightedResults = this.getHighlightedResults();

    // Only select highlighted results
    if ($highlightedResults.length < 1) {
      return;
    }

    var data = Utils.GetData($highlightedResults[0], 'data');

    // Don't re-select already selected resulte
    if (
      (data.element != null && data.element.selected) ||
      (data.element == null && data.selected)
    ) {
      return;
    }

    this.trigger('select', {
        data: data
    });
  };

  return SelectOnClose;
});

S2.define('select2/dropdown/closeOnSelect',[

], function () {
  function CloseOnSelect () { }

  CloseOnSelect.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('select', function (evt) {
      self._selectTriggered(evt);
    });

    container.on('unselect', function (evt) {
      self._selectTriggered(evt);
    });
  };

  CloseOnSelect.prototype._selectTriggered = function (_, evt) {
    var originalEvent = evt.originalEvent;

    // Don't close if the control key is being held
    if (originalEvent && (originalEvent.ctrlKey || originalEvent.metaKey)) {
      return;
    }

    this.trigger('close', {
      originalEvent: originalEvent,
      originalSelect2Event: evt
    });
  };

  return CloseOnSelect;
});

S2.define('select2/i18n/en',[],function () {
  // English
  return {
    errorLoading: function () {
      return 'The results could not be loaded.';
    },
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      var message = 'Please delete ' + overChars + ' character';

      if (overChars != 1) {
        message += 's';
      }

      return message;
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      var message = 'Please enter ' + remainingChars + ' or more characters';

      return message;
    },
    loadingMore: function () {
      return 'Loading more results…';
    },
    maximumSelected: function (args) {
      var message = 'You can only select ' + args.maximum + ' item';

      if (args.maximum != 1) {
        message += 's';
      }

      return message;
    },
    noResults: function () {
      return 'No results found';
    },
    searching: function () {
      return 'Searching…';
    },
    removeAllItems: function () {
      return 'Remove all items';
    }
  };
});

S2.define('select2/defaults',[
  'jquery',
  'require',

  './results',

  './selection/single',
  './selection/multiple',
  './selection/placeholder',
  './selection/allowClear',
  './selection/search',
  './selection/eventRelay',

  './utils',
  './translation',
  './diacritics',

  './data/select',
  './data/array',
  './data/ajax',
  './data/tags',
  './data/tokenizer',
  './data/minimumInputLength',
  './data/maximumInputLength',
  './data/maximumSelectionLength',

  './dropdown',
  './dropdown/search',
  './dropdown/hidePlaceholder',
  './dropdown/infiniteScroll',
  './dropdown/attachBody',
  './dropdown/minimumResultsForSearch',
  './dropdown/selectOnClose',
  './dropdown/closeOnSelect',

  './i18n/en'
], function ($, require,

             ResultsList,

             SingleSelection, MultipleSelection, Placeholder, AllowClear,
             SelectionSearch, EventRelay,

             Utils, Translation, DIACRITICS,

             SelectData, ArrayData, AjaxData, Tags, Tokenizer,
             MinimumInputLength, MaximumInputLength, MaximumSelectionLength,

             Dropdown, DropdownSearch, HidePlaceholder, InfiniteScroll,
             AttachBody, MinimumResultsForSearch, SelectOnClose, CloseOnSelect,

             EnglishTranslation) {
  function Defaults () {
    this.reset();
  }

  Defaults.prototype.apply = function (options) {
    options = $.extend(true, {}, this.defaults, options);

    if (options.dataAdapter == null) {
      if (options.ajax != null) {
        options.dataAdapter = AjaxData;
      } else if (options.data != null) {
        options.dataAdapter = ArrayData;
      } else {
        options.dataAdapter = SelectData;
      }

      if (options.minimumInputLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MinimumInputLength
        );
      }

      if (options.maximumInputLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MaximumInputLength
        );
      }

      if (options.maximumSelectionLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MaximumSelectionLength
        );
      }

      if (options.tags) {
        options.dataAdapter = Utils.Decorate(options.dataAdapter, Tags);
      }

      if (options.tokenSeparators != null || options.tokenizer != null) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          Tokenizer
        );
      }

      if (options.query != null) {
        var Query = require(options.amdBase + 'compat/query');

        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          Query
        );
      }

      if (options.initSelection != null) {
        var InitSelection = require(options.amdBase + 'compat/initSelection');

        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          InitSelection
        );
      }
    }

    if (options.resultsAdapter == null) {
      options.resultsAdapter = ResultsList;

      if (options.ajax != null) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          InfiniteScroll
        );
      }

      if (options.placeholder != null) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          HidePlaceholder
        );
      }

      if (options.selectOnClose) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          SelectOnClose
        );
      }
    }

    if (options.dropdownAdapter == null) {
      if (options.multiple) {
        options.dropdownAdapter = Dropdown;
      } else {
        var SearchableDropdown = Utils.Decorate(Dropdown, DropdownSearch);

        options.dropdownAdapter = SearchableDropdown;
      }

      if (options.minimumResultsForSearch !== 0) {
        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          MinimumResultsForSearch
        );
      }

      if (options.closeOnSelect) {
        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          CloseOnSelect
        );
      }

      if (
        options.dropdownCssClass != null ||
        options.dropdownCss != null ||
        options.adaptDropdownCssClass != null
      ) {
        var DropdownCSS = require(options.amdBase + 'compat/dropdownCss');

        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          DropdownCSS
        );
      }

      options.dropdownAdapter = Utils.Decorate(
        options.dropdownAdapter,
        AttachBody
      );
    }

    if (options.selectionAdapter == null) {
      if (options.multiple) {
        options.selectionAdapter = MultipleSelection;
      } else {
        options.selectionAdapter = SingleSelection;
      }

      // Add the placeholder mixin if a placeholder was specified
      if (options.placeholder != null) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          Placeholder
        );
      }

      if (options.allowClear) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          AllowClear
        );
      }

      if (options.multiple) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          SelectionSearch
        );
      }

      if (
        options.containerCssClass != null ||
        options.containerCss != null ||
        options.adaptContainerCssClass != null
      ) {
        var ContainerCSS = require(options.amdBase + 'compat/containerCss');

        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          ContainerCSS
        );
      }

      options.selectionAdapter = Utils.Decorate(
        options.selectionAdapter,
        EventRelay
      );
    }

    // If the defaults were not previously applied from an element, it is
    // possible for the language option to have not been resolved
    options.language = this._resolveLanguage(options.language);

    // Always fall back to English since it will always be complete
    options.language.push('en');

    var uniqueLanguages = [];

    for (var l = 0; l < options.language.length; l++) {
      var language = options.language[l];

      if (uniqueLanguages.indexOf(language) === -1) {
        uniqueLanguages.push(language);
      }
    }

    options.language = uniqueLanguages;

    options.translations = this._processTranslations(
      options.language,
      options.debug
    );

    return options;
  };

  Defaults.prototype.reset = function () {
    function stripDiacritics (text) {
      // Used 'uni range + named function' from http://jsperf.com/diacritics/18
      function match(a) {
        return DIACRITICS[a] || a;
      }

      return text.replace(/[^\u0000-\u007E]/g, match);
    }

    function matcher (params, data) {
      // Always return the object if there is nothing to compare
      if ($.trim(params.term) === '') {
        return data;
      }

      // Do a recursive check for options with children
      if (data.children && data.children.length > 0) {
        // Clone the data object if there are children
        // This is required as we modify the object to remove any non-matches
        var match = $.extend(true, {}, data);

        // Check each child of the option
        for (var c = data.children.length - 1; c >= 0; c--) {
          var child = data.children[c];

          var matches = matcher(params, child);

          // If there wasn't a match, remove the object in the array
          if (matches == null) {
            match.children.splice(c, 1);
          }
        }

        // If any children matched, return the new object
        if (match.children.length > 0) {
          return match;
        }

        // If there were no matching children, check just the plain object
        return matcher(params, match);
      }

      var original = stripDiacritics(data.text).toUpperCase();
      var term = stripDiacritics(params.term).toUpperCase();

      // Check if the text contains the term
      if (original.indexOf(term) > -1) {
        return data;
      }

      // If it doesn't contain the term, don't return anything
      return null;
    }

    this.defaults = {
      amdBase: './',
      amdLanguageBase: './i18n/',
      closeOnSelect: true,
      debug: false,
      dropdownAutoWidth: false,
      escapeMarkup: Utils.escapeMarkup,
      language: {},
      matcher: matcher,
      minimumInputLength: 0,
      maximumInputLength: 0,
      maximumSelectionLength: 0,
      minimumResultsForSearch: 0,
      selectOnClose: false,
      scrollAfterSelect: false,
      sorter: function (data) {
        return data;
      },
      templateResult: function (result) {
        return result.text;
      },
      templateSelection: function (selection) {
        return selection.text;
      },
      theme: 'default',
      width: 'resolve'
    };
  };

  Defaults.prototype.applyFromElement = function (options, $element) {
    var optionLanguage = options.language;
    var defaultLanguage = this.defaults.language;
    var elementLanguage = $element.prop('lang');
    var parentLanguage = $element.closest('[lang]').prop('lang');

    var languages = Array.prototype.concat.call(
      this._resolveLanguage(elementLanguage),
      this._resolveLanguage(optionLanguage),
      this._resolveLanguage(defaultLanguage),
      this._resolveLanguage(parentLanguage)
    );

    options.language = languages;

    return options;
  };

  Defaults.prototype._resolveLanguage = function (language) {
    if (!language) {
      return [];
    }

    if ($.isEmptyObject(language)) {
      return [];
    }

    if ($.isPlainObject(language)) {
      return [language];
    }

    var languages;

    if (!$.isArray(language)) {
      languages = [language];
    } else {
      languages = language;
    }

    var resolvedLanguages = [];

    for (var l = 0; l < languages.length; l++) {
      resolvedLanguages.push(languages[l]);

      if (typeof languages[l] === 'string' && languages[l].indexOf('-') > 0) {
        // Extract the region information if it is included
        var languageParts = languages[l].split('-');
        var baseLanguage = languageParts[0];

        resolvedLanguages.push(baseLanguage);
      }
    }

    return resolvedLanguages;
  };

  Defaults.prototype._processTranslations = function (languages, debug) {
    var translations = new Translation();

    for (var l = 0; l < languages.length; l++) {
      var languageData = new Translation();

      var language = languages[l];

      if (typeof language === 'string') {
        try {
          // Try to load it with the original name
          languageData = Translation.loadPath(language);
        } catch (e) {
          try {
            // If we couldn't load it, check if it wasn't the full path
            language = this.defaults.amdLanguageBase + language;
            languageData = Translation.loadPath(language);
          } catch (ex) {
            // The translation could not be loaded at all. Sometimes this is
            // because of a configuration problem, other times this can be
            // because of how Select2 helps load all possible translation files
            if (debug && window.console && console.warn) {
              console.warn(
                'Select2: The language file for "' + language + '" could ' +
                'not be automatically loaded. A fallback will be used instead.'
              );
            }
          }
        }
      } else if ($.isPlainObject(language)) {
        languageData = new Translation(language);
      } else {
        languageData = language;
      }

      translations.extend(languageData);
    }

    return translations;
  };

  Defaults.prototype.set = function (key, value) {
    var camelKey = $.camelCase(key);

    var data = {};
    data[camelKey] = value;

    var convertedData = Utils._convertData(data);

    $.extend(true, this.defaults, convertedData);
  };

  var defaults = new Defaults();

  return defaults;
});

S2.define('select2/options',[
  'require',
  'jquery',
  './defaults',
  './utils'
], function (require, $, Defaults, Utils) {
  function Options (options, $element) {
    this.options = options;

    if ($element != null) {
      this.fromElement($element);
    }

    if ($element != null) {
      this.options = Defaults.applyFromElement(this.options, $element);
    }

    this.options = Defaults.apply(this.options);

    if ($element && $element.is('input')) {
      var InputCompat = require(this.get('amdBase') + 'compat/inputData');

      this.options.dataAdapter = Utils.Decorate(
        this.options.dataAdapter,
        InputCompat
      );
    }
  }

  Options.prototype.fromElement = function ($e) {
    var excludedData = ['select2'];

    if (this.options.multiple == null) {
      this.options.multiple = $e.prop('multiple');
    }

    if (this.options.disabled == null) {
      this.options.disabled = $e.prop('disabled');
    }

    if (this.options.dir == null) {
      if ($e.prop('dir')) {
        this.options.dir = $e.prop('dir');
      } else if ($e.closest('[dir]').prop('dir')) {
        this.options.dir = $e.closest('[dir]').prop('dir');
      } else {
        this.options.dir = 'ltr';
      }
    }

    $e.prop('disabled', this.options.disabled);
    $e.prop('multiple', this.options.multiple);

    if (Utils.GetData($e[0], 'select2Tags')) {
      if (this.options.debug && window.console && console.warn) {
        console.warn(
          'Select2: The `data-select2-tags` attribute has been changed to ' +
          'use the `data-data` and `data-tags="true"` attributes and will be ' +
          'removed in future versions of Select2.'
        );
      }

      Utils.StoreData($e[0], 'data', Utils.GetData($e[0], 'select2Tags'));
      Utils.StoreData($e[0], 'tags', true);
    }

    if (Utils.GetData($e[0], 'ajaxUrl')) {
      if (this.options.debug && window.console && console.warn) {
        console.warn(
          'Select2: The `data-ajax-url` attribute has been changed to ' +
          '`data-ajax--url` and support for the old attribute will be removed' +
          ' in future versions of Select2.'
        );
      }

      $e.attr('ajax--url', Utils.GetData($e[0], 'ajaxUrl'));
      Utils.StoreData($e[0], 'ajax-Url', Utils.GetData($e[0], 'ajaxUrl'));
    }

    var dataset = {};

    function upperCaseLetter(_, letter) {
      return letter.toUpperCase();
    }

    // Pre-load all of the attributes which are prefixed with `data-`
    for (var attr = 0; attr < $e[0].attributes.length; attr++) {
      var attributeName = $e[0].attributes[attr].name;
      var prefix = 'data-';

      if (attributeName.substr(0, prefix.length) == prefix) {
        // Get the contents of the attribute after `data-`
        var dataName = attributeName.substring(prefix.length);

        // Get the data contents from the consistent source
        // This is more than likely the jQuery data helper
        var dataValue = Utils.GetData($e[0], dataName);

        // camelCase the attribute name to match the spec
        var camelDataName = dataName.replace(/-([a-z])/g, upperCaseLetter);

        // Store the data attribute contents into the dataset since
        dataset[camelDataName] = dataValue;
      }
    }

    // Prefer the element's `dataset` attribute if it exists
    // jQuery 1.x does not correctly handle data attributes with multiple dashes
    if ($.fn.jquery && $.fn.jquery.substr(0, 2) == '1.' && $e[0].dataset) {
      dataset = $.extend(true, {}, $e[0].dataset, dataset);
    }

    // Prefer our internal data cache if it exists
    var data = $.extend(true, {}, Utils.GetData($e[0]), dataset);

    data = Utils._convertData(data);

    for (var key in data) {
      if ($.inArray(key, excludedData) > -1) {
        continue;
      }

      if ($.isPlainObject(this.options[key])) {
        $.extend(this.options[key], data[key]);
      } else {
        this.options[key] = data[key];
      }
    }

    return this;
  };

  Options.prototype.get = function (key) {
    return this.options[key];
  };

  Options.prototype.set = function (key, val) {
    this.options[key] = val;
  };

  return Options;
});

S2.define('select2/core',[
  'jquery',
  './options',
  './utils',
  './keys'
], function ($, Options, Utils, KEYS) {
  var Select2 = function ($element, options) {
    if (Utils.GetData($element[0], 'select2') != null) {
      Utils.GetData($element[0], 'select2').destroy();
    }

    this.$element = $element;

    this.id = this._generateId($element);

    options = options || {};

    this.options = new Options(options, $element);

    Select2.__super__.constructor.call(this);

    // Set up the tabindex

    var tabindex = $element.attr('tabindex') || 0;
    Utils.StoreData($element[0], 'old-tabindex', tabindex);
    $element.attr('tabindex', '-1');

    // Set up containers and adapters

    var DataAdapter = this.options.get('dataAdapter');
    this.dataAdapter = new DataAdapter($element, this.options);

    var $container = this.render();

    this._placeContainer($container);

    var SelectionAdapter = this.options.get('selectionAdapter');
    this.selection = new SelectionAdapter($element, this.options);
    this.$selection = this.selection.render();

    this.selection.position(this.$selection, $container);

    var DropdownAdapter = this.options.get('dropdownAdapter');
    this.dropdown = new DropdownAdapter($element, this.options);
    this.$dropdown = this.dropdown.render();

    this.dropdown.position(this.$dropdown, $container);

    var ResultsAdapter = this.options.get('resultsAdapter');
    this.results = new ResultsAdapter($element, this.options, this.dataAdapter);
    this.$results = this.results.render();

    this.results.position(this.$results, this.$dropdown);

    // Bind events

    var self = this;

    // Bind the container to all of the adapters
    this._bindAdapters();

    // Register any DOM event handlers
    this._registerDomEvents();

    // Register any internal event handlers
    this._registerDataEvents();
    this._registerSelectionEvents();
    this._registerDropdownEvents();
    this._registerResultsEvents();
    this._registerEvents();

    // Set the initial state
    this.dataAdapter.current(function (initialData) {
      self.trigger('selection:update', {
        data: initialData
      });
    });

    // Hide the original select
    $element.addClass('select2-hidden-accessible');
    $element.attr('aria-hidden', 'true');

    // Synchronize any monitored attributes
    this._syncAttributes();

    Utils.StoreData($element[0], 'select2', this);

    // Ensure backwards compatibility with $element.data('select2').
    $element.data('select2', this);
  };

  Utils.Extend(Select2, Utils.Observable);

  Select2.prototype._generateId = function ($element) {
    var id = '';

    if ($element.attr('id') != null) {
      id = $element.attr('id');
    } else if ($element.attr('name') != null) {
      id = $element.attr('name') + '-' + Utils.generateChars(2);
    } else {
      id = Utils.generateChars(4);
    }

    id = id.replace(/(:|\.|\[|\]|,)/g, '');
    id = 'select2-' + id;

    return id;
  };

  Select2.prototype._placeContainer = function ($container) {
    $container.insertAfter(this.$element);

    var width = this._resolveWidth(this.$element, this.options.get('width'));

    if (width != null) {
      $container.css('width', width);
    }
  };

  Select2.prototype._resolveWidth = function ($element, method) {
    var WIDTH = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;

    if (method == 'resolve') {
      var styleWidth = this._resolveWidth($element, 'style');

      if (styleWidth != null) {
        return styleWidth;
      }

      return this._resolveWidth($element, 'element');
    }

    if (method == 'element') {
      var elementWidth = $element.outerWidth(false);

      if (elementWidth <= 0) {
        return 'auto';
      }

      return elementWidth + 'px';
    }

    if (method == 'style') {
      var style = $element.attr('style');

      if (typeof(style) !== 'string') {
        return null;
      }

      var attrs = style.split(';');

      for (var i = 0, l = attrs.length; i < l; i = i + 1) {
        var attr = attrs[i].replace(/\s/g, '');
        var matches = attr.match(WIDTH);

        if (matches !== null && matches.length >= 1) {
          return matches[1];
        }
      }

      return null;
    }

    if (method == 'computedstyle') {
      var computedStyle = window.getComputedStyle($element[0]);

      return computedStyle.width;
    }

    return method;
  };

  Select2.prototype._bindAdapters = function () {
    this.dataAdapter.bind(this, this.$container);
    this.selection.bind(this, this.$container);

    this.dropdown.bind(this, this.$container);
    this.results.bind(this, this.$container);
  };

  Select2.prototype._registerDomEvents = function () {
    var self = this;

    this.$element.on('change.select2', function () {
      self.dataAdapter.current(function (data) {
        self.trigger('selection:update', {
          data: data
        });
      });
    });

    this.$element.on('focus.select2', function (evt) {
      self.trigger('focus', evt);
    });

    this._syncA = Utils.bind(this._syncAttributes, this);
    this._syncS = Utils.bind(this._syncSubtree, this);

    if (this.$element[0].attachEvent) {
      this.$element[0].attachEvent('onpropertychange', this._syncA);
    }

    var observer = window.MutationObserver ||
      window.WebKitMutationObserver ||
      window.MozMutationObserver
    ;

    if (observer != null) {
      this._observer = new observer(function (mutations) {
        self._syncA();
        self._syncS(null, mutations);
      });
      this._observer.observe(this.$element[0], {
        attributes: true,
        childList: true,
        subtree: false
      });
    } else if (this.$element[0].addEventListener) {
      this.$element[0].addEventListener(
        'DOMAttrModified',
        self._syncA,
        false
      );
      this.$element[0].addEventListener(
        'DOMNodeInserted',
        self._syncS,
        false
      );
      this.$element[0].addEventListener(
        'DOMNodeRemoved',
        self._syncS,
        false
      );
    }
  };

  Select2.prototype._registerDataEvents = function () {
    var self = this;

    this.dataAdapter.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerSelectionEvents = function () {
    var self = this;
    var nonRelayEvents = ['toggle', 'focus'];

    this.selection.on('toggle', function () {
      self.toggleDropdown();
    });

    this.selection.on('focus', function (params) {
      self.focus(params);
    });

    this.selection.on('*', function (name, params) {
      if ($.inArray(name, nonRelayEvents) !== -1) {
        return;
      }

      self.trigger(name, params);
    });
  };

  Select2.prototype._registerDropdownEvents = function () {
    var self = this;

    this.dropdown.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerResultsEvents = function () {
    var self = this;

    this.results.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerEvents = function () {
    var self = this;

    this.on('open', function () {
      self.$container.addClass('select2-container--open');
    });

    this.on('close', function () {
      self.$container.removeClass('select2-container--open');
    });

    this.on('enable', function () {
      self.$container.removeClass('select2-container--disabled');
    });

    this.on('disable', function () {
      self.$container.addClass('select2-container--disabled');
    });

    this.on('blur', function () {
      self.$container.removeClass('select2-container--focus');
    });

    this.on('query', function (params) {
      if (!self.isOpen()) {
        self.trigger('open', {});
      }

      this.dataAdapter.query(params, function (data) {
        self.trigger('results:all', {
          data: data,
          query: params
        });
      });
    });

    this.on('query:append', function (params) {
      this.dataAdapter.query(params, function (data) {
        self.trigger('results:append', {
          data: data,
          query: params
        });
      });
    });

    this.on('keypress', function (evt) {
      var key = evt.which;

      if (self.isOpen()) {
        if (key === KEYS.ESC || key === KEYS.TAB ||
            (key === KEYS.UP && evt.altKey)) {
          self.close(evt);

          evt.preventDefault();
        } else if (key === KEYS.ENTER) {
          self.trigger('results:select', {});

          evt.preventDefault();
        } else if ((key === KEYS.SPACE && evt.ctrlKey)) {
          self.trigger('results:toggle', {});

          evt.preventDefault();
        } else if (key === KEYS.UP) {
          self.trigger('results:previous', {});

          evt.preventDefault();
        } else if (key === KEYS.DOWN) {
          self.trigger('results:next', {});

          evt.preventDefault();
        }
      } else {
        if (key === KEYS.ENTER || key === KEYS.SPACE ||
            (key === KEYS.DOWN && evt.altKey)) {
          self.open();

          evt.preventDefault();
        }
      }
    });
  };

  Select2.prototype._syncAttributes = function () {
    this.options.set('disabled', this.$element.prop('disabled'));

    if (this.isDisabled()) {
      if (this.isOpen()) {
        this.close();
      }

      this.trigger('disable', {});
    } else {
      this.trigger('enable', {});
    }
  };

  Select2.prototype._isChangeMutation = function (evt, mutations) {
    var changed = false;
    var self = this;

    // Ignore any mutation events raised for elements that aren't options or
    // optgroups. This handles the case when the select element is destroyed
    if (
      evt && evt.target && (
        evt.target.nodeName !== 'OPTION' && evt.target.nodeName !== 'OPTGROUP'
      )
    ) {
      return;
    }

    if (!mutations) {
      // If mutation events aren't supported, then we can only assume that the
      // change affected the selections
      changed = true;
    } else if (mutations.addedNodes && mutations.addedNodes.length > 0) {
      for (var n = 0; n < mutations.addedNodes.length; n++) {
        var node = mutations.addedNodes[n];

        if (node.selected) {
          changed = true;
        }
      }
    } else if (mutations.removedNodes && mutations.removedNodes.length > 0) {
      changed = true;
    } else if ($.isArray(mutations)) {
      $.each(mutations, function(evt, mutation) {
        if (self._isChangeMutation(evt, mutation)) {
          // We've found a change mutation.
          // Let's escape from the loop and continue
          changed = true;
          return false;
        }
      });
    }
    return changed;
  };

  Select2.prototype._syncSubtree = function (evt, mutations) {
    var changed = this._isChangeMutation(evt, mutations);
    var self = this;

    // Only re-pull the data if we think there is a change
    if (changed) {
      this.dataAdapter.current(function (currentData) {
        self.trigger('selection:update', {
          data: currentData
        });
      });
    }
  };

  /**
   * Override the trigger method to automatically trigger pre-events when
   * there are events that can be prevented.
   */
  Select2.prototype.trigger = function (name, args) {
    var actualTrigger = Select2.__super__.trigger;
    var preTriggerMap = {
      'open': 'opening',
      'close': 'closing',
      'select': 'selecting',
      'unselect': 'unselecting',
      'clear': 'clearing'
    };

    if (args === undefined) {
      args = {};
    }

    if (name in preTriggerMap) {
      var preTriggerName = preTriggerMap[name];
      var preTriggerArgs = {
        prevented: false,
        name: name,
        args: args
      };

      actualTrigger.call(this, preTriggerName, preTriggerArgs);

      if (preTriggerArgs.prevented) {
        args.prevented = true;

        return;
      }
    }

    actualTrigger.call(this, name, args);
  };

  Select2.prototype.toggleDropdown = function () {
    if (this.isDisabled()) {
      return;
    }

    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  };

  Select2.prototype.open = function () {
    if (this.isOpen()) {
      return;
    }

    if (this.isDisabled()) {
      return;
    }

    this.trigger('query', {});
  };

  Select2.prototype.close = function (evt) {
    if (!this.isOpen()) {
      return;
    }

    this.trigger('close', { originalEvent : evt });
  };

  /**
   * Helper method to abstract the "enabled" (not "disabled") state of this
   * object.
   *
   * @return {true} if the instance is not disabled.
   * @return {false} if the instance is disabled.
   */
  Select2.prototype.isEnabled = function () {
    return !this.isDisabled();
  };

  /**
   * Helper method to abstract the "disabled" state of this object.
   *
   * @return {true} if the disabled option is true.
   * @return {false} if the disabled option is false.
   */
  Select2.prototype.isDisabled = function () {
    return this.options.get('disabled');
  };

  Select2.prototype.isOpen = function () {
    return this.$container.hasClass('select2-container--open');
  };

  Select2.prototype.hasFocus = function () {
    return this.$container.hasClass('select2-container--focus');
  };

  Select2.prototype.focus = function (data) {
    // No need to re-trigger focus events if we are already focused
    if (this.hasFocus()) {
      return;
    }

    this.$container.addClass('select2-container--focus');
    this.trigger('focus', {});
  };

  Select2.prototype.enable = function (args) {
    if (this.options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The `select2("enable")` method has been deprecated and will' +
        ' be removed in later Select2 versions. Use $element.prop("disabled")' +
        ' instead.'
      );
    }

    if (args == null || args.length === 0) {
      args = [true];
    }

    var disabled = !args[0];

    this.$element.prop('disabled', disabled);
  };

  Select2.prototype.data = function () {
    if (this.options.get('debug') &&
        arguments.length > 0 && window.console && console.warn) {
      console.warn(
        'Select2: Data can no longer be set using `select2("data")`. You ' +
        'should consider setting the value instead using `$element.val()`.'
      );
    }

    var data = [];

    this.dataAdapter.current(function (currentData) {
      data = currentData;
    });

    return data;
  };

  Select2.prototype.val = function (args) {
    if (this.options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The `select2("val")` method has been deprecated and will be' +
        ' removed in later Select2 versions. Use $element.val() instead.'
      );
    }

    if (args == null || args.length === 0) {
      return this.$element.val();
    }

    var newVal = args[0];

    if ($.isArray(newVal)) {
      newVal = $.map(newVal, function (obj) {
        return obj.toString();
      });
    }

    this.$element.val(newVal).trigger('input').trigger('change');
  };

  Select2.prototype.destroy = function () {
    this.$container.remove();

    if (this.$element[0].detachEvent) {
      this.$element[0].detachEvent('onpropertychange', this._syncA);
    }

    if (this._observer != null) {
      this._observer.disconnect();
      this._observer = null;
    } else if (this.$element[0].removeEventListener) {
      this.$element[0]
        .removeEventListener('DOMAttrModified', this._syncA, false);
      this.$element[0]
        .removeEventListener('DOMNodeInserted', this._syncS, false);
      this.$element[0]
        .removeEventListener('DOMNodeRemoved', this._syncS, false);
    }

    this._syncA = null;
    this._syncS = null;

    this.$element.off('.select2');
    this.$element.attr('tabindex',
    Utils.GetData(this.$element[0], 'old-tabindex'));

    this.$element.removeClass('select2-hidden-accessible');
    this.$element.attr('aria-hidden', 'false');
    Utils.RemoveData(this.$element[0]);
    this.$element.removeData('select2');

    this.dataAdapter.destroy();
    this.selection.destroy();
    this.dropdown.destroy();
    this.results.destroy();

    this.dataAdapter = null;
    this.selection = null;
    this.dropdown = null;
    this.results = null;
  };

  Select2.prototype.render = function () {
    var $container = $(
      '<span class="select2 select2-container">' +
        '<span class="selection"></span>' +
        '<span class="dropdown-wrapper" aria-hidden="true"></span>' +
      '</span>'
    );

    $container.attr('dir', this.options.get('dir'));

    this.$container = $container;

    this.$container.addClass('select2-container--' + this.options.get('theme'));

    Utils.StoreData($container[0], 'element', this.$element);

    return $container;
  };

  return Select2;
});

S2.define('select2/compat/utils',[
  'jquery'
], function ($) {
  function syncCssClasses ($dest, $src, adapter) {
    var classes, replacements = [], adapted;

    classes = $.trim($dest.attr('class'));

    if (classes) {
      classes = '' + classes; // for IE which returns object

      $(classes.split(/\s+/)).each(function () {
        // Save all Select2 classes
        if (this.indexOf('select2-') === 0) {
          replacements.push(this);
        }
      });
    }

    classes = $.trim($src.attr('class'));

    if (classes) {
      classes = '' + classes; // for IE which returns object

      $(classes.split(/\s+/)).each(function () {
        // Only adapt non-Select2 classes
        if (this.indexOf('select2-') !== 0) {
          adapted = adapter(this);

          if (adapted != null) {
            replacements.push(adapted);
          }
        }
      });
    }

    $dest.attr('class', replacements.join(' '));
  }

  return {
    syncCssClasses: syncCssClasses
  };
});

S2.define('select2/compat/containerCss',[
  'jquery',
  './utils'
], function ($, CompatUtils) {
  // No-op CSS adapter that discards all classes by default
  function _containerAdapter (clazz) {
    return null;
  }

  function ContainerCSS () { }

  ContainerCSS.prototype.render = function (decorated) {
    var $container = decorated.call(this);

    var containerCssClass = this.options.get('containerCssClass') || '';

    if ($.isFunction(containerCssClass)) {
      containerCssClass = containerCssClass(this.$element);
    }

    var containerCssAdapter = this.options.get('adaptContainerCssClass');
    containerCssAdapter = containerCssAdapter || _containerAdapter;

    if (containerCssClass.indexOf(':all:') !== -1) {
      containerCssClass = containerCssClass.replace(':all:', '');

      var _cssAdapter = containerCssAdapter;

      containerCssAdapter = function (clazz) {
        var adapted = _cssAdapter(clazz);

        if (adapted != null) {
          // Append the old one along with the adapted one
          return adapted + ' ' + clazz;
        }

        return clazz;
      };
    }

    var containerCss = this.options.get('containerCss') || {};

    if ($.isFunction(containerCss)) {
      containerCss = containerCss(this.$element);
    }

    CompatUtils.syncCssClasses($container, this.$element, containerCssAdapter);

    $container.css(containerCss);
    $container.addClass(containerCssClass);

    return $container;
  };

  return ContainerCSS;
});

S2.define('select2/compat/dropdownCss',[
  'jquery',
  './utils'
], function ($, CompatUtils) {
  // No-op CSS adapter that discards all classes by default
  function _dropdownAdapter (clazz) {
    return null;
  }

  function DropdownCSS () { }

  DropdownCSS.prototype.render = function (decorated) {
    var $dropdown = decorated.call(this);

    var dropdownCssClass = this.options.get('dropdownCssClass') || '';

    if ($.isFunction(dropdownCssClass)) {
      dropdownCssClass = dropdownCssClass(this.$element);
    }

    var dropdownCssAdapter = this.options.get('adaptDropdownCssClass');
    dropdownCssAdapter = dropdownCssAdapter || _dropdownAdapter;

    if (dropdownCssClass.indexOf(':all:') !== -1) {
      dropdownCssClass = dropdownCssClass.replace(':all:', '');

      var _cssAdapter = dropdownCssAdapter;

      dropdownCssAdapter = function (clazz) {
        var adapted = _cssAdapter(clazz);

        if (adapted != null) {
          // Append the old one along with the adapted one
          return adapted + ' ' + clazz;
        }

        return clazz;
      };
    }

    var dropdownCss = this.options.get('dropdownCss') || {};

    if ($.isFunction(dropdownCss)) {
      dropdownCss = dropdownCss(this.$element);
    }

    CompatUtils.syncCssClasses($dropdown, this.$element, dropdownCssAdapter);

    $dropdown.css(dropdownCss);
    $dropdown.addClass(dropdownCssClass);

    return $dropdown;
  };

  return DropdownCSS;
});

S2.define('select2/compat/initSelection',[
  'jquery'
], function ($) {
  function InitSelection (decorated, $element, options) {
    if (options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The `initSelection` option has been deprecated in favor' +
        ' of a custom data adapter that overrides the `current` method. ' +
        'This method is now called multiple times instead of a single ' +
        'time when the instance is initialized. Support will be removed ' +
        'for the `initSelection` option in future versions of Select2'
      );
    }

    this.initSelection = options.get('initSelection');
    this._isInitialized = false;

    decorated.call(this, $element, options);
  }

  InitSelection.prototype.current = function (decorated, callback) {
    var self = this;

    if (this._isInitialized) {
      decorated.call(this, callback);

      return;
    }

    this.initSelection.call(null, this.$element, function (data) {
      self._isInitialized = true;

      if (!$.isArray(data)) {
        data = [data];
      }

      callback(data);
    });
  };

  return InitSelection;
});

S2.define('select2/compat/inputData',[
  'jquery',
  '../utils'
], function ($, Utils) {
  function InputData (decorated, $element, options) {
    this._currentData = [];
    this._valueSeparator = options.get('valueSeparator') || ',';

    if ($element.prop('type') === 'hidden') {
      if (options.get('debug') && console && console.warn) {
        console.warn(
          'Select2: Using a hidden input with Select2 is no longer ' +
          'supported and may stop working in the future. It is recommended ' +
          'to use a `<select>` element instead.'
        );
      }
    }

    decorated.call(this, $element, options);
  }

  InputData.prototype.current = function (_, callback) {
    function getSelected (data, selectedIds) {
      var selected = [];

      if (data.selected || $.inArray(data.id, selectedIds) !== -1) {
        data.selected = true;
        selected.push(data);
      } else {
        data.selected = false;
      }

      if (data.children) {
        selected.push.apply(selected, getSelected(data.children, selectedIds));
      }

      return selected;
    }

    var selected = [];

    for (var d = 0; d < this._currentData.length; d++) {
      var data = this._currentData[d];

      selected.push.apply(
        selected,
        getSelected(
          data,
          this.$element.val().split(
            this._valueSeparator
          )
        )
      );
    }

    callback(selected);
  };

  InputData.prototype.select = function (_, data) {
    if (!this.options.get('multiple')) {
      this.current(function (allData) {
        $.map(allData, function (data) {
          data.selected = false;
        });
      });

      this.$element.val(data.id);
      this.$element.trigger('input').trigger('change');
    } else {
      var value = this.$element.val();
      value += this._valueSeparator + data.id;

      this.$element.val(value);
      this.$element.trigger('input').trigger('change');
    }
  };

  InputData.prototype.unselect = function (_, data) {
    var self = this;

    data.selected = false;

    this.current(function (allData) {
      var values = [];

      for (var d = 0; d < allData.length; d++) {
        var item = allData[d];

        if (data.id == item.id) {
          continue;
        }

        values.push(item.id);
      }

      self.$element.val(values.join(self._valueSeparator));
      self.$element.trigger('input').trigger('change');
    });
  };

  InputData.prototype.query = function (_, params, callback) {
    var results = [];

    for (var d = 0; d < this._currentData.length; d++) {
      var data = this._currentData[d];

      var matches = this.matches(params, data);

      if (matches !== null) {
        results.push(matches);
      }
    }

    callback({
      results: results
    });
  };

  InputData.prototype.addOptions = function (_, $options) {
    var options = $.map($options, function ($option) {
      return Utils.GetData($option[0], 'data');
    });

    this._currentData.push.apply(this._currentData, options);
  };

  return InputData;
});

S2.define('select2/compat/matcher',[
  'jquery'
], function ($) {
  function oldMatcher (matcher) {
    function wrappedMatcher (params, data) {
      var match = $.extend(true, {}, data);

      if (params.term == null || $.trim(params.term) === '') {
        return match;
      }

      if (data.children) {
        for (var c = data.children.length - 1; c >= 0; c--) {
          var child = data.children[c];

          // Check if the child object matches
          // The old matcher returned a boolean true or false
          var doesMatch = matcher(params.term, child.text, child);

          // If the child didn't match, pop it off
          if (!doesMatch) {
            match.children.splice(c, 1);
          }
        }

        if (match.children.length > 0) {
          return match;
        }
      }

      if (matcher(params.term, data.text, data)) {
        return match;
      }

      return null;
    }

    return wrappedMatcher;
  }

  return oldMatcher;
});

S2.define('select2/compat/query',[

], function () {
  function Query (decorated, $element, options) {
    if (options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The `query` option has been deprecated in favor of a ' +
        'custom data adapter that overrides the `query` method. Support ' +
        'will be removed for the `query` option in future versions of ' +
        'Select2.'
      );
    }

    decorated.call(this, $element, options);
  }

  Query.prototype.query = function (_, params, callback) {
    params.callback = callback;

    var query = this.options.get('query');

    query.call(null, params);
  };

  return Query;
});

S2.define('select2/dropdown/attachContainer',[

], function () {
  function AttachContainer (decorated, $element, options) {
    decorated.call(this, $element, options);
  }

  AttachContainer.prototype.position =
    function (decorated, $dropdown, $container) {
    var $dropdownContainer = $container.find('.dropdown-wrapper');
    $dropdownContainer.append($dropdown);

    $dropdown.addClass('select2-dropdown--below');
    $container.addClass('select2-container--below');
  };

  return AttachContainer;
});

S2.define('select2/dropdown/stopPropagation',[

], function () {
  function StopPropagation () { }

  StopPropagation.prototype.bind = function (decorated, container, $container) {
    decorated.call(this, container, $container);

    var stoppedEvents = [
    'blur',
    'change',
    'click',
    'dblclick',
    'focus',
    'focusin',
    'focusout',
    'input',
    'keydown',
    'keyup',
    'keypress',
    'mousedown',
    'mouseenter',
    'mouseleave',
    'mousemove',
    'mouseover',
    'mouseup',
    'search',
    'touchend',
    'touchstart'
    ];

    this.$dropdown.on(stoppedEvents.join(' '), function (evt) {
      evt.stopPropagation();
    });
  };

  return StopPropagation;
});

S2.define('select2/selection/stopPropagation',[

], function () {
  function StopPropagation () { }

  StopPropagation.prototype.bind = function (decorated, container, $container) {
    decorated.call(this, container, $container);

    var stoppedEvents = [
      'blur',
      'change',
      'click',
      'dblclick',
      'focus',
      'focusin',
      'focusout',
      'input',
      'keydown',
      'keyup',
      'keypress',
      'mousedown',
      'mouseenter',
      'mouseleave',
      'mousemove',
      'mouseover',
      'mouseup',
      'search',
      'touchend',
      'touchstart'
    ];

    this.$selection.on(stoppedEvents.join(' '), function (evt) {
      evt.stopPropagation();
    });
  };

  return StopPropagation;
});

/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 */

(function (factory) {
    if ( typeof S2.define === 'function' && S2.define.amd ) {
        // AMD. Register as an anonymous module.
        S2.define('jquery-mousewheel',['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var toFix  = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
        toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?
                    ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
        slice  = Array.prototype.slice,
        nullLowestDeltaTimeout, lowestDelta;

    if ( $.event.fixHooks ) {
        for ( var i = toFix.length; i; ) {
            $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
        }
    }

    var special = $.event.special.mousewheel = {
        version: '3.1.12',

        setup: function() {
            if ( this.addEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.addEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = handler;
            }
            // Store the line height and page height for this particular element
            $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
            $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
        },

        teardown: function() {
            if ( this.removeEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.removeEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = null;
            }
            // Clean up the data we added to the element
            $.removeData(this, 'mousewheel-line-height');
            $.removeData(this, 'mousewheel-page-height');
        },

        getLineHeight: function(elem) {
            var $elem = $(elem),
                $parent = $elem['offsetParent' in $.fn ? 'offsetParent' : 'parent']();
            if (!$parent.length) {
                $parent = $('body');
            }
            return parseInt($parent.css('fontSize'), 10) || parseInt($elem.css('fontSize'), 10) || 16;
        },

        getPageHeight: function(elem) {
            return $(elem).height();
        },

        settings: {
            adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
            normalizeOffset: true  // calls getBoundingClientRect for each event
        }
    };

    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
        },

        unmousewheel: function(fn) {
            return this.unbind('mousewheel', fn);
        }
    });


    function handler(event) {
        var orgEvent   = event || window.event,
            args       = slice.call(arguments, 1),
            delta      = 0,
            deltaX     = 0,
            deltaY     = 0,
            absDelta   = 0,
            offsetX    = 0,
            offsetY    = 0;
        event = $.event.fix(orgEvent);
        event.type = 'mousewheel';

        // Old school scrollwheel delta
        if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1;      }
        if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;       }
        if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY;      }
        if ( 'wheelDeltaX' in orgEvent ) { deltaX = orgEvent.wheelDeltaX * -1; }

        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
        if ( 'axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
            deltaX = deltaY * -1;
            deltaY = 0;
        }

        // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
        delta = deltaY === 0 ? deltaX : deltaY;

        // New school wheel delta (wheel event)
        if ( 'deltaY' in orgEvent ) {
            deltaY = orgEvent.deltaY * -1;
            delta  = deltaY;
        }
        if ( 'deltaX' in orgEvent ) {
            deltaX = orgEvent.deltaX;
            if ( deltaY === 0 ) { delta  = deltaX * -1; }
        }

        // No change actually happened, no reason to go any further
        if ( deltaY === 0 && deltaX === 0 ) { return; }

        // Need to convert lines and pages to pixels if we aren't already in pixels
        // There are three delta modes:
        //   * deltaMode 0 is by pixels, nothing to do
        //   * deltaMode 1 is by lines
        //   * deltaMode 2 is by pages
        if ( orgEvent.deltaMode === 1 ) {
            var lineHeight = $.data(this, 'mousewheel-line-height');
            delta  *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight;
        } else if ( orgEvent.deltaMode === 2 ) {
            var pageHeight = $.data(this, 'mousewheel-page-height');
            delta  *= pageHeight;
            deltaY *= pageHeight;
            deltaX *= pageHeight;
        }

        // Store lowest absolute delta to normalize the delta values
        absDelta = Math.max( Math.abs(deltaY), Math.abs(deltaX) );

        if ( !lowestDelta || absDelta < lowestDelta ) {
            lowestDelta = absDelta;

            // Adjust older deltas if necessary
            if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
                lowestDelta /= 40;
            }
        }

        // Adjust older deltas if necessary
        if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
            // Divide all the things by 40!
            delta  /= 40;
            deltaX /= 40;
            deltaY /= 40;
        }

        // Get a whole, normalized value for the deltas
        delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ](delta  / lowestDelta);
        deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / lowestDelta);
        deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / lowestDelta);

        // Normalise offsetX and offsetY properties
        if ( special.settings.normalizeOffset && this.getBoundingClientRect ) {
            var boundingRect = this.getBoundingClientRect();
            offsetX = event.clientX - boundingRect.left;
            offsetY = event.clientY - boundingRect.top;
        }

        // Add information to the event object
        event.deltaX = deltaX;
        event.deltaY = deltaY;
        event.deltaFactor = lowestDelta;
        event.offsetX = offsetX;
        event.offsetY = offsetY;
        // Go ahead and set deltaMode to 0 since we converted to pixels
        // Although this is a little odd since we overwrite the deltaX/Y
        // properties with normalized deltas.
        event.deltaMode = 0;

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        // Clearout lowestDelta after sometime to better
        // handle multiple device types that give different
        // a different lowestDelta
        // Ex: trackpad = 3 and mouse wheel = 120
        if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
        lowestDelta = null;
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
        // If this is an older event and the delta is divisable by 120,
        // then we are assuming that the browser is treating this as an
        // older mouse wheel event and that we should divide the deltas
        // by 40 to try and get a more usable deltaFactor.
        // Side note, this actually impacts the reported scroll distance
        // in older browsers and can cause scrolling to be slower than native.
        // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
        return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
    }

}));

S2.define('jquery.select2',[
  'jquery',
  'jquery-mousewheel',

  './select2/core',
  './select2/defaults',
  './select2/utils'
], function ($, _, Select2, Defaults, Utils) {
  if ($.fn.select2 == null) {
    // All methods that should return the element
    var thisMethods = ['open', 'close', 'destroy'];

    $.fn.select2 = function (options) {
      options = options || {};

      if (typeof options === 'object') {
        this.each(function () {
          var instanceOptions = $.extend(true, {}, options);

          var instance = new Select2($(this), instanceOptions);
        });

        return this;
      } else if (typeof options === 'string') {
        var ret;
        var args = Array.prototype.slice.call(arguments, 1);

        this.each(function () {
          var instance = Utils.GetData(this, 'select2');

          if (instance == null && window.console && console.error) {
            console.error(
              'The select2(\'' + options + '\') method was called on an ' +
              'element that is not using Select2.'
            );
          }

          ret = instance[options].apply(instance, args);
        });

        // Check if we should be returning `this`
        if ($.inArray(options, thisMethods) > -1) {
          return this;
        }

        return ret;
      } else {
        throw new Error('Invalid arguments for Select2: ' + options);
      }
    };
  }

  if ($.fn.select2.defaults == null) {
    $.fn.select2.defaults = Defaults;
  }

  return Select2;
});

  // Return the AMD loader configuration so it can be used outside of this file
  return {
    define: S2.define,
    require: S2.require
  };
}());

  // Autoload the jQuery bindings
  // We know that all of the modules exist above this, so we're safe
  var select2 = S2.require('jquery.select2');

  // Hold the AMD module references on the jQuery function that was just loaded
  // This allows Select2 to use the internal loader outside of this file, such
  // as in the language files.
  jQuery.fn.select2.amd = S2;

  // Return the Select2 instance for anyone who is importing it.
  return select2;
}));

/**
 * AdminLTE Demo Menu
 * ------------------
 * You should not use this file in production.
 * This file is for demo purposes only.
 */
(function ($) {
  'use strict'

   // -- Добавил с AdminLTE
  $("#example1").DataTable({
      "responsive": true,
      "autoWidth": false,
  });
  $('#example2').DataTable({
      "paging": true,
      "lengthChange": false,
      "searching": false,
      "ordering": true,
      "info": true,
      "autoWidth": false,
      "responsive": true,
  });

    $('.select2').select2()

    //Initialize Select2 Elements
    $('.select2bs4').select2({
        theme: 'bootstrap4'
    })

    $(document).ready(function () {
        bsCustomFileInput.init();
    });
    // -- Добавил с AdminLTE

  var $sidebar   = $('.control-sidebar')
  var $container = $('<div />', {
    class: 'p-3 control-sidebar-content'
  })

  $sidebar.append($container)


  var navbar_dark_skins = [
    'navbar-primary',
    'navbar-secondary',
    'navbar-info',
    'navbar-success',
    'navbar-danger',
    'navbar-indigo',
    'navbar-purple',
    'navbar-pink',
    'navbar-navy',
    'navbar-lightblue',
    'navbar-teal',
    'navbar-cyan',
    'navbar-dark',
    'navbar-gray-dark',
    'navbar-gray',
  ]

  var navbar_light_skins = [
    'navbar-light',
    'navbar-warning',
    'navbar-white',
    'navbar-orange',
  ]

  $container.append(
    '<h5>Customize AdminLTE</h5><hr class="mb-2"/>'
  )

  var $no_border_checkbox = $('<input />', {
    type   : 'checkbox',
    value  : 1,
    checked: $('.main-header').hasClass('border-bottom-0'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.main-header').addClass('border-bottom-0')
    } else {
      $('.main-header').removeClass('border-bottom-0')
    }
  })
  var $no_border_container = $('<div />', {'class': 'mb-1'}).append($no_border_checkbox).append('<span>No Navbar border</span>')
  $container.append($no_border_container)

  var $text_sm_body_checkbox = $('<input />', {
    type   : 'checkbox',
    value  : 1,
    checked: $('body').hasClass('text-sm'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('body').addClass('text-sm')
    } else {
      $('body').removeClass('text-sm')
    }
  })
  var $text_sm_body_container = $('<div />', {'class': 'mb-1'}).append($text_sm_body_checkbox).append('<span>Body small text</span>')
  $container.append($text_sm_body_container)

  var $text_sm_header_checkbox = $('<input />', {
    type   : 'checkbox',
    value  : 1,
    checked: $('.main-header').hasClass('text-sm'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.main-header').addClass('text-sm')
    } else {
      $('.main-header').removeClass('text-sm')
    }
  })
  var $text_sm_header_container = $('<div />', {'class': 'mb-1'}).append($text_sm_header_checkbox).append('<span>Navbar small text</span>')
  $container.append($text_sm_header_container)

  var $text_sm_sidebar_checkbox = $('<input />', {
    type   : 'checkbox',
    value  : 1,
    checked: $('.nav-sidebar').hasClass('text-sm'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addClass('text-sm')
    } else {
      $('.nav-sidebar').removeClass('text-sm')
    }
  })
  var $text_sm_sidebar_container = $('<div />', {'class': 'mb-1'}).append($text_sm_sidebar_checkbox).append('<span>Sidebar nav small text</span>')
  $container.append($text_sm_sidebar_container)

  var $text_sm_footer_checkbox = $('<input />', {
    type   : 'checkbox',
    value  : 1,
    checked: $('.main-footer').hasClass('text-sm'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.main-footer').addClass('text-sm')
    } else {
      $('.main-footer').removeClass('text-sm')
    }
  })
  var $text_sm_footer_container = $('<div />', {'class': 'mb-1'}).append($text_sm_footer_checkbox).append('<span>Footer small text</span>')
  $container.append($text_sm_footer_container)

  var $flat_sidebar_checkbox = $('<input />', {
    type   : 'checkbox',
    value  : 1,
    checked: $('.nav-sidebar').hasClass('nav-flat'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addClass('nav-flat')
    } else {
      $('.nav-sidebar').removeClass('nav-flat')
    }
  })
  var $flat_sidebar_container = $('<div />', {'class': 'mb-1'}).append($flat_sidebar_checkbox).append('<span>Sidebar nav flat style</span>')
  $container.append($flat_sidebar_container)

  var $legacy_sidebar_checkbox = $('<input />', {
    type   : 'checkbox',
    value  : 1,
    checked: $('.nav-sidebar').hasClass('nav-legacy'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addClass('nav-legacy')
    } else {
      $('.nav-sidebar').removeClass('nav-legacy')
    }
  })
  var $legacy_sidebar_container = $('<div />', {'class': 'mb-1'}).append($legacy_sidebar_checkbox).append('<span>Sidebar nav legacy style</span>')
  $container.append($legacy_sidebar_container)

  var $compact_sidebar_checkbox = $('<input />', {
    type   : 'checkbox',
    value  : 1,
    checked: $('.nav-sidebar').hasClass('nav-compact'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addClass('nav-compact')
    } else {
      $('.nav-sidebar').removeClass('nav-compact')
    }
  })
  var $compact_sidebar_container = $('<div />', {'class': 'mb-1'}).append($compact_sidebar_checkbox).append('<span>Sidebar nav compact</span>')
  $container.append($compact_sidebar_container)

  var $child_indent_sidebar_checkbox = $('<input />', {
    type   : 'checkbox',
    value  : 1,
    checked: $('.nav-sidebar').hasClass('nav-child-indent'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addClass('nav-child-indent')
    } else {
      $('.nav-sidebar').removeClass('nav-child-indent')
    }
  })
  var $child_indent_sidebar_container = $('<div />', {'class': 'mb-1'}).append($child_indent_sidebar_checkbox).append('<span>Sidebar nav child indent</span>')
  $container.append($child_indent_sidebar_container)

  var $no_expand_sidebar_checkbox = $('<input />', {
    type   : 'checkbox',
    value  : 1,
    checked: $('.main-sidebar').hasClass('sidebar-no-expand'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.main-sidebar').addClass('sidebar-no-expand')
    } else {
      $('.main-sidebar').removeClass('sidebar-no-expand')
    }
  })
  var $no_expand_sidebar_container = $('<div />', {'class': 'mb-1'}).append($no_expand_sidebar_checkbox).append('<span>Main Sidebar disable hover/focus auto expand</span>')
  $container.append($no_expand_sidebar_container)

  var $text_sm_brand_checkbox = $('<input />', {
    type   : 'checkbox',
    value  : 1,
    checked: $('.brand-link').hasClass('text-sm'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.brand-link').addClass('text-sm')
    } else {
      $('.brand-link').removeClass('text-sm')
    }
  })
  var $text_sm_brand_container = $('<div />', {'class': 'mb-4'}).append($text_sm_brand_checkbox).append('<span>Brand small text</span>')
  $container.append($text_sm_brand_container)

  $container.append('<h6>Navbar Variants</h6>')

  var $navbar_variants        = $('<div />', {
    'class': 'd-flex'
  })
  var navbar_all_colors       = navbar_dark_skins.concat(navbar_light_skins)
  var $navbar_variants_colors = createSkinBlock(navbar_all_colors, function (e) {
    var color = $(this).data('color')
    var $main_header = $('.main-header')
    $main_header.removeClass('navbar-dark').removeClass('navbar-light')
    navbar_all_colors.map(function (color) {
      $main_header.removeClass(color)
    })

    if (navbar_dark_skins.indexOf(color) > -1) {
      $main_header.addClass('navbar-dark')
    } else {
      $main_header.addClass('navbar-light')
    }

    $main_header.addClass(color)
  })

  $navbar_variants.append($navbar_variants_colors)

  $container.append($navbar_variants)

  var sidebar_colors = [
    'bg-primary',
    'bg-warning',
    'bg-info',
    'bg-danger',
    'bg-success',
    'bg-indigo',
    'bg-lightblue',
    'bg-navy',
    'bg-purple',
    'bg-fuchsia',
    'bg-pink',
    'bg-maroon',
    'bg-orange',
    'bg-lime',
    'bg-teal',
    'bg-olive'
  ]

  var accent_colors = [
    'accent-primary',
    'accent-warning',
    'accent-info',
    'accent-danger',
    'accent-success',
    'accent-indigo',
    'accent-lightblue',
    'accent-navy',
    'accent-purple',
    'accent-fuchsia',
    'accent-pink',
    'accent-maroon',
    'accent-orange',
    'accent-lime',
    'accent-teal',
    'accent-olive'
  ]

  var sidebar_skins = [
    'sidebar-dark-primary',
    'sidebar-dark-warning',
    'sidebar-dark-info',
    'sidebar-dark-danger',
    'sidebar-dark-success',
    'sidebar-dark-indigo',
    'sidebar-dark-lightblue',
    'sidebar-dark-navy',
    'sidebar-dark-purple',
    'sidebar-dark-fuchsia',
    'sidebar-dark-pink',
    'sidebar-dark-maroon',
    'sidebar-dark-orange',
    'sidebar-dark-lime',
    'sidebar-dark-teal',
    'sidebar-dark-olive',
    'sidebar-light-primary',
    'sidebar-light-warning',
    'sidebar-light-info',
    'sidebar-light-danger',
    'sidebar-light-success',
    'sidebar-light-indigo',
    'sidebar-light-lightblue',
    'sidebar-light-navy',
    'sidebar-light-purple',
    'sidebar-light-fuchsia',
    'sidebar-light-pink',
    'sidebar-light-maroon',
    'sidebar-light-orange',
    'sidebar-light-lime',
    'sidebar-light-teal',
    'sidebar-light-olive'
  ]

  $container.append('<h6>Accent Color Variants</h6>')
  var $accent_variants = $('<div />', {
    'class': 'd-flex'
  })
  $container.append($accent_variants)
  $container.append(createSkinBlock(accent_colors, function () {
    var color         = $(this).data('color')
    var accent_class = color
    var $body      = $('body')
    accent_colors.map(function (skin) {
      $body.removeClass(skin)
    })

    $body.addClass(accent_class)
  }))

  $container.append('<h6>Dark Sidebar Variants</h6>')
  var $sidebar_variants_dark = $('<div />', {
    'class': 'd-flex'
  })
  $container.append($sidebar_variants_dark)
  $container.append(createSkinBlock(sidebar_colors, function () {
    var color         = $(this).data('color')
    var sidebar_class = 'sidebar-dark-' + color.replace('bg-', '')
    var $sidebar      = $('.main-sidebar')
    sidebar_skins.map(function (skin) {
      $sidebar.removeClass(skin)
    })

    $sidebar.addClass(sidebar_class)
  }))

  $container.append('<h6>Light Sidebar Variants</h6>')
  var $sidebar_variants_light = $('<div />', {
    'class': 'd-flex'
  })
  $container.append($sidebar_variants_light)
  $container.append(createSkinBlock(sidebar_colors, function () {
    var color         = $(this).data('color')
    var sidebar_class = 'sidebar-light-' + color.replace('bg-', '')
    var $sidebar      = $('.main-sidebar')
    sidebar_skins.map(function (skin) {
      $sidebar.removeClass(skin)
    })

    $sidebar.addClass(sidebar_class)
  }))

  var logo_skins = navbar_all_colors
  $container.append('<h6>Brand Logo Variants</h6>')
  var $logo_variants = $('<div />', {
    'class': 'd-flex'
  })
  $container.append($logo_variants)
  var $clear_btn = $('<a />', {
    href: 'javascript:void(0)'
  }).text('clear').on('click', function () {
    var $logo = $('.brand-link')
    logo_skins.map(function (skin) {
      $logo.removeClass(skin)
    })
  })
  $container.append(createSkinBlock(logo_skins, function () {
    var color = $(this).data('color')
    var $logo = $('.brand-link')
    logo_skins.map(function (skin) {
      $logo.removeClass(skin)
    })
    $logo.addClass(color)
  }).append($clear_btn))

  function createSkinBlock(colors, callback) {
    var $block = $('<div />', {
      'class': 'd-flex flex-wrap mb-3'
    })

    colors.map(function (color) {
      var $color = $('<div />', {
        'class': (typeof color === 'object' ? color.join(' ') : color).replace('navbar-', 'bg-').replace('accent-', 'bg-') + ' elevation-2'
      })

      $block.append($color)

      $color.data('color', color)

      $color.css({
        width       : '40px',
        height      : '20px',
        borderRadius: '25px',
        marginRight : 10,
        marginBottom: 10,
        opacity     : 0.8,
        cursor      : 'pointer'
      })

      $color.hover(function () {
        $(this).css({ opacity: 1 }).removeClass('elevation-2').addClass('elevation-4')
      }, function () {
        $(this).css({ opacity: 0.8 }).removeClass('elevation-4').addClass('elevation-2')
      })

      if (callback) {
        $color.on('click', callback)
      }
    })

    return $block
  }

  $('.product-image-thumb').on('click', function() {
    const image_element = $(this).find('img');
    $('.product-image').prop('src', $(image_element).attr('src'))
    $('.product-image-thumb.active').removeClass('active');
    $(this).addClass('active');
  });
})(jQuery)

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.moment=t()}(this,function(){"use strict";var e,i;function c(){return e.apply(null,arguments)}function o(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}function u(e){return null!=e&&"[object Object]"===Object.prototype.toString.call(e)}function l(e){return void 0===e}function h(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)}function d(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function f(e,t){var n,s=[];for(n=0;n<e.length;++n)s.push(t(e[n],n));return s}function m(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function _(e,t){for(var n in t)m(t,n)&&(e[n]=t[n]);return m(t,"toString")&&(e.toString=t.toString),m(t,"valueOf")&&(e.valueOf=t.valueOf),e}function y(e,t,n,s){return Tt(e,t,n,s,!0).utc()}function g(e){return null==e._pf&&(e._pf={empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1}),e._pf}function v(e){if(null==e._isValid){var t=g(e),n=i.call(t.parsedDateParts,function(e){return null!=e}),s=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n);if(e._strict&&(s=s&&0===t.charsLeftOver&&0===t.unusedTokens.length&&void 0===t.bigHour),null!=Object.isFrozen&&Object.isFrozen(e))return s;e._isValid=s}return e._isValid}function p(e){var t=y(NaN);return null!=e?_(g(t),e):g(t).userInvalidated=!0,t}i=Array.prototype.some?Array.prototype.some:function(e){for(var t=Object(this),n=t.length>>>0,s=0;s<n;s++)if(s in t&&e.call(this,t[s],s,t))return!0;return!1};var r=c.momentProperties=[];function w(e,t){var n,s,i;if(l(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),l(t._i)||(e._i=t._i),l(t._f)||(e._f=t._f),l(t._l)||(e._l=t._l),l(t._strict)||(e._strict=t._strict),l(t._tzm)||(e._tzm=t._tzm),l(t._isUTC)||(e._isUTC=t._isUTC),l(t._offset)||(e._offset=t._offset),l(t._pf)||(e._pf=g(t)),l(t._locale)||(e._locale=t._locale),0<r.length)for(n=0;n<r.length;n++)l(i=t[s=r[n]])||(e[s]=i);return e}var t=!1;function M(e){w(this,e),this._d=new Date(null!=e._d?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),!1===t&&(t=!0,c.updateOffset(this),t=!1)}function k(e){return e instanceof M||null!=e&&null!=e._isAMomentObject}function S(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function D(e){var t=+e,n=0;return 0!==t&&isFinite(t)&&(n=S(t)),n}function a(e,t,n){var s,i=Math.min(e.length,t.length),r=Math.abs(e.length-t.length),a=0;for(s=0;s<i;s++)(n&&e[s]!==t[s]||!n&&D(e[s])!==D(t[s]))&&a++;return a+r}function Y(e){!1===c.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function n(i,r){var a=!0;return _(function(){if(null!=c.deprecationHandler&&c.deprecationHandler(null,i),a){for(var e,t=[],n=0;n<arguments.length;n++){if(e="","object"==typeof arguments[n]){for(var s in e+="\n["+n+"] ",arguments[0])e+=s+": "+arguments[0][s]+", ";e=e.slice(0,-2)}else e=arguments[n];t.push(e)}Y(i+"\nArguments: "+Array.prototype.slice.call(t).join("")+"\n"+(new Error).stack),a=!1}return r.apply(this,arguments)},r)}var s,O={};function T(e,t){null!=c.deprecationHandler&&c.deprecationHandler(e,t),O[e]||(Y(t),O[e]=!0)}function b(e){return e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}function x(e,t){var n,s=_({},e);for(n in t)m(t,n)&&(u(e[n])&&u(t[n])?(s[n]={},_(s[n],e[n]),_(s[n],t[n])):null!=t[n]?s[n]=t[n]:delete s[n]);for(n in e)m(e,n)&&!m(t,n)&&u(e[n])&&(s[n]=_({},s[n]));return s}function P(e){null!=e&&this.set(e)}c.suppressDeprecationWarnings=!1,c.deprecationHandler=null,s=Object.keys?Object.keys:function(e){var t,n=[];for(t in e)m(e,t)&&n.push(t);return n};var W={};function C(e,t){var n=e.toLowerCase();W[n]=W[n+"s"]=W[t]=e}function H(e){return"string"==typeof e?W[e]||W[e.toLowerCase()]:void 0}function R(e){var t,n,s={};for(n in e)m(e,n)&&(t=H(n))&&(s[t]=e[n]);return s}var U={};function F(e,t){U[e]=t}function L(e,t,n){var s=""+Math.abs(e),i=t-s.length;return(0<=e?n?"+":"":"-")+Math.pow(10,Math.max(0,i)).toString().substr(1)+s}var N=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,G=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,V={},E={};function I(e,t,n,s){var i=s;"string"==typeof s&&(i=function(){return this[s]()}),e&&(E[e]=i),t&&(E[t[0]]=function(){return L(i.apply(this,arguments),t[1],t[2])}),n&&(E[n]=function(){return this.localeData().ordinal(i.apply(this,arguments),e)})}function A(e,t){return e.isValid()?(t=j(t,e.localeData()),V[t]=V[t]||function(s){var e,i,t,r=s.match(N);for(e=0,i=r.length;e<i;e++)E[r[e]]?r[e]=E[r[e]]:r[e]=(t=r[e]).match(/\[[\s\S]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"");return function(e){var t,n="";for(t=0;t<i;t++)n+=b(r[t])?r[t].call(e,s):r[t];return n}}(t),V[t](e)):e.localeData().invalidDate()}function j(e,t){var n=5;function s(e){return t.longDateFormat(e)||e}for(G.lastIndex=0;0<=n&&G.test(e);)e=e.replace(G,s),G.lastIndex=0,n-=1;return e}var Z=/\d/,z=/\d\d/,$=/\d{3}/,q=/\d{4}/,J=/[+-]?\d{6}/,B=/\d\d?/,Q=/\d\d\d\d?/,X=/\d\d\d\d\d\d?/,K=/\d{1,3}/,ee=/\d{1,4}/,te=/[+-]?\d{1,6}/,ne=/\d+/,se=/[+-]?\d+/,ie=/Z|[+-]\d\d:?\d\d/gi,re=/Z|[+-]\d\d(?::?\d\d)?/gi,ae=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,oe={};function ue(e,n,s){oe[e]=b(n)?n:function(e,t){return e&&s?s:n}}function le(e,t){return m(oe,e)?oe[e](t._strict,t._locale):new RegExp(he(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,n,s,i){return t||n||s||i})))}function he(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var de={};function ce(e,n){var t,s=n;for("string"==typeof e&&(e=[e]),h(n)&&(s=function(e,t){t[n]=D(e)}),t=0;t<e.length;t++)de[e[t]]=s}function fe(e,i){ce(e,function(e,t,n,s){n._w=n._w||{},i(e,n._w,n,s)})}var me=0,_e=1,ye=2,ge=3,ve=4,pe=5,we=6,Me=7,ke=8;function Se(e){return De(e)?366:365}function De(e){return e%4==0&&e%100!=0||e%400==0}I("Y",0,0,function(){var e=this.year();return e<=9999?""+e:"+"+e}),I(0,["YY",2],0,function(){return this.year()%100}),I(0,["YYYY",4],0,"year"),I(0,["YYYYY",5],0,"year"),I(0,["YYYYYY",6,!0],0,"year"),C("year","y"),F("year",1),ue("Y",se),ue("YY",B,z),ue("YYYY",ee,q),ue("YYYYY",te,J),ue("YYYYYY",te,J),ce(["YYYYY","YYYYYY"],me),ce("YYYY",function(e,t){t[me]=2===e.length?c.parseTwoDigitYear(e):D(e)}),ce("YY",function(e,t){t[me]=c.parseTwoDigitYear(e)}),ce("Y",function(e,t){t[me]=parseInt(e,10)}),c.parseTwoDigitYear=function(e){return D(e)+(68<D(e)?1900:2e3)};var Ye,Oe=Te("FullYear",!0);function Te(t,n){return function(e){return null!=e?(xe(this,t,e),c.updateOffset(this,n),this):be(this,t)}}function be(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function xe(e,t,n){e.isValid()&&!isNaN(n)&&("FullYear"===t&&De(e.year())&&1===e.month()&&29===e.date()?e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),Pe(n,e.month())):e._d["set"+(e._isUTC?"UTC":"")+t](n))}function Pe(e,t){if(isNaN(e)||isNaN(t))return NaN;var n,s=(t%(n=12)+n)%n;return e+=(t-s)/12,1===s?De(e)?29:28:31-s%7%2}Ye=Array.prototype.indexOf?Array.prototype.indexOf:function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1},I("M",["MM",2],"Mo",function(){return this.month()+1}),I("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),I("MMMM",0,0,function(e){return this.localeData().months(this,e)}),C("month","M"),F("month",8),ue("M",B),ue("MM",B,z),ue("MMM",function(e,t){return t.monthsShortRegex(e)}),ue("MMMM",function(e,t){return t.monthsRegex(e)}),ce(["M","MM"],function(e,t){t[_e]=D(e)-1}),ce(["MMM","MMMM"],function(e,t,n,s){var i=n._locale.monthsParse(e,s,n._strict);null!=i?t[_e]=i:g(n).invalidMonth=e});var We=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,Ce="January_February_March_April_May_June_July_August_September_October_November_December".split("_");var He="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");function Re(e,t){var n;if(!e.isValid())return e;if("string"==typeof t)if(/^\d+$/.test(t))t=D(t);else if(!h(t=e.localeData().monthsParse(t)))return e;return n=Math.min(e.date(),Pe(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function Ue(e){return null!=e?(Re(this,e),c.updateOffset(this,!0),this):be(this,"Month")}var Fe=ae;var Le=ae;function Ne(){function e(e,t){return t.length-e.length}var t,n,s=[],i=[],r=[];for(t=0;t<12;t++)n=y([2e3,t]),s.push(this.monthsShort(n,"")),i.push(this.months(n,"")),r.push(this.months(n,"")),r.push(this.monthsShort(n,""));for(s.sort(e),i.sort(e),r.sort(e),t=0;t<12;t++)s[t]=he(s[t]),i[t]=he(i[t]);for(t=0;t<24;t++)r[t]=he(r[t]);this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+s.join("|")+")","i")}function Ge(e){var t;if(e<100&&0<=e){var n=Array.prototype.slice.call(arguments);n[0]=e+400,t=new Date(Date.UTC.apply(null,n)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)}else t=new Date(Date.UTC.apply(null,arguments));return t}function Ve(e,t,n){var s=7+t-n;return-((7+Ge(e,0,s).getUTCDay()-t)%7)+s-1}function Ee(e,t,n,s,i){var r,a,o=1+7*(t-1)+(7+n-s)%7+Ve(e,s,i);return a=o<=0?Se(r=e-1)+o:o>Se(e)?(r=e+1,o-Se(e)):(r=e,o),{year:r,dayOfYear:a}}function Ie(e,t,n){var s,i,r=Ve(e.year(),t,n),a=Math.floor((e.dayOfYear()-r-1)/7)+1;return a<1?s=a+Ae(i=e.year()-1,t,n):a>Ae(e.year(),t,n)?(s=a-Ae(e.year(),t,n),i=e.year()+1):(i=e.year(),s=a),{week:s,year:i}}function Ae(e,t,n){var s=Ve(e,t,n),i=Ve(e+1,t,n);return(Se(e)-s+i)/7}I("w",["ww",2],"wo","week"),I("W",["WW",2],"Wo","isoWeek"),C("week","w"),C("isoWeek","W"),F("week",5),F("isoWeek",5),ue("w",B),ue("ww",B,z),ue("W",B),ue("WW",B,z),fe(["w","ww","W","WW"],function(e,t,n,s){t[s.substr(0,1)]=D(e)});function je(e,t){return e.slice(t,7).concat(e.slice(0,t))}I("d",0,"do","day"),I("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),I("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),I("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),I("e",0,0,"weekday"),I("E",0,0,"isoWeekday"),C("day","d"),C("weekday","e"),C("isoWeekday","E"),F("day",11),F("weekday",11),F("isoWeekday",11),ue("d",B),ue("e",B),ue("E",B),ue("dd",function(e,t){return t.weekdaysMinRegex(e)}),ue("ddd",function(e,t){return t.weekdaysShortRegex(e)}),ue("dddd",function(e,t){return t.weekdaysRegex(e)}),fe(["dd","ddd","dddd"],function(e,t,n,s){var i=n._locale.weekdaysParse(e,s,n._strict);null!=i?t.d=i:g(n).invalidWeekday=e}),fe(["d","e","E"],function(e,t,n,s){t[s]=D(e)});var Ze="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");var ze="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");var $e="Su_Mo_Tu_We_Th_Fr_Sa".split("_");var qe=ae;var Je=ae;var Be=ae;function Qe(){function e(e,t){return t.length-e.length}var t,n,s,i,r,a=[],o=[],u=[],l=[];for(t=0;t<7;t++)n=y([2e3,1]).day(t),s=this.weekdaysMin(n,""),i=this.weekdaysShort(n,""),r=this.weekdays(n,""),a.push(s),o.push(i),u.push(r),l.push(s),l.push(i),l.push(r);for(a.sort(e),o.sort(e),u.sort(e),l.sort(e),t=0;t<7;t++)o[t]=he(o[t]),u[t]=he(u[t]),l[t]=he(l[t]);this._weekdaysRegex=new RegExp("^("+l.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+u.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+o.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+a.join("|")+")","i")}function Xe(){return this.hours()%12||12}function Ke(e,t){I(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}function et(e,t){return t._meridiemParse}I("H",["HH",2],0,"hour"),I("h",["hh",2],0,Xe),I("k",["kk",2],0,function(){return this.hours()||24}),I("hmm",0,0,function(){return""+Xe.apply(this)+L(this.minutes(),2)}),I("hmmss",0,0,function(){return""+Xe.apply(this)+L(this.minutes(),2)+L(this.seconds(),2)}),I("Hmm",0,0,function(){return""+this.hours()+L(this.minutes(),2)}),I("Hmmss",0,0,function(){return""+this.hours()+L(this.minutes(),2)+L(this.seconds(),2)}),Ke("a",!0),Ke("A",!1),C("hour","h"),F("hour",13),ue("a",et),ue("A",et),ue("H",B),ue("h",B),ue("k",B),ue("HH",B,z),ue("hh",B,z),ue("kk",B,z),ue("hmm",Q),ue("hmmss",X),ue("Hmm",Q),ue("Hmmss",X),ce(["H","HH"],ge),ce(["k","kk"],function(e,t,n){var s=D(e);t[ge]=24===s?0:s}),ce(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e}),ce(["h","hh"],function(e,t,n){t[ge]=D(e),g(n).bigHour=!0}),ce("hmm",function(e,t,n){var s=e.length-2;t[ge]=D(e.substr(0,s)),t[ve]=D(e.substr(s)),g(n).bigHour=!0}),ce("hmmss",function(e,t,n){var s=e.length-4,i=e.length-2;t[ge]=D(e.substr(0,s)),t[ve]=D(e.substr(s,2)),t[pe]=D(e.substr(i)),g(n).bigHour=!0}),ce("Hmm",function(e,t,n){var s=e.length-2;t[ge]=D(e.substr(0,s)),t[ve]=D(e.substr(s))}),ce("Hmmss",function(e,t,n){var s=e.length-4,i=e.length-2;t[ge]=D(e.substr(0,s)),t[ve]=D(e.substr(s,2)),t[pe]=D(e.substr(i))});var tt,nt=Te("Hours",!0),st={calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},invalidDate:"Invalid date",ordinal:"%d",dayOfMonthOrdinalParse:/\d{1,2}/,relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},months:Ce,monthsShort:He,week:{dow:0,doy:6},weekdays:Ze,weekdaysMin:$e,weekdaysShort:ze,meridiemParse:/[ap]\.?m?\.?/i},it={},rt={};function at(e){return e?e.toLowerCase().replace("_","-"):e}function ot(e){var t=null;if(!it[e]&&"undefined"!=typeof module&&module&&module.exports)try{t=tt._abbr,require("./locale/"+e),ut(t)}catch(e){}return it[e]}function ut(e,t){var n;return e&&((n=l(t)?ht(e):lt(e,t))?tt=n:"undefined"!=typeof console&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),tt._abbr}function lt(e,t){if(null===t)return delete it[e],null;var n,s=st;if(t.abbr=e,null!=it[e])T("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),s=it[e]._config;else if(null!=t.parentLocale)if(null!=it[t.parentLocale])s=it[t.parentLocale]._config;else{if(null==(n=ot(t.parentLocale)))return rt[t.parentLocale]||(rt[t.parentLocale]=[]),rt[t.parentLocale].push({name:e,config:t}),null;s=n._config}return it[e]=new P(x(s,t)),rt[e]&&rt[e].forEach(function(e){lt(e.name,e.config)}),ut(e),it[e]}function ht(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return tt;if(!o(e)){if(t=ot(e))return t;e=[e]}return function(e){for(var t,n,s,i,r=0;r<e.length;){for(t=(i=at(e[r]).split("-")).length,n=(n=at(e[r+1]))?n.split("-"):null;0<t;){if(s=ot(i.slice(0,t).join("-")))return s;if(n&&n.length>=t&&a(i,n,!0)>=t-1)break;t--}r++}return tt}(e)}function dt(e){var t,n=e._a;return n&&-2===g(e).overflow&&(t=n[_e]<0||11<n[_e]?_e:n[ye]<1||n[ye]>Pe(n[me],n[_e])?ye:n[ge]<0||24<n[ge]||24===n[ge]&&(0!==n[ve]||0!==n[pe]||0!==n[we])?ge:n[ve]<0||59<n[ve]?ve:n[pe]<0||59<n[pe]?pe:n[we]<0||999<n[we]?we:-1,g(e)._overflowDayOfYear&&(t<me||ye<t)&&(t=ye),g(e)._overflowWeeks&&-1===t&&(t=Me),g(e)._overflowWeekday&&-1===t&&(t=ke),g(e).overflow=t),e}function ct(e,t,n){return null!=e?e:null!=t?t:n}function ft(e){var t,n,s,i,r,a=[];if(!e._d){var o,u;for(o=e,u=new Date(c.now()),s=o._useUTC?[u.getUTCFullYear(),u.getUTCMonth(),u.getUTCDate()]:[u.getFullYear(),u.getMonth(),u.getDate()],e._w&&null==e._a[ye]&&null==e._a[_e]&&function(e){var t,n,s,i,r,a,o,u;if(null!=(t=e._w).GG||null!=t.W||null!=t.E)r=1,a=4,n=ct(t.GG,e._a[me],Ie(bt(),1,4).year),s=ct(t.W,1),((i=ct(t.E,1))<1||7<i)&&(u=!0);else{r=e._locale._week.dow,a=e._locale._week.doy;var l=Ie(bt(),r,a);n=ct(t.gg,e._a[me],l.year),s=ct(t.w,l.week),null!=t.d?((i=t.d)<0||6<i)&&(u=!0):null!=t.e?(i=t.e+r,(t.e<0||6<t.e)&&(u=!0)):i=r}s<1||s>Ae(n,r,a)?g(e)._overflowWeeks=!0:null!=u?g(e)._overflowWeekday=!0:(o=Ee(n,s,i,r,a),e._a[me]=o.year,e._dayOfYear=o.dayOfYear)}(e),null!=e._dayOfYear&&(r=ct(e._a[me],s[me]),(e._dayOfYear>Se(r)||0===e._dayOfYear)&&(g(e)._overflowDayOfYear=!0),n=Ge(r,0,e._dayOfYear),e._a[_e]=n.getUTCMonth(),e._a[ye]=n.getUTCDate()),t=0;t<3&&null==e._a[t];++t)e._a[t]=a[t]=s[t];for(;t<7;t++)e._a[t]=a[t]=null==e._a[t]?2===t?1:0:e._a[t];24===e._a[ge]&&0===e._a[ve]&&0===e._a[pe]&&0===e._a[we]&&(e._nextDay=!0,e._a[ge]=0),e._d=(e._useUTC?Ge:function(e,t,n,s,i,r,a){var o;return e<100&&0<=e?(o=new Date(e+400,t,n,s,i,r,a),isFinite(o.getFullYear())&&o.setFullYear(e)):o=new Date(e,t,n,s,i,r,a),o}).apply(null,a),i=e._useUTC?e._d.getUTCDay():e._d.getDay(),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[ge]=24),e._w&&void 0!==e._w.d&&e._w.d!==i&&(g(e).weekdayMismatch=!0)}}var mt=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,_t=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,yt=/Z|[+-]\d\d(?::?\d\d)?/,gt=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],vt=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],pt=/^\/?Date\((\-?\d+)/i;function wt(e){var t,n,s,i,r,a,o=e._i,u=mt.exec(o)||_t.exec(o);if(u){for(g(e).iso=!0,t=0,n=gt.length;t<n;t++)if(gt[t][1].exec(u[1])){i=gt[t][0],s=!1!==gt[t][2];break}if(null==i)return void(e._isValid=!1);if(u[3]){for(t=0,n=vt.length;t<n;t++)if(vt[t][1].exec(u[3])){r=(u[2]||" ")+vt[t][0];break}if(null==r)return void(e._isValid=!1)}if(!s&&null!=r)return void(e._isValid=!1);if(u[4]){if(!yt.exec(u[4]))return void(e._isValid=!1);a="Z"}e._f=i+(r||"")+(a||""),Yt(e)}else e._isValid=!1}var Mt=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;function kt(e,t,n,s,i,r){var a=[function(e){var t=parseInt(e,10);{if(t<=49)return 2e3+t;if(t<=999)return 1900+t}return t}(e),He.indexOf(t),parseInt(n,10),parseInt(s,10),parseInt(i,10)];return r&&a.push(parseInt(r,10)),a}var St={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function Dt(e){var t,n,s,i=Mt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,""));if(i){var r=kt(i[4],i[3],i[2],i[5],i[6],i[7]);if(t=i[1],n=r,s=e,t&&ze.indexOf(t)!==new Date(n[0],n[1],n[2]).getDay()&&(g(s).weekdayMismatch=!0,!(s._isValid=!1)))return;e._a=r,e._tzm=function(e,t,n){if(e)return St[e];if(t)return 0;var s=parseInt(n,10),i=s%100;return(s-i)/100*60+i}(i[8],i[9],i[10]),e._d=Ge.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),g(e).rfc2822=!0}else e._isValid=!1}function Yt(e){if(e._f!==c.ISO_8601)if(e._f!==c.RFC_2822){e._a=[],g(e).empty=!0;var t,n,s,i,r,a,o,u,l=""+e._i,h=l.length,d=0;for(s=j(e._f,e._locale).match(N)||[],t=0;t<s.length;t++)i=s[t],(n=(l.match(le(i,e))||[])[0])&&(0<(r=l.substr(0,l.indexOf(n))).length&&g(e).unusedInput.push(r),l=l.slice(l.indexOf(n)+n.length),d+=n.length),E[i]?(n?g(e).empty=!1:g(e).unusedTokens.push(i),a=i,u=e,null!=(o=n)&&m(de,a)&&de[a](o,u._a,u,a)):e._strict&&!n&&g(e).unusedTokens.push(i);g(e).charsLeftOver=h-d,0<l.length&&g(e).unusedInput.push(l),e._a[ge]<=12&&!0===g(e).bigHour&&0<e._a[ge]&&(g(e).bigHour=void 0),g(e).parsedDateParts=e._a.slice(0),g(e).meridiem=e._meridiem,e._a[ge]=function(e,t,n){var s;if(null==n)return t;return null!=e.meridiemHour?e.meridiemHour(t,n):(null!=e.isPM&&((s=e.isPM(n))&&t<12&&(t+=12),s||12!==t||(t=0)),t)}(e._locale,e._a[ge],e._meridiem),ft(e),dt(e)}else Dt(e);else wt(e)}function Ot(e){var t,n,s,i,r=e._i,a=e._f;return e._locale=e._locale||ht(e._l),null===r||void 0===a&&""===r?p({nullInput:!0}):("string"==typeof r&&(e._i=r=e._locale.preparse(r)),k(r)?new M(dt(r)):(d(r)?e._d=r:o(a)?function(e){var t,n,s,i,r;if(0===e._f.length)return g(e).invalidFormat=!0,e._d=new Date(NaN);for(i=0;i<e._f.length;i++)r=0,t=w({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),t._f=e._f[i],Yt(t),v(t)&&(r+=g(t).charsLeftOver,r+=10*g(t).unusedTokens.length,g(t).score=r,(null==s||r<s)&&(s=r,n=t));_(e,n||t)}(e):a?Yt(e):l(n=(t=e)._i)?t._d=new Date(c.now()):d(n)?t._d=new Date(n.valueOf()):"string"==typeof n?(s=t,null===(i=pt.exec(s._i))?(wt(s),!1===s._isValid&&(delete s._isValid,Dt(s),!1===s._isValid&&(delete s._isValid,c.createFromInputFallback(s)))):s._d=new Date(+i[1])):o(n)?(t._a=f(n.slice(0),function(e){return parseInt(e,10)}),ft(t)):u(n)?function(e){if(!e._d){var t=R(e._i);e._a=f([t.year,t.month,t.day||t.date,t.hour,t.minute,t.second,t.millisecond],function(e){return e&&parseInt(e,10)}),ft(e)}}(t):h(n)?t._d=new Date(n):c.createFromInputFallback(t),v(e)||(e._d=null),e))}function Tt(e,t,n,s,i){var r,a={};return!0!==n&&!1!==n||(s=n,n=void 0),(u(e)&&function(e){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(e).length;var t;for(t in e)if(e.hasOwnProperty(t))return!1;return!0}(e)||o(e)&&0===e.length)&&(e=void 0),a._isAMomentObject=!0,a._useUTC=a._isUTC=i,a._l=n,a._i=e,a._f=t,a._strict=s,(r=new M(dt(Ot(a))))._nextDay&&(r.add(1,"d"),r._nextDay=void 0),r}function bt(e,t,n,s){return Tt(e,t,n,s,!1)}c.createFromInputFallback=n("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))}),c.ISO_8601=function(){},c.RFC_2822=function(){};var xt=n("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=bt.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:p()}),Pt=n("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=bt.apply(null,arguments);return this.isValid()&&e.isValid()?this<e?this:e:p()});function Wt(e,t){var n,s;if(1===t.length&&o(t[0])&&(t=t[0]),!t.length)return bt();for(n=t[0],s=1;s<t.length;++s)t[s].isValid()&&!t[s][e](n)||(n=t[s]);return n}var Ct=["year","quarter","month","week","day","hour","minute","second","millisecond"];function Ht(e){var t=R(e),n=t.year||0,s=t.quarter||0,i=t.month||0,r=t.week||t.isoWeek||0,a=t.day||0,o=t.hour||0,u=t.minute||0,l=t.second||0,h=t.millisecond||0;this._isValid=function(e){for(var t in e)if(-1===Ye.call(Ct,t)||null!=e[t]&&isNaN(e[t]))return!1;for(var n=!1,s=0;s<Ct.length;++s)if(e[Ct[s]]){if(n)return!1;parseFloat(e[Ct[s]])!==D(e[Ct[s]])&&(n=!0)}return!0}(t),this._milliseconds=+h+1e3*l+6e4*u+1e3*o*60*60,this._days=+a+7*r,this._months=+i+3*s+12*n,this._data={},this._locale=ht(),this._bubble()}function Rt(e){return e instanceof Ht}function Ut(e){return e<0?-1*Math.round(-1*e):Math.round(e)}function Ft(e,n){I(e,0,0,function(){var e=this.utcOffset(),t="+";return e<0&&(e=-e,t="-"),t+L(~~(e/60),2)+n+L(~~e%60,2)})}Ft("Z",":"),Ft("ZZ",""),ue("Z",re),ue("ZZ",re),ce(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=Nt(re,e)});var Lt=/([\+\-]|\d\d)/gi;function Nt(e,t){var n=(t||"").match(e);if(null===n)return null;var s=((n[n.length-1]||[])+"").match(Lt)||["-",0,0],i=60*s[1]+D(s[2]);return 0===i?0:"+"===s[0]?i:-i}function Gt(e,t){var n,s;return t._isUTC?(n=t.clone(),s=(k(e)||d(e)?e.valueOf():bt(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+s),c.updateOffset(n,!1),n):bt(e).local()}function Vt(e){return 15*-Math.round(e._d.getTimezoneOffset()/15)}function Et(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}c.updateOffset=function(){};var It=/^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,At=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function jt(e,t){var n,s,i,r=e,a=null;return Rt(e)?r={ms:e._milliseconds,d:e._days,M:e._months}:h(e)?(r={},t?r[t]=e:r.milliseconds=e):(a=It.exec(e))?(n="-"===a[1]?-1:1,r={y:0,d:D(a[ye])*n,h:D(a[ge])*n,m:D(a[ve])*n,s:D(a[pe])*n,ms:D(Ut(1e3*a[we]))*n}):(a=At.exec(e))?(n="-"===a[1]?-1:1,r={y:Zt(a[2],n),M:Zt(a[3],n),w:Zt(a[4],n),d:Zt(a[5],n),h:Zt(a[6],n),m:Zt(a[7],n),s:Zt(a[8],n)}):null==r?r={}:"object"==typeof r&&("from"in r||"to"in r)&&(i=function(e,t){var n;if(!e.isValid()||!t.isValid())return{milliseconds:0,months:0};t=Gt(t,e),e.isBefore(t)?n=zt(e,t):((n=zt(t,e)).milliseconds=-n.milliseconds,n.months=-n.months);return n}(bt(r.from),bt(r.to)),(r={}).ms=i.milliseconds,r.M=i.months),s=new Ht(r),Rt(e)&&m(e,"_locale")&&(s._locale=e._locale),s}function Zt(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function zt(e,t){var n={};return n.months=t.month()-e.month()+12*(t.year()-e.year()),e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function $t(s,i){return function(e,t){var n;return null===t||isNaN(+t)||(T(i,"moment()."+i+"(period, number) is deprecated. Please use moment()."+i+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),n=e,e=t,t=n),qt(this,jt(e="string"==typeof e?+e:e,t),s),this}}function qt(e,t,n,s){var i=t._milliseconds,r=Ut(t._days),a=Ut(t._months);e.isValid()&&(s=null==s||s,a&&Re(e,be(e,"Month")+a*n),r&&xe(e,"Date",be(e,"Date")+r*n),i&&e._d.setTime(e._d.valueOf()+i*n),s&&c.updateOffset(e,r||a))}jt.fn=Ht.prototype,jt.invalid=function(){return jt(NaN)};var Jt=$t(1,"add"),Bt=$t(-1,"subtract");function Qt(e,t){var n=12*(t.year()-e.year())+(t.month()-e.month()),s=e.clone().add(n,"months");return-(n+(t-s<0?(t-s)/(s-e.clone().add(n-1,"months")):(t-s)/(e.clone().add(n+1,"months")-s)))||0}function Xt(e){var t;return void 0===e?this._locale._abbr:(null!=(t=ht(e))&&(this._locale=t),this)}c.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",c.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var Kt=n("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return void 0===e?this.localeData():this.locale(e)});function en(){return this._locale}var tn=126227808e5;function nn(e,t){return(e%t+t)%t}function sn(e,t,n){return e<100&&0<=e?new Date(e+400,t,n)-tn:new Date(e,t,n).valueOf()}function rn(e,t,n){return e<100&&0<=e?Date.UTC(e+400,t,n)-tn:Date.UTC(e,t,n)}function an(e,t){I(0,[e,e.length],0,t)}function on(e,t,n,s,i){var r;return null==e?Ie(this,s,i).year:((r=Ae(e,s,i))<t&&(t=r),function(e,t,n,s,i){var r=Ee(e,t,n,s,i),a=Ge(r.year,0,r.dayOfYear);return this.year(a.getUTCFullYear()),this.month(a.getUTCMonth()),this.date(a.getUTCDate()),this}.call(this,e,t,n,s,i))}I(0,["gg",2],0,function(){return this.weekYear()%100}),I(0,["GG",2],0,function(){return this.isoWeekYear()%100}),an("gggg","weekYear"),an("ggggg","weekYear"),an("GGGG","isoWeekYear"),an("GGGGG","isoWeekYear"),C("weekYear","gg"),C("isoWeekYear","GG"),F("weekYear",1),F("isoWeekYear",1),ue("G",se),ue("g",se),ue("GG",B,z),ue("gg",B,z),ue("GGGG",ee,q),ue("gggg",ee,q),ue("GGGGG",te,J),ue("ggggg",te,J),fe(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,s){t[s.substr(0,2)]=D(e)}),fe(["gg","GG"],function(e,t,n,s){t[s]=c.parseTwoDigitYear(e)}),I("Q",0,"Qo","quarter"),C("quarter","Q"),F("quarter",7),ue("Q",Z),ce("Q",function(e,t){t[_e]=3*(D(e)-1)}),I("D",["DD",2],"Do","date"),C("date","D"),F("date",9),ue("D",B),ue("DD",B,z),ue("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient}),ce(["D","DD"],ye),ce("Do",function(e,t){t[ye]=D(e.match(B)[0])});var un=Te("Date",!0);I("DDD",["DDDD",3],"DDDo","dayOfYear"),C("dayOfYear","DDD"),F("dayOfYear",4),ue("DDD",K),ue("DDDD",$),ce(["DDD","DDDD"],function(e,t,n){n._dayOfYear=D(e)}),I("m",["mm",2],0,"minute"),C("minute","m"),F("minute",14),ue("m",B),ue("mm",B,z),ce(["m","mm"],ve);var ln=Te("Minutes",!1);I("s",["ss",2],0,"second"),C("second","s"),F("second",15),ue("s",B),ue("ss",B,z),ce(["s","ss"],pe);var hn,dn=Te("Seconds",!1);for(I("S",0,0,function(){return~~(this.millisecond()/100)}),I(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),I(0,["SSS",3],0,"millisecond"),I(0,["SSSS",4],0,function(){return 10*this.millisecond()}),I(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),I(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),I(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),I(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),I(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),C("millisecond","ms"),F("millisecond",16),ue("S",K,Z),ue("SS",K,z),ue("SSS",K,$),hn="SSSS";hn.length<=9;hn+="S")ue(hn,ne);function cn(e,t){t[we]=D(1e3*("0."+e))}for(hn="S";hn.length<=9;hn+="S")ce(hn,cn);var fn=Te("Milliseconds",!1);I("z",0,0,"zoneAbbr"),I("zz",0,0,"zoneName");var mn=M.prototype;function _n(e){return e}mn.add=Jt,mn.calendar=function(e,t){var n=e||bt(),s=Gt(n,this).startOf("day"),i=c.calendarFormat(this,s)||"sameElse",r=t&&(b(t[i])?t[i].call(this,n):t[i]);return this.format(r||this.localeData().calendar(i,this,bt(n)))},mn.clone=function(){return new M(this)},mn.diff=function(e,t,n){var s,i,r;if(!this.isValid())return NaN;if(!(s=Gt(e,this)).isValid())return NaN;switch(i=6e4*(s.utcOffset()-this.utcOffset()),t=H(t)){case"year":r=Qt(this,s)/12;break;case"month":r=Qt(this,s);break;case"quarter":r=Qt(this,s)/3;break;case"second":r=(this-s)/1e3;break;case"minute":r=(this-s)/6e4;break;case"hour":r=(this-s)/36e5;break;case"day":r=(this-s-i)/864e5;break;case"week":r=(this-s-i)/6048e5;break;default:r=this-s}return n?r:S(r)},mn.endOf=function(e){var t;if(void 0===(e=H(e))||"millisecond"===e||!this.isValid())return this;var n=this._isUTC?rn:sn;switch(e){case"year":t=n(this.year()+1,0,1)-1;break;case"quarter":t=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=n(this.year(),this.month()+1,1)-1;break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=36e5-nn(t+(this._isUTC?0:6e4*this.utcOffset()),36e5)-1;break;case"minute":t=this._d.valueOf(),t+=6e4-nn(t,6e4)-1;break;case"second":t=this._d.valueOf(),t+=1e3-nn(t,1e3)-1;break}return this._d.setTime(t),c.updateOffset(this,!0),this},mn.format=function(e){e||(e=this.isUtc()?c.defaultFormatUtc:c.defaultFormat);var t=A(this,e);return this.localeData().postformat(t)},mn.from=function(e,t){return this.isValid()&&(k(e)&&e.isValid()||bt(e).isValid())?jt({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},mn.fromNow=function(e){return this.from(bt(),e)},mn.to=function(e,t){return this.isValid()&&(k(e)&&e.isValid()||bt(e).isValid())?jt({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},mn.toNow=function(e){return this.to(bt(),e)},mn.get=function(e){return b(this[e=H(e)])?this[e]():this},mn.invalidAt=function(){return g(this).overflow},mn.isAfter=function(e,t){var n=k(e)?e:bt(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=H(t)||"millisecond")?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf())},mn.isBefore=function(e,t){var n=k(e)?e:bt(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=H(t)||"millisecond")?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf())},mn.isBetween=function(e,t,n,s){var i=k(e)?e:bt(e),r=k(t)?t:bt(t);return!!(this.isValid()&&i.isValid()&&r.isValid())&&("("===(s=s||"()")[0]?this.isAfter(i,n):!this.isBefore(i,n))&&(")"===s[1]?this.isBefore(r,n):!this.isAfter(r,n))},mn.isSame=function(e,t){var n,s=k(e)?e:bt(e);return!(!this.isValid()||!s.isValid())&&("millisecond"===(t=H(t)||"millisecond")?this.valueOf()===s.valueOf():(n=s.valueOf(),this.clone().startOf(t).valueOf()<=n&&n<=this.clone().endOf(t).valueOf()))},mn.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)},mn.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)},mn.isValid=function(){return v(this)},mn.lang=Kt,mn.locale=Xt,mn.localeData=en,mn.max=Pt,mn.min=xt,mn.parsingFlags=function(){return _({},g(this))},mn.set=function(e,t){if("object"==typeof e)for(var n=function(e){var t=[];for(var n in e)t.push({unit:n,priority:U[n]});return t.sort(function(e,t){return e.priority-t.priority}),t}(e=R(e)),s=0;s<n.length;s++)this[n[s].unit](e[n[s].unit]);else if(b(this[e=H(e)]))return this[e](t);return this},mn.startOf=function(e){var t;if(void 0===(e=H(e))||"millisecond"===e||!this.isValid())return this;var n=this._isUTC?rn:sn;switch(e){case"year":t=n(this.year(),0,1);break;case"quarter":t=n(this.year(),this.month()-this.month()%3,1);break;case"month":t=n(this.year(),this.month(),1);break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=n(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=nn(t+(this._isUTC?0:6e4*this.utcOffset()),36e5);break;case"minute":t=this._d.valueOf(),t-=nn(t,6e4);break;case"second":t=this._d.valueOf(),t-=nn(t,1e3);break}return this._d.setTime(t),c.updateOffset(this,!0),this},mn.subtract=Bt,mn.toArray=function(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]},mn.toObject=function(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}},mn.toDate=function(){return new Date(this.valueOf())},mn.toISOString=function(e){if(!this.isValid())return null;var t=!0!==e,n=t?this.clone().utc():this;return n.year()<0||9999<n.year()?A(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):b(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+60*this.utcOffset()*1e3).toISOString().replace("Z",A(n,"Z")):A(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")},mn.inspect=function(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="";this.isLocal()||(e=0===this.utcOffset()?"moment.utc":"moment.parseZone",t="Z");var n="["+e+'("]',s=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",i=t+'[")]';return this.format(n+s+"-MM-DD[T]HH:mm:ss.SSS"+i)},mn.toJSON=function(){return this.isValid()?this.toISOString():null},mn.toString=function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},mn.unix=function(){return Math.floor(this.valueOf()/1e3)},mn.valueOf=function(){return this._d.valueOf()-6e4*(this._offset||0)},mn.creationData=function(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}},mn.year=Oe,mn.isLeapYear=function(){return De(this.year())},mn.weekYear=function(e){return on.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)},mn.isoWeekYear=function(e){return on.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)},mn.quarter=mn.quarters=function(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)},mn.month=Ue,mn.daysInMonth=function(){return Pe(this.year(),this.month())},mn.week=mn.weeks=function(e){var t=this.localeData().week(this);return null==e?t:this.add(7*(e-t),"d")},mn.isoWeek=mn.isoWeeks=function(e){var t=Ie(this,1,4).week;return null==e?t:this.add(7*(e-t),"d")},mn.weeksInYear=function(){var e=this.localeData()._week;return Ae(this.year(),e.dow,e.doy)},mn.isoWeeksInYear=function(){return Ae(this.year(),1,4)},mn.date=un,mn.day=mn.days=function(e){if(!this.isValid())return null!=e?this:NaN;var t,n,s=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(t=e,n=this.localeData(),e="string"!=typeof t?t:isNaN(t)?"number"==typeof(t=n.weekdaysParse(t))?t:null:parseInt(t,10),this.add(e-s,"d")):s},mn.weekday=function(e){if(!this.isValid())return null!=e?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return null==e?t:this.add(e-t,"d")},mn.isoWeekday=function(e){if(!this.isValid())return null!=e?this:NaN;if(null==e)return this.day()||7;var t,n,s=(t=e,n=this.localeData(),"string"==typeof t?n.weekdaysParse(t)%7||7:isNaN(t)?null:t);return this.day(this.day()%7?s:s-7)},mn.dayOfYear=function(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==e?t:this.add(e-t,"d")},mn.hour=mn.hours=nt,mn.minute=mn.minutes=ln,mn.second=mn.seconds=dn,mn.millisecond=mn.milliseconds=fn,mn.utcOffset=function(e,t,n){var s,i=this._offset||0;if(!this.isValid())return null!=e?this:NaN;if(null==e)return this._isUTC?i:Vt(this);if("string"==typeof e){if(null===(e=Nt(re,e)))return this}else Math.abs(e)<16&&!n&&(e*=60);return!this._isUTC&&t&&(s=Vt(this)),this._offset=e,this._isUTC=!0,null!=s&&this.add(s,"m"),i!==e&&(!t||this._changeInProgress?qt(this,jt(e-i,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,c.updateOffset(this,!0),this._changeInProgress=null)),this},mn.utc=function(e){return this.utcOffset(0,e)},mn.local=function(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Vt(this),"m")),this},mn.parseZone=function(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var e=Nt(ie,this._i);null!=e?this.utcOffset(e):this.utcOffset(0,!0)}return this},mn.hasAlignedHourOffset=function(e){return!!this.isValid()&&(e=e?bt(e).utcOffset():0,(this.utcOffset()-e)%60==0)},mn.isDST=function(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()},mn.isLocal=function(){return!!this.isValid()&&!this._isUTC},mn.isUtcOffset=function(){return!!this.isValid()&&this._isUTC},mn.isUtc=Et,mn.isUTC=Et,mn.zoneAbbr=function(){return this._isUTC?"UTC":""},mn.zoneName=function(){return this._isUTC?"Coordinated Universal Time":""},mn.dates=n("dates accessor is deprecated. Use date instead.",un),mn.months=n("months accessor is deprecated. Use month instead",Ue),mn.years=n("years accessor is deprecated. Use year instead",Oe),mn.zone=n("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",function(e,t){return null!=e?("string"!=typeof e&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}),mn.isDSTShifted=n("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",function(){if(!l(this._isDSTShifted))return this._isDSTShifted;var e={};if(w(e,this),(e=Ot(e))._a){var t=e._isUTC?y(e._a):bt(e._a);this._isDSTShifted=this.isValid()&&0<a(e._a,t.toArray())}else this._isDSTShifted=!1;return this._isDSTShifted});var yn=P.prototype;function gn(e,t,n,s){var i=ht(),r=y().set(s,t);return i[n](r,e)}function vn(e,t,n){if(h(e)&&(t=e,e=void 0),e=e||"",null!=t)return gn(e,t,n,"month");var s,i=[];for(s=0;s<12;s++)i[s]=gn(e,s,n,"month");return i}function pn(e,t,n,s){t=("boolean"==typeof e?h(t)&&(n=t,t=void 0):(t=e,e=!1,h(n=t)&&(n=t,t=void 0)),t||"");var i,r=ht(),a=e?r._week.dow:0;if(null!=n)return gn(t,(n+a)%7,s,"day");var o=[];for(i=0;i<7;i++)o[i]=gn(t,(i+a)%7,s,"day");return o}yn.calendar=function(e,t,n){var s=this._calendar[e]||this._calendar.sameElse;return b(s)?s.call(t,n):s},yn.longDateFormat=function(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)}),this._longDateFormat[e])},yn.invalidDate=function(){return this._invalidDate},yn.ordinal=function(e){return this._ordinal.replace("%d",e)},yn.preparse=_n,yn.postformat=_n,yn.relativeTime=function(e,t,n,s){var i=this._relativeTime[n];return b(i)?i(e,t,n,s):i.replace(/%d/i,e)},yn.pastFuture=function(e,t){var n=this._relativeTime[0<e?"future":"past"];return b(n)?n(t):n.replace(/%s/i,t)},yn.set=function(e){var t,n;for(n in e)b(t=e[n])?this[n]=t:this["_"+n]=t;this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)},yn.months=function(e,t){return e?o(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||We).test(t)?"format":"standalone"][e.month()]:o(this._months)?this._months:this._months.standalone},yn.monthsShort=function(e,t){return e?o(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[We.test(t)?"format":"standalone"][e.month()]:o(this._monthsShort)?this._monthsShort:this._monthsShort.standalone},yn.monthsParse=function(e,t,n){var s,i,r;if(this._monthsParseExact)return function(e,t,n){var s,i,r,a=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],s=0;s<12;++s)r=y([2e3,s]),this._shortMonthsParse[s]=this.monthsShort(r,"").toLocaleLowerCase(),this._longMonthsParse[s]=this.months(r,"").toLocaleLowerCase();return n?"MMM"===t?-1!==(i=Ye.call(this._shortMonthsParse,a))?i:null:-1!==(i=Ye.call(this._longMonthsParse,a))?i:null:"MMM"===t?-1!==(i=Ye.call(this._shortMonthsParse,a))?i:-1!==(i=Ye.call(this._longMonthsParse,a))?i:null:-1!==(i=Ye.call(this._longMonthsParse,a))?i:-1!==(i=Ye.call(this._shortMonthsParse,a))?i:null}.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),s=0;s<12;s++){if(i=y([2e3,s]),n&&!this._longMonthsParse[s]&&(this._longMonthsParse[s]=new RegExp("^"+this.months(i,"").replace(".","")+"$","i"),this._shortMonthsParse[s]=new RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),n||this._monthsParse[s]||(r="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),this._monthsParse[s]=new RegExp(r.replace(".",""),"i")),n&&"MMMM"===t&&this._longMonthsParse[s].test(e))return s;if(n&&"MMM"===t&&this._shortMonthsParse[s].test(e))return s;if(!n&&this._monthsParse[s].test(e))return s}},yn.monthsRegex=function(e){return this._monthsParseExact?(m(this,"_monthsRegex")||Ne.call(this),e?this._monthsStrictRegex:this._monthsRegex):(m(this,"_monthsRegex")||(this._monthsRegex=Le),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)},yn.monthsShortRegex=function(e){return this._monthsParseExact?(m(this,"_monthsRegex")||Ne.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(m(this,"_monthsShortRegex")||(this._monthsShortRegex=Fe),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)},yn.week=function(e){return Ie(e,this._week.dow,this._week.doy).week},yn.firstDayOfYear=function(){return this._week.doy},yn.firstDayOfWeek=function(){return this._week.dow},yn.weekdays=function(e,t){var n=o(this._weekdays)?this._weekdays:this._weekdays[e&&!0!==e&&this._weekdays.isFormat.test(t)?"format":"standalone"];return!0===e?je(n,this._week.dow):e?n[e.day()]:n},yn.weekdaysMin=function(e){return!0===e?je(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin},yn.weekdaysShort=function(e){return!0===e?je(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort},yn.weekdaysParse=function(e,t,n){var s,i,r;if(this._weekdaysParseExact)return function(e,t,n){var s,i,r,a=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],s=0;s<7;++s)r=y([2e3,1]).day(s),this._minWeekdaysParse[s]=this.weekdaysMin(r,"").toLocaleLowerCase(),this._shortWeekdaysParse[s]=this.weekdaysShort(r,"").toLocaleLowerCase(),this._weekdaysParse[s]=this.weekdays(r,"").toLocaleLowerCase();return n?"dddd"===t?-1!==(i=Ye.call(this._weekdaysParse,a))?i:null:"ddd"===t?-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:null:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:null:"dddd"===t?-1!==(i=Ye.call(this._weekdaysParse,a))?i:-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:null:"ddd"===t?-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:-1!==(i=Ye.call(this._weekdaysParse,a))?i:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:null:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:-1!==(i=Ye.call(this._weekdaysParse,a))?i:-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:null}.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),s=0;s<7;s++){if(i=y([2e3,1]).day(s),n&&!this._fullWeekdaysParse[s]&&(this._fullWeekdaysParse[s]=new RegExp("^"+this.weekdays(i,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[s]=new RegExp("^"+this.weekdaysShort(i,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[s]=new RegExp("^"+this.weekdaysMin(i,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[s]||(r="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[s]=new RegExp(r.replace(".",""),"i")),n&&"dddd"===t&&this._fullWeekdaysParse[s].test(e))return s;if(n&&"ddd"===t&&this._shortWeekdaysParse[s].test(e))return s;if(n&&"dd"===t&&this._minWeekdaysParse[s].test(e))return s;if(!n&&this._weekdaysParse[s].test(e))return s}},yn.weekdaysRegex=function(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Qe.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(m(this,"_weekdaysRegex")||(this._weekdaysRegex=qe),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)},yn.weekdaysShortRegex=function(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Qe.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(m(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Je),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)},yn.weekdaysMinRegex=function(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Qe.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(m(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Be),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)},yn.isPM=function(e){return"p"===(e+"").toLowerCase().charAt(0)},yn.meridiem=function(e,t,n){return 11<e?n?"pm":"PM":n?"am":"AM"},ut("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10;return e+(1===D(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")}}),c.lang=n("moment.lang is deprecated. Use moment.locale instead.",ut),c.langData=n("moment.langData is deprecated. Use moment.localeData instead.",ht);var wn=Math.abs;function Mn(e,t,n,s){var i=jt(t,n);return e._milliseconds+=s*i._milliseconds,e._days+=s*i._days,e._months+=s*i._months,e._bubble()}function kn(e){return e<0?Math.floor(e):Math.ceil(e)}function Sn(e){return 4800*e/146097}function Dn(e){return 146097*e/4800}function Yn(e){return function(){return this.as(e)}}var On=Yn("ms"),Tn=Yn("s"),bn=Yn("m"),xn=Yn("h"),Pn=Yn("d"),Wn=Yn("w"),Cn=Yn("M"),Hn=Yn("Q"),Rn=Yn("y");function Un(e){return function(){return this.isValid()?this._data[e]:NaN}}var Fn=Un("milliseconds"),Ln=Un("seconds"),Nn=Un("minutes"),Gn=Un("hours"),Vn=Un("days"),En=Un("months"),In=Un("years");var An=Math.round,jn={ss:44,s:45,m:45,h:22,d:26,M:11};var Zn=Math.abs;function zn(e){return(0<e)-(e<0)||+e}function $n(){if(!this.isValid())return this.localeData().invalidDate();var e,t,n=Zn(this._milliseconds)/1e3,s=Zn(this._days),i=Zn(this._months);t=S((e=S(n/60))/60),n%=60,e%=60;var r=S(i/12),a=i%=12,o=s,u=t,l=e,h=n?n.toFixed(3).replace(/\.?0+$/,""):"",d=this.asSeconds();if(!d)return"P0D";var c=d<0?"-":"",f=zn(this._months)!==zn(d)?"-":"",m=zn(this._days)!==zn(d)?"-":"",_=zn(this._milliseconds)!==zn(d)?"-":"";return c+"P"+(r?f+r+"Y":"")+(a?f+a+"M":"")+(o?m+o+"D":"")+(u||l||h?"T":"")+(u?_+u+"H":"")+(l?_+l+"M":"")+(h?_+h+"S":"")}var qn=Ht.prototype;return qn.isValid=function(){return this._isValid},qn.abs=function(){var e=this._data;return this._milliseconds=wn(this._milliseconds),this._days=wn(this._days),this._months=wn(this._months),e.milliseconds=wn(e.milliseconds),e.seconds=wn(e.seconds),e.minutes=wn(e.minutes),e.hours=wn(e.hours),e.months=wn(e.months),e.years=wn(e.years),this},qn.add=function(e,t){return Mn(this,e,t,1)},qn.subtract=function(e,t){return Mn(this,e,t,-1)},qn.as=function(e){if(!this.isValid())return NaN;var t,n,s=this._milliseconds;if("month"===(e=H(e))||"quarter"===e||"year"===e)switch(t=this._days+s/864e5,n=this._months+Sn(t),e){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(t=this._days+Math.round(Dn(this._months)),e){case"week":return t/7+s/6048e5;case"day":return t+s/864e5;case"hour":return 24*t+s/36e5;case"minute":return 1440*t+s/6e4;case"second":return 86400*t+s/1e3;case"millisecond":return Math.floor(864e5*t)+s;default:throw new Error("Unknown unit "+e)}},qn.asMilliseconds=On,qn.asSeconds=Tn,qn.asMinutes=bn,qn.asHours=xn,qn.asDays=Pn,qn.asWeeks=Wn,qn.asMonths=Cn,qn.asQuarters=Hn,qn.asYears=Rn,qn.valueOf=function(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*D(this._months/12):NaN},qn._bubble=function(){var e,t,n,s,i,r=this._milliseconds,a=this._days,o=this._months,u=this._data;return 0<=r&&0<=a&&0<=o||r<=0&&a<=0&&o<=0||(r+=864e5*kn(Dn(o)+a),o=a=0),u.milliseconds=r%1e3,e=S(r/1e3),u.seconds=e%60,t=S(e/60),u.minutes=t%60,n=S(t/60),u.hours=n%24,o+=i=S(Sn(a+=S(n/24))),a-=kn(Dn(i)),s=S(o/12),o%=12,u.days=a,u.months=o,u.years=s,this},qn.clone=function(){return jt(this)},qn.get=function(e){return e=H(e),this.isValid()?this[e+"s"]():NaN},qn.milliseconds=Fn,qn.seconds=Ln,qn.minutes=Nn,qn.hours=Gn,qn.days=Vn,qn.weeks=function(){return S(this.days()/7)},qn.months=En,qn.years=In,qn.humanize=function(e){if(!this.isValid())return this.localeData().invalidDate();var t,n,s,i,r,a,o,u,l,h,d,c=this.localeData(),f=(n=!e,s=c,i=jt(t=this).abs(),r=An(i.as("s")),a=An(i.as("m")),o=An(i.as("h")),u=An(i.as("d")),l=An(i.as("M")),h=An(i.as("y")),(d=r<=jn.ss&&["s",r]||r<jn.s&&["ss",r]||a<=1&&["m"]||a<jn.m&&["mm",a]||o<=1&&["h"]||o<jn.h&&["hh",o]||u<=1&&["d"]||u<jn.d&&["dd",u]||l<=1&&["M"]||l<jn.M&&["MM",l]||h<=1&&["y"]||["yy",h])[2]=n,d[3]=0<+t,d[4]=s,function(e,t,n,s,i){return i.relativeTime(t||1,!!n,e,s)}.apply(null,d));return e&&(f=c.pastFuture(+this,f)),c.postformat(f)},qn.toISOString=$n,qn.toString=$n,qn.toJSON=$n,qn.locale=Xt,qn.localeData=en,qn.toIsoString=n("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",$n),qn.lang=Kt,I("X",0,0,"unix"),I("x",0,0,"valueOf"),ue("x",se),ue("X",/[+-]?\d+(\.\d{1,3})?/),ce("X",function(e,t,n){n._d=new Date(1e3*parseFloat(e,10))}),ce("x",function(e,t,n){n._d=new Date(D(e))}),c.version="2.24.0",e=bt,c.fn=mn,c.min=function(){return Wt("isBefore",[].slice.call(arguments,0))},c.max=function(){return Wt("isAfter",[].slice.call(arguments,0))},c.now=function(){return Date.now?Date.now():+new Date},c.utc=y,c.unix=function(e){return bt(1e3*e)},c.months=function(e,t){return vn(e,t,"months")},c.isDate=d,c.locale=ut,c.invalid=p,c.duration=jt,c.isMoment=k,c.weekdays=function(e,t,n){return pn(e,t,n,"weekdays")},c.parseZone=function(){return bt.apply(null,arguments).parseZone()},c.localeData=ht,c.isDuration=Rt,c.monthsShort=function(e,t){return vn(e,t,"monthsShort")},c.weekdaysMin=function(e,t,n){return pn(e,t,n,"weekdaysMin")},c.defineLocale=lt,c.updateLocale=function(e,t){if(null!=t){var n,s,i=st;null!=(s=ot(e))&&(i=s._config),(n=new P(t=x(i,t))).parentLocale=it[e],it[e]=n,ut(e)}else null!=it[e]&&(null!=it[e].parentLocale?it[e]=it[e].parentLocale:null!=it[e]&&delete it[e]);return it[e]},c.locales=function(){return s(it)},c.weekdaysShort=function(e,t,n){return pn(e,t,n,"weekdaysShort")},c.normalizeUnits=H,c.relativeTimeRounding=function(e){return void 0===e?An:"function"==typeof e&&(An=e,!0)},c.relativeTimeThreshold=function(e,t){return void 0!==jn[e]&&(void 0===t?jn[e]:(jn[e]=t,"s"===e&&(jn.ss=t-1),!0))},c.calendarFormat=function(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"},c.prototype=mn,c.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},c});
/*@preserve
 * Tempus Dominus Bootstrap4 v5.1.2 (https://tempusdominus.github.io/bootstrap-4/)
 * Copyright 2016-2018 Jonathan Peterson
 * Licensed under MIT (https://github.com/tempusdominus/bootstrap-3/blob/master/LICENSE)
 */

if (typeof jQuery === 'undefined') {
  throw new Error('Tempus Dominus Bootstrap4\'s requires jQuery. jQuery must be included before Tempus Dominus Bootstrap4\'s JavaScript.');
}

+function ($) {
  var version = $.fn.jquery.split(' ')[0].split('.');
  if ((version[0] < 2 && version[1] < 9) || (version[0] === 1 && version[1] === 9 && version[2] < 1) || (version[0] >= 4)) {
    throw new Error('Tempus Dominus Bootstrap4\'s requires at least jQuery v3.0.0 but less than v4.0.0');
  }
}(jQuery);


if (typeof moment === 'undefined') {
  throw new Error('Tempus Dominus Bootstrap4\'s requires moment.js. Moment.js must be included before Tempus Dominus Bootstrap4\'s JavaScript.');
}

var version = moment.version.split('.')
if ((version[0] <= 2 && version[1] < 17) || (version[0] >= 3)) {
  throw new Error('Tempus Dominus Bootstrap4\'s requires at least moment.js v2.17.0 but less than v3.0.0');
}

+function () {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// ReSharper disable once InconsistentNaming
var DateTimePicker = function ($, moment) {
    // ReSharper disable InconsistentNaming
    var NAME = 'datetimepicker',
        DATA_KEY = '' + NAME,
        EVENT_KEY = '.' + DATA_KEY,
        DATA_API_KEY = '.data-api',
        Selector = {
        DATA_TOGGLE: '[data-toggle="' + DATA_KEY + '"]'
    },
        ClassName = {
        INPUT: NAME + '-input'
    },
        Event = {
        CHANGE: 'change' + EVENT_KEY,
        BLUR: 'blur' + EVENT_KEY,
        KEYUP: 'keyup' + EVENT_KEY,
        KEYDOWN: 'keydown' + EVENT_KEY,
        FOCUS: 'focus' + EVENT_KEY,
        CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY,
        //emitted
        UPDATE: 'update' + EVENT_KEY,
        ERROR: 'error' + EVENT_KEY,
        HIDE: 'hide' + EVENT_KEY,
        SHOW: 'show' + EVENT_KEY
    },
        DatePickerModes = [{
        CLASS_NAME: 'days',
        NAV_FUNCTION: 'M',
        NAV_STEP: 1
    }, {
        CLASS_NAME: 'months',
        NAV_FUNCTION: 'y',
        NAV_STEP: 1
    }, {
        CLASS_NAME: 'years',
        NAV_FUNCTION: 'y',
        NAV_STEP: 10
    }, {
        CLASS_NAME: 'decades',
        NAV_FUNCTION: 'y',
        NAV_STEP: 100
    }],
        KeyMap = {
        'up': 38,
        38: 'up',
        'down': 40,
        40: 'down',
        'left': 37,
        37: 'left',
        'right': 39,
        39: 'right',
        'tab': 9,
        9: 'tab',
        'escape': 27,
        27: 'escape',
        'enter': 13,
        13: 'enter',
        'pageUp': 33,
        33: 'pageUp',
        'pageDown': 34,
        34: 'pageDown',
        'shift': 16,
        16: 'shift',
        'control': 17,
        17: 'control',
        'space': 32,
        32: 'space',
        't': 84,
        84: 't',
        'delete': 46,
        46: 'delete'
    },
        ViewModes = ['times', 'days', 'months', 'years', 'decades'],
        keyState = {},
        keyPressHandled = {};

    var Default = {
        timeZone: '',
        format: false,
        dayViewHeaderFormat: 'MMMM YYYY',
        extraFormats: false,
        stepping: 1,
        minDate: false,
        maxDate: false,
        useCurrent: true,
        collapse: true,
        locale: moment.locale(),
        defaultDate: false,
        disabledDates: false,
        enabledDates: false,
        icons: {
            time: 'fa fa-clock-o',
            date: 'fa fa-calendar',
            up: 'fa fa-arrow-up',
            down: 'fa fa-arrow-down',
            previous: 'fa fa-chevron-left',
            next: 'fa fa-chevron-right',
            today: 'fa fa-calendar-check-o',
            clear: 'fa fa-delete',
            close: 'fa fa-times'
        },
        tooltips: {
            today: 'Go to today',
            clear: 'Clear selection',
            close: 'Close the picker',
            selectMonth: 'Select Month',
            prevMonth: 'Previous Month',
            nextMonth: 'Next Month',
            selectYear: 'Select Year',
            prevYear: 'Previous Year',
            nextYear: 'Next Year',
            selectDecade: 'Select Decade',
            prevDecade: 'Previous Decade',
            nextDecade: 'Next Decade',
            prevCentury: 'Previous Century',
            nextCentury: 'Next Century',
            pickHour: 'Pick Hour',
            incrementHour: 'Increment Hour',
            decrementHour: 'Decrement Hour',
            pickMinute: 'Pick Minute',
            incrementMinute: 'Increment Minute',
            decrementMinute: 'Decrement Minute',
            pickSecond: 'Pick Second',
            incrementSecond: 'Increment Second',
            decrementSecond: 'Decrement Second',
            togglePeriod: 'Toggle Period',
            selectTime: 'Select Time',
            selectDate: 'Select Date'
        },
        useStrict: false,
        sideBySide: false,
        daysOfWeekDisabled: false,
        calendarWeeks: false,
        viewMode: 'days',
        toolbarPlacement: 'default',
        buttons: {
            showToday: false,
            showClear: false,
            showClose: false
        },
        widgetPositioning: {
            horizontal: 'auto',
            vertical: 'auto'
        },
        widgetParent: null,
        ignoreReadonly: false,
        keepOpen: false,
        focusOnShow: true,
        inline: false,
        keepInvalid: false,
        keyBinds: {
            up: function up() {
                if (!this.widget) {
                    return false;
                }
                var d = this._dates[0] || this.getMoment();
                if (this.widget.find('.datepicker').is(':visible')) {
                    this.date(d.clone().subtract(7, 'd'));
                } else {
                    this.date(d.clone().add(this.stepping(), 'm'));
                }
                return true;
            },
            down: function down() {
                if (!this.widget) {
                    this.show();
                    return false;
                }
                var d = this._dates[0] || this.getMoment();
                if (this.widget.find('.datepicker').is(':visible')) {
                    this.date(d.clone().add(7, 'd'));
                } else {
                    this.date(d.clone().subtract(this.stepping(), 'm'));
                }
                return true;
            },
            'control up': function controlUp() {
                if (!this.widget) {
                    return false;
                }
                var d = this._dates[0] || this.getMoment();
                if (this.widget.find('.datepicker').is(':visible')) {
                    this.date(d.clone().subtract(1, 'y'));
                } else {
                    this.date(d.clone().add(1, 'h'));
                }
                return true;
            },
            'control down': function controlDown() {
                if (!this.widget) {
                    return false;
                }
                var d = this._dates[0] || this.getMoment();
                if (this.widget.find('.datepicker').is(':visible')) {
                    this.date(d.clone().add(1, 'y'));
                } else {
                    this.date(d.clone().subtract(1, 'h'));
                }
                return true;
            },
            left: function left() {
                if (!this.widget) {
                    return false;
                }
                var d = this._dates[0] || this.getMoment();
                if (this.widget.find('.datepicker').is(':visible')) {
                    this.date(d.clone().subtract(1, 'd'));
                }
                return true;
            },
            right: function right() {
                if (!this.widget) {
                    return false;
                }
                var d = this._dates[0] || this.getMoment();
                if (this.widget.find('.datepicker').is(':visible')) {
                    this.date(d.clone().add(1, 'd'));
                }
                return true;
            },
            pageUp: function pageUp() {
                if (!this.widget) {
                    return false;
                }
                var d = this._dates[0] || this.getMoment();
                if (this.widget.find('.datepicker').is(':visible')) {
                    this.date(d.clone().subtract(1, 'M'));
                }
                return true;
            },
            pageDown: function pageDown() {
                if (!this.widget) {
                    return false;
                }
                var d = this._dates[0] || this.getMoment();
                if (this.widget.find('.datepicker').is(':visible')) {
                    this.date(d.clone().add(1, 'M'));
                }
                return true;
            },
            enter: function enter() {
                if (!this.widget) {
                    return false;
                }
                this.hide();
                return true;
            },
            escape: function escape() {
                if (!this.widget) {
                    return false;
                }
                this.hide();
                return true;
            },
            'control space': function controlSpace() {
                if (!this.widget) {
                    return false;
                }
                if (this.widget.find('.timepicker').is(':visible')) {
                    this.widget.find('.btn[data-action="togglePeriod"]').click();
                }
                return true;
            },
            t: function t() {
                if (!this.widget) {
                    return false;
                }
                this.date(this.getMoment());
                return true;
            },
            'delete': function _delete() {
                if (!this.widget) {
                    return false;
                }
                this.clear();
                return true;
            }
        },
        debug: false,
        allowInputToggle: false,
        disabledTimeIntervals: false,
        disabledHours: false,
        enabledHours: false,
        viewDate: false,
        allowMultidate: false,
        multidateSeparator: ','
    };

    // ReSharper restore InconsistentNaming

    // ReSharper disable once DeclarationHides
    // ReSharper disable once InconsistentNaming

    var DateTimePicker = function () {
        /** @namespace eData.dateOptions */
        /** @namespace moment.tz */

        function DateTimePicker(element, options) {
            _classCallCheck(this, DateTimePicker);

            this._options = this._getOptions(options);
            this._element = element;
            this._dates = [];
            this._datesFormatted = [];
            this._viewDate = null;
            this.unset = true;
            this.component = false;
            this.widget = false;
            this.use24Hours = null;
            this.actualFormat = null;
            this.parseFormats = null;
            this.currentViewMode = null;
            this.MinViewModeNumber = 0;

            this._int();
        }

        /**
         * @return {string}
         */


        //private

        DateTimePicker.prototype._int = function _int() {
            var targetInput = this._element.data('target-input');
            if (this._element.is('input')) {
                this.input = this._element;
            } else if (targetInput !== undefined) {
                if (targetInput === 'nearest') {
                    this.input = this._element.find('input');
                } else {
                    this.input = $(targetInput);
                }
            }

            this._dates = [];
            this._dates[0] = this.getMoment();
            this._viewDate = this.getMoment().clone();

            $.extend(true, this._options, this._dataToOptions());

            this.options(this._options);

            this._initFormatting();

            if (this.input !== undefined && this.input.is('input') && this.input.val().trim().length !== 0) {
                this._setValue(this._parseInputDate(this.input.val().trim()), 0);
            } else if (this._options.defaultDate && this.input !== undefined && this.input.attr('placeholder') === undefined) {
                this._setValue(this._options.defaultDate, 0);
            }
            if (this._options.inline) {
                this.show();
            }
        };

        DateTimePicker.prototype._update = function _update() {
            if (!this.widget) {
                return;
            }
            this._fillDate();
            this._fillTime();
        };

        DateTimePicker.prototype._setValue = function _setValue(targetMoment, index) {
            var oldDate = this.unset ? null : this._dates[index];
            var outpValue = '';
            // case of calling setValue(null or false)
            if (!targetMoment) {
                if (!this._options.allowMultidate || this._dates.length === 1) {
                    this.unset = true;
                    this._dates = [];
                    this._datesFormatted = [];
                } else {
                    outpValue = this._element.data('date') + ',';
                    outpValue = outpValue.replace(oldDate.format(this.actualFormat) + ',', '').replace(',,', '').replace(/,\s*$/, '');
                    this._dates.splice(index, 1);
                    this._datesFormatted.splice(index, 1);
                }
                if (this.input !== undefined) {
                    this.input.val(outpValue);
                    this.input.trigger('input');
                }
                this._element.data('date', outpValue);
                this._notifyEvent({
                    type: DateTimePicker.Event.CHANGE,
                    date: false,
                    oldDate: oldDate
                });
                this._update();
                return;
            }

            targetMoment = targetMoment.clone().locale(this._options.locale);

            if (this._hasTimeZone()) {
                targetMoment.tz(this._options.timeZone);
            }

            if (this._options.stepping !== 1) {
                targetMoment.minutes(Math.round(targetMoment.minutes() / this._options.stepping) * this._options.stepping).seconds(0);
            }

            if (this._isValid(targetMoment)) {
                this._dates[index] = targetMoment;
                this._datesFormatted[index] = targetMoment.format('YYYY-MM-DD');
                this._viewDate = targetMoment.clone();
                if (this._options.allowMultidate && this._dates.length > 1) {
                    for (var i = 0; i < this._dates.length; i++) {
                        outpValue += '' + this._dates[i].format(this.actualFormat) + this._options.multidateSeparator;
                    }
                    outpValue = outpValue.replace(/,\s*$/, '');
                } else {
                    outpValue = this._dates[index].format(this.actualFormat);
                }
                if (this.input !== undefined) {
                    this.input.val(outpValue);
                    this.input.trigger('input');
                }
                this._element.data('date', outpValue);

                this.unset = false;
                this._update();
                this._notifyEvent({
                    type: DateTimePicker.Event.CHANGE,
                    date: this._dates[index].clone(),
                    oldDate: oldDate
                });
            } else {
                if (!this._options.keepInvalid) {
                    if (this.input !== undefined) {
                        this.input.val('' + (this.unset ? '' : this._dates[index].format(this.actualFormat)));
                        this.input.trigger('input');
                    }
                } else {
                    this._notifyEvent({
                        type: DateTimePicker.Event.CHANGE,
                        date: targetMoment,
                        oldDate: oldDate
                    });
                }
                this._notifyEvent({
                    type: DateTimePicker.Event.ERROR,
                    date: targetMoment,
                    oldDate: oldDate
                });
            }
        };

        DateTimePicker.prototype._change = function _change(e) {
            var val = $(e.target).val().trim(),
                parsedDate = val ? this._parseInputDate(val) : null;
            this._setValue(parsedDate);
            e.stopImmediatePropagation();
            return false;
        };

        //noinspection JSMethodCanBeStatic


        DateTimePicker.prototype._getOptions = function _getOptions(options) {
            options = $.extend(true, {}, Default, options);
            return options;
        };

        DateTimePicker.prototype._hasTimeZone = function _hasTimeZone() {
            return moment.tz !== undefined && this._options.timeZone !== undefined && this._options.timeZone !== null && this._options.timeZone !== '';
        };

        DateTimePicker.prototype._isEnabled = function _isEnabled(granularity) {
            if (typeof granularity !== 'string' || granularity.length > 1) {
                throw new TypeError('isEnabled expects a single character string parameter');
            }
            switch (granularity) {
                case 'y':
                    return this.actualFormat.indexOf('Y') !== -1;
                case 'M':
                    return this.actualFormat.indexOf('M') !== -1;
                case 'd':
                    return this.actualFormat.toLowerCase().indexOf('d') !== -1;
                case 'h':
                case 'H':
                    return this.actualFormat.toLowerCase().indexOf('h') !== -1;
                case 'm':
                    return this.actualFormat.indexOf('m') !== -1;
                case 's':
                    return this.actualFormat.indexOf('s') !== -1;
                case 'a':
                case 'A':
                    return this.actualFormat.toLowerCase().indexOf('a') !== -1;
                default:
                    return false;
            }
        };

        DateTimePicker.prototype._hasTime = function _hasTime() {
            return this._isEnabled('h') || this._isEnabled('m') || this._isEnabled('s');
        };

        DateTimePicker.prototype._hasDate = function _hasDate() {
            return this._isEnabled('y') || this._isEnabled('M') || this._isEnabled('d');
        };

        DateTimePicker.prototype._dataToOptions = function _dataToOptions() {
            var eData = this._element.data();
            var dataOptions = {};

            if (eData.dateOptions && eData.dateOptions instanceof Object) {
                dataOptions = $.extend(true, dataOptions, eData.dateOptions);
            }

            $.each(this._options, function (key) {
                var attributeName = 'date' + key.charAt(0).toUpperCase() + key.slice(1); //todo data api key
                if (eData[attributeName] !== undefined) {
                    dataOptions[key] = eData[attributeName];
                } else {
                    delete dataOptions[key];
                }
            });
            return dataOptions;
        };

        DateTimePicker.prototype._notifyEvent = function _notifyEvent(e) {
            if (e.type === DateTimePicker.Event.CHANGE && (e.date && e.date.isSame(e.oldDate)) || !e.date && !e.oldDate) {
                return;
            }
            this._element.trigger(e);
        };

        DateTimePicker.prototype._viewUpdate = function _viewUpdate(e) {
            if (e === 'y') {
                e = 'YYYY';
            }
            this._notifyEvent({
                type: DateTimePicker.Event.UPDATE,
                change: e,
                viewDate: this._viewDate.clone()
            });
        };

        DateTimePicker.prototype._showMode = function _showMode(dir) {
            if (!this.widget) {
                return;
            }
            if (dir) {
                this.currentViewMode = Math.max(this.MinViewModeNumber, Math.min(3, this.currentViewMode + dir));
            }
            this.widget.find('.datepicker > div').hide().filter('.datepicker-' + DatePickerModes[this.currentViewMode].CLASS_NAME).show();
        };

        DateTimePicker.prototype._isInDisabledDates = function _isInDisabledDates(testDate) {
            return this._options.disabledDates[testDate.format('YYYY-MM-DD')] === true;
        };

        DateTimePicker.prototype._isInEnabledDates = function _isInEnabledDates(testDate) {
            return this._options.enabledDates[testDate.format('YYYY-MM-DD')] === true;
        };

        DateTimePicker.prototype._isInDisabledHours = function _isInDisabledHours(testDate) {
            return this._options.disabledHours[testDate.format('H')] === true;
        };

        DateTimePicker.prototype._isInEnabledHours = function _isInEnabledHours(testDate) {
            return this._options.enabledHours[testDate.format('H')] === true;
        };

        DateTimePicker.prototype._isValid = function _isValid(targetMoment, granularity) {
            if (!targetMoment.isValid()) {
                return false;
            }
            if (this._options.disabledDates && granularity === 'd' && this._isInDisabledDates(targetMoment)) {
                return false;
            }
            if (this._options.enabledDates && granularity === 'd' && !this._isInEnabledDates(targetMoment)) {
                return false;
            }
            if (this._options.minDate && targetMoment.isBefore(this._options.minDate, granularity)) {
                return false;
            }
            if (this._options.maxDate && targetMoment.isAfter(this._options.maxDate, granularity)) {
                return false;
            }
            if (this._options.daysOfWeekDisabled && granularity === 'd' && this._options.daysOfWeekDisabled.indexOf(targetMoment.day()) !== -1) {
                return false;
            }
            if (this._options.disabledHours && (granularity === 'h' || granularity === 'm' || granularity === 's') && this._isInDisabledHours(targetMoment)) {
                return false;
            }
            if (this._options.enabledHours && (granularity === 'h' || granularity === 'm' || granularity === 's') && !this._isInEnabledHours(targetMoment)) {
                return false;
            }
            if (this._options.disabledTimeIntervals && (granularity === 'h' || granularity === 'm' || granularity === 's')) {
                var found = false;
                $.each(this._options.disabledTimeIntervals, function () {
                    if (targetMoment.isBetween(this[0], this[1])) {
                        found = true;
                        return false;
                    }
                });
                if (found) {
                    return false;
                }
            }
            return true;
        };

        DateTimePicker.prototype._parseInputDate = function _parseInputDate(inputDate) {
            if (this._options.parseInputDate === undefined) {
                if (!moment.isMoment(inputDate)) {
                    inputDate = this.getMoment(inputDate);
                }
            } else {
                inputDate = this._options.parseInputDate(inputDate);
            }
            //inputDate.locale(this.options.locale);
            return inputDate;
        };

        DateTimePicker.prototype._keydown = function _keydown(e) {
            var handler = null,
                index = void 0,
                index2 = void 0,
                keyBindKeys = void 0,
                allModifiersPressed = void 0;
            var pressedKeys = [],
                pressedModifiers = {},
                currentKey = e.which,
                pressed = 'p';

            keyState[currentKey] = pressed;

            for (index in keyState) {
                if (keyState.hasOwnProperty(index) && keyState[index] === pressed) {
                    pressedKeys.push(index);
                    if (parseInt(index, 10) !== currentKey) {
                        pressedModifiers[index] = true;
                    }
                }
            }

            for (index in this._options.keyBinds) {
                if (this._options.keyBinds.hasOwnProperty(index) && typeof this._options.keyBinds[index] === 'function') {
                    keyBindKeys = index.split(' ');
                    if (keyBindKeys.length === pressedKeys.length && KeyMap[currentKey] === keyBindKeys[keyBindKeys.length - 1]) {
                        allModifiersPressed = true;
                        for (index2 = keyBindKeys.length - 2; index2 >= 0; index2--) {
                            if (!(KeyMap[keyBindKeys[index2]] in pressedModifiers)) {
                                allModifiersPressed = false;
                                break;
                            }
                        }
                        if (allModifiersPressed) {
                            handler = this._options.keyBinds[index];
                            break;
                        }
                    }
                }
            }

            if (handler) {
                if (handler.call(this)) {
                    e.stopPropagation();
                    e.preventDefault();
                }
            }
        };

        //noinspection JSMethodCanBeStatic,SpellCheckingInspection


        DateTimePicker.prototype._keyup = function _keyup(e) {
            keyState[e.which] = 'r';
            if (keyPressHandled[e.which]) {
                keyPressHandled[e.which] = false;
                e.stopPropagation();
                e.preventDefault();
            }
        };

        DateTimePicker.prototype._indexGivenDates = function _indexGivenDates(givenDatesArray) {
            // Store given enabledDates and disabledDates as keys.
            // This way we can check their existence in O(1) time instead of looping through whole array.
            // (for example: options.enabledDates['2014-02-27'] === true)
            var givenDatesIndexed = {},
                self = this;
            $.each(givenDatesArray, function () {
                var dDate = self._parseInputDate(this);
                if (dDate.isValid()) {
                    givenDatesIndexed[dDate.format('YYYY-MM-DD')] = true;
                }
            });
            return Object.keys(givenDatesIndexed).length ? givenDatesIndexed : false;
        };

        DateTimePicker.prototype._indexGivenHours = function _indexGivenHours(givenHoursArray) {
            // Store given enabledHours and disabledHours as keys.
            // This way we can check their existence in O(1) time instead of looping through whole array.
            // (for example: options.enabledHours['2014-02-27'] === true)
            var givenHoursIndexed = {};
            $.each(givenHoursArray, function () {
                givenHoursIndexed[this] = true;
            });
            return Object.keys(givenHoursIndexed).length ? givenHoursIndexed : false;
        };

        DateTimePicker.prototype._initFormatting = function _initFormatting() {
            var format = this._options.format || 'L LT',
                self = this;

            this.actualFormat = format.replace(/(\[[^\[]*])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function (formatInput) {
                return self._dates[0].localeData().longDateFormat(formatInput) || formatInput; //todo taking the first date should be ok
            });

            this.parseFormats = this._options.extraFormats ? this._options.extraFormats.slice() : [];
            if (this.parseFormats.indexOf(format) < 0 && this.parseFormats.indexOf(this.actualFormat) < 0) {
                this.parseFormats.push(this.actualFormat);
            }

            this.use24Hours = this.actualFormat.toLowerCase().indexOf('a') < 1 && this.actualFormat.replace(/\[.*?]/g, '').indexOf('h') < 1;

            if (this._isEnabled('y')) {
                this.MinViewModeNumber = 2;
            }
            if (this._isEnabled('M')) {
                this.MinViewModeNumber = 1;
            }
            if (this._isEnabled('d')) {
                this.MinViewModeNumber = 0;
            }

            this.currentViewMode = Math.max(this.MinViewModeNumber, this.currentViewMode);

            if (!this.unset) {
                this._setValue(this._dates[0], 0);
            }
        };

        DateTimePicker.prototype._getLastPickedDate = function _getLastPickedDate() {
            return this._dates[this._getLastPickedDateIndex()];
        };

        DateTimePicker.prototype._getLastPickedDateIndex = function _getLastPickedDateIndex() {
            return this._dates.length - 1;
        };

        //public


        DateTimePicker.prototype.getMoment = function getMoment(d) {
            var returnMoment = void 0;

            if (d === undefined || d === null) {
                returnMoment = moment(); //TODO should this use format? and locale?
            } else if (this._hasTimeZone()) {
                // There is a string to parse and a default time zone
                // parse with the tz function which takes a default time zone if it is not in the format string
                returnMoment = moment.tz(d, this.parseFormats, this._options.locale, this._options.useStrict, this._options.timeZone);
            } else {
                returnMoment = moment(d, this.parseFormats, this._options.locale, this._options.useStrict);
            }

            if (this._hasTimeZone()) {
                returnMoment.tz(this._options.timeZone);
            }

            return returnMoment;
        };

        DateTimePicker.prototype.toggle = function toggle() {
            return this.widget ? this.hide() : this.show();
        };

        DateTimePicker.prototype.ignoreReadonly = function ignoreReadonly(_ignoreReadonly) {
            if (arguments.length === 0) {
                return this._options.ignoreReadonly;
            }
            if (typeof _ignoreReadonly !== 'boolean') {
                throw new TypeError('ignoreReadonly () expects a boolean parameter');
            }
            this._options.ignoreReadonly = _ignoreReadonly;
        };

        DateTimePicker.prototype.options = function options(newOptions) {
            if (arguments.length === 0) {
                return $.extend(true, {}, this._options);
            }

            if (!(newOptions instanceof Object)) {
                throw new TypeError('options() this.options parameter should be an object');
            }
            $.extend(true, this._options, newOptions);
            var self = this;
            $.each(this._options, function (key, value) {
                if (self[key] !== undefined) {
                    self[key](value);
                }
            });
        };

        DateTimePicker.prototype.date = function date(newDate, index) {
            index = index || 0;
            if (arguments.length === 0) {
                if (this.unset) {
                    return null;
                }
                if (this._options.allowMultidate) {
                    return this._dates.join(this._options.multidateSeparator);
                } else {
                    return this._dates[index].clone();
                }
            }

            if (newDate !== null && typeof newDate !== 'string' && !moment.isMoment(newDate) && !(newDate instanceof Date)) {
                throw new TypeError('date() parameter must be one of [null, string, moment or Date]');
            }

            this._setValue(newDate === null ? null : this._parseInputDate(newDate), index);
        };

        DateTimePicker.prototype.format = function format(newFormat) {
            if (arguments.length === 0) {
                return this._options.format;
            }

            if (typeof newFormat !== 'string' && (typeof newFormat !== 'boolean' || newFormat !== false)) {
                throw new TypeError('format() expects a string or boolean:false parameter ' + newFormat);
            }

            this._options.format = newFormat;
            if (this.actualFormat) {
                this._initFormatting(); // reinitialize formatting
            }
        };

        DateTimePicker.prototype.timeZone = function timeZone(newZone) {
            if (arguments.length === 0) {
                return this._options.timeZone;
            }

            if (typeof newZone !== 'string') {
                throw new TypeError('newZone() expects a string parameter');
            }

            this._options.timeZone = newZone;
        };

        DateTimePicker.prototype.dayViewHeaderFormat = function dayViewHeaderFormat(newFormat) {
            if (arguments.length === 0) {
                return this._options.dayViewHeaderFormat;
            }

            if (typeof newFormat !== 'string') {
                throw new TypeError('dayViewHeaderFormat() expects a string parameter');
            }

            this._options.dayViewHeaderFormat = newFormat;
        };

        DateTimePicker.prototype.extraFormats = function extraFormats(formats) {
            if (arguments.length === 0) {
                return this._options.extraFormats;
            }

            if (formats !== false && !(formats instanceof Array)) {
                throw new TypeError('extraFormats() expects an array or false parameter');
            }

            this._options.extraFormats = formats;
            if (this.parseFormats) {
                this._initFormatting(); // reinit formatting
            }
        };

        DateTimePicker.prototype.disabledDates = function disabledDates(dates) {
            if (arguments.length === 0) {
                return this._options.disabledDates ? $.extend({}, this._options.disabledDates) : this._options.disabledDates;
            }

            if (!dates) {
                this._options.disabledDates = false;
                this._update();
                return true;
            }
            if (!(dates instanceof Array)) {
                throw new TypeError('disabledDates() expects an array parameter');
            }
            this._options.disabledDates = this._indexGivenDates(dates);
            this._options.enabledDates = false;
            this._update();
        };

        DateTimePicker.prototype.enabledDates = function enabledDates(dates) {
            if (arguments.length === 0) {
                return this._options.enabledDates ? $.extend({}, this._options.enabledDates) : this._options.enabledDates;
            }

            if (!dates) {
                this._options.enabledDates = false;
                this._update();
                return true;
            }
            if (!(dates instanceof Array)) {
                throw new TypeError('enabledDates() expects an array parameter');
            }
            this._options.enabledDates = this._indexGivenDates(dates);
            this._options.disabledDates = false;
            this._update();
        };

        DateTimePicker.prototype.daysOfWeekDisabled = function daysOfWeekDisabled(_daysOfWeekDisabled) {
            if (arguments.length === 0) {
                return this._options.daysOfWeekDisabled.splice(0);
            }

            if (typeof _daysOfWeekDisabled === 'boolean' && !_daysOfWeekDisabled) {
                this._options.daysOfWeekDisabled = false;
                this._update();
                return true;
            }

            if (!(_daysOfWeekDisabled instanceof Array)) {
                throw new TypeError('daysOfWeekDisabled() expects an array parameter');
            }
            this._options.daysOfWeekDisabled = _daysOfWeekDisabled.reduce(function (previousValue, currentValue) {
                currentValue = parseInt(currentValue, 10);
                if (currentValue > 6 || currentValue < 0 || isNaN(currentValue)) {
                    return previousValue;
                }
                if (previousValue.indexOf(currentValue) === -1) {
                    previousValue.push(currentValue);
                }
                return previousValue;
            }, []).sort();
            if (this._options.useCurrent && !this._options.keepInvalid) {
                for (var i = 0; i < this._dates.length; i++) {
                    var tries = 0;
                    while (!this._isValid(this._dates[i], 'd')) {
                        this._dates[i].add(1, 'd');
                        if (tries === 31) {
                            throw 'Tried 31 times to find a valid date';
                        }
                        tries++;
                    }
                    this._setValue(this._dates[i], i);
                }
            }
            this._update();
        };

        DateTimePicker.prototype.maxDate = function maxDate(_maxDate) {
            if (arguments.length === 0) {
                return this._options.maxDate ? this._options.maxDate.clone() : this._options.maxDate;
            }

            if (typeof _maxDate === 'boolean' && _maxDate === false) {
                this._options.maxDate = false;
                this._update();
                return true;
            }

            if (typeof _maxDate === 'string') {
                if (_maxDate === 'now' || _maxDate === 'moment') {
                    _maxDate = this.getMoment();
                }
            }

            var parsedDate = this._parseInputDate(_maxDate);

            if (!parsedDate.isValid()) {
                throw new TypeError('maxDate() Could not parse date parameter: ' + _maxDate);
            }
            if (this._options.minDate && parsedDate.isBefore(this._options.minDate)) {
                throw new TypeError('maxDate() date parameter is before this.options.minDate: ' + parsedDate.format(this.actualFormat));
            }
            this._options.maxDate = parsedDate;
            for (var i = 0; i < this._dates.length; i++) {
                if (this._options.useCurrent && !this._options.keepInvalid && this._dates[i].isAfter(_maxDate)) {
                    this._setValue(this._options.maxDate, i);
                }
            }
            if (this._viewDate.isAfter(parsedDate)) {
                this._viewDate = parsedDate.clone().subtract(this._options.stepping, 'm');
            }
            this._update();
        };

        DateTimePicker.prototype.minDate = function minDate(_minDate) {
            if (arguments.length === 0) {
                return this._options.minDate ? this._options.minDate.clone() : this._options.minDate;
            }

            if (typeof _minDate === 'boolean' && _minDate === false) {
                this._options.minDate = false;
                this._update();
                return true;
            }

            if (typeof _minDate === 'string') {
                if (_minDate === 'now' || _minDate === 'moment') {
                    _minDate = this.getMoment();
                }
            }

            var parsedDate = this._parseInputDate(_minDate);

            if (!parsedDate.isValid()) {
                throw new TypeError('minDate() Could not parse date parameter: ' + _minDate);
            }
            if (this._options.maxDate && parsedDate.isAfter(this._options.maxDate)) {
                throw new TypeError('minDate() date parameter is after this.options.maxDate: ' + parsedDate.format(this.actualFormat));
            }
            this._options.minDate = parsedDate;
            for (var i = 0; i < this._dates.length; i++) {
                if (this._options.useCurrent && !this._options.keepInvalid && this._dates[i].isBefore(_minDate)) {
                    this._setValue(this._options.minDate, i);
                }
            }
            if (this._viewDate.isBefore(parsedDate)) {
                this._viewDate = parsedDate.clone().add(this._options.stepping, 'm');
            }
            this._update();
        };

        DateTimePicker.prototype.defaultDate = function defaultDate(_defaultDate) {
            if (arguments.length === 0) {
                return this._options.defaultDate ? this._options.defaultDate.clone() : this._options.defaultDate;
            }
            if (!_defaultDate) {
                this._options.defaultDate = false;
                return true;
            }

            if (typeof _defaultDate === 'string') {
                if (_defaultDate === 'now' || _defaultDate === 'moment') {
                    _defaultDate = this.getMoment();
                } else {
                    _defaultDate = this.getMoment(_defaultDate);
                }
            }

            var parsedDate = this._parseInputDate(_defaultDate);
            if (!parsedDate.isValid()) {
                throw new TypeError('defaultDate() Could not parse date parameter: ' + _defaultDate);
            }
            if (!this._isValid(parsedDate)) {
                throw new TypeError('defaultDate() date passed is invalid according to component setup validations');
            }

            this._options.defaultDate = parsedDate;

            if (this._options.defaultDate && this._options.inline || this.input !== undefined && this.input.val().trim() === '') {
                this._setValue(this._options.defaultDate, 0);
            }
        };

        DateTimePicker.prototype.locale = function locale(_locale) {
            if (arguments.length === 0) {
                return this._options.locale;
            }

            if (!moment.localeData(_locale)) {
                throw new TypeError('locale() locale ' + _locale + ' is not loaded from moment locales!');
            }

            this._options.locale = _locale;

            for (var i = 0; i < this._dates.length; i++) {
                this._dates[i].locale(this._options.locale);
            }
            this._viewDate.locale(this._options.locale);

            if (this.actualFormat) {
                this._initFormatting(); // reinitialize formatting
            }
            if (this.widget) {
                this.hide();
                this.show();
            }
        };

        DateTimePicker.prototype.stepping = function stepping(_stepping) {
            if (arguments.length === 0) {
                return this._options.stepping;
            }

            _stepping = parseInt(_stepping, 10);
            if (isNaN(_stepping) || _stepping < 1) {
                _stepping = 1;
            }
            this._options.stepping = _stepping;
        };

        DateTimePicker.prototype.useCurrent = function useCurrent(_useCurrent) {
            var useCurrentOptions = ['year', 'month', 'day', 'hour', 'minute'];
            if (arguments.length === 0) {
                return this._options.useCurrent;
            }

            if (typeof _useCurrent !== 'boolean' && typeof _useCurrent !== 'string') {
                throw new TypeError('useCurrent() expects a boolean or string parameter');
            }
            if (typeof _useCurrent === 'string' && useCurrentOptions.indexOf(_useCurrent.toLowerCase()) === -1) {
                throw new TypeError('useCurrent() expects a string parameter of ' + useCurrentOptions.join(', '));
            }
            this._options.useCurrent = _useCurrent;
        };

        DateTimePicker.prototype.collapse = function collapse(_collapse) {
            if (arguments.length === 0) {
                return this._options.collapse;
            }

            if (typeof _collapse !== 'boolean') {
                throw new TypeError('collapse() expects a boolean parameter');
            }
            if (this._options.collapse === _collapse) {
                return true;
            }
            this._options.collapse = _collapse;
            if (this.widget) {
                this.hide();
                this.show();
            }
        };

        DateTimePicker.prototype.icons = function icons(_icons) {
            if (arguments.length === 0) {
                return $.extend({}, this._options.icons);
            }

            if (!(_icons instanceof Object)) {
                throw new TypeError('icons() expects parameter to be an Object');
            }

            $.extend(this._options.icons, _icons);

            if (this.widget) {
                this.hide();
                this.show();
            }
        };

        DateTimePicker.prototype.tooltips = function tooltips(_tooltips) {
            if (arguments.length === 0) {
                return $.extend({}, this._options.tooltips);
            }

            if (!(_tooltips instanceof Object)) {
                throw new TypeError('tooltips() expects parameter to be an Object');
            }
            $.extend(this._options.tooltips, _tooltips);
            if (this.widget) {
                this.hide();
                this.show();
            }
        };

        DateTimePicker.prototype.useStrict = function useStrict(_useStrict) {
            if (arguments.length === 0) {
                return this._options.useStrict;
            }

            if (typeof _useStrict !== 'boolean') {
                throw new TypeError('useStrict() expects a boolean parameter');
            }
            this._options.useStrict = _useStrict;
        };

        DateTimePicker.prototype.sideBySide = function sideBySide(_sideBySide) {
            if (arguments.length === 0) {
                return this._options.sideBySide;
            }

            if (typeof _sideBySide !== 'boolean') {
                throw new TypeError('sideBySide() expects a boolean parameter');
            }
            this._options.sideBySide = _sideBySide;
            if (this.widget) {
                this.hide();
                this.show();
            }
        };

        DateTimePicker.prototype.viewMode = function viewMode(_viewMode) {
            if (arguments.length === 0) {
                return this._options.viewMode;
            }

            if (typeof _viewMode !== 'string') {
                throw new TypeError('viewMode() expects a string parameter');
            }

            if (DateTimePicker.ViewModes.indexOf(_viewMode) === -1) {
                throw new TypeError('viewMode() parameter must be one of (' + DateTimePicker.ViewModes.join(', ') + ') value');
            }

            this._options.viewMode = _viewMode;
            this.currentViewMode = Math.max(DateTimePicker.ViewModes.indexOf(_viewMode) - 1, this.MinViewModeNumber);

            this._showMode();
        };

        DateTimePicker.prototype.calendarWeeks = function calendarWeeks(_calendarWeeks) {
            if (arguments.length === 0) {
                return this._options.calendarWeeks;
            }

            if (typeof _calendarWeeks !== 'boolean') {
                throw new TypeError('calendarWeeks() expects parameter to be a boolean value');
            }

            this._options.calendarWeeks = _calendarWeeks;
            this._update();
        };

        DateTimePicker.prototype.buttons = function buttons(_buttons) {
            if (arguments.length === 0) {
                return $.extend({}, this._options.buttons);
            }

            if (!(_buttons instanceof Object)) {
                throw new TypeError('buttons() expects parameter to be an Object');
            }

            $.extend(this._options.buttons, _buttons);

            if (typeof this._options.buttons.showToday !== 'boolean') {
                throw new TypeError('buttons.showToday expects a boolean parameter');
            }
            if (typeof this._options.buttons.showClear !== 'boolean') {
                throw new TypeError('buttons.showClear expects a boolean parameter');
            }
            if (typeof this._options.buttons.showClose !== 'boolean') {
                throw new TypeError('buttons.showClose expects a boolean parameter');
            }

            if (this.widget) {
                this.hide();
                this.show();
            }
        };

        DateTimePicker.prototype.keepOpen = function keepOpen(_keepOpen) {
            if (arguments.length === 0) {
                return this._options.keepOpen;
            }

            if (typeof _keepOpen !== 'boolean') {
                throw new TypeError('keepOpen() expects a boolean parameter');
            }

            this._options.keepOpen = _keepOpen;
        };

        DateTimePicker.prototype.focusOnShow = function focusOnShow(_focusOnShow) {
            if (arguments.length === 0) {
                return this._options.focusOnShow;
            }

            if (typeof _focusOnShow !== 'boolean') {
                throw new TypeError('focusOnShow() expects a boolean parameter');
            }

            this._options.focusOnShow = _focusOnShow;
        };

        DateTimePicker.prototype.inline = function inline(_inline) {
            if (arguments.length === 0) {
                return this._options.inline;
            }

            if (typeof _inline !== 'boolean') {
                throw new TypeError('inline() expects a boolean parameter');
            }

            this._options.inline = _inline;
        };

        DateTimePicker.prototype.clear = function clear() {
            this._setValue(null); //todo
        };

        DateTimePicker.prototype.keyBinds = function keyBinds(_keyBinds) {
            if (arguments.length === 0) {
                return this._options.keyBinds;
            }

            this._options.keyBinds = _keyBinds;
        };

        DateTimePicker.prototype.debug = function debug(_debug) {
            if (typeof _debug !== 'boolean') {
                throw new TypeError('debug() expects a boolean parameter');
            }

            this._options.debug = _debug;
        };

        DateTimePicker.prototype.allowInputToggle = function allowInputToggle(_allowInputToggle) {
            if (arguments.length === 0) {
                return this._options.allowInputToggle;
            }

            if (typeof _allowInputToggle !== 'boolean') {
                throw new TypeError('allowInputToggle() expects a boolean parameter');
            }

            this._options.allowInputToggle = _allowInputToggle;
        };

        DateTimePicker.prototype.keepInvalid = function keepInvalid(_keepInvalid) {
            if (arguments.length === 0) {
                return this._options.keepInvalid;
            }

            if (typeof _keepInvalid !== 'boolean') {
                throw new TypeError('keepInvalid() expects a boolean parameter');
            }
            this._options.keepInvalid = _keepInvalid;
        };

        DateTimePicker.prototype.datepickerInput = function datepickerInput(_datepickerInput) {
            if (arguments.length === 0) {
                return this._options.datepickerInput;
            }

            if (typeof _datepickerInput !== 'string') {
                throw new TypeError('datepickerInput() expects a string parameter');
            }

            this._options.datepickerInput = _datepickerInput;
        };

        DateTimePicker.prototype.parseInputDate = function parseInputDate(_parseInputDate2) {
            if (arguments.length === 0) {
                return this._options.parseInputDate;
            }

            if (typeof _parseInputDate2 !== 'function') {
                throw new TypeError('parseInputDate() should be as function');
            }

            this._options.parseInputDate = _parseInputDate2;
        };

        DateTimePicker.prototype.disabledTimeIntervals = function disabledTimeIntervals(_disabledTimeIntervals) {
            if (arguments.length === 0) {
                return this._options.disabledTimeIntervals ? $.extend({}, this._options.disabledTimeIntervals) : this._options.disabledTimeIntervals;
            }

            if (!_disabledTimeIntervals) {
                this._options.disabledTimeIntervals = false;
                this._update();
                return true;
            }
            if (!(_disabledTimeIntervals instanceof Array)) {
                throw new TypeError('disabledTimeIntervals() expects an array parameter');
            }
            this._options.disabledTimeIntervals = _disabledTimeIntervals;
            this._update();
        };

        DateTimePicker.prototype.disabledHours = function disabledHours(hours) {
            if (arguments.length === 0) {
                return this._options.disabledHours ? $.extend({}, this._options.disabledHours) : this._options.disabledHours;
            }

            if (!hours) {
                this._options.disabledHours = false;
                this._update();
                return true;
            }
            if (!(hours instanceof Array)) {
                throw new TypeError('disabledHours() expects an array parameter');
            }
            this._options.disabledHours = this._indexGivenHours(hours);
            this._options.enabledHours = false;
            if (this._options.useCurrent && !this._options.keepInvalid) {
                for (var i = 0; i < this._dates.length; i++) {
                    var tries = 0;
                    while (!this._isValid(this._dates[i], 'h')) {
                        this._dates[i].add(1, 'h');
                        if (tries === 24) {
                            throw 'Tried 24 times to find a valid date';
                        }
                        tries++;
                    }
                    this._setValue(this._dates[i], i);
                }
            }
            this._update();
        };

        DateTimePicker.prototype.enabledHours = function enabledHours(hours) {
            if (arguments.length === 0) {
                return this._options.enabledHours ? $.extend({}, this._options.enabledHours) : this._options.enabledHours;
            }

            if (!hours) {
                this._options.enabledHours = false;
                this._update();
                return true;
            }
            if (!(hours instanceof Array)) {
                throw new TypeError('enabledHours() expects an array parameter');
            }
            this._options.enabledHours = this._indexGivenHours(hours);
            this._options.disabledHours = false;
            if (this._options.useCurrent && !this._options.keepInvalid) {
                for (var i = 0; i < this._dates.length; i++) {
                    var tries = 0;
                    while (!this._isValid(this._dates[i], 'h')) {
                        this._dates[i].add(1, 'h');
                        if (tries === 24) {
                            throw 'Tried 24 times to find a valid date';
                        }
                        tries++;
                    }
                    this._setValue(this._dates[i], i);
                }
            }
            this._update();
        };

        DateTimePicker.prototype.viewDate = function viewDate(newDate) {
            if (arguments.length === 0) {
                return this._viewDate.clone();
            }

            if (!newDate) {
                this._viewDate = (this._dates[0] || this.getMoment()).clone();
                return true;
            }

            if (typeof newDate !== 'string' && !moment.isMoment(newDate) && !(newDate instanceof Date)) {
                throw new TypeError('viewDate() parameter must be one of [string, moment or Date]');
            }

            this._viewDate = this._parseInputDate(newDate);
            this._viewUpdate();
        };

        DateTimePicker.prototype.allowMultidate = function allowMultidate(_allowMultidate) {
            if (typeof _allowMultidate !== 'boolean') {
                throw new TypeError('allowMultidate() expects a boolean parameter');
            }

            this._options.allowMultidate = _allowMultidate;
        };

        DateTimePicker.prototype.multidateSeparator = function multidateSeparator(_multidateSeparator) {
            if (arguments.length === 0) {
                return this._options.multidateSeparator;
            }

            if (typeof _multidateSeparator !== 'string' || _multidateSeparator.length > 1) {
                throw new TypeError('multidateSeparator expects a single character string parameter');
            }

            this._options.multidateSeparator = _multidateSeparator;
        };

        _createClass(DateTimePicker, null, [{
            key: 'NAME',
            get: function get() {
                return NAME;
            }

            /**
             * @return {string}
             */

        }, {
            key: 'DATA_KEY',
            get: function get() {
                return DATA_KEY;
            }

            /**
             * @return {string}
             */

        }, {
            key: 'EVENT_KEY',
            get: function get() {
                return EVENT_KEY;
            }

            /**
             * @return {string}
             */

        }, {
            key: 'DATA_API_KEY',
            get: function get() {
                return DATA_API_KEY;
            }
        }, {
            key: 'DatePickerModes',
            get: function get() {
                return DatePickerModes;
            }
        }, {
            key: 'ViewModes',
            get: function get() {
                return ViewModes;
            }
        }, {
            key: 'Event',
            get: function get() {
                return Event;
            }
        }, {
            key: 'Selector',
            get: function get() {
                return Selector;
            }
        }, {
            key: 'Default',
            get: function get() {
                return Default;
            },
            set: function set(value) {
                Default = value;
            }
        }, {
            key: 'ClassName',
            get: function get() {
                return ClassName;
            }
        }]);

        return DateTimePicker;
    }();

    return DateTimePicker;
}(jQuery, moment);

//noinspection JSUnusedGlobalSymbols
/* global DateTimePicker */
var TempusDominusBootstrap4 = function ($) {
    // eslint-disable-line no-unused-vars
    // ReSharper disable once InconsistentNaming
    var JQUERY_NO_CONFLICT = $.fn[DateTimePicker.NAME],
        verticalModes = ['top', 'bottom', 'auto'],
        horizontalModes = ['left', 'right', 'auto'],
        toolbarPlacements = ['default', 'top', 'bottom'],
        getSelectorFromElement = function getSelectorFromElement($element) {
        var selector = $element.data('target'),
            $selector = void 0;

        if (!selector) {
            selector = $element.attr('href') || '';
            selector = /^#[a-z]/i.test(selector) ? selector : null;
        }
        $selector = $(selector);
        if ($selector.length === 0) {
            return $selector;
        }

        if (!$selector.data(DateTimePicker.DATA_KEY)) {
            $.extend({}, $selector.data(), $(this).data());
        }

        return $selector;
    };

    // ReSharper disable once InconsistentNaming

    var TempusDominusBootstrap4 = function (_DateTimePicker) {
        _inherits(TempusDominusBootstrap4, _DateTimePicker);

        function TempusDominusBootstrap4(element, options) {
            _classCallCheck(this, TempusDominusBootstrap4);

            var _this = _possibleConstructorReturn(this, _DateTimePicker.call(this, element, options));

            _this._init();
            return _this;
        }

        TempusDominusBootstrap4.prototype._init = function _init() {
            if (this._element.hasClass('input-group')) {
                var datepickerButton = this._element.find('.datepickerbutton');
                if (datepickerButton.length === 0) {
                    this.component = this._element.find('[data-toggle="datetimepicker"]');
                } else {
                    this.component = datepickerButton;
                }
            }
        };

        TempusDominusBootstrap4.prototype._getDatePickerTemplate = function _getDatePickerTemplate() {
            var headTemplate = $('<thead>').append($('<tr>').append($('<th>').addClass('prev').attr('data-action', 'previous').append($('<span>').addClass(this._options.icons.previous))).append($('<th>').addClass('picker-switch').attr('data-action', 'pickerSwitch').attr('colspan', '' + (this._options.calendarWeeks ? '6' : '5'))).append($('<th>').addClass('next').attr('data-action', 'next').append($('<span>').addClass(this._options.icons.next)))),
                contTemplate = $('<tbody>').append($('<tr>').append($('<td>').attr('colspan', '' + (this._options.calendarWeeks ? '8' : '7'))));

            return [$('<div>').addClass('datepicker-days').append($('<table>').addClass('table table-sm').append(headTemplate).append($('<tbody>'))), $('<div>').addClass('datepicker-months').append($('<table>').addClass('table-condensed').append(headTemplate.clone()).append(contTemplate.clone())), $('<div>').addClass('datepicker-years').append($('<table>').addClass('table-condensed').append(headTemplate.clone()).append(contTemplate.clone())), $('<div>').addClass('datepicker-decades').append($('<table>').addClass('table-condensed').append(headTemplate.clone()).append(contTemplate.clone()))];
        };

        TempusDominusBootstrap4.prototype._getTimePickerMainTemplate = function _getTimePickerMainTemplate() {
            var topRow = $('<tr>'),
                middleRow = $('<tr>'),
                bottomRow = $('<tr>');

            if (this._isEnabled('h')) {
                topRow.append($('<td>').append($('<a>').attr({
                    href: '#',
                    tabindex: '-1',
                    'title': this._options.tooltips.incrementHour
                }).addClass('btn').attr('data-action', 'incrementHours').append($('<span>').addClass(this._options.icons.up))));
                middleRow.append($('<td>').append($('<span>').addClass('timepicker-hour').attr({
                    'data-time-component': 'hours',
                    'title': this._options.tooltips.pickHour
                }).attr('data-action', 'showHours')));
                bottomRow.append($('<td>').append($('<a>').attr({
                    href: '#',
                    tabindex: '-1',
                    'title': this._options.tooltips.decrementHour
                }).addClass('btn').attr('data-action', 'decrementHours').append($('<span>').addClass(this._options.icons.down))));
            }
            if (this._isEnabled('m')) {
                if (this._isEnabled('h')) {
                    topRow.append($('<td>').addClass('separator'));
                    middleRow.append($('<td>').addClass('separator').html(':'));
                    bottomRow.append($('<td>').addClass('separator'));
                }
                topRow.append($('<td>').append($('<a>').attr({
                    href: '#',
                    tabindex: '-1',
                    'title': this._options.tooltips.incrementMinute
                }).addClass('btn').attr('data-action', 'incrementMinutes').append($('<span>').addClass(this._options.icons.up))));
                middleRow.append($('<td>').append($('<span>').addClass('timepicker-minute').attr({
                    'data-time-component': 'minutes',
                    'title': this._options.tooltips.pickMinute
                }).attr('data-action', 'showMinutes')));
                bottomRow.append($('<td>').append($('<a>').attr({
                    href: '#',
                    tabindex: '-1',
                    'title': this._options.tooltips.decrementMinute
                }).addClass('btn').attr('data-action', 'decrementMinutes').append($('<span>').addClass(this._options.icons.down))));
            }
            if (this._isEnabled('s')) {
                if (this._isEnabled('m')) {
                    topRow.append($('<td>').addClass('separator'));
                    middleRow.append($('<td>').addClass('separator').html(':'));
                    bottomRow.append($('<td>').addClass('separator'));
                }
                topRow.append($('<td>').append($('<a>').attr({
                    href: '#',
                    tabindex: '-1',
                    'title': this._options.tooltips.incrementSecond
                }).addClass('btn').attr('data-action', 'incrementSeconds').append($('<span>').addClass(this._options.icons.up))));
                middleRow.append($('<td>').append($('<span>').addClass('timepicker-second').attr({
                    'data-time-component': 'seconds',
                    'title': this._options.tooltips.pickSecond
                }).attr('data-action', 'showSeconds')));
                bottomRow.append($('<td>').append($('<a>').attr({
                    href: '#',
                    tabindex: '-1',
                    'title': this._options.tooltips.decrementSecond
                }).addClass('btn').attr('data-action', 'decrementSeconds').append($('<span>').addClass(this._options.icons.down))));
            }

            if (!this.use24Hours) {
                topRow.append($('<td>').addClass('separator'));
                middleRow.append($('<td>').append($('<button>').addClass('btn btn-primary').attr({
                    'data-action': 'togglePeriod',
                    tabindex: '-1',
                    'title': this._options.tooltips.togglePeriod
                })));
                bottomRow.append($('<td>').addClass('separator'));
            }

            return $('<div>').addClass('timepicker-picker').append($('<table>').addClass('table-condensed').append([topRow, middleRow, bottomRow]));
        };

        TempusDominusBootstrap4.prototype._getTimePickerTemplate = function _getTimePickerTemplate() {
            var hoursView = $('<div>').addClass('timepicker-hours').append($('<table>').addClass('table-condensed')),
                minutesView = $('<div>').addClass('timepicker-minutes').append($('<table>').addClass('table-condensed')),
                secondsView = $('<div>').addClass('timepicker-seconds').append($('<table>').addClass('table-condensed')),
                ret = [this._getTimePickerMainTemplate()];

            if (this._isEnabled('h')) {
                ret.push(hoursView);
            }
            if (this._isEnabled('m')) {
                ret.push(minutesView);
            }
            if (this._isEnabled('s')) {
                ret.push(secondsView);
            }

            return ret;
        };

        TempusDominusBootstrap4.prototype._getToolbar = function _getToolbar() {
            var row = [];
            if (this._options.buttons.showToday) {
                row.push($('<td>').append($('<a>').attr({
                    href: '#',
                    tabindex: '-1',
                    'data-action': 'today',
                    'title': this._options.tooltips.today
                }).append($('<span>').addClass(this._options.icons.today))));
            }
            if (!this._options.sideBySide && this._hasDate() && this._hasTime()) {
                var title = void 0,
                    icon = void 0;
                if (this._options.viewMode === 'times') {
                    title = this._options.tooltips.selectDate;
                    icon = this._options.icons.date;
                } else {
                    title = this._options.tooltips.selectTime;
                    icon = this._options.icons.time;
                }
                row.push($('<td>').append($('<a>').attr({
                    href: '#',
                    tabindex: '-1',
                    'data-action': 'togglePicker',
                    'title': title
                }).append($('<span>').addClass(icon))));
            }
            if (this._options.buttons.showClear) {
                row.push($('<td>').append($('<a>').attr({
                    href: '#',
                    tabindex: '-1',
                    'data-action': 'clear',
                    'title': this._options.tooltips.clear
                }).append($('<span>').addClass(this._options.icons.clear))));
            }
            if (this._options.buttons.showClose) {
                row.push($('<td>').append($('<a>').attr({
                    href: '#',
                    tabindex: '-1',
                    'data-action': 'close',
                    'title': this._options.tooltips.close
                }).append($('<span>').addClass(this._options.icons.close))));
            }
            return row.length === 0 ? '' : $('<table>').addClass('table-condensed').append($('<tbody>').append($('<tr>').append(row)));
        };

        TempusDominusBootstrap4.prototype._getTemplate = function _getTemplate() {
            var template = $('<div>').addClass('bootstrap-datetimepicker-widget dropdown-menu'),
                dateView = $('<div>').addClass('datepicker').append(this._getDatePickerTemplate()),
                timeView = $('<div>').addClass('timepicker').append(this._getTimePickerTemplate()),
                content = $('<ul>').addClass('list-unstyled'),
                toolbar = $('<li>').addClass('picker-switch' + (this._options.collapse ? ' accordion-toggle' : '')).append(this._getToolbar());

            if (this._options.inline) {
                template.removeClass('dropdown-menu');
            }

            if (this.use24Hours) {
                template.addClass('usetwentyfour');
            }
            if (this._isEnabled('s') && !this.use24Hours) {
                template.addClass('wider');
            }

            if (this._options.sideBySide && this._hasDate() && this._hasTime()) {
                template.addClass('timepicker-sbs');
                if (this._options.toolbarPlacement === 'top') {
                    template.append(toolbar);
                }
                template.append($('<div>').addClass('row').append(dateView.addClass('col-md-6')).append(timeView.addClass('col-md-6')));
                if (this._options.toolbarPlacement === 'bottom' || this._options.toolbarPlacement === 'default') {
                    template.append(toolbar);
                }
                return template;
            }

            if (this._options.toolbarPlacement === 'top') {
                content.append(toolbar);
            }
            if (this._hasDate()) {
                content.append($('<li>').addClass(this._options.collapse && this._hasTime() ? 'collapse' : '').addClass(this._options.collapse && this._hasTime() && this._options.viewMode === 'times' ? '' : 'show').append(dateView));
            }
            if (this._options.toolbarPlacement === 'default') {
                content.append(toolbar);
            }
            if (this._hasTime()) {
                content.append($('<li>').addClass(this._options.collapse && this._hasDate() ? 'collapse' : '').addClass(this._options.collapse && this._hasDate() && this._options.viewMode === 'times' ? 'show' : '').append(timeView));
            }
            if (this._options.toolbarPlacement === 'bottom') {
                content.append(toolbar);
            }
            return template.append(content);
        };

        TempusDominusBootstrap4.prototype._place = function _place(e) {
            var self = e && e.data && e.data.picker || this,
                vertical = self._options.widgetPositioning.vertical,
                horizontal = self._options.widgetPositioning.horizontal,
                parent = void 0;
            var position = (self.component && self.component.length ? self.component : self._element).position(),
                offset = (self.component && self.component.length ? self.component : self._element).offset();
            if (self._options.widgetParent) {
                parent = self._options.widgetParent.append(self.widget);
            } else if (self._element.is('input')) {
                parent = self._element.after(self.widget).parent();
            } else if (self._options.inline) {
                parent = self._element.append(self.widget);
                return;
            } else {
                parent = self._element;
                self._element.children().first().after(self.widget);
            }

            // Top and bottom logic
            if (vertical === 'auto') {
                //noinspection JSValidateTypes
                if (offset.top + self.widget.height() * 1.5 >= $(window).height() + $(window).scrollTop() && self.widget.height() + self._element.outerHeight() < offset.top) {
                    vertical = 'top';
                } else {
                    vertical = 'bottom';
                }
            }

            // Left and right logic
            if (horizontal === 'auto') {
                if (parent.width() < offset.left + self.widget.outerWidth() / 2 && offset.left + self.widget.outerWidth() > $(window).width()) {
                    horizontal = 'right';
                } else {
                    horizontal = 'left';
                }
            }

            if (vertical === 'top') {
                self.widget.addClass('top').removeClass('bottom');
            } else {
                self.widget.addClass('bottom').removeClass('top');
            }

            if (horizontal === 'right') {
                self.widget.addClass('float-right');
            } else {
                self.widget.removeClass('float-right');
            }

            // find the first parent element that has a relative css positioning
            if (parent.css('position') !== 'relative') {
                parent = parent.parents().filter(function () {
                    return $(this).css('position') === 'relative';
                }).first();
            }

            if (parent.length === 0) {
                throw new Error('datetimepicker component should be placed within a relative positioned container');
            }

            self.widget.css({
                top: vertical === 'top' ? 'auto' : position.top + self._element.outerHeight() + 'px',
                bottom: vertical === 'top' ? parent.outerHeight() - (parent === self._element ? 0 : position.top) + 'px' : 'auto',
                left: horizontal === 'left' ? (parent === self._element ? 0 : position.left) + 'px' : 'auto',
                right: horizontal === 'left' ? 'auto' : parent.outerWidth() - self._element.outerWidth() - (parent === self._element ? 0 : position.left) + 'px'
            });
        };

        TempusDominusBootstrap4.prototype._fillDow = function _fillDow() {
            var row = $('<tr>'),
                currentDate = this._viewDate.clone().startOf('w').startOf('d');

            if (this._options.calendarWeeks === true) {
                row.append($('<th>').addClass('cw').text('#'));
            }

            while (currentDate.isBefore(this._viewDate.clone().endOf('w'))) {
                row.append($('<th>').addClass('dow').text(currentDate.format('dd')));
                currentDate.add(1, 'd');
            }
            this.widget.find('.datepicker-days thead').append(row);
        };

        TempusDominusBootstrap4.prototype._fillMonths = function _fillMonths() {
            var spans = [],
                monthsShort = this._viewDate.clone().startOf('y').startOf('d');
            while (monthsShort.isSame(this._viewDate, 'y')) {
                spans.push($('<span>').attr('data-action', 'selectMonth').addClass('month').text(monthsShort.format('MMM')));
                monthsShort.add(1, 'M');
            }
            this.widget.find('.datepicker-months td').empty().append(spans);
        };

        TempusDominusBootstrap4.prototype._updateMonths = function _updateMonths() {
            var monthsView = this.widget.find('.datepicker-months'),
                monthsViewHeader = monthsView.find('th'),
                months = monthsView.find('tbody').find('span'),
                self = this;

            monthsViewHeader.eq(0).find('span').attr('title', this._options.tooltips.prevYear);
            monthsViewHeader.eq(1).attr('title', this._options.tooltips.selectYear);
            monthsViewHeader.eq(2).find('span').attr('title', this._options.tooltips.nextYear);

            monthsView.find('.disabled').removeClass('disabled');

            if (!this._isValid(this._viewDate.clone().subtract(1, 'y'), 'y')) {
                monthsViewHeader.eq(0).addClass('disabled');
            }

            monthsViewHeader.eq(1).text(this._viewDate.year());

            if (!this._isValid(this._viewDate.clone().add(1, 'y'), 'y')) {
                monthsViewHeader.eq(2).addClass('disabled');
            }

            months.removeClass('active');
            if (this._getLastPickedDate().isSame(this._viewDate, 'y') && !this.unset) {
                months.eq(this._getLastPickedDate().month()).addClass('active');
            }

            months.each(function (index) {
                if (!self._isValid(self._viewDate.clone().month(index), 'M')) {
                    $(this).addClass('disabled');
                }
            });
        };

        TempusDominusBootstrap4.prototype._getStartEndYear = function _getStartEndYear(factor, year) {
            var step = factor / 10,
                startYear = Math.floor(year / factor) * factor,
                endYear = startYear + step * 9,
                focusValue = Math.floor(year / step) * step;
            return [startYear, endYear, focusValue];
        };

        TempusDominusBootstrap4.prototype._updateYears = function _updateYears() {
            var yearsView = this.widget.find('.datepicker-years'),
                yearsViewHeader = yearsView.find('th'),
                yearCaps = this._getStartEndYear(10, this._viewDate.year()),
                startYear = this._viewDate.clone().year(yearCaps[0]),
                endYear = this._viewDate.clone().year(yearCaps[1]);
            var html = '';

            yearsViewHeader.eq(0).find('span').attr('title', this._options.tooltips.prevDecade);
            yearsViewHeader.eq(1).attr('title', this._options.tooltips.selectDecade);
            yearsViewHeader.eq(2).find('span').attr('title', this._options.tooltips.nextDecade);

            yearsView.find('.disabled').removeClass('disabled');

            if (this._options.minDate && this._options.minDate.isAfter(startYear, 'y')) {
                yearsViewHeader.eq(0).addClass('disabled');
            }

            yearsViewHeader.eq(1).text(startYear.year() + '-' + endYear.year());

            if (this._options.maxDate && this._options.maxDate.isBefore(endYear, 'y')) {
                yearsViewHeader.eq(2).addClass('disabled');
            }

            html += '<span data-action="selectYear" class="year old' + (!this._isValid(startYear, 'y') ? ' disabled' : '') + '">' + (startYear.year() - 1) + '</span>';
            while (!startYear.isAfter(endYear, 'y')) {
                html += '<span data-action="selectYear" class="year' + (startYear.isSame(this._getLastPickedDate(), 'y') && !this.unset ? ' active' : '') + (!this._isValid(startYear, 'y') ? ' disabled' : '') + '">' + startYear.year() + '</span>';
                startYear.add(1, 'y');
            }
            html += '<span data-action="selectYear" class="year old' + (!this._isValid(startYear, 'y') ? ' disabled' : '') + '">' + startYear.year() + '</span>';

            yearsView.find('td').html(html);
        };

        TempusDominusBootstrap4.prototype._updateDecades = function _updateDecades() {
            var decadesView = this.widget.find('.datepicker-decades'),
                decadesViewHeader = decadesView.find('th'),
                yearCaps = this._getStartEndYear(100, this._viewDate.year()),
                startDecade = this._viewDate.clone().year(yearCaps[0]),
                endDecade = this._viewDate.clone().year(yearCaps[1]);
            var minDateDecade = false,
                maxDateDecade = false,
                endDecadeYear = void 0,
                html = '';

            decadesViewHeader.eq(0).find('span').attr('title', this._options.tooltips.prevCentury);
            decadesViewHeader.eq(2).find('span').attr('title', this._options.tooltips.nextCentury);

            decadesView.find('.disabled').removeClass('disabled');

            if (startDecade.year() === 0 || this._options.minDate && this._options.minDate.isAfter(startDecade, 'y')) {
                decadesViewHeader.eq(0).addClass('disabled');
            }

            decadesViewHeader.eq(1).text(startDecade.year() + '-' + endDecade.year());

            if (this._options.maxDate && this._options.maxDate.isBefore(endDecade, 'y')) {
                decadesViewHeader.eq(2).addClass('disabled');
            }

            if (startDecade.year() - 10 < 0) {
                html += '<span>&nbsp;</span>';
            } else {
                html += '<span data-action="selectDecade" class="decade old" data-selection="' + (startDecade.year() + 6) + '">' + (startDecade.year() - 10) + '</span>';
            }

            while (!startDecade.isAfter(endDecade, 'y')) {
                endDecadeYear = startDecade.year() + 11;
                minDateDecade = this._options.minDate && this._options.minDate.isAfter(startDecade, 'y') && this._options.minDate.year() <= endDecadeYear;
                maxDateDecade = this._options.maxDate && this._options.maxDate.isAfter(startDecade, 'y') && this._options.maxDate.year() <= endDecadeYear;
                html += '<span data-action="selectDecade" class="decade' + (this._getLastPickedDate().isAfter(startDecade) && this._getLastPickedDate().year() <= endDecadeYear ? ' active' : '') + (!this._isValid(startDecade, 'y') && !minDateDecade && !maxDateDecade ? ' disabled' : '') + '" data-selection="' + (startDecade.year() + 6) + '">' + startDecade.year() + '</span>';
                startDecade.add(10, 'y');
            }
            html += '<span data-action="selectDecade" class="decade old" data-selection="' + (startDecade.year() + 6) + '">' + startDecade.year() + '</span>';

            decadesView.find('td').html(html);
        };

        TempusDominusBootstrap4.prototype._fillDate = function _fillDate() {
            var daysView = this.widget.find('.datepicker-days'),
                daysViewHeader = daysView.find('th'),
                html = [];
            var currentDate = void 0,
                row = void 0,
                clsName = void 0,
                i = void 0;

            if (!this._hasDate()) {
                return;
            }

            daysViewHeader.eq(0).find('span').attr('title', this._options.tooltips.prevMonth);
            daysViewHeader.eq(1).attr('title', this._options.tooltips.selectMonth);
            daysViewHeader.eq(2).find('span').attr('title', this._options.tooltips.nextMonth);

            daysView.find('.disabled').removeClass('disabled');
            daysViewHeader.eq(1).text(this._viewDate.format(this._options.dayViewHeaderFormat));

            if (!this._isValid(this._viewDate.clone().subtract(1, 'M'), 'M')) {
                daysViewHeader.eq(0).addClass('disabled');
            }
            if (!this._isValid(this._viewDate.clone().add(1, 'M'), 'M')) {
                daysViewHeader.eq(2).addClass('disabled');
            }

            currentDate = this._viewDate.clone().startOf('M').startOf('w').startOf('d');

            for (i = 0; i < 42; i++) {
                //always display 42 days (should show 6 weeks)
                if (currentDate.weekday() === 0) {
                    row = $('<tr>');
                    if (this._options.calendarWeeks) {
                        row.append('<td class="cw">' + currentDate.week() + '</td>');
                    }
                    html.push(row);
                }
                clsName = '';
                if (currentDate.isBefore(this._viewDate, 'M')) {
                    clsName += ' old';
                }
                if (currentDate.isAfter(this._viewDate, 'M')) {
                    clsName += ' new';
                }
                if (this._options.allowMultidate) {
                    var index = this._datesFormatted.indexOf(currentDate.format('YYYY-MM-DD'));
                    if (index !== -1) {
                        if (currentDate.isSame(this._datesFormatted[index], 'd') && !this.unset) {
                            clsName += ' active';
                        }
                    }
                } else {
                    if (currentDate.isSame(this._getLastPickedDate(), 'd') && !this.unset) {
                        clsName += ' active';
                    }
                }
                if (!this._isValid(currentDate, 'd')) {
                    clsName += ' disabled';
                }
                if (currentDate.isSame(this.getMoment(), 'd')) {
                    clsName += ' today';
                }
                if (currentDate.day() === 0 || currentDate.day() === 6) {
                    clsName += ' weekend';
                }
                row.append('<td data-action="selectDay" data-day="' + currentDate.format('L') + '" class="day' + clsName + '">' + currentDate.date() + '</td>');
                currentDate.add(1, 'd');
            }

            daysView.find('tbody').empty().append(html);

            this._updateMonths();

            this._updateYears();

            this._updateDecades();
        };

        TempusDominusBootstrap4.prototype._fillHours = function _fillHours() {
            var table = this.widget.find('.timepicker-hours table'),
                currentHour = this._viewDate.clone().startOf('d'),
                html = [];
            var row = $('<tr>');

            if (this._viewDate.hour() > 11 && !this.use24Hours) {
                currentHour.hour(12);
            }
            while (currentHour.isSame(this._viewDate, 'd') && (this.use24Hours || this._viewDate.hour() < 12 && currentHour.hour() < 12 || this._viewDate.hour() > 11)) {
                if (currentHour.hour() % 4 === 0) {
                    row = $('<tr>');
                    html.push(row);
                }
                row.append('<td data-action="selectHour" class="hour' + (!this._isValid(currentHour, 'h') ? ' disabled' : '') + '">' + currentHour.format(this.use24Hours ? 'HH' : 'hh') + '</td>');
                currentHour.add(1, 'h');
            }
            table.empty().append(html);
        };

        TempusDominusBootstrap4.prototype._fillMinutes = function _fillMinutes() {
            var table = this.widget.find('.timepicker-minutes table'),
                currentMinute = this._viewDate.clone().startOf('h'),
                html = [],
                step = this._options.stepping === 1 ? 5 : this._options.stepping;
            var row = $('<tr>');

            while (this._viewDate.isSame(currentMinute, 'h')) {
                if (currentMinute.minute() % (step * 4) === 0) {
                    row = $('<tr>');
                    html.push(row);
                }
                row.append('<td data-action="selectMinute" class="minute' + (!this._isValid(currentMinute, 'm') ? ' disabled' : '') + '">' + currentMinute.format('mm') + '</td>');
                currentMinute.add(step, 'm');
            }
            table.empty().append(html);
        };

        TempusDominusBootstrap4.prototype._fillSeconds = function _fillSeconds() {
            var table = this.widget.find('.timepicker-seconds table'),
                currentSecond = this._viewDate.clone().startOf('m'),
                html = [];
            var row = $('<tr>');

            while (this._viewDate.isSame(currentSecond, 'm')) {
                if (currentSecond.second() % 20 === 0) {
                    row = $('<tr>');
                    html.push(row);
                }
                row.append('<td data-action="selectSecond" class="second' + (!this._isValid(currentSecond, 's') ? ' disabled' : '') + '">' + currentSecond.format('ss') + '</td>');
                currentSecond.add(5, 's');
            }

            table.empty().append(html);
        };

        TempusDominusBootstrap4.prototype._fillTime = function _fillTime() {
            var toggle = void 0,
                newDate = void 0;
            var timeComponents = this.widget.find('.timepicker span[data-time-component]');

            if (!this.use24Hours) {
                toggle = this.widget.find('.timepicker [data-action=togglePeriod]');
                newDate = this._getLastPickedDate().clone().add(this._getLastPickedDate().hours() >= 12 ? -12 : 12, 'h');

                toggle.text(this._getLastPickedDate().format('A'));

                if (this._isValid(newDate, 'h')) {
                    toggle.removeClass('disabled');
                } else {
                    toggle.addClass('disabled');
                }
            }
            timeComponents.filter('[data-time-component=hours]').text(this._getLastPickedDate().format('' + (this.use24Hours ? 'HH' : 'hh')));
            timeComponents.filter('[data-time-component=minutes]').text(this._getLastPickedDate().format('mm'));
            timeComponents.filter('[data-time-component=seconds]').text(this._getLastPickedDate().format('ss'));

            this._fillHours();
            this._fillMinutes();
            this._fillSeconds();
        };

        TempusDominusBootstrap4.prototype._doAction = function _doAction(e, action) {
            var lastPicked = this._getLastPickedDate();
            if ($(e.currentTarget).is('.disabled')) {
                return false;
            }
            action = action || $(e.currentTarget).data('action');
            switch (action) {
                case 'next':
                    {
                        var navFnc = DateTimePicker.DatePickerModes[this.currentViewMode].NAV_FUNCTION;
                        this._viewDate.add(DateTimePicker.DatePickerModes[this.currentViewMode].NAV_STEP, navFnc);
                        this._fillDate();
                        this._viewUpdate(navFnc);
                        break;
                    }
                case 'previous':
                    {
                        var _navFnc = DateTimePicker.DatePickerModes[this.currentViewMode].NAV_FUNCTION;
                        this._viewDate.subtract(DateTimePicker.DatePickerModes[this.currentViewMode].NAV_STEP, _navFnc);
                        this._fillDate();
                        this._viewUpdate(_navFnc);
                        break;
                    }
                case 'pickerSwitch':
                    this._showMode(1);
                    break;
                case 'selectMonth':
                    {
                        var month = $(e.target).closest('tbody').find('span').index($(e.target));
                        this._viewDate.month(month);
                        if (this.currentViewMode === this.MinViewModeNumber) {
                            this._setValue(lastPicked.clone().year(this._viewDate.year()).month(this._viewDate.month()), this._getLastPickedDateIndex());
                            if (!this._options.inline) {
                                this.hide();
                            }
                        } else {
                            this._showMode(-1);
                            this._fillDate();
                        }
                        this._viewUpdate('M');
                        break;
                    }
                case 'selectYear':
                    {
                        var year = parseInt($(e.target).text(), 10) || 0;
                        this._viewDate.year(year);
                        if (this.currentViewMode === this.MinViewModeNumber) {
                            this._setValue(lastPicked.clone().year(this._viewDate.year()), this._getLastPickedDateIndex());
                            if (!this._options.inline) {
                                this.hide();
                            }
                        } else {
                            this._showMode(-1);
                            this._fillDate();
                        }
                        this._viewUpdate('YYYY');
                        break;
                    }
                case 'selectDecade':
                    {
                        var _year = parseInt($(e.target).data('selection'), 10) || 0;
                        this._viewDate.year(_year);
                        if (this.currentViewMode === this.MinViewModeNumber) {
                            this._setValue(lastPicked.clone().year(this._viewDate.year()), this._getLastPickedDateIndex());
                            if (!this._options.inline) {
                                this.hide();
                            }
                        } else {
                            this._showMode(-1);
                            this._fillDate();
                        }
                        this._viewUpdate('YYYY');
                        break;
                    }
                case 'selectDay':
                    {
                        var day = this._viewDate.clone();
                        if ($(e.target).is('.old')) {
                            day.subtract(1, 'M');
                        }
                        if ($(e.target).is('.new')) {
                            day.add(1, 'M');
                        }

                        var selectDate = day.date(parseInt($(e.target).text(), 10)),
                            index = 0;
                        if (this._options.allowMultidate) {
                            index = this._datesFormatted.indexOf(selectDate.format('YYYY-MM-DD'));
                            if (index !== -1) {
                                this._setValue(null, index); //deselect multidate
                            } else {
                                this._setValue(selectDate, this._getLastPickedDateIndex() + 1);
                            }
                        } else {
                            this._setValue(selectDate, this._getLastPickedDateIndex());
                        }

                        if (!this._hasTime() && !this._options.keepOpen && !this._options.inline && !this._options.allowMultidate) {
                            this.hide();
                        }
                        break;
                    }
                case 'incrementHours':
                    {
                        var newDate = lastPicked.clone().add(1, 'h');
                        if (this._isValid(newDate, 'h')) {
                            this._setValue(newDate, this._getLastPickedDateIndex());
                        }
                        break;
                    }
                case 'incrementMinutes':
                    {
                        var _newDate = lastPicked.clone().add(this._options.stepping, 'm');
                        if (this._isValid(_newDate, 'm')) {
                            this._setValue(_newDate, this._getLastPickedDateIndex());
                        }
                        break;
                    }
                case 'incrementSeconds':
                    {
                        var _newDate2 = lastPicked.clone().add(1, 's');
                        if (this._isValid(_newDate2, 's')) {
                            this._setValue(_newDate2, this._getLastPickedDateIndex());
                        }
                        break;
                    }
                case 'decrementHours':
                    {
                        var _newDate3 = lastPicked.clone().subtract(1, 'h');
                        if (this._isValid(_newDate3, 'h')) {
                            this._setValue(_newDate3, this._getLastPickedDateIndex());
                        }
                        break;
                    }
                case 'decrementMinutes':
                    {
                        var _newDate4 = lastPicked.clone().subtract(this._options.stepping, 'm');
                        if (this._isValid(_newDate4, 'm')) {
                            this._setValue(_newDate4, this._getLastPickedDateIndex());
                        }
                        break;
                    }
                case 'decrementSeconds':
                    {
                        var _newDate5 = lastPicked.clone().subtract(1, 's');
                        if (this._isValid(_newDate5, 's')) {
                            this._setValue(_newDate5, this._getLastPickedDateIndex());
                        }
                        break;
                    }
                case 'togglePeriod':
                    {
                        this._setValue(lastPicked.clone().add(lastPicked.hours() >= 12 ? -12 : 12, 'h'), this._getLastPickedDateIndex());
                        break;
                    }
                case 'togglePicker':
                    {
                        var $this = $(e.target),
                            $link = $this.closest('a'),
                            $parent = $this.closest('ul'),
                            expanded = $parent.find('.show'),
                            closed = $parent.find('.collapse:not(.show)'),
                            $span = $this.is('span') ? $this : $this.find('span');
                        var collapseData = void 0;

                        if (expanded && expanded.length) {
                            collapseData = expanded.data('collapse');
                            if (collapseData && collapseData.transitioning) {
                                return true;
                            }
                            if (expanded.collapse) {
                                // if collapse plugin is available through bootstrap.js then use it
                                expanded.collapse('hide');
                                closed.collapse('show');
                            } else {
                                // otherwise just toggle in class on the two views
                                expanded.removeClass('show');
                                closed.addClass('show');
                            }
                            $span.toggleClass(this._options.icons.time + ' ' + this._options.icons.date);

                            if ($span.hasClass(this._options.icons.date)) {
                                $link.attr('title', this._options.tooltips.selectDate);
                            } else {
                                $link.attr('title', this._options.tooltips.selectTime);
                            }
                        }
                    }
                    break;
                case 'showPicker':
                    this.widget.find('.timepicker > div:not(.timepicker-picker)').hide();
                    this.widget.find('.timepicker .timepicker-picker').show();
                    break;
                case 'showHours':
                    this.widget.find('.timepicker .timepicker-picker').hide();
                    this.widget.find('.timepicker .timepicker-hours').show();
                    break;
                case 'showMinutes':
                    this.widget.find('.timepicker .timepicker-picker').hide();
                    this.widget.find('.timepicker .timepicker-minutes').show();
                    break;
                case 'showSeconds':
                    this.widget.find('.timepicker .timepicker-picker').hide();
                    this.widget.find('.timepicker .timepicker-seconds').show();
                    break;
                case 'selectHour':
                    {
                        var hour = parseInt($(e.target).text(), 10);

                        if (!this.use24Hours) {
                            if (lastPicked.hours() >= 12) {
                                if (hour !== 12) {
                                    hour += 12;
                                }
                            } else {
                                if (hour === 12) {
                                    hour = 0;
                                }
                            }
                        }
                        this._setValue(lastPicked.clone().hours(hour), this._getLastPickedDateIndex());
                        if (!this._isEnabled('a') && !this._isEnabled('m') && !this._options.keepOpen && !this._options.inline) {
                            this.hide();
                        } else {
                            this._doAction(e, 'showPicker');
                        }
                        break;
                    }
                case 'selectMinute':
                    this._setValue(lastPicked.clone().minutes(parseInt($(e.target).text(), 10)), this._getLastPickedDateIndex());
                    if (!this._isEnabled('a') && !this._isEnabled('s') && !this._options.keepOpen && !this._options.inline) {
                        this.hide();
                    } else {
                        this._doAction(e, 'showPicker');
                    }
                    break;
                case 'selectSecond':
                    this._setValue(lastPicked.clone().seconds(parseInt($(e.target).text(), 10)), this._getLastPickedDateIndex());
                    if (!this._isEnabled('a') && !this._options.keepOpen && !this._options.inline) {
                        this.hide();
                    } else {
                        this._doAction(e, 'showPicker');
                    }
                    break;
                case 'clear':
                    this.clear();
                    break;
                case 'close':
                    this.hide();
                    break;
                case 'today':
                    {
                        var todaysDate = this.getMoment();
                        if (this._isValid(todaysDate, 'd')) {
                            this._setValue(todaysDate, this._getLastPickedDateIndex());
                        }
                        break;
                    }
            }
            return false;
        };

        //public


        TempusDominusBootstrap4.prototype.hide = function hide() {
            var transitioning = false;
            if (!this.widget) {
                return;
            }
            // Ignore event if in the middle of a picker transition
            this.widget.find('.collapse').each(function () {
                var collapseData = $(this).data('collapse');
                if (collapseData && collapseData.transitioning) {
                    transitioning = true;
                    return false;
                }
                return true;
            });
            if (transitioning) {
                return;
            }
            if (this.component && this.component.hasClass('btn')) {
                this.component.toggleClass('active');
            }
            this.widget.hide();

            $(window).off('resize', this._place());
            this.widget.off('click', '[data-action]');
            this.widget.off('mousedown', false);

            this.widget.remove();
            this.widget = false;

            this._notifyEvent({
                type: DateTimePicker.Event.HIDE,
                date: this._getLastPickedDate().clone()
            });

            if (this.input !== undefined) {
                this.input.blur();
            }

            this._viewDate = this._getLastPickedDate().clone();
        };

        TempusDominusBootstrap4.prototype.show = function show() {
            var currentMoment = void 0;
            var useCurrentGranularity = {
                'year': function year(m) {
                    return m.month(0).date(1).hours(0).seconds(0).minutes(0);
                },
                'month': function month(m) {
                    return m.date(1).hours(0).seconds(0).minutes(0);
                },
                'day': function day(m) {
                    return m.hours(0).seconds(0).minutes(0);
                },
                'hour': function hour(m) {
                    return m.seconds(0).minutes(0);
                },
                'minute': function minute(m) {
                    return m.seconds(0);
                }
            };

            if (this.input !== undefined) {
                if (this.input.prop('disabled') || !this._options.ignoreReadonly && this.input.prop('readonly') || this.widget) {
                    return;
                }
                if (this.input.val() !== undefined && this.input.val().trim().length !== 0) {
                    this._setValue(this._parseInputDate(this.input.val().trim()), 0);
                } else if (this.unset && this._options.useCurrent) {
                    currentMoment = this.getMoment();
                    if (typeof this._options.useCurrent === 'string') {
                        currentMoment = useCurrentGranularity[this._options.useCurrent](currentMoment);
                    }
                    this._setValue(currentMoment, 0);
                }
            } else if (this.unset && this._options.useCurrent) {
                currentMoment = this.getMoment();
                if (typeof this._options.useCurrent === 'string') {
                    currentMoment = useCurrentGranularity[this._options.useCurrent](currentMoment);
                }
                this._setValue(currentMoment, 0);
            }

            this.widget = this._getTemplate();

            this._fillDow();
            this._fillMonths();

            this.widget.find('.timepicker-hours').hide();
            this.widget.find('.timepicker-minutes').hide();
            this.widget.find('.timepicker-seconds').hide();

            this._update();
            this._showMode();

            $(window).on('resize', { picker: this }, this._place);
            this.widget.on('click', '[data-action]', $.proxy(this._doAction, this)); // this handles clicks on the widget
            this.widget.on('mousedown', false);

            if (this.component && this.component.hasClass('btn')) {
                this.component.toggleClass('active');
            }
            this._place();
            this.widget.show();
            if (this.input !== undefined && this._options.focusOnShow && !this.input.is(':focus')) {
                this.input.focus();
            }

            this._notifyEvent({
                type: DateTimePicker.Event.SHOW
            });
        };

        TempusDominusBootstrap4.prototype.destroy = function destroy() {
            this.hide();
            //todo doc off?
            this._element.removeData(DateTimePicker.DATA_KEY);
            this._element.removeData('date');
        };

        TempusDominusBootstrap4.prototype.disable = function disable() {
            this.hide();
            if (this.component && this.component.hasClass('btn')) {
                this.component.addClass('disabled');
            }
            if (this.input !== undefined) {
                this.input.prop('disabled', true); //todo disable this/comp if input is null
            }
        };

        TempusDominusBootstrap4.prototype.enable = function enable() {
            if (this.component && this.component.hasClass('btn')) {
                this.component.removeClass('disabled');
            }
            if (this.input !== undefined) {
                this.input.prop('disabled', false); //todo enable comp/this if input is null
            }
        };

        TempusDominusBootstrap4.prototype.toolbarPlacement = function toolbarPlacement(_toolbarPlacement) {
            if (arguments.length === 0) {
                return this._options.toolbarPlacement;
            }

            if (typeof _toolbarPlacement !== 'string') {
                throw new TypeError('toolbarPlacement() expects a string parameter');
            }
            if (toolbarPlacements.indexOf(_toolbarPlacement) === -1) {
                throw new TypeError('toolbarPlacement() parameter must be one of (' + toolbarPlacements.join(', ') + ') value');
            }
            this._options.toolbarPlacement = _toolbarPlacement;

            if (this.widget) {
                this.hide();
                this.show();
            }
        };

        TempusDominusBootstrap4.prototype.widgetPositioning = function widgetPositioning(_widgetPositioning) {
            if (arguments.length === 0) {
                return $.extend({}, this._options.widgetPositioning);
            }

            if ({}.toString.call(_widgetPositioning) !== '[object Object]') {
                throw new TypeError('widgetPositioning() expects an object variable');
            }
            if (_widgetPositioning.horizontal) {
                if (typeof _widgetPositioning.horizontal !== 'string') {
                    throw new TypeError('widgetPositioning() horizontal variable must be a string');
                }
                _widgetPositioning.horizontal = _widgetPositioning.horizontal.toLowerCase();
                if (horizontalModes.indexOf(_widgetPositioning.horizontal) === -1) {
                    throw new TypeError('widgetPositioning() expects horizontal parameter to be one of (' + horizontalModes.join(', ') + ')');
                }
                this._options.widgetPositioning.horizontal = _widgetPositioning.horizontal;
            }
            if (_widgetPositioning.vertical) {
                if (typeof _widgetPositioning.vertical !== 'string') {
                    throw new TypeError('widgetPositioning() vertical variable must be a string');
                }
                _widgetPositioning.vertical = _widgetPositioning.vertical.toLowerCase();
                if (verticalModes.indexOf(_widgetPositioning.vertical) === -1) {
                    throw new TypeError('widgetPositioning() expects vertical parameter to be one of (' + verticalModes.join(', ') + ')');
                }
                this._options.widgetPositioning.vertical = _widgetPositioning.vertical;
            }
            this._update();
        };

        TempusDominusBootstrap4.prototype.widgetParent = function widgetParent(_widgetParent) {
            if (arguments.length === 0) {
                return this._options.widgetParent;
            }

            if (typeof _widgetParent === 'string') {
                _widgetParent = $(_widgetParent);
            }

            if (_widgetParent !== null && typeof _widgetParent !== 'string' && !(_widgetParent instanceof $)) {
                throw new TypeError('widgetParent() expects a string or a jQuery object parameter');
            }

            this._options.widgetParent = _widgetParent;
            if (this.widget) {
                this.hide();
                this.show();
            }
        };

        //static


        TempusDominusBootstrap4._jQueryHandleThis = function _jQueryHandleThis(me, option, argument) {
            var data = $(me).data(DateTimePicker.DATA_KEY);
            if ((typeof option === 'undefined' ? 'undefined' : _typeof(option)) === 'object') {
                $.extend({}, DateTimePicker.Default, option);
            }

            if (!data) {
                data = new TempusDominusBootstrap4($(me), option);
                $(me).data(DateTimePicker.DATA_KEY, data);
            }

            if (typeof option === 'string') {
                if (data[option] === undefined) {
                    throw new Error('No method named "' + option + '"');
                }
                if (argument === undefined) {
                    return data[option]();
                } else {
                    return data[option](argument);
                }
            }
        };

        TempusDominusBootstrap4._jQueryInterface = function _jQueryInterface(option, argument) {
            if (this.length === 1) {
                return TempusDominusBootstrap4._jQueryHandleThis(this[0], option, argument);
            }
            return this.each(function () {
                TempusDominusBootstrap4._jQueryHandleThis(this, option, argument);
            });
        };

        return TempusDominusBootstrap4;
    }(DateTimePicker);

    /**
    * ------------------------------------------------------------------------
    * jQuery
    * ------------------------------------------------------------------------
    */


    $(document).on(DateTimePicker.Event.CLICK_DATA_API, DateTimePicker.Selector.DATA_TOGGLE, function () {
        var $target = getSelectorFromElement($(this));
        if ($target.length === 0) {
            return;
        }
        TempusDominusBootstrap4._jQueryInterface.call($target, 'toggle');
    }).on(DateTimePicker.Event.CHANGE, '.' + DateTimePicker.ClassName.INPUT, function (event) {
        var $target = getSelectorFromElement($(this));
        if ($target.length === 0) {
            return;
        }
        TempusDominusBootstrap4._jQueryInterface.call($target, '_change', event);
    }).on(DateTimePicker.Event.BLUR, '.' + DateTimePicker.ClassName.INPUT, function (event) {
        var $target = getSelectorFromElement($(this)),
            config = $target.data(DateTimePicker.DATA_KEY);
        if ($target.length === 0) {
            return;
        }
        if (config._options.debug || window.debug) {
            return;
        }
        TempusDominusBootstrap4._jQueryInterface.call($target, 'hide', event);
    }).on(DateTimePicker.Event.KEYDOWN, '.' + DateTimePicker.ClassName.INPUT, function (event) {
        var $target = getSelectorFromElement($(this));
        if ($target.length === 0) {
            return;
        }
        TempusDominusBootstrap4._jQueryInterface.call($target, '_keydown', event);
    }).on(DateTimePicker.Event.KEYUP, '.' + DateTimePicker.ClassName.INPUT, function (event) {
        var $target = getSelectorFromElement($(this));
        if ($target.length === 0) {
            return;
        }
        TempusDominusBootstrap4._jQueryInterface.call($target, '_keyup', event);
    }).on(DateTimePicker.Event.FOCUS, '.' + DateTimePicker.ClassName.INPUT, function (event) {
        var $target = getSelectorFromElement($(this)),
            config = $target.data(DateTimePicker.DATA_KEY);
        if ($target.length === 0) {
            return;
        }
        if (!config._options.allowInputToggle) {
            return;
        }
        TempusDominusBootstrap4._jQueryInterface.call($target, 'show', event);
    });

    $.fn[DateTimePicker.NAME] = TempusDominusBootstrap4._jQueryInterface;
    $.fn[DateTimePicker.NAME].Constructor = TempusDominusBootstrap4;
    $.fn[DateTimePicker.NAME].noConflict = function () {
        $.fn[DateTimePicker.NAME] = JQUERY_NO_CONFLICT;
        return TempusDominusBootstrap4._jQueryInterface;
    };

    return TempusDominusBootstrap4;
}(jQuery);

}();

/*!
* jquery.inputmask.bundle.js
* https://github.com/RobinHerbots/Inputmask
* Copyright (c) 2010 - 2019 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 4.0.9
*/

(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter})}};__webpack_require__.r=function(exports){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if(mode&4&&typeof value==="object"&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value:value});if(mode&2&&typeof value!="string")for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=0)})([function(module,exports,__webpack_require__){"use strict";__webpack_require__(1);__webpack_require__(6);__webpack_require__(7);var _inputmask=__webpack_require__(2);var _inputmask2=_interopRequireDefault(_inputmask);var _inputmask3=__webpack_require__(3);var _inputmask4=_interopRequireDefault(_inputmask3);var _jquery=__webpack_require__(4);var _jquery2=_interopRequireDefault(_jquery);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}if(_inputmask4.default===_jquery2.default){__webpack_require__(8)}window.Inputmask=_inputmask2.default},function(module,exports,__webpack_require__){"use strict";var __WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};(function(factory){if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__=[__webpack_require__(2)],__WEBPACK_AMD_DEFINE_FACTORY__=factory,__WEBPACK_AMD_DEFINE_RESULT__=typeof __WEBPACK_AMD_DEFINE_FACTORY__==="function"?__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__):__WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))}else{}})(function(Inputmask){Inputmask.extendDefinitions({A:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",casing:"upper"},"&":{validator:"[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",casing:"upper"},"#":{validator:"[0-9A-Fa-f]",casing:"upper"}});Inputmask.extendAliases({cssunit:{regex:"[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"},url:{regex:"(https?|ftp)//.*",autoUnmask:false},ip:{mask:"i[i[i]].i[i[i]].i[i[i]].i[i[i]]",definitions:{i:{validator:function validator(chrs,maskset,pos,strict,opts){if(pos-1>-1&&maskset.buffer[pos-1]!=="."){chrs=maskset.buffer[pos-1]+chrs;if(pos-2>-1&&maskset.buffer[pos-2]!=="."){chrs=maskset.buffer[pos-2]+chrs}else chrs="0"+chrs}else chrs="00"+chrs;return new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(chrs)}}},onUnMask:function onUnMask(maskedValue,unmaskedValue,opts){return maskedValue},inputmode:"numeric"},email:{mask:"*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",greedy:false,casing:"lower",onBeforePaste:function onBeforePaste(pastedValue,opts){pastedValue=pastedValue.toLowerCase();return pastedValue.replace("mailto:","")},definitions:{"*":{validator:"[0-9\uff11-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5!#$%&'*+/=?^_`{|}~-]"},"-":{validator:"[0-9A-Za-z-]"}},onUnMask:function onUnMask(maskedValue,unmaskedValue,opts){return maskedValue},inputmode:"email"},mac:{mask:"##:##:##:##:##:##"},vin:{mask:"V{13}9{4}",definitions:{V:{validator:"[A-HJ-NPR-Za-hj-npr-z\\d]",casing:"upper"}},clearIncomplete:true,autoUnmask:true}});return Inputmask})},function(module,exports,__webpack_require__){"use strict";var __WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};(function(factory){if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__=[__webpack_require__(3),__webpack_require__(5)],__WEBPACK_AMD_DEFINE_FACTORY__=factory,__WEBPACK_AMD_DEFINE_RESULT__=typeof __WEBPACK_AMD_DEFINE_FACTORY__==="function"?__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__):__WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))}else{}})(function($,window,undefined){var document=window.document,ua=navigator.userAgent,ie=ua.indexOf("MSIE ")>0||ua.indexOf("Trident/")>0,mobile=isInputEventSupported("touchstart"),iemobile=/iemobile/i.test(ua),iphone=/iphone/i.test(ua)&&!iemobile;function Inputmask(alias,options,internal){if(!(this instanceof Inputmask)){return new Inputmask(alias,options,internal)}this.el=undefined;this.events={};this.maskset=undefined;this.refreshValue=false;if(internal!==true){if($.isPlainObject(alias)){options=alias}else{options=options||{};if(alias)options.alias=alias}this.opts=$.extend(true,{},this.defaults,options);this.noMasksCache=options&&options.definitions!==undefined;this.userOptions=options||{};this.isRTL=this.opts.numericInput;resolveAlias(this.opts.alias,options,this.opts)}}Inputmask.prototype={dataAttribute:"data-inputmask",defaults:{placeholder:"_",optionalmarker:["[","]"],quantifiermarker:["{","}"],groupmarker:["(",")"],alternatormarker:"|",escapeChar:"\\",mask:null,regex:null,oncomplete:$.noop,onincomplete:$.noop,oncleared:$.noop,repeat:0,greedy:false,autoUnmask:false,removeMaskOnSubmit:false,clearMaskOnLostFocus:true,insertMode:true,clearIncomplete:false,alias:null,onKeyDown:$.noop,onBeforeMask:null,onBeforePaste:function onBeforePaste(pastedValue,opts){return $.isFunction(opts.onBeforeMask)?opts.onBeforeMask.call(this,pastedValue,opts):pastedValue},onBeforeWrite:null,onUnMask:null,showMaskOnFocus:true,showMaskOnHover:true,onKeyValidation:$.noop,skipOptionalPartCharacter:" ",numericInput:false,rightAlign:false,undoOnEscape:true,radixPoint:"",_radixDance:false,groupSeparator:"",keepStatic:null,positionCaretOnTab:true,tabThrough:false,supportsInputType:["text","tel","url","password","search"],ignorables:[8,9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123,0,229],isComplete:null,preValidation:null,postValidation:null,staticDefinitionSymbol:undefined,jitMasking:false,nullable:true,inputEventOnly:false,noValuePatching:false,positionCaretOnClick:"lvp",casing:null,inputmode:"verbatim",colorMask:false,disablePredictiveText:false,importDataAttributes:true,shiftPositions:true},definitions:{9:{validator:"[0-9\uff11-\uff19]",definitionSymbol:"*"},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",definitionSymbol:"*"},"*":{validator:"[0-9\uff11-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]"}},aliases:{},masksCache:{},mask:function mask(elems){var that=this;function importAttributeOptions(npt,opts,userOptions,dataAttribute){if(opts.importDataAttributes===true){var attrOptions=npt.getAttribute(dataAttribute),option,dataoptions,optionData,p;var importOption=function importOption(option,optionData){optionData=optionData!==undefined?optionData:npt.getAttribute(dataAttribute+"-"+option);if(optionData!==null){if(typeof optionData==="string"){if(option.indexOf("on")===0)optionData=window[optionData];else if(optionData==="false")optionData=false;else if(optionData==="true")optionData=true}userOptions[option]=optionData}};if(attrOptions&&attrOptions!==""){attrOptions=attrOptions.replace(/'/g,'"');dataoptions=JSON.parse("{"+attrOptions+"}")}if(dataoptions){optionData=undefined;for(p in dataoptions){if(p.toLowerCase()==="alias"){optionData=dataoptions[p];break}}}importOption("alias",optionData);if(userOptions.alias){resolveAlias(userOptions.alias,userOptions,opts)}for(option in opts){if(dataoptions){optionData=undefined;for(p in dataoptions){if(p.toLowerCase()===option.toLowerCase()){optionData=dataoptions[p];break}}}importOption(option,optionData)}}$.extend(true,opts,userOptions);if(npt.dir==="rtl"||opts.rightAlign){npt.style.textAlign="right"}if(npt.dir==="rtl"||opts.numericInput){npt.dir="ltr";npt.removeAttribute("dir");opts.isRTL=true}return Object.keys(userOptions).length}if(typeof elems==="string"){elems=document.getElementById(elems)||document.querySelectorAll(elems)}elems=elems.nodeName?[elems]:elems;$.each(elems,function(ndx,el){var scopedOpts=$.extend(true,{},that.opts);if(importAttributeOptions(el,scopedOpts,$.extend(true,{},that.userOptions),that.dataAttribute)){var maskset=generateMaskSet(scopedOpts,that.noMasksCache);if(maskset!==undefined){if(el.inputmask!==undefined){el.inputmask.opts.autoUnmask=true;el.inputmask.remove()}el.inputmask=new Inputmask(undefined,undefined,true);el.inputmask.opts=scopedOpts;el.inputmask.noMasksCache=that.noMasksCache;el.inputmask.userOptions=$.extend(true,{},that.userOptions);el.inputmask.isRTL=scopedOpts.isRTL||scopedOpts.numericInput;el.inputmask.el=el;el.inputmask.maskset=maskset;$.data(el,"_inputmask_opts",scopedOpts);maskScope.call(el.inputmask,{action:"mask"})}}});return elems&&elems[0]?elems[0].inputmask||this:this},option:function option(options,noremask){if(typeof options==="string"){return this.opts[options]}else if((typeof options==="undefined"?"undefined":_typeof(options))==="object"){$.extend(this.userOptions,options);if(this.el&&noremask!==true){this.mask(this.el)}return this}},unmaskedvalue:function unmaskedvalue(value){this.maskset=this.maskset||generateMaskSet(this.opts,this.noMasksCache);return maskScope.call(this,{action:"unmaskedvalue",value:value})},remove:function remove(){return maskScope.call(this,{action:"remove"})},getemptymask:function getemptymask(){this.maskset=this.maskset||generateMaskSet(this.opts,this.noMasksCache);return maskScope.call(this,{action:"getemptymask"})},hasMaskedValue:function hasMaskedValue(){return!this.opts.autoUnmask},isComplete:function isComplete(){this.maskset=this.maskset||generateMaskSet(this.opts,this.noMasksCache);return maskScope.call(this,{action:"isComplete"})},getmetadata:function getmetadata(){this.maskset=this.maskset||generateMaskSet(this.opts,this.noMasksCache);return maskScope.call(this,{action:"getmetadata"})},isValid:function isValid(value){this.maskset=this.maskset||generateMaskSet(this.opts,this.noMasksCache);return maskScope.call(this,{action:"isValid",value:value})},format:function format(value,metadata){this.maskset=this.maskset||generateMaskSet(this.opts,this.noMasksCache);return maskScope.call(this,{action:"format",value:value,metadata:metadata})},setValue:function setValue(value){if(this.el){$(this.el).trigger("setvalue",[value])}},analyseMask:function analyseMask(mask,regexMask,opts){var tokenizer=/(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?(?:\|[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g,regexTokenizer=/\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,escaped=false,currentToken=new MaskToken,match,m,openenings=[],maskTokens=[],openingToken,currentOpeningToken,alternator,lastMatch,groupToken;function MaskToken(isGroup,isOptional,isQuantifier,isAlternator){this.matches=[];this.openGroup=isGroup||false;this.alternatorGroup=false;this.isGroup=isGroup||false;this.isOptional=isOptional||false;this.isQuantifier=isQuantifier||false;this.isAlternator=isAlternator||false;this.quantifier={min:1,max:1}}function insertTestDefinition(mtoken,element,position){position=position!==undefined?position:mtoken.matches.length;var prevMatch=mtoken.matches[position-1];if(regexMask){if(element.indexOf("[")===0||escaped&&/\\d|\\s|\\w]/i.test(element)||element==="."){mtoken.matches.splice(position++,0,{fn:new RegExp(element,opts.casing?"i":""),optionality:false,newBlockMarker:prevMatch===undefined?"master":prevMatch.def!==element,casing:null,def:element,placeholder:undefined,nativeDef:element})}else{if(escaped)element=element[element.length-1];$.each(element.split(""),function(ndx,lmnt){prevMatch=mtoken.matches[position-1];mtoken.matches.splice(position++,0,{fn:null,optionality:false,newBlockMarker:prevMatch===undefined?"master":prevMatch.def!==lmnt&&prevMatch.fn!==null,casing:null,def:opts.staticDefinitionSymbol||lmnt,placeholder:opts.staticDefinitionSymbol!==undefined?lmnt:undefined,nativeDef:(escaped?"'":"")+lmnt})})}escaped=false}else{var maskdef=(opts.definitions?opts.definitions[element]:undefined)||Inputmask.prototype.definitions[element];if(maskdef&&!escaped){mtoken.matches.splice(position++,0,{fn:maskdef.validator?typeof maskdef.validator=="string"?new RegExp(maskdef.validator,opts.casing?"i":""):new function(){this.test=maskdef.validator}:new RegExp("."),optionality:false,newBlockMarker:prevMatch===undefined?"master":prevMatch.def!==(maskdef.definitionSymbol||element),casing:maskdef.casing,def:maskdef.definitionSymbol||element,placeholder:maskdef.placeholder,nativeDef:element})}else{mtoken.matches.splice(position++,0,{fn:null,optionality:false,newBlockMarker:prevMatch===undefined?"master":prevMatch.def!==element&&prevMatch.fn!==null,casing:null,def:opts.staticDefinitionSymbol||element,placeholder:opts.staticDefinitionSymbol!==undefined?element:undefined,nativeDef:(escaped?"'":"")+element});escaped=false}}}function verifyGroupMarker(maskToken){if(maskToken&&maskToken.matches){$.each(maskToken.matches,function(ndx,token){var nextToken=maskToken.matches[ndx+1];if((nextToken===undefined||nextToken.matches===undefined||nextToken.isQuantifier===false)&&token&&token.isGroup){token.isGroup=false;if(!regexMask){insertTestDefinition(token,opts.groupmarker[0],0);if(token.openGroup!==true){insertTestDefinition(token,opts.groupmarker[1])}}}verifyGroupMarker(token)})}}function defaultCase(){if(openenings.length>0){currentOpeningToken=openenings[openenings.length-1];insertTestDefinition(currentOpeningToken,m);if(currentOpeningToken.isAlternator){alternator=openenings.pop();for(var mndx=0;mndx<alternator.matches.length;mndx++){if(alternator.matches[mndx].isGroup)alternator.matches[mndx].isGroup=false}if(openenings.length>0){currentOpeningToken=openenings[openenings.length-1];currentOpeningToken.matches.push(alternator)}else{currentToken.matches.push(alternator)}}}else{insertTestDefinition(currentToken,m)}}function reverseTokens(maskToken){function reverseStatic(st){if(st===opts.optionalmarker[0])st=opts.optionalmarker[1];else if(st===opts.optionalmarker[1])st=opts.optionalmarker[0];else if(st===opts.groupmarker[0])st=opts.groupmarker[1];else if(st===opts.groupmarker[1])st=opts.groupmarker[0];return st}maskToken.matches=maskToken.matches.reverse();for(var match in maskToken.matches){if(maskToken.matches.hasOwnProperty(match)){var intMatch=parseInt(match);if(maskToken.matches[match].isQuantifier&&maskToken.matches[intMatch+1]&&maskToken.matches[intMatch+1].isGroup){var qt=maskToken.matches[match];maskToken.matches.splice(match,1);maskToken.matches.splice(intMatch+1,0,qt)}if(maskToken.matches[match].matches!==undefined){maskToken.matches[match]=reverseTokens(maskToken.matches[match])}else{maskToken.matches[match]=reverseStatic(maskToken.matches[match])}}}return maskToken}function groupify(matches){var groupToken=new MaskToken(true);groupToken.openGroup=false;groupToken.matches=matches;return groupToken}if(regexMask){opts.optionalmarker[0]=undefined;opts.optionalmarker[1]=undefined}while(match=regexMask?regexTokenizer.exec(mask):tokenizer.exec(mask)){m=match[0];if(regexMask){switch(m.charAt(0)){case"?":m="{0,1}";break;case"+":case"*":m="{"+m+"}";break}}if(escaped){defaultCase();continue}switch(m.charAt(0)){case"(?=":break;case"(?!":break;case"(?<=":break;case"(?<!":break;case opts.escapeChar:escaped=true;if(regexMask){defaultCase()}break;case opts.optionalmarker[1]:case opts.groupmarker[1]:openingToken=openenings.pop();openingToken.openGroup=false;if(openingToken!==undefined){if(openenings.length>0){currentOpeningToken=openenings[openenings.length-1];currentOpeningToken.matches.push(openingToken);if(currentOpeningToken.isAlternator){alternator=openenings.pop();for(var mndx=0;mndx<alternator.matches.length;mndx++){alternator.matches[mndx].isGroup=false;alternator.matches[mndx].alternatorGroup=false}if(openenings.length>0){currentOpeningToken=openenings[openenings.length-1];currentOpeningToken.matches.push(alternator)}else{currentToken.matches.push(alternator)}}}else{currentToken.matches.push(openingToken)}}else defaultCase();break;case opts.optionalmarker[0]:openenings.push(new MaskToken(false,true));break;case opts.groupmarker[0]:openenings.push(new MaskToken(true));break;case opts.quantifiermarker[0]:var quantifier=new MaskToken(false,false,true);m=m.replace(/[{}]/g,"");var mqj=m.split("|"),mq=mqj[0].split(","),mq0=isNaN(mq[0])?mq[0]:parseInt(mq[0]),mq1=mq.length===1?mq0:isNaN(mq[1])?mq[1]:parseInt(mq[1]);if(mq0==="*"||mq0==="+"){mq0=mq1==="*"?0:1}quantifier.quantifier={min:mq0,max:mq1,jit:mqj[1]};var matches=openenings.length>0?openenings[openenings.length-1].matches:currentToken.matches;match=matches.pop();if(match.isAlternator){matches.push(match);matches=match.matches;var groupToken=new MaskToken(true);var tmpMatch=matches.pop();matches.push(groupToken);matches=groupToken.matches;match=tmpMatch}if(!match.isGroup){match=groupify([match])}matches.push(match);matches.push(quantifier);break;case opts.alternatormarker:var groupQuantifier=function groupQuantifier(matches){var lastMatch=matches.pop();if(lastMatch.isQuantifier){lastMatch=groupify([matches.pop(),lastMatch])}return lastMatch};if(openenings.length>0){currentOpeningToken=openenings[openenings.length-1];var subToken=currentOpeningToken.matches[currentOpeningToken.matches.length-1];if(currentOpeningToken.openGroup&&(subToken.matches===undefined||subToken.isGroup===false&&subToken.isAlternator===false)){lastMatch=openenings.pop()}else{lastMatch=groupQuantifier(currentOpeningToken.matches)}}else{lastMatch=groupQuantifier(currentToken.matches)}if(lastMatch.isAlternator){openenings.push(lastMatch)}else{if(lastMatch.alternatorGroup){alternator=openenings.pop();lastMatch.alternatorGroup=false}else{alternator=new MaskToken(false,false,false,true)}alternator.matches.push(lastMatch);openenings.push(alternator);if(lastMatch.openGroup){lastMatch.openGroup=false;var alternatorGroup=new MaskToken(true);alternatorGroup.alternatorGroup=true;openenings.push(alternatorGroup)}}break;default:defaultCase()}}while(openenings.length>0){openingToken=openenings.pop();currentToken.matches.push(openingToken)}if(currentToken.matches.length>0){verifyGroupMarker(currentToken);maskTokens.push(currentToken)}if(opts.numericInput||opts.isRTL){reverseTokens(maskTokens[0])}return maskTokens},positionColorMask:function positionColorMask(input,template){input.style.left=template.offsetLeft+"px"}};Inputmask.extendDefaults=function(options){$.extend(true,Inputmask.prototype.defaults,options)};Inputmask.extendDefinitions=function(definition){$.extend(true,Inputmask.prototype.definitions,definition)};Inputmask.extendAliases=function(alias){$.extend(true,Inputmask.prototype.aliases,alias)};Inputmask.format=function(value,options,metadata){return Inputmask(options).format(value,metadata)};Inputmask.unmask=function(value,options){return Inputmask(options).unmaskedvalue(value)};Inputmask.isValid=function(value,options){return Inputmask(options).isValid(value)};Inputmask.remove=function(elems){if(typeof elems==="string"){elems=document.getElementById(elems)||document.querySelectorAll(elems)}elems=elems.nodeName?[elems]:elems;$.each(elems,function(ndx,el){if(el.inputmask)el.inputmask.remove()})};Inputmask.setValue=function(elems,value){if(typeof elems==="string"){elems=document.getElementById(elems)||document.querySelectorAll(elems)}elems=elems.nodeName?[elems]:elems;$.each(elems,function(ndx,el){if(el.inputmask)el.inputmask.setValue(value);else $(el).trigger("setvalue",[value])})};Inputmask.escapeRegex=function(str){var specials=["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^"];return str.replace(new RegExp("(\\"+specials.join("|\\")+")","gim"),"\\$1")};Inputmask.keyCode={BACKSPACE:8,BACKSPACE_SAFARI:127,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,RIGHT:39,SPACE:32,TAB:9,UP:38,X:88,CONTROL:17};Inputmask.dependencyLib=$;function resolveAlias(aliasStr,options,opts){var aliasDefinition=Inputmask.prototype.aliases[aliasStr];if(aliasDefinition){if(aliasDefinition.alias)resolveAlias(aliasDefinition.alias,undefined,opts);$.extend(true,opts,aliasDefinition);$.extend(true,opts,options);return true}else if(opts.mask===null){opts.mask=aliasStr}return false}function generateMaskSet(opts,nocache){function generateMask(mask,metadata,opts){var regexMask=false;if(mask===null||mask===""){regexMask=opts.regex!==null;if(regexMask){mask=opts.regex;mask=mask.replace(/^(\^)(.*)(\$)$/,"$2")}else{regexMask=true;mask=".*"}}if(mask.length===1&&opts.greedy===false&&opts.repeat!==0){opts.placeholder=""}if(opts.repeat>0||opts.repeat==="*"||opts.repeat==="+"){var repeatStart=opts.repeat==="*"?0:opts.repeat==="+"?1:opts.repeat;mask=opts.groupmarker[0]+mask+opts.groupmarker[1]+opts.quantifiermarker[0]+repeatStart+","+opts.repeat+opts.quantifiermarker[1]}var masksetDefinition,maskdefKey=regexMask?"regex_"+opts.regex:opts.numericInput?mask.split("").reverse().join(""):mask;if(Inputmask.prototype.masksCache[maskdefKey]===undefined||nocache===true){masksetDefinition={mask:mask,maskToken:Inputmask.prototype.analyseMask(mask,regexMask,opts),validPositions:{},_buffer:undefined,buffer:undefined,tests:{},excludes:{},metadata:metadata,maskLength:undefined,jitOffset:{}};if(nocache!==true){Inputmask.prototype.masksCache[maskdefKey]=masksetDefinition;masksetDefinition=$.extend(true,{},Inputmask.prototype.masksCache[maskdefKey])}}else masksetDefinition=$.extend(true,{},Inputmask.prototype.masksCache[maskdefKey]);return masksetDefinition}var ms;if($.isFunction(opts.mask)){opts.mask=opts.mask(opts)}if($.isArray(opts.mask)){if(opts.mask.length>1){if(opts.keepStatic===null){opts.keepStatic="auto";for(var i=0;i<opts.mask.length;i++){if(opts.mask[i].charAt(0)!==opts.mask[0].charAt(0)){opts.keepStatic=true;break}}}var altMask=opts.groupmarker[0];$.each(opts.isRTL?opts.mask.reverse():opts.mask,function(ndx,msk){if(altMask.length>1){altMask+=opts.groupmarker[1]+opts.alternatormarker+opts.groupmarker[0]}if(msk.mask!==undefined&&!$.isFunction(msk.mask)){altMask+=msk.mask}else{altMask+=msk}});altMask+=opts.groupmarker[1];return generateMask(altMask,opts.mask,opts)}else opts.mask=opts.mask.pop()}if(opts.mask&&opts.mask.mask!==undefined&&!$.isFunction(opts.mask.mask)){ms=generateMask(opts.mask.mask,opts.mask,opts)}else{ms=generateMask(opts.mask,opts.mask,opts)}return ms}function isInputEventSupported(eventName){var el=document.createElement("input"),evName="on"+eventName,isSupported=evName in el;if(!isSupported){el.setAttribute(evName,"return;");isSupported=typeof el[evName]==="function"}el=null;return isSupported}function maskScope(actionObj,maskset,opts){maskset=maskset||this.maskset;opts=opts||this.opts;var inputmask=this,el=this.el,isRTL=this.isRTL,undoValue,$el,skipKeyPressEvent=false,skipInputEvent=false,ignorable=false,maxLength,mouseEnter=false,colorMask,originalPlaceholder;var getMaskTemplate=function getMaskTemplate(baseOnInput,minimalPos,includeMode,noJit,clearOptionalTail){var greedy=opts.greedy;if(clearOptionalTail)opts.greedy=false;minimalPos=minimalPos||0;var maskTemplate=[],ndxIntlzr,pos=0,test,testPos,lvp=getLastValidPosition();do{if(baseOnInput===true&&getMaskSet().validPositions[pos]){testPos=clearOptionalTail&&getMaskSet().validPositions[pos].match.optionality===true&&getMaskSet().validPositions[pos+1]===undefined&&(getMaskSet().validPositions[pos].generatedInput===true||getMaskSet().validPositions[pos].input==opts.skipOptionalPartCharacter&&pos>0)?determineTestTemplate(pos,getTests(pos,ndxIntlzr,pos-1)):getMaskSet().validPositions[pos];test=testPos.match;ndxIntlzr=testPos.locator.slice();maskTemplate.push(includeMode===true?testPos.input:includeMode===false?test.nativeDef:getPlaceholder(pos,test))}else{testPos=getTestTemplate(pos,ndxIntlzr,pos-1);test=testPos.match;ndxIntlzr=testPos.locator.slice();var jitMasking=noJit===true?false:opts.jitMasking!==false?opts.jitMasking:test.jit;if(jitMasking===false||jitMasking===undefined||typeof jitMasking==="number"&&isFinite(jitMasking)&&jitMasking>pos){maskTemplate.push(includeMode===false?test.nativeDef:getPlaceholder(pos,test))}}if(opts.keepStatic==="auto"){if(test.newBlockMarker&&test.fn!==null){opts.keepStatic=pos-1}}pos++}while((maxLength===undefined||pos<maxLength)&&(test.fn!==null||test.def!=="")||minimalPos>pos);if(maskTemplate[maskTemplate.length-1]===""){maskTemplate.pop()}if(includeMode!==false||getMaskSet().maskLength===undefined)getMaskSet().maskLength=pos-1;opts.greedy=greedy;return maskTemplate};function getMaskSet(){return maskset}function resetMaskSet(soft){var maskset=getMaskSet();maskset.buffer=undefined;if(soft!==true){maskset.validPositions={};maskset.p=0}}function getLastValidPosition(closestTo,strict,validPositions){var before=-1,after=-1,valids=validPositions||getMaskSet().validPositions;if(closestTo===undefined)closestTo=-1;for(var posNdx in valids){var psNdx=parseInt(posNdx);if(valids[psNdx]&&(strict||valids[psNdx].generatedInput!==true)){if(psNdx<=closestTo)before=psNdx;if(psNdx>=closestTo)after=psNdx}}return before===-1||before==closestTo?after:after==-1?before:closestTo-before<after-closestTo?before:after}function getDecisionTaker(tst){var decisionTaker=tst.locator[tst.alternation];if(typeof decisionTaker=="string"&&decisionTaker.length>0){decisionTaker=decisionTaker.split(",")[0]}return decisionTaker!==undefined?decisionTaker.toString():""}function getLocator(tst,align){var locator=(tst.alternation!=undefined?tst.mloc[getDecisionTaker(tst)]:tst.locator).join("");if(locator!=="")while(locator.length<align){locator+="0"}return locator}function determineTestTemplate(pos,tests){pos=pos>0?pos-1:0;var altTest=getTest(pos),targetLocator=getLocator(altTest),tstLocator,closest,bestMatch;for(var ndx=0;ndx<tests.length;ndx++){var tst=tests[ndx];tstLocator=getLocator(tst,targetLocator.length);var distance=Math.abs(tstLocator-targetLocator);if(closest===undefined||tstLocator!==""&&distance<closest||bestMatch&&!opts.greedy&&bestMatch.match.optionality&&bestMatch.match.newBlockMarker==="master"&&(!tst.match.optionality||!tst.match.newBlockMarker)||bestMatch&&bestMatch.match.optionalQuantifier&&!tst.match.optionalQuantifier){closest=distance;bestMatch=tst}}return bestMatch}function getTestTemplate(pos,ndxIntlzr,tstPs){return getMaskSet().validPositions[pos]||determineTestTemplate(pos,getTests(pos,ndxIntlzr?ndxIntlzr.slice():ndxIntlzr,tstPs))}function getTest(pos,tests){if(getMaskSet().validPositions[pos]){return getMaskSet().validPositions[pos]}return(tests||getTests(pos))[0]}function positionCanMatchDefinition(pos,def){var valid=false,tests=getTests(pos);for(var tndx=0;tndx<tests.length;tndx++){if(tests[tndx].match&&tests[tndx].match.def===def){valid=true;break}}return valid}function getTests(pos,ndxIntlzr,tstPs){var maskTokens=getMaskSet().maskToken,testPos=ndxIntlzr?tstPs:0,ndxInitializer=ndxIntlzr?ndxIntlzr.slice():[0],matches=[],insertStop=false,latestMatch,cacheDependency=ndxIntlzr?ndxIntlzr.join(""):"";function resolveTestFromToken(maskToken,ndxInitializer,loopNdx,quantifierRecurse){function handleMatch(match,loopNdx,quantifierRecurse){function isFirstMatch(latestMatch,tokenGroup){var firstMatch=$.inArray(latestMatch,tokenGroup.matches)===0;if(!firstMatch){$.each(tokenGroup.matches,function(ndx,match){if(match.isQuantifier===true)firstMatch=isFirstMatch(latestMatch,tokenGroup.matches[ndx-1]);else if(match.hasOwnProperty("matches"))firstMatch=isFirstMatch(latestMatch,match);if(firstMatch)return false})}return firstMatch}function resolveNdxInitializer(pos,alternateNdx,targetAlternation){var bestMatch,indexPos;if(getMaskSet().tests[pos]||getMaskSet().validPositions[pos]){$.each(getMaskSet().tests[pos]||[getMaskSet().validPositions[pos]],function(ndx,lmnt){if(lmnt.mloc[alternateNdx]){bestMatch=lmnt;return false}var alternation=targetAlternation!==undefined?targetAlternation:lmnt.alternation,ndxPos=lmnt.locator[alternation]!==undefined?lmnt.locator[alternation].toString().indexOf(alternateNdx):-1;if((indexPos===undefined||ndxPos<indexPos)&&ndxPos!==-1){bestMatch=lmnt;indexPos=ndxPos}})}if(bestMatch){var bestMatchAltIndex=bestMatch.locator[bestMatch.alternation];var locator=bestMatch.mloc[alternateNdx]||bestMatch.mloc[bestMatchAltIndex]||bestMatch.locator;return locator.slice((targetAlternation!==undefined?targetAlternation:bestMatch.alternation)+1)}else{return targetAlternation!==undefined?resolveNdxInitializer(pos,alternateNdx):undefined}}function isSubsetOf(source,target){function expand(pattern){var expanded=[],start,end;for(var i=0,l=pattern.length;i<l;i++){if(pattern.charAt(i)==="-"){end=pattern.charCodeAt(i+1);while(++start<end){expanded.push(String.fromCharCode(start))}}else{start=pattern.charCodeAt(i);expanded.push(pattern.charAt(i))}}return expanded.join("")}if(opts.regex&&source.match.fn!==null&&target.match.fn!==null){return expand(target.match.def.replace(/[\[\]]/g,"")).indexOf(expand(source.match.def.replace(/[\[\]]/g,"")))!==-1}return source.match.def===target.match.nativeDef}function staticCanMatchDefinition(source,target){var sloc=source.locator.slice(source.alternation).join(""),tloc=target.locator.slice(target.alternation).join(""),canMatch=sloc==tloc;canMatch=canMatch&&source.match.fn===null&&target.match.fn!==null?target.match.fn.test(source.match.def,getMaskSet(),pos,false,opts,false):false;return canMatch}function setMergeLocators(targetMatch,altMatch){if(altMatch===undefined||targetMatch.alternation===altMatch.alternation&&targetMatch.locator[targetMatch.alternation].toString().indexOf(altMatch.locator[altMatch.alternation])===-1){targetMatch.mloc=targetMatch.mloc||{};var locNdx=targetMatch.locator[targetMatch.alternation];if(locNdx===undefined)targetMatch.alternation=undefined;else{if(typeof locNdx==="string")locNdx=locNdx.split(",")[0];if(targetMatch.mloc[locNdx]===undefined)targetMatch.mloc[locNdx]=targetMatch.locator.slice();if(altMatch!==undefined){for(var ndx in altMatch.mloc){if(typeof ndx==="string")ndx=ndx.split(",")[0];if(targetMatch.mloc[ndx]===undefined)targetMatch.mloc[ndx]=altMatch.mloc[ndx]}targetMatch.locator[targetMatch.alternation]=Object.keys(targetMatch.mloc).join(",")}return true}}return false}if(testPos>500&&quantifierRecurse!==undefined){throw"Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. "+getMaskSet().mask}if(testPos===pos&&match.matches===undefined){matches.push({match:match,locator:loopNdx.reverse(),cd:cacheDependency,mloc:{}});return true}else if(match.matches!==undefined){if(match.isGroup&&quantifierRecurse!==match){match=handleMatch(maskToken.matches[$.inArray(match,maskToken.matches)+1],loopNdx,quantifierRecurse);if(match)return true}else if(match.isOptional){var optionalToken=match;match=resolveTestFromToken(match,ndxInitializer,loopNdx,quantifierRecurse);if(match){$.each(matches,function(ndx,mtch){mtch.match.optionality=true});latestMatch=matches[matches.length-1].match;if(quantifierRecurse===undefined&&isFirstMatch(latestMatch,optionalToken)){insertStop=true;testPos=pos}else return true}}else if(match.isAlternator){var alternateToken=match,malternateMatches=[],maltMatches,currentMatches=matches.slice(),loopNdxCnt=loopNdx.length;var altIndex=ndxInitializer.length>0?ndxInitializer.shift():-1;if(altIndex===-1||typeof altIndex==="string"){var currentPos=testPos,ndxInitializerClone=ndxInitializer.slice(),altIndexArr=[],amndx;if(typeof altIndex=="string"){altIndexArr=altIndex.split(",")}else{for(amndx=0;amndx<alternateToken.matches.length;amndx++){altIndexArr.push(amndx.toString())}}if(getMaskSet().excludes[pos]){var altIndexArrClone=altIndexArr.slice();for(var i=0,el=getMaskSet().excludes[pos].length;i<el;i++){altIndexArr.splice(altIndexArr.indexOf(getMaskSet().excludes[pos][i].toString()),1)}if(altIndexArr.length===0){getMaskSet().excludes[pos]=undefined;altIndexArr=altIndexArrClone}}if(opts.keepStatic===true||isFinite(parseInt(opts.keepStatic))&&currentPos>=opts.keepStatic)altIndexArr=altIndexArr.slice(0,1);var unMatchedAlternation=false;for(var ndx=0;ndx<altIndexArr.length;ndx++){amndx=parseInt(altIndexArr[ndx]);matches=[];ndxInitializer=typeof altIndex==="string"?resolveNdxInitializer(testPos,amndx,loopNdxCnt)||ndxInitializerClone.slice():ndxInitializerClone.slice();if(alternateToken.matches[amndx]&&handleMatch(alternateToken.matches[amndx],[amndx].concat(loopNdx),quantifierRecurse))match=true;else if(ndx===0){unMatchedAlternation=true}maltMatches=matches.slice();testPos=currentPos;matches=[];for(var ndx1=0;ndx1<maltMatches.length;ndx1++){var altMatch=maltMatches[ndx1],dropMatch=false;altMatch.match.jit=altMatch.match.jit||unMatchedAlternation;altMatch.alternation=altMatch.alternation||loopNdxCnt;setMergeLocators(altMatch);for(var ndx2=0;ndx2<malternateMatches.length;ndx2++){var altMatch2=malternateMatches[ndx2];if(typeof altIndex!=="string"||altMatch.alternation!==undefined&&$.inArray(altMatch.locator[altMatch.alternation].toString(),altIndexArr)!==-1){if(altMatch.match.nativeDef===altMatch2.match.nativeDef){dropMatch=true;setMergeLocators(altMatch2,altMatch);break}else if(isSubsetOf(altMatch,altMatch2)){if(setMergeLocators(altMatch,altMatch2)){dropMatch=true;malternateMatches.splice(malternateMatches.indexOf(altMatch2),0,altMatch)}break}else if(isSubsetOf(altMatch2,altMatch)){setMergeLocators(altMatch2,altMatch);break}else if(staticCanMatchDefinition(altMatch,altMatch2)){if(setMergeLocators(altMatch,altMatch2)){dropMatch=true;malternateMatches.splice(malternateMatches.indexOf(altMatch2),0,altMatch)}break}}}if(!dropMatch){malternateMatches.push(altMatch)}}}matches=currentMatches.concat(malternateMatches);testPos=pos;insertStop=matches.length>0;match=malternateMatches.length>0;ndxInitializer=ndxInitializerClone.slice()}else match=handleMatch(alternateToken.matches[altIndex]||maskToken.matches[altIndex],[altIndex].concat(loopNdx),quantifierRecurse);if(match)return true}else if(match.isQuantifier&&quantifierRecurse!==maskToken.matches[$.inArray(match,maskToken.matches)-1]){var qt=match;for(var qndx=ndxInitializer.length>0?ndxInitializer.shift():0;qndx<(isNaN(qt.quantifier.max)?qndx+1:qt.quantifier.max)&&testPos<=pos;qndx++){var tokenGroup=maskToken.matches[$.inArray(qt,maskToken.matches)-1];match=handleMatch(tokenGroup,[qndx].concat(loopNdx),tokenGroup);if(match){latestMatch=matches[matches.length-1].match;latestMatch.optionalQuantifier=qndx>=qt.quantifier.min;latestMatch.jit=(qndx||1)*tokenGroup.matches.indexOf(latestMatch)>=qt.quantifier.jit;if(latestMatch.optionalQuantifier&&isFirstMatch(latestMatch,tokenGroup)){insertStop=true;testPos=pos;break}if(latestMatch.jit){getMaskSet().jitOffset[pos]=tokenGroup.matches.indexOf(latestMatch)}return true}}}else{match=resolveTestFromToken(match,ndxInitializer,loopNdx,quantifierRecurse);if(match)return true}}else{testPos++}}for(var tndx=ndxInitializer.length>0?ndxInitializer.shift():0;tndx<maskToken.matches.length;tndx++){if(maskToken.matches[tndx].isQuantifier!==true){var match=handleMatch(maskToken.matches[tndx],[tndx].concat(loopNdx),quantifierRecurse);if(match&&testPos===pos){return match}else if(testPos>pos){break}}}}function mergeLocators(pos,tests){var locator=[];if(!$.isArray(tests))tests=[tests];if(tests.length>0){if(tests[0].alternation===undefined){locator=determineTestTemplate(pos,tests.slice()).locator.slice();if(locator.length===0)locator=tests[0].locator.slice()}else{$.each(tests,function(ndx,tst){if(tst.def!==""){if(locator.length===0)locator=tst.locator.slice();else{for(var i=0;i<locator.length;i++){if(tst.locator[i]&&locator[i].toString().indexOf(tst.locator[i])===-1){locator[i]+=","+tst.locator[i]}}}}})}}return locator}if(pos>-1){if(ndxIntlzr===undefined){var previousPos=pos-1,test;while((test=getMaskSet().validPositions[previousPos]||getMaskSet().tests[previousPos])===undefined&&previousPos>-1){previousPos--}if(test!==undefined&&previousPos>-1){ndxInitializer=mergeLocators(previousPos,test);cacheDependency=ndxInitializer.join("");testPos=previousPos}}if(getMaskSet().tests[pos]&&getMaskSet().tests[pos][0].cd===cacheDependency){return getMaskSet().tests[pos]}for(var mtndx=ndxInitializer.shift();mtndx<maskTokens.length;mtndx++){var match=resolveTestFromToken(maskTokens[mtndx],ndxInitializer,[mtndx]);if(match&&testPos===pos||testPos>pos){break}}}if(matches.length===0||insertStop){matches.push({match:{fn:null,optionality:false,casing:null,def:"",placeholder:""},locator:[],mloc:{},cd:cacheDependency})}if(ndxIntlzr!==undefined&&getMaskSet().tests[pos]){return $.extend(true,[],matches)}getMaskSet().tests[pos]=$.extend(true,[],matches);return getMaskSet().tests[pos]}function getBufferTemplate(){if(getMaskSet()._buffer===undefined){getMaskSet()._buffer=getMaskTemplate(false,1);if(getMaskSet().buffer===undefined)getMaskSet().buffer=getMaskSet()._buffer.slice()}return getMaskSet()._buffer}function getBuffer(noCache){if(getMaskSet().buffer===undefined||noCache===true){getMaskSet().buffer=getMaskTemplate(true,getLastValidPosition(),true);if(getMaskSet()._buffer===undefined)getMaskSet()._buffer=getMaskSet().buffer.slice()}return getMaskSet().buffer}function refreshFromBuffer(start,end,buffer){var i,p;if(start===true){resetMaskSet();start=0;end=buffer.length}else{for(i=start;i<end;i++){delete getMaskSet().validPositions[i]}}p=start;for(i=start;i<end;i++){resetMaskSet(true);if(buffer[i]!==opts.skipOptionalPartCharacter){var valResult=isValid(p,buffer[i],true,true);if(valResult!==false){resetMaskSet(true);p=valResult.caret!==undefined?valResult.caret:valResult.pos+1}}}}function casing(elem,test,pos){switch(opts.casing||test.casing){case"upper":elem=elem.toUpperCase();break;case"lower":elem=elem.toLowerCase();break;case"title":var posBefore=getMaskSet().validPositions[pos-1];if(pos===0||posBefore&&posBefore.input===String.fromCharCode(Inputmask.keyCode.SPACE)){elem=elem.toUpperCase()}else{elem=elem.toLowerCase()}break;default:if($.isFunction(opts.casing)){var args=Array.prototype.slice.call(arguments);args.push(getMaskSet().validPositions);elem=opts.casing.apply(this,args)}}return elem}function checkAlternationMatch(altArr1,altArr2,na){var altArrC=opts.greedy?altArr2:altArr2.slice(0,1),isMatch=false,naArr=na!==undefined?na.split(","):[],naNdx;for(var i=0;i<naArr.length;i++){if((naNdx=altArr1.indexOf(naArr[i]))!==-1){altArr1.splice(naNdx,1)}}for(var alndx=0;alndx<altArr1.length;alndx++){if($.inArray(altArr1[alndx],altArrC)!==-1){isMatch=true;break}}return isMatch}function alternate(pos,c,strict,fromSetValid,rAltPos){var validPsClone=$.extend(true,{},getMaskSet().validPositions),lastAlt,alternation,isValidRslt=false,altPos,prevAltPos,i,validPos,decisionPos,lAltPos=rAltPos!==undefined?rAltPos:getLastValidPosition();if(lAltPos===-1&&rAltPos===undefined){lastAlt=0;prevAltPos=getTest(lastAlt);alternation=prevAltPos.alternation}else{for(;lAltPos>=0;lAltPos--){altPos=getMaskSet().validPositions[lAltPos];if(altPos&&altPos.alternation!==undefined){if(prevAltPos&&prevAltPos.locator[altPos.alternation]!==altPos.locator[altPos.alternation]){break}lastAlt=lAltPos;alternation=getMaskSet().validPositions[lastAlt].alternation;prevAltPos=altPos}}}if(alternation!==undefined){decisionPos=parseInt(lastAlt);getMaskSet().excludes[decisionPos]=getMaskSet().excludes[decisionPos]||[];if(pos!==true){getMaskSet().excludes[decisionPos].push(getDecisionTaker(prevAltPos))}var validInputsClone=[],staticInputsBeforePos=0;for(i=decisionPos;i<getLastValidPosition(undefined,true)+1;i++){validPos=getMaskSet().validPositions[i];if(validPos&&validPos.generatedInput!==true){validInputsClone.push(validPos.input)}else if(i<pos)staticInputsBeforePos++;delete getMaskSet().validPositions[i]}while(getMaskSet().excludes[decisionPos]&&getMaskSet().excludes[decisionPos].length<10){var posOffset=staticInputsBeforePos*-1,validInputs=validInputsClone.slice();getMaskSet().tests[decisionPos]=undefined;resetMaskSet(true);isValidRslt=true;while(validInputs.length>0){var input=validInputs.shift();if(!(isValidRslt=isValid(getLastValidPosition(undefined,true)+1,input,false,fromSetValid,true))){break}}if(isValidRslt&&c!==undefined){var targetLvp=getLastValidPosition(pos)+1;for(i=decisionPos;i<getLastValidPosition()+1;i++){validPos=getMaskSet().validPositions[i];if((validPos===undefined||validPos.match.fn==null)&&i<pos+posOffset){posOffset++}}pos=pos+posOffset;isValidRslt=isValid(pos>targetLvp?targetLvp:pos,c,strict,fromSetValid,true)}if(!isValidRslt){resetMaskSet();prevAltPos=getTest(decisionPos);getMaskSet().validPositions=$.extend(true,{},validPsClone);if(getMaskSet().excludes[decisionPos]){var decisionTaker=getDecisionTaker(prevAltPos);if(getMaskSet().excludes[decisionPos].indexOf(decisionTaker)!==-1){isValidRslt=alternate(pos,c,strict,fromSetValid,decisionPos-1);break}getMaskSet().excludes[decisionPos].push(decisionTaker);for(i=decisionPos;i<getLastValidPosition(undefined,true)+1;i++){delete getMaskSet().validPositions[i]}}else{isValidRslt=alternate(pos,c,strict,fromSetValid,decisionPos-1);break}}else break}}getMaskSet().excludes[decisionPos]=undefined;return isValidRslt}function isValid(pos,c,strict,fromSetValid,fromAlternate,validateOnly){function isSelection(posObj){return isRTL?posObj.begin-posObj.end>1||posObj.begin-posObj.end===1:posObj.end-posObj.begin>1||posObj.end-posObj.begin===1}strict=strict===true;var maskPos=pos;if(pos.begin!==undefined){maskPos=isRTL?pos.end:pos.begin}function _isValid(position,c,strict){var rslt=false;$.each(getTests(position),function(ndx,tst){var test=tst.match;getBuffer(true);rslt=test.fn!=null?test.fn.test(c,getMaskSet(),position,strict,opts,isSelection(pos)):(c===test.def||c===opts.skipOptionalPartCharacter)&&test.def!==""?{c:getPlaceholder(position,test,true)||test.def,pos:position}:false;if(rslt!==false){var elem=rslt.c!==undefined?rslt.c:c,validatedPos=position;elem=elem===opts.skipOptionalPartCharacter&&test.fn===null?getPlaceholder(position,test,true)||test.def:elem;if(rslt.remove!==undefined){if(!$.isArray(rslt.remove))rslt.remove=[rslt.remove];$.each(rslt.remove.sort(function(a,b){return b-a}),function(ndx,lmnt){revalidateMask({begin:lmnt,end:lmnt+1})})}if(rslt.insert!==undefined){if(!$.isArray(rslt.insert))rslt.insert=[rslt.insert];$.each(rslt.insert.sort(function(a,b){return a-b}),function(ndx,lmnt){isValid(lmnt.pos,lmnt.c,true,fromSetValid)})}if(rslt!==true&&rslt.pos!==undefined&&rslt.pos!==position){validatedPos=rslt.pos}if(rslt!==true&&rslt.pos===undefined&&rslt.c===undefined){return false}if(!revalidateMask(pos,$.extend({},tst,{input:casing(elem,test,validatedPos)}),fromSetValid,validatedPos)){rslt=false}return false}});return rslt}var result=true,positionsClone=$.extend(true,{},getMaskSet().validPositions);if($.isFunction(opts.preValidation)&&!strict&&fromSetValid!==true&&validateOnly!==true){result=opts.preValidation(getBuffer(),maskPos,c,isSelection(pos),opts,getMaskSet())}if(result===true){trackbackPositions(undefined,maskPos,true);if(maxLength===undefined||maskPos<maxLength){result=_isValid(maskPos,c,strict);if((!strict||fromSetValid===true)&&result===false&&validateOnly!==true){var currentPosValid=getMaskSet().validPositions[maskPos];if(currentPosValid&&currentPosValid.match.fn===null&&(currentPosValid.match.def===c||c===opts.skipOptionalPartCharacter)){result={caret:seekNext(maskPos)}}else{if((opts.insertMode||getMaskSet().validPositions[seekNext(maskPos)]===undefined)&&(!isMask(maskPos,true)||getMaskSet().jitOffset[maskPos])){if(getMaskSet().jitOffset[maskPos]&&getMaskSet().validPositions[seekNext(maskPos)]===undefined){result=isValid(maskPos+getMaskSet().jitOffset[maskPos],c,strict);if(result!==false)result.caret=maskPos}else for(var nPos=maskPos+1,snPos=seekNext(maskPos);nPos<=snPos;nPos++){result=_isValid(nPos,c,strict);if(result!==false){result=trackbackPositions(maskPos,result.pos!==undefined?result.pos:nPos)||result;maskPos=nPos;break}}}}}}if(result===false&&opts.keepStatic!==false&&(opts.regex==null||isComplete(getBuffer()))&&!strict&&fromAlternate!==true){result=alternate(maskPos,c,strict,fromSetValid)}if(result===true){result={pos:maskPos}}}if($.isFunction(opts.postValidation)&&result!==false&&!strict&&fromSetValid!==true&&validateOnly!==true){var postResult=opts.postValidation(getBuffer(true),pos.begin!==undefined?isRTL?pos.end:pos.begin:pos,result,opts);if(postResult!==undefined){if(postResult.refreshFromBuffer&&postResult.buffer){var refresh=postResult.refreshFromBuffer;refreshFromBuffer(refresh===true?refresh:refresh.start,refresh.end,postResult.buffer)}result=postResult===true?result:postResult}}if(result&&result.pos===undefined){result.pos=maskPos}if(result===false||validateOnly===true){resetMaskSet(true);getMaskSet().validPositions=$.extend(true,{},positionsClone)}return result}function trackbackPositions(originalPos,newPos,fillOnly){var result;if(originalPos===undefined){for(originalPos=newPos-1;originalPos>0;originalPos--){if(getMaskSet().validPositions[originalPos])break}}for(var ps=originalPos;ps<newPos;ps++){if(getMaskSet().validPositions[ps]===undefined&&!isMask(ps,true)){var vp=ps==0?getTest(ps):getMaskSet().validPositions[ps-1];if(vp){var tests=getTests(ps).slice();if(tests[tests.length-1].match.def==="")tests.pop();var bestMatch=determineTestTemplate(ps,tests);bestMatch=$.extend({},bestMatch,{input:getPlaceholder(ps,bestMatch.match,true)||bestMatch.match.def});bestMatch.generatedInput=true;revalidateMask(ps,bestMatch,true);if(fillOnly!==true){var cvpInput=getMaskSet().validPositions[newPos].input;getMaskSet().validPositions[newPos]=undefined;result=isValid(newPos,cvpInput,true,true)}}}}return result}function revalidateMask(pos,validTest,fromSetValid,validatedPos){function IsEnclosedStatic(pos,valids,selection){var posMatch=valids[pos];if(posMatch!==undefined&&(posMatch.match.fn===null&&posMatch.match.optionality!==true||posMatch.input===opts.radixPoint)){var prevMatch=selection.begin<=pos-1?valids[pos-1]&&valids[pos-1].match.fn===null&&valids[pos-1]:valids[pos-1],nextMatch=selection.end>pos+1?valids[pos+1]&&valids[pos+1].match.fn===null&&valids[pos+1]:valids[pos+1];return prevMatch&&nextMatch}return false}var begin=pos.begin!==undefined?pos.begin:pos,end=pos.end!==undefined?pos.end:pos;if(pos.begin>pos.end){begin=pos.end;end=pos.begin}validatedPos=validatedPos!==undefined?validatedPos:begin;if(begin!==end||opts.insertMode&&getMaskSet().validPositions[validatedPos]!==undefined&&fromSetValid===undefined){var positionsClone=$.extend(true,{},getMaskSet().validPositions),lvp=getLastValidPosition(undefined,true),i;getMaskSet().p=begin;for(i=lvp;i>=begin;i--){if(getMaskSet().validPositions[i]&&getMaskSet().validPositions[i].match.nativeDef==="+"){opts.isNegative=false}delete getMaskSet().validPositions[i]}var valid=true,j=validatedPos,vps=getMaskSet().validPositions,needsValidation=false,posMatch=j,i=j;if(validTest){getMaskSet().validPositions[validatedPos]=$.extend(true,{},validTest);posMatch++;j++;if(begin<end)i++}for(;i<=lvp;i++){var t=positionsClone[i];if(t!==undefined&&(i>=end||i>=begin&&t.generatedInput!==true&&IsEnclosedStatic(i,positionsClone,{begin:begin,end:end}))){while(getTest(posMatch).match.def!==""){if(needsValidation===false&&positionsClone[posMatch]&&positionsClone[posMatch].match.nativeDef===t.match.nativeDef){getMaskSet().validPositions[posMatch]=$.extend(true,{},positionsClone[posMatch]);getMaskSet().validPositions[posMatch].input=t.input;trackbackPositions(undefined,posMatch,true);j=posMatch+1;valid=true}else if(opts.shiftPositions&&positionCanMatchDefinition(posMatch,t.match.def)){var result=isValid(posMatch,t.input,true,true);valid=result!==false;j=result.caret||result.insert?getLastValidPosition():posMatch+1;needsValidation=true}else{valid=t.generatedInput===true||t.input===opts.radixPoint&&opts.numericInput===true}if(valid)break;if(!valid&&posMatch>end&&isMask(posMatch,true)&&(t.match.fn!==null||posMatch>getMaskSet().maskLength)){break}posMatch++}if(getTest(posMatch).match.def=="")valid=false;posMatch=j}if(!valid)break}if(!valid){getMaskSet().validPositions=$.extend(true,{},positionsClone);resetMaskSet(true);return false}}else if(validTest){getMaskSet().validPositions[validatedPos]=$.extend(true,{},validTest)}resetMaskSet(true);return true}function isMask(pos,strict){var test=getTestTemplate(pos).match;if(test.def==="")test=getTest(pos).match;if(test.fn!=null){return test.fn}if(strict!==true&&pos>-1){var tests=getTests(pos);return tests.length>1+(tests[tests.length-1].match.def===""?1:0)}return false}function seekNext(pos,newBlock){var position=pos+1;while(getTest(position).match.def!==""&&(newBlock===true&&(getTest(position).match.newBlockMarker!==true||!isMask(position))||newBlock!==true&&!isMask(position))){position++}return position}function seekPrevious(pos,newBlock){var position=pos,tests;if(position<=0)return 0;while(--position>0&&(newBlock===true&&getTest(position).match.newBlockMarker!==true||newBlock!==true&&!isMask(position)&&(tests=getTests(position),tests.length<2||tests.length===2&&tests[1].match.def===""))){}return position}function writeBuffer(input,buffer,caretPos,event,triggerEvents){if(event&&$.isFunction(opts.onBeforeWrite)){var result=opts.onBeforeWrite.call(inputmask,event,buffer,caretPos,opts);if(result){if(result.refreshFromBuffer){var refresh=result.refreshFromBuffer;refreshFromBuffer(refresh===true?refresh:refresh.start,refresh.end,result.buffer||buffer);buffer=getBuffer(true)}if(caretPos!==undefined)caretPos=result.caret!==undefined?result.caret:caretPos}}if(input!==undefined){input.inputmask._valueSet(buffer.join(""));if(caretPos!==undefined&&(event===undefined||event.type!=="blur")){caret(input,caretPos)}else renderColorMask(input,caretPos,buffer.length===0);if(triggerEvents===true){var $input=$(input),nptVal=input.inputmask._valueGet();skipInputEvent=true;$input.trigger("input");setTimeout(function(){if(nptVal===getBufferTemplate().join("")){$input.trigger("cleared")}else if(isComplete(buffer)===true){$input.trigger("complete")}},0)}}}function getPlaceholder(pos,test,returnPL){test=test||getTest(pos).match;if(test.placeholder!==undefined||returnPL===true){return $.isFunction(test.placeholder)?test.placeholder(opts):test.placeholder}else if(test.fn===null){if(pos>-1&&getMaskSet().validPositions[pos]===undefined){var tests=getTests(pos),staticAlternations=[],prevTest;if(tests.length>1+(tests[tests.length-1].match.def===""?1:0)){for(var i=0;i<tests.length;i++){if(tests[i].match.optionality!==true&&tests[i].match.optionalQuantifier!==true&&(tests[i].match.fn===null||prevTest===undefined||tests[i].match.fn.test(prevTest.match.def,getMaskSet(),pos,true,opts)!==false)){staticAlternations.push(tests[i]);if(tests[i].match.fn===null)prevTest=tests[i];if(staticAlternations.length>1){if(/[0-9a-bA-Z]/.test(staticAlternations[0].match.def)){return opts.placeholder.charAt(pos%opts.placeholder.length)}}}}}}return test.def}return opts.placeholder.charAt(pos%opts.placeholder.length)}function HandleNativePlaceholder(npt,value){if(ie){if(npt.inputmask._valueGet()!==value&&(npt.placeholder!==value||npt.placeholder==="")){var buffer=getBuffer().slice(),nptValue=npt.inputmask._valueGet();if(nptValue!==value){var lvp=getLastValidPosition();if(lvp===-1&&nptValue===getBufferTemplate().join("")){buffer=[]}else if(lvp!==-1){clearOptionalTail(buffer)}writeBuffer(npt,buffer)}}}else if(npt.placeholder!==value){npt.placeholder=value;if(npt.placeholder==="")npt.removeAttribute("placeholder")}}var EventRuler={on:function on(input,eventName,eventHandler){var ev=function ev(e){var that=this;if(that.inputmask===undefined&&this.nodeName!=="FORM"){var imOpts=$.data(that,"_inputmask_opts");if(imOpts)new Inputmask(imOpts).mask(that);else EventRuler.off(that)}else if(e.type!=="setvalue"&&this.nodeName!=="FORM"&&(that.disabled||that.readOnly&&!(e.type==="keydown"&&e.ctrlKey&&e.keyCode===67||opts.tabThrough===false&&e.keyCode===Inputmask.keyCode.TAB))){e.preventDefault()}else{switch(e.type){case"input":if(skipInputEvent===true){skipInputEvent=false;return e.preventDefault()}if(mobile){var args=arguments;setTimeout(function(){eventHandler.apply(that,args);caret(that,that.inputmask.caretPos,undefined,true)},0);return false}break;case"keydown":skipKeyPressEvent=false;skipInputEvent=false;break;case"keypress":if(skipKeyPressEvent===true){return e.preventDefault()}skipKeyPressEvent=true;break;case"click":if(iemobile||iphone){var args=arguments;setTimeout(function(){eventHandler.apply(that,args)},0);return false}break}var returnVal=eventHandler.apply(that,arguments);if(returnVal===false){e.preventDefault();e.stopPropagation()}return returnVal}};input.inputmask.events[eventName]=input.inputmask.events[eventName]||[];input.inputmask.events[eventName].push(ev);if($.inArray(eventName,["submit","reset"])!==-1){if(input.form!==null)$(input.form).on(eventName,ev)}else{$(input).on(eventName,ev)}},off:function off(input,event){if(input.inputmask&&input.inputmask.events){var events;if(event){events=[];events[event]=input.inputmask.events[event]}else{events=input.inputmask.events}$.each(events,function(eventName,evArr){while(evArr.length>0){var ev=evArr.pop();if($.inArray(eventName,["submit","reset"])!==-1){if(input.form!==null)$(input.form).off(eventName,ev)}else{$(input).off(eventName,ev)}}delete input.inputmask.events[eventName]})}}};var EventHandlers={keydownEvent:function keydownEvent(e){var input=this,$input=$(input),k=e.keyCode,pos=caret(input);if(k===Inputmask.keyCode.BACKSPACE||k===Inputmask.keyCode.DELETE||iphone&&k===Inputmask.keyCode.BACKSPACE_SAFARI||e.ctrlKey&&k===Inputmask.keyCode.X&&!isInputEventSupported("cut")){e.preventDefault();handleRemove(input,k,pos);writeBuffer(input,getBuffer(true),getMaskSet().p,e,input.inputmask._valueGet()!==getBuffer().join(""))}else if(k===Inputmask.keyCode.END||k===Inputmask.keyCode.PAGE_DOWN){e.preventDefault();var caretPos=seekNext(getLastValidPosition());caret(input,e.shiftKey?pos.begin:caretPos,caretPos,true)}else if(k===Inputmask.keyCode.HOME&&!e.shiftKey||k===Inputmask.keyCode.PAGE_UP){e.preventDefault();caret(input,0,e.shiftKey?pos.begin:0,true)}else if((opts.undoOnEscape&&k===Inputmask.keyCode.ESCAPE||k===90&&e.ctrlKey)&&e.altKey!==true){checkVal(input,true,false,undoValue.split(""));$input.trigger("click")}else if(k===Inputmask.keyCode.INSERT&&!(e.shiftKey||e.ctrlKey)){opts.insertMode=!opts.insertMode;input.setAttribute("im-insert",opts.insertMode)}else if(opts.tabThrough===true&&k===Inputmask.keyCode.TAB){if(e.shiftKey===true){if(getTest(pos.begin).match.fn===null){pos.begin=seekNext(pos.begin)}pos.end=seekPrevious(pos.begin,true);pos.begin=seekPrevious(pos.end,true)}else{pos.begin=seekNext(pos.begin,true);pos.end=seekNext(pos.begin,true);if(pos.end<getMaskSet().maskLength)pos.end--}if(pos.begin<getMaskSet().maskLength){e.preventDefault();caret(input,pos.begin,pos.end)}}opts.onKeyDown.call(this,e,getBuffer(),caret(input).begin,opts);ignorable=$.inArray(k,opts.ignorables)!==-1},keypressEvent:function keypressEvent(e,checkval,writeOut,strict,ndx){var input=this,$input=$(input),k=e.which||e.charCode||e.keyCode;if(checkval!==true&&!(e.ctrlKey&&e.altKey)&&(e.ctrlKey||e.metaKey||ignorable)){if(k===Inputmask.keyCode.ENTER&&undoValue!==getBuffer().join("")){undoValue=getBuffer().join("");setTimeout(function(){$input.trigger("change")},0)}return true}else{if(k){if(k===46&&e.shiftKey===false&&opts.radixPoint!=="")k=opts.radixPoint.charCodeAt(0);var pos=checkval?{begin:ndx,end:ndx}:caret(input),forwardPosition,c=String.fromCharCode(k),offset=0;if(opts._radixDance&&opts.numericInput){var caretPos=getBuffer().indexOf(opts.radixPoint.charAt(0))+1;if(pos.begin<=caretPos){if(k===opts.radixPoint.charCodeAt(0))offset=1;pos.begin-=1;pos.end-=1}}getMaskSet().writeOutBuffer=true;var valResult=isValid(pos,c,strict);if(valResult!==false){resetMaskSet(true);forwardPosition=valResult.caret!==undefined?valResult.caret:seekNext(valResult.pos.begin?valResult.pos.begin:valResult.pos);getMaskSet().p=forwardPosition}forwardPosition=(opts.numericInput&&valResult.caret===undefined?seekPrevious(forwardPosition):forwardPosition)+offset;if(writeOut!==false){setTimeout(function(){opts.onKeyValidation.call(input,k,valResult,opts)},0);if(getMaskSet().writeOutBuffer&&valResult!==false){var buffer=getBuffer();writeBuffer(input,buffer,forwardPosition,e,checkval!==true)}}e.preventDefault();if(checkval){if(valResult!==false)valResult.forwardPosition=forwardPosition;return valResult}}}},pasteEvent:function pasteEvent(e){var input=this,ev=e.originalEvent||e,$input=$(input),inputValue=input.inputmask._valueGet(true),caretPos=caret(input),tempValue;if(isRTL){tempValue=caretPos.end;caretPos.end=caretPos.begin;caretPos.begin=tempValue}var valueBeforeCaret=inputValue.substr(0,caretPos.begin),valueAfterCaret=inputValue.substr(caretPos.end,inputValue.length);if(valueBeforeCaret===(isRTL?getBufferTemplate().reverse():getBufferTemplate()).slice(0,caretPos.begin).join(""))valueBeforeCaret="";if(valueAfterCaret===(isRTL?getBufferTemplate().reverse():getBufferTemplate()).slice(caretPos.end).join(""))valueAfterCaret="";if(window.clipboardData&&window.clipboardData.getData){inputValue=valueBeforeCaret+window.clipboardData.getData("Text")+valueAfterCaret}else if(ev.clipboardData&&ev.clipboardData.getData){inputValue=valueBeforeCaret+ev.clipboardData.getData("text/plain")+valueAfterCaret}else return true;var pasteValue=inputValue;if($.isFunction(opts.onBeforePaste)){pasteValue=opts.onBeforePaste.call(inputmask,inputValue,opts);if(pasteValue===false){return e.preventDefault()}if(!pasteValue){pasteValue=inputValue}}checkVal(input,false,false,pasteValue.toString().split(""));writeBuffer(input,getBuffer(),seekNext(getLastValidPosition()),e,undoValue!==getBuffer().join(""));return e.preventDefault()},inputFallBackEvent:function inputFallBackEvent(e){function radixPointHandler(input,inputValue,caretPos){if(inputValue.charAt(caretPos.begin-1)==="."&&opts.radixPoint!==""){inputValue=inputValue.split("");inputValue[caretPos.begin-1]=opts.radixPoint.charAt(0);inputValue=inputValue.join("")}return inputValue}function ieMobileHandler(input,inputValue,caretPos){if(iemobile){var inputChar=inputValue.replace(getBuffer().join(""),"");if(inputChar.length===1){var iv=inputValue.split("");iv.splice(caretPos.begin,0,inputChar);inputValue=iv.join("")}}return inputValue}var input=this,inputValue=input.inputmask._valueGet();if(getBuffer().join("")!==inputValue){var caretPos=caret(input);inputValue=radixPointHandler(input,inputValue,caretPos);inputValue=ieMobileHandler(input,inputValue,caretPos);if(getBuffer().join("")!==inputValue){var buffer=getBuffer().join(""),offset=!opts.numericInput&&inputValue.length>buffer.length?-1:0,frontPart=inputValue.substr(0,caretPos.begin),backPart=inputValue.substr(caretPos.begin),frontBufferPart=buffer.substr(0,caretPos.begin+offset),backBufferPart=buffer.substr(caretPos.begin+offset);var selection=caretPos,entries="",isEntry=false;if(frontPart!==frontBufferPart){var fpl=(isEntry=frontPart.length>=frontBufferPart.length)?frontPart.length:frontBufferPart.length,i;for(i=0;frontPart.charAt(i)===frontBufferPart.charAt(i)&&i<fpl;i++){}if(isEntry){selection.begin=i-offset;entries+=frontPart.slice(i,selection.end)}}if(backPart!==backBufferPart){if(backPart.length>backBufferPart.length){entries+=backPart.slice(0,1)}else{if(backPart.length<backBufferPart.length){selection.end+=backBufferPart.length-backPart.length;if(!isEntry&&opts.radixPoint!==""&&backPart===""&&frontPart.charAt(selection.begin+offset-1)===opts.radixPoint){selection.begin--;entries=opts.radixPoint}}}}writeBuffer(input,getBuffer(),{begin:selection.begin+offset,end:selection.end+offset});if(entries.length>0){$.each(entries.split(""),function(ndx,entry){var keypress=new $.Event("keypress");keypress.which=entry.charCodeAt(0);ignorable=false;EventHandlers.keypressEvent.call(input,keypress)})}else{if(selection.begin===selection.end-1){selection.begin=seekPrevious(selection.begin+1);if(selection.begin===selection.end-1){caret(input,selection.begin)}else{caret(input,selection.begin,selection.end)}}var keydown=new $.Event("keydown");keydown.keyCode=opts.numericInput?Inputmask.keyCode.BACKSPACE:Inputmask.keyCode.DELETE;EventHandlers.keydownEvent.call(input,keydown)}e.preventDefault()}}},beforeInputEvent:function beforeInputEvent(e){if(e.cancelable){var input=this;switch(e.inputType){case"insertText":$.each(e.data.split(""),function(ndx,entry){var keypress=new $.Event("keypress");keypress.which=entry.charCodeAt(0);ignorable=false;EventHandlers.keypressEvent.call(input,keypress)});return e.preventDefault();case"deleteContentBackward":var keydown=new $.Event("keydown");keydown.keyCode=Inputmask.keyCode.BACKSPACE;EventHandlers.keydownEvent.call(input,keydown);return e.preventDefault();case"deleteContentForward":var keydown=new $.Event("keydown");keydown.keyCode=Inputmask.keyCode.DELETE;EventHandlers.keydownEvent.call(input,keydown);return e.preventDefault()}}},setValueEvent:function setValueEvent(e){this.inputmask.refreshValue=false;var input=this,value=e&&e.detail?e.detail[0]:arguments[1],value=value||input.inputmask._valueGet(true);if($.isFunction(opts.onBeforeMask))value=opts.onBeforeMask.call(inputmask,value,opts)||value;value=value.toString().split("");checkVal(input,true,false,value);undoValue=getBuffer().join("");if((opts.clearMaskOnLostFocus||opts.clearIncomplete)&&input.inputmask._valueGet()===getBufferTemplate().join("")){input.inputmask._valueSet("")}},focusEvent:function focusEvent(e){var input=this,nptValue=input.inputmask._valueGet();if(opts.showMaskOnFocus){if(nptValue!==getBuffer().join("")){writeBuffer(input,getBuffer(),seekNext(getLastValidPosition()))}else if(mouseEnter===false){caret(input,seekNext(getLastValidPosition()))}}if(opts.positionCaretOnTab===true&&mouseEnter===false){EventHandlers.clickEvent.apply(input,[e,true])}undoValue=getBuffer().join("")},mouseleaveEvent:function mouseleaveEvent(e){var input=this;mouseEnter=false;if(opts.clearMaskOnLostFocus&&document.activeElement!==input){HandleNativePlaceholder(input,originalPlaceholder)}},clickEvent:function clickEvent(e,tabbed){function doRadixFocus(clickPos){if(opts.radixPoint!==""){var vps=getMaskSet().validPositions;if(vps[clickPos]===undefined||vps[clickPos].input===getPlaceholder(clickPos)){if(clickPos<seekNext(-1))return true;var radixPos=$.inArray(opts.radixPoint,getBuffer());if(radixPos!==-1){for(var vp in vps){if(radixPos<vp&&vps[vp].input!==getPlaceholder(vp)){return false}}return true}}}return false}var input=this;setTimeout(function(){if(document.activeElement===input){var selectedCaret=caret(input);if(tabbed){if(isRTL){selectedCaret.end=selectedCaret.begin}else{selectedCaret.begin=selectedCaret.end}}if(selectedCaret.begin===selectedCaret.end){switch(opts.positionCaretOnClick){case"none":break;case"select":caret(input,0,getBuffer().length);break;case"ignore":caret(input,seekNext(getLastValidPosition()));break;case"radixFocus":if(doRadixFocus(selectedCaret.begin)){var radixPos=getBuffer().join("").indexOf(opts.radixPoint);caret(input,opts.numericInput?seekNext(radixPos):radixPos);break}default:var clickPosition=selectedCaret.begin,lvclickPosition=getLastValidPosition(clickPosition,true),lastPosition=seekNext(lvclickPosition);if(clickPosition<lastPosition){caret(input,!isMask(clickPosition,true)&&!isMask(clickPosition-1,true)?seekNext(clickPosition):clickPosition)}else{var lvp=getMaskSet().validPositions[lvclickPosition],tt=getTestTemplate(lastPosition,lvp?lvp.match.locator:undefined,lvp),placeholder=getPlaceholder(lastPosition,tt.match);if(placeholder!==""&&getBuffer()[lastPosition]!==placeholder&&tt.match.optionalQuantifier!==true&&tt.match.newBlockMarker!==true||!isMask(lastPosition,opts.keepStatic)&&tt.match.def===placeholder){var newPos=seekNext(lastPosition);if(clickPosition>=newPos||clickPosition===lastPosition){lastPosition=newPos}}caret(input,lastPosition)}break}}}},0)},cutEvent:function cutEvent(e){var input=this,$input=$(input),pos=caret(input),ev=e.originalEvent||e;var clipboardData=window.clipboardData||ev.clipboardData,clipData=isRTL?getBuffer().slice(pos.end,pos.begin):getBuffer().slice(pos.begin,pos.end);clipboardData.setData("text",isRTL?clipData.reverse().join(""):clipData.join(""));if(document.execCommand)document.execCommand("copy");handleRemove(input,Inputmask.keyCode.DELETE,pos);writeBuffer(input,getBuffer(),getMaskSet().p,e,undoValue!==getBuffer().join(""))},blurEvent:function blurEvent(e){var $input=$(this),input=this;if(input.inputmask){HandleNativePlaceholder(input,originalPlaceholder);var nptValue=input.inputmask._valueGet(),buffer=getBuffer().slice();if(nptValue!==""||colorMask!==undefined){if(opts.clearMaskOnLostFocus){if(getLastValidPosition()===-1&&nptValue===getBufferTemplate().join("")){buffer=[]}else{clearOptionalTail(buffer)}}if(isComplete(buffer)===false){setTimeout(function(){$input.trigger("incomplete")},0);if(opts.clearIncomplete){resetMaskSet();if(opts.clearMaskOnLostFocus){buffer=[]}else{buffer=getBufferTemplate().slice()}}}writeBuffer(input,buffer,undefined,e)}if(undoValue!==getBuffer().join("")){undoValue=buffer.join("");$input.trigger("change")}}},mouseenterEvent:function mouseenterEvent(e){var input=this;mouseEnter=true;if(document.activeElement!==input&&opts.showMaskOnHover){HandleNativePlaceholder(input,(isRTL?getBuffer().slice().reverse():getBuffer()).join(""))}},submitEvent:function submitEvent(e){if(undoValue!==getBuffer().join("")){$el.trigger("change")}if(opts.clearMaskOnLostFocus&&getLastValidPosition()===-1&&el.inputmask._valueGet&&el.inputmask._valueGet()===getBufferTemplate().join("")){el.inputmask._valueSet("")}if(opts.clearIncomplete&&isComplete(getBuffer())===false){el.inputmask._valueSet("")}if(opts.removeMaskOnSubmit){el.inputmask._valueSet(el.inputmask.unmaskedvalue(),true);setTimeout(function(){writeBuffer(el,getBuffer())},0)}},resetEvent:function resetEvent(e){el.inputmask.refreshValue=true;setTimeout(function(){$el.trigger("setvalue")},0)}};function checkVal(input,writeOut,strict,nptvl,initiatingEvent){var inputmask=this||input.inputmask,inputValue=nptvl.slice(),charCodes="",initialNdx=-1,result=undefined;function isTemplateMatch(ndx,charCodes){var charCodeNdx=getMaskTemplate(true,0,false).slice(ndx,seekNext(ndx)).join("").replace(/'/g,"").indexOf(charCodes);return charCodeNdx!==-1&&!isMask(ndx)&&(getTest(ndx).match.nativeDef===charCodes.charAt(0)||getTest(ndx).match.fn===null&&getTest(ndx).match.nativeDef==="'"+charCodes.charAt(0)||getTest(ndx).match.nativeDef===" "&&(getTest(ndx+1).match.nativeDef===charCodes.charAt(0)||getTest(ndx+1).match.fn===null&&getTest(ndx+1).match.nativeDef==="'"+charCodes.charAt(0)))}resetMaskSet();if(!strict&&opts.autoUnmask!==true){var staticInput=getBufferTemplate().slice(0,seekNext(-1)).join(""),matches=inputValue.join("").match(new RegExp("^"+Inputmask.escapeRegex(staticInput),"g"));if(matches&&matches.length>0){inputValue.splice(0,matches.length*staticInput.length);initialNdx=seekNext(initialNdx)}}else{initialNdx=seekNext(initialNdx)}if(initialNdx===-1){getMaskSet().p=seekNext(initialNdx);initialNdx=0}else getMaskSet().p=initialNdx;inputmask.caretPos={begin:initialNdx};$.each(inputValue,function(ndx,charCode){if(charCode!==undefined){if(getMaskSet().validPositions[ndx]===undefined&&inputValue[ndx]===getPlaceholder(ndx)&&isMask(ndx,true)&&isValid(ndx,inputValue[ndx],true,undefined,undefined,true)===false){getMaskSet().p++}else{var keypress=new $.Event("_checkval");keypress.which=charCode.charCodeAt(0);charCodes+=charCode;var lvp=getLastValidPosition(undefined,true);if(!isTemplateMatch(initialNdx,charCodes)){result=EventHandlers.keypressEvent.call(input,keypress,true,false,strict,inputmask.caretPos.begin);if(result){initialNdx=inputmask.caretPos.begin+1;charCodes=""}}else{result=EventHandlers.keypressEvent.call(input,keypress,true,false,strict,lvp+1)}if(result){writeBuffer(undefined,getBuffer(),result.forwardPosition,keypress,false);inputmask.caretPos={begin:result.forwardPosition,end:result.forwardPosition}}}}});if(writeOut)writeBuffer(input,getBuffer(),result?result.forwardPosition:undefined,initiatingEvent||new $.Event("checkval"),initiatingEvent&&initiatingEvent.type==="input")}function unmaskedvalue(input){if(input){if(input.inputmask===undefined){return input.value}if(input.inputmask&&input.inputmask.refreshValue){EventHandlers.setValueEvent.call(input)}}var umValue=[],vps=getMaskSet().validPositions;for(var pndx in vps){if(vps[pndx].match&&vps[pndx].match.fn!=null){umValue.push(vps[pndx].input)}}var unmaskedValue=umValue.length===0?"":(isRTL?umValue.reverse():umValue).join("");if($.isFunction(opts.onUnMask)){var bufferValue=(isRTL?getBuffer().slice().reverse():getBuffer()).join("");unmaskedValue=opts.onUnMask.call(inputmask,bufferValue,unmaskedValue,opts)}return unmaskedValue}function caret(input,begin,end,notranslate){function translatePosition(pos){if(isRTL&&typeof pos==="number"&&(!opts.greedy||opts.placeholder!=="")&&el){pos=el.inputmask._valueGet().length-pos}return pos}var range;if(begin!==undefined){if($.isArray(begin)){end=isRTL?begin[0]:begin[1];begin=isRTL?begin[1]:begin[0]}if(begin.begin!==undefined){end=isRTL?begin.begin:begin.end;begin=isRTL?begin.end:begin.begin}if(typeof begin==="number"){begin=notranslate?begin:translatePosition(begin);end=notranslate?end:translatePosition(end);end=typeof end=="number"?end:begin;var scrollCalc=parseInt(((input.ownerDocument.defaultView||window).getComputedStyle?(input.ownerDocument.defaultView||window).getComputedStyle(input,null):input.currentStyle).fontSize)*end;input.scrollLeft=scrollCalc>input.scrollWidth?scrollCalc:0;input.inputmask.caretPos={begin:begin,end:end};if(input===document.activeElement){if("selectionStart"in input){input.selectionStart=begin;input.selectionEnd=end}else if(window.getSelection){range=document.createRange();if(input.firstChild===undefined||input.firstChild===null){var textNode=document.createTextNode("");input.appendChild(textNode)}range.setStart(input.firstChild,begin<input.inputmask._valueGet().length?begin:input.inputmask._valueGet().length);range.setEnd(input.firstChild,end<input.inputmask._valueGet().length?end:input.inputmask._valueGet().length);range.collapse(true);var sel=window.getSelection();sel.removeAllRanges();sel.addRange(range)}else if(input.createTextRange){range=input.createTextRange();range.collapse(true);range.moveEnd("character",end);range.moveStart("character",begin);range.select()}renderColorMask(input,{begin:begin,end:end})}}}else{if("selectionStart"in input){begin=input.selectionStart;end=input.selectionEnd}else if(window.getSelection){range=window.getSelection().getRangeAt(0);if(range.commonAncestorContainer.parentNode===input||range.commonAncestorContainer===input){begin=range.startOffset;end=range.endOffset}}else if(document.selection&&document.selection.createRange){range=document.selection.createRange();begin=0-range.duplicate().moveStart("character",-input.inputmask._valueGet().length);end=begin+range.text.length}return{begin:notranslate?begin:translatePosition(begin),end:notranslate?end:translatePosition(end)}}}function determineLastRequiredPosition(returnDefinition){var buffer=getMaskTemplate(true,getLastValidPosition(),true,true),bl=buffer.length,pos,lvp=getLastValidPosition(),positions={},lvTest=getMaskSet().validPositions[lvp],ndxIntlzr=lvTest!==undefined?lvTest.locator.slice():undefined,testPos;for(pos=lvp+1;pos<buffer.length;pos++){testPos=getTestTemplate(pos,ndxIntlzr,pos-1);ndxIntlzr=testPos.locator.slice();positions[pos]=$.extend(true,{},testPos)}var lvTestAlt=lvTest&&lvTest.alternation!==undefined?lvTest.locator[lvTest.alternation]:undefined;for(pos=bl-1;pos>lvp;pos--){testPos=positions[pos];if((testPos.match.optionality||testPos.match.optionalQuantifier&&testPos.match.newBlockMarker||lvTestAlt&&(lvTestAlt!==positions[pos].locator[lvTest.alternation]&&testPos.match.fn!=null||testPos.match.fn===null&&testPos.locator[lvTest.alternation]&&checkAlternationMatch(testPos.locator[lvTest.alternation].toString().split(","),lvTestAlt.toString().split(","))&&getTests(pos)[0].def!==""))&&buffer[pos]===getPlaceholder(pos,testPos.match)){bl--}else break}return returnDefinition?{l:bl,def:positions[bl]?positions[bl].match:undefined}:bl}function clearOptionalTail(buffer){buffer.length=0;var template=getMaskTemplate(true,0,true,undefined,true),lmnt,validPos;while(lmnt=template.shift(),lmnt!==undefined){buffer.push(lmnt)}return buffer}function isComplete(buffer){if($.isFunction(opts.isComplete))return opts.isComplete(buffer,opts);if(opts.repeat==="*")return undefined;var complete=false,lrp=determineLastRequiredPosition(true),aml=seekPrevious(lrp.l);if(lrp.def===undefined||lrp.def.newBlockMarker||lrp.def.optionality||lrp.def.optionalQuantifier){complete=true;for(var i=0;i<=aml;i++){var test=getTestTemplate(i).match;if(test.fn!==null&&getMaskSet().validPositions[i]===undefined&&test.optionality!==true&&test.optionalQuantifier!==true||test.fn===null&&buffer[i]!==getPlaceholder(i,test)){complete=false;break}}}return complete}function handleRemove(input,k,pos,strict,fromIsValid){if(opts.numericInput||isRTL){if(k===Inputmask.keyCode.BACKSPACE){k=Inputmask.keyCode.DELETE}else if(k===Inputmask.keyCode.DELETE){k=Inputmask.keyCode.BACKSPACE}if(isRTL){var pend=pos.end;pos.end=pos.begin;pos.begin=pend}}if(k===Inputmask.keyCode.BACKSPACE&&pos.end-pos.begin<1){pos.begin=seekPrevious(pos.begin);if(getMaskSet().validPositions[pos.begin]!==undefined&&getMaskSet().validPositions[pos.begin].input===opts.groupSeparator){pos.begin--}}else if(k===Inputmask.keyCode.DELETE&&pos.begin===pos.end){pos.end=isMask(pos.end,true)&&getMaskSet().validPositions[pos.end]&&getMaskSet().validPositions[pos.end].input!==opts.radixPoint?pos.end+1:seekNext(pos.end)+1;if(getMaskSet().validPositions[pos.begin]!==undefined&&getMaskSet().validPositions[pos.begin].input===opts.groupSeparator){pos.end++}}revalidateMask(pos);if(strict!==true&&opts.keepStatic!==false||opts.regex!==null){var result=alternate(true);if(result){var newPos=result.caret!==undefined?result.caret:result.pos?seekNext(result.pos.begin?result.pos.begin:result.pos):getLastValidPosition(-1,true);if(k!==Inputmask.keyCode.DELETE||pos.begin>newPos){pos.begin==newPos}}}var lvp=getLastValidPosition(pos.begin,true);if(lvp<pos.begin||pos.begin===-1){getMaskSet().p=seekNext(lvp)}else if(strict!==true){getMaskSet().p=pos.begin;if(fromIsValid!==true){while(getMaskSet().p<lvp&&getMaskSet().validPositions[getMaskSet().p]===undefined){getMaskSet().p++}}}}function initializeColorMask(input){var computedStyle=(input.ownerDocument.defaultView||window).getComputedStyle(input,null);function findCaretPos(clientx){var e=document.createElement("span"),caretPos;for(var style in computedStyle){if(isNaN(style)&&style.indexOf("font")!==-1){e.style[style]=computedStyle[style]}}e.style.textTransform=computedStyle.textTransform;e.style.letterSpacing=computedStyle.letterSpacing;e.style.position="absolute";e.style.height="auto";e.style.width="auto";e.style.visibility="hidden";e.style.whiteSpace="nowrap";document.body.appendChild(e);var inputText=input.inputmask._valueGet(),previousWidth=0,itl;for(caretPos=0,itl=inputText.length;caretPos<=itl;caretPos++){e.innerHTML+=inputText.charAt(caretPos)||"_";if(e.offsetWidth>=clientx){var offset1=clientx-previousWidth;var offset2=e.offsetWidth-clientx;e.innerHTML=inputText.charAt(caretPos);offset1-=e.offsetWidth/3;caretPos=offset1<offset2?caretPos-1:caretPos;break}previousWidth=e.offsetWidth}document.body.removeChild(e);return caretPos}var template=document.createElement("div");template.style.width=computedStyle.width;template.style.textAlign=computedStyle.textAlign;colorMask=document.createElement("div");input.inputmask.colorMask=colorMask;colorMask.className="im-colormask";input.parentNode.insertBefore(colorMask,input);input.parentNode.removeChild(input);colorMask.appendChild(input);colorMask.appendChild(template);input.style.left=template.offsetLeft+"px";$(colorMask).on("mouseleave",function(e){return EventHandlers.mouseleaveEvent.call(input,[e])});$(colorMask).on("mouseenter",function(e){return EventHandlers.mouseenterEvent.call(input,[e])});$(colorMask).on("click",function(e){caret(input,findCaretPos(e.clientX));return EventHandlers.clickEvent.call(input,[e])})}function renderColorMask(input,caretPos,clear){var maskTemplate=[],isStatic=false,test,testPos,ndxIntlzr,pos=0;function setEntry(entry){if(entry===undefined)entry="";if(!isStatic&&(test.fn===null||testPos.input===undefined)){isStatic=true;maskTemplate.push("<span class='im-static'>"+entry)}else if(isStatic&&(test.fn!==null&&testPos.input!==undefined||test.def==="")){isStatic=false;var mtl=maskTemplate.length;maskTemplate[mtl-1]=maskTemplate[mtl-1]+"</span>";maskTemplate.push(entry)}else maskTemplate.push(entry)}function setCaret(){if(document.activeElement===input){maskTemplate.splice(caretPos.begin,0,caretPos.begin===caretPos.end||caretPos.end>getMaskSet().maskLength?'<mark class="im-caret" style="border-right-width: 1px;border-right-style: solid;">':'<mark class="im-caret-select">');maskTemplate.splice(caretPos.end+1,0,"</mark>")}}if(colorMask!==undefined){var buffer=getBuffer();if(caretPos===undefined){caretPos=caret(input)}else if(caretPos.begin===undefined){caretPos={begin:caretPos,end:caretPos}}if(clear!==true){var lvp=getLastValidPosition();do{if(getMaskSet().validPositions[pos]){testPos=getMaskSet().validPositions[pos];test=testPos.match;ndxIntlzr=testPos.locator.slice();setEntry(buffer[pos])}else{testPos=getTestTemplate(pos,ndxIntlzr,pos-1);test=testPos.match;ndxIntlzr=testPos.locator.slice();if(opts.jitMasking===false||pos<lvp||typeof opts.jitMasking==="number"&&isFinite(opts.jitMasking)&&opts.jitMasking>pos){setEntry(getPlaceholder(pos,test))}else isStatic=false}pos++}while((maxLength===undefined||pos<maxLength)&&(test.fn!==null||test.def!=="")||lvp>pos||isStatic);if(isStatic)setEntry();setCaret()}var template=colorMask.getElementsByTagName("div")[0];template.innerHTML=maskTemplate.join("");input.inputmask.positionColorMask(input,template)}}function mask(elem){function isElementTypeSupported(input,opts){function patchValueProperty(npt){var valueGet;var valueSet;function patchValhook(type){if($.valHooks&&($.valHooks[type]===undefined||$.valHooks[type].inputmaskpatch!==true)){var valhookGet=$.valHooks[type]&&$.valHooks[type].get?$.valHooks[type].get:function(elem){return elem.value};var valhookSet=$.valHooks[type]&&$.valHooks[type].set?$.valHooks[type].set:function(elem,value){elem.value=value;return elem};$.valHooks[type]={get:function get(elem){if(elem.inputmask){if(elem.inputmask.opts.autoUnmask){return elem.inputmask.unmaskedvalue()}else{var result=valhookGet(elem);return getLastValidPosition(undefined,undefined,elem.inputmask.maskset.validPositions)!==-1||opts.nullable!==true?result:""}}else return valhookGet(elem)},set:function set(elem,value){var $elem=$(elem),result;result=valhookSet(elem,value);if(elem.inputmask){$elem.trigger("setvalue",[value])}return result},inputmaskpatch:true}}}function getter(){if(this.inputmask){return this.inputmask.opts.autoUnmask?this.inputmask.unmaskedvalue():getLastValidPosition()!==-1||opts.nullable!==true?document.activeElement===this&&opts.clearMaskOnLostFocus?(isRTL?clearOptionalTail(getBuffer().slice()).reverse():clearOptionalTail(getBuffer().slice())).join(""):valueGet.call(this):""}else return valueGet.call(this)}function setter(value){valueSet.call(this,value);if(this.inputmask){$(this).trigger("setvalue",[value])}}function installNativeValueSetFallback(npt){EventRuler.on(npt,"mouseenter",function(event){var $input=$(this),input=this,value=input.inputmask._valueGet();if(value!==getBuffer().join("")){$input.trigger("setvalue")}})}if(!npt.inputmask.__valueGet){if(opts.noValuePatching!==true){if(Object.getOwnPropertyDescriptor){if(typeof Object.getPrototypeOf!=="function"){Object.getPrototypeOf=_typeof("test".__proto__)==="object"?function(object){return object.__proto__}:function(object){return object.constructor.prototype}}var valueProperty=Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(npt),"value"):undefined;if(valueProperty&&valueProperty.get&&valueProperty.set){valueGet=valueProperty.get;valueSet=valueProperty.set;Object.defineProperty(npt,"value",{get:getter,set:setter,configurable:true})}else if(npt.tagName!=="INPUT"){valueGet=function valueGet(){return this.textContent};valueSet=function valueSet(value){this.textContent=value};Object.defineProperty(npt,"value",{get:getter,set:setter,configurable:true})}}else if(document.__lookupGetter__&&npt.__lookupGetter__("value")){valueGet=npt.__lookupGetter__("value");valueSet=npt.__lookupSetter__("value");npt.__defineGetter__("value",getter);npt.__defineSetter__("value",setter)}npt.inputmask.__valueGet=valueGet;npt.inputmask.__valueSet=valueSet}npt.inputmask._valueGet=function(overruleRTL){return isRTL&&overruleRTL!==true?valueGet.call(this.el).split("").reverse().join(""):valueGet.call(this.el)};npt.inputmask._valueSet=function(value,overruleRTL){valueSet.call(this.el,value===null||value===undefined?"":overruleRTL!==true&&isRTL?value.split("").reverse().join(""):value)};if(valueGet===undefined){valueGet=function valueGet(){return this.value};valueSet=function valueSet(value){this.value=value};patchValhook(npt.type);installNativeValueSetFallback(npt)}}}var elementType=input.getAttribute("type");var isSupported=input.tagName==="INPUT"&&$.inArray(elementType,opts.supportsInputType)!==-1||input.isContentEditable||input.tagName==="TEXTAREA";if(!isSupported){if(input.tagName==="INPUT"){var el=document.createElement("input");el.setAttribute("type",elementType);isSupported=el.type==="text";el=null}else isSupported="partial"}if(isSupported!==false){patchValueProperty(input)}else input.inputmask=undefined;return isSupported}EventRuler.off(elem);var isSupported=isElementTypeSupported(elem,opts);if(isSupported!==false){el=elem;$el=$(el);originalPlaceholder=el.placeholder;maxLength=el!==undefined?el.maxLength:undefined;if(maxLength===-1)maxLength=undefined;if(opts.colorMask===true){initializeColorMask(el)}if(mobile){if("inputMode"in el){el.inputmode=opts.inputmode;el.setAttribute("inputmode",opts.inputmode)}if(opts.disablePredictiveText===true){if("autocorrect"in el){el.autocorrect=false}else{if(opts.colorMask!==true){initializeColorMask(el)}el.type="password"}}}if(isSupported===true){el.setAttribute("im-insert",opts.insertMode);EventRuler.on(el,"submit",EventHandlers.submitEvent);EventRuler.on(el,"reset",EventHandlers.resetEvent);EventRuler.on(el,"blur",EventHandlers.blurEvent);EventRuler.on(el,"focus",EventHandlers.focusEvent);if(opts.colorMask!==true){EventRuler.on(el,"click",EventHandlers.clickEvent);EventRuler.on(el,"mouseleave",EventHandlers.mouseleaveEvent);EventRuler.on(el,"mouseenter",EventHandlers.mouseenterEvent)}EventRuler.on(el,"paste",EventHandlers.pasteEvent);EventRuler.on(el,"cut",EventHandlers.cutEvent);EventRuler.on(el,"complete",opts.oncomplete);EventRuler.on(el,"incomplete",opts.onincomplete);EventRuler.on(el,"cleared",opts.oncleared);if(!mobile&&opts.inputEventOnly!==true){EventRuler.on(el,"keydown",EventHandlers.keydownEvent);EventRuler.on(el,"keypress",EventHandlers.keypressEvent)}else{el.removeAttribute("maxLength")}EventRuler.on(el,"input",EventHandlers.inputFallBackEvent);EventRuler.on(el,"beforeinput",EventHandlers.beforeInputEvent)}EventRuler.on(el,"setvalue",EventHandlers.setValueEvent);undoValue=getBufferTemplate().join("");if(el.inputmask._valueGet(true)!==""||opts.clearMaskOnLostFocus===false||document.activeElement===el){var initialValue=$.isFunction(opts.onBeforeMask)?opts.onBeforeMask.call(inputmask,el.inputmask._valueGet(true),opts)||el.inputmask._valueGet(true):el.inputmask._valueGet(true);if(initialValue!=="")checkVal(el,true,false,initialValue.split(""));var buffer=getBuffer().slice();undoValue=buffer.join("");if(isComplete(buffer)===false){if(opts.clearIncomplete){resetMaskSet()}}if(opts.clearMaskOnLostFocus&&document.activeElement!==el){if(getLastValidPosition()===-1){buffer=[]}else{clearOptionalTail(buffer)}}if(opts.clearMaskOnLostFocus===false||opts.showMaskOnFocus&&document.activeElement===el||el.inputmask._valueGet(true)!=="")writeBuffer(el,buffer);if(document.activeElement===el){caret(el,seekNext(getLastValidPosition()))}}}}var valueBuffer;if(actionObj!==undefined){switch(actionObj.action){case"isComplete":el=actionObj.el;return isComplete(getBuffer());case"unmaskedvalue":if(el===undefined||actionObj.value!==undefined){valueBuffer=actionObj.value;valueBuffer=($.isFunction(opts.onBeforeMask)?opts.onBeforeMask.call(inputmask,valueBuffer,opts)||valueBuffer:valueBuffer).split("");checkVal.call(this,undefined,false,false,valueBuffer);if($.isFunction(opts.onBeforeWrite))opts.onBeforeWrite.call(inputmask,undefined,getBuffer(),0,opts)}return unmaskedvalue(el);case"mask":mask(el);break;case"format":valueBuffer=($.isFunction(opts.onBeforeMask)?opts.onBeforeMask.call(inputmask,actionObj.value,opts)||actionObj.value:actionObj.value).split("");checkVal.call(this,undefined,true,false,valueBuffer);if(actionObj.metadata){return{value:isRTL?getBuffer().slice().reverse().join(""):getBuffer().join(""),metadata:maskScope.call(this,{action:"getmetadata"},maskset,opts)}}return isRTL?getBuffer().slice().reverse().join(""):getBuffer().join("");case"isValid":if(actionObj.value){valueBuffer=actionObj.value.split("");checkVal.call(this,undefined,true,true,valueBuffer)}else{actionObj.value=getBuffer().join("")}var buffer=getBuffer();var rl=determineLastRequiredPosition(),lmib=buffer.length-1;for(;lmib>rl;lmib--){if(isMask(lmib))break}buffer.splice(rl,lmib+1-rl);return isComplete(buffer)&&actionObj.value===getBuffer().join("");case"getemptymask":return getBufferTemplate().join("");case"remove":if(el&&el.inputmask){$.data(el,"_inputmask_opts",null);$el=$(el);el.inputmask._valueSet(opts.autoUnmask?unmaskedvalue(el):el.inputmask._valueGet(true));EventRuler.off(el);if(el.inputmask.colorMask){colorMask=el.inputmask.colorMask;colorMask.removeChild(el);colorMask.parentNode.insertBefore(el,colorMask);colorMask.parentNode.removeChild(colorMask)}var valueProperty;if(Object.getOwnPropertyDescriptor&&Object.getPrototypeOf){valueProperty=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(el),"value");if(valueProperty){if(el.inputmask.__valueGet){Object.defineProperty(el,"value",{get:el.inputmask.__valueGet,set:el.inputmask.__valueSet,configurable:true})}}}else if(document.__lookupGetter__&&el.__lookupGetter__("value")){if(el.inputmask.__valueGet){el.__defineGetter__("value",el.inputmask.__valueGet);el.__defineSetter__("value",el.inputmask.__valueSet)}}el.inputmask=undefined}return el;break;case"getmetadata":if($.isArray(maskset.metadata)){var maskTarget=getMaskTemplate(true,0,false).join("");$.each(maskset.metadata,function(ndx,mtdt){if(mtdt.mask===maskTarget){maskTarget=mtdt;return false}});return maskTarget}return maskset.metadata}}}return Inputmask})},function(module,exports,__webpack_require__){"use strict";var __WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};(function(factory){if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__=[__webpack_require__(4)],__WEBPACK_AMD_DEFINE_FACTORY__=factory,__WEBPACK_AMD_DEFINE_RESULT__=typeof __WEBPACK_AMD_DEFINE_FACTORY__==="function"?__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__):__WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))}else{}})(function($){return $})},function(module,exports){module.exports=jQuery},function(module,exports,__webpack_require__){"use strict";var __WEBPACK_AMD_DEFINE_RESULT__;var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};if(true)!(__WEBPACK_AMD_DEFINE_RESULT__=function(){return typeof window!=="undefined"?window:new(eval("require('jsdom').JSDOM"))("").window}.call(exports,__webpack_require__,exports,module),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));else{}},function(module,exports,__webpack_require__){"use strict";var __WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};(function(factory){if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__=[__webpack_require__(2)],__WEBPACK_AMD_DEFINE_FACTORY__=factory,__WEBPACK_AMD_DEFINE_RESULT__=typeof __WEBPACK_AMD_DEFINE_FACTORY__==="function"?__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__):__WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))}else{}})(function(Inputmask){var $=Inputmask.dependencyLib;var formatCode={d:["[1-9]|[12][0-9]|3[01]",Date.prototype.setDate,"day",Date.prototype.getDate],dd:["0[1-9]|[12][0-9]|3[01]",Date.prototype.setDate,"day",function(){return pad(Date.prototype.getDate.call(this),2)}],ddd:[""],dddd:[""],m:["[1-9]|1[012]",Date.prototype.setMonth,"month",function(){return Date.prototype.getMonth.call(this)+1}],mm:["0[1-9]|1[012]",Date.prototype.setMonth,"month",function(){return pad(Date.prototype.getMonth.call(this)+1,2)}],mmm:[""],mmmm:[""],yy:["[0-9]{2}",Date.prototype.setFullYear,"year",function(){return pad(Date.prototype.getFullYear.call(this),2)}],yyyy:["[0-9]{4}",Date.prototype.setFullYear,"year",function(){return pad(Date.prototype.getFullYear.call(this),4)}],h:["[1-9]|1[0-2]",Date.prototype.setHours,"hours",Date.prototype.getHours],hh:["0[1-9]|1[0-2]",Date.prototype.setHours,"hours",function(){return pad(Date.prototype.getHours.call(this),2)}],hhh:["[0-9]+",Date.prototype.setHours,"hours",Date.prototype.getHours],H:["1?[0-9]|2[0-3]",Date.prototype.setHours,"hours",Date.prototype.getHours],HH:["0[0-9]|1[0-9]|2[0-3]",Date.prototype.setHours,"hours",function(){return pad(Date.prototype.getHours.call(this),2)}],HHH:["[0-9]+",Date.prototype.setHours,"hours",Date.prototype.getHours],M:["[1-5]?[0-9]",Date.prototype.setMinutes,"minutes",Date.prototype.getMinutes],MM:["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]",Date.prototype.setMinutes,"minutes",function(){return pad(Date.prototype.getMinutes.call(this),2)}],ss:["[0-5][0-9]",Date.prototype.setSeconds,"seconds",function(){return pad(Date.prototype.getSeconds.call(this),2)}],l:["[0-9]{3}",Date.prototype.setMilliseconds,"milliseconds",function(){return pad(Date.prototype.getMilliseconds.call(this),3)}],L:["[0-9]{2}",Date.prototype.setMilliseconds,"milliseconds",function(){return pad(Date.prototype.getMilliseconds.call(this),2)}],t:["[ap]"],tt:["[ap]m"],T:["[AP]"],TT:["[AP]M"],Z:[""],o:[""],S:[""]},formatAlias={isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:ss",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"};function getTokenizer(opts){if(!opts.tokenizer){var tokens=[];for(var ndx in formatCode){if(tokens.indexOf(ndx[0])===-1)tokens.push(ndx[0])}opts.tokenizer="("+tokens.join("+|")+")+?|.";opts.tokenizer=new RegExp(opts.tokenizer,"g")}return opts.tokenizer}function isValidDate(dateParts,currentResult){return!isFinite(dateParts.rawday)||dateParts.day=="29"&&!isFinite(dateParts.rawyear)||new Date(dateParts.date.getFullYear(),isFinite(dateParts.rawmonth)?dateParts.month:dateParts.date.getMonth()+1,0).getDate()>=dateParts.day?currentResult:false}function isDateInRange(dateParts,opts){var result=true;if(opts.min){if(dateParts["rawyear"]){var rawYear=dateParts["rawyear"].replace(/[^0-9]/g,""),minYear=opts.min.year.substr(0,rawYear.length);result=minYear<=rawYear}if(dateParts["year"]===dateParts["rawyear"]){if(opts.min.date.getTime()===opts.min.date.getTime()){result=opts.min.date.getTime()<=dateParts.date.getTime()}}}if(result&&opts.max&&opts.max.date.getTime()===opts.max.date.getTime()){result=opts.max.date.getTime()>=dateParts.date.getTime()}return result}function parse(format,dateObjValue,opts,raw){var mask="",match;while(match=getTokenizer(opts).exec(format)){if(dateObjValue===undefined){if(formatCode[match[0]]){mask+="("+formatCode[match[0]][0]+")"}else{switch(match[0]){case"[":mask+="(";break;case"]":mask+=")?";break;default:mask+=Inputmask.escapeRegex(match[0])}}}else{if(formatCode[match[0]]){if(raw!==true&&formatCode[match[0]][3]){var getFn=formatCode[match[0]][3];mask+=getFn.call(dateObjValue.date)}else if(formatCode[match[0]][2])mask+=dateObjValue["raw"+formatCode[match[0]][2]];else mask+=match[0]}else mask+=match[0]}}return mask}function pad(val,len){val=String(val);len=len||2;while(val.length<len){val="0"+val}return val}function analyseMask(maskString,format,opts){var dateObj={date:new Date(1,0,1)},targetProp,mask=maskString,match,dateOperation,targetValidator;function extendProperty(value){var correctedValue=value.replace(/[^0-9]/g,"0");if(correctedValue!=value){var enteredPart=value.replace(/[^0-9]/g,""),min=(opts.min&&opts.min[targetProp]||value).toString(),max=(opts.max&&opts.max[targetProp]||value).toString();correctedValue=enteredPart+(enteredPart<min.slice(0,enteredPart.length)?min.slice(enteredPart.length):enteredPart>max.slice(0,enteredPart.length)?max.slice(enteredPart.length):correctedValue.toString().slice(enteredPart.length))}return correctedValue}function setValue(dateObj,value,opts){dateObj[targetProp]=extendProperty(value);dateObj["raw"+targetProp]=value;if(dateOperation!==undefined)dateOperation.call(dateObj.date,targetProp=="month"?parseInt(dateObj[targetProp])-1:dateObj[targetProp])}if(typeof mask==="string"){while(match=getTokenizer(opts).exec(format)){var value=mask.slice(0,match[0].length);if(formatCode.hasOwnProperty(match[0])){targetValidator=formatCode[match[0]][0];targetProp=formatCode[match[0]][2];dateOperation=formatCode[match[0]][1];setValue(dateObj,value,opts)}mask=mask.slice(value.length)}return dateObj}else if(mask&&(typeof mask==="undefined"?"undefined":_typeof(mask))==="object"&&mask.hasOwnProperty("date")){return mask}return undefined}Inputmask.extendAliases({datetime:{mask:function mask(opts){formatCode.S=opts.i18n.ordinalSuffix.join("|");opts.inputFormat=formatAlias[opts.inputFormat]||opts.inputFormat;opts.displayFormat=formatAlias[opts.displayFormat]||opts.displayFormat||opts.inputFormat;opts.outputFormat=formatAlias[opts.outputFormat]||opts.outputFormat||opts.inputFormat;opts.placeholder=opts.placeholder!==""?opts.placeholder:opts.inputFormat.replace(/[\[\]]/,"");opts.regex=parse(opts.inputFormat,undefined,opts);return null},placeholder:"",inputFormat:"isoDateTime",displayFormat:undefined,outputFormat:undefined,min:null,max:null,i18n:{dayNames:["Mon","Tue","Wed","Thu","Fri","Sat","Sun","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],ordinalSuffix:["st","nd","rd","th"]},postValidation:function postValidation(buffer,pos,currentResult,opts){opts.min=analyseMask(opts.min,opts.inputFormat,opts);opts.max=analyseMask(opts.max,opts.inputFormat,opts);var result=currentResult,dateParts=analyseMask(buffer.join(""),opts.inputFormat,opts);if(result&&dateParts.date.getTime()===dateParts.date.getTime()){result=isValidDate(dateParts,result);result=result&&isDateInRange(dateParts,opts)}if(pos&&result&&currentResult.pos!==pos){return{buffer:parse(opts.inputFormat,dateParts,opts),refreshFromBuffer:{start:pos,end:currentResult.pos}}}return result},onKeyDown:function onKeyDown(e,buffer,caretPos,opts){var input=this;if(e.ctrlKey&&e.keyCode===Inputmask.keyCode.RIGHT){var today=new Date,match,date="";while(match=getTokenizer(opts).exec(opts.inputFormat)){if(match[0].charAt(0)==="d"){date+=pad(today.getDate(),match[0].length)}else if(match[0].charAt(0)==="m"){date+=pad(today.getMonth()+1,match[0].length)}else if(match[0]==="yyyy"){date+=today.getFullYear().toString()}else if(match[0].charAt(0)==="y"){date+=pad(today.getYear(),match[0].length)}}input.inputmask._valueSet(date);$(input).trigger("setvalue")}},onUnMask:function onUnMask(maskedValue,unmaskedValue,opts){return parse(opts.outputFormat,analyseMask(maskedValue,opts.inputFormat,opts),opts,true)},casing:function casing(elem,test,pos,validPositions){if(test.nativeDef.indexOf("[ap]")==0)return elem.toLowerCase();if(test.nativeDef.indexOf("[AP]")==0)return elem.toUpperCase();return elem},insertMode:false,shiftPositions:false}});return Inputmask})},function(module,exports,__webpack_require__){"use strict";var __WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};(function(factory){if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__=[__webpack_require__(2)],__WEBPACK_AMD_DEFINE_FACTORY__=factory,__WEBPACK_AMD_DEFINE_RESULT__=typeof __WEBPACK_AMD_DEFINE_FACTORY__==="function"?__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__):__WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))}else{}})(function(Inputmask){var $=Inputmask.dependencyLib;function autoEscape(txt,opts){var escapedTxt="";for(var i=0;i<txt.length;i++){if(Inputmask.prototype.definitions[txt.charAt(i)]||opts.definitions[txt.charAt(i)]||opts.optionalmarker.start===txt.charAt(i)||opts.optionalmarker.end===txt.charAt(i)||opts.quantifiermarker.start===txt.charAt(i)||opts.quantifiermarker.end===txt.charAt(i)||opts.groupmarker.start===txt.charAt(i)||opts.groupmarker.end===txt.charAt(i)||opts.alternatormarker===txt.charAt(i)){escapedTxt+="\\"+txt.charAt(i)}else escapedTxt+=txt.charAt(i)}return escapedTxt}function alignDigits(buffer,digits,opts){if(digits>0){var radixPosition=$.inArray(opts.radixPoint,buffer);if(radixPosition===-1){buffer.push(opts.radixPoint);radixPosition=buffer.length-1}for(var i=1;i<=digits;i++){buffer[radixPosition+i]=buffer[radixPosition+i]||"0"}}return buffer}Inputmask.extendAliases({numeric:{mask:function mask(opts){if(opts.repeat!==0&&isNaN(opts.integerDigits)){opts.integerDigits=opts.repeat}opts.repeat=0;if(opts.groupSeparator===opts.radixPoint&&opts.digits&&opts.digits!=="0"){if(opts.radixPoint==="."){opts.groupSeparator=","}else if(opts.radixPoint===","){opts.groupSeparator="."}else opts.groupSeparator=""}if(opts.groupSeparator===" "){opts.skipOptionalPartCharacter=undefined}opts.autoGroup=opts.autoGroup&&opts.groupSeparator!=="";if(opts.autoGroup){if(typeof opts.groupSize=="string"&&isFinite(opts.groupSize))opts.groupSize=parseInt(opts.groupSize);if(isFinite(opts.integerDigits)){var seps=Math.floor(opts.integerDigits/opts.groupSize);var mod=opts.integerDigits%opts.groupSize;opts.integerDigits=parseInt(opts.integerDigits)+(mod===0?seps-1:seps);if(opts.integerDigits<1){opts.integerDigits="*"}}}if(opts.placeholder.length>1){opts.placeholder=opts.placeholder.charAt(0)}if(opts.positionCaretOnClick==="radixFocus"&&opts.placeholder===""&&opts.integerOptional===false){opts.positionCaretOnClick="lvp"}opts.definitions[";"]=opts.definitions["~"];opts.definitions[";"].definitionSymbol="~";if(opts.numericInput===true){opts.positionCaretOnClick=opts.positionCaretOnClick==="radixFocus"?"lvp":opts.positionCaretOnClick;opts.digitsOptional=false;if(isNaN(opts.digits))opts.digits=2;opts.decimalProtect=false}var mask="[+]";mask+=autoEscape(opts.prefix,opts);if(opts.integerOptional===true){mask+="~{1,"+opts.integerDigits+"}"}else mask+="~{"+opts.integerDigits+"}";if(opts.digits!==undefined){var radixDef=opts.decimalProtect?":":opts.radixPoint;var dq=opts.digits.toString().split(",");if(isFinite(dq[0])&&dq[1]&&isFinite(dq[1])){mask+=radixDef+";{"+opts.digits+"}"}else if(isNaN(opts.digits)||parseInt(opts.digits)>0){if(opts.digitsOptional){mask+="["+radixDef+";{1,"+opts.digits+"}]"}else mask+=radixDef+";{"+opts.digits+"}"}}mask+=autoEscape(opts.suffix,opts);mask+="[-]";opts.greedy=false;return mask},placeholder:"",greedy:false,digits:"*",digitsOptional:true,enforceDigitsOnBlur:false,radixPoint:".",positionCaretOnClick:"radixFocus",groupSize:3,groupSeparator:"",autoGroup:false,allowMinus:true,negationSymbol:{front:"-",back:""},integerDigits:"+",integerOptional:true,prefix:"",suffix:"",rightAlign:true,decimalProtect:true,min:null,max:null,step:1,insertMode:true,autoUnmask:false,unmaskAsNumber:false,inputType:"text",inputmode:"numeric",preValidation:function preValidation(buffer,pos,c,isSelection,opts,maskset){if(c==="-"||c===opts.negationSymbol.front){if(opts.allowMinus!==true)return false;opts.isNegative=opts.isNegative===undefined?true:!opts.isNegative;if(buffer.join("")==="")return true;return{caret:maskset.validPositions[pos]?pos:undefined,dopost:true}}if(isSelection===false&&c===opts.radixPoint&&opts.digits!==undefined&&(isNaN(opts.digits)||parseInt(opts.digits)>0)){var radixPos=$.inArray(opts.radixPoint,buffer);if(radixPos!==-1&&maskset.validPositions[radixPos]!==undefined){if(opts.numericInput===true){return pos===radixPos}return{caret:radixPos+1}}}return true},postValidation:function postValidation(buffer,pos,currentResult,opts){function buildPostMask(buffer,opts){var postMask="";postMask+="("+opts.groupSeparator+"*{"+opts.groupSize+"}){*}";if(opts.radixPoint!==""){var radixSplit=buffer.join("").split(opts.radixPoint);if(radixSplit[1]){postMask+=opts.radixPoint+"*{"+radixSplit[1].match(/^\d*\??\d*/)[0].length+"}"}}return postMask}var suffix=opts.suffix.split(""),prefix=opts.prefix.split("");if(currentResult.pos===undefined&&currentResult.caret!==undefined&&currentResult.dopost!==true)return currentResult;var caretPos=currentResult.caret!==undefined?currentResult.caret:currentResult.pos;var maskedValue=buffer.slice();if(opts.numericInput){caretPos=maskedValue.length-caretPos-1;maskedValue=maskedValue.reverse()}var charAtPos=maskedValue[caretPos];if(charAtPos===opts.groupSeparator){caretPos+=1;charAtPos=maskedValue[caretPos]}if(caretPos===maskedValue.length-opts.suffix.length-1&&charAtPos===opts.radixPoint)return currentResult;if(charAtPos!==undefined){if(charAtPos!==opts.radixPoint&&charAtPos!==opts.negationSymbol.front&&charAtPos!==opts.negationSymbol.back){maskedValue[caretPos]="?";if(opts.prefix.length>0&&caretPos>=(opts.isNegative===false?1:0)&&caretPos<opts.prefix.length-1+(opts.isNegative===false?1:0)){prefix[caretPos-(opts.isNegative===false?1:0)]="?"}else if(opts.suffix.length>0&&caretPos>=maskedValue.length-opts.suffix.length-(opts.isNegative===false?1:0)){suffix[caretPos-(maskedValue.length-opts.suffix.length-(opts.isNegative===false?1:0))]="?"}}}prefix=prefix.join("");suffix=suffix.join("");var processValue=maskedValue.join("").replace(prefix,"");processValue=processValue.replace(suffix,"");processValue=processValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator),"g"),"");processValue=processValue.replace(new RegExp("[-"+Inputmask.escapeRegex(opts.negationSymbol.front)+"]","g"),"");processValue=processValue.replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back)+"$"),"");if(isNaN(opts.placeholder)){processValue=processValue.replace(new RegExp(Inputmask.escapeRegex(opts.placeholder),"g"),"")}if(processValue.length>1&&processValue.indexOf(opts.radixPoint)!==1){if(charAtPos==="0"){processValue=processValue.replace(/^\?/g,"")}processValue=processValue.replace(/^0/g,"")}if(processValue.charAt(0)===opts.radixPoint&&opts.radixPoint!==""&&opts.numericInput!==true){processValue="0"+processValue}if(processValue!==""){processValue=processValue.split("");if((!opts.digitsOptional||opts.enforceDigitsOnBlur&&currentResult.event==="blur")&&isFinite(opts.digits)){var radixPosition=$.inArray(opts.radixPoint,processValue);var rpb=$.inArray(opts.radixPoint,maskedValue);if(radixPosition===-1){processValue.push(opts.radixPoint);radixPosition=processValue.length-1}for(var i=1;i<=opts.digits;i++){if((!opts.digitsOptional||opts.enforceDigitsOnBlur&&currentResult.event==="blur")&&(processValue[radixPosition+i]===undefined||processValue[radixPosition+i]===opts.placeholder.charAt(0))){processValue[radixPosition+i]=currentResult.placeholder||opts.placeholder.charAt(0)}else if(rpb!==-1&&maskedValue[rpb+i]!==undefined){processValue[radixPosition+i]=processValue[radixPosition+i]||maskedValue[rpb+i]}}}if(opts.autoGroup===true&&opts.groupSeparator!==""&&(charAtPos!==opts.radixPoint||currentResult.pos!==undefined||currentResult.dopost)){var addRadix=processValue[processValue.length-1]===opts.radixPoint&&currentResult.c===opts.radixPoint;processValue=Inputmask(buildPostMask(processValue,opts),{numericInput:true,jitMasking:true,definitions:{"*":{validator:"[0-9?]",cardinality:1}}}).format(processValue.join(""));if(addRadix)processValue+=opts.radixPoint;if(processValue.charAt(0)===opts.groupSeparator){processValue.substr(1)}}else processValue=processValue.join("")}if(opts.isNegative&&currentResult.event==="blur"){opts.isNegative=processValue!=="0"}processValue=prefix+processValue;processValue+=suffix;if(opts.isNegative){processValue=opts.negationSymbol.front+processValue;processValue+=opts.negationSymbol.back}processValue=processValue.split("");if(charAtPos!==undefined){if(charAtPos!==opts.radixPoint&&charAtPos!==opts.negationSymbol.front&&charAtPos!==opts.negationSymbol.back){caretPos=$.inArray("?",processValue);if(caretPos>-1){processValue[caretPos]=charAtPos}else caretPos=currentResult.caret||0}else if(charAtPos===opts.radixPoint||charAtPos===opts.negationSymbol.front||charAtPos===opts.negationSymbol.back){var newCaretPos=$.inArray(charAtPos,processValue);if(newCaretPos!==-1)caretPos=newCaretPos}}if(opts.numericInput){caretPos=processValue.length-caretPos-1;processValue=processValue.reverse()}var rslt={caret:(charAtPos===undefined||currentResult.pos!==undefined)&&caretPos!==undefined?caretPos+(opts.numericInput?-1:1):caretPos,buffer:processValue,refreshFromBuffer:currentResult.dopost||buffer.join("")!==processValue.join("")};return rslt.refreshFromBuffer?rslt:currentResult},onBeforeWrite:function onBeforeWrite(e,buffer,caretPos,opts){function parseMinMaxOptions(opts){if(opts.parseMinMaxOptions===undefined){if(opts.min!==null){opts.min=opts.min.toString().replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator),"g"),"");if(opts.radixPoint===",")opts.min=opts.min.replace(opts.radixPoint,".");opts.min=isFinite(opts.min)?parseFloat(opts.min):NaN;if(isNaN(opts.min))opts.min=Number.MIN_VALUE}if(opts.max!==null){opts.max=opts.max.toString().replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator),"g"),"");if(opts.radixPoint===",")opts.max=opts.max.replace(opts.radixPoint,".");opts.max=isFinite(opts.max)?parseFloat(opts.max):NaN;if(isNaN(opts.max))opts.max=Number.MAX_VALUE}opts.parseMinMaxOptions="done"}}if(e){switch(e.type){case"keydown":return opts.postValidation(buffer,caretPos,{caret:caretPos,dopost:true},opts);case"blur":case"checkval":var unmasked;parseMinMaxOptions(opts);if(opts.min!==null||opts.max!==null){unmasked=opts.onUnMask(buffer.join(""),undefined,$.extend({},opts,{unmaskAsNumber:true}));if(opts.min!==null&&unmasked<opts.min){opts.isNegative=opts.min<0;return opts.postValidation(opts.min.toString().replace(".",opts.radixPoint).split(""),caretPos,{caret:caretPos,dopost:true,placeholder:"0"},opts)}else if(opts.max!==null&&unmasked>opts.max){opts.isNegative=opts.max<0;return opts.postValidation(opts.max.toString().replace(".",opts.radixPoint).split(""),caretPos,{caret:caretPos,dopost:true,placeholder:"0"},opts)}}return opts.postValidation(buffer,caretPos,{caret:caretPos,placeholder:"0",event:"blur"},opts);case"_checkval":return{caret:caretPos};default:break}}},regex:{integerPart:function integerPart(opts,emptyCheck){return emptyCheck?new RegExp("["+Inputmask.escapeRegex(opts.negationSymbol.front)+"+]?"):new RegExp("["+Inputmask.escapeRegex(opts.negationSymbol.front)+"+]?\\d+")},integerNPart:function integerNPart(opts){return new RegExp("[\\d"+Inputmask.escapeRegex(opts.groupSeparator)+Inputmask.escapeRegex(opts.placeholder.charAt(0))+"]+")}},definitions:{"~":{validator:function validator(chrs,maskset,pos,strict,opts,isSelection){var isValid,l;if(chrs==="k"||chrs==="m"){isValid={insert:[],c:0};for(var i=0,l=chrs==="k"?2:5;i<l;i++){isValid.insert.push({pos:pos+i,c:0})}isValid.pos=pos+l;return isValid}isValid=strict?new RegExp("[0-9"+Inputmask.escapeRegex(opts.groupSeparator)+"]").test(chrs):new RegExp("[0-9]").test(chrs);if(isValid===true){if(opts.numericInput!==true&&maskset.validPositions[pos]!==undefined&&maskset.validPositions[pos].match.def==="~"&&!isSelection){var processValue=maskset.buffer.join("");processValue=processValue.replace(new RegExp("[-"+Inputmask.escapeRegex(opts.negationSymbol.front)+"]","g"),"");processValue=processValue.replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back)+"$"),"");var pvRadixSplit=processValue.split(opts.radixPoint);if(pvRadixSplit.length>1){pvRadixSplit[1]=pvRadixSplit[1].replace(/0/g,opts.placeholder.charAt(0))}if(pvRadixSplit[0]==="0"){pvRadixSplit[0]=pvRadixSplit[0].replace(/0/g,opts.placeholder.charAt(0))}processValue=pvRadixSplit[0]+opts.radixPoint+pvRadixSplit[1]||"";var bufferTemplate=maskset._buffer.join("");if(processValue===opts.radixPoint){processValue=bufferTemplate}while(processValue.match(Inputmask.escapeRegex(bufferTemplate)+"$")===null){bufferTemplate=bufferTemplate.slice(1)}processValue=processValue.replace(bufferTemplate,"");processValue=processValue.split("");if(processValue[pos]===undefined){isValid={pos:pos,remove:pos}}else{isValid={pos:pos}}}}else if(!strict&&chrs===opts.radixPoint&&maskset.validPositions[pos-1]===undefined){isValid={insert:{pos:pos,c:0},pos:pos+1}}return isValid},cardinality:1},"+":{validator:function validator(chrs,maskset,pos,strict,opts){return opts.allowMinus&&(chrs==="-"||chrs===opts.negationSymbol.front)},cardinality:1,placeholder:""},"-":{validator:function validator(chrs,maskset,pos,strict,opts){return opts.allowMinus&&chrs===opts.negationSymbol.back},cardinality:1,placeholder:""},":":{validator:function validator(chrs,maskset,pos,strict,opts){var radix="["+Inputmask.escapeRegex(opts.radixPoint)+"]";var isValid=new RegExp(radix).test(chrs);if(isValid&&maskset.validPositions[pos]&&maskset.validPositions[pos].match.placeholder===opts.radixPoint){isValid={caret:pos+1}}return isValid},cardinality:1,placeholder:function placeholder(opts){return opts.radixPoint}}},onUnMask:function onUnMask(maskedValue,unmaskedValue,opts){if(unmaskedValue===""&&opts.nullable===true){return unmaskedValue}var processValue=maskedValue.replace(opts.prefix,"");processValue=processValue.replace(opts.suffix,"");processValue=processValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator),"g"),"");if(opts.placeholder.charAt(0)!==""){processValue=processValue.replace(new RegExp(opts.placeholder.charAt(0),"g"),"0")}if(opts.unmaskAsNumber){if(opts.radixPoint!==""&&processValue.indexOf(opts.radixPoint)!==-1)processValue=processValue.replace(Inputmask.escapeRegex.call(this,opts.radixPoint),".");processValue=processValue.replace(new RegExp("^"+Inputmask.escapeRegex(opts.negationSymbol.front)),"-");processValue=processValue.replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back)+"$"),"");return Number(processValue)}return processValue},isComplete:function isComplete(buffer,opts){var maskedValue=(opts.numericInput?buffer.slice().reverse():buffer).join("");maskedValue=maskedValue.replace(new RegExp("^"+Inputmask.escapeRegex(opts.negationSymbol.front)),"-");maskedValue=maskedValue.replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back)+"$"),"");maskedValue=maskedValue.replace(opts.prefix,"");maskedValue=maskedValue.replace(opts.suffix,"");maskedValue=maskedValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator)+"([0-9]{3})","g"),"$1");if(opts.radixPoint===",")maskedValue=maskedValue.replace(Inputmask.escapeRegex(opts.radixPoint),".");return isFinite(maskedValue)},onBeforeMask:function onBeforeMask(initialValue,opts){opts.isNegative=undefined;var radixPoint=opts.radixPoint||",";if((typeof initialValue=="number"||opts.inputType==="number")&&radixPoint!==""){initialValue=initialValue.toString().replace(".",radixPoint)}var valueParts=initialValue.split(radixPoint),integerPart=valueParts[0].replace(/[^\-0-9]/g,""),decimalPart=valueParts.length>1?valueParts[1].replace(/[^0-9]/g,""):"";initialValue=integerPart+(decimalPart!==""?radixPoint+decimalPart:decimalPart);var digits=0;if(radixPoint!==""){digits=decimalPart.length;if(decimalPart!==""){var digitsFactor=Math.pow(10,digits||1);if(isFinite(opts.digits)){digits=parseInt(opts.digits);digitsFactor=Math.pow(10,digits)}initialValue=initialValue.replace(Inputmask.escapeRegex(radixPoint),".");if(isFinite(initialValue))initialValue=Math.round(parseFloat(initialValue)*digitsFactor)/digitsFactor;initialValue=initialValue.toString().replace(".",radixPoint)}}if(opts.digits===0&&initialValue.indexOf(Inputmask.escapeRegex(radixPoint))!==-1){initialValue=initialValue.substring(0,initialValue.indexOf(Inputmask.escapeRegex(radixPoint)))}return alignDigits(initialValue.toString().split(""),digits,opts).join("")},onKeyDown:function onKeyDown(e,buffer,caretPos,opts){var $input=$(this);if(e.ctrlKey){switch(e.keyCode){case Inputmask.keyCode.UP:$input.val(parseFloat(this.inputmask.unmaskedvalue())+parseInt(opts.step));$input.trigger("setvalue");break;case Inputmask.keyCode.DOWN:$input.val(parseFloat(this.inputmask.unmaskedvalue())-parseInt(opts.step));$input.trigger("setvalue");break}}}},currency:{prefix:"$ ",groupSeparator:",",alias:"numeric",placeholder:"0",autoGroup:true,digits:2,digitsOptional:false,clearMaskOnLostFocus:false},decimal:{alias:"numeric"},integer:{alias:"numeric",digits:0,radixPoint:""},percentage:{alias:"numeric",digits:2,digitsOptional:true,radixPoint:".",placeholder:"0",autoGroup:false,min:0,max:100,suffix:" %",allowMinus:false}});return Inputmask})},function(module,exports,__webpack_require__){"use strict";var __WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};(function(factory){if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__=[__webpack_require__(4),__webpack_require__(2)],__WEBPACK_AMD_DEFINE_FACTORY__=factory,__WEBPACK_AMD_DEFINE_RESULT__=typeof __WEBPACK_AMD_DEFINE_FACTORY__==="function"?__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__):__WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))}else{}})(function($,Inputmask){if($.fn.inputmask===undefined){$.fn.inputmask=function(fn,options){var nptmask,input=this[0];if(options===undefined)options={};if(typeof fn==="string"){switch(fn){case"unmaskedvalue":return input&&input.inputmask?input.inputmask.unmaskedvalue():$(input).val();case"remove":return this.each(function(){if(this.inputmask)this.inputmask.remove()});case"getemptymask":return input&&input.inputmask?input.inputmask.getemptymask():"";case"hasMaskedValue":return input&&input.inputmask?input.inputmask.hasMaskedValue():false;case"isComplete":return input&&input.inputmask?input.inputmask.isComplete():true;case"getmetadata":return input&&input.inputmask?input.inputmask.getmetadata():undefined;case"setvalue":Inputmask.setValue(input,options);break;case"option":if(typeof options==="string"){if(input&&input.inputmask!==undefined){return input.inputmask.option(options)}}else{return this.each(function(){if(this.inputmask!==undefined){return this.inputmask.option(options)}})}break;default:options.alias=fn;nptmask=new Inputmask(options);return this.each(function(){nptmask.mask(this)})}}else if(Array.isArray(fn)){options.alias=fn;nptmask=new Inputmask(options);return this.each(function(){nptmask.mask(this)})}else if((typeof fn==="undefined"?"undefined":_typeof(fn))=="object"){nptmask=new Inputmask(fn);if(fn.mask===undefined&&fn.alias===undefined){return this.each(function(){if(this.inputmask!==undefined){return this.inputmask.option(fn)}else nptmask.mask(this)})}else{return this.each(function(){nptmask.mask(this)})}}else if(fn===undefined){return this.each(function(){nptmask=new Inputmask(options);nptmask.mask(this)})}}}return $.fn.inputmask})}]);
/*
 Input Mask plugin binding
 http://github.com/RobinHerbots/jquery.inputmask
 Copyright (c) Robin Herbots
 Licensed under the MIT license
 */
(function (factory) {
	factory(jQuery, window.Inputmask, window);
}
(function ($, Inputmask, window) {
	$(window.document).ajaxComplete(function (event, xmlHttpRequest, ajaxOptions) {
		if ($.inArray("html", ajaxOptions.dataTypes) !== -1) {
			$(".inputmask, [data-inputmask], [data-inputmask-mask], [data-inputmask-alias], [data-inputmask-regex]").each(function (ndx, lmnt) {
				if (lmnt.inputmask === undefined) {
					Inputmask().mask(lmnt);
				}
			});
		}
	}).ready(function () {
		$(".inputmask, [data-inputmask], [data-inputmask-mask], [data-inputmask-alias],[data-inputmask-regex]").each(function (ndx, lmnt) {
			if (lmnt.inputmask === undefined) {
				Inputmask().mask(lmnt);
			}
		});
	});
}));

/*!
 * bsCustomFileInput v1.3.4 (https://github.com/Johann-S/bs-custom-file-input)
 * Copyright 2018 - 2020 Johann-S <johann.servoire@gmail.com>
 * Licensed under MIT (https://github.com/Johann-S/bs-custom-file-input/blob/master/LICENSE)
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.bsCustomFileInput = factory());
}(this, (function () { 'use strict';

  var Selector = {
    CUSTOMFILE: '.custom-file input[type="file"]',
    CUSTOMFILELABEL: '.custom-file-label',
    FORM: 'form',
    INPUT: 'input'
  };

  var textNodeType = 3;

  var getDefaultText = function getDefaultText(input) {
    var defaultText = '';
    var label = input.parentNode.querySelector(Selector.CUSTOMFILELABEL);

    if (label) {
      defaultText = label.textContent;
    }

    return defaultText;
  };

  var findFirstChildNode = function findFirstChildNode(element) {
    if (element.childNodes.length > 0) {
      var childNodes = [].slice.call(element.childNodes);

      for (var i = 0; i < childNodes.length; i++) {
        var node = childNodes[i];

        if (node.nodeType !== textNodeType) {
          return node;
        }
      }
    }

    return element;
  };

  var restoreDefaultText = function restoreDefaultText(input) {
    var defaultText = input.bsCustomFileInput.defaultText;
    var label = input.parentNode.querySelector(Selector.CUSTOMFILELABEL);

    if (label) {
      var element = findFirstChildNode(label);
      element.textContent = defaultText;
    }
  };

  var fileApi = !!window.File;
  var FAKE_PATH = 'fakepath';
  var FAKE_PATH_SEPARATOR = '\\';

  var getSelectedFiles = function getSelectedFiles(input) {
    if (input.hasAttribute('multiple') && fileApi) {
      return [].slice.call(input.files).map(function (file) {
        return file.name;
      }).join(', ');
    }

    if (input.value.indexOf(FAKE_PATH) !== -1) {
      var splittedValue = input.value.split(FAKE_PATH_SEPARATOR);
      return splittedValue[splittedValue.length - 1];
    }

    return input.value;
  };

  function handleInputChange() {
    var label = this.parentNode.querySelector(Selector.CUSTOMFILELABEL);

    if (label) {
      var element = findFirstChildNode(label);
      var inputValue = getSelectedFiles(this);

      if (inputValue.length) {
        element.textContent = inputValue;
      } else {
        restoreDefaultText(this);
      }
    }
  }

  function handleFormReset() {
    var customFileList = [].slice.call(this.querySelectorAll(Selector.INPUT)).filter(function (input) {
      return !!input.bsCustomFileInput;
    });

    for (var i = 0, len = customFileList.length; i < len; i++) {
      restoreDefaultText(customFileList[i]);
    }
  }

  var customProperty = 'bsCustomFileInput';
  var Event = {
    FORMRESET: 'reset',
    INPUTCHANGE: 'change'
  };
  var bsCustomFileInput = {
    init: function init(inputSelector, formSelector) {
      if (inputSelector === void 0) {
        inputSelector = Selector.CUSTOMFILE;
      }

      if (formSelector === void 0) {
        formSelector = Selector.FORM;
      }

      var customFileInputList = [].slice.call(document.querySelectorAll(inputSelector));
      var formList = [].slice.call(document.querySelectorAll(formSelector));

      for (var i = 0, len = customFileInputList.length; i < len; i++) {
        var input = customFileInputList[i];
        Object.defineProperty(input, customProperty, {
          value: {
            defaultText: getDefaultText(input)
          },
          writable: true
        });
        handleInputChange.call(input);
        input.addEventListener(Event.INPUTCHANGE, handleInputChange);
      }

      for (var _i = 0, _len = formList.length; _i < _len; _i++) {
        formList[_i].addEventListener(Event.FORMRESET, handleFormReset);

        Object.defineProperty(formList[_i], customProperty, {
          value: true,
          writable: true
        });
      }
    },
    destroy: function destroy() {
      var formList = [].slice.call(document.querySelectorAll(Selector.FORM)).filter(function (form) {
        return !!form.bsCustomFileInput;
      });
      var customFileInputList = [].slice.call(document.querySelectorAll(Selector.INPUT)).filter(function (input) {
        return !!input.bsCustomFileInput;
      });

      for (var i = 0, len = customFileInputList.length; i < len; i++) {
        var input = customFileInputList[i];
        restoreDefaultText(input);
        input[customProperty] = undefined;
        input.removeEventListener(Event.INPUTCHANGE, handleInputChange);
      }

      for (var _i2 = 0, _len2 = formList.length; _i2 < _len2; _i2++) {
        formList[_i2].removeEventListener(Event.FORMRESET, handleFormReset);

        formList[_i2][customProperty] = undefined;
      }
    }
  };

  return bsCustomFileInput;

})));
//# sourceMappingURL=bs-custom-file-input.js.map
