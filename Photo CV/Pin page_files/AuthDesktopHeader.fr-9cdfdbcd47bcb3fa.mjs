"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[82952],{215886:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(340523),s=n(554786);let o=e=>{let{checkExperiment:t}=(0,i.F)(),n=(0,s.ZP)();if("phone"===n||"tablet"===n){let n=t("mweb_metrics_dau_ping").group;return n===e||n.startsWith("employee")}let o=t("web_metrics_dau_ping").group;return o===e||o.startsWith("employee")}},568803:(e,t,n)=>{n.d(t,{Z:()=>i});function i(e){return"object"==typeof e&&null!==e&&"url"in e&&"media"in e}},433058:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(667294),s=n(214877),o=n(525364);let r=e=>{let t=(0,i.useRef)(!1),{logContextEvent:n}=(0,s.v)(),{viewType:r,viewParameter:l}=(0,o.SU)();(0,i.useEffect)(()=>{Object.entries(e).length>0&&!t.current&&r&&(n({event_type:13,view_type:r,view_parameter:l,...e}),t.current=!0)})}},201700:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(88682),s=n(598228);function o({isAdsSite:e,isAnalyticsSite:t,isTrendsSite:n,path:o,advertiserId:r}){let l=e||t||n?`${s.C0}`:"",a=`${l}${o}`;return r?(0,i.Z)(a,{advertiserId:r}):a}},98769:(e,t,n)=>{n.r(t),n.d(t,{Header:()=>et,default:()=>en});var i=n(667294),s=n(616550),o=n(883119),r=n(334589),l=n(406718),a=n(3808),c=n(620527),d=n(215886),h=n(324358),u=n(568803),p=n(920434),m=n(619370),x=n(422317),_=n(140017),f=n(741983),g=n(729817),b=n(340523),y=n(5859),j=n(37156),T=n(623409),P=n(624797),A=n(794109),S=n(239821),w=n(906906),v=n(214877),C=n(401429),I=n(97630),E=n(785893);let k=({isSelected:e,onClick:t})=>{let n=(0,_.ZP)(),{logContextEvent:a}=(0,v.v)(),c=(0,l.Z)(!0),d=(0,i.useRef)(null),h=(0,i.useRef)(null),[u,p]=(0,i.useState)(!1),m=(0,s.k6)(),x=e=>{a({event_type:101,component:13988,element:e}),p(!1)};return(0,E.jsxs)(i.Fragment,{children:[(0,E.jsx)(o.xu,{ref:d,"data-test-id":"create-tab",children:(0,E.jsx)(I.Z,{contextData:{event:101,component:8,element:12969},iconEnd:c?void 0:"arrow-down",isSelected:e,onClick:e=>{t?.(),c?(a({event_type:101,component:13988,element:10949}),e.preventDefault(),m.push({pathname:(0,r.Z)(c),state:{entry_type:"navbar_plus_button"}})):p(e=>!e)},role:c?"link":"button",text:n.bt("Créer", "Create", "header.section.createTab", undefined, true)})}),d&&(0,E.jsx)(C.Z,{eligibleIds:[504669],eligibleTypes:[8],placementId:1000109,children:({complete:e,dismiss:t,experience:n})=>{let{display_data:i}=n;return h.current={complete:e},i?.disappear_time&&setTimeout(()=>{t()},i.disappear_time),(0,E.jsx)(o.xu,{zIndex:new o.Ry(10),children:(0,E.jsx)(o.Li,{accessibilityLabel:"PopoverEducational",anchor:d.current,idealDirection:"down",message:i?.text,onDismiss:()=>{}})})}}),u&&(0,E.jsxs)(o.Lt,{anchor:d.current,id:"header-create-dropdown",idealDirection:"down",onDismiss:()=>{p(!1)},zIndex:new o.Ry(1e3),children:[(0,E.jsx)(o.Lt.Link,{dataTestId:"create-idea-pin",href:"/idea-pin-builder/",onClick:()=>x(10949),option:{value:"ideaPin",label:n.bt("Créer une Épingle Idée", "Create Idea Pin", "header.headerCreateMenu.ideaPinBtn", undefined, true)}}),(0,E.jsx)(o.Lt.Link,{dataTestId:"create-static-pin",href:"/pin-builder/",onClick:()=>x(10643),option:{value:"pin",label:n.bt("Créer une Épingle", "Create Pin", "header.headerCreateMenu.pinBtn", undefined, true)}})]})]})};var B=n(796796),R=n(391322),Z=n(677801),O=n(32810),L=n(477458),z=n(983983),D=n(953565);function N({tabs:e}){let t=(0,_.ZP)(),[n,s]=(0,i.useState)(!1),{hovered:r,onMouseEnter:l,onMouseLeave:a}=(0,L.Z)(),c=(0,i.useRef)(),d=e.find(e=>e.isSelected);d||(d=e.find(e=>"home"===e.key));let h=()=>s(!1);return(0,E.jsxs)(i.Fragment,{children:[(0,E.jsx)(o.xu,{ref:c,color:n?"dark":r?"secondary":void 0,"data-test-id":"HeaderCollapsedTabs",display:"inlineBlock",flex:"none",height:48,marginStart:2,minWidth:60,onMouseEnter:l,onMouseLeave:a,rounding:6,children:(0,E.jsx)(o.iP,{fullHeight:!0,onTap:()=>{s(!n),d?.incrementKey&&(0,D.nP)(d.incrementKey)},rounding:6,children:(0,E.jsxs)(o.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{padding:"14px 14px",whiteSpace:"nowrap"}},display:"flex",flex:"none",justifyContent:"center",children:[(0,E.jsx)(o.xv,{align:"center",color:n?"inverse":"default",overflow:"normal",weight:"bold",children:d?.text}),(0,E.jsx)(o.xu,{dangerouslySetInlineStyle:{__style:{marginTop:"1px"}},marginStart:2,children:(0,E.jsx)(o.JO,{accessibilityLabel:t.bt("Ouvrir le menu d’onglet", "Open tab menu", "header.tabMenu.downArrow", undefined, true),color:n?"inverse":"default",icon:"arrow-down",size:12})})]})})}),n&&(0,E.jsx)(o.xu,{"data-test-id":"HeaderCollapsedTabsMenu",children:(0,E.jsx)(o.Lt,{anchor:c.current,disableMobileUI:!0,id:"HeaderCollapsedTabsMenu",onDismiss:h,zIndex:new o.H3([new o.Ry(z.fe)]),children:e.map(({isSelected:e,key:n,text:i,url:s})=>(0,E.jsx)(o.Lt.Link,{href:s,onClick:h,option:{value:n,label:i},children:(0,E.jsxs)(o.kC,{alignItems:"center",width:"100%",children:[(0,E.jsx)(o.kC.Item,{flex:"grow",children:(0,E.jsx)(o.xv,{weight:"bold",children:i})}),(0,E.jsx)(o.JO,{accessibilityLabel:t.bt("Option sélectionnée", "Selected option", "flyoutMenu.selectedOptionCheckmark", undefined, true),color:"default",icon:e?"check":void 0,inline:!0})]})},n))})})]})}var U=n(4058),H=n(276235),M=n(757640);function F({children:e,isSelected:t}){let{isLoaded:n,data:i}=(0,M.Z)({name:"ApiResource",options:{url:"/v3/feeds/homefeed/badge/"},noCache:!0});return e(!!(n&&i)&&!t)}function $({anchor:e}){let t=(0,_.ZP)();return(0,E.jsx)(o.Li,{anchor:e,idealDirection:"down",message:t.bt("Votre page d’accueil affichera des idées de vos nouveaux centres d’intérêt", "Your home feed will show ideas for your new interests", "Flyout message on Pinterest logo on Header", undefined, true),onDismiss:()=>{}})}var W=n(249222),Y=n(509474),G=n(433058),K=n(454051);function q({isSelected:e,onClick:t}){let n=(0,_.ZP)();(0,G.Z)({component:8,element:11674});let i=n.bt("Explorer", "Explore", "header.section.exploreTab", undefined, true);return(0,E.jsx)(I.Z,{contextData:{event:101,component:8,element:11674},dataTestId:"today-tab",isSelected:e,onClick:t,showNotifBadge:!0,text:i,url:(0,K.tG)()})}var V=n(961550),X=n(19549),Q=n(909846),J=n(917198);function ee(e,t,n){var i;return(t="symbol"==typeof(i=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=typeof i)return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?i:String(i))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class et extends i.Component{constructor(e){super(e),ee(this,"mounted",!1),ee(this,"iconRoutes",(0,B.Z)({username:this.props.viewer.username,isIdeaPinRenamingEnabled:this.props.isIdeaPinRenamingEnabled})),ee(this,"logoButtonRef",(0,i.createRef)()),ee(this,"profileRef",(0,i.createRef)()),ee(this,"getCollapsedTabList",()=>[{key:"home",text:this.props.i18n.bt("Accueil", "Home", "header.homeButton.section", undefined, true),url:"/",incrementKey:z.sp.HOME_BUTTON_COLLAPSED_TAB},...this.props.isTodayTabEligible?[{key:"explore",text:this.props.i18n.bt("Explorer", "Explore", "header.section.exploreTab", undefined, true),url:(0,K.tG)(),incrementKey:z.sp.TODAY_TAB_COLLAPSED_TAB}]:[],{key:"create",text:this.props.i18n.bt("Créer", "Create", "header.section.createTab", undefined, true),url:(0,r.Z)(this.props.isIdeaPinRenamingEnabled),incrementKey:z.sp.CREATE_TAB_COLLAPSED_TAB}]),ee(this,"handleResize",(0,p.Z)(()=>{if(this.mounted){let e=document.getElementById("searchBoxContainer")?.offsetWidth||0;this.setState({searchIconOnly:e<=300}),window.innerWidth<850&&this.props.requestContext?this.setState({shrinkSearchbox:!0}):this.state.shrinkSearchbox&&this.setState({searchIconOnly:!1,shrinkSearchbox:!1})}},100)),ee(this,"fetchUserAccounts",()=>{let{userAccountsRetrieved:e,viewer:t}=this.props;t.isAuth&&(0,g.dD)(t).then(t=>{e(t)})}),this.state={headerIconExperience:null,searchIconOnly:!1,selected:(0,R.Z)({pathname:e.location.pathname,iconRoutes:this.iconRoutes}),showLeftTabs:!0,showToolTip:!1,shrinkSearchbox:!1}}componentDidMount(){let{headerButtonContext:e,isMetricDAUExperimentEnabled:t}=this.props;this.mounted=!0,this.fetchUserAccounts(),this.handleResize(),window.addEventListener("resize",this.handleResize),(0,i.startTransition)(()=>{e.setLogoButtonRef(this.logoButtonRef.current)}),t&&(0,h.Z)()}componentDidUpdate(e){let{location:t,showToolTipExp:n}=this.props;if(e.location.pathname!==t.pathname){let e=(0,R.Z)({pathname:t.pathname,iconRoutes:this.iconRoutes});this.setState({selected:e})}e.showToolTipExp===n||this.state.showToolTip||this.setState({showToolTip:!0})}componentWillUnmount(){window.removeEventListener("resize",this.handleResize),this.mounted=!1}renderSearchBox(){let{history:e}=this.props,{searchIconOnly:t,shrinkSearchbox:n}=this.state;return e?.push?(0,E.jsx)(w.Z,{handleIconOnlyChange:e=>this.setState({showLeftTabs:t&&e}),iconOnly:t,widthType:n?"shrink":void 0}):null}renderButtons(){let{currentSite:e,headerButtonContext:t,isPersistentArrUpsellEnabled:n,isVerticalNavEnabled:s,startPrefetchTimer:r,cancelPrefetchTimer:l,onNavigateToHomefeed:a,onMouseDownHomefeedPrefetch:c,onNavigateToHomefeedMousedownPrefetch:d}=this.props,{headerIconExperience:h,selected:u,showLeftTabs:p,showToolTip:_,shrinkSearchbox:f}=this.state;return s?(0,E.jsxs)(o.xu,{alignItems:"center",column:12,display:"flex",height:56,children:[this.renderSearchBox(),(0,E.jsx)(o.kC.Item,{children:(0,E.jsx)(W.Z,{children:(0,E.jsx)(Z.Z,{idealTooltipDirection:"down",isSelected:"profile"===u,onClick:()=>(0,D.nP)(V.Un.AVATAR),tooltipZIndex:V.BO})})})]}):(0,E.jsxs)(o.xu,{alignItems:"center",column:12,display:"flex",height:56,children:[(0,E.jsxs)(o.xu,{children:[(0,E.jsx)(o.xu,{ref:this.logoButtonRef,"aria-hidden":!0,children:(0,E.jsx)(H.Z,{cancelPrefetchTimer:l,headerIconExperience:h,onClick:()=>{(0,D.nP)(z.sp.PINTEREST_LOGO),a(),d?.()},onMouseDown:c,startPrefetchTimer:r},"HomeButton")}),_&&(0,E.jsx)(m.default,{anchor:this.logoButtonRef.current,experienceIds:[500613],noClickToDismiss:!0,placementId:19,shouldTimeoutDismiss:!0}),t.isTooltipOnLogoButtonShown&&(0,E.jsx)($,{anchor:this.logoButtonRef.current})]}),!f&&p&&(0,E.jsxs)(i.Fragment,{children:[(0,E.jsx)(F,{isSelected:"home"===u,children:e=>(0,E.jsx)(I.Z,{dataTestId:"home-tab",isSelected:"home"===u,onClick:()=>(0,D.nP)(z.sp.HOME_TAB),showNotifBadge:e,text:this.props.i18n.bt("Accueil", "Home", "header.homeButton.section", undefined, true),url:"/"})}),this.props.isTodayTabEligible&&(0,E.jsx)(q,{isSelected:"today"===u,onClick:()=>(0,D.nP)(z.sp.TODAY_TAB)}),(0,E.jsx)(k,{isSelected:"create"===u,onClick:()=>(0,D.nP)(z.sp.CREATE_TAB)})]}),f&&p&&(0,E.jsx)(N,{tabs:this.getCollapsedTabList().map(e=>({isSelected:u===e.key,...e}))}),this.renderSearchBox(),(0,E.jsxs)(o.xu,{alignItems:"center","data-test-id":"button-container",display:"flex",children:[(0,E.jsx)(Y.F,{value:{currentSite:e},children:(0,E.jsx)(X.Z,{onConversationsClick:()=>(0,D.nP)(z.sp.CONVERSATIONS),onNewsClick:()=>(0,D.nP)(z.sp.NEWS)})}),(0,E.jsxs)(i.Fragment,{children:[(0,E.jsx)(o.xu,{ref:this.profileRef,children:(0,E.jsx)(W.Z,{children:(0,E.jsx)(Z.Z,{isSelected:"profile"===u,onClick:()=>(0,D.nP)(z.sp.AVATAR)})})}),(0,E.jsx)(x.Z,{currentSite:e,isPersistentArrUpsellEnabled:n,onClick:()=>(0,D.nP)(z.sp.ACCOUNT_OPTIONS)})]})]})]})}renderHomeButtonAndAccountSwitcher(){let{currentSite:e,headerButtonContext:t,isPersistentArrUpsellEnabled:n}=this.props,{headerIconExperience:s,selected:r,showToolTip:l}=this.state;return(0,E.jsxs)(o.xu,{alignItems:"center",column:12,display:"flex",height:56,children:[(0,E.jsxs)(o.xu,{children:[(0,E.jsx)(o.xu,{ref:this.logoButtonRef,"aria-hidden":!0,children:(0,E.jsx)(H.Z,{headerIconExperience:s,onClick:()=>(0,D.nP)(z.sp.EXTERNAL_BUTTON_QUERY_PINTEREST_LOGO)},"HomeButton")}),l&&(0,E.jsx)(m.default,{anchor:this.logoButtonRef.current,experienceIds:[500613],noClickToDismiss:!0,placementId:19,shouldTimeoutDismiss:!0}),t.isTooltipOnLogoButtonShown&&(0,E.jsx)($,{anchor:this.logoButtonRef.current})]}),(0,E.jsx)(o.xu,{flex:"grow"}),(0,E.jsx)(o.xu,{alignItems:"center","data-test-id":"button-container",display:"flex",children:(0,E.jsxs)(i.Fragment,{children:[(0,E.jsx)(o.xu,{ref:this.profileRef,children:(0,E.jsx)(W.Z,{children:(0,E.jsx)(Z.Z,{isSelected:"profile"===r,onClick:()=>(0,D.nP)(z.sp.EXTERNAL_BUTTON_QUERY_AVATAR)})})}),(0,E.jsx)(x.Z,{currentSite:e,isPersistentArrUpsellEnabled:n,onClick:()=>(0,D.nP)(z.sp.EXTERNAL_BUTTON_QUERY_ACCOUNT_OPTIONS)})]})})]})}renderBusinessSsoPageHeader(){let{headerIconExperience:e}=this.state,{i18n:t}=this.props;return(0,E.jsxs)(o.xu,{alignItems:"center",column:12,display:"flex",height:56,children:[(0,E.jsx)(o.xu,{ref:this.logoButtonRef,"aria-hidden":!0,children:(0,E.jsx)(H.Z,{headerIconExperience:e,onClick:()=>(0,D.nP)(z.sp.SSO_PAGE_PINTEREST_LOGO)},"HomeButton")}),(0,E.jsx)(o.xu,{dangerouslySetInlineStyle:{__style:{letterSpacing:"-1px"}},children:(0,E.jsx)(o.X6,{accessibilityLevel:2,color:"default",overflow:"normal",size:"400",children:t.bt("Professionnel", "Business", "authHeader.logoText.business", undefined, true)})})]})}renderUnsubscribePageHeader(){let{headerIconExperience:e}=this.state,{history:t,i18n:n,trackInteraction:i}=this.props;return(0,E.jsxs)(o.xu,{alignItems:"center",column:12,display:"flex",height:56,children:[(0,E.jsx)(o.xu,{children:(0,E.jsx)(H.Z,{headerIconExperience:e,onClick:()=>(0,D.nP)(z.sp.UNSUBSCRIBE_PAGE_PINTEREST_LOGO)},"HomeButton")}),(0,E.jsx)(o.xu,{flex:"grow"}),(0,E.jsx)(o.xu,{alignItems:"center","data-test-id":"button-container",display:"flex",children:(0,E.jsx)(o.iP,{onTap:()=>{t.push("/"),i({action:"click",item:"back-to-pinterest",within:"unsubscribe-page"})},rounding:2,tapStyle:"compress",children:(0,E.jsxs)(o.kC,{alignItems:"center",justifyContent:"start",children:[(0,E.jsx)(o.xv,{inline:!0,size:"300",weight:"bold",children:n.bt("Retourner sur Pinterest", "Back to Pinterest", "header.backToPinterest.section", undefined, true)}),(0,E.jsx)(Z.Z,{isSelected:!1,noNavigation:!0,onClick:()=>(0,D.nP)(z.sp.UNSUBSCRIBE_PAGE_AVATAR)})]})})})]})}renderHeaderContent(){let{location:e,viewer:t}=this.props;if((0,f.RU)(e)){let t=(0,P.mB)(e.search);if((0,u.Z)(t))return this.renderHomeButtonAndAccountSwitcher()}else if((0,f.OK)(e)&&t.isLimitedLogin)return this.renderUnsubscribePageHeader();else if((0,f.nU)(e))return this.renderBusinessSsoPageHeader();return this.renderButtons()}render(){let{headerShadowContext:{isScrolled:e,subheaderShadow:t},nags:n,showTypeaheadOverlay:i,isVerticalNavEnabled:s}=this.props;return(0,E.jsxs)(o.xu,{color:"default",column:12,dangerouslySetInlineStyle:{__style:{borderRadius:s&&i?`${V.kl}px ${V.kl}px 0 0`:void 0}},"data-test-id":"header-background",children:[n,(0,E.jsx)(o.xu,{dangerouslySetInlineStyle:{__style:{...null===t&&e?z.Rz:{}}},children:(0,E.jsx)(o.kC,{direction:"column",height:z.cI,justifyContent:"start",width:"100%",children:(0,E.jsx)(o.xu,{alignItems:"center",column:12,display:"flex",flex:"grow",paddingX:4,paddingY:1,children:this.renderHeaderContent()})})})]})}}function en(e){let t=(0,_.ZP)(),n=(0,J.X2)(),i=(0,y.B)(),{checkExperiment:o}=(0,b.F)(),{userAccountsRetrieved:r}=(0,A.N)(),h=(0,T.Z)(),{isFbAuthOnlyUser:u}=(0,Q.t)(),{startPrefetchTimer:p,cancelPrefetchTimer:m,onNavigateToHomefeed:x}=(0,c.$)(),{onMouseDown:f,onNavigateToHomefeed:g}=(0,c.C)(),P=(0,a.Z)(),{appUI:{showTypeaheadOverlay:w}}=(0,S.I)();o("social_growth_holdout_2023_h2"),o("social_experience_holdout_2024_h1"),o("social_experience_holdout_2024_h2");let v=(0,l.Z)(!0),C=(0,j.Z)(),I=n&&Object.keys(n).map(e=>n[e]).filter(e=>e.showTooltip).length>0,k=(0,d.Z)("header");return(0,E.jsx)(et,{...e,cancelPrefetchTimer:m,headerButtonContext:(0,O.p)(),headerShadowContext:(0,U.WQ)(),history:(0,s.k6)(),i18n:t,isIdeaPinRenamingEnabled:v,isMetricDAUExperimentEnabled:k,isPersistentArrUpsellEnabled:u,isTodayTabEligible:C,isVerticalNavEnabled:P,location:(0,s.TH)(),onMouseDownHomefeedPrefetch:f,onNavigateToHomefeed:x,onNavigateToHomefeedMousedownPrefetch:g,requestContext:i,showPersonalBoutique:e.viewer.show_personal_boutique??!1,showToolTipExp:I,showTypeaheadOverlay:w,startPrefetchTimer:p,trackInteraction:h,userAccountsRetrieved:r})}},677801:(e,t,n)=>{n.d(t,{Z:()=>b});var i=n(667294),s=n(883119),o=n(3808),r=n(205841),l=n(140017),a=n(495442),c=n(340370),d=n(5859),h=n(201700),u=n(477458),p=n(149722),m=n(514810),x=n(983983),_=n(961550),f=n(785893);function g({children:e,show:t,text:n,idealDirection:i,zIndex:o}){return t?(0,f.jsx)(s.u,{accessibilityLabel:"",idealDirection:i,text:n,zIndex:o||new s.H3([new s.Ry(x.fe)]),children:e}):e}function b({isAdsSite:e=!1,isAnalyticsSite:t=!1,isTrendsSite:n=!1,isSelected:x,noNavigation:b=!1,idealTooltipDirection:y,tooltipZIndex:j,onClick:T}){let P=(0,p.Z)(),A=(0,d.B)(),S=(0,l.ZP)(),{active:w,hovered:v,onBlur:C,onFocus:I,onMouseDown:E,onMouseUp:k,onMouseEnter:B,onMouseLeave:R}=(0,u.Z)(),{fullName:Z,username:O,imageMediumUrl:L}=P.isAuth?P:{fullName:"",username:"",imageMediumUrl:""},{isInBiznuxFullscreen:z}=(0,m.Z)(),D=(0,i.useRef)(null),N=(0,h.Z)({isAdsSite:e,isAnalyticsSite:t,isTrendsSite:n,path:`/${O}/`,requestContext:A}),U=(0,c.Z)({href:N,onHistoryChange:a.Z}),H=(0,o.Z)();return z||b?(0,f.jsx)(s.xu,{"data-test-id":"header-profile",height:48,rounding:"circle",width:48,children:(0,f.jsx)(s.xu,{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",rounding:"circle",width:"100%",children:(0,f.jsx)(s.xu,{alignItems:"center",display:"flex",height:30,justifyContent:"center",rounding:"circle",width:30,children:(0,f.jsx)(r.qE,{name:Z,size:"xs",src:L})})})}):(0,f.jsx)(s.xu,{"data-test-id":"header-profile",children:(0,f.jsx)(g,{idealDirection:y,show:![e,t,n].some(Boolean),text:S.bt("Votre profil", "Your profile", "navbar.avatarButton.tooltip", undefined, true),zIndex:j,children:(0,f.jsx)(s.Tg,{href:N,onTap:({event:e,dangerouslyDisableOnNavigation:t})=>{T?.(),t(),U({event:e})},rounding:"circle",children:(0,f.jsx)(s.xu,{ref:D,color:v&&!H?"secondary":void 0,dangerouslySetInlineStyle:H?{__style:{backgroundColor:v?_.bT:void 0}}:void 0,height:48,onBlur:C,onFocus:I,onMouseDown:E,onMouseEnter:B,onMouseLeave:R,onMouseUp:k,rounding:"circle",width:48,children:(0,f.jsx)(s.xu,{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",rounding:"circle",width:"100%",children:(0,f.jsx)(s.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{...w||x?{border:"2px solid #111111"}:{}}},display:"flex",height:30,justifyContent:"center",rounding:"circle",width:30,children:(0,f.jsx)(r.qE,{name:Z,size:"xs",src:L})})})})})})})}},249222:(e,t,n)=>{n.d(t,{Z:()=>f});var i=n(667294),s=n(883119),o=n(406893),r=n(514810),l=n(19447),a=n(785893);function c(e,t,n){var i;return(t="symbol"==typeof(i=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=typeof i)return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?i:String(i))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}let d="SavePin",h={__style:{left:"50%",marginLeft:-125}},u={__style:{animationName:`${d}_AnimateIn, ${d}_CircleAnimateOut`,animationDuration:"0.3s, 0.25s",animationDelay:"0.5s, 1.3s",animationFillMode:"forwards",animatitionTimingFunction:"ease-out",backgroundColor:"rgba(255, 255, 255, 0.6)"}},p={__style:{animationName:`${d}_AnimateIn, ${d}_AnimateOut`,animationDuration:"0.3s, 0.35s",animationDelay:"0.5s, 1.55s",animationFillMode:"forwards",animatitionTimingFunction:"ease-out",border:"4px solid white"}},m={__style:{animationName:`${d}_NavButtonAnimation`,animationDuration:"0.8s",animationDelay:"1.65s",animationFillMode:"forwards",animatitionTimingFunction:"ease-out"}},x=()=>`
@keyframes ${d}_AnimateIn {
  from {
    transform: scale(0.0);
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: scale(1.0);
  }
}
@keyframes ${d}_CircleAnimateOut {
  from {
    transform: scale(1.0);
    opacity: 1;
  }
  to {
    transform: scale(0.8);
    opacity: 0;
  }
}
@keyframes ${d}_AnimateOut {
  from {
    transform: translateY(0) scale(1.0);
    opacity: 1;
  }
  to {
    transform: translateY(-100px) scale(0.0);
    opacity: 0;
  }
}
@keyframes ${d}_NavButtonAnimation {
  0% {
    transform: scale(1.0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1.0);
  }
}
`;class _ extends i.Component{constructor(...e){super(...e),c(this,"state",{imageLoaded:!1}),c(this,"handleAnimationCompletion",()=>{let{animationEnded:e}=this.props;this.setState({imageLoaded:!1},()=>{e()})}),c(this,"handleImageLoad",()=>{this.setState({imageLoaded:!0})}),c(this,"loadImage",()=>{let e=new Image;e.onload=this.handleImageLoad,e.src=this.imageSrc()}),c(this,"imageSrc",()=>{let{images:e={}}=this.props.lastRepin||{};return e["236x"]?.url??""}),c(this,"shouldRenderAnimation",()=>{let{lastRepin:e,startAnimation:t}=this.props,{imageLoaded:n}=this.state;return!!(e&&n&&t)})}componentDidUpdate(e,t){let{lastRepin:n={}}=e,{imageLoaded:i}=t,{lastRepin:s,startAnimation:o}=this.props,{imageLoaded:r}=this.state;s&&s.id!==n?.id&&this.loadImage(),o&&r&&r!==i&&(this.dismissTimeout=setTimeout(this.handleAnimationCompletion,2500))}componentWillUnmount(){this.dismissTimeout&&clearTimeout(this.dismissTimeout)}render(){let{children:e}=this.props;return this.shouldRenderAnimation()?(0,a.jsxs)(s.kC,{alignItems:"stretch",flex:"grow",justifyContent:"center",children:[(0,a.jsx)(o.Z,{unsafeCSS:x()}),(0,a.jsxs)(s.xu,{position:"relative",children:[(0,a.jsxs)(s.xu,{dangerouslySetInlineStyle:h,height:250,position:"absolute",top:!0,width:250,children:[(0,a.jsx)(s.xu,{alignItems:"center",dangerouslySetInlineStyle:u,display:"flex",height:"100%",justifyContent:"center",opacity:0,rounding:"circle",width:"100%"}),(0,a.jsx)(s.xu,{bottom:!0,dangerouslySetInlineStyle:p,height:100,left:!0,margin:"auto",opacity:0,position:"absolute",right:!0,rounding:3,top:!0,width:100,children:(0,a.jsx)(s.zd,{height:"100%",rounding:2,wash:!0,width:"100%",children:(0,a.jsx)(s.Ee,{alt:"pin-image",fit:"cover",naturalHeight:1,naturalWidth:1,src:this.imageSrc()})})})]}),(0,a.jsx)(s.xu,{dangerouslySetInlineStyle:m,children:e})]})]}):e}}function f(e){let{repinPinId:t,repinStartAnimation:n,updateHeaderState:i}=(0,r.Z)(),s=(0,l.S6)(),o=t?s(t):null;return(0,a.jsx)(_,{...e,animationEnded:()=>i({type:"hideRepinAnimation"}),lastRepin:o,startAnimation:n})}},19549:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(667294),s=n(149722),o=n(474373),r=n(901551),l=n(785893);function a({onNewsClick:e,onConversationsClick:t}){let{should_show_messaging:n}=(0,s.Z)();return(0,l.jsxs)(i.Fragment,{children:[(0,l.jsx)(o.Z,{onClick:e}),n&&(0,l.jsx)(r.Z,{onClick:t})]})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/AuthDesktopHeader.fr-9cdfdbcd47bcb3fa.mjs.map