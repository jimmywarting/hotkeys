(this["webpackJsonphotkeys-js"]=this["webpackJsonphotkeys-js"]||[]).push([[0],{29:function(e,t,n){e.exports={keyboard:"KeyBoard_keyboard__2q2yc"}},3:function(e,t,n){e.exports={version:"styles_version__2esNS",keyCodeInfo:"styles_keyCodeInfo__PjAzv",header:"styles_header__xIIvk",title:"styles_title__2l0LC",lang:"styles_lang__2TgEC",info:"styles_info__2NfVw",github:"styles_github__WH0-j"}},30:function(e,t,n){e.exports={footer:"Footer_footer__3gQpi"}},312:function(e,t,n){},313:function(e,t,n){"use strict";n.r(t);var o=n(0),s=n.n(o),r=n(28),a=n.n(r),c=n(34),i=n(6),l=n(9),y=n.n(l),u=n(29),d=n.n(u),h=[{keycode:27,name:["esc"]},{keycode:112,name:["F1"]},{keycode:113,name:["F2"]},{keycode:114,name:["F3"]},{keycode:115,name:["F4"]},{keycode:116,name:["F5"]},{keycode:117,name:["F6"]},{keycode:118,name:["F7"]},{keycode:119,name:["F8"]},{keycode:120,name:["F9"]},{keycode:121,name:["F10"]},{keycode:122,name:["F11"]},{keycode:123,name:["F12"]},{keycode:-1,name:["\u3007"]},{keycode:192,name:["~","`"]},{keycode:49,name:["!","1"]},{keycode:50,name:["@","2"]},{keycode:51,name:["#","3"]},{keycode:52,name:["$","4"]},{keycode:53,name:["%","5"]},{keycode:54,name:["^","6"]},{keycode:55,name:["&","7"]},{keycode:56,name:["*","8"]},{keycode:57,name:["(","9"]},{keycode:48,name:[")","0"]},{keycode:189,name:["\uff3f","-"]},{keycode:187,name:["\uff0b",": "]},{keycode:8,name:["delete"]},{keycode:9,name:["tab"]},{keycode:81,name:["Q"]},{keycode:87,name:["W"]},{keycode:69,name:["E"]},{keycode:82,name:["R"]},{keycode:84,name:["T"]},{keycode:89,name:["Y"]},{keycode:85,name:["U"]},{keycode:73,name:["I"]},{keycode:79,name:["O"]},{keycode:80,name:["P"]},{keycode:219,name:["{","["]},{keycode:221,name:["}","]"]},{keycode:220,name:["|","\\"]},{keycode:20,name:["","CapsLock"]},{keycode:65,name:["A"]},{keycode:83,name:["S"]},{keycode:68,name:["D"]},{keycode:70,name:["F"]},{keycode:71,name:["G"]},{keycode:72,name:["H"]},{keycode:74,name:["J"]},{keycode:75,name:["K"]},{keycode:76,name:["L"]},{keycode:186,name:[":",";"]},{keycode:222,name:['"',"'"]},{keycode:13,name:["enter","return"]},{keycode:16,name:["\u21e7"]},{keycode:90,name:["Z"]},{keycode:88,name:["X"]},{keycode:67,name:["C"]},{keycode:86,name:["V"]},{keycode:66,name:["B"]},{keycode:78,name:["N"]},{keycode:77,name:["M"]},{keycode:188,name:["<",","]},{keycode:190,name:[">","."]},{keycode:191,name:["?","/"]},{keycode:16,name:["\u21e7"]},{keycode:-1,name:["fn"]},{keycode:17,name:["control"]},{keycode:18,name:["alt","option"]},{keycode:91,name:["command"]},{keycode:32,name:[""]},{keycode:91,name:["command"]},{keycode:18,name:["alt","option"]},{keycode:37,name:["\u25c0"]},{keycode:38,name:["\u25b2"]},{keycode:39,name:["\u25b6"]},{keycode:40,name:["\u25bc"]}];function p(e){var t=e.keyCode,n=e.onMouseDown,o=e.onMouseUp;return s.a.createElement("div",{className:d.a.keyboard},s.a.createElement("ul",null,h.map((function(e,r){var a=e.name.map((function(e,t){return s.a.createElement("span",{key:"".concat(t)},e)}));return s.a.createElement("li",{key:r,onMouseDown:function(){return n(e)},onMouseUp:function(){return o(e)},className:y()({pressed:t.indexOf(e.keycode)>-1}),"data-key":e.keycode},a)}))))}var f=n(30),k=n.n(f);function m(e){var t=e.name,n=e.href,o=e.year,r=e.children;return s.a.createElement("div",{className:k.a.footer},r,s.a.createElement("div",null,"Licensed under MIT. (Yes it\xb4s free and",s.a.createElement("a",{href:"https://github.com/jaywcjlove/hotkeys"}," open-sourced"),")"),s.a.createElement("div",null,"\xa9",s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:n},t),o))}var v=n(31),g=n.n(v),b=n(18),w=n.n(b),j=n(32),E=n.n(j);function S(e){return(S="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function x(e,t){return!t||"object"!==S(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function C(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function K(e){return(K=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}w.a.configure({tabReplace:"  ",classPrefix:""});var P=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(c,e);var t,n,o,r,a=(t=c,function(){var e,n=K(t);if(C()){var o=K(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return x(this,e)});function c(){return O(this,c),a.apply(this,arguments)}return n=c,(o=[{key:"componentDidMount",value:function(){for(var e=this.node.getElementsByTagName("code"),t=0;t<e.length;t+=1)e[t].parentNode&&"PRE"===e[t].parentNode.tagName&&w.a.highlightBlock(e[t])}},{key:"render",value:function(){var e=this,t=this.props.source;return s.a.createElement("div",{ref:function(t){e.node=t}},s.a.createElement(g.a,{className:y()(E.a.markdown,"markdown"),source:t,escapeHtml:!1,allowNode:function(e){return("html"!==e.type||!/<!--([^]+?)-->/.test(e.value))&&e}}))}}])&&_(n.prototype,o),r&&_(n,r),c}(o.Component),T=n(3),I=n.n(T),R="# Hotkeys\n\n\x3c!--dividing--\x3e\n\n[![](https://img.shields.io/github/issues/jaywcjlove/hotkeys.svg)](https://github.com/jaywcjlove/hotkeys/issues) [![](https://img.shields.io/github/forks/jaywcjlove/hotkeys.svg)](https://github.com/jaywcjlove/hotkeys/network) [![](https://img.shields.io/github/stars/jaywcjlove/hotkeys.svg)](https://github.com/jaywcjlove/hotkeys/stargazers) [![](https://img.shields.io/github/release/jaywcjlove/hotkeys.svg)](https://github.com/jaywcjlove/hotkeys/releases) ![](http://jaywcjlove.github.io/sb/status/no-dependencies.svg) [![Build Status](https://www.travis-ci.org/jaywcjlove/hotkeys.svg?branch=master)](https://www.travis-ci.org/jaywcjlove/hotkeys) [![Coverage Status](https://coveralls.io/repos/github/jaywcjlove/hotkeys/badge.svg?branch=master)](https://coveralls.io/github/jaywcjlove/hotkeys?branch=master) [![jaywcjlove/hotkeys](https://jaywcjlove.github.io/sb/lang/chinese.svg)](./README-zh.md) [![jaywcjlove/hotkeys](https://jaywcjlove.github.io/sb/ico/gitee.svg)](https://gitee.com/jaywcjlove/hotkeys)\n\nHotKeys.js is an input capture library with some very special features, it is easy to pick up and use, has a reasonable footprint ([~3kb](https://bundlephobia.com/result?p=hotkeys-js)) (gzipped: 1.73kb), and has no dependencies. It should not interfere with any JavaScript libraries or frameworks. Official document [demo preview](http://jaywcjlove.github.io/hotkeys). [More examples](https://github.com/jaywcjlove/hotkeys/issues?q=label%3ADemo+).\n\n```shell\n\u256d\u2508\u2508\u256e          \u256d\u2508\u2508\u256e  \u256d\u2508\u2508\u256e\n\u2506  \u251c\u2508\u2508..\u2508\u2508\u2508\u2508\u2508.\u2506  \u2514\u2508\u256e\u2506  \u251c\u2508\u2508..\u2508\u2508\u2508\u2508\u2508..\u2508\u2508.\u2508\u2508..\u2508\u2508\u2508\u2508\u2508.\n\u2506     \u2506\u2506  \u25a1  \u2506\u2506   \u2508\u2524\u2506    < \u2506  -__\u2518\u2506  \u2506  \u2506\u2506__ \u2508\u2508\u2524\n\u2570\u2508\u2508\u2534\u2508\u2508\u256f\u2570\u2508\u2508\u2508\u2508\u2508\u256f\u2570\u2508\u2508\u2508\u2508\u256f\u2570\u2508\u2508\u2534\u2508\u2508\u256f\u2570\u2508\u2508\u2508\u2508\u2508\u256f\u2570\u2508\u2508\u2508  \u2506\u2570\u2508\u2508\u2508\u2508\u2508\u256f\n                                  \u2570\u2508\u2508\u2508\u2508\u2508\u256f\n```\n\n## Usage\n\nYou will need `Node.js` installed on your system.\n\n```shell\n$ npm install hotkeys-js --save\n```\n\n```js\nimport hotkeys from 'hotkeys-js';\n\nhotkeys('f5', function(event, handler){\n  // Prevent the default refresh event under WINDOWS system\n  event.preventDefault() \n  alert('you pressed F5!') \n});\n```\n\nOr manually download and link **hotkeys.js** in your HTML, It can also be downloaded via [UNPKG](https://unpkg.com/hotkeys-js/dist/):\n\nCDN: [UNPKG](https://unpkg.com/hotkeys-js/dist/) | [jsDelivr](https://cdn.jsdelivr.net/npm/hotkeys-js@3.7.3/) | [Githack](https://raw.githack.com/jaywcjlove/hotkeys/master/dist/hotkeys.min.js) | [Statically](https://cdn.statically.io/gh/jaywcjlove/hotkeys/master/dist/hotkeys.min.js) | [bundle.run](https://bundle.run/hotkeys-js@3.7.3)\n\n```html\n<script src=\"https://unpkg.com/hotkeys-js/dist/hotkeys.min.js\"><\/script>\n<script type=\"text/javascript\">\nhotkeys('ctrl+a,ctrl+b,r,f', function (event, handler){\n  switch (handler.key) {\n    case 'ctrl+a': alert('you pressed ctrl+a!');\n      break;\n    case 'ctrl+b': alert('you pressed ctrl+b!');\n      break;\n    case 'r': alert('you pressed r!');\n      break;\n    case 'f': alert('you pressed f!');\n      break;\n    default: alert(event);\n  }\n});\n<\/script>\n```\n\n### Used in React\n\n[react-hotkeys](https://github.com/jaywcjlove/react-hotkeys) is the React component that listen to keydown and keyup keyboard events, defining and dispatching keyboard shortcuts. Detailed use method please see its documentation [react-hotkeys](https://github.com/jaywcjlove/react-hotkeys).\n\n[react-hotkeys-hook](https://github.com/JohannesKlauss/react-hotkeys-hook) - React hook for using keyboard shortcuts in components. Make sure that you have at least version 16.8 of react and react-dom installed, or otherwise hooks won't work for you.\n\n## Browser Support\n\nHotkeys.js has been tested and should work in.\n\n```shell\nInternet Explorer 6+\nSafari\nFirefox\nChrome\n```\n\n## Supported Keys\n\nHotKeys understands the following modifiers: `\u21e7`, `shift`, `option`, `\u2325`, `alt`, `ctrl`, `control`, `command`, and `\u2318`.\n\nThe following special keys can be used for shortcuts: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete and f1 through f19.\n\n`\u2318` Command(\uf8ff)  \n`\u2303` Control  \n`\u2325` Option(alt)  \n`\u21e7` Shift  \n`\u21ea` Caps Lock(Capital)  \n~~`fn` Does not support fn~~  \n`\u21a9\ufe0e` return/Enter space  \n\n## Defining Shortcuts\n\nOne global method is exposed, key which defines shortcuts when called directly.\n\n```\nhotkeys([keys:<String>], [option:[string|object|function]], [callback:<function>])\n```\n\n\n```js\nhotkeys('f5', function(event, handler) {\n  // Prevent the default refresh event under WINDOWS system\n  event.preventDefault();\n  alert('you pressed F5!');\n});\n\n// Returning false stops the event and prevents default browser events\n// Mac OS system defines `command + r` as a refresh shortcut\nhotkeys('ctrl+r, command+r', function() {\n  alert('stopped reload!');\n  return false;\n});\n\n// Single key\nhotkeys('a', function(event,handler){\n  //event.srcElement: input \n  //event.target: input\n  if(event.target === \"input\"){\n      alert('you pressed a!')\n  }\n  alert('you pressed a!') \n});\n\n// Key Combination\nhotkeys('ctrl+a,ctrl+b,r,f', function (event, handler){\n  switch (handler.key) {\n    case 'ctrl+a': alert('you pressed ctrl+a!');\n      break;\n    case 'ctrl+b': alert('you pressed ctrl+b!');\n      break;\n    case 'r': alert('you pressed r!');\n      break;\n    case 'f': alert('you pressed f!');\n      break;\n    default: alert(event);\n  }\n});\n\nhotkeys('ctrl+a+s', function() {\n    alert('you pressed ctrl+a+s!');\n});\n\n// Using a scope\nhotkeys('*','wcj', function(event){\n  console.log('do something', event);\n});\n```\n\n#### option \n\n- `scope<String>`\n- `element<HTMLElement>`\n- `keyup<Boolean>`\n- `keydown<Boolean>`\n- `splitKey<string>` (default is `+`)\n\n```js\nhotkeys('o, enter', {\n  scope: 'wcj',\n  element: document.getElementById('wrapper'),\n}, function(){ \n  console.log('do something else');\n});\n\nhotkeys('ctrl-+', { splitKey: '-' }, function(e) {\n  console.log('you pressed ctrl and +');\n});\n\nhotkeys('+', { splitKey: '-' }, function(e){\n  console.log('you pressed +');\n})\n```\n\n## API REFERENCE\n\nAsterisk \"*\"\n\nModifier key judgments\n\n```js\nhotkeys('*', function() {\n  if (hotkeys.shift) {\n    console.log('shift is pressed!');\n  }\n\n  if (hotkeys.ctrl) {\n    console.log('ctrl is pressed!');\n  }\n\n  if (hotkeys.alt) {\n    console.log('alt is pressed!');\n  }\n\n  if (hotkeys.option) {\n    console.log('option is pressed!');\n  }\n\n  if (hotkeys.control) {\n    console.log('control is pressed!');\n  }\n\n  if (hotkeys.cmd) {\n    console.log('cmd is pressed!');\n  }\n\n  if (hotkeys.command) {\n    console.log('command is pressed!');\n  }\n});\n```\n\n### setScope\n\nUse the `hotkeys.setScope` method to set scope. There can only be one active scope besides 'all'.  By default 'all' is always active.\n\n```js\n// Define shortcuts with a scope\nhotkeys('ctrl+o, ctrl+alt+enter', 'issues', function(){\n  console.log('do something');\n});\nhotkeys('o, enter', 'files', function(){ \n  console.log('do something else');\n});\n\n// Set the scope (only 'all' and 'issues' shortcuts will be honored)\nhotkeys.setScope('issues'); // default scope is 'all'\n```\n\n### getScope\n\nUse the `hotkeys.getScope` method to get scope.\n\n```js\nhotkeys.getScope();\n```\n\n### deleteScope\n\nUse the `hotkeys.deleteScope` method to delete a scope. This will also remove all associated hotkeys with it.\n\n```js\nhotkeys.deleteScope('issues');\n```\n\n### unbind\n\nSimilar to defining shortcuts, they can be unbound using `hotkeys.unbind`.\n\n```js\n// unbind 'a' handler\nhotkeys.unbind('a');\n\n// Unbind a hotkeys only for a single scope\n// If no scope is specified it defaults to the current scope (hotkeys.getScope())\nhotkeys.unbind('o, enter', 'issues');\nhotkeys.unbind('o, enter', 'files');\n```\n\nUnbind events through functions.\n\n```js\nfunction example() {\n  hotkeys('a', example);\n  hotkeys.unbind('a', example);\n\n  hotkeys('a', 'issues', example);\n  hotkeys.unbind('a', 'issues', example);\n}\n```\n\n### isPressed\n\nFor example, `hotkeys.isPressed(77)` is true if the `M` key is currently pressed.\n\n```js\nhotkeys('a', function() {\n  console.log(hotkeys.isPressed('a')); //=> true\n  console.log(hotkeys.isPressed('A')); //=> true\n  console.log(hotkeys.isPressed(65)); //=> true\n});\n```\n\n## keyup\n\n**key down** and **key up** both perform callback events.\n\n```js\nhotkeys('ctrl+a,alt+a+s', {keyup: true}, function(event, handler) {\n  if (event.type === 'keydown') {\n    console.log('keydown:', event.type, handler, handler.key);\n  }\n\n  if (event.type === 'keyup') {\n    console.log('keyup:', event.type, handler, handler.key);\n  }\n});\n```\n\n### getPressedKeyCodes\n\nReturns an array of key codes currently pressed.\n\n```js\nhotkeys('command+ctrl+shift+a,f', function(){\n  console.log(hotkeys.getPressedKeyCodes()); //=> [17, 65] or [70]\n})\n```\n\n### filter\n\nBy default hotkeys are not enabled for `INPUT` `SELECT` `TEXTAREA` elements. `Hotkeys.filter` to return to the `true` shortcut keys set to play a role, `false` shortcut keys set up failure.\n\n```js\nhotkeys.filter = function(event){\n  return true;\n}\n//How to add the filter to edit labels. <div contentEditable=\"true\"></div>\n//\"contentEditable\" Older browsers that do not support drops\nhotkeys.filter = function(event) {\n  var tagName = (event.target || event.srcElement).tagName;\n  return !(tagName.isContentEditable || tagName == 'INPUT' || tagName == 'SELECT' || tagName == 'TEXTAREA');\n}\n\nhotkeys.filter = function(event){\n  var tagName = (event.target || event.srcElement).tagName;\n  hotkeys.setScope(/^(INPUT|TEXTAREA|SELECT)$/.test(tagName) ? 'input' : 'other');\n  return true;\n}\n```\n\n### noConflict\n\nRelinquish HotKeys\u2019s control of the `hotkeys` variable.\n\n```js\nvar k = hotkeys.noConflict();\nk('a', function() {\n  console.log(\"do something\")\n});\n\nhotkeys()\n// --\x3eUncaught TypeError: hotkeys is not a function(anonymous function) \n// @ VM2170:2InjectedScript._evaluateOn \n// @ VM2165:883InjectedScript._evaluateAndWrap \n// @ VM2165:816InjectedScript.evaluate @ VM2165:682\n```\n \n## Development\n\nTo develop, Install dependencies, Get the code:\n\n```shell\n$ git https://github.com/jaywcjlove/hotkeys.git\n$ cd hotkeys     # Into the directory\n$ npm install    # or  yarn install\n```\n\nTo develop, run the self-reloading build:\n\n```shell\n$ npm run watch\n```\n\nRun Document Website Environment.\n\n```shell\n$ npm run doc:dev\n```\n\nTo contribute, please fork Hotkeys.js, add your patch and tests for it (in the `test/` folder) and submit a pull request.\n\n```shell\n$ npm run test\n$ npm run test:watch # Development model\n```\n\n## License\n\n[MIT \xa9 Kenny Wong](./LICENSE)\n",D="undefined"!==typeof navigator&&navigator.userAgent.toLowerCase().indexOf("firefox")>0;function U(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent&&e.attachEvent("on".concat(t),(function(){n(window.event)}))}function M(e,t){for(var n=t.slice(0,t.length-1),o=0;o<n.length;o++)n[o]=e[n[o].toLowerCase()];return n}function L(e){"string"!==typeof e&&(e="");for(var t=(e=e.replace(/\s/g,"")).split(","),n=t.lastIndexOf("");n>=0;)t[n-1]+=",",t.splice(n,1),n=t.lastIndexOf("");return t}for(var A={backspace:8,tab:9,clear:12,enter:13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,"\u21ea":20,",":188,".":190,"/":191,"`":192,"-":D?173:189,"=":D?61:187,";":D?59:186,"'":222,"[":219,"]":221,"\\":220},B={"\u21e7":16,shift:16,"\u2325":18,alt:18,option:18,"\u2303":17,ctrl:17,control:17,"\u2318":91,cmd:91,command:91},F={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},H={16:!1,18:!1,17:!1,91:!1},W={},$=1;$<20;$++)A["f".concat($)]=111+$;var G=[],V="all",J=[],q=function(e){return A[e.toLowerCase()]||B[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)};function z(e){V=e||"all"}function X(){return V||"all"}var Y=function(e){var t=e.key,n=e.scope,o=e.method,s=e.splitKey,r=void 0===s?"+":s;L(t).forEach((function(e){var t=e.split(r),s=t.length,a=t[s-1],c="*"===a?"*":q(a);if(W[c]){n||(n=X());var i=s>1?M(B,t):[];W[c]=W[c].map((function(e){return(!o||e.method===o)&&e.scope===n&&function(e,t){for(var n=e.length>=t.length?e:t,o=e.length>=t.length?t:e,s=!0,r=0;r<n.length;r++)-1===o.indexOf(n[r])&&(s=!1);return s}(e.mods,i)?{}:e}))}}))};function Q(e,t,n){var o;if(t.scope===n||"all"===t.scope){for(var s in o=t.mods.length>0,H)Object.prototype.hasOwnProperty.call(H,s)&&(!H[s]&&t.mods.indexOf(+s)>-1||H[s]&&-1===t.mods.indexOf(+s))&&(o=!1);(0!==t.mods.length||H[16]||H[18]||H[17]||H[91])&&!o&&"*"!==t.shortcut||!1===t.method(e,t)&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}}function Z(e){var t=W["*"],n=e.keyCode||e.which||e.charCode;if(ee.filter.call(this,e)){if(93!==n&&224!==n||(n=91),-1===G.indexOf(n)&&229!==n&&G.push(n),["ctrlKey","altKey","shiftKey","metaKey"].forEach((function(t){var n=F[t];e[t]&&-1===G.indexOf(n)?G.push(n):!e[t]&&G.indexOf(n)>-1&&G.splice(G.indexOf(n),1)})),n in H){for(var o in H[n]=!0,B)B[o]===n&&(ee[o]=!0);if(!t)return}for(var s in H)Object.prototype.hasOwnProperty.call(H,s)&&(H[s]=e[F[s]]);e.getModifierState&&(!e.altKey||e.ctrlKey)&&e.getModifierState("AltGraph")&&(-1===G.indexOf(17)&&G.push(17),-1===G.indexOf(18)&&G.push(18),H[17]=!0,H[18]=!0);var r=X();if(t)for(var a=0;a<t.length;a++)t[a].scope===r&&("keydown"===e.type&&t[a].keydown||"keyup"===e.type&&t[a].keyup)&&Q(e,t[a],r);if(n in W)for(var c=0;c<W[n].length;c++)if(("keydown"===e.type&&W[n][c].keydown||"keyup"===e.type&&W[n][c].keyup)&&W[n][c].key){for(var i=W[n][c],l=i.splitKey,y=i.key.split(l),u=[],d=0;d<y.length;d++)u.push(q(y[d]));u.sort().join("")===G.sort().join("")&&Q(e,i,r)}}}function ee(e,t,n){G=[];var o=L(e),s=[],r="all",a=document,c=0,i=!1,l=!0,y="+";for(void 0===n&&"function"===typeof t&&(n=t),"[object Object]"===Object.prototype.toString.call(t)&&(t.scope&&(r=t.scope),t.element&&(a=t.element),t.keyup&&(i=t.keyup),void 0!==t.keydown&&(l=t.keydown),"string"===typeof t.splitKey&&(y=t.splitKey)),"string"===typeof t&&(r=t);c<o.length;c++)s=[],(e=o[c].split(y)).length>1&&(s=M(B,e)),(e="*"===(e=e[e.length-1])?"*":q(e))in W||(W[e]=[]),W[e].push({keyup:i,keydown:l,scope:r,mods:s,shortcut:o[c],method:n,key:o[c],splitKey:y});"undefined"!==typeof a&&!function(e){return J.indexOf(e)>-1}(a)&&window&&(J.push(a),U(a,"keydown",(function(e){Z(e)})),U(window,"focus",(function(){G=[]})),U(a,"keyup",(function(e){Z(e),function(e){var t=e.keyCode||e.which||e.charCode,n=G.indexOf(t);if(n>=0&&G.splice(n,1),e.key&&"meta"===e.key.toLowerCase()&&G.splice(0,G.length),93!==t&&224!==t||(t=91),t in H)for(var o in H[t]=!1,B)B[o]===t&&(ee[o]=!1)}(e)})))}var te={setScope:z,getScope:X,deleteScope:function(e,t){var n,o;for(var s in e||(e=X()),W)if(Object.prototype.hasOwnProperty.call(W,s))for(n=W[s],o=0;o<n.length;)n[o].scope===e?n.splice(o,1):o++;X()===e&&z(t||"all")},getPressedKeyCodes:function(){return G.slice(0)},isPressed:function(e){return"string"===typeof e&&(e=q(e)),-1!==G.indexOf(e)},filter:function(e){var t=e.target||e.srcElement,n=t.tagName,o=!0;return!t.isContentEditable&&("INPUT"!==n&&"TEXTAREA"!==n||t.readOnly)||(o=!1),o},unbind:function(e){if(e){if(Array.isArray(e))e.forEach((function(e){e.key&&Y(e)}));else if("object"===typeof e)e.key&&Y(e);else if("string"===typeof e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var s=n[0],r=n[1];"function"===typeof s&&(r=s,s=""),Y({key:e,scope:s,method:r,splitKey:"+"})}}else Object.keys(W).forEach((function(e){return delete W[e]}))}};for(var ne in te)Object.prototype.hasOwnProperty.call(te,ne)&&(ee[ne]=te[ne]);if("undefined"!==typeof window){var oe=window.hotkeys;ee.noConflict=function(e){return e&&window.hotkeys===ee&&(window.hotkeys=oe),ee},window.hotkeys=ee}var se=ee,re=n(33);function ae(e){return(ae="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ce(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function ie(e,t){return!t||"object"!==ae(t)&&"function"!==typeof t?le(e):t}function le(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ye(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function ue(e){return(ue=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function de(e,t){return(de=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var he=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&de(e,t)}(l,e);var t,n,o,r,a=(t=l,function(){var e,n=ue(t);if(ye()){var o=ue(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return ie(this,e)});function l(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(e=a.call(this)).state={keyCode:[],keyStr:[]},e.onKeyUpEvent=e.onKeyUpEvent.bind(le(e)),e}return n=l,(o=[{key:"componentDidMount",value:function(){var e=this;function t(e,t){return-1===e.indexOf(t)&&e.push(t),e}function n(e,t){return-1===e.indexOf(t)&&e.push(t),e}return document.addEventListener("keyup",this.onKeyUpEvent),se("*",(function(o){o.preventDefault();var s=[],r=[];se.shift&&(t(s,16),n(r,"shift")),se.ctrl&&(t(s,17),n(r,"ctrl")),se.alt&&(t(s,18),n(r,"alt")),se.control&&(t(s,17),n(r,"control")),se.command&&(t(s,91),n(r,"command")),r.push(o.keyCode),-1===s.indexOf(o.keyCode)&&s.push(o.keyCode),e.setState({keyCode:s,keyStr:r})})),!1}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.onKeyUpEvent)}},{key:"onKeyUpEvent",value:function(){this.setState({keyCode:[],keyStr:[]})}},{key:"onKeyBoardMouseDown",value:function(e){e.keycode>-1&&this.setState({keyStr:[e.keycode]})}},{key:"onKeyBoardMouseUp",value:function(){this.setState({keyStr:[]})}},{key:"openVersionWebsite",value:function(e){e.target&&e.target.value&&(window.location.href=e.target.value)}},{key:"render",value:function(){var e=this.state,t=e.keyStr,n=e.keyCode,o=R;return o&&(o=R.replace(/([\s\S]*)<!--dividing-->/,"")),s.a.createElement("div",null,s.a.createElement("select",{className:I.a.version,onChange:this.openVersionWebsite.bind(this)},s.a.createElement("option",{value:"https://jaywcjlove.github.io/hotkeys"},"v",re.version),s.a.createElement("option",{value:"https://unpkg.com/hotkeys-js@3.4.3/doc/index.html"},"v3.4.3"),s.a.createElement("option",{value:"https://unpkg.com/hotkeys-js@3.4.2/doc/index.html"},"v3.4.2"),s.a.createElement("option",{value:"https://unpkg.com/hotkeys-js@2.0.10/doc/index.html"},"v2.0.10")),t.length>-1&&s.a.createElement("div",{className:I.a.keyCodeInfo},t.map((function(e){return s.a.createElement("span",{key:"".concat(e)},e)}))),s.a.createElement(c.a,{href:"https://github.com/jaywcjlove/hotkeys",target:"__blank"}),s.a.createElement("div",{className:I.a.header},s.a.createElement("div",{className:I.a.title},"HotKeys.js"),s.a.createElement("div",{className:I.a.github},s.a.createElement("a",{href:"https://www.npmjs.com/package/hotkeys-js"},s.a.createElement("button",{type:"button"},"On NPM")),s.a.createElement("a",{href:"https://github.com/jaywcjlove/hotkeys/"},s.a.createElement("button",{type:"button"},"Fork on Github")),s.a.createElement("a",{href:"https://github.com/jaywcjlove/hotkeys/"},s.a.createElement("button",{type:"button"},"Doc on Github")),s.a.createElement("a",{href:"https://jaywcjlove.gitee.io/hotkeys/"},s.a.createElement("button",{type:"button"},"Doc on Gitee"))),s.a.createElement("div",{className:I.a.info},"A robust Javascript library for capturing keyboard input and key combinations entered. It has no dependencies. Try to press your keyboard, The following button will highlight.")),s.a.createElement(p,{onMouseDown:this.onKeyBoardMouseDown.bind(this),onMouseUp:this.onKeyBoardMouseUp.bind(this),keyCode:n}),s.a.createElement(P,{source:o}),s.a.createElement(m,{name:"Kenny Wong",href:"http://jaywcjlove.github.io",year:"2015-present"},s.a.createElement(i.a,{user:"jaywcjlove",repo:"hotkeys"},s.a.createElement(i.a.Social,{href:"https://github.com/jaywcjlove/hotkeys",type:"forks"}),s.a.createElement(i.a.Social,{href:"https://github.com/jaywcjlove/hotkeys",type:"stars"}),s.a.createElement(i.a.Social,{href:"https://github.com/jaywcjlove/hotkeys",type:"watchers"}),s.a.createElement(i.a.Social,{href:"https://github.com/jaywcjlove/hotkeys",type:"followers"}))))}}])&&ce(n.prototype,o),r&&ce(n,r),l}(o.Component);n(311),n(312);a.a.render(s.a.createElement(he,null),document.getElementById("root"))},32:function(e,t,n){e.exports={markdown:"styles_markdown__1kazu"}},33:function(e){e.exports=JSON.parse('{"name":"hotkeys-js","description":"A simple micro-library for defining and dispatching keyboard shortcuts. It has no dependencies.","version":"3.7.6","main":"index.js","types":"index.d.ts","module":"dist/hotkeys.esm.js","scripts":{"lint":"eslint --ext .js src website","deploy":"node scripts/build.js && npm run doc:build && gh-pages -d doc","build":"node scripts/build.js && npm run doc && npm run lint","watch":"node scripts/watch.js","pretest":"npm run build","test":"jest --coverage","test:watch":"jest --watch","doc":"cross-env PUBLIC_URL=. ENTRYDIR=website kkt build","doc:dev":"cross-env PUBLIC_URL=. ENTRYDIR=website kkt start"},"files":["index.d.ts","dist","doc"],"husky":{"hooks":{"pre-commit":"npm run lint"}},"keywords":["hotkey","hotkeys","hotkeys-js","hotkeysjs","key","keys","keyboard","shortcuts","keypress"],"author":"kenny wong <wowohoo@qq.com>","license":"MIT","homepage":"http://jaywcjlove.github.io/hotkeys","repository":{"type":"git","url":"https://github.com/jaywcjlove/hotkeys.git"},"jest":{"testURL":"http://localhost/"},"dependencies":{},"devDependencies":{"@kkt/loader-less":"^5.6.1","@uiw/react-github-corners":"^1.1.3","@uiw/react-shields":"^1.1.0","@uiw/reset.css":"^1.0.3","babel-eslint":"10.1.0","bannerjs":"1.0.7","classnames":"2.2.6","colors-cli":"1.0.26","cross-env":"7.0.2","eslint":"6.8.0","eslint-config-airbnb":"18.1.0","eslint-plugin-import":"2.20.2","eslint-plugin-jsx-a11y":"6.2.3","eslint-plugin-react":"7.19.0","gh-pages":"2.2.0","highlight.js":"9.18.1","husky":"4.2.3","jest":"25.2.4","kkt":"^5.6.1","less":"3.11.1","puppeteer":"2.1.1","raw-loader":"^4.0.0","react":"16.13.1","react-dom":"16.13.1","react-markdown":"4.3.1","rimraf":"3.0.2","rollup":"2.3.2","rollup-plugin-babel":"4.4.0","rollup-plugin-commonjs":"10.1.0","rollup-plugin-node-resolve":"5.2.0","uglify-js":"3.8.1","zlib":"1.0.5"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]}}')},35:function(e,t,n){e.exports=n(313)}},[[35,1,2]]]);
//# sourceMappingURL=main.52c7c8de.chunk.js.map