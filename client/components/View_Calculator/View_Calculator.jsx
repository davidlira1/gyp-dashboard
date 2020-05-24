import GypAssembly from './GypAssembly';
import './../../styles/View_Calculator.css'

class View_Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gypAssemblies: [
                {
                    'gypThick': 1.25,
                    'smThick': .25,
                    'floors': [
                        {
                            'floor' : '2nd Floor',
                            'SF' : 24000,
                        },
                        {
                            'floor' : '3rd Floor',
                            'SF' : 22000
                        },
                        {
                            'floor' : '4th Floor',
                            'SF' : 18000
                        } 
                    ]
                },
                {
                    'gypThick': 1.25,
                    'smThick': .25,
                    'floors': []
                }
            ]
        }
        this.addRem_gypAssembly = this.addRem_gypAssembly.bind(this);
        this.change_calculatorState = this.change_calculatorState.bind(this);
    }

    change_calculatorState(key, id, newValue) {
        if(key === 'gypAssemblies') {
            var updatedGypAssemblies = this.state.gypAssemblies.map((gypAssembly,idx) => {
                console.log(idx, id, newValue)
                return idx === id ? newValue : gypAssembly;
            });
            console.log('*', updatedGypAssemblies)
            this.setState({
                gypAssemblies: updatedGypAssemblies
            })
        }
    }

    addRem_gypAssembly(ev) {
        var action = ev.currentTarget.id;
        var gypAssemblies = this.state.gypAssemblies;
        var newGypAssemblies = action === 'add' 
                               ? gypAssemblies.concat({floors: []})
                               : gypAssemblies.filter((gypAssembly, idx) => idx !== gypAssemblies.length - 1 );

        this.setState({gypAssemblies: newGypAssemblies})
    }

    render() {
        return (
            <div className="calculator-container">
                <div>
                    <button className="calculator-addSubBtns"id="add" onClick={this.addRem_gypAssembly}>+</button>
                    <button className="calculator-addSubBtns" id="subtract" onClick={this.addRem_gypAssembly}>-</button>
                    <p className="calculator-gypTitle">Gypsum Concrete</p>
                </div>
                
                {this.state.gypAssemblies.map((gypAssembly, idx) => {
                    return <GypAssembly id={idx} 
                                        gypAssembly={gypAssembly} 
                                        change_calculatorState={this.change_calculatorState}/>
                })}

                {/* <div>
                    <button className="calculator-addSubBtns" id="add" onClick={this.change_gypSections}>+</button>
                    <button className="calculator-addSubBtns" id="subtract" onClick={this.change_gypSections}>-</button>
                    <p className="calculator-gypTitle">LightWeight Concrete</p>
                </div>


                <button className="calculator-proposalBtn" onClick={() => this.props.set_appState({view: 'View_Proposal'})}>Proposal</button> */}
            </div>
        )       
    }
}

export default View_Calculator;