import '../../styles/View_Project.css';

var View_Project = (props) => {
    const { project, set_appState } = props;
    console.log(project)
    var withCommas = new Intl.NumberFormat('en-US');
    var price = withCommas.format(project.price);
    return (
       <div className="project-container">
            <div className="project-identity">
                <h1 className="project-title">{project.street}</h1>
                <p>{project.city}, {project.state}</p>
                <p>{project.zip}</p>
           </div>
           <div className="project-bidders">
                <h1 className="project-price">${price}</h1>
                {project.companies.map(company => {
                    return <p>{company.name}</p>
                })}
           </div>

           <div onClick={() => set_appState({view:'View_Calculator'})}>Estimate</div>
       </div>
    )
}

export default View_Project;