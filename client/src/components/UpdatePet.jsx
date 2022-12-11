import {useState,useEffect} from 'react'
import { Link,useNavigate,useParams } from 'react-router-dom'
import axios from 'axios'

const UpdatePet = () => {
  const navigate = useNavigate();
  const [name,setName] = useState(""); 
  const [type,setType] = useState("");
  const [description,setDescription] = useState(""); 
  const [skill1,setSkill1] = useState(""); 
  const [skill2,setSkill2] = useState(""); 
  const [skill3,setSkill3] = useState(""); 
  const [errors,setErrors] = useState({}); 
  const {id} = useParams();

  useEffect(()=> {
    axios.get(`http://localhost:8000/api/pet/${id}`)
    .then((res)=>{
      setName(res.data.name); 
      setType(res.data.type); 
      setDescription(res.data.description); 
      setSkill1(res.data.skill1);
      setSkill2(res.data.skill2);
      setSkill3(res.data.skill3);
    })
    .catch(err=>console.log(err))
  },[id])

  const submitHandler = (e) => { 
    e.preventDefault(); 
    axios.put(`http://localhost:8000/api/pet/${id}`, {
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
      <h4 className='text-start ms-3 mb-3'>Edit {name}</h4>
      <form className='d-flex border w-75 p-3 text-start ms-3' onSubmit={submitHandler}>
        <div className='w-50'>
          <label className='from-label'>Pet Name:</label>
          <input className='form-control' type="text" name='name' value={name} onChange={(e)=>setName(e.target.value)}/>
          {errors.name && <span className='text-danger'>{errors.name.message}</span>} <br/>
          <label className="from-label">Pet Type:</label>
          <input className='form-control' type="text" name='type' value={type} onChange={(e)=>setType(e.target.value)}/>
          {errors.type && <span className='text-danger'>{errors.type.message}</span>} <br/>
          <label className="from-label">Pet Description:</label>
          <input className='form-control' type="text" name='description' value={description} onChange={(e)=>setDescription(e.target.value)}/>
          {errors.description && <span className='text-danger'>{errors.description.message}</span>} <br/>
          <input type="submit" value="Edit Pet" className='btn btn-primary mt-1 w-75'/>
        </div>
        <div className='w-50 ms-5'>
          <p>Skills (optional):</p>
          <label className='from-label'>Skill 1:</label>
          <input className='form-control' type="text" name='skill1' value={skill1} onChange={(e)=>setSkill1(e.target.value)}/>
          <label className='from-label'>Skill 2:</label>
          <input className='form-control' type="text" name='skill2' value={skill2} onChange={(e)=>setSkill2(e.target.value)}/>
          <label className='from-label'>Skill 3:</label>
          <input className='form-control' type="text" name='skill3' value={skill3} onChange={(e)=>setSkill3(e.target.value)}/>
        </div>
      </form>
    </div>
  )
}

export default UpdatePet