<template>
  <div id="app">
      <h1>HELLO</h1>
      <exchange></exchange>
      <pair></pair>
      <trades></trades>
  </div>
</template>

<script>
import Exchange from '@/components/Exchange'
import Pair from '@/components/Pair'
import Trades from '@/components/Trades'
export default {
  name: 'App',
  components: {
    Exchange,
    Pair,
    Trades
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 160px;
}
</style>
