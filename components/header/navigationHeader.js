import React from "react";
import RecipeShareLogo from "../RecipeShareLogo";
import SearchButton from "./SearchButton";

export const homepageHeaderOptions = {
    headerTitle: <RecipeShareLogo />,
    headerRight: <SearchButton homepage={"homepage"} />,
};

export const createHeaderOptions = {
    headerTitle: <RecipeShareLogo />,
};

export const cookbookHeaderOptions = {
    headerTitle: <RecipeShareLogo />,
    headerRight: <SearchButton cookbook={"cookbook"} />,
};
