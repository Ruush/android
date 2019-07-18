import { SET_FIELD, SERIE_SAVED_SUCCESS, EDIT_SERIE, RESET_FORM } from "../actions/serieFormActions";

const INITIAL_STATE = {
    id: null,
    title: "",
    gender: "Comédia",
    rate: 0,
    img: "",
    description: ""
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_FIELD:
            const newState = { ...state };
            newState[action.field] = action.value;
            return newState;
        case EDIT_SERIE:
            return action.serie;
        case SERIE_SAVED_SUCCESS:
            return INITIAL_STATE;
        case RESET_FORM:
            return INITIAL_STATE;
        default:
            return state;
    }
}