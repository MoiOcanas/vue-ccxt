<template>
  <section>
    <div class="notification is-info">
      <h1>Trades <i class="fas fa-business-time fa-xs"></i></h1>
      <table class="table is-bordered is-fullwidth over">
        <thead>
          <tr>
            <th>Size</th>
            <th>Price</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="trade in trades" :key="trade.id">
            <td>{{ trade.amount }}</td>
            <td>{{ trade.price }}</td>
            <td>{{ trade.datetime.slice(12, 19) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  name:'Trades',
  computed: {
    trades() {
      return this.$store.state.trades
    }
  }
};
</script>

<style scoped>
h1 {
  font-size: 35px;
}

.over {
  overflow: scroll;
}
</style>