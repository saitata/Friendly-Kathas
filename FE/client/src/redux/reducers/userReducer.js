const userInitialState={}
const userReducer=(state=userInitialState,action)=>{
    switch(action.type){
        case 'SET_USER':{
            return {...action.payload} 
           //return state.concat(action.payload)
        }
        case 'RESET_USER':{
           return {...action.payload}
           //return state.concat(action.payload)
        }



        default:{
           return {...state} 
          // return[].concat(state)
        }


       
    }
}

export default userReducer