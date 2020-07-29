<template>
  <div>
    <div>
      <k-input :label="'Login'" type="text" v-model.trim="login" />
    </div>
    <div>
      <k-input :label="'Password'" type="password" v-model.trim="pass" />
    </div>
    <div>
      <k-button @click="sendData" :disabled="pass == ''|| login == ''">Submit</k-button>
      <k-button @click="clean" icon="refresh" type="reset" />
    </div>
    <kendo-notification ref="popupNotification" />
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
    };
  },
  methods: {
    sendData() {
      if (this.sendform !== true) {
        //blocking multiple query
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
            this.popupNotificationWidget.show('Correct data. You are signed in.', 'succes')
          })
          // getting the answer - the data is incorrect
          .catch((error) => {
            this.sendform = false;
            this.popupNotificationWidget.show('Login or password is incorrect', 'error');
          });
      }
    },
    //data cleaning
    clean() {
      this.login = "";
      this.pass = "";
      this.popupNotificationWidget.hide();
    }
  },
  mounted() {
        this.popupNotificationWidget = this.$refs.popupNotification.kendoWidget();
    }, 
};
</script>

<style scoped>
.k-button {
  text-transform: none;
  margin: 1em 0.5em;
}
</style>
