"use strict";(self.webpackChunksomesh_portfolio=self.webpackChunksomesh_portfolio||[]).push([[717],{717:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var r=n(294);const a={_origin:"https://api.emailjs.com"};class o{constructor(e){this.status=e.status,this.text=e.responseText}}const s=(e,t,n,r)=>{const s=r||a._userID,i=(e=>{let t;if(t="string"==typeof e?document.querySelector(e):e,!t||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t})(n);((e,t,n)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"})(s,e,t);const l=new FormData(i);return l.append("lib_version","3.2.0"),l.append("service_id",e),l.append("template_id",t),l.append("user_id",s),((e,t,n={})=>new Promise(((r,s)=>{const i=new XMLHttpRequest;i.addEventListener("load",(({target:e})=>{const t=new o(e);200===t.status||"OK"===t.text?r(t):s(t)})),i.addEventListener("error",(({target:e})=>{s(new o(e))})),i.open("POST",a._origin+e,!0),Object.keys(n).forEach((e=>{i.setRequestHeader(e,n[e])})),i.send(t)})))("/api/v1.0/email/send-form",l)};function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],s=!0,i=!1;try{for(n=n.call(e);!(s=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);s=!0);}catch(e){i=!0,a=e}finally{try{s||null==n.return||n.return()}finally{if(i)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const c=function(){var e=i((0,r.useState)(""),2),t=e[0],n=e[1],a=i((0,r.useState)(""),2),o=a[0],l=a[1],c=i((0,r.useState)(""),2),u=c[0],m=c[1],d=i((0,r.useState)(""),2),h=d[0],p=d[1],f=i((0,r.useState)(window.innerWidth),2),v=f[0],g=f[1];function y(){g(window.innerWidth)}(0,r.useEffect)((function(){return window.addEventListener("resize",y),function(){g({})}}),[]);var E=v<=540;return r.createElement("section",{className:"contact",id:"contact",style:{position:E?"static":"absolute"}},r.createElement("div",{className:"contactHeading"},r.createElement("span",{className:"contactText"},r.createElement("span",{className:"highlightedText"},"4. "),"Contact")),r.createElement("div",{className:"contactContainer"},r.createElement("span",{className:"getInTouch"},"Get In Touch"),r.createElement("form",{className:"contactForm",onSubmit:function(e){e.preventDefault(),s("service_1r5l82b","template_34eu7uh",e.target,"user_UtYK3ubdbjAQvOlOHMTEo").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),n(""),l(""),m(""),p("")}},r.createElement("input",{name:"name",value:t,type:"text",placeholder:"NAME",onChange:function(e){return n(e.target.value)}}),r.createElement("input",{name:"email",value:o,type:"text",placeholder:"E-MAIL",onChange:function(e){return l(e.target.value)},required:!0}),r.createElement("input",{name:"subject",value:u,type:"text",placeholder:"SUBJECT",onChange:function(e){return m(e.target.value)}}),r.createElement("textarea",{name:"message",value:h,type:"text",placeholder:"MESSAGE",onChange:function(e){return p(e.target.value)},required:!0}),r.createElement("button",{type:"submit",className:"contactBtn"},"SEND"))),r.createElement("div",{className:"footer"},r.createElement("h3",null,"Created by Somesh Khandelwal"),r.createElement("h3",null,"@someshvk 2021")))}}}]);