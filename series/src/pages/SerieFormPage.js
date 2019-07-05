import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { connect } from "react-redux";

import FormRow from "../components/FormRow";
import { setField } from "../actions/serieFormActions";

const SeriesFormPage = ({ serieForm, setField }) => {
    return (
        <View>
            <FormRow first>
                <TextInput
                    style={styles.input}
                    placeholder="Título"
                    value={serieForm.title}
                    onChangeText={value => setField("title", value)}
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

const mapStateToProps = (state) => {
    return {
        serieForm: state.serieForm,
    }
}

const MapDispatchToProps = {
    setField
}

export default connect(mapStateToProps, MapDispatchToProps)(SeriesFormPage);