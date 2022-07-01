<!-- @format -->

<template>
  <div>
    <h1>As Salamu Alaikum</h1>
    <button type="button" @click="start" :disabled="isPlaying">Play</button>
    <Block v-if="isPlaying" :delay="delay" @end="endGame" />
    <!-- <p v-if="showResult">Reaction Time: {{ score }} ms</p> -->
    <Result v-if="showResult" :score="score" @tryAgain="tryeAgain" />
  </div>
</template>

<script>
import Block from "./components/Block.vue";
import Result from "./components/Result.vue";
export default {
  name: "App",
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: 0,
      showResult: false,
    };
  },
  components: {
    Block,
    Result,
  },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = true;
      this.showResult = false;
    },
    endGame(reactionTime) {
      this.score = reactionTime;
      this.isPlaying = false;
      this.showResult = true;
    },
    tryeAgain() {
      this.isPlaying = false;
      this.delay = null;
      this.score = 0;
      this.showResult = false;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
button {
  background: #27034b;
  border: none;
  border-radius: 20px;
  width: 100px;
  height: 30px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}
button[disabled] {
  opacity: 0.2;
  cursor: not-allowed;
}
</style>
