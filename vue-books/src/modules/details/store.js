import { api } from '../../utils/axios'
const stateDetails={
    details:{
        id:'',
        title:'',
        authors:'',
        description:''
    }
}
const mutationsDetails={
    SET_DETAILS(state,value){
        state.details=value
    }
}
const gettersDetails={
    getDetails:state=>state.details,
}
const actionsDetails={
    fetchDetails({commit},id){
        api.get(`/books/${id}`)
        .then(({data})=>{
         commit('SET_DETAILS',data)
        })
        .catch(err=>{
         alert(err)
        })
    }
}
export{stateDetails,mutationsDetails,actionsDetails,gettersDetails}