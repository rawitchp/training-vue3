<template>
  <button @click="() => router.push({ name: 'addUser' })" class="addBtn">
    Add User
  </button>
  <div v-for="data in allData" :key="data.user_id">
    <div class="card">
      <div>ชื่อ: {{ data.name }}</div>
      <div>นามสกุล: {{ data.lastname }}</div>
      <div>ที่เที่ยว: {{ data.fav_place }}</div>
      <div>อาหารทีชอบ: {{ data.fav_food }}</div>
      <div>ร้านที่ชอบ: {{ data.fav_store }}</div>
      <button
        @click="
          () => router.push({ name: 'user', params: { userId: data.user_id } })
        "
      >
        Edit
      </button>
      <button @click="deleteUser(data.user_id)">Delete</button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import api from "../api/http";
const allData = ref([]);
const router = useRouter();
const route = useRoute();
const DUMMY = [
  {
    user_id: 0,
    name: "a",
    lastname: "b",
    fav_place: "c",
    fav_food: "d",
    fav_store: "e",
  },
  {
    user_id: 1,
    name: "a1",
    lastname: "b1",
    fav_place: "c1",
    fav_food: "d1",
    fav_store: "e1",
  },
  {
    user_id: 2,
    name: "a2",
    lastname: "b2",
    fav_place: "c2",
    fav_food: "d2",
    fav_store: "e2",
  },
  {
    user_id: 3,
    name: "a3",
    lastname: "b3",
    fav_place: "c3",
    fav_food: "d3",
    fav_store: "e3",
  },
  {
    user_id: 4,
    name: "a4",
    lastname: "b4",
    fav_place: "c4",
    fav_food: "d4",
    fav_store: "e4",
  },
];
async function getUser() {
  try {
    const res = await api.get("/returnTable");
    // console.log(res);
    allData.value = res.data.record;
    console.log("getData");
  } catch (err) {
    console.log(err);
  }
}
setInterval(() => {
  getUser();
}, 5000);
onMounted(() => getUser());

async function deleteUser(id) {
  try {
    const res = await api.delete(`/deleteRecord/${id}`);
    console.log(res);
    console.log("deleted");
    getUser();
  } catch (err) {
    console.log(err);
  }
}
</script>

<style scoped>
.card {
  padding: 10px;
  /* border: 1px solid black; */
  margin: 10px 10px;
  border-radius: 10px;
  background-color: rgb(149, 149, 255);
  width: 200px;
  color: black;
}

.addBtn {
  background-color: rgb(110, 213, 110);
  color: azure;
  border-radius: 10px;
  border: 0px;
  padding: 20px;
  cursor: pointer;
}
</style>