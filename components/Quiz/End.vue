<script setup>
import { storeToRefs } from "pinia";
import { useQuizStore } from "@/stores/quiz";
const store = useQuizStore();
const { percentageScore } = storeToRefs(store);
</script>

<template>
  <!-- quiz end -->
  <div class="flex flex-col justify-center items-center">
    <!-- score -->
    <div class="text-center">
      <h1 class="text-[calc(2vw+2vh+7vmin)]">{{ percentageScore }}%</h1>
      <p class="text-[#888]">Your Score</p>
    </div>
    <!-- go back home -->
    <div class="w-full flex justify-center mt-20">
      <button
        class="neumorph cursor-pointer px-4 py-2 rounded bg-[#0880d6] min-w-[140px] text-[15px] text-white w-7/12"
        @click="store.restartQuiz()"
      >
        GO HOME
      </button>
    </div>
  </div>
</template>
