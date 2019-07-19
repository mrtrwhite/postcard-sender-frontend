import { combineReducers } from 'redux'
import { file } from './upload'
import { message } from './message'
import { form } from './form'

const rootReducer = combineReducers({
    file,
    message,
    form
})

export default rootReducer