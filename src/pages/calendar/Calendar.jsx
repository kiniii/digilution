import { useEffect, useState } from "react";
import Navigation from "../../components/Navigation"
import Header from "../../components/Header"

const Dashboard = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("test")
    }, [count]); 
    return (
        <>
            <Navigation />
            <Header />
            <button onClick={() => setCount(count + 1)}>Count</button>
        </>
    )
}

export default Dashboard;