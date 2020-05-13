!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n),t.d(n,"nextSlide",(function(){return C})),t.d(n,"prevSlide",(function(){return I}));var r=document.getElementById("frame"),o=function(e,n,t){e.style.animationName=n;var r=function n(){e.removeEventListener("webkitAnimationEnd",n),e.removeEventListener("animationend",n),e.removeEventListener("oanimationend",n),t&&t()};e.addEventListener("webkitAnimationEnd",r),e.addEventListener("animationend",r),e.addEventListener("oanimationend",r)},i=function(){o(r,"frame-exit",(function(){return o(r,"frame-enter")}))},a=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.05,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.01;return Math.abs(n-e)<r?n:e*(1-t)+n*t},c=function(e,n){var t=n.position.z;e<t?e-=t:e+=t;var r=n.fov*Math.PI/180;return 2*Math.tan(r/2)*Math.abs(e)};function d(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return t}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return u(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return u(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var l=[[171,4,242],[124,7,242],[81,7,242],[34,216,183],[214,242,4]],f=[[[200,200,800,l[0]],[900,900,800,l[1]],[1600,400,800,l[2]]],[[200,800,800,l[1]],[900,300,800,l[2]],[1600,200,800,l[3]]],[[200,200,800,l[2]],[900,300,800,l[3]],[1600,400,800,l[4]]]],s=0,v=0,m=0,p=document.getElementById("canvas"),y=(document.getElementById("title"),p.getContext("2d")),h=function(e,n,t){var r=e.x,o=e.y,i=y.createRadialGradient(r,o,0,r,o,n);i.addColorStop(0,t),i.addColorStop(1,"rgba(0,0,0,0)"),y.fillStyle=i,y.fillRect(r-n,o-n,2*n,2*n)},E=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;e<0&&(e=2);var t=f[e];t.forEach((function(e){var t=d(e,4),r=t[0],o=t[1],i=t[2],a=d(t[3],3),c=a[0],u=a[1],l=a[2];h({x:r,y:o},i,"rgba(".concat(c,",").concat(u,",").concat(l,",").concat(n,")"))}))};!function e(){p.setAttribute("width",window.innerWidth),p.setAttribute("height",window.innerHeight),v=a(v,0),s=a(s,1),E(m-1,v),E(m,s),requestAnimationFrame((function(){return e()}))}();var b=function(e){m=e,s=0,v=1},w=new THREE.Raycaster,g=new THREE.OBJLoader,T=[],R=[0,0],H=new THREE.Scene,S=new THREE.PerspectiveCamera(30,window.innerWidth/window.innerHeight),M=new THREE.WebGLRenderer({antialias:!0,alpha:!0});M.setSize(window.innerWidth,window.innerHeight),M.render(H,S),document.body.append(M.domElement),g.load("models/cube.obj",(function(e){var n=e.children,t=function(e,n){return c(e,n)*n.aspect}(-10,S)/2,r=-c(-10,S)/2;x(n[0],C,t-1.2,r+1,90,0,0),x(n[0],I,t-2.3,r+1,90,180,0),j()}));var x=function(e,n,t,r,o,i,a){var c=e.clone();c.scale.setScalar(.3),c.rotation.set(THREE.Math.degToRad(o),THREE.Math.degToRad(i),THREE.Math.degToRad(a));var d=new THREE.Mesh(new THREE.BoxGeometry(.7,.7,.7),new THREE.MeshBasicMaterial({transparent:!0,opacity:0}));d.position.x=t,d.position.y=r,d.position.z=-10,d.add(c),d.callbackFn=n,T.push(d),H.add(d)},j=function e(){T.forEach((function(e,n){R[n]=a(R[n],0,.07),e.rotation.set(THREE.Math.degToRad(R[n]),0,0)})),M.render(H,S),requestAnimationFrame(e)},A=function(e){0===e?R[0]=360:R[1]=-360};window.addEventListener("click",(function(){var e=new THREE.Vector2;e.x=event.clientX/window.innerWidth*2-1,e.y=-event.clientY/window.innerHeight*2+1,w.setFromCamera(e,S);var n=w.intersectObjects(H.children);n.length&&n[0].object.callbackFn()}));var O=document.getElementById("title"),L=0,C=function(){L>=2?L=0:L++,O.innerHTML="";var e=document.createTextNode("slide".concat(L+1));O.appendChild(e),i(),b(L),A(0)},I=function(){0==L?L=2:L--,O.innerHTML="";var e=document.createTextNode("slide".concat(L+1));O.appendChild(e),i(),b(L),A(1)}}]);