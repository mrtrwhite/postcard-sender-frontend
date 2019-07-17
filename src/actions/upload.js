import fetch from 'cross-fetch'
import { baseURL } from '../api';

export const UPLOAD_REQUEST = 'UPLOAD_REQUEST'

export function fileUploaded(fileObject) {
    return {
        type: UPLOAD_REQUEST,
        file: fileObject
    }
}

export const UPLOAD_REQUEST_SUCCESS = 'UPLOAD_REQUEST_SUCCESS'

export function fileUploadSucceeded(response) {
    return {
        type: UPLOAD_REQUEST_SUCCESS,
        url: response.url
    }
}

export const UPLOAD_REQUEST_FAILURE = 'UPLOAD_REQUEST_FAILURE'

export function fileUploadFailed(error) {
    return {
        type: UPLOAD_REQUEST_FAILURE,
        error: error.message
    }
}

export function makeFileRequest(fileObject) {
    let formData = new FormData();
    formData.append('file', fileObject);

    return function(dispatch) {
        dispatch(fileUploaded(fileObject));

        // fetch.post(baseURL, formData)
        //     .then(
        //         response => response.json(),
        //         error => dispatch(fileUploadFailed(error.response || null))
        //     )
        //     .then(json => {
        //         dispatch(fileUploadSucceeded(json.url))
        //     })

        setTimeout(() => {
            dispatch(fileUploadSucceeded({
                url: 'https://picsum.photos/200/300'
            }))
        }, 1000)
    }
}