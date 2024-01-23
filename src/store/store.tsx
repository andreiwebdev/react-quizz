import { createSlice, configureStore } from "@reduxjs/toolkit";
import jsonData from "../assets/data.json";
import { QuizzStoreTypes, QuizzTypes } from "../components/types";

const initialState: QuizzStoreTypes = {
    data: jsonData.quizzes,
    questionsData: [],
    activeQuestion: {
        question: "",
        options: [],
        answer: "",
    },
    isGameStarted: false,
    questionIndex: 0,
    selectedAnswer: {
        id: null,
        answer: "",
        correctAnswerIndex: null,
    },
    isCorrectAnswer: null,
    score: 0,
};

const quizzSlice = createSlice({
    name: "quizz",
    initialState,
    reducers: {
        startQuizz(state, action) {
            const selectedQuestionsData = state.data.filter(
                (quizz: QuizzTypes) => quizz.title === action.payload
            );

            state.questionsData = selectedQuestionsData;
            state.isGameStarted = true;
            state.activeQuestion =
                selectedQuestionsData[0].questions[state.questionIndex];
        },
        selectAnswer(state, action) {
            state.selectedAnswer = action.payload;
        },
        submitAnswer(state) {
            if (state.activeQuestion.answer == state.selectedAnswer.answer) {
                state.score++;
                state.isCorrectAnswer = true;
            } else {
                state.isCorrectAnswer = false;
            }
        },
        nextQuestion(state) {
            if (state.questionIndex === 9) {
            } else {
                state.questionIndex++;
                state.activeQuestion =
                    state.questionsData[0].questions[state.questionIndex];
                state.selectedAnswer = {
                    id: null,
                    answer: "",
                    correctAnswerIndex: null,
                };
                state.isCorrectAnswer = null;
            }
        },
        playAgain(state) {
            state.questionIndex = 0;
            state.isGameStarted = false;
            state.activeQuestion =
                state.questionsData[0].questions[state.questionIndex];
            state.selectedAnswer = {
                id: null,
                answer: "",
                correctAnswerIndex: null,
            };
            state.isCorrectAnswer = null;
        },
    },
});

const store = configureStore({
    reducer: quizzSlice.reducer,
});

export const quizzActions = quizzSlice.actions;
export default store;
