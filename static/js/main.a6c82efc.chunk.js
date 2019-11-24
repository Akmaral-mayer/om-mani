(this["webpackJsonpreactive-todo"]=this["webpackJsonpreactive-todo"]||[]).push([[0],{19:function(e,t,o){e.exports=o(43)},24:function(e,t,o){},25:function(e,t,o){},43:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),i=o(13),r=o.n(i),l=(o(24),o(14)),c=o(15),d=o(17),s=o(16),u=o(18),m=(o(25),function(e){return a.a.createElement("div",null,e.remaining," items left")}),f=o(2),p=function(e){return a.a.createElement("div",null,a.a.createElement("div",{key:e.todo.id,className:"todo-item"},a.a.createElement("div",{className:"todo-item-left"},a.a.createElement("input",{type:"checkbox",onChange:function(t){return e.checkTodo(e.todo,e.index,t)}}),!e.todo.editing&&a.a.createElement("div",{className:f({"todo-item-label":!0,completed:e.todo.completed}),onDoubleClick:function(t){return e.editTodo(e.todo,e.index,t)}},e.todo.title),e.todo.editing&&a.a.createElement("input",{type:"text",autoFocus:!0,className:"editTodo",defaultValue:e.todo.title,onBlur:function(t){return e.doneEdit(e.todo,e.index,t)},onKeyUp:function(t){"Enter"===t.key?e.doneEdit(e.todo,e.index,t):"Escape"===t.key&&e.cancelEdit(e.todo,e.index,t)}})),a.a.createElement("div",{className:"remove-item",onClick:function(t){return e.deleteTodo(e.index)}},"x")))},h=function(e){return a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement("label",null,a.a.createElement("input",{type:"checkbox",checked:!e.anyRemaining(),onChange:e.checkAllTodos}),"Check All")))},E=function(e){return a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){return e.updateFilter("all")},className:f({active:"all"===e.filter})},"All"),a.a.createElement("button",{onClick:function(){return e.updateFilter("active")},className:f({active:"active"===e.filter})},"Active"),a.a.createElement("button",{onClick:function(){return e.updateFilter("completed")},className:f({active:"completed"===e.filter})},"Completed"))},v=function(e){return a.a.createElement("div",null,a.a.createElement("button",{onClick:e.clearCompleted},"Clear Completed"))},g=o(3),k=o.n(g);k.a.defaults.baseURL="https://jsonplaceholder.typicode.com/todos";var C=function(e){function t(){var e,o;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(o=Object(d.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(i)))).todoInput=a.a.createRef(),o.state={filter:"all",beforeEditCash:"",idForTodo:9,todos:[]},o.addTodo=function(e){if("Enter"===e.key){var t=o.todoInput.current.value;if(0===t.trim().length)return;k.a.post("https://jsonplaceholder.typicode.com/todos",{title:t,completed:!1}).then((function(e){console.log("POST req answer is "+e.status)})),o.setState((function(e,o){var n=e.todos,a=e.idForTodo+1;return n.unshift({id:a,title:t,completed:!1,editing:!1}),{todos:n,idForTodo:a}})),o.todoInput.current.value=""}},o.deleteTodo=function(e){o.setState((function(t,o){var n=t.todos;return n.splice(e,1),{todos:n}}))},o.checkTodo=function(e,t,n){o.setState((function(o,n){var a=o.todos;return e.completed=!e.completed,a.splice(t,1,e),{todos:a}}))},o.editTodo=function(e,t,n){o.setState((function(o,n){var a=o.todos;return e.editing=!0,a.splice(t,1,e),{todos:a,beforeEditCash:e.title}}))},o.doneEdit=function(e,t,n){n.persist(),o.setState((function(o,a){var i=o.todos;return e.editing=!1,0===n.target.value.trim().length?e.title=o.beforeEditCash:e.title=n.target.value,i.splice(t,1,e),{todos:i}}))},o.cancelEdit=function(e,t,n){n.persist(),o.setState((function(o,n){var a=o.todos;return e.title=o.beforeEditCash,e.editing=!1,a.splice(t,1,e),{todos:a}}))},o.remaining=function(){return o.state.todos.filter((function(e){return!e.completed})).length},o.anyRemaining=function(){return 0!==o.remaining()},o.todosCompletedCount=function(){return o.state.todos.filter((function(e){return e.completed})).length},o.clearCompleted=function(){o.setState((function(e,t){return{todos:e.todos.filter((function(e){return!e.completed}))}}))},o.updateFilter=function(e){o.setState({filter:e})},o.todosFiltered=function(){return"all"===o.state.filter?o.state.todos:"active"===o.state.filter?o.state.todos.filter((function(e){return!e.completed})):"completed"===o.state.filter?o.state.todos.filter((function(e){return e.completed})):o.state.todos},o.checkAllTodos=function(e){e.persist(),o.setState((function(t,o){var n=t.todos;return n.forEach((function(t){return t.completed=e.target.checked})),{todos:n}}))},o.retrieveTodos=function(){console.log("working")},o}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;k.a.get("https://jsonplaceholder.typicode.com/todos").then((function(t){var o=t.data.filter((function(e){return e.id<9}));console.log(o),e.setState({todos:o}),console.log("GET req answer is "+t.status)}))}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Let's Do It"),a.a.createElement("div",{className:"mainBlock"},a.a.createElement("input",{type:"text",className:"todo-input",placeholder:"Gonna do",ref:this.todoInput,onKeyUp:this.addTodo}),a.a.createElement("br",null),this.todosFiltered().map((function(t,o){return a.a.createElement(p,{key:t.id,todo:t,index:o,checkTodo:e.checkTodo,doneEdit:e.doneEdit,cancelEdit:e.cancelEdit,deleteTodo:e.deleteTodo,editTodo:e.editTodo})})),a.a.createElement("br",null),a.a.createElement("div",{className:"extra-container"},a.a.createElement(h,{anyRemaining:this.anyRemaining,checkAllTodos:this.checkAllTodos}),a.a.createElement(m,{remaining:this.remaining()})),a.a.createElement("br",null),a.a.createElement("div",{className:"extra-container"},a.a.createElement("div",null,a.a.createElement(E,{updateFilter:this.updateFilter,filter:this.state.filter})),this.todosCompletedCount()>0&&a.a.createElement(v,{clearCompleted:this.clearCompleted}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.a6c82efc.chunk.js.map