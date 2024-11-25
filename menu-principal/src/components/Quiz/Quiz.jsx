import React, { useEffect, useState } from "react";
import "/src/css/QuizzCSS/Quizz.css";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false); // Novo estado para controlar se a resposta foi dada

  const apiKey = "f024c47f63aa01f439f0f7fc51d6d0d8"; // Substitua pela sua chave de API do TheMovieDB

  const isAsianName = (name) => {
    const asianRegex = /[\uAC00-\uD7AF\u4E00-\u9FFF\u3040-\u30FF\uFF66-\uFF9F]/;
    return asianRegex.test(name);
  };

  const fetchQuestions = async () => {
    try {
      const movieResponse = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR&page=1`
      );
      const movieData = await movieResponse.json();
      const movies = movieData.results.slice(0, 20); // Pegue 20 filmes para ter uma boa diversidade

      const shuffledMovies = movies
        .sort(() => Math.random() - 0.5)
        .slice(0, 10); // Pegue 10 filmes aleatórios após o embaralhamento

      const questionsData = await Promise.all(
        shuffledMovies.map(async (movie) => {
          const detailsResponse = await fetch(
            `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${apiKey}&language=pt-BR`
          );
          const detailsData = await detailsResponse.json();

          const creditsResponse = await fetch(
            `https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=${apiKey}&language=pt-BR`
          );
          const creditsData = await creditsResponse.json();

          const randomPeopleResponse = await fetch(
            `https://api.themoviedb.org/3/person/popular?api_key=${apiKey}&language=pt-BR&page=1`
          );
          const randomPeopleData = await randomPeopleResponse.json();

          const randomPeople = randomPeopleData.results
            .map((person) => person.name)
            .filter((name) => !isAsianName(name));

          const director = creditsData.crew.find(
            (person) => person.job === "Director" && !isAsianName(person.name)
          )?.name;
          const cast = creditsData.cast.slice(0, 4).map((actor) => actor.name);
          const genres = detailsData.genres.map((genre) => genre.name);

          const questionTypes = [
            {
              question: `Qual o diretor do filme "${movie.title}"?`,
              correctAnswer: director || "Desconhecido",
              incorrectAnswers: randomPeople
                .filter((name) => name !== director)
                .slice(0, 3),
            },
            {
              question: `Qual o gênero principal do filme "${movie.title}"?`,
              correctAnswer: genres[0] || "Desconhecido",
              incorrectAnswers: ["Ação", "Romance", "Terror"].filter(
                (g) => g !== genres[0]
              ),
            },
            {
              question: `Qual destes atores atuou no filme "${movie.title}"?`,
              correctAnswer: cast[0] || "Desconhecido",
              incorrectAnswers: randomPeople
                .filter((name) => !cast.includes(name))
                .slice(0, 3),
            },
          ];

          return questionTypes[
            Math.floor(Math.random() * questionTypes.length)
          ];
        })
      );

      setQuestions(questionsData);
      setLoading(false);
    } catch (error) {
      console.error("Erro ao carregar as perguntas:", error);
    }
  };

  const handleAnswer = (selectedAnswer) => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

    if (isCorrect) {
      setScore(score + 1);
    }

    setAnswered(true); // Marca a resposta como dada
  };

  const nextQuestion = () => {
    setAnswered(false);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  if (loading) {
    return <div className="loading">Carregando perguntas...</div>;
  }

  if (currentQuestionIndex >= questions.length) {
    return (
      <div className="finish-message">
        Parabéns! Sua pontuação final foi: {score}/{questions.length}
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const options = [
    ...currentQuestion.incorrectAnswers,
    currentQuestion.correctAnswer,
  ].sort(() => Math.random() - 0.5);

  return (
    <div className="quiz-container">
      <h1>Quiz de Filmes</h1>
      <h2>{currentQuestion.question}</h2>
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleAnswer(option)}
          className={
            answered
              ? option === currentQuestion.correctAnswer
                ? "correct"
                : "incorrect"
              : ""
          }
        >
          {option}
        </button>
      ))}
      <p>
        Pergunta {currentQuestionIndex + 1} de {questions.length}
      </p>
      {answered && (
        <button onClick={nextQuestion} className="next-question">
          Próxima pergunta
        </button>
      )}
    </div>
  );
};

export default Quiz;
