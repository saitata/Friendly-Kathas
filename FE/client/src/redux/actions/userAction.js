import axios from 'axios'
//import React from 'react'

export const startRegisterUser = (fd, redirect) => {
    return () => {
        axios.post('/users/register', fd)
            .then((response) => {
                //console.log(response.data)
                if (response.data.hasOwnProperty('errors')) {
                    alert(response.data.message)

                }
                else if (response.data.hasOwnProperty('keyValue')) {
                    alert('Username or Email already taken')
                }

                else {
                    redirect()

                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
}


export const setUser = (user) => {
    return { type: 'SET_USER', payload: user }
}

export const startGetUser = () => {
    return (dispatch) => {
        axios.get('/users/account', {
            headers: {
                'Authorization': localStorage.getItem('authToken')
            }
        })
            .then((response) => {
                //console.log(response.data)
                const user = response.data
                dispatch(setUser(user))

            })
    }
}

export const startLoginUser = (formData, redirect) => {
    return (dispatch) => {
        axios.post('/users/login', formData)
            .then((response) => {
                //console.log(response.data)
                if (response.data.hasOwnProperty('errors')) {
                    alert(response.data.errors)
                }
                else {
                    localStorage.setItem('authToken', response.data.token)
                    //console.log(response.data.token)
                    alert('successfully logged in')
                    axios.get('/users/account', {
                        headers: {
                            'Authorization': localStorage.getItem('authToken')
                        }
                    })
                        .then((response) => {
                            //console.log(response.data, 'userlogin')
                            const user = response.data
                            dispatch(setUser(user))
                            redirect()
                        })
                }
            })
    }
}

export const resetUser = (data) => {
    return { type: 'RESET_USER', payload: data }
}





export const startLogoutUser = () => {
    return (dispatch) => {

        localStorage.removeItem('authToken')
        dispatch(resetUser({}))
        window.location.href = '/users/login'
    }
}

