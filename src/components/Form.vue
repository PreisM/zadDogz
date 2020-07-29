<template>
  <div class="formWrapper">
    <div class="log">
      <k-input :label="'Login'" type="text" id="login" v-model.trim="login" />
    </div>
    <div class="pass">
      <k-input :label="'Password'" type="password" v-model.trim="pass" />
    </div>
    <div class="buttons">
      <k-button @click="sendData" :disabled="pass.length == ''|| login == ''">Submit</k-button>
      <k-button @click="clean" icon="refresh" type="reset"></k-button>
    </div>
    <kendo-notification ref="popupNotification" append-to=".buttons"></kendo-notification>
  </div>
</template>

<script>
import axios from 'axios';

const API = "https://dogz.studio/api/login";

export default {
  name: "Form",
  data() {
    return {
      login: "",
      pass: "",
      sendform: false,
      error: false,
    };
  },
  methods: {
    sendData() {
      if (this.sendform !== true) {
        //blocking the possibility of answering the server's query before the answer is received
        this.sendform = true;
        //ask API
        axios
          .post(`${API}`, {
            email: this.login,
            password: this.pass,
          })
          // getting the answer - the data is correct
          .then((response) => {
            this.sendform = false;
            this.error = false;
            this.popupNotificationWidget.show('Correct data. You are signed in.', 'succes')
          })
          // getting the answer - the data is incorrect
          .catch((error) => {
            this.sendform = false;
            this.error = true;
            this.popupNotificationWidget.show('Login or password is incorrect', 'error');
          });
      }
    },
    //data cleaning
    clean() {
      this.$data.login = "";
      this.$data.pass = "";
      this.popupNotificationWidget.hide();
    }
  },
  mounted: 
    function () {
        this.popupNotificationWidget = this.$refs.popupNotification.kendoWidget();
    }, 
};
</script>

<style scoped>

</style>
