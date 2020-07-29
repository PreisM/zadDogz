<template>
  <div id="app">
    <Form />
  </div>
</template>

<script>
import Form from "@/components/Form.vue";

export default {
  components: {
    Form,
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
.k-button {
  text-transform: none;
  margin: 1em 0.5em;
}
</style>
