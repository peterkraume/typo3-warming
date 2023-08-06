import e from"@typo3/core/document-service.js";import t from"@typo3/core/event/regular-event.js";import{_ as r,e as n,C as o,L as i,I as a}from"../cache-warmer.js";import{LitElement as s}from"lit";import l from"@typo3/backend/icons.js";import c from"@typo3/backend/modal.js";import u from"@typo3/backend/notification.js";import"@typo3/backend/action-button/immediate-action.js";import"@typo3/core/ajax/ajax-request.js";const d=({finisher:e,descriptor:t})=>(r,n)=>{var o;if(void 0===n){const n=null!==(o=r.originalKey)&&void 0!==o?o:r.key,i=null!=t?{kind:"method",placement:"prototype",key:n,descriptor:t(r.key)}:{...r,key:n};return null!=e&&(i.finisher=function(t){e(t,n)}),i}{const o=r.constructor;void 0!==t&&Object.defineProperty(r,n,t(n)),null==e||e(o,n)}};function p(e,t){return d({descriptor:r=>{const n={get(){var t,r;return null!==(r=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e))&&void 0!==r?r:null},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof r?Symbol():"__"+r;n.get=function(){var r,n;return void 0===this[t]&&(this[t]=null!==(n=null===(r=this.renderRoot)||void 0===r?void 0:r.querySelector(e))&&void 0!==n?n:null),this[t]}}return n}})}function g(e){return d({descriptor:t=>({get(){var t,r;return null!==(r=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelectorAll(e))&&void 0!==r?r:[]},enumerable:!0,configurable:!0})})}var h="text/plain",m=e=>{};function f(e){m(e)}var v=!0;(function(){(console.warn||console.log).apply(console,arguments)}).bind("[clipboard-polyfill]");var y,b,w,x="undefined"==typeof window?void 0:window,C="undefined"==typeof globalThis?void 0:globalThis,k=null!=(w=null==(y=x)?void 0:y.Promise)?w:null==(b=C)?void 0:b.Promise;var T,S,_,E,I,A="undefined"==typeof navigator?void 0:navigator,G=null==A?void 0:A.clipboard,j=null==(T=null==G?void 0:G.read)?void 0:T.bind(G),L=null==(S=null==G?void 0:G.readText)?void 0:S.bind(G),D=null==(_=null==G?void 0:G.write)?void 0:_.bind(G),R=null==(E=null==G?void 0:G.writeText)?void 0:E.bind(G),O=null==(I=x)?void 0:I.ClipboardItem,U=function(){if(!k)throw new Error("No `Promise` implementation available for `clipboard-polyfill`. Consider using: https://github.com/lgarron/clipboard-polyfill#flat-file-version-with-promise-included");return k}(),B=x;function M(){return"undefined"==typeof ClipboardEvent&&void 0!==(null==B?void 0:B.clipboardData)&&void 0!==(null==B?void 0:B.clipboardData.setData)}function W(e,t,r){for(var n in f("listener called"),e.success=!0,t){var o=t[n],i=r.clipboardData;i.setData(n,o),n===h&&i.getData(n)!==o&&(f("setting text/plain failed"),e.success=!1)}r.preventDefault()}function P(e){var t={success:!1},r=W.bind(this,t,e);document.addEventListener("copy",r);try{document.execCommand("copy")}finally{document.removeEventListener("copy",r)}return t.success}function N(e,t){q(e);var r=P(t);return z(),r}function q(e){var t=document.getSelection();if(t){var r=document.createRange();r.selectNodeContents(e),t.removeAllRanges(),t.addRange(r)}}function z(){var e=document.getSelection();e&&e.removeAllRanges()}function H(e){var t,r,n=h in e;if(M()){if(!n)throw new Error("No `text/plain` value was specified.");if(t=e[h],(r=B.clipboardData.setData("Text",t))&&f("writeTextIE worked"),r)return!0;throw new Error("Copying failed, possibly because the user rejected it.")}return P(e),navigator.userAgent.indexOf("Edge")>-1?(f('UA "Edge" => assuming success'),!0):N(document.body,e)?(f("copyUsingTempSelection worked"),!0):function(e){var t=document.createElement("div");t.setAttribute("style","-webkit-user-select: text !important"),t.textContent="temporary element",document.body.appendChild(t);var r=N(t,e);return document.body.removeChild(t),r}(e)?(f("copyUsingTempElem worked"),!0):!!function(e){f("copyTextUsingDOM");var t=document.createElement("div");t.setAttribute("style","-webkit-user-select: text !important");var r=t;t.attachShadow&&(f("Using shadow DOM."),r=t.attachShadow({mode:"open"}));var n=document.createElement("span");n.innerText=e,r.appendChild(n),document.body.appendChild(t),q(n);var o=document.execCommand("copy");return z(),document.body.removeChild(t),o}(e[h])&&(f("copyTextUsingDOM worked"),!0)}function Y(e,t){var r=[];for(var n in e){var o=e[n];r.push(t(o))}return U.all(r).then((t=>{for(var r={},n=0;n<e.length;n++)r[e[n]]=t[n];return r}))}var F=U.resolve(),J=()=>U.resolve(!0),$=U.resolve(!1);function V(e){return new U(((t,r)=>{try{t(e())}catch(e){r(e)}}))}function K(e){if(!H(function(e){var t={};return t[h]=e,t}(e)))throw new Error("writeText() failed")}function Q(){return V((()=>{if(L)return f("Using `navigator.clipboard.readText()`."),L();if(M()){var e=function(){var e=B.clipboardData.getData("Text");if(""===e)throw new Error("Empty clipboard or could not read plain text from clipboard");return e}();return U.resolve(e)}throw new Error("Read is not supported in your browser.")}))}function X(e,t){for(var r in e){if(-1!==e[r].types.indexOf(t))return!0}return!1}var Z=function(e,t){var r,n=Object.keys(e),o={};for(var i in e){var a=e[i];o[i]="string"==typeof a?ee(i,a):a}return{types:n,presentationStyle:null!=(r=null==t?void 0:t.presentationStyle)?r:"unspecified",getType:function(e){return U.resolve(o[e])}}};function ee(e,t){return new Blob([t],{type:e})}function te(e){return Y(e.types,(function(t){return e.getType(t)})).then((t=>{var r={};return e.presentationStyle&&(r.presentationStyle=e.presentationStyle),new O(t,r)}))}function re(e){var t={};return t[h]=ee(e,h),new Z(t)}function ne(e,t){return e.getType(t).then((e=>{return t=e,new U(((e,r)=>{var n=new FileReader;n.addEventListener("load",(()=>{var t=n.result;"string"==typeof t?e(t):r("could not convert blob to string")})),n.readAsText(t)}));var t}))}var oe,ie,ae=Object.freeze({__proto__:null,ClipboardItem:Z,read:function(){return V((()=>j?(f("Using `navigator.clipboard.read()`."),j()):Q().then((e=>[re(e)]))))},readText:Q,setDebugLog:function(e){m=e},suppressWarnings:function(){v=!1},write:function(e){return V((()=>{if(D&&O){var t=D;return f("Using `navigator.clipboard.write()`."),U.all(e.map(te)).then((r=>t(r).then(J).catch((t=>{if(!X(e,h)&&!X(e,"text/html"))throw t;return $}))))}return $})).then((t=>{if(t)return F;var r=X(e,h);return v&&!r&&f("clipboard.write() was called without a `text/plain` data type. On some platforms, this may result in an empty clipboard. Call suppressWarnings() to suppress this warning."),function(e){return Y(e.types,(function(t){return ne(e,t)}))}(e[0]).then((e=>{if(!H(e))throw new Error("write() failed")}))}))},writeText:function(e){return V((()=>R?(f("Using `navigator.clipboard.writeText()`."),R(e).catch(K)):U.resolve(K(e))))}});class se extends Error{static create(){return new se("The given site selection object is invalid.")}}class le{constructor(e,t,r){this.site=e,this.language=t,this.group=r}static fromJson(e){const t=JSON.parse(e);if("object"!=typeof t)throw se.create();if(!("site"in t))throw se.create();return new le(t.site,t.language??null,t.group??null)}getSiteIdentifier(){return this.site}getLanguageId(){return this.language}getGroupName(){return this.group}isWithinGroup(){return null!==this.group}isGroupRoot(){return this.isWithinGroup()&&null===this.language}isGroupItem(){return this.isWithinGroup()&&null!==this.language}}!function(e){e.form=".tx-warming-sites-modal",e.siteCheckbox=".tx-warming-sites-group-selector > input",e.siteCheckboxAll=".tx-warming-sites-group-selector > input[data-select-all]",e.useragentCopy="button.tx-warming-user-agent-copy-action",e.useragentCopyIcon="button.tx-warming-user-agent-copy-action .t3js-icon",e.useragentCopyText=".tx-warming-user-agent-copy-text"}(oe||(oe={})),function(e){e.startButton="tx-warming-start-warmup"}(ie||(ie={}));let ce=class extends s{constructor(){super(),this.cacheWarmer=new o,this.modal=c.currentModal}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.initializeSites()}initializeSites(){const e=this.modal.querySelector(".modal-footer");e.classList.add("tx-warming-modal-footer","visually-hidden"),new t("submit",(e=>(e.preventDefault(),this.performCacheWarmup(),!1))).bindTo(this._form),this._checkboxes.forEach((r=>{new t("input",(t=>{e.classList.remove("visually-hidden"),this.toggleInputs(t.target)})).bindTo(r)})),new t("click",(e=>{e.preventDefault(),e.stopImmediatePropagation();const t=e.currentTarget.dataset.text;t&&this.copyUserAgentToClipboard(t)})).bindTo(this._useragentCopyButton)}performCacheWarmup(){if(!this.areSitesSelected())return void u.warning(TYPO3.lang[i.notificationNoSitesSelectedTitle],TYPO3.lang[i.notificationNoSitesSelectedMessage],15);const{configuration:e,sites:t}=this.parseFormValues();this.cacheWarmer.warmupCache(t,[],e)}parseFormValues(){const e=new FormData(this._form),t={},r={};for(const[n,o]of e)switch(n){case"site":try{const e=le.fromJson(o.toString()),t=e.getSiteIdentifier();if(e.isGroupRoot())continue;r[t]??(r[t]=[]),r[t].push(e.getLanguageId())}catch(e){}break;case"limit":t.limit=parseInt(o.toString());break;case"strategy":t.strategy=o.toString()}return{configuration:t,sites:r}}toggleInputs(e){if(e.dataset.selectAll)this.toggleAll(e.checked);else{const t=le.fromJson(e.value);t.isWithinGroup()&&this.toggleGroup(t,e),this.toggleSelectAll(e)}this.areSitesSelected()?this.getStartButton().classList.remove("disabled"):this.getStartButton().classList.add("disabled")}areSitesSelected(){let e=!1;return this._enabledCheckboxesWithoutGroupElements.forEach((t=>{if(t.checked)return e=!0,!1})),e}toggleGroup(e,t){let r=t.checked;null===e.getLanguageId()?this.getCheckboxesByGroup(e.getGroupName()).forEach((e=>{e.checked=r})):(r&&this.getCheckboxesByGroup(e.getGroupName()).forEach((e=>{if(e.id!==t.id&&!e.checked)return r=!1,!1})),this.getCheckboxGroupRoot(e.getGroupName()).checked=r)}toggleAll(e){this._enabledCheckboxes.forEach((t=>{t.checked=e}))}toggleSelectAll(e){let t=e.checked;t&&this._enabledCheckboxesWithoutGroupElements.forEach((r=>{if(r.id!==e.id&&!r.checked)return t=!1,!1})),this._selectAllCheckbox.checked=t}getCheckboxesByGroup(e){return this.renderRoot.querySelectorAll(`input[data-group="${e}"]:enabled`)}getCheckboxGroupRoot(e){return this.renderRoot.querySelector(`input[data-group-root="${e}"]:enabled`)}getStartButton(){return this.modal.querySelector(`button[name=${ie.startButton}]`)}copyUserAgentToClipboard(e){const t=this._useragentCopyIcon.cloneNode(!0);l.getIcon(a.spinner,l.sizes.small).then((e=>{this._useragentCopyIcon.innerHTML=e})),Promise.all([(navigator.clipboard??ae).writeText(e),l.getIcon(a.check,l.sizes.small)]).then((async([,e])=>{const r=this._useragentCopyText.innerText;this._useragentCopyText.innerText=TYPO3.lang[i.modalSitesUserAgentActionSuccessful],this._useragentCopyIcon.innerHTML=e,window.setTimeout((()=>{this._useragentCopyIcon.innerHTML=t.innerHTML,this._useragentCopyText.innerText=r,this._useragentCopyButton.blur()}),3e3)}),(()=>{this._useragentCopyIcon.innerHTML=t.innerHTML}))}static createModal(){const e=new URL(TYPO3.settings.ajaxUrls.tx_warming_fetch_sites,window.location.origin);c.dismiss(),c.advanced({type:c.types.ajax,content:e.toString(),title:TYPO3.lang[i.modalSitesTitle],size:c.sizes.medium,buttons:[{text:TYPO3.lang[i.modalSitesButtonStart],icon:a.rocket,btnClass:"btn-primary disabled",name:ie.startButton,trigger:()=>{c.currentModal.querySelector(oe.form).requestSubmit()}}]})}};var ue;r([p(oe.form)],ce.prototype,"_form",void 0),r([p(oe.siteCheckboxAll)],ce.prototype,"_selectAllCheckbox",void 0),r([g(oe.siteCheckbox)],ce.prototype,"_checkboxes",void 0),r([g(oe.siteCheckbox+":enabled")],ce.prototype,"_enabledCheckboxes",void 0),r([g(oe.siteCheckbox+":enabled:not([data-select-all])")],ce.prototype,"_enabledCheckboxesWithoutGroupElements",void 0),r([p(oe.useragentCopy)],ce.prototype,"_useragentCopyButton",void 0),r([p(oe.useragentCopyIcon)],ce.prototype,"_useragentCopyIcon",void 0),r([p(oe.useragentCopyText)],ce.prototype,"_useragentCopyText",void 0),ce=r([n("warming-sites-modal")],ce),function(e){e.container="#eliashaeussler-typo3warming-backend-toolbaritems-cachewarmuptoolbaritem"}(ue||(ue={}));var de=new class{constructor(){e.ready().then((()=>{new t("click",(()=>{ce.createModal()})).delegateTo(document,ue.container)}))}};export{de as default};
