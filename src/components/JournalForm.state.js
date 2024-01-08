
export const INITIAL_STATE = {
    valuesForm: {
      post: undefined,
      title: undefined,
      date: undefined,
      tag: undefined,
      description: undefined
    },
    formReadyToSend: false,
    validForm: {
        post: true,
        title: true,
        date: true,
        tag: true,
        description: true
    }
};

export const journalState = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'RESET_VALIDITY':
          return {...state, validForm: INITIAL_STATE.validForm};
        case 'VALID_TITLE':
            return {...state, validForm: {...state.validForm, title: action.payload}};
    }
};


export const resetValidity = () => {
    return {type: 'RESET_VALIDITY'};
};
export const validTitle = (bool) => {
    return {type: 'VALID_TITLE', payload: bool};
};