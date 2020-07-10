import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import App from './App'
import configureStore from './redux/store/configureStore'
import {startGetUser} from './redux/actions/userAction'

const store=configureStore()
 console.log(store.getState())
store.subscribe(()=>{
    console.log(store.getState())
})
if(localStorage.getItem('authToken')){
    store.dispatch(startGetUser())
}

const jsx=(
    <Provider store={store}>
         <App/>
    </Provider>
)

ReactDOM.render(jsx,document.getElementById('root'))