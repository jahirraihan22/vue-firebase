<!-- @format -->

<template>
  <div class="result" @click="tryAgain">
    <p>Score: {{ score }} ms</p>
    <p>Rank: {{ rank }}</p>
    <p>Click to Try Again</p>
  </div>
</template>
<script>
export default {
  props: ["score"],
  data() {
    return {
      rank: "",
    };
  },
  mounted() {
    if (this.score < 250) {
      this.rank = "Super Fast";
    } else if (this.score < 400) {
      this.rank = "Fast";
    } else {
      this.rank = "Slow";
    }
  },
  methods: {
    tryAgain() {
      this.$emit("tryAgain");
    },
  },
};
</script>
<style scoped>
.result {
  width: 400px;
  border-radius: 20px;
  background: #27034b;
  color: #fff;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
  cursor: pointer;
}
</style>
