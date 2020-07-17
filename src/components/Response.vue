<template>
  <div class="responseWrapper">
    <div :class="[error ? 'bad' : 'good']">
        <p>{{ paragraph() }}</p>
        <router-link v-if="error" to="/reminder">Remind password</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Response",
  data() {
    return {
      text: "",
    };
  },
  props: {
    error: {
      type: Boolean,
      required: true,
    },
    message: {
      type: String,
    },
  },
  methods: {
    paragraph() {
      if (this.error !== true) {
        return (this.text = "Correct data. You are signed in.");
      }
      return (this.text = "Login or password is incorrect");
    },
  },
};
</script>

<style scoped>
.good {
  color: green;
}
.bad {
  color: red;
}
</style>
