<script>
import axios from 'axios';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import CardsContainer from './components/CardsContainer.vue';
import Loader from './components/partials/Loader.vue';
import SearchBar from './components/partials/SearchBar.vue';

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
    Footer,
    Loader,
    SearchBar
  },
  methods:{
    getApi(){
      store.isLoading = true;
      axios.get(store.apiUrl, {
        params:{
          status: store.statusToSearch,
          name: store.nameToSearch
        }
      })
        .then(result => {
          // I save the data in the store
          store.charactersList = result.data.results;
          store.totalCount = result.data.info.count;
          store.isLoading = false;
          store.next = result.data.info.next;
          store.prev = result.data.info.prev;
          // upon first loading I filter the statuses and save them in the store for the select
          if(store.listStatus.length === 0){
            store.charactersList.forEach(element => {
              if(!store.listStatus.includes(element.status)){
                store.listStatus.push(element.status)
              }
            });
          }
        })
        // if the search returns a 404 then I have to reset everything by hand
        .catch(error => {
          store.charactersList = [];
          store.isLoading = false;
          store.next = null;
          store.prev = null;
          store.apiUrl = store.apiUrlOriginal;
        })
    }
  },
  mounted(){
    store.apiUrl = store.apiUrlOriginal;
    this.getApi();
    document.title = 'R&M' // I change the title of the page
  }
}
</script>

<template>
  <Header title="Rick & Morty App" />

  <SearchBar @startSearch="getApi"/>

  <Loader v-if="store.isLoading"/>

  <div v-else>
    
    <!-- Cards container and will read the data from the store -->
    <CardsContainer />
  
    <Footer @goToNextPrev="getApi" />

  </div>

</template>

<style lang="scss">
@use './scss/main.scss';


</style>