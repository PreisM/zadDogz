<template>
  <div id="app">
    <div class="log">
      <k-input :label="'Login'" type="text" id="login" v-model="login" />
    </div>
    <div class="pass">
      <k-input :label="'Password'" type="password" v-model="pass" />
    </div>
    <div class="buttons">
      <k-button v-model="send" @click="sendData">Submit</k-button>
      <k-button @click="clean" icon="refresh" type="reset"></k-button>
    </div>
    <ResponseGood v-if="step === 1" />
    <ResponseBad v-if="step === 2" />
  </div>
</template>

<script>
import axios from "axios";
import ResponseGood from "@/components/ResponseGood.vue";
import ResponseBad from "@/components/ResponseBad.vue";

const API = "https://dogz.studio/api/login";

export default {
  name: "Home",
  components: {
    ResponseGood,
    ResponseBad,
  },
  data() {
    return {
      login: "",
      send: "",
      pass: "",
      results: [],
      step: 0,
    };
  },
  methods: {
    sendData() {
      console.log(this.login);
      console.log(this.pass);
      axios
        .post(`${API}`, {
          email: this.login,
          password: this.pass,
        })
        .then((response) => {
          console.log(response);
          this.step = 1;
        })
        .catch((error) => {
          console.log(error);
          this.step = 2;
        });
    },
    clean() {
      (this.$data.login = ""),
      (this.$data.pass = ""),
      (this.step = 0);
    },
  },
};
</script>

<style scoped>
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
