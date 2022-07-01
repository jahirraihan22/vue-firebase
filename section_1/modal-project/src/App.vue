<!-- @format -->

<template>
  <div class="">
    <h1>{{ title }}</h1>
    <!-- <input type="text" id="name" ref="name" />
    <button type="button" @click="handleClick">Click Me</button> -->
    <Modal :content="content" :title="title" />
  </div>
</template>

<script>
import Modal from "./components/Modal.vue";
export default {
  components: { Modal },
  name: "App",
  component: {
    Modal,
  },
  data() {
    return {
      title: "This is props title",
      content: "This is props content",
    };
  },
  methods: {
    handleClick() {
      alert("hi");
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
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #2c3e50;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
