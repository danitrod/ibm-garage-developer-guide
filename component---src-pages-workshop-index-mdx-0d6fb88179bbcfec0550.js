(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{"013z":function(A,e,t){"use strict";var a=t("q1tI"),o=t.n(a),i=t("NmYn"),c=t.n(i),b=t("Wbzz"),n=t("Xrax"),r=t("k4MR"),s=t("TSYQ"),d=t.n(s),l=t("QH2O"),g=t.n(l),p=t("qKvR"),j=function(A){var e,t=A.title,a=A.theme,o=A.tabs,i=void 0===o?[]:o;return Object(p.b)("div",{className:d()(g.a.pageHeader,(e={},e[g.a.withTabs]=i.length,e[g.a.darkMode]="dark"===a,e))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:g.a.text},t)))))},E=t("BAC9"),m=function(A){var e=A.relativePagePath,t=A.repository,a=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,o=t||a,i=o.baseUrl,c=o.subDirectory,n=i+"/edit/"+o.branch+c+"/src/pages"+e;return i?Object(p.b)("div",{className:"bx--row "+E.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:E.link,href:n},"Edit this page on GitHub"))):null},B=t("FCXl"),x=t("9Hrx"),u=t("I8xM"),Q=function(A){function e(){return A.apply(this,arguments)||this}return Object(x.a)(e,A),e.prototype.render=function(){var A=this.props,e=A.tabs,t=A.slug,a=t.split("/").filter(Boolean).slice(-1)[0],o=e.map((function(A){var e,o=c()(A,{lower:!0,strict:!0}),i=o===a,n=new RegExp(a+"/?(#.*)?$"),r=t.replace(n,o);return Object(p.b)("li",{key:A,className:d()((e={},e[u.selectedItem]=i,e),u.listItem)},Object(p.b)(b.Link,{className:u.link,to:""+r},A))}));return Object(p.b)("div",{className:u.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",null,Object(p.b)("ul",{className:u.list},o))))))},e}(o.a.Component),w=t("MjG9"),h=t("CzIb");e.a=function(A){var e=A.pageContext,t=A.children,a=A.location,o=A.Title,i=e.frontmatter,s=void 0===i?{}:i,d=e.relativePagePath,l=e.titleType,g=s.tabs,E=s.title,x=s.theme,u=s.description,N=s.keywords,f=Object(h.a)().interiorTheme,k=Object(b.useStaticQuery)("2456312558").site.pathPrefix,C=k?a.pathname.replace(k,""):a.pathname,O=g?C.split("/").filter(Boolean).slice(-1)[0]||c()(g[0],{lower:!0}):"",y=x||f;return Object(p.b)(r.a,{tabs:g,homepage:!1,theme:y,pageTitle:E,pageDescription:u,pageKeywords:N,titleType:l},Object(p.b)(j,{title:o?Object(p.b)(o,null):E,label:"label",tabs:g,theme:y}),g&&Object(p.b)(Q,{slug:C,tabs:g,currentTab:O}),Object(p.b)(w.a,{padded:!0},t,Object(p.b)(m,{relativePagePath:d})),Object(p.b)(B.a,{pageContext:e,location:a,slug:C,tabs:g,currentTab:O}),Object(p.b)(n.a,null))}},BAC9:function(A,e,t){A.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(A,e,t){A.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(A,e,t){A.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},dtLM:function(A,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return n})),t.d(e,"default",(function(){return E}));var a=t("k1TG"),o=t("8o2o"),i=(t("q1tI"),t("7ljp")),c=t("013z"),b=t("T0C+"),n=(t("qKvR"),{}),r=function(A){return function(e){return console.warn("Component "+A+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}},s=r("PageDescription"),d=r("Row"),l=r("Column"),g=r("ArticleCard"),p={_frontmatter:n},j=c.a;function E(A){var e=A.components,t=Object(o.a)(A,["components"]);return Object(i.b)(j,Object(a.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)(s,{mdxType:"PageDescription"},Object(i.b)("p",null,"The Workshop is design to provide a quick way to try the methodology leveraging the tools that the ",Object(i.b)(b.a,{name:"tinyName",mdxType:"Globals"})," integrates.")),Object(i.b)(d,{mdxType:"Row"},Object(i.b)(l,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(i.b)(g,{color:"dark",title:"Setup Workshop Environment",href:"/workshop/setup",mdxType:"ArticleCard"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.66666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQCAwX/xAAWAQEBAQAAAAAAAAAAAAAAAAACAAH/2gAMAwEAAhADEAAAAVm4UFOGeZf/xAAaEAEBAAIDAAAAAAAAAAAAAAACAQADERIh/9oACAEBAAEFAnVMK4xWK7j7rJU6y3//xAAVEQEBAAAAAAAAAAAAAAAAAAAQEf/aAAgBAwEBPwGH/8QAFREBAQAAAAAAAAAAAAAAAAAAEBH/2gAIAQIBAT8Bp//EABkQAAMAAwAAAAAAAAAAAAAAAAABEQIhMf/aAAgBAQAGPwKN8LjWpwuTjKbQ9H//xAAaEAEAAgMBAAAAAAAAAAAAAAABABEhMUFx/9oACAEBAAE/IZ0CixAo6h7BNDCR1OifZhBKan//2gAMAwEAAgADAAAAEJDv/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQAhMf/aAAgBAwEBPxAT2y//xAAXEQEBAQEAAAAAAAAAAAAAAAABACEx/9oACAECAQE/EEHLb//EABwQAQADAQEAAwAAAAAAAAAAAAEAESExQVFh0f/aAAgBAQABPxBNwpvdf2ZaYDo3b52UoYCXJc6kVz35iJ7dRA19RrkvTW69n//Z')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"workshop",title:"workshop",src:"/static/13a2dc58283b8aa05f67bb89b6bae0b0/2e753/workshop.jpg",srcSet:["/static/13a2dc58283b8aa05f67bb89b6bae0b0/69549/workshop.jpg 288w","/static/13a2dc58283b8aa05f67bb89b6bae0b0/473e3/workshop.jpg 576w","/static/13a2dc58283b8aa05f67bb89b6bae0b0/2e753/workshop.jpg 1152w","/static/13a2dc58283b8aa05f67bb89b6bae0b0/74f4b/workshop.jpg 1728w","/static/13a2dc58283b8aa05f67bb89b6bae0b0/de5bb/workshop.jpg 2304w","/static/13a2dc58283b8aa05f67bb89b6bae0b0/621b7/workshop.jpg 6000w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(i.b)(l,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(i.b)(g,{color:"dark",title:"Deploy an Application using CI Pipelines with Tekton",href:"/workshop/ci",mdxType:"ArticleCard"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.29166666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAAB/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAABWzUBZEf/xAAaEAACAgMAAAAAAAAAAAAAAAAAAwETEBEz/9oACAEBAAEFAlQrVKylYjjj/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAHRAAAgEEAwAAAAAAAAAAAAAAAQIAAxEzkRAScv/aAAgBAQAGPwJFNIElb36zEupjXUTzz//EAB0QAAIABwEAAAAAAAAAAAAAAAABEDFBUaGx4fH/2gAIAQEAAT8hfTCUErnmh88YbUGf/9oADAMBAAIAAwAAABDjz//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAEDAQE/EFf/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAeEAACAQMFAAAAAAAAAAAAAAAAATEQEfBBYXHB0f/aAAgBAQABPxBoQ8yNt1kmLdDbg48hM3RSR//Z')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"ci tekton",title:"ci tekton",src:"/static/2bc0d80116900ec52da0b88a714ce5f3/2e753/ci-tekton.jpg",srcSet:["/static/2bc0d80116900ec52da0b88a714ce5f3/69549/ci-tekton.jpg 288w","/static/2bc0d80116900ec52da0b88a714ce5f3/473e3/ci-tekton.jpg 576w","/static/2bc0d80116900ec52da0b88a714ce5f3/2e753/ci-tekton.jpg 1152w","/static/2bc0d80116900ec52da0b88a714ce5f3/74f4b/ci-tekton.jpg 1728w","/static/2bc0d80116900ec52da0b88a714ce5f3/de5bb/ci-tekton.jpg 2304w","/static/2bc0d80116900ec52da0b88a714ce5f3/c4108/ci-tekton.jpg 2738w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(i.b)(l,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(i.b)(g,{color:"dark",title:"Promote an Application using CD with GitOps and ArgoCD",href:"/workshop/cd",mdxType:"ArticleCard"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"59.02777777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIDBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHXpJ0YUP/EABoQAAICAwAAAAAAAAAAAAAAAAARAgMQMjP/2gAIAQEAAQUCr5sZDTH/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAWEAADAAAAAAAAAAAAAAAAAAACEHH/2gAIAQEABj8CGMY//8QAGxAAAgIDAQAAAAAAAAAAAAAAAAERIRBRgaH/2gAIAQEAAT8hpCnaHRB7PEz/AP/aAAwDAQACAAMAAAAQ6y//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAaEAEBAAMBAQAAAAAAAAAAAAABEQAhYXEQ/9oACAEBAAE/ENohqjwxlSa9wBWPcSnUha8MWtfn/9k=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"cd argocd",title:"cd argocd",src:"/static/499b44442dcde7cceb39fd02d3690c73/2e753/cd-argocd.jpg",srcSet:["/static/499b44442dcde7cceb39fd02d3690c73/69549/cd-argocd.jpg 288w","/static/499b44442dcde7cceb39fd02d3690c73/473e3/cd-argocd.jpg 576w","/static/499b44442dcde7cceb39fd02d3690c73/2e753/cd-argocd.jpg 1152w","/static/499b44442dcde7cceb39fd02d3690c73/74f4b/cd-argocd.jpg 1728w","/static/499b44442dcde7cceb39fd02d3690c73/de5bb/cd-argocd.jpg 2304w","/static/499b44442dcde7cceb39fd02d3690c73/8702a/cd-argocd.jpg 3138w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(i.b)(l,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(i.b)(g,{color:"dark",title:"Deploy a 3 tier Microservice using React, Node.js, and Java",href:"/workshop/inventory",mdxType:"ArticleCard"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"92.0138888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAASABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHtazE2hZQA/8QAFxABAQEBAAAAAAAAAAAAAAAAEBEhQf/aAAgBAQABBQK604f/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAWEAEBAQAAAAAAAAAAAAAAAAARICH/2gAIAQEABj8CIHZ//8QAGxAAAQUBAQAAAAAAAAAAAAAAAAEQETFBYSH/2gAIAQEAAT8hq0pJJnlnJyyv/9oADAMBAAIAAwAAABCkBzz/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/EB//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/EB//xAAdEAACAwACAwAAAAAAAAAAAAABEQAhMUFxEFGR/9oACAEBAAE/EAAIweVGHA+RphkMVDx037LqBoPVcqXU58f/2Q==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"inventory",title:"inventory",src:"/static/7707653b964b019fa6e8d7db848b69e4/2e753/inventory.jpg",srcSet:["/static/7707653b964b019fa6e8d7db848b69e4/69549/inventory.jpg 288w","/static/7707653b964b019fa6e8d7db848b69e4/473e3/inventory.jpg 576w","/static/7707653b964b019fa6e8d7db848b69e4/2e753/inventory.jpg 1152w","/static/7707653b964b019fa6e8d7db848b69e4/74f4b/inventory.jpg 1728w","/static/7707653b964b019fa6e8d7db848b69e4/a4993/inventory.jpg 1872w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))))}E.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-workshop-index-mdx-0d6fb88179bbcfec0550.js.map