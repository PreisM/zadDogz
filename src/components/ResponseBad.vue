<template>
  <div class="responseWrapper">
    <div class="bad">
      <p>
        Login or password is incorrect
      </p>
      <router-link to="/reminder">Remind password</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResponseBad",
};
</script>

<style scoped>
p {
  color: red;
}
</style>
