import React, { useState } from "react";
import {View,TextInput, Text, TouchableOpacity} from "react-native";
import ResultImc from "./Resultimc"
import styles from "./style";

export default function Form() {

    // Variáveis para o cálculo do IMC
    const[altura, setAltura] = useState(null)
    const[peso, setPeso] = useState(null)
    const[messageImc, setMessageImc] = useState("Preencha a altura e o peso")
    const[imc, setImc] = useState(null)
    const[textButton, setTextButton] = useState("Calcular")
 

    // funções JS
    function imcCalculator() {
        return setImc((peso/(altura*altura)).toFixed(2))
    }
    function validationImc() {
        if(peso != null && altura != null) {
                imcCalculator()
                setAltura(null)
                setPeso(null)
                setMessageImc("Seu imc é igual: ")
                setTextButton("Calcular novamente")
                return
        }
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha a altura e o peso")
    }



    // retornando os componentes para o App.js
    return(
        <View style={styles.formContext}>
        <View style={styles.form}>
            <Text style={styles.formLabels}>Altura</Text>
            <TextInput
                style={styles.input}
                onChangeText ={setAltura}
                value={altura}
                placeholder="Ex.: 1.75"
                keyboardType="numeric"
            />
            <Text style={styles.formLabels}>Peso</Text>
            <TextInput
                style={styles.input}
                onChangeText ={setPeso}
                value={peso}
                placeholder="Ex.: 80"
                keyboardType="numeric"
            />
            <TouchableOpacity 
                style={styles.buttonCalculator}
                onPress={() => {
                    validationImc()
                }} 
                >
                
                <Text style={styles.textButtonCalculator}>{textButton}</Text>
                
            </TouchableOpacity>
        </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc}></ResultImc>
        </View>
    )
}
