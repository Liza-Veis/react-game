(this.webpackJsonpchess=this.webpackJsonpchess||[]).push([[0],{10:function(e,t,n){"use strict";var a=n(25);n.d(t,"DEFAULT_AILEVEL",(function(){return a.a})),n.d(t,"DEFAULT_MODE",(function(){return a.b})),n.d(t,"DEFAULT_MUSIC",(function(){return a.c})),n.d(t,"DEFAULT_SIDE",(function(){return a.d})),n.d(t,"DEFAULT_SOUND",(function(){return a.e})),n.d(t,"DEFAULT_VIEW",(function(){return a.f}));n(26)},25:function(e,t,n){"use strict";n.d(t,"f",(function(){return a})),n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return c})),n.d(t,"e",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return o}));var a="fixed",s="random",c="with-AI",r=.5,i=0,o=.5},26:function(e,t){},40:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(16),r=n.n(c),i=n(6),o=n(5),l=(n(40),n(4)),u=n.p+"static/media/rs-logo.ad178c0d.svg",d=n(0),m=function(){return Object(d.jsxs)("footer",{className:"footer",children:[Object(d.jsx)("a",{className:"footer__logo",href:"https://rs.school/react/",children:Object(d.jsx)("img",{src:u,alt:"RS-School"})}),Object(d.jsxs)("span",{className:"footer__copy",children:["Made by ",Object(d.jsx)("a",{href:"https://github.com/Liza-Veis",children:"@Liza-Veis"})," in 2021"]})]})},b="SELECT_SQUARE",j="MOVE_PIECE",v="MAKE_AI_MOVE",h="PROMOTE_PAWN",O="START_GAME",f="SURRENDER",p="UNDO",x="SET_VIEW",S="SET_SIDE",g="SET_MODE",_="SET_MUSIC",w="SET_SOUND",y="SET_AILevel",M=function(e){return{type:_,payload:e}},N=function(e){return{type:w,payload:e}},E=Object(o.b)(null,(function(e){return{startNewGame:function(){return e({type:O})}}}))((function(e){var t=e.startNewGame;return Object(d.jsxs)("div",{className:"main",children:[Object(d.jsx)(i.b,{className:"btn",onClick:t,to:"/game",children:"New Game"}),Object(d.jsx)(i.b,{className:"btn",to:"/settings",children:"Settings"}),Object(d.jsx)(i.b,{className:"btn",to:"/statistics",children:"Statistics"}),Object(d.jsx)(i.b,{className:"btn",to:"/hotkeys",children:"Hot keys"})]})})),A=n(12),I=function(e){var t=e.children,n=e.isDark,a=e.handleClick,s=e.isLastMove,c=e.isPossibleSquare,r=e.isCapturedSquare,i=e.possibleMovesShown,o=e.lastMoveShown,l="square";return n&&(l+=" square--dark"),s&&(l+=o?" square--last-move":""),c&&(l+=" interactive",l+=i?" square--possible":""),r&&(l+=" interactive",l+=i?" square--captured":""),Object(d.jsx)("div",{className:l,onClick:a,children:t})},L=function(e){var t=e.piece,n=e.isSelected,a=e.turn,s=e.mode,c=e.side,r=t.type,i=t.color,o="".concat(i).concat(r.toUpperCase()),l="".concat("/react-game","/assets/").concat(o,".png"),u="";a===i&&"autoplay"!==s&&("with-AI"===s?c===i&&(u="interactive"):u="interactive");var m="piece ".concat(n?"selected":""," ").concat(u);return Object(d.jsx)("div",{className:m,children:Object(d.jsx)("img",{src:l,alt:o})})},k=function(e,t){return{x:t?Math.abs(e%8-7):e%8,y:t?Math.floor(e/8):Math.abs(Math.floor(e/8)-7)}},T=function(e){var t=k(e);return(t.x+t.y)%2===1},C=function(e,t){var n=k(e,t),a=n.x,s=n.y;return"".concat("abcdefgh"[a]).concat(s+1)},D=function(e,t){var n=e[0],a=+e[1]-1,s="abcdefgh".indexOf(n);return t?8*a+7-s:8*(7-a)+s},U=function(){return"wb"[Math.round(Math.random())]},F=Object(o.b)(null,(function(e){return{promote:function(t){return e(function(e){return{type:h,payload:e}}(t))}}}))((function(e){var t=e.data,n=e.promote,a=null===t||void 0===t?void 0:t.color;return Object(d.jsx)("div",{className:"promotion",children:Object(d.jsxs)("div",{className:"promotion__body",children:[Object(d.jsx)("h2",{className:"promotion__title",children:"Pawn promotion"}),Object(d.jsx)("div",{className:"promotion__box",children:["q","n","r","b"].map((function(e,s){var c="".concat(a).concat(e.toUpperCase());return Object(d.jsx)("div",{className:"promotion__item interactive",onClick:function(){return function(e){if(t){var a=t.from,s=t.to;n({from:a,to:s,promotion:e})}}(e)},children:Object(d.jsx)("img",{src:"./assets/".concat(c,".png"),alt:c})},s)}))})]})})})),q=Object(o.b)((function(e){return{result:e.result}}))((function(e){var t=e.result;return Object(d.jsx)("div",{className:"game-over",children:Object(d.jsxs)("div",{className:"game-over__body",children:[Object(d.jsx)("h2",{className:"game-over__title",children:"Game Over"}),Object(d.jsx)("span",{className:"game-over__result",children:t}),Object(d.jsx)(i.b,{to:"/",className:"btn game-over__btn",children:"Menu"})]})})})),R=Object(o.b)((function(e){return{board:e.board,selectedSquare:e.selectedSquare,promotion:e.promotion,turn:e.turn,isGameOver:e.isGameOver,mode:e.mode,side:e.actualSide,isSurrender:e.isSurrender,lastMove:e.lastMove,possibleMoves:e.posibleMoves,capturedMoves:e.capturedMoves}}),(function(e){return{selectSquare:function(t){return e(function(e){return{type:b,payload:e}}(t))},movePiece:function(t){return e(function(e){return{type:j,payload:e}}(t))}}}))((function(e){var t=e.board,n=e.selectedSquare,s=e.promotion,c=e.turn,r=e.isGameOver,i=e.mode,o=e.side,l=e.isSurrender,u=e.lastMove,m=e.possibleMoves,b=e.capturedMoves,j=e.lastMoveShown,v=e.possibleMovesShown,h=Object(a.useState)(r),O=Object(A.a)(h,2),f=O[0],p=O[1];Object(a.useEffect)((function(){var e=setTimeout((function(){p(r)}),l?0:1e3);return function(){return clearTimeout(e)}}),[r,l]);return Object(d.jsxs)("div",{className:"board",children:[t.map((function(a,s){return Object(d.jsx)(I,{isDark:T(s),handleClick:function(){return function(a,s){if("autoplay"!==i&&n!==s&&("with-AI"!==i||c===o))if(a)if(a.color===c){var r=t[s];r&&r.color===a.color?e.selectSquare(s):n&&e.movePiece(s)}else n&&e.movePiece(s);else e.movePiece(s)}(a,s)},isLastMove:u&&u.includes(s),isPossibleSquare:m&&m.includes(s),isCapturedSquare:b&&b.includes(s),lastMoveShown:j,possibleMovesShown:v,children:a&&Object(d.jsx)(L,{piece:a,turn:c,isSelected:n===s,mode:i,side:o})},s)})),s&&Object(d.jsx)(F,{data:s}),f&&Object(d.jsx)(q,{})]})})),G=new Worker("".concat("/react-game","/stockfish.js"));G.postMessage("uci"),G.postMessage("ucinewgame"),G.postMessage("setoption name MultiPV value 3"),G.postMessage("setoption name Minimum Thinking Time value 500");var V=G,P=function(e){V.postMessage("position fen ".concat(e)),V.postMessage("go wtime 3000 btime 3000 winc 1000 binc 1000")},W=function(e){var t=20*e;V.postMessage("setoption name Skill Level value ".concat(t));var n=Math.round(6.35*t+1),a=Math.round(-.5*t+10);V.postMessage("setoption name Skill Level Maximum Error value ".concat(a)),V.postMessage("setoption name Skill Level Probability value ".concat(n))},H=function(e,t){var n=Object(a.useCallback)((function(n){n.code===e&&t()}),[e,t]);Object(a.useEffect)((function(){return document.addEventListener("keydown",n,!0),function(){return document.removeEventListener("keydown",n,!0)}}),[n])},K=Object(o.b)((function(e){return{isGameOver:e.isGameOver,mode:e.mode}}),(function(e){return{surrender:function(){return e({type:f})},undo:function(){return e({type:p})}}}))((function(e){var t=e.isGameOver,n=e.mode,s=e.undo,c=e.surrender,r=Object(a.useState)(!0),i=Object(A.a)(r,2),o=i[0],l=i[1],u=Object(a.useState)(!0),m=Object(A.a)(u,2),b=m[0],j=m[1];H("KeyH",(function(){return l(!o)})),H("KeyM",(function(){return j(!b)}));var v=Object(a.useState)(),h=Object(A.a)(v,2),O=h[0],f=h[1],p=Object(a.useCallback)((function(){if(!O&&(s(),"with-AI"===n)){var e=setTimeout((function(){s(),f(null)}),800);f(e)}}),[n,s,O]);H("KeyS",c),H("KeyU",p);return Object(d.jsxs)("div",{className:"game",children:[Object(d.jsx)(R,{lastMoveShown:o,possibleMovesShown:b}),!t&&Object(d.jsx)("button",{className:"btn game__btn",onClick:function(){c(),V.postMessage("quit")},type:"button",children:"Surrender"})]})})),B=function(e){var t=e.name,n=e.value,a=e.checked,s=e.label;return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{type:"radio",name:t,value:n,defaultChecked:a}),s]})},J=function(e){var t=e.handleChange,n=e.side;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"settings__item",children:[Object(d.jsx)("h3",{className:"settings__title",children:"Side"}),Object(d.jsxs)("div",{className:"settings__box",onChange:t,children:[Object(d.jsx)(B,{name:"side",value:"w",checked:"w"===n,label:"White"}),Object(d.jsx)(B,{name:"side",value:"b",checked:"b"===n,label:"Black"}),Object(d.jsx)(B,{name:"side",value:"random",checked:"random"===n,label:"Random"})]})]})})},z=function(e){var t=e.name,n=e.value,a=e.label;return Object(d.jsxs)("label",{children:[a,Object(d.jsx)("input",{type:"range",name:t,min:"0",max:"1",step:"0.1",defaultValue:n})]})},Q=function(e){var t=e.handleChange,n=e.music,a=e.sound;return Object(d.jsxs)("div",{className:"settings__item audio",children:[Object(d.jsx)("h3",{className:"settings__title",children:"Audio"}),Object(d.jsxs)("div",{className:"settings__box",onChange:t,children:[Object(d.jsx)(z,{name:"music",value:n,label:"Music:"}),Object(d.jsx)(z,{name:"sound",value:a,label:"Sound:"})]})]})},X=function(e){var t=e.fullscreen,n=Object(A.a)(t,2),s=n[0],c=n[1],r=Object(a.useState)(s),i=Object(A.a)(r,2),o=i[0],l=i[1];return Object(d.jsxs)("div",{className:"settings__item",children:[Object(d.jsx)("h3",{className:"settings__title",children:"Fullscreen"}),Object(d.jsx)("div",{className:"settings__box",children:Object(d.jsxs)("label",{htmlFor:"fullscreen",children:[Object(d.jsx)("input",{type:"radio",id:"fullscreen",onClick:function(){l(!o),s===o&&c()},defaultChecked:o}),"Enable"]})})]})},Y=function(e){var t=e.handleChange,n=e.mode;return Object(d.jsxs)("div",{className:"settings__item",children:[Object(d.jsx)("h3",{className:"settings__title",children:"Mode"}),Object(d.jsxs)("div",{className:"settings__box",onChange:t,children:[Object(d.jsx)(B,{name:"mode",value:"with-AI",checked:"with-AI"===n,label:"With AI"}),Object(d.jsx)(B,{name:"mode",value:"two-players",checked:"two-players"===n,label:"Two players"}),Object(d.jsx)(B,{name:"mode",value:"autoplay",checked:"autoplay"===n,label:"Autoplay"})]})]})},Z=function(e){var t=e.handleChange,n=e.view;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"settings__item",children:[Object(d.jsx)("h3",{className:"settings__title",children:"View"}),Object(d.jsxs)("div",{className:"settings__box",onChange:t,children:[Object(d.jsx)(B,{name:"view",value:"auto-rotate",checked:"auto-rotate"===n,label:"Auto rotate"}),Object(d.jsx)(B,{name:"view",value:"fixed",checked:"fixed"===n,label:"Fixed"})]})]})})},$=Object(o.b)((function(e){return{side:e.side,view:e.view,mode:e.mode,sound:e.sound,music:e.music,AILevel:e.AILevel}}),(function(e){return{setSide:function(t){return e(function(e){return{type:S,payload:e}}(t))},setView:function(t){return e(function(e){return{type:x,payload:e}}(t))},setMode:function(t){return e(function(e){return{type:g,payload:e}}(t))},setSound:function(t){return e(N(t))},setMusic:function(t){return e(M(t))},setAILevel:function(t){return e(function(e){return{type:y,payload:e}}(t))}}}))((function(e){var t=e.side,n=e.view,a=e.mode,s=e.sound,c=e.music,r=e.fullscreen,o=e.AILevel,l=function(t){switch(t.target.name){case"view":e.setView(t.target.value);break;case"side":e.setSide(t.target.value);break;case"mode":e.setMode(t.target.value);break;case"music":e.setMusic(+t.target.value);break;case"sound":e.setSound(+t.target.value);break;case"AILevel":e.setAILevel(+t.target.value)}};return Object(d.jsxs)("div",{className:"settings",children:[Object(d.jsx)(i.b,{className:"btn btn--back",to:"/",children:"Back"}),Object(d.jsx)(Y,{handleChange:l,mode:a}),"with-AI"===a&&Object(d.jsx)(J,{handleChange:l,side:t}),"two-players"===a&&Object(d.jsx)(Z,{handleChange:l,view:n}),"two-players"!==a&&Object(d.jsxs)("div",{className:"settings__item",children:[Object(d.jsx)("h3",{className:"settings__title",children:"AI Level"}),Object(d.jsx)("div",{className:"settings__box",onChange:l,children:Object(d.jsx)(z,{name:"AILevel",value:o,label:""})})]}),Object(d.jsx)(Q,{handleChange:l,music:c,sound:s}),Object(d.jsx)(X,{fullscreen:r})]})})),ee=function(e){var t=Object(a.useState)(null!==document.fullscreenElement),n=Object(A.a)(t,2),s=n[0],c=n[1];return Object(a.useLayoutEffect)((function(){document.onfullscreenchange=function(){return c(null!==document.fullscreenElement),function(){document.onfullscreenchange=null}}})),[s,function(){null!==e.current&&(s?document.exitFullscreen().then((function(){return c(!1)})):e.current.requestFullscreen().then((function(){return c(null!==document.fullscreenElement)})))}]},te=Object(o.b)((function(e){return{statistics:e.statistics}}))((function(e){var t=e.statistics,n=["date","mode","side","winner"];return Object(d.jsxs)("div",{className:"statistics",children:[Object(d.jsx)(i.b,{className:"btn btn--back",to:"/",children:"Back"}),Object(d.jsxs)("table",{className:"statistics__table",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{className:"statistics__header",children:"\u2116"}),n.map((function(e,t){return Object(d.jsx)("th",{className:"statistics__header",children:e},t)}))]})}),Object(d.jsx)("tbody",{children:t.map((function(e,t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:"statistics__number",children:t+1}),n.map((function(t,n){return Object(d.jsx)("td",{className:"statistics__cell",children:e[t].toString()},n)}))]},t)}))})]})]})})),ne=n(15),ae=function(){return Object(d.jsxs)("div",{className:"hot-keys",children:[Object(d.jsx)(i.b,{className:"btn btn--back",to:"/",children:"Back"}),Object(d.jsxs)("ul",{className:"hot-keys__list",children:[Object(d.jsxs)("li",{className:"hot-keys__item",children:[Object(d.jsx)("span",{children:"U"}),Object(d.jsx)("span",{children:"Undo move"})]}),Object(d.jsxs)("li",{className:"hot-keys__item",children:[Object(d.jsx)("span",{children:"S"}),Object(d.jsx)("span",{children:"Surrender"})]}),Object(d.jsxs)("li",{className:"hot-keys__item",children:[Object(d.jsx)("span",{children:"H"}),Object(d.jsx)("span",{children:"Hide last move"})]}),Object(d.jsxs)("li",{className:"hot-keys__item",children:[Object(d.jsx)("span",{children:"M"}),Object(d.jsx)("span",{children:"Hide possible moves"})]}),Object(d.jsxs)("li",{className:"hot-keys__item",children:[Object(d.jsxs)("span",{children:[Object(d.jsx)(ne.d,{}),Object(d.jsx)(ne.a,{})]}),Object(d.jsx)("span",{children:"Set music volume"})]}),Object(d.jsxs)("li",{className:"hot-keys__item",children:[Object(d.jsxs)("span",{children:[Object(d.jsx)(ne.b,{}),Object(d.jsx)(ne.c,{})]}),Object(d.jsx)("span",{children:"Set sound volume"})]})]})]})},se=Object(o.b)((function(e){return{music:e.music,sound:e.sound}}),(function(e){return{setMusic:function(t){return e(M(t))},setSound:function(t){return e(N(t))}}}))((function(e){var t=e.music,n=e.sound;H("ArrowUp",(function(){return e.setMusic(Math.min(t+.1,1))})),H("ArrowDown",(function(){return e.setMusic(Math.max(t-.1,0))})),H("ArrowRight",(function(){return e.setSound(Math.min(n+.1,1))})),H("ArrowLeft",(function(){return e.setSound(Math.max(n-.1,0))}));var s=Object(a.useRef)(null),c=ee(s);return Object(d.jsxs)("div",{className:"App",ref:s,children:[Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{exact:!0,path:"/",component:E}),Object(d.jsx)(l.a,{path:"/game",component:K}),Object(d.jsx)(l.a,{path:"/statistics",component:te}),Object(d.jsx)(l.a,{path:"/settings",children:Object(d.jsx)($,{fullscreen:c})}),Object(d.jsx)(l.a,{path:"/hotkeys",component:ae})]}),Object(d.jsx)(m,{})]})})),ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),c(e),r(e)}))},re=n(17),ie=n(2),oe=n(18),le=n(29),ue=n(10),de=n.p+"static/media/move.a7304208.wav",me=n.p+"static/media/music.69eab84e.mp3",be=function(e){if("fen"===e)return localStorage.getItem("react-chess-".concat(e));if("statistics"===e){var t=localStorage.getItem("react-chess-statistics");return JSON.parse(t||"[]")}var n=localStorage.getItem("react-chess-settings");return n&&JSON.parse(n)[e]||null},je=function(e,t){if("string"===typeof e)if("fen"!==e||"string"!==typeof t)if("statistics"!==e){var n=localStorage.getItem("react-chess-settings")||"{}",a=JSON.parse(n),s=Object(ie.a)(Object(ie.a)({},a),{},Object(oe.a)({},e,t));localStorage.setItem("react-chess-settings",JSON.stringify(s))}else localStorage.setItem("react-chess-statistics",JSON.stringify(t));else localStorage.setItem("react-chess-fen",t)},ve=be("AILevel"),he={fen:be("fen")||void 0,view:be("view")||ue.DEFAULT_VIEW,mode:be("mode")||ue.DEFAULT_MODE,side:be("side")||ue.DEFAULT_SIDE,AILevel:ve||0===ve?ve:ue.DEFAULT_AILEVEL,actualSide:be("actualSide"),statistics:be("statistics")||[]};if(!he.actualSide){var Oe=he.side;he.actualSide="random"===Oe?U():Oe}W(he.AILevel);var fe={move:new Audio(de),music:new Audio(me)};fe.music.loop=!0;var pe=function(e){var t=e.mode,n=e.view,a=e.turn,s=e.actualSide;return"autoplay"!==t&&("with-AI"!==t&&"auto-rotate"===n&&"w"!==a||"with-AI"===t&&"b"===s)},xe=new le(he.fen),Se=function(e){var t=Object(ie.a)(Object(ie.a)({},e),{},{date:(new Date).toLocaleString("ru-Ru",{month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"})}),n=be("statistics");n.unshift(t),je("statistics",n.slice(0,10))},ge=function(e){var t=xe.board().flat();return pe(e)?t.reverse():t},_e=function(e){var t="with-AI"===e.mode?e.actualSide:"-";if(xe.in_checkmate()){var n="w"===xe.turn()?"b":"w";return Se({mode:e.mode,side:t,winner:n}),"CHECKMATE: WINNER - ".concat("b"===n?"BLACK":"WHITE")}if(xe.in_draw()){var a="50 MOVES RULE";return xe.in_stalemate()?a="STALEMATE":xe.in_threefold_repetition()?a="THREEFOLD REPETITION":xe.insufficient_material()&&(a="INSUFFICIENT MATERIAL"),Se({mode:e.mode,side:t,winner:"-"}),"DRAW - ".concat(a)}return Se({mode:e.mode,side:t,winner:"-"}),"UNKNOWN REASON"};window.location.pathname.includes("/game")&&"two-players"!==he.mode&&("autoplay"!==he.mode&&xe.turn()===he.actualSide||P(xe.fen()));var we={board:ge({view:he.view,turn:xe.turn(),mode:he.mode,actualSide:he.actualSide}),selectedSquare:null,promotion:null,turn:xe.turn(),view:he.view,side:he.side,actualSide:he.actualSide,mode:he.mode,isGameOver:!1,result:null,isSurrender:!1,music:ue.DEFAULT_MUSIC,sound:ue.DEFAULT_SOUND,statistics:he.statistics,lastMove:null,posibleMoves:null,capturedMoves:null,AILevel:he.AILevel},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:var n;xe.reset(),je("fen","");var a=be("side")||ue.DEFAULT_SIDE,s=be("view")||ue.DEFAULT_VIEW,c=be("mode")||ue.DEFAULT_MODE,r=null!==(n=be("AILevel"))&&void 0!==n?n:ue.DEFAULT_AILEVEL,i="random"===a?U():a;je("actualSide",i),je("mode",c),je("view",s),je("side",a),je("AILevel",r),("autoplay"===c||"with-AI"===c&&"b"===i)&&P(xe.fen());var o={view:e.view,turn:xe.turn(),mode:c,actualSide:i};return Object(ie.a)(Object(ie.a)({},e),{},{selectedSquare:null,promotion:null,turn:xe.turn(),view:s,side:a,actualSide:i,mode:c,board:ge(o),isGameOver:!1,result:null,isSurrender:!1,lastMove:null,posibleMoves:null,capturedMoves:null});case b:var l=e.view,u=e.mode,d=e.actualSide,m=e.turn,M=pe({view:l,mode:u,actualSide:d,turn:m}),N=xe.moves({square:C(t.payload,M),verbose:!0}),E=[],A=[];return N.forEach((function(e){e.captured?A.push(D(e.to,M)):E.push(D(e.to,M))})),Object(ie.a)(Object(ie.a)({},e),{},{selectedSquare:t.payload,posibleMoves:E,capturedMoves:A});case j:var I=e.selectedSquare,L=e.view,k=e.turn,T=e.mode,F=e.actualSide;if(!I||I===t.payload)return e;var q=pe({view:L,turn:k,mode:T,actualSide:F}),R=C(I,q),G=C(t.payload,q),V=xe.moves({square:R,verbose:!0}).filter((function(e){return e.promotion}));if(V.length>0){fe.move.play().then().catch();var H=V[0].color;return Object(ie.a)(Object(ie.a)({},e),{},{promotion:{from:R,to:G,color:H}})}var K=xe.move({from:R,to:G});if(!K)return Object(ie.a)(Object(ie.a)({},e),{},{selectedSquare:null,posibleMoves:null,capturedMoves:null});je("fen",xe.fen());var B=xe.game_over();e.sound&&fe.move.play().then().catch(),B||"with-AI"!==T||xe.turn()===F||P(xe.fen());var J={view:e.view,turn:xe.turn(),mode:T,actualSide:F};return"auto-rotate"===L&&"two-players"===T&&(q=!q),Object(ie.a)(Object(ie.a)({},e),{},{selectedSquare:null,turn:xe.turn(),board:ge(J),isGameOver:B,statistics:B?be("statistics"):e.statistics,result:B?_e({mode:T,actualSide:F}):null,lastMove:[D(R,q),D(G,q)],posibleMoves:null,capturedMoves:null});case h:var z=t.payload,Q=z.from,X=z.to,Y=z.promotion;xe.move({from:Q,to:X,promotion:Y}),localStorage.setItem("react-chess-fen",xe.fen());var Z=xe.game_over(),$=e.mode,ee=e.actualSide;Z||("with-AI"!==$||xe.turn()===ee)&&"autoplay"!==$||P(xe.fen());var te={view:e.view,turn:xe.turn(),mode:$,actualSide:ee},ne=pe(te);return Object(ie.a)(Object(ie.a)({},e),{},{selectedSquare:null,promotion:null,turn:xe.turn(),board:ge(te),isGameOver:Z,statistics:Z?be("statistics"):e.statistics,result:Z?_e({mode:$,actualSide:ee}):null,lastMove:[D(Q,ne),D(X,ne)],posibleMoves:null,capturedMoves:null});case v:if(e.isSurrender)return Object(ie.a)({},e);xe.move(t.payload),xe.move(t.payload),je("fen",xe.fen()),e.sound&&fe.move.play().then().catch();var ae=xe.game_over(),se=e.mode,ce=e.actualSide,re=e.view,oe={view:re,mode:se,actualSide:ce,turn:xe.turn()},le=t.payload,de=le.from,me=le.to,ve=pe(oe);return"auto-rotate"===re&&"two-players"===se&&(ve=!ve),ae||"autoplay"!==se||P(xe.fen()),Object(ie.a)(Object(ie.a)({},e),{},{promotion:null,turn:xe.turn(),board:ge(oe),isGameOver:ae,statistics:ae?be("statistics"):e.statistics,result:ae?_e({mode:se,actualSide:ce}):null,lastMove:[D(de,ve),D(me,ve)]});case f:var he="WINNER - ",Oe="-";"with-AI"===e.mode?Oe="w"===e.actualSide?"b":"w":"autoplay"!==e.mode&&(Oe="w"===e.turn?"b":"w"),"b"===Oe?he+="BLACK":"w"===Oe?he+="WHITE":he="DRAW";var ye="with-AI"===e.mode?e.actualSide:"-";return Se({mode:e.mode,side:ye,winner:Oe}),Object(ie.a)(Object(ie.a)({},e),{},{isSurrender:!0,isGameOver:!0,result:he,statistics:be("statistics")});case p:var Me=e.mode,Ne=e.isGameOver,Ee=e.promotion,Ae=e.turn,Ie=e.actualSide,Le=e.view;if("autoplay"===Me)return Object(ie.a)({},e);var ke=xe.history({verbose:!0});if(ke.length<1)return Object(ie.a)(Object(ie.a)({},e),{},{lastMove:null,posibleMoves:null,capturedMoves:null});if(Ne||Ee)return Object(ie.a)({},e);if("with-AI"===Me&&ke.length<=2&&Ae===Ie)return Object(ie.a)({},e);var Te=xe.undo();Te&&fe.move.play().then().catch(),je("fen",xe.fen());var Ce=ke.length>=2?ke[ke.length-2]:null,De=pe({mode:Me,view:Le,turn:xe.turn(),actualSide:Ie}),Ue={view:Le,turn:xe.turn(),mode:Me,actualSide:Ie};return Object(ie.a)(Object(ie.a)({},e),{},{board:ge(Ue),turn:xe.turn(),lastMove:Ce?[D(Ce.from,De),D(Ce.to,De)]:null});case x:return je("view",t.payload),Object(ie.a)(Object(ie.a)({},e),{},{view:t.payload});case S:return je("side",t.payload),Object(ie.a)(Object(ie.a)({},e),{},{side:t.payload});case g:return je("mode",t.payload),Object(ie.a)(Object(ie.a)({},e),{},{mode:t.payload});case w:return fe.move.volume=t.payload,Object(ie.a)(Object(ie.a)({},e),{},{sound:t.payload});case y:return je("AILevel",t.payload.toString()),W(t.payload),Object(ie.a)(Object(ie.a)({},e),{},{AILevel:t.payload});case _:var Fe=fe.music;return Fe.paused&&t.payload?Fe.play().then().catch():t.payload||Fe.pause(),Fe.volume=t.payload,Object(ie.a)(Object(ie.a)({},e),{},{music:t.payload});default:return e}},Me=Object(re.b)(ye),Ne=function(e,t){if(e.data&&e.data.includes("bestmove")){var n=e.data.split(" ")[1],a=n.slice(0,2),s=n.slice(2,4);t((c={from:a,to:s,promotion:n[4]},{type:v,payload:c}))}var c};V.onmessage=function(e){return Ne(e,Me.dispatch)},r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(i.a,{basename:"/react-game",children:Object(d.jsx)(o.a,{store:Me,children:Object(d.jsx)(se,{})})})}),document.getElementById("root")),ce()}},[[48,1,2]]]);
//# sourceMappingURL=main.18ed09aa.chunk.js.map