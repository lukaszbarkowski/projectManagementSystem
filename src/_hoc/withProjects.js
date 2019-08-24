import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import {projectsActions} from '_constants/projectsActions'

const wrapper = Component => props => {
    return <Component {...props}></Component>
}

const mapStateToProps = state => {
    return {
        activeProject: state.projects.activeProject,
        projects: state.projects.projects
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setActiveProject: (id) => dispatch({ type: projectsActions.SET_ACTIVE_PROJECT,projectId:id}),
        setProjectsList:(projects)=>dispatch({type:projectsActions.SET_PROJECTS_LIST,projects:projects}),
        addProject:(project)=>dispatch({type:projectsActions.ADD_PROJECT,project:project})
    }
}

const withProjects = compose(
    connect(mapStateToProps, mapDispatchToProps),
    wrapper
)

export default withProjects
