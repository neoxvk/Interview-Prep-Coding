import React, {useState} from 'react'
import { memo } from 'react'


const EmployeeProfile = memo(function EmployeeProfile({name, email}) {
    return (
      <>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
      </>
    );
})


const Memoization = () => {

    const[name, setName] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit = () => {
        alert("Submitted")
    }
  return (
    <div>
      <div>
        <label>NAME:</label>
        <input
          type="text"
          value={name}
          placeholder="enter name..."
          onChange={(e) => setName(e.target.value)}
        />
        <label>EMAIL:</label>
        <input
          type="text"
          value={email}
          placeholder="enter email..."
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <button onClick={handleSubmit}>Submit</button>

      <EmployeeProfile name={name} email={email}/>
    </div>
  );
}

export default Memoization;

