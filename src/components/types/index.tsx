type Subject = {
    title: string;
    icon: string;
};

type WrapperProps = {
    children: React.ReactNode;
};

type AnswersContainerProps = {
    data?: Subject[];
};

type AnswerProps = {
    id: number;
    title: string;
    icon: string;
};

export type { Subject, WrapperProps, AnswerProps, AnswersContainerProps };
