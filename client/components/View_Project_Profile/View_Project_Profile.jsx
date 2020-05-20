var View_Project_Profile = (props) => {
    const { project, set_appState } = props;
    return (
       <div>
           <h1>{project.street}</h1>
           <div onClick={() => set_appState({view:'View_Calculator'})}>Estimate</div>
       </div>
    )
}

export default View_Project_Profile;