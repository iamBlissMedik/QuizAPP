<script setup>
import { storeToRefs } from "pinia";
import { useQuizStore } from "@/stores/quiz";
const store = useQuizStore();
const { currentQuestion } = storeToRefs(store);
</script>

<template>
  <!-- options -->
  <div class="grid grid-cols-1 gap-3">
    <QuizQuestionOption
      v-for="(option, index) in currentQuestion.options"
      :key="index"
      :option="option"
      :optionID="index + 1"
      :index="index"
    />
  </div>
</template>
