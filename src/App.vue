<template>
  <div id="app">
      <golden-layout>
        <gl-component>
          <Exchange/>
        </gl-component>
      </golden-layout>

      <golden-layout>
        <gl-component>
          <Pair/>
        </gl-component>
      </golden-layout>

      <golden-layout>
        <gl-component>
          <Trades/>
        </gl-component>
      </golden-layout>
  </div>
</template>

<script>
//Golden layout
import "golden-layout/src/css/goldenlayout-dark-theme.css";

import Exchange from "@/components/Exchange";
import Trades from "@/components/Trades";
import Pair from "@/components/Pair";
export default {
  name: "App",
  components: {
    Exchange,
    Trades,
    Pair
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Staatliches");

html,
body {
  margin: 0px;
  padding: 0px;
  height: 100%;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  min-height: 100%;
  display: grid;
  grid-template-columns: auto auto auto;
}

.titleApp {
  font-size: 45px;
  font-family: "Staatliches", cursive;
}
</style>
