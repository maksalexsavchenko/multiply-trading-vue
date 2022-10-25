<template>
  <div class="container">
    <h1>Trading view multiply charts</h1>
    <div class="trading-view">

      <div class="trading-view-item">
        <TradingViewItem unique-id="trading-view1" :symbol="'HUOBI:BTCUSDT'"/>
      </div>
      <div class="trading-view-item">
        <TradingViewItem unique-id="trading-view2" :symbol="'BINANCE:BTCUSDT'"/>
      </div>
    </div>
  </div>
</template>

<script>
import TradingViewItem from "./components/TradingViewItem.vue";
export default {
  components: {TradingViewItem}
}


</script>

<style scoped>

</style>
