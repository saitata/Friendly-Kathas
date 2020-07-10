import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { NavItem, NavLink, Nav, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { connect } from 'react-redux'
import { BrowserRouter,  Switch, Route } from 'react-router-dom'
import Home from './components/static/Home'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Account from './components/static/Account'
import {startLogoutUser} from './redux/actions/userAction'
import CustomerForm from './components/customers/Form'
function App(props) {
//    console.log(props)
//    console.log(props.user)
    const handleLogout=()=>{
         props.dispatch(startLogoutUser())
    }

    return (
            
        <BrowserRouter>
                    <div>
            
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <h2>Friendly Kahata</h2>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <div>
                        <Nav tabs>
                            <NavItem>
                                <NavLink href="/">Home</NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                    
                    {Object.keys(props.users).length !== 0 ? (
                        <div>
                            <Nav tabs>
                                <NavItem>
                                    <NavLink href="/users/account">Account</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" onClick={handleLogout}>Logout</NavLink>
                                </NavItem>
                            </Nav>

                        </div>
                    ) : (
                            <div>

                                <Nav tabs>
                                    <NavItem>
                                        <NavLink href="/users/register">Register</NavLink>
                                    </NavItem>

                                    <NavItem>
                                        <NavLink href="/users/login">Login</NavLink>
                                    </NavItem>
                                </Nav>
                                
                            </div>
                        )}
                </nav>
                
                
                <Switch>
                    <Route path="/" component={Home} exact={true} />
                    <Route path="/users/register" component={Register} />
                    <Route path="/users/login" component={Login} />
                    <Route path="/users/account" component={Account} />
                    <Route path='/customers/new' component={CustomerForm}/>
                </Switch>
                </div>
        </BrowserRouter>
    )

}
const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(App)