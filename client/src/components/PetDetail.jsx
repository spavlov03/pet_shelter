import {useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams, Link } from 'react-router-dom'

const PetDetail = () => {
  const {id} = useParams();
  const [pet,setPet] = useState({}); 
  const navigate = useNavigate();
  const [likes,setLikes] = useState(0); 
  const [disable,setDisable] = useState(false); 
  const addLike = () => { 
    setLikes(likes+1); 
    setDisable(true);
  }
  useEffect(()=>{ 
    axios.get(`http://localhost:8000/api/pet/${id}`)
    .then((res)=> { 
      setPet(res.data); 
    })
    .catch(err=>console.log(err))
  },[id])
  const adoptPet = () => {
    axios.delete(`http://localhost:8000/api/pet/${id}`)
    .then((res)=>{
      navigate('/')
    })
    .catch(err=>console.log(err))
  }
  
  return (
    <div>
      <div className='d-flex justify-content-between ms-3 mt-3'>
        <h2>Pet Shelter</h2>
        <Link to='/' className='me-5'>back to home</Link>
      </div>
      <div className='d-flex justify-content-between'>
        <h4 className='text-start ms-3 mb-3'>Details about {pet.name}</h4>
        <button className='me-5 btn btn-danger adoptBtn' onClick={adoptPet}>Adopt {pet.name}</button>
      </div>
      <div className='border w-75 ms-3'>
        <table className='table table-borderless text-start'>
          <tbody>
            <tr>
              <th className='w-25'>Pet Type:</th>
              <td>{pet.type}</td>
            </tr>
            <tr>
              <th>Description:</th>
              <td>{pet.description}</td>
            </tr>
            <tr>
              <th>Skills:</th>
              <td>
                <p>{pet.skill1}</p>
                <p>{pet.skill2}</p>
                <p>{pet.skill3}</p>
              </td>
            </tr>
          </tbody>
        </table>
        <p className='text-center'>
          <button className='btn btn-success w-25 me-5' onClick={addLike} disabled={disable}>Like {pet.name}</button> {likes} like(s)
          </p>
      </div>
    </div>
  )
}

export default PetDetail