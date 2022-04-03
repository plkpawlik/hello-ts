var L=Object.defineProperty;var P=(n,e,a)=>e in n?L(n,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[e]=a;var f=(n,e,a)=>(P(n,typeof e!="symbol"?e+"":e,a),a);import{i as T,g as _,s as C,r as g,j as t,a as l,F as u,d as E,b as M,c as R,e as O,f as D,h as W,k as J,l as j,m as B,n as F,o as H,p as q,q as z,u as S,t as X,v as Y,R as G,w as b,N as y,x as K,H as V,y as Q,z as Z}from"./vendor.80055f74.js";const ee=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function a(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(s){if(s.ep)return;s.ep=!0;const i=a(s);fetch(s.href,i)}};ee();var te={apiKey:"AIzaSyAR6S5l9UiabY1TpO1DelUprklAJ6V5A8w",authDomain:"sockets-717fc.firebaseapp.com",projectId:"sockets-717fc",storageBucket:"sockets-717fc.appspot.com",messagingSenderId:"1073692013836",appId:"1:1073692013836:web:1af80e41fe3cc3c6a50529"};class ne{constructor(){f(this,"firebaseApp");f(this,"firebaseAuth");this.firebaseApp=T(te),this.firebaseAuth=_()}async getAuthAnonymously(){var e;return(e=await C(this.firebaseAuth))==null?void 0:e.user}}var se=new ne,N={path:"hello",next:{user:{path:"user"}}};class ae{constructor(){}save(e,a){localStorage.setItem(e,JSON.stringify(a))}read(e){return JSON.parse(localStorage.getItem(e)||"null")}delete(e){localStorage.removeItem(e)}get pathUser(){var e;return`${N.path}.${(e=N.next)==null?void 0:e.user.path}`}saveUser(e){this.save(this.pathUser,e)}readUser(){return this.read(this.pathUser)}deleteUser(){this.delete(this.pathUser)}}var v=new ae;const $=g.exports.createContext(null);function re(){return g.exports.useContext($)}function ie(n){const[e,a]=g.exports.useState(null);function c(){v.deleteUser(),a(null)}function s(){e||a(v.readUser())}function i(){!e||v.saveUser(e)}async function r(){a(await se.getAuthAnonymously())}return g.exports.useEffect(()=>{s(),i(),console.log(e)},[e]),t($.Provider,{value:{user:e,logout:c,loginAnonymously:r},children:n.children})}function oe(n){const[e,a]=g.exports.useState(!1),[c,s]=g.exports.useState(!1);!e&&n.getInstallPrompt().then(()=>a(!0)).then(()=>s(!0));async function i(){const d=await n.getInstallPrompt();d.prompt();const{outcome:p}=await d.userChoice;p==="accepted"&&r()}function r(){s(!1)}return t("section",{className:"app-prompt-pwa",children:c&&l(u,{children:[l("button",{className:"btn btn-dark shadow",onClick:()=>i(),children:[t(E,{}),t("small",{className:"align-middle fw-bold p-2",children:"Install as PWA"})]}),l("button",{className:"btn btn-secondary shadow",onClick:()=>r(),children:[t(M,{}),t("small",{className:"align-middle fw-bold p-2",children:"Dismiss"})]})]})})}var m={name:"Hello",path:"hello",next:{apps:{name:"Apps",path:"apps",next:{test:{name:"App Test",path:"test"}}},login:{name:"Login",path:"login"},news:{name:"News",path:"news"},user:{name:"User",path:"user"}}};class le{constructor(){f(this,"parser",new Map);this.parser.set("/"+this.pathApps,this.nameApps),this.parser.set("/"+this.pathApps+"/"+this.pathAppTest,this.nameAppTest),this.parser.set("/"+this.pathNews,this.nameNews),this.parser.set("/"+this.pathUser,this.nameUser),this.parser.set("/"+this.pathLogin,this.nameLogin)}parse(e){return this.parser.get(e)||""}get pathApps(){var e;return`${(e=m.next)==null?void 0:e.apps.path}`}get nameApps(){var e;return`${(e=m.next)==null?void 0:e.apps.name}`}get pathAppTest(){var e,a;return`${(a=(e=m.next)==null?void 0:e.apps.next)==null?void 0:a.test.path}`}get nameAppTest(){var e,a;return`${(a=(e=m.next)==null?void 0:e.apps.next)==null?void 0:a.test.name}`}get pathNews(){var e;return`${(e=m.next)==null?void 0:e.news.path}`}get nameNews(){var e;return`${(e=m.next)==null?void 0:e.news.name}`}get pathUser(){var e;return`${(e=m.next)==null?void 0:e.user.path}`}get nameUser(){var e;return`${(e=m.next)==null?void 0:e.user.name}`}get pathLogin(){var e;return`${(e=m.next)==null?void 0:e.login.path}`}get nameLogin(){var e;return`${(e=m.next)==null?void 0:e.login.name}`}}var o=new le;let h,A,x;class ce{constructor(e){f(this,"x",0);f(this,"y",0);this.selector=e}start(e){h=document.querySelector(this.selector),A=e==null?void 0:e.prev,x=e==null?void 0:e.next,e==null||e.curr,h.addEventListener("touchstart",this.onTouchStart),h.addEventListener("touchmove",this.onTouchMove),h.addEventListener("touchend",this.onTouchEnd)}stop(){h.removeEventListener("touchstart",this.onTouchStart),h.removeEventListener("touchmove",this.onTouchMove),h.removeEventListener("touchend",this.onTouchEnd)}onTouchStart(e){this.x=e.touches[0].clientX,this.y=e.touches[0].clientY}onTouchMove(e){const a=Math.min(window.innerWidth/3,333),c=.33,s=e.touches[0].clientX,i=e.touches[0].clientY,r=this.x-s,d=this.y-i;if(Math.abs(r)>Math.abs(d)){const p=r<=0?1:-1,k=Math.max(1-(Math.abs(r)-Math.abs(d))/a,0),I=p*c*(Math.abs(r)-Math.abs(d));h.style.opacity=`${k}`,h.style.transform=`translateX( ${I}px )`,h.style.transition="none"}if(Math.abs(r)>Math.abs(d)&&Math.abs(r)-Math.abs(d)>a){if(r<0)return A();if(r>0)return x()}}onTouchEnd(e){h.style.opacity="",h.style.transform="",h.style.transition="",this.x=0,this.y=0}}var U=new ce("#app-main-content");function he(n){return console.log(n.current),t("section",{className:"app-infobar-bottom",children:n.userUID?l(u,{children:[l("button",{className:`btn ${n.current===n.paths.news?"active":""}`,onClick:()=>n.toNews(),children:[t(R,{}),t("small",{className:"text-muted d-block",children:n.names.news})]}),l("button",{className:`btn ${n.current===n.paths.apps?"active":""}`,onClick:()=>n.toApps(),children:[t(O,{}),t("small",{className:"text-muted d-block",children:n.names.apps})]}),l("button",{className:`btn ${n.current===n.paths.user?"active":""}`,onClick:()=>n.toUser(),children:[t(D,{}),t("small",{className:"text-muted d-block",children:n.names.user})]})]}):t(u,{children:l("button",{className:"btn",onClick:()=>{},children:[t(W,{}),t("small",{className:"text-muted d-block",children:"Our policy"})]})})},n.userUID)}function ue(n){return t(u,{children:t("section",{className:"app-infobar-top",children:n.userUID?l(u,{children:[l("button",{className:"btn",onClick:()=>n.goBack(),children:[t(J,{}),t("small",{className:"text-muted align-middle p-2",children:n.pathURL})]}),t("button",{className:"btn",onClick:()=>n.logout(),children:t(j,{})})]}):t(u,{children:l("button",{className:"btn",children:[t(B,{}),t("small",{className:"text-muted align-middle p-2",children:"Need help?"})]})})},n.userUID)})}function de(n){return l("form",{className:"app-login-form",children:[t("h2",{className:"fw-bold mb-0",children:"Join for free"}),t("hr",{className:"my-3"}),t("h3",{className:"fs-5 fw-bold mb-3",children:"Use a third-party"}),l("button",{className:"w-100 py-2 mb-2 btn btn-outline-primary btn-facebook",disabled:!0,children:[t(F,{}),t("span",{className:"align-middle p-2",children:"Join with Facebook"})]}),l("button",{className:"w-100 py-2 mb-2 btn btn-outline-success btn-google",disabled:!0,children:[t(H,{}),t("span",{className:"align-middle p-2",children:"Join with Google"})]}),l("button",{className:"w-100 py-2 mb-2 btn btn-outline-dark btn-github",disabled:!0,children:[t(q,{}),t("span",{className:"align-middle p-2",children:"Join with GitHub"})]}),t("hr",{className:"my-3"}),t("h3",{className:"fs-5 fw-bold mb-3",children:"Or join as anonymous"}),l("button",{className:"w-100 py-2 mb-2 btn btn-outline-secondary",onClick:()=>n.loginAnonymously(),children:[t(z,{}),t("span",{className:"align-middle p-2",children:"Join anonymously"})]})]})}function pe(n){return l("button",{className:"app-button-app btn btn-light",onClick:()=>n.open(),children:[n.icon,t("small",{className:"text-muted d-block",children:n.name})]})}function me(){const n=S();return t("section",{id:"app-apps-container",children:t(pe,{open:()=>n(o.pathAppTest),icon:t(X,{}),name:o.nameAppTest})})}function fe(){return t(u,{children:t("h1",{children:"News"})})}function be(){return t(u,{children:t("h1",{children:"User"})})}function ge(){return t(u,{children:t("h1",{children:"AppTest"})})}function we(){const n=Y(),e=S(),a=[o.pathNews,o.pathApps,o.pathUser],c=n.pathname.split(/\//g)[1],{user:s,logout:i,loginAnonymously:r}=re();return g.exports.useEffect(()=>(U.start({curr:c,prev:()=>e(a[a.indexOf(c)-1]||c),next:()=>e(a[a.indexOf(c)+1]||c)}),()=>{U.stop()})),l(u,{children:[t(ue,{goBack:()=>e(-1),logout:()=>i(),userUID:s==null?void 0:s.uid,pathURL:o.parse(n.pathname)}),t("main",{id:"app-main-content",children:t(G,{children:s?l(u,{children:[l(b,{path:o.pathApps,children:[t(b,{path:"",element:t(me,{})}),t(b,{path:o.pathAppTest,element:t(ge,{})})]}),t(b,{path:o.pathNews,element:t(fe,{})}),t(b,{path:o.pathUser,element:t(be,{})}),t(b,{path:"*",element:t(y,{to:o.pathApps})})]}):l(u,{children:[t(b,{path:o.pathLogin,element:t(de,{loginAnonymously:()=>r()})}),t(b,{path:"*",element:t(y,{to:o.pathLogin})})]})})},n.pathname),t(he,{toApps:()=>e(o.pathApps),toNews:()=>e(o.pathNews),toUser:()=>e(o.pathUser),userUID:s==null?void 0:s.uid,current:n.pathname.split(/\//g)[1],names:{apps:o.nameApps,news:o.nameNews,user:o.nameUser},paths:{apps:o.pathApps,news:o.pathNews,user:o.pathUser}})]})}function ve(n={}){const{immediate:e=!1,onNeedRefresh:a,onOfflineReady:c,onRegistered:s,onRegisterError:i}=n;let r;const d=async(p=!0)=>{};return"serviceWorker"in navigator&&(r=new K("/hello-ts/sw.js",{scope:"/hello-ts/",type:"classic"}),r.addEventListener("activated",p=>{p.isUpdate?window.location.reload():c==null||c()}),r.register({immediate:e}).then(p=>{s==null||s(p)}).catch(p=>{i==null||i(p)})),d}let w;class ye{constructor(){f(this,"updateSW");f(this,"installPromptReady",new Event("isInstallPromptReady"));this.updateSW=ve({onNeedRefresh(){},onOfflineReady(){}}),window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),w=e,window.dispatchEvent(this.installPromptReady)}),this.getInstallPrompt()}async getInstallPrompt(){return new Promise((e,a)=>{if(w)return e(w);window.addEventListener("isInstallPromptReady",c=>e(w))})}}var Ne=new ye;function Ae(){return l(u,{children:[t(oe,{getInstallPrompt:Ne.getInstallPrompt}),t(V,{children:t(ie,{children:t(we,{})})})]})}Q.exports.render(t(Z.StrictMode,{children:t(Ae,{})}),document.getElementById("root"));
