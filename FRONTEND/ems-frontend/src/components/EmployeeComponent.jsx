import React from 'react'
import { useState } from 'react'

const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    function handleFirstName(e){
        setFirstName(e.target.value);
    }

    function handleLastName(e){
        setLastName(e.target.value);
    }

    function handleEmail(e){
        setEmail(e.target.value);
    }

    function saveEmployee(e){
        e.preventDefault();

        const employee = {firstName, lastName, email};
        console.log(employee);
    }

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

                    <div className="form-group mb-2">
                        <div className="form-label">Last Name:</div>
                        <input 
                            type="text" 
                            placeholder='Enter employee last name' 
                            name='lastName' 
                            value={lastName} 
                            className='form-control' 
                            onChange={handleLastName}/>
                    </div>

                    <div className="form-group mb-2">
                        <div className="form-label">Email Name:</div>
                        <input 
                            type="text" 
                            placeholder='Enter employee email' 
                            name='emailName' 
                            value={email} 
                            className='form-control' 
                            onChange={handleEmail}/>
                    </div>
                    <button className="btn btn-success" onClick={saveEmployee}>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default EmployeeComponent