import React from 'react'

const ProjectDetails = (props) => {
    const projId = props.match.params.projectId;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title {projId}</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates distinctio nam nihil aliquid iure sed cumque quod natus rem impedit suscipit non praesentium, deleniti porro atque vel! Officia, saepe aut?</p>
                </div>
                <div className = "card-action grey lighten-4 grey-text">
                    <div>Posted by Rohan</div>
                    <div>26th January, 2021, 1:50 pm</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
