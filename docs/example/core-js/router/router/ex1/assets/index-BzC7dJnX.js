(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();var ot="_3j9ps0",it="_1c1ulax0",at="_1c1ulax1",lt="_1c1ulax2",ht="_1c1ulax3",ct="_1c1ulax4",dt="_1c1ulax5",ut="_1c1ulax6";const pt=new DOMParser().parseFromString('<svg id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><defs><style>.cls-1{fill:none;}</style></defs><title>trash-can</title><rect x="12" y="12" width="2" height="12"/><rect x="18" y="12" width="2" height="12"/><path d="M4,6V8H6V28a2,2,0,0,0,2,2H24a2,2,0,0,0,2-2V8h2V6ZM8,28V8H24V28Z"/><rect x="12" y="2" width="8" height="2"/><rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" width="32" height="32"/></svg>',"image/svg+xml").documentElement;var mt=Object.defineProperty,yt=(e,t,s)=>t in e?mt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,X=(e,t,s)=>(yt(e,typeof t!="symbol"?t+"":t,s),s),Ce=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)},i=(e,t,s)=>(Ce(e,t,"read from private field"),s?s.call(e):t.get(e)),d=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},h=(e,t,s,n)=>(Ce(e,t,"write to private field"),t.set(e,s),s),w=(e,t,s)=>(Ce(e,t,"access private method"),s);const ft=e=>{var t,s,n,o;return o=class extends e{constructor(...r){super(...r),d(this,t,void 0),d(this,s,void 0),d(this,n,void 0),h(this,t,null),h(this,s,[]),h(this,n,{parent:null,children:[]})}get parent(){return i(this,t)}set parent(r){h(this,t,r)}get child(){return i(this,s)[0]}set child(r){i(this,s)[0]=r}get children(){return i(this,s)}set children(r){h(this,s,r)}addChild(r){i(this,s).push(r)}get shortcutParent(){return i(this,n).parent}set shortcutParent(r){i(this,n).parent=r}get shortcutChildren(){return i(this,n).children}addShortcutChild(r){i(this,n).children.push(r)}traverseShortcutParent(r,a){r.shortcutParent&&((a(r.shortcutParent)??!1)||this.shortcutParent.traverseShortcutParent(this.shortcutParent,a))}},t=new WeakMap,s=new WeakMap,n=new WeakMap,o},gt=e=>Array.isArray(e),vt=e=>typeof e=="function",wt=e=>typeof e=="string",$e=e=>typeof e=="function"&&e.hasOwnProperty("$$typeof"),j=e=>typeof e=="object"&&e!==null&&e.hasOwnProperty("$$typeof"),Fe=Symbol.for("rvjs.componentBlock"),ee=Symbol.for("rvjs.elementBlock"),Ie=Symbol.for("rvjs.forFlowBlock"),qe=Symbol.for("rvjs.switchFlowBlock"),Ue=Symbol.for("rvjs.toggleFlowBlock"),Be=Symbol.for("rvjs.textNodeBlock"),bt=Symbol.for("rvjs.dynamicRender"),ue=Symbol.for("rvjs.getState"),te=e=>j(e)&&e.$$typeof===Fe,S=e=>j(e)&&e.$$typeof===ee,De=e=>j(e)&&e.$$typeof===Ie,Et=e=>j(e)&&e.$$typeof===qe,Ot=e=>j(e)&&e.$$typeof===Ue,F=e=>j(e)&&e.$$typeof===Be,Ct=e=>{var t,s,n,o,r,a,u;return u=class extends e{constructor(...l){super(...l),d(this,t,void 0),d(this,s,void 0),d(this,n,void 0),d(this,o,void 0),d(this,r,void 0),d(this,a,void 0);const{element:c}=l[0];this.element=c,h(this,s,[]),h(this,n,0),h(this,o,0),h(this,r,0),h(this,a,[])}get element(){return i(this,t)}set element(l){h(this,t,l)}get nestedNodes(){return i(this,s)}set nestedNodes(l){h(this,s,l)}get nodes(){return i(this,s).flat(1/0)}get domIndex(){return i(this,n)}set domIndex(l){h(this,n,l)}get domLength(){return i(this,o)}set domLength(l){h(this,o,l)}get rerenderableIndex(){return i(this,r)}set rerenderableIndex(l){h(this,r,l)}get rerenderableChildren(){return i(this,a)}set rerenderableChildren(l){h(this,a,l)}initialDOMUpdate(l){const c=l.parent;c.$$typeof===ee?c.requestDOMPushUpdate(c,c.nodes):c.initialDOMUpdate(c)}requestDOMPushUpdate(l,c){const p=document.createDocumentFragment();p.append(...c),l.$$typeof===ee&&i(l,t).append(p)}requestRerenderableChildrenUpdate(l,c){this.rerenderableChildren.slice(l.rerenderableIndex+1).forEach(p=>{p.domIndex+=c}),this.domLength+=c}requestDOMSwapUpdate(l,c,p,v,E,m,g,y){const f=c.parent;if(S(c)){const{domIndex:R}=c.rerenderableChildren[E];for(let O=0;O<v.length;O++){const q=v[O],ae=[],le=C=>{if(C)if(S(C)||F(C))ae.push(C.element);else if(De(C))for(let he=0;he<C.children.length;he++)le(C.children[he]);else le(C.child)};le(q),q==null||q.triggerDestroy();for(let C=0;C<ae.length;C++)ae[C].remove()}const _=[...c.element.childNodes].slice(m+R,m+R+g);let x=0;p.forEach(O=>{const q=_[x];O===q?x++:S(c)&&c.element.insertBefore(O,q)}),c.requestRerenderableChildrenUpdate(c,y)}else{const{domIndex:R}=c.rerenderableChildren[E];c.nestedNodes[l.domIndex]=l.nestedNodes,c.domLength+=y,f.requestDOMSwapUpdate(c,f,p,v,c.rerenderableIndex,m+R,g,y),c.requestRerenderableChildrenUpdate(c,y)}}},t=new WeakMap,s=new WeakMap,n=new WeakMap,o=new WeakMap,r=new WeakMap,a=new WeakMap,u};class kt{}const Ae=e=>{var t,s,n,o,r,a;return a=class extends e{constructor(...u){super(...u),d(this,t,void 0),d(this,s,void 0),d(this,n,void 0),d(this,o,void 0),d(this,r,void 0),h(this,t,""),h(this,s,{}),h(this,n,null),h(this,o,null),h(this,r,null)}get pathname(){return i(this,t)}set pathname(u){h(this,t,u)}get queryParams(){return i(this,s)}set queryParams(u){h(this,s,u)}get pathParam(){return i(this,n)}set pathParam(u){h(this,n,u)}get setOutlet(){return i(this,o)}set setOutlet(u){h(this,o,u)}set lazySetOutlet(u){h(this,r,u)}triggerLazySetOutlet(){i(this,r)&&i(this,r).call(this)}},t=new WeakMap,s=new WeakMap,n=new WeakMap,o=new WeakMap,r=new WeakMap,a},St=e=>{var t,s;return s=class extends e{constructor(...n){super(...n),d(this,t,void 0),h(this,t,{state:[],globalState:[]})}addStateUnsubscribeHandler(n){i(this,t).state.push(n)}addUnsubscribeGlobalStateHandler(n){i(this,t).globalState.push(n)}cleanUpUnsubscribeState(){i(this,t).state.forEach(n=>n(this)),i(this,t).globalState.forEach(n=>{n(this)})}},t=new WeakMap,s},_t={COMPONENT:Fe,ELEMENT:ee,FOR:Ie,SWITCH:qe,TOGGLE:Ue,TEXT:Be};var pe,je,me,ze;class oe extends Ae(St(Ct(ft(kt)))){constructor(...t){super(...t),d(this,pe),d(this,me),X(this,"$$typeof");const{type:s}=t[0];this.$$typeof=_t[s]}traverseChildren(t,s){s(t)&&(te(t)||Et(t)||Ot(t)?t.child&&t.child.traverseChildren(t.child,s):S(t)?t.children.flat().forEach(n=>{n.traverseChildren(n,s)}):De(t)&&t.children.flat().forEach(n=>{n.traverseChildren(n,s)}))}triggerCommit(){w(this,pe,je).call(this)}triggerDestroy(){w(this,me,ze).call(this)}}pe=new WeakSet,je=function(){this.traverseChildren(this,e=>(te(e)&&(e.isRendered()||e.triggerLazyRender(),e.triggerOnMount()),!0))},me=new WeakSet,ze=function(){this.traverseChildren(this,e=>(te(e)&&(e.triggerOnDestroy(),e.deleteAllContextProviders()),F(e)||e.cleanUpUnsubscribeState(),!0))};var U;class Q{constructor(t){d(this,U,void 0),h(this,U,t??null)}has(){return i(this,U)!==null}get(){return i(this,U)}set(t){h(this,U,t)}}U=new WeakMap;const b=new Q,N=new Q,Pe=new Q([]),se=e=>$e(e)&&(e==null?void 0:e.$$typeof)===bt,He=(e,t)=>{Object.entries(t).forEach(([s,n])=>{ke(e,s,n)})},ke=(e,t,s)=>{se(s)?Pt(e,t,s):xe.hasOwnProperty(t)?xe[t](e,s):e.element.hasAttribute(t)?e.element.setAttribute(t,s):e.element[t]=s},Pt=(e,t,s)=>{b.set({block:e,type:"domProperty",property:t,value:s}),ke(e,t,s()),b.set(null)},xe={ref:(e,t)=>{t!==void 0&&(t.current=e.element)},children:(e,t)=>{e.appendChildren(t)},style:(e,t)=>{Object.entries(t).forEach(([s,n])=>{se(n)?(b.set({block:e,type:"styleProperty",property:s,value:n}),e.element.style[s]=n(),b.set(null)):e.element.style[s]=n})},animation:(e,t)=>{e.element.animate(t.keyframes,t.options)},className:(e,t)=>{const s=t.split(" ");e.element.classList.add(...s)},classes:(e,t)=>{t.forEach(s=>{if(se(s)){const n=s();b.set({block:e,type:"classesProperty",property:"classes",value:{classFn:s,removePrevClassFn:()=>{n.split(" ").forEach(o=>{e.element.classList.remove(o)})}}}),s().split(" ").forEach(o=>{e.element.classList.add(o)}),b.set(null)}else wt(s)&&s.split(" ").forEach(n=>{e.element.classList.add(n)})})}},xt=(e,t,s)=>{se(s)?e.element.style[t]=s():e.element.style[t]=s};class Ve{constructor(){X(this,"data"),X(this,"front"),X(this,"end"),this.data={},this.front=0,this.end=0}get size(){return this.end-this.front}get items(){return Object.values(this.data)}get first(){return this.data[this.front]}push(t){this.data[this.end]=t,this.end++}pop(){if(this.size===0)return null;const t=this.data[this.front];return delete this.data[this.front],this.front++,t}popAll(t){for(;this.size>0;)t(this.pop())}}var M;class Mt{constructor(){d(this,M,void 0),h(this,M,new Map)}hasValueBySubscriber(t){return i(this,M).has(t)}getValueBySubscriber(t){return i(this,M).get(t)}createEmptyValue(t,s){i(this,M).set(t,s)}subscribe(t,s){i(this,M).set(t,s)}unsubscribe(t){i(this,M).delete(t)}notify(t){i(this,M).forEach((s,n)=>{t(n,s)})}}M=new WeakMap;const Z=e=>{let t=e;const s=new Rt;let n=!1;const o=new Ve,r=()=>{if(b.has()){const u=b.get();n?o.push(u):s.subscribeState(u)}return Pe.set([...Pe.get()??[],r]),t};r.$$typeof=ue;const a=u=>{u!==t&&(vt(u)?t=u(t):t=u,n=!0,Nt(s),n=!1,o.popAll(l=>{s.subscribeState(l)}))};return a.$$typeof=ue,[r,a]},Nt=e=>{const t=[];e.notify((s,n)=>{Object.entries(n.domProperty).forEach(([o,r])=>{S(s)&&ke(s,o,r())}),Object.entries(n.styleProperty).forEach(([o,r])=>{S(s)&&xt(s,o,r())}),n.childrenRender.forEach(o=>{o()}),n.flowRender.forEach(o=>{o()}),n.classesProperty.forEach(o=>{const{classFn:r,removePrevClassFn:a}=o,u=r();a(),S(s)&&u.split(" ").forEach(l=>{s.element.classList.add(l)}),o.removePrevClassFn=()=>{S(s)&&u.split(" ").forEach(l=>{s.element.classList.remove(l)})}}),t.push(n.useEffect)}),t.flat().forEach(s=>{s()})},Se=e=>$e(e)&&(e==null?void 0:e.$$typeof)===ue;class Rt extends Mt{constructor(){super()}subscribeState(t){const{block:s=null,type:n,property:o,value:r}=t;this.hasValueBySubscriber(s)||(super.createEmptyValue(s,{useEffect:[],childrenRender:[],domProperty:{},styleProperty:{},classesProperty:[],flowRender:[]}),s&&!F(s)&&s.addStateUnsubscribeHandler(this.unsubscribe.bind(this)));const a=this.getValueBySubscriber(s);gt(a[n])?a[n].push(r):a[n][o]=r}}var P;class Ge{constructor(){d(this,P,void 0),h(this,P,new Map)}has(t){return i(this,P).has(t)}getFirst(t){return this.has(t)?i(this,P).get(t).first:0}getSize(t){return this.has(t)?i(this,P).get(t).size:0}push(t,s){if(this.has(t))i(this,P).get(t).push(s);else{const n=new Ve;n.push(s),i(this,P).set(t,n)}}pop(t){if(this.has(t)){const s=i(this,P).get(t),n=s.pop();return s.size===0&&i(this,P).delete(t),n}}}P=new WeakMap;var T,ne,V,ye,Ke,fe,Me,Y,ce,ge,Ne;class Lt extends oe{constructor(t){const{dependency:s,render:n}=t;super({type:"FOR"}),d(this,ye),d(this,fe),d(this,Y),d(this,ge),d(this,T,void 0),d(this,ne,void 0),d(this,V,void 0),h(this,T,s),h(this,ne,n),h(this,V,new Ge),w(this,ye,Ke).call(this)}}T=new WeakMap,ne=new WeakMap,V=new WeakMap,ye=new WeakSet,Ke=function(){w(this,Y,ce).call(this,!0)},fe=new WeakSet,Me=function(){const{triggerBlocks:e,deletable:t,increased:s}=w(this,Y,ce).call(this,!1);this.parent.requestDOMSwapUpdate(this,this.parent,this.nodes,[...t],this.rerenderableIndex,0,this.domLength,s);for(let n=0;n<e.length;n++)e[n].triggerCommit()},Y=new WeakSet,ce=function(e){const t=(()=>{if(e){b.set({block:this,type:"flowRender",property:"flowRender",value:()=>{w(this,fe,Me).call(this)}});const m=Se(i(this,T))?i(this,T).call(this):i(this,T);return b.set(null),m}else return i(this,T).call(this)})(),s=i(this,V),n=new Ge,o=[],r=[],a=[],u=new Set(this.children),l=[];let c=0,p=0;for(let m=0;m<t.length;m++){const g=t[m],y=s.has(g),f=y?s.pop(g).block:w(this,ge,Ne).call(this,g,m);y?u.delete(f):a.push(f),r.push(f),n.push(g,{index:m,block:f}),S(f)||F(f)?(c+=1,o.push(f.element)):(f.rerenderableIndex=p++,f.domIndex=c,c+=f.domLength,l.push(f),o.push(f.nestedNodes))}const v=o.flat(1/0).length,E=v-this.domLength;return this.nestedNodes=o,this.children=r,h(this,V,n),this.domLength=v,this.rerenderableChildren=l,{triggerBlocks:a,deletable:u,increased:E}},ge=new WeakSet,Ne=function(e,t){const s=i(this,ne).call(this,e,t);return s&&(s.parent=this),s};const Tt=(e,t)=>new Lt({dependency:e,render:t});var D,W,re,ve,Ze,we,Re,J,de,be,Le;class Wt extends oe{constructor(t){const{dependency:s,render:n}=t;super({type:"SWITCH"}),d(this,ve),d(this,we),d(this,J),d(this,be),d(this,D,void 0),d(this,W,void 0),d(this,re,void 0),h(this,W,s),h(this,re,n),h(this,D,null),w(this,ve,Ze).call(this)}get child(){return i(this,D)}}D=new WeakMap,W=new WeakMap,re=new WeakMap,ve=new WeakSet,Ze=function(){w(this,J,de).call(this,!0)},we=new WeakSet,Re=function(){const{newBlock:e,deletable:t,increased:s}=w(this,J,de).call(this,!1);this.parent.requestDOMSwapUpdate(this,this.parent,this.nodes,[t],this.rerenderableIndex,0,this.domLength,s),e&&e.triggerCommit()},J=new WeakSet,de=function(e){const t=(()=>{if(e){b.set({block:this,type:"flowRender",property:"flowRender",value:()=>{w(this,we,Re).call(this)}});const l=Se(i(this,W))?i(this,W).call(this):i(this,W);return b.set(null),l}else return i(this,W).call(this)})(),s=i(this,D),n=[],o=[],r=w(this,be,Le).call(this,t);h(this,D,r),r&&(S(r)||F(r)?n.push(r.element):(r.domIndex=0,r.rerenderableIndex=0,o.push(r),n.push(r.nestedNodes)));const a=n.flat(1/0).length,u=a-this.domLength;return this.nestedNodes=n,this.domLength=a,this.rerenderableChildren=o,{newBlock:r,deletable:s,increased:u}},be=new WeakSet,Le=function(e){const t=i(this,re).call(this,e);return t&&(t.parent=this),t};const Qe=(e,t)=>new Wt({dependency:e,render:t}),$t=e=>{var t,s,n;return n=class extends e{constructor(...o){super(...o),d(this,t,void 0),d(this,s,void 0),h(this,t,new Set),h(this,s,[])}addContextProvider(o){i(this,t).add(o)}hasContextProvider(o){return i(this,t).has(o)}addDeleteContextProviderHandler(o){i(this,s).push(o)}deleteAllContextProviders(){i(this,t).forEach(o=>{i(this,t).delete(o),i(this,s).forEach(r=>r(this))})}},t=new WeakMap,s=new WeakMap,n},Ft=e=>{var t,s;return s=class extends e{constructor(...n){super(...n),d(this,t,void 0),h(this,t,{onMount:null,onDestroy:null})}setOnMountHandler(n){i(this,t).onMount=n}setOnDestroyHandler(n){i(this,t).onDestroy=n}triggerOnMount(){i(this,t).onMount&&(i(this,t).onMount(),i(this,t).onMount=null)}triggerOnDestroy(){i(this,t).onDestroy&&(i(this,t).onDestroy(),i(this,t).onDestroy=null)}},t=new WeakMap,s};var z,k,Ee,Xe,Oe,Ye;class It extends $t(Ae(Ft(oe))){constructor(){super({type:"COMPONENT"}),d(this,Ee),d(this,Oe),d(this,z,void 0),d(this,k,void 0),h(this,z,null),h(this,k,{tempElement:null,isRendered:!1,renderFn:null,previousComponent:null}),w(this,Ee,Xe).call(this)}set key(t){h(this,z,t)}get key(){return i(this,z)}set renderFn(t){i(this,k).renderFn=t}get tempElement(){return i(this,k).tempElement}triggerLazyRender(){const t=N.get();t&&(this.shortcutParent=t,this.shortcutParent.addShortcutChild(this)),N.set(this);const s=i(this,k).renderFn();i(this,k).renderFn=null,i(this,k).isRendered=!0,te(i(this,k).previousComponent)&&N.set(i(this,k).previousComponent),w(this,Oe,Ye).call(this,s),this.triggerLazySetOutlet()}isRendered(){return i(this,k).isRendered}}z=new WeakMap,k=new WeakMap,Ee=new WeakSet,Xe=function(){const e=document.createComment("lazy-component");i(this,k).tempElement=e,this.nestedNodes=[e],this.domLength=1},Oe=new WeakSet,Ye=function(e){this.child=e,this.domLength=e.domLength,e.parent=this;const t=[],s=[];S(e)||F(e)?t.push(e.element):(t.push(e.nestedNodes),s.push(e)),this.nestedNodes=t,this.rerenderableChildren=s;const n=document.createDocumentFragment();n.append(...this.nodes),this.tempElement.replaceWith(n),this.parent.requestRerenderableChildrenUpdate(this,e.domLength-1)};const G=new Q,qt=new Q({}),I=e=>function(t){const{key:s,...n}=t??{},o=new It;let r=null;if(o.key=s??null,N.has()&&(r=N.get()),N.set(o),G.get()){const{pathname:a,query:u,dynamicKey:l}=G.get();o.pathname=a,o.queryParams=u,l&&(o.pathParam={key:l,value:a})}return o.renderFn=()=>e(n),N.set(r),o};class _e extends oe{constructor(...t){super({type:"ELEMENT",element:t[0].element}),this.domLength=1}appendChildren(t){let s=0,n=0;const o=[],r=[];for(let u=0;u<t.length;u++){const l=t[u];l&&(l.parent=this,this.addChild(l),S(l)||F(l)?(r.push(l.element),s+=1):(l.rerenderableIndex=n++,o.push(l),l.domIndex=s,s+=l.domLength,r.push(l.nestedNodes)))}this.rerenderableChildren=o,this.nestedNodes=r;const a=document.createDocumentFragment();a.append(...this.nodes),this.element.appendChild(a)}}const Ut=(e,t)=>{const s=new _e({element:e});s.appendChildren([t]),s.triggerCommit()},L=(e,t={})=>{const s=new _e({element:document.createElement(e)});return He(s,t),s},Bt=(e,t={})=>{const s=new _e({element:e.cloneNode(!0)});return He(s,t),s},H=e=>L("button",e),A=e=>L("div",e),Dt=e=>L("h1",e),ie=e=>L("h4",e),At=e=>L("header",e),jt=e=>L("main",e),Te=e=>L("p",e),Je=e=>L("section",e),zt=(e,t)=>Bt(e,t),Ht=(e,t)=>{t.forEach(s=>{Se(s)&&(b.set({type:"useEffect",property:"useEffect",value:e}),s(),b.set(null))})},Vt=()=>({current:null}),Gt={CREATE_CONTEXT_NOT_IN_COMPONENT_ERROR:"The `createContext` hook can only be used inside components.",USE_GLOBAL_STATE_NOT_IN_COMPONENT_ERROR:"The `useGlobalState` hook can only be used inside components.",ON_MOUNT_NOT_IN_COMPONENT_ERROR:"The `onMount` lifecycle hook can only be used inside components.",ON_DESTROY_NOT_IN_COMPONENT_ERROR:"The `onDestroy` lifecycle hook can only be used inside components.",USE_OUTLET_NOT_IN_COMPONENT_ERROR:"The `useOutlet` hook can only be used inside components.",USE_QUERY_PARAMS_NOT_IN_COMPONENT_ERROR:"The `useQueryParams` hook can only be used inside components."},et=e=>{throw new Error(Gt[e])},$=new Map,tt=(e,t,s)=>{const{overwrite:n=!1}={},o=N.get();if(o||et("USE_GLOBAL_STATE_NOT_IN_COMPONENT_ERROR"),Kt(o,e),$.has(e)){const{getState:r,setState:a}=$.get(e);return n&&a(t),$.get(e).count+=1,[r,a]}else{const[r,a]=Z(t);return $.set(e,{count:0,getState:r,setState:a}),[r,a]}},Kt=(e,t)=>{e.addUnsubscribeGlobalStateHandler(()=>{$.get(t).count-=1,$.get(t).count===0&&$.delete(t)})},B=()=>{var e;return((e=window.history.state)==null?void 0:e.newPath)||window.location.pathname},K=e=>e.length===0||e.length===1&&e[0]==="/"?[{pathname:"/",query:{}}]:e.split("/").filter(Boolean).map(t=>{const s=t.split(/[?&]/g),n=s.slice(1).reduce((o,r)=>{const a=r.split("=");return o[a[0]]=a[1],o},{});return{pathname:`/${s[0]}`,query:n}}),Zt=(e,t)=>{const s=K(e),n=K(t);if(s.length!==n.length)return!1;for(let o=0;o<s.length;o++)if(!st(s[o],n[o]))return!1;return!0},st=(e,t)=>{if(e===void 0&&t===void 0)return!0;if(!e||!t)return!1;const s=e.query,n=t.query;if(Object.keys(s).length!==Object.keys(n).length)return!1;for(const o in s)if(s[o]!==n[o])return!1;return e.pathname===t.pathname},Qt=e=>e.replace("/",""),We=e=>{const t=e.reduce((s,n)=>{const{pathType:o,dynamicKey:r,pathname:a}=n;return o==="dynamic"&&(s[r]=Qt(a)),s},{});qt.set(t)},nt=(()=>{const e={prevPath:"",newPath:""},[t,s]=Z([]),[n,o]=Z(B());return window.addEventListener("popstate",()=>{const r=B();e.prevPath=e.newPath,e.newPath=r,window.dispatchEvent(new Event("navigate"))}),{navigate:r=>{const a=B();if(!Zt(a,r)){e.prevPath=a,e.newPath=r;try{new URL(r).origin!==window.location.origin?window.open(r,"_blank"):(window.history.pushState({prevPath:a,newPath:r},"",r),window.dispatchEvent(new Event("navigate")))}catch{window.history.pushState({prevPath:a,newPath:r},"",r),window.dispatchEvent(new Event("navigate"))}}},onPathChange:r=>{o(B()),window.addEventListener("navigate",()=>{r(e),o(B())})},getPathname:n,getRoutes:t,setRoutes:s}})(),Xt=e=>{let t={static:{}};const s=(n,o)=>{for(const r in o){if(!Yt(r))throw new Error("Invalid pathname");if(Jt(r)){n.dynamic={dynamicKey:r.slice(2),pathname:r,componentFn:o[r].componentFn};const a=o[r].router;a&&(n.dynamic.router={static:{}},s(n.dynamic.router,a))}else{n.static[r]={pathname:r,componentFn:o[r].componentFn};const a=o[r].router;a&&(n.static[r].router={static:{}},s(n.static[r].router,a))}}};return s(t,e),t},Yt=e=>/^\/(:?[a-zA-Z0-9_-]*)$/.test(e),Jt=e=>/^\/:[a-zA-Z0-9_-]+$/.test(e),es=e=>{let t=Xt(e);const[s,n]=Z(null),{getRoutes:o,setRoutes:r,onPathChange:a}=nt;a(c=>{if(!c)return;const{prevPath:p,newPath:v}=c,E=K(p),m=K(v),g=u(m,t);We(g);for(let y=0;y<m.length;y++){const f=E==null?void 0:E[y],R=m[y];if(!st(f,R))if(y===0){const{rootComponent:_,currentRoutes:x}=l(g);r([...x]),n(_);break}else{const{rootComponent:_,currentRoutes:x}=l(g.slice(y)),O=o();O[y-1].component.setOutlet(_),r([...O.slice(0,y),...x]);break}if(y===m.length-1){const _=o();_[y].component.setOutlet(null),r([..._.slice(0,y+1)])}}});const u=(c,p)=>{const v=[];for(const E of c){const{pathname:m,query:g}=E;if(p.static[m])v.push({pathType:"static",pathname:m,query:g,componentFn:p.static[m].componentFn}),p=p.static[m].router;else if(p.dynamic)v.push({pathType:"dynamic",dynamicKey:p.dynamic.dynamicKey,pathname:m,query:g,componentFn:p.dynamic.componentFn}),p=p.dynamic.router;else{v.push({pathType:"error",pathname:m,query:g,componentFn:()=>I(()=>Dt({textContent:"404..."}))()});break}}return v},l=c=>{let p=[];return c.reverse().forEach((v,E)=>{var m;const{pathType:g,pathname:y,query:f,componentFn:R,dynamicKey:_}=v,x=(m=p[E-1])==null?void 0:m.component;g==="dynamic"?G.set({pathType:g,pathname:y,query:f,dynamicKey:_}):G.set({pathType:g,pathname:y,query:f});const O=R();G.set(null),x&&(O.lazySetOutlet=()=>{O.setOutlet(x)}),p.push({pathType:g,pathname:y,query:f,component:O})}),{rootComponent:p.at(-1).component,currentRoutes:p.reverse()}};return(c=>{const p=K(c),v=u(p,t);We(v);const{rootComponent:E,currentRoutes:m}=l(v);r([...m]),n(E)})(B()),Qe(s,()=>s())},rt=()=>e=>{nt.navigate(e)},ts=()=>{const[e,t]=Z(null),s=N.get();return s||et("USE_OUTLET_NOT_IN_COMPONENT_ERROR"),s.setOutlet=t,Qe(e,()=>e())};var ss="_1su8wj90";const ns=I(()=>{const[e,t]=tt("LOGS",[]),s=Vt();return Ht(()=>{s.current&&(s.current.scrollTop=s.current.scrollHeight)},[e]),Je({classes:[it],children:[A({classes:[at],children:[H({classes:[lt],onclick:()=>{t([])},children:[zt(pt,{classes:[ht]})]}),Te({classes:[ct],textContent:"Console"})]}),A({ref:s,classes:[dt,ss],children:[Tt(e,n=>Te({classes:[ut],textContent:`${n}`}))]})]})});var rs="_8tdhcf0";const os=e=>{const{web:t}=e;return Je({classes:[rs],children:[t]})},is=()=>{const e=console.log,[t,s]=tt("LOGS",[]);console.log=(...o)=>{e.apply(console,o),n(o)};const n=o=>{const r=o.map(a=>typeof a=="string"?a:JSON.stringify(a)).join(" ");s([...t(),r])}},as=(e,t)=>e?[t()]:[],ls=I(e=>{const{showConsole:t,web:s}=e;return t&&is(),document.querySelector("body").style.margin="0",A({classes:[ot],style:{height:"100vh"},children:[os({web:s}),...as(t,()=>ns())]})});var hs="zwer6o0",cs="zwer6o1";const ds=()=>(rt()("/"),jt({classes:[hs],children:[us(),es({"/":{componentFn:()=>ps()},"/product":{componentFn:()=>ms(),router:{"/apple":{componentFn:()=>ys()}}},"/about":{componentFn:()=>fs()}})]})),us=()=>{const e=rt();return At({classes:[cs],children:[H({textContent:"/",onclick:()=>e("/")}),H({textContent:"/product",onclick:()=>e("/product")}),H({textContent:"/product/apple",onclick:()=>e("/product/apple")}),H({textContent:"/about",onclick:()=>e("/about")})]})},ps=I(()=>A({children:[ie({textContent:"Home"})]})),ms=I(()=>{const e=ts();return A({children:[ie({textContent:"Product"}),e]})}),ys=I(()=>ie({textContent:"Apple"})),fs=I(()=>A({children:[ie({textContent:"About"})]}));document.title="router Ex1";Ut(document.getElementById("app"),ls({web:ds(),showConsole:!1}));
