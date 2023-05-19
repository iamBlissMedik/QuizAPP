<script setup>
import { storeToRefs } from "pinia";
import { useQuizStore } from "@/stores/quiz";
const store = useQuizStore();
const { radio } = storeToRefs(store);

const optionClicked = (i) => {
  store.onOptionClick(i);
};
const props = defineProps({
  option: String,
  optionID: Number,
  index: Number,
});
</script>

<template>
  <!-- first option -->
  <div
    class="border border-[#ddd] flex items-center pl-4 rounded cursor-pointer hover:border-[#ec880c]"
    @click="optionClicked(index)"
  >
    <input
      type="radio"
      name="quiz-option"
      v-model="radio"
      :value="option"
      :id="`quiz-option-${optionID}`"
      class="w-4 h-4 accent-[#ec880c] ]"
    />
    <label
      :for="`quiz-option-${optionID}`"
      class="w-full py-4 ml-2 cursor-pointer"
      >{{ option }}</label
    >
  </div>
</template>
