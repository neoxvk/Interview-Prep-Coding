import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [name, setName] = useState("")
    const [number, setNumber] = useState(0)
    const [text, setText] = useState("");

    const calculation = useMemo(()=>{
        console.log("calculating")
        return number * (number-1)
    },[number]) 
  return (
    <div>
      <p>The number is: {calculation}</p>
      <button onClick={() => setNumber(number + 1)}>Increment</button>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type something"
      />
    </div>
  );
}

export default UseMemo