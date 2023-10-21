"use strict";(self.webpackChunksporrthub=self.webpackChunksporrthub||[]).push([[302],{51754:(U,m,e)=>{e.d(m,{F:()=>L});var t=e(37919),S=e(61020),E=e(40464);const L=(p={},M={})=>{const{id:i="",...f}=p,{get:y}=(0,t.kY)(),{locale:d}=(0,S.Z)(),O=(0,t.Xe)(d,{sensitivity:"base"}),{data:n,error:C,isError:h,isLoading:o,refetch:I}=(0,E.useQuery)(["roles",i,f],async()=>{const{data:c}=await y(`/admin/roles/${i??""}`,{params:f});return c},M);let g=[];return i&&n?g=[n.data]:Array.isArray(n?.data)&&(g=n.data),{roles:g.sort((c,A)=>O.compare(c.name,A.name)),error:C,isError:h,isLoading:o,refetch:I}}},29388:(U,m,e)=>{e.r(m),e.d(m,{SingleSignOn:()=>B,default:()=>Z});var t=e(27279),S=e(9),E=e(65e3),L=e(42925),p=e(6854),M=e(35750),i=e(33110),f=e(19915),y=e(86049),d=e(25667),O=e(9618),n=e(5007),C=e(551),h=e(95546),o=e(37919),I=e(8766),g=e(6078),c=e.n(g),A=e(61020),b=e(49402),x=e(92807),F=e(51754),T=e(36364),u=e(47853);const W=u.Ry().shape({autoRegister:u.Xg().required(o.I0.required),defaultRole:u.nK().when("autoRegister",(a,l)=>a?l.required(o.I0.required):l.nullable()),ssoLockedRoles:u.IX().nullable().of(u.nK().when("ssoLockedRoles",(a,l)=>a?l.required(o.I0.required):l.nullable()))}),B=()=>{(0,o.go)();const{formatMessage:a}=(0,A.Z)(),l=(0,b.v9)(T._),{isLoading:G,allowedActions:{canUpdate:P,canReadRoles:X}}=(0,o.ss)({...l.settings.sso,readRoles:l.settings.roles.read}),[{formErrors:r,initialData:z,isLoading:H,modifiedData:v,showHeaderButtonLoader:k},,{handleChange:R,handleSubmit:N}]=(0,x.G4)("/admin/providers/options",W,()=>{},["autoRegister","defaultRole","ssoLockedRoles"]),{roles:K,isLoading:Q}=(0,F.F)(void 0,{enabled:X}),Y=G||Q||H;return t.createElement(S.A,null,t.createElement(o.SL,{name:"SSO"}),t.createElement(E.o,{tabIndex:-1},t.createElement("form",{onSubmit:N},t.createElement(L.T,{primaryAction:t.createElement(p.z,{"data-testid":"save-button",disabled:c()(z,v),loading:k,startIcon:t.createElement(I.Z,null),type:"submit",size:"L"},a({id:"global.save",defaultMessage:"Save"})),title:a({id:"Settings.sso.title",defaultMessage:"Single Sign-On"}),subtitle:a({id:"Settings.sso.description",defaultMessage:"Configure the settings for the Single Sign-On feature."})}),t.createElement(M.D,null,Y?t.createElement(o.dO,null):t.createElement(i.k,{direction:"column",alignItems:"stretch",gap:4,background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},t.createElement(f.Z,{variant:"delta",as:"h2"},a({id:"global.settings",defaultMessage:"Settings"})),t.createElement(y.r,{gap:4},t.createElement(d.P,{col:6,m:6,s:12},t.createElement(O.s,{"aria-label":"autoRegister","data-testid":"autoRegister",disabled:!P,checked:v.autoRegister,hint:a({id:"Settings.sso.form.registration.description",defaultMessage:"Create new user on SSO login if no account exists"}),label:a({id:"Settings.sso.form.registration.label",defaultMessage:"Auto-registration"}),name:"autoRegister",offLabel:a({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:a({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:s=>{R({target:{name:"autoRegister",value:s.target.checked}})}})),t.createElement(d.P,{col:6,m:6,s:12},t.createElement(n.P,{disabled:!P,hint:a({id:"Settings.sso.form.defaultRole.description",defaultMessage:"It will attach the new authenticated user to the selected role"}),error:r.defaultRole?a({id:r.defaultRole.id,defaultMessage:r.defaultRole.id}):"",label:a({id:"Settings.sso.form.defaultRole.label",defaultMessage:"Default role"}),name:"defaultRole",onChange:s=>{R({target:{name:"defaultRole",value:s}})},placeholder:a({id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"}),value:v.defaultRole},K.map(({id:s,name:D})=>t.createElement(C.W,{key:s,value:s.toString()},D)))),t.createElement(d.P,{col:6,m:6,s:12},t.createElement(h.NU,{disabled:!P,hint:a({id:"Settings.sso.form.localAuthenticationLock.description",defaultMessage:"Select the roles for which you want to disable the local authentication"}),error:r.ssoLockedRoles?a({id:r.ssoLockedRoles.id,defaultMessage:r.ssoLockedRoles.id}):"",label:a({id:"Settings.sso.form.localAuthenticationLock.label",defaultMessage:"Local authentication lock-out"}),name:"ssoLockedRoles",onChange:s=>{R({target:{name:"ssoLockedRoles",value:s}})},placeholder:a({id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"}),onClear:()=>{R({target:{name:"ssoLockedRoles",emptyArray:[]}})},value:v.ssoLockedRoles||[],withTags:!0},K.map(({id:s,name:D})=>t.createElement(h.ML,{key:s,value:s.toString()},D))))))))))},Z=()=>{const a=(0,b.v9)(T._);return t.createElement(o.O4,{permissions:a.settings.sso.main},t.createElement(B,null))}}}]);
