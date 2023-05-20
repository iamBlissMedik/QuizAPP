<script setup>
import { storeToRefs } from "pinia";
import { useQuizStore } from "@/stores/quiz";
const store = useQuizStore();
const { quizQuestion, quizStart, quizEnd } = storeToRefs(store);
</script>
<template>
  <main class="h-screen w-screen flex justify-center px-3 items-center quiz-app">
    <NuxtLayout>
      <Transition name="fade" mode="out-in">
        <div v-if="quizStart">
          <QuizStart />
        </div>
      </Transition>
      <Transition name="fade" mode="out-in">
        <div v-if="quizEnd">
          <QuizEnd />
        </div>
      </Transition>
      <Transition name="fade" mode="out-in">
        <div v-if="quizQuestion">
          <QuizQuestion />
        </div>
      </Transition>
    </NuxtLayout>
  </main>
</template>

<style>
.quiz-app {
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
  transform: translateX(-20px);
}
</style>
