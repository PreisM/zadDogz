<template>
  <div id="app">
    <div class="log">
      <k-input :label="'Login'"
      type="text"
      id="login"
      v-model="login"/>
    </div>
    <div class="pass">
      <k-input :label="'Password'" type="password" v-model="pass"/>
    </div>
    <div class="but">
      <k-button v-model="send" @click="sendData">Submit</k-button>
      <k-button @click="clean" icon="refresh" type="reset"></k-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

const API = 'https://dogz.studio/api/login'

export default {
  data () {
    return {
      send: '',
      login: '',
      pass: '',
      results: [],
    };
  },
  methods: {
    sendData() {
      axios.post(`${API}`, {
        email: this.login,
        password: this.pass,
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
    },
    clean() {
      this.$data.login = "",
      this.$data.pass = ""
    }
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

input[type=text] {
}
.k-button {
  text-transform: none;
  margin: 1em .5em;
}
</style>
