import React from 'react'
import CustomerForm from './Form'
import {connect} from 'react-redux'
import { startAddCustomer } from '../../redux/actions/customerActon'

function CustomerNew(props){
    const handleSubmit=(formData)=>{
       // const redirect=()=>props.history.push('/customers')
        props.dispatch(startAddCustomer(formData))
    }
    return(
        <div>
            <h2>Add Customer</h2>
            <CustomerForm handleSubmit={handleSubmit}/>
        </div>
    )
}
export default connect()(CustomerNew)