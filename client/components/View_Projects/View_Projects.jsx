import Projects from './Projects';

class View_Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input_search: '',
            searched_projects: []
        }
        this.change_input = this.change_input.bind(this);
        this.search_project = this.search_project.bind(this);
    }

    change_input(ev, key) {
        var value = ev.currentTarget.value;
        this.setState({
            [key]: value
        })
    }

    search_project(ev) {
        ev.preventDefault();
        fetch(`http://localhost:3000/project/${this.state.input_search}`)
        .then(response => response.json())
        .then(results => {
            this.setState(
                {searched_projects : results}
            )
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.search_project}>
                    <input type="input" value={this.state.input_search} onChange={(ev) => this.change_input(ev, 'input_search')}/>
                    <input type="submit"/>
                </form>
                        
                {this.state.searched_projects.length 
                    ? <Projects 
                        searched_projects={this.state.searched_projects}
                        set_appState={this.props.set_appState}/>
                : null }

            </div>
        )       
    }
}

export default View_Projects;