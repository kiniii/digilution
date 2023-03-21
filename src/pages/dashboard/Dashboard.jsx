import { useEffect, useState } from "react";

const Dashboard = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("test")
    }, [count]); 
    return (
        <>
            <h1>Dashboard {count}</h1>
            <button onClick={() => setCount(count + 1)}>Count</button>
        </>
    )
}

export default Dashboard;