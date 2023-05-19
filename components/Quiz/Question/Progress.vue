<script setup>
import { storeToRefs } from "pinia";
import { useQuizStore } from "@/stores/quiz";
const store = useQuizStore();
const {
  questions,
  questionCount,
  percentageTimer,
  remainingMinutes,
  remainingSeconds,
} = storeToRefs(store);
</script>
<template>
  <!-- question progress -->
  <div class="grid gap-1">
    <!-- number of question and timer -->
    <div class="flex justify-between">
      <!-- number of question -->
      <p>Question {{ questionCount + 1 }}/{{ questions.length }}</p>
      <p>{{ remainingMinutes }}:{{ remainingSeconds }}</p>
    </div>
    <!-- progress bar -->
    <div class="h-2 w-full rounded-full relative">
      <!-- indicator -->
      <span
        class="h-full bg-[#028a3d] absolute top-0 rounded-full"
        :style="`width:${percentageTimer}%`"
      >
      </span>
    </div>
  </div>
</template>
