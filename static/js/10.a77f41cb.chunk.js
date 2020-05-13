(this["webpackJsonp@rclone/rclone-webui"]=this["webpackJsonp@rclone/rclone-webui"]||[]).push([[10,20],{324:function(e,a,t){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}t.d(a,"a",(function(){return n}))},330:function(e,a,t){"use strict";var n=t(11),s=t(25),c=t(0),r=t.n(c),l=t(3),o=t.n(l),i=t(28),u=t.n(i),p=t(31),d={tag:p.q,className:o.a.string,cssModule:o.a.object},m=function(e){var a=e.className,t=e.cssModule,c=e.tag,l=Object(s.a)(e,["className","cssModule","tag"]),o=Object(p.m)(u()(a,"input-group-text"),t);return r.a.createElement(c,Object(n.a)({},l,{className:o}))};m.propTypes=d,m.defaultProps={tag:"span"},a.a=m},334:function(e,a,t){"use strict";var n=t(11),s=t(25),c=t(324),r=t(34),l=t(0),o=t.n(l),i=t(3),u=t.n(i),p=t(28),d=t.n(p),m=t(31),b={children:u.a.node,type:u.a.string,size:u.a.string,bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:m.q,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},f=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(c.a)(t)),t.focus=t.focus.bind(Object(c.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,c=e.type,r=e.bsSize,l=e.valid,i=e.invalid,u=e.tag,p=e.addon,b=e.plaintext,f=e.innerRef,g=Object(s.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),h=["radio","checkbox"].indexOf(c)>-1,j=new RegExp("\\D","g"),v=u||("select"===c||"textarea"===c?c:"input"),E="form-control";b?(E+="-plaintext",v=u||"input"):"file"===c?E+="-file":h&&(E=p?null:"form-check-input"),g.size&&j.test(g.size)&&(Object(m.t)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=g.size,delete g.size);var N=Object(m.m)(d()(a,i&&"is-invalid",l&&"is-valid",!!r&&"form-control-"+r,E),t);return("input"===v||u&&"function"===typeof u)&&(g.type=c),g.children&&!b&&"select"!==c&&"string"===typeof v&&"select"!==v&&(Object(m.t)('Input with a type of "'+c+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),o.a.createElement(v,Object(n.a)({},g,{ref:f,className:N}))},a}(o.a.Component);f.propTypes=b,f.defaultProps={type:"text"},a.a=f},337:function(e,a,t){"use strict";var n=t(11),s=t(25),c=t(324),r=t(34),l=t(0),o=t.n(l),i=t(3),u=t.n(i),p=t(28),d=t.n(p),m=t(31),b={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:m.q,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},f=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(c.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],c=e.block,r=e.className,l=e.close,i=e.cssModule,u=e.color,p=e.outline,b=e.size,f=e.tag,g=e.innerRef,h=Object(s.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);l&&"undefined"===typeof h.children&&(h.children=o.a.createElement("span",{"aria-hidden":!0},"\xd7"));var j="btn"+(p?"-outline":"")+"-"+u,v=Object(m.m)(d()(r,{close:l},l||"btn",l||j,!!b&&"btn-"+b,!!c&&"btn-block",{active:a,disabled:this.props.disabled}),i);h.href&&"button"===f&&(f="a");var E=l?"Close":null;return o.a.createElement(f,Object(n.a)({type:"button"===f&&h.onClick?"button":void 0},h,{className:v,ref:g,onClick:this.onClick,"aria-label":t||E}))},a}(o.a.Component);f.propTypes=b,f.defaultProps={color:"secondary",tag:"button"},a.a=f},343:function(e,a,t){"use strict";var n=t(11),s=t(25),c=t(324),r=t(34),l=t(0),o=t.n(l),i=t(3),u=t.n(i),p=t(28),d=t.n(p),m=t(31),b={children:u.a.node,inline:u.a.bool,tag:m.q,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},f=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(c.a)(t)),t.submit=t.submit.bind(Object(c.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,c=e.inline,r=e.tag,l=e.innerRef,i=Object(s.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(m.m)(d()(a,!!c&&"form-inline"),t);return o.a.createElement(r,Object(n.a)({},i,{ref:l,className:u}))},a}(l.Component);f.propTypes=b,f.defaultProps={tag:"form"},a.a=f},359:function(e,a,t){"use strict";var n=t(11),s=t(25),c=t(0),r=t.n(c),l=t(3),o=t.n(l),i=t(28),u=t.n(i),p=t(31),d={tag:p.q,size:o.a.string,className:o.a.string,cssModule:o.a.object},m=function(e){var a=e.className,t=e.cssModule,c=e.tag,l=e.size,o=Object(s.a)(e,["className","cssModule","tag","size"]),i=Object(p.m)(u()(a,"input-group",l?"input-group-"+l:null),t);return r.a.createElement(c,Object(n.a)({},o,{className:i}))};m.propTypes=d,m.defaultProps={tag:"div"},a.a=m},360:function(e,a,t){"use strict";var n=t(11),s=t(25),c=t(0),r=t.n(c),l=t(3),o=t.n(l),i=t(28),u=t.n(i),p=t(31),d=t(330),m={tag:p.q,addonType:o.a.oneOf(["prepend","append"]).isRequired,children:o.a.node,className:o.a.string,cssModule:o.a.object},b=function(e){var a=e.className,t=e.cssModule,c=e.tag,l=e.addonType,o=e.children,i=Object(s.a)(e,["className","cssModule","tag","addonType","children"]),m=Object(p.m)(u()(a,"input-group-"+l),t);return"string"===typeof o?r.a.createElement(c,Object(n.a)({},i,{className:m}),r.a.createElement(d.a,{children:o})):r.a.createElement(c,Object(n.a)({},i,{className:m,children:o}))};b.propTypes=m,b.defaultProps={tag:"div"},a.a=b},384:function(e,a,t){"use strict";var n=t(11),s=t(25),c=t(0),r=t.n(c),l=t(3),o=t.n(l),i=t(28),u=t.n(i),p=t(31),d={tag:p.q,inverse:o.a.bool,color:o.a.string,body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},m=function(e){var a=e.className,t=e.cssModule,c=e.color,l=e.body,o=e.inverse,i=e.outline,d=e.tag,m=e.innerRef,b=Object(s.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),f=Object(p.m)(u()(a,"card",!!o&&"text-white",!!l&&"card-body",!!c&&(i?"border":"bg")+"-"+c),t);return r.a.createElement(d,Object(n.a)({},b,{className:f,ref:m}))};m.propTypes=d,m.defaultProps={tag:"div"},a.a=m},385:function(e,a,t){"use strict";var n=t(11),s=t(25),c=t(0),r=t.n(c),l=t(3),o=t.n(l),i=t(28),u=t.n(i),p=t(31),d={tag:p.q,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},m=function(e){var a=e.className,t=e.cssModule,c=e.innerRef,l=e.tag,o=Object(s.a)(e,["className","cssModule","innerRef","tag"]),i=Object(p.m)(u()(a,"card-body"),t);return r.a.createElement(l,Object(n.a)({},o,{className:i,ref:c}))};m.propTypes=d,m.defaultProps={tag:"div"},a.a=m},462:function(e,a,t){"use strict";var n=t(11),s=t(25),c=t(0),r=t.n(c),l=t(3),o=t.n(l),i=t(28),u=t.n(i),p=t(31),d={tag:p.q,className:o.a.string,cssModule:o.a.object},m=function(e){var a=e.className,t=e.cssModule,c=e.tag,l=Object(s.a)(e,["className","cssModule","tag"]),o=Object(p.m)(u()(a,"card-footer"),t);return r.a.createElement(c,Object(n.a)({},l,{className:o}))};m.propTypes=d,m.defaultProps={tag:"div"},a.a=m},682:function(e,a,t){"use strict";t.r(a);var n=t(32),s=t(33),c=t(69),r=t(68),l=t(70),o=t(0),i=t.n(o),u=t(320),p=t(102),d=t(67),m=t(384),b=t(385),f=t(343),g=t(359),h=t(360),j=t(330),v=t(334),E=t(337),N=t(462),O=function(e){function a(){return Object(n.a)(this,a),Object(c.a)(this,Object(r.a)(a).apply(this,arguments))}return Object(l.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"app flex-row align-items-center"},i.a.createElement(u.a,null,i.a.createElement(p.a,{className:"justify-content-center"},i.a.createElement(d.a,{md:"9",lg:"7",xl:"6"},i.a.createElement(m.a,{className:"mx-4"},i.a.createElement(b.a,{className:"p-4"},i.a.createElement(f.a,null,i.a.createElement("h1",null,"Register"),i.a.createElement("p",{className:"text-muted"},"Create your account"),i.a.createElement(g.a,{className:"mb-3"},i.a.createElement(h.a,{addonType:"prepend"},i.a.createElement(j.a,null,i.a.createElement("i",{className:"icon-user"}))),i.a.createElement(v.a,{type:"text",placeholder:"Username",autoComplete:"username"})),i.a.createElement(g.a,{className:"mb-3"},i.a.createElement(h.a,{addonType:"prepend"},i.a.createElement(j.a,null,"@")),i.a.createElement(v.a,{type:"text",placeholder:"Email",autoComplete:"email"})),i.a.createElement(g.a,{className:"mb-3"},i.a.createElement(h.a,{addonType:"prepend"},i.a.createElement(j.a,null,i.a.createElement("i",{className:"icon-lock"}))),i.a.createElement(v.a,{type:"password",placeholder:"Password",autoComplete:"new-password"})),i.a.createElement(g.a,{className:"mb-4"},i.a.createElement(h.a,{addonType:"prepend"},i.a.createElement(j.a,null,i.a.createElement("i",{className:"icon-lock"}))),i.a.createElement(v.a,{type:"password",placeholder:"Repeat password",autoComplete:"new-password"})),i.a.createElement(E.a,{color:"success",block:!0},"Create Account"))),i.a.createElement(N.a,{className:"p-4"},i.a.createElement(p.a,null,i.a.createElement(d.a,{xs:"12",sm:"6"},i.a.createElement(E.a,{className:"btn-facebook mb-1",block:!0},i.a.createElement("span",null,"facebook"))),i.a.createElement(d.a,{xs:"12",sm:"6"},i.a.createElement(E.a,{className:"btn-twitter mb-1",block:!0},i.a.createElement("span",null,"twitter"))))))))))}}]),a}(o.Component);a.default=O}}]);
//# sourceMappingURL=10.a77f41cb.chunk.js.map