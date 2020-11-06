(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("NmYn"),b=a.n(l),i=a("Wbzz"),o=a("Xrax"),c=a("k4MR"),s=a("TSYQ"),p=a.n(s),d=a("QH2O"),m=a.n(d),O=a("qKvR"),j=function(e){var t,a=e.title,n=e.theme,r=e.tabs,l=void 0===r?[]:r;return Object(O.b)("div",{className:p()(m.a.pageHeader,(t={},t[m.a.withTabs]=l.length,t[m.a.darkMode]="dark"===n,t))},Object(O.b)("div",{className:"bx--grid"},Object(O.b)("div",{className:"bx--row"},Object(O.b)("div",{className:"bx--col-lg-12"},Object(O.b)("h1",{id:"page-title",className:m.a.text},a)))))},u=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,l=r.baseUrl,b=r.subDirectory,o=l+"/edit/"+r.branch+b+"/src/pages"+t;return l?Object(O.b)("div",{className:"bx--row "+u.row},Object(O.b)("div",{className:"bx--col"},Object(O.b)("a",{className:u.link,href:o},"Edit this page on GitHub"))):null},h=a("FCXl"),N=a("9Hrx"),f=a("I8xM"),C=function(e){function t(){return e.apply(this,arguments)||this}return Object(N.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=b()(e,{lower:!0,strict:!0}),l=r===n,o=new RegExp(n+"/?(#.*)?$"),c=a.replace(o,r);return Object(O.b)("li",{key:e,className:p()((t={},t[f.selectedItem]=l,t),f.listItem)},Object(O.b)(i.Link,{className:f.link,to:""+c},e))}));return Object(O.b)("div",{className:f.tabsContainer},Object(O.b)("div",{className:"bx--grid"},Object(O.b)("div",{className:"bx--row"},Object(O.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(O.b)("nav",null,Object(O.b)("ul",{className:f.list},r))))))},t}(r.a.Component),T=a("MjG9"),y=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,l=t.frontmatter,s=void 0===l?{}:l,p=t.relativePagePath,d=t.titleType,m=s.tabs,u=s.title,N=s.theme,f=s.description,v=s.keywords,x=Object(y.a)().interiorTheme,w=Object(i.useStaticQuery)("2456312558").site.pathPrefix,k=w?n.pathname.replace(w,""):n.pathname,I=m?k.split("/").filter(Boolean).slice(-1)[0]||b()(m[0],{lower:!0}):"",P=N||x;return Object(O.b)(c.a,{tabs:m,homepage:!1,theme:P,pageTitle:u,pageDescription:f,pageKeywords:v,titleType:d},Object(O.b)(j,{title:r?Object(O.b)(r,null):u,label:"label",tabs:m,theme:P}),m&&Object(O.b)(C,{slug:k,tabs:m,currentTab:I}),Object(O.b)(T.a,{padded:!0},a,Object(O.b)(g,{relativePagePath:p})),Object(O.b)(h.a,{pageContext:t,location:n,slug:k,tabs:m,currentTab:I}),Object(O.b)(o.a,null))}},"2l3c":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return O}));var n=a("k1TG"),r=a("8o2o"),l=(a("q1tI"),a("7ljp")),b=a("013z"),i=a("T0C+"),o=(a("qKvR"),{}),c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",t)}},s=c("PageDescription"),p=c("InlineNotification"),d={_frontmatter:o},m=b.a;function O(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)(m,Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)(s,{mdxType:"PageDescription"},Object(l.b)("p",null,"One of the features of the IBM Cloud Catalog is support for private catalog tiles. These can\ncontain custom Terraform definitions that can accelerate SRE teams in the execution of common\nand repetitive tasks. The ",Object(l.b)(i.a,{name:"shortName",mdxType:"Globals"})," tools installation can be configured as\na private catalog tile. This is the recommended approach for using this asset multiple times.\nThis asset enables the easy transition of a default cluster into a cluster that supports\nCloud-Native CI/CD development tools.")),Object(l.b)(p,{kind:"warning",mdxType:"InlineNotification"},"This installation method will only work on IBM Cloud. Use Iteration Zero for others."),Object(l.b)("h3",null,"A. Create the catalog"),Object(l.b)("br",null),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Log in to the ",Object(l.b)(i.a,{name:"ic",mdxType:"Globals"})," Console"),Object(l.b)("li",{parentName:"ol"},"Click ",Object(l.b)("strong",{parentName:"li"},"Manage->Catalogs")," from the top menu"),Object(l.b)("li",{parentName:"ol"},"Click on ",Object(l.b)("strong",{parentName:"li"},"Create Catalog")),Object(l.b)("li",{parentName:"ol"},"In the ",Object(l.b)("inlineCode",{parentName:"li"},"Create a catalog")," dialog, provide the following values:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"name:")," the name of the catalog, for example ",Object(l.b)("inlineCode",{parentName:"li"},"Team Catalog")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"description:")," (optional) a brief description of the purpose of the catalog"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"products:")," select ",Object(l.b)("strong",{parentName:"li"},"Start with no products")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"resource group:")," click ",Object(l.b)("strong",{parentName:"li"},"Update")," to change the default resource group for the catalog"))),Object(l.b)("li",{parentName:"ol"},"Click ",Object(l.b)("strong",{parentName:"li"},"Create")," to complete the catalog creation")),Object(l.b)("h3",null,"B. Register the ",Object(l.b)(i.a,{name:"shortName",mdxType:"Globals"})," tiles in the catalog"),Object(l.b)("br",null),Object(l.b)(p,{mdxType:"InlineNotification"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Note:")," The following instructions depend on the ",Object(l.b)("inlineCode",{parentName:"p"},"jq")," command. The information for installing\n",Object(l.b)("inlineCode",{parentName:"p"},"jq")," can be found on the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/getting-started/prereqs"}),Object(l.b)(i.a,{name:"shortName",mdxType:"Globals"})," prerequisites")," page")),Object(l.b)("br",null),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Download ",Object(l.b)("inlineCode",{parentName:"p"},"create-catalog-offering.sh")," from the ",Object(l.b)("a",{href:"https://github.com/ibm-garage-cloud/ibm-garage-iteration-zero/releases/latest",target:"_blank"},"latest Iteration Zero release")," and make the file executable"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"LATEST_RELEASE=$(curl -sL https://api.github.com/repos/ibm-garage-cloud/ibm-garage-iteration-zero/releases/latest | jq -r '.tag_name')\ncurl -OL \"https://github.com/ibm-garage-cloud/ibm-garage-iteration-zero/releases/download/${LATEST_RELEASE}/create-catalog-offering.sh\"\nchmod +x create-catalog-offering.sh\n"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Run the ",Object(l.b)("inlineCode",{parentName:"p"},"create-catalog-offering.sh")," scripts passing in the API Key and the name of the catalog that you created"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),'./create-catalog-offering.sh {API_KEY} "Team Catalog"\n')))),Object(l.b)("h3",null,"C. Apply the tile"),Object(l.b)("br",null),Object(l.b)("p",null,"Once the tile has been installed it can be used repeatedly to set up clusters with\nthe CNCF tools. Each time the tile is applied, a set of configuration variables are\nrequired."),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Log in to the ",Object(l.b)(i.a,{name:"ic",mdxType:"Globals"})," Console.")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Select ",Object(l.b)("strong",{parentName:"p"},"Catalog")," from the top menu.")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"From the side menu, select your catalog from the drop-down list (e.g. ",Object(l.b)("inlineCode",{parentName:"p"},"Team Catalog"),"). (",Object(l.b)("strong",{parentName:"p"},"IBM Cloud catalog")," should be selected initially.)")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Click ",Object(l.b)("strong",{parentName:"p"},"Private")," on the side menu to see the private catalog entries")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Click on the ",Object(l.b)("strong",{parentName:"p"},"Cloud-Native Toolkit")," tile")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Enter values for the variables list provided."),Object(l.b)("table",{parentName:"li"},Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"th"},"Variable")),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"th"},"Description")),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"th"},"eg. Value")))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"ibmcloud_api_key")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The API key from IBM Cloud Console that has ClusterAdmin access and supports service creation"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"{guid API key from Console}"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"resource_group_name")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Existing resource group in the account where the cluster has been created"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"dev-team-one"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"region")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The region where the cluster has been provisioned"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"us-east"),", ",Object(l.b)("inlineCode",{parentName:"td"},"eu-gb"),", etc")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"cluster_exists")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Flag indicating if the cluster already exists. (",Object(l.b)("inlineCode",{parentName:"td"},"false")," means the cluster should be provisioned)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"true")," or ",Object(l.b)("inlineCode",{parentName:"td"},"false"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"vpc_cluster")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Flag indicating that the cluster has been built on VPC infrastructure"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"true")," or ",Object(l.b)("inlineCode",{parentName:"td"},"false"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"vpc_zone_names")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A comma-separated list of the VPC zones that should be used for worker nodes. This value is requored if ",Object(l.b)("inlineCode",{parentName:"td"},"cluster_exists")," is set to ",Object(l.b)("inlineCode",{parentName:"td"},"false")," and ",Object(l.b)("inlineCode",{parentName:"td"},"vpc_cluster")," is set to ",Object(l.b)("inlineCode",{parentName:"td"},"true")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"us-south-1")," or ",Object(l.b)("inlineCode",{parentName:"td"},"us-east-1,us-east-2"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"cluster_name")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The name of the cluster (If ",Object(l.b)("inlineCode",{parentName:"td"},"cluster_exists")," is set to ",Object(l.b)("inlineCode",{parentName:"td"},"true")," then this name should match an existing cluster)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"dev-team-one-iks-117-vpc"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"cluster_type")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The type of cluster into which the toolkit will be installed"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"kubernetes"),", ",Object(l.b)("inlineCode",{parentName:"td"},"ocp3"),", ",Object(l.b)("inlineCode",{parentName:"td"},"ocp4")," or ",Object(l.b)("inlineCode",{parentName:"td"},"ocp44"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"registry_namespace")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The namespace that should be used in the IBM Container Registry. If not provided the value will default to the resource group name"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"dev-team-one-registry-2020"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"provision_logdna")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Flag indicating that a new instance of LogDNA should be provisioned"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"true")," or ",Object(l.b)("inlineCode",{parentName:"td"},"false"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"logdna_name")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The name of the LogDNA instance (If ",Object(l.b)("inlineCode",{parentName:"td"},"provision_logdna")," is set to ",Object(l.b)("inlineCode",{parentName:"td"},"false")," this value is used by the scripts to bind the existing LogDNA instance to the cluster)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"cntk-showcase-logdna"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"provision_sysdig")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Flag indicating that a new instance of Sysdig should be provisioned"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"true")," or ",Object(l.b)("inlineCode",{parentName:"td"},"false"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"sysdig_name")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The name of the Sysdig instance (If ",Object(l.b)("inlineCode",{parentName:"td"},"provision_sysdig")," is set to ",Object(l.b)("inlineCode",{parentName:"td"},"false")," this value is used by the scripts to bind the existing Sysdig instance to the cluster)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"cntk-showcase-sysdig"))))),Object(l.b)(p,{mdxType:"InlineNotification"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"Note:")," Provisioning a new cluster using classic infrastructure is not supported with the tile install. In this case\nyou are recommended to either create the cluster using the ",Object(l.b)(i.a,{name:"ic",mdxType:"Globals"})," Console then use the tile\nto install the Toolkit ",Object(l.b)("strong",{parentName:"p"},"OR")," to install with one of the other methods.")))),Object(l.b)("br",null),Object(l.b)("ol",{start:7},Object(l.b)("li",{parentName:"ol"},"Check the box to accept the ",Object(l.b)("strong",{parentName:"li"},"Apache 2")," license for the tile."),Object(l.b)("li",{parentName:"ol"},"Click ",Object(l.b)("strong",{parentName:"li"},"Install")," to start the install process")),Object(l.b)("p",null,"This will kick off the installation of the ",Object(l.b)(i.a,{name:"shortName",mdxType:"Globals"})," using an\nIBM Cloud Private Catalog Tile. The progress can be reviewed from the\n",Object(l.b)("strong",{parentName:"p"},"Schematics")," entry"),Object(l.b)("h2",null,"Post-installation steps"),Object(l.b)("p",null,"Once the Terraform has completed, walk through the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/getting-started-day-0/post-installation"}),"post installation steps")," to\nexplore and verify the environment."),Object(l.b)("h2",null,"Troubleshooting"),Object(l.b)("p",null,"If you find that the Terraform provisioning has failed, for Private Catalog delete the workspace and for Iteration Zero  try re-running the ",Object(l.b)("inlineCode",{parentName:"p"},"runTerraform.sh")," script again.\nThe state will be saved and Terraform will try and apply the configuration to match the desired end state."),Object(l.b)("p",null,"If you find that some of the services have failed to create in the time allocated, try the following with Iteration zero:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Manually delete the service instances in your resource group"),Object(l.b)("li",{parentName:"ol"},"Re-run the ",Object(l.b)("inlineCode",{parentName:"li"},"runTerraform.sh")," script with the ",Object(l.b)("inlineCode",{parentName:"li"},"--delete")," argument to clean up the state",Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"./runTerraform.sh --delete\n")))))}O.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-getting-started-day-0-install-toolkit-private-catalog-mdx-1461e7f07a9347941d6f.js.map