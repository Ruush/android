import React from "react";
import { View, TextInput, StyleSheet, Button, ActivityIndicator } from "react-native";
import firebase from "@firebase/app";
import "@firebase/auth";

import FormRow from "../components/FormRow"

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mail: "",
            password: "",
            isLoading: false,
        }
    };

    componentDidMount() {
        var firebaseConfig = {
            apiKey: "AIzaSyBMxGjR6FteOB6c5sA6GIzF_x_q8Xb55lU",
            authDomain: "series-app-384be.firebaseapp.com",
            databaseURL: "https://series-app-384be.firebaseio.com",
            projectId: "series-app-384be",
            storageBucket: "",
            messagingSenderId: "532278312070",
            appId: "1:532278312070:web:0b5bd719f5b9f27f"
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
        this.setState({ isLoading: true })
        const { mail, password } = this.state

        firebase
            .auth()
            .signInWithEmailAndPassword(mail, password)
            .then(user => {
                console.log("Usuario Autenticado", user)
            })
            .catch(error => {
                console.log("Usuario não Autenticado", error)
            }).then(() => this.setState({ isLoading: false }));
    }

    renderButtom() {
        if (this.state.isLoading) {
            return <ActivityIndicator />
        } else {
            return (
                <Button title="Entrar" onPress={() => this.tryLogin()} />
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
                    />
                </FormRow>
                <FormRow last>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={value => this.onChangeHandler("password", value)}
                    />
                </FormRow>
                {this.renderButtom()}
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
    }
});