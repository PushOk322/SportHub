"use strict";(self.webpackChunksporrthub=self.webpackChunksporrthub||[]).push([[8385],{52713:(S,L,n)=>{n.d(L,{r:()=>I});var m=n(27279),g=n(68263),O=n(70627),A=n.n(O),F=n(67621);function v(b,C,p){if(!b||!C)return{display:"none"};const{x:P,y:K}=p;return{transform:`translate(${P}px, ${K}px)`}}function I({renderItem:b}){const{itemType:C,isDragging:p,item:P,initialOffset:K,currentOffset:U,mouseOffset:Z}=(0,F.useDragLayer)(M=>({item:M.getItem(),itemType:M.getItemType(),initialOffset:M.getInitialSourceClientOffset(),currentOffset:M.getSourceClientOffset(),isDragging:M.isDragging(),mouseOffset:M.getClientOffset()}));return p?m.createElement(g.x,{height:"100%",left:0,position:"fixed",pointerEvents:"none",top:0,zIndex:100,width:"100%"},m.createElement(g.x,{style:v(K,U,Z)},b({type:C,item:P}))):null}I.propTypes={renderItem:A().func.isRequired}},27661:(S,L,n)=>{var m=n(27279);const g=(0,m.createContext)();var O=null},21440:(S,L,n)=>{n.d(L,{PL:()=>F,Y9:()=>v.Y,zE:()=>ie,Ky:()=>Q,fi:()=>ne,zH:()=>ce,r5:()=>a});var m=n(27279),g=n(49402),O=n(25398);const F=()=>{const e=(0,g.v9)(O.Z),t=(0,m.useCallback)(s=>e?.components?.[s]??{},[e]);return{...e,getComponentLayout:t}};var v=n(79116),I=n(37919),b=n(5466),C=n(42225),p=n(61815);const P={error:null,isLoading:!0,layout:{},layouts:{}},U=(e,t)=>(0,p.ZP)(e,s=>{switch(t.type){case"GET_DATA":{s.isLoading=!0,s.error=null,s.layout={};break}case"GET_DATA_SUCCEEDED":{const i=t.data.contentType.uid;s.layout=t.data,s.layouts[i]=t.data,s.isLoading=!1;break}case"GET_DATA_ERROR":{s.isLoading=!1,s.error=t.error;break}case"SET_LAYOUT_FROM_STATE":{s.error=null,s.layout=e.layouts[t.uid];break}case"UPDATE_LAYOUT":{const i=e.layout;s.layout={...i,contentType:{uid:i.contentType.uid,...t.newLayout.contentType}},s.layouts[i.contentType.uid]={...i,contentType:{uid:i.contentType.uid,...t.newLayout.contentType}};break}default:return s}});var Z=n(8175),M=n.n(Z),H=n(98934),R=n.n(H),re=n(43433),N=n.n(re),q=n(21892);const $=(e,t)=>t.find(s=>s.uid===e),oe=(e,t)=>{const s=_(e,t),i=k(s.contentType,t),u=ee(s.contentType,s.components);return N()(s,["contentType","layouts","edit"],i),N()(s,["contentType","layouts","list"],u),Object.keys(s.components).forEach(c=>{const f=k(s.components[c],t);N()(s,["components",c,"layouts","edit"],f)}),s},_=(e,t)=>{const s=(0,q.w8)(M()(e),t,"contentType"),{components:i,contentType:u}=s,c=f=>Object.keys(f.metadatas).reduce((D,T)=>{const j=R()(f,["attributes",T],{});let x=f.metadatas[T];if(j.type==="relation"){const ye=$(j.targetModel,t),W=x.edit.mainField,X={name:W,schema:R()(ye,["attributes",W])};x={list:{...x.list,mainField:X},edit:{...x.edit,mainField:X}}}return D[T]=x,D},{});return N()(s,["contentType","metadatas"],c(u)),Object.keys(i).forEach(f=>{const D=i[f],T=c(D);N()(s,["components",f,"metadatas"],T)}),s},k=(e,t)=>e.layouts.edit.reduce((s,i)=>{const u=i.map(c=>{const f=R()(e,["attributes",c.name],{}),D={...c,fieldSchema:f,metadatas:R()(e,["metadatas",c.name,"edit"],{})};if(f.type==="relation"){const j=$(f.targetModel,t).pluginOptions||{};N()(D,"targetModelPluginOptions",j),N()(D,"queryInfos",{shouldDisplayRelationLink:Y(e,c.name,t)})}return D});return s.push(u),s},[]),ee=(e,t)=>e.layouts.list.reduce((i,u)=>{const c=R()(e,["attributes",u],{}),f=R()(e,["metadatas",u,"list"],{}),D=c.type;if(D==="relation")return i.push({key:`__${u}_key__`,name:u,fieldSchema:c,metadatas:f}),i;if(D==="component"){const T=t[c.component],j=T.settings.mainField,x=T.attributes[j];return i.push({key:`__${u}_key__`,name:u,fieldSchema:c,metadatas:{...f,mainField:{...x,name:j}}}),i}return i.push({key:`__${u}_key__`,name:u,fieldSchema:c,metadatas:f}),i},[]),Y=(e,t,s)=>{const i=R()(e,["attributes",t,"targetModel"],"");return B(s).includes(i)},B=e=>e.filter(t=>t.isDisplayed).map(({uid:t})=>t),V=oe,ie=e=>{const[{error:t,isLoading:s,layout:i,layouts:u},c]=(0,m.useReducer)(U,P),f=(0,m.useMemo)(C.Vo,[]),{schemas:D}=(0,g.v9)(W=>f(W),g.wU),T=(0,m.useRef)(!0),{get:j}=(0,I.kY)(),x=(0,m.useCallback)(async(W,X)=>{if(u[W]){c({type:"SET_LAYOUT_FROM_STATE",uid:W});return}c({type:"GET_DATA"});try{const{data:{data:se}}=await j(`/content-manager/content-types/${W}/configuration`,{cancelToken:X.token});c({type:"GET_DATA_SUCCEEDED",data:V(se,D)})}catch(se){if(b.default.isCancel(se))return;T.current&&console.error(se),T.current&&c({type:"GET_DATA_ERROR",error:se})}},[u,D,j]);(0,m.useEffect)(()=>()=>{T.current=!1},[]),(0,m.useEffect)(()=>{const X=b.default.CancelToken.source();return x(e,X),()=>{X.cancel("Operation canceled by the user.")}},[e,x]);const ye=(0,m.useCallback)(W=>{c({type:"UPDATE_LAYOUT",newLayout:V(W,D)})},[D]);return{error:t,isLoading:s,layout:i,updateLayout:ye}},ge=e=>e["content-manager_app"].collectionTypeLinks;var ue=n(3243),h=n.n(ue),J=n(29206);const ae=(e,t)=>Object.keys(e).reduce((s,i)=>{const u=e[i],c=R()(t,[i],u);return h()(u)?{...s,[i]:ae(u,c)}:(s[i]=c,s)},{}),le=(e,t,s)=>{const i=e.find(({to:x})=>x.includes(t));if(!i)return"/";const{to:u,search:c}=i,f=(0,J.parse)(c),D=(0,J.parse)(s.substring(1)),T=ae(f,D);return`${u}?${(0,J.stringify)(T,{encode:!1})}`},Q=e=>{const[{rawQuery:t}]=(0,I.Kx)(),s=(0,g.v9)(ge);return le(s,e,t)};var Te=n(25950),z=n(51447);const ne=()=>{const{search:e}=(0,z.TH)(),t=e?(0,J.parse)(e.substring(1)):{};return t.plugins?(0,J.stringify)({plugins:t.plugins},{encode:!1}):""},ce=e=>{const t=(0,m.useRef)();return(0,m.useEffect)(()=>{t.current=e},[e]),t.current};var w=n(14996);const de=(e,t,s)=>({type:w.m,permissions:e,__meta__:{plugins:t,containerName:s}}),me=()=>({type:w.Q}),fe=e=>e["content-manager_rbacManager"].permissions,r=e=>e.rbacProvider.collectionTypesRelatedPermissions,a=(e,t,s="listView")=>{const i=(0,g.I0)(),u=(0,g.v9)(r),c=(0,g.v9)(fe),f=u[t];(0,m.useEffect)(()=>f?(i(de(f,e?e.plugins:null,s)),()=>{i(me())}):()=>{},[f,i,e,s]);const D=c?.some(T=>T.subject!==t)??!0;return{isValid:c&&!D,permissions:c}};var o=n(27661);const d=()=>useContext(WysiwygContext),y=null},79116:(S,L,n)=>{n.d(L,{Y:()=>F});var m=n(27279),g=n(67621),O=n.n(g),A=n(25950);const F=(v,{type:I="STRAPI_DND",index:b,item:C={},onStart:p,onEnd:P,onGrabItem:K,onDropItem:U,onCancel:Z,onMoveItem:M,dropSensitivity:H="regular"})=>{const R=(0,m.useRef)(null),[{handlerId:re},N]=(0,g.useDrop)({accept:I,collect(k){return{handlerId:k.getHandlerId()}},hover(k,ee){if(!R.current)return;const Y=k.index,B=b;if(Y!==B){if(H==="regular"){const V=R.current.getBoundingClientRect(),te=(V.bottom-V.top)/2,G=ee.getClientOffset().y-V.top;if(Y<B&&G<te||Y>B&&G>te)return}M(B,Y),k.index=B}}}),[{isDragging:q},$,oe]=(0,g.useDrag)({type:I,item(){p&&p();const{width:k}=R.current?.getBoundingClientRect()??{};return{index:b,width:k,...C}},end(){P&&P()},canDrag:v,isDragging:C.id?k=>C.id===k.getItem().id:void 0,collect:k=>({isDragging:k.isDragging()})}),_=(0,A.A)(v,b,{onGrabItem:K,onDropItem:U,onCancel:Z,onMoveItem:M});return[{handlerId:re,isDragging:q,handleKeyDown:_},R,N,$,oe]}},25950:(S,L,n)=>{n.d(L,{A:()=>g});var m=n(27279);const g=(O,A,{onCancel:F,onDropItem:v,onGrabItem:I,onMoveItem:b})=>{const[C,p]=(0,m.useState)(!1),P=M=>{C&&(M==="UP"?b(A-1,A):M==="DOWN"&&b(A+1,A))},K=()=>{C?(v&&v(A),p(!1)):(I&&I(A),p(!0))},U=()=>{C&&(p(!1),F&&F(A))};return M=>{if(O&&!(M.key==="Tab"&&!C))switch(M.preventDefault(),M.key){case" ":case"Enter":K();break;case"Escape":U();break;case"ArrowDown":case"ArrowRight":P("DOWN");break;case"ArrowUp":case"ArrowLeft":P("UP");break;default:}}}},42225:(S,L,n)=>{n.d(L,{Jg:()=>b,KQ:()=>v,Vo:()=>I,Yg:()=>O});var m=n(57150),g=n(23301);const O=()=>p=>p["content-manager_app"]||g.E,A=()=>createSelector(O(),p=>p),F=()=>createSelector(O(),p=>p.models),v=()=>(0,m.P1)(O(),p=>({collectionTypeLinks:p.collectionTypeLinks,singleTypeLinks:p.singleTypeLinks})),I=()=>(0,m.P1)(O(),({components:p,models:P})=>({schemas:[...p,...P]})),b=(0,m.P1)(O(),p=>p.fieldSizes);var C=null},25398:(S,L,n)=>{n.d(L,{Z:()=>g});const g=O=>O["content-manager_editViewLayoutManager"].currentLayout},56837:(S,L,n)=>{n.d(L,{Z:()=>m});const m={COMPONENT:"component",EDIT_FIELD:"editField",FIELD:"field",DYNAMIC_ZONE:"dynamicZone",RELATION:"relation"}},78186:(S,L,n)=>{n.d(L,{G:()=>m});const m=({firstname:g,lastname:O,username:A,email:F},v)=>A||(g?v({id:"global.fullname",defaultMessage:"{firstname} {lastname}"},{firstname:g,lastname:O}).trim():F)},45283:(S,L,n)=>{n.d(L,{Z:()=>g});const g=O=>`content-manager.${O}`},21892:(S,L,n)=>{n.d(L,{_Q:()=>B.Z,W3:()=>A,ko:()=>v,FE:()=>b,Di:()=>K,Ex:()=>me,du:()=>H,TA:()=>N,Gf:()=>fe.G,Ts:()=>_,Uo:()=>ee,OB:()=>Y.Z,w8:()=>ue,kc:()=>ae});var m=n(8175),g=n.n(m);const A=(r,l,a)=>{if(Array.isArray(r)&&l>=0&&a>=0&&l<=r.length-1&&a<=r.length-1){const o=g()(r),d=o.splice(l,1);return o.splice(a,0,d[0]),o}return r},v=r=>{const{type:l}=r;return l==="relation"?!(r?.relationType??"").toLowerCase().includes("morph"):!["json","dynamiczone","richtext","password"].includes(l)&&!!l},I=(r,l)=>{typeof r=="function"?r(l):r!=null&&(r.current=l)},b=(...r)=>l=>r.forEach(a=>I(a,l));var C=n(98934),p=n.n(C);const P=(r,l)=>Object.keys(r).reduce((a,o)=>{const d=p()(r,[o],{}),{default:y,component:e,type:t,required:s,min:i,repeatable:u}=d;if(y!==void 0&&(a[o]=y),t==="component"){const c=l?.[e]?.attributes??{},f=P(c,l);if(s===!0&&(a[o]=u===!0?[]:f),i&&u===!0&&s){a[o]=[];for(let D=0;D<i;D+=1)a[o].push(f)}}return t==="dynamiczone"&&s===!0&&(a[o]=[]),a},{}),K=P;var U=n(74919),Z=n.n(U);const H=({layouts:r,metadatas:l,...a})=>{const o=r.list.map(e=>e.name?e.name:e),d=Object.keys(l).reduce((e,t)=>{const s=p()(l,[t],{});let i=s.edit;return i.mainField&&(i={...i,mainField:s.edit.mainField.name}),{...e,[t]:{edit:i,list:Z()(s.list,["mainField"])}}},{}),y=r.edit.map(e=>e.map(({name:t,size:s})=>({name:t,size:s})));return{...a,layouts:{edit:y,list:o},metadatas:d}},R=(r,l)=>r.map(a=>({...a,subject:l})),N=r=>{const l={create:[{action:"plugin::content-manager.explorer.create",subject:null}],delete:[{action:"plugin::content-manager.explorer.delete",subject:null}],publish:[{action:"plugin::content-manager.explorer.publish",subject:null}],read:[{action:"plugin::content-manager.explorer.read",subject:null}],update:[{action:"plugin::content-manager.explorer.update",subject:null}]};return Object.keys(l).reduce((a,o)=>(a[o]=R(l[o],r),a),{})};var q=n(92249),$=n.n(q);const _=r=>r.split(".").filter(l=>$()(parseInt(l,10))),ee=r=>{if(r.length===0)return-1;const l=Math.max.apply(Math,r.map(a=>a.__temp_key__??0));return Number.isNaN(l)?-1:l};var Y=n(45283),B=n(56837),V=n(87830),te=n.n(V),ie=n(43433),G=n.n(ie);const ue=(r,l,a)=>{const o=t=>l.find(s=>s.uid===t),d=Object.assign({},r),y=r[a].uid,e=o(y);return G()(d,[a],te()({},e,r[a])),Object.keys(r.components).forEach(t=>{const s=o(t);G()(d,["components",t],{...r.components[t],...s})}),d};var h=n(37919);const ae=(r,l,a)=>{const o=(d,y)=>Object.keys(d).reduce((e,t)=>{const s=(0,h.UN)(y,t),i=p()(d,t),u=(0,h.k2)(y,[t,"component"]),c=(0,h.k2)(y,[t,"repeatable"]);return s==="dynamiczone"?(e[t]=i.map(f=>o(f,a[f.__component])),e):s==="component"?(c?e[t]=i&&i.map(f=>o(f,a[u])):e[t]=i&&o(i,a[u]),e):(s!=="password"&&(e[t]=i),e)},{});return o(r,l)};var pe=n(86961),le=n.n(pe),he=n(10124),Q=n.n(he),Te=n(51527),z=n.n(Te),E=n(47853),ne=n(72262);E.kM(E.nK,"defined",function(){return this.test("defined",h.I0.required,r=>r!==void 0)}),E.kM(E.IX,"notEmptyMin",function(r){return this.test("notEmptyMin",h.I0.min,l=>Q()(l)?!0:l.length>=r)}),E.kM(E.Z_,"isInferior",function(r,l){return this.test("isInferior",r,function(a){return!a||Number.isNaN(z()(a))?!0:z()(l)>=z()(a)})}),E.kM(E.Z_,"isSuperior",function(r,l){return this.test("isSuperior",r,function(a){return!a||Number.isNaN(z()(a))?!0:z()(a)>=z()(l)})});const ce=r=>p()(r,["attributes"],{}),w=(r,{components:l},a={isCreatingEntry:!0,isDraft:!0,isFromComponent:!1,isJSONTestDisabled:!1})=>{const o=ce(r);return E.Ry().shape(Object.keys(o).reduce((d,y)=>{const e=o[y];if(e.type!=="relation"&&e.type!=="component"&&e.type!=="dynamiczone"){const t=de(e.type,e,a);d[y]=t}if(e.type==="relation"&&(d[y]=["oneWay","oneToOne","manyToOne","oneToManyMorph","oneToOneMorph"].includes(e.relationType)?E.Ry().nullable():E.IX().nullable()),e.type==="component"){const t=w(l[e.component],{components:l},{...a,isFromComponent:!0});if(e.repeatable===!0){const{min:i,max:u,required:c}=e;let f=E.Vo(D=>{let T=E.IX().of(t);return i?c?T=T.min(i,h.I0.min):c!==!0&&Q()(D)?T=T.nullable():T=T.min(i,h.I0.min):c&&!a.isDraft&&(T=T.min(1,h.I0.required)),u&&(T=T.max(u,h.I0.max)),T});return d[y]=f,d}const s=E.Vo(i=>i!==void 0?e.required===!0&&!a.isDraft?t.defined():t.nullable():e.required===!0?E.Ry().defined():E.Ry().nullable());return d[y]=s,d}if(e.type==="dynamiczone"){let t=E.IX().of(E.Vo(({__component:u})=>w(l[u],{components:l},{...a,isFromComponent:!0})));const{max:s,min:i}=e;i?e.required?t=t.test("min",h.I0.min,u=>a.isCreatingEntry?u&&u.length>=i:u===void 0?!0:u!==null&&u.length>=i).test("required",h.I0.required,u=>a.isCreatingEntry?u!==null||u!==void 0:u===void 0?!0:u!==null):t=t.notEmptyMin(i):e.required&&!a.isDraft&&(t=t.test("required",h.I0.required,u=>a.isCreatingEntry?u!==null||u!==void 0:u===void 0?!0:u!==null)),s&&(t=t.max(s,h.I0.max)),d[y]=t}return d},{}))},de=(r,l,a)=>{let o=E.nK();return["string","uid","text","richtext","email","password","enumeration"].includes(r)&&(o=E.Z_()),r==="json"&&(o=E.nK(h.I0.json).test("isJSON",h.I0.json,d=>{if(a.isJSONTestDisabled||!d||!d.length)return!0;try{return JSON.parse(d),!0}catch{return!1}}).nullable().test("required",h.I0.required,d=>!(l.required&&(!d||!d.length)))),r==="email"&&(o=o.email(h.I0.email)),["number","integer","float","decimal"].includes(r)&&(o=E.Rx().transform(d=>$()(d)?void 0:d).typeError()),r==="biginteger"&&(o=E.Z_().matches(/^-?\d*$/)),["date","datetime"].includes(r)&&(o=E.hT()),Object.keys(l).forEach(d=>{const y=l[d];if(y||!le()(y)&&Number.isInteger(Math.floor(y))||y===0)switch(d){case"required":{a.isDraft||(r==="password"&&a.isCreatingEntry&&(o=o.required(h.I0.required)),r!=="password"&&(a.isCreatingEntry?o=o.required(h.I0.required):o=o.test("required",h.I0.required,e=>e===void 0&&!a.isFromComponent?!0:(0,ne.Z)(r)?e===0?!0:!!e:r==="boolean"?e!=null:r==="date"||r==="datetime"?typeof e=="string"?!Q()(e):!Q()(e?.toString()):!Q()(e))));break}case"max":{r==="biginteger"?o=o.isInferior(h.I0.max,y):o=o.max(y,h.I0.max);break}case"maxLength":o=o.max(y,h.I0.maxLength);break;case"min":{r==="biginteger"?o=o.isSuperior(h.I0.min,y):o=o.min(y,h.I0.min);break}case"minLength":{a.isDraft||(o=o.min(y,h.I0.minLength));break}case"regex":o=o.matches(new RegExp(y),{message:h.I0.regex,excludeEmptyString:!l.required});break;case"lowercase":["text","textarea","email","string"].includes(r)&&(o=o.strict().lowercase());break;case"uppercase":["text","textarea","email","string"].includes(r)&&(o=o.strict().uppercase());break;case"positive":(0,ne.Z)(r)&&(o=o.positive());break;case"negative":(0,ne.Z)(r)&&(o=o.negative());break;default:o=o.nullable()}}),o},me=w;var fe=n(78186)},72262:(S,L,n)=>{n.d(L,{Z:()=>m});function m(g){return["integer","biginteger","decimal","float","number"].includes(g)}}}]);
