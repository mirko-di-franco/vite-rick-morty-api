<script>
import Card from './Card.vue';
import {store} from '../data/store';

export default {
  name: 'CardsContainer',
  data(){
    return{
      store
    }
  },
  components:{
    Card
  }
}
</script>

<template>
  <div class="container">
    <div class="row">

      <!-- Cycle the list of cards taking it from the store -->
      <!-- I pass the single card data through props -->
      <Card
        v-for="character in store.charactersList" 
        :key="character.id"
        :img="character.image"
        :name="character.name"
        :status="character.status"
        :species="character.species"
        />
    
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>