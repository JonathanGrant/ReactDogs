(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{62:function(e,t,n){e.exports=n(63)},63:function(e,t,n){"use strict";n.r(t);var a=n(39),r=n(20),o=n(21),s=n(23),i=n(22),c=n(24),l=n(0),u=n.n(l),d=n(60),m=n.n(d),h=(n(69),n(61)),g=n.n(h),p=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://dog.ceo/api/breeds/image/random").then(function(e){return e.json()}).then(function(t){var n=t.message,a=n.split("/breeds/")[1].split("/")[0];e.setState({imageUrl:n,dogBreed:a})})}},{key:"render",value:function(){var e,t=this;return console.log(this.state),this.state?u.a.createElement(u.a.Fragment,null,u.a.createElement("input",(e={type:"image",className:"dog",src:this.state.imageUrl,onClick:function(){t.props.selectDog(t.state.dogBreed)}},Object(a.a)(e,"className","col-sm-12 col-md-6 col-lg-4"),Object(a.a)(e,"style",{maxWidth:"100%",width:"auto",height:"auto",marginBottom:"20px"}),e))):u.a.createElement("div",null)}}]),t}(u.a.Component),b=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(i.a)(t).call(this,e))).state={myDog:null},n}return Object(c.a)(t,e),Object(o.a)(t,[{key:"selectDog",value:function(e){this.setState({myDog:e})}},{key:"renderDog",value:function(e){return u.a.createElement(p,{id:e,selectDog:this.selectDog.bind(this)})}},{key:"render",value:function(){console.log(this.state);var e,t="Current Dog: ";return null!=this.state.myDog&&(t+=(e=this.state.myDog).charAt(0).toUpperCase()+e.slice(1)+"."),u.a.createElement("div",null,u.a.createElement(g.a,{header:u.a.createElement("div",{className:"status",style:{backgroundColor:"blue",color:"white"}},t)},u.a.createElement("div",{style:{minHeight:"50px"}})),u.a.createElement("div",{className:"row"},this.renderDog(0),this.renderDog(1),this.renderDog(2),this.renderDog(3),this.renderDog(4),this.renderDog(5),this.renderDog(6),this.renderDog(7),this.renderDog(8)))}}]),t}(u.a.Component),f=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"container-fluid"},u.a.createElement(b,null),u.a.createElement("div",{className:"dog-info"},u.a.createElement("div",null),u.a.createElement("ol",null)))}}]),t}(u.a.Component);m.a.render(u.a.createElement(f,null),document.getElementById("root"))}},[[62,2,1]]]);
//# sourceMappingURL=main.b026f819.chunk.js.map