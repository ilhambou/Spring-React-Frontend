import React from 'react'

export default function AddUser() {
  return (
    <div className='container'>
        <div className='col-md offset border rounded p-4 mt-2 shadow'>
            <h2 className='text-center m-4'>Register User</h2>
            <div className='mb-3'>
                <label htmlFor='Name'className='form-label'>Name</label>
                <input type={'text'} className='form-control' placeholder='entrer votre nom' name="name"></input>
            </div>

            <div className='mb-3'>
                <label htmlFor='UserName'className='form-label'>UserName</label>
                <input type={'text'} className='form-control' placeholder='entrer votre UserName' name="name"></input>
            </div>

            <div className='mb-3'>
                <label htmlFor='email'className='form-label'>Email</label>
                <input type={'text'} className='form-control' placeholder='entrer votre email' name="email"></input>
            </div>
            <button type='submit' className='btn btn-outline-primary'>Submit</button>
            <button type='submit' className='btn btn-outline-danger'>Cancel</button>


        </div>
        
    </div>
  )
}
