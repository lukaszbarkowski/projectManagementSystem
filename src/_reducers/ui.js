import {uiActions} from '_constants/uiActions'

const initialState = {
    isMenuVisible:false
}

const ui = (state = initialState,action) => {
    switch(action.type){
        case uiActions.TOGGLE_MENU:
            return {
                ...state,
                isMenuVisible:!state.isMenuVisible
            }
        default:
            return state
    }
    
}

export default ui