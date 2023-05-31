<template>
  <div>
    <form @submit.prevent="submitForm">
      <div>
        <label>ชื่อ: </label
        ><input type="text" v-model="userInfo.name" required />
      </div>
      <div>
        <label>นามสกุล: </label
        ><input type="text" v-model="userInfo.lastname" required />
      </div>
      <div>
        <label>ที่เที่ยว: </label
        ><input type="text" v-model="userInfo.fav_place" required />
      </div>
      <div>
        <label>อาหารทีชอบ: </label
        ><input type="text" v-model="userInfo.fav_food" required />
      </div>
      <div>
        <label>ร้านที่ชอบ: </label
        ><input type="text" v-model="userInfo.fav_store" required />
      </div>
      <button type="submit" class="bg-green-400 p-2 rounded text-white">
        Send
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import api from "../api/http";
import { useRouter } from "vue-router";

const router = useRouter();

const userInfo = ref({
  name: "",
  lastname: "",
  fav_place: "",
  fav_food: "",
  fav_store: "",
});

async function submitForm() {
  try {
    const res = await api.post("/createRecord", {
      name: userInfo.value.name,
      lastname: userInfo.value.lastname,
      fav_place: userInfo.value.fav_place,
      fav_food: userInfo.value.fav_food,
      fav_store: userInfo.value.fav_store,
    });
    console.log(res);
    router.push({ name: "users" });
  } catch (err) {
    console.log(err);
  }
  router.push({ name: "users" });
}
</script>

<style scoped>
</style>