import{g as R}from"./index-a4fa79e7.js";import{p as X,g as Y,w as F}from"./wrap-6f971469.js";import{a as W}from"./Fade-8017fcf1.js";const G="/static/web_pic-76c6af53.jpeg";var g={},$={get exports(){return g},set exports(f){g=f}};(function(f,s){function c(r){return r&&r.__esModule?r:{default:r}}function b(r,e){var n={};for(var o in r)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o]);return n}function l(){return m||(m=(0,d.animation)(p))}function i(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:d.defaults,e=r.children,n=(r.out,r.timeout),o=r.duration,u=o===void 0?d.defaults.duration:o,v=r.delay,k=v===void 0?d.defaults.delay:v,y=r.count,h=y===void 0?d.defaults.count:y,j=r.forever,x=b(r,["children","out","timeout","duration","delay","count","forever"]),E={make:l,duration:n===void 0?u:n,delay:k,forever:j,count:h,style:{animationFillMode:"both"}};return(0,_.default)(x,E,!1,e,!0)}Object.defineProperty(s,"__esModule",{value:!0});var t=X,a=F,_=c(a),d=Y,w={duration:t.number,timeout:t.number,delay:t.number,count:t.number,forever:t.bool},p=`
  from, 11.1%, to {
    transform: none;
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
}
`,m=!1;i.propTypes=w,s.default=i,f.exports=s.default})($,g);const H=R(g);var O={},C={get exports(){return O},set exports(f){O=f}};(function(f,s){function c(e){return e&&e.__esModule?e:{default:e}}function b(e,n){var o={};for(var u in e)n.indexOf(u)>=0||Object.prototype.hasOwnProperty.call(e,u)&&(o[u]=e[u]);return o}function l(e){function n(N){return N?T?{duration:j,delay:x,count:E,forever:J,className:T,style:{}}:D:P?{duration:u===void 0?v:u,delay:k,count:y,forever:h,className:P,style:{}}:M}var o=e.children,u=e.timeout,v=e.duration,k=e.delay,y=e.count,h=e.forever,j=e.durationOut,x=e.delayOut,E=e.countOut,J=e.foreverOut,P=e.effect,T=e.effectOut,M=e.inEffect,D=e.outEffect,q=b(e,["children","timeout","duration","delay","count","forever","durationOut","delayOut","countOut","foreverOut","effect","effectOut","inEffect","outEffect"]);return(0,d.default)(q,n(!1),n(!0),o)}Object.defineProperty(s,"__esModule",{value:!0});var i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var u in o)Object.prototype.hasOwnProperty.call(o,u)&&(e[u]=o[u])}return e},t=X,a=Y,_=F,d=c(_),w=W,p=c(w),m={in:t.object,out:(0,t.oneOfType)([t.object,(0,t.oneOf)([!1])]),effect:t.string,effectOut:t.string,duration:t.number,timeout:t.number,delay:t.number,count:t.number,forever:t.bool,durationOut:t.number,delayOut:t.number,countOut:t.number,foreverOut:t.bool},r=i({},a.defaults,{durationOut:a.defaults.duration,delayOut:a.defaults.delay,countOut:a.defaults.count,foreverOut:a.defaults.forever,inEffect:(0,p.default)(a.defaults),outEffect:(0,p.default)(i({out:!0},a.defaults))});l.propTypes=m,l.defaultProps=r,s.default=l,f.exports=s.default})(C,O);const I=R(O);export{H as J,I as R,G as a};
