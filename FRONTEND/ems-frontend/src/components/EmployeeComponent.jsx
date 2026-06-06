import React from 'react'
import { useState } from 'react'
import { createEmployee } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })

    const navigator = useNavigate();

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

        createEmployee(employee).then((response) => {
            console.log(response.data);
            navigator('/employees')
        })
    }

    function validateForm(){
        let valid = true;

        const errorsCopy = {... errors};

        if(firstName.trim()){
           errorsCopy.firstName = '';
        } else {
            errorsCopy.firstName = 'First name is required';
            valid = false;
        }

        if(lastName.trim()){
            errorsCopy.lastName = '';
        } else {
            errorsCopy.lastName = 'Last name is required';
            valid = false;
        }

        if(email.trim()){
            errorsCopy.email = '';
        } else {
            errorsCopy.email = 'Email is required';
        }

        setErrors(errorsCopy);

        return valid;
    }

  return (
    <div className='containter'>
        <br /><br />
        <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
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
                        <div className="form-label">Email:</div>
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