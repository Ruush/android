import firebase from "firebase";
import { Alert } from "react-native";

export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
const userLoginSuccess = user => ({
    type: USER_LOGIN_SUCCESS,
    user
})

export const USER_LOGOUT = "USER_LOGOUT";
const userLogout = () => ({
    type: USER_LOGOUT
})

export const tryLogin = ({ email, password }) => (dispatch, getState) => {
    return firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
            const action = userLoginSuccess(user);
            dispatch(action);
            return user;
        })
        .catch(error => {

            return new Promise((resolve, reject) => {
                if (error.code === "auth/user-not-found") {
                    Alert.alert(
                        "Usuário não encontrado",
                        "Deseja criar um cadastro com as informações inseridas?",
                        [{
                            text: "Não",
                            onPress: () => resolve(),
                        }, {
                            text: "Sim",
                            onPress: () => {
                                firebase
                                    .auth()
                                    .createUserWithEmailAndPassword(email, password)
                                    .then(resolve)
                                    .catch(reject)
                            }
                        }],
                        { cancelable: false }
                    );
                } else {
                    reject(error)
                };
            })
        })
}