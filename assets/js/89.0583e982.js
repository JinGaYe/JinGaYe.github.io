(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{575:function(t,e,r){var n;n=function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.i=function(t){return t},r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s=7)}([function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(4),i=r.n(n);i.a.install=function(t){t.component("share",i.a)},"undefined"!=typeof window&&window.vue&&(window.Share=i.a),e.default=i.a},function(t,e){var r;!function(){function t(t){this.mode=l.MODE_8BIT_BYTE,this.data=t,this.parsedData=[];for(var e=0,r=this.data.length;r>e;e++){var n=[],i=this.data.charCodeAt(e);i>65536?(n[0]=240|(1835008&i)>>>18,n[1]=128|(258048&i)>>>12,n[2]=128|(4032&i)>>>6,n[3]=128|63&i):i>2048?(n[0]=224|(61440&i)>>>12,n[1]=128|(4032&i)>>>6,n[2]=128|63&i):i>128?(n[0]=192|(1984&i)>>>6,n[1]=128|63&i):n[0]=i,this.parsedData.push(n)}this.parsedData=Array.prototype.concat.apply([],this.parsedData),this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function e(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}function n(t,e){if(null==t.length)throw new Error(t.length+"/"+e);for(var r=0;r<t.length&&0==t[r];)r++;this.num=new Array(t.length-r+e);for(var n=0;n<t.length-r;n++)this.num[n]=t[n+r]}function i(t,e){this.totalCount=t,this.dataCount=e}function o(){this.buffer=[],this.length=0}function a(){var t=!1,e=navigator.userAgent;if(/android/i.test(e)){t=!0;var r=e.toString().match(/android ([0-9]\.[0-9])/i);r&&r[1]&&(t=parseFloat(r[1]))}return t}function s(t,e){for(var r=1,n=function(t){var e=encodeURI(t).toString().replace(/\%[0-9a-fA-F]{2}/g,"a");return e.length+(e.length!=t?3:0)}(t),i=0,o=p.length;o>=i;i++){var a=0;switch(e){case u.L:a=p[i][0];break;case u.M:a=p[i][1];break;case u.Q:a=p[i][2];break;case u.H:a=p[i][3]}if(a>=n)break;r++}if(r>p.length)throw new Error("Too long data");return r}t.prototype={getLength:function(t){return this.parsedData.length},write:function(t){for(var e=0,r=this.parsedData.length;r>e;e++)t.put(this.parsedData[e],8)}},e.prototype={addData:function(e){var r=new t(e);this.dataList.push(r),this.dataCache=null},isDark:function(t,e){if(0>t||this.moduleCount<=t||0>e||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,r){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++){this.modules[n]=new Array(this.moduleCount);for(var i=0;i<this.moduleCount;i++)this.modules[n][i]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,r),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=e.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,r)},setupPositionProbePattern:function(t,e){for(var r=-1;7>=r;r++)if(!(-1>=t+r||this.moduleCount<=t+r))for(var n=-1;7>=n;n++)-1>=e+n||this.moduleCount<=e+n||(this.modules[t+r][e+n]=r>=0&&6>=r&&(0==n||6==n)||n>=0&&6>=n&&(0==r||6==r)||r>=2&&4>=r&&n>=2&&4>=n)},getBestMaskPattern:function(){for(var t=0,e=0,r=0;8>r;r++){this.makeImpl(!0,r);var n=c.getLostPoint(this);(0==r||t>n)&&(t=n,e=r)}return e},createMovieClip:function(t,e,r){var n=t.createEmptyMovieClip(e,r);this.make();for(var i=0;i<this.modules.length;i++)for(var o=1*i,a=0;a<this.modules[i].length;a++){var s=1*a;this.modules[i][a]&&(n.beginFill(0,100),n.moveTo(s,o),n.lineTo(s+1,o),n.lineTo(s+1,o+1),n.lineTo(s,o+1),n.endFill())}return n},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},setupPositionAdjustPattern:function(){for(var t=c.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var r=0;r<t.length;r++){var n=t[e],i=t[r];if(null==this.modules[n][i])for(var o=-2;2>=o;o++)for(var a=-2;2>=a;a++)this.modules[n+o][i+a]=-2==o||2==o||-2==a||2==a||0==o&&0==a}},setupTypeNumber:function(t){for(var e=c.getBCHTypeNumber(this.typeNumber),r=0;18>r;r++){var n=!t&&1==(e>>r&1);this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=n}for(r=0;18>r;r++)n=!t&&1==(e>>r&1),this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=n},setupTypeInfo:function(t,e){for(var r=this.errorCorrectLevel<<3|e,n=c.getBCHTypeInfo(r),i=0;15>i;i++){var o=!t&&1==(n>>i&1);6>i?this.modules[i][8]=o:8>i?this.modules[i+1][8]=o:this.modules[this.moduleCount-15+i][8]=o}for(i=0;15>i;i++)o=!t&&1==(n>>i&1),8>i?this.modules[8][this.moduleCount-i-1]=o:9>i?this.modules[8][15-i-1+1]=o:this.modules[8][15-i-1]=o;this.modules[this.moduleCount-8][8]=!t},mapData:function(t,e){for(var r=-1,n=this.moduleCount-1,i=7,o=0,a=this.moduleCount-1;a>0;a-=2)for(6==a&&a--;;){for(var s=0;2>s;s++)if(null==this.modules[n][a-s]){var l=!1;o<t.length&&(l=1==(t[o]>>>i&1)),c.getMask(e,n,a-s)&&(l=!l),this.modules[n][a-s]=l,-1==--i&&(o++,i=7)}if(0>(n+=r)||this.moduleCount<=n){n-=r,r=-r;break}}}},e.PAD0=236,e.PAD1=17,e.createData=function(t,r,n){for(var a=i.getRSBlocks(t,r),s=new o,l=0;l<n.length;l++){var u=n[l];s.put(u.mode,4),s.put(u.getLength(),c.getLengthInBits(u.mode,t)),u.write(s)}var h=0;for(l=0;l<a.length;l++)h+=a[l].dataCount;if(s.getLengthInBits()>8*h)throw new Error("code length overflow. ("+s.getLengthInBits()+">"+8*h+")");for(s.getLengthInBits()+4<=8*h&&s.put(0,4);s.getLengthInBits()%8!=0;)s.putBit(!1);for(;!(s.getLengthInBits()>=8*h||(s.put(e.PAD0,8),s.getLengthInBits()>=8*h));)s.put(e.PAD1,8);return e.createBytes(s,a)},e.createBytes=function(t,e){for(var r=0,i=0,o=0,a=new Array(e.length),s=new Array(e.length),l=0;l<e.length;l++){var u=e[l].dataCount,h=e[l].totalCount-u;i=Math.max(i,u),o=Math.max(o,h),a[l]=new Array(u);for(var f=0;f<a[l].length;f++)a[l][f]=255&t.buffer[f+r];r+=u;var d=c.getErrorCorrectPolynomial(h),p=new n(a[l],d.getLength()-1).mod(d);for(s[l]=new Array(d.getLength()-1),f=0;f<s[l].length;f++){var g=f+p.getLength()-s[l].length;s[l][f]=g>=0?p.get(g):0}}var m=0;for(f=0;f<e.length;f++)m+=e[f].totalCount;var v=new Array(m),w=0;for(f=0;i>f;f++)for(l=0;l<e.length;l++)f<a[l].length&&(v[w++]=a[l][f]);for(f=0;o>f;f++)for(l=0;l<e.length;l++)f<s[l].length&&(v[w++]=s[l][f]);return v};for(var l={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},u={L:1,M:0,Q:3,H:2},h={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},c={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;c.getBCHDigit(e)-c.getBCHDigit(c.G15)>=0;)e^=c.G15<<c.getBCHDigit(e)-c.getBCHDigit(c.G15);return(t<<10|e)^c.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;c.getBCHDigit(e)-c.getBCHDigit(c.G18)>=0;)e^=c.G18<<c.getBCHDigit(e)-c.getBCHDigit(c.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return c.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,r){switch(t){case h.PATTERN000:return(e+r)%2==0;case h.PATTERN001:return e%2==0;case h.PATTERN010:return r%3==0;case h.PATTERN011:return(e+r)%3==0;case h.PATTERN100:return(Math.floor(e/2)+Math.floor(r/3))%2==0;case h.PATTERN101:return e*r%2+e*r%3==0;case h.PATTERN110:return(e*r%2+e*r%3)%2==0;case h.PATTERN111:return(e*r%3+(e+r)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new n([1],0),r=0;t>r;r++)e=e.multiply(new n([1,f.gexp(r)],0));return e},getLengthInBits:function(t,e){if(e>=1&&10>e)switch(t){case l.MODE_NUMBER:return 10;case l.MODE_ALPHA_NUM:return 9;case l.MODE_8BIT_BYTE:case l.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(27>e)switch(t){case l.MODE_NUMBER:return 12;case l.MODE_ALPHA_NUM:return 11;case l.MODE_8BIT_BYTE:return 16;case l.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(41>e))throw new Error("type:"+e);switch(t){case l.MODE_NUMBER:return 14;case l.MODE_ALPHA_NUM:return 13;case l.MODE_8BIT_BYTE:return 16;case l.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),r=0,n=0;e>n;n++)for(var i=0;e>i;i++){for(var o=0,a=t.isDark(n,i),s=-1;1>=s;s++)if(!(0>n+s||n+s>=e))for(var l=-1;1>=l;l++)0>i+l||i+l>=e||(0!=s||0!=l)&&a==t.isDark(n+s,i+l)&&o++;o>5&&(r+=3+o-5)}for(n=0;e-1>n;n++)for(i=0;e-1>i;i++){var u=0;t.isDark(n,i)&&u++,t.isDark(n+1,i)&&u++,t.isDark(n,i+1)&&u++,t.isDark(n+1,i+1)&&u++,(0==u||4==u)&&(r+=3)}for(n=0;e>n;n++)for(i=0;e-6>i;i++)t.isDark(n,i)&&!t.isDark(n,i+1)&&t.isDark(n,i+2)&&t.isDark(n,i+3)&&t.isDark(n,i+4)&&!t.isDark(n,i+5)&&t.isDark(n,i+6)&&(r+=40);for(i=0;e>i;i++)for(n=0;e-6>n;n++)t.isDark(n,i)&&!t.isDark(n+1,i)&&t.isDark(n+2,i)&&t.isDark(n+3,i)&&t.isDark(n+4,i)&&!t.isDark(n+5,i)&&t.isDark(n+6,i)&&(r+=40);var h=0;for(i=0;e>i;i++)for(n=0;e>n;n++)t.isDark(n,i)&&h++;return r+Math.abs(100*h/e/e-50)/5*10}},f={glog:function(t){if(1>t)throw new Error("glog("+t+")");return f.LOG_TABLE[t]},gexp:function(t){for(;0>t;)t+=255;for(;t>=256;)t-=255;return f.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},d=0;8>d;d++)f.EXP_TABLE[d]=1<<d;for(d=8;256>d;d++)f.EXP_TABLE[d]=f.EXP_TABLE[d-4]^f.EXP_TABLE[d-5]^f.EXP_TABLE[d-6]^f.EXP_TABLE[d-8];for(d=0;255>d;d++)f.LOG_TABLE[f.EXP_TABLE[d]]=d;n.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),r=0;r<this.getLength();r++)for(var i=0;i<t.getLength();i++)e[r+i]^=f.gexp(f.glog(this.get(r))+f.glog(t.get(i)));return new n(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=f.glog(this.get(0))-f.glog(t.get(0)),r=new Array(this.getLength()),i=0;i<this.getLength();i++)r[i]=this.get(i);for(i=0;i<t.getLength();i++)r[i]^=f.gexp(f.glog(t.get(i))+e);return new n(r,0).mod(t)}},i.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],i.getRSBlocks=function(t,e){var r=i.getRsBlockTable(t,e);if(null==r)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var n=r.length/3,o=[],a=0;n>a;a++)for(var s=r[3*a+0],l=r[3*a+1],u=r[3*a+2],h=0;s>h;h++)o.push(new i(l,u));return o},i.getRsBlockTable=function(t,e){switch(e){case u.L:return i.RS_BLOCK_TABLE[4*(t-1)+0];case u.M:return i.RS_BLOCK_TABLE[4*(t-1)+1];case u.Q:return i.RS_BLOCK_TABLE[4*(t-1)+2];case u.H:return i.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},o.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var r=0;e>r;r++)this.putBit(1==(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var p=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]],g=function(){var t=function(t,e){this._el=t,this._htOption=e};return t.prototype.draw=function(t){function e(t,e){var r=document.createElementNS("http://www.w3.org/2000/svg",t);for(var n in e)e.hasOwnProperty(n)&&r.setAttribute(n,e[n]);return r}var r=this._htOption,n=this._el,i=t.getModuleCount();Math.floor(r.width/i),Math.floor(r.height/i),this.clear();var o=e("svg",{viewBox:"0 0 "+String(i)+" "+String(i),width:"100%",height:"100%",fill:r.colorLight});o.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),n.appendChild(o),o.appendChild(e("rect",{fill:r.colorLight,width:"100%",height:"100%"})),o.appendChild(e("rect",{fill:r.colorDark,width:"1",height:"1",id:"template"}));for(var a=0;i>a;a++)for(var s=0;i>s;s++)if(t.isDark(a,s)){var l=e("use",{x:String(s),y:String(a)});l.setAttributeNS("http://www.w3.org/1999/xlink","href","#template"),o.appendChild(l)}},t.prototype.clear=function(){for(;this._el.hasChildNodes();)this._el.removeChild(this._el.lastChild)},t}(),m="svg"===document.documentElement.tagName.toLowerCase()?g:"undefined"!=typeof CanvasRenderingContext2D?function(){function t(){this._elImage.src=this._elCanvas.toDataURL("image/png"),this._elImage.style.display="block",this._elCanvas.style.display="none"}function e(t,e){var r=this;if(r._fFail=e,r._fSuccess=t,null===r._bSupportDataURI){var n=document.createElement("img"),i=function(){r._bSupportDataURI=!1,r._fFail&&r._fFail.call(r)};return n.onabort=i,n.onerror=i,n.onload=function(){r._bSupportDataURI=!0,r._fSuccess&&r._fSuccess.call(r)},void(n.src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==")}!0===r._bSupportDataURI&&r._fSuccess?r._fSuccess.call(r):!1===r._bSupportDataURI&&r._fFail&&r._fFail.call(r)}if(this._android&&this._android<=2.1){var r=1/window.devicePixelRatio,n=CanvasRenderingContext2D.prototype.drawImage;CanvasRenderingContext2D.prototype.drawImage=function(t,e,i,o,a,s,l,u,h){if("nodeName"in t&&/img/i.test(t.nodeName))for(var c=arguments.length-1;c>=1;c--)arguments[c]=arguments[c]*r;else void 0===u&&(arguments[1]*=r,arguments[2]*=r,arguments[3]*=r,arguments[4]*=r);n.apply(this,arguments)}}var i=function(t,e){this._bIsPainted=!1,this._android=a(),this._htOption=e,this._elCanvas=document.createElement("canvas"),this._elCanvas.width=e.width,this._elCanvas.height=e.height,t.appendChild(this._elCanvas),this._el=t,this._oContext=this._elCanvas.getContext("2d"),this._bIsPainted=!1,this._elImage=document.createElement("img"),this._elImage.alt="Scan me!",this._elImage.style.display="none",this._el.appendChild(this._elImage),this._bSupportDataURI=null};return i.prototype.draw=function(t){var e=this._elImage,r=this._oContext,n=this._htOption,i=t.getModuleCount(),o=n.width/i,a=n.height/i,s=Math.round(o),l=Math.round(a);e.style.display="none",this.clear();for(var u=0;i>u;u++)for(var h=0;i>h;h++){var c=t.isDark(u,h),f=h*o,d=u*a;r.strokeStyle=c?n.colorDark:n.colorLight,r.lineWidth=1,r.fillStyle=c?n.colorDark:n.colorLight,r.fillRect(f,d,o,a),r.strokeRect(Math.floor(f)+.5,Math.floor(d)+.5,s,l),r.strokeRect(Math.ceil(f)-.5,Math.ceil(d)-.5,s,l)}this._bIsPainted=!0},i.prototype.makeImage=function(){this._bIsPainted&&e.call(this,t)},i.prototype.isPainted=function(){return this._bIsPainted},i.prototype.clear=function(){this._oContext.clearRect(0,0,this._elCanvas.width,this._elCanvas.height),this._bIsPainted=!1},i.prototype.round=function(t){return t?Math.floor(1e3*t)/1e3:t},i}():function(){var t=function(t,e){this._el=t,this._htOption=e};return t.prototype.draw=function(t){for(var e=this._htOption,r=this._el,n=t.getModuleCount(),i=Math.floor(e.width/n),o=Math.floor(e.height/n),a=['<table style="border:0;border-collapse:collapse;">'],s=0;n>s;s++){a.push("<tr>");for(var l=0;n>l;l++)a.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:'+i+"px;height:"+o+"px;background-color:"+(t.isDark(s,l)?e.colorDark:e.colorLight)+';"></td>');a.push("</tr>")}a.push("</table>"),r.innerHTML=a.join("");var u=r.childNodes[0],h=(e.width-u.offsetWidth)/2,c=(e.height-u.offsetHeight)/2;h>0&&c>0&&(u.style.margin=c+"px "+h+"px")},t.prototype.clear=function(){this._el.innerHTML=""},t}();(r=function(t,e){if(this._htOption={width:256,height:256,typeNumber:4,colorDark:"#000000",colorLight:"#ffffff",correctLevel:u.H},"string"==typeof e&&(e={text:e}),e)for(var r in e)this._htOption[r]=e[r];"string"==typeof t&&(t=document.getElementById(t)),this._htOption.useSVG&&(m=g),this._android=a(),this._el=t,this._oQRCode=null,this._oDrawing=new m(this._el,this._htOption),this._htOption.text&&this.makeCode(this._htOption.text)}).prototype.makeCode=function(t){this._oQRCode=new e(s(t,this._htOption.correctLevel),this._htOption.correctLevel),this._oQRCode.addData(t),this._oQRCode.make(),this._el.title=t,this._oDrawing.draw(this._oQRCode),this.makeImage()},r.prototype.makeImage=function(){"function"==typeof this._oDrawing.makeImage&&(!this._android||this._android>=3)&&this._oDrawing.makeImage()},r.prototype.clear=function(){this._oDrawing.clear()},r.CorrectLevel=u}(),function(t,e,n){function i(t,e){var n=function(){var t=arguments;if(d)return d.apply(null,t);var e={};return c(t,(function(t){c(t,(function(t,r){e[r]=t}))})),t[0]=e}({},E,e||{},function(t){if(t.dataset)return t.dataset;var e={};return t.hasAttributes()?(c(t.attributes,(function(t){var r=t.name;return 0!==r.indexOf("data-")||(r=r.replace(/^data-/i,"").replace(/-(\w)/g,(function(t,e){return e.toUpperCase()})),void(e[r]=t.value))})),e):{}}(t));n.imageSelector&&(n.image=a(n.imageSelector).map((function(t){return t.src})).join("||")),function(t,e){if(e&&"string"==typeof e){var r=(t.className+" "+e).split(/\s+/),n=" ";c(r,(function(t){n.indexOf(" "+t+" ")<0&&(n+=t+" ")})),t.className=n.slice(1,-1)}}(t,"share-component social-share"),function(t,e){var r=function(t){t.mobileSites.length||(t.mobileSites=t.sites);var e=(g?t.mobileSites:t.sites).slice(0),r=t.disabled;return"string"==typeof e&&(e=e.split(/\s*,\s*/)),"string"==typeof r&&(r=r.split(/\s*,\s*/)),p&&r.push("wechat"),r.length&&c(r,(function(t){e.splice(function(t,e,r){var n;if(e){if(f)return f.call(e,t,r);for(n=e.length,r=r?0>r?Math.max(0,n+r):r:0;n>r;r++)if(r in e&&e[r]===t)return r}return-1}(t,e),1)})),e}(e),n="prepend"==e.mode;c(n?r.reverse():r,(function(r){var i=o(r,e),a=e.initialized?u(t,"icon-"+r):h('<a class="social-share-icon icon-'+r+'"></a>');return!a.length||(a[0].href=i,"wechat"===r?a[0].tabindex=-1:a[0].target="_blank",void(e.initialized||(n?t.insertBefore(a[0],t.firstChild):t.appendChild(a[0]))))}))}(t,n),function(t,e){var n=u(t,"icon-wechat","a");if(0===n.length)return!1;var i=h('<div class="wechat-qrcode"><h4>'+e.wechatQrcodeTitle+'</h4><div class="qrcode"></div><div class="help">'+e.wechatQrcodeHelper+"</div></div>"),o=u(i[0],"qrcode","div");n[0].appendChild(i[0]),new r(o[0],{text:e.url,width:e.wechatQrcodeSize,height:e.wechatQrcodeSize})}(t,n),t.initialized=!0}function o(t,e){return e.summary=e.description,C[t].replace(/\{\{(\w)(\w*)\}\}/g,(function(r,i,o){var a=t+i+o.toLowerCase();return o=(i+o).toLowerCase(),encodeURIComponent((e[a]===n?e[o]:e[a])||"")}))}function a(r){return(e.querySelectorAll||t.jQuery||t.Zepto||s).call(e,r)}function s(t){var r=[];return c(t.split(/\s*,\s*/),(function(n){var i=n.match(/([#.])(\w+)/);if(null===i)throw Error("Supports only simple single #ID or .CLASS selector.");if(i[1]){var o=e.getElementById(i[2]);o&&r.push(o)}r=r.concat(u(t))})),r}function l(t){return(e.getElementsByName(t)[0]||0).content}function u(t,e,r){if(t.getElementsByClassName)return t.getElementsByClassName(e);var n=[],i=t.getElementsByTagName(r||"*");return e=" "+e+" ",c(i,(function(t){(" "+(t.className||"")+" ").indexOf(e)>=0&&n.push(t)})),n}function h(t){var r=e.createElement("div");return r.innerHTML=t,r.childNodes}function c(t,e){var r=t.length;if(r===n){for(var i in t)if(t.hasOwnProperty(i)&&!1===e.call(t[i],t[i],i))break}else for(var o=0;r>o&&!1!==e.call(t[o],t[o],o);o++);}var f=Array.prototype.indexOf,d=Object.assign,p=/MicroMessenger/i.test(navigator.userAgent),g=e.documentElement.clientWidth<=768,m=(e.images[0]||0).src||"",v=l("site")||l("Site")||e.title,w=l("title")||l("Title")||e.title,_=l("description")||l("Description")||"",E={url:location.href,origin:location.origin,source:v,title:w,description:_,image:m,imageSelector:n,weiboKey:"",wechatQrcodeTitle:"微信扫一扫：分享",wechatQrcodeHelper:"<p>微信里点“发现”，扫一下</p><p>二维码便可将本文分享至朋友圈。</p>",wechatQrcodeSize:100,sites:["weibo","qq","wechat","tencent","douban","qzone","linkedin","diandian","facebook","twitter","google"],mobileSites:[],disabled:[],initialized:!1},C={qzone:"http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={{URL}}&title={{TITLE}}&desc={{DESCRIPTION}}&summary={{SUMMARY}}&site={{SOURCE}}",qq:"http://connect.qq.com/widget/shareqq/index.html?url={{URL}}&title={{TITLE}}&source={{SOURCE}}&desc={{DESCRIPTION}}&pics={{IMAGE}}",tencent:"http://share.v.t.qq.com/index.php?c=share&a=index&title={{TITLE}}&url={{URL}}&pic={{IMAGE}}",weibo:"http://service.weibo.com/share/share.php?url={{URL}}&title={{TITLE}}&pic={{IMAGE}}&appkey={{WEIBOKEY}}",wechat:"javascript:",douban:"http://shuo.douban.com/!service/share?href={{URL}}&name={{TITLE}}&text={{DESCRIPTION}}&image={{IMAGE}}&starid=0&aid=0&style=11",diandian:"http://www.diandian.com/share?lo={{URL}}&ti={{TITLE}}&type=link",linkedin:"http://www.linkedin.com/shareArticle?mini=true&ro=true&title={{TITLE}}&url={{URL}}&summary={{SUMMARY}}&source={{SOURCE}}&armin=armin",facebook:"https://www.facebook.com/sharer/sharer.php?u={{URL}}",twitter:"https://twitter.com/intent/tweet?text={{TITLE}}&url={{URL}}&via={{ORIGIN}}",google:"https://plus.google.com/share?url={{URL}}"};t.socialShare=function(t,e){(t="string"==typeof t?a(t):t).length===n&&(t=[t]),c(t,(function(t){t.initialized||i(t,e)}))},function(r){var n="addEventListener",i=e[n]?"":"on";~e.readyState.indexOf("m")?r():"load DOMContentLoaded readystatechange".replace(/\w+/g,(function(o,a){(a?e:t)[i?"attachEvent":n](i+o,(function(){r&&(6>a||~e.readyState.indexOf("m"))&&(r(),r=0)}),!1)}))}((function(){socialShare(".social-share, .share-component")}))}(window,document)},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(1);r.n(n),e.default={name:"share",props:{config:{type:Object}},mounted:function(){window.socialShare(this.$el,this.config)}}},function(t,e){},function(t,e,r){r(3);var n=r(5)(r(2),r(6),null,null);n.options.__file="/Users/sinchang/Desktop/personal/vue-social-share/src/share.vue",n.esModule&&Object.keys(n.esModule).some((function(t){return"default"!==t&&"__esModule"!==t}))&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] share.vue: functional components are not supported with templates, they should use render functions."),t.exports=n.exports},function(t,e){t.exports=function(t,e,r,n){var i,o=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(i=t,o=t.default);var s="function"==typeof o?o.options:o;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),r&&(s._scopeId=r),n){var l=Object.create(s.computed||null);Object.keys(n).forEach((function(t){var e=n[t];l[t]=function(){return e}})),s.computed=l}return{esModule:i,exports:o,options:s}}},function(t,e,r){t.exports={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"social-share"})},staticRenderFns:[]},t.exports.render._withStripped=!0},function(t,e,r){t.exports=r(0)}])},t.exports=n()}}]);