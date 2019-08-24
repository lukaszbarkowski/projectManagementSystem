import {projectsActions} from '_constants/projectsActions'

const initialState = {
    activeProject:null,
    projects:[]
}

const projects = (state = initialState,action) => {
    switch(action.type){
        case projectsActions.SET_ACTIVE_PROJECT:
            return {
                ...state,
                activeProject:action.projectId
            }
        case projectsActions.SET_PROJECTS_LIST:
            return {
                ...state,
                projects:action.projects
            }
        case projectsActions.ADD_PROJECT:
            return{
                ...state,
                projects:[...state.projects,action.project]
            }
        default:
            return state
    }
    
}

export default projects