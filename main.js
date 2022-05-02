(()=>{"use strict";const t=t=>{const e=[];return{name:t,getName(){return this.name},getTasks:()=>e,addTask(t){e.push(t)},removeTask(t){let e=this.getTasks().findIndex((e=>e.title===t));-1!==e&&this.getTasks().splice(e,1)},updateTask(t,e,n){let r=this.getTasks().findIndex((e=>e===t));-1!=r&&(this.getTasks()[r][e]=n)},removeAllTasks(){for(;this.getTasks().length>0;)this.getTasks().pop()},showTask(t){let e=this.getTasks().findIndex((e=>e.title===t));return this.getTasks()[e]}}};function e(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function n(t){return e(1,arguments),t instanceof Date||"object"==typeof t&&"[object Date]"===Object.prototype.toString.call(t)}function r(t){e(1,arguments);var n=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===n?new Date(t.getTime()):"number"==typeof t||"[object Number]"===n?new Date(t):("string"!=typeof t&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function a(t){if(e(1,arguments),!n(t)&&"number"!=typeof t)return!1;var a=r(t);return!isNaN(Number(a))}var i={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function o(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}var s,u={date:o({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:o({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:o({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},c={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function d(t){return function(e,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,o=a.width?String(a.width):i;r=t.formattingValues[o]||t.formattingValues[i]}else{var s=t.defaultWidth,u=a.width?String(a.width):t.defaultWidth;r=t.values[u]||t.values[s]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function l(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],i=e.match(a);if(!i)return null;var o,s=i[0],u=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(u)?m(u,(function(t){return t.test(s)})):h(u,(function(t){return t.test(s)}));o=t.valueCallback?t.valueCallback(c):c,o=n.valueCallback?n.valueCallback(o):o;var d=e.slice(s.length);return{value:o,rest:d}}}function h(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function m(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}const f={code:"en-US",formatDistance:function(t,e,n){var r,a=i[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:u,formatRelative:function(t,e,n,r){return c[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:d({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:d({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:d({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:d({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:d({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(s={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(s.matchPattern);if(!n)return null;var r=n[0],a=t.match(s.parsePattern);if(!a)return null;var i=s.valueCallback?s.valueCallback(a[0]):a[0];i=e.valueCallback?e.valueCallback(i):i;var o=t.slice(r.length);return{value:i,rest:o}}),era:l({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:l({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:l({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:l({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:l({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function g(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function w(t,n){e(2,arguments);var a=r(t).getTime(),i=g(n);return new Date(a+i)}function p(t,n){e(2,arguments);var r=g(n);return w(t,-r)}var v=864e5;function b(t){e(1,arguments);var n=1,a=r(t),i=a.getUTCDay(),o=(i<n?7:0)+i-n;return a.setUTCDate(a.getUTCDate()-o),a.setUTCHours(0,0,0,0),a}function y(t){e(1,arguments);var n=r(t),a=n.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(a+1,0,4),i.setUTCHours(0,0,0,0);var o=b(i),s=new Date(0);s.setUTCFullYear(a,0,4),s.setUTCHours(0,0,0,0);var u=b(s);return n.getTime()>=o.getTime()?a+1:n.getTime()>=u.getTime()?a:a-1}function T(t){e(1,arguments);var n=y(t),r=new Date(0);r.setUTCFullYear(n,0,4),r.setUTCHours(0,0,0,0);var a=b(r);return a}var C=6048e5;function M(t,n){e(1,arguments);var a=n||{},i=a.locale,o=i&&i.options&&i.options.weekStartsOn,s=null==o?0:g(o),u=null==a.weekStartsOn?s:g(a.weekStartsOn);if(!(u>=0&&u<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=r(t),d=c.getUTCDay(),l=(d<u?7:0)+d-u;return c.setUTCDate(c.getUTCDate()-l),c.setUTCHours(0,0,0,0),c}function D(t,n){e(1,arguments);var a=r(t),i=a.getUTCFullYear(),o=n||{},s=o.locale,u=s&&s.options&&s.options.firstWeekContainsDate,c=null==u?1:g(u),d=null==o.firstWeekContainsDate?c:g(o.firstWeekContainsDate);if(!(d>=1&&d<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=new Date(0);l.setUTCFullYear(i+1,0,d),l.setUTCHours(0,0,0,0);var h=M(l,n),m=new Date(0);m.setUTCFullYear(i,0,d),m.setUTCHours(0,0,0,0);var f=M(m,n);return a.getTime()>=h.getTime()?i+1:a.getTime()>=f.getTime()?i:i-1}function k(t,n){e(1,arguments);var r=n||{},a=r.locale,i=a&&a.options&&a.options.firstWeekContainsDate,o=null==i?1:g(i),s=null==r.firstWeekContainsDate?o:g(r.firstWeekContainsDate),u=D(t,n),c=new Date(0);c.setUTCFullYear(u,0,s),c.setUTCHours(0,0,0,0);var d=M(c,n);return d}var S=6048e5;function P(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const L=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return P("yy"===e?r%100:r,e.length)},x=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):P(n+1,2)},E=function(t,e){return P(t.getUTCDate(),e.length)},U=function(t,e){return P(t.getUTCHours()%12||12,e.length)},j=function(t,e){return P(t.getUTCHours(),e.length)},N=function(t,e){return P(t.getUTCMinutes(),e.length)},W=function(t,e){return P(t.getUTCSeconds(),e.length)},Y=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return P(Math.floor(r*Math.pow(10,n-3)),e.length)};function O(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=e||"";return n+String(a)+o+P(i,2)}function q(t,e){return t%60==0?(t>0?"-":"+")+P(Math.abs(t)/60,2):H(t,e)}function H(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+P(Math.floor(a/60),2)+n+P(a%60,2)}const B={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return L(t,e)},Y:function(t,e,n,r){var a=D(t,r),i=a>0?a:1-a;return"YY"===e?P(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):P(i,e.length)},R:function(t,e){return P(y(t),e.length)},u:function(t,e){return P(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return P(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return P(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return x(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return P(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,n,a,i){var o=function(t,n){e(1,arguments);var a=r(t),i=M(a,n).getTime()-k(a,n).getTime();return Math.round(i/S)+1}(t,i);return"wo"===n?a.ordinalNumber(o,{unit:"week"}):P(o,n.length)},I:function(t,n,a){var i=function(t){e(1,arguments);var n=r(t),a=b(n).getTime()-T(n).getTime();return Math.round(a/C)+1}(t);return"Io"===n?a.ordinalNumber(i,{unit:"week"}):P(i,n.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):E(t,e)},D:function(t,n,a){var i=function(t){e(1,arguments);var n=r(t),a=n.getTime();n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0);var i=n.getTime(),o=a-i;return Math.floor(o/v)+1}(t);return"Do"===n?a.ordinalNumber(i,{unit:"dayOfYear"}):P(i,n.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return P(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return P(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return P(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return U(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):j(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):P(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):P(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):N(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):W(t,e)},S:function(t,e){return Y(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return q(a);case"XXXX":case"XX":return H(a);default:return H(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return q(a);case"xxxx":case"xx":return H(a);default:return H(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+O(a,":");default:return"GMT"+H(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+O(a,":");default:return"GMT"+H(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return P(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return P((r._originalDate||t).getTime(),e.length)}};function F(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}}function I(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}}var A={p:I,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],i=r[2];if(!i)return F(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",F(a,e)).replace("{{time}}",I(i,e))}};const z=A;function Q(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var X=["D","DD"],G=["YY","YYYY"];function J(t){return-1!==X.indexOf(t)}function R(t){return-1!==G.indexOf(t)}function _(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var $=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,V=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,K=/^'([^]*?)'?$/,Z=/''/g,tt=/[a-zA-Z]/;function et(t,n,i){e(2,arguments);var o=String(n),s=i||{},u=s.locale||f,c=u.options&&u.options.firstWeekContainsDate,d=null==c?1:g(c),l=null==s.firstWeekContainsDate?d:g(s.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=u.options&&u.options.weekStartsOn,m=null==h?0:g(h),w=null==s.weekStartsOn?m:g(s.weekStartsOn);if(!(w>=0&&w<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!u.localize)throw new RangeError("locale must contain localize property");if(!u.formatLong)throw new RangeError("locale must contain formatLong property");var v=r(t);if(!a(v))throw new RangeError("Invalid time value");var b=Q(v),y=p(v,b),T={firstWeekContainsDate:l,weekStartsOn:w,locale:u,_originalDate:v},C=o.match(V).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,z[e])(t,u.formatLong,T):t})).join("").match($).map((function(e){if("''"===e)return"'";var r=e[0];if("'"===r)return nt(e);var a=B[r];if(a)return!s.useAdditionalWeekYearTokens&&R(e)&&_(e,n,t),!s.useAdditionalDayOfYearTokens&&J(e)&&_(e,n,t),a(y,e,u.localize,T);if(r.match(tt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return e})).join("");return C}function nt(t){return t.match(K)[1].replace(Z,"'")}const rt=new Date,at=(t,e=rt.toLocaleDateString(),n="low")=>{let r;return"low"!=n&&"medium"!=n&&"high"!=n||(r=n),{title:t,dueDate:et(new Date(e.split("/")),"MM/dd/yyyy"),_priority:n,getValues:()=>({title:t,dueDate:e,_priority:r}),setTitle(t){this.title=t},getDueDate(){return this.dueDate},setDueDate(t){this.dueDate=t},getPriority(){return this._priority},setPriority(t){"low"!=(t=t.toLowerCase())&&"medium"!=t&&"high"!=t||(this._priority=t)}}},it=()=>{document.querySelector(".addProjectBtn").classList.toggle("hidden"),document.querySelector(".projectForm").classList.toggle("hidden")},ot=()=>{document.querySelector(".createTask").classList.toggle("hidden")},st=(t,e,n)=>{n.innerHTML="";const r=document.createElement("h1");r.innerText=e,n.appendChild(r),n.appendChild((()=>{const t=document.createElement("button");return t.classList.add("taskBtn"),t.innerHTML="Create Task",t})()),n.appendChild((()=>{const t=document.createElement("form");t.classList.add("hidden"),t.classList.add("createTask");const e=document.createElement("input");e.setAttribute("placeholder","Title"),e.setAttribute("id","titleInput");const n=document.createElement("input");n.setAttribute("placeholder","Due Date"),n.setAttribute("id","dateInput");const r=document.createElement("button");return r.innerHTML="Add +",r.classList.add("addTaskBtn"),t.appendChild(e),t.appendChild(n),t.appendChild(r),t.onsubmit=function(t){t.preventDefault()},t})()),t[e].forEach((t=>{const e=document.createElement("div");e.classList.add("card");const r=document.createElement("button");r.classList.add("completeBtn"),r.classList.add(t.title),r.innerHTML="✔",e.appendChild(r);for(let n in t){const r=document.createElement("div");r.innerHTML=t[n],e.appendChild(r)}n.appendChild(e)}))},ut=(()=>{let e;if("{}"!=localStorage.getItem("projects")&&localStorage.getItem("projects"))e=localStorage.getItem("projects"),e=JSON.parse(e);else{e={};const n=t("Default"),r=at("Default");n.addTask(r),e[n.getName()]=n.getTasks()}return e})();!function(e){const n=document.getElementById("content"),r=document.createElement("section");r.classList.add("projectsPane");const a=document.createElement("div");a.classList.add("projectsList");const i=document.createElement("button");i.classList.add("addProjectBtn"),i.innerHTML="Create Project";const o=document.createElement("div");o.classList.add("bottomDiv"),o.appendChild(i),r.appendChild(o);const s=document.createElement("section");s.classList.add("currentProject"),st(e,"Default",s);const u=t=>{const e=document.createElement("div");e.classList.add("project"),e.classList.add(`${t.replace(/\s/g,"")}`),e.innerHTML=`<p class='projectName'>${t}</p> <form class='edit hidden' onsubmit="return false;"><input value=${t} class='newName'></form>`;const n=document.createElement("button");n.innerHTML="X",n.classList.add("deleteProj");const i=document.createElement("div");i.classList.add("btnContainer"),i.appendChild(n),e.append(i),a.appendChild(e),r.appendChild(a)};document.addEventListener("click",(function(n){if(n.target.classList.contains("deleteProj")){const t=n.path[2].classList[1];document.querySelector(`.${t}`).remove(),delete e[t],localStorage.setItem("projects",JSON.stringify(e))}else if(n.target.classList.contains("project"));else if(n.target.classList.contains("addProjectBtn"))it();else if(n.target.classList.contains("newProjBtn")){const n=document.querySelector(".newProjInput"),r=t(n.value);e[r.getName()]=r.getTasks(),u(r.getName()),localStorage.setItem("projects",JSON.stringify(e)),it()}else if(n.target.classList.contains("cancel"))it();else if(n.target.classList.contains("projectName")){const t=n.path[1].classList[1];st(e,t,s)}else if(n.target.classList.contains("completeBtn")){const t=s.firstChild.innerHTML,r=n.path[0].classList[1];let a=e[t].findIndex((t=>t.title===r));-1!==a&&e[t].splice(a,1),localStorage.setItem("projects",JSON.stringify(e)),st(e,t,s)}else if(n.target.classList.contains("taskBtn"))ot();else if(n.target.classList.contains("addTaskBtn")){const t=document.querySelector("#titleInput").value,n=(document.querySelector("#dateInput").value,s.firstChild.innerHTML);ot(),((t,n,r)=>{const a=at(n);e[t].push(a),localStorage.setItem("projects",JSON.stringify(e))})(n,t),st(e,n,s)}})),((t,e)=>{Object.keys(t).forEach((t=>e(t)))})(e,u),n.appendChild(r),n.appendChild(s),(()=>{const t=document.querySelector(".bottomDiv"),e=document.createElement("form");e.classList.add("hidden"),e.classList.add("projectForm"),e.onsubmit=function(t){t.preventDefault()};const n=document.createElement("input");n.classList.add("newProjInput");const r=document.createElement("button");r.classList.add("newProjBtn"),r.innerHTML="Add";const a=document.createElement("button");a.classList.add("cancel"),a.innerHTML="Cancel",e.appendChild(n),e.appendChild(r),e.appendChild(a),t.appendChild(e)})()}(ut),localStorage.setItem("projects",JSON.stringify(ut))})();