(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{246:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(255);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},251:function(e,t,n){var a;e.exports=(a=n(257))&&a.default||a},252:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(1),o=n.n(i),u=n(250),s=n.n(u);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var c=n(251),d=n.n(c);n.d(t,"PageRenderer",function(){return d.a});var l=n(39);n.d(t,"parsePath",function(){return l.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},253:function(e,t,n){"use strict";t.a={primary:"#0356DD"}},254:function(e,t,n){"use strict";t.a={default:["Poppins","Roboto","Open Sans","sans-serif"],bold:"800",regular:"400"}},255:function(e,t,n){"use strict";var a=n(256),r=n(0),i=n.n(r),o=n(1),u=n.n(o),s=n(260),c=n.n(s),d=n(108),l=n.n(d),p=n(252),f=n(253),m=n(254),h=(n(258),function(e){var t=e.classes,n=e.children;return i.a.createElement(p.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement("div",{className:""+t.app},i.a.createElement(c.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Personal site for Lee Richardson."},{name:"keywords",content:"personal, developer, frontend, javascript"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},n))},data:a})}),y={app:{fontFamily:m.a.default,fontWeight:m.a.regular,color:f.a.primary,padding:[90,30]}};h.propTypes={children:u.a.node.isRequired},t.a=l()(y)(h)},256:function(e){e.exports={data:{site:{siteMetadata:{title:"Lee Richardson"}}}}},257:function(e,t,n){"use strict";n.r(t);n(40);var a=n(0),r=n.n(a),i=n(1),o=n.n(i),u=n(66),s=n(3),c=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},258:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-404-js-83ab51a6b7e1a96ba6d7.js.map