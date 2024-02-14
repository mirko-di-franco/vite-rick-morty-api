<script>
import {store} from '../../data/store';

export default {
  name: 'SearchBar',
  data(){
    return{
      store
    }
  },
  methods:{
    reset(){
      store.nameToSearch = '';
      store.statusToSearch = '';
      store.apiUrl = store.apiUrlOriginal;
      this.$emit('startSearch');
    },
    startSearch(){
      store.apiUrl = store.apiUrlOriginal;
      this.$emit('startSearch');
    }
  }
}
</script>

<template>
  
  <div class="container my-5 ">
    <div class="row justify-content-center">

      <div class="col-auto">
        <input v-model.trim="store.nameToSearch" type="text" class="form-control" placeholder="Serach Character" name="" id="">
      </div>
      <div class="col-auto">
        <select v-model="store.statusToSearch" class="form-select" aria-label="Default select example" name="" id="">
          <option value="" selected>Select Status</option>
          <option v-for="status in store.listStatus" :key="status" :value="status">{{status}}</option>
        </select>
      </div>
      <div class="col-auto">
        <button class="btn btn-info" @click="startSearch">Search</button>
      </div>
      <div class="col-auto">
        <button @click="reset" class="btn btn-warning">Reset</button>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>

</style>