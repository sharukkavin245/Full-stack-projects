import React from 'react'
import { useState } from 'react'

const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

  return (
    <div className='containter'>
        <div className="row">
            <div className="card">
                <h2 className="text-center">Add Employee</h2>
                <form action="">
                    <div className="form-group mb-2">
                        <div className="form-label">First Name:</div>
                        <input 
                            type="text" 
                            placeholder='Enter employee first name' 
                            name='firstName' 
                            value={firstName} 
                            className='form-control' 
                            onChange={handleFirstName}/>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default EmployeeComponent