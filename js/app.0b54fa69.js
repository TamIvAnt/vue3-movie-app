(function(e){function t(t){for(var n,o,s=t[0],p=t[1],i=t[2],u=0,_=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&_.push(c[o][0]),c[o]=0;for(n in p)Object.prototype.hasOwnProperty.call(p,n)&&(e[n]=p[n]);l&&l(t);while(_.length)_.shift()();return r.push.apply(r,i||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,s=1;s<a.length;s++){var p=a[s];0!==c[p]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},c={app:0},r=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],p=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var l=p;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"2dc7":function(e,t,a){"use strict";a("3682")},3682:function(e,t,a){},"4cdf":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23");function c(e,t,a,c,r,o){var s=Object(n["k"])("movieApp");return Object(n["g"])(),Object(n["c"])(s)}a("ac1f"),a("841c");var r={class:"header_content"},o=Object(n["f"])("h1",null,"MoviaApp",-1),s={class:"btn_change_url_top"},p={key:0,class:"top_text"},i={key:1,class:"top_text"},l={key:2,class:"top_text"},u={class:"container"},_=Object(n["f"])("div",{class:"card__img__dark"},null,-1),b={class:"card__name"},f={class:"card__year"},O=Object(n["e"])(" Год выпуска:   "),R={class:"card__year__item"},d={class:"card__genre"},j={class:"pagination_box__txt"},h={class:"pagination_box desctop"};function g(e,t,a,c,g,U){var P=Object(n["k"])("popup");return Object(n["g"])(),Object(n["c"])(n["a"],null,[Object(n["f"])("header",null,[Object(n["f"])("div",r,[o,Object(n["n"])(Object(n["f"])("input",{type:"text",placeholder:g.myPlaceholder,"onUpdate:modelValue":t[1]||(t[1]=function(e){return g.search=e}),onKeyup:t[2]||(t[2]=Object(n["o"])((function(e){return g.topName=g.search,g.searchSave=g.search,g.NAME_CATIGORY_NAME_CURRENT="",U.getMovies(g.API_URL_SEARCH)}),["enter"]))},null,40,["placeholder"]),[[n["m"],g.search]])])]),Object(n["f"])("div",s,[Object(n["f"])("button",{class:["btn url_top_100",{active:"100"==g.NAME_CATIGORY_NAME_CURRENT}],onClick:t[3]||(t[3]=function(e){return g.topName="ТОП 100",g.PAGE_CURRENT=1,g.NAME_CATIGORY_NAME_CURRENT="100",U.getMovies(g.API_URL_TOP_100,1)})}," Топ 100 ",2),Object(n["f"])("button",{class:["btn url_top_250",{active:"250"==g.NAME_CATIGORY_NAME_CURRENT}],onClick:t[4]||(t[4]=function(e){return g.topName="ТОП 250",g.PAGE_CURRENT=1,g.NAME_CATIGORY_NAME_CURRENT="250",U.getMovies(g.API_URL_TOP_250,1)})}," Топ 250 ",2),Object(n["f"])("button",{class:["btn url_awaits",{active:"await"==g.NAME_CATIGORY_NAME_CURRENT}],onClick:t[5]||(t[5]=function(e){return g.topName="ОЖИДАЕМЫЕ",g.PAGE_CURRENT=1,g.NAME_CATIGORY_NAME_CURRENT="await",U.getMovies(g.API_URL_AWAIT,1)})}," Ожидаемые ",2)]),"ОЖИДАЕМЫЕ"==g.topName||"ТОП 250"==g.topName||"ТОП 100"==g.topName?(Object(n["g"])(),Object(n["c"])("h2",p)):0==g.respData.length?(Object(n["g"])(),Object(n["c"])("h2",i," Неудалось ни чего найти! ")):(Object(n["g"])(),Object(n["c"])("h2",l,"По запросу:  "+Object(n["l"])(g.topName),1)),Object(n["f"])("div",u,[Object(n["f"])(P,{onClose:U.closePopup,SHOWPOPUP:g.SHOWPOPUP,popUp_Data:g.popUp_Data,FILMID:g.FILMID,CURRENT_RATING:g.CURRENT_RATING,trailersData:g.trailersData,URL_TRAILER_SIMBOL:g.URL_TRAILER_SIMBOL,showTrailer:g.showTrailer},null,8,["onClose","SHOWPOPUP","popUp_Data","FILMID","CURRENT_RATING","trailersData","URL_TRAILER_SIMBOL","showTrailer"]),(Object(n["g"])(!0),Object(n["c"])(n["a"],null,Object(n["j"])(g.respData,(function(e){return Object(n["g"])(),Object(n["c"])("div",{class:"card",key:e.filmId},[Object(n["f"])("div",{class:"card__img__inner",onClick:function(t){return g.FILMID=e.filmId,g.CURRENT_RATING=e.rating,U.getMoviesForId(g.API_URL_SEARCH_MOVIE_ID,g.FILMID),U.showPopup()}},[_,Object(n["f"])("img",{class:"card__img",src:e.posterUrlPreview,alt:e.nameRu},null,8,["src","alt"])],8,["onClick"]),Object(n["f"])("p",b,Object(n["l"])(e.nameRu),1),Object(n["f"])("p",f,[O,Object(n["f"])("span",R,Object(n["l"])(e.year),1)]),Object(n["f"])("span",d,Object(n["l"])(e.genres[0].genre),1),Object(n["f"])("p",{class:["card__rating",{green:e.rating>=7,yellow:e.rating>5&e.rating<7,red:e.rating<5}]},Object(n["l"])(e.rating),3)])})),128))]),Object(n["f"])("div",{class:["pagination_box mobile",{none:0==g.respPageCount}]},[Object(n["f"])("button",{class:["lang",{disabled:1==g.PAGE_CURRENT}],onClick:t[6]||(t[6]=function(e){return U.lastPage(g.PAGE_CURRENT)})}," ⟨ ",2),Object(n["f"])("p",j,Object(n["l"])(g.PAGE_CURRENT),1),Object(n["f"])("button",{class:["lang",{disabled:g.PAGE_CURRENT==g.respPageCount}],onClick:t[7]||(t[7]=function(e){return U.nextPage(g.PAGE_CURRENT)})}," ⟩ ",2)],2),Object(n["f"])("div",h,[(Object(n["g"])(!0),Object(n["c"])(n["a"],null,Object(n["j"])(g.respPageCount,(function(e){return Object(n["g"])(),Object(n["c"])("button",{class:["btn",{active:e==g.PAGE_CURRENT}],key:e,onClick:function(t){return g.PAGE_CURRENT=e,U.getMovies(g.URL_CURRENT,g.PAGE_CURRENT)}},Object(n["l"])(e),11,["onClick"])})),128))])],64)}var U=a("1da1"),P=(a("96cf"),a("d3b7"),"5dcd148b-1f37-4530-8cd3-27196447445d"),v="https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1",A="https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1",T="https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_AWAIT_FILMS&page=1",E="https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=",I="https://kinopoiskapiunofficial.tech/api/v2.1/films/",C="https://kinopoiskapiunofficial.tech/api/v2.1/films/",m=(a("a4d3"),a("e01a"),Object(n["p"])("data-v-895d44bc"));Object(n["i"])("data-v-895d44bc");var N={class:"popup_wrapper"},y={key:0,class:"popup"},L={class:"popup_header"},w={class:"popup_body"},M={class:"popup_body__left"},k={class:"popup_body__left__content"},D={class:"popup_body__right"},S=Object(n["f"])("span",{class:"popup_body_span"},"Описание",-1),G=Object(n["f"])("span",{class:"popup_body_span"}," Год выпуска ",-1),x=Object(n["f"])("span",{class:"popup_body_span"}," Рейтинг ",-1),H=Object(n["f"])("span",{class:"popup_body_span"}," Хронометраж ",-1),F=Object(n["f"])("p",null,[Object(n["f"])("span",{class:"popup_body_span"},"Трейлер"),Object(n["e"])(":   ")],-1),W={class:"popup_body__link_watch"},Y=Object(n["f"])("p",{class:"popup_body_span"}," Смотреть:    ",-1),B={class:"popup_footer"};Object(n["h"])();var K=m((function(e,t,a,c,r,o){return Object(n["g"])(),Object(n["c"])("div",N,[a.SHOWPOPUP&a.FILMID==a.popUp_Data.filmId?(Object(n["g"])(),Object(n["c"])("div",y,[Object(n["f"])("div",L,[Object(n["f"])("h3",null,Object(n["l"])(a.popUp_Data.nameRu),1),Object(n["f"])("p",{class:"close_popup",onClick:t[1]||(t[1]=function(t){return e.$emit("close","SHOWPOPUP")})},"x")]),Object(n["f"])("div",w,[Object(n["f"])("div",M,[Object(n["f"])("img",{class:"img_popup",src:a.popUp_Data.posterUrlPreview,alt:a.popUp_Data.nameRu},null,8,["src","alt"]),Object(n["f"])("div",k,[Object(n["f"])("p",{class:{show:null!=a.popUp_Data.ratingAgeLimits,none:null==a.popUp_Data.ratingAgeLimits}},Object(n["l"])(a.popUp_Data.ratingAgeLimits)+"+ ",3),Object(n["f"])("p",null,Object(n["l"])(a.popUp_Data.genres[0].genre),1)])]),Object(n["f"])("div",D,[Object(n["f"])("p",{class:{show:null!=a.popUp_Data.description,none:null==a.popUp_Data.description}},[S,Object(n["e"])(":  "+Object(n["l"])(a.popUp_Data.description),1)],2),Object(n["f"])("p",null,[G,Object(n["e"])(":  "+Object(n["l"])(a.popUp_Data.year),1)]),Object(n["f"])("p",null,[x,Object(n["e"])(":  "+Object(n["l"])(a.CURRENT_RATING),1)]),Object(n["f"])("p",{class:{show:"FILM"==a.popUp_Data.type,none:null==a.popUp_Data.filmLength}},[H,Object(n["e"])(":  "+Object(n["l"])(a.popUp_Data.filmLength),1)],2),Object(n["f"])("div",{class:["popup_body__trailer",{showTrailer:1==a.showTrailer,noneTrailer:0==a.showTrailer}]},[F,Object(n["f"])("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/"+a.URL_TRAILER_SIMBOL,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},"\n                        ",8,["src"])],2),Object(n["f"])("div",W,[Y,Object(n["f"])("a",{class:"link_watch",href:a.popUp_Data.webUrl},Object(n["l"])(a.popUp_Data.webUrl),9,["href"])])])]),Object(n["f"])("div",B,[Object(n["f"])("p",{class:"close_popup",onClick:t[2]||(t[2]=function(t){return e.$emit("close","SHOWPOPUP")})},"Закрыть")])])):Object(n["d"])("",!0)])})),V={props:["SHOWPOPUP","popUp_Data","FILMID","CURRENT_RATING","trailersData","URL_TRAILER_SIMBOL","showTrailer"]};a("6e3b");V.render=K,V.__scopeId="data-v-895d44bc";var X=V,q={data:function(){return{API_KEY:P,API_URL_TOP_250:v,API_URL_TOP_100:A,API_URL_AWAIT:T,API_URL_SEARCH:E,API_URL_TRAILER:I,API_URL_SEARCH_MOVIE_ID:C,URL_CURRENT:"",PAGE_CURRENT:1,NAME_CATIGORY_NAME_CURRENT:"100",respData:{},popUp_Data:{},trailersData:[],respPageCount:0,myPlaceholder:"Поиск",search:"",searchSave:"",topName:"ТОП 100",SHOWPOPUP:!1,FILMID:0,CURRENT_RATING:"",URL_TRAILER_SIMBOL:"",showTrailer:!0}},components:{popup:X},methods:{getMovies:function(e,t){var a=this;return Object(U["a"])(regeneratorRuntime.mark((function n(){var c,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return void 0==t&&(t=""),a.search&&(e+=a.search,a.search=""),e=e.substring(0,e.length-1)+t,a.URL_CURRENT=e,n.next=6,fetch(e,{headers:{"Content-Type":"aplication/json","X-API-KEY":P}});case 6:return c=n.sent,n.next=9,c.json();case 9:r=n.sent,a.respData=r.films,a.searchSave=a.searchSave.substring(0,a.searchSave.length-1),e==a.API_URL_SEARCH+a.searchSave?a.respPageCount=0:r.pagesCount>25?a.respPageCount=15:a.respPageCount=r.pagesCount,window.scrollTo(0,0);case 14:case"end":return n.stop()}}),n)})))()},getMoviesForId:function(e,t){var a=this;return Object(U["a"])(regeneratorRuntime.mark((function n(){var c,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e+=t,n.next=3,fetch(e,{headers:{"Content-Type":"aplication/json","X-API-KEY":P}});case 3:return c=n.sent,n.next=6,c.json();case 6:r=n.sent,a.popUp_Data=r.data,console.log(a.popUp_Data.type),a.showPopup(),a.getTrailer(I,t);case 11:case"end":return n.stop()}}),n)})))()},getTrailer:function(e,t){var a=this;return Object(U["a"])(regeneratorRuntime.mark((function n(){var c,r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e=e+t+"/videos",n.next=3,fetch(e,{headers:{"Content-Type":"aplication/json","X-API-KEY":P}});case 3:return c=n.sent,n.next=6,c.json();case 6:r=n.sent,a.trailersData=r.trailers,0==r.trailers.length?a.showTrailer=!1:(o=r.trailers[0].url,43==o.length?(o=r.trailers[0].url,o=o.substring(32),a.URL_TRAILER_SIMBOL=o):(o=o.substring(17),a.URL_TRAILER_SIMBOL=o));case 9:case"end":return n.stop()}}),n)})))()},nextPage:function(e){e>=this.respPageCount||(e++,this.PAGE_CURRENT=e,this.getMovies(this.URL_CURRENT,this.PAGE_CURRENT))},lastPage:function(e){1!=e&&(e--,this.PAGE_CURRENT=e,this.getMovies(this.URL_CURRENT,this.PAGE_CURRENT))},showPopup:function(){this.SHOWPOPUP=!0;var e=document.querySelector("body");e.classList.add("lock")},closePopup:function(){this.SHOWPOPUP=!1;var e=document.querySelector("body");e.classList.remove("lock")}},beforeMount:function(){this.getMovies(A,1)}};a("2dc7");q.render=g;var J=q,$={name:"App",components:{movieApp:J}};a("b8da");$.render=c;var z=$;Object(n["b"])(z).mount("#app")},"6e3b":function(e,t,a){"use strict";a("4cdf")},b8da:function(e,t,a){"use strict";a("c12b")},c12b:function(e,t,a){}});
//# sourceMappingURL=app.0b54fa69.js.map