(()=>{"use strict";var e={17:(e,t,n)=>{n.r(t)},429:(e,t,n)=>{n.r(t)},431:(e,t,n)=>{n.r(t)},331:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.arrayOfWords=void 0,t.arrayOfWords=[{"Action (set A)":[["dance","танцевать","dance.jpg","dance.mp3"],["cry","плакать","cry.jpg","cry.mp3"],["dive","нырять","dive.jpg","dive.mp3"],["draw","рисовать","draw.jpg","draw.mp3"],["fish","ловить рыбу","fish.jpg","fish.mp3"],["fly","летать","fly.jpg","fly.mp3"],["hug","обнимать","hug.jpg","hug.mp3"],["jump","прыгать","jump.jpg","jump.mp3"]]},{"Action (set B)":[["play","играть","play.jpg","play.mp3"],["open","открывать","open.jpg","open.mp3"],["point","указывать","point.jpg","point.mp3"],["ride","ездить","ride.jpg","ride.mp3"],["run","бегать","run.jpg","run.mp3"],["sing","петь","sing.jpg","sing.mp3"],["skip","пропускать, прыгать","skip.jpg","skip.mp3"],["swim","плавать","swim.jpg","swim.mp3"]]},{"Animal (set A)":[["cat","кот","cat.jpg","cat.mp3"],["chick","цыплёнок","chick.jpg","chick.mp3"],["chicken","курица","chicken.jpg","chicken.mp3"],["dog","собака","dog.jpg","dog.mp3"],["horse","лошадь","horse.jpg","horse.mp3"],["pig","свинья","pig.jpg","pig.mp3"],["rabbit","кролик","rabbit.jpg","rabbit.mp3"],["sheep","овца","sheep.jpg","sheep.mp3"]]},{"Animal (set B)":[["bird","птица","bird.jpg","bird.mp3"],["fish","рыба","fish1.jpg","fish.mp3"],["frog","жаба","frog.jpg","frog.mp3"],["giraffe","жирафа","giraffe.jpg","giraffe.mp3"],["lion","лев","lion.jpg","lion.mp3"],["mouse","мышь","mouse.jpg","mouse.mp3"],["turtle","черепаха","turtle.jpg","turtle.mp3"],["dolphin","дельфин","dolphin.jpg","dolphin.mp3"]]},{Clothes:[["shirt","рубашка","shirt.jpg","shirt.mp3"],["skirt","юбка","skirt.jpg","skirt.mp3"],["pants","брюки","pants.jpg","pants.mp3"],["blouse","блузка","blouse.jpg","blouse.mp3"],["dress","платье","dress.jpg","dress.mp3"],["boot","ботинок","boot.jpg","boot.mp3"],["coat","пальто","coat.jpg","coat.mp3"],["shoe","туфли","shoe.jpg","shoe.mp3"]]},{Emotions:[["happy","счастливый","happy.jpg","happy.mp3"],["sad","грустный","sad.jpg","sad.mp3"],["angry","сердитый","angry.jpg","angry.mp3"],["tired","уставший","tired.jpg","tired.mp3"],["surprised","удивлённый","surprised.jpg","surprised.mp3"],["scared","испуганный","scared.jpg","scared.mp3"],["smile","улыбка","smile.jpg","smile.mp3"],["laugh","смех","laugh.jpg","laugh.mp3"]]},{Mathematics:[["multiplication","умножение","multiplication.jpg","multiplication.mp3"],["minus","минус","minus.jpg","minus.mp3"],["plus","плюс","plus.jpg","plus.mp3"],["division","деление","division.jpg","division.mp3"],["triangle","треугольник","triangle.jpg","triangle.mp3"],["root","корень","root.jpg","root.mp3"],["percent","процент","percent.jpg","percent.mp3"],["square","квадрат","square.jpg","square.mp3"]]},{Outdoors:[["road","дорога","road.jpg","road.mp3"],["door","дверь","door.jpg","door.mp3"],["car","машина","car.jpg","car.mp3"],["tree","дерево","tree.jpg","tree.mp3"],["grass","трава","grass.jpg","grass.mp3"],["traffic light","светофор","traffic-light.jpg","traffic-light.mp3"],["river","река","river.jpg","river.mp3"],["sun","солнце","sun.jpg","sun.mp3"]]}]},752:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0,n(17),n(429);const a=n(74),i=n(62),s=n(706),r=n(973);t.App=class{constructor(e,t,n){this.rootElement=e,this.playSessionCurrentSound=document.createElement("audio"),this.endWindow=new i.EndWindow,this.headerComponent=new r.Header(t,n),e.appendChild(this.headerComponent.header),this.GameField=new s.GameField(t,n),e.appendChild(this.GameField.element),e.after((new a.Footer).element),this.startListenerFn=this.startListener.bind(this,n,t),this.headerComponent.replayButton.element.addEventListener("click",(()=>{n.currentSound&&(this.playSessionCurrentSound.src=n.currentSound,this.playSessionCurrentSound.play())}))}startPlayGame(e){e.errors=0,"Main page"===e.category&&this.headerComponent.playButton.element.setAttribute("disabled","true"),this.headerComponent.playButton.element.addEventListener("click",this.startListenerFn)}startListener(e,t){var n;this.GameField.resetStatusContainer(),this.headerComponent.replayButton.element.removeAttribute("disabled"),null===(n=document.querySelectorAll(".done"))||void 0===n||n.forEach((e=>e.classList.remove("done"))),this.headerComponent.controlsButtonsContainer.element.classList.add("play");const a=Object.values(t).filter((t=>Object.keys(t)[0]===e.category)),i=function(e){return Array.isArray(e)?e.slice().sort((()=>Math.random()-.5)):[]}(Object.values(a[0])[0]);e.currentSound=`audio/${i[i.length-1][3]}`,setTimeout((()=>{this.playSessionCurrentSound.src=e.currentSound,this.playSessionCurrentSound.play()}),500),this.gameIntellectFn=function(){var t,n;const a=arguments[0];a.target.currentSrc&&i.length>0&&(a.target.currentSrc.replace(/.*\/+/i,"")===i[i.length-1][2]?(this.GameField.addCorrectStar(),this.GameField.statusContainer.correctSound.play(),null===(n=null===(t=a.target.parentElement)||void 0===t?void 0:t.parentElement)||void 0===n||n.classList.add("done"),i.pop(),i.length>0?(e.currentSound=`audio/${i[i.length-1][3]}`,this.playSessionCurrentSound.src=`audio/${i[i.length-1][3]}`,setTimeout((()=>{this.playSessionCurrentSound.play()}),500)):(e.currentSound="",this.endWindow.endWindowRender(e.errors),this.headerComponent.replayButton.element.setAttribute("disabled","true"),setTimeout((()=>{var t;e.category="Main page",window.location.hash="Main page",document.querySelectorAll("ul.navigation-ul li").forEach((e=>e.classList.remove("active-item"))),null===(t=document.getElementById(e.category))||void 0===t||t.classList.add("active-item")}),3600))):(this.GameField.addErrorStar(),this.GameField.statusContainer.errorSound.play(),e.errors+=1))}.bind(this),this.GameField.element.addEventListener("click",this.gameIntellectFn)}removeListeners(){this.headerComponent.playButton.element.removeEventListener("click",this.startListenerFn),this.GameField.element.removeEventListener("click",this.gameIntellectFn)}}},955:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BaseComponent=void 0,t.BaseComponent=class{constructor(e="div",t=[]){this.element=document.createElement(e),this.element.classList.add(...t)}}},74:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Footer=void 0,n(431);const i=a(n(129)),s=a(n(153)),r=n(955),o=`\n    <div class="footer-center-section center-section ds__f--ai_c--jc__sb">\n      <a href="https://github.com/SemenSavlook" target="_blank" class="ds__f">\n        <img src="${i.default}" alt="">\n        <span class="footer-span">@SemenSavlook</span>\n      </a>\n      <div class="footer-text footer-span">\n        Rolling scopes JSFE2021Q1 «English for kids» task by Semen Savluk\n      </div>\n      <a href="https://rs.school/js/" target="_blank" class="ds__f">\n        <img src="${s.default}" alt="" class="rss">\n      </a>\n    </div>\n`;class d extends r.BaseComponent{constructor(){super("footer",["ds__f--ai__c--jc__c"]),this.element.innerHTML=o}}t.Footer=d},584:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CardComponent=void 0;const a=n(955);function i(e){const t=new a.BaseComponent("div",["card-item--text-block"]);return t.element.textContent=e,t.element}class s extends a.BaseComponent{constructor(e){super("div",["card-container"]),this.cardItem=new a.BaseComponent("div",["card-item"]),this.cardItemFront=new a.BaseComponent("div",["card-item--front"]),this.cardItemBack=new a.BaseComponent("div",["card-item--back"]),this.rotateBtn=new a.BaseComponent("div",["card-item--rotate"]),this.cardItem.element.appendChild(this.cardItemFront.element),this.cardItem.element.appendChild(this.cardItemBack.element),this.element.appendChild(this.cardItem.element),this.oneCardRender(e)}oneCardRender(e){const t=document.createElement("img");t.src=`images/${e[2]}`,this.cardItemFront.element.appendChild(t),this.cardItemFront.element.appendChild(i(e[0])),this.cardItemFront.element.appendChild(this.rotateBtn.element),this.cardItemBack.element.appendChild(t.cloneNode(!0)),this.cardItemBack.element.appendChild(i(e[1])),this.rotateBtn.element.addEventListener("click",(()=>{this.element.classList.add("translate")})),this.cardItem.element.addEventListener("mouseleave",(()=>{this.element.classList.remove("translate")}))}}t.CardComponent=s},497:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CardComponentForMain=void 0;const a=n(955);class i extends a.BaseComponent{constructor(e,t){super("a",["card-item--main"]),this.cardMainInit(e,t)}cardMainInit(e,t){const n=document.createElement("img");n.src=`images/${t}`,this.element.appendChild(n),this.element.appendChild(document.createTextNode(e))}}t.CardComponentForMain=i},62:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.EndWindow=void 0;const a=n(955),i=document.createElement("audio"),s=document.createElement("div");s.classList.add("mistakes-block");class r extends a.BaseComponent{constructor(){super("div",["end-window"])}endWindowRender(e){document.body.prepend(this.element);const t=document.createElement("div");e>0?(t.classList.add("failure"),this.element.appendChild(t),this.element.appendChild(s),s.textContent=`Number of mistakes: ${e}`,i.src="audio/failure.mp3",i.play()):(t.classList.add("success"),this.element.appendChild(t),i.src="audio/success.mp3",i.play()),this.element.style.opacity="1",setTimeout((()=>{this.element&&(this.element.style.opacity="0",this.element.innerHTML="")}),2e3),setTimeout((()=>{this.element&&document.body.removeChild(this.element)}),3500)}}t.EndWindow=r},706:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.GameField=void 0;const a=n(955),i=n(584),s=n(497),r=n(909);class o extends a.BaseComponent{constructor(e,t){super("main",["main-container"]),this.statusContainer=new r.StatusContainer,this.gameField=new a.BaseComponent("div",["game-field-container"]),this.audio=document.createElement("audio"),this.element.appendChild(this.statusContainer.element),this.element.appendChild(this.gameField.element),this.gameFieldInit(e,t)}gameFieldInit(e,t){this.gameField.element.innerHTML="";for(let n=0;n<e.length;n++){const a=Object.keys(e[n])[0],i=Object.values(e[n])[0];if(Array.isArray(i)){const e=i[0],n=new s.CardComponentForMain(a,e[2]).element;n.addEventListener("click",(()=>{var e;t.category=a,window.location.hash=a,document.querySelectorAll("ul.navigation-ul li").forEach((e=>e.classList.remove("active-item"))),null===(e=document.getElementById(t.category))||void 0===e||e.classList.add("active-item")})),this.gameField.element.appendChild(n)}}}gameFieldRender(e,t){this.gameField.element.innerHTML="";const n=Object.values(e).filter((e=>Object.keys(e)[0]===t.category)),a=Object.values(n[0])[0];if(Array.isArray(a)&&a.length>0)for(let e=0;e<a.length;e++){const t=new i.CardComponent(a[e]);t.element.addEventListener("click",(n=>{n.target===t.rotateBtn.element||document.body.classList.contains("game")||(this.audio.src=`audio/${a[e][3]}`,this.audio.play())})),this.gameField.element.appendChild(t.element)}else this.gameFieldInit(e,t);this.element.appendChild(this.audio)}addCorrectStar(){this.statusContainer.correctSound.play(),this.statusContainer.element.appendChild(new a.BaseComponent("div",["correct-star"]).element)}addErrorStar(){this.statusContainer.errorSound.play(),this.statusContainer.element.appendChild(new a.BaseComponent("div",["error-star"]).element)}resetStatusContainer(){this.statusContainer.element.innerHTML=""}}t.GameField=o},909:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.StatusContainer=void 0;const a=n(955);class i extends a.BaseComponent{constructor(){super("div",["status-container"]),this.correctSound=document.createElement("audio"),this.errorSound=document.createElement("audio"),this.correctSound.src="audio/correct.mp3",this.errorSound.src="audio/error.mp3"}}t.StatusContainer=i},973:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Header=void 0;const a=n(955),i=new a.BaseComponent("label",["switch"]);i.element.innerHTML='\n  <span class="switch-label" data-on="Train" data-off="Play"></span>\n  <span class="switch-handle">\n    <span class="switch-handle--color"></span>\n  </span>\n';const s=new a.BaseComponent("input",["switch-input"]);s.element.setAttribute("type","checkbox");const r=document.createElement("ul");r.classList.add("navigation-ul");const o=document.createElement("li");o.textContent="Main page",o.classList.add("active-item"),o.id="Main page",r.appendChild(o),t.Header=class{constructor(e,t){this.header=document.createElement("header"),this.navContainer=new a.BaseComponent("nav",["navigation"]),this.navigationCloseBtn=new a.BaseComponent("div",["navigation-close"]),this.navigationWrapper=new a.BaseComponent("div",["navigation-wrapper"]),this.navBurger=new a.BaseComponent("div",["navigation-burger"]),this.navSwitchContainer=new a.BaseComponent("div",["switch-container"]),this.switchContainerCheckBox=s,this.controlsButtonsContainer=new a.BaseComponent("div",["header-btns--container"]),this.playButton=new a.BaseComponent("button",["play-button","green-btn","none"]),this.replayButton=new a.BaseComponent("button",["restart-button","orange-btn"]),this.initHeader(),this.initNav(e,t),this.addCloseHandlers()}initHeader(){this.header.appendChild(this.navContainer.element),this.header.appendChild(this.navBurger.element),this.controlsButtonsContainer.element.appendChild(this.playButton.element),this.playButton.element.textContent="Play game",this.controlsButtonsContainer.element.appendChild(this.replayButton.element),this.replayButton.element.textContent="Replay sound",this.header.appendChild(this.controlsButtonsContainer.element),i.element.prepend(s.element),this.navSwitchContainer.element.appendChild(i.element),this.header.appendChild(this.navSwitchContainer.element)}initNav(e,t){this.navContainer.element.appendChild(this.navigationWrapper.element),this.navigationWrapper.element.appendChild(this.navigationCloseBtn.element),this.navigationCloseBtn.element.textContent="x";for(let t=0;t<e.length;t++){const n=document.createElement("li"),a=Object.keys(e[t])[0];n.textContent=a,n.id=a,r.appendChild(n)}const n=Array.from(r.children);n.forEach((e=>{e.addEventListener("click",(()=>{n.forEach((e=>{e.classList.remove("active-item")})),e.classList.add("active-item"),window.location.hash=e.id}))})),r.addEventListener("click",(e=>{e.target.textContent&&"LI"===e.target.tagName&&(t.category=String(e.target.textContent))})),this.navigationWrapper.element.appendChild(r)}addCloseHandlers(){window.addEventListener("click",(e=>{e.target.classList.contains("navigation-burger")||e.target.classList.contains("navigation-ul")||e.target.classList.contains("navigation-wrapper")||this.navContainer.element.classList.remove("active")})),this.navBurger.element.addEventListener("click",(()=>{this.navContainer.element.classList.toggle("active")})),this.navigationCloseBtn.element.addEventListener("click",(()=>{this.navContainer.element.classList.toggle("active")}))}switherHandler(e){this.switchContainerCheckBox.element.addEventListener("input",(t=>{document.body.classList.toggle("game"),t.target.checked?(e.mode="Game",this.playButton.element.classList.remove("none"),setTimeout((()=>{this.playButton.element.style.opacity="1"}),20)):(e.mode="Train",this.playButton.element.style.opacity="0",setTimeout((()=>{this.playButton.element.classList.add("none")}),400))}))}}},129:(e,t,n)=>{e.exports=n.p+"assets/github.svg"},153:(e,t,n)=>{e.exports=n.p+"assets/rss.svg"}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var s=t[a]={exports:{}};return e[a].call(s.exports,s,s.exports,n),s.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{const e=n(752),t=n(331),a={mode:"Train",category:"Main page",errors:0,currentSound:""};window.onload=()=>{window.location.hash="";const n=document.getElementById("app-container");if(!n)throw Error("App root element not found");const i=new e.App(n,t.arrayOfWords,a);window.addEventListener("hashchange",(()=>{if("Main page"===a.category)return i.GameField.resetStatusContainer(),i.headerComponent.playButton.element.setAttribute("disabled","true"),i.GameField.gameFieldInit(t.arrayOfWords,a),void i.headerComponent.controlsButtonsContainer.element.classList.remove("play");i.removeListeners(),i.headerComponent.playButton.element.removeAttribute("disabled"),i.GameField.gameFieldRender(t.arrayOfWords,a),i.startPlayGame(a),i.headerComponent.controlsButtonsContainer.element.classList.remove("play"),i.GameField.resetStatusContainer(),a.currentSound=""})),i.headerComponent.switchContainerCheckBox.element.addEventListener("input",(()=>{var e;i.headerComponent.controlsButtonsContainer.element.classList.remove("play"),i.GameField.resetStatusContainer(),null===(e=document.querySelectorAll(".done"))||void 0===e||e.forEach((e=>e.classList.remove("done"))),a.errors=0,a.currentSound="",i.removeListeners(),i.startPlayGame(a)})),i.headerComponent.switherHandler(a)}})()})();