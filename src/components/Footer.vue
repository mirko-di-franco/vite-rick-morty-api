<script>
import {store} from '../data/store'

export default {
  name: 'Footer',
  data(){
    return{
      store
    }
  },
  methods:{
    nextPrev(value){
      // store.apiUrl becomes store.next o store.prev
      store.apiUrl = store[value]
      // I trigger the event for the new search
      this.$emit('goToNextPrev');
    }
  }
}
</script>

<template>
  
  <footer class="my-5 text-center">
    <!-- I read the data from the store -->
    <p v-if="store.charactersList.length > 0">{{ store.charactersList.length }} risultati su {{ store.totalCount }}</p>
    <p v-else>Non ci sono risultati</p>
    <div>
      <button v-if="store.prev"  @click="nextPrev('prev')" class="btn btn-secondary me-3">prev</button>
      <button v-if="store.next"  @click="nextPrev('next')" class="btn btn-secondary">next</button>
    </div>
  </footer>

</template>

<style lang="scss" scoped>

</style>