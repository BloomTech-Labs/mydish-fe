import { AsyncStorage } from "react-native";
import React, { useState, useRef, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    ScrollView,
} from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../store/users/usersActions";
import styles from "../styles/profileModalStyles";
import authStyles from "../styles/authPageStyles";

import { MaterialIcons } from "@expo/vector-icons";

const EditProfile = (props) => {
    const passwordInput = useRef(null);
    const emailInput = useRef(null);
    const displayNameInput = useRef(null);
    const avatarInput = useRef(null);
    const dispatch = useDispatch();
    const currentUsername = useSelector((state) => state.auth.username);
    const isEditing = useSelector((state) => state.users.isEditing);
    const [newUserId, setUserId] = useState();

    const [updatedValues, setUpdatedValues] = useState({
        password: "",
        email: null,
        display_name: null,
        avatar_url: null,
    });

    const getId = async () => {
        let userId = "";
        try {
            userId = (await AsyncStorage.getItem("userID")) || "none";
            setUserId(await userId);
        } catch (error) {
            // Error retrieving data
            console.log(error.message);
        }

        return userId;
    };

    const update = async () => {
        await dispatch(updateUser(newUserId, updatedValues));
    };

    useEffect(() => {
        getId();
    }, []);

    return (
        <ScrollView>
            <TextInput
                style={authStyles.inputFields}
                ref={passwordInput}
                placeholder="Password"
                placeholderTextColor="black"
                value={updatedValues.password}
                returnKeyType="next"
                onChangeText={(event) =>
                    setUpdatedValues({
                        ...updatedValues,
                        password: event,
                    })
                }
            />

            <TextInput
                style={authStyles.inputFields}
                ref={emailInput}
                value={updatedValues.email}
                placeholder="Email"
                placeholderTextColor="black"
                keyboardType="email-address"
                returnKeyType="next"
                onChangeText={(event) =>
                    setUpdatedValues({
                        ...updatedValues,
                        email: event,
                    })
                }
            />

            <TextInput
                style={authStyles.inputFields}
                ref={displayNameInput}
                value={updatedValues.display_name}
                placeholder="Nickname"
                placeholderTextColor="black"
                returnKeyType="next"
                onChangeText={(event) =>
                    setUpdatedValues({
                        ...updatedValues,
                        display_name: event,
                    })
                }
            />

            <TextInput
                style={authStyles.inputFields}
                ref={avatarInput}
                value={updatedValues.avatar_url}
                placeholder="Avatar Url"
                placeholderTextColor="black"
                returnKeyType="go"
                onChangeText={(event) =>
                    setUpdatedValues({
                        ...updatedValues,
                        avatar_url: event,
                    })
                }
            />

            <TouchableOpacity
                style={styles.content}
                onPress={() => {
                    update();
                }}
            >
                <Text style={styles.text}>Save</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.content}
                onPress={() => {
                    props.close();
                }}
            >
                {/* <Text style={styles.text}>Close</Text> */}
                <MaterialIcons name="cancel" size={24} />
            </TouchableOpacity>
        </ScrollView>
    );
};

export default EditProfile;
