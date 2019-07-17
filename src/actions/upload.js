import { baseURL } from '../api';
import axios from 'axios';

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

        // axios.post(baseURL, formData)
        //     .catch((error) => {
        //         if(error.response) {
        //             dispatch(fileUploadFailed(error.response.data))
        //         }
        //     })
        //     .then((response) => { 
        //         dispatch(fileUploadSucceeded(response.data.url)) 
        //     })

        setTimeout(() => {
            dispatch(fileUploadSucceeded({
                url: 'https://placekitten.com/600/400'
            }))
        }, 1000)
    }
}