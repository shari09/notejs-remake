(this["webpackJsonpnotejs-extension"]=this["webpackJsonpnotejs-extension"]||[]).push([[0],{13:function(e,t,a){e.exports=a(23)},23:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),s=a.n(o),c=a(5),l=a(6),u=a.n(l),i=a(25),p=a(26);function d(e,t){return new Promise((function(a,n){var r;return u.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,u.a.awrap(fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}));case 3:r=o.sent,a(r.json()),o.next=11;break;case 7:o.prev=7,o.t0=o.catch(0),console.log("post err: "+o.t0.message),n(o.t0);case 11:case"end":return o.stop()}}),null,null,[[0,7]])}))}var m=function(e){var t=Object(n.useState)(""),a=Object(c.a)(t,2),o=a[0],s=a[1],l=Object(n.useState)(""),m=Object(c.a)(l,2),g=m[0],v=m[1],f=Object(n.useState)(""),b=Object(c.a)(f,2),E=b[0],h=b[1],w=Object(n.useState)(""),y=Object(c.a)(w,2),j=y[0],O=y[1];return r.a.createElement("div",{id:"signUp"},r.a.createElement(i.a,{onSubmit:function(t){var a;return u.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),a={email:o,username:g,password:E,passwordConf:j},n.next=4,u.a.awrap(d("https://".concat("192.168.1.37",":").concat("3000","/signUp"),a));case 4:"success"===n.sent.state&&e.setLoggedIn(!0);case 6:case"end":return n.stop()}}))}},r.a.createElement(i.a.Group,{controlId:"email"},r.a.createElement(i.a.Label,null,"Email address"),r.a.createElement(i.a.Control,{type:"email",placeholder:"Enter email",value:o,onChange:function(e){return s(e.target.value)},required:!0,autoFocus:!0}),r.a.createElement(i.a.Text,null,"Some random text here")),r.a.createElement(i.a.Group,{controlId:"username"},r.a.createElement(i.a.Label,null,"Username"),r.a.createElement(i.a.Control,{type:"text",placeholder:"username",value:g,onChange:function(e){return v(e.target.value)},required:!0})),r.a.createElement(i.a.Group,{controlId:"password"},r.a.createElement(i.a.Label,null,"Password"),r.a.createElement(i.a.Control,{type:"password",placeholder:"password",value:E,onChange:function(e){return h(e.target.value)},required:!0})),r.a.createElement(i.a.Group,{controlId:"passwordConf"},r.a.createElement(i.a.Label,null,"Confirm password"),r.a.createElement(i.a.Control,{type:"password",placeholder:"Confirm password",value:j,onChange:function(e){return O(e.target.value)},required:!0})),r.a.createElement(p.a,{variant:"primary",type:"submit",disabled:!(o.length>0&&E.length>=6&&E===j)},"Sign Up")))};function g(e,t){return new Promise((function(a,n){var r;return u.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,u.a.awrap(fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}));case 3:r=o.sent,a(r.json()),o.next=11;break;case 7:o.prev=7,o.t0=o.catch(0),console.log("post err: "+o.t0.message),n(o.t0);case 11:case"end":return o.stop()}}),null,null,[[0,7]])}))}var v=function(e){var t=Object(n.useState)(""),a=Object(c.a)(t,2),o=a[0],s=a[1],l=Object(n.useState)(""),d=Object(c.a)(l,2),m=d[0],v=d[1],f=Object(n.useState)(!1),b=Object(c.a)(f,2),E=b[0],h=b[1];return r.a.createElement("div",{id:"login"},r.a.createElement(i.a,{noValidate:!0,validated:E,onSubmit:function(t){var a,n;return u.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t.preventDefault(),a={username:o,password:m},r.next=4,u.a.awrap(g("https://".concat("192.168.1.37",":").concat("3000","/login"),a));case 4:"success"===(n=r.sent).state?(e.setLoggedIn(!0),h(!0)):"Incorrect password"===n.state||"User not found"===n.state?(s(""),v(""),h(!1)):(console.log("error: "+n.state),h(!1));case 6:case"end":return r.stop()}}))}},r.a.createElement(i.a.Group,{controlId:"username"},r.a.createElement(i.a.Label,null,"Username"),r.a.createElement(i.a.Control,{type:"text",placeholder:"username",autoFocus:!0,value:o,onChange:function(e){return s(e.target.value)},required:!0}),r.a.createElement(i.a.Control.Feedback,{type:"invalid"},"Incorrect username or password.")),r.a.createElement(i.a.Group,{controlId:"password"},r.a.createElement(i.a.Label,null,"Password"),r.a.createElement(i.a.Control,{type:"password",placeholder:"password",value:m,onChange:function(e){return v(e.target.value)},required:!0})),r.a.createElement(p.a,{variant:"primary",type:"submit"},"Log in")))},f={container:{textAlign:"center"},button:{borderRadius:"0px"}},b=function(e){return r.a.createElement("div",{id:"prompt",style:f.container},r.a.createElement(p.a,{variant:"outline-dark",size:"sm",style:f.button,onClick:function(){return e.setPage("signUp")}},"Sign up"),r.a.createElement(p.a,{variant:"outline-dark",size:"sm",style:f.button,onClick:function(){return e.setPage("login")}},"Login"))},E=a(24),h={textAlign:"center"},w=function(e){return r.a.createElement(E.a,{fluid:!0,style:h},r.a.createElement("h1",null,"Logged In!"))},y=function(e){var t=Object(n.useState)("signUp"),a=Object(c.a)(t,2),o=a[0],s=a[1],l=Object(n.useState)(!1),u=Object(c.a)(l,2),i=u[0],p=u[1];return i?r.a.createElement(w,null):r.a.createElement("div",null,r.a.createElement(b,{setPage:s}),"signUp"===o&&r.a.createElement(m,{setLoggedIn:p}),"login"===o&&r.a.createElement(v,{setLoggedIn:p}))},j=document.getElementById("root");s.a.render(r.a.createElement(y,null),j)}},[[13,1,2]]]);
//# sourceMappingURL=main.ecfe7b68.chunk.js.map