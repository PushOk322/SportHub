(self.webpackChunksporrthub=self.webpackChunksporrthub||[]).push([[8853],{26302:(p,g,t)=>{"use strict";t.r(g),t.d(g,{default:()=>At});var e=t(27279),n=t(37919),a=t(51447),r=t(84419),o=t(65e3),c=t(42925),i=t(6854),E=t(35750),h=t(33110),u=t(19915),A=t(86049),x=t(25667),d=t(54095),m=t(60910),M=t(8766),P=t(71563),f=t(61020),j=t(40464),Z=t(70627),O=t.n(Z);const N=(0,e.createContext)({}),$=({children:s,value:l})=>e.createElement(N.Provider,{value:l},s),w=()=>(0,e.useContext)(N);$.propTypes={children:O().node.isRequired,value:O().object.isRequired};var U=t(58655),J=t(59438),G=t(68809),le=t(3667),se=t(51943),de=t.n(se);function V(s){switch(s){case"application":return"Application";case"plugin::content-manager":return"Content manager";case"plugin::content-type-builder":return"Content types builder";case"plugin::documentation":return"Documentation";case"plugin::email":return"Email";case"plugin::i18n":return"i18n";case"plugin::upload":return"Upload";case"plugin::users-permissions":return"Users-permissions";default:return de()(s.replace("api::","").replace("plugin::",""))}}const ae=V,ce=(s,l)=>{const v=Object.keys(l).sort().map(y=>({name:y,isOpen:!1}));return{...s,collapses:v}};var F=t(68263),ue=t(8243),q=t.n(ue),_=t(17587),ee=t(30249),De=t(91396),je=t(98934),re=t.n(je),te=t(72450);const Ee=(0,te.iv)`
  background: ${s=>s.theme.colors.primary100};
  svg {
    opacity: 1;
  }
`,Be=(0,te.ZP)(F.x)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    opacity: 0;
    path {
      fill: ${s=>s.theme.colors.primary600};
    }
  }

  /* Show active style both on hover and when the action is selected */
  ${s=>s.isActive&&Ee}
  &:hover {
    ${Ee}
  }
`,Ze=te.ZP.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:s})=>s.colors.neutral150};
`,fe=({subCategory:s})=>{const{formatMessage:l}=(0,f.Z)(),{onChange:v,onChangeSelectAll:y,onSelectedAction:b,selectedAction:C,modifiedData:T}=w(),D=(0,e.useMemo)(()=>re()(T,s.name,{}),[T,s]),L=(0,e.useMemo)(()=>Object.values(D).every(R=>R.enabled===!0),[D]),B=(0,e.useMemo)(()=>Object.values(D).some(R=>R.enabled===!0)&&!L,[D,L]),S=(0,e.useCallback)(({target:{name:R}})=>{y({target:{name:R,value:!L}})},[L,y]),I=(0,e.useCallback)(R=>C===R,[C]);return e.createElement(F.x,null,e.createElement(h.k,{justifyContent:"space-between",alignItems:"center"},e.createElement(F.x,{paddingRight:4},e.createElement(u.Z,{variant:"sigma",textColor:"neutral600"},s.label)),e.createElement(Ze,null),e.createElement(F.x,{paddingLeft:4},e.createElement(_.X,{name:s.name,value:L,onValueChange:R=>S({target:{name:s.name,value:R}}),indeterminate:B},l({id:"app.utils.select-all",defaultMessage:"Select all"})))),e.createElement(h.k,{paddingTop:6,paddingBottom:6},e.createElement(A.r,{gap:2,style:{flex:1}},s.actions.map(R=>{const W=`${R.name}.enabled`;return e.createElement(x.P,{col:6,key:R.name},e.createElement(Be,{isActive:I(R.name),padding:2,hasRadius:!0},e.createElement(_.X,{value:re()(T,W,!1),name:W,onValueChange:k=>v({target:{name:W,value:k}})},R.label),e.createElement("button",{type:"button",onClick:()=>b(R.name),style:{display:"inline-flex",alignItems:"center"}},e.createElement(ee.T,{as:"span"},l({id:"app.utils.show-bound-route",defaultMessage:"Show bound route for {route}"},{route:R.name})),e.createElement(De.Z,null))))}))))};fe.propTypes={subCategory:O().object.isRequired};const Se=fe,ve=({name:s,permissions:l})=>{const v=(0,e.useMemo)(()=>q()(Object.values(l.controllers).reduce((y,b,C)=>{const T=`${s}.controllers.${Object.keys(l.controllers)[C]}`,D=q()(Object.keys(b).reduce((L,B)=>[...L,{...b[B],label:B,name:`${T}.${B}`}],[]),"label");return[...y,{actions:D,label:Object.keys(l.controllers)[C],name:T}]},[]),"label"),[s,l]);return e.createElement(F.x,{padding:6},v.map(y=>e.createElement(Se,{key:y.name,subCategory:y})))};ve.propTypes={name:O().string.isRequired,permissions:O().object.isRequired};const $e=ve;var xe=t(61815);const Ie={collapses:[]},Ue=(s,l)=>(0,xe.ZP)(s,v=>{switch(l.type){case"TOGGLE_COLLAPSE":{v.collapses=s.collapses.map((y,b)=>b===l.index?{...y,isOpen:!y.isOpen}:{...y,isOpen:!1});break}default:return v}}),We=()=>{const{modifiedData:s}=w(),{formatMessage:l}=(0,f.Z)(),[{collapses:v},y]=(0,e.useReducer)(Ue,Ie,C=>ce(C,s)),b=C=>y({type:"TOGGLE_COLLAPSE",index:C});return e.createElement(h.k,{direction:"column",alignItems:"stretch",gap:1},v.map((C,T)=>e.createElement(J.U,{expanded:C.isOpen,onToggle:()=>b(T),key:C.name,variant:T%2===0?"secondary":void 0},e.createElement(G.B,{title:ae(C.name),description:l({id:"users-permissions.Plugin.permissions.plugins.description",defaultMessage:"Define all allowed actions for the {name} plugin."},{name:C.name}),variant:T%2?"primary":"secondary"}),e.createElement(le.v,null,e.createElement($e,{permissions:s[C.name],name:C.name})))))};var Ke=t(10124),Ne=t.n(Ke),ke=t(87366),we=t.n(ke),Fe=t(58422),ze=t.n(Fe),Ge=t(34049),He=t.n(Ge);const Qe=s=>{switch(s){case"POST":return{text:"success600",border:"success200",background:"success100"};case"GET":return{text:"secondary600",border:"secondary200",background:"secondary100"};case"PUT":return{text:"warning600",border:"warning200",background:"warning100"};case"DELETE":return{text:"danger600",border:"danger200",background:"danger100"};default:return{text:"neutral600",border:"neutral200",background:"neutral100"}}},Ve=(0,te.ZP)(F.x)`
  margin: -1px;
  border-radius: ${({theme:s})=>s.spaces[1]} 0 0 ${({theme:s})=>s.spaces[1]};
`;function me({route:s}){const{formatMessage:l}=(0,f.Z)(),{method:v,handler:y,path:b}=s,C=b?He()(b.split("/")):[],[T="",D=""]=y?y.split("."):[],L=Qe(s.method);return e.createElement(h.k,{direction:"column",alignItems:"stretch",gap:2},e.createElement(u.Z,{variant:"delta",as:"h3"},l({id:"users-permissions.BoundRoute.title",defaultMessage:"Bound route to"}),"\xA0",e.createElement("span",null,T),e.createElement(u.Z,{variant:"delta",textColor:"primary600"},".",D)),e.createElement(h.k,{hasRadius:!0,background:"neutral0",borderColor:"neutral200",gap:0},e.createElement(Ve,{background:L.background,borderColor:L.border,padding:2},e.createElement(u.Z,{fontWeight:"bold",textColor:L.text},v)),e.createElement(F.x,{paddingLeft:2,paddingRight:2},ze()(C,B=>e.createElement(u.Z,{key:B,textColor:B.includes(":")?"neutral600":"neutral900"},"/",B)))))}me.defaultProps={route:{handler:"Nocontroller.error",method:"GET",path:"/there-is-no-path"}},me.propTypes={route:O().shape({handler:O().string,method:O().string,path:O().string})};const Ye=me,Xe=()=>{const{formatMessage:s}=(0,f.Z)(),{selectedAction:l,routes:v}=w(),y=we()(l.split("."),"controllers"),b=re()(v,y[0]),C=y.slice(1).join("."),T=Ne()(b)?[]:b.filter(D=>D.handler.endsWith(C));return e.createElement(x.P,{col:5,background:"neutral150",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,style:{minHeight:"100%"}},l?e.createElement(h.k,{direction:"column",alignItems:"stretch",gap:2},T.map((D,L)=>e.createElement(Ye,{key:L,route:D}))):e.createElement(h.k,{direction:"column",alignItems:"stretch",gap:2},e.createElement(u.Z,{variant:"delta",as:"h3"},s({id:"users-permissions.Policies.header.title",defaultMessage:"Advanced settings"})),e.createElement(u.Z,{as:"p",textColor:"neutral600"},s({id:"users-permissions.Policies.header.hint",defaultMessage:"Select the application's actions or the plugin's actions and click on the cog icon to display the bound route"}))))},Je=(s,l,v)=>({...s,initialData:l,modifiedData:l,routes:v});var qe=t(43433),ye=t.n(qe),_e=t(41942),et=t.n(_e);const tt={initialData:{},modifiedData:{},routes:{},selectedAction:"",policies:[]},nt=(s,l)=>(0,xe.ZP)(s,v=>{switch(l.type){case"ON_CHANGE":{const y=l.keys.length,b=l.keys[y-1]==="enabled";if(l.value&&b){const C=et()(l.keys,y-1).join(".");v.selectedAction=C}ye()(v,["modifiedData",...l.keys],l.value);break}case"ON_CHANGE_SELECT_ALL":{const y=["modifiedData",...l.keys],b=re()(s,y,{}),C=Object.keys(b).reduce((T,D)=>(T[D]={...b[D],enabled:l.value},T),{});ye()(v,y,C);break}case"ON_RESET":{v.modifiedData=s.initialData;break}case"ON_SUBMIT_SUCCEEDED":{v.initialData=s.modifiedData;break}case"SELECT_ACTION":{const{actionToSelect:y}=l;v.selectedAction=y===s.selectedAction?"":y;break}default:return v}}),Pe=(0,e.forwardRef)(({permissions:s,routes:l},v)=>{const{formatMessage:y}=(0,f.Z)(),[b,C]=(0,e.useReducer)(nt,tt,S=>Je(S,s,l));(0,e.useImperativeHandle)(v,()=>({getPermissions(){return{permissions:b.modifiedData}},resetForm(){C({type:"ON_RESET"})},setFormAfterSubmit(){C({type:"ON_SUBMIT_SUCCEEDED"})}}));const B={...b,onChange:({target:{name:S,value:I}})=>C({type:"ON_CHANGE",keys:S.split("."),value:I==="empty__string_value"?"":I}),onChangeSelectAll:({target:{name:S,value:I}})=>C({type:"ON_CHANGE_SELECT_ALL",keys:S.split("."),value:I}),onSelectedAction:S=>C({type:"SELECT_ACTION",actionToSelect:S})};return e.createElement($,{value:B},e.createElement(A.r,{gap:0,shadow:"filterShadow",hasRadius:!0,background:"neutral0"},e.createElement(x.P,{col:7,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(h.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(h.k,{direction:"column",alignItems:"stretch",gap:2},e.createElement(u.Z,{variant:"delta",as:"h2"},y({id:(0,U.Z)("Plugins.header.title"),defaultMessage:"Permissions"})),e.createElement(u.Z,{as:"p",textColor:"neutral600"},y({id:(0,U.Z)("Plugins.header.description"),defaultMessage:"Only actions bound by a route are listed below."}))),e.createElement(We,null))),e.createElement(Xe,null)))});Pe.propTypes={permissions:O().object.isRequired,routes:O().object.isRequired};const Ce=(0,e.memo)(Pe);var ge=t(47853);const Me=ge.Ry().shape({name:ge.Z_().required(n.I0.required),description:ge.Z_().required(n.I0.required)});var ne=t(99688);const Re=()=>{const s=(0,n.lm)(),{get:l}=(0,n.kY)(),{formatAPIError:v}=(0,n.So)(ne.OB),[{data:y,isLoading:b,error:C,refetch:T},{data:D,isLoading:L,error:B,refetch:S}]=(0,j.useQueries)([{queryKey:["users-permissions","permissions"],async queryFn(){const{data:{permissions:W}}=await l("/users-permissions/permissions");return W}},{queryKey:["users-permissions","routes"],async queryFn(){const{data:{routes:W}}=await l("/users-permissions/routes");return W}}]),I=async()=>{await Promise.all([T(),S()])};(0,e.useEffect)(()=>{C&&s({type:"warning",message:v(C)})},[s,C,v]),(0,e.useEffect)(()=>{B&&s({type:"warning",message:v(B)})},[s,B,v]);const R=b||L;return{permissions:y?(0,ne.YX)(y):{},routes:D??{},getData:I,isLoading:R}},st=()=>{const{formatMessage:s}=(0,f.Z)(),l=(0,n.lm)(),{goBack:v}=(0,a.k6)(),{lockApp:y,unlockApp:b}=(0,n.o1)(),{isLoading:C,permissions:T,routes:D}=Re(),{trackUsage:L}=(0,n.rS)(),B=e.useRef(),{post:S}=(0,n.kY)(),I=(0,j.useMutation)(W=>S("/users-permissions/roles",W),{onError(){l({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})},onSuccess(){L("didCreateRole"),l({type:"success",message:{id:(0,U.Z)("Settings.roles.created"),defaultMessage:"Role created"}}),v()}}),R=async W=>{y();const k=B.current.getPermissions();await I.mutate({...W,...k,users:[]}),b()};return e.createElement(o.o,null,e.createElement(n.SL,{name:"Roles"}),e.createElement(P.J9,{enableReinitialize:!0,initialValues:{name:"",description:""},onSubmit:R,validationSchema:Me},({handleSubmit:W,values:k,handleChange:Y,errors:K})=>e.createElement(n.l0,{noValidate:!0,onSubmit:W},e.createElement(c.T,{primaryAction:!C&&e.createElement(i.z,{type:"submit",loading:I.isLoading,startIcon:e.createElement(M.Z,null)},s({id:"global.save",defaultMessage:"Save"})),title:s({id:"Settings.roles.create.title",defaultMessage:"Create a role"}),subtitle:s({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"})}),e.createElement(E.D,null,e.createElement(h.k,{background:"neutral0",direction:"column",alignItems:"stretch",gap:7,hasRadius:!0,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,shadow:"filterShadow"},e.createElement(h.k,{direction:"column",alignItems:"stretch"},e.createElement(u.Z,{variant:"delta",as:"h2"},s({id:(0,U.Z)("EditPage.form.roles"),defaultMessage:"Role details"})),e.createElement(A.r,{gap:4},e.createElement(x.P,{col:6},e.createElement(d.o,{name:"name",value:k.name||"",onChange:Y,label:s({id:"global.name",defaultMessage:"Name"}),error:K?.name?s({id:K.name}):!1,required:!0})),e.createElement(x.P,{col:6},e.createElement(m.g,{id:"description",value:k.description||"",onChange:Y,label:s({id:"global.description",defaultMessage:"Description"}),error:K?.description?s({id:K.description}):!1,required:!0})))),!C&&e.createElement(Ce,{ref:B,permissions:T,routes:D}))))))},at=()=>e.createElement(n.O4,{permissions:r._.createRole},e.createElement(st,null));var rt=t(97367);const ot=()=>{const{formatMessage:s}=(0,f.Z)(),l=(0,n.lm)(),{lockApp:v,unlockApp:y}=(0,n.o1)(),{params:{id:b}}=(0,a.$B)("/settings/users-permissions/roles/:id"),{get:C}=(0,n.kY)(),{isLoading:T,routes:D}=Re(),{data:L,isLoading:B,refetch:S}=(0,j.useQuery)(["users-permissions","role",b],async()=>{const{data:{role:K}}=await C(`/users-permissions/roles/${b}`);return K}),I=e.useRef(),{put:R}=(0,n.kY)(),{formatAPIError:W}=(0,n.So)(),k=(0,j.useMutation)(K=>R(`/users-permissions/roles/${b}`,K),{onError(K){l({type:"warning",message:W(K)})},async onSuccess(){l({type:"success",message:{id:(0,U.Z)("Settings.roles.created"),defaultMessage:"Role edited"}}),await S()}}),Y=async K=>{v();const H=I.current.getPermissions();await k.mutate({...K,...H,users:[]}),y()};return B?e.createElement(n.dO,null):e.createElement(o.o,null,e.createElement(n.SL,{name:"Roles"}),e.createElement(P.J9,{enableReinitialize:!0,initialValues:{name:L.name,description:L.description},onSubmit:Y,validationSchema:Me},({handleSubmit:K,values:H,handleChange:oe,errors:X})=>e.createElement(n.l0,{noValidate:!0,onSubmit:K},e.createElement(c.T,{primaryAction:!T&&e.createElement(i.z,{disabled:L.code==="strapi-super-admin",type:"submit",loading:k.isLoading,startIcon:e.createElement(M.Z,null)},s({id:"global.save",defaultMessage:"Save"})),title:L.name,subtitle:L.description,navigationAction:e.createElement(n.rU,{startIcon:e.createElement(rt.Z,null),to:"/settings/users-permissions/roles"},s({id:"global.back",defaultMessage:"Back"}))}),e.createElement(E.D,null,e.createElement(h.k,{background:"neutral0",direction:"column",alignItems:"stretch",gap:7,hasRadius:!0,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,shadow:"filterShadow"},e.createElement(h.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(u.Z,{variant:"delta",as:"h2"},s({id:(0,U.Z)("EditPage.form.roles"),defaultMessage:"Role details"})),e.createElement(A.r,{gap:4},e.createElement(x.P,{col:6},e.createElement(d.o,{name:"name",value:H.name||"",onChange:oe,label:s({id:"global.name",defaultMessage:"Name"}),error:X?.name?s({id:X.name}):!1,required:!0})),e.createElement(x.P,{col:6},e.createElement(m.g,{id:"description",value:H.description||"",onChange:oe,label:s({id:"global.description",defaultMessage:"Description"}),error:X?.description?s({id:X.description}):!1,required:!0})))),!T&&e.createElement(Ce,{ref:I,permissions:L.permissions,routes:D}))))))},it=()=>e.createElement(n.O4,{permissions:r._.updateRole},e.createElement(ot,null));var lt=t(20600),dt=t(9),ct=t(53141),ut=t(63434),mt=t(42879),Ae=t(65913),z=t(68388),gt=t(57142),pt=t(28438),ht=t(81228),Et=t(77216),ft=t(76825),vt=t(69083);const xt=(0,te.ZP)(pt.r)`
  align-items: center;
  height: ${(0,n.Q1)(32)};
  display: flex;
  justify-content: center;
  padding: ${({theme:s})=>`${s.spaces[2]}}`};
  width: ${(0,n.Q1)(32)};

  svg {
    height: ${(0,n.Q1)(12)};
    width: ${(0,n.Q1)(12)};

    path {
      fill: ${({theme:s})=>s.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:s})=>s.colors.neutral800};
      }
    }
  }
`,pe=({sortedRoles:s,canDelete:l,permissions:v,setRoleToDelete:y,onDelete:b})=>{const{formatMessage:C}=(0,f.Z)(),{push:T}=(0,a.k6)(),[D,L]=b,B=R=>l&&!["public","authenticated"].includes(R.type),S=R=>{y(R),L(!D)},I=R=>{T(`/settings/users-permissions/roles/${R}`)};return e.createElement(ht.p,null,s?.map(R=>e.createElement(Ae.Tr,{key:R.name,...(0,n.X7)({fn:()=>I(R.id)})},e.createElement(z.Td,{width:"20%"},e.createElement(u.Z,null,R.name)),e.createElement(z.Td,{width:"50%"},e.createElement(u.Z,null,R.description)),e.createElement(z.Td,{width:"30%"},e.createElement(u.Z,null,C({id:"Roles.RoleRow.user-count",defaultMessage:"{number, plural, =0 {# user} one {# user} other {# users}}"},{number:R.nb_users}))),e.createElement(z.Td,null,e.createElement(h.k,{justifyContent:"end",...n.UW},e.createElement(n.jW,{permissions:v.updateRole},e.createElement(xt,{to:`/settings/users-permissions/roles/${R.id}`,"aria-label":C({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:`${R.name}`})},e.createElement(ft.Z,null))),B(R)&&e.createElement(n.jW,{permissions:v.deleteRole},e.createElement(Et.h,{onClick:()=>S(R.id),noBorder:!0,icon:e.createElement(vt.Z,null),label:C({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:`${R.name}`})})))))))},yt=pe;pe.defaultProps={canDelete:!1},pe.propTypes={onDelete:O().array.isRequired,permissions:O().object.isRequired,setRoleToDelete:O().func.isRequired,sortedRoles:O().array.isRequired,canDelete:O().bool};const Pt=async(s,l)=>{try{const{get:v}=(0,n.tg)(),{data:y}=await v("/users-permissions/roles");return l("The roles have loaded successfully"),y}catch(v){throw s({type:"warning",message:{id:"notification.error"}}),new Error(v)}},Ct=async(s,l)=>{try{const{del:v}=(0,n.tg)();await v(`/users-permissions/roles/${s}`)}catch{l({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}},Mt=()=>{const{trackUsage:s}=(0,n.rS)(),{formatMessage:l,locale:v}=(0,f.Z)(),y=(0,n.lm)(),{notifyStatus:b}=(0,lt.G)(),[{query:C}]=(0,n.Kx)(),T=C?._q||"",[D,L]=(0,e.useState)(!1),[B,S]=(0,e.useState)(!1),[I,R]=(0,e.useState)();(0,n.go)();const{isLoading:W,allowedActions:{canRead:k,canDelete:Y}}=(0,n.ss)({create:r._.createRole,read:r._.readRoles,update:r._.updateRole,delete:r._.deleteRole}),{isLoading:K,data:{roles:H},isFetching:oe,refetch:X}=(0,j.useQuery)("get-roles",()=>Pt(y,b),{initialData:{},enabled:k}),{includes:be}=(0,n.L0)(v,{sensitivity:"base"}),Oe=(0,n.Xe)(v,{sensitivity:"base"}),Te=K||oe,bt=()=>{L(!D)},Ot={roles:{id:(0,ne.OB)("Roles.empty"),defaultMessage:"You don't have any roles yet."},search:{id:(0,ne.OB)("Roles.empty.search"),defaultMessage:"No roles match the search."}},Tt=l({id:"global.roles",defaultMessage:"Roles"}),Lt=(0,j.useMutation)(Q=>Ct(Q,y),{async onSuccess(){await X()}}),Dt=async()=>{S(!0),await Lt.mutateAsync(I),L(!D),S(!1)},ie=(H||[]).filter(Q=>be(Q.name,T)||be(Q.description,T)).sort((Q,Le)=>Oe.compare(Q.name,Le.name)||Oe.compare(Q.description,Le.description)),jt=T&&!ie.length?"search":"roles",Bt=4,Zt=(H?.length||0)+1;return e.createElement(dt.A,null,e.createElement(n.SL,{name:Tt}),e.createElement(o.o,{"aria-busy":Te},e.createElement(c.T,{title:l({id:"global.roles",defaultMessage:"Roles"}),subtitle:l({id:"Settings.roles.list.description",defaultMessage:"List of roles"}),primaryAction:e.createElement(n.jW,{permissions:r._.createRole},e.createElement(n.Qj,{to:"/settings/users-permissions/roles/new",onClick:()=>s("willCreateRole"),startIcon:e.createElement(gt.Z,null),size:"S"},l({id:(0,ne.OB)("List.button.roles"),defaultMessage:"Add new role"})))}),e.createElement(ct.Z,{startActions:e.createElement(n.m,{label:l({id:"app.component.search.label",defaultMessage:"Search"})})}),e.createElement(E.D,null,!k&&e.createElement(n.ZF,null),(Te||W)&&e.createElement(n.dO,null),k&&ie&&ie?.length?e.createElement(ut.i,{colCount:Bt,rowCount:Zt},e.createElement(mt.h,null,e.createElement(Ae.Tr,null,e.createElement(z.Th,null,e.createElement(u.Z,{variant:"sigma",textColor:"neutral600"},l({id:"global.name",defaultMessage:"Name"}))),e.createElement(z.Th,null,e.createElement(u.Z,{variant:"sigma",textColor:"neutral600"},l({id:"global.description",defaultMessage:"Description"}))),e.createElement(z.Th,null,e.createElement(u.Z,{variant:"sigma",textColor:"neutral600"},l({id:"global.users",defaultMessage:"Users"}))),e.createElement(z.Th,null,e.createElement(ee.T,null,l({id:"global.actions",defaultMessage:"Actions"}))))),e.createElement(yt,{sortedRoles:ie,canDelete:Y,permissions:r._,setRoleToDelete:R,onDelete:[D,L]})):e.createElement(n.x7,{content:Ot[jt]})),e.createElement(n.QH,{isConfirmButtonLoading:B,onConfirm:Dt,onToggleDialog:bt,isOpen:D})))},Rt=()=>e.createElement(n.O4,{permissions:r._.accessRoles},e.createElement(Mt,null)),At=()=>e.createElement(n.O4,{permissions:r._.accessRoles},e.createElement(a.rs,null,e.createElement(a.AW,{path:"/settings/users-permissions/roles/new",component:at,exact:!0}),e.createElement(a.AW,{path:"/settings/users-permissions/roles/:id",component:it,exact:!0}),e.createElement(a.AW,{path:"/settings/users-permissions/roles",component:Rt,exact:!0}),e.createElement(a.AW,{path:"",component:n.Hn})))},99688:(p,g,t)=>{"use strict";t.d(g,{YX:()=>r,OB:()=>o.Z});var e=t(10124),n=t.n(e);const r=c=>Object.keys(c).reduce((i,E)=>{const h=c[E].controllers,u=Object.keys(h).reduce((A,x)=>(n()(h[x])||(A[x]=h[x]),A),{});return n()(u)||(i[E]={controllers:u}),i},{});var o=t(58655)},67083:(p,g,t)=>{var e=t(62878);function n(a,r){var o=a==null?0:a.length;return!!o&&e(a,r,0)>-1}p.exports=n},65286:p=>{function g(t,e,n){for(var a=-1,r=t==null?0:t.length;++a<r;)if(n(e,t[a]))return!0;return!1}p.exports=g},19975:(p,g,t)=>{var e=t(44936),n=t(67083),a=t(65286),r=t(36393),o=t(20435),c=t(42435),i=200;function E(h,u,A,x){var d=-1,m=n,M=!0,P=h.length,f=[],j=u.length;if(!P)return f;A&&(u=r(u,o(A))),x?(m=a,M=!1):u.length>=i&&(m=c,M=!1,u=new e(u));e:for(;++d<P;){var Z=h[d],O=A==null?Z:A(Z);if(Z=x||Z!==0?Z:0,M&&O===O){for(var N=j;N--;)if(u[N]===O)continue e;f.push(Z)}else m(u,O,x)||f.push(Z)}return f}p.exports=E},1107:(p,g,t)=>{var e=t(84856),n=t(52593),a=n(e);p.exports=a},32652:p=>{function g(t,e,n,a){for(var r=t.length,o=n+(a?1:-1);a?o--:++o<r;)if(e(t[o],o,t))return o;return-1}p.exports=g},62878:(p,g,t)=>{var e=t(32652),n=t(2784),a=t(51425);function r(o,c,i){return c===c?a(o,c,i):e(o,n,i)}p.exports=r},2784:p=>{function g(t){return t!==t}p.exports=g},92403:(p,g,t)=>{var e=t(1107),n=t(47727);function a(r,o){var c=-1,i=n(r)?Array(r.length):[];return e(r,function(E,h,u){i[++c]=o(E,h,u)}),i}p.exports=a},16429:(p,g,t)=>{var e=t(36393),n=t(82393),a=t(90040),r=t(92403),o=t(63135),c=t(20435),i=t(9998),E=t(51339),h=t(26126);function u(A,x,d){x.length?x=e(x,function(P){return h(P)?function(f){return n(f,P.length===1?P[0]:P)}:P}):x=[E];var m=-1;x=e(x,c(a));var M=r(A,function(P,f,j){var Z=e(x,function(O){return O(P)});return{criteria:Z,index:++m,value:P}});return o(M,function(P,f){return i(P,f,d)})}p.exports=u},63135:p=>{function g(t,e){var n=t.length;for(t.sort(e);n--;)t[n]=t[n].value;return t}p.exports=g},17654:(p,g,t)=>{var e=t(85194);function n(a,r){if(a!==r){var o=a!==void 0,c=a===null,i=a===a,E=e(a),h=r!==void 0,u=r===null,A=r===r,x=e(r);if(!u&&!x&&!E&&a>r||E&&h&&A&&!u&&!x||c&&h&&A||!o&&A||!i)return 1;if(!c&&!E&&!x&&a<r||x&&o&&i&&!c&&!E||u&&o&&i||!h&&i||!A)return-1}return 0}p.exports=n},9998:(p,g,t)=>{var e=t(17654);function n(a,r,o){for(var c=-1,i=a.criteria,E=r.criteria,h=i.length,u=o.length;++c<h;){var A=e(i[c],E[c]);if(A){if(c>=u)return A;var x=o[c];return A*(x=="desc"?-1:1)}}return a.index-r.index}p.exports=n},52593:(p,g,t)=>{var e=t(47727);function n(a,r){return function(o,c){if(o==null)return o;if(!e(o))return a(o,c);for(var i=o.length,E=r?i:-1,h=Object(o);(r?E--:++E<i)&&c(h[E],E,h)!==!1;);return o}}p.exports=n},51425:p=>{function g(t,e,n){for(var a=n-1,r=t.length;++a<r;)if(t[a]===e)return a;return-1}p.exports=g},58422:(p,g,t)=>{var e=t(36393),n=t(90040),a=t(92403),r=t(26126);function o(c,i){var E=r(c)?e:a;return E(c,n(i,3))}p.exports=o},8243:(p,g,t)=>{var e=t(93367),n=t(16429),a=t(52431),r=t(65145),o=a(function(c,i){if(c==null)return[];var E=i.length;return E>1&&r(c,i[0],i[1])?i=[]:E>2&&r(i[0],i[1],i[2])&&(i=[i[0]]),n(c,e(i,1),[])});p.exports=o},34049:(p,g,t)=>{var e=t(20454);function n(a){var r=a==null?0:a.length;return r?e(a,1,r):[]}p.exports=n},41942:(p,g,t)=>{var e=t(20454),n=t(69740);function a(r,o,c){return r&&r.length?(o=c||o===void 0?1:n(o),e(r,0,o<0?0:o)):[]}p.exports=a},87366:(p,g,t)=>{var e=t(19975),n=t(52431),a=t(99662),r=n(function(o,c){return a(o)?e(o,c):[]});p.exports=r},59438:(p,g,t)=>{"use strict";t.d(g,{U:()=>x,y:()=>u});var e=t(74081),n=t(27279),a=t(72450),r=t(34803),o=t(73777),c=t(19915),i=t(33110),E=t(68263);const h=({theme:d,expanded:m,variant:M,disabled:P,error:f})=>f?`1px solid ${d.colors.danger600} !important`:P?`1px solid ${d.colors.neutral150}`:m?`1px solid ${d.colors.primary600}`:M==="primary"?`1px solid ${d.colors.neutral0}`:`1px solid ${d.colors.neutral100}`,u=(0,a.ZP)(c.Z)``,A=(0,a.ZP)(E.x)`
  border: ${h};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:d})=>d.colors.primary600};

    ${u} {
      color: ${({theme:d,expanded:m})=>m?void 0:d.colors.primary700};
    }

    ${c.Z} {
      color: ${({theme:d,expanded:m})=>m?void 0:d.colors.primary600};
    }

    & > ${i.k} {
      background: ${({theme:d})=>d.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:d})=>d.colors.primary200};
    }
  }
`,x=({children:d,disabled:m=!1,error:M,expanded:P=!1,hasErrorMessage:f=!0,id:j,onToggle:Z,toggle:O,size:N="M",variant:$="primary",shadow:w})=>{const U=(0,o.M)(j),J=n.useMemo(()=>({expanded:P,onToggle:Z,toggle:O,id:U,size:N,variant:$,disabled:m}),[m,P,U,Z,N,O,$]);return(0,e.jsxs)(r.S.Provider,{value:J,children:[(0,e.jsx)(A,{"data-strapi-expanded":P,disabled:m,"aria-disabled":m,expanded:P,hasRadius:!0,variant:$,error:M,shadow:w,children:d}),M&&f&&(0,e.jsx)(E.x,{paddingTop:1,children:(0,e.jsx)(c.Z,{variant:"pi",textColor:"danger600",children:M})})]})}},3667:(p,g,t)=>{"use strict";t.d(g,{v:()=>r});var e=t(74081),n=t(34803),a=t(68263);const r=({children:o,...c})=>{const{expanded:i,id:E}=(0,n.A)();if(!i)return null;const h=`accordion-content-${E}`,u=`accordion-label-${E}`,A=`accordion-desc-${E}`;return(0,e.jsx)(a.x,{role:"region",id:h,"aria-labelledby":u,"aria-describedby":A,...c,children:o})}},34803:(p,g,t)=>{"use strict";t.d(g,{A:()=>a,S:()=>n});var e=t(27279);const n=(0,e.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),a=()=>(0,e.useContext)(n)},68809:(p,g,t)=>{"use strict";t.d(g,{B:()=>d});var e=t(74081),n=t(27870),a=t(72450),r=t(59438),o=t(34803);const c=({expanded:m,disabled:M,variant:P})=>{let f="neutral100";return m?f="primary100":M?f="neutral150":P==="primary"&&(f="neutral0"),f};var i=t(56953),E=t(24204),h=t(33110),u=t(19915);const A=(0,a.ZP)(i.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:m,expanded:M})=>M?m.colors.primary600:m.colors.neutral500};
    }
  }
`,x=(0,a.ZP)(h.k)`
  min-height: ${({theme:m,size:M})=>m.sizes.accordions[M]};
  border-radius: ${({theme:m,expanded:M})=>M?`${m.borderRadius} ${m.borderRadius} 0 0`:m.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:m})=>m.colors.primary600};
      }
    }
  }
`,d=({title:m,description:M,as:P="span",togglePosition:f="right",action:j,...Z})=>{const{onToggle:O,toggle:N,expanded:$,id:w,size:U,variant:J,disabled:G}=(0,o.A)(),le=`accordion-content-${w}`,se=`accordion-label-${w}`,de=`accordion-desc-${w}`,V=U==="M"?6:4,ae=U==="M"?V:V-2,he=c({expanded:$,disabled:G,variant:J}),ce={as:P,fontWeight:U==="S"?"bold":void 0,id:se,textColor:$?"primary600":"neutral700",ellipsis:!0,variant:U==="M"?"delta":void 0},F=$?"primary600":"neutral600",ue=$?"primary200":"neutral200",q=U==="M"?`${32/16}rem`:`${24/16}rem`,_=()=>{G||(N&&!O?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),N()):O&&O())},ee=(0,e.jsx)(h.k,{justifyContent:"center",borderRadius:"50%",height:q,width:q,transform:$?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:ue,cursor:G?"not-allowed":"pointer",onClick:_,shrink:0,children:(0,e.jsx)(E.J,{as:n.Z,width:U==="M"?`${11/16}rem`:`${8/16}rem`,color:$?"primary600":"neutral600"})});return(0,e.jsx)(x,{paddingBottom:ae,paddingLeft:V,paddingRight:V,paddingTop:ae,background:he,expanded:$,size:U,justifyContent:"space-between",cursor:G?"not-allowed":"",children:(0,e.jsxs)(h.k,{gap:3,flex:1,maxWidth:"100%",children:[f==="left"&&ee,(0,e.jsx)(A,{onClick:_,"aria-disabled":G,"aria-expanded":$,"aria-controls":le,"aria-labelledby":se,"data-strapi-accordion-toggle":!0,expanded:$,type:"button",flex:1,minWidth:0,...Z,children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(r.y,{...ce,children:m}),M&&(0,e.jsx)(u.Z,{as:"p",id:de,textColor:F,children:M})]})}),f==="right"&&(0,e.jsxs)(h.k,{gap:3,children:[ee,j]}),f==="left"&&j]})})}},53141:(p,g,t)=>{"use strict";t.d(g,{Z:()=>a});var e=t(74081),n=t(33110);const a=({startActions:r,endActions:o})=>!r&&!o?null:(0,e.jsxs)(n.k,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,e.jsx)(n.k,{gap:2,wrap:"wrap",children:r}),(0,e.jsx)(n.k,{gap:2,shrink:0,wrap:"wrap",children:o})]})},35750:(p,g,t)=>{"use strict";t.d(g,{D:()=>a});var e=t(74081),n=t(68263);const a=({children:r})=>(0,e.jsx)(n.x,{paddingLeft:10,paddingRight:10,children:r})},42925:(p,g,t)=>{"use strict";t.d(g,{T:()=>u});var e=t(74081),n=t(27279),a=t(72450);const r=d=>{const m=(0,n.useRef)(null),[M,P]=(0,n.useState)(!0),f=([j])=>{P(j.isIntersecting)};return(0,n.useEffect)(()=>{const j=m.current,Z=new IntersectionObserver(f,d);return j&&Z.observe(m.current),()=>{j&&Z.disconnect()}},[m,d]),[m,M]};var o=t(66705);const c=(d,m)=>{const M=(0,o.W)(m);(0,n.useLayoutEffect)(()=>{const P=new ResizeObserver(M);return Array.isArray(d)?d.forEach(f=>{f.current&&P.observe(f.current)}):d.current&&P.observe(d.current),()=>{P.disconnect()}},[d,M])};var i=t(68263),E=t(33110),h=t(19915);const u=d=>{const m=(0,n.useRef)(null),[M,P]=(0,n.useState)(null),[f,j]=r({root:null,rootMargin:"0px",threshold:0});return c(f,()=>{f.current&&P(f.current.getBoundingClientRect())}),(0,n.useEffect)(()=>{m.current&&P(m.current.getBoundingClientRect())},[m]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:M?.height},ref:f,children:j&&(0,e.jsx)(x,{ref:m,...d})}),!j&&(0,e.jsx)(x,{...d,sticky:!0,width:M?.width})]})};u.displayName="HeaderLayout";const A=(0,a.ZP)(i.x)`
  width: ${({width:d})=>d?`${d/16}rem`:void 0};
  z-index: ${({theme:d})=>d.zIndices[1]};
`,x=n.forwardRef(({navigationAction:d,primaryAction:m,secondaryAction:M,subtitle:P,title:f,sticky:j,width:Z,...O},N)=>{const $=typeof P=="string";return j?(0,e.jsx)(A,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:Z,"data-strapi-header-sticky":!0,children:(0,e.jsxs)(E.k,{justifyContent:"space-between",children:[(0,e.jsxs)(E.k,{children:[d&&(0,e.jsx)(i.x,{paddingRight:3,children:d}),(0,e.jsxs)(i.x,{children:[(0,e.jsx)(h.Z,{variant:"beta",as:"h1",...O,children:f}),$?(0,e.jsx)(h.Z,{variant:"pi",textColor:"neutral600",children:P}):P]}),M?(0,e.jsx)(i.x,{paddingLeft:4,children:M}):null]}),(0,e.jsx)(E.k,{children:m?(0,e.jsx)(i.x,{paddingLeft:2,children:m}):void 0})]})}):(0,e.jsxs)(i.x,{ref:N,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:d?6:8,background:"neutral100","data-strapi-header":!0,children:[d?(0,e.jsx)(i.x,{paddingBottom:2,children:d}):null,(0,e.jsxs)(E.k,{justifyContent:"space-between",children:[(0,e.jsxs)(E.k,{minWidth:0,children:[(0,e.jsx)(h.Z,{as:"h1",variant:"alpha",...O,children:f}),M?(0,e.jsx)(i.x,{paddingLeft:4,children:M}):null]}),m]}),$?(0,e.jsx)(h.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:P}):P]})})},9:(p,g,t)=>{"use strict";t.d(g,{A:()=>c});var e=t(74081),n=t(72450),a=t(68263);const r=(0,n.ZP)(a.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:i})=>i?"auto 1fr":"1fr"};
`,o=(0,n.ZP)(a.x)`
  overflow-x: hidden;
