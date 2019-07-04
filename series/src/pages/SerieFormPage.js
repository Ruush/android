import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import FormRow from "../components/FormRow";

const SeriesFormPage = props => {
    return (
        <View>
            <FormRow first>
                <TextInput
                    style={styles.input}
                    placeholder="Título"
                    value=""
                    onChangeText={value => console.log(value)}
                />
            </FormRow>
        </View>
    )
};

const styles = StyleSheet.create({
    input: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5,
    }
});

export default SeriesFormPage;