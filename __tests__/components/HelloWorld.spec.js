import React from "react";
import HelloWorld from "../../HelloWorld";
import { render } from "react-native-testing-library";
import renderer from "react-test-renderer";

describe("HelloWorld", () => {
    it.skip("snapshot hello world", () => {
        const helloSnap = renderer.create(<HelloWorld />).toJSON();
        expect(helloSnap).toMatchSnapshot();
    });

    it.skip("renders the correct message", () => {
        const { queryByText } = render(<HelloWorld />);
        expect(queryByText("Hello World")).not.toBeNull();
    });

    it("display correct passed in name", () => {
        const { queryByText } = render(<HelloWorld name="Josh" />);
        const existing = queryByText("Hello Josh");
        expect(existing).not.toBeNull();
    });
});
