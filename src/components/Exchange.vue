<template>
  <section>
    <h1>Exchange</h1>
    <div class="search">
      <vue-single-select v-model="search" :options="results" :required="true"></vue-single-select>
    </div>
  </section>
</template>

<script>
import VueSingleSelect from "vue-single-select";
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
    VueSingleSelect
  }
};
</script>

<style scoped>
.search {
  width: 400px;
  margin: 0 auto;
}

section {
  border: 1px solid purple;
}
</style>


