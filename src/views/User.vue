<template>
  <div>
    <form @submit.prevent="confirmForm">
      <div><label>ชื่อ: </label><input type="text" v-model="data.name" /></div>
      <div>
        <label>นามสกุล: </label><input type="text" v-model="data.lastname" />
      </div>
      <div>
        <label>ที่เที่ยว: </label><input type="text" v-model="data.fav_place" />
      </div>
      <div>
        <label>อาหารทีชอบ: </label><input type="text" v-model="data.fav_food" />
      </div>
      <div>
        <label>ร้านที่ชอบ: </label
        ><input type="text" v-model="data.fav_store" />
      </div>
      <button type="submit" class="bg-green-400 p-2 rounded text-white">
        Confirm
      </button>
    </form>
    <button @click="router.back()" class="bg-red-400 p-2 rounded text-white">
      Back
    </button>
  </div>
</template>
  
  <script setup>
import { onMounted, ref } from "vue";
import api from "../api/http";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const userId = route.params.userId;
console.log(userId);

const data = ref({});
const DUMMY = [
  {
    id: 0,
    name: "a",
    lastName: "b",
    fav_place: "c",
    fav_food: "d",
    fav_store: "e",
  },
  {
    id: 1,
    name: "a1",
    lastName: "b1",
    fav_place: "c1",
    fav_food: "d1",
    fav_store: "e1",
  },
  {
    id: 2,
    name: "a2",
    lastName: "b2",
    fav_place: "c2",
    fav_food: "d2",
    fav_store: "e2",
  },
  {
    id: 3,
    name: "a3",
    lastName: "b3",
    fav_place: "c3",
    fav_food: "d3",
    fav_store: "e3",
  },
  {
    id: 4,
    name: "a4",
    lastName: "b4",
    fav_place: "c4",
    fav_food: "d4",
    fav_store: "e4",
  },
];

async function getUser() {
  try {
    const res = await api.get(`/findRecord/${userId}`);
    console.log(res);
    data.value = res.data.record;
  } catch (err) {
    console.log(err);
  }
}
onMounted(() => getUser());

async function confirmForm() {
  try {
    const res = await api.put(`/updateRecord`, {
      user_id: userId,
      name: data.value.name,
      lastname: data.value.lastname,
      fav_place: data.value.fav_place,
      fav_food: data.value.fav_food,
      fav_store: data.value.fav_store,
    });
    console.log(res);
    router.back();
  } catch (err) {
    console.log(err);
  }
  // router.back();
}
</script>
  
  <style scoped>
</style>