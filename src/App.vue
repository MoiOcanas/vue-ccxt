<template>
  <div class="container">
      <div class="notification is-primary">
        <h1 class="titleApp">CRYPTO APP</h1>
      </div>
      <br>
      <div class="columns">
        <div class="column">
          <exchange></exchange>
        </div>
        <div class="column">
          <pair></pair>
        </div>
        <div class="column">
          <trades></trades>
        </div>
      </div>
  </div>
</template>

<script>
import Exchange from '@/components/Exchange'
import Trades from '@/components/Trades'
import Pair from '@/components/Pair'
export default {
  name: 'App',
  components: {
    Exchange,
    Trades,
    Pair
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Staatliches');
  * {
    text-align: center;
  }

.titleApp {
  font-size: 45px;
  font-family: 'Staatliches', cursive;
}
  
</style>
