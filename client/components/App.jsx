import View_Projects from './View_Projects/View_Projects';
import View_Project_Profile from './View_Project_Profile/View_Project_Profile';
import View_Calculator from './View_Calculator/View_Calculator';
import View_Proposal from './View_Proposal/View_Proposal';
import '../main.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 'View_Projects',
            currentProject: {},
        }
        this.set_appState = this.set_appState.bind(this);
    }

    set_appState(keysValues) {
        this.setState(keysValues);
    }

    render() {
        return (
            <div>

                <div className="page-title">Enterprise</div>
                <nav>
                    <ul className="nav">
                        <li onClick={() => this.setState({view: 'View_Projects'})}>Projects</li>
                        <li>Companies</li>
                    </ul>
                </nav>


                {this.state.view === 'View_Projects' 
                    ? <View_Projects 
                            set_appState={this.set_appState}
                            chng_input={this.chng_input}/> 
                    : null}

                {this.state.view === 'View_Project_Profile' 
                    ? <View_Project_Profile
                            set_appState={this.set_appState}
                            project={this.state.currentProject}/> 
                    : null}

                {this.state.view === 'View_Calculator' 
                    ? <View_Calculator
                            set_appState={this.set_appState}
                            project={this.state.currentProject}/> 
                    : null} 

                {this.state.view === 'View_Proposal' 
                    ? <View_Proposal
                            project={this.state.currentProject}/> 
                    : null} 

            </div>
        )
    }
}

export default App;
