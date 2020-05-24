//import Projects from './Projects';
//import './../../styles/View_Projects.css';

class View_Day_Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projectStatuses: []
        }
        this.change_input = this.change_input.bind(this);
        this.search_project = this.search_project.bind(this);
    }

    componentDidMount() {
        fetch(`http://${this.props.host}:3000/day/projects`)
        .then(response => response.json())
        .then(results => {
            console.log(results);
            this.setState(
                {projectStatuses : results}
            )
        })
    }

    

    render() {
        return (
            <div>
                
            </div>
        )       
    }
}

export default View_Day_Projects;