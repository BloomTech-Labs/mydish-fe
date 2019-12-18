import React from "react";
import HelloWorld from "../HelloWorld";
import { render } from "react-native-testing-library";
import renderer from "react-test-renderer";

describe("HelloWorld", () => {
    it("snapshot hello world", () => {
        const helloSnap = renderer.create(<HelloWorld />).toJSON();
        expect(helloSnap).toMatchSnapshot();
    });

    it("renders the correct message", () => {
        const { getByTestId } = render(<HelloWorld />);
        const text = getByTestId("hw")
        expect(text.props.children).toMatch(/Hello /i);
    });

    it("display correct passed in name", () => {
        const { queryByText } = render(<HelloWorld name="Josh" />);
        const existing = queryByText("Hello Josh");
        expect(existing).not.toBeNull();
    });
});
