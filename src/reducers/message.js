import { MESSAGE_UPDATED } from '../actions/message'

export function message(state = '', action) {
    switch (action.type) {
        case MESSAGE_UPDATED:
            return action.message
        default:
            return state
    }
}