`,c=({sideNav:i,children:E})=>(0,e.jsxs)(r,{hasSideNav:!!i,children:[i,(0,e.jsx)(o,{paddingBottom:10,children:E})]})},28438:(p,g,t)=>{"use strict";t.d(g,{r:()=>A});var e=t(74081),n=t(27279),a=t(48698),r=t(47533),o=t(72450),c=t(19571),i=t(19915),E=t(68263);const h=o.ZP.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  pointer-events: ${({disabled:x})=>x?"none":void 0};
  color: ${({disabled:x,theme:d})=>x?d.colors.neutral600:d.colors.primary600};

  svg path {
    transition: fill 150ms ease-out;
    fill: currentColor;
  }

  svg {
    font-size: ${10/16}rem;
  }

  ${i.Z} {
    transition: color 150ms ease-out;
    color: currentColor;
  }

  &:hover {
    color: ${({theme:x})=>x.colors.primary500};
  }

  &:active {
    color: ${({theme:x})=>x.colors.primary700};
  }

  ${c.BF};
`,u=(0,o.ZP)(E.x)`
  display: flex;
`,A=n.forwardRef(({children:x,href:d,to:m,disabled:M=!1,startIcon:P,endIcon:f,...j},Z)=>(0,e.jsxs)(h,{as:m&&!M?r.OL:"a",target:d?"_blank":void 0,rel:d?"noreferrer noopener":void 0,to:M?void 0:m,href:M?"#":d,disabled:M,ref:Z,...j,children:[P&&(0,e.jsx)(u,{as:"span","aria-hidden":!0,paddingRight:2,children:P}),(0,e.jsx)(i.Z,{children:x}),f&&!d&&(0,e.jsx)(u,{as:"span","aria-hidden":!0,paddingLeft:2,children:f}),d&&(0,e.jsx)(u,{as:"span","aria-hidden":!0,paddingLeft:2,children:(0,e.jsx)(a.Z,{})})]}))},65e3:(p,g,t)=>{"use strict";t.d(g,{o:()=>o});var e=t(74081),n=t(72450),a=t(68263);const r=(0,n.ZP)(a.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,o=({labelledBy:c="main-content-title",...i})=>(0,e.jsx)(r,{"aria-labelledby":c,as:"main",id:"main-content",tabIndex:-1,...i})},97367:(p,g,t)=>{"use strict";t.d(g,{Z:()=>a});var e=t(74081);const n=r=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...r,children:(0,e.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),a=n},91396:(p,g,t)=>{"use strict";t.d(g,{Z:()=>a});var e=t(74081);const n=r=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...r,children:(0,e.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M2.68 9.192c-.6.276-2.114 1.18-2.306 1.303a.792.792 0 0 0-.374.68v1.65a.797.797 0 0 0 .384.687c.254.16 1.73 1.042 2.306 1.303l.744 1.8c-.24.634-.67 2.333-.72 2.554a.797.797 0 0 0 .216.744l1.167 1.166a.801.801 0 0 0 .744.216l.03-.008c.36-.092 1.946-.498 2.523-.712l1.8.744c.276.6 1.181 2.115 1.304 2.307a.805.805 0 0 0 .679.374h1.649a.797.797 0 0 0 .686-.384c.16-.254 1.042-1.73 1.303-2.306l1.8-.744c.634.24 2.333.67 2.554.72a.797.797 0 0 0 .744-.216l1.166-1.167a.803.803 0 0 0 .216-.744l-.008-.03c-.092-.36-.498-1.946-.712-2.523l.744-1.8c.6-.276 2.115-1.181 2.307-1.304a.804.804 0 0 0 .374-.679v-1.649a.796.796 0 0 0-.382-.679c-.254-.16-1.73-1.041-2.306-1.303l-.744-1.8c.24-.634.67-2.333.72-2.554a.796.796 0 0 0-.216-.744l-1.166-1.173a.802.802 0 0 0-.744-.216l-.03.008c-.361.092-1.947.498-2.524.712l-1.8-.744c-.276-.6-1.18-2.115-1.303-2.307a.803.803 0 0 0-.68-.374h-1.65a.797.797 0 0 0-.68.382c-.16.254-1.041 1.73-1.303 2.306l-1.8.744c-.634-.24-2.333-.67-2.554-.72a.797.797 0 0 0-.744.216L2.921 4.094a.802.802 0 0 0-.216.744l.008.03c.092.361.498 1.947.712 2.524l-.744 1.8ZM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z",clipRule:"evenodd"})}),a=n}}]);