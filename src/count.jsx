import { useState } from "react";

export default function Count(){
    const [count, setCount] = useState(0)

    const handleCount = ()=>{
        const newCount = count+1;
        setCount(newCount)
    }

return(
    <div style={{border: '2px solid yellow'}}>
        <h3>Counter: {count}</h3>
        <button onClick={handleCount}>Add</button>
    </div>
)
}