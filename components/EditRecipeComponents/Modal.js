import React from "react"
import { View, Modal, KeyboardAvoidingView, Text, TextInput, TouchableOpacity } from "react-native"

const CommitModal = props => {
    const { modal, setModal, saveButtonEditedRecipe
    } = props
    return (
        <View style={{ flexDirection: "row", padding: 10 }}>
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
                                padding: 15
                            }}
                        >
                            <Text>
                                Please leave a brief
                                comment describing your
                                recipe changes.
                        </Text>
                            <TextInput
                                style={{
                                    marginVertical: 10,
                                    minHeight: 40,
                                    width: 350,
                                    borderRadius: 4,
                                    borderWidth: 1,
                                    borderColor:
                                        "black",
                                }}
                            />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
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
                        </View>
                    </KeyboardAvoidingView>
                </View>
            </Modal>

        </View>
    )
}

export default CommitModal