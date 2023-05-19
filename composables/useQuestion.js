export const useQuestion = () => {
  const { quizBase, quizKey } = useRuntimeConfig().public;

  const { data: quiz } = useFetch(`${quizBase}?apiKey=${quizKey}&limit=10`);
  return {
    quiz,
  };
};
