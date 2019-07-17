import React from "react";
import { Text, View, StyleSheet, Dimensions, Image, TouchableOpacity } from "react-native";

const SerieCard = ({ serie, isFirstColumn, onPress }) => (
    <TouchableOpacity
        onPress={() => onPress(serie)}
        style={[styles.container, isFirstColumn ? styles.firstColumn : styles.lastColumn]}
    >
        <View style={styles.card}>
            {
                serie.img
                    ? <Image
                        source={{ uri: serie.img }}
                        aspectRatio={1}
                        resizeMode="stretch"            //ou container
                    />
                    : <Image
                        source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png" }}
                        aspectRatio={1}
                        resizeMode="stretch"            //ou container
                    />
            }
            <View style={styles.cardTitleWrapper}>
                <Text style={styles.cardTitle}>{serie.title}</Text>
            </View>
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
        borderWidth: 1,
        //solucao 1
        //margin:5
    },
    cardTitleWrapper: {
        backgroundColor: "black",
        height: 30,

        position: "absolute",
        bottom: 0,
        opacity: .7,

        width: "100%",

        paddingTop: 4,
        paddingBottom: 4,

        paddingLeft: 3,
        paddingRight: 3,

        alignItems: "center"
    },
    cardTitle: {
        color: "white",
        fontSize: 15,
        fontWeight: 'bold'
    },
    firstColumn: {
        paddingLeft: 10
    },
    lastColumn: {
        paddingRight: 10
    },
});

export default SerieCard;