import "react-native";
import React from "react";
import Search from "../components/Search";
import renderer from "react-test-renderer";

it("renders correctly", () => {
    const tree = renderer.create(<Search />).toJSON();
    expect(tree).toMatchSnapshot();
});
