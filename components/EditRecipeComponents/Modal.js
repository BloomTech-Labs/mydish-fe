import React, { useState } from "react";
import {
    View,
    Modal,
    KeyboardAvoidingView,
    Text,
    TextInput,
    TouchableHighlight,
    Button,
} from "react-native";
//Analytics
import { Analytics, Event } from "expo-analytics";
const analytics = new Analytics("UA-159002245-1");
import theme from "../../styles/theme.style";
const CommitModal = props => {
    const { commitModal, setCommitModal, saveButtonEditedRecipe } = props;
    const [author_comment, setAuthor_comment] = useState();
    const [highlighted, setHighlighted] = useState(false);

    const saveModalHandler = () => {
        if (!author_comment) {
            setHighlighted(true);
        } else {
            saveButtonEditedRecipe(author_comment);
        }
        analytics
            .event(new Event("Recipe", "User edited existing recipe"))
            .then(() => console.log("Recipe edited"))
            .catch(e => console.log(e.message));
    };

    const closeModalHandler = () => {
        setHighlighted(false);
        setCommitModal({ save: false, cancel: false });
    };

    return (
        <View style={{ flexDirection: "row" }}>
            <Modal visible={commitModal.save} animationType="fade" transparent>
                <TouchableHighlight onPress={closeModalHandler}>
                    <View
                        style={{
                            height: "100%",
                            width: "100%",
                            backgroundColor: "rgba(30, 27, 27, 0.45)",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <KeyboardAvoidingView behavior={"position"}>
                            <View
                                style={{
                                    backgroundColor:
                                        "rgba(300, 300, 300, 0.95)",
                                    borderRadius: 10,
                                    paddingVertical: 16,
                                    paddingHorizontal: 24,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginHorizontal: 59,
                                }}
                            >
                                <Text
                                    style={{
                                        textAlign: "left",
                                        fontFamily: theme.BOLD_FONT_FAMILY,
                                        fontSize: theme.REGULAR_FONT_SIZE,
                                        paddingVertical: 2,
                                    }}
                                >
                                    What did you change on this version of the
                                    recipe?
                                </Text>
                                <TextInput
                                    multiline
                                    onChangeText={text =>
                                        setAuthor_comment(text)
                                    }
                                    style={{
                                        marginBottom: 10,
                                        marginTop: 20,
                                        minHeight: 40,
                                        maxWidth: "90%",
                                        width: "90%",
                                        borderRadius: 4,
                                        borderWidth: 1,
                                        borderColor: highlighted
                                            ? "red"
                                            : "black",
                                    }}
                                />
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-around",
                                        width: "80%",
                                    }}
                                >
                                    <Button
                                        title="Cancel"
                                        onPress={closeModalHandler}
                                    />

                                    <Button
                                        title="OK"
                                        onPress={saveModalHandler}
                                    />
                                </View>
                            </View>
                        </KeyboardAvoidingView>
                    </View>
                </TouchableHighlight>
            </Modal>
        </View>
    );
};

export default CommitModal;
