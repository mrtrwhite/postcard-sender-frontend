export const INPUT_CHANGED = 'INPUT_CHANGED';

export function updateFormInput(name, value) {
    return {
        type: INPUT_CHANGED,
        name: name,
        value: value
    }
}

export const FORM_REQUEST = 'FORM_REQUEST';
export const FORM_REQUEST_SUCCESS = 'FORM_REQUEST_SUCCESS';
export const FORM_REQUEST_FAILURE = 'FORM_REQUEST_FAILURE';