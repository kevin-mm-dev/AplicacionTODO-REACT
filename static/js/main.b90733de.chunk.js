(this["webpackJsonptodo-machine"]=this["webpackJsonptodo-machine"]||[]).push([[0],{23:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),o=n(8),i=n.n(o),r=(n(23),n(7)),s=n(4);var l=n(1),u=a.a.createContext(),d=function(e){var t=a.a.useState(""),n=Object(s.a)(t,2),c=n[0],o=n[1],i=function(e,t){var n=a.a.useState(!0),c=Object(s.a)(n,2),o=c[0],i=c[1],r=a.a.useState(!1),l=Object(s.a)(r,2),u=l[0],d=l[1],m=a.a.useState(t),j=Object(s.a)(m,2),f=j[0],b=j[1];return a.a.useEffect((function(){try{setTimeout((function(){var n,c=localStorage.getItem(e);c?n=JSON.parse(c):(localStorage.setItem(e,JSON.stringify(t)),n=t),b(n),i(!1)}),500)}catch(n){d(n),i(!1)}}),[]),{item:f,saveItem:function(t){try{var n=JSON.stringify(t);localStorage.setItem(e,n),b(t),i(!1)}catch(c){d(c),i(!1)}},loading:o,error:u}}("TODOS_V1",[]),d=i.item,m=i.saveItem,j=i.loading,f=i.error,b=a.a.useState(!1),O=Object(s.a)(b,2),h=O[0],x=O[1],p=a.a.useState("Active"),v=Object(s.a)(p,2),g=v[0],C=v[1],N=d.filter((function(e){return!!e.completed})).length,T=d.length,_=function(e){return"All"===e?d.filter((function(e){return e.text.toLowerCase().includes(c.toLowerCase())})):"Active"===e?d.filter((function(e){return!1===e.completed})).filter((function(e){return e.text.toLowerCase().includes(c.toLowerCase())})):"Completed"===e?d.filter((function(e){return!0===e.completed})).filter((function(e){return e.text.toLowerCase().includes(c.toLowerCase())})):null},S=_("All"),k=_("Active"),A=_("Completed");return Object(l.jsx)(u.Provider,{value:{loading:j,error:f,totalTodos:T,stateFilter:g,setStateFilter:C,completedTodos:N,searchValue:c,setSearchValue:o,completeTodo:function(e){var t=d.findIndex((function(t){return t.text===e})),n=Object(r.a)(d);n[t].completed=!n[t].completed,m(n)},addTodo:function(e){var t=Object(r.a)(d);t.push({completed:!1,eliminated:!1,text:e}),m(t),C("Active")},setEliminatedTodo:function(e){var t=d.findIndex((function(t){return t.text===e})),n=Object(r.a)(d);n[t].eliminated=!0,m(n)},deleteTodo:function(e){var t=d.findIndex((function(t){return t.text===e})),n=Object(r.a)(d);n[t].eliminated=!0,n.splice(t,1),m(n)},openModal:h,setOpenModal:x,getFilter:_,filterTodos:S,filterActive:k,filterCompleted:A},children:e.children})},m=n(5),j=n.p+"static/media/circle.dcd3eff1.svg",f=n.p+"static/media/dele.3ef1c6cb.svg",b=n.p+"static/media/cheque.baf3a965.svg";n(25);function O(e){var t="circle",n="cheque animate__animated animate__jello animate__fast",c="",a="task";e.completed?(t="showOff",n="cheque animate__animated animate__jello animate__fast",c="line-through"):(n=" showOff",t="circle"),e.eliminated&&(a+="  animate__animated animate__backOutDown animate__fast");return Object(l.jsxs)("li",{className:a,children:[Object(l.jsx)("img",{alt:"circle",onClick:e.onComplete,className:t,src:j}),Object(l.jsx)("img",{alt:"cheque",onClick:e.onComplete,className:n,src:b}),Object(l.jsx)("div",{className:"divP",children:Object(l.jsx)("p",{className:c,children:e.text})}),Object(l.jsx)("div",{className:"divDele",children:Object(l.jsx)("img",{alt:"delete",onClick:function(){e.setEliminatedTodo(),setTimeout((function(){e.onDelete()}),300)},className:"dele",src:f})})]})}var h=n.p+"static/media/coronas.8b0be7d8.svg";n(26);function x(){var e=a.a.useContext(u),t=e.totalTodos,n=e.completedTodos;return Object(l.jsxs)("div",{className:"TodoCounter",children:[Object(l.jsx)("img",{alt:"logo",className:"logo",src:h}),Object(l.jsx)("h1",{className:"title",children:"What\xb4s Up"}),Object(l.jsxs)("p",{className:"sub_title",children:["Completed  ",Object(l.jsx)("b",{children:n})," /",t," TODOs"]})]})}n(27);function p(e){return Object(l.jsx)("section",{className:"sectionList",children:Object(l.jsx)("div",{className:"TodoList",children:Object(l.jsx)("ul",{children:e.children})})})}n(28);function v(){var e=a.a.useContext(u).setSearchValue;return Object(l.jsx)("div",{className:"TodoSearch",children:Object(l.jsx)("input",{className:"input_search",placeholder:"Search",onChange:function(t){e(t.target.value)}})})}n(29);function g(e){var t="CreateTodoButton ToClose";return t=e.openModal?"CreateTodoButton ToClose":"CreateTodoButton ToOpen",Object(l.jsx)("button",{className:t,onClick:function(){e.setOpenModal((function(e){return!e}))},children:"+"})}n(30);function C(e){var t=e.children;return i.a.createPortal(Object(l.jsx)("div",{className:"ModalBackground",children:t}),document.getElementById("modal"))}var N=n.p+"static/media/alfiler.93bfa521.svg";n(31);function T(){var e=a.a.useState(""),t=Object(s.a)(e,2),n=t[0],c=t[1],o=["Eat cookies","Bathe my cat","Buy  food  to  my  doggy","Paint my house","Draw something","Turn off the light","Flush the toilet","Breathe"],i=a.a.useContext(u),r=i.addTodo,d=i.setOpenModal;return Object(l.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),""!==n&&(r(n),d(!1))},children:[Object(l.jsxs)("div",{className:"header_modal",children:[Object(l.jsx)("label",{className:"title_modal",children:"New task"}),Object(l.jsx)("img",{className:"img_pin",alt:"img_pin",src:N})]}),Object(l.jsx)("textarea",{className:"text",value:n,onChange:function(e){c(e.target.value)},placeholder:o[Math.floor(Math.random()*o.length)]}),Object(l.jsxs)("div",{className:"div_btns",children:[Object(l.jsx)("button",{type:"button",className:"btn btn_cancel",onClick:function(){d(!1)},children:"Cancel"}),Object(l.jsx)("button",{className:"btn btn_save",type:"submit",children:"Save"})]})]})}var _=n(14),S=function(){return Object(l.jsx)(_.CircleToBlockLoading,{color:"#fdbf00"})},k=(n(72),function(e){var t=e.setStateFilter,n=e.stateFilter,a=Object(c.useRef)(),o=Object(c.useRef)(),i=Object(c.useRef)();Object(c.useEffect)((function(){setTimeout((function(){o.current.click()}),500)}),[]),"Active"===n&&setTimeout((function(){o.current.click()}),200);var r=function(e){a.current.removeAttribute("active"),o.current.removeAttribute("active"),i.current.removeAttribute("active"),e.target.setAttribute("active","page"),t(e.target.getAttribute("filter"))};return Object(l.jsx)("nav",{className:"menu-nav",children:Object(l.jsxs)("ul",{className:"menu-ul",children:[Object(l.jsx)("li",{className:"option-menu",ref:a,filter:"All",onClick:r,children:"All"}),Object(l.jsx)("li",{className:"option-menu",ref:o,filter:"Active",onClick:r,children:"Active"}),Object(l.jsx)("li",{className:"option-menu",ref:i,filter:"Completed",onClick:r,children:"Completed"})]})})});function A(){var e=a.a.useContext(u),t=e.error,n=e.loading,c=e.completeTodo,o=e.deleteTodo,i=e.openModal,r=e.setOpenModal,s=e.setEliminatedTodo,d=e.filterTodos,j=e.filterActive,f=e.filterCompleted,b=e.stateFilter,h=e.setStateFilter;return Object(l.jsxs)(a.a.Fragment,{children:[Object(l.jsx)(x,{}),Object(l.jsx)(k,{setStateFilter:h,stateFilter:b}),Object(l.jsx)(v,{}),Object(l.jsxs)(p,{children:[t&&Object(l.jsx)("p",{className:"txt_instruction",children:"Ups! Hubo un error con la carga"}),n&&Object(l.jsx)(S,{}),"Active"===b?0!==j.length||n?j.map((function(e,t){return Object(l.jsx)(O,Object(m.a)(Object(m.a)({},e),{},{setEliminatedTodo:function(){return s(e.text)},onComplete:function(){return c(e.text)},onDelete:function(){return o(e.text)}}),t)})):Object(l.jsx)("p",{className:"txt_instruction",children:"Ready, start your taks list!!!"}):"All"===b?0!==d.length||n?d.map((function(e,t){return Object(l.jsx)(O,Object(m.a)(Object(m.a)({},e),{},{setEliminatedTodo:function(){return s(e.text)},onComplete:function(){return c(e.text)},onDelete:function(){return o(e.text)}}),t)})):Object(l.jsx)("p",{className:"txt_instruction",children:"Ready, start your taks list!!!"}):0!==f.length||n?f.map((function(e,t){return Object(l.jsx)(O,Object(m.a)(Object(m.a)({},e),{},{setEliminatedTodo:function(){return s(e.text)},onComplete:function(){return c(e.text)},onDelete:function(){return o(e.text)}}),t)})):Object(l.jsx)("p",{className:"txt_instruction",children:"You haven't finished any task yet:("})]}),!!i&&Object(l.jsx)(C,{children:Object(l.jsx)(T,{})}),Object(l.jsx)(g,{setOpenModal:r,openModal:i})]})}var y=function(){return Object(l.jsx)(d,{children:Object(l.jsx)(A,{})})};i.a.render(Object(l.jsx)(y,{}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.b90733de.chunk.js.map