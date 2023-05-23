import{_ as o,X as i,Y as n,Z as e,$ as t,a0 as l,a2 as r,H as s}from"./framework-c1ee72d8.js";const c={},u=e("p",null,"Using abapGit and abapGitServer for regular backup.",-1),p=e("div",{class:"hint-container info"},[e("p",{class:"hint-container-title"},"Info"),e("p",null,"Instead of abapGitServer, GitHub or similar can also be used.")],-1),d=e("h2",{id:"steps",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#steps","aria-hidden":"true"},"#"),t(" Steps")],-1),h=e("li",null,[e("p",null,"Install abapGit")],-1),b={href:"https://github.com/larshp/abapGitServer",target:"_blank",rel:"noopener noreferrer"},m=r("<li><p>Create repository in abapGitServer via the web interface</p></li><li><p>Clone the repository using abapGit, into the package that should be backed up. abapGit will not delete any objects in the package</p></li><li><p>Enable write protection</p></li><li><p>Test backup by staging + commit + pushing from abapGit manually</p></li><li><p>Configure &quot;background mode&quot; for the repository, Advanced -&gt; Background mode.</p><ul><li>Set to &quot;Automatic push, auto author&quot; this will find the user which last changed the objects and use these in the commits.</li><li>... or set to &quot;Automatic push, fixed author&quot; this will use the user of the background job</li><li>Enter username and password(note: password will be stored in clear text). If abapGit and abapGitServer runs on the same ABAP server, then no password is required, as it will automatically use logon tickets.</li></ul></li><li><p>On the background mode page: click &quot;Run background logic&quot; to test the setup works</p></li><li><p>Configure ZABAPGIT to run as a background job(SM36/SM37). Note: a dummy variant has to be created for the program, use SE38 to create the variant, values in the variant are not used for anything in background mode.</p></li>",7),_=e("div",{class:"hint-container tip"},[e("p",{class:"hint-container-title"},"Tips"),e("p",null,"To restore only some objects:"),e("ul",null,[e("li",null,"Use Advanced / Reset Local (Force Pull)")]),e("p",null,"(available since April 2021)")],-1);function g(f,k){const a=s("ExternalLinkIcon");return i(),n("div",null,[u,p,d,e("ol",null,[h,e("li",null,[e("p",null,[t("Use abapGit to install "),e("a",b,[t("abapGitServer"),l(a)])])]),m]),_])}const G=o(c,[["render",g],["__file","regular-backup.html.vue"]]);export{G as default};
