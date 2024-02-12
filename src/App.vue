<script>
import axios from 'axios';
import Header from './components/Header.vue';
import CardsContainer from './components/CardsContainer.vue';

import {store} from './data/store';

export default {
  name: 'App',
  data(){
    return{
      store
    }
  },
  components:{
    Header,
    CardsContainer
  },
  methods:{
    getApi(){
      axios.get(store.apiUrl)
        .then(result => {
          store.charactersList = result.data.results;
        })
    }
  },
  mounted(){
    this.getApi();
    document.title = 'R&M' // I change the title of the page
  }
}
</script>

<template>
  <Header title="Rick & Morty App" />

  <CardsContainer />

</template>

<style lang="scss">
@use './scss/main.scss';


</style>