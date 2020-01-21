import React from "react"
import { View, Modal, KeyboardAvoidingView, Text, TextInput, TouchableOpacity } from "react-native"

const CommitModal = props => {
    const { modal, setModal, saveButtonEditedRecipe
    } = props
    return (
        <View style={{ flexDirection: "row" }}>
            <Modal
                visible={modal.save}
                animationType="fade"
                transparent
            >
                <View
                    style={{
                        height: "100%",
                        width: "100%",
                        backgroundColor:
                            "rgba(122, 122, 122, 0.7)",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <KeyboardAvoidingView
                        behavior={"position"}
                    >
                        <View
                            style={{
                                marginHorizontal: 20,
                                marginTop: 300,
                                backgroundColor:
                                    "white",
                                borderRadius: 6,
                            }}
                        >
                            <Text>
                                Please leave a brief
                                comment describing your
                                recipe changes.
                        </Text>
                            <TextInput
                                style={{
                                    minHeight: 40,
                                    width: 300,
                                    borderRadius: 4,
                                    borderWidth: 1,
                                    borderColor:
                                        "black",
                                }}
                            />
                            <TouchableOpacity
                                onPress={() =>
                                    setModal({
                                        save: false,
                                        cancel: false,
                                    })
                                }
                            >
                                <Text>Back</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={
                                    saveButtonEditedRecipe
                                }
                            >
                                <Text>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                </View>
            </Modal>

        </View>
    )
}

export default CommitModal