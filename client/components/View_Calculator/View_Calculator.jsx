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
                    <button className="calculator-addSubBtns"id="add" onClick={this.change_gypSections}>+</button>
                    <button className="calculator-addSubBtns" id="subtract" onClick={this.change_gypSections}>-</button>
                    <p className="calculator-gypTitle">Gypsum Concrete</p>
                </div>
                {gypSections}
                
                <div>
                    <button className="calculator-addSubBtns"id="add" onClick={this.change_gypSections}>+</button>
                    <button className="calculator-addSubBtns" id="subtract" onClick={this.change_gypSections}>-</button>
                    <p className="calculator-gypTitle">LightWeight Concrete</p>
                </div>



                

                <button className="calculator-proposalBtn" onClick={() => this.props.set_appState({view: 'View_Proposal'})}>Proposal</button>
            </div>
        )       
    }
}

export default View_Calculator;