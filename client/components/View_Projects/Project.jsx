var Projects = (props) => {
    var { street, city, state, zipCode, companies } = props.project;
    var companiesCol = companies.length === 1 
                            ? companies[0]
                            : `${companies[0]} +${companies.length - 1}`;
    return (
        <li className='project' onClick={() => props.set_appState( {currentProject: props.project, view: 'View_Project_Profile'} )}>
            <div>{street}</div>
            <div>{city}</div>
            <div>{companiesCol}</div>
        </li>
    )
}

export default Projects;