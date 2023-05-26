"use strict";(self.webpackChunkflojoy_doc=self.webpackChunkflojoy_doc||[]).push([[7001],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,y=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(y,i(i({ref:t},s),{},{components:r})):n.createElement(y,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},22662:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={},i=void 0,l={unversionedId:"nodes/instruments/keithley/iv_curve/appendix/hardware",id:"nodes/instruments/keithley/iv_curve/appendix/hardware",title:"hardware",description:"HARDWARE :",source:"@site/docs/nodes/instruments/keithley/iv_curve/appendix/hardware.md",sourceDirName:"nodes/instruments/keithley/iv_curve/appendix",slug:"/nodes/instruments/keithley/iv_curve/appendix/hardware",permalink:"/nodes/instruments/keithley/iv_curve/appendix/hardware",draft:!1,tags:[],version:"current",frontMatter:{}},c={},u=[{value:"HARDWARE :",id:"hardware-",level:2}],s={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"hardware-"},"HARDWARE :"),(0,o.kt)("p",null,"In order to record an IV curve from an electric device (LED, Solar cells, etc,..) with Flojoy, you'll need a setup with :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A Source meter Keithley 2400, which is able to send voltages to the electronic device and record current from it. It has its own nodes in the Flojoy application called KEITHLEY2400."),(0,o.kt)("li",{parentName:"ul"},"A source of light that you'll use as a fake sun for calibrating the output of your solar cells. (You can also use the real sun by doing the experiment outside)"),(0,o.kt)("li",{parentName:"ul"},"A computer which is connected to the Keithley 2400 with a serial communication cable. ")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/dhopxs1y3/image/upload/v1682000222/flojoy-docs/Keithley2400/89A7FE5C-D466-424D-9A0A-FC99A38135A8_4_5005_c_szerj8.jpg",alt:"Keithley 2400 setup"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Setup with a computer, a Keithley2400 sourcemeter, a solar cell for testing and artificial sun*")))}p.isMDXComponent=!0}}]);