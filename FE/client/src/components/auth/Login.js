import React from 'react'
import { connect } from 'react-redux'
import {startLoginUser} from '../../redux/actions/userAction' 
class Login extends React.Component {
    constructor(props) {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }
    handleChange = (e) => {
        this.setState(
            { [e.target.name]: e.target.value })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
           
            password:this.state.password,
            email:this.state.email,
            

        } 
        const redirect=()=>{
            return this.props.history.push('/users/account')
        }
        this.props.dispatch(startLoginUser(formData,redirect))
    }    
    render() {
        return (
            <div className='col-md-8 offset-md-2'>
                <h2>Login</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='Email'>Email</label>
                        <input type='text' id='Email' name='email' value={this.state.email} onChange={this.handleChange} className='form-control' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='Password'>Password</label>
                        <input type='password' id='Password' name='password' value={this.state.password} onChange={this.handleChange} className='form-control' />
                    </div>
                    <input type='submit' value='Login' className='btn btn-primary' /> 
                </form>
            </div>
        )
    }
}

export default connect() (Login) 