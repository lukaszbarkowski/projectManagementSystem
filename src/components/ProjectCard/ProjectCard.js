import React from 'react';
import withProjects from '_hoc/withProjects'
import { Link } from 'react-router-dom';

import './ProjectCard.scss'

import {
    Paper,Grid,Typography, Button, Box
} from '@material-ui/core'

const AdapterLink = React.forwardRef((props, ref) => <Link innerRef={ref} {...props} />);

const ProjectCard = withProjects(props=>{
    return (
        <Paper>
            <Grid container>
                <Box p={2} display="flex" flexDirection="row" alignItems="center" width={1}>
                    <Typography className="title">{props.activeProject.name}</Typography>
                    <Button component={AdapterLink} to={`/projects/${props.activeProject.id}`}>Go</Button>
                </Box>
            </Grid>
            <Grid container>
                <Box p={2} display="flex" flexDirection="row" alignItems="center" width={1}>
                    <Typography>
                        {props.activeProject.description}
                    </Typography>
                </Box>
            </Grid>
        </Paper>
    )
})

export default ProjectCard