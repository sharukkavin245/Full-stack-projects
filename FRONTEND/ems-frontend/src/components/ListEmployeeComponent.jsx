import React from 'react'

const ListEmployeeComponent = () => {

    const dummyData = [
        {
            "id": 1,
            "firstName": "Sharuk",
            "lastName": "kavin",
            "email": "sharukkavin@gmail.com"
        },
        {
            "id": 1,
            "firstName": "Sharuk",
            "lastName": "kavin",
            "email": "sharukkavin@gmail.com"
        },
        {
            "id": 1,
            "firstName": "Sharuk",
            "lastName": "kavin",
            "email": "sharukkavin@gmail.com"
        }
    ]
  return (
    <div>

        <h2>List of Employees</h2>
        <table>
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee First Name</th>
                    <th>Employee Second Name</th>
                    <th>Employee Email Id</th>
                </tr>
            </thead>
            <tbody>
                {
                    dummyData.map(employee => 
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent