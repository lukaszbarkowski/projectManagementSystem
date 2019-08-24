import {projectActions} from '_constants/projectActions'

const initialState = {
    activeStage:null,
    projectData:null,
    isDialogVisible:false
}

const project = (state = initialState,action) => {
    switch(action.type){
        case projectActions.SET_STAGE_ACTIVE:
            return {
                ...state,
                activeStage:action.stageId
            }
        case projectActions.SET_PROJECT_DATA:
            return {
                ...state,
                projectData:action.data
            }
        case projectActions.TOGGLE_DIALOG:
            return {
                ...state,
                isDialogVisible:!state.isDialogVisible
            }
        default:
            return state
    }
    
}

export default project