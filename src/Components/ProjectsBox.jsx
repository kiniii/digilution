import React from "react";
import ProgressBar from "./ProgressBar";

const TestData = [
    { bgcolor: "#f95b1c", completed: 60 }
]

const ProjectsBox = ({ title, description, date, ProgressBar, users }) => {
    return (
        <div>
            <h1>{title}</h1>
            <h2>{description}</h2>
            <h2>{date}</h2>
            <div>
                    {TestData.map((item, idx) => (
                    <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />))}
            </div>
            <div>{users}</div>
        </div>
    )
}

export default ProjectsBox;