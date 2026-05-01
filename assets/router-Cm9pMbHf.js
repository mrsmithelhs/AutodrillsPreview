import{_ as Ie,b as Me,u as pn,c as ps,d as ms}from"./_plugin-vue_export-helper-Bek3fI5z.js";import{w as wt,v as mn,T as Ye}from"./runtime-dom.esm-bundler-BUw9fcxB.js";import{j as g,c as v,e as s,h as ie,l as gn,r as _,F as ee,g as re,t as k,m as Te,k as je,w as He,u as f,p as vn,d as X,i as C,q as gs,n as Pe,s as vs,f as ke,o as fs,v as hs,x as bs,y as an}from"./runtime-core.esm-bundler-CVOo-rNy.js";import{_ as Xe,s as et,a as ks,b as ys}from"./substitutions-D0NLupZY.js";import{_ as ws,d as Ss}from"./drillSelection-B4NW8Ljz.js";import{i as qe,a as St,A as ze,o as As,r as xs}from"./indexedDbClient-Bvx_Z4GV.js";const Is={class:"answer-editor"},Cs=["value","disabled"],$s={__name:"AnswerEditor",props:{modelValue:{type:String,default:""},disabled:Boolean},emits:["update:modelValue","submit"],setup(e,{expose:n,emit:t}){const a=t,l=_(null);function i(m){if((m.ctrlKey||m.metaKey)&&m.key==="Enter"){m.preventDefault(),a("submit");return}if(m.key!=="Tab")return;m.preventDefault();const p=m.target,y=p.selectionStart,$=p.selectionEnd,Q=`${p.value.slice(0,y)}  ${p.value.slice($)}`;a("update:modelValue",Q),gn(()=>{p.selectionStart=y+2,p.selectionEnd=y+2})}function c(){l.value?.focus()}return n({focus:c}),(m,p)=>(g(),v("div",Is,[s("textarea",{ref_key:"inputRef",ref:l,class:"form-control mono-block",rows:"8",value:e.modelValue,disabled:e.disabled,placeholder:"Type a Java expression or statement here",onInput:p[0]||(p[0]=y=>m.$emit("update:modelValue",y.target.value)),onKeydown:i},null,40,Cs),p[1]||(p[1]=s("div",{class:"mt-2 text-muted small"},[ie(" Use "),s("kbd",null,"Ctrl"),ie(" + "),s("kbd",null,"Enter"),ie(" to check your answer. ")],-1))]))}},Rs=Ie($s,[["__scopeId","data-v-3776d34a"]]),_s={class:"d-flex justify-content-between align-items-center mb-2"},Ms={class:"btn-group btn-group-sm"},Ts={key:0,class:"text-muted small"},Ps={key:1,class:"d-grid gap-3"},Ds={class:"d-flex justify-content-between align-items-start gap-3 mb-2"},Vs=["checked","onChange"],Ns={class:"fw-semibold"},Es={class:"badge text-bg-light"},Ls={class:"ps-4 d-grid gap-2"},Os=["checked","disabled","onChange"],Bs={class:"badge text-bg-light"},Us={__name:"CourseUnitTopicPicker",props:{modelValue:{type:Object,default:()=>({unitIds:[],topicIds:[]})},options:{type:Array,default:()=>[]},loading:Boolean},emits:["update:modelValue","select-all","clear-all"],setup(e,{emit:n}){const t=e,a=n;function l(I={}){return{unitIds:Array.isArray(I.unitIds)?[...new Set(I.unitIds.map(L=>String(L||"").trim()).filter(Boolean))]:[],topicIds:Array.isArray(I.topicIds)?[...new Set(I.topicIds.map(L=>String(L||"").trim()).filter(Boolean))]:[]}}function i(I){a("update:modelValue",l(I))}function c(I){return l(t.modelValue).unitIds.includes(I)}function m(I){return l(t.modelValue).topicIds.includes(I)}function p(I,L){return c(I)||m(L)}function y(I){const L=l(t.modelValue),E=new Set(L.unitIds);E.has(I)?E.delete(I):E.add(I),i({...L,unitIds:[...E]})}function $(I){const L=l(t.modelValue),E=new Set(L.topicIds);E.has(I)?E.delete(I):E.add(I),i({...L,topicIds:[...E]})}function Q(I){return I.unitName||I.displayName||I.unitId}function fe(I){return I.topicName||I.displayName||I.topicId}return(I,L)=>(g(),v("div",null,[s("div",_s,[L[2]||(L[2]=s("label",{class:"form-label fw-semibold mb-0"},"Units and Topics",-1)),s("div",Ms,[s("button",{class:"btn btn-outline-secondary",onClick:L[0]||(L[0]=E=>I.$emit("select-all"))},"All units"),s("button",{class:"btn btn-outline-secondary",onClick:L[1]||(L[1]=E=>I.$emit("clear-all"))},"None")])]),L[3]||(L[3]=s("p",{class:"text-muted small mb-3"}," Select a whole unit, or pick one or more topics within a unit. Whole-unit selections include every topic in that unit. ",-1)),e.loading?(g(),v("div",Ts,"Loading AP CSA units and topics...")):(g(),v("div",Ps,[(g(!0),v(ee,null,re(e.options,E=>(g(),v("div",{key:E.unitId,class:"border rounded-3 p-3 bg-white"},[s("label",Ds,[s("span",null,[s("input",{class:"form-check-input me-2",type:"checkbox",checked:c(E.unitId),onChange:T=>y(E.unitId)},null,40,Vs),s("span",Ns,k(Q(E)),1)]),s("span",Es,k(E.count||0),1)]),s("div",Ls,[(g(!0),v(ee,null,re(E.topics||[],T=>(g(),v("label",{key:T.topicId,class:"d-flex justify-content-between align-items-start gap-3"},[s("span",null,[s("input",{class:"form-check-input me-2",type:"checkbox",checked:p(E.unitId,T.topicId),disabled:c(E.unitId),onChange:G=>$(T.topicId)},null,40,Os),s("span",null,k(T.topicNumber?`${T.topicNumber} ${fe(T)}`:fe(T)),1)]),s("span",Bs,k(T.count||0),1)]))),128))])]))),128))]))]))}};var pt={exports:{}};const fn=[{value:"prompt",label:"Prompt"},{value:"hints",label:"Hints"},{value:"solution",label:"Solution"},{value:"missing_information",label:"Missing information"},{value:"topic_alignment",label:"Topic alignment"},{value:"something_else",label:"Something else"}],hn=[{value:"open",label:"Open"},{value:"investigating",label:"Investigating"},{value:"manual_review",label:"Manual review"},{value:"resolved",label:"Resolved"},{value:"duplicate",label:"Duplicate"},{value:"wont_fix",label:"Won't fix"}],Bt=fn.map(e=>e.value),Ut=hn.map(e=>e.value),bn=["open","investigating","manual_review"];function zs(e=[]){const n=Array.isArray(e)?e:[],t=new Set,a=[];return n.forEach(l=>{const i=String(l||"").trim();!i||t.has(i)||!Bt.includes(i)||(t.add(i),a.push(i))}),a}function js(e){return Bt.includes(String(e||"").trim())}function kn(e,n="open"){const t=String(e||"").trim();return Ut.includes(t)?t:n}function Hs(e){return Ut.includes(String(e||"").trim())}function qs(e){return bn.includes(kn(e,"open"))}pt.exports={REPORT_ISSUE_AREAS:fn,REPORT_STATUSES:hn,REPORT_ISSUE_AREA_VALUES:Bt,REPORT_STATUS_VALUES:Ut,UNRESOLVED_REPORT_STATUS_VALUES:bn,normalizeReportIssueAreas:zs,isKnownReportIssueArea:js,normalizeReportStatus:kn,isKnownReportStatus:Hs,isUnresolvedReportStatus:qs};const zt=(pt.exports==null?{}:pt.exports).default||pt.exports,yn=Object.freeze(Object.defineProperty({__proto__:null,default:zt},Symbol.toStringTag,{value:"Module"}));function F(e,n=""){return String(e??"").trim()||n}function Fs(e=[]){return(Array.isArray(e)?e:[]).map(t=>F(t)).filter(Boolean).join(", ")}function Ws(e={}){const n=Array.isArray(e.skills)?e.skills:[],t=n.find(l=>String(l?.role||"").trim()==="primary")||n[0]||null,a=F(t?.skillId||e.skillId||e.drillId);return{skillId:a,skillName:F(t?.displayName||e.skillName||a,a)}}function Gs({drill:e={},reportDetails:n={},currentUrl:t=typeof window<"u"?window.location.href:""}={}){const a=Ws(e),l=Array.isArray(n.issueAreas)?n.issueAreas.map(c=>F(c)).filter(Boolean):[],i=F(n.studentNote,"");return{drillId:F(e.drillId),primarySkillId:a.skillId,primarySkillName:a.skillName,unitId:F(e.unitId),unitName:F(e.unitName||e.unitId),topicId:F(e.topicId),topicName:F(e.topicName||e.topicId),catalogVersion:F(e.catalogVersion||e.previewCatalogVersion||""),renderedPrompt:F(e.renderedPrompt||e.promptTemplate||""),validationType:F(e.validationType||""),currentUrl:F(t,""),issueAreas:l,issueAreaLabels:Fs(l),studentNote:i}}function wn(e={}){const n=F(e.drillId,"preview drill"),t=F(e.issueAreaLabels,"");return t?`[Drill report] ${n} - ${t}`:`[Drill report] ${n}`}function Sn(e={}){return["### Drill ID",F(e.drillId,""),"","### Primary skill ID",F(e.primarySkillId,""),"","### AP unit/topic",`${F(e.unitName,e.unitId)} / ${F(e.topicName,e.topicId)}`.trim(),"","### Preview catalog version",F(e.catalogVersion,""),"","### Rendered prompt",F(e.renderedPrompt,""),"","### Selected issue areas",F(e.issueAreaLabels||e.studentNote,""),"","### Notes",F(e.studentNote,"Not provided"),"","### Current URL",F(e.currentUrl,"")].join(`
`)}function mt(e={}){const n=F(void 0,""),t=F(void 0,""),a=n||(t.includes("/")?`https://github.com/${t}/issues/new`:"");if(!a)return"";const l=a.startsWith("http")?new URL(a):new URL(a,typeof window<"u"?window.location.origin:"https://github.com");return l.searchParams.set("template","drill_report.yml"),l.searchParams.set("title",wn(e)),l.searchParams.set("body",Sn(e)),l.searchParams.set("labels","preview,drill-report"),l.toString()}function Js(e={}){const n=mt(e);return[wn(e),n?`Issue URL: ${n}`:"","",Sn(e)].filter(Boolean).join(`
`)}const Qs={class:"modal-content shadow-lg border-0 overflow-hidden"},Ks={class:"modal-header text-white border-0 py-3 px-4",style:{"background-color":"#b42318"}},Zs=["disabled"],Ys={class:"modal-body p-4"},Xs={class:"text-muted mb-3"},ea={key:0},ta={key:1},na={class:"fw-semibold text-dark"},sa={class:"row g-2 mb-3"},aa={class:"report-option d-flex align-items-center gap-2 rounded border p-2 h-100"},la=["checked","value","disabled","onChange"],ia={class:"fw-semibold"},ra={class:"mb-2"},oa=["disabled"],da={key:0,class:"alert alert-danger py-2 px-3 small mb-0"},ca={key:1,class:"alert alert-info py-2 px-3 small mb-0"},ua={class:"modal-footer border-0 p-3 bg-light d-flex justify-content-between align-items-center"},pa=["disabled"],ma={class:"ms-auto d-flex flex-wrap gap-2"},ga=["disabled"],va=["disabled"],fa=["disabled"],ha=["disabled"],ba={__name:"DrillReportModal",props:{show:Boolean,drill:{type:Object,default:null},submitting:Boolean,errorMessage:{type:String,default:""},previewMode:Boolean},emits:["close","submit"],setup(e,{emit:n}){const{REPORT_ISSUE_AREAS:t}=zt||yn,a=e,l=n,i=_([]),c=_(""),m=_(""),p=_(""),y=C(()=>a.submitting||!i.value.length),$=C(()=>a.submitting||!i.value.length),Q=C(()=>!!mt(L()));function fe(){i.value=[],c.value="",m.value="",p.value=""}Te(()=>[a.show,a.drill?.drillId||""],([U])=>{U&&fe()},{immediate:!0});function I(U){if(i.value.indexOf(U)===-1){i.value=[...i.value,U];return}i.value=i.value.filter(j=>j!==U)}function L(){return Gs({drill:a.drill||{},reportDetails:{issueAreas:i.value,studentNote:c.value}})}function E(){return i.value.length?!0:(m.value="Choose at least one issue area.",p.value="",!1)}function T(){E()&&(m.value="",l("submit",{issueAreas:[...i.value],studentNote:c.value.trim()}))}async function G(){if(!E())return;const U=L(),V=mt(U),j=Js(U);try{if(navigator.clipboard?.writeText)await navigator.clipboard.writeText(j);else{const Z=document.createElement("textarea");Z.value=j,Z.setAttribute("readonly","true"),Z.style.position="fixed",Z.style.opacity="0",document.body.appendChild(Z),Z.select(),document.execCommand("copy"),document.body.removeChild(Z)}p.value=V?"Report details copied. You can paste them into the GitHub issue if needed.":"Report details copied.",m.value=""}catch(Z){m.value=Z?.message||"Copy failed.",p.value=""}}function ye(){if(!E())return;const U=L(),V=mt(U);if(!V){m.value="Set VITE_AUTODRILLS_PREVIEW_ISSUES_URL or VITE_AUTODRILLS_PREVIEW_REPO to enable GitHub issue links.",p.value="";return}window.open(V,"_blank","noopener,noreferrer")||window.location.assign(V),m.value="",p.value="GitHub issue opened in a new tab."}return(U,V)=>(g(),je(Ye,{name:"modal-fade"},{default:He(()=>[e.show?(g(),v("div",{key:0,class:"modal-backdrop",onClick:V[5]||(V[5]=j=>U.$emit("close"))},[s("div",{class:"modal-dialog modal-dialog-centered",onClick:V[4]||(V[4]=wt(()=>{},["stop"]))},[s("div",Qs,[s("div",Ks,[V[6]||(V[6]=s("div",null,[s("h5",{class:"modal-title text-white mb-0"},"Report drill"),s("div",{class:"small text-white-50"},"Thanks for helping improve Autodrills.")],-1)),s("button",{type:"button",class:"btn-close btn-close-white",disabled:e.submitting,onClick:V[0]||(V[0]=j=>U.$emit("close"))},null,8,Zs)]),s("div",Ys,[s("p",Xs,[e.previewMode?(g(),v("span",ea,"Preview mode opens a prefilled GitHub issue in the public preview repo.")):(g(),v("span",ta,[V[7]||(V[7]=ie(" What seemed wrong about ",-1)),s("span",na,k(e.drill?.drillId||"this drill"),1),V[8]||(V[8]=ie("? ",-1))]))]),s("div",sa,[(g(!0),v(ee,null,re(f(t),j=>(g(),v("div",{key:j.value,class:"col-12 col-md-6"},[s("label",aa,[s("input",{checked:i.value.includes(j.value),class:"form-check-input m-0",type:"checkbox",value:j.value,disabled:e.submitting,onChange:Z=>I(j.value)},null,40,la),s("span",ia,k(j.label),1)])]))),128))]),s("div",ra,[V[9]||(V[9]=s("label",{class:"form-label fw-semibold",for:"studentReportNote"},"Short note (optional)",-1)),vn(s("textarea",{id:"studentReportNote","onUpdate:modelValue":V[1]||(V[1]=j=>c.value=j),class:"form-control",disabled:e.submitting,maxlength:"280",rows:"3",placeholder:"Tell us what felt off, if you want."},null,8,oa),[[mn,c.value]]),V[10]||(V[10]=s("div",{class:"form-text"},"Keep it brief. This is optional.",-1))]),m.value||e.errorMessage?(g(),v("div",da,k(m.value||e.errorMessage),1)):p.value?(g(),v("div",ca,k(p.value),1)):X("",!0)]),s("div",ua,[e.previewMode?(g(),v(ee,{key:0},[s("button",{class:"btn btn-outline-secondary",disabled:e.submitting,onClick:V[2]||(V[2]=j=>U.$emit("close"))}," Close ",8,pa),s("div",ma,[s("button",{class:"btn btn-outline-primary",disabled:$.value,onClick:G}," Copy report details ",8,ga),s("button",{class:"btn btn-danger",disabled:$.value||!Q.value,onClick:ye}," Open GitHub issue ",8,va)])],64)):(g(),v(ee,{key:1},[s("button",{class:"btn btn-outline-secondary",disabled:e.submitting,onClick:V[3]||(V[3]=j=>U.$emit("close"))}," Cancel ",8,fa),s("button",{class:"btn btn-danger",disabled:y.value,onClick:T},k(e.submitting?"Submitting...":"Submit report"),9,ha)],64))])])])])):X("",!0)]),_:1}))}},ka=Ie(ba,[["__scopeId","data-v-a582c22f"]]),ya={key:0,class:"progress-section"},wa={class:"d-flex justify-content-between small text-muted mb-1"},Sa=["aria-valuenow"],Aa={key:1,class:"metadata-section small border-bottom pb-3"},xa={class:"metadata-heading mb-3"},Ia={class:"fw-bold",title:"Topic","data-testid":"topic-title"},Ca={class:"text-muted font-monospace mt-2",title:"Drill ID","data-testid":"drill-id"},$a={class:"metadata-pair-grid"},Ra={class:"metadata-pair"},_a={class:"fw-semibold"},Ma={class:"metadata-pair"},Ta={class:"fw-semibold"},Pa={class:"metadata-pair"},Da={class:"fw-semibold"},Va={key:0,class:"mt-3 pt-2 border-top metadata-extra"},Na={class:"text-muted text-uppercase",style:{"font-size":"0.7rem","letter-spacing":"0.05em"}},Ea={class:"fw-semibold text-end"},La={class:"fw-bold d-flex align-items-center gap-2 text-uppercase",style:{"font-size":"0.85rem"}},Oa={key:0},Ba={key:1},Ua={key:2},za={class:"small mt-1"},ja={class:"actions-section d-grid gap-2"},Ha=["disabled"],qa=["disabled"],Fa=["disabled"],Wa={class:"d-flex gap-2"},Ga=["disabled"],Ja=["disabled"],Qa=["disabled"],Ka={class:"small text-muted mt-auto pt-3 border-top"},Za={key:0,class:"mb-1 text-uppercase fw-semibold",style:{"letter-spacing":"0.08em","font-size":"0.7rem"}},Ya={key:1},Xa={key:2},el={key:3},tl={key:4},nl={key:5},sl={key:6},al={__name:"PracticeToolbar",props:{hasFeedback:Boolean,hintAvailable:Boolean,remainingHints:{type:Number,default:0},prefetching:Boolean,saving:Boolean,saveState:{type:String,default:"idle"},saveMessage:{type:String,default:""},queueDepth:{type:Number,default:0},canSubmit:{type:Boolean,default:!0},canShowSolution:{type:Boolean,default:!0},canReportCurrentDrill:{type:Boolean,default:!0},canGoPreviousDrill:{type:Boolean,default:!1},canGoNextDrill:{type:Boolean,default:!0},reportState:{type:String,default:"idle"},reportMessage:{type:String,default:""},reportButtonLabel:{type:String,default:"Report drill"},currentPosition:{type:String,default:""},progressPercent:{type:Number,default:0},drillMetadata:{type:Object,default:()=>({})},feedback:{type:Object,default:null},focusMode:Boolean,reviewMode:Boolean},emits:["submit","next","previous","report","hint","solution"],setup(e){const n=e,t=C(()=>{const i=n.drillMetadata||{};return i.topicTitle||i.topicDisplayName||i.topicName||i.topicId||"AP CSA drill"}),a=C(()=>{const i=n.drillMetadata?.tags||{};return{concept:i.concept??"",difficulty:i.difficulty??"",syntax:i.syntax??""}}),l=C(()=>{const i=n.drillMetadata?.tags||{};return Object.entries(i).filter(([c,m])=>m!=null&&String(m).trim()!==""&&!["concept","difficulty","syntax"].includes(c)).map(([c,m])=>({key:c,value:m}))});return(i,c)=>(g(),v("div",{class:Pe(["practice-toolbar border rounded p-3 h-100 bg-white d-flex flex-column gap-3 transition-colors duration-300",{"feedback-correct":e.feedback?.status==="correct","feedback-incorrect":e.feedback?.status==="incorrect","feedback-revealed":e.feedback?.status==="revealed"}])},[e.focusMode?X("",!0):(g(),v("div",ya,[s("div",wa,[c[6]||(c[6]=s("span",{class:"fw-semibold"},"Progress",-1)),s("span",null,k(e.currentPosition),1)]),s("div",{class:"progress session-progress",role:"progressbar","aria-valuenow":e.progressPercent,"aria-valuemin":"0","aria-valuemax":"100",style:{height:"6px"}},[s("div",{class:"progress-bar",style:gs({width:`${e.progressPercent}%`})},null,4)],8,Sa)])),e.focusMode?X("",!0):(g(),v("div",Aa,[s("div",xa,[s("div",Ia,k(t.value),1),s("div",Ca,k(n.drillMetadata?.drillId||"Unknown drill"),1)]),s("div",$a,[s("div",Ra,[c[7]||(c[7]=s("div",{class:"text-uppercase text-muted fw-bold mb-1",style:{"font-size":"0.7rem","letter-spacing":"0.05em"}},"Concept",-1)),s("div",_a,k(a.value.concept||"—"),1)]),s("div",Ma,[c[8]||(c[8]=s("div",{class:"text-uppercase text-muted fw-bold mb-1",style:{"font-size":"0.7rem","letter-spacing":"0.05em"}},"Difficulty",-1)),s("div",Ta,k(a.value.difficulty||"—"),1)]),s("div",Pa,[c[9]||(c[9]=s("div",{class:"text-uppercase text-muted fw-bold mb-1",style:{"font-size":"0.7rem","letter-spacing":"0.05em"}},"Syntax",-1)),s("div",Da,k(a.value.syntax||"—"),1)])]),l.value.length?(g(),v("div",Va,[(g(!0),v(ee,null,re(l.value,m=>(g(),v("div",{key:m.key,class:"d-flex justify-content-between gap-2 mb-1"},[s("span",Na,k(m.key),1),s("span",Ea,k(m.value),1)]))),128))])):X("",!0)])),e.feedback?(g(),v("div",{key:2,class:Pe(["feedback-alert p-2 rounded border",e.feedback.status])},[s("div",La,[e.feedback.status==="correct"?(g(),v("span",Oa,"✅ Correct")):e.feedback.status==="incorrect"?(g(),v("span",Ba,"❌ Incorrect")):e.feedback.status==="revealed"?(g(),v("span",Ua,"🔍 Revealed")):X("",!0)]),s("div",za,k(e.feedback.message),1)],2)):X("",!0),s("div",ja,[c[10]||(c[10]=s("div",{class:"fw-semibold small text-muted mb-1"},"Actions",-1)),s("button",{class:"btn btn-primary",disabled:!e.canSubmit,onClick:c[0]||(c[0]=m=>i.$emit("submit"))},"Check Answer",8,Ha),s("button",{class:"btn btn-outline-dark",disabled:!e.canShowSolution,onClick:c[1]||(c[1]=m=>i.$emit("solution"))},"Show Solution",8,qa),s("button",{class:"btn btn-outline-secondary",disabled:!e.hintAvailable,onClick:c[2]||(c[2]=m=>i.$emit("hint"))},k(e.remainingHints>0?`Show Hint (${e.remainingHints} left)`:"No More Hints"),9,Fa),s("div",Wa,[s("button",{class:"btn btn-outline-primary flex-fill",disabled:!e.canGoPreviousDrill,onClick:c[3]||(c[3]=m=>i.$emit("previous"))},"Previous Drill",8,Ga),s("button",{class:"btn btn-outline-primary flex-fill",disabled:!e.canGoNextDrill,onClick:c[4]||(c[4]=m=>i.$emit("next"))},"Next Drill",8,Ja)]),s("button",{class:Pe(["btn btn-sm mt-2",{"btn-outline-danger":e.reportState==="idle"||e.reportState==="error","btn-secondary":e.reportState==="reporting","btn-success":e.reportState==="reported"}]),title:"Flag a drill that looks wrong so it can be reviewed and fixed.",disabled:!e.canReportCurrentDrill,onClick:c[5]||(c[5]=m=>i.$emit("report"))},k(e.reportButtonLabel),11,Qa),e.reportMessage?(g(),v("div",{key:0,class:Pe(["small",{"text-muted":e.reportState==="idle","text-danger":e.reportState==="error","text-success":e.reportState==="reported","text-success":e.reportState==="reported","text-primary":e.reportState==="reporting"}])},k(e.reportMessage),3)):X("",!0)]),s("div",Ka,[e.reviewMode?(g(),v("div",Za," Review mode ")):X("",!0),e.saveState==="saving"?(g(),v("div",Ya,k(e.saveMessage||"Saving response..."),1)):e.saveState==="saved"?(g(),v("div",Xa,k(e.saveMessage||"Saved."),1)):e.saveState==="error"?(g(),v("div",el,k(e.saveMessage||"Saving failed."),1)):e.queueDepth?(g(),v("div",tl,"Queued "+k(e.queueDepth)+" response"+k(e.queueDepth===1?"":"s")+".",1)):e.prefetching?(g(),v("div",nl,"Preparing next slice...")):(g(),v("div",sl,"Ready"))])],2))}},ll=Ie(al,[["__scopeId","data-v-e685ef07"]]);var gt={exports:{}};const{applySubstitutions:il}=Xe||et;function An(e=""){const n=String(e);if(!n.includes("`"))return[{type:"text",value:n}];const t=[];let a="",l="",i=!1;for(const c of n){if(c==="`"){i?(t.push({type:"code",value:l}),l="",i=!1):(a&&(t.push({type:"text",value:a}),a=""),i=!0);continue}i?l+=c:a+=c}return i&&(a+=`\`${l}`),a&&t.push({type:"text",value:a}),t.length?t:[{type:"text",value:n}]}function rl(e="",n={}){const t=String(e);if(!t.includes("{{"))return[{type:"text",value:t}];const a=[];let l=0;const i=/\{\{([^}]+)\}\}/g;for(const c of t.matchAll(i)){const m=c[1].trim(),p=c.index??0;p>l&&a.push({type:"text",value:t.slice(l,p)});const y=Object.prototype.hasOwnProperty.call(n,m)?n[m]:`{{${m}}}`;a.push({type:"code",value:String(y)}),l=p+c[0].length}return l<t.length&&a.push({type:"text",value:t.slice(l)}),a.length?a:[{type:"text",value:t}]}function ol(e="",n={}){const t=An(e),a=[];return t.forEach(l=>{if(l.type==="code"){a.push({type:"code",value:il(l.value,n)});return}a.push(...rl(l.value,n))}),a.length?a:[{type:"text",value:String(e)}]}gt.exports={splitInlineMonospace:An,splitInlineTextWithPlaceholders:ol};const xn=(gt.exports==null?{}:gt.exports).default||gt.exports,dl=Object.freeze(Object.defineProperty({__proto__:null,default:xn},Symbol.toStringTag,{value:"Module"})),cl={key:0,class:"inline-code"},ul={key:1},Ot={__name:"InlineText",props:{text:{type:String,default:""},substitutions:{type:Object,default:()=>({})},tag:{type:String,default:"div"}},setup(e){const{splitInlineTextWithPlaceholders:n}=xn||dl,t=e,a=C(()=>n(t.text,t.substitutions));return(l,i)=>(g(),je(vs(e.tag),{class:"inline-text"},{default:He(()=>[(g(!0),v(ee,null,re(a.value,(c,m)=>(g(),v(ee,{key:`${c.type}-${m}`},[c.type==="code"?(g(),v("code",cl,k(c.value),1)):(g(),v("span",ul,k(c.value),1))],64))),128))]),_:1}))}},pl={key:0,class:"drill-content mb-4"},ml={class:"prompt-display mb-4"},gl={class:"fs-5 lh-base"},vl={key:0,class:"mt-4 pt-3 border-top"},fl={class:"d-flex justify-content-between align-items-center mb-2"},hl={key:0,class:"badge rounded-pill bg-light text-dark border"},bl={key:0,class:"ps-3 mb-0"},kl={key:1,class:"mt-4 pt-3 border-top"},yl={key:0,class:"d-grid gap-3"},wl={key:1,class:"text-muted italic small"},Sl={__name:"PromptCard",props:{drill:{type:Object,default:null},revealedHints:{type:Array,default:()=>[]},hintAvailable:Boolean,remainingHints:Number,solutionVisible:Boolean,solutionSnippets:{type:Array,default:()=>[]}},setup(e){const{stringifyStructuredValue:n}=Xe||et;return(t,a)=>e.drill?(g(),v("section",pl,[s("div",ml,[a[0]||(a[0]=s("div",{class:"text-muted small fw-bold text-uppercase mb-2",style:{"font-size":"0.7rem","letter-spacing":"0.05em"}}," Prompt ",-1)),s("div",gl,[ke(Ot,{text:e.drill.promptTemplate,substitutions:e.drill.substitutions||{}},null,8,["text","substitutions"])])]),e.revealedHints.length||e.hintAvailable?(g(),v("div",vl,[s("div",fl,[a[1]||(a[1]=s("div",{class:"fw-bold small text-muted text-uppercase",style:{"font-size":"0.7rem"}},"Hints",-1)),!e.revealedHints.length&&e.hintAvailable?(g(),v("div",hl,k(e.remainingHints)+" available ",1)):X("",!0)]),e.revealedHints.length?(g(),v("ul",bl,[(g(!0),v(ee,null,re(e.revealedHints,(l,i)=>(g(),v("li",{key:i,class:"mb-2"},[ke(Ot,{text:f(n)(l),substitutions:e.drill.substitutions||{},tag:"span"},null,8,["text","substitutions"])]))),128))])):X("",!0)])):X("",!0),e.solutionVisible?(g(),v("div",kl,[a[2]||(a[2]=s("div",{class:"fw-bold small text-muted text-uppercase mb-2",style:{"font-size":"0.7rem"}},"Solution",-1)),e.solutionSnippets.length?(g(),v("div",yl,[(g(!0),v(ee,null,re(e.solutionSnippets,(l,i)=>(g(),v("div",{key:i,class:"p-3 bg-light rounded border mono-block"},[ke(Ot,{text:f(n)(l),substitutions:e.drill.substitutions||{}},null,8,["text","substitutions"])]))),128))])):(g(),v("div",wl,"No canonical solution snippet available.")),a[3]||(a[3]=s("div",{class:"text-muted small mt-2"},[s("i",{class:"bi bi-info-circle me-1"}),ie(" Solution revealed. This drill is marked as revealed, not solved. ")],-1))])):X("",!0)])):X("",!0)}},Al=Ie(Sl,[["__scopeId","data-v-208dffa5"]]),xl={class:"card panel-card h-100 border-0 shadow-sm"},Il={class:"card-body p-4"},Cl={class:"d-flex justify-content-between align-items-start mb-3"},$l={class:"text-uppercase text-muted fw-bold small",style:{"letter-spacing":"0.08em"}},Rl={class:"h5 fw-bold mb-1"},_l={class:"text-muted small mb-0"},Ml={class:"badge rounded-pill text-bg-light border"},Tl={key:0,class:"text-muted small"},Pl={class:"d-flex flex-wrap gap-2 mb-3"},Dl={class:"badge rounded-pill text-bg-primary-subtle text-primary border"},Vl={class:"badge rounded-pill text-bg-success-subtle text-success border"},Nl={class:"badge rounded-pill text-bg-warning-subtle text-warning-emphasis border"},El={class:"mb-3"},Ll={key:0,class:"d-grid gap-2"},Ol={class:"fw-semibold"},Bl={class:"text-muted small"},Ul={key:1,class:"text-muted small"},zl={class:"mb-3"},jl={key:0,class:"d-grid gap-2"},Hl={class:"fw-semibold"},ql={class:"text-muted small"},Fl={key:1,class:"text-muted small"},Wl={key:0,class:"d-grid gap-2"},Gl={class:"fw-semibold"},Jl={class:"text-muted small"},Ql={key:1,class:"text-muted small"},Kl={key:2,class:"text-muted small"},Zl={__name:"StudentMomentumCard",props:{analytics:{type:Object,default:null},loading:Boolean,previewMode:Boolean},setup(e){const n=e,t=C(()=>{const c=n.analytics?.totals?.accuracy;return c==null?"Not enough data yet":`${Math.round(c*100)}%`}),a=C(()=>n.analytics?.strengthSkills||[]),l=C(()=>n.analytics?.focusSkills||[]),i=C(()=>n.analytics?.growthSkills||[]);return(c,m)=>(g(),v("div",xl,[s("div",Il,[s("div",Cl,[s("div",null,[s("div",$l,k(e.previewMode?"Preview momentum":"Your momentum"),1),s("h2",Rl,k(e.analytics?.summaryLabel||(e.previewMode?"Preview progress stays in this browser":"Keep building your sample")),1),s("p",_l,k(e.previewMode?"This card summarizes only the responses stored in this browser.":e.analytics?.overallStatus==="ready for review"?"A few skills look ready for a focused review.":"Keep practicing, and this area will have some information about how you are doing."),1)]),s("span",Ml,k(e.previewMode?"browser only":e.analytics?.overallConfidence||"low"),1)]),e.loading?(g(),v("div",Tl,"Loading your study snapshot...")):e.analytics?(g(),v(ee,{key:1},[s("div",Pl,[s("span",Dl,k(e.analytics?.totals?.attempts??0)+" "+k(e.previewMode?"preview responses":"responses"),1),s("span",Vl,k(t.value),1),s("span",Nl,k(e.analytics?.totals?.skillCount??0)+" "+k(e.previewMode?"preview skills":"skills with data"),1)]),s("div",El,[m[0]||(m[0]=s("div",{class:"small text-uppercase text-muted fw-bold mb-2",style:{"letter-spacing":"0.08em"}},"Steady right now",-1)),a.value.length?(g(),v("div",Ll,[(g(!0),v(ee,null,re(a.value.slice(0,3),p=>(g(),v("div",{key:p.skillId,class:"rounded border p-2 bg-light"},[s("div",Ol,k(p.displayName),1),s("div",Bl,k(p.status)+" • "+k(Math.round((p.accuracy??0)*100))+"% accuracy",1)]))),128))])):(g(),v("div",Ul,"Keep going. Once a few skills have enough data, we’ll start showing steady areas here."))]),s("div",zl,[m[1]||(m[1]=s("div",{class:"small text-uppercase text-muted fw-bold mb-2",style:{"letter-spacing":"0.08em"}},"Good next review",-1)),l.value.length?(g(),v("div",jl,[(g(!0),v(ee,null,re(l.value.slice(0,3),p=>(g(),v("div",{key:p.skillId,class:"rounded border p-2 bg-white"},[s("div",Hl,k(p.displayName),1),s("div",ql,k(p.status)+" • "+k(p.confidence)+" confidence • "+k(p.attempts)+" responses ",1)]))),128))])):(g(),v("div",Fl,"No review-heavy skills yet. That usually means you’re still building a good sample."))]),s("div",null,[m[2]||(m[2]=s("div",{class:"small text-uppercase text-muted fw-bold mb-2",style:{"letter-spacing":"0.08em"}},"Getting stronger",-1)),i.value.length?(g(),v("div",Wl,[(g(!0),v(ee,null,re(i.value.slice(0,3),p=>(g(),v("div",{key:p.skillId,class:"rounded border p-2 bg-white"},[s("div",Gl,k(p.displayName),1),s("div",Jl,k(p.trend)+" • "+k(p.attempts)+" responses",1)]))),128))])):(g(),v("div",Ql,"No clear growth trend is standing out yet."))])],64)):(g(),v("div",Kl,k(e.previewMode?"Try a few preview drills to build this browser’s momentum.":"Try some practice problems to build your momentum!"),1))])]))}},Yl={class:"modal-content shadow-lg border-0 overflow-hidden"},Xl={class:"modal-header text-white border-0 py-3 px-4",style:{"background-color":"#1e40af"}},ei={class:"modal-footer border-0 p-3 bg-light d-flex justify-content-center"},ti={__name:"HelpModal",props:{show:Boolean},emits:["close"],setup(e){return(n,t)=>(g(),je(Ye,{name:"modal-fade"},{default:He(()=>[e.show?(g(),v("div",{key:0,class:"modal-backdrop",onClick:t[3]||(t[3]=a=>n.$emit("close"))},[s("div",{class:"modal-dialog modal-lg modal-dialog-centered",onClick:t[2]||(t[2]=wt(()=>{},["stop"]))},[s("div",Yl,[s("div",Xl,[t[4]||(t[4]=s("h5",{class:"modal-title d-flex align-items-center text-white"},[s("i",{class:"bi bi-question-circle-fill me-2"}),ie(" How to Practice AP CSA ")],-1)),s("button",{type:"button",class:"btn-close btn-close-white",onClick:t[0]||(t[0]=a=>n.$emit("close"))})]),t[5]||(t[5]=s("div",{class:"modal-body p-4 overflow-auto",style:{"max-height":"70vh"}},[s("section",{class:"mb-4"},[s("h6",{class:"fw-bold text-primary mb-2"},"1. Choosing topics"),s("p",{class:"text-muted small"}," Start by selecting one or more AP CSA units or topics from the list. Autodrills builds a short practice set around the ideas you picked so the drills stay focused. ")]),s("section",{class:"mb-4"},[s("h6",{class:"fw-bold text-primary mb-2"},"2. Iterative learning"),s("p",{class:"text-muted small"}," Don't worry about being wrong. If your answer isn't quite right: "),s("ul",{class:"text-muted small"},[s("li",null,"The editor stays open so you can fix your answer right away."),s("li",null,"A new hint will automatically reveal to guide you."),s("li",null,"Your response is saved so progress tracking can update as you practice.")])]),s("section",{class:"mb-4"},[s("h6",{class:"fw-bold text-primary mb-2"},"3. The interface"),s("div",{class:"row g-3"},[s("div",{class:"col-md-6"},[s("div",{class:"p-3 bg-light rounded h-100"},[s("div",{class:"fw-bold small mb-1"},[s("i",{class:"bi bi-layout-sidebar-inset me-1"}),ie(" Sticky sidebar")]),s("div",{class:"x-small text-muted"},"Your progress, drill details, and actions stay on the right for quick access.")])]),s("div",{class:"col-md-6"},[s("div",{class:"p-3 bg-light rounded h-100"},[s("div",{class:"fw-bold small mb-1"},[s("i",{class:"bi bi-lightbulb me-1"}),ie(" Focus mode")]),s("div",{class:"x-small text-muted"},"Click the lightbulb icon to hide everything except the prompt and the editor.")])])])]),s("section",null,[s("h6",{class:"fw-bold text-primary mb-2"},"4. Keyboard shortcuts"),s("div",{class:"d-flex align-items-center bg-light p-3 rounded"},[s("kbd",{class:"me-2"},"Ctrl"),ie(" + "),s("kbd",{class:"me-2"},"Enter"),s("span",{class:"text-muted small"},"Check your answer without leaving the keyboard.")])])],-1)),s("div",ei,[s("button",{class:"btn btn-primary px-4",onClick:t[1]||(t[1]=a=>n.$emit("close"))},"Got it, let's go!")])])])])):X("",!0)]),_:1}))}},ni=Ie(ti,[["__scopeId","data-v-f5ba3c01"]]),si={class:"modal-content shadow-lg border-0 overflow-hidden"},ai={class:"modal-header text-white border-0 py-3 px-4",style:{"background-color":"#0f766e"}},li={class:"modal-body p-4"},ii={class:"text-muted mb-2"},ri={class:"modal-footer border-0 p-3 bg-light d-flex flex-wrap justify-content-end gap-2"},oi={__name:"SessionCompleteModal",props:{show:Boolean,completedCount:{type:Number,default:0},totalCount:{type:Number,default:0}},emits:["practice-more","topics-list","review-session"],setup(e){return(n,t)=>(g(),je(Ye,{name:"modal-fade"},{default:He(()=>[e.show?(g(),v("div",{key:0,class:"modal-backdrop",onClick:t[5]||(t[5]=a=>n.$emit("review-session"))},[s("div",{class:"modal-dialog modal-dialog-centered",onClick:t[4]||(t[4]=wt(()=>{},["stop"]))},[s("div",si,[s("div",ai,[t[6]||(t[6]=s("h5",{class:"modal-title text-white mb-0"},"Nice work",-1)),s("button",{type:"button",class:"btn-close btn-close-white",onClick:t[0]||(t[0]=a=>n.$emit("review-session"))})]),s("div",li,[s("p",ii,[t[7]||(t[7]=ie(" You finished ",-1)),s("strong",null,k(e.completedCount),1),t[8]||(t[8]=ie(" of ",-1)),s("strong",null,k(e.totalCount),1),t[9]||(t[9]=ie(" drills in this session. ",-1))]),t[10]||(t[10]=s("p",{class:"text-muted mb-0"}," You can start a fresh practice set, go back to the topics list, or review the session you just completed. ",-1))]),s("div",ri,[s("button",{class:"btn btn-outline-secondary",onClick:t[1]||(t[1]=a=>n.$emit("topics-list"))},"Topics list"),s("button",{class:"btn btn-outline-primary",onClick:t[2]||(t[2]=a=>n.$emit("review-session"))},"Review this session"),s("button",{class:"btn btn-primary",onClick:t[3]||(t[3]=a=>n.$emit("practice-more"))},"Practice more")])])])])):X("",!0)]),_:1}))}},di=Ie(oi,[["__scopeId","data-v-c5379a08"]]),ci={class:"modal-content shadow-lg border-0 text-center p-4"},ui={class:"d-grid gap-2"},pi={__name:"WelcomeModal",props:{show:Boolean},emits:["close","show-help"],setup(e){return(n,t)=>(g(),je(Ye,{name:"welcome-fade"},{default:He(()=>[e.show?(g(),v("div",{key:0,class:"modal-backdrop",onClick:t[3]||(t[3]=a=>n.$emit("close"))},[s("div",{class:"modal-dialog modal-md modal-dialog-centered",onClick:t[2]||(t[2]=wt(()=>{},["stop"]))},[s("div",ci,[t[5]||(t[5]=s("div",{class:"mb-3 mt-2"},[s("div",{class:"display-6 fw-bold text-primary mb-1"},"Welcome to Autodrills"),s("div",{class:"text-muted"},"A project by Orion Smith, East Lansing High School")],-1)),t[6]||(t[6]=s("div",{class:"card bg-light border-0 mb-4"},[s("div",{class:"card-body py-3 px-4 text-start"},[s("p",{class:"mb-0 small text-muted lh-base"},' Autodrills is designed to help you build "muscle memory" for common Java patterns. Pick a few topics, jump into a session, and work through drills until the syntax feels like second nature. ')])],-1)),s("div",ui,[s("button",{class:"btn btn-primary btn-lg",onClick:t[0]||(t[0]=a=>n.$emit("close"))}," Explore Topics List "),s("button",{class:"btn btn-outline-secondary",onClick:t[1]||(t[1]=a=>n.$emit("show-help"))},[...t[4]||(t[4]=[s("i",{class:"bi bi-question-circle me-1"},null,-1),ie(" How does it work? ",-1)])])]),t[7]||(t[7]=s("div",{class:"mt-4 pt-2 small text-muted"},[s("i",{class:"bi bi-info-circle me-1"}),ie(" Agentic build support provided by Google Antigravity, OpenAI Codex ")],-1))])])])):X("",!0)]),_:1}))}},mi=Ie(pi,[["__scopeId","data-v-e6d19fbb"]]);var jt={};(function e(n,t,a,l){var i=!!(n.Worker&&n.Blob&&n.Promise&&n.OffscreenCanvas&&n.OffscreenCanvasRenderingContext2D&&n.HTMLCanvasElement&&n.HTMLCanvasElement.prototype.transferControlToOffscreen&&n.URL&&n.URL.createObjectURL),c=typeof Path2D=="function"&&typeof DOMMatrix=="function",m=(function(){if(!n.OffscreenCanvas)return!1;try{var d=new OffscreenCanvas(1,1),r=d.getContext("2d");r.fillRect(0,0,1,1);var S=d.transferToImageBitmap();r.createPattern(S,"no-repeat")}catch{return!1}return!0})();function p(){}function y(d){var r=t.exports.Promise,S=r!==void 0?r:n.Promise;return typeof S=="function"?new S(d):(d(p,p),null)}var $=(function(d,r){return{transform:function(S){if(d)return S;if(r.has(S))return r.get(S);var x=new OffscreenCanvas(S.width,S.height),w=x.getContext("2d");return w.drawImage(S,0,0),r.set(S,x),x},clear:function(){r.clear()}}})(m,new Map),Q=(function(){var d=Math.floor(16.666666666666668),r,S,x={},w=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(r=function(M){var O=Math.random();return x[O]=requestAnimationFrame(function A(N){w===N||w+d-1<N?(w=N,delete x[O],M()):x[O]=requestAnimationFrame(A)}),O},S=function(M){x[M]&&cancelAnimationFrame(x[M])}):(r=function(M){return setTimeout(M,d)},S=function(M){return clearTimeout(M)}),{frame:r,cancel:S}})(),fe=(function(){var d,r,S={};function x(w){function M(O,A){w.postMessage({options:O||{},callback:A})}w.init=function(A){var N=A.transferControlToOffscreen();w.postMessage({canvas:N},[N])},w.fire=function(A,N,z){if(r)return M(A,null),r;var J=Math.random().toString(36).slice(2);return r=y(function(q){function P(W){W.data.callback===J&&(delete S[J],w.removeEventListener("message",P),r=null,$.clear(),z(),q())}w.addEventListener("message",P),M(A,J),S[J]=P.bind(null,{data:{callback:J}})}),r},w.reset=function(){w.postMessage({reset:!0});for(var A in S)S[A](),delete S[A]}}return function(){if(d)return d;if(!a&&i){var w=["var CONFETTI, SIZE = {}, module = {};","("+e.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{d=new Worker(URL.createObjectURL(new Blob([w])))}catch(M){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",M),null}x(d)}return d}})(),I={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function L(d,r){return r?r(d):d}function E(d){return d!=null}function T(d,r,S){return L(d&&E(d[r])?d[r]:I[r],S)}function G(d){return d<0?0:Math.floor(d)}function ye(d,r){return Math.floor(Math.random()*(r-d))+d}function U(d){return parseInt(d,16)}function V(d){return d.map(j)}function j(d){var r=String(d).replace(/[^0-9a-f]/gi,"");return r.length<6&&(r=r[0]+r[0]+r[1]+r[1]+r[2]+r[2]),{r:U(r.substring(0,2)),g:U(r.substring(2,4)),b:U(r.substring(4,6))}}function Z(d){var r=T(d,"origin",Object);return r.x=T(r,"x",Number),r.y=T(r,"y",Number),r}function Ce(d){d.width=document.documentElement.clientWidth,d.height=document.documentElement.clientHeight}function se(d){var r=d.getBoundingClientRect();d.width=r.width,d.height=r.height}function K(d){var r=document.createElement("canvas");return r.style.position="fixed",r.style.top="0px",r.style.left="0px",r.style.pointerEvents="none",r.style.zIndex=d,r}function he(d,r,S,x,w,M,O,A,N){d.save(),d.translate(r,S),d.rotate(M),d.scale(x,w),d.arc(0,0,1,O,A,N),d.restore()}function oe(d){var r=d.angle*(Math.PI/180),S=d.spread*(Math.PI/180);return{x:d.x,y:d.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:d.startVelocity*.5+Math.random()*d.startVelocity,angle2D:-r+(.5*S-Math.random()*S),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:d.color,shape:d.shape,tick:0,totalTicks:d.ticks,decay:d.decay,drift:d.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:d.gravity*3,ovalScalar:.6,scalar:d.scalar,flat:d.flat}}function be(d,r){r.x+=Math.cos(r.angle2D)*r.velocity+r.drift,r.y+=Math.sin(r.angle2D)*r.velocity+r.gravity,r.velocity*=r.decay,r.flat?(r.wobble=0,r.wobbleX=r.x+10*r.scalar,r.wobbleY=r.y+10*r.scalar,r.tiltSin=0,r.tiltCos=0,r.random=1):(r.wobble+=r.wobbleSpeed,r.wobbleX=r.x+10*r.scalar*Math.cos(r.wobble),r.wobbleY=r.y+10*r.scalar*Math.sin(r.wobble),r.tiltAngle+=.1,r.tiltSin=Math.sin(r.tiltAngle),r.tiltCos=Math.cos(r.tiltAngle),r.random=Math.random()+2);var S=r.tick++/r.totalTicks,x=r.x+r.random*r.tiltCos,w=r.y+r.random*r.tiltSin,M=r.wobbleX+r.random*r.tiltCos,O=r.wobbleY+r.random*r.tiltSin;if(d.fillStyle="rgba("+r.color.r+", "+r.color.g+", "+r.color.b+", "+(1-S)+")",d.beginPath(),c&&r.shape.type==="path"&&typeof r.shape.path=="string"&&Array.isArray(r.shape.matrix))d.fill(de(r.shape.path,r.shape.matrix,r.x,r.y,Math.abs(M-x)*.1,Math.abs(O-w)*.1,Math.PI/10*r.wobble));else if(r.shape.type==="bitmap"){var A=Math.PI/10*r.wobble,N=Math.abs(M-x)*.1,z=Math.abs(O-w)*.1,J=r.shape.bitmap.width*r.scalar,q=r.shape.bitmap.height*r.scalar,P=new DOMMatrix([Math.cos(A)*N,Math.sin(A)*N,-Math.sin(A)*z,Math.cos(A)*z,r.x,r.y]);P.multiplySelf(new DOMMatrix(r.shape.matrix));var W=d.createPattern($.transform(r.shape.bitmap),"no-repeat");W.setTransform(P),d.globalAlpha=1-S,d.fillStyle=W,d.fillRect(r.x-J/2,r.y-q/2,J,q),d.globalAlpha=1}else if(r.shape==="circle")d.ellipse?d.ellipse(r.x,r.y,Math.abs(M-x)*r.ovalScalar,Math.abs(O-w)*r.ovalScalar,Math.PI/10*r.wobble,0,2*Math.PI):he(d,r.x,r.y,Math.abs(M-x)*r.ovalScalar,Math.abs(O-w)*r.ovalScalar,Math.PI/10*r.wobble,0,2*Math.PI);else if(r.shape==="star")for(var B=Math.PI/2*3,ae=4*r.scalar,ue=8*r.scalar,Y=r.x,pe=r.y,Ae=5,me=Math.PI/Ae;Ae--;)Y=r.x+Math.cos(B)*ue,pe=r.y+Math.sin(B)*ue,d.lineTo(Y,pe),B+=me,Y=r.x+Math.cos(B)*ae,pe=r.y+Math.sin(B)*ae,d.lineTo(Y,pe),B+=me;else d.moveTo(Math.floor(r.x),Math.floor(r.y)),d.lineTo(Math.floor(r.wobbleX),Math.floor(w)),d.lineTo(Math.floor(M),Math.floor(O)),d.lineTo(Math.floor(x),Math.floor(r.wobbleY));return d.closePath(),d.fill(),r.tick<r.totalTicks}function H(d,r,S,x,w){var M=r.slice(),O=d.getContext("2d"),A,N,z=y(function(J){function q(){A=N=null,O.clearRect(0,0,x.width,x.height),$.clear(),w(),J()}function P(){a&&!(x.width===l.width&&x.height===l.height)&&(x.width=d.width=l.width,x.height=d.height=l.height),!x.width&&!x.height&&(S(d),x.width=d.width,x.height=d.height),O.clearRect(0,0,x.width,x.height),M=M.filter(function(W){return be(O,W)}),M.length?A=Q.frame(P):q()}A=Q.frame(P),N=q});return{addFettis:function(J){return M=M.concat(J),z},canvas:d,promise:z,reset:function(){A&&Q.cancel(A),N&&N()}}}function $e(d,r){var S=!d,x=!!T(r||{},"resize"),w=!1,M=T(r,"disableForReducedMotion",Boolean),O=i&&!!T(r||{},"useWorker"),A=O?fe():null,N=S?Ce:se,z=d&&A?!!d.__confetti_initialized:!1,J=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,q;function P(B,ae,ue){for(var Y=T(B,"particleCount",G),pe=T(B,"angle",Number),Ae=T(B,"spread",Number),me=T(B,"startVelocity",Number),Fe=T(B,"decay",Number),nt=T(B,"gravity",Number),st=T(B,"drift",Number),Oe=T(B,"colors",V),$t=T(B,"ticks",Number),We=T(B,"shapes"),Rt=T(B,"scalar"),_t=!!T(B,"flat"),at=Z(B),Be=Y,Ge=[],Mt=d.width*at.x,lt=d.height*at.y;Be--;)Ge.push(oe({x:Mt,y:lt,angle:pe,spread:Ae,startVelocity:me,color:Oe[Be%Oe.length],shape:We[ye(0,We.length)],ticks:$t,decay:Fe,gravity:nt,drift:st,scalar:Rt,flat:_t}));return q?q.addFettis(Ge):(q=H(d,Ge,N,ae,ue),q.promise)}function W(B){var ae=M||T(B,"disableForReducedMotion",Boolean),ue=T(B,"zIndex",Number);if(ae&&J)return y(function(me){me()});S&&q?d=q.canvas:S&&!d&&(d=K(ue),document.body.appendChild(d)),x&&!z&&N(d);var Y={width:d.width,height:d.height};A&&!z&&A.init(d),z=!0,A&&(d.__confetti_initialized=!0);function pe(){if(A){var me={getBoundingClientRect:function(){if(!S)return d.getBoundingClientRect()}};N(me),A.postMessage({resize:{width:me.width,height:me.height}});return}Y.width=Y.height=null}function Ae(){q=null,x&&(w=!1,n.removeEventListener("resize",pe)),S&&d&&(document.body.contains(d)&&document.body.removeChild(d),d=null,z=!1)}return x&&!w&&(w=!0,n.addEventListener("resize",pe,!1)),A?A.fire(B,Y,Ae):P(B,Y,Ae)}return W.reset=function(){A&&A.reset(),q&&q.reset()},W}var te;function ne(){return te||(te=$e(null,{useWorker:!0,resize:!0})),te}function de(d,r,S,x,w,M,O){var A=new Path2D(d),N=new Path2D;N.addPath(A,new DOMMatrix(r));var z=new Path2D;return z.addPath(N,new DOMMatrix([Math.cos(O)*w,Math.sin(O)*w,-Math.sin(O)*M,Math.cos(O)*M,S,x])),z}function D(d){if(!c)throw new Error("path confetti are not supported in this browser");var r,S;typeof d=="string"?r=d:(r=d.path,S=d.matrix);var x=new Path2D(r),w=document.createElement("canvas"),M=w.getContext("2d");if(!S){for(var O=1e3,A=O,N=O,z=0,J=0,q,P,W=0;W<O;W+=2)for(var B=0;B<O;B+=2)M.isPointInPath(x,W,B,"nonzero")&&(A=Math.min(A,W),N=Math.min(N,B),z=Math.max(z,W),J=Math.max(J,B));q=z-A,P=J-N;var ae=10,ue=Math.min(ae/q,ae/P);S=[ue,0,0,ue,-Math.round(q/2+A)*ue,-Math.round(P/2+N)*ue]}return{type:"path",path:r,matrix:S}}function b(d){var r,S=1,x="#000000",w='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof d=="string"?r=d:(r=d.text,S="scalar"in d?d.scalar:S,w="fontFamily"in d?d.fontFamily:w,x="color"in d?d.color:x);var M=10*S,O=""+M+"px "+w,A=new OffscreenCanvas(M,M),N=A.getContext("2d");N.font=O;var z=N.measureText(r),J=Math.ceil(z.actualBoundingBoxRight+z.actualBoundingBoxLeft),q=Math.ceil(z.actualBoundingBoxAscent+z.actualBoundingBoxDescent),P=2,W=z.actualBoundingBoxLeft+P,B=z.actualBoundingBoxAscent+P;J+=P+P,q+=P+P,A=new OffscreenCanvas(J,q),N=A.getContext("2d"),N.font=O,N.fillStyle=x,N.fillText(r,W,B);var ae=1/S;return{type:"bitmap",bitmap:A.transferToImageBitmap(),matrix:[ae,0,0,ae,-J*ae/2,-q*ae/2]}}t.exports=function(){return ne().apply(this,arguments)},t.exports.reset=function(){ne().reset()},t.exports.create=$e,t.exports.shapeFromPath=D,t.exports.shapeFromText=b})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),jt,!1);const gi=jt.exports;jt.exports.create;var vt={exports:{}};const vi=Xe||et;function ln(e,n){const t=vi.applySubstitutions(String(e).replace(/\\\{\\\{([^}]+)\\\}\\\}/g,"{{$1}}"),n);return new RegExp(t,"i")}function fi(e,n){const t=String(e||"").trim(),a=n.substitutions||{},l=Array.isArray(n.correctPatterns)?n.correctPatterns:[],i=Array.isArray(n.mistakePatterns)?n.mistakePatterns:[];for(const c of l)try{if(ln(c,a).test(t))return{isCorrect:!0,feedback:"Correct!"}}catch{}for(const c of i)try{if(ln(c.pattern,a).test(t))return{isCorrect:!1,feedback:c.feedback||"Incorrect. Check for common mistakes."}}catch{}return{isCorrect:!1,feedback:"Incorrect. Please review the prompt and your answer."}}vt.exports={validateAnswer:fi};const In=(vt.exports==null?{}:vt.exports).default||vt.exports,hi=Object.freeze(Object.defineProperty({__proto__:null,default:In},Symbol.toStringTag,{value:"Module"})),Cn="autodrills.practice.pending-responses",At=1,Ht=3600*1e3;function Se(e){return String(e||"").trim().toLowerCase()}function tt(e){return String(e||"").trim()}function qt(e){const n=Se(e);return n?`${Cn}:${n}`:null}function $n(e,n){return`${Se(e)}:${tt(n)}`}function ve(e){return e&&JSON.parse(JSON.stringify(e))}function De(e,n=Date.now()){return e.filter(t=>Number(t?.expiresAt||0)>n)}function Ft(e){const n=qt(e);if(typeof window>"u"||!n)return[];try{const t=JSON.parse(window.localStorage.getItem(n)||"[]");return Array.isArray(t)?t.filter(a=>a&&a.schemaVersion===At):[]}catch{return[]}}function yt(e,n){const t=qt(e);typeof window>"u"||!t||window.localStorage.setItem(t,JSON.stringify(n))}function bi(e){const n=qt(e);typeof window>"u"||!n||window.localStorage.removeItem(n)}function ki(e,n,t={}){const a=t.now??Date.now(),l=tt(n?.attemptId||t.attemptId);if(!Se(e))throw new Error("Missing student ID.");if(!l)throw new Error("Missing attempt ID.");return{queueId:$n(e,l),studentId:Se(e),attemptId:l,schemaVersion:At,createdAt:t.createdAt||a,updatedAt:a,expiresAt:t.expiresAt||a+(t.ttlMs||Ht),payload:ve(n),flushState:t.flushState||"pending",lastError:t.lastError||""}}function yi(e,n,t={}){const a=Se(e),l=tt(n?.attemptId||n?.payload?.attemptId),i=t.now??Date.now();return{queueId:$n(a,l),studentId:a,attemptId:l,schemaVersion:At,createdAt:n?.createdAt||i,updatedAt:n?.updatedAt||n?.createdAt||i,expiresAt:n?.expiresAt||i+Ht,payload:ve(n?.payload),flushState:n?.flushState||"pending",lastError:n?.lastError||""}}async function xt(e){if(!qe())throw new Error("IndexedDB is not available.");try{const n=await As();return await e(n)}catch(n){throw xs(),n}}async function wi(e){e.length&&await xt(async n=>{await Promise.all(e.map(t=>n.put(ze.pendingResponses,ve(t))))})}async function Si(e){const n=Se(e);return!n||!qe()?[]:xt(async t=>{const a=await t.getAllFromIndex(ze.pendingResponses,"studentId",n);return De(a.map(ve)).sort((l,i)=>String(l.createdAt||0).localeCompare(String(i.createdAt||0)))})}async function Wt(e,n){const t=Se(e);if(!t)return[];const a=De(Ft(t));if(qe())try{return await xt(async i=>{const c=De((await i.getAllFromIndex(ze.pendingResponses,"studentId",t)).map(ve));if(!c.length&&a.length){const $=De(await n(a.map(ve)));return yt(t,$),$}const m=De(await n(c)),p=new Set(c.map($=>$.queueId)),y=new Set(m.map($=>$.queueId));for(const $ of c)y.has($.queueId)||await i.delete(ze.pendingResponses,$.queueId);for(const $ of m)(!p.has($.queueId)||JSON.stringify(c.find(Q=>Q.queueId===$.queueId))!==JSON.stringify($))&&await i.put(ze.pendingResponses,ve($));return m})}catch(i){if(!St(i))throw i}const l=De(await n(a.map(ve)));return yt(t,l),l}async function Ai(e,n,t={}){const a=ki(e,n,t);return await Wt(e,async l=>{const i=l.filter(c=>c.queueId!==a.queueId);return i.push(a),i}),ve(a)}async function xi(e,n={}){const t=Se(e);if(!t)return[];const a=n.now??Date.now();if(qe())try{const i=await Si(t);if(i.length)return i}catch(i){if(!St(i))throw i}const l=De(Ft(t),a).sort((i,c)=>String(i.createdAt||0).localeCompare(String(c.createdAt||0)));return l.length&&yt(t,l),l.map(ve)}async function Ii(e,n,t){const a=Se(e),l=tt(n);return!a||!l?!1:(await Wt(a,async c=>c.map(p=>{if(p.attemptId!==l)return p;const y=ve(p),$=t(ve(p.payload));return $===void 0?p:(y.payload=$,y.updatedAt=Date.now(),y.lastError="",y)}))).some(c=>c.attemptId===l)}async function Ci(e,n){const t=Se(e),a=new Set((n||[]).map(tt).filter(Boolean));return!t||!a.size?0:(await Wt(t,async i=>i.filter(c=>!a.has(c.attemptId)))).length}async function $i(e=Date.now()){const n={db:0,local:0};if(qe())try{await xt(async t=>{const a=await t.getAll(ze.pendingResponses);for(const l of a)Number(l?.expiresAt||0)<=e&&(await t.delete(ze.pendingResponses,l.queueId),n.db+=1)})}catch(t){if(!St(t))throw t}if(typeof window<"u"){const t=[];for(let a=0;a<window.localStorage.length;a+=1){const l=window.localStorage.key(a);l&&l.startsWith(`${Cn}:`)&&t.push(l)}for(const a of t)try{const l=JSON.parse(window.localStorage.getItem(a)||"[]");if(!Array.isArray(l))continue;const i=De(l,e);i.length!==l.length&&(n.local+=l.length-i.length,i.length?window.localStorage.setItem(a,JSON.stringify(i)):window.localStorage.removeItem(a))}catch{window.localStorage.removeItem(a)}}return n.db+n.local}async function Ri(e){const n=Se(e);if(!n)return[];const t=De(Ft(n));if(!t.length)return[];if(!qe())return t.map(ve);const a=t.map(l=>yi(n,l));bi(n);try{return await wi(a),a}catch(l){if(St(l))return yt(n,a),a;throw l}}const{validateAnswer:_i}=In||hi,{normalizeReportIssueAreas:Mi}=zt||yn,{prepareDrillForSession:Ti}=Xe||et,{buildAttemptContextPayload:rn}=ks||ys,{buildSelectionSignature:Pi}=ws||Ss,ft=_(typeof window<"u"?Number.parseInt(window.localStorage?.getItem("practice-target-length")||"15",10):15);typeof window<"u"&&Te(ft,e=>{window.localStorage.setItem("practice-target-length",e.toString())});function Ee(){return globalThis.crypto?.randomUUID?.()||`${Date.now()}-${Math.random().toString(16).slice(2)}`}function Ze(e){const n=Array.isArray(e)?e:[],t=new Set,a=[];return n.forEach(l=>{const i=String(l||"").trim();!i||t.has(i)||(t.add(i),a.push(i))}),a}function Rn(e={}){return{unitIds:Ze(e.unitIds||e.selectedUnitIds||e.selectedUnits),topicIds:Ze(e.topicIds||e.selectedTopicIds||e.selectedTopics)}}function on(e={}){const n=Rn(e),t=[...n.unitIds,...n.topicIds];return{...n,selectedSkillClusters:t,selectedClusters:t,selectedScopeSignature:Pi({unitIds:n.unitIds,topicIds:n.topicIds}),selectedUnitSignature:n.unitIds.slice().sort().join(","),selectedTopicSignature:n.topicIds.slice().sort().join(",")}}function dn(e){return e==null?e:JSON.parse(JSON.stringify(e))}function Di(){const e=pn(),n=C(()=>e.user?.value?.email||""),t=_({unitIds:[],topicIds:[]}),a=C({get(){return on(t.value).selectedSkillClusters},set(o){if(Array.isArray(o)){t.value={unitIds:Ze(o),topicIds:[]};return}t.value=Rn(o)}}),l=_("normal"),i=_([]),c=_([]),m=_(0),p=_(""),y=_(null),$=_(!1),Q=_(!1),fe=_(!1),I=_("idle"),L=_(""),E=_(0),T=_(!1),G=_(""),ye=_(Ee()),U=_(""),V=_(0),j=_(0),Z=_(null),Ce=_([]),se=_(!1),K=_(""),he=_(!1),oe=_(0),be=_("idle"),H=_(""),$e=_(""),te=_([]),ne=_(-1),de=_(!1),D=_(null),b=_([]),d=_(!1);let r=null,S=0;const x=_(!1),w=C(()=>i.value[m.value]||null),M=C(()=>Y()?.hintSequence||Y()?.renderedHintSequence||[]),O=C(()=>M.value.slice(0,E.value)),A=C(()=>Math.max(M.value.length-E.value,0)),N=C(()=>ft.value+5),z=C(()=>ft.value<=15?5:10),J=C(()=>Number.parseInt(e.config.value.PrefetchThreshold||"2",10)||2),q=C(()=>b.value.length),P=C(()=>ne.value>=0&&te.value[ne.value]||null),W=C(()=>!!P.value),B=C(()=>P.value?.drill||w.value||null),ae=C(()=>!!G.value&&(!!i.value.length||!!c.value.length||!!P.value||de.value)),ue=C(()=>{const o=B.value;return o?Array.isArray(o.correctSnippets)&&o.correctSnippets.length?o.correctSnippets:Array.isArray(o.renderedCorrectSnippets)&&o.renderedCorrectSnippets.length?o.renderedCorrectSnippets:o.canonicalSnippet?[o.canonicalSnippet]:[]:[]});function Y(){return P.value?.drill||w.value||null}function pe(){return P.value?.sessionAttemptOrdinal||oe.value}function Ae(){return P.value?.currentInput??p.value}function me(){return P.value?.feedback??y.value}function Fe(){return P.value?.revealedHintCount??E.value}function nt(){return P.value?.submittedThisDrill??T.value}function st(){return P.value?.solutionVisible??se.value}function Oe(){return P.value?.reportState??be.value}function $t(){return P.value?.reportMessage??H.value}function We(){return P.value?.reportedDrillId??$e.value}function Rt(){return P.value?.attemptId||K.value||Ee()}function _t(o="advance"){const u=w.value;return u?{reason:o,drill:dn(u),attemptId:K.value||Ee(),currentIndex:m.value,currentInput:p.value,feedback:dn(y.value),revealedHintCount:E.value,submittedThisDrill:T.value,solutionVisible:se.value,reportState:be.value,reportMessage:H.value,reportedDrillId:$e.value,currentAttemptStartedAt:U.value,currentAttemptRecorded:he.value,currentSessionAttemptOrdinal:oe.value,sessionAttemptOrdinal:oe.value,isCorrect:!!y.value?.isCorrect,answerRevealed:!!(y.value?.answerRevealed||se.value),recordedAt:new Date().toISOString()}:null}function at(o="advance"){const u=_t(o);if(!u)return null;const h=[...te.value],R=h.findIndex(le=>le.attemptId===u.attemptId);return R>=0?h[R]=u:h.push(u),te.value=h,u}function Be(o){const u=te.value.length-1;return o<0||o>u?(ne.value=-1,!1):(ne.value=o,!0)}function Ge(){return te.value.length?(de.value=!0,Be(te.value.length-1)):!1}function Mt(){return te.value.length?ne.value===-1?Be(te.value.length-1):Be(ne.value-1):!1}function lt(){return ne.value===-1?!1:ne.value<te.value.length-1?Be(ne.value+1):w.value&&!de.value?(ne.value=-1,!0):!1}function qn(){te.value=[],ne.value=-1,de.value=!1}function Jt(){const o=e.data?.value||{},u=e.shellBootstrap?.value||o.shellBootstrap||{},h=e.config?.value||o.config||{};return{bootstrapSnapshot:o,shellBootstrap:u,config:h}}function ce(){return on(t.value)}function it(o={},u=w.value){const h=ce();if(!u)return rn({attempt:{attemptId:o.attemptId,studentId:o.studentId||n.value,sessionId:o.sessionId,clientSessionId:ye.value,attemptOrdinal:o.attemptOrdinal,sessionAttemptOrdinal:o.sessionAttemptOrdinal,startedAt:o.startedAt||o.respondedAt},catalog:{},selection:{practiceMode:o.practiceMode||l.value,selectedClusterSignature:o.selectedClusterSignature||h.selectedScopeSignature,selectedScopeSignature:o.selectedScopeSignature||h.selectedScopeSignature,selectedClusters:h.selectedClusters,selectedUnitIds:h.unitIds,selectedTopicIds:h.topicIds,selectedSkillClusters:h.selectedSkillClusters},assignment:{},drill:{},rendered:{},outcome:{respondedAt:o.respondedAt,firstSubmittedAt:o.firstSubmittedAt||o.respondedAt,completedAt:o.completedAt||o.respondedAt,firstRawInput:o.firstRawInput||o.rawInput,rawInput:o.rawInput,firstIsCorrect:o.firstIsCorrect,isCorrect:o.isCorrect,submissionCount:o.submissionCount,hintCount:o.hintCount,allHintsRevealed:o.allHintsRevealed,answerRevealed:o.answerRevealed,completionStatus:o.completionStatus,feedbackProvided:o.feedbackProvided}});const{shellBootstrap:R,config:le}=Jt(),_e=Array.isArray(u.skills)?u.skills:[],Je=new Map((e.skills?.value||[]).map(xe=>[xe.skillId,xe])),ot=_e.find(xe=>String(xe?.role||"").trim()==="primary")||_e[0]||null,Qe=String(ot?.skillId||u.drillId||"").trim(),Ve=Ze(_e.map(xe=>xe?.skillId)),Ne=Ze(Ve.map(xe=>Je.get(xe)?.skillFamilyId||"")),Ue=String(Je.get(Qe)?.clusterId||u.clusterId||u.skillCluster||"").trim(),dt=o.selectedClusterSignature||h.selectedScopeSignature;return rn({attempt:{attemptId:o.attemptId,studentId:o.studentId||n.value,sessionId:o.sessionId,clientSessionId:ye.value,attemptOrdinal:o.attemptOrdinal,sessionAttemptOrdinal:o.sessionAttemptOrdinal,startedAt:o.startedAt||o.respondedAt},catalog:{catalogVersion:o.catalogVersion||le.CatalogRevision||R.catalogRevision||"",planVersion:o.planVersion||le.PracticePlanVersion||"practice-plan-v1",validationVersion:o.validationVersion||le.ValidationVersion||"shared-validation-v1",appVersion:o.appVersion||R.appVersion||le.AppVersion||"",workbookSchemaVersion:o.workbookSchemaVersion||R.workbookSchemaVersion||le.WorkbookSchemaVersion||""},selection:{practiceMode:o.practiceMode||l.value,selectedClusterSignature:dt,selectedScopeSignature:o.selectedScopeSignature||h.selectedScopeSignature,selectedClusters:h.selectedClusters,selectedUnitIds:h.unitIds,selectedTopicIds:h.topicIds,selectedSkillClusters:h.selectedSkillClusters,studentNudgeLevel:o.studentNudgeLevel},assignment:o.assignment||{},drill:{drillId:u.drillId,sourceDrillId:u.sourceDrillId||u.drillId||"",skillCluster:u.skillCluster||"",primarySkillId:Qe,skillIds:Ve,skillFamilyIds:Ne,clusterId:Ue,validationType:u.validationType||""},rendered:{prompt:u.renderedPrompt||u.promptTemplate||"",hintSequence:Array.isArray(u.renderedHintSequence)?u.renderedHintSequence:Array.isArray(u.hintSequence)?u.hintSequence:[],correctSnippets:Array.isArray(u.renderedCorrectSnippets)?u.renderedCorrectSnippets:Array.isArray(u.correctSnippets)?u.correctSnippets:[],substitutions:u.substitutions||{}},outcome:{respondedAt:o.respondedAt,firstSubmittedAt:o.firstSubmittedAt||o.respondedAt,completedAt:o.completedAt||o.respondedAt,firstRawInput:o.firstRawInput===void 0?o.rawInput:o.firstRawInput,rawInput:o.rawInput||"",firstIsCorrect:o.firstIsCorrect===void 0?o.isCorrect:o.firstIsCorrect,isCorrect:o.isCorrect,submissionCount:o.submissionCount,hintCount:o.hintCount,allHintsRevealed:o.allHintsRevealed,answerRevealed:o.answerRevealed,completionStatus:o.completionStatus||(o.answerRevealed?"solution_revealed":o.isCorrect?"correct":"incorrect"),feedbackProvided:o.feedbackProvided}})}function Tt(o,u=w.value){return{...o,attemptContextJson:it(o,u)}}function Fn(o,u){return{drillId:u.drill.drillId||"",sourceDrillId:u.drill.sourceDrillId||u.drill.drillId||"",skillCluster:u.drill.skillCluster||"",tags:o.tags||{},validationType:u.drill.validationType||"",correctPatterns:Array.isArray(o.correctPatterns)?o.correctPatterns:Array.isArray(o.renderedCorrectSnippets)?o.renderedCorrectSnippets:[],mistakePatterns:Array.isArray(o.mistakePatterns)?o.mistakePatterns:[],notes:o.notes||"",placeholderTypes:o.placeholderTypes||{}}}function we(){if(fe.value=x.value||b.value.length>0,x.value){I.value="saving",L.value="Saving response...";return}if(b.value.length>0){if(I.value==="error")return;I.value="saving",L.value="Saving response...";return}if(I.value==="saving"){I.value="saved",L.value="Saved.",window.setTimeout(()=>{I.value==="saved"&&(I.value="idle",L.value="")},1200);return}I.value==="error"&&(I.value="saved",L.value="Saved.")}function Pt(){return r||(n.value?(r=Qt(n.value).finally(()=>{r=null}),r):(d.value=!0,Promise.resolve([])))}async function Qt(o){const u=String(o||"").trim().toLowerCase(),h=++S;if(d.value=!1,!u)return b.value=[],d.value=!0,we(),[];try{await Ri(u),await $i();const R=await xi(u);return h===S&&(b.value=R,d.value=!0,we(),rt()),R}catch{return d.value=!0,h===S&&(b.value=[],we()),[]}}function Re(){D.value!==null&&(window.clearTimeout(D.value),D.value=null)}function Dt(){Et(),K.value=Ee(),he.value=!1,oe.value+=1,U.value=new Date().toISOString(),se.value=!1}function Kt(){Re(),i.value=[],c.value=[],Ce.value=[],m.value=0,p.value="",y.value=null,$.value=!1,Q.value=!1,fe.value=!1,I.value="idle",L.value="",E.value=0,T.value=!1,G.value="",V.value=0,j.value=0,Z.value=null,se.value=!1,K.value="",he.value=!1,oe.value=0,U.value="",qn(),Et()}function Wn(){Re(),!(!y.value?.isCorrect||!w.value||se.value)&&(D.value=window.setTimeout(()=>{D.value=null,nn()},2e3))}async function Zt(o,u){if(!n.value)return!1;const h=b.value.find(le=>le.attemptId===o);if(!h)return!1;const R=u({...h.payload});if(!R)return!1;h.payload=R,h.updatedAt=Date.now();try{await Ii(n.value,o,()=>R)}catch(le){console.warn("Failed to update queued response in persistent storage.",le)}return we(),!0}async function rt(){if(await Pt(),!n.value){we();return}if(x.value||!b.value.length){we();return}x.value=!0,we();try{for(;b.value.length;){const o=b.value.slice(0,z.value);try{if(typeof Me.recordResponseBatch=="function")await Me.recordResponseBatch({responses:o.map(u=>u.payload)});else for(const u of o)await Me.recordResponse(u.payload);await Ci(n.value,o.map(u=>u.attemptId)),b.value.splice(0,o.length),I.value="saved",L.value="Saved.",e.loadBootstrap(!0)}catch(u){I.value="error",L.value=u.message||"Saving failed.",window.setTimeout(()=>{b.value.length&&!x.value&&rt()},1500);break}}}finally{x.value=!1,we()}}async function Vt(o){if(await Pt(),!n.value)return null;const u=Date.now(),h={schemaVersion:At,studentId:n.value,attemptId:o.attemptId,createdAt:u,updatedAt:u,expiresAt:u+Ht,payload:o,flushState:"pending",lastError:""};b.value.push(h);try{await Ai(n.value,o,{now:u,expiresAt:h.expiresAt,createdAt:h.createdAt,attemptId:o.attemptId})}catch(R){console.warn("Failed to persist queued response.",R)}we(),await rt(),e.loadBootstrap(!0)}async function Yt(o={}){const u={count:N.value,selectedUnitIds:o.selectedUnitIds||t.value.unitIds,selectedTopicIds:o.selectedTopicIds||t.value.topicIds,skillClusters:o.skillClusters||a.value,fetchAll:!!o.fetchAll,drillId:o.drillId};return Me.fetchPracticeBatch(u)}async function Xt(o=!1){if(!G.value||Q.value&&!o)return null;Q.value=!0;try{const u=await Me.fetchPracticeSessionSlice({sessionId:G.value,planVersion:e.config.value.PracticePlanVersion||"practice-plan-v1",cursor:V.value,sliceSize:N.value,selectedClusterSignature:ce().selectedScopeSignature,selectedScopeSignature:ce().selectedScopeSignature});return V.value=u.cursor,j.value=u.remainingPlannedCount,Z.value=u.summaryFreshness||null,Ce.value=u.reserveDrills||[],c.value=[...u.drills||[],...u.reserveDrills||[]],u}finally{Q.value=!1}}async function Nt(){!G.value||Q.value||c.value.length||i.value.length-m.value>J.value||await Xt()}async function Gn({mode:o="normal",drillId:u=null,fetchAll:h=!1}={}){Re(),l.value=o,$.value=!0,Kt(),l.value=o,$.value=!0,await Pt(),ye.value=Ee();try{const R=u?await Yt({drillId:u,fetchAll:h}):await Me.startPracticeSession({clientSessionId:ye.value,selectedUnitIds:t.value.unitIds,selectedTopicIds:t.value.topicIds,selectedSkillClusters:a.value,selectedScopeSignature:ce().selectedScopeSignature,practiceMode:"normal",sliceSize:N.value,studentNudgeLevel:"balanced"});u?(i.value=R||[],c.value=[],Ce.value=[],G.value="",V.value=0,j.value=0,Z.value=null):(G.value=R.sessionId,i.value=R.drills||[],c.value=R.reserveDrills||[],Ce.value=R.reserveDrills||[],V.value=R.cursor||0,j.value=R.remainingPlannedCount||0,Z.value=R.summaryFreshness||null),m.value=0,Dt(),de.value=!1,l.value==="normal"&&!u&&Nt()}finally{$.value=!1,we()}}const Jn=C(()=>W.value||!w.value||se.value?!1:!y.value?.isCorrect),Qn=C(()=>!W.value&&!!w.value&&!se.value&&!y.value?.isCorrect),Kn=C(()=>{const o=Y(),u=We();return!!o&&Oe()!=="reporting"&&u!==o?.drillId}),en=C(()=>{const o=Oe();return o==="reporting"?"Reporting...":o==="reported"?"Reported. Thank you.":o==="error"?"Report failed. Try again.":"Report drill"});function Et(){be.value="idle",H.value="",$e.value=""}async function Zn(){if(!w.value||y.value?.isCorrect)return;Re();const o=_i(p.value,w.value);if(y.value={...o,status:o.isCorrect?"correct":"incorrect",message:o.feedback},o.isCorrect)gi({particleCount:70,spread:65,origin:{y:.65}}),T.value=!0,Wn();else if(sn(),T.value=!1,e.randomizationBank?.value&&w.value.placeholderTypes&&Object.keys(w.value.placeholderTypes).length>0)try{const u=Ti(w.value,e.randomizationBank.value);u.drillId=`${u.drillId}-rep-${Date.now()}`;const h=Math.min(m.value+3,i.value.length);i.value.splice(h,0,u)}catch(u){console.error("Failed to generate edge adaptation variant",u)}if(l.value==="normal"&&G.value){const u=new Date().toISOString(),h=Tt({attemptId:K.value||Ee(),sessionId:G.value,planVersion:e.config.value.PracticePlanVersion||"practice-plan-v1",catalogVersion:e.config.value.CatalogRevision||e.shellBootstrap?.value?.catalogRevision||e.data?.value?.config?.CatalogRevision||"",appVersion:e.shellBootstrap?.value?.appVersion||e.config.value.AppVersion||"",workbookSchemaVersion:e.shellBootstrap?.value?.workbookSchemaVersion||e.config.value.WorkbookSchemaVersion||"",startedAt:U.value||u,respondedAt:u,drillId:w.value.drillId,rawInput:p.value,isCorrect:o.isCorrect,feedbackProvided:o.feedback,attemptOrdinal:m.value+1,sessionAttemptOrdinal:oe.value,firstSubmittedAt:u,completedAt:u,firstRawInput:p.value,firstIsCorrect:o.isCorrect,submissionCount:1,hintCount:E.value,allHintsRevealed:A.value===0&&M.value.length>0,answerRevealed:!1,validationVersion:"shared-validation-v1",selectedClusterSignature:ce().selectedScopeSignature,selectedScopeSignature:ce().selectedScopeSignature,practiceMode:"normal"});he.value?await Zt(h.attemptId,R=>({...R,rawInput:h.rawInput,isCorrect:h.isCorrect,feedbackProvided:h.feedbackProvided,hintCount:h.hintCount,allHintsRevealed:h.allHintsRevealed,submissionCount:Math.max(1,Number.parseInt(R.submissionCount||"1",10)||1)+1,completedAt:h.respondedAt,respondedAt:h.respondedAt,firstSubmittedAt:R.firstSubmittedAt||R.respondedAt||h.firstSubmittedAt,firstRawInput:R.firstRawInput===void 0?R.rawInput:R.firstRawInput,firstIsCorrect:R.firstIsCorrect===void 0?R.isCorrect:R.firstIsCorrect,attemptContextJson:it({...R,...h,submissionCount:Math.max(1,Number.parseInt(R.submissionCount||"1",10)||1)+1})})):(await Vt(h),he.value=!0)}we()}function tn(o={},u=Y()){const h=u;if(!h)return null;const R=Ae(),le=Fe(),_e=me(),Je=st(),ot=P.value?.currentIndex!==void 0?P.value.currentIndex+1:m.value+1,Qe=Rt(),{shellBootstrap:Ve,config:Ne}=Jt(),Ue=it({attemptId:Qe,sessionId:G.value,planVersion:Ne.PracticePlanVersion||"practice-plan-v1",catalogVersion:Ne.CatalogRevision||Ve.catalogRevision||"1",workbookSchemaVersion:Ve.workbookSchemaVersion||Ne.WorkbookSchemaVersion||"1",practiceMode:l.value,selectedClusterSignature:ce().selectedScopeSignature,selectedScopeSignature:ce().selectedScopeSignature,respondedAt:new Date().toISOString(),rawInput:R,isCorrect:!!_e?.isCorrect,hintCount:le,allHintsRevealed:Lt.value===0&&M.value.length>0,answerRevealed:!!(_e?.answerRevealed||Je),attemptOrdinal:ot,sessionAttemptOrdinal:pe()},h),dt=Mi(o.issueAreas||[]);if(!dt.length)return null;const xe=Fn(h,Ue);return{drillId:h.drillId,sourceDrillId:h.sourceDrillId||h.drillId,issueAreas:dt,studentNote:String(o.studentNote||"").trim(),sessionId:G.value,attemptId:Qe,appVersion:Ve.appVersion||Ne.AppVersion||"local-modern-dev",catalogRevision:Ne.CatalogRevision||Ve.catalogRevision||"1",workbookSchemaVersion:Ve.workbookSchemaVersion||Ne.WorkbookSchemaVersion||"1",practiceMode:l.value,selectedClusterSignature:ce().selectedScopeSignature,selectedScopeSignature:ce().selectedScopeSignature,renderedPrompt:Ue.rendered.prompt||h.promptTemplate||"",renderedHintSequence:Ue.rendered.hintSequence||[],renderedCorrectSnippets:Ue.rendered.correctSnippets||[],substitutions:Ue.rendered.substitutions||{},drillSnapshot:xe,studentInput:R,wasSubmitted:nt()||!!_e,wasCorrect:!!_e?.isCorrect,hintCount:le,allHintsRevealed:Lt.value===0&&M.value.length>0,answerRevealed:!!(_e?.answerRevealed||Je),attemptOrdinal:ot,sessionAttemptOrdinal:pe()}}async function Yn(o={}){const u=Y();if(!u)return null;const h=u.drillId;if(!h||Oe()==="reporting"||We()===h)return null;Re(),be.value="reporting",H.value="Reporting...";try{const R=tn(o,u);if(!R||!R.issueAreas.length)return be.value="error",H.value="Choose at least one issue area.",null;const le=await Me.reportDrill(R);return be.value="reported",$e.value=h,H.value="Reported. Thank you.",P.value&&(P.value.reportState="reported",P.value.reportMessage="Reported. Thank you.",P.value.reportedDrillId=h),le}catch(R){return be.value="error",H.value=R?.message||"Report failed. Try again.",null}}async function nn(){if(W.value){lt();return}if(p.value.trim()&&!he.value&&l.value==="normal"&&G.value){const o=new Date().toISOString(),u=Tt({attemptId:K.value||Ee(),sessionId:G.value,planVersion:e.config.value.PracticePlanVersion||"practice-plan-v1",catalogVersion:e.config.value.CatalogRevision||e.shellBootstrap?.value?.catalogRevision||e.data?.value?.config?.CatalogRevision||"",appVersion:e.shellBootstrap?.value?.appVersion||e.config.value.AppVersion||"",workbookSchemaVersion:e.shellBootstrap?.value?.workbookSchemaVersion||e.config.value.WorkbookSchemaVersion||"",startedAt:U.value||o,respondedAt:o,drillId:w.value.drillId,rawInput:p.value,isCorrect:!1,feedbackProvided:"User skipped to next drill.",attemptOrdinal:m.value+1,sessionAttemptOrdinal:oe.value,firstSubmittedAt:o,completedAt:o,firstRawInput:p.value,firstIsCorrect:!1,submissionCount:0,hintCount:E.value,allHintsRevealed:A.value===0,answerRevealed:!1,validationVersion:"shared-validation-v1",selectedClusterSignature:ce().selectedScopeSignature,selectedScopeSignature:ce().selectedScopeSignature,practiceMode:"normal"});await Vt(u)}if(at("advance"),Re(),p.value="",y.value=null,E.value=0,T.value=!1,se.value=!1,m.value+=1,Dt(),m.value<i.value.length){Nt();return}if(c.value.length){i.value=c.value,c.value=[],m.value=0,Nt();return}if(G.value){await Xt(),c.value.length?(i.value=c.value,c.value=[],m.value=0,de.value=!1,Dt()):de.value=!0;return}de.value=!0}function sn(){W.value||A.value>0&&(Re(),E.value+=1)}const Xn=C(()=>Y()),es=C(()=>me()),ts=C(()=>{const o=Y();return(Array.isArray(o?.hintSequence)?o.hintSequence:[]).slice(0,Fe())}),Lt=C(()=>{const o=Y(),u=Array.isArray(o?.hintSequence)?o.hintSequence:[];return Math.max(u.length-Fe(),0)}),ns=C(()=>st()),ss=C(()=>nt()),as=C(()=>Ae()),ls=C(()=>Oe()),is=C(()=>$t()),rs=C(()=>en.value),os=C(()=>pe()),ds=C(()=>W.value?ne.value>0:te.value.length>0),cs=C(()=>W.value?ne.value<te.value.length-1||!!(w.value&&!de.value):!1);async function us(){if(!(W.value||!w.value||se.value||y.value?.isCorrect)&&(Re(),se.value=!0,T.value=!0,y.value={isCorrect:!1,feedback:"Solution revealed. This drill is marked unsolved.",answerRevealed:!0},l.value==="normal"&&G.value)){const o=new Date().toISOString(),u=Tt({attemptId:K.value||Ee(),sessionId:G.value,planVersion:e.config.value.PracticePlanVersion||"practice-plan-v1",catalogVersion:e.config.value.CatalogRevision||e.shellBootstrap?.value?.catalogRevision||e.data?.value?.config?.CatalogRevision||"",appVersion:e.shellBootstrap?.value?.appVersion||e.config.value.AppVersion||"",workbookSchemaVersion:e.shellBootstrap?.value?.workbookSchemaVersion||e.config.value.WorkbookSchemaVersion||"",startedAt:U.value||o,respondedAt:o,drillId:w.value.drillId,rawInput:p.value,isCorrect:!1,feedbackProvided:"Solution revealed. This drill is marked unsolved.",attemptOrdinal:m.value+1,sessionAttemptOrdinal:oe.value,firstSubmittedAt:o,completedAt:o,firstRawInput:p.value,firstIsCorrect:!1,submissionCount:0,hintCount:E.value,allHintsRevealed:A.value===0&&M.value.length>0,answerRevealed:!0,validationVersion:"shared-validation-v1",selectedClusterSignature:ce().selectedScopeSignature,selectedScopeSignature:ce().selectedScopeSignature,practiceMode:"normal"});he.value?await Zt(u.attemptId,h=>({...h,answerRevealed:!0,feedbackProvided:u.feedbackProvided,completedAt:u.respondedAt,respondedAt:u.respondedAt,firstSubmittedAt:h.firstSubmittedAt||h.respondedAt||u.firstSubmittedAt,firstRawInput:h.firstRawInput===void 0?h.rawInput:h.firstRawInput,firstIsCorrect:h.firstIsCorrect===void 0?h.isCorrect:h.firstIsCorrect,attemptContextJson:it({...h,...u})})):(await Vt(u),he.value=!0)}}return Te(n,o=>{Qt(o)},{immediate:!0}),Te(()=>B.value?.drillId||"",(o,u)=>{!o||o===u||Et()}),{selectedPracticeScope:t,selectedSkillClusters:a,practiceMode:l,currentBatch:i,nextBatch:c,reserveDrills:Ce,currentDrill:w,viewDrill:Xn,currentIndex:m,currentInput:p,viewCurrentInput:as,feedback:y,viewFeedback:es,revealedHints:O,viewRevealedHints:ts,remainingHints:A,viewRemainingHints:Lt,loadingBatch:$,prefetching:Q,saving:fe,saveState:I,saveMessage:L,queueDepth:q,submittedThisDrill:T,viewSubmittedThisDrill:ss,canSubmitCurrentDrill:Jn,canShowSolution:Qn,canReportCurrentDrill:Kn,reportState:be,viewReportState:ls,reportMessage:H,viewReportMessage:is,reportButtonLabel:en,viewReportButtonLabel:rs,hasActiveSession:ae,isReviewMode:W,sessionComplete:de,completedDrillSnapshots:te,reviewIndex:ne,hasPreviousReviewedDrill:ds,hasNextReviewedDrill:cs,reviewPreviousDrill:Mt,reviewNextDrill:lt,enterLatestReviewSnapshot:Ge,sessionId:G,targetSessionLength:ft,sessionCursor:V,remainingPlannedCount:j,summaryFreshness:Z,solutionVisible:se,viewSolutionVisible:ns,solutionSnippets:ue,currentSessionAttemptOrdinal:oe,viewCurrentSessionAttemptOrdinal:os,cancelAutoAdvance:Re,resetPracticeSession:Kt,startPractice:Gn,submitAnswer:Zn,revealNextHint:sn,showSolution:us,nextDrill:nn,reportCurrentDrill:Yn,buildReportPayload:tn,fetchBatch:Yt,flushResponseQueue:rt}}const Vi={key:0,class:"row g-4 align-items-start"},Ni={class:"col-lg-8"},Ei={class:"card panel-card shadow-sm border-0"},Li={class:"card-body p-4"},Oi={class:"mb-4 d-flex justify-content-between align-items-start"},Bi={class:"d-flex align-items-center gap-2 ms-3"},Ui={class:"d-grid gap-2 mt-4 pt-3"},zi=["disabled"],ji={class:"mt-4 pt-3 border-top"},Hi={for:"sessionLengthSlider",class:"form-label d-flex justify-content-between"},qi={class:"badge bg-primary rounded-pill"},Fi={class:"row mt-3 small mb-0 bg-light p-3 rounded"},Wi={class:"col-6 text-end mb-0 fw-semibold"},Gi={key:0,class:"alert alert-light border mt-4 mb-0 small"},Ji={class:"col-lg-4"},Qi={class:"sticky-top",style:{top:"1rem","z-index":"100"}},Ki={key:1,class:"session-container"},Zi={class:"d-flex justify-content-between align-items-center mb-4 pb-2 border-bottom"},Yi={class:"d-flex align-items-center gap-2"},Xi={class:"ms-1 d-none d-md-inline"},er={key:0,class:"text-center py-5"},tr={class:"card border-0 shadow-sm overflow-hidden mb-4"},nr={class:"card-body p-4"},sr={class:"mt-4 pt-4 border-top"},ar={key:0,class:"col-lg-4"},lr={class:"sticky-top",style:{top:"1rem","z-index":"100"}},ir={key:1,class:"col-12 py-3 border-top d-flex justify-content-between align-items-center"},rr={class:"d-flex gap-2"},or=["disabled"],dr=["disabled"],cr=["disabled"],ur={class:"d-flex gap-2"},pr=["disabled"],mr=["disabled"],gr={__name:"PracticePage",setup(e){const n=pn(),t=Di(),a=_(null),l=!0,i=_(!1),c=_(l),m=_(!1),p=_(!1),{targetSessionLength:y}=t,$=C({get(){return t.selectedPracticeScope.value},set(D){t.selectedPracticeScope.value=D}}),Q=C(()=>($.value.unitIds.length>0||$.value.topicIds.length>0)&&!t.loadingBatch.value),fe=C(()=>t.loadingBatch.value?"Fetching drills...":"Start Practice Session"),I=C(()=>t.isReviewMode.value?`Review ${t.reviewIndex.value+1} / ${t.completedDrillSnapshots.value.length}`:t.sessionComplete.value?"Session complete":t.hasActiveSession.value?`${t.currentSessionAttemptOrdinal.value-1} / ${y.value}`:"No active session"),L=C(()=>{if(t.isReviewMode.value){const D=t.completedDrillSnapshots.value.length||1;return Math.min(100,Math.round((t.reviewIndex.value+1)/D*100))}return t.sessionComplete.value?100:t.hasActiveSession.value?Math.min(100,Math.round((t.currentSessionAttemptOrdinal.value-1)/y.value*100)):0}),E=C(()=>{const D=$.value.unitIds.length,b=$.value.topicIds.length;if(!D&&!b)return"None selected";const d=D===1?"1 unit":`${D} units`,r=b===1?"1 topic":`${b} topics`;return D&&b?`${d}, ${r} selected`:`${D?d:r} selected`});function T(){$.value={unitIds:n.availableCourseUnits.value.map(D=>D.unitId),topicIds:[]}}function G(){$.value={unitIds:[],topicIds:[]}}async function ye(){p.value=!1,await t.startPractice({mode:"normal"})}async function U(){(typeof window>"u"||window.confirm("Clear preview progress for this browser?"))&&(typeof Me.resetPreviewProgress=="function"&&await Me.resetPreviewProgress(),t.resetPracticeSession(),await n.loadBootstrap(!0),i.value=!1,c.value=!1,m.value=!1,p.value=!1)}function V(){t.canReportCurrentDrill.value&&(m.value=!0)}function j(){m.value=!1}async function Z(D){await t.reportCurrentDrill(D)&&(m.value=!1)}function Ce(){p.value=!1,t.cancelAutoAdvance(),t.resetPracticeSession()}async function se(){await gn(),a.value?.focus?.()}const K=_(localStorage.getItem("practice-focus-mode")==="true");function he(){K.value=!K.value,localStorage.setItem("practice-focus-mode",K.value.toString()),typeof window<"u"&&window.dispatchEvent(new CustomEvent("autodrills-focus-mode-change",{detail:K.value}))}function oe(D={}){return[D.topicNumber||D.cedTopicNumber||"",D.topicName||D.topicId||""].filter(Boolean).join(" ").trim()}function be(D=""){const b=String(D||"").trim();if(!b)return{};for(const d of n.availableCourseUnits.value||[]){const r=(d.topics||[]).find(S=>String(S.topicId||"").trim()===b);if(r)return r}return{}}const H=C(()=>t.viewDrill.value),$e=C(()=>{if(!H.value)return{};const D=be(H.value.topicId),b=H.value.topicNumber||H.value.cedTopicNumber||D.topicNumber||"",d=H.value.topicName||D.topicName||H.value.topicId||"",r=[b,d].filter(Boolean).join(" ").trim();return{drillId:H.value.drillId,unitId:H.value.unitId||"",unitName:H.value.unitName||"",topicId:H.value.topicId||"",topicNumber:b,topicName:d,topicDisplayName:r||oe(H.value),topicTitle:r||oe(H.value),tags:H.value.tags}});fs(async()=>{await n.loadBootstrap()}),Te(()=>n.availableCourseUnits.value,D=>{!$.value.unitIds.length&&!$.value.topicIds.length&&D.length&&($.value={unitIds:D.map(b=>b.unitId),topicIds:[]})},{immediate:!0}),Te(()=>t.hasActiveSession.value,(D,b)=>{b&&!D&&n.loadBootstrap(!0)}),Te(()=>t.sessionComplete.value,D=>{p.value=D},{immediate:!0}),Te(()=>H.value?.drillId||"",()=>{m.value=!1}),Te(()=>t.hasActiveSession.value,D=>{D&&!t.isReviewMode.value&&se()});function te(){p.value=!1,m.value=!1,t.enterLatestReviewSnapshot()}function ne(){p.value=!1,m.value=!1,ye()}function de(){p.value=!1,m.value=!1,t.cancelAutoAdvance(),t.resetPracticeSession()}return(D,b)=>(g(),v("div",{class:Pe(["practice-page",{"focus-mode":K.value}])},[ke(ni,{show:i.value,onClose:b[0]||(b[0]=d=>i.value=!1)},null,8,["show"]),ke(mi,{show:c.value,onClose:b[1]||(b[1]=d=>c.value=!1),onShowHelp:b[2]||(b[2]=d=>{c.value=!1,i.value=!0})},null,8,["show"]),ke(di,{show:p.value,"completed-count":f(t).completedDrillSnapshots.value.length,"total-count":f(y),onPracticeMore:ne,onTopicsList:de,onReviewSession:te},null,8,["show","completed-count","total-count"]),(g(),je(ka,{key:H.value?.drillId||"no-drill",show:m.value,drill:H.value,"preview-mode":l,submitting:f(t).viewReportState.value==="reporting","error-message":f(t).viewReportState.value==="error"?f(t).viewReportMessage.value:"",onClose:j,onSubmit:Z},null,8,["show","drill","submitting","error-message"])),f(t).hasActiveSession.value?(g(),v("div",Ki,[s("div",Zi,[b[17]||(b[17]=s("div",null,[s("h1",{class:"h4 fw-bold mb-0"},"Practice"),s("div",{class:"small text-muted"},"Keep going.")],-1)),s("div",Yi,[s("button",{class:Pe(["btn btn-sm",K.value?"btn-warning":"btn-outline-secondary"]),title:"Toggle Focus Mode",onClick:he},[s("i",{class:Pe(["bi",K.value?"bi-lightbulb-fill":"bi-lightbulb"])},null,2),s("span",Xi,k(K.value?"Focused":"Focus Mode"),1)],2),s("button",{class:"btn btn-outline-secondary btn-sm",onClick:Ce},"Change scope"),s("button",{class:"btn btn-sm btn-outline-secondary ms-1",title:"Get Help",onClick:b[6]||(b[6]=d=>i.value=!0)},[...b[16]||(b[16]=[s("i",{class:"bi bi-question-circle"},null,-1)])])])]),f(t).loadingBatch.value?(g(),v("div",er,[...b[18]||(b[18]=[s("div",{class:"spinner-border text-primary",role:"status"},null,-1),s("div",{class:"mt-2 text-muted"},"Loading session...",-1)])])):f(t).viewDrill.value?(g(),je(Ye,{key:1,name:"drill-fade-rise",mode:"out-in",onAfterEnter:se},{default:He(()=>[(g(),v("div",{key:f(t).viewDrill.value.drillId,class:"row g-4"},[s("div",{class:Pe(K.value?"col-lg-12":"col-lg-8")},[s("div",tr,[s("div",nr,[ke(Al,{drill:f(t).viewDrill.value,"revealed-hints":f(t).viewRevealedHints.value,"hint-available":f(t).viewRemainingHints.value>0,"remaining-hints":f(t).viewRemainingHints.value,"solution-visible":f(t).viewSolutionVisible.value,"solution-snippets":f(t).solutionSnippets.value},null,8,["drill","revealed-hints","hint-available","remaining-hints","solution-visible","solution-snippets"]),s("div",sr,[ke(Rs,{ref_key:"answerEditorRef",ref:a,"model-value":f(t).viewCurrentInput.value,disabled:f(t).viewSubmittedThisDrill.value||f(t).isReviewMode.value,"onUpdate:modelValue":b[7]||(b[7]=d=>f(t).currentInput.value=d),onSubmit:f(t).submitAnswer},null,8,["model-value","disabled","onSubmit"])])])])],2),K.value?X("",!0):(g(),v("div",ar,[s("div",lr,[ke(ll,{"current-position":I.value,"progress-percent":L.value,"drill-metadata":$e.value,feedback:f(t).viewFeedback.value,"focus-mode":K.value,"review-mode":f(t).isReviewMode.value,"has-feedback":!!f(t).viewFeedback.value,"hint-available":!f(t).isReviewMode.value&&f(t).viewRemainingHints.value>0,"remaining-hints":f(t).viewRemainingHints.value,prefetching:f(t).prefetching.value,saving:f(t).saving.value,"save-state":f(t).saveState.value,"save-message":f(t).saveMessage.value,"queue-depth":f(t).queueDepth.value,"can-submit":f(t).canSubmitCurrentDrill.value,"can-show-solution":f(t).canShowSolution.value,"can-report-current-drill":f(t).canReportCurrentDrill.value,"report-state":f(t).viewReportState.value,"report-message":f(t).viewReportMessage.value,"report-button-label":f(t).viewReportButtonLabel.value,"can-go-previous-drill":f(t).hasPreviousReviewedDrill.value,"can-go-next-drill":f(t).isReviewMode.value?f(t).hasNextReviewedDrill.value:!!f(t).viewFeedback.value,onSubmit:f(t).submitAnswer,onHint:f(t).revealNextHint,onSolution:f(t).showSolution,onNext:f(t).nextDrill,onPrevious:f(t).reviewPreviousDrill,onReport:V},null,8,["current-position","progress-percent","drill-metadata","feedback","focus-mode","review-mode","has-feedback","hint-available","remaining-hints","prefetching","saving","save-state","save-message","queue-depth","can-submit","can-show-solution","can-report-current-drill","report-state","report-message","report-button-label","can-go-previous-drill","can-go-next-drill","onSubmit","onHint","onSolution","onNext","onPrevious"])])])),K.value?(g(),v("div",ir,[s("div",rr,[s("button",{class:"btn btn-primary btn-lg",disabled:!f(t).canSubmitCurrentDrill.value,onClick:b[8]||(b[8]=(...d)=>f(t).submitAnswer&&f(t).submitAnswer(...d))},"Check Answer",8,or),s("button",{class:"btn btn-outline-secondary",disabled:f(t).isReviewMode.value||f(t).viewRemainingHints.value===0,onClick:b[9]||(b[9]=(...d)=>f(t).revealNextHint&&f(t).revealNextHint(...d))}," Hint ("+k(f(t).viewRemainingHints.value)+" left) ",9,dr),s("button",{class:Pe(["btn btn-sm",{"btn-outline-danger":f(t).viewReportState.value==="idle"||f(t).viewReportState.value==="error","btn-secondary":f(t).viewReportState.value==="reporting","btn-success":f(t).viewReportState.value==="reported"}]),disabled:!f(t).canReportCurrentDrill.value,title:"Flag a drill that looks wrong so it can be reviewed and fixed.",onClick:V},k(f(t).viewReportButtonLabel.value),11,cr)]),s("div",ur,[s("button",{class:"btn btn-outline-primary btn-lg",disabled:!f(t).hasPreviousReviewedDrill.value,onClick:b[10]||(b[10]=(...d)=>f(t).reviewPreviousDrill&&f(t).reviewPreviousDrill(...d))}," Previous Drill ",8,pr),s("button",{class:"btn btn-success btn-lg",disabled:f(t).isReviewMode.value?!f(t).hasNextReviewedDrill.value:!f(t).viewFeedback.value,onClick:b[11]||(b[11]=(...d)=>f(t).nextDrill&&f(t).nextDrill(...d))}," Next Drill → ",8,mr)])])):X("",!0)]))]),_:1})):X("",!0)])):(g(),v("div",Vi,[s("div",Ni,[s("div",Ei,[s("div",Li,[s("div",Oi,[b[13]||(b[13]=s("div",null,[s("h2",{class:"h4 fw-bold mb-1"},"Session Setup"),s("p",{class:"text-muted small mb-0"},"Choose the AP CSA units and topics you want to practice, then start a short drill set.")],-1)),s("div",Bi,[(g(),v("button",{key:0,class:"btn btn-sm btn-outline-primary",onClick:U}," Reset Preview Progress ")),s("button",{class:"btn btn-link text-muted p-0",title:"Help",onClick:b[3]||(b[3]=d=>i.value=!0)},[...b[12]||(b[12]=[s("i",{class:"bi bi-question-circle h5"},null,-1)])])])]),ke(Us,{modelValue:$.value,"onUpdate:modelValue":b[4]||(b[4]=d=>$.value=d),options:f(n).availableCourseUnits.value,loading:f(n).loading.value,onSelectAll:T,onClearAll:G},null,8,["modelValue","options","loading"]),s("div",Ui,[s("button",{class:"btn btn-primary btn-lg",disabled:!Q.value,onClick:ye},k(fe.value),9,zi)]),s("div",ji,[s("label",Hi,[b[14]||(b[14]=s("span",{class:"fw-semibold text-muted"},"Target Session Length",-1)),s("span",qi,k(f(y))+" drills",1)]),vn(s("input",{type:"range",class:"form-range",min:"5",max:"50",step:"5",id:"sessionLengthSlider","onUpdate:modelValue":b[5]||(b[5]=d=>hs(y)?y.value=d:null)},null,512),[[mn,f(y),void 0,{number:!0}]])]),s("dl",Fi,[b[15]||(b[15]=s("dt",{class:"col-6 text-muted"},"Selection",-1)),s("dd",Wi,k(E.value),1)]),(g(),v("div",Gi," Reset clears this browser's preview progress only. It does not affect the full version. "))])])]),s("div",Ji,[s("div",Qi,[ke(Zl,{analytics:f(n).studentAnalytics.value,loading:f(n).loading.value&&!f(n).studentAnalytics.value,"preview-mode":l},null,8,["analytics","loading"])])])]))],2))}},vr=Ie(gr,[["__scopeId","data-v-a24b18a5"]]);var ht={exports:{}};const fr=/\{\{([^}]+)\}\}/g,_n=["variableName","intVar","doubleVar","booleanVar","stringVar","arrayVar","array2DVar","arrayBoolVar","arrayDoubleVar","arrayIntVarName","arrayStringVar","arrayListVar","rowVar","colVar","tempVar","objectVar","baseVar","expVar","className","typeName","methodName","getterName","setterName","constantName","intLiteral","positiveIntLiteral","doubleLiteral","stringLiteral","booleanLiteral","charLiteral"],Mn=new Set(_n);function ge(e,n){return n.test(String(e||""))}function hr(e={},n=""){return[e.prompt_template,e.promptTemplate,e.notes,...Array.isArray(e.correct_snippets)?e.correct_snippets:[],...Array.isArray(e.correctSnippets)?e.correctSnippets:[],...Array.isArray(e.correct_patterns)?e.correct_patterns:[],...Array.isArray(e.correctPatterns)?e.correctPatterns:[],...Array.isArray(e.hint_sequence)?e.hint_sequence:[],...Array.isArray(e.hintSequence)?e.hintSequence:[]].filter(Boolean).join(`
`)}function Tn(e=""){const n=[],t=new Set,a=String(e||"");for(const i of a.matchAll(/\{\{\{([^{}]+)\}\}/g)){const c=i[1].trim();c&&!t.has(c)&&(n.push(c),t.add(c))}const l=a.replace(/\{\{\{([^{}]+)\}\}/g,"");for(const i of l.matchAll(fr)){const c=i[1].trim();c&&!t.has(c)&&(n.push(c),t.add(c))}return n}function Pn(e={}){const n=[e.prompt_template,e.promptTemplate,e.notes,...Array.isArray(e.correct_snippets)?e.correct_snippets:[],...Array.isArray(e.correctSnippets)?e.correctSnippets:[],...Array.isArray(e.correct_patterns)?e.correct_patterns:[],...Array.isArray(e.correctPatterns)?e.correctPatterns:[],...Array.isArray(e.hint_sequence)?e.hint_sequence:[],...Array.isArray(e.hintSequence)?e.hintSequence:[],...Array.isArray(e.mistake_patterns)?e.mistake_patterns.flatMap(l=>[l.pattern,l.feedback]):[],...Array.isArray(e.mistakePatterns)?e.mistakePatterns.flatMap(l=>[l.pattern,l.feedback]):[]],t=new Set,a=[];return n.forEach(l=>{Tn(l).forEach(i=>{t.has(i)||(t.add(i),a.push(i))})}),a}function Dn(e="",n={}){const t=String(e||"").trim(),a=t.toLowerCase(),l=hr(n,t),i=`{{${t}}}`.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),c=ge(l,/\bArrayList\b/);return t?a==="classname"||a.endsWith("classname")?"className":a==="typename"||a==="datatype"?"typeName":a==="methodname"||a==="staticmethodname"?"methodName":a==="gettername"?"getterName":a==="settername"?"setterName":a==="constantname"||a==="constname"?"constantName":a.includes("booleanliteral")||a==="boolliteral"?"booleanLiteral":a.includes("doubleliteral")||a.startsWith("doublelit")?"doubleLiteral":a.includes("intliteral")||/^intlit[a-z0-9]*$/.test(a)?"intLiteral":a.includes("positiveliteral")||a.includes("positiveintliteral")?"positiveIntLiteral":a.includes("stringliteral")||a.startsWith("strlit")||a==="substr"?"stringLiteral":a.includes("charliteral")?"charLiteral":a==="rowvar"||a==="rowindex"?"rowVar":a==="colvar"||a==="colindex"?"colVar":a.includes("arraylist")||a==="listname"||a==="listvar"||c&&["list","stringlist","intlist","doublelist","booleanlist"].includes(a)?"arrayListVar":a.includes("array2d")||a==="matrixvar"||a==="gridvar"?"array2DVar":a==="arrvar"||a==="arrayvar"||a==="arrparam"?"arrayVar":a==="arrname"?ge(l,new RegExp(`String\\s*\\[\\s*\\]\\s*${i}|String\\[\\]\\s*${i}`))?"arrayStringVar":ge(l,new RegExp(`double\\s*\\[\\s*\\]\\s*${i}|double\\[\\]\\s*${i}`))?"arrayDoubleVar":ge(l,new RegExp(`boolean\\s*\\[\\s*\\]\\s*${i}|boolean\\[\\]\\s*${i}`))?"arrayBoolVar":ge(l,new RegExp(`int\\s*\\[\\s*\\]\\s*${i}|int\\[\\]\\s*${i}`))?"arrayIntVarName":"arrayVar":a==="tempvar"||a==="savevar"?"tempVar":a==="objvar"||a==="objectvar"?"objectVar":/^boolvar[a-z0-9]*$/.test(a)||a==="flagvar"||a==="conditionvar"?"booleanVar":/^strvar[a-z0-9]*$/.test(a)||/^stringvar[a-z0-9]*$/.test(a)||a==="namevar"||a==="strparam"?"stringVar":/^doublevar[a-z0-9]*$/.test(a)?"doubleVar":/^intvar[a-z0-9]*$/.test(a)||a==="countvar"||a==="idx"||a==="index"||a==="indexvar"||a==="loopvar"||a==="limitvar"?"intVar":a==="basevar"?"baseVar":a==="expvar"?"expVar":a==="intval"||a==="integerobj"||a==="intobj"?"intVar":a==="numvar"?ge(l,new RegExp(`double[^.\\n;]*${i}|${i}[^.\\n;]*double`,"i"))?"doubleVar":ge(l,new RegExp(`int(?:eger)?[^.\\n;]*${i}|${i}[^.\\n;]*int(?:eger)?`,"i"))?"intVar":"variableName":a==="sumvar"||a==="minvar"||a==="maxvar"||a==="elementvar"||a==="valuevar"?ge(l,new RegExp(`double[^.\\n;]*${i}|${i}[^.\\n;]*double`,"i"))?"doubleVar":ge(l,new RegExp(`String[^.\\n;]*${i}|${i}[^.\\n;]*String`,"i"))?"stringVar":ge(l,new RegExp(`int(?:eger)?[^.\\n;]*${i}|${i}[^.\\n;]*int(?:eger)?`,"i"))?"intVar":"variableName":a==="paramname"||a==="paramnamea"||a==="paramnameb"||a==="intparam"?ge(l,new RegExp(`String\\s+(?:(?:parameter|argument)\\s+)?(?:named\\s+)?${i}|String\\s+${i}`,"i"))?"stringVar":ge(l,new RegExp(`double\\s+(?:(?:parameter|argument)\\s+)?(?:named\\s+)?${i}|double\\s+${i}`,"i"))?"doubleVar":ge(l,new RegExp(`int(?:eger)?\\s+(?:(?:parameter|argument)\\s+)?(?:named\\s+)?${i}|int\\s+${i}`,"i"))?"intVar":"variableName":"variableName":"variableName"}function Vn(e,n,t={}){if(typeof n!="string"||n.startsWith("calc:"))return{status:"no-change",currentType:n,suggestedType:n,reason:"calculated placeholder or non-string type"};const a=Dn(e,t);return n===a?{status:"no-change",currentType:n,suggestedType:a,reason:"already uses the inferred canonical type"}:n==="variableName"&&a!=="variableName"?{status:"safe-upgrade",currentType:n,suggestedType:a,reason:`placeholder name ${e} implies ${a}`}:Mn.has(n)?n!=="variableName"?{status:"no-change",currentType:n,suggestedType:a,reason:"already uses a non-generic canonical type"}:{status:"no-change",currentType:n,suggestedType:a,reason:"generic placeholder appears intentional"}:{status:"manual-review",currentType:n,suggestedType:a,reason:`unknown bank type ${n}`}}function br(e={}){const n=e.placeholder_types||e.placeholderTypes||{},t=Pn(e),a=[];return t.forEach(l=>{const i=n[l];if(!i){a.push({placeholder:l,severity:"error",message:`Missing placeholder type for ${l}`});return}const c=Vn(l,i,e);c.status==="safe-upgrade"?a.push({placeholder:l,severity:"warning",message:`${l} uses ${i}; consider ${c.suggestedType} for type-specific randomization.`,suggestedType:c.suggestedType}):c.status==="manual-review"&&a.push({placeholder:l,severity:"info",message:`${l} uses ${i}; ${c.reason}.`,suggestedType:c.suggestedType})}),Object.keys(n).forEach(l=>{t.includes(l)||a.push({placeholder:l,severity:"info",message:`${l} is mapped but not used by prompt, hints, snippets, or patterns.`})}),a}ht.exports={CANONICAL_BANK_TYPE_OPTIONS:_n,CANONICAL_BANK_TYPES:Mn,classifyPlaceholderMapping:Vn,detectDrillPlaceholders:Pn,detectPlaceholdersInText:Tn,inferPlaceholderType:Dn,lintDrillPlaceholderTypes:br};const Nn=(ht.exports==null?{}:ht.exports).default||ht.exports,kr=Object.freeze(Object.defineProperty({__proto__:null,default:Nn},Symbol.toStringTag,{value:"Module"}));var bt={exports:{}};function En(e){return String(e).replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}const yr=["===","!==","<<=",">>=","...","&&","||","==","!=","<=",">=","++","--","+=","-=","*=","/=","%=","->","::"],wr=/[\[\]{}().,;:+\-*/%<>=!&|?:^~]/;function Sr(e){const n=String(e||"").trim();if(!n)return[];const t=[];let a=0;for(;a<n.length;){const l=n.slice(a);if(/^\s/.test(l)){a+=1;continue}const i=l.match(/^\{\{[^}]+\}\}/);if(i){t.push(i[0]),a+=i[0].length;continue}const c=l.match(/^"(?:\\.|[^"\\])*"/);if(c){t.push(c[0]),a+=c[0].length;continue}const m=l.match(/^'(?:\\.|[^'\\])*'/);if(m){t.push(m[0]),a+=m[0].length;continue}const p=yr.find(Q=>l.startsWith(Q));if(p){t.push(p),a+=p.length;continue}const y=l.match(/^[A-Za-z_][A-Za-z0-9_]*/);if(y){t.push(y[0]),a+=y[0].length;continue}const $=l.match(/^\d+(?:\.\d+)?/);if($){t.push($[0]),a+=$[0].length;continue}if(wr.test(l[0])){t.push(l[0]),a+=1;continue}t.push(l[0]),a+=1}return t}function cn(e){return e==="{{placeholder}}"||/^{{[^}]+}}$/.test(e)||/^"(?:\\.|[^"\\])*"$/.test(e)||/^'(?:\\.|[^'\\])*'$/.test(e)||/^[A-Za-z_][A-Za-z0-9_]*$/.test(e)||/^\d+(?:\.\d+)?$/.test(e)}function Ar(e){const n=String(e||"").trim();if(!n)return"^\\s*$";const t=Sr(n);return t.length?`^\\s*${t.map((l,i)=>{const c=/^{{[^}]+}}$/.test(l)?l:En(l);if(!i)return c;const m=t[i-1];return`${cn(m)&&cn(l)?"\\s+":"\\s*"}${c}`}).join("")}\\s*$`:"^\\s*$"}function xr(e){return String(e||"").replace(/\s+/g," ").trim()}bt.exports={escapeRegex:En,javaSnippetToRegex:Ar,normalizePattern:xr};const Ln=(bt.exports==null?{}:bt.exports).default||bt.exports,Ir=Object.freeze(Object.defineProperty({__proto__:null,default:Ln},Symbol.toStringTag,{value:"Module"}));var kt={exports:{}};function Le(e,n){try{return JSON.parse(e)}catch{return n}}function Ke(e){return JSON.parse(JSON.stringify(e))}function On(e){return(Array.isArray(e)?e:Le(e,[])).map(t=>String(t||"").trim()).filter(Boolean)}function Bn(e){const n=Array.isArray(e)?e:Le(e,[]),t=new Set,a=[];return n.forEach(l=>{if(!l||!l.skillId)return;const i=String(l.skillId).trim();!i||t.has(i)||(a.push({skillId:i,role:String(l.role||"supporting").trim()==="primary"?"primary":"supporting",displayName:l.displayName?String(l.displayName).trim():void 0,weight:Number.isFinite(l.weight)?l.weight:Number.parseFloat(l.weight||"1",10)||1,confidence:["manual","inferred","needs_review"].includes(String(l.confidence||"").trim())?String(l.confidence).trim():"inferred",notes:l.notes?String(l.notes).trim():""}),t.add(i))}),a.sort((l,i)=>l.role===i.role?l.skillId.localeCompare(i.skillId):l.role==="primary"?-1:1),a}function Un(e){const n=String(e||"active").trim();return["active","extension","deprecated"].includes(n)?n:"active"}function It(e={}){return{drillId:String(e.drillId||e.drill_id||"").trim(),promptTemplate:String(e.promptTemplate||e.prompt_template||""),placeholderTypes:Ke(e.placeholderTypes||Le(e.placeholder_types_json,{})),skillCluster:String(e.skillCluster||e.skill_cluster||"").trim(),tags:Ke(e.tags||Le(e.tags_json,{})),validationType:String(e.validationType||e.validation_type||"regex").trim(),drillStatus:Un(e.drillStatus||e.drill_status||e.status),correctPatterns:Ke(e.correctPatterns||Le(e.correct_patterns_json,[])),mistakePatterns:Ke(e.mistakePatterns||Le(e.mistake_patterns_json,[])),correctSnippets:Ke(e.correctSnippets||Le(e.correct_snippets_json,[])),hintSequence:On(e.hintSequence||e.hint_sequence_json||[]),skills:Bn(e.skills||e.skills_json||[]),notes:String(e.notes||""),numReports:Number.isInteger(e.numReports)?e.numReports:Number.parseInt(e.numReports||e.num_reports||"0",10)||0,sourceDrillId:String(e.sourceDrillId||e.source_drill_id||e.drillId||e.drill_id||"").trim(),sourceRowNumber:Number.isInteger(e.sourceRowNumber)?e.sourceRowNumber:Number.parseInt(e.sourceRowNumber||e.source_row_number||"0",10)||0}}function Ct(e=""){const n=[],t=new Set,a=String(e).matchAll(/\{\{([^}]+)\}\}/g);for(const l of a){const i=l[1].trim();i&&!t.has(i)&&(n.push(i),t.add(i))}return n}function Cr(e=[]){const n=[],t=new Set;return e.forEach(a=>{Ct(a).forEach(l=>{t.has(l)||(t.add(l),n.push(l))})}),n}function Gt(e={}){const n=It(e),t=String(e.promptTemplate||e.prompt_template||n.promptTemplate||""),a=String(e.canonicalSnippet||e.canonical_snippet||""),l=Array.isArray(e.correctSnippets||e.correct_snippets)?e.correctSnippets||e.correct_snippets:n.correctSnippets,i=Array.isArray(e.correctPatterns||e.correct_patterns)?e.correctPatterns||e.correct_patterns:n.correctPatterns,c=Ct(t),m=Cr([a,...l,...i]),p=n.placeholderTypes&&typeof n.placeholderTypes=="object"&&!Array.isArray(n.placeholderTypes)?Object.keys(n.placeholderTypes):[];return{drill:n,promptPlaceholders:c,answerPlaceholders:m,declaredPlaceholders:p}}function zn(e={}){const{promptPlaceholders:n,answerPlaceholders:t}=Gt(e);return t.filter(a=>!n.includes(a))}function $r(e,n,t){const a=String(e||"").slice(0,n),l=String(e||"").slice(n+t);return a.endsWith('"')&&l.startsWith('"')}function jn(e={}){const n=It(e),t=String(n.promptTemplate||""),a=n.placeholderTypes&&typeof n.placeholderTypes=="object"&&!Array.isArray(n.placeholderTypes)?n.placeholderTypes:{},l=[];return Object.entries(a).forEach(([i,c])=>{if(typeof c!="string"||!c.startsWith("stringLiteral"))return;const m=`{{${i}}}`;let p=t.indexOf(m);for(;p!==-1;){if(!$r(t,p,m.length)){l.push(i);break}p=t.indexOf(m,p+m.length)}}),l}function Rr(e={}){const{promptPlaceholders:n,answerPlaceholders:t,declaredPlaceholders:a}=Gt(e);return a.filter(l=>!n.includes(l)&&!t.includes(l))}function _r(e){const n=It(e),t={};if(n.drillId||(t.drillId="Drill ID is required."),n.promptTemplate.trim()||(t.promptTemplate="Prompt template is required."),n.skillCluster.trim()||(t.skillCluster="Skill cluster is required."),n.validationType.trim()||(t.validationType="Validation type is required."),(!n.correctSnippets.length||!n.correctSnippets.every(i=>typeof i=="string"&&i.trim()))&&(t.correctSnippets="At least one correct snippet is required."),(!n.correctPatterns.length||!n.correctPatterns.every(i=>typeof i=="string"&&i.trim()))&&(t.correctPatterns="At least one correct pattern is required."),!n.placeholderTypes||typeof n.placeholderTypes!="object"||Array.isArray(n.placeholderTypes))t.placeholderTypes="Placeholder types must be a mapping.";else{const i=Ct(n.promptTemplate);for(const c of i)if(!n.placeholderTypes[c]){t.placeholderTypes=`Missing placeholder type for ${c}.`;break}}const a=jn(n);a.length&&(t.promptTemplateQuoting=`String literal placeholders in the prompt must be wrapped in double quotes: ${a.join(", ")}.`);const l=zn(n);return l.length&&(t.placeholderVisibility=`Answer placeholders must also appear in the prompt: ${l.join(", ")}.`),(!n.tags||typeof n.tags!="object"||Array.isArray(n.tags))&&(t.tags="Tags must be a mapping."),(!Array.isArray(n.hintSequence)||n.hintSequence.some(i=>typeof i!="string"||!i.trim()))&&(t.hintSequence="Hint sequence must be a list of non-empty strings."),!Array.isArray(n.skills)||!n.skills.length?t.skills="At least one mapped skill is required.":n.skills.find(c=>!c||typeof c!="object"||typeof c.skillId!="string"||!c.skillId.trim()||!["primary","supporting"].includes(c.role))?t.skills="Each skill link needs a skillId and role.":n.skills.filter(m=>m.role==="primary").length!==1&&(t.skills="Exactly one primary skill is required."),Array.isArray(n.mistakePatterns)?n.mistakePatterns.find(c=>!c||typeof c!="object"||typeof c.pattern!="string"||!c.pattern.trim()||typeof c.feedback!="string"||!c.feedback.trim())&&(t.mistakePatterns="Each mistake pattern needs both pattern and feedback."):t.mistakePatterns="Mistake patterns must be a list.",{drill:n,errors:t,isValid:Object.keys(t).length===0}}kt.exports={collectPlaceholderUsage:Gt,detectPlaceholders:Ct,detectHiddenAnswerPlaceholders:zn,detectUnquotedStringLiteralPlaceholders:jn,detectUnusedDeclaredPlaceholders:Rr,normalizeDrillStatus:Un,normalizeDrill:It,normalizeHintSequence:On,normalizeSkillLinks:Bn,parseJson:Le,validateDrillPayload:_r};const Hn=(kt.exports==null?{}:kt.exports).default||kt.exports,Mr=Object.freeze(Object.defineProperty({__proto__:null,default:Hn},Symbol.toStringTag,{value:"Module"})),{javaSnippetToRegex:Wo}=Ln||Ir,{detectPlaceholders:Go,normalizeDrill:Jo,validateDrillPayload:Qo}=Hn||Mr,{applySubstitutions:Ko,generateSubstitutions:Zo}=Xe||et,{inferPlaceholderType:Yo}=Nn||kr,Tr={class:"about-page"},Pr={class:"row g-4"},Dr={class:"col-lg-8"},Vr={class:"card panel-card shadow-sm border-0 mb-4"},Nr={class:"card-body p-4 p-md-5"},Er={class:"row g-3"},Lr={class:"border rounded-3 h-100 p-3 bg-light"},Or={class:"small text-muted"},Br={class:"card panel-card shadow-sm border-0 mb-4"},Ur={class:"card-body p-4"},zr={class:"mb-0 text-muted"},jr={class:"col-lg-4"},Hr={class:"card panel-card shadow-sm border-0 mb-4"},qr={class:"card-body p-4"},Fr={class:"small text-muted ps-3 mb-0"},Wr={key:0,class:"card panel-card shadow-sm border-0"},Gr={class:"card-body p-4"},Jr={__name:"AboutPage",setup(e){const n=["Practice happens in short drills with hints, feedback, and immediate correction.","Topics are organized by AP CSA unit and topic so you can focus on one idea at a time.","You can review a completed session without losing the ending state of each drill."],t=["Autodrills is designed for low-friction AP CSA practice before the exam.","The classroom version uses Google Apps Script and Google Sheets so shared progress, reporting, and teacher tools live together.","The preview keeps the unit/topic structure intact while using a curated sample of drills for evaluation."];return(a,l)=>{const i=bs("RouterLink");return g(),v("div",Tr,[s("div",Pr,[s("div",Dr,[s("section",Vr,[s("div",Nr,[l[0]||(l[0]=s("p",{class:"text-uppercase text-muted small fw-semibold mb-2"},"About Autodrills",-1)),l[1]||(l[1]=s("h1",{class:"display-6 fw-bold mb-3"},"Practice AP CSA one focused drill at a time.",-1)),l[2]||(l[2]=s("p",{class:"lead mb-4"}," Autodrills helps students build fluency with the code-writing patterns that show up again and again on AP CSA questions. The app keeps the practice loop tight: try a drill, get feedback, reveal a hint if needed, and move on without losing the context of the drill you just worked on. ",-1)),s("div",Er,[(g(),v(ee,null,re(n,c=>s("div",{key:c,class:"col-md-4"},[s("div",Lr,[s("div",Or,k(c),1)])])),64))])])]),l[4]||(l[4]=s("section",{class:"card panel-card shadow-sm border-0 mb-4"},[s("div",{class:"card-body p-4"},[s("h2",{class:"h5 fw-bold mb-3"},"Why this practice model works"),s("ul",{class:"mb-0 text-muted"},[s("li",null,"Short, repeated practice helps students notice syntax patterns faster."),s("li",null,"Hints and solution reveals keep the feedback loop immediate instead of waiting for a later review."),s("li",null,"The app shows the same unit/topic structure teachers use elsewhere in AP CSA so the practice feels familiar.")])])],-1)),s("section",Br,[s("div",Ur,[l[3]||(l[3]=s("h2",{class:"h5 fw-bold mb-3"},"Student view",-1)),s("ul",zr,[(g(),v(ee,null,re(n,c=>s("li",{key:`student-${c}`,class:"mb-2"},k(c),1)),64))])])])]),s("div",jr,[s("section",Hr,[s("div",qr,[l[5]||(l[5]=s("h2",{class:"h5 fw-bold mb-3"},"Teacher view",-1)),s("ul",Fr,[(g(),v(ee,null,re(t,c=>s("li",{key:c,class:"mb-2"},k(c),1)),64))])])]),(g(),v("section",Wr,[s("div",Gr,[l[7]||(l[7]=s("h2",{class:"h5 fw-bold mb-2"},"Preview upgrade",-1)),l[8]||(l[8]=s("p",{class:"small text-muted mb-3"}," The preview is a curated sample. The classroom deployment lives on the Full Version page, where the shared workbook and teacher workflow are described for the full release. ",-1)),ke(i,{class:"btn btn-outline-primary btn-sm",to:"/upgrade"},{default:He(()=>[...l[6]||(l[6]=[ie(" Go to Full Version ",-1)])]),_:1})])]))])])])}}},Qr=Ie(Jr,[["__scopeId","data-v-395bf0f5"]]),Kr=[{file:"practice-setup-full-catalog.png",alt:"Autodrills practice setup showing the example-high v3 catalog in the full version",caption:"Practice setup with the live example-high v3 catalog visible.",sourceRoute:"/practice",runMode:"local",viewport:{width:1440,height:1200},sanitized:!0},{file:"practice-active-session.png",alt:"Autodrills practice session showing a prompt and the example-high v3 student dashboard",caption:"Active practice session using live example-high v3 student data.",sourceRoute:"/practice",runMode:"local",viewport:{width:1440,height:1200},sanitized:!0},{file:"teacher-analytics-dashboard.png",alt:"Teacher analytics dashboard with example-high v3 student data",caption:"Teacher analytics dashboard using live example-high v3 data.",sourceRoute:"/admin/analytics",runMode:"local",viewport:{width:1440,height:1200},sanitized:!0},{file:"admin-drills-triage.png",alt:"Admin drill triage view with example-high v3 lessons",caption:"Admin drill triage and lesson editor view using live example-high v3 drills.",sourceRoute:"/admin/drills",runMode:"local",viewport:{width:1440,height:1200},sanitized:!0}],un={assets:Kr},Zr=4,Yr=16,Xr=24,eo=48,ct={totalUnits:Zr,totalTopics:Yr,totalSkills:Xr,totalDrills:eo},to=4,no=53,so=159,ao=1641,ut={totalUnits:to,totalTopics:no,totalSkills:so,totalDrills:ao},lo=`<div class="generated-topic-skill-list">
      
      <section class="generated-unit-section">
        <div class="generated-unit-header">
          <div class="generated-unit-title">Unit 1: Using Objects and Methods</div>
          <div class="generated-unit-summary">15 topics • 49 skills</div>
        </div>
        <div class="generated-topic-list">
          
        <article class="generated-topic-entry">
          <div class="generated-topic-entry-head">
            <div class="generated-topic-entry-title">1.1 Introduction to Algorithms, Programming, and Compilers</div>
            <div class="generated-topic-entry-count">0 skills</div>
          </div>
          <ul class="generated-skill-list">
            
          </ul>
        </article>
        <article class="generated-topic-entry">
          <div class="generated-topic-entry-head">
            <div class="generated-topic-entry-title">1.2 Variables and Data Types</div>
            <div class="generated-topic-entry-count">3 skills</div>
          </div>
          <ul class="generated-skill-list">
            
            <li class="generated-skill-item">
              <span class="generated-skill-number">1.</span>
              <span class="generated-skill-name">Safe Value Swap, Step 1</span>
              <code class="generated-skill-id">u1a-safe-value-swap-step-1</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">2.</span>
              <span class="generated-skill-name">Constant Declaration</span>
              <code class="generated-skill-id">u1a-constant-declaration</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">3.</span>
              <span class="generated-skill-name">Primitive Variable Initialization</span>
              <code class="generated-skill-id">u1a-primitive-variable-initialization</code>
            </li>
          </ul>
        </article>
        <article class="generated-topic-entry">
          <div class="generated-topic-entry-head">
            <div class="generated-topic-entry-title">1.3 Expressions and Output</div>
            <div class="generated-topic-entry-count">6 skills</div>
          </div>
          <ul class="generated-skill-list">
            
            <li class="generated-skill-item">
              <span class="generated-skill-number">1.</span>
              <span class="generated-skill-name">Integer Division Truncation</span>
              <code class="generated-skill-id">u1a-integer-division-truncation</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">2.</span>
              <span class="generated-skill-name">Extracting the Last Digit</span>
              <code class="generated-skill-id">u1a-extracting-the-last-digit</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">3.</span>
              <span class="generated-skill-name">Grouping for an Average</span>
              <code class="generated-skill-id">u1a-grouping-for-an-average</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">4.</span>
              <span class="generated-skill-name">Basic Arithmetic Expression</span>
              <code class="generated-skill-id">u1a-basic-arithmetic-expression</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">5.</span>
              <span class="generated-skill-name">Console print Statement</span>
              <code class="generated-skill-id">u1c-console-print-statement</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">6.</span>
              <span class="generated-skill-name">Console println Statement</span>
              <code class="generated-skill-id">u1c-console-println-statement</code>
            </li>
          </ul>
        </article>
        <article class="generated-topic-entry">
          <div class="generated-topic-entry-head">
            <div class="generated-topic-entry-title">1.4 Assignment Statements and Input</div>
            <div class="generated-topic-entry-count">2 skills</div>
          </div>
          <ul class="generated-skill-list">
            
            <li class="generated-skill-item">
              <span class="generated-skill-number">1.</span>
              <span class="generated-skill-name">Stripping the Last Digit</span>
              <code class="generated-skill-id">u1a-stripping-the-last-digit</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">2.</span>
              <span class="generated-skill-name">Standard Assignment Update</span>
              <code class="generated-skill-id">u1a-standard-assignment-update</code>
            </li>
          </ul>
        </article>
        <article class="generated-topic-entry">
          <div class="generated-topic-entry-head">
            <div class="generated-topic-entry-title">1.5 Casting and Range of Variables</div>
            <div class="generated-topic-entry-count">4 skills</div>
          </div>
          <ul class="generated-skill-list">
            
            <li class="generated-skill-item">
              <span class="generated-skill-number">1.</span>
              <span class="generated-skill-name">Exact Decimal Quotient</span>
              <code class="generated-skill-id">u1b-exact-decimal-quotient</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">2.</span>
              <span class="generated-skill-name">Numeric Cast Expression</span>
              <code class="generated-skill-id">u1a-numeric-cast-expression</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">3.</span>
              <span class="generated-skill-name">Rounding a Positive Double</span>
              <code class="generated-skill-id">u1b-rounding-a-positive-double</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">4.</span>
              <span class="generated-skill-name">Explicit Double-to-Int Cast in Assignment</span>
              <code class="generated-skill-id">u1b-explicit-double-to-int-cast-in-assignment</code>
            </li>
          </ul>
        </article>
        <article class="generated-topic-entry">
          <div class="generated-topic-entry-head">
            <div class="generated-topic-entry-title">1.6 Compound Assignment Operators</div>
            <div class="generated-topic-entry-count">1 skill</div>
          </div>
          <ul class="generated-skill-list">
            
            <li class="generated-skill-item">
              <span class="generated-skill-number">1.</span>
              <span class="generated-skill-name">Compound Assignment Syntax</span>
              <code class="generated-skill-id">u1a-compound-assignment-syntax</code>
            </li>
          </ul>
        </article>
        <article class="generated-topic-entry">
          <div class="generated-topic-entry-head">
            <div class="generated-topic-entry-title">1.7 Application Program Interface (API) and Libraries</div>
            <div class="generated-topic-entry-count">0 skills</div>
          </div>
          <ul class="generated-skill-list">
            
          </ul>
        </article>
        <article class="generated-topic-entry">
          <div class="generated-topic-entry-head">
            <div class="generated-topic-entry-title">1.8 Documentation with Comments</div>
            <div class="generated-topic-entry-count">0 skills</div>
          </div>
          <ul class="generated-skill-list">
            
          </ul>
        </article>
        <article class="generated-topic-entry">
          <div class="generated-topic-entry-head">
            <div class="generated-topic-entry-title">1.9 Method Signatures</div>
            <div class="generated-topic-entry-count">0 skills</div>
          </div>
          <ul class="generated-skill-list">
            
          </ul>
        </article>
        <article class="generated-topic-entry">
          <div class="generated-topic-entry-head">
            <div class="generated-topic-entry-title">1.10 Calling Class Methods</div>
            <div class="generated-topic-entry-count">1 skill</div>
          </div>
          <ul class="generated-skill-list">
            
            <li class="generated-skill-item">
              <span class="generated-skill-number">1.</span>
              <span class="generated-skill-name">Calling a Static Method</span>
              <code class="generated-skill-id">u3b-calling-a-static-method</code>
            </li>
          </ul>
        </article>
        <article class="generated-topic-entry">
          <div class="generated-topic-entry-head">
            <div class="generated-topic-entry-title">1.11 Math Class</div>
            <div class="generated-topic-entry-count">5 skills</div>
          </div>
          <ul class="generated-skill-list">
            
            <li class="generated-skill-item">
              <span class="generated-skill-number">1.</span>
              <span class="generated-skill-name">Random Integer from 0 to Max</span>
              <code class="generated-skill-id">u1b-random-integer-from-0-to-max</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">2.</span>
              <span class="generated-skill-name">Random Integer from Min to Max</span>
              <code class="generated-skill-id">u1b-random-integer-from-min-to-max</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">3.</span>
              <span class="generated-skill-name">Absolute Difference</span>
              <code class="generated-skill-id">u1b-absolute-difference</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">4.</span>
              <span class="generated-skill-name">Math.pow Expression</span>
              <code class="generated-skill-id">u1b-math-pow-expression</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">5.</span>
              <span class="generated-skill-name">Math.sqrt Expression</span>
              <code class="generated-skill-id">u1b-math-sqrt-expression</code>
            </li>
          </ul>
        </article>
        <article class="generated-topic-entry">
          <div class="generated-topic-entry-head">
            <div class="generated-topic-entry-title">1.12 Objects: Instances of Classes</div>
            <div class="generated-topic-entry-count">0 skills</div>
          </div>
          <ul class="generated-skill-list">
            
          </ul>
        </article>
        <article class="generated-topic-entry">
          <div class="generated-topic-entry-head">
            <div class="generated-topic-entry-title">1.13 Object Creation and Storage (Instantiation)</div>
            <div class="generated-topic-entry-count">3 skills</div>
          </div>
          <ul class="generated-skill-list">
            
            <li class="generated-skill-item">
              <span class="generated-skill-number">1.</span>
              <span class="generated-skill-name">Null Reference Assignment</span>
              <code class="generated-skill-id">u3a-null-reference-assignment</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">2.</span>
              <span class="generated-skill-name">No-Argument Constructor Instantiation</span>
              <code class="generated-skill-id">u3a-no-argument-constructor-instantiation</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">3.</span>
              <span class="generated-skill-name">Parameterized Constructor Instantiation</span>
              <code class="generated-skill-id">u3a-parameterized-constructor-instantiation</code>
            </li>
          </ul>
        </article>
        <article class="generated-topic-entry">
          <div class="generated-topic-entry-head">
            <div class="generated-topic-entry-title">1.14 Calling Instance Methods</div>
            <div class="generated-topic-entry-count">2 skills</div>
          </div>
          <ul class="generated-skill-list">
            
            <li class="generated-skill-item">
              <span class="generated-skill-number">1.</span>
              <span class="generated-skill-name">Calling an Instance Method with No Parameters</span>
              <code class="generated-skill-id">u3b-calling-an-instance-method-with-no-parameters</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">2.</span>
              <span class="generated-skill-name">Capturing a Return Value</span>
              <code class="generated-skill-id">u3b-capturing-a-return-value</code>
            </li>
          </ul>
        </article>
        <article class="generated-topic-entry">
          <div class="generated-topic-entry-head">
            <div class="generated-topic-entry-title">1.15 String Manipulation</div>
            <div class="generated-topic-entry-count">22 skills</div>
          </div>
          <ul class="generated-skill-list">
            
            <li class="generated-skill-item">
              <span class="generated-skill-number">1.</span>
              <span class="generated-skill-name">String Concatenation with Grouped Arithmetic</span>
              <code class="generated-skill-id">u1c-string-concatenation-with-grouped-arithmetic</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">2.</span>
              <span class="generated-skill-name">Single-Character Substring Extraction</span>
              <code class="generated-skill-id">u1c-single-character-substring-extraction</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">3.</span>
              <span class="generated-skill-name">Last Character of a String</span>
              <code class="generated-skill-id">u1c-last-character-of-a-string</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">4.</span>
              <span class="generated-skill-name">String Equality by Content</span>
              <code class="generated-skill-id">u1c-string-equality-by-content</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">5.</span>
              <span class="generated-skill-name">Checking Whether \`indexOf()\` Found a Match</span>
              <code class="generated-skill-id">u1c-checking-whether-indexof-found-a-match</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">6.</span>
              <span class="generated-skill-name">Declaring an Empty String</span>
              <code class="generated-skill-id">u1c-declaring-an-empty-string</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">7.</span>
              <span class="generated-skill-name">String Concatenation Expression</span>
              <code class="generated-skill-id">u1c-string-concatenation-expression</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">8.</span>
              <span class="generated-skill-name">String length() Expression</span>
              <code class="generated-skill-id">u1c-string-length-expression</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">9.</span>
              <span class="generated-skill-name">Last Valid String Index</span>
              <code class="generated-skill-id">u1c-string-last-valid-index</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">10.</span>
              <span class="generated-skill-name">Range substring Extraction</span>
              <code class="generated-skill-id">u1c-substring-range-extraction</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">11.</span>
              <span class="generated-skill-name">One-Argument substring Extraction</span>
              <code class="generated-skill-id">u1c-substring-from-index</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">12.</span>
              <span class="generated-skill-name">String split() Expression</span>
              <code class="generated-skill-id">u1c-string-split-expression</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">13.</span>
              <span class="generated-skill-name">Accessing a Split Result Element</span>
              <code class="generated-skill-id">u1c-string-split-element-access</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">14.</span>
              <span class="generated-skill-name">indexOf Method Call</span>
              <code class="generated-skill-id">u1c-indexof-method-call</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">15.</span>
              <span class="generated-skill-name">indexOf Position Condition</span>
              <code class="generated-skill-id">u1c-indexof-position-condition</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">16.</span>
              <span class="generated-skill-name">indexOf Not-Found Condition</span>
              <code class="generated-skill-id">u1c-indexof-not-found-condition</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">17.</span>
              <span class="generated-skill-name">String compareTo() Expression</span>
              <code class="generated-skill-id">u1c-string-compareto-expression</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">18.</span>
              <span class="generated-skill-name">compareTo() Greater Than Zero Condition</span>
              <code class="generated-skill-id">u1c-string-compareto-greater-than-zero</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">19.</span>
              <span class="generated-skill-name">compareTo() Less Than Zero Condition</span>
              <code class="generated-skill-id">u1c-string-compareto-less-than-zero</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">20.</span>
              <span class="generated-skill-name">compareTo() Equals Zero Condition</span>
              <code class="generated-skill-id">u1c-string-compareto-equals-zero</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">21.</span>
              <span class="generated-skill-name">compareTo() Not-Zero Condition</span>
              <code class="generated-skill-id">u1c-string-compareto-not-zero</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">22.</span>
              <span class="generated-skill-name">compareTo() on the Last Character of a String</span>
              <code class="generated-skill-id">u1c-string-compareto-last-character-expression</code>
            </li>
          </ul>
        </article>
        </div>
      </section>
      <section class="generated-unit-section">
        <div class="generated-unit-header">
          <div class="generated-unit-title">Unit 2: Selection and Iteration</div>
          <div class="generated-unit-summary">12 topics • 27 skills</div>
        </div>
        <div class="generated-topic-list">
          
        <article class="generated-topic-entry">
          <div class="generated-topic-entry-head">
            <div class="generated-topic-entry-title">2.1 Algorithms with Selection and Repetition</div>
            <div class="generated-topic-entry-count">0 skills</div>
          </div>
          <ul class="generated-skill-list">
            
          </ul>
        </article>
        <article class="generated-topic-entry">
          <div class="generated-topic-entry-head">
            <div class="generated-topic-entry-title">2.2 Boolean Expressions</div>
            <div class="generated-topic-entry-count">4 skills</div>
          </div>
          <ul class="generated-skill-list">
            
            <li class="generated-skill-item">
              <span class="generated-skill-number">1.</span>
              <span class="generated-skill-name">Boolean Variable Assignment</span>
              <code class="generated-skill-id">u2a-boolean-variable-assignment</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">2.</span>
              <span class="generated-skill-name">Relational Comparison Expression</span>
              <code class="generated-skill-id">u2a-relational-comparison-expression</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">3.</span>
              <span class="generated-skill-name">Boolean Flag Condition</span>
              <code class="generated-skill-id">u2a-boolean-flag-condition</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">4.</span>
              <span class="generated-skill-name">Nonzero Divisor Guard</span>
              <code class="generated-skill-id">u2a-nonzero-divisor-guard</code>
            </li>
          </ul>
        </article>
        <article class="generated-topic-entry">
          <div class="generated-topic-entry-head">
            <div class="generated-topic-entry-title">2.3 if Statements</div>
            <div class="generated-topic-entry-count">1 skill</div>
          </div>
          <ul class="generated-skill-list">
            
            <li class="generated-skill-item">
              <span class="generated-skill-number">1.</span>
              <span class="generated-skill-name">if Statement Header</span>
              <code class="generated-skill-id">u2a-if-statement-header</code>
            </li>
          </ul>
        </article>
        <article class="generated-topic-entry">
          <div class="generated-topic-entry-head">
            <div class="generated-topic-entry-title">2.4 Nested if Statements</div>
            <div class="generated-topic-entry-count">1 skill</div>
          </div>
          <ul class="generated-skill-list">
            
            <li class="generated-skill-item">
              <span class="generated-skill-number">1.</span>
              <span class="generated-skill-name">else if Statement Header</span>
              <code class="generated-skill-id">u2a-else-if-statement-header</code>
            </li>
          </ul>
        </article>
        <article class="generated-topic-entry">
          <div class="generated-topic-entry-head">
            <div class="generated-topic-entry-title">2.5 Compound Boolean Expressions</div>
            <div class="generated-topic-entry-count">4 skills</div>
          </div>
          <ul class="generated-skill-list">
            
            <li class="generated-skill-item">
              <span class="generated-skill-number">1.</span>
              <span class="generated-skill-name">Inclusive Range Check</span>
              <code class="generated-skill-id">u2a-inclusive-range-check</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">2.</span>
              <span class="generated-skill-name">Null Check with Short-Circuit Protection</span>
              <code class="generated-skill-id">u2a-null-check-with-short-circuit-protection</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">3.</span>
              <span class="generated-skill-name">Negated String Equality</span>
              <code class="generated-skill-id">u2a-negated-string-equality</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">4.</span>
              <span class="generated-skill-name">Logical AND/OR Expression</span>
              <code class="generated-skill-id">u2a-logical-and-or-expression</code>
            </li>
          </ul>
        </article>
        <article class="generated-topic-entry">
          <div class="generated-topic-entry-head">
            <div class="generated-topic-entry-title">2.6 Comparing Boolean Expressions</div>
            <div class="generated-topic-entry-count">1 skill</div>
          </div>
          <ul class="generated-skill-list">
            
            <li class="generated-skill-item">
              <span class="generated-skill-number">1.</span>
              <span class="generated-skill-name">Applying De Morgan&#39;s Law</span>
              <code class="generated-skill-id">u2a-applying-de-morgan-s-law</code>
            </li>
          </ul>
        </article>
        <article class="generated-topic-entry">
          <div class="generated-topic-entry-head">
            <div class="generated-topic-entry-title">2.7 while Loops</div>
            <div class="generated-topic-entry-count">3 skills</div>
          </div>
          <ul class="generated-skill-list">
            
            <li class="generated-skill-item">
              <span class="generated-skill-number">1.</span>
              <span class="generated-skill-name">\`while\` Loop Continuation Condition</span>
              <code class="generated-skill-id">u2b-while-loop-continuation-condition</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">2.</span>
              <span class="generated-skill-name">Sentinel-Controlled Loop Condition</span>
              <code class="generated-skill-id">u2b-sentinel-controlled-loop-condition</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">3.</span>
              <span class="generated-skill-name">Preventing an Infinite Loop by Updating the Control Variable</span>
              <code class="generated-skill-id">u2b-preventing-an-infinite-loop-by-updating-the-control-variable</code>
            </li>
          </ul>
        </article>
        <article class="generated-topic-entry">
          <div class="generated-topic-entry-head">
            <div class="generated-topic-entry-title">2.8 for Loops</div>
            <div class="generated-topic-entry-count">2 skills</div>
          </div>
          <ul class="generated-skill-list">
            
            <li class="generated-skill-item">
              <span class="generated-skill-number">1.</span>
              <span class="generated-skill-name">Standard Zero-Indexed \`for\` Loop Header</span>
              <code class="generated-skill-id">u2b-standard-zero-indexed-for-loop-header</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">2.</span>
              <span class="generated-skill-name">String Traversal Loop Header</span>
              <code class="generated-skill-id">u2b-string-traversal-loop-header</code>
            </li>
          </ul>
        </article>
        <article class="generated-topic-entry">
          <div class="generated-topic-entry-head">
            <div class="generated-topic-entry-title">2.9 Implementing Selection and Iteration Algorithms</div>
            <div class="generated-topic-entry-count">8 skills</div>
          </div>
          <ul class="generated-skill-list">
            
            <li class="generated-skill-item">
              <span class="generated-skill-number">1.</span>
              <span class="generated-skill-name">Odd Number Check</span>
              <code class="generated-skill-id">u1a-odd-number-check</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">2.</span>
              <span class="generated-skill-name">Divisibility Check</span>
              <code class="generated-skill-id">u2a-divisibility-check</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">3.</span>
              <span class="generated-skill-name">Accumulator Update</span>
              <code class="generated-skill-id">u2c-accumulator-update</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">4.</span>
              <span class="generated-skill-name">Initializing a Minimum Tracker</span>
              <code class="generated-skill-id">u2c-initializing-a-minimum-tracker</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">5.</span>
              <span class="generated-skill-name">Maximum Update Step</span>
              <code class="generated-skill-id">u2c-maximum-update-step</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">6.</span>
              <span class="generated-skill-name">Counter Increment Step</span>
              <code class="generated-skill-id">u2c-counter-increment-step</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">7.</span>
              <span class="generated-skill-name">Minimum Comparison Condition</span>
              <code class="generated-skill-id">u2c-minimum-comparison-condition</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">8.</span>
              <span class="generated-skill-name">All-Values Flag Update</span>
              <code class="generated-skill-id">u2c-all-values-flag-update</code>
            </li>
          </ul>
        </article>
        <article class="generated-topic-entry">
          <div class="generated-topic-entry-head">
            <div class="generated-topic-entry-title">2.10 Implementing String Algorithms</div>
            <div class="generated-topic-entry-count">2 skills</div>
          </div>
          <ul class="generated-skill-list">
            
            <li class="generated-skill-item">
              <span class="generated-skill-number">1.</span>
              <span class="generated-skill-name">Fixed-Length Substring Extraction During Traversal</span>
              <code class="generated-skill-id">u2c-fixed-length-substring-extraction-during-traversal</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">2.</span>
              <span class="generated-skill-name">Safe Outer Loop Bound for Substring Search</span>
              <code class="generated-skill-id">u2c-safe-outer-loop-bound-for-substring-search</code>
            </li>
          </ul>
        </article>
        <article class="generated-topic-entry">
          <div class="generated-topic-entry-head">
            <div class="generated-topic-entry-title">2.11 Nested Iteration</div>
            <div class="generated-topic-entry-count">0 skills</div>
          </div>
          <ul class="generated-skill-list">
            
          </ul>
        </article>
        <article class="generated-topic-entry">
          <div class="generated-topic-entry-head">
            <div class="generated-topic-entry-title">2.12 Informal Run-Time Analysis</div>
            <div class="generated-topic-entry-count">1 skill</div>
          </div>
          <ul class="generated-skill-list">
            
            <li class="generated-skill-item">
              <span class="generated-skill-number">1.</span>
              <span class="generated-skill-name">Nested Loop Execution Count</span>
              <code class="generated-skill-id">u2c-nested-loop-execution-count</code>
            </li>
          </ul>
        </article>
        </div>
      </section>
      <section class="generated-unit-section">
        <div class="generated-unit-header">
          <div class="generated-unit-title">Unit 3: Class Creation</div>
          <div class="generated-unit-summary">9 topics • 18 skills</div>
        </div>
        <div class="generated-topic-list">
          
        <article class="generated-topic-entry">
          <div class="generated-topic-entry-head">
            <div class="generated-topic-entry-title">3.1 Abstraction and Program Design</div>
            <div class="generated-topic-entry-count">0 skills</div>
          </div>
          <ul class="generated-skill-list">
            
          </ul>
        </article>
        <article class="generated-topic-entry">
          <div class="generated-topic-entry-head">
            <div class="generated-topic-entry-title">3.2 Impact of Program Design</div>
            <div class="generated-topic-entry-count">0 skills</div>
          </div>
          <ul class="generated-skill-list">
            
          </ul>
        </article>
        <article class="generated-topic-entry">
          <div class="generated-topic-entry-head">
            <div class="generated-topic-entry-title">3.3 Anatomy of a Class</div>
            <div class="generated-topic-entry-count">1 skill</div>
          </div>
          <ul class="generated-skill-list">
            
            <li class="generated-skill-item">
              <span class="generated-skill-number">1.</span>
              <span class="generated-skill-name">Private Instance Variable Declaration</span>
              <code class="generated-skill-id">u3a-private-instance-variable-declaration</code>
            </li>
          </ul>
        </article>
        <article class="generated-topic-entry">
          <div class="generated-topic-entry-head">
            <div class="generated-topic-entry-title">3.4 Constructors</div>
            <div class="generated-topic-entry-count">1 skill</div>
          </div>
          <ul class="generated-skill-list">
            
            <li class="generated-skill-item">
              <span class="generated-skill-number">1.</span>
              <span class="generated-skill-name">Constructor Signature Without a Return Type</span>
              <code class="generated-skill-id">u3a-constructor-signature-without-a-return-type</code>
            </li>
          </ul>
        </article>
        <article class="generated-topic-entry">
          <div class="generated-topic-entry-head">
            <div class="generated-topic-entry-title">3.5 Methods: How to Write Them</div>
            <div class="generated-topic-entry-count">6 skills</div>
          </div>
          <ul class="generated-skill-list">
            
            <li class="generated-skill-item">
              <span class="generated-skill-number">1.</span>
              <span class="generated-skill-name">Accessor Return Statement</span>
              <code class="generated-skill-id">u3b-accessor-return-statement</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">2.</span>
              <span class="generated-skill-name">Non-Void Method Header</span>
              <code class="generated-skill-id">u3b-non-void-method-header</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">3.</span>
              <span class="generated-skill-name">Relative State Update in a Mutator</span>
              <code class="generated-skill-id">u3b-relative-state-update-in-a-mutator</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">4.</span>
              <span class="generated-skill-name">Direct Boolean Return</span>
              <code class="generated-skill-id">u3b-direct-boolean-return</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">5.</span>
              <span class="generated-skill-name">Void Method Header with Parameters</span>
              <code class="generated-skill-id">u3b-void-method-header-with-parameters</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">6.</span>
              <span class="generated-skill-name">Mutator Method Header</span>
              <code class="generated-skill-id">u3b-mutator-method-header</code>
            </li>
          </ul>
        </article>
        <article class="generated-topic-entry">
          <div class="generated-topic-entry-head">
            <div class="generated-topic-entry-title">3.6 Methods: Passing and Returning References of an Object</div>
            <div class="generated-topic-entry-count">2 skills</div>
          </div>
          <ul class="generated-skill-list">
            
            <li class="generated-skill-item">
              <span class="generated-skill-number">1.</span>
              <span class="generated-skill-name">Array Parameter Call</span>
              <code class="generated-skill-id">u2c-array-parameter-call</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">2.</span>
              <span class="generated-skill-name">Array Return Capture</span>
              <code class="generated-skill-id">u2c-array-return-capture</code>
            </li>
          </ul>
        </article>
        <article class="generated-topic-entry">
          <div class="generated-topic-entry-head">
            <div class="generated-topic-entry-title">3.7 Class Variables and Methods</div>
            <div class="generated-topic-entry-count">5 skills</div>
          </div>
          <ul class="generated-skill-list">
            
            <li class="generated-skill-item">
              <span class="generated-skill-number">1.</span>
              <span class="generated-skill-name">Static Variable Declaration</span>
              <code class="generated-skill-id">u3c-static-variable-declaration</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">2.</span>
              <span class="generated-skill-name">Static Method Header</span>
              <code class="generated-skill-id">u3c-static-method-header</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">3.</span>
              <span class="generated-skill-name">Accessing a Static Variable</span>
              <code class="generated-skill-id">u3c-accessing-a-static-variable</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">4.</span>
              <span class="generated-skill-name">Static Constant Declaration</span>
              <code class="generated-skill-id">u3c-static-constant-declaration</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">5.</span>
              <span class="generated-skill-name">Static Variable Update</span>
              <code class="generated-skill-id">u3c-static-variable-update</code>
            </li>
          </ul>
        </article>
        <article class="generated-topic-entry">
          <div class="generated-topic-entry-head">
            <div class="generated-topic-entry-title">3.8 Scope and Access</div>
            <div class="generated-topic-entry-count">2 skills</div>
          </div>
          <ul class="generated-skill-list">
            
            <li class="generated-skill-item">
              <span class="generated-skill-number">1.</span>
              <span class="generated-skill-name">Accessing a Private Field Through an Accessor</span>
              <code class="generated-skill-id">u3c-accessing-a-private-field-through-an-accessor</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">2.</span>
              <span class="generated-skill-name">Declaring a Variable Outside a Narrower Block</span>
              <code class="generated-skill-id">u3c-declaring-a-variable-outside-a-narrower-block</code>
            </li>
          </ul>
        </article>
        <article class="generated-topic-entry">
          <div class="generated-topic-entry-head">
            <div class="generated-topic-entry-title">3.9 this Keyword</div>
            <div class="generated-topic-entry-count">1 skill</div>
          </div>
          <ul class="generated-skill-list">
            
            <li class="generated-skill-item">
              <span class="generated-skill-number">1.</span>
              <span class="generated-skill-name">Resolving Shadowing with \`this\`</span>
              <code class="generated-skill-id">u3a-resolving-shadowing-with-this</code>
            </li>
          </ul>
        </article>
        </div>
      </section>
      <section class="generated-unit-section">
        <div class="generated-unit-header">
          <div class="generated-unit-title">Unit 4: Data Collections</div>
          <div class="generated-unit-summary">17 topics • 65 skills</div>
        </div>
        <div class="generated-topic-list">
          
        <article class="generated-topic-entry">
          <div class="generated-topic-entry-head">
            <div class="generated-topic-entry-title">4.1 Ethical and Social Issues Around Data Collection</div>
            <div class="generated-topic-entry-count">0 skills</div>
          </div>
          <ul class="generated-skill-list">
            
          </ul>
        </article>
        <article class="generated-topic-entry">
          <div class="generated-topic-entry-head">
            <div class="generated-topic-entry-title">4.2 Introduction to Using Data Sets</div>
            <div class="generated-topic-entry-count">1 skill</div>
          </div>
          <ul class="generated-skill-list">
            
            <li class="generated-skill-item">
              <span class="generated-skill-number">1.</span>
              <span class="generated-skill-name">Reverse \`for\` Loop Header</span>
              <code class="generated-skill-id">u2b-reverse-for-loop-header</code>
            </li>
          </ul>
        </article>
        <article class="generated-topic-entry">
          <div class="generated-topic-entry-head">
            <div class="generated-topic-entry-title">4.3 Array Creation and Access</div>
            <div class="generated-topic-entry-count">8 skills</div>
          </div>
          <ul class="generated-skill-list">
            
            <li class="generated-skill-item">
              <span class="generated-skill-number">1.</span>
              <span class="generated-skill-name">Array Instantiation with an Explicit Size</span>
              <code class="generated-skill-id">u4a-array-instantiation-with-an-explicit-size</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">2.</span>
              <span class="generated-skill-name">Array Length Property</span>
              <code class="generated-skill-id">u4a-array-length-property</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">3.</span>
              <span class="generated-skill-name">Accessing the Last Element of an Array</span>
              <code class="generated-skill-id">u4a-accessing-the-last-element-of-an-array</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">4.</span>
              <span class="generated-skill-name">Modifying an Array Element</span>
              <code class="generated-skill-id">u4a-modifying-an-array-element</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">5.</span>
              <span class="generated-skill-name">1D Array Element Access</span>
              <code class="generated-skill-id">u2c-array-element-access</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">6.</span>
              <span class="generated-skill-name">Computed-Index Array Access</span>
              <code class="generated-skill-id">u2c-array-computed-index-access</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">7.</span>
              <span class="generated-skill-name">1D Array Element Update</span>
              <code class="generated-skill-id">u2c-array-element-update</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">8.</span>
              <span class="generated-skill-name">Valid Array Index Check</span>
              <code class="generated-skill-id">u2c-valid-array-index-check</code>
            </li>
          </ul>
        </article>
        <article class="generated-topic-entry">
          <div class="generated-topic-entry-head">
            <div class="generated-topic-entry-title">4.4 Array Traversals</div>
            <div class="generated-topic-entry-count">2 skills</div>
          </div>
          <ul class="generated-skill-list">
            
            <li class="generated-skill-item">
              <span class="generated-skill-number">1.</span>
              <span class="generated-skill-name">Enhanced \`for\` Loop Header for an Array</span>
              <code class="generated-skill-id">u4a-enhanced-for-loop-header-for-an-array</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">2.</span>
              <span class="generated-skill-name">Enhanced-for 1D Traversal</span>
              <code class="generated-skill-id">u2b-enhanced-for-1d-traversal</code>
            </li>
          </ul>
        </article>
        <article class="generated-topic-entry">
          <div class="generated-topic-entry-head">
            <div class="generated-topic-entry-title">4.5 Implementing Array Algorithms</div>
            <div class="generated-topic-entry-count">8 skills</div>
          </div>
          <ul class="generated-skill-list">
            
            <li class="generated-skill-item">
              <span class="generated-skill-number">1.</span>
              <span class="generated-skill-name">Left-Shift Assignment in an Array</span>
              <code class="generated-skill-id">u4a-left-shift-assignment-in-an-array</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">2.</span>
              <span class="generated-skill-name">Array Element Swap, Middle Step</span>
              <code class="generated-skill-id">u4a-array-element-swap-middle-step</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">3.</span>
              <span class="generated-skill-name">Next-Element-Safe Array Loop Bound</span>
              <code class="generated-skill-id">u2c-next-element-safe-array-loop-bound</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">4.</span>
              <span class="generated-skill-name">Array Sum Update Step</span>
              <code class="generated-skill-id">u4a-array-sum-update-step</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">5.</span>
              <span class="generated-skill-name">Array Count-Match Increment Step</span>
              <code class="generated-skill-id">u4a-array-count-match-increment-step</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">6.</span>
              <span class="generated-skill-name">Array Minimum-Index Update Step</span>
              <code class="generated-skill-id">u4a-array-minimum-index-update-step</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">7.</span>
              <span class="generated-skill-name">Array Adjacent-Pair Comparison Condition</span>
              <code class="generated-skill-id">u4a-array-adjacent-pair-comparison-condition</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">8.</span>
              <span class="generated-skill-name">Array Right-Shift Step</span>
              <code class="generated-skill-id">u4a-array-right-shift-step</code>
            </li>
          </ul>
        </article>
        <article class="generated-topic-entry">
          <div class="generated-topic-entry-head">
            <div class="generated-topic-entry-title">4.6 Using Text Files</div>
            <div class="generated-topic-entry-count">7 skills</div>
          </div>
          <ul class="generated-skill-list">
            
            <li class="generated-skill-item">
              <span class="generated-skill-number">1.</span>
              <span class="generated-skill-name">File Object Instantiation</span>
              <code class="generated-skill-id">u1c-file-object-instantiation</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">2.</span>
              <span class="generated-skill-name">Scanner Construction from a File</span>
              <code class="generated-skill-id">u1c-scanner-file-construction</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">3.</span>
              <span class="generated-skill-name">Scanner hasNext() Condition</span>
              <code class="generated-skill-id">u1c-scanner-file-hasnext-condition</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">4.</span>
              <span class="generated-skill-name">Reading the Next Integer from a File Scanner</span>
              <code class="generated-skill-id">u1c-reading-the-next-integer-from-a-scanner</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">5.</span>
              <span class="generated-skill-name">Scanner nextDouble() Call</span>
              <code class="generated-skill-id">u1c-scanner-file-next-double</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">6.</span>
              <span class="generated-skill-name">Scanner next() Token Call</span>
              <code class="generated-skill-id">u1c-scanner-file-next-token</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">7.</span>
              <span class="generated-skill-name">Scanner close() Call</span>
              <code class="generated-skill-id">u1c-scanner-file-close</code>
            </li>
          </ul>
        </article>
        <article class="generated-topic-entry">
          <div class="generated-topic-entry-head">
            <div class="generated-topic-entry-title">4.7 Wrapper Classes</div>
            <div class="generated-topic-entry-count">8 skills</div>
          </div>
          <ul class="generated-skill-list">
            
            <li class="generated-skill-item">
              <span class="generated-skill-number">1.</span>
              <span class="generated-skill-name">Autoboxing an int into an Integer</span>
              <code class="generated-skill-id">u1b-wrapper-autobox-unbox</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">2.</span>
              <span class="generated-skill-name">Integer.parseInt Call</span>
              <code class="generated-skill-id">u1b-wrapper-parse-and-value-conversion</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">3.</span>
              <span class="generated-skill-name">Autoboxing a double into a Double</span>
              <code class="generated-skill-id">u1b-wrapper-double-autobox-expression</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">4.</span>
              <span class="generated-skill-name">Double.parseDouble Call</span>
              <code class="generated-skill-id">u1b-wrapper-parse-double-expression</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">5.</span>
              <span class="generated-skill-name">Unboxing an Integer into an int</span>
              <code class="generated-skill-id">u1b-wrapper-int-value-expression</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">6.</span>
              <span class="generated-skill-name">Unboxing a Double into a double</span>
              <code class="generated-skill-id">u1b-wrapper-double-value-expression</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">7.</span>
              <span class="generated-skill-name">Integer.MAX_VALUE Constant</span>
              <code class="generated-skill-id">u1b-integer-max-value-constant</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">8.</span>
              <span class="generated-skill-name">Integer.MIN_VALUE Constant</span>
              <code class="generated-skill-id">u1b-integer-min-value-constant</code>
            </li>
          </ul>
        </article>
        <article class="generated-topic-entry">
          <div class="generated-topic-entry-head">
            <div class="generated-topic-entry-title">4.8 ArrayList Methods</div>
            <div class="generated-topic-entry-count">9 skills</div>
          </div>
          <ul class="generated-skill-list">
            
            <li class="generated-skill-item">
              <span class="generated-skill-number">1.</span>
              <span class="generated-skill-name">Generic ArrayList Declaration and/or Instantiation</span>
              <code class="generated-skill-id">u4b-generic-arraylist-declaration-andor-instantiation</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">2.</span>
              <span class="generated-skill-name">ArrayList Size Method</span>
              <code class="generated-skill-id">u4b-arraylist-size-method</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">3.</span>
              <span class="generated-skill-name">Accessing an ArrayList Element</span>
              <code class="generated-skill-id">u4b-accessing-an-arraylist-element</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">4.</span>
              <span class="generated-skill-name">Replacing an ArrayList Element with \`set\`</span>
              <code class="generated-skill-id">u4b-replacing-an-arraylist-element-with-set</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">5.</span>
              <span class="generated-skill-name">Inserting into an ArrayList at a Specific Index</span>
              <code class="generated-skill-id">u4b-inserting-into-an-arraylist-at-a-specific-index</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">6.</span>
              <span class="generated-skill-name">Accessing the Last Element of an ArrayList</span>
              <code class="generated-skill-id">u4b-accessing-the-last-element-of-an-arraylist</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">7.</span>
              <span class="generated-skill-name">ArrayList Append</span>
              <code class="generated-skill-id">u4b-arraylist-append</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">8.</span>
              <span class="generated-skill-name">ArrayList Remove by Index</span>
              <code class="generated-skill-id">u4b-arraylist-remove-by-index</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">9.</span>
              <span class="generated-skill-name">Capture Removed ArrayList Value</span>
              <code class="generated-skill-id">u4b-arraylist-capture-removed-value</code>
            </li>
          </ul>
        </article>
        <article class="generated-topic-entry">
          <div class="generated-topic-entry-head">
            <div class="generated-topic-entry-title">4.9 ArrayList Traversals</div>
            <div class="generated-topic-entry-count">0 skills</div>
          </div>
          <ul class="generated-skill-list">
            
          </ul>
        </article>
        <article class="generated-topic-entry">
          <div class="generated-topic-entry-head">
            <div class="generated-topic-entry-title">4.10 Implementing ArrayList Algorithms</div>
            <div class="generated-topic-entry-count">4 skills</div>
          </div>
          <ul class="generated-skill-list">
            
            <li class="generated-skill-item">
              <span class="generated-skill-number">1.</span>
              <span class="generated-skill-name">Adjusting the Loop Variable After Removing from an ArrayList</span>
              <code class="generated-skill-id">u4b-adjusting-the-loop-variable-after-removing-from-an-arraylist</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">2.</span>
              <span class="generated-skill-name">ArrayList Sum Update Step</span>
              <code class="generated-skill-id">u4b-arraylist-sum-update-step</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">3.</span>
              <span class="generated-skill-name">ArrayList Count-Match Increment Step</span>
              <code class="generated-skill-id">u4b-arraylist-count-match-increment-step</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">4.</span>
              <span class="generated-skill-name">ArrayList Reverse Traversal Loop Header for Safe Removal</span>
              <code class="generated-skill-id">u4b-arraylist-reverse-traversal-loop-header-for-safe-removal</code>
            </li>
          </ul>
        </article>
        <article class="generated-topic-entry">
          <div class="generated-topic-entry-head">
            <div class="generated-topic-entry-title">4.11 2D Array Creation and Access</div>
            <div class="generated-topic-entry-count">9 skills</div>
          </div>
          <ul class="generated-skill-list">
            
            <li class="generated-skill-item">
              <span class="generated-skill-number">1.</span>
              <span class="generated-skill-name">2D Array Element Access</span>
              <code class="generated-skill-id">u4c-2d-array-element-access</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">2.</span>
              <span class="generated-skill-name">Number of Rows in a 2D Array</span>
              <code class="generated-skill-id">u4c-number-of-rows-in-a-2d-array</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">3.</span>
              <span class="generated-skill-name">Number of Columns in a Rectangular 2D Array</span>
              <code class="generated-skill-id">u4c-number-of-columns-in-a-rectangular-2d-array</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">4.</span>
              <span class="generated-skill-name">2D Array Instantiation</span>
              <code class="generated-skill-id">u4c-2d-array-instantiation</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">5.</span>
              <span class="generated-skill-name">Relative 2D Cell Access</span>
              <code class="generated-skill-id">u4c-relative-2d-cell-access</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">6.</span>
              <span class="generated-skill-name">2D Last Row or Column Index</span>
              <code class="generated-skill-id">u4c-2d-last-row-column-index</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">7.</span>
              <span class="generated-skill-name">2D Bottom-Right Cell Access</span>
              <code class="generated-skill-id">u4c-2d-bottom-right-cell-access</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">8.</span>
              <span class="generated-skill-name">Rectangular 2D Initializer List</span>
              <code class="generated-skill-id">u4c-rectangular-2d-initializer-list</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">9.</span>
              <span class="generated-skill-name">2D Current-Cell Assignment or Update</span>
              <code class="generated-skill-id">u4c-2d-current-cell-assignment-update</code>
            </li>
          </ul>
        </article>
        <article class="generated-topic-entry">
          <div class="generated-topic-entry-head">
            <div class="generated-topic-entry-title">4.12 2D Array Traversals</div>
            <div class="generated-topic-entry-count">3 skills</div>
          </div>
          <ul class="generated-skill-list">
            
            <li class="generated-skill-item">
              <span class="generated-skill-number">1.</span>
              <span class="generated-skill-name">Column-Major Outer Loop Header</span>
              <code class="generated-skill-id">u4c-column-major-outer-loop-header</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">2.</span>
              <span class="generated-skill-name">Outer Enhanced \`for\` Loop for a 2D Integer Array</span>
              <code class="generated-skill-id">u4c-outer-enhanced-for-loop-for-a-2d-integer-array</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">3.</span>
              <span class="generated-skill-name">Enhanced-for 2D Row Traversal</span>
              <code class="generated-skill-id">u2b-enhanced-for-2d-row-traversal</code>
            </li>
          </ul>
        </article>
        <article class="generated-topic-entry">
          <div class="generated-topic-entry-head">
            <div class="generated-topic-entry-title">4.13 Implementing 2D Array Algorithms</div>
            <div class="generated-topic-entry-count">2 skills</div>
          </div>
          <ul class="generated-skill-list">
            
            <li class="generated-skill-item">
              <span class="generated-skill-number">1.</span>
              <span class="generated-skill-name">Right-Neighbor Bounds Check</span>
              <code class="generated-skill-id">u4c-right-neighbor-bounds-check</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">2.</span>
              <span class="generated-skill-name">2D Aggregation or Search Step</span>
              <code class="generated-skill-id">u4c-2d-aggregation-search-step</code>
            </li>
          </ul>
        </article>
        <article class="generated-topic-entry">
          <div class="generated-topic-entry-head">
            <div class="generated-topic-entry-title">4.14 Searching Algorithms</div>
            <div class="generated-topic-entry-count">4 skills</div>
          </div>
          <ul class="generated-skill-list">
            
            <li class="generated-skill-item">
              <span class="generated-skill-number">1.</span>
              <span class="generated-skill-name">Array Linear Search Match Flag Update</span>
              <code class="generated-skill-id">u4a-array-linear-search-match-flag-update</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">2.</span>
              <span class="generated-skill-name">Array Linear Search Return on Match</span>
              <code class="generated-skill-id">u4a-array-linear-search-return-on-match</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">3.</span>
              <span class="generated-skill-name">ArrayList Linear Search Match Flag Update</span>
              <code class="generated-skill-id">u4b-arraylist-linear-search-match-flag-update</code>
            </li>
            <li class="generated-skill-item">
              <span class="generated-skill-number">4.</span>
              <span class="generated-skill-name">ArrayList Linear Search Return on Match</span>
              <code class="generated-skill-id">u4b-arraylist-linear-search-return-on-match</code>
            </li>
          </ul>
        </article>
        <article class="generated-topic-entry">
          <div class="generated-topic-entry-head">
            <div class="generated-topic-entry-title">4.15 Sorting Algorithms</div>
            <div class="generated-topic-entry-count">0 skills</div>
          </div>
          <ul class="generated-skill-list">
            
          </ul>
        </article>
        <article class="generated-topic-entry">
          <div class="generated-topic-entry-head">
            <div class="generated-topic-entry-title">4.16 Recursion</div>
            <div class="generated-topic-entry-count">0 skills</div>
          </div>
          <ul class="generated-skill-list">
            
          </ul>
        </article>
        <article class="generated-topic-entry">
          <div class="generated-topic-entry-head">
            <div class="generated-topic-entry-title">4.17 Recursive Searching and Sorting</div>
            <div class="generated-topic-entry-count">0 skills</div>
          </div>
          <ul class="generated-skill-list">
            
          </ul>
        </article>
        </div>
      </section>
    </div>`,io={class:"upgrade-page"},ro={class:"row g-4"},oo={class:"col-lg-7"},co={id:"setup-help",class:"card panel-card shadow-sm border-0 mb-4"},uo={class:"card-body p-4"},po={class:"row g-3"},mo={class:"h-100 rounded-3 border p-3 bg-white"},go={class:"fw-semibold mb-1"},vo={class:"small text-muted"},fo={class:"card panel-card shadow-sm border-0 mb-4"},ho={class:"card-body p-4"},bo=["innerHTML"],ko={class:"card panel-card shadow-sm border-0 mb-4"},yo={class:"card-body p-4"},wo={class:"row g-3"},So={class:"border rounded-3 p-3 bg-light h-100"},Ao={class:"text-uppercase text-muted small fw-semibold"},xo={class:"d-flex align-items-end gap-2 mb-2"},Io={class:"h3 fw-bold mb-0"},Co={class:"d-flex align-items-end gap-2 mb-2"},$o={class:"h4 fw-semibold mb-0"},Ro={class:"small text-muted"},_o={class:"col-lg-5"},Mo={class:"card panel-card shadow-sm border-0 mb-4"},To={class:"card-body p-4"},Po={class:"d-grid gap-3"},Do=["src","alt"],Vo={class:"small text-muted"},No={class:"fw-semibold text-dark"},Eo={__name:"UpgradePage",setup(e){const n={"practice-setup-full-catalog.png":new URL(""+new URL("practice-setup-full-catalog-DaS2qv4t.png",import.meta.url).href,import.meta.url).href,"practice-active-session.png":new URL(""+new URL("practice-active-session-DsiEwZco.png",import.meta.url).href,import.meta.url).href,"teacher-analytics-dashboard.png":new URL(""+new URL("teacher-analytics-dashboard-B0jGnUYX.png",import.meta.url).href,import.meta.url).href,"admin-drills-triage.png":new URL(""+new URL("admin-drills-triage-Z7DabNBS.png",import.meta.url).href,import.meta.url).href},t=[{title:"Complete drill library",text:"The full version includes the complete AP CSA drill library rather than the curated preview sample."},{title:"Teacher and admin tools",text:"Class dashboards, drill triage, and teacher workflows are available in the classroom version."},{title:"Shared classroom state",text:"Student and classroom progress live in a shared Google Sheets workbook instead of only in one browser."},{title:"School Google identity",text:"The classroom version can use school-managed identity and roster context."}],a={units:ct.totalUnits,topics:ct.totalTopics,skills:ct.totalSkills,drills:ct.totalDrills},l=[{label:"Units",preview:a.units,full:ut.totalUnits,note:"AP CSA units represented in each experience"},{label:"Topics",preview:a.topics,full:ut.totalTopics,note:"Distinct AP CSA topics included in the catalog"},{label:"Skills",preview:a.skills,full:ut.totalSkills,note:"Selected skills in the curated preview versus the full drill library"},{label:"Drills",preview:a.drills,full:ut.totalDrills,note:"Practice prompts available in each version"}],i=Array.isArray(un.assets)?un.assets.map(m=>({...m,url:n[m.file]||""})):[];function c(m){return Number.isFinite(Number(m))?Number(m).toLocaleString():"0"}return(m,p)=>(g(),v("div",io,[p[8]||(p[8]=an('<section class="card panel-card shadow-sm border-0 mb-4" data-v-c1870853><div class="card-body p-4 p-md-5" data-v-c1870853><div class="d-flex flex-column flex-lg-row justify-content-between align-items-lg-start gap-3" data-v-c1870853><div class="flex-grow-1" data-v-c1870853><p class="text-uppercase text-muted small fw-semibold mb-2" data-v-c1870853>Full Version / Upgrade</p><h1 class="display-6 fw-bold mb-3" data-v-c1870853>The full version is free, but it uses Google Apps Script and Google Sheets behind the scenes.</h1><p class="lead mb-0" data-v-c1870853> The preview gives you a safe curated sample. The full version unlocks the complete drill library, teacher tools, and classroom persistence once the Google Apps Script and Google Sheets setup is in place. </p></div><div class="setup-callout border rounded-3 p-3 bg-light" data-v-c1870853><div class="fw-semibold mb-1" data-v-c1870853>Need setup help?</div><p class="small text-muted mb-3" data-v-c1870853> Ask Orion Smith at East Lansing High School to connect the full GAS/Sheets version and confirm the deployment settings. </p><a class="btn btn-primary btn-sm" href="#setup-help" data-v-c1870853>Request setup help</a></div></div></div></section>',1)),s("div",ro,[s("div",oo,[s("section",co,[s("div",uo,[p[0]||(p[0]=s("h2",{class:"h5 fw-bold mb-3"},"What the full version adds",-1)),s("div",po,[(g(),v(ee,null,re(t,y=>s("div",{key:y.title,class:"col-md-6"},[s("div",mo,[s("div",go,k(y.title),1),s("div",vo,k(y.text),1)])])),64))])])]),s("section",fo,[s("div",ho,[p[1]||(p[1]=s("h2",{class:"h5 fw-bold mb-3"},"Full version topic-skill list",-1)),p[2]||(p[2]=s("p",{class:"text-muted mb-4"}," This list is generated at build time from the full version catalog, so the topic totals and skill counts stay accurate when the preview bundle is rebuilt. ",-1)),s("div",{class:"generated-topic-skill-list",innerHTML:f(lo)},null,8,bo)])]),s("section",ko,[s("div",yo,[p[5]||(p[5]=s("h2",{class:"h5 fw-bold mb-3"},"Preview versus full drill library",-1)),s("div",wo,[(g(),v(ee,null,re(l,y=>s("div",{key:y.label,class:"col-md-6 col-xl-3"},[s("div",So,[s("div",Ao,k(y.label),1),s("div",xo,[s("div",Io,k(c(y.preview)),1),p[3]||(p[3]=s("div",{class:"text-muted small mb-1"},"preview",-1))]),s("div",Co,[s("div",$o,k(c(y.full)),1),p[4]||(p[4]=s("div",{class:"text-muted small mb-1"},"full",-1))]),s("div",Ro,k(y.note),1)])])),64))])])])]),s("div",_o,[s("section",Mo,[s("div",To,[p[6]||(p[6]=s("h2",{class:"h5 fw-bold mb-3"},"Sanitized screenshots",-1)),s("div",Po,[(g(!0),v(ee,null,re(f(i),y=>(g(),v("figure",{key:y.file,class:"border rounded-3 bg-white p-3 mb-0"},[s("img",{src:y.url,alt:y.alt,class:"screenshot-image rounded-3 mb-3",loading:"lazy"},null,8,Do),s("figcaption",Vo,[s("div",No,k(y.caption),1)])]))),128))])])]),p[7]||(p[7]=an('<section class="card panel-card shadow-sm border-0 mb-4" data-v-c1870853><div class="card-body p-4" data-v-c1870853><h2 class="h5 fw-bold mb-3" data-v-c1870853>What to request from Orion Smith</h2><ul class="small text-muted ps-3 mb-3" data-v-c1870853><li data-v-c1870853>Connect the classroom full version.</li><li data-v-c1870853>Confirm the public preview screenshots are safe to ship.</li><li data-v-c1870853>Review any setup or identity questions before publishing the full site.</li></ul><a href="#setup-workbook-coming-soon" class="btn btn-outline-primary btn-sm" data-v-c1870853>Copyable setup workbook coming soon</a><div class="small text-muted mt-2" data-v-c1870853> The full version stays free, but it does require setup and a classroom copy of the Google Sheets workbook. </div></div></section>',1))])])]))}},Lo=Ie(Eo,[["__scopeId","data-v-c1870853"]]),Oo=ms(),Bo=[{path:"/",redirect:"/practice"},{path:"/practice",component:vr},{path:"/about",component:Qr},{path:"/upgrade",component:Lo}],Xo=ps({history:Oo,routes:Bo});export{Xo as default};
