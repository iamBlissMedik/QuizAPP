<script setup>
import { storeToRefs } from "pinia";
import { useQuizStore } from "@/stores/quiz";
const { quiz } = useQuestion();

const store = useQuizStore();
const { questions } = storeToRefs(store);

// fetch quiz
const fetchQuestion = async () => {
  if (quiz.value) {
    let formattedQuestions = await quiz.value.map((q) => {
      const arrangedQuetions = {
        question: q.question,
        options: "",
        answer: "",
      };
      const options = Object.values(q.answers).filter((item) => item !== null);
      const optionsKeyValue = Object.entries(q.answers).map(([key, value]) => {
        return { option: `${key}_correct`, value };
      });
      const correctAnsArr = Object.entries(q.correct_answers)
        .map(([key, value]) => {
          return { option: key, value };
        })
        .filter((q) => q.value === "true");

      const correctAns = optionsKeyValue.findIndex(
        (e) => e.option === correctAnsArr[0].option
      );
      arrangedQuetions.options = options;
      arrangedQuetions.answer = correctAns;

      return arrangedQuetions;
    });

    questions.value = formattedQuestions;
  }
};

fetchQuestion();
</script>

<template>
  <!-- quiz details question icon -->
  <QuizHomeIcon />
  <!-- quiz details title -->
  <QuizHomeTitle />
  <!-- quiz details desription -->
  <QuizHomeDescription />
  <!-- quiz details count + timer-->
  <QuizHomeCountTimer />

  <!-- quiz details star button -->
  <QuizHomeButton @click="store.startQuiz()" />
</template>
