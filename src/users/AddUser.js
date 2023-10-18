import React from 'react'
import {useState} from 'react'


export default function AddUser() {
    const [user, setUser] = useState(
        {
            name:"",
            username:"",
            email:""
        }
    )
    const[name,username,email]=user

    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]: e.target.value})

    }

  return (
    <div className='container'>
        <div className='col-md offset border rounded p-4 mt-2 shadow'>
            <h2 className='text-center m-4'>Register User</h2>
            <div className='mb-3'>
                <label htmlFor='Name'className='form-label'>Name</label>
                <input type={'text'} className='form-control' placeholder='entrer votre nom' name="name" value={name} onChange={(e)=>onInputChange(e)}></input>

            </div>

            <div className='mb-3'>
                <label htmlFor='UserName'className='form-label'>UserName</label>
                <input type={'text'} className='form-control' placeholder='entrer votre UserName' name="name" value={username}  onChange={(e)=>onInputChange(e)} ></input>
            </div>

            <div className='mb-3'>
                <label htmlFor='email'className='form-label'>Email</label>
                <input type={'text'} className='form-control' placeholder='entrer votre email' name="email" value={email}  onChange={(e)=>onInputChange(e)}></input>
            </div>
            <button type='submit' className='btn btn-outline-primary'>Submit</button>
            <button type='submit' className='btn btn-outline-danger'>Cancel</button>


        </div>
        
    </div>
  )
}
 