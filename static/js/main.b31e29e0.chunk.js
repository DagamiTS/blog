(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{11:function(t,e,a){t.exports={post:"Post_post__2bW5D",text:"Post_text__1df4v",more:"Post_more__1Lzf8",btn:"Post_btn__3NjFp"}},12:function(t,e,a){t.exports={postComp:"ExactPost_postComp__1X420",post:"ExactPost_post__27fRe",text:"ExactPost_text__1UXJC",line:"ExactPost_line__35XMJ",exactBtn:"ExactPost_exactBtn__2bB2Q"}},15:function(t,e,a){t.exports={postComp:"EditPost_postComp__2Y9UD",editPostForm:"EditPost_editPostForm__16FtT",btnBack:"EditPost_btnBack__3Er4T",btn:"EditPost_btn__2EMjV"}},17:function(t,e,a){t.exports={postComp:"AddPost_postComp__3xHIE",addPostForm:"AddPost_addPostForm__1R8JZ",btn:"AddPost_btn__3zCO9"}},21:function(t,e,a){t.exports={newPost:"Posts_newPost__2YPks",posts:"Posts_posts__1kHD-"}},33:function(t,e,a){t.exports={timestamp:"Timestamp_timestamp__3gXgt"}},35:function(t,e,a){t.exports=a.p+"static/media/back.2f02a21a.svg"},36:function(t,e,a){t.exports={btnBack:"ButtonBack_btnBack__svNI0"}},38:function(t,e,a){t.exports=a(67)},43:function(t,e,a){},66:function(t,e,a){},67:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(32),c=a.n(o),l=(a(43),a(37)),s=a(8),i=a(1),m=a(10),u=a.n(m),p=function(t){var e=t.exactPostTitle,a=t.postToEditTitle,o=Object(n.useRef)(null);return r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",{ref:o},e&&e()||a&&a()||"Blog About Space"),r.a.createElement("a",{href:"https://github.com/DagamiTS",target:"_blank",rel:"noopener noreferrer"},"My GitHub Page"))},d=a(7),E=a(33),f=a.n(E),b=function(t){var e=t.timestamp;return r.a.createElement("div",null,r.a.createElement("p",{className:f.a.timestamp},e))},_=a(11),h=a.n(_),v=function(t){var e=t.id,a=t.title,o=t.text,c=t.deletePost,l=t.timestamp,s=Object(n.useRef)(null),i=Object(n.useRef)(null);return Object(n.useEffect)((function(){if(s.current.textContent.length>97){var t=s.current.textContent.substr(0,97)+"...";s.current.textContent=t}}),[s]),Object(n.useEffect)((function(){if(i.current.textContent.length>35){var t=i.current.textContent.substr(0,25)+"...";i.current.textContent=t}}),[i]),r.a.createElement("div",{className:h.a.post},r.a.createElement("h2",{ref:i},a),r.a.createElement(b,{timestamp:l}),r.a.createElement("p",{ref:s,className:h.a.text},o),r.a.createElement(d.b,{to:"/posts/".concat(e),className:h.a.more},"read more",r.a.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"arrow-right",className:"svg-inline--fa fa-arrow-right fa-w-14",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},r.a.createElement("path",{fill:"currentColor",d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"}))),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(d.b,{to:"/edit/".concat(e),className:h.a.btn},"Edit")),r.a.createElement("li",null,r.a.createElement("button",{onClick:function(){return c(e)},className:h.a.btn},"Delete"))))},x=a(21),P=a.n(x),g=function(t){var e,a=t.posts,n=t.deletePost;return a&&(e=a.map((function(t){return r.a.createElement(v,{key:t.id,id:t.id,timestamp:t.timestamp,title:t.data.title,text:t.data.text,deletePost:n})}))),r.a.createElement("main",{className:P.a.posts},r.a.createElement(d.b,{to:"/new",className:P.a.newPost},"Add new post"),e)},N=a(35),O=a.n(N),j=a(36),C=a.n(j),k=function(t){var e=t.className;return r.a.createElement(d.b,{to:"/",className:"".concat(C.a.btnBack," ").concat(e)},r.a.createElement("img",{src:O.a,alt:"arrow-left-icon"}),"Back to blog")},T=a(12),w=a.n(T),B=function(t){var e=t.post;return r.a.createElement("main",{className:w.a.postComp},r.a.createElement(k,{className:w.a.exactBtn}),r.a.createElement("div",{className:w.a.post},r.a.createElement("h2",null,e&&e.data.title),r.a.createElement(b,{timestamp:e&&e.timestamp}),r.a.createElement("span",{className:w.a.line}),r.a.createElement("p",{className:w.a.text},e&&e.data.text)))},S=a(17),A=a.n(S),F=function(t){var e=t.onAddPost,a=Object(n.useState)(""),o=Object(s.a)(a,2),c=o[0],l=o[1],i=Object(n.useState)(""),m=Object(s.a)(i,2),p=m[0],d=m[1];return r.a.createElement("div",{className:A.a.addPostForm},r.a.createElement("label",{htmlFor:"title"},"TITLE"),r.a.createElement("div",null,r.a.createElement("input",{value:c,id:"title",type:"text",onChange:function(t){return l(t.target.value)},placeholder:"Enter post title"})),r.a.createElement("label",{htmlFor:"text"},"TEXT"),r.a.createElement("div",null,r.a.createElement("textarea",{value:p,id:"text",onChange:function(t){return d(t.target.value)},placeholder:"Enter post text"})),r.a.createElement("button",{onClick:function(){if(c&&p){var t=(new Date).toLocaleDateString("ru-RU",{day:"numeric",month:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"});u.a.post("https://api-for-react-blog.herokuapp.com/api/posts",JSON.stringify({data:{title:c,text:p},timestamp:t})).then((function(t){return e(t.data)}))}},className:"btn"},"Add Post"))},y=function(t){var e=t.onAddPost;return r.a.createElement("main",{className:A.a.postComp},r.a.createElement(k,null),r.a.createElement(F,{onAddPost:e}))},L=a(15),D=a.n(L),J=function(t){var e=t.id,a=t.initialTitle,o=t.initialText,c=t.onEditPost,l=Object(n.useState)(""),i=Object(s.a)(l,2),m=i[0],u=i[1],p=Object(n.useState)(""),d=Object(s.a)(p,2),E=d[0],f=d[1];Object(n.useEffect)((function(){a&&o&&(u(a),f(o))}),[a,o]);return r.a.createElement("main",{className:D.a.editPostForm},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:""},"TITLE"),r.a.createElement("div",null,r.a.createElement("input",{name:"title",value:m,onChange:function(t){return u(t.target.value)}}))),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:""},"TEXT"),r.a.createElement("div",null,r.a.createElement("textarea",{name:"text",value:E,onChange:function(t){return f(t.target.value)}}))),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",onClick:function(){m&&E&&c(e,{title:m,text:E})},className:"btn"},"Edit Post"),r.a.createElement("button",{type:"reset",onClick:function(){u(a),f(o)},className:"btn ".concat(D.a.btn)},"Reset")))},R=function(t){var e=t.post,a=t.onEditPost;return r.a.createElement("main",{className:D.a.postComp},r.a.createElement(k,null),r.a.createElement(J,{id:e&&e.id,initialTitle:e&&e.data.title,initialText:e&&e.data.text,onEditPost:a}))};a(66);var X=function(){var t=Object(n.useState)(null),e=Object(s.a)(t,2),a=e[0],o=e[1],c=Object(n.useState)(null),m=Object(s.a)(c,2),d=m[0],E=m[1],f=Object(n.useState)(null),b=Object(s.a)(f,2),_=b[0],h=b[1],v=Object(i.e)(),x=Object(i.f)();return Object(n.useEffect)((function(){u.a.get("https://api-for-react-blog.herokuapp.com/api/posts").then((function(t){return o(t.data)}))}),[]),Object(n.useEffect)((function(){var t=Number(x.pathname.split("posts/")[1]);if(a){var e=a.find((function(e){return e.id===t}));E(e)}}),[x.pathname,a]),Object(n.useEffect)((function(){var t=Number(x.pathname.split("edit/")[1]);if(a){var e=a.find((function(e){return e.id===t}));h(e)}}),[x.pathname,a]),r.a.createElement("div",{className:"App"},r.a.createElement(p,{exactPostTitle:function(){return d&&d.data.title.length>20?d.data.title.substr(0,25)+"...":d?d.data.title:void 0},postToEditTitle:function(){return _&&_.data.title.length>20?_.data.title.substr(0,25)+"...":d?_.data.title:void 0}}),r.a.createElement(i.a,{exact:!0,path:"/"},r.a.createElement(g,{posts:a,deletePost:function(t){var e=a.filter((function(e){return e.id!==t}));o(e),u.a.delete("https://api-for-react-blog.herokuapp.com/api/posts/".concat(t)).catch((function(){return alert("Some error while deleting post")}))}})),r.a.createElement(i.a,{path:"/posts/:id"},r.a.createElement(B,{post:d})),r.a.createElement(i.a,{path:"/new"},r.a.createElement(y,{onAddPost:function(t){var e=[t].concat(Object(l.a)(a));o(e),v.push("/")}})),r.a.createElement(i.a,{path:"/edit/:id"},r.a.createElement(R,{post:_,onEditPost:function(t,e){var n=a.map((function(a){return a.id===t&&(a.data=e),a}));o(n),v.push("/"),u.a.put("https://api-for-react-blog.herokuapp.com/api/posts/".concat(t),JSON.stringify(e)).catch((function(){return alert("Some error while updating post")}))}})))};c.a.render(r.a.createElement(d.a,null,r.a.createElement(X,null)),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.b31e29e0.chunk.js.map