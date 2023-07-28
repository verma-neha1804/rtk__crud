import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showUser } from '../features/userDetailSlics'
import CustomModal from './CustomModal'
import { Link } from 'react-router-dom'
import { deleteUser } from '../features/userDetailSlics'

const Read = () => {
    const dispatch = useDispatch()
    const [id, setId] = useState()
    const [showPopup, setShowPopup] = useState(false)
    const [radioData, setRadioData] = useState("");
    const { users, loading,searchData } = useSelector((state) => state.app);
    useEffect(() => {
       
        dispatch(showUser())
        console.log(showUser())
    }, [])

    if (loading) {
        return <h2>Loading...</h2>
    }
    return (
        <div>
            {showPopup && <CustomModal id={id} showPopup={showPopup} setShowPopup={setShowPopup}/>}
            <h2 style={{textAlign:"center"}}>All Data</h2>
<div className=" mx-auto w-50 my-2" style={{textAlign:"center"}}>
            <input
        class="form-check-input"
        name="gender"
        value="Male"
        type="radio"   
        checked={radioData === "Male"}
        onChange={(e)=>setRadioData(e.target.value)}
      />
      <label class="form-check-label">Male</label>
      <input
        class="form-check-input"
        name="gender"
        value="Female"
        checked={radioData === "Female"}
        type="radio"
        onChange={(e) => setRadioData(e.target.value)}
      />
      <label class="form-check-label">Female</label>
      <input
        class="form-check-input"
        name="gender"
        checked={radioData === ""}
        type="radio"
        onChange={(e) => setRadioData("")}
      />
      <label class="form-check-label">All</label>
      </div>
            {users && 
            users
            .filter((ele) => {
              if (searchData.length === 0) {
                return ele;
              } else {
                return ele.name
                  .toLowerCase()
                  .includes(searchData.toLowerCase());
              }
            }).filter((ele)=>{
                if(radioData==="Male"){
                    return ele.gender===radioData
                }else{
                    if(radioData==="Female"){
                        return ele.gender === radioData
                    }else{
                    return ele
                }
                }
            })
            .map((element) => (<div>
                <div key={element.id} className="card mx-auto w-50 my-2" >
                    <div className="card-body" style={{ textAlign: "center" }}>
                        <h5 className="card-title">{element.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{element.email}</h6>
                        <p className="card-text">{element.gender}</p>
                        <button href="#" className="card-link" onClick={() => [setId(element.id),setShowPopup(true)]}>View</button>
                        <Link to={`/edit/${element.id}`} className="card-link">Edit</Link>
                        <Link onClick={()=>dispatch(deleteUser(element.id))} className="card-link">Delete</Link>
                    </div>
                </div>
            </div>))}
        </div>
    )
}

export default Read