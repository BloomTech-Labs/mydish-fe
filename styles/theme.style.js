import * as Font from "expo-font";

Font.loadAsync({
    "nunito sans": require("../assets/fonts/NunitoSans-Regular.ttf"),
    "nunito sans bold": require("../assets/fonts/NunitoSans-Bold.ttf"),
    "nunito sans semi-bold": require("../assets/fonts/NunitoSans-SemiBold.ttf"),
});

export default {
    PRIMARY_COLOR: "#D2291F",
    HOVER_COLOR: "#B82D25",
    ACCENT_COLOR: "#EBC953",
    DISABLED_COLOR: "#D7665F",
    NAV_BAR_BACKGROUND_COLOR: "#F1F1F1",
    DARK_FONT_COLOR: "#000000",
    GREY_FONT_COLOR: "#959595",
    WHITE_FONT_COLOR: "#FFFFFF",
    INPUT_BACKGROUND_COLOR: "#FFFFFF",
    INPUT_BORDER_COLOR: "#D4D4D4",
    INPUT_BORDER_RADIUS: 6,
    REGULAR_FONT_FAMILY: "nunito sans",
    BOLD_FONT_FAMILY: "nunito sans bold",
    SEMI_BOLD_FONT_FAMILY: "nunito sans semi-bold",
    REGULAR_FONT_SIZE: 14,
    SMALL_FONT_SIZE: 12,
    LARGE_FONT_SIZE: 24,
    REGULAR_FONT_WEIGHT: "normal",
    INPUT_FONT_FAMILY: "Roboto",
    SUBHEADING_FONT_SIZE: 14,
    SUBHEADING_FONT_WEIGHT: 600,
    TITLE_FONT_WEIGHT: "bold",
    BUTTON_FONT_WEIGHT: "bold",
};
