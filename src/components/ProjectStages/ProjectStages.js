import React from 'react';
import withProject from '_hoc/withProject'

import {    
    Paper,Box,Typography,List,ListItem
} from '@material-ui/core'

const ProjectStages = withProject(props=>{
    return (
        <Paper>
            <Box width={1}>
                    <List>
                    {
                        (props.projectData || []).map(e=>{
                            return(
                                <ListItem key={e.id} button onClick={()=>props.setStageActive(e.id)}>
                                    <Typography>{e.title}</Typography>
                                </ListItem>
                            )
                        })
                    }
                    </List>
            </Box>
        </Paper>
    )
})

export default ProjectStages