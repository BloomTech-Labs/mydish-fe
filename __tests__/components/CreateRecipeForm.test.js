import "react-native";
import React from "react";
import CreateRecipeForm from "../../components/CreateRecipeForm";
import renderer from "react-test-renderer";
import { createStore } from "redux";
import { Provider } from "react-redux";

it("matches snapshot", () => {
    const store = createStore(() => {});
    const renderTree = (
        <Provider store={store}>
            <CreateRecipeForm />
        </Provider>
    );
    const tree = renderer.create(renderTree).toJSON();
    expect(tree).toMatchSnapshot();
});
