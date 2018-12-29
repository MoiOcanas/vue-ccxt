<template>
  <section>
    <div class="box">
      <h1>Trades</h1>
      <table class="table is-bordered is-fullwidth">
        <thead>
          <tr>
            <th>Size</th>
            <th>Price</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="trade in data" :key="trade.id">
            <td>{{ trade.symbol }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
const ccxt = require("ccxt");
let acx = new ccxt.acx();

let data;
export default {
  data() {
    return {
      data
    };
  },
  mounted() {
    if (acx.has["fetchTrades"]) {
      let sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
      for (symbol in acx.markets) {
        sleep(acx.rateLimit); // milliseconds
        console.log(acx.fetchTrades(symbol));
      }
    }
  }
};
</script>

<style scoped>
h1 {
  font-size: 35px;
}
</style>