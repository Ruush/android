import React from "react";
import { Text, View, TextInput, StyleSheet, Button, ActivityIndicator, Alert } from "react-native";
import firebase from "@firebase/app";
import "@firebase/auth";
import { connect } from "react-redux";

import FormRow from "../components/FormRow"
import { tryLogin } from "../actions";

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mail: "",
            password: "",
            isLoading: false,
            message: "",
        }
    };

    componentDidMount() {
        var firebaseConfig = {
            apiKey: "AIzaSyDW8lROsAjoA81WBvw20wX-r_hCmM-TdUM",
            authDomain: "seriesapp-71bf1.firebaseapp.com",
            databaseURL: "https://seriesapp-71bf1.firebaseio.com",
            projectId: "seriesapp-71bf1",
            storageBucket: "",
            messagingSenderId: "956505583716",
            appId: "1:956505583716:web:134f7d2072e0a3ad"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
    }

    onChangeHandler(field, value) {
        this.setState({
            [field]: value
        });
    }

    tryLogin() {
        this.setState({ isLoading: true, message: "" })
        const { mail: email, password } = this.state

        this.props.tryLogin({ email, password })
            .then((user) => {
                if (user) {
                    this.setState({ message: "Sucesso!" });
                    this.props.navigation.replace("Main");
                } else {
                    this.setState({
                        isLoading: false,
                        message: ""
                    })
                }

            })
            .catch(error => {
                this.setState({
                    isLoading: false,
                    message: this.getMessageByErrorCode(error.code)
                })
            });
    }

    getMessageByErrorCode(errorCode) {
        switch (errorCode) {
            case "auth/wrong-password":
                return "Senha incorreta"
            case "auth/invalid-email":
                return "Email invalido"
            case "auth/user-not-found":
                return "Usuário não encontrado"
            default:
                return `Erro desconhecido: ${errorCode}`
        }
    }

    renderMessage() {
        const { message } = this.state
        if (!message) {
            return null;
        } else {
            return (
                <View>
                    <Text style={message !== "Sucesso!" ? styles.error : styles.success}>{message}</Text>
                </View>
            )
        }
    }

    renderButtom() {
        if (this.state.isLoading) {
            return <ActivityIndicator />
        } else {
            return (
                <Button
                    title="Entrar"
                    onPress={() => this.tryLogin()}
                />
            )
        };
    };

    render() {
        return (
            <View style={styles.container}>
                <FormRow first>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={this.state.mail}
                        onChangeText={value => this.onChangeHandler("mail", value.trim())}
                        keyboardType="email-address"
                        autoCapitalize="none"

                        returnKeyType={"next"}
                        onSubmitEditing={() => { this.Password.focus(); }}
                        blurOnSubmit={false}
                    />
                </FormRow>
                <FormRow last>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={value => this.onChangeHandler("password", value)}

                        ref={(input) => { this.Password = input; }}
                        returnKeyType={"next"}
                        onSubmitEditing={() => { this.tryLogin() }}
                        blurOnSubmit={false}
                    />
                </FormRow>
                {this.renderButtom()}
                {this.renderMessage()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10,
    },
    input: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5
    },
    error: {
        color: "red",
    },
    success: {
        color: "green"
    }
});

export default connect(null, { tryLogin })(LoginPage)