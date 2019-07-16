import { 
    NEXT_PAGE,
    PREV_PAGE
} from '../actions/paginate'

const page = (state = 1, action) => {
    switch(action.type) {
        case NEXT_PAGE:
            state++
            return state
        case PREV_PAGE:
            state--
            return state
        default:
            return state
    }
}

export default page