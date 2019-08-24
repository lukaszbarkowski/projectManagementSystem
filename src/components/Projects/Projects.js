import React,{useState,useEffect} from 'react';
import { Grid, List, ListItem, Typography,CircularProgress, Paper, Box,Button, IconButton, Dialog, DialogTitle, DialogContentText,DialogContent, TextField, DialogActions } from '@material-ui/core';
import withProjects from '_hoc/withProjects'
import { makeStyles } from '@material-ui/core/styles';

import ProjectCard from 'components/ProjectCard/ProjectCard'
import { Add } from '@material-ui/icons';

import {projectsService} from '_services/projectsService'

const useStyles = makeStyles(theme => ({
    buttonProgress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
      }
}))

const Projects = withProjects(props => {
    const classes = useStyles();
    const [dialog,setDialog] = useState({
        visible:false,
        name:'',
        description:'',
        loader:false
    })

    useEffect(()=>{
        const loadProjects = async () =>{
            await projectsService.getAllProjects()
                .then(res=>{
                    props.setProjectsList(res)
                })
        }
        loadProjects()
    },[])

    const handleProjectAdd = () => {
        setDialog({...dialog,loader:true})
        projectsService.addProject(dialog.name,dialog.description)
            .then(res=>{
                props.addProject({id:res.id,name:dialog.name,description:dialog.description})
                setDialog({...dialog,name:'',description:'',visible:false})
            })
            .catch()
            .finally(()=>{
                setDialog({...dialog,loader:false})
            })
    }

    const handleChange = name => event => {
        setDialog({...dialog,[name]:event.target.value})
    }

    const toggleModal = () => {
        setDialog({...dialog,visible:!dialog.visible})
    }

    return (
        <>
        <Grid container spacing={3}>
            <Grid item md={5}>
                <Paper>
                    <List>
                        {
                            (props.projects || []).map(e=>{
                                return (
                                    <ListItem button key={e.id} onClick={()=>props.setActiveProject(e)}>
                                        <Typography>
                                            {e.name}
                                        </Typography>
                                    </ListItem>
                                )
                            })
                        }
                    </List>
                    <Box display="flex" width={1} justifyContent="center">
                        <IconButton onClick={toggleModal}>
                            <Add></Add>
                        </IconButton>
                    </Box>
                </Paper>
            </Grid>
            <Grid item md={7}>
                {
                    props.activeProject &&
                    <ProjectCard />
                }
            </Grid>
        </Grid>
            <Dialog open={dialog.visible} onClose={toggleModal}>
                <DialogTitle>New project</DialogTitle>
                <DialogContent>
                    <DialogContentText>To add new project insert name and short description of a project.</DialogContentText>
                    <TextField
                        value={dialog.name}
                        label="Name"
                        onChange={handleChange('name')}
                        fullWidth
                    ></TextField>
                    <TextField
                        value={dialog.description}
                        label="Description"
                        onChange={handleChange('description')}
                        fullWidth
                    ></TextField>
                </DialogContent>
                <DialogActions>
                    <Button 
                        variant="contained" 
                        color="primary"
                        onClick={handleProjectAdd}
                        disabled={dialog.loader}
                    >
                        Add
                        {dialog.loader && <CircularProgress size={24} className={classes.buttonProgress} />}
                    </Button>
                    <Button variant="contained" color="primary" onClick={toggleModal}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </>
    )
})

export default Projects
