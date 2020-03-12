import React from "react";
import "react-native";
import renderer from "react-test-renderer";
import { render, fireEvent } from "react-native-testing-library";
import ImageUploadModal from "../../components/RecipeImageComponents/ImageUploadModal";
import { Provider } from "react-redux";
import { createStore } from "redux";

describe("<ImageUploadModal />", () => {
    it("calls getImage method when camera icon is pressed", () => {
        const store = createStore(() => {});
        const renderTree = (
            <Provider store={store}>
                <ImageUploadModal />
            </Provider>
        );
        const { getByTestId } = render(renderTree);
    });
});
