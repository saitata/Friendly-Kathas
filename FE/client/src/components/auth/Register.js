import React from 'react'
import {connect} from 'react-redux'
import {startRegisterUser} from '../../redux/actions/userAction'

class Register extends React.Component {
    constructor(props) {
        super()
        this.state = {
            username: '',
            password: '',
            email: '',
            phoneNumber: ''
        }
    }
    handleChange = (e) => {
        this.setState(
            { [e.target.name]: e.target.value })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            username:this.state.username,
            password:this.state.password,
            email:this.state.email,
            phoneNumber:this.state.phoneNumber

        }
        console.log(formData)
        const redirect=()=>{
            return this.props.history.push('/users/login')
        }
        this.props.dispatch(startRegisterUser(formData,redirect))
    }    
    render() {
        return (

            <div className='col-md-8 offset-md-2'>
                <h2>Register With Us</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='Username'>UserName</label>
                        <input type='text' id='Username' name='username' value={this.state.username} onChange={this.handleChange} className='form-control' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='Email'>Email</label>
                        <input type='text' id='Email' name='email' value={this.state.email} onChange={this.handleChange} className='form-control' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='phonenumber'>Phonenumber</label>
                        <input type='text' id='phonenumber' name='phoneNumber' value={this.state.phoneNumber} onChange={this.handleChange} className='form-control' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='Password'>Password</label>
                        <input type='password' id='Password' name='password' value={this.state.password} onChange={this.handleChange} className='form-control' />
                    </div>
                    <input type='submit' value='Register' className='btn btn-primary' />             
                </form>
            </div >

        )
    }
}

export default connect()(Register) 