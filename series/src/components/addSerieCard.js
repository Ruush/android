import React from "react";
import { View, StyleSheet, Dimensions, Image, TouchableOpacity } from "react-native";

const AddSerieCard = ({ serie, isFirstColumn, onPress }) => (
    <TouchableOpacity
        onPress={() => onPress(serie)}
        style={[styles.container, isFirstColumn ? styles.firstColumn : styles.lastColumn]}
    >
        <View style={styles.card}>
            <Image
                source={require("../../resources/plus.png")}
                style={styles.image}
            />
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        //solucao 1
        //flex: .5,

        //solucao 2
        width: "50%",
        padding: 5,
        height: Dimensions.get("window").width / 2,
    },
    card: {
        flex: 1,
        //borderWidth: 1,
        //solucao 1
        //margin:5
    },
    image: {
        aspectRatio: 1,
        width: "100%",
        height: "100%"
    },
    firstColumn: {
        paddingLeft: 10
    },
    lastColumn: {
        paddingRight: 10
    },
});

export default AddSerieCard;