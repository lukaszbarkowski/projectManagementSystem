import React,{useState} from 'react';
import withProject from '_hoc/withProject'
import _ from 'lodash'
import {Paper,Grid, Box, Typography, Collapse, IconButton, Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import { ExpandMore} from '@material-ui/icons';

const ProjectTasks = withProject(props=>{
    const [formValues,setFormValues] = useState({
        title:'',
        description:'',
        category:'',
        priority:0
    })

    const handleChange = name => event => {
        setFormValues({...formValues,[name]:event.target.value})
    }
    const getData = () => {
        return _.find(props.projectData,(e)=>{return e.id===props.activeStage}).tasks
    }

    return(
        <Paper>
            <Box p={3}>
            <Grid container>
                <Typography variant="h5">Tasks</Typography>
            </Grid>
            <Grid container>
                <Box m={1} width={1} display="flex" justifyContent="center" alignItems="center">
                    <Button onClick={props.toggleDialog} color="primary" variant="contained">New task</Button>
                    <Dialog onClose={props.toggleDialog} open={props.isDialogVisible || false}>
                        <DialogTitle>New Task</DialogTitle>
                        <DialogContent>
                            <DialogContentText>Add new task to the dashboard</DialogContentText>
                            <TextField
                                autoFocus
                                id="title"
                                label="Task title"
                                type="text"
                                value={formValues.title}
                                onChange={handleChange('title')}
                                fullWidth
                            ></TextField>
                            <TextField
                                id="description"
                                label="Description"
                                type="text"
                                value={formValues.description}
                                onChange={handleChange('description')}
                                fullWidth
                            ></TextField>
                            <FormControl fullWidth>
                                <InputLabel htmlFor="select">Choose category</InputLabel>
                                <Select 
                                    value={formValues.category} 
                                    onChange={handleChange('category')}
                                    fullWidth
                                    inputProps={{
                                        name:'select',
                                        id:'select'
                                    }}
                                >
                                    <MenuItem value={100}>Feature</MenuItem>
                                    <MenuItem value={200}>Bug</MenuItem>
                                    <MenuItem value={300}>Research</MenuItem>
                                    <MenuItem value={400}>Study</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField
                                id="priority"
                                label="Priority"
                                type="number"
                                value={formValues.priority}
                                onChange={handleChange('priority')}
                                fullWidth
                            ></TextField>
                        </DialogContent>
                    </Dialog>
                </Box>
            </Grid>
                {
                    (getData() || []).map(e=>{
                        return(
                            <Task key={e.id} el={e} />
                        )
                    })
                }
            </Box>
        </Paper>
    )
})

const Task = React.memo(props=>{
    const [collapse,setCollapse] = useState(false);

    return (
        <Paper>
            <Box px={2} py={1} display="flex" flexDirection="row" alignItems="center">
                <Typography className="title">{props.el.name}</Typography>
                <IconButton onClick={()=>setCollapse(!collapse)}>
                    <ExpandMore></ExpandMore>
                </IconButton>
            </Box>
            <Collapse in={collapse}>
                <Box px={2} py={1}>
                    <Typography>{props.el.description}</Typography>
                </Box>
            </Collapse>
        </Paper>
    )
})

export default ProjectTasks