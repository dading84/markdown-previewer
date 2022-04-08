(this["webpackJsonpmarkdown-previewer"]=this["webpackJsonpmarkdown-previewer"]||[]).push([[0],{20:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var r=n(2),i=n.n(r),o=n(14),a=n.n(o),s=(n(20),n(3)),c=n(4),d=n(7),l=n(6),h=n(5),m=n(9),u=n(13),b=n(12),j=n(1),x=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this)).state={maximized:!1},r.handleMaximize=r.handleMaximize.bind(Object(d.a)(r)),r}return Object(c.a)(n,[{key:"handleMaximize",value:function(){this.setState((function(e){return{maximized:!e.maximized}}))}},{key:"render",value:function(){return Object(j.jsxs)("div",{id:this.props.desc+"-container",className:this.state.maximized?"maximized":"",children:[Object(j.jsxs)("div",{className:"title-bar",children:[Object(j.jsx)(b.a,{icon:this.props.icon,color:"#fff"})," ",this.props.text,Object(j.jsx)("span",{className:"window-icon",onClick:this.handleMaximize,children:Object(j.jsx)(b.a,{icon:this.state.maximized?u.b:u.a,color:"#000",size:"sm"})})]}),this.props.children]})}}]),n}(i.a.Component),f=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(j.jsx)(x,{desc:"editor",icon:m.b,text:"Editor",children:Object(j.jsx)("textarea",{id:"editor",onChange:this.props.handleEditorChange,value:this.props.markdown})})}}]),n}(i.a.Component),p=f,O=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(j.jsx)(x,{desc:"preview",icon:m.a,text:"Preview",children:Object(j.jsx)("div",{id:"preview",dangerouslySetInnerHTML:{__html:this.props.markdown}})})}}]),n}(i.a.Component),w=O,k=new(n(15).a)({breaks:!0}),v=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).state={markdown:"# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n\nfor (let i = 0; i < cars.length; i++) {\n  text += cars[i] + \"<br>\";\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n\nLots more text\n\nLots more text\n\nLots more text\n\nLots more text\n\nLots more text\n\nLots more text\n\nLots more text\n\nLots more text\n\nLots more text\n\nLots more text\n\nLots more text\n\nLots more text\n\nLots more text\n\nLots more text\n\nLots more text\n\nLots more text\n\n"},r.handleEditorChange=r.handleEditorChange.bind(Object(d.a)(r)),r}return Object(c.a)(n,[{key:"handleEditorChange",value:function(e){this.setState({markdown:e.target.value})}},{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{id:"page-title",children:"Markdown Previewer"}),Object(j.jsx)("p",{id:"tag-line",children:"Enter Markdown in the editor to convert to HTML"}),Object(j.jsxs)("div",{id:"container",children:[Object(j.jsx)(p,{handleEditorChange:this.handleEditorChange,markdown:this.state.markdown}),Object(j.jsx)(w,{markdown:k.render(this.state.markdown)})]})]})}}]),n}(i.a.Component);a.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.974b8b75.chunk.js.map