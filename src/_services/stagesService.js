import api from '_api/api'


const addStage = (projectId,value) => {
    return api({
        method:'post',
        url:'stage/add',
        data:{
            projectId:projectId,
            title:value
        }
    })
        .then(handleResponse)
        .catch(err=>{
            throw err
        })
}

const getStagesByProjectId = (projectId) => {
    return api({
        method:'get',
        url:`stages/${projectId}`
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

export const stagesService = {
    addStage,
    getStagesByProjectId
}