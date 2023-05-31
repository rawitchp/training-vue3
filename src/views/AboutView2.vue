<template>
  <div>About Page2</div>
  <p>{{ userStore.user.name }}</p>
  <p>{{ userStore.user.lastName }}</p>
  <p>{{ userStore.user.phone }}</p>

  <p>{{ userStore.fullName }}</p>
  <button @click="router.back()">Back</button>
</template>
<script setup>
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user";
const router = useRouter();
const userStore = useUserStore();
</script>

<style>
</style>
