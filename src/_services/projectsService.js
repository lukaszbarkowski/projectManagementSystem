import api from '_api/api'
const addProject = (name,description) => {
    return api({
        method:'post',
        url:'project/add',
        data:{
            name:name,
            description:description
        }
    })
    .then(handleResponse)
    .catch(err=>{
        throw err
    })
}

const getAllProjects = () => {
    return api({
        method:'get',
        url:'projects'
    })
    .then(handleResponse)
    .catch(err=>{
        throw err
    })
}

const handleResponse = (response) => {
    if(response.data){
        return Promise.resolve(response.data)
    }
    else{
        return Promise.reject("Something went wrong")
    }
}

export const projectsService = {
    addProject,
    getAllProjects
}