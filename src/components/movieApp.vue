<template>
    <header>
        <div class="header_content">
            <h1> <span class="headerShow">MoviaApp</span> <img src="https://img.icons8.com/office/30/000000/movie-projector.png"/></h1>
            
             <div class="btn_change_url_top">
                <button 
                    class="btn url_top_100" 
                    :class="{active: NAME_CATIGORY_NAME_CURRENT == '100'}"
                    @click="topName = 'ТОП 100', PAGE_CURRENT = 1, NAME_CATIGORY_NAME_CURRENT = '100', getMovies(API_URL_TOP_100, 1)"
                    >
                    <!-- isActive = !isActive, noActive = !noActive -->
                Топ 100
                </button>
                <button 
                    class="btn url_top_250" 
                    :class="{active: NAME_CATIGORY_NAME_CURRENT == '250'}"
                    @click="topName = 'ТОП 250', PAGE_CURRENT = 1, NAME_CATIGORY_NAME_CURRENT = '250', getMovies(API_URL_TOP_250, 1)"
                    >
                    <!-- isActive = !isActive, noActive = !noActive -->
                Топ 250
                </button>
                <button 
                    class="btn url_awaits" 
                    :class="{active: NAME_CATIGORY_NAME_CURRENT == 'await'}"
                    @click="topName = 'ОЖИДАЕМЫЕ', PAGE_CURRENT = 1, NAME_CATIGORY_NAME_CURRENT = 'await', getMovies(API_URL_AWAIT, 1)"
                    >
                Ожидаемые
                </button>
            </div>

            <input type="text" 
            :placeholder="myPlaceholder" 
            v-model="search" 
            @keyup.enter="topName = search, 
                        searchSave = search, 
                        NAME_CATIGORY_NAME_CURRENT = '', 
                        getMovies(API_URL_SEARCH)">

        </div>

    </header>

    
    <h2 class="top_text"
    v-if="topName == 'ОЖИДАЕМЫЕ' || topName == 'ТОП 250' || topName == 'ТОП 100'">  
    </h2>
    <h2 class="top_text" 
    v-else-if="respData.length == 0">
        Неудалось ни чего найти!
    </h2>
    <h2 v-else class="top_text">По запросу:&nbsp; {{topName}}</h2>

    <div class="container">
        <popup @close="closePopup" 
            :SHOWPOPUP="SHOWPOPUP" 
            :popUp_Data="popUp_Data" 
            :FILMID="FILMID" 
            :CURRENT_RATING="CURRENT_RATING"
            :trailersData="trailersData"
            :URL_TRAILER_SIMBOL="URL_TRAILER_SIMBOL"
            :showTrailer="showTrailer"
        />

        <div class="card" 
        v-for="item of respData" :key="item.filmId"
        >
            <div class="card__img__inner"
            @click=" FILMID = item.filmId, 
            CURRENT_RATING = item.rating,
            getMoviesForId(API_URL_SEARCH_MOVIE_ID, FILMID), 
            showPopup()"
            >
                <div class="card__img__dark"></div>
                <img class="card__img" :src="item.posterUrlPreview" :alt="item.nameRu">
            </div>
            <p class="card__name">
                {{item.nameRu}}
            </p>
            <p class="card__year">
                Год выпуска:	&nbsp; <span class="card__year__item">{{item.year}}</span>
            </p>
            <span class="card__genre">
                {{item.genres[0].genre}}
            </span>
            <p class="card__rating" 
            :class="{
                green: item.rating >= 7 || item.rating >= '70%',
                yellow: item.rating > 5 & item.rating < 7 || item.rating > '50%' & item.rating < '70%', 
                red: item.rating < 5 || item.rating < '50%'
            }">
                {{item.rating}}
            </p>
        </div>
    </div>

    <div class="pagination_box mobile"
    :class="{none: respPageCount == 0}">
        <button 
        class="lang"
        :class='{disabled: PAGE_CURRENT==1}'
        @click="lastPage(PAGE_CURRENT)">
            &lang;
        </button>
        <p class="pagination_box__txt">
            {{PAGE_CURRENT}}
        </p>
        <button 
        class="lang"
        :class='{disabled: PAGE_CURRENT==respPageCount}'
        @click="nextPage(PAGE_CURRENT)">
            &rang;
        </button>
    </div>
    <div class="pagination_box desctop">
        <button 
        class="btn_swipe_page"
        v-for="item of respPageCount"
        :key="item"
        :class='{active: item==PAGE_CURRENT}'
        @click="PAGE_CURRENT = item ,getMovies(URL_CURRENT, PAGE_CURRENT)">
            {{item}}
        </button>
        
        
    </div>
</template>

<script>

import {API_KEY} from '../data/data.js'
import {API_URL_TOP_250} from '../data/data.js'
import {API_URL_TOP_100} from '../data/data.js'
import {API_URL_AWAIT} from '../data/data.js'
import {API_URL_SEARCH} from '../data/data.js'
import {API_URL_TRAILER} from '../data/data.js'
import {API_URL_SEARCH_MOVIE_ID} from '../data/data.js'
import popup from './popupComponents.vue'

export default {
    data() {
        return {
            API_KEY: API_KEY,
            API_URL_TOP_250: API_URL_TOP_250,
            API_URL_TOP_100: API_URL_TOP_100,
            API_URL_AWAIT: API_URL_AWAIT,
            API_URL_SEARCH: API_URL_SEARCH,
            API_URL_TRAILER: API_URL_TRAILER,
            API_URL_SEARCH_MOVIE_ID: API_URL_SEARCH_MOVIE_ID,
            URL_CURRENT: '',
            PAGE_CURRENT: 1,
            NAME_CATIGORY_NAME_CURRENT: '100',
            respData: {},
            popUp_Data: {},
            trailersData: [],
            respPageCount: 0,
            myPlaceholder: 'Поиск',
            search: '',
            searchSave: '',
            topName: 'ТОП 100',
            SHOWPOPUP: false,
            FILMID: 0,
            CURRENT_RATING: '',
            URL_TRAILER_SIMBOL: '',
            showTrailer: true,
        }
    },
    components: {
        popup
    },
    methods: {
        async getMovies(url, page) {
            if (page == undefined) {
                page = ''
            }
            if(this.search) {
                url=url+this.search
                this.search = ''
            }
            
            url = url.substring(0, url.length-1) + page
            this.URL_CURRENT = url
            const resp = await fetch(url, {
                headers: {
                    "Content-Type": "aplication/json",
                    "X-API-KEY": API_KEY,
                }
            })
            const respData = await resp.json()
            this.respData = respData.films

            this.searchSave = this.searchSave.substring(0, this.searchSave.length-1)

            if (url == this.API_URL_SEARCH + this.searchSave) {
                this.respPageCount = 0
            } else{
                if (respData.pagesCount > 25) {
                    this.respPageCount = 15
                } else {
                    this.respPageCount = respData.pagesCount
                }
            }

            window.scrollTo(0, 0)
        },
        async getMoviesForId(url, id) {
            url += id
            const resp = await fetch(url, {
                headers: {
                    "Content-Type": "aplication/json",
                    "X-API-KEY": API_KEY,
                }
            })
            const respData = await resp.json()
            this.popUp_Data = respData.data
            console.log(this.popUp_Data.type);
            this.showPopup()
            this.getTrailer(API_URL_TRAILER, id)
        },
        async getTrailer(url, id) {
            url = url + id + '/videos'
            const resp = await fetch(url, {
                headers: {
                    "Content-Type": "aplication/json",
                    "X-API-KEY": API_KEY,
                }
            })
            const respData = await resp.json()
            this.trailersData = respData.trailers
            // console.log(respData.trailers);
            if (respData.trailers.length == 0) {
                // console.log(respData.trailers.length);
                this.showTrailer = false
            } else {
                // console.log(respData.trailers.length);
                let link = respData.trailers[0].url
                // console.log(respData.trailers);
                if (link.length == 43) {
                    link = respData.trailers[0].url
                    link = link.substring(32)
                    this.URL_TRAILER_SIMBOL = link
                    // console.log(this.URL_TRAILER_SIMBOL);
                } else {
                    link = link.substring(17)
                    this.URL_TRAILER_SIMBOL = link
                    // console.log(this.URL_TRAILER_SIMBOL);
                }  
            }
            
            
        },
        nextPage(page) {
            if (page >= this.respPageCount) {
                return
            } else {
                page++ 
                this.PAGE_CURRENT = page
                // console.log(this.PAGE_CURRENT);
                this.getMovies(this.URL_CURRENT, this.PAGE_CURRENT)
                
            }
        },
        lastPage(page) {
            if (page == 1) {
                return
            } else {
                page--
                this.PAGE_CURRENT = page
                // console.log(this.PAGE_CURRENT);
                this.getMovies(this.URL_CURRENT, this.PAGE_CURRENT)
            }
        },
        showPopup() {
            this.SHOWPOPUP = true  
            const element = document.querySelector('body');
            element.classList.add('lock');
            // console.log(this.FILMID);
        },
        closePopup() {
            this.SHOWPOPUP = false
            const element = document.querySelector('body');
            element.classList.remove('lock');
            // console.log(this.SHOWPOPUP);
        },  
    },
    beforeMount(){
        this.getMovies(API_URL_TOP_100, 1)
    },
}
</script>

<style>
    body.lock {
        overflow: hidden;
    }
    .container {
        padding-top: 30px;

        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .headerShow {
        display: auto;
    }


    .top_text {
        text-align: left;
        padding-left: 20px;
        padding-right: 20px;

        font-family: 'Lato', sans-serif;
        font-size: 34px;
        font-weight: 700;
    }

    .btn_swipe_page {
        display: inline-block;	
        box-sizing: border-box;
        padding: 0 24px;
        margin: 0 15px 15px 0;
        outline: none;
        border: none;    
        border-radius: 3px;
        height: 37px;
        line-height: 37px;
        font-size: 14px;
        text-transform: uppercase;
        font-weight: normal;
        text-decoration: none;
        color: #DA0037;
        background-color: #fff;
        cursor: pointer;
        user-select: none;
        appearance: none;
        touch-action: manipulation;  
        transition: box-shadow .18s ease-out,background .18s ease-out,color .18s ease-out;
    }
    .btn_swipe_page:hover {
        color: #07bc4c;
        box-shadow: 0 1px 1px 0  #cfcfcf, 0 2px 5px 0  #cfcfcf;
    }
    .btn_swipe_page.active {
        color: #fff;
        background-color: #07bc4c;
    }


    .btn_change_url_top {
        width: 250px;
        display: flex;
        justify-content: space-between;
    }
    .btn {
        width: fit-content;
        
        height: 37px;
        line-height: 37px;
        font-size: 14px;
        text-transform: uppercase;
        font-weight: normal;
        text-decoration: none;
       
        border: none;
        background: none;

        color: #C0C0C0;
    }
    .btn:hover {
        color: #FFFFFF;
    }
    .btn.active {
        color: #FFFFFF;
        border-bottom: 2px solid #FF5C00;
    }

    .card {
        max-width: 300px;

        margin-left: auto;
        margin-right: auto;

        text-align: left;

        margin-bottom: 20px;
        position: relative;
        z-index: 1;
    }
    .card__img {
        min-width: 290px;
        max-width: 290px;
        height: 100%;
    }
    .card__img__inner {
        position: relative;
        height: 400px;
    }
    .card__img__dark {
        background-color: #000;
        opacity: 0.2;
        position: absolute;
        min-width: 290px;
        height: 100%;
        z-index: 1;
    }
    .card__img__dark:hover {
        background-color: gray;
        cursor: pointer;
    }
    
    .card__name {
        font-family: 'Lato', sans-serif;
        font-size: 24px;
        font-weight: 400;

        margin-top: 10px;
        margin-bottom: 5px;

        cursor: default;
    }
    .card__genre {
        font-family: 'Lato', sans-serif;
        font-size: 16px;
        font-weight: 400;
        color: #DA0037;

        cursor: default;
    }
    .card__year {
        font-family: 'Lato', sans-serif;
        font-size: 16px;
        font-weight: 400;

        cursor: default;
    }
    .card__year__item {
        color: #DA0037;
    }
    .card__rating {
        position: absolute;
        border-radius: 50%;
        top: 10px;
        left: 10px;
        right: 0;
        width: 36px;
        height: 36px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #1a191f;
        color: #fff;
        font-size: 14px;
    }
    .card__rating.green {
        border: 2px solid green;
    }
    .card__rating.yellow {
        border: 2px solid yellow;
    }
    .card__rating.red {
        border: 2px solid red;
    }
    .pagination_box {
        display: flex;
        justify-content: space-between;

        margin-left: auto;
        margin-right: auto;
    }
    .pagination_box.none {
        display: none;
    }

    .lang {
        display: inline-block;	
        box-sizing: border-box;
        padding: 0 24px;
        margin: auto 15px auto 15px;
        outline: none;
        border: none;    
        border-radius: 3px;
        height: 37px;
        line-height: 37px;
        font-size: 14px;
        text-transform: uppercase;
        font-weight: normal;
        text-decoration: none;
        color: #DA0037;
        background-color: #fff;
        cursor: pointer;
        user-select: none;
        appearance: none;
        touch-action: manipulation;  
        transition: box-shadow .18s ease-out,background .18s ease-out,color .18s ease-out;
    }
    .lang:hover {
        color: #07bc4c;
        box-shadow: 0 1px 1px 0  #cfcfcf, 0 2px 5px 0  #cfcfcf;
    }
    .lang.disabled {
        cursor: not-allowed;
        color: black;
        box-shadow: none;
    }
    .pagination_box__txt {
        align-items: center;
        text-align: center;
    }

    .mobile {
        display: none;
        max-width: 200px;
    }
    .desctop {
        display: none;
        width: fit-content;
    }

    @media (min-width: 1024px) {
        .desctop {
            display: flex;
        }
    }
    @media (max-width: 768px) {
        input {
             width: 50px;       
        }

        .desctop {
            display: none;
        }
        .mobile {
            display: flex;
        }
        .headerShow {
            display: none;
        }
        
        .btn_change_url_top {
            width: 250px;
            margin-left: 10px;
            margin-right: 10px;
            padding-top: 0px;
        }
        .btn {
        height: fit-content;
        line-height: 17px;
        font-size: 12px;
        }

    }
</style>