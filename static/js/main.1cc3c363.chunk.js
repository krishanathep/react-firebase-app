(this["webpackJsonpreact-firebase-app"]=this["webpackJsonpreact-firebase-app"]||[]).push([[0],{19:function(e,t,a){e.exports=a(35)},24:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(2),l=a.n(n),i=a(17),r=a.n(i),s=(a(24),a(18)),c=a(9),m=a(10),o=a(7),d=a(11),u=a(12),b=a(14);b.initializeApp({apiKey:"AIzaSyABHyyHWCMV1OZx40hJZ9oor3W4jLRSJ34",authDomain:"v-fire-bbd63.firebaseapp.com",databaseURL:"https://v-fire-bbd63.firebaseio.com",projectId:"v-fire-bbd63",storageBucket:"v-fire-bbd63.appspot.com",messagingSenderId:"674916818379",appId:"1:674916818379:web:969de3cd17160cbd8faa4e"});var p=b,h=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"Navbar"},l.a.createElement("nav",{className:"navbar navbar-expand-sm bg-info navbar-dark"},l.a.createElement("div",{className:"container"},l.a.createElement("a",{href:"#",className:"navbar-brand"},l.a.createElement("strong",null,"React Firebase")))))}}]),a}(n.Component),v=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).handleUpdate=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;e.setState({item_id:t,title:a,description:n})},e.state={items:[],item_id:"",title:"",description:""},e.handleChange=e.handleChange.bind(Object(o.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(o.a)(e)),e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.database().ref("items").on("value",(function(t){var a=t.val(),n=[];for(var l in a)n.push({item_id:l,title:a[l].title,description:a[l].description});e.setState({items:n})}))}},{key:"handleChange",value:function(e){this.setState(Object(s.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){if(e.preventDefault(),""!==this.state.item_id)return this.updateItem();var t=p.database().ref("items"),a={title:this.state.title,description:this.state.description};t.push(a),this.setState({item_id:"",title:"",description:""})}},{key:"updateItem",value:function(){var e={title:this.state.title,description:this.state.description};p.database().ref("/items").child(this.state.item_id).update(e),this.setState({item_id:"",title:"",description:""})}},{key:"removeItem",value:function(e){p.database().ref("/items").child(e).remove()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement(h,null),l.a.createElement("div",{className:"container",align:"center"},l.a.createElement("h1",{className:"mt-3"},"Todo Firestore"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",className:"form-control",name:"title",placeholder:"Enter Title...",onChange:this.handleChange,value:this.state.title})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",className:"form-control",name:"description",placeholder:"Enter Description...",onChange:this.handleChange,value:this.state.description})),l.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block"},"Submit"))),l.a.createElement("div",{className:"col-md-12"},l.a.createElement("table",{className:"table table-bordered mt-5"},l.a.createElement("tr",null,l.a.createElement("th",null,"Title"),l.a.createElement("th",null,"Description"),l.a.createElement("th",{width:"30%"},"Actions")),this.state.items.map((function(t){return l.a.createElement("tr",null,l.a.createElement("td",null,t.title),l.a.createElement("td",null,t.description),l.a.createElement("td",null,l.a.createElement("button",{className:"btn btn-info mr-1",onClick:function(){return e.handleUpdate(t.item_id,t.title,t.description)},"data-toggle":"modal","data-target":"#viewModal"},"View"),l.a.createElement("button",{className:"btn btn-success mr-1",onClick:function(){return e.handleUpdate(t.item_id,t.title,t.description)}},"update"),l.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e.removeItem(t.item_id)}},"remove")))}))),l.a.createElement("div",{class:"modal",id:"viewModal"},l.a.createElement("div",{class:"modal-dialog"},l.a.createElement("div",{class:"modal-content"},l.a.createElement("div",{class:"modal-header"},l.a.createElement("h4",{class:"modal-title"},"Modal Heading"),l.a.createElement("button",{type:"button",class:"close","data-dismiss":"modal"},"\xd7")),l.a.createElement("div",{class:"modal-body"},l.a.createElement("div",{className:"container"},l.a.createElement("table",{className:"table table-bordered"},l.a.createElement("tr",null,l.a.createElement("th",null,"Title"),l.a.createElement("td",null,this.state.title)),l.a.createElement("tr",null,l.a.createElement("th",null,"Description"),l.a.createElement("td",null,this.state.description))))),l.a.createElement("div",{class:"modal-footer"},l.a.createElement("button",{type:"button",class:"btn btn-danger","data-dismiss":"modal"},"Close")))))))))}}]),a}(n.Component);r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(v,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.1cc3c363.chunk.js.map