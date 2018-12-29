<template>
   <section>
    <div class="box">
      <h1>Exchange</h1>
      <div class="field">
        <div class="control">
          <div class="select is-info">
            <select v-model="search">
              <option v-for="res in results" :key="res.id">{{ res }}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <pair></pair>
  </section>
</template>

<script>
import VueSingleSelect from "vue-single-select";
import Pair from "./Pair";
const ccxt = require("ccxt");
export default {
  data() {
    return {
      results: [],
      search: ""
    };
  },
  methods: {},
  created() {
    this.results = ccxt.exchanges;
  },
  components: {
    VueSingleSelect,
    Pair
  }
};
</script>

<style scoped>
.search {
  width: 400px;
  margin: 0 auto;
}

h1 {
  font-size: 35px;
}
</style>


