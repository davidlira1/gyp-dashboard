var Projects = (props) => {
    var { street, city, state, zip, price, companies } = props.project;
    var withCommas = new Intl.NumberFormat('en-US');
    price = withCommas.format(price);
    var companiesCol = companies.length === 1 
                            ? companies[0].name
                            : `${companies[0].name} +${companies.length - 1}`;
    return (
        <li className='project' onClick={() => props.set_appState( {currentProject: props.project, view: 'View_Project_Profile'} )}>
            <div>{street}</div>
            <div>{city}</div>
            <div>{companiesCol}</div>
            <div>${price}</div>
        </li>
    )
}

export default Projects;