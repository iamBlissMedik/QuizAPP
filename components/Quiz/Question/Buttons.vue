<script setup>
import { useQuizStore } from "@/stores/quiz";
import { storeToRefs } from "pinia";
const store = useQuizStore();

const { canNext, timerResponse } = storeToRefs(store);
</script>

<template>
  <!-- buttons -->
  <div class="mt-20">
    <div class="flex justify-between" v-if="!timerResponse">
      <!-- stop -->

      <button
        class="neumorph px-4 py-2 rounded min-w-[140px] text-[15px] text-white bg-[#ec880c]"
        @click="store.endQuiz()"
      >
        STOP
      </button>
      <!-- next -->

      <button
        class="neumorph px-4 py-2 rounded min-w-[140px] text-[15px] text-white bg-[#028a3d]"
        @click="store.nextQuestion()"
        :class="{ 'cursor-not-allowed opacity-70': !canNext }"
      >
        NEXT
      </button>
    </div>
    <div v-else>
      <!-- Show result-->

      <button
        class="neumorph px-4 py-2 rounded min-w-[140px] text-[15px] float-right text-white bg-[#028a3d]"
        @click="store.endQuiz()"
      >
        SHOW RESULT
      </button>
    </div>
  </div>
</template>
