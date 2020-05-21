import Gyp from './Gyp';
import './../../styles/View_Calculator.css'

class View_Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gypSections: 0
        }
        this.change_gypSections = this.change_gypSections.bind(this);
        
    }


    change_gypSections(ev) {
        var action = ev.currentTarget.id;
        console.log(action);
        var newGypSections = action === 'add' ? ++this.state.gypSections : --this.state.gypSections;
    
        this.setState({gypSections: newGypSections})
         
    }

    render() {
        console.log(this.state.gypSections)
        var gypSections = [];
        for (var i = 0; i < this.state.gypSections; i++) {
            gypSections.push(<Gyp />);
        }

        return (
            <div className="calculator-container">
                <div>
                    <button id="add" onClick={this.change_gypSections}>+</button>
                    <button id="subtract" onClick={this.change_gypSections}>-</button>
                    <p>Gypsum Concrete</p>
                </div>

                {gypSections}

                <button onClick={() => this.props.set_appState({view: 'View_Proposal'})}>Proposal</button>
            </div>
        )       
    }
}

export default View_Calculator;