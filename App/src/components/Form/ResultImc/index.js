import React from "react";
import { Text, View } from "react-native";
import styles from "./style";


export default function ResultImc(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.information}>{props.messageResultImc}</Text>
            <Text style={styles.resultImc}>{props.resultImc}</Text>
        </View>
    )
}