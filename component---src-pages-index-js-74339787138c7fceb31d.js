(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{249:function(e,a,t){"use strict";t.r(a);var n,r=t(8),c=t.n(r),i=(t(274),t(0)),o=t.n(i),s=t(108),l=t.n(s),u=t(266),d=(t(275),t(277)),p=t(255),f=(t(278),t(251),t(279),t(280),t(68),t(281),t(282)),m=t(283),h=[{name:"LinkedIn",icon:m.b,url:"https://www.linkedin.com/in/leerichardson2/"},{name:"Twitter",icon:m.c,url:"https://twitter.com/leerichftw"},{name:"Github",icon:m.a,url:"https://github.com/seaoflee"}],g={small:"@media (max-width: 767px)"},b=((n={socialWrapper:{display:"flex",justifyContent:"space-between",fontSize:"3em",width:"70%",margin:[50,"auto"]},iconWrapper:{cursor:"pointer",color:t(253).a.primary}})[g.small]={socialWrapper:{width:"100%"}},n),y=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).handleSocialClick=function(e){return window.open(e.url,"_blank")},a.getIcons=function(){var e=h.map(function(e){return o.a.createElement("div",{className:""+a.props.classes.iconWrapper,onClick:function(){return a.handleSocialClick(e)},key:"social-"+e.name},o.a.createElement(u.a,{icon:e.icon}))});return e.push(o.a.createElement("a",{className:""+a.props.classes.iconWrapper,href:"mailto:lee@leerichardson.net?subject=Hello%20Lee",key:"social-email"},o.a.createElement(u.a,{icon:f.a}))),e},a}return c()(a,e),a.prototype.render=function(){var e=this.props.classes;return o.a.createElement("div",{className:""+e.socialWrapper},this.getIcons())},a}(i.Component);y.defaultProps={classes:b};var w=l()(b)(y),v=t(254),A={title:{fontWeight:v.a.bold,fontSize:"3em"},text:{fontWeight:v.a.regular,margin:{bottom:"15px"}}},E=function(e){function a(){return e.apply(this,arguments)||this}return c()(a,e),a.prototype.render=function(){var e=this.props.classes,a=function(a){return o.a.createElement("div",{className:""+e.text},a)};return o.a.createElement(p.a,null,o.a.createElement("h1",{className:""+e.title},o.a.createElement(u.a,{icon:d.a}),o.a.createElement("br",null),"Lee",o.a.createElement("br",null),"Richardson"),a("I'm a frontend software engineer who loves coffee, cooking, loud music, learning, & Javascript."),a("Let's connect! I would love to hear from you. You're awesome, BTW."),o.a.createElement(w,null))},a}(i.Component);E.defaultProps={classes:A};a.default=l()(A)(E)},251:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return m}),t.d(a,"StaticQueryContext",function(){return p}),t.d(a,"StaticQuery",function(){return f});var n=t(0),r=t.n(n),c=t(1),i=t.n(c),o=t(250),s=t.n(o);t.d(a,"Link",function(){return s.a}),t.d(a,"withPrefix",function(){return o.withPrefix}),t.d(a,"navigate",function(){return o.navigate}),t.d(a,"push",function(){return o.push}),t.d(a,"replace",function(){return o.replace}),t.d(a,"navigateTo",function(){return o.navigateTo});var l=t(252),u=t.n(l);t.d(a,"PageRenderer",function(){return u.a});var d=t(39);t.d(a,"parsePath",function(){return d.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},252:function(e,a,t){var n;e.exports=(n=t(257))&&n.default||n},253:function(e,a,t){"use strict";a.a={primary:"#0356DD"}},254:function(e,a,t){"use strict";a.a={default:["Poppins","Roboto","Open Sans","sans-serif"],bold:"800",regular:"400"}},255:function(e,a,t){"use strict";var n=t(256),r=t(0),c=t.n(r),i=t(1),o=t.n(i),s=t(261),l=t.n(s),u=t(108),d=t.n(u),p=t(260),f=t(251),m=t(253),h=t(254);t(258);p.a.autoAddCss=!0;var g={app:{fontFamily:h.a.default,fontWeight:h.a.regular,color:m.a.primary,padding:[90,30]}},b=function(e){var a=e.classes,t=e.children;return c.a.createElement(f.StaticQuery,{query:"755544856",render:function(e){return c.a.createElement("div",{className:""+a.app},c.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Personal site for Lee Richardson."},{name:"keywords",content:"personal, developer, frontend, javascript"}]},c.a.createElement("html",{lang:"en"})),c.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:n})};b.propTypes={children:o.a.node.isRequired},a.a=d()(g)(b)},256:function(e){e.exports={data:{site:{siteMetadata:{title:"Lee Richardson"}}}}},257:function(e,a,t){"use strict";t.r(a);t(40);var n=t(0),r=t.n(n),c=t(1),i=t.n(c),o=t(67),s=t(3),l=function(e){var a=e.location,t=s.default.getResourcesForPathnameSync(a.pathname);return r.a.createElement(o.a,Object.assign({location:a,pageResources:t},t.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},a.default=l},258:function(e,a,t){},278:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==",aspectRatio:1,src:"/static/gatsby-astronaut-6d91c86c0fde632ba4cd01062fd9ccfa-045aa.png",srcSet:"/static/gatsby-astronaut-6d91c86c0fde632ba4cd01062fd9ccfa-0552a.png 75w,\n/static/gatsby-astronaut-6d91c86c0fde632ba4cd01062fd9ccfa-fc3be.png 150w,\n/static/gatsby-astronaut-6d91c86c0fde632ba4cd01062fd9ccfa-045aa.png 300w,\n/static/gatsby-astronaut-6d91c86c0fde632ba4cd01062fd9ccfa-24f49.png 450w,\n/static/gatsby-astronaut-6d91c86c0fde632ba4cd01062fd9ccfa-5497d.png 600w,\n/static/gatsby-astronaut-6d91c86c0fde632ba4cd01062fd9ccfa-483e1.png 800w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-74339787138c7fceb31d.js.map