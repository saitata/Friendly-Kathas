import axios from 'axios'

export const addCustomer=(customer)=>{
    return {type:'ADD_CUSTOMER',payload:customer}
}

export const startAddCustomers=(formData)=>{
    return(dispatch)=>{
        axios.post('/customers',formData,{
            headers:{
                'Authorization':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            //console.log(response.data)
            const customer=response.data
            dispatch(addCustomer(customer))
            //redirect()
        })
        .catch(err=>console.log(err))
    }
}