<script>
import axios from 'axios';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
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
    CardsContainer,
    Footer
  },
  methods:{
    getApi(){
      axios.get(store.apiUrl)
        .then(result => {
          // I save the data in the store
          store.charactersList = result.data.results;
          store.totalCount = result.data.info.count;
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

  <!-- Cards container and will read the data from the store -->
  <CardsContainer />

  <Footer />
</template>

<style lang="scss">
@use './scss/main.scss';


</style>