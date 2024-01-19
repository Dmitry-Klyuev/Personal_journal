export const INITIAL_STATE = {
    valuesForm: {
        id: '',
        title: '',
        date: '',
        tag: '',
        description: ''
    },
    formReadyToSend: false,
    validForm: {
        title: true,
        date: true,
        tag: true,
        description: true
    }
};

export const journalState = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'RESET_VALIDITY':
            return {...state, validForm: {...INITIAL_STATE.validForm}};
        case 'VALID_TITLE':
            return {...state, validForm: {...state.validForm, title: action.payload}};
        case 'SUBMIT': {
            const titleValidity = action.payload.title?.trim();
            const dateValidity = action.payload.date;
            const tagValidity = action.payload.tag?.trim();
            const descriptionValidity = action.payload.description?.trim();
            return {
                ...state,
                valuesForm: action.payload,
                validForm: {
                    title: titleValidity,
                    date: dateValidity,
                    tag: tagValidity,
                    description: descriptionValidity
                },
                formReadyToSend: titleValidity && dateValidity && tagValidity && descriptionValidity
            };
        }
        case 'CHANGE_VALUE': {
            return {...state, valuesForm: {...state.valuesForm, ...action.payload}};
        }
        case 'CLEAR_VALUE': {
            return {...state, valuesForm: {...INITIAL_STATE.valuesForm}, formReadyToSend: false};
        }
        default:
            return state;
    }
};


export const resetValidity = () => {
    return {type: 'RESET_VALIDITY'};
};
export const validTitle = (bool) => {
    return {type: 'VALID_TITLE', payload: bool};
};
export const submitForm = (payload) => {
    return {type: 'SUBMIT', payload};
};