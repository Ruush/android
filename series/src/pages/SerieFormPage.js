import React from "react";
import { Text, View, StyleSheet, TextInput, Picker, Slider, Button, ScrollView, KeyboardAvoidingView, ActivityIndicator, Alert } from "react-native";
import { connect } from "react-redux";

import FormRow from "../components/FormRow";
import { setField, saveSerie, editSerie, resetForm } from "../actions/serieFormActions";

class SeriesFormPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        }
    }
    componentDidMount() {
        const { navigation, editSerie, resetForm } = this.props
        const { params } = navigation.state

        if (params && params.serieToEdit) {
            editSerie(params.serieToEdit)
        } else {
            resetForm()
        }
    }
    render() {
        const { serieForm, setField, saveSerie, navigation } = this.props;

        return (
            <KeyboardAvoidingView
                keyboardVerticalOffset={280}
                behavior="padding"
                enabled>

                <ScrollView>
                    <FormRow first>
                        <TextInput
                            style={styles.input}
                            placeholder="Título"
                            value={serieForm.title}
                            onChangeText={value => setField("title", value)}


                            returnKeyType={"next"}
                            onSubmitEditing={() => { this.Img.focus(); }}
                            blurOnSubmit={false}
                        />
                    </FormRow>

                    <FormRow>
                        <TextInput
                            style={styles.input}
                            placeholder="Img"
                            value={serieForm.img}
                            onChangeText={value => setField("img", value)}

                            ref={(input) => { this.Img = input; }}
                        />
                    </FormRow>

                    <FormRow>
                        <Picker
                            selectedValue={serieForm.gender}
                            onValueChange={itemValue => setField("gender", itemValue)}
                        >
                            <Picker.Item label="Comédia" value="Comédia" />
                            <Picker.Item label="Drama" value="Drama" />
                            <Picker.Item label="Fantasia" value="Fantasia" />
                            <Picker.Item label="Ficção Científica" value="Ficção Científica" />
                            <Picker.Item label="Policial" value="Policial" />
                            <Picker.Item label="Terror" value="Terror" />

                        </Picker>
                    </FormRow>

                    <FormRow>
                        <View style={styles.sameRow}>
                            <Text>Nota:</Text>
                            <Text>{serieForm.rate}</Text>

                        </View>
                        <Slider
                            onValueChange={value => setField("rate", value)}
                            value={serieForm.rate}
                            maximumValue={100}
                            step={5}
                        />
                    </FormRow>

                    <FormRow>
                        <TextInput
                            style={[styles.input, styles.numdeu]}
                            placeholder="Descrição"
                            value={serieForm.description}
                            onChangeText={value => setField("description", value)}
                            numberOfLines={8}
                            multiline={true}
                        />
                    </FormRow>

                    {
                        this.state.isLoading
                            ? <ActivityIndicator />
                            : <Button
                                title={"salvar"}
                                onPress={async () => {
                                    this.setState({ isLoading: true });
                                    try {
                                        await saveSerie(serieForm);
                                        navigation.goBack();
                                    } catch (error) {
                                        Alert.alert("Erro!", error.message)
                                    } finally {
                                        this.setState({ isLoading: false });
                                    }
                                }}
                            />
                    }

                </ScrollView>
            </KeyboardAvoidingView>
        )
    }
};

const styles = StyleSheet.create({
    input: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5,
    },
    numdeu: {
        borderColor: "#e8e8e8",
        borderWidth: 1
    },
    sameRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
    }
});

const mapStateToProps = (state) => {
    return {
        serieForm: state.serieForm,
    }
}

const MapDispatchToProps = {
    setField,
    saveSerie,
    editSerie,
    resetForm
}

export default connect(mapStateToProps, MapDispatchToProps)(SeriesFormPage);