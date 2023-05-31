<template>
  <p
    v-for="option in props.options"
    @click="emit('clickOption', option)"
    :key="option"
  >
    {{ option }}
  </p>
</template>

<script setup>
import { ref, computed, onMounted, onUpdated, onUnmounted, watch } from "vue";
import { useRouter } from "vue-router";
const props = defineProps({
  options: Array,
  modelValue: String,
});
const emit = defineEmits(["clickOption", "update:modelValue"]);
</script>