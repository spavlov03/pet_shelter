import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const PetList = () => {
  const [pets,setPets] = useState([]);
  useEffect(()=> {
    axios.get('http://localhost:8000/api/pets')
    .then((res)=>{ 
      setPets(res.data); 
    })
    .catch(err=>console.log(err))
  },[])
  return (
    <div>
      <div className='d-flex justify-content-between ms-3 mt-3'>
        <h2>Pet Shelter</h2>
        <Link to='/pets/new' className='me-5'>add a pet to the shelter</Link>
      </div>
      <h4 className='text-start ms-3 mb-3'>These pets are looking for a good home</h4>
      <table className='table table-bordered table-striped w-75 ms-3 border text-start table-hover'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pets.map((pet,index)=> {
            return <tr key={index}>
            <td>{pet.name}</td>
            <td>{pet.type}</td>
            <td><Link to={`/pets/${pet._id}`}>details</Link> | <Link to={`/pets/${pet._id}/edit`}>edit</Link></td>
          </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default PetList