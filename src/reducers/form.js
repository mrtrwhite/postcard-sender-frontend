import { INPUT_CHANGED } from '../actions/form'

export function form(state = {}, action) {
    switch (action.type) {
        case INPUT_CHANGED:
            return Object.assign({}, state, {
                [action.name]: action.value
            })
        default:
            return state
    }
}