const statesMyBooks={
    mybooks:[]
}
const gettersMyBooks={
    getMyBooks:state=>state.mybooks
}
const  mutationsMyBooks={
    SET_MY_BOOKS(state,item){
        if(state.mybooks[item.id]){
            state.mybooks[item.id]
         }else{
            state.mybooks={
               ...state.mybooks,
               [item.id]:{...item,quantity:1}
            }
         }
       },
    SET_DELETE_MY_BOOKS(state, itemID) {
       delete state.mybooks[itemID]
      }
}
const actionsMyBooks={
     addToMyBooks({commit},data){
        commit('SET_MY_BOOKS',data)
     },
     deleteMyBooks({commit},itemID){
        commit('SET_DELETE_MY_BOOKS',itemID)
     }
}

export{statesMyBooks,mutationsMyBooks,actionsMyBooks,gettersMyBooks}