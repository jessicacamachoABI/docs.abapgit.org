import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as c,c as l,a as e,b as t,d as n,w as r,e as s}from"./app-a10366f7.js";const h={},p=e("h2",{id:"object-types",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#object-types","aria-hidden":"true"},"#"),t(" Object Types")],-1),u=e("em",null,"new",-1),_=e("em",null,"not",-1),f=s('<p>Exceptions for existing objects:</p><ul><li>Transaction <code>ZABAPGIT</code></li><li>Program <code>ZABAPGIT</code> and includes</li><li>Function group <code>ZABAPGIT_PARALLEL</code> for parallel serialization (only available in the developer version)</li><li>MIME objects <code>ZABAPGIT_*</code> for UI (CSS, JS, and fonts)</li></ul><h2 id="conventions" tabindex="-1"><a class="header-anchor" href="#conventions" aria-hidden="true">#</a> Conventions</h2><h3 id="naming" tabindex="-1"><a class="header-anchor" href="#naming" aria-hidden="true">#</a> Naming</h3><h4 id="object-prefixing" tabindex="-1"><a class="header-anchor" href="#object-prefixing" aria-hidden="true">#</a> Object Prefixing</h4><p>Classes and interfaces are prefixed using <code>zcl_abapgit_</code> or <code>zif_abapgit_</code> (<code>zcx_abapgit_</code> for exception classes, <code>lcl_</code> and <code>ltcl_</code> for local and test classes).</p><h3 id="object-descriptions" tabindex="-1"><a class="header-anchor" href="#object-descriptions" aria-hidden="true">#</a> Object Descriptions</h3>',7),b=e("code",null,"abapGit - ...",-1),g=e("code",null,"abapGit - Repository Content List",-1),m=e("code",null,"TADIR",-1),x=e("code",null,"abapGit - INTF - Interface (ABAP Objects)",-1),y=e("h4",{id:"sub-object-descriptions",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sub-object-descriptions","aria-hidden":"true"},"#"),t(" Sub-object Descriptions")],-1),k={href:"https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/index.htm?file=abendoccomment.htm",target:"_blank",rel:"noopener noreferrer"},w={href:"https://github.com/abapGit/abapGit/blob/40c5cd7212dd7fece00667cab31afc55830a7310/src/zcx_abapgit_exception.clas.abap#L50-L76",target:"_blank",rel:"noopener noreferrer"},v=e("div",{class:"hint-container warning"},[e("p",{class:"hint-container-title"},"Note"),e("p",null,[t("Do not maintain texts for methods and parameters in SE24/SE80 and don't use "),e("code",null,'<p class="shorttext synchronized">'),t(" in ADT. This will lead to errors when checking the class/interface XML file in GitHub.")])],-1),j=e("h4",{id:"variable-prefixing",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#variable-prefixing","aria-hidden":"true"},"#"),t(" Variable Prefixing")],-1),A={href:"https://docs.abapopenchecks.org/checks/69/",target:"_blank",rel:"noopener noreferrer"},G=e("h3",{id:"downport",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#downport","aria-hidden":"true"},"#"),t(" Downport")],-1),S=e("h4",{id:"syntax",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#syntax","aria-hidden":"true"},"#"),t(" Syntax")],-1),I={href:"https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/index.htm?file=abennews-71.htm",target:"_blank",rel:"noopener noreferrer"},T={href:"https://abaplint.org",target:"_blank",rel:"noopener noreferrer"},E=e("h4",{id:"standard-objects",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#standard-objects","aria-hidden":"true"},"#"),t(" Standard Objects")],-1),P=e("p",null,[t("The code must only reference standard SAP objects (classes, interfaces, DDIC types) that exist in version 7.02 and higher. Referencing objects that do "),e("em",null,"not"),t(" exist in 7.02 creates syntax errors and therefore requires using dynamic ABAP. DDIC types that do "),e("em",null,"not"),t(" exist in 7.02 should be replaced by local type definitions.")],-1),C=e("h3",{id:"file-formats",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#file-formats","aria-hidden":"true"},"#"),t(" File Formats")],-1),D={href:"https://github.com/abapGit/abapGit/blob/main/.editorconfig",target:"_blank",rel:"noopener noreferrer"},L={href:"http://GitHub.com",target:"_blank",rel:"noopener noreferrer"},B=e("code",null,"cr",-1),z=e("code",null,"lf",-1),N=e("code",null,"BOM",-1),M=e("code",null,".editorconfig",-1),F={href:"https://editorconfig.org",target:"_blank",rel:"noopener noreferrer"},O={class:"hint-container info"},V=e("p",{class:"hint-container-title"},"Info",-1),R=e("code",null,".editorconfig",-1),U={href:"https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig",target:"_blank",rel:"noopener noreferrer"},q=s('<h3 id="formatting-the-source-code" tabindex="-1"><a class="header-anchor" href="#formatting-the-source-code" aria-hidden="true">#</a> Formatting the Source Code</h3><h4 id="line-width" tabindex="-1"><a class="header-anchor" href="#line-width" aria-hidden="true">#</a> Line Width</h4><p>The maximum width of ABAP source code should be set at 120 characters per line and is checked during linting.</p><h4 id="pretty-printer" tabindex="-1"><a class="header-anchor" href="#pretty-printer" aria-hidden="true">#</a> Pretty Printer</h4>',4),H={href:"https://docs.abapopenchecks.org/checks/06/",target:"_blank",rel:"noopener noreferrer"},Y=e("h3",{id:"dynpros",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#dynpros","aria-hidden":"true"},"#"),t(" Dynpros")],-1),Z=e("p",null,[t("For the user interface, we are moving towards everything in HTML, i.e. new Dynpro screens or the use of Dynpro screens and popups should "),e("em",null,"not"),t(" be added to the source code.")],-1),J=e("h3",{id:"abaplint",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#abaplint","aria-hidden":"true"},"#"),t(" abaplint")],-1),X={href:"https://github.com/abapGit/abapGit/blob/main/abaplint.json",target:"_blank",rel:"noopener noreferrer"},W={class:"hint-container info"},K=e("p",{class:"hint-container-title"},"Info",-1),Q={href:"https://github.com/Marc-Bernard-Tools/ABAP-Lint-Ext-for-abapGit",target:"_blank",rel:"noopener noreferrer"},$=e("h3",{id:"eslint",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#eslint","aria-hidden":"true"},"#"),t(" eslint")],-1),ee={href:"https://github.com/abapGit/abapGit/blob/main/.eslintrc.yaml",target:"_blank",rel:"noopener noreferrer"},te={href:"https://en.wikipedia.org/wiki/ECMAScript_version_history",target:"_blank",rel:"noopener noreferrer"},ne=e("h3",{id:"internationalization-i18n",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#internationalization-i18n","aria-hidden":"true"},"#"),t(" Internationalization (I18N)")],-1),ae=e("p",null,"abapGit supports only the English language. Neither objects nor text literals are translated. Therefore, all objects shall be set to English as the original language, and text literals in the code shall be maintained in English.",-1),oe=e("p",null,[t("Since there's only one language, using the "),e("code",null,"##NO_TEXT"),t(" pragma is not required and will actually lead to lint errors. The exceptions are global class and interface definitions, where the pragmas are added automatically by "),e("code",null,"SE24/SE80"),t(".")],-1);function ie(re,se){const o=i("RouterLink"),a=i("ExternalLinkIcon");return c(),l("div",null,[p,e("p",null,[t("abapGit is merged into a "),n(o,{to:"/user-guide/getting-started/install.html"},{default:r(()=>[t("stand-alone version")]),_:1}),t(". For this reason, the only allowed object types for "),u,t(" repository objects are classes and interfaces. In particular, function groups or modules must "),_,t(" be included.")]),f,e("p",null,[t("The description of objects should begin with "),b,t(" (for example, "),g,t("). For "),n(o,{to:"/development-guide/serializers/overview.html"},{default:r(()=>[t("serializer classes")]),_:1}),t(", the text should contain the "),m,t(" object type and description (for example, "),x,t(").")]),y,e("p",null,[t("To document sub-objects like class methods and parameters, you should use "),e("a",k,[t("ABAP Doc"),n(a)]),t(" comments. You can see an example in "),e("a",w,[t("zcx_abapgit_exception"),n(a)]),t(".")]),v,j,e("p",null,[t("Variables are prefixed using the standard setting in "),e("a",A,[t("abapOpenChecks Naming Conventions"),n(a)])]),G,S,e("p",null,[t("abapGit is targeted for "),e("a",I,[t("version 7.02"),n(a)]),t(" and higher. Therefore, the code must only contain expressions and statements that work on 7.02.")]),e("p",null,[e("a",T,[t("abaplint"),n(a)]),t(" will automatically check every pull request for language syntax that is compatible with 7.02.")]),E,P,C,e("p",null,[t("General file format guidelines are specified in "),e("a",D,[t(".editorconfig"),n(a)]),t(". If you are using abapGit to push files to the repository, these guidelines are followed automatically.")]),e("p",null,[t("If you are editing files outside of SAP GUI or ADT, for example on "),e("a",L,[t("GitHub.com"),n(a)]),t(" or in VS Code, the most common issues are using "),B,t(" instead of "),z,t(" at end of line, missing new line at end of file, and missing "),N,t(" at beginning of XML files. Please ensure that your IDE is setup to follow the "),M,t(" specifications to avoid any issues.")]),e("p",null,[t("For more details, see "),e("a",F,[t("editorconfig.org"),n(a)]),t(".")]),e("div",O,[V,e("p",null,[t("VS Code requires an extension for "),R,t(" which you can find at "),e("a",U,[t("marketplace"),n(a)]),t(".")])]),q,e("p",null,[t("Use pretty-printer, keywords upper case + indentation, "),e("a",H,[t("abapOpenChecks"),n(a)]),t(" can be used for checking this.")]),Y,Z,J,e("p",null,[t("Pull requests must pass all abaplint configured checks before they can be merged. You find the current rules in "),e("a",X,[t("abaplint.json"),n(a)]),t(".")]),e("div",W,[K,e("p",null,[t("You can view abaplint findings directly in abapGit using an "),e("a",Q,[t("extension"),n(a)]),t(".")])]),$,e("p",null,[t("JavaScript is checked using eslint. You can find the rules "),e("a",ee,[t("here"),n(a)]),t(". All JavaScript code has to adhere to ES5 ("),e("a",te,[t("ECMAScript 2009"),n(a)]),t(") to be compatible with the IE-based HTML browser control used in older releases of SAP GUI.")]),ne,ae,oe])}const le=d(h,[["render",ie],["__file","guidelines.html.vue"]]);export{le as default};
