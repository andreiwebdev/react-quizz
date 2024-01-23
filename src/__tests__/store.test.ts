import "@testing-library/jest-dom";
import { quizzActions, quizzReducer } from "../store/store";
import { QuizzStoreTypes } from "../components/types";

describe("quizzSlice reducers", () => {
    const initialState: QuizzStoreTypes = {
        data: [
            {
                title: "HTML",
                icon: "/img/icon-html.svg",
                questions: [
                    {
                        question: "What does HTML stand for?",
                        options: [
                            "Hyper Trainer Marking Language",
                            "Hyper Text Marketing Language",
                            "Hyper Text Markup Language",
                            "Hyper Text Markup Leveler",
                        ],
                        answer: "Hyper Text Markup Language",
                    },
                ],
            },
            {
                title: "CSS",
                icon: "/img/icon-css.svg",
                questions: [
                    {
                        question: "What does CSS stand for?",
                        options: [
                            "Colorful Style Sheets",
                            "Computer Style Sheets",
                            "Cascading Style Sheets",
                            "Creative Style Sheets",
                        ],
                        answer: "Cascading Style Sheets",
                    },
                ],
            },
        ],
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
        darkMode: false,
    };

    it("should handle the startQuizz action correctly", () => {
        const title = "HTML";
        const action = quizzActions.startQuizz(title);
        const state = quizzReducer(initialState, action);

        expect(state.questionsData).toEqual([
            {
                title: "HTML",
                icon: "/img/icon-html.svg",
                questions: [
                    {
                        question: "What does HTML stand for?",
                        options: [
                            "Hyper Trainer Marking Language",
                            "Hyper Text Marketing Language",
                            "Hyper Text Markup Language",
                            "Hyper Text Markup Leveler",
                        ],
                        answer: "Hyper Text Markup Language",
                    },
                ],
            },
        ]);

        expect(state.isGameStarted).toBe(true);
        expect(state.activeQuestion).toEqual({
            question: "What does HTML stand for?",
            options: [
                "Hyper Trainer Marking Language",
                "Hyper Text Marketing Language",
                "Hyper Text Markup Language",
                "Hyper Text Markup Leveler",
            ],
            answer: "Hyper Text Markup Language",
        });
    });

    it("should handle the selectAnswer action correctly", () => {
        const answer = "Hyper Text Markup Language";
        const action = quizzActions.selectAnswer(answer);
        const state = quizzReducer(initialState, action);

        expect(state.selectedAnswer).toBe(answer);
    });

    it("should handle the submitAnswer action correctly if selectedAnswer is the correct answer", () => {
        const initialState: any = {
            activeQuestion: {
                answer: "HTML",
            },
            selectedAnswer: {
                answer: "HTML",
            },
            isCorrectAnswer: null,
            score: 0,
        };
        const action = quizzActions.submitAnswer();
        const state = quizzReducer(initialState, action);

        expect(state.score).toBe(1);
        expect(state.isCorrectAnswer).toBe(true);
    });

    it("should handle the submitAnswer action correctly if selectedAnswer is the wrong answer", () => {
        const initialState: any = {
            activeQuestion: {
                answer: "HTML",
            },
            selectedAnswer: {
                answer: "HTMX",
            },
            isCorrectAnswer: null,
            score: 0,
        };

        const action = quizzActions.submitAnswer();
        const state = quizzReducer(initialState, action);

        expect(state.isCorrectAnswer).toBe(false);
    });

    it("should handle the nextQuestion action", () => {
        const initialState: any = {
            questionsData: [
                {
                    title: "HTML",
                    icon: "/img/icon-html.svg",
                    questions: [
                        {
                            question: "What does HTML stand for?",
                            options: [
                                "Hyper Trainer Marking Language",
                                "Hyper Text Marketing Language",
                                "Hyper Text Markup Language",
                                "Hyper Text Markup Leveler",
                            ],
                            answer: "Hyper Text Markup Language",
                        },
                        {
                            question: "Q2",
                            options: ["A1", "A2", "A3", "A4"],
                            answer: "A3",
                        },
                    ],
                },
            ],
            activeQuestion: {
                question: "",
                options: [],
                answer: "",
            },
            isGameStarted: false,
            questionIndex: 0,
            selectedAnswer: {
                id: 0,
                answer: "A1",
                correctAnswerIndex: 1,
            },
            isCorrectAnswer: null,
        };

        const action = quizzActions.nextQuestion();
        const state = quizzReducer(initialState, action);

        expect(state.questionIndex).toBe(1);
        expect(state.activeQuestion).toEqual({
            question: "Q2",
            options: ["A1", "A2", "A3", "A4"],
            answer: "A3",
        });
        expect(state.selectedAnswer).toEqual({
            id: null,
            answer: "",
            correctAnswerIndex: null,
        });
        expect(state.isCorrectAnswer).toBe(null);
    });

    it("should handle the playAgain action", () => {
        const initialState: any = {
            questionsData: [
                {
                    title: "HTML",
                    icon: "/img/icon-html.svg",
                    questions: [
                        {
                            question: "What does HTML stand for?",
                            options: [
                                "Hyper Trainer Marking Language",
                                "Hyper Text Marketing Language",
                                "Hyper Text Markup Language",
                                "Hyper Text Markup Leveler",
                            ],
                            answer: "Hyper Text Markup Language",
                        },
                        {
                            question: "Q2",
                            options: ["A1", "A2", "A3", "A4"],
                            answer: "A3",
                        },
                    ],
                },
            ],
            activeQuestion: {
                question: "Q10",
                options: ["A1", "A2", "A3", "A4"],
                answer: "A2",
            },
            isGameStarted: true,
            questionIndex: 9,
            selectedAnswer: {
                id: 0,
                answer: "A1",
                correctAnswerIndex: 1,
            },
            isCorrectAnswer: null,
        };

        const action = quizzActions.playAgain();
        const state = quizzReducer(initialState, action);

        expect(state.questionIndex).toBe(0);
        expect(state.isGameStarted).toBe(false);
        expect(state.questionsData).toEqual([]);
        expect(state.activeQuestion).toEqual({
            question: "",
            options: [],
            answer: "",
        });
        expect(state.selectedAnswer).toEqual({
            id: null,
            answer: "",
            correctAnswerIndex: null,
        });
        expect(state.isCorrectAnswer).toBe(null);
        expect(state.score).toBe(0);
    });

    it("should handle toggleDarkMode action", () => {
        const initialState: any = {
            darkMode: false,
        };
        const action = quizzActions.toggleDarkMode();
        const state = quizzReducer(initialState, action);

        expect(state.darkMode).toBe(true);
    });
});
