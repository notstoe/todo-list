!function(t){var e={};function n(a){if(e[a])return e[a].exports;var r=e[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([,function(t,e,n){"use strict";function a(t,e){const n=document.createElement("div");n.classList.add("tab");const a=document.createElement("a");a.style.backgroundColor=t,a.classList.add("iconNav");const r=document.createElement("span");r.classList.add("navText"),r.textContent=e,n.append(a,r);const i=document.querySelector(".containerTabs");i.insertBefore(n,i.lastChild);return{setColor:t=>a.style.backgroundColor=t,setText:t=>r.textContent=t,setActive:()=>n.classList.toggle("activeTab")}}function r(t){t.target.parentNode.parentNode.lastChild.classList.toggle("hideElement"),t.target.parentNode.parentNode.firstChild.classList.toggle("activeTask")}function i(t){t.target.parentNode.parentNode.parentNode.classList.toggle("taskDone")}function o(t){t.target.parentNode.parentNode.parentNode.removeChild(t.target.parentNode.parentNode)}function s(t){let e,n;const a=document.querySelector("#editTaskModal"),r=document.querySelector("#editTaskModalOverlay");if(a.classList.toggle("hideElement"),r.classList.toggle("hideElement"),t&&"editIcon"===t.target.id){const a=t.target.parentNode.childNodes[1],r=t.target.parentNode.childNodes[3],i=t.target.parentNode.parentNode.lastChild.firstChild,o=document.querySelector('input[name="inputDateEdit"]');e=a.textContent.split("/"),n=`${e[2]}-${e[1]}-${e[0]}`,o.value=n;document.querySelector('input[name="inputTitleEdit"]').value=r.textContent;document.querySelector('textarea[name="inputDescriptEdit"]').value=i.textContent}}function u(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function c(t){u(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function d(t){u(1,arguments);var e=c(t);return!isNaN(e)}n.r(e);var l={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function m(t){return function(e){var n=e||{},a=n.width?String(n.width):t.defaultWidth;return t.formats[a]||t.formats[t.defaultWidth]}}var f={date:m({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:m({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:m({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},h={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function g(t){return function(e,n){var a,r=n||{};if("formatting"===(r.context?String(r.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,o=r.width?String(r.width):i;a=t.formattingValues[o]||t.formattingValues[i]}else{var s=t.defaultWidth,u=r.width?String(r.width):t.defaultWidth;a=t.values[u]||t.values[s]}return a[t.argumentCallback?t.argumentCallback(e):e]}}function p(t){return function(e,n){var a=String(e),r=n||{},i=r.width,o=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],s=a.match(o);if(!s)return null;var u,c=s[0],d=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth];return u="[object Array]"===Object.prototype.toString.call(d)?function(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}(d,(function(t){return t.test(c)})):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}(d,(function(t){return t.test(c)})),u=t.valueCallback?t.valueCallback(u):u,{value:u=r.valueCallback?r.valueCallback(u):u,rest:a.slice(c.length)}}}var b,w={code:"en-US",formatDistance:function(t,e,n){var a;return n=n||{},a="string"==typeof l[t]?l[t]:1===e?l[t].one:l[t].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"in "+a:a+" ago":a},formatLong:f,formatRelative:function(t,e,n,a){return h[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:g({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:g({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:g({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:g({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:g({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(b={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t,e){var n=String(t),a=e||{},r=n.match(b.matchPattern);if(!r)return null;var i=r[0],o=n.match(b.parsePattern);if(!o)return null;var s=b.valueCallback?b.valueCallback(o[0]):o[0];return{value:s=a.valueCallback?a.valueCallback(s):s,rest:n.slice(i.length)}}),era:p({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:p({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:p({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:p({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:p({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function v(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function y(t,e){u(2,arguments);var n=c(t).getTime(),a=v(e);return new Date(n+a)}function T(t,e){u(2,arguments);var n=v(e);return y(t,-n)}function C(t,e){for(var n=t<0?"-":"",a=Math.abs(t).toString();a.length<e;)a="0"+a;return n+a}var k={y:function(t,e){var n=t.getUTCFullYear(),a=n>0?n:1-n;return C("yy"===e?a%100:a,e.length)},M:function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):C(n+1,2)},d:function(t,e){return C(t.getUTCDate(),e.length)},a:function(t,e){var n=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":case"aaa":return n.toUpperCase();case"aaaaa":return n[0];case"aaaa":default:return"am"===n?"a.m.":"p.m."}},h:function(t,e){return C(t.getUTCHours()%12||12,e.length)},H:function(t,e){return C(t.getUTCHours(),e.length)},m:function(t,e){return C(t.getUTCMinutes(),e.length)},s:function(t,e){return C(t.getUTCSeconds(),e.length)},S:function(t,e){var n=e.length,a=t.getUTCMilliseconds();return C(Math.floor(a*Math.pow(10,n-3)),e.length)}};function E(t){u(1,arguments);var e=1,n=c(t),a=n.getUTCDay(),r=(a<e?7:0)+a-e;return n.setUTCDate(n.getUTCDate()-r),n.setUTCHours(0,0,0,0),n}function x(t){u(1,arguments);var e=c(t),n=e.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(n+1,0,4),a.setUTCHours(0,0,0,0);var r=E(a),i=new Date(0);i.setUTCFullYear(n,0,4),i.setUTCHours(0,0,0,0);var o=E(i);return e.getTime()>=r.getTime()?n+1:e.getTime()>=o.getTime()?n:n-1}function M(t){u(1,arguments);var e=x(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var a=E(n);return a}function D(t,e){u(1,arguments);var n=e||{},a=n.locale,r=a&&a.options&&a.options.weekStartsOn,i=null==r?0:v(r),o=null==n.weekStartsOn?i:v(n.weekStartsOn);if(!(o>=0&&o<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var s=c(t),d=s.getUTCDay(),l=(d<o?7:0)+d-o;return s.setUTCDate(s.getUTCDate()-l),s.setUTCHours(0,0,0,0),s}function L(t,e){u(1,arguments);var n=c(t,e),a=n.getUTCFullYear(),r=e||{},i=r.locale,o=i&&i.options&&i.options.firstWeekContainsDate,s=null==o?1:v(o),d=null==r.firstWeekContainsDate?s:v(r.firstWeekContainsDate);if(!(d>=1&&d<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=new Date(0);l.setUTCFullYear(a+1,0,d),l.setUTCHours(0,0,0,0);var m=D(l,e),f=new Date(0);f.setUTCFullYear(a,0,d),f.setUTCHours(0,0,0,0);var h=D(f,e);return n.getTime()>=m.getTime()?a+1:n.getTime()>=h.getTime()?a:a-1}function S(t,e){u(1,arguments);var n=e||{},a=n.locale,r=a&&a.options&&a.options.firstWeekContainsDate,i=null==r?1:v(r),o=null==n.firstWeekContainsDate?i:v(n.firstWeekContainsDate),s=L(t,e),c=new Date(0);c.setUTCFullYear(s,0,o),c.setUTCHours(0,0,0,0);var d=D(c,e);return d}var A="midnight",N="noon",P="morning",U="afternoon",O="evening",q="night";function W(t,e){var n=t>0?"-":"+",a=Math.abs(t),r=Math.floor(a/60),i=a%60;if(0===i)return n+String(r);var o=e||"";return n+String(r)+o+C(i,2)}function Y(t,e){return t%60==0?(t>0?"-":"+")+C(Math.abs(t)/60,2):j(t,e)}function j(t,e){var n=e||"",a=t>0?"-":"+",r=Math.abs(t);return a+C(Math.floor(r/60),2)+n+C(r%60,2)}var B={G:function(t,e,n){var a=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});case"GGGG":default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var a=t.getUTCFullYear(),r=a>0?a:1-a;return n.ordinalNumber(r,{unit:"year"})}return k.y(t,e)},Y:function(t,e,n,a){var r=L(t,a),i=r>0?r:1-r;return"YY"===e?C(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):C(i,e.length)},R:function(t,e){return C(x(t),e.length)},u:function(t,e){return C(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return C(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return C(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){var a=t.getUTCMonth();switch(e){case"M":case"MM":return k.M(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){var a=t.getUTCMonth();switch(e){case"L":return String(a+1);case"LL":return C(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(t,e,n,a){var r=function(t,e){u(1,arguments);var n=c(t),a=D(n,e).getTime()-S(n,e).getTime();return Math.round(a/6048e5)+1}(t,a);return"wo"===e?n.ordinalNumber(r,{unit:"week"}):C(r,e.length)},I:function(t,e,n){var a=function(t){u(1,arguments);var e=c(t),n=E(e).getTime()-M(e).getTime();return Math.round(n/6048e5)+1}(t);return"Io"===e?n.ordinalNumber(a,{unit:"week"}):C(a,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):k.d(t,e)},D:function(t,e,n){var a=function(t){u(1,arguments);var e=c(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var a=e.getTime(),r=n-a;return Math.floor(r/864e5)+1}(t);return"Do"===e?n.ordinalNumber(a,{unit:"dayOfYear"}):C(a,e.length)},E:function(t,e,n){var a=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});case"EEEE":default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){var r=t.getUTCDay(),i=(r-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return C(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});case"eeee":default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){var r=t.getUTCDay(),i=(r-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return C(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});case"cccc":default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(t,e,n){var a=t.getUTCDay(),r=0===a?7:a;switch(e){case"i":return String(r);case"ii":return C(r,e.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});case"iiii":default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){var a=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){var a,r=t.getUTCHours();switch(a=12===r?N:0===r?A:r/12>=1?"pm":"am",e){case"b":case"bb":case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){var a,r=t.getUTCHours();switch(a=r>=17?O:r>=12?U:r>=4?P:q,e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var a=t.getUTCHours()%12;return 0===a&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return k.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):k.H(t,e)},K:function(t,e,n){var a=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(a,{unit:"hour"}):C(a,e.length)},k:function(t,e,n){var a=t.getUTCHours();return 0===a&&(a=24),"ko"===e?n.ordinalNumber(a,{unit:"hour"}):C(a,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):k.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):k.s(t,e)},S:function(t,e){return k.S(t,e)},X:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return Y(r);case"XXXX":case"XX":return j(r);case"XXXXX":case"XXX":default:return j(r,":")}},x:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"x":return Y(r);case"xxxx":case"xx":return j(r);case"xxxxx":case"xxx":default:return j(r,":")}},O:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+W(r,":");case"OOOO":default:return"GMT"+j(r,":")}},z:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+W(r,":");case"zzzz":default:return"GMT"+j(r,":")}},t:function(t,e,n,a){var r=a._originalDate||t;return C(Math.floor(r.getTime()/1e3),e.length)},T:function(t,e,n,a){return C((a._originalDate||t).getTime(),e.length)}};function H(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function z(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}var X={p:z,P:function(t,e){var n,a=t.match(/(P+)(p+)?/),r=a[1],i=a[2];if(!i)return H(t,e);switch(r){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",H(r,e)).replace("{{time}}",z(i,e))}};function F(t){return t.getTime()%6e4}function Q(t){var e=new Date(t.getTime()),n=Math.ceil(e.getTimezoneOffset());return e.setSeconds(0,0),6e4*n+(n>0?(6e4+F(e))%6e4:F(e))}var G=["D","DD"],R=["YY","YYYY"];function _(t){return-1!==G.indexOf(t)}function I(t){return-1!==R.indexOf(t)}function J(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var $=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,V=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,K=/^'([^]*?)'?$/,Z=/''/g,tt=/[a-zA-Z]/;function et(t,e,n){u(2,arguments);var a=String(e),r=n||{},i=r.locale||w,o=i.options&&i.options.firstWeekContainsDate,s=null==o?1:v(o),l=null==r.firstWeekContainsDate?s:v(r.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var m=i.options&&i.options.weekStartsOn,f=null==m?0:v(m),h=null==r.weekStartsOn?f:v(r.weekStartsOn);if(!(h>=0&&h<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!i.localize)throw new RangeError("locale must contain localize property");if(!i.formatLong)throw new RangeError("locale must contain formatLong property");var g=c(t);if(!d(g))throw new RangeError("Invalid time value");var p=Q(g),b=T(g,p),y={firstWeekContainsDate:l,weekStartsOn:h,locale:i,_originalDate:g},C=a.match(V).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,X[e])(t,i.formatLong,y):t})).join("").match($).map((function(n){if("''"===n)return"'";var a=n[0];if("'"===a)return nt(n);var o=B[a];if(o)return!r.useAdditionalWeekYearTokens&&I(n)&&J(n,e,t),!r.useAdditionalDayOfYearTokens&&_(n)&&J(n,e,t),o(b,n,i.localize,y);if(a.match(tt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return n})).join("");return C}function nt(t){return t.match(K)[1].replace(Z,"'")}function at(t,e,n){const a=document.createElement("div"),u=document.createElement("div");u.classList.add("taskDiv");const c=document.createElement("div");c.setAttribute("id","checkbox"),c.classList.add("pretty","p-round","p-tada");const d=document.createElement("input");d.setAttribute("type","checkbox");const l=document.createElement("div");l.classList.add("state","p-info");const m=document.createElement("label");l.appendChild(m),c.append(d,l);const f=document.createElement("span");f.textContent=t,f.setAttribute("id","dueDate");const h=document.createTextNode("  -  "),g=document.createElement("span");g.textContent=e,g.setAttribute("id","taskTitle");const p=document.createElement("img");p.setAttribute("src","assets/pencil-edit-button.png"),p.setAttribute("id","editIcon"),p.setAttribute("alt","Edit Task");const b=document.createElement("img");b.setAttribute("src","assets/trashcan.png"),b.setAttribute("id","rmvIcon"),b.setAttribute("alt","Remove Task"),u.append(c,f,h,g,p,b);const w=document.createElement("p");w.classList.add("taskDescript","hideElement"),w.textContent=n,a.append(u,w);const v=document.querySelector(".taskContainer");v.insertBefore(a,v.lastChild),g.addEventListener("click",r),d.addEventListener("click",i),b.addEventListener("click",o),p.addEventListener("click",t=>{!function(t){const e=t.target.parentNode.childNodes[1],n=t.target.parentNode.childNodes[3],a=t.target.parentNode.parentNode.lastChild.firstChild,r=document.createElement("div");r.classList.add("newTaskModal","hideElement"),r.setAttribute("id","editTaskModal");const i=document.createElement("div");i.classList.add("titleModalNewTask");const o=document.createElement("h1");o.setAttribute("id","newTaskTitle"),o.textContent="Edit current task";const u=document.createElement("span");u.setAttribute("id","closeNewTask"),u.textContent="×",i.append(o,u);const c=document.createElement("label");c.setAttribute("for","inputTitleEdit"),c.textContent="Title:",c.classList.add("newTaskLabel");const d=document.createElement("input");d.setAttribute("type","text"),d.setAttribute("name","inputTitleEdit"),d.setAttribute("id","inputTitle");const l=document.createElement("label");l.setAttribute("for","inputDateEdit"),l.textContent="Due Date:",l.classList.add("newTaskLabel");const m=document.createElement("input");m.setAttribute("type","date"),m.setAttribute("name","inputDateEdit"),m.setAttribute("id","inputDate");const f=document.createElement("label");f.setAttribute("for","inputDescriptEdit"),f.textContent="Task Description:",f.classList.add("newTaskLabel");const h=document.createElement("textarea");h.setAttribute("name","inputDescriptEdit"),h.setAttribute("id","inputDescript");const g=document.createElement("button");g.setAttribute("id","submitNewTask"),g.textContent="Submit Changes",r.append(i,c,d,l,m,f,h,g);const p=document.createElement("div");p.classList.add("newTaskModalOverlay","hideElement"),p.setAttribute("id","editTaskModalOverlay"),u.addEventListener("click",s),window.addEventListener("click",t=>{t.target==p&&s()}),g.addEventListener("click",()=>{if(""===m.value||""===d.value)return void alert("Ops, looks like you forgot to add a Title and/or a due Date");let t=m.value.split("-"),r=et(new Date(t[0],t[1]-1,t[2]),"dd-MM-yyyy");e.textContent=r.split("-").join("/"),n.textContent=d.value,a.textContent=h.value,s()}),document.body.append(r,p)}(t),s(t)})}function rt(t){const e=document.querySelector("#newTaskModal"),n=document.querySelector("#newTaskModalOverlay");e.classList.toggle("hideElement"),n.classList.toggle("hideElement")}!function(){const t=document.querySelector("#content"),e=document.createElement("div");e.classList.add("titleContainer");const n=document.createElement("h1");n.setAttribute("id","pageTitle"),n.textContent="To-Do";const r=document.createElement("span");r.setAttribute("id","tabIndicator"),r.style.backgroundColor="rgb(147, 163, 247)";const i=document.createElement("span");i.setAttribute("id","helpLink"),i.textContent="Help",e.append(r,n,i),t.appendChild(e);const o=document.createElement("div");o.classList.add("containerTabs");const s=document.createElement("div");s.setAttribute("id","editRmvDiv");const u=document.createElement("span");u.classList.add("navText","editRmvBtn"),u.setAttribute("id","editBtn"),u.textContent="Edit";const c=document.createElement("span");c.classList.add("navText","editRmvBtn"),c.setAttribute("id","rmvBtn"),c.textContent="Remove",s.append(u,c);const d=document.createElement("div");d.classList.add("tab"),d.setAttribute("id","newTabDiv");const l=document.createElement("img");l.setAttribute("src","assets/undraw_add_file2_gvbb.svg"),l.setAttribute("id","newTabBtn"),l.classList.add("iconNav");const m=document.createElement("span");m.classList.add("navText"),m.textContent="Add New Category",d.append(l,m),o.append(s,d),document.body.insertBefore(o,t),a("rgb(147, 163, 247)","All Categories"),a("green","Personal"),a("purple","Personal");const f=document.createElement("div");f.classList.add("taskContainer");const h=document.createElement("p");h.textContent="+ Add New Task",h.setAttribute("id","newTodoBtn"),f.appendChild(h),t.appendChild(f),at("23/07/2020","I'm a sample task, get me done!","testing full description"),at("24/07/2020","I'm a sample task too, get me done!","testing full description"),at("25/07/2020","I'm a sample task also, get me done!","testing full description"),at("26/07/2020","I'm a sample task again, get me done!","testing full description"),at("27/07/2020","I'm a sample task one more time, get me done!","testing full description testing full description testing full description testing full description testing full description testing full description"),function(){const t=document.createElement("div");t.classList.add("newTaskModal","hideElement"),t.setAttribute("id","newTaskModal");const e=document.createElement("div");e.classList.add("titleModalNewTask");const n=document.createElement("h1");n.setAttribute("id","newTaskTitle"),n.textContent="Create a New Task";const a=document.createElement("span");a.setAttribute("id","closeNewTask"),a.textContent="×",e.append(n,a);const r=document.createElement("label");r.setAttribute("for","inputTitle"),r.textContent="Title:",r.classList.add("newTaskLabel");const i=document.createElement("input");i.setAttribute("type","text"),i.setAttribute("name","inputTitle"),i.setAttribute("id","inputTitle");const o=document.createElement("label");o.setAttribute("for","inputDate"),o.textContent="Due Date:",o.classList.add("newTaskLabel");const s=document.createElement("input");s.setAttribute("type","date"),s.setAttribute("name","inputDate"),s.setAttribute("id","inputDate"),s.attributes.required="";const u=document.createElement("label");u.setAttribute("for","inputDescript"),u.textContent="Task Description:",u.classList.add("newTaskLabel");const c=document.createElement("textarea");c.setAttribute("name","inputDescript"),c.setAttribute("id","inputDescript");const d=document.createElement("button");d.setAttribute("id","submitNewTask"),d.textContent="Add New Task",t.append(e,r,i,o,s,u,c,d);const l=document.createElement("div");l.classList.add("newTaskModalOverlay","hideElement"),l.setAttribute("id","newTaskModalOverlay"),a.addEventListener("click",rt),window.addEventListener("click",t=>{t.target==l&&rt()}),d.addEventListener("click",()=>{if(""===s.value||""===i.value)return void alert("Ops, looks like you forgot to add a Title and/or a due Date");let t=s.value.split("-");at(et(new Date(t[0],t[1]-1,t[2]),"dd-MM-yyyy").split("-").join("/"),i.value,c.value),s.value="",i.value="",c.value="",rt()}),document.body.append(t,l)}(),h.addEventListener("click",rt)}();document.querySelector("#rmvBtn").addEventListener("click",(function(){const t=document.querySelector(".containerTabs");document.querySelectorAll(".tab").forEach(e=>{e.classList.contains("activeTab")&&t.removeChild(e)})}))}]);