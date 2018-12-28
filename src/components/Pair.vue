<template>
  <section>
    <h1>Pair</h1>
    <div class="search">
      <vue-single-select v-model="search" :options="['US', 'CN', 'EU']" :required="true"></vue-single-select>
    </div>
  </section>
</template>

<script>
import VueSingleSelect from "vue-single-select";
const ccxt = require("ccxt");
export default {
  data() {
    return {
      search: ""
    };
  },
  created() {
  },
  components: {
    VueSingleSelect
  }
};
</script>

<style scoped>
section {
  border: 1px solid green;
}

.search {
  width: 400px;
  margin: 0 auto;
}
</style>