<script setup>
import { storeToRefs } from "pinia";
import { useQuizStore } from "@/stores/quiz";
const store = useQuizStore();
const { questions, timer } = storeToRefs(store);
</script>

<template>
  <div class="text-[#028a3d] text-sm opacity-60 grid gap-2 mt-2">
    <p>
      Question Count : <span>{{ questions.length }}</span>
    </p>
    <p>
      Time: <span>{{ timer }} seconds</span>
    </p>
  </div>
</template>
