import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../reducers/userReducer'
import customerReducer from '../reducers/customerReducer'
const configureStore=()=>{
    const store=createStore(combineReducers({
        users:userReducer,
        customers:customerReducer

    }),applyMiddleware(thunk))
    return store
}

export default configureStore