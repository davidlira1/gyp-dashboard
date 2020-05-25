import View_Dashboard from './View_Dashboard/View_Dashboard';
import View_Projects from './View_Projects/View_Projects';
import View_Project from './View_Project/View_Project';
import View_Calculator from './View_Calculator/View_Calculator';
import View_Proposal from './View_Proposal/View_Proposal';
import View_Company from './View_Company/View_Company';
import View_Mobilizations from './View_Mobilizations/VIew_Mobilizations';
import '../styles/main.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 'View_Dashboard',
            currentProject: {},
            currentCompany: {}
        }
        this.set_appState = this.set_appState.bind(this);
    }

    set_appState(keysValues) {
        this.setState(keysValues);
    }

    render() {
        var views = {
            'View_Dashboard':       <View_Dashboard
                                        set_appState={this.set_appState}
                                        host={this.props.host}/>,

            'View_Projects':        <View_Projects 
                                        set_appState={this.set_appState}
                                        chng_input={this.chng_input}
                                        host={this.props.host}/>,

            'View_Project':         <View_Project
                                        set_appState={this.set_appState}
                                        project={this.state.currentProject}/>,

            'View_Calculator':      <View_Calculator
                                        set_appState={this.set_appState}
                                        project={this.state.currentProject}/>,

            'View_Proposal':         <View_Proposal
                                        project={this.state.currentProject}/>,
            'View_Company':         <View_Company
                                        />,
            'View_Mobilizations':  <View_Mobilizations
                                        />
        }

        var View = views[this.state.view];
        
        return (
            <div>

                <div className="page-title">Gyp-Fill Enterprise</div>
                <nav>
                    <ul className="nav">
                        <li onClick={() => this.setState({view: 'View_Dashboard'})}>Dashboard</li>
                        <li onClick={() => this.setState({view: 'View_Projects'})}>Projects</li>
                        <li onClick={() => this.setState({view: 'View_Companies'})}>Companies</li>
                        <li onClick={() => this.setState({view: 'View_Mobilizations'})}>Mobilizations</li>
                    </ul>
                </nav>

                <div className="view">
                    {View}
                </div>
                
            
            </div>
        )
    }
}

export default App;
