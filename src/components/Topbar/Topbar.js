import React from 'react';

import withUI from '_hoc/withUI'

import {
  AppBar, Toolbar, IconButton, Typography
} from "@material-ui/core"
import{
  Menu
} from '@material-ui/icons'

const Topbar = withUI(props => {

    return (
        <AppBar>
        <Toolbar>
          <IconButton onClick={props.toggleMenu}>
            <Menu />
          </IconButton>
          <Typography>
            Project
          </Typography>
        </Toolbar>
      </AppBar>
    )
})

export default Topbar