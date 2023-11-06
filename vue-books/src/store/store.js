import {createStore} from 'vuex'
import {stateMain,mutationsMain,actionsMain,gettersMain} from '../modules/main/store'
import {stateDetails,mutationsDetails,actionsDetails,gettersDetails} from '../modules/details/store'
import {statesMyBooks,mutationsMyBooks,actionsMyBooks,gettersMyBooks} from '../modules/mybooks/store'
export default createStore({
    state:{
        ...stateMain,
        ...stateDetails,
        ...statesMyBooks
    },
    mutations:{
        ...mutationsMain,
        ...mutationsDetails,
        ...mutationsMyBooks
    },
    actions:{
        ...actionsMain,
        ...actionsDetails,
        ...actionsMyBooks
    },
    getters:{ 
        ...gettersMain,
        ...gettersDetails,
        ...gettersMyBooks
    }
})