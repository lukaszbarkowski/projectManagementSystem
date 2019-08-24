import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import {uiActions} from '_constants/uiActions'

const wrapper = Component => props => {
    return <Component {...props}></Component>
}

const mapStateToProps = state => {
    return {
        isMenuVisible: state.ui.isMenuVisible,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleMenu: () => dispatch({ type: uiActions.TOGGLE_MENU}),
    }
}

const withUI = compose(
    connect(mapStateToProps, mapDispatchToProps),
    wrapper
)

export default withUI
