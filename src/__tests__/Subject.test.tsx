import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import Subject from "../components/common/Subject";

describe("Subject component", () => {
    const mockOnClick = jest.fn();

    const props = {
        id: 1,
        title: "HTML",
        icon: "/img/icon-html.svg",
        onClickHandle: mockOnClick,
    };

    it("renders without crashing", () => {
        render(<Subject {...props} />);
    });

    it("calls onClickHandle when clicked & redirects to /quizz", () => {
        const { getByText } = render(<Subject {...props} />);
        fireEvent.click(getByText(props.title));

        expect(mockOnClick).toHaveBeenCalledWith(props.title);
    });
});
