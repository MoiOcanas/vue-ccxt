<template>
  <section>
    <div class="box">
      <h1>Pair</h1>
      <div class="field cent">
        <div class="control">
          <div class="select is-info">
            <select v-model="selected">
              <option v-for="pair in pairs" :key="pair.id">{{ pair.symbol }}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VueSingleSelect from "vue-single-select";

const ccxt = require("ccxt");
const exchanges = ccxt.exchanges;

async function getMarkets() {
  let acx = new ccxt.acx();
  let markets = await acx.load_markets();
  return markets;
}

let pairs;

export default {
  data() {
    return {
      selected: "",
      pairs
    };
  },
  mounted() {
    getMarkets().then(markets => (this.pairs = markets));
  },
  components: {
    VueSingleSelect
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto");
h1 {
  font-size: 35px;
}

.search {
  width: 400px;
  margin: 0 auto;
}

.cent {
  margin: 0 auto;
}
</style>