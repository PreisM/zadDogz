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
    <Response v-if="showMsg" :error="error" />
  </div>
</template>

<script>
import Response from "@/components/Response.vue";

const API = "https://dogz.studio/api/login";

export default {
  name: "Home",
  components: {
    Response,
  },
  data() {
    return {
      login: "",
      pass: "",
      send: "",
      results: [],
      sendform: false,
      showMsg: false,
      error: false,
    };
  },
  methods: {
    sendData() {
      if (this.sendform !== true) {
        //zablokowanie możliwości wielokrotnego zapytania serwera przed uzyskaniem odpowiedzi
        this.sendform = true;
        //zapytanie API
        axios
          .post(`${API}`, {
            email: this.login,
            password: this.pass,
          })
          // uzyskanie odpowiedzi - dane poprawne
          .then((response) => {
            this.sendform = false;
            this.error = false;
            this.showMsg = true;
          })
          // uzyskanie odpowiedzi - dane błędne
          .catch((error) => {
            this.sendform = false;
            this.error = true;
            this.showMsg = true;
          });
      }
    },
    //czyszczenie danych
    clean() {
      this.$data.login = "";
      this.$data.pass = "";
      this.showMsg = false;
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
