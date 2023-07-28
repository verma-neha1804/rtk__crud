import React, { useEffect ,useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../features/userDetailSlics'


const Update = () => {
    const {id}=useParams()
    const dispatch=useDispatch()
    const [updateData,setUpdateData]=useState()
    const {users,loading}=useSelector((state)=>state.app)
    const navigate=useNavigate()
   
    useEffect(()=>{
        if(id){
            const singleUser=users.filter((element)=>element.id===id)
            setUpdateData(singleUser[0])
        }
    },[])
    
    const newData=(e)=>{
        setUpdateData({...updateData,[e.target.name]:e.target.value})
    }
    
    const handleUpdate=(e)=>{
        e.preventDefault()
        dispatch(updateUser(updateData))    
        navigate("/read")
    }
  return (
    <div>
    <form className='w-50 mx-auto my-5'
      onSubmit={handleUpdate}
     >
      <div class="mb-3">
        <label class="form-label">Name</label>
        <input type="text" name='name' class="form-control" 
        value={updateData && updateData.name}
         onChange={newData}
        ></input>
          </div>
          <div class="mb-3">
        <label class="form-label">Email</label>
        <input type="text" name='email' class="form-control" 
        onChange={newData} 
        value={updateData && updateData.email}
        ></input>
          </div>
          <div class="mb-3">
        <label class="form-label">Age</label>
        <input type="text" name='age' class="form-control" 
         onChange={newData} 
        value={updateData && updateData.age}
        ></input>
          </div>
    
          <div class="form-check">
      <input class="form-check-input" type="radio" name='gender' value="Male" 
      onChange={newData}
    checked={ updateData && updateData.gender==="Male"}
      ></input>
      <label class="form-check-label" >
      Male
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name='gender' value="Female"
        onChange={newData} 
    checked={updateData && updateData.gender==="Female"}
        ></input>
      <label class="form-check-label" >
       Female
      </label>
    </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    
        </div>
  )
}

export default Update