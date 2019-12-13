import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import add from "../assets/add_circle_32px.png";
import styled from "styled-components";

const Step = styled.View`
    flexDirection: row;
    marginTop: 20;
`;

const Add = props => {
    const { text, submit } = props;

    return (
        <Step>
            <TouchableOpacity onPress={submit} style={{ flexDirection: "row" }}>
                <Image
                    source={add}
                    style={{ width: 20, height: 20, marginLeft: 14 }}
                />
                <Text style={{ color: "green", fontSize: 16, marginLeft: 5 }}>
                    {text}
                </Text>
            </TouchableOpacity>
        </Step>
    );
};

export default Add;
