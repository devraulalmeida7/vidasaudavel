import React from "react";
import {View, Text} from "react-native";

export default function Main(){
    return(
        <View>
            <Text>{props.messageResultImc}</Text>
            <Text>{props.resultImc}</Text>
        </View>
    )
}
