(this["webpackJsonpyusufcmlt.github.io"]=this["webpackJsonpyusufcmlt.github.io"]||[]).push([[0],{35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(2),s=a.n(n),r=a(28),o=a.n(r),i=(a(35),a(19)),l=a(4),m=(a(36),a(11)),u=(a(37),function(e){var t=e.pagePath,a=e.pageName,n=e.selectedButton;return Object(c.jsxs)(m.b,{to:t,className:"sidebar-button ".concat(a.toLowerCase()," ").concat(a.toLowerCase()===n?"selected":""),children:[Object(c.jsx)("span",{className:"button-icon ".concat(a.toLowerCase())}),a]})}),d=(a(42),function(e){var t=e.selectedButton;return Object(c.jsxs)("div",{className:"sidebar-container",children:[Object(c.jsxs)("div",{className:"sidebar-buttons-container",children:[Object(c.jsx)(u,{pageName:"About",pagePath:"".concat("","/"),selectedButton:t}),Object(c.jsx)(u,{pageName:"Projects",pagePath:"".concat("","/projects"),selectedButton:t}),Object(c.jsx)(u,{pageName:"Contact",pagePath:"".concat("","/contact"),selectedButton:t})]}),Object(c.jsx)("div",{className:"sidebar-language"})]})}),j=(a(43),{hello_message:"Hi!",my_name_message:"My name is Yusuf Cemal.",description_message:"I am a Front End Developer/Student living in Turkey.",projects_intro_message:"I've used (or im using):",projects_outro_message:"in my projects..."}),b=function(){return Object(c.jsxs)("div",{className:"about-page-container",children:[Object(c.jsx)("h1",{children:j.hello_message}),Object(c.jsx)("div",{className:"description-p about-name",children:"My name is Yusuf Cemal."}),Object(c.jsxs)("div",{className:"description-p",children:["I am a ",Object(c.jsx)("span",{className:"about-job",children:"web developer / student"})," living in Turkey. I'm deeply interested in"," ",Object(c.jsx)("span",{className:"about-job",children:"front end web development "})," and developing apps using:",Object(c.jsx)("div",{className:"tools-image"}),"You can check some of my projects"," ",Object(c.jsx)(m.b,{to:"".concat("","/projects"),className:"projects-link",children:"here."})]})]})},p=(a(44),[{title:"Guess The Drawing / Online Pictionary Clone",image:a.p+"static/media/cizim-oyunu1.695c58d3.png",links:{github:"https://github.com/yusufcmlt/cizim-oyunu",web:"http://cizimoyunu.github.io"},text:"A web based multiplayer drawing game with React, Socket.io and p5.js.",tags:["React","SocketIO","Firebase","Hooks","p5.js"]},{title:"NodeMCU Smart Home System Interface",image:a.p+"static/media/nodemcu.deda9cda.png",links:{github:"https://github.com/yusufcmlt/nodemcu-home-project",web:"https://yusufcmlt.github.io/nodemcu-home-project/"},text:"A smart home prototype with NodeMCU microcontroller, react and firebase as user interface.",tags:["NodeMCU","Firebase","React","Hooks"]},{title:"FreeCodeCamp Front End Projects",image:a.p+"static/media/freecodecamp-gif.71c37278.gif",links:{github:"https://github.com/yusufcmlt/freecodecamp-projects",web:"https://github.com/yusufcmlt/freecodecamp-projects"},text:"Projects that i've done as a part of FreeCodeCamp front-end developer curriculum. Pomodoro clock, calculator, drum machine, markdown editor and random quote apps.",tags:["React","FreeCodeCamp","Hooks"]},{title:"React E-commerce App / WearSomtn",image:a.p+"static/media/ecommerce.205c9579.png",links:{github:"https://github.com/yusufcmlt/react-ecommerce",web:"https://yusufcmlt.github.io/react-ecommerce/"},text:"E-commerce app with React and Redux. Firebase as database. I've started this project as part of a udemy course but then implemented responsive design, admin dashboard, item searching and individual item pages.",tags:["React","Redux","Firebase","Hooks"]}]),h=(a(45),function(e){var t=e.title,a=e.image,n=e.text,s=e.links,r=e.tags;return Object(c.jsxs)("div",{className:"project-item-container",children:[Object(c.jsxs)("div",{className:"project-info",children:[Object(c.jsxs)("div",{className:"project-head",children:[Object(c.jsx)("h3",{className:"project-title",children:t}),Object(c.jsxs)("div",{className:"project-links-container",children:[Object(c.jsx)("a",{target:"_blank",rel:"noreferrer",className:"project-link github",href:s.github,children:""}),Object(c.jsx)("a",{className:"project-link web",target:"_blank",rel:"noreferrer",href:s.web,children:""})]})]}),Object(c.jsx)("p",{className:"project-text",children:n}),Object(c.jsx)("div",{className:"project-tags",children:r.map((function(e,t){return Object(c.jsx)("span",{className:"tag",children:e},t+"a")}))})]}),Object(c.jsx)("div",{className:"project-image",style:{backgroundImage:"url(".concat(a,")")}})]})}),g=function(){return Object(c.jsxs)("div",{className:"projects-page-container",children:[Object(c.jsx)("h1",{children:"Some of My Work"}),Object(c.jsxs)("p",{children:["Some work i did while i was"," ",Object(c.jsx)("small",{className:"small-text",children:"mostly learning."}),"."]}),Object(c.jsx)("div",{className:"projects-container",children:p.map((function(e,t){return Object(c.jsx)(h,{title:e.title,image:e.image,text:e.text,links:e.links,tags:e.tags},(a=t,Math.round(1e4*Math.random())+a));var a}))})]})},f=a(15),x=a.n(f),O=a(17),v=a(18),N=a(26),k=a(20),y=(a(47),function(){var e=Object(O.a)(x.a.mark((function e(t){var a,c,n,s,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=w.collection("contactMessages").doc(),e.next=3,a.get();case 3:if(e.sent.exists){e.next=15;break}return c=t.name,n=t.email,s=t.messageSent,r=new Date,e.prev=7,e.next=10,a.set({name:c,email:n,sentAt:r,messageSent:s});case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(7),console.log("error sending message",e.t0.message);case 15:return e.abrupt("return",a);case 16:case"end":return e.stop()}}),e,null,[[7,12]])})));return function(t){return e.apply(this,arguments)}}());k.a.initializeApp({apiKey:"AIzaSyBev9S7hzYO2KnaZJLNPWLwND5yC00qXRo",authDomain:"portofolio-db.firebaseapp.com",databaseURL:"https://portofolio-db.firebaseio.com",projectId:"portofolio-db",storageBucket:"portofolio-db.appspot.com",messagingSenderId:"738947011764",appId:"1:738947011764:web:ee6e8491482a32df0873e1",measurementId:"G-Q1YVQ4VG9P"});var w=k.a.firestore(),S=(k.a,a(50),function(){var e=Object(n.useState)({name:"",email:"",messageSent:""}),t=Object(i.a)(e,2),a=t[0],s=t[1],r=function(e){var t=e.target,c=t.name,n=t.value;s(Object(N.a)(Object(N.a)({},a),{},Object(v.a)({},c,n)))},o=function(){var e=Object(O.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,y(a);case 4:s({name:"",email:"",messageSent:""}),alert("Message Sent!"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),alert("There is an error sending your message."),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),l=a.name,m=a.email,u=a.messageSent;return Object(c.jsxs)("div",{className:"contact-page-container",children:[Object(c.jsx)("h2",{children:"Let's Get in Touch!"}),Object(c.jsxs)("div",{className:"contact-form-container",children:[Object(c.jsxs)("div",{className:"contact-form-sidebar",children:[Object(c.jsx)("h3",{children:"Contact"}),Object(c.jsx)("p",{children:"You can reach me using the links below or simply filling the contact form!"}),Object(c.jsxs)("div",{className:"contact-links-container",children:[Object(c.jsx)("a",{href:"https://github.com/yusufcmlt",className:"contact-link github",target:"_blank",rel:"noreferrer",children:""}),Object(c.jsx)("a",{href:"https://www.linkedin.com/in/yusufcemalt/",className:"contact-link linkedin",target:"_blank",rel:"noreferrer",children:""}),Object(c.jsx)("a",{href:"mailto:yusufcemalt@gmail.com",className:"contact-link email",target:"_blank",rel:"noreferrer",children:""})]})]}),Object(c.jsx)("div",{className:"contact-form-content",children:Object(c.jsxs)("form",{className:"contact-form",onSubmit:o,children:[Object(c.jsx)("input",{type:"text",placeholder:"Name",className:"email-name",name:"name",value:l,onChange:r,required:!0}),Object(c.jsx)("input",{type:"email",placeholder:"Email",className:"email-name",name:"email",value:m,onChange:r,required:!0}),Object(c.jsx)("textarea",{placeholder:"Your Message",className:"text",maxLength:"500",name:"messageSent",value:u,onChange:r,required:!0}),Object(c.jsx)("button",{type:"submit",className:"contact-submit-button",children:"Send"})]})})]})]})}),C=Object(l.g)((function(e){var t=e.history,a=Object(n.useState)(""),s=Object(i.a)(a,2),r=s[0],o=s[1];return Object(n.useEffect)((function(){var e=t.location.pathname.replace("","").slice(1);o(e),document.querySelector("html").setAttribute("class","background-".concat(r||"about"))})),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(d,{selectedButton:r||"about"}),Object(c.jsx)("div",{className:"route-content-container",children:Object(c.jsxs)(l.d,{children:[Object(c.jsx)(l.b,{exact:!0,path:"".concat("","/"),component:b}),Object(c.jsx)(l.b,{path:"".concat("","/projects"),component:g}),Object(c.jsx)(l.b,{path:"".concat("","/contact"),component:S}),Object(c.jsx)(l.b,{render:function(){return Object(c.jsx)(l.a,{to:"".concat("","/projects")})}})]})})]})})),I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,52)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(m.a,{children:Object(c.jsx)(C,{})})}),document.getElementById("root")),I()}},[[51,1,2]]]);
//# sourceMappingURL=main.e0b040a7.chunk.js.map