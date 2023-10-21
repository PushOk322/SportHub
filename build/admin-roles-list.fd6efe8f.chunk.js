"use strict";(self.webpackChunksporrthub=self.webpackChunksporrthub||[]).push([[3455],{51754:(N,f,t)=>{t.d(f,{F:()=>c});var e=t(37919),l=t(61020),i=t(40464);const c=(u={},A={})=>{const{id:T="",...M}=u,{get:B}=(0,e.kY)(),{locale:o}=(0,l.Z)(),j=(0,e.Xe)(o,{sensitivity:"base"}),{data:C,error:U,isError:d,isLoading:D,refetch:Q}=(0,i.useQuery)(["roles",T,M],async()=>{const{data:Z}=await B(`/admin/roles/${T??""}`,{params:M});return Z},A);let I=[];return T&&C?I=[C.data]:Array.isArray(C?.data)&&(I=C.data),{roles:I.sort((Z,V)=>j.compare(Z.name,V.name)),error:U,isError:d,isLoading:D,refetch:Q}}},7513:(N,f,t)=>{t.r(f),t.d(f,{default:()=>ue});var e=t(27279),l=t(37919),i=t(49402),c=t(36364),u=t(65e3),A=t(42925),T=t(6854),M=t(53141),B=t(35750),o=t(63434),j=t(50091),C=t(42879),U=t(65913),d=t(68388),D=t(19915),Q=t(30249),I=t(81228),Z=t(19329),V=t(76825),w=t(69083),Y=t(57142),k=t(61020),q=t(51447),_=t(51754);const ee=()=>"todo empty role";var te=t(33110),le=t(68263),ne=t(77216),se=t(70627),v=t.n(se);const H=({id:s,name:m,description:a,usersCount:y,icons:r,rowIndex:W,canUpdate:E})=>{const{formatMessage:L}=(0,k.Z)(),[,O]=r,g=L({id:"Roles.RoleRow.user-count",defaultMessage:"{number, plural, =0 {#  user} one {#  user} other {# users}}"},{number:y});return e.createElement(U.Tr,{"aria-rowindex":W,key:s,...E?(0,l.X7)({fn:O.onClick}):{}},e.createElement(d.Td,{maxWidth:(0,l.Q1)(130)},e.createElement(D.Z,{ellipsis:!0,textColor:"neutral800"},m)),e.createElement(d.Td,{maxWidth:(0,l.Q1)(250)},e.createElement(D.Z,{ellipsis:!0,textColor:"neutral800"},a)),e.createElement(d.Td,null,e.createElement(D.Z,{textColor:"neutral800"},g)),e.createElement(d.Td,null,e.createElement(te.k,{justifyContent:"flex-end",...l.UW},r.map((h,P)=>h?e.createElement(le.x,{key:h.label,paddingLeft:P===0?0:1},e.createElement(ne.h,{onClick:h.onClick,label:h.label,noBorder:!0,icon:h.icon})):null))))};H.propTypes={id:v().number.isRequired,name:v().string.isRequired,description:v().string.isRequired,usersCount:v().number.isRequired,icons:v().array.isRequired,rowIndex:v().number.isRequired,canUpdate:v().bool},H.defaultProps={canUpdate:!1};const ae=H;var oe=t(61815);const re={roleToDelete:null,showModalConfirmButtonLoading:!1,shouldRefetchData:!1},ie=(s,m)=>(0,oe.ZP)(s,a=>{switch(m.type){case"ON_REMOVE_ROLES":{a.showModalConfirmButtonLoading=!0;break}case"ON_REMOVE_ROLES_SUCCEEDED":{a.shouldRefetchData=!0,a.roleToDelete=null;break}case"RESET_DATA_TO_DELETE":{a.shouldRefetchData=!1,a.roleToDelete=null,a.showModalConfirmButtonLoading=!1;break}case"SET_ROLE_TO_DELETE":{a.roleToDelete=m.id;break}default:return a}}),de=({canCreate:s,canDelete:m,canUpdate:a,refetchRoles:y})=>{const{formatMessage:r}=(0,k.Z)(),{formatAPIError:W}=(0,l.So)(),E=(0,l.lm)(),[L,O]=(0,e.useState)(!1),{push:g}=(0,q.k6)(),[{selectedRoles:h,showModalConfirmButtonLoading:P,roleToDelete:z},b]=(0,e.useReducer)(ie,re),{post:X}=(0,l.tg)(),G=async()=>{try{b({type:"ON_REMOVE_ROLES"}),await X("/admin/roles/batch-delete",{ids:[z]}),await y(),b({type:"RESET_DATA_TO_DELETE"})}catch(n){E({type:"warning",message:W(n)})}x()},K=(0,e.useCallback)(n=>{g(`/settings/roles/duplicate/${n}`)},[g]),$=()=>g("/settings/roles/new"),S=(0,e.useCallback)(n=>{b({type:"SET_ROLE_TO_DELETE",id:n}),x()},[]),x=()=>O(n=>!n),p=(0,e.useCallback)(n=>{g(`/settings/roles/${n}`)},[g]),F=(0,e.useCallback)((n,R)=>{n.preventDefault(),n.stopPropagation(),R.usersCount?E({type:"info",message:{id:"Roles.ListPage.notification.delete-not-allowed"}}):S(R.id)},[E,S]),J=(0,e.useCallback)((n,R)=>{n.preventDefault(),n.stopPropagation(),K(R.id)},[K]),me=(0,e.useCallback)(n=>[...s?[{onClick:R=>J(R,n),label:r({id:"app.utils.duplicate",defaultMessage:"Duplicate"}),icon:e.createElement(Z.Z,null)}]:[],...a?[{onClick:()=>p(n.id),label:r({id:"app.utils.edit",defaultMessage:"Edit"}),icon:e.createElement(V.Z,null)}]:[],...m?[{onClick:R=>F(R,n),label:r({id:"global.delete",defaultMessage:"Delete"}),icon:e.createElement(w.Z,null)}]:[]],[r,F,J,p,s,a,m]);return{handleNewRoleClick:$,getIcons:me,selectedRoles:h,isWarningDeleteAllOpened:L,showModalConfirmButtonLoading:P,handleToggleModal:x,handleDeleteData:G}},ce=()=>{const{formatMessage:s}=(0,k.Z)();(0,l.go)();const m=(0,i.v9)(c._),[{query:a}]=(0,l.Kx)(),{isLoading:y,allowedActions:{canCreate:r,canDelete:W,canRead:E,canUpdate:L}}=(0,l.ss)(m.settings.roles),{roles:O,isLoading:g,refetch:h}=(0,_.F)({filters:a?._q?{name:{$containsi:a._q}}:void 0},{cacheTime:0,enabled:!y&&E}),{handleNewRoleClick:P,getIcons:z,isWarningDeleteAllOpened:b,showModalConfirmButtonLoading:X,handleToggleModal:G,handleDeleteData:K}=de({refetchRoles:h,canCreate:r,canDelete:W,canUpdate:L}),$=O.length+1,S=6;if(y)return e.createElement(u.o,null,e.createElement(l.dO,null));const x=s({id:"global.roles",defaultMessage:"roles"});return e.createElement(u.o,null,e.createElement(l.SL,{name:"Roles"}),e.createElement(A.T,{primaryAction:r?e.createElement(T.z,{onClick:P,startIcon:e.createElement(Y.Z,null),size:"S"},s({id:"Settings.roles.list.button.add",defaultMessage:"Add new role"})):null,title:x,subtitle:s({id:"Settings.roles.list.description",defaultMessage:"List of roles"}),as:"h2"}),E&&e.createElement(M.Z,{startActions:e.createElement(l.m,{label:s({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:x})})}),E&&e.createElement(B.D,null,e.createElement(o.i,{colCount:S,rowCount:$,footer:r?e.createElement(j.c,{onClick:P,icon:e.createElement(Y.Z,null)},s({id:"Settings.roles.list.button.add",defaultMessage:"Add new role"})):null},e.createElement(C.h,null,e.createElement(U.Tr,{"aria-rowindex":1},e.createElement(d.Th,null,e.createElement(D.Z,{variant:"sigma",textColor:"neutral600"},s({id:"global.name",defaultMessage:"Name"}))),e.createElement(d.Th,null,e.createElement(D.Z,{variant:"sigma",textColor:"neutral600"},s({id:"global.description",defaultMessage:"Description"}))),e.createElement(d.Th,null,e.createElement(D.Z,{variant:"sigma",textColor:"neutral600"},s({id:"global.users",defaultMessage:"Users"}))),e.createElement(d.Th,null,e.createElement(Q.T,null,s({id:"global.actions",defaultMessage:"Actions"}))))),e.createElement(I.p,null,O?.map((p,F)=>e.createElement(ae,{key:p.id,id:p.id,name:p.name,description:p.description,usersCount:p.usersCount,icons:z(p),rowIndex:F+2,canUpdate:L})))),!$&&!g&&e.createElement(ee,null)),e.createElement(l.QH,{isOpen:b,onConfirm:K,isConfirmButtonLoading:X,onToggleDialog:G}))},ue=()=>{const s=(0,i.v9)(c._);return e.createElement(l.O4,{permissions:s.settings.roles.main},e.createElement(ce,null))}},53141:(N,f,t)=>{t.d(f,{Z:()=>i});var e=t(74081),l=t(33110);const i=({startActions:c,endActions:u})=>!c&&!u?null:(0,e.jsxs)(l.k,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,e.jsx)(l.k,{gap:2,wrap:"wrap",children:c}),(0,e.jsx)(l.k,{gap:2,shrink:0,wrap:"wrap",children:u})]})},50091:(N,f,t)=>{t.d(f,{c:()=>B});var e=t(74081),l=t(72450),i=t(68263),c=t(61696),u=t(33110),A=t(19915);const T=(0,l.ZP)(i.x)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:o})=>o.colors.primary600};
  }
`,M=(0,l.ZP)(i.x)`
  border-radius: 0 0 ${({theme:o})=>o.borderRadius} ${({theme:o})=>o.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,B=({children:o,icon:j,...C})=>(0,e.jsxs)("div",{children:[(0,e.jsx)(c.i,{}),(0,e.jsx)(M,{as:"button",background:"primary100",padding:5,...C,children:(0,e.jsxs)(u.k,{children:[(0,e.jsx)(T,{"aria-hidden":!0,background:"primary200",children:j}),(0,e.jsx)(i.x,{paddingLeft:3,children:(0,e.jsx)(A.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:o})})]})})]})}}]);
