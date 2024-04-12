// bloco de importações
import React from "react";
import { View,Text } from "react-native";
import styles from "./style";

//Aqui retornamos os título da aplicação
export default function Title(){
    return(
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>App- Vida Saudável</Text>
        </View>
    );
}