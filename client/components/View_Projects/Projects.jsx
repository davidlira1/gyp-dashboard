import Project from './Project';

var Projects = (props) => {
    return (
        <table className="projects-table">
            <tr className="projects-header">
                <th>Street</th>
                <th>City</th>
                <th>Company</th>
            </tr>
            <ul className="projects">
                {props.searched_projects.map((searched_project, idx) => {
                    return <Project 
                                key={idx}
                                project={searched_project}
                                set_appState={props.set_appState}/>
                })}
            </ul>
        </table>
    )
}

export default Projects;