<template>
  <div class="container">
      <div class="columns is-mobile">
        <div class="column">
          <exchange></exchange>
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
export default {
  name: 'App',
  components: {
    Exchange,
    Trades
  }
}
</script>

<style>
  * {
    text-align: center;
  }
</style>
