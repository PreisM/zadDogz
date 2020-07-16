<template>
  <div id="reminderWrapper">
    <div id="reminder">
      <p>
        Enter your email address. If it exists in the database, we will send
        instructions on how to change the password
      </p>
      <k-input :label="'E-mail adress'" type="email" id="email" />
    </div>
    <k-button @click="thx">Send</k-button>
    <k-button><router-link to="/">Return</router-link></k-button>
    <div id="thx" v-if="step === 1">
      Thank you. Check your e-mail account and click "return"
    </div>
  </div>
</template>

<script>
export default {
  name: "Reminder",
  data() {
    return {
      phoneNumber: "",
      email: "",
      step: 0,
    };
  },
  methods: {
    thx() {
      this.step = 1;
    },
  },
};
</script>

<style scoped>
#reminderWrapper {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#reminder {
  margin-bottom: 1em;
}
.k-button {
  text-transform: none;
  margin: 1em 0.5em;
}
a {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.87);
}
</style>
