(window["webpackJsonpclicky-game"]=window["webpackJsonpclicky-game"]||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"image":"https://media.giphy.com/media/jEzTEGNdbyP3W/giphy.gif","isClicked":false},{"id":2,"image":"https://media.giphy.com/media/VXuaqdTMewwyA/giphy.gif","isClicked":false},{"id":3,"image":"https://media.giphy.com/media/1dLwYRWAUMwwxIOnwv/giphy.gif","isClicked":false},{"id":4,"image":"https://media.giphy.com/media/3ohc1fouQAB89eHXK8/giphy.gif","isClicked":false},{"id":5,"image":"https://media.giphy.com/media/3o6gE51uXycrKW6D84/giphy.gif","isClicked":false},{"id":6,"image":"https://media.giphy.com/media/8dRuHJb4clegg/giphy.gif","isClicked":false},{"id":7,"image":"https://media.giphy.com/media/fBM4lu1cFjhGktZvVQ/giphy.gif","isClicked":false},{"id":8,"image":"https://media.giphy.com/media/3ohhwHA56VCmzszss0/giphy.gif","isClicked":false},{"id":9,"image":"https://media.giphy.com/media/IgjGOB7VSIAG8iaX2e/giphy.gif","isClicked":false},{"id":10,"image":"https://media.giphy.com/media/ehfzA3jcmst7bo0Bsj/giphy.gif","isClicked":false},{"id":11,"image":"https://media.giphy.com/media/ge9AYrYwpktR4sek6T/giphy.gif","isClicked":false},{"id":12,"image":"https://media.giphy.com/media/StWB4UdGulp6kkr8Zj/giphy.gif","isClicked":false}]')},function(e,a,i){e.exports=i(16)},,,,,function(e,a,i){},function(e,a,i){},function(e,a,i){"use strict";i.r(a);var t=i(0),c=i.n(t),s=i(7),n=i.n(s),l=(i(14),i(1)),r=i(2),o=i(4),m=i(3),d=i(5),h=(i(15),{display:"inline-block",pading:"6px",cursor:"pointer",width:"200px",height:"200px",marginBottom:"10px",margin:"15px"}),g={width:"100%",height:"100%"},p={width:"100%",height:"100%",padding:"5px"},u=function(e){return c.a.createElement("div",{style:h},c.a.createElement("div",{className:"card",style:p},c.a.createElement("img",{className:e.className,onClick:e.onClick,id:e.id,style:g,src:e.image,value:e.value,alt:"char card pic"})))},f=function(e){function a(){return Object(l.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-2,col-sm-12,col-lg-3"}),c.a.createElement("div",{className:"col-md-8,col-sm-12,col-lg-6"},this.props.children,";"),c.a.createElement("div",{className:"col-md-2,col-sm-12,col-lg-3"})))}}]),a}(t.Component),k={backgroundColor:"purple",fontSize:"20px",textAlign:"center"},y=function(e){return c.a.createElement("nav",{className:"nav nav-pills nav-fill sticky-top"},c.a.createElement("button",{style:k,className:"nav-item nav-link",href:"#"},"CLICKY-ClICK ClICK-ClIKSTER!!"),c.a.createElement("button",{style:k,className:"nav-item nav-link",href:"#"},e.message),c.a.createElement("button",{style:k,className:"nav-item nav-link"},"SCORE:",e.score,"  | TOP SCORE:",e.highScore))},C=function(e){return c.a.createElement("div",{className:"jumbotron"},c.a.createElement("h1",null,"Clicky Game!"),c.a.createElement("h3",null,"Click a card to earn points, but click one twice and you lose!"))},v=i(8),E=function(e){function a(){var e,i;Object(l.a)(this,a);for(var t=arguments.length,c=new Array(t),s=0;s<t;s++)c[s]=arguments[s];return(i=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={charCards:v,score:0,highScore:0,shake:"",message:""},i.shuffle=function(e){for(var a,i,t=e.length;0!==t;)i=Math.floor(Math.random()*t),a=e[t-=1],e[t]=e[i],e[i]=a;return e},i.resetClass=function(){i.setState({shake:""})},i.clickCardHandler=function(e){i.resetClass();var a=i.state.charCards,t=i.state.charCards[e].isClicked,c=i.state.score,s=i.state.highScore;if(!1===t)a[e].isClicked=!0,i.shuffle(a),s<++c&&s++,i.setState({message:"",charCards:a,score:c,highScore:s});else{a.map(function(e){return e.isClicked=!1,e}),i.shuffle([]),c=0,i.setState({message:"You Already Clicked That One!!",shake:"shake",x:a,score:c})}},i}return Object(d.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"App"},c.a.createElement(y,{score:this.state.score,highScore:this.state.highScore,message:this.state.message}),c.a.createElement(C,null),c.a.createElement(f,null,this.state.charCards.map(function(a,i){return c.a.createElement(u,{className:e.state.shake,key:a.id,id:a.id,onClick:function(){return e.clickCardHandler(i)},image:a.image,value:a.isClicked,alt:"CharPic"})}),";"))}}]),a}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(c.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.a0bc01a2.chunk.js.map