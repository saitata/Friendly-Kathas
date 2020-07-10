import React from 'react'
import { Link } from 'react-router-dom'

function Account() {

    return (
        <div className='container'>
            <h2>hello acc</h2>
            <div className='text-right'>
                <Link to='/customers/new'>Add Customers</Link>
            </div>
        </div>
    )
}
export default Account