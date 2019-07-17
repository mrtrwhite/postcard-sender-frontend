import {
    UPLOAD_REQUEST,
    UPLOAD_REQUEST_SUCCESS,
    UPLOAD_REQUEST_FAILURE
} from '../actions/upload'

export function file(state = {}, action) {
    switch (action.type) {
        case UPLOAD_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                fileObject: action.file
            })
        case UPLOAD_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                fileObject: {},
                fileURL: action.url
            })
        case UPLOAD_REQUEST_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                fileObject: {},
                fileURL: '',
                error: ''
            })
        default:
            return state
    }
}