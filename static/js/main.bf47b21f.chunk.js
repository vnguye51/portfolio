(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,a,t){e.exports=t(37)},,,,,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(7),l=t.n(s),c=(t(13),t(1)),i=t(2),o=t(4),m=t(3),u=t(5),d=(t(15),t(17),function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={hidden:!1},t.hidenav=function(){t.setState({hidden:!0})},t.shownav=function(){t.setState({hidden:!1})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"wrapper"},r.a.createElement("i",{className:"fas fa-bars fixed",onClick:this.shownav}),r.a.createElement("div",{id:"navBar",class:this.state.hidden?"hide":"show"},r.a.createElement("i",{className:"fas fa-bars",onClick:this.hidenav}),r.a.createElement("a",{href:"#About",className:"navlink"},r.a.createElement("div",{className:"navElement"},"About")),r.a.createElement("a",{href:"#WorkExperience",className:"navlink"},r.a.createElement("div",{className:"navElement"},"Work Experience")),r.a.createElement("a",{href:"#Projects",className:"navlink"},r.a.createElement("div",{className:"navElement"},"Projects")),r.a.createElement("a",{href:"#VGNexus",className:"navlink"},r.a.createElement("div",{className:"subElement"},r.a.createElement("i",{class:"fas fa-circle"})," VGNexus")),r.a.createElement("a",{href:"#Abyss",className:"navlink"},r.a.createElement("div",{className:"subElement"},r.a.createElement("i",{class:"fas fa-circle"})," Abyss")),r.a.createElement("a",{href:"#ArtCollective",className:"navlink"},r.a.createElement("div",{className:"subElement"},r.a.createElement("i",{class:"fas fa-circle"})," ArtCollective")),r.a.createElement("a",{href:"#Particle",className:"navlink"},r.a.createElement("div",{className:"subElement"},r.a.createElement("i",{class:"fas fa-circle"})," Particle Tracking")),r.a.createElement("a",{href:"#Publications",className:"navlink"},r.a.createElement("div",{className:"navElement"},"Publications")," "),r.a.createElement("div",{className:"subElement"}),r.a.createElement("a",{href:"#Miscellania",className:"navlink"},r.a.createElement("div",{className:"navElement"},"Miscellania")),r.a.createElement("div",{className:"iconGroup"},r.a.createElement("a",{href:"https://www.linkedin.com/in/vincent-nguyen-342015164/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"assets\\images\\In-2CRev-34px-R.png",alt:"linkedin"})),r.a.createElement("a",{href:"https://github.com/vnguye51/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"assets\\images\\GitHub-Mark-32px.png",alt:"github"})),r.a.createElement("span",{id:"email"},"vincenttsnguyen@gmail.com"),r.a.createElement("div",{id:"navname"},"Vincent Nguyen"))))}}]),a}(n.Component)),h=(t(19),function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"About"},r.a.createElement("div",{style:{fontSize:"48px",fontWeight:"bold",textAlign:"center"}},"Vincent Nguyen"),r.a.createElement("br",null),r.a.createElement("div",{style:{fontSize:"18px",textAlign:"center"}},"vincenttsnguyen@gmail.com | (925) 270-8307"),r.a.createElement("br",null),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("a",{href:"https://www.linkedin.com/in/vincent-nguyen-342015164/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"assets\\images\\In-2CRev-34px-R.png",alt:"linkedin"})),r.a.createElement("a",{href:"https://github.com/vnguye51/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"assets\\images\\GitHub-Mark-32px.png",alt:"github"}))),r.a.createElement("br",null),r.a.createElement("div",{className:"header1"},"About"),r.a.createElement("div",{className:"bodyText"},"Full-stack developer with experience using Javascript, CSS, HTML, node.js, React, mySQL, mongoDB, and more. I am also well-versed in Python and its numPy and sciPy libraries. I specialize in creating the logic and structure behind web development and I always keep an eye out for efficiency. I also like making video game mock-ups as a hobby.",r.a.createElement("br",null),r.a.createElement("br",null),"I earned my Physics Bachelor from California Polytechnic, San Luis Obispo As part of my courses and research I have created and utilized customized 2D line-of-focus stacking program written in LabVIEW as well as a particle tracking program written in Python. After graduating, I then went on to switch professions and earned my Web Development certificate from UC Berkeley Extension.",r.a.createElement("br",null),r.a.createElement("br",null),"The main reason I love programming is that with every new technology I learn I can imagine all the useful and novel ways I can leverage it. It makes me feel like I can do anything with code. Of course, I inevitably hit a wall but that\u2019s part of the fun of learning.",r.a.createElement("br",null),r.a.createElement("br",null)))}}]),a}(n.Component)),p=(t(21),t(23),t(25),function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"carouselBox"},r.a.createElement("div",{id:"carousel"+this.props.carouselId,class:"carousel slide","data-ride":"carousel"},r.a.createElement("ol",{class:"carousel-indicators"},this.props.images.map(function(a,t){return 0===t?r.a.createElement("li",{"data-target":"#carousel"+e.props.carouselId,"data-slide-to":"0",class:"active"}):r.a.createElement("li",{"data-target":"#carousel"+e.props.carouselId,"data-slide-to":t})})),r.a.createElement("div",{class:"carousel-inner"},this.props.images.map(function(e,a){return 0===a?r.a.createElement("div",{class:"carousel-item active"},r.a.createElement("img",{class:"d-block w-100 carouselImg",src:e,alt:"First slide"})):r.a.createElement("div",{class:"carousel-item"},r.a.createElement("img",{class:"d-block w-100 carouselImg",src:e,alt:"slide"}))})),r.a.createElement("a",{class:"carousel-control-prev",href:"#carousel"+this.props.carouselId,role:"button","data-slide":"prev"},r.a.createElement("span",{class:"carousel-control-prev-icon","aria-hidden":"true"}),r.a.createElement("span",{class:"sr-only"},"Previous")),r.a.createElement("a",{class:"carousel-control-next",href:"#carousel"+this.props.carouselId,role:"button","data-slide":"next"},r.a.createElement("span",{class:"carousel-control-next-icon","aria-hidden":"true"}),r.a.createElement("span",{class:"sr-only"},"Next"))))}}]),a}(n.Component)),b=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"Abyss"},r.a.createElement("div",{className:"header2"},"Abyss ",r.a.createElement("span",{class:"tags"},"(Express, Node.js, Socket.io, Phaser)")),r.a.createElement("div",{className:"projectLink"},r.a.createElement("a",{href:"https://github.com/vnguye51/Multiplayer-Game",target:"_blank",rel:"noopener noreferrer"},"https://github.com/vnguye51/Multiplayer-Game")),r.a.createElement("br",null),r.a.createElement(p,{images:["assets/images/Abyss.png","assets/images/Abyss2.png","assets/images/Abyss3.png","assets/images/Abyss4.png","assets/images/Abyss5.png"]}),r.a.createElement("br",null),r.a.createElement("div",{className:"bodyText"},"Abyss is a multiplayer game where progress is persistent between all players around the world. No enemies respawn or heal until the final boss is defeated. Open the game in two browsers to see the multiplayer aspects.",r.a.createElement("br",null),r.a.createElement("br",null),"Projectiles, enemy AI, and some collisions is handled server-side through socket.io Client-side rendering and inputs is handled through a combination of socket.io and Phaser",r.a.createElement("br",null),r.a.createElement("br",null),"This was a solo project on creating the framework for a massively multiplayer game and handling interaction between clients.",r.a.createElement("br",null),r.a.createElement("br",null)))}}]),a}(n.Component),g=(t(27),function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"ArtCollective"},r.a.createElement("div",{className:"header2"},"ArtCollective ",r.a.createElement("span",{class:"tags"},"(Express, Node.js, Handlebars, MySQL)")),r.a.createElement("div",{className:"projectLink"},r.a.createElement("a",{href:"https://github.com/DinhDo2312/ArtCollective",target:"_blank",rel:"noopener noreferrer"},"https://github.com/DinhDo2312/ArtCollective")),r.a.createElement("br",null),r.a.createElement(p,{carouselId:"3",images:["assets/images/Art1.png","assets/images/Art2.png"]}),r.a.createElement("br",null),r.a.createElement("div",{className:"bodyText"},"ArtCollective is a website where users can join collectives, where they can upload images, pictures, and audio based on common interests. This is sort of a deviantart clone. Users can also comment and discuss submissions.",r.a.createElement("br",null),r.a.createElement("br",null),"This project showcases the power of relational databases by linking together the many-to-many relationships between users and their collectives."),r.a.createElement("br",null),r.a.createElement("br",null))}}]),a}(n.Component)),E=(t(29),function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"VGNexus"},r.a.createElement("div",{className:"header2"},"VGNexus ",r.a.createElement("span",{class:"tags"},"(MySQL, Express, React, Node.js, Socket.io)")),r.a.createElement("div",{className:"projectLink"},r.a.createElement("a",{href:"https://github.com/JackRa88it/VG-Nexus",target:"_blank",rel:"noopener noreferrer"},"https://github.com/JackRa88it/VG-Nexus")),r.a.createElement("br",null),r.a.createElement(p,{carouselId:"0",images:["assets/images/VGNexus.png","assets/images/VGNexus2.png","assets/images/VGNexus3.png","assets/images/VGNexus4.png","assets/images/VGNexus5.png"]}),r.a.createElement("br",null),r.a.createElement("div",{className:"bodyText"},"A hub where browser games can be shared and deployed. Includes live-chat for each game, forums, upvote sysyem, and a customizable user profile. Deployment of HTML games is easy as long as games run inside a canvas Element. We have working examples of P5 and Phaser games. Created as a final project for the UC Berkeley Extension Web Development course.",r.a.createElement("br",null),r.a.createElement("br",null),"If you just want to browse the site and test out its features use these fake credentials:",r.a.createElement("br",null),r.a.createElement("br",null),"email: PHASERTutorials@phaser.com",r.a.createElement("br",null),"password: password"))}}]),a}(n.Component)),f=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"Particle"},r.a.createElement("div",{className:"header2"},"Particle Tracking ",r.a.createElement("span",{class:"tags"},"(Python, numPy, Machine Vision)")),r.a.createElement("div",{className:"projectLink"},r.a.createElement("a",{href:"assets/docs/ParticleTracking.html",target:"_blank",rel:"noopener noreferrer"},"HTML Document")),r.a.createElement("br",null),r.a.createElement("div",{className:"projectImgBox"},r.a.createElement("img",{className:"projectImg",src:"assets/images/Unfiltered.png",alt:"ParticleTracking"})),r.a.createElement("br",null),r.a.createElement("div",{className:"bodyText"},"As a class project at California Polytechnic I created a basic particle-tracking program. The program can be summarized as:",r.a.createElement("ol",null,r.a.createElement("li",null,"Pre-process the images and threshold the grayscale values to black(particles) or white"),r.a.createElement("li",null,"Perform a flood-fill algorithm to flag all connected black pixels"),r.a.createElement("li",null,"For each connected black blob check to see if they are massive enough to be a particle"),r.a.createElement("li",null,"For each particle find their center of mass"),r.a.createElement("li",null,"Repeat for each frame and record the difference between each particles center of mass"),r.a.createElement("li",null,"For each frame check for the nearest particle in the previous frame and consider these as the same particle if they moved within a reasonable distance"),r.a.createElement("li",null,"If no previous particle is found then flag it as a new particle that just entered the view"),r.a.createElement("li",null,"Record the velocities between each frame")),"The program was validated against Avogadro's number derived from the Brownian Motion of milk globules."),r.a.createElement("br",null),r.a.createElement("br",null))}}]),a}(n.Component),v=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"Projects"},r.a.createElement("div",{className:"header1"},"Projects"),r.a.createElement(E,null),r.a.createElement(b,null),r.a.createElement(g,null),r.a.createElement(f,null))}}]),a}(n.Component),y=(t(31),t(33),function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{class:"box"},r.a.createElement("a",{href:this.props.url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{class:"label"},this.props.name),r.a.createElement("img",{src:this.props.img,width:"240",height:"200",alt:this.props.img})))}}]),a}(n.Component)),k=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"Miscellania"},r.a.createElement("div",{className:"header1"},"Miscellania"),"Here is a collection of random practice exercises and homework assignments.",r.a.createElement("div",{className:"homeworkContainer"},r.a.createElement(y,{name:"SRPG",url:"https://vnguye51.github.io/SRPG/",img:"assets/images/SRPG.png"}),r.a.createElement(y,{name:"Name that Character",url:"https://vnguye51.github.io/Word-Guess-Game/",img:"assets/images/Chihiro.jpg"}),r.a.createElement(y,{name:"RPS Multiplayer",url:"https://vnguye51.github.io/RPS-Multiplayer/",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Rock-paper-scissors.svg/300px-Rock-paper-scissors.svg.png"}),r.a.createElement(y,{name:"Scraping Practice",url:"https://dashboard.heroku.com/apps/scraper-hw12/settings/",img:"https://cdn-images-1.medium.com/max/1200/1*BrUAg3-OqIHkoTz_CRIzTA.png"}),r.a.createElement(y,{name:"Liquid Crystal REU",url:"REU%20Pair%20Hydrodynamics.pdf",img:"assets/images/Liquid%20Crystal.jpg"}),r.a.createElement(y,{name:"Trivia Game",url:"https://vnguye51.github.io/TriviaGame/",img:"https://www.zelda.com/assets/img/home/games/354x198_ZeldaBreathofWild_v01.jpg"}),r.a.createElement(y,{name:"Friend Finder",url:"https://friend-finder-bootcamp-hw.herokuapp.com/",img:"assets/images/FriendFinder.png"}),r.a.createElement(y,{name:"React NYT API",url:"https://nyt-react-practice.herokuapp.com/",img:"http://theievoice.com/wp-content/uploads/2017/10/o-NEWSPAPERS-facebook.jpg"})))}}]),a}(n.Component),j=(t(35),function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"BAM"},r.a.createElement("div",{className:"header2"},"A LEGO Mindstorms Brewster angle microscope ",r.a.createElement("span",{class:"tags"},"(LabVIEW)")),r.a.createElement("div",{className:"projectLink"},r.a.createElement("a",{href:"https://aapt.scitation.org/doi/10.1119/1.4991387",target:"_blank",rel:"noopener noreferrer"},"https://aapt.scitation.org/doi/10.1119/1.4991387")),r.a.createElement("br",null),r.a.createElement("div",{className:"bodyText"},"As a paid student researcher I assisted in building and programming a Brewster Angle Microscope(BAM). The BAM is a specialized microscope that is able to take images of films on a water interface as thin as 1nm thick. Below is a picture of a cholesterol monolayer imaged using the BAM. ",r.a.createElement("br",null),r.a.createElement("br",null),"I created the user interface to control and calibrate the microscope, as well as an analysis program that parses through the images and determine properties such as phase transitions, adsorptivity, and reflectivity. I am the second author on a paper published to the American Journal of Physics, a peer-reviewed teaching journal."),r.a.createElement("div",{className:"projectImgBox"},r.a.createElement("img",{className:"projectImg",src:"assets/images/BrewsterAngle.png",alt:"BAM"})),r.a.createElement("br",null),r.a.createElement("br",null))}}]),a}(n.Component)),w=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"Publications"},r.a.createElement("div",{className:"header1"},"Publications"),r.a.createElement(j,null))}}]),a}(n.Component),O=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"Screenbeam"},r.a.createElement("div",{className:"header2"},"Web Developer at Screenbeam ",r.a.createElement("span",{class:"tags"},"(SQL, C#, .NET Core, React, SignalR, Websocket)")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"bodyText"},"Assisted in design and development of a webapp that manages and communicates with thousands of physical video conferencing equipment. My work includes assisting in the design of new React UI components and working with a constant feedback and request loop from marketing and design teams. My work also included migrating legacy javascript UI into React and implementing the backend REST API and Websocket channels. Lastly, I created internal tooling to simulate traffic towards the web server for stress testing."))}}]),a}(n.Component),N=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"WorkExperience"},r.a.createElement("div",{className:"header1"},"Work Experience"),r.a.createElement(O,null))}}]),a}(n.Component),x=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{id:"nav"},r.a.createElement(d,null)),r.a.createElement("div",{id:"main"},r.a.createElement(h,null),r.a.createElement(N,null),r.a.createElement(v,null),r.a.createElement(w,null),r.a.createElement(k,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,2,1]]]);
//# sourceMappingURL=main.bf47b21f.chunk.js.map