<template>
  <div>
    <p>value inside components: {{ props.modelValue }}</p>
    <p>value inside components: {{ props.age }}</p>
    <div>
      <input
        class="styling"
        type="text"
        @input="($event) => emit('update:modelValue', $event.target.value)"
      />
    </div>
    <div>
      <input
        class="styling"
        type="text"
        @input="($event) => emit('update:age', $event.target.value)"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: String,
  age: String,
});
const emit = defineEmits(["update:modelValue", "update:age"]);
</script>

<style scoped>
.styling {
  background-color: lightblue;
  border-radius: 5px;
  height: 50px;
}
</style>