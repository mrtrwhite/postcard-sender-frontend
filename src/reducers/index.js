import { combineReducers } from 'redux'
import { file } from './upload'
import { message } from './message'

const rootReducer = combineReducers({
    file,
    message
})

export default rootReducer