<template>
  <section>
    <div class="notification is-primary">
      <h1>Exchange <i class="fas fa-flag fa-xs"></i></h1>
      <div class="search">
        <div class="field">
          <div class="control">
            <div class="select is-info">
              <select v-model="exchange" @change="getEx">
                <option disabled value>Select one exchange</option>
                <option
                  v-for="exchange in exchanges"
                  v-bind:value="exchange"
                  :key="exchange.id"
                >{{ exchange }}</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name:'Exchange',
  computed: {
    exchanges() {
      return this.$store.state.exchanges;
    },
    exchange() {
      return this.$store.state.exchange;
    }
  },
  methods: {
    ...mapActions(["getExchange", "getMarketsPair"]),
    getEx(event) {
      let exchange = event.target.value;
      this.getExchange(exchange);
      this.getMarketsPair();
    }
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


