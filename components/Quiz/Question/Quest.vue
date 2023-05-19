<script setup>
import { storeToRefs } from "pinia";
import { useQuizStore } from "@/stores/quiz";
const store = useQuizStore();
const { questionCount, currentQuestion, score } = storeToRefs(store);

</script>

<template>
  <div>
    <!-- question number -->
    <p class="text-[#bbb] font-bold">Q{{ questionCount + 1 }}:</p>
    <!-- question -->
    <p class="text-xl font-extralight">{{ currentQuestion.question }}</p>
  </div>
</template>
