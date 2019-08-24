import React,{useEffect,useState} from 'react';
import clsx from 'clsx'
import withProject from '_hoc/withProject'
import { Grid, Box, Paper, Typography, CircularProgress, Button, Popover, FormControl, InputLabel, Input, InputAdornment, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ProjectStages from 'components/ProjectStages/ProjectStages'
import ProjectTasks from 'components/ProjectTasks/ProjectTasks'
import { Add } from '@material-ui/icons';
import {stagesService} from '_services/stagesService'

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    padding:{
        padding:theme.spacing(2)
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      flexBasis: 200,
    },
  }));

const Project = withProject(props => {
    const classes = useStyles();
    const [popover,setPopover] = useState({
        anchorEl:null,
        inputValue:''
    })
    useEffect(()=>{
        const getProjectData = async () => {
            await stagesService.getStagesByProjectId(props.match.params.id)
                .then(res=>{
                    props.setProjectData(res)
                })
        }

        getProjectData()
    },[])

    const handleClick = (event) => {
        setPopover({...popover,anchorEl:event.currentTarget})
    }

    const handlePopoverInputChange = (event) => {
        setPopover({...popover,inputValue:event.target.value})
    }

    const handleSubmit = () => {
        stagesService.addStage(props.match.params.id,popover.inputValue)
    }

    const handlePopoverClose = () => {
        setPopover({anchorEl:null,inputValue:''})
    }

    if(props.projectData){
        return(
            <Grid container spacing={3}>
                <Grid item md={5}>
                    <Box display="flex" flexDirection="column" width={1}>
                        <Paper>
                            <Box p={3}>
                                <Grid container>
                                    <Typography>Title section</Typography>
                                </Grid>
                            </Box>
                        </Paper>
                        <Grid container>
                            <Grid item  xs={12} className={classes.padding}>
                                <Box display="flex" justifyContent="center" width={1}>
                                    <Button variant="contained" onClick={handleClick}>New</Button>
                                    <Popover
                                        id="pop"    
                                        open={Boolean(popover.anchorEl)}
                                        anchorEl={popover.anchorEl}
                                        onClose={handlePopoverClose}
                                        anchorOrigin={{
                                            vertical:'center',
                                            horizontal:'center'
                                        }}
                                        transformOrigin={{
                                            vertical:'center',
                                            horizontal:'center'
                                        }}
                                    >
                                        <FormControl className={clsx(classes.margin, classes.textField)}>
                                            <InputLabel htmlFor="popoverInput">Title</InputLabel>
                                            <Input
                                                id="popoverInput"
                                                type="text"
                                                value={popover.inputValue}
                                                onChange={handlePopoverInputChange}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                                onClick={handleSubmit}
                                                
                                                        >
                                                            <Add />
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                            >
                                            </Input>
                                        </FormControl>
                                    </Popover>
                                </Box>
                            </Grid>
                        </Grid>
                        <ProjectStages />
                    </Box>
                </Grid>
                <Grid item md={7}>
                    <Box display="flex" flexDirection="column" width={1}>
                        {
                            props.activeStage?
                                <ProjectTasks />:null
                        }
                    </Box>
                </Grid>
            </Grid>
        )
    }
    else{
        return(
            <CircularProgress></CircularProgress>
        )
    }
})

export default Project

