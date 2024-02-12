<script>

export default {
  name: 'Card',
  props:{
    img: String,
    name: String,
    status: String,
    species: String
  }
}
</script>

<template>
  <div class="mdf-card col mb-3">
    <img :src="img" :alt="name">
    <h4>{{name}}</h4>
    <p>{{status}}</p>
    <p>{{species}}</p>
  </div>

</template>

<style lang="scss" scoped>
@use '../scss/partials/vars' as *;

.mdf-card{
  text-align: center;
  h4{
    &::after{
      content: '';
      display: block;
      border-bottom: 1px solid $primary-color;
      width: 20%;
      margin: 20px auto;
    }
  }
  img{
    border-radius: 50%;
    box-shadow: 0 0 10px rgba($color: #000000, $alpha: .4);
    margin-bottom: 20px;
    transition: all .2s;
    &:hover{
      transform: scale(1.05);
    }
  }
}
</style>