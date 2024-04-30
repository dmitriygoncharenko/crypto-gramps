import{x as L,p as K,y as Q,n as A,v as D,a as c,z as me,M as F,A as fe,H as ge,J as _,g,q as he,aa as z,l as j,a7 as De,m as P,a2 as ee,a1 as te,ay as ye,E as be,a3 as O,az as we,aA as Se,N as q,ab as pe,aB as Ye,V as $e,a4 as We,f as Te,a0 as ze,T as Oe,F as X,P as Xe,d as xe,aC as Fe,o as N,c as U,w as W,b as ie,t as se,u as H,aD as re,aE as J,aw as qe,i as Ue,aF as Ze}from"./index-Bf1aycaz.js";import{d as ke,f as Ve,j as Be,D as G,n as _e,r as Ce,w as Ee,y as ae,b as Z,a3 as je,a4 as Je,B as Me,X as Ge,W as Ke,a5 as Qe,a6 as et,a0 as tt,a1 as at}from"./scopeId-Ch9OC1n_.js";const lt="/logo.webp",Pe=L({text:String,...K(),...Q()},"VToolbarTitle"),Ie=A()({name:"VToolbarTitle",props:Pe(),setup(e,i){let{slots:a}=i;return D(()=>{const y=!!(a.default||a.text||e.text);return c(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var t;return[y&&c("div",{class:"v-toolbar-title__placeholder"},[a.text?a.text():e.text,(t=a.default)==null?void 0:t.call(a)])]}})}),{}}}),nt=[null,"prominent","default","comfortable","compact"],Ne=L({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>nt.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...ke(),...K(),...Ve(),...Be(),...Q({tag:"header"}),...me()},"VToolbar"),ce=A()({name:"VToolbar",props:Ne(),setup(e,i){var s;let{slots:a}=i;const{backgroundColorClasses:y,backgroundColorStyles:t}=G(F(e,"color")),{borderClasses:l}=_e(e),{elevationClasses:o}=Ce(e),{roundedClasses:m}=Ee(e),{themeClasses:h}=fe(e),{rtlClasses:v}=ge(),n=_(!!(e.extended||(s=a.extension)!=null&&s.call(a))),d=g(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),u=g(()=>n.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return he({VBtn:{variant:"text"}}),D(()=>{var S;const w=!!(e.title||a.title),p=!!(a.image||e.image),M=(S=a.extension)==null?void 0:S.call(a);return n.value=!!(e.extended||M),c(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},y.value,l.value,o.value,m.value,h.value,v.value,e.class],style:[t.value,e.style]},{default:()=>[p&&c("div",{key:"image",class:"v-toolbar__image"},[a.image?c(Z,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):c(ae,{key:"image-img",cover:!0,src:e.image},null)]),c(Z,{defaults:{VTabs:{height:z(d.value)}}},{default:()=>{var V,B,C;return[c("div",{class:"v-toolbar__content",style:{height:z(d.value)}},[a.prepend&&c("div",{class:"v-toolbar__prepend"},[(V=a.prepend)==null?void 0:V.call(a)]),w&&c(Ie,{key:"title",text:e.title},{text:a.title}),(B=a.default)==null?void 0:B.call(a),a.append&&c("div",{class:"v-toolbar__append"},[(C=a.append)==null?void 0:C.call(a)])])]}}),c(Z,{defaults:{VTabs:{height:z(u.value)}}},{default:()=>[c(je,null,{default:()=>[n.value&&c("div",{class:"v-toolbar__extension",style:{height:z(u.value)}},[M])]})]})]})}),{contentHeight:d,extensionHeight:u}}}),ot=L({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function ut(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:a}=i;let y=0;const t=j(null),l=_(0),o=_(0),m=_(0),h=_(!1),v=_(!1),n=g(()=>Number(e.scrollThreshold)),d=g(()=>De((n.value-l.value)/n.value||0)),u=()=>{const s=t.value;!s||a&&!a.value||(y=l.value,l.value="window"in s?s.pageYOffset:s.scrollTop,v.value=l.value<y,m.value=Math.abs(l.value-n.value))};return P(v,()=>{o.value=o.value||l.value}),P(h,()=>{o.value=0}),ee(()=>{P(()=>e.scrollTarget,s=>{var p;const w=s?document.querySelector(s):window;w&&w!==t.value&&((p=t.value)==null||p.removeEventListener("scroll",u),t.value=w,t.value.addEventListener("scroll",u,{passive:!0}))},{immediate:!0})}),te(()=>{var s;(s=t.value)==null||s.removeEventListener("scroll",u)}),a&&P(a,u,{immediate:!0}),{scrollThreshold:n,currentScroll:l,currentThreshold:m,isScrollActive:h,scrollRatio:d,isScrollingUp:v,savedScroll:o}}const it=L({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Ne(),...ye(),...ot(),height:{type:[Number,String],default:64}},"VAppBar"),st=A()({name:"VAppBar",props:it(),emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:a}=i;const y=j(),t=be(e,"modelValue"),l=g(()=>{var V;const S=new Set(((V=e.scrollBehavior)==null?void 0:V.split(" "))??[]);return{hide:S.has("hide"),inverted:S.has("inverted"),collapse:S.has("collapse"),elevate:S.has("elevate"),fadeImage:S.has("fade-image")}}),o=g(()=>{const S=l.value;return S.hide||S.inverted||S.collapse||S.elevate||S.fadeImage||!t.value}),{currentScroll:m,scrollThreshold:h,isScrollingUp:v,scrollRatio:n}=ut(e,{canScroll:o}),d=g(()=>e.collapse||l.value.collapse&&(l.value.inverted?n.value>0:n.value===0)),u=g(()=>e.flat||l.value.elevate&&(l.value.inverted?m.value>0:m.value===0)),s=g(()=>l.value.fadeImage?l.value.inverted?1-n.value:n.value:void 0),w=g(()=>{var B,C;if(l.value.hide&&l.value.inverted)return 0;const S=((B=y.value)==null?void 0:B.contentHeight)??0,V=((C=y.value)==null?void 0:C.extensionHeight)??0;return S+V});O(g(()=>!!e.scrollBehavior),()=>{pe(()=>{l.value.hide?l.value.inverted?t.value=m.value>h.value:t.value=v.value||m.value<h.value:t.value=!0})});const{ssrBootStyles:p}=we(),{layoutItemStyles:M}=Se({id:e.name,order:g(()=>parseInt(e.order,10)),position:F(e,"location"),layoutSize:w,elementSize:_(void 0),active:t,absolute:F(e,"absolute")});return D(()=>{const S=ce.filterProps(e);return c(ce,q({ref:y,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...M.value,"--v-toolbar-image-opacity":s.value,height:void 0,...p.value},e.style]},S,{collapse:d.value,flat:u.value}),a)}),{}}}),rt=L({...Je({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),ct=A()({name:"VAppBarNavIcon",props:rt(),setup(e,i){let{slots:a}=i;return D(()=>c(Me,q(e,{class:["v-app-bar-nav-icon"]}),a)),{}}}),vt=A()({name:"VAppBarTitle",props:Pe(),setup(e,i){let{slots:a}=i;return D(()=>c(Ie,q(e,{class:"v-app-bar-title"}),a)),{}}});function dt(e){let{rootEl:i,isSticky:a,layoutItemStyles:y}=e;const t=_(!1),l=_(0),o=g(()=>{const v=typeof t.value=="boolean"?"top":t.value;return[a.value?{top:"auto",bottom:"auto",height:void 0}:void 0,t.value?{[v]:z(l.value)}:{top:y.value.top}]});ee(()=>{P(a,v=>{v?window.addEventListener("scroll",h,{passive:!0}):window.removeEventListener("scroll",h)},{immediate:!0})}),te(()=>{window.removeEventListener("scroll",h)});let m=0;function h(){const v=m>window.scrollY?"up":"down",n=i.value.getBoundingClientRect(),d=parseFloat(y.value.top??0),u=window.scrollY-Math.max(0,l.value-d),s=n.height+Math.max(l.value,d)-window.scrollY-window.innerHeight,w=parseFloat(getComputedStyle(i.value).getPropertyValue("--v-body-scroll-y"))||0;n.height<window.innerHeight-d?(t.value="top",l.value=d):v==="up"&&t.value==="bottom"||v==="down"&&t.value==="top"?(l.value=window.scrollY+n.top-w,t.value=!0):v==="down"&&s<=0?(l.value=0,t.value="bottom"):v==="up"&&u<=0&&(w?t.value!=="top"&&(l.value=-u+w+d,t.value="top"):(l.value=n.top+u,t.value="top")),m=window.scrollY}return{isStuck:t,stickyStyles:o}}const mt=100,ft=20;function ve(e){return(e<0?-1:1)*Math.sqrt(Math.abs(e))*1.41421356237}function de(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let i=0;for(let a=e.length-1;a>0;a--){if(e[a].t===e[a-1].t)continue;const y=ve(i),t=(e[a].d-e[a-1].d)/(e[a].t-e[a-1].t);i+=(t-y)*Math.abs(t),a===e.length-1&&(i*=.5)}return ve(i)*1e3}function gt(){const e={};function i(t){Array.from(t.changedTouches).forEach(l=>{(e[l.identifier]??(e[l.identifier]=new Ye(ft))).push([t.timeStamp,l])})}function a(t){Array.from(t.changedTouches).forEach(l=>{delete e[l.identifier]})}function y(t){var v;const l=(v=e[t])==null?void 0:v.values().reverse();if(!l)throw new Error(`No samples for touch id ${t}`);const o=l[0],m=[],h=[];for(const n of l){if(o[0]-n[0]>mt)break;m.push({t:n[0],d:n[1].clientX}),h.push({t:n[0],d:n[1].clientY})}return{x:de(m),y:de(h),get direction(){const{x:n,y:d}=this,[u,s]=[Math.abs(n),Math.abs(d)];return u>s&&n>=0?"right":u>s&&n<=0?"left":s>u&&d>=0?"down":s>u&&d<=0?"up":ht()}}}return{addMovement:i,endTouch:a,getVelocity:y}}function ht(){throw new Error}function yt(e){let{el:i,isActive:a,isTemporary:y,width:t,touchless:l,position:o}=e;ee(()=>{window.addEventListener("touchstart",V,{passive:!0}),window.addEventListener("touchmove",B,{passive:!1}),window.addEventListener("touchend",C,{passive:!0})}),te(()=>{window.removeEventListener("touchstart",V),window.removeEventListener("touchmove",B),window.removeEventListener("touchend",C)});const m=g(()=>["left","right"].includes(o.value)),{addMovement:h,endTouch:v,getVelocity:n}=gt();let d=!1;const u=_(!1),s=_(0),w=_(0);let p;function M(r,b){return(o.value==="left"?r:o.value==="right"?document.documentElement.clientWidth-r:o.value==="top"?r:o.value==="bottom"?document.documentElement.clientHeight-r:R())-(b?t.value:0)}function S(r){let b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const f=o.value==="left"?(r-w.value)/t.value:o.value==="right"?(document.documentElement.clientWidth-r-w.value)/t.value:o.value==="top"?(r-w.value)/t.value:o.value==="bottom"?(document.documentElement.clientHeight-r-w.value)/t.value:R();return b?Math.max(0,Math.min(1,f)):f}function V(r){if(l.value)return;const b=r.changedTouches[0].clientX,f=r.changedTouches[0].clientY,T=25,x=o.value==="left"?b<T:o.value==="right"?b>document.documentElement.clientWidth-T:o.value==="top"?f<T:o.value==="bottom"?f>document.documentElement.clientHeight-T:R(),k=a.value&&(o.value==="left"?b<t.value:o.value==="right"?b>document.documentElement.clientWidth-t.value:o.value==="top"?f<t.value:o.value==="bottom"?f>document.documentElement.clientHeight-t.value:R());(x||k||a.value&&y.value)&&(p=[b,f],w.value=M(m.value?b:f,a.value),s.value=S(m.value?b:f),d=w.value>-20&&w.value<80,v(r),h(r))}function B(r){const b=r.changedTouches[0].clientX,f=r.changedTouches[0].clientY;if(d){if(!r.cancelable){d=!1;return}const x=Math.abs(b-p[0]),k=Math.abs(f-p[1]);(m.value?x>k&&x>3:k>x&&k>3)?(u.value=!0,d=!1):(m.value?k:x)>3&&(d=!1)}if(!u.value)return;r.preventDefault(),h(r);const T=S(m.value?b:f,!1);s.value=Math.max(0,Math.min(1,T)),T>1?w.value=M(m.value?b:f,!0):T<0&&(w.value=M(m.value?b:f,!1))}function C(r){if(d=!1,!u.value)return;h(r),u.value=!1;const b=n(r.changedTouches[0].identifier),f=Math.abs(b.x),T=Math.abs(b.y);(m.value?f>T&&f>400:T>f&&T>3)?a.value=b.direction===({left:"right",right:"left",top:"down",bottom:"up"}[o.value]||R()):a.value=s.value>.5}const I=g(()=>u.value?{transform:o.value==="left"?`translateX(calc(-100% + ${s.value*t.value}px))`:o.value==="right"?`translateX(calc(100% - ${s.value*t.value}px))`:o.value==="top"?`translateY(calc(-100% + ${s.value*t.value}px))`:o.value==="bottom"?`translateY(calc(100% - ${s.value*t.value}px))`:R(),transition:"none"}:void 0);return O(u,()=>{var f,T;const r=((f=i.value)==null?void 0:f.style.transform)??null,b=((T=i.value)==null?void 0:T.style.transition)??null;pe(()=>{var x,k,Y,$;(k=i.value)==null||k.style.setProperty("transform",((x=I.value)==null?void 0:x.transform)||"none"),($=i.value)==null||$.style.setProperty("transition",((Y=I.value)==null?void 0:Y.transition)||null)}),$e(()=>{var x,k;(x=i.value)==null||x.style.setProperty("transform",r),(k=i.value)==null||k.style.setProperty("transition",b)})}),{isDragging:u,dragProgress:s,dragStyles:I}}function R(){throw new Error}const bt=["start","end","left","right","top","bottom"],wt=L({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>bt.includes(e)},sticky:Boolean,...ke(),...K(),...We(),...Ve(),...ye(),...Be(),...Q({tag:"nav"}),...me()},"VNavigationDrawer"),St=A()({name:"VNavigationDrawer",props:wt(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,i){let{attrs:a,emit:y,slots:t}=i;const{isRtl:l}=ge(),{themeClasses:o}=fe(e),{borderClasses:m}=_e(e),{backgroundColorClasses:h,backgroundColorStyles:v}=G(F(e,"color")),{elevationClasses:n}=Ce(e),{displayClasses:d,mobile:u}=Te(e),{roundedClasses:s}=Ee(e),w=Ge(),p=be(e,"modelValue",null,E=>!!E),{ssrBootStyles:M}=we(),{scopeId:S}=Ke(),V=j(),B=_(!1),C=g(()=>e.rail&&e.expandOnHover&&B.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),I=g(()=>Qe(e.location,l.value)),r=g(()=>!e.permanent&&(u.value||e.temporary)),b=g(()=>e.sticky&&!r.value&&I.value!=="bottom");O(()=>e.expandOnHover&&e.rail!=null,()=>{P(B,E=>y("update:rail",!E))}),O(()=>!e.disableResizeWatcher,()=>{P(r,E=>!e.permanent&&Xe(()=>p.value=!E))}),O(()=>!e.disableRouteWatcher&&!!w,()=>{P(w.currentRoute,()=>r.value&&(p.value=!1))}),P(()=>e.permanent,E=>{E&&(p.value=!0)}),ze(()=>{e.modelValue!=null||r.value||(p.value=e.permanent||!u.value)});const{isDragging:f,dragProgress:T}=yt({el:V,isActive:p,isTemporary:r,width:C,touchless:F(e,"touchless"),position:I}),x=g(()=>{const E=r.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):C.value;return f.value?E*T.value:E}),{layoutItemStyles:k,layoutItemScrimStyles:Y}=Se({id:e.name,order:g(()=>parseInt(e.order,10)),position:I,layoutSize:x,elementSize:C,active:g(()=>p.value||f.value),disableTransitions:g(()=>f.value),absolute:g(()=>e.absolute||b.value&&typeof $.value!="string")}),{isStuck:$,stickyStyles:He}=dt({rootEl:V,isSticky:b,layoutItemStyles:k}),le=G(g(()=>typeof e.scrim=="string"?e.scrim:null)),Re=g(()=>({...f.value?{opacity:T.value*.2,transition:"none"}:void 0,...Y.value}));he({VList:{bgColor:"transparent"}});function Le(){B.value=!0}function Ae(){B.value=!1}return D(()=>{const E=t.image||e.image;return c(X,null,[c(e.tag,q({ref:V,onMouseenter:Le,onMouseleave:Ae,class:["v-navigation-drawer",`v-navigation-drawer--${I.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":B.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":r.value,"v-navigation-drawer--active":p.value,"v-navigation-drawer--sticky":b.value},o.value,h.value,m.value,d.value,n.value,s.value,e.class],style:[v.value,k.value,M.value,He.value,e.style]},S,a),{default:()=>{var ne,oe,ue;return[E&&c("div",{key:"image",class:"v-navigation-drawer__img"},[t.image?c(Z,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{alt:"",cover:!0,height:"inherit",src:e.image}}},t.image):c(ae,{key:"image-img",alt:"",cover:!0,height:"inherit",src:e.image},null)]),t.prepend&&c("div",{class:"v-navigation-drawer__prepend"},[(ne=t.prepend)==null?void 0:ne.call(t)]),c("div",{class:"v-navigation-drawer__content"},[(oe=t.default)==null?void 0:oe.call(t)]),t.append&&c("div",{class:"v-navigation-drawer__append"},[(ue=t.append)==null?void 0:ue.call(t)])]}}),c(Oe,{name:"fade-transition"},{default:()=>[r.value&&(f.value||p.value)&&!!e.scrim&&c("div",q({class:["v-navigation-drawer__scrim",le.backgroundColorClasses.value],style:[Re.value,le.backgroundColorStyles.value],onClick:()=>p.value=!1},S),null)]})])}),{isStuck:$}}}),pt=xe({__name:"Header",setup(e){const i=et(),a=Fe(),y=g(()=>a.getRoutes().filter(h=>!h.meta.isLayout).sort((h,v)=>h.meta.index-v.meta.index)),t=j(!1),l=h=>{a.push(h.path)},o=Te(),m=g(()=>o.smAndDown.value);return(h,v)=>(N(),U(X,null,[c(st,{class:"component__app-header"},{default:W(()=>[c(ae,{src:lt,alt:"Logo",contain:"","max-width":"60"}),c(vt,null,{default:W(()=>[ie(se(H(i)),1)]),_:1}),H(m)?(N(),J(ct,{key:1,onClick:v[0]||(v[0]=qe(n=>t.value=!H(t),["stop"]))})):(N(!0),U(X,{key:0},re(H(y),(n,d)=>(N(),J(Me,{key:d,onClick:u=>l(n)},{default:W(()=>{var u;return[ie(se((u=n.meta)==null?void 0:u.title),1)]}),_:2},1032,["onClick"]))),128))]),_:1}),c(St,{modelValue:H(t),"onUpdate:modelValue":v[1]||(v[1]=n=>Ue(t)?t.value=n:null),location:"right"},{default:W(()=>[c(tt,{lines:"one"},{default:W(()=>[(N(!0),U(X,null,re(H(y),(n,d)=>{var u;return N(),J(at,{key:d,title:(u=n.meta)==null?void 0:u.title,onClick:s=>l(n)},null,8,["title","onClick"])}),128))]),_:1})]),_:1},8,["modelValue"])],64))}}),kt=xe({__name:"default",setup(e){return(i,a)=>{const y=pt,t=Ze("router-view");return N(),U(X,null,[c(y),c(t)],64)}}});export{kt as default};
