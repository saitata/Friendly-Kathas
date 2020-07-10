const customerInitialState=[]

const customerReducer=(state=customerInitialState,action)=>{
    switch(action.type){
        case 'ADD_CUSTOMER':{
            return[...state,action.payload]
        }

        default:{
            return [...state]
        }
    }
}

export default customerReducer