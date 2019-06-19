import React from "react";
import { View, StyleSheet } from "react-native";

import PeopleListItem from "./PeopleListItem";

const PeopleList = (props) => {
    const { peoples, onPressItem } = props
    const items = peoples.map((people, index) =>
        <PeopleListItem
            key={index + people.name.first}
            people={people}
            navigateToPeopleDetail={onPressItem}
        />)

    return (
        <View style={styles.container}>
            {items}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#e2f9ff"
    },
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: "#bbb",

        alignItems: "center",
        flexDirection: "row"
    },
    lineText: {
        fontSize: 20,
        paddingLeft: 15
    }
})

export default PeopleList