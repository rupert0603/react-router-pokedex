(this["webpackJsonpreact-router-pokedex"]=this["webpackJsonpreact-router-pokedex"]||[]).push([[0],{25:function(e,t,s){},26:function(e,t,s){},33:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s.n(n),p=s(15),o=s.n(p),c=(s(25),s(16)),i=s(17),m=s(20),r=s(19),d=(s(26),s(9)),l=s(2),h=[{name:"Bulbasaur",dexNo:"001",type1:"Grass",type2:"Poison",img:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png"},{name:"Ivysaur",dexNo:"002",type1:"Grass",type2:"Poison",img:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png"},{name:"Venusaur",dexNo:"003",type1:"Grass",type2:"Poison",img:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png"},{name:"Charmander",dexNo:"004",type1:"Fire",type2:"NA",img:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png"},{name:"Charmeleon",dexNo:"005",type1:"Fire",type2:"NA",img:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png"},{name:"Charizard",dexNo:"006",type1:"Fire",type2:"Flying",img:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png"},{name:"Squirtle",dexNo:"007",type1:"Water",type2:"NA",img:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png"},{name:"Wartortle",dexNo:"008",type1:"Water",type2:"NA",img:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png"},{name:"Blastoise",dexNo:"009",type1:"Water",type2:"NA",img:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png"},{name:"Caterpie",dexNo:"010",type1:"Bug",type2:"NA",img:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/010.png"},{name:"Metapod",dexNo:"011",type1:"Bug",type2:"NA",img:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/011.png"},{name:"Butterfree",dexNo:"012",type1:"Bug",type2:"Flying",img:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/012.png"}],j=s(1),x=function(e){Object(m.a)(s,e);var t=Object(r.a)(s);function s(){var e;Object(c.a)(this,s);for(var n=arguments.length,a=new Array(n),p=0;p<n;p++)a[p]=arguments[p];return(e=t.call.apply(t,[this].concat(a))).state={pkmnTypes:[],pkmnList:h},e}return Object(i.a)(s,[{key:"componentDidMount",value:function(){for(var e=[],t=0;t<h.length;++t)e.includes(h[t].type1)||e.push(h[t].type1),"NA"===h[t].type2||e.includes(h[t].type2)||e.push(h[t].type2);this.setState({pkmnTypes:e})}},{key:"render",value:function(){var e=this;return Object(j.jsxs)("main",{className:"backgroundColor",children:[Object(j.jsxs)("nav",{children:[Object(j.jsx)(d.b,{to:"/All",className:"navLinks",children:"All"}),this.state.pkmnTypes.map((function(e){return Object(j.jsx)(d.b,{to:"/"+e,className:"navLinks",children:e},e)}))]}),Object(j.jsxs)("div",{className:"pokemonContainer",children:[Object(j.jsx)(l.b,{path:"/",children:Object(j.jsx)(l.a,{to:"/All"})}),Object(j.jsx)(l.b,{path:"/All",children:this.state.pkmnList.map((function(e){return Object(j.jsxs)("div",{className:"pokemonCard",children:[Object(j.jsx)("div",{children:Object(j.jsx)("img",{src:e.img,alt:e.name,className:"pokemonImg"})}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("p",{children:["#",e.dexNo]}),Object(j.jsx)("h2",{children:e.name}),Object(j.jsx)("span",{className:"pokemonType",children:e.type1}),"NA"!==e.type2?Object(j.jsx)("span",{className:"pokemonType",children:e.type2}):null]})]},e.dexNo)}))}),this.state.pkmnTypes.map((function(t){return Object(j.jsx)(l.b,{path:"/"+t,children:e.state.pkmnList.filter((function(e){return e.type1===t||e.type2===t})).map((function(e){return Object(j.jsxs)("div",{className:"pokemonCard",children:[Object(j.jsx)("div",{children:Object(j.jsx)("img",{src:e.img,alt:e.name,className:"pokemonImg"})}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("p",{children:["#",e.dexNo]}),Object(j.jsx)("h2",{children:e.name}),Object(j.jsx)("span",{className:"pokemonType",children:e.type1}),"NA"!==e.type2?Object(j.jsx)("span",{className:"pokemonType",children:e.type2}):null]})]},e.dexNo)}))},t)}))]})]})}}]),s}(a.a.Component),g=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,34)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,p=t.getLCP,o=t.getTTFB;s(e),n(e),a(e),p(e),o(e)}))};o.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(d.a,{children:Object(j.jsx)(x,{})})}),document.getElementById("root")),g()}},[[33,1,2]]]);
//# sourceMappingURL=main.668f28d6.chunk.js.map