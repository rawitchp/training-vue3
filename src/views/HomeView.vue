<template>
  <!--
  components: { BaseInput },- <p v-if="show === 1">Hello {{ fullName }}</p>
  <p v-else-if="show === 2">else if</p>
  <p v-else>else</p> -->
  <!-- <p
    v-for="name in nameArrayObject"
    :key="name"
    @click="
      router.push({
        name: 'about',
        params: { userId: name.id },
        query: {
          name: name.name,
        },
      })
    "
  >
    {{ name.name }}
  </p>
  <input type="text" v-model="nameInput" />
  <button @click="addName" :style="{ backgroundColor: buttonColor }">
    Add name
  </button>
  <br />
  <p>value: {{ test }}</p>
  <p>age: {{ age }}</p>
  <BaseInput v-model="test" v-model:age="age" /> -->
  <!-- <UserComponent :options="['option1', 'option2']" v-model="option" /> -->
  <!-- <button @click="router.push({ name: 'about', params: { userId: 2 } })">
    About page(Inline)
  </button> -->
  <!-- <button @click="goToAboutPage">About page(function)</button> -->
  <form @submit.prevent="submitForm">
    <h3 class="text-blue-800">USER REGISTER FORM</h3>
    <div>
      <label class="mr-4">Name</label>
      <input type="text" v-model="userInfo.name" />
    </div>
    <div>
      <label class="mr-4">Lastname</label>
      <input type="text" v-model="userInfo.lastName" />
    </div>
    <div>
      <label class="mr-4">Phone</label>
      <input type="text" v-model="userInfo.phone" />
    </div>
    <button type="submit" class="bg-red-500 p-2 rounded text-white">
      Send
    </button>
  </form>

  <div>
    <p>Name: {{ userInfo.name }}</p>
    <p>Lastname: {{ userInfo.lastName }}</p>
    <p>Phone: {{ userInfo.phone }}</p>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUpdated, onUnmounted, watch } from "vue";
import { useRouter } from "vue-router";
import BaseInput from "../components/BaseInput.vue";
import UserComponent from "../components/userComponent.vue";
import { useUserStore } from "../stores/user";
import api from "../api/http";

const userStore = useUserStore();
console.log(userStore.user);

const firstName = ref("Rawitch");
const lastName = ref("Payakkawan");
const show = ref(3);
const fullName = computed(() => `${firstName.value}  ${lastName.value}`);
const nameArray = ref(["Mix", "Scott", "Peam"]);
const nameArrayObject = ref([
  { id: 1, name: "Kong" },
  { id: 2, name: "Poi" },
  { id: 3, name: "Prew" },
]);
const nameInput = ref("");
const buttonColor = "red";
const test = ref("");
const age = ref("");
const router = useRouter();

const userInfo = ref({
  name: "",
  lastName: "",
  phone: "",
});

async function getPost() {
  try {
    const res = await api.get("/posts/1");
    console.log(res);
  } catch (err) {
    alert(err.message);
  }
}
getPost();

function addName() {
  nameArray.value.push(nameInput.value);
  nameInput.value = "";
}

function getFirstName() {
  const response = "hello";
  firstName.value = response;
}

function goToAboutPage(data) {
  router.push({ name: "about", params: { userId: data } });
}

function submitForm() {
  console.log(userInfo.value);
  userStore.setUser(userInfo.value);
  userInfo.value = {
    name: "",
    lastName: "",
    phone: "",
  };
  router.push({ name: "about2" });
}

watch(nameInput, (newValue, oldValue) => {
  console.log("new: ", newValue);
  console.log("old: ", oldValue);
});

onMounted(() => {
  getFirstName();
});

onUpdated(() => {
  console.log("Update");
});

onUnmounted(() => {});
</script>

<style scoped>
p {
  color: red;
}
</style>