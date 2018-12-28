<template>
  <section>
    <h1>Trades</h1>
    <table class="tab">
      <tr>
        <th>Size</th>
        <th>Price</th>
        <th>Time</th>
      </tr>
      <tr v-for="trade in trades" :key="trade.id">
        <td>{{ trade.symbol }}</td>
        <td>{{ trade.base }}</td>
        <td>{{ trade.quote }}</td>
      </tr>
    </table>
  </section>
</template>

<script>
const ccxt = require("ccxt");
let exchange = new ccxt.bibox ()
export default {
  data() {
      return {
          trades: []
      }
  },
  created() {
    this.trades = exchange.fetchMarkets()
    console.log(this.trades)
  }
};
</script>

<style scoped>
section {
  border: 1px solid red;
}

.tab {
  border: 1px solid red;
  width: 600px;
  margin: 0 auto;
}
</style>