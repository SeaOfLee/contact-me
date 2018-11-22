(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{251:function(e,t,a){"use strict";a.r(t);a(274);var n,r=a(8),o=a.n(r),i=a(0),c=a.n(i),l=a(108),s=a.n(l),u=a(264),p=(a(276),a(277)),d=a(256),m=a(254),f=a(257),h=(a(278),a(279),a(66),a(280)),g=a(281),v=[{name:"LinkedIn",icon:g.b,url:"https://www.linkedin.com/in/leerichardson2/"},{name:"Twitter",icon:g.c,url:"https://twitter.com/leerichftw"},{name:"Github",icon:g.a,url:"https://github.com/seaoflee"}],y={small:"@media (max-width: 767px)"},w=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).handleSocialClick=function(e){return window.open(e.url,"_blank")},t.getIcons=function(){var e=t.props.activeColor,a=v.map(function(e){return c.a.createElement("div",{className:""+t.props.classes.iconWrapper,onClick:function(){return t.handleSocialClick(e)},key:"social-"+e.name},c.a.createElement(u.a,{icon:e.icon}))});return a.push(c.a.createElement("a",{className:""+t.props.classes.iconWrapper,href:"mailto:lee@leerichardson.net?subject=Hello%20Lee",key:"social-email"},c.a.createElement(u.a,{icon:h.a,color:e}))),a},t}return o()(t,e),t.prototype.render=function(){var e=this.props.classes;return c.a.createElement("div",{className:""+e.socialWrapper},this.getIcons())},t}(i.Component),b=((n={socialWrapper:{display:"flex",justifyContent:"space-between",fontSize:"3em",width:"70%",margin:[50,"auto"]},iconWrapper:{cursor:"pointer",display:"block"}})[y.small]={socialWrapper:{width:"100%"}},n);w.defaultProps={classes:b};var C=s()(b)(w),k=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.classes,n=t.activeColor,r=[m.a.primary,m.a.purple,m.a.redSox,m.a.green];return c.a.createElement("div",{className:""+a.colorWrapper},r.map(function(t){return c.a.createElement("div",{className:a.colorTile+" "+(n===t?a.active:""),style:{backgroundColor:t},onClick:function(){return e.props.onColorClick(t)},key:t})}))},t}(i.Component),x={colorWrapper:{height:"30px",position:"absolute",top:"10px",right:"10px",textAlign:"center"},colorTile:{display:"inline-block",height:"30px",width:"30px",borderRadius:"4px",marginRight:"4px",cursor:"pointer"},active:{border:"3px solid black"}};k.defaultProps={classes:x,onColorClick:function(){}};var E=s()(x)(k),R=function(e){function t(){var t;return(t=e.call(this)||this).handleColorClick=function(e){t.setState({activeColor:e})},t.state={activeColor:m.a.primary},t}return o()(t,e),t.prototype.render=function(){var e=this.props.classes,t={color:this.state.activeColor},a=function(t){return c.a.createElement("div",{className:""+e.text},t)};return c.a.createElement(f.a,null,c.a.createElement(E,{onColorClick:this.handleColorClick,activeColor:this.state.activeColor}),c.a.createElement("div",{style:t},c.a.createElement("h1",{className:""+e.title},c.a.createElement(u.a,{icon:p.a}),c.a.createElement("br",null),"Lee",c.a.createElement("br",null),"Richardson"),a("I'm a frontend software engineer who loves coffee, cooking, loud music, learning, & Javascript."),a("Let's connect! I would love to hear from you. You're awesome, BTW."),c.a.createElement(C,{activeColor:this.state.activeColor})))},t}(i.Component),S={title:{fontWeight:d.a.bold,fontSize:"3em"},text:{fontWeight:d.a.regular,margin:{bottom:"15px"}}};R.defaultProps={classes:S};t.default=s()(S)(R)},253:function(e,t,a){var n;e.exports=(n=a(259))&&n.default||n},254:function(e,t,a){"use strict";t.a={primary:"#0356DD",lightGray:"#FAFAFA",redSox:"#BD3039",purple:"#660198",green:"#2E8B57"}},255:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),o=a(1),i=a.n(o),c=a(252),l=a.n(c);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var s=a(253),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var p=a(40);a.d(t,"parsePath",function(){return p.a});var d=r.a.createContext({}),m=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},256:function(e,t,a){"use strict";t.a={default:["Poppins","Roboto","Open Sans","sans-serif"],bold:"800",regular:"400"}},257:function(e,t,a){"use strict";var n=a(258),r=a(0),o=a.n(r),i=a(1),c=a.n(i),l=a(261),s=a.n(l),u=a(108),p=a.n(u),d=a(255),m=(a(254),a(256)),f=(a(260),function(e){var t=e.classes,a=e.children;return o.a.createElement(d.StaticQuery,{query:"755544856",render:function(e){return o.a.createElement("div",{className:""+t.app},o.a.createElement(s.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Personal site for Lee Richardson."},{name:"keywords",content:"personal, developer, frontend, javascript"}]},o.a.createElement("html",{lang:"en"})),o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},a))},data:n})}),h={app:{fontFamily:m.a.default,fontWeight:m.a.regular,padding:[90,30]}};f.propTypes={children:c.a.node.isRequired},t.a=p()(h)(f)},258:function(e){e.exports={data:{site:{siteMetadata:{title:"Lee Richardson"}}}}},259:function(e,t,a){"use strict";a.r(t);a(41);var n=a(0),r=a.n(n),o=a(1),i=a.n(o),c=a(67),l=a(3),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},260:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-js-c6e070c008479f933cbf.js.map