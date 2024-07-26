import{_ as n}from"./settings-global-4-55a3929b.js";import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as l,c,a as e,b as t,d as i,e as o}from"./app-ce3e2aa9.js";const p="/img/settings-personal-4.png",d="/img/settings-personal-5.png",h="/img/adt1.png",u="/img/adt2.png",g="/img/settings-personal-3.png",m={},f=o('<p>Personal settings in abapGit are valid only for the logged on user. You can maintain the<br> settings from the repository list or repository view by selecting &quot;Global Settings&quot; &gt; &quot;Personal&quot;.</p><p><img src="'+n+'" alt="abapGit" loading="lazy"><br><img src="'+p+'" alt="abapGit" loading="lazy"></p><p>Note: Personal settings are relevant to all of your repositories.</p><figure><img src="'+d+'" alt="abapGit" tabindex="0" loading="lazy"><figcaption>abapGit</figcaption></figure><h2 id="startup" tabindex="-1"><a class="header-anchor" href="#startup" aria-hidden="true">#</a> Startup</h2><p>If you turn on &quot;Show Last Opened Repository&quot;, abapGit will jump directly to the repository that you worked on last.</p><h2 id="user-interface" tabindex="-1"><a class="header-anchor" href="#user-interface" aria-hidden="true">#</a> User Interface</h2><p>You can switch the <strong>Theme</strong> for abapGit between several choices: Default, Dark, and Belize. Alternatively, you can select &quot;Synced with SAP GUI&quot; to use the same theme you are using for SAP GUI (availability depends on SAP GUI release).</p><p>The size of icons can be influenced using <strong>Icon scaling</strong>. If automatic detection does not work properly, you can pick a better size with the other settings.</p>',9),b=e("thead",null,[e("tr",null,[e("th",null,"Setting"),e("th",null,"Description")])],-1),y=e("td",null,"Automatic",-1),_={href:"https://doc.qt.io/qt-5/highdpi.html",target:"_blank",rel:"noopener noreferrer"},v=e("tr",null,[e("td",null,"Small"),e("td",null,"abapGit will force the icons to remain small even if an HDPI display is detected")],-1),w=e("tr",null,[e("td",null,"Large"),e("td",null,"abapGit will force the icons to double in size")],-1),G=o('<p><strong>List Size</strong> defines the maximum number of items shown in a list. If there are more items, then abapGit start paging.</p><p><strong>Repo Label Colors</strong> allows you to customize colors of organization labels use on repository list and view. The format of the configuration is: <code>&quot;label1:color,label2:color&quot;</code>. <code>Color</code> param accepts either a predefined css-style name or RGB color spec in format of <code>#&lt;foreground&gt;/&lt;background&gt;</code> e.g. <code>#3040ff/ff8a80</code>. See more (in particular, CSS style list) in &quot;?&quot; hint box.</p><h2 id="interaction" tabindex="-1"><a class="header-anchor" href="#interaction" aria-hidden="true">#</a> Interaction</h2><p>Typically, when objects are changed, the system will display a popup to confirm the activation of objects. This gives the change to address syntax errors, for example.<br> If you want objects to be activated automatically, select <strong>Activate Objects Without Popup</strong>. If there are syntax errors, abapGit will indicate this with an icon next to the objects in the repository view.</p><p>If you are using ABAP Development Tools (ADT) in Eclipse, we recommend to turn on <strong>Enable Jump to ABAP Development Tools</strong>. Clicking on objects names in abapGit will then<br> open the object in ADT (if available). Please ensure that ADT Link Handling is enabled in eclipse preferecenes.<br><img src="'+h+'" alt="eclipse - ABAP development" loading="lazy"><br><img src="'+u+'" alt="adt link handler" loading="lazy"></p>',5),x=e("strong",null,"Enable Vimium-like Link Hints",-1),k=e("strong",null,"Key to Activate Link Hints",-1),z={href:"https://vimium.github.io/",target:"_blank",rel:"noopener noreferrer"},A=o('<figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="system-resources" tabindex="-1"><a class="header-anchor" href="#system-resources" aria-hidden="true">#</a> System Resources</h2><h3 id="standalone-version" tabindex="-1"><a class="header-anchor" href="#standalone-version" aria-hidden="true">#</a> Standalone Version</h3><p>The standalone version does not support any parallel processing. Objects of a repository are serialized sequentially.</p><h3 id="developer-version" tabindex="-1"><a class="header-anchor" href="#developer-version" aria-hidden="true">#</a> Developer Version</h3><p><strong>Disable parallel processing</strong></p><p>The developer version of abapGit will try to use parallel processing to serialize objects of a repository. As a prerequisite, logon group <code>parallel_generators</code> (lower case) must be configured in transaction <code>RZ12</code>. If sufficient system resources are available, abapGit will use multiple threads to serialize objects.</p><div class="hint-container note"><p class="hint-container-title">Note</p><p>You can disable parallel processing with this setting. Use this setting in case you need to debug a serializer class.</p></div>',8);function I(q,S){const a=r("ExternalLinkIcon");return l(),c("div",null,[f,e("table",null,[b,e("tbody",null,[e("tr",null,[y,e("td",null,[t("abapGit determines if a high-resolution display is present ("),e("a",_,[t("High DPI displays"),i(a)]),t(", which would make icons appear too small compared to text. abapGit will then double the size of icons.")])]),v,w])]),G,e("p",null,[x,t(" and "),k,t(" provide a feature similarly to the "),e("a",z,[t("Vimium browser"),i(a)]),t('. After pressing the activation key (default "t"), abapGit will uses a clever highlighting method to navigate using links.')]),A])}const j=s(m,[["render",I],["__file","settings-personal.html.vue"]]);export{j as default};
