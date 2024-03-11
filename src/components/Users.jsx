import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(()=>{
        async function fetchUsers
        // try {
        //     const respons = axios.get('https://jsonplaceholder.typicode.com/users')
        // } catch (error) {
        //     console.log(error, 'NameError');
        // }

        axios.get("https://jsonplaceholder.typicode.com/users").then(response=> {
            console.log(response.data);
            setUsers(response.data)
        }).catch(err=> {
            console.log(err);
        })
    },[])
  return (
    <div className='container text-info'>
        <div className="col-md-10 offset-1">
            <h1 className='text-center my-3'>Users</h1>
            <table className='table table-bodered table-hover table-info'>
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Name</th>
                        <th>User name</th>
                        <th>Phone number</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((item, index)=>{
                            return <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.phone}</td>
                                <td>{item.email}</td>
                                <td>{item.address.city}</td>
                                <td>{item.company.name}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Users