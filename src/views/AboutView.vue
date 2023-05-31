<template>
  <p>About Page</p>
  <p>{{ route.params.userId }}</p>
  <p>{{ route.query.name }}</p>
  <button @click="goToAbout2">Replace to about 2</button>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();

const goToAbout2 = () => {
  router.replace({ name: "about2" });
};
</script>
<style>
</style>
