export const useQuizStore = defineStore("quiz", () => {
  const quizStart = ref(true);
  const quizQuestion = ref(false);
  const quizEnd = ref(false);
  const questions = ref([]);
  const timer = ref(70);

  const timerResponse = ref(false);

  const canNext = ref(false);
  const radio = ref("");
  const questionCount = ref(0);
  const optionPicked = ref(0);
  const score = ref(0);
  const percentageScore = ref(0);
  const currentQuestion = ref({});
  const intervalId = ref(null);

  // countdown
  const countDownTimer = () => {
    intervalId.value = setInterval(() => {
      if (timer.value > 0) {
        timer.value--;
      } else {
        timerResponse.value = true;
        clearInterval(intervalId.value);
      }
    }, 1000);
  };
  // timer bar

  const percentageTimer = computed(() => {
    return Math.floor((timer.value / 70) * 100);
  });

  const startQuiz = () => {
    countDownTimer();
    loadQuestion();
  };

  // next question
  const loadQuestion = () => {
    if (questions.value.length > questionCount.value) {
      quizStart.value = false;
      quizQuestion.value = true;
      currentQuestion.value = questions.value[questionCount.value];
      canNext.value = false;
      radio.value = "";
    } else {
      endQuiz();
    }
  };
  const endQuiz = () => {
    quizEnd.value = true;

    quizQuestion.value = false;
    percentageScore.value = Math.floor(
      (score.value / questions.value.length) * 100
    );
    clearInterval(intervalId);
  };
  const onOptionClick = (index) => {
    optionPicked.value = index;
    canNext.value = true;
  };
  const nextQuestion = () => {
    if (canNext.value) {
      if (optionPicked.value === currentQuestion.value.answer) {
        score.value++;
      }
      questionCount.value++;
      loadQuestion();
    }
  };
  const restartQuiz = () => {
    questionCount.value = 0;
    quizStart.value = true;
    quizEnd.value = false;
    score.value = 0;
    percentageScore.value = 0;
    timer.value = 70;
    timerResponse.value = false;
    clearInterval(intervalId.value);
  };
  const remainingMinutes = computed(() => {
    let minutes = Math.floor(timer.value / 60);
    return minutes < 10 ? "0" + minutes : minutes;
  });

  const remainingSeconds = computed(() => {
    let seconds = timer.value % 60;
    return seconds < 10 ? "0" + seconds : seconds;
  });

  return {
    questions,
    currentQuestion,
    quizQuestion,
    loadQuestion,
    quizStart,
    startQuiz,
    onOptionClick,
    nextQuestion,
    percentageScore,
    radio,
    quizEnd,
    canNext,
    questionCount,
    endQuiz,
    restartQuiz,
    timer,
    timerResponse,
    endQuiz,
    remainingMinutes,
    remainingSeconds,
    percentageTimer,
  };
});
