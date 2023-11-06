import {api} from '../../utils/axios'

const stateMain = {
    books: [],
    limit:20,
    search: ''
}
const mutationsMain = {
    SET_BOOKS(state, payload) {
        state.books = payload
    },
    SET_LIMIT(state){
        state.limit+=20
    },
    SET_SEARCH(state, payload) {
        state.search = payload
    }
}
const gettersMain = {
    getBooks: state => state.books,
    getLimit:state=>state.limit,
    getSearch: state => state.search
}
const actionsMain = {
    fetchBooks({commit},limit) {
        api.get(`/books?_limit=${limit}`)
            .then(({data}) => {
                console.log(data);
                commit('SET_BOOKS', data)
            })
            .catch(err => {
                alert(err)
            })

    },
    SearchBooks({commit}, name) {
        api.get(`/books?q=${name}`)
            .then(({data}) => {
                console.log(data);
                commit('SET_BOOKS', data)
            })
            .catch(err => {
                alert(err)
            })
    },
}
export {stateMain, mutationsMain, actionsMain, gettersMain}