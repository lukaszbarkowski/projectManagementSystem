import React from 'react'
import {Link} from 'react-router-dom'
import withUI from '_hoc/withUI'

import { Drawer, List, ListItem, Typography } from '@material-ui/core';
import './Menu.scss'


const AdapterLink = React.forwardRef((props, ref) => <Link innerRef={ref} {...props} />);

const Menu = withUI(props => {
    return (
        <Drawer className="drawerMenu" open={props.isMenuVisible} onClose={props.toggleMenu}>
            <List className="list">
                <ListItem button  component={AdapterLink} to='/'>
                    <Typography>
                        Home
                    </Typography>
                </ListItem>
                <ListItem button component={AdapterLink} to='/projects'>
                    <Typography>
                        Projects
                    </Typography>
                </ListItem>
                <ListItem button component={AdapterLink} to='/settings'>
                    <Typography>
                        Settings
                    </Typography>
                </ListItem>
            </List>
        </Drawer>
    )
})

export default Menu