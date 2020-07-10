// import React from 'react'
// // import {withRouter} from 'react-router-dom'
// import {connect} from 'react-redux'
// // import {findCustomers} from '../../redux/selectors/customerSelectors'
// import { startAddCustomers } from '../../redux/actions/customerActon'
// class CustomerForm extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//             name:'',
//             phoneNumber:''
//         }
//     }
//     handleChange = (e) => {
//         this.setState(
//             { [e.target.name]: e.target.value })
//     }
//     handleSubmit=(e)=>{
//         e.preventDefault()
//         const formData={
//             name:this.state.name,
//             phoneNumber:this.state.phoneNumber
//         }
//         //console.log(formData)
//        this.props.dispatch(startAddCustomers(formData))
//     }



//     render(){
//         return(
//             <div className='col-md-8 offset-md-2'>
//                 <h3>Add Customer</h3>
//                 <form onSubmit={this.handleSubmit}>
//                 <div className='form-group'>
//                         <label htmlFor='Name'>Name</label>
//                         <input type='text' id='Name' name='name' value={this.state.name} onChange={this.handleChange} className='form-control'/>
//                     </div>
//                     <div className='form-group'>
//                         <label htmlFor='PhoneNumber'>Phonenumber</label>
//                         <input type='text' id='PhoneNumber' name='phoneNumber' value={this.state.phoneNumber} onChange={this.handleChange} className='form-control'/>
//                     </div>
//                     <input type='submit' value='submit' className='btn btn-primary' /> 
//                 </form>
//             </div>
//         )
//     }
// }
// // const mapStateToProps=(state,props)=>{
// //     let id=props.match.params.id
// //     return{
// //         customer:findCustomers(state.customers,id)
// //     }

// // }

// // export default withRouter(connect(mapStateToProps)(CustomerForm)) 

// export default connect() (CustomerForm)




import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {findCustomers} from '../../redux/selectors/customerSelectors'

class CustomerForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            mobile:''
        }
    }
    handlechange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            name:this.state.name, 
            phoneNumber:this.state.mobile
        }
        console.log(formData)
        this.props.handleSubmit(formData)
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handlechange} />
                    <br/>
                   
                    <label htmlFor="mobile">Mobile:</label>
                    <input type="text" name="mobile" value={this.state.mobile} onChange={this.handlechange} />
                    <br/>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        )
    }
}
const mapStateToProps=(state,props)=>{
    let id=props.match.params.id
    return{
        customer:findCustomers(state.customers,id)
    }

}
export default withRouter(connect(mapStateToProps)(CustomerForm))