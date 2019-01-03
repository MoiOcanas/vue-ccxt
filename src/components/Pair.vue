<template>
  <section>
    <div class="notification is-link">
      <h1>Pair <i class="fas fa-money-bill-alt fa-xs"></i></h1>
      <div class="field cent">
        <div class="control">
          <div class="select is-info">
            <select :value="pair.symbol" @change="getP">
              <option disabled value="">Select a pair</option>
              <option v-for="pair in pairs" :value="pair.symbol" :key="pair.id">{{ pair.symbol }}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name:'Pair',
  computed: {
    pairs () {
      return this.$store.state.pairs
    },
    pair () {
      return this.$store.state.pair
    }
  },
  methods: {
    ...mapActions(['getPair', 'getTrades']),
    getP (e) {
      let pair = e.target.value
      this.getPair(pair)
      this.getTrades()
    }
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