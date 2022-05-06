(function(e){function t(t){for(var i,s,o=t[0],l=t[1],c=t[2],p=0,d=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(i=!1)}i&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},a={app:0},r=[];function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"05f2":function(e,t){e.exports=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"addressMintedBalance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"baseExtension",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"baseURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"cost",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"maxSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_mintAmount",type:"uint256"}],name:"mint",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"nftPerAddressLimit",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"notRevealedUri",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bool",name:"_state",type:"bool"}],name:"pause",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"paused",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"reveal",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"revealed",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_newBaseExtension",type:"string"}],name:"setBaseExtension",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_newBaseURI",type:"string"}],name:"setBaseURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_newCost",type:"uint256"}],name:"setCost",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_limit",type:"uint256"}],name:"setNftPerAddressLimit",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_notRevealedURI",type:"string"}],name:"setNotRevealedURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_owner",type:"address"}],name:"walletOfOwner",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"}]},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},15:function(e,t){},16:function(e,t){},17:function(e,t){},18:function(e,t){},19:function(e,t){},2:function(e,t){},20:function(e,t){},21:function(e,t){},3:function(e,t){},"3f22":function(e,t,n){},4:function(e,t){},"49de":function(e,t,n){"use strict";n("3f22")},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("7a23"),a={class:"flex flex-col min-h-screen font-fatfrank"};function r(e,t,n,r,s,o){var l=Object(i["m"])("Marquee"),c=Object(i["m"])("Nav"),u=Object(i["m"])("HeaderBlock"),p=Object(i["m"])("CenterSide");return Object(i["i"])(),Object(i["d"])("div",a,[Object(i["g"])(l,{dir:"reverse"}),Object(i["g"])(c),Object(i["g"])(u),Object(i["g"])(l,{dir:"normal"}),Object(i["g"])(p)])}var s={class:"py-2 text-3xl text-yellow-200 bg-yellow-200 font-fatfrank text-outline-marquee",style:{background:"#f85e7f",color:"#ffffff"}},o={class:"marquee-container",style:{"--pause-on-hover":"running","--pause-on-click":"running"}};function l(e,t,n,a,r,l){return Object(i["i"])(),Object(i["d"])("div",s,[Object(i["e"])("div",o,[Object(i["e"])("div",{class:"marquee",style:Object(i["h"])("--play: running; --direction: "+n.dir+"; --duration: 75.586s; --delay: 0s; --iteration-count: infinite;")},[(Object(i["i"])(),Object(i["d"])(i["a"],null,Object(i["l"])(10,(function(e){return Object(i["e"])("span",{key:e,class:"uppercase"},"· Mint is Live · 0.065 ETH ")})),64))],4),Object(i["e"])("div",{class:"marquee",style:Object(i["h"])("--play: running; --direction: "+n.dir+"; --duration: 75.586s; --delay: 0s; --iteration-count: infinite;")},[(Object(i["i"])(),Object(i["d"])(i["a"],null,Object(i["l"])(10,(function(e){return Object(i["e"])("span",{key:e,class:"uppercase"},"· Mint is Live · 0.065 ETH ")})),64))],4)])])}var c={name:"Marquee",props:["dir"]},u=(n("7c3a"),n("6b0d")),p=n.n(u);const d=p()(c,[["render",l],["__scopeId","data-v-5b4b4c1c"]]);var b=d,y={class:"items-center flex-none p-5 grid grid-cols-3 lg:p-7",style:{background:"#ffeef7"}},f=Object(i["e"])("div",{class:""},null,-1),m={class:"flex justify-center"},g={href:"#"},x=["src"],w={class:"flex items-center justify-end space-x-4"},h={class:"",href:"https://twitter.com/invsible_land"},v=["src"],O={class:"",href:"https://www.instagram.com/invisiblegirlfriends/"},j=["src"];function k(e,t,n,a,r,s){return Object(i["i"])(),Object(i["d"])("nav",y,[f,Object(i["e"])("div",m,[Object(i["e"])("a",g,[Object(i["e"])("img",{src:"./images/logo.png",alt:"bing bong",class:"w-8 text-white md:w-24"},null,8,x)])]),Object(i["e"])("div",w,[Object(i["e"])("a",h,[Object(i["e"])("img",{src:"./images/twitter-logo.svg",alt:"Twitter",class:"w-6 text-white md:w-8"},null,8,v)]),Object(i["e"])("a",O,[Object(i["e"])("img",{src:"./images/instagram.svg",alt:"Instagram",class:"w-6 text-white md:w-8"},null,8,j)])])])}var T={name:"Nav"};const M=p()(T,[["render",k]]);var I=M,C=function(e){return Object(i["k"])("data-v-2a147bb9"),e=e(),Object(i["j"])(),e},_={key:0,id:"header-block",class:"flex flex-col items-center justify-center flex-1",style:{background:"#ffeef7"}},R={class:"flex flex-col items-center justify-center h-full font-black text-center font-fatfrank"},E=C((function(){return Object(i["e"])("h1",{class:"text-6xl md:text-8xl lg:text-9xl leading-solid",style:{color:"#f85e7f"}},[Object(i["f"])(" INVISIBLE"),Object(i["e"])("br"),Object(i["f"])(" GIRLFRIENDS ")],-1)})),N={class:"w-full md:w-[600px] -mt-16 md:-mt-32 lg:-mt-36"},S=["src"],A={class:"text-center space-y-4 md:space-y-8 w-100"},B={class:"flex flex-col text-5xl font-black text-center uppercase lg:text-8xl text-sea-600 opacity-30"},F={id:"counter"},q=Object(i["f"])("/5000"),P=C((function(){return Object(i["e"])("span",{class:"text-3xl"},"minted",-1)})),D={key:0,class:"text-center err"},L=C((function(){return Object(i["e"])("div",{class:"h-6"},null,-1)})),U={key:1,id:"mint-block",class:"flex flex-col items-center justify-center flex-1",style:{background:"#ffeef7"}},G=C((function(){return Object(i["e"])("h1",{class:"text-5xl md:text-7xl lg:text-8xl leading-solid text-center",style:{color:"#f85e7f"}}," MINT IS LIVE ",-1)})),z={style:{padding:"30px 30px 30px 30px",width:"520px","max-width":"90vw","margin-top":"40px","margin-bottom":"80px","align-items":"center","text-align":"center","justify-content":"center","border-radius":"20px",border:"3px dashed #f85e7f"}},H=C((function(){return Object(i["e"])("div",{style:{width:"160px",height:"160px","margin-bottom":"20px","border-radius":"12px",background:"url(./images/IGFMINT.gif)","background-size":"cover"}},null,-1)})),W=C((function(){return Object(i["e"])("span",{class:"text-4xl md:text-6xl lg:text-7xl leading-solid",style:{color:"rgb(101, 109, 121)",position:"relative"}},"Choose your mint amount",-1)})),V={style:{position:"relative","margin-top":"20px"}},Y=["value"],J=C((function(){return Object(i["e"])("br",null,null,-1)})),X=["disabled"],$={key:0,style:{color:"#18bb96","text-align":"center",position:"relative","margin-top":"-40px","margin-bottom":"40px"}},K={key:1,style:{color:"#f85e7f","text-align":"center",position:"relative","margin-top":"-40px","margin-bottom":"40px"}};function Q(e,t,n,a,r,s){var o=Object(i["m"])("center");return Object(i["i"])(),Object(i["d"])("div",null,[r.mintDisabled?(Object(i["i"])(),Object(i["d"])("div",_,[Object(i["e"])("header",R,[E,Object(i["e"])("div",N,[Object(i["e"])("img",{alt:"Basketball",src:"./images/all_outfit.gif"},null,8,S)])]),Object(i["e"])("div",A,[Object(i["e"])("h2",B,[Object(i["e"])("span",null,[Object(i["e"])("span",F,Object(i["n"])(r.minted),1),q]),P]),Object(i["e"])("button",{class:"font-bold bg-white border-4 border-dashed btn bg-opacity-10 opacity-30",onClick:t[0]||(t[0]=function(e){return s.connectWallet(!0)})},Object(i["n"])(r.connect_wallet),1),r.err.length>2?(Object(i["i"])(),Object(i["d"])("div",D,Object(i["n"])(r.err),1)):Object(i["c"])("",!0),L])])):Object(i["c"])("",!0),r.mintDisabled?Object(i["c"])("",!0):(Object(i["i"])(),Object(i["d"])("div",U,[G,Object(i["g"])(o,null,{default:Object(i["o"])((function(){return[Object(i["e"])("div",z,[Object(i["g"])(o,null,{default:Object(i["o"])((function(){return[H]})),_:1}),W,Object(i["e"])("div",V,[Object(i["e"])("div",{onClick:t[1]||(t[1]=function(){return s.decreaseMintCount&&s.decreaseMintCount.apply(s,arguments)}),id:"input-minus",class:"noselect",style:{display:"inline-block",color:"#f85e7f","font-weight":"bold",background:"#ffffff","border-radius":"12px",width:"40px",height:"40px","line-height":"40px","align-items":"center","justify-content":"center","vertical-align":"middle","text-align":"center","font-size":"26px",position:"relative","z-index":"1",cursor:"pointer"}},"-"),Object(i["e"])("input",{id:"mint-quantity",type:"number",pattern:"^[0-9]+$",inputmode:"numeric",name:"commerce-add-to-cart-quantity-input",min:"1",max:"9999",class:"input-number",value:r.mintCount,style:{"text-align":"center",width:"70px","z-index":"2",border:"none",background:"transparent","line-height":"40px",outline:"none",color:"#f85e7f","font-size":"38px","font-family":"'fatfrank',sans-serif",position:"relative",top:"8px"}},null,8,Y),Object(i["e"])("div",{onClick:t[2]||(t[2]=function(){return s.increaseMintCount&&s.increaseMintCount.apply(s,arguments)}),id:"input-plus",class:"noselect",style:{display:"inline-block",color:"#f85e7f","font-weight":"bold",background:"#ffffff","border-radius":"12px",width:"40px",height:"40px","line-height":"40px","align-items":"center","justify-content":"center","vertical-align":"middle","text-align":"center","font-size":"26px",position:"relative","z-index":"1",cursor:"pointer"}},"+")]),J,Object(i["e"])("button",{disabled:r.mintClicked,class:"font-bold bg-white border-4 border-dashed btn bg-opacity-10 opacity-30",style:{color:"#ffffff",background:"#f85e7f",border:"1px solid transparent",opacity:"1","font-weight":"100",cursor:"pointer"},onClick:t[3]||(t[3]=function(){return s.purchase&&s.purchase.apply(s,arguments)})},Object(i["n"])(r.mint),9,X)])]})),_:1}),r.success.length>2?(Object(i["i"])(),Object(i["d"])("div",$,Object(i["n"])(r.success),1)):Object(i["c"])("",!0),r.err.length>2?(Object(i["i"])(),Object(i["d"])("div",K,Object(i["n"])(r.err),1)):Object(i["c"])("",!0)]))])}var Z=n("1da1"),ee=(n("d3b7"),n("25f0"),n("96cf"),n("99e5")),te=n.n(ee),ne=n("05f2"),ie={name:"Nav",data:function(){return{minted:3290,connect_wallet:"Connect wallet",mint:"MINT",mintClicked:!1,metaMaskInstalled:!0,web3:null,app_url:location.protocol+"//"+location.host,account:"",chain:null,ethChain:1,err:"",success:"",cost:.065,mintCount:1,mintDisabled:!0,address:"0xFc9145F676180653c474604863d1953261d0E93b",contract:null}},methods:{increaseMintCount:function(){this.mintCount++},decreaseMintCount:function(){this.mintCount>1&&this.mintCount--},changeNetwork:function(){var e=this;return Object(Z["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:e.web3.utils.toHex(e.ethChain)}]});case 3:t.next=8;break;case 5:t.prev=5,t.t0=t["catch"](0),console.error(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))()},purchase:function(){var e=this;return Object(Z["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.success="",e.mintClicked=!0,e.mint="Processing...",t.next=5,e.web3.eth.sendTransaction({from:e.account,to:e.address,data:e.contract.methods.mint(e.mintCount).encodeABI(),gas:3e4,value:e.web3.utils.toWei((e.mintCount*e.cost).toString(),"ether")},(function(t){e.mintClicked=!1,t?(e.minted+=Math.floor(3*Math.random()),e.mint="MINT"):(e.success="Congratulations! You minted, "+e.mintCount+"x Invisible Girls.",e.minted+=Math.floor(5*Math.random()),e.mint="MINT")}));case 5:case"end":return t.stop()}}),t)})))()},connectWallet:function(){var e=arguments,t=this;return Object(Z["a"])(regeneratorRuntime.mark((function n(){var i,a,r,s,o,l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(i=e.length>0&&void 0!==e[0]&&e[0],a=window,r=a.ethereum,s=r&&r.isMetaMask,!s){n.next=23;break}return n.prev=4,n.next=7,window.ethereum.request({method:"eth_requestAccounts"});case 7:return o=n.sent,n.next=10,window.ethereum.request({method:"net_version"});case 10:l=n.sent,t.account=o[0],t.chain=l,t.contract=new t.web3.eth.Contract(ne,t.address),t.chain!=t.ethChain?(t.mintDisabled=!0,t.err="Change network to Ethereum Mainnet",t.changeNetwork()):(t.mintDisabled=!1,t.err=""),n.next=21;break;case 17:n.prev=17,n.t0=n["catch"](4),t.err="Something went wrong.",console.log(n.t0);case 21:n.next=24;break;case 23:i&&window.open("https://metamask.app.link/dapp/"+location.host,"_blank");case 24:case"end":return n.stop()}}),n,null,[[4,17]])})))()}},mounted:function(){var e=this,t=window,n=t.ethereum,i=n&&n.isMetaMask;alert("eth "+n),alert("mm "+n.isMetaMask),i?(this.web3=new te.a(window.web3.currentProvider),this.connectWallet(),window.ethereum.on("accountsChanged",(function(t){e.account=t[0]})),window.ethereum.on("chainChanged",(function(){e.web3=new te.a(window.web3.currentProvider),e.connectWallet(),e.$forceUpdate()}))):(this.connect_wallet="Install Metamask",this.metaMaskInstalled=!1),setInterval((function(){e.minted<4501&&1==Math.floor(2*Math.random())&&(e.minted+=Math.floor(5*Math.random()))}),1300)}};n("49de");const ae=p()(ie,[["render",Q],["__scopeId","data-v-2a147bb9"]]);var re=ae,se={style:{background:"#ffeef7"}},oe=Object(i["e"])("h1",{class:"text-5xl md:text-7xl lg:text-8xl leading-solid",style:{color:"#f85e7f",position:"relative","margin-top":"80px","max-width":"90vw"}},[Object(i["f"])("BREED YOUR"),Object(i["e"])("br"),Object(i["f"])("INVISIBLE GIRLFRIENDS")],-1),le=Object(i["e"])("span",{class:"text-4xl md:text-6xl lg:text-7xl leading-solid",style:{color:"rgb(101, 109, 121)",position:"relative"}},[Object(i["f"])("Hold 1 Invisible Friends + 1 Invisible Girlfriends "),Object(i["e"])("b",{style:{color:"#f85e7f"}},"DURING 9 WEEKS")],-1),ce={style:{display:"flex","flex-direction":"row","text-align":"center","justify-content":"center",position:"relative","margin-top":"40px"}},ue=Object(i["e"])("div",{style:{position:"absolute",left:"0",top:"0",width:"100vw",height:"300px",background:"url(./images/heart.png)","background-size":"contain","background-repeat":"no-repeat","background-position":"center center"}},null,-1),pe=["src"],de=["src"],be=["src"],ye=Object(i["e"])("h1",{class:"text-5xl md:text-7xl lg:text-8xl leading-solid",style:{color:"#f85e7f",position:"relative","margin-top":"40px","max-width":"90vw"}},[Object(i["f"])("AND GET 1"),Object(i["e"])("br"),Object(i["f"])("INVISIBLE FRIENDS BABY"),Object(i["e"])("br"),Object(i["f"])("FREE AIRDROP")],-1),fe={class:"p-5 py-10 text-center space-y-8 md:space-y-0 md:p-16 md:py-32 grid md:grid-cols-2 gap-4",style:{background:"#ffeef7"}},me={class:"space-y-4"},ge=["src"],xe=Object(i["e"])("h3",{class:"text-3xl text-yellow-200 font-fatfrank md:text-5xl",style:{color:"#f85e7f"}},[Object(i["f"])(" Anna"),Object(i["e"])("br"),Object(i["f"])(" Lyb ")],-1),we=Object(i["e"])("p",{class:"max-w-lg mx-auto",style:{color:"rgb(101, 109, 121)"}},"Invisible Girlfriends is founded by invisible friends Holders and myself (A.L).",-1),he={href:"https://twitter.com/invsible_land"},ve=["src"],Oe={class:"space-y-4"},je=["src"],ke=Object(i["e"])("h3",{class:"text-yellow-200 font-fatfrank md:text-5xl",style:{color:"#f85e7f"}},[Object(i["f"])(" We are the"),Object(i["e"])("br"),Object(i["f"])(" Community ")],-1),Te=Object(i["e"])("p",{class:"max-w-lg mx-auto",style:{color:"rgb(101, 109, 121)"}},"50% of project royalties are shared with the Invisible Girlfriends community.",-1),Me=Object(i["e"])("div",{class:"border-t border-opacity-10",style:{background:"#ffeef7"}},null,-1),Ie={class:"p-10 lg:p-16",style:{background:"#cfb9c5"}},Ce={style:{background:"#cfb9c5"},class:"flex flex-col mx-auto text-center space-y-6"},_e={href:"#"},Re=["src"],Ee={class:"space-x-4"},Ne={class:"",href:"https://twitter.com/invsible_land"},Se=["src"],Ae={class:"",href:"https://www.instagram.com/invisiblegirlfriends/"},Be=["src"];function Fe(e,t,n,a,r,s){var o=Object(i["m"])("center");return Object(i["i"])(),Object(i["d"])("div",se,[Object(i["g"])(o,{style:{background:"#ffeef7"}},{default:Object(i["o"])((function(){return[oe,le,Object(i["e"])("div",ce,[ue,Object(i["e"])("img",{src:"./images/babybreed.png",style:{width:"200px",position:"absolute",top:"100px","mix-blend-mode":"overlay"}},null,8,pe),Object(i["e"])("img",{src:"./images/13framesM.gif",style:{display:"inline-block",position:"relative",width:"600px","max-width":"40%"}},null,8,de),Object(i["e"])("img",{src:"./images/13framesW.gif",style:{"-webkit-transform":"scaleX(-1)",transform:"scaleX(-1)",width:"600px","max-width":"40%",display:"inline-block",position:"relative"}},null,8,be)]),ye]})),_:1}),Object(i["e"])("div",fe,[Object(i["e"])("div",me,[Object(i["e"])("img",{src:"./images/transparent.png",class:"w-24 mx-auto",alt:"Handshake"},null,8,ge),xe,we,Object(i["e"])("p",null,[Object(i["e"])("a",he,[Object(i["e"])("img",{src:"./images/twitter-logo.svg",alt:"Twitter",class:"inline-block w-6 text-white md:w-8"},null,8,ve)])])]),Object(i["e"])("div",Oe,[Object(i["e"])("img",{src:"./images/logo.png",alt:"bing bong",class:"inline-block w-16 text-white md:w-24"},null,8,je),ke,Te])]),Me,Object(i["e"])("nav",Ie,[Object(i["e"])("div",Ce,[Object(i["e"])("a",_e,[Object(i["e"])("img",{src:"./images/logo.png",alt:"bing bong",class:"inline-block w-16 text-white md:w-24"},null,8,Re)]),Object(i["e"])("div",Ee,[Object(i["e"])("a",Ne,[Object(i["e"])("img",{src:"./images/twitter-logo.svg",alt:"Twitter",class:"inline-block w-6 text-white md:w-8"},null,8,Se)]),Object(i["e"])("a",Ae,[Object(i["e"])("img",{src:"./images/instagram.svg",alt:"Instagram",class:"inline-block w-6 text-white md:w-8"},null,8,Be)])])])])])}var qe={name:"CenterSide"};const Pe=p()(qe,[["render",Fe]]);var De=Pe,Le={name:"App",components:{Marquee:b,Nav:I,HeaderBlock:re,CenterSide:De}};const Ue=p()(Le,[["render",r]]);var Ge=Ue;Object(i["b"])(Ge).mount("#app")},6:function(e,t){},7:function(e,t){},"7c3a":function(e,t,n){"use strict";n("a333")},8:function(e,t){},9:function(e,t){},a333:function(e,t,n){}});