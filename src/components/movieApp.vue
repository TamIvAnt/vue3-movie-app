<template>
    <header>
        <div class="header_content">
            <h1>MoviaApp</h1>

            <input type="text" 
            :placeholder="myPlaceholder" 
            v-model="search" 
            @keyup.enter="topName = search, 
                        searchSave = search, 
                        NAME_CATIGORY_NAME_CURRENT = '', 
                        getMovies(API_URL_SEARCH)">
        </div>
    </header>

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

    <h2 
    class="top_text"
    v-if="topName == 'ОЖИДАЕМЫЕ' || topName == 'ТОП 250' || topName == 'ТОП 100'">
        
    </h2>
    <h2 class="top_text" 
    v-else-if="respData.length == 0">
        Неудалось ни чего найти!
    </h2>
    <h2 v-else class="top_text">По запросу:&nbsp; {{topName}}</h2>

    <div class="container">
        <div class="card" v-for="item of respData" :key="item.filmId">
            <div class="card__img__inner">
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
                green: item.rating >= 7,
                yellow: item.rating > 5 & item.rating < 7, 
                red: item.rating < 5
            }">
                {{item.rating}}
            </p>
        </div>
    </div>

    <div class="pagination_box">
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
</template>

<script>

import {API_KEY} from '../data/data.js'
import {API_URL_TOP_250} from '../data/data.js'
import {API_URL_TOP_100} from '../data/data.js'
import {API_URL_AWAIT} from '../data/data.js'
import {API_URL_SEARCH} from '../data/data.js'

export default {
    data() {
        return {
            API_KEY: API_KEY,
            API_URL_TOP_250: API_URL_TOP_250,
            API_URL_TOP_100: API_URL_TOP_100,
            API_URL_AWAIT: API_URL_AWAIT,
            API_URL_SEARCH: API_URL_SEARCH,
            URL_CURRENT: '',
            PAGE_CURRENT: 1,
            NAME_CATIGORY_NAME_CURRENT: '100',
            respData: {},
            respPageCount: 0,
            myPlaceholder: 'Поиск',
            search: '',
            searchSave: '',
            topName: 'ТОП 100',
        }
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
        nextPage(page) {
            if (page >= this.respPageCount) {
                return
            } else {
                page++ 
                this.PAGE_CURRENT = page
                console.log(this.PAGE_CURRENT);
                this.getMovies(this.URL_CURRENT, this.PAGE_CURRENT)
                
            }
        },
        lastPage(page) {
            if (page == 1) {
                return
            } else {
                page--
                this.PAGE_CURRENT = page
                console.log(this.PAGE_CURRENT);
                this.getMovies(this.URL_CURRENT, this.PAGE_CURRENT)
            }
        }        
    },
    beforeMount(){
        this.getMovies(API_URL_TOP_100, 1)
    },
}
</script>

<style scoped>
    .container {
        padding-top: 30px;

        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .top_text {
        text-align: left;
        padding-left: 20px;
        padding-right: 20px;

        font-family: 'Lato', sans-serif;
        font-size: 34px;
        font-weight: 700;
    }

    .btn_change_url_top {
        padding-top: 30px;
    }
    .btn {
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
    .btn:hover {
        color: #07bc4c;
        box-shadow: 0 1px 1px 0  #cfcfcf, 0 2px 5px 0  #cfcfcf;
    }
    .btn.active {
        color: #fff;
        background-color: #07bc4c;
    }

    .card {
        max-width: 300px;

        margin-left: auto;
        margin-right: auto;

        text-align: left;

        margin-bottom: 20px;
        position: relative;
    }
    .card__img {
        min-width: 100%;
        max-width: 300px;
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
        min-width: 100%;
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

        max-width: 200px;

        margin-left: auto;
        margin-right: auto;
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
</style>