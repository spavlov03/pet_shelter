import {useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'

const CreatePet = () => {
  const navigate = useNavigate();
  const [name,setName] = useState(""); 
  const [type,setType] = useState("");
  const [description,setDescription] = useState(""); 
  const [skill1,setSkill1] = useState(""); 
  const [skill2,setSkill2] = useState(""); 
  const [skill3,setSkill3] = useState(""); 
  const [errors,setErrors] = useState({}); 

  const submitHandler = (e) => { 
    e.preventDefault(); 
    axios.post('http://localhost:8000/api/pet', {
      name,
      type, 
      description, 
      skill1, 
      skill2, 
      skill3
    })
    .then(res=>{ 
      console.log(res.data); 
      navigate('/')
    })
    .catch((err)=>{
      console.log(err); 
      setErrors(err.response.data.errors)
    })
  }

  return (
    <div>
      <div className='d-flex justify-content-between ms-3 mt-3'>
        <h2>Pet Shelter</h2>
        <Link to='/' className='me-5'>back to home</Link>
      </div>
      <h4 className='text-start ms-3 mb-3'>Know a pet needing a home?</h4>
      <form className='d-flex border w-75 p-3 text-start ms-3' onSubmit={submitHandler}>
        <div className='w-50'>
          <label className='from-label'>Pet Name:</label>
          <input className='form-control' type="text" name='name' onChange={(e)=>setName(e.target.value)}/>
          {errors.name && <span className='text-danger'>{errors.name.message}</span>} <br/>
          <label className="from-label">Pet Type:</label>
          <input className='form-control' type="text" name='type' onChange={(e)=>setType(e.target.value)}/>
          {errors.type && <span className='text-danger'>{errors.type.message}</span>} <br/>
          <label className="from-label">Pet Description:</label>
          <input className='form-control' type="text" name='description' onChange={(e)=>setDescription(e.target.value)}/>
          {errors.description && <span className='text-danger'>{errors.description.message}</span>} <br/>
          <input type="submit" value="Add Pet" className='btn btn-primary mt-1 w-75'/>
        </div>
        <div className='w-50 ms-5'>
          <p>Skills (optional):</p>
          <label className='from-label'>Skill 1:</label>
          <input className='form-control' type="text" name='skill1' onChange={(e)=>setSkill1(e.target.value)}/>
          <label className='from-label'>Skill 2:</label>
          <input className='form-control' type="text" name='skill2' onChange={(e)=>setSkill2(e.target.value)}/>
          <label className='from-label'>Skill 3:</label>
          <input className='form-control' type="text" name='skill3' onChange={(e)=>setSkill3(e.target.value)}/>
        </div>
      </form>
    </div>
  )
}

export default CreatePet