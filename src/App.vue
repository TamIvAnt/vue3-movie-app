<template>
  <movieApp />
</template>

<script>
import movieApp from './components/movieApp.vue'

export default {
  name: 'App',
  components: {
    movieApp
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #EDEDED;
  margin: 0px;
}
body {
  margin: 0;
  background-color: #171717;
}
header {
  width: 100%;

  text-align: center;
}
.header_content{
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  padding-left: 20px;
  padding-right: 20px;
}
h1 {
  font-family: 'Lato', sans-serif;
  font-size: 34px;
  font-weight: 700;

  margin-top: 10px;
  margin-bottom: 10px;
  color: #BDC3C7;
}
input {
  max-width: 200px;
  height: 30px;

  border: 0;
  border-radius: 15px;
  outline: none;

  padding-left: 10px;
  padding-right: 10px;
}

.bcg {
  color: #B5EAEA;
}
.card__bcg {
  background-color: #EDF6E5;
  color: #EDF6E5;
}
.text {
  color: #FFBCBC;
}
.text__2 {
  color: #F38BA0;
}
</style>

