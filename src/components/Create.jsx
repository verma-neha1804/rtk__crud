import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createUser } from '../features/userDetailSlics'
import { useNavigate } from 'react-router-dom'

const Create = () => {
const [user, setUsers]=useState({})
const dispatch=useDispatch()
const navigate=useNavigate()

const getUserData=(e)=>{

    setUsers({...user,[e.target.name]:e.target.value})
   
}
const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(user)
   dispatch(createUser(user))
   navigate("/read")
}
  return (
    <div>
<form className='w-50 mx-auto my-5' onSubmit={handleSubmit}>
  <div class="mb-3">
    <label class="form-label">Name</label>
    <input type="text" name='name' class="form-control" onChange={getUserData}></input>
      </div>
      <div class="mb-3">
    <label class="form-label">Email</label>
    <input type="text" name='email' class="form-control" onChange={getUserData}></input>
      </div>
      <div class="mb-3">
    <label class="form-label">Age</label>
    <input type="text" name='age' class="form-control" onChange={getUserData} ></input>
      </div>

      <div class="form-check">
  <input class="form-check-input" type="radio" name='gender' value="Male" onChange={getUserData}></input>
  <label class="form-check-label" >
  Male
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name='gender' value="Female" onChange={getUserData}  ></input>
  <label class="form-check-label" >
   Female
  </label>
</div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

    </div>
  )
}

export default Create