(this["webpackJsonp@rclone/rclone-webui"]=this["webpackJsonp@rclone/rclone-webui"]||[]).push([[12,20],{324:function(e,a,t){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}t.d(a,"a",(function(){return n}))},330:function(e,a,t){"use strict";var n=t(11),s=t(25),c=t(0),o=t.n(c),i=t(3),r=t.n(i),l=t(28),u=t.n(l),p=t(31),d={tag:p.q,className:r.a.string,cssModule:r.a.object},f=function(e){var a=e.className,t=e.cssModule,c=e.tag,i=Object(s.a)(e,["className","cssModule","tag"]),r=Object(p.m)(u()(a,"input-group-text"),t);return o.a.createElement(c,Object(n.a)({},i,{className:r}))};f.propTypes=d,f.defaultProps={tag:"span"},a.a=f},334:function(e,a,t){"use strict";var n=t(11),s=t(25),c=t(324),o=t(34),i=t(0),r=t.n(i),l=t(3),u=t.n(l),p=t(28),d=t.n(p),f=t(31),b={children:u.a.node,type:u.a.string,size:u.a.string,bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:f.q,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},m=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(c.a)(t)),t.focus=t.focus.bind(Object(c.a)(t)),t}Object(o.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,c=e.type,o=e.bsSize,i=e.valid,l=e.invalid,u=e.tag,p=e.addon,b=e.plaintext,m=e.innerRef,h=Object(s.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),g=["radio","checkbox"].indexOf(c)>-1,v=new RegExp("\\D","g"),j=u||("select"===c||"textarea"===c?c:"input"),y="form-control";b?(y+="-plaintext",j=u||"input"):"file"===c?y+="-file":g&&(y=p?null:"form-check-input"),h.size&&v.test(h.size)&&(Object(f.t)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),o=h.size,delete h.size);var O=Object(f.m)(d()(a,l&&"is-invalid",i&&"is-valid",!!o&&"form-control-"+o,y),t);return("input"===j||u&&"function"===typeof u)&&(h.type=c),h.children&&!b&&"select"!==c&&"string"===typeof j&&"select"!==j&&(Object(f.t)('Input with a type of "'+c+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),r.a.createElement(j,Object(n.a)({},h,{ref:m,className:O}))},a}(r.a.Component);m.propTypes=b,m.defaultProps={type:"text"},a.a=m},337:function(e,a,t){"use strict";var n=t(11),s=t(25),c=t(324),o=t(34),i=t(0),r=t.n(i),l=t(3),u=t.n(l),p=t(28),d=t.n(p),f=t(31),b={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:f.q,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},m=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(c.a)(t)),t}Object(o.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],c=e.block,o=e.className,i=e.close,l=e.cssModule,u=e.color,p=e.outline,b=e.size,m=e.tag,h=e.innerRef,g=Object(s.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);i&&"undefined"===typeof g.children&&(g.children=r.a.createElement("span",{"aria-hidden":!0},"\xd7"));var v="btn"+(p?"-outline":"")+"-"+u,j=Object(f.m)(d()(o,{close:i},i||"btn",i||v,!!b&&"btn-"+b,!!c&&"btn-block",{active:a,disabled:this.props.disabled}),l);g.href&&"button"===m&&(m="a");var y=i?"Close":null;return r.a.createElement(m,Object(n.a)({type:"button"===m&&g.onClick?"button":void 0},g,{className:j,ref:h,onClick:this.onClick,"aria-label":t||y}))},a}(r.a.Component);m.propTypes=b,m.defaultProps={color:"secondary",tag:"button"},a.a=m},359:function(e,a,t){"use strict";var n=t(11),s=t(25),c=t(0),o=t.n(c),i=t(3),r=t.n(i),l=t(28),u=t.n(l),p=t(31),d={tag:p.q,size:r.a.string,className:r.a.string,cssModule:r.a.object},f=function(e){var a=e.className,t=e.cssModule,c=e.tag,i=e.size,r=Object(s.a)(e,["className","cssModule","tag","size"]),l=Object(p.m)(u()(a,"input-group",i?"input-group-"+i:null),t);return o.a.createElement(c,Object(n.a)({},r,{className:l}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},360:function(e,a,t){"use strict";var n=t(11),s=t(25),c=t(0),o=t.n(c),i=t(3),r=t.n(i),l=t(28),u=t.n(l),p=t(31),d=t(330),f={tag:p.q,addonType:r.a.oneOf(["prepend","append"]).isRequired,children:r.a.node,className:r.a.string,cssModule:r.a.object},b=function(e){var a=e.className,t=e.cssModule,c=e.tag,i=e.addonType,r=e.children,l=Object(s.a)(e,["className","cssModule","tag","addonType","children"]),f=Object(p.m)(u()(a,"input-group-"+i),t);return"string"===typeof r?o.a.createElement(c,Object(n.a)({},l,{className:f}),o.a.createElement(d.a,{children:r})):o.a.createElement(c,Object(n.a)({},l,{className:f,children:r}))};b.propTypes=f,b.defaultProps={tag:"div"},a.a=b},683:function(e,a,t){"use strict";t.r(a);var n=t(32),s=t(33),c=t(69),o=t(68),i=t(70),r=t(0),l=t.n(r),u=t(320),p=t(102),d=t(67),f=t(359),b=t(360),m=t(330),h=t(334),g=t(337),v=function(e){function a(){return Object(n.a)(this,a),Object(c.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"app flex-row align-items-center"},l.a.createElement(u.a,null,l.a.createElement(p.a,{className:"justify-content-center"},l.a.createElement(d.a,{md:"6"},l.a.createElement("div",{className:"clearfix"},l.a.createElement("h1",{className:"float-left display-3 mr-4"},"404"),l.a.createElement("h4",{className:"pt-3"},"Oops! You're lost."),l.a.createElement("p",{className:"text-muted float-left"},"The page you are looking for was not found.")),l.a.createElement(f.a,{className:"input-prepend"},l.a.createElement(b.a,{addonType:"prepend"},l.a.createElement(m.a,null,l.a.createElement("i",{className:"fa fa-search"}))),l.a.createElement(h.a,{size:"16",type:"text",placeholder:"What are you looking for?"}),l.a.createElement(b.a,{addonType:"append"},l.a.createElement(g.a,{color:"info"},"Search")))))))}}]),a}(r.Component);a.default=v}}]);
//# sourceMappingURL=12.fc0a54eb.chunk.js.map