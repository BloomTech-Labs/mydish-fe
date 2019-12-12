import React from "react";
import renderer from "react-test-renderer";
import RecipeList from "../components/RecipeList";

describe("<App />", () => {
    it("renders correctly", () => {
        const tree = renderer.create(<RecipeList />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
