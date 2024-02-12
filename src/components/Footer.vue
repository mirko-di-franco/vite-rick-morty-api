<script>
import {store} from '../data/store'

export default {
  name: 'Footer',
  data(){
    return{
      store
    }
  }
}
</script>

<template>
  
  <footer class="my-5 text-center">
    <!-- I read the data from the store -->
    <p>{{ store.charactersList.length }} risultati su {{ store.totalCount }}</p>
    <div>
      <button class="btn btn-secondary me-3">prev</button>
      <button class="btn btn-secondary">next</button>
    </div>
  </footer>

</template>

<style lang="scss" scoped>

</style>