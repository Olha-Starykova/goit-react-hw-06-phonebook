(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{31:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(6),o=n.n(c),i=n(9),s=n(7),u=n(8),l=n(11),d=n(10),b=n(3),m=n.n(b),h=n(16),j=(n(31),n(4)),f="contacts/add",p="contacts/delete",O=function(e,t){return{type:f,payload:{id:m.a.generate(),name:e,number:t}}},v=n(1),g=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={name:"",number:""},e.nameInputId=m.a.generate(),e.numberInputId=m.a.generate(),e.hendelChange=function(t){var n=t.target,r=n.name,a=n.value;e.setState(Object(h.a)({},r,a))},e.hendelSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.name,e.state.number),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(v.jsxs)("form",{className:"form",onSubmit:this.hendelSubmit,children:[Object(v.jsxs)("label",{htmlFor:this.nameInputId,children:["Name ",Object(v.jsx)("input",{type:"text",value:this.state.name,name:"name",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,id:this.nameInputId,onChange:this.hendelChange})]}),Object(v.jsxs)("label",{htmlFor:this.numberInputId,children:["Number ",Object(v.jsx)("input",{type:"tel",value:this.state.number,name:"number",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",id:this.numberInputId,onChange:this.hendelChange,required:!0})]}),Object(v.jsx)("button",{className:"button",type:"submit",children:"Add contacts"})]})}}]),n}(r.Component),x=Object(j.b)(null,(function(e){return{onSubmit:function(t,n){return e(O(t,n))}}}))(g),y=(n(39),Object(j.b)((function(e){return{contacts:e.contacts.contacts}}),(function(e){return{onDeleteTodo:function(){return null}}}))((function(e){var t=e.contacts,n=e.onDeleteTodo;return Object(v.jsx)("ul",{className:"TodoList",children:t.map((function(e){var t=e.id,r=e.name,a=e.number;return Object(v.jsxs)("li",{className:"TodoList__item",children:[Object(v.jsxs)("p",{className:"TodoList__text",children:[r,": ",a]}),Object(v.jsx)("button",{onClick:function(){return n(t)},children:"Delete"})]},t)}))})}))),C=(n(40),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.addTodo=function(t,n){if(e.state.contacts.map((function(e){return e.name})).includes(t))alert("".concat(t," is already in contacts"));else{var r={id:m.a.generate(),name:t,number:n};e.setState((function(e){return{contacts:[].concat(Object(i.a)(e.contacts),[r])}}))}},e.formSubmitHandler=function(e){console.log(e)},e.changeFilter=function(t){e.setState({filter:t.currentTarget.value})},e.getVisibleTodos=function(){var t=e.state,n=t.filter,r=t.contacts,a=n.toLowerCase();return r.filter((function(e){return e.name.toLowerCase().includes(a)}))},e}return Object(u.a)(n,[{key:"render",value:function(){this.state.filter,this.getVisibleTodos();return Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{children:"Phonebook"}),Object(v.jsx)(x,{}),Object(v.jsx)("h2",{children:"Contacts"}),Object(v.jsx)(y,{})]})}}]),n}(r.Component)),I=n(2),S=n(18),T=Object(I.combineReducers)({contacts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case f:return[].concat(Object(i.a)(e),[r]);case p:return e.filter((function(e){return e.id!==r}));default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e}}),w=Object(I.combineReducers)({contacts:T}),k=Object(I.createStore)(w,Object(S.composeWithDevTools)());console.log(k),o.a.render(Object(v.jsxs)(a.a.StrictMode,{children:[Object(v.jsx)(j.a,{store:k,children:Object(v.jsx)(C,{})}),";"]}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.8fc5d856.chunk.js.map