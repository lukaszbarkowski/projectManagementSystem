import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import {projectActions} from '_constants/projectActions'

const wrapper = Component => props => {
    return <Component {...props}></Component>
}

const mapStateToProps = state => {
    return {
        activeStage: state.project.activeStage,
        projectData: state.project.projectData,
        isDialogVisible: state.project.isDialogVisible
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setStageActive: (id) => dispatch({ type: projectActions.SET_STAGE_ACTIVE,stageId:id}),
        setProjectData: (data) => dispatch({type:projectActions.SET_PROJECT_DATA,data:data}),
        toggleDialog: () => dispatch({type:projectActions.TOGGLE_DIALOG}),
    }
}

const withProject = compose(
    connect(mapStateToProps, mapDispatchToProps),
    wrapper
)

export default withProject
