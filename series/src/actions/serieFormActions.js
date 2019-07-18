import firebase from "firebase";

export const EDIT_SERIE = "EDIT_SERIE"
export const editSerie = serie => ({
    type: EDIT_SERIE,
    serie
})

export const SET_FIELD = "SET_FIELD";
export const setField = (field, value) => ({
    type: SET_FIELD,
    field,
    value

})

export const SERIE_SAVED_SUCCESS = "SERIE_SAVED_SUCCESS"
export const serieSavedSuccess = () => ({
    type: SERIE_SAVED_SUCCESS
});

export const RESET_FORM = "RESET_FORM";
export const resetForm = () => ({
    type: RESET_FORM
});

export const saveSerie = serie => {
    const { currentUser } = firebase.auth()
    return async dispatch => {
        const db = firebase.database();
        if (serie.id) {
            await db.ref(`/users/${currentUser.uid}/series/${serie.id}`)
                .set(serie);
        } else {
            await db.ref(`/users/${currentUser.uid}/series`)
                .push(serie);
        }
        dispatch(serieSavedSuccess());
    }
}