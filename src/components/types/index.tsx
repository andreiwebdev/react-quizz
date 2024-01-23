type WrapperProps = {
    children: React.ReactNode;
};

type SubjectsContainerProps = {
    data?: {
        id?: number;
        title: string;
        icon?: string;
        selectedAnswer?: boolean;
    }[];
    options?: string[];
    handleStartQuizz: (subject: string) => void;
};

type AnswerProps = {
    id?: number;
    answer: string;
    icon?: string;
    selectedAnswer?: boolean;
};

type SubjectProps = {
    id?: number;
    title: string;
    icon?: string;
    selectedAnswer?: boolean;
    onClickHandle: (subject: string) => void;
};

type QuizzTypes = {
    title: string;
    icon: string;
    questions: {
        question: string;
        options: string[];
        answer: string;
    }[];
};

type SubjectLabelProps = {
    title: string;
    icon: string;
    extraClasses?: string;
};

type ActiveQuestionProps = {
    question: string;
    options: string[];
    answer: string;
};

type QuizzStoreTypes = {
    data: QuizzTypes[];
    questionsData: QuizzTypes[];
    isGameStarted: boolean;
    questionIndex: number;
    activeQuestion: ActiveQuestionProps;
    selectedAnswer: {
        length?: number;
        id: number | null;
        answer: string;
        correctAnswerIndex: number | null;
    };
    isCorrectAnswer: boolean | null;
    score: number;
    darkMode: boolean;
};

export type {
    WrapperProps,
    AnswerProps,
    SubjectsContainerProps,
    QuizzTypes,
    SubjectLabelProps,
    QuizzStoreTypes,
    SubjectProps,
};
