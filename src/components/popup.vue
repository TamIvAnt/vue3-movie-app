<template>
    <div class="popup_wrapper">
        <div class="popup" v-if="SHOWPOPUP & FILMID==popUp_Data.filmId">
            <div class="popup_header">
                <h3> {{popUp_Data.nameRu}} </h3>
                <p class="close_popup" @click="$emit('close', 'SHOWPOPUP')" >x</p>
            </div>
            <div class="popup_body">
                <div class="popup_body__left">
                    <img class="img_popup" 
                    :src="popUp_Data.posterUrlPreview" 
                    :alt="popUp_Data.nameRu"
                    >
                    <div class="popup_body__left__content">
                        <p :class="{show: popUp_Data.ratingAgeLimits != null, none: popUp_Data.ratingAgeLimits == null}">
                            {{popUp_Data.ratingAgeLimits}}+    
                        </p>
                        <p>{{popUp_Data.genres[0].genre}}</p>
                    </div>
                </div>
                
                <div class="popup_body__right">
                    <p :class="{show: popUp_Data.description != null, none: popUp_Data.description == null}">
                        <span class="popup_body_span">Описание</span>:&nbsp; {{popUp_Data.description}}
                    </p> 
                    <p>
                        <span class="popup_body_span"> Год выпуска </span>:&nbsp; {{popUp_Data.year}}
                    </p>
                    <p>
                        <span class="popup_body_span"> Рейтинг </span>:&nbsp; {{CURRENT_RATING}}
                    </p>
                    <p :class="{show: popUp_Data.type == 'FILM', none: popUp_Data.filmLength == null }">
                        <span class="popup_body_span"> Хронометраж </span>:&nbsp; {{popUp_Data.filmLength}}
                    </p>

                    <div class="popup_body__trailer"
                        :class="{showTrailer: showTrailer == true, noneTrailer: showTrailer == false}">
                        <p> <span class="popup_body_span">Трейлер</span>:&nbsp;&nbsp;  </p>
                        <iframe width="100%" 
                        height="315" 
                        :src="'https://www.youtube.com/embed/'+URL_TRAILER_SIMBOL"
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                        </iframe>
                    </div>

                    <div class="popup_body__link_watch">
                        <p class="popup_body_span"> Смотреть:&nbsp; &nbsp; </p>
                        <a class="link_watch" :href="popUp_Data.webUrl">
                            {{popUp_Data.webUrl}}
                        </a>
                    </div>


                </div>
            </div>
            <div class="popup_footer">
                <p class="close_popup" @click="$emit('close', 'SHOWPOPUP')">Закрыть</p>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    props: ['SHOWPOPUP', 'popUp_Data', 'FILMID', 'CURRENT_RATING', 'trailersData', 'URL_TRAILER_SIMBOL', 'showTrailer'],

}
</script>

<style scoped>
    p, h3 {
        cursor: default;
    }
    .showTrailer {
        display: flex;
    }
    .noneTrailer {
        display: none;
    }
    .link_watch {
        color: white;
        text-decoration: none;
        text-transform: uppercase;
        margin-top: 14px;
    }

    .popup_body__left__content {
        display: flex;
        justify-content: space-between;
    }
    .popup_body__left__content p {
        font-family: 'Lato', sans-serif;
        font-weight: 400;
        font-size: 14px;
        color: red;
        
    }

    .popup_body__right {
        max-width: 800px;
        text-align: left;
    }
    .popup_body__trailer {
        /* display: flex; */
        margin-bottom: 20px;
    }
    .popup_body__trailer p {
        margin: 0;
    }
    .popup_body__link_watch {
        display: flex;
    }

    .popup_body_span {
        color: red;
        font-size: 14px;
        font-weight: 700;
    }

    .img_popup {
        width: 300px;
        height: 400px;
        margin-top: 14px;
    }
    .show {
        display: block;
        font-family: 'Lato', sans-serif;
        font-size: 14px;
        font-weight: 400;
    }
    .shows{
        display: block;
        font-family: 'Lato', sans-serif;
        font-size: 14px;
        font-weight: 400;
    }
    .none {
        display: none;
    }

    .popup {
        font-family: 'Lato', sans-serif;
        font-size: 14px;
        font-weight: 400;

        padding: 10px;
        width: 100%;
        max-width: 1200px;
        position: fixed;
        height: 100%;
        color: white;
        background: #171717;
        top: 0px;
        left: 2.7%;
        right: 2.7%;
        box-shadow: 0 0 17px 0 #cfcfcf;
        z-index: 3;

        overflow: auto;
    }
    .popup_header{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .popup_header h3 {
        font-family: 'Lato', sans-serif;
        font-weight: 700;
        margin-top: 0;
        margin-bottom: 0;
    }
    .popup_header p {
        margin-top: 0;
        margin-bottom: 0;
    }

    .popup_body {
        display: flex;
        justify-content: space-between;
        text-align: center;
    }
    .popup_footer {
        display: flex;
        justify-content: flex-end;
    }
    .close_popup {
        cursor: pointer;
        margin-top: 10px;
        padding-bottom: 10px;
    }

    @media (max-width: 1920px) {
        .popup {
            max-width: 1820px;
            left: 2%;
            right: 2%;
        }
    }
    @media (max-width: 1300px) {
        .popup {
            max-width: 1200px;
            left: 2.3%;
            right: 2%;
        }
    }
    @media (max-width: 768px) {
        .popup {
            padding: 0px;
            left: 0;
            right: 0;
            max-width: 768px;
            height: 100%;
        }
        .popup_header, .popup_footer {
            padding: 5px;
        }
        .popup_body {
            display: block;
        }
        .popup_body__left {
            max-width: 300px;
            margin-left: auto;
            margin-right: auto;
        }
        .popup_body__trailer{
            display: block;
        }
    }
</style>