import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as s,c as r,a as e,b as t,d as n,w as c}from"./app-946ea121.js";const d={},_=e("p",null,"abapGit uses SIL and MIT-licensed fonts, they are included in the distribution as a MIME object. This includes MIME objects:",-1),h=e("ul",null,[e("li",null,[e("code",null,"ZABAPGIT_ICON_FONT"),t(" - font in WOFF format containing the custom icon set. WOFF is used due to compatibility, SAP GUI for Windows reusing Internet Explorer control (IE 11)")]),e("li",null,[e("code",null,"ZABAPGIT_ICON_FONT_CSS"),t(" - CSS icon map")])],-1),p=e("p",null,"To add an icon to the icon set follow the next procedure:",-1),u={href:"https://github.com/abapGit/icon-font",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/abapGit/icon-font/blob/main/README.md",target:"_blank",rel:"noopener noreferrer"},m=e("li",null,"Get the new abapGit font and icon files from the icon-font GitHub action",-1),b=e("li",null,[t("Go to transaction "),e("code",null,"SMW0"),t(" and display the abapGit MIME objects (Binary > Package $abapgit)")],-1),I=e("li",null,[t("Upload the new font file to "),e("code",null,"ZABAPGIT_ICON_FONT")],-1),g=e("li",null,[t("Upload the new CSS file to "),e("code",null,"ZABAPGIT_ICON_FONT_CSS")],-1),G={href:"https://github.com/abapGit/abapGit",target:"_blank",rel:"noopener noreferrer"},S=e("p",null,[t("Please "),e("strong",null,"mind the licensing"),t(" when adding icons that are not from Font Awesome.")],-1),A={class:"hint-container info"},T=e("p",{class:"hint-container-title"},"Info",-1),k={href:"https://github.com/sbcgua/abap_w3mi_poller",target:"_blank",rel:"noopener noreferrer"};function w(C,N){const o=i("ExternalLinkIcon"),a=i("RouterLink");return s(),r("div",null,[_,h,p,e("ol",null,[e("li",null,[t("Add the icon to repo "),e("a",u,[t("abapGit Icon Font"),n(o)]),t(" as documented "),e("a",f,[t("here"),n(o)])]),m,b,I,g,e("li",null,[t("Start abapGit and commit the changes the "),e("a",G,[t("abapGit/abapGit"),n(o)]),t(" repo (preferably in a separate commit)")])]),S,e("div",A,[T,e("p",null,[t("Alternatively you can use "),e("a",k,[t("w3mipoller"),n(o)]),t(" for the upload step. See also "),n(a,{to:"/development-guide/user-interface/developing-ui-css.html"},{default:c(()=>[t("UI - CSS and assets")]),_:1}),t(".")])])])}const O=l(d,[["render",w],["__file","adding-icons.html.vue"]]);export{O as default};