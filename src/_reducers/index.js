import {combineReducers} from 'redux'
import ui from '_reducers/ui'
import projects from '_reducers/projects'
import project from '_reducers/project'


const rootReducer = combineReducers({
    ui,
    projects,
    project
})

export default rootReducer