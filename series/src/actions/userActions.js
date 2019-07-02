import firebase from "firebase";

const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
const userLoginSuccess = user => ({
    type: USER_LOGIN_SUCCESS,
    user
})

const USER_LOGOUT = "USER_LOGOUT";
const userLogout = () => ({
    type: USER_LOGOUT
})

export const tryLogin = ({ email, password }) => (dispatch, getState) => {

    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
            dispatch(userLoginSuccess(user))
        })
    // .catch(error => {
    //     if (error.code === "auth/user-not-found") {
    //         Alert.alert(
    //             "Usuário não encontrado",
    //             "Deseja criar um cadastro com as informações inseridas?",
    //             [{
    //                 text: "Não"
    //             }, {
    //                 text: "Sim",
    //                 onPress: () => {
    //                     firebase
    //                         .auth()
    //                         .createUserWithEmailAndPassword(mail, password)
    //                         .then(loginUserSuccess)
    //                         .catch(loginUserError(error))
    //                 }
    //             }],
    //             { cancelable: false }
    //         );
    //     } else {
    //         loginUserError(error)
    //     };
    // }).then(() => this.setState({ isLoading: false }));
}