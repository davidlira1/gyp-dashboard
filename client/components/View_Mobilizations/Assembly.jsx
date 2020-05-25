//we are receiving all the assemblies
//concentrating on just one assembly
import Floor from './Floor';
import commas from '../../calculations/commas.js';

class Assembly extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggled: false,
            toggledSign: '+'
        }
        this.assembly = this.props.gypAssemblies[this.props.gypAssembly]; 
        this.toggle_floors = this.toggle_floors.bind(this);
    }

    toggle_floors() {
        var toggledSign = this.state.toggledSign === '+' ? '-' : '+';
        this.setState({
            toggled: !this.state.toggled,
            toggledSign
        })
    }
    
    render() {
        var { type } = this.assembly;
        if(type === 'gyp') {
            var { gypThick, gypType } = this.assembly;
            var title = <div className="assembly-title">{`${gypThick}" Gyp ${gypType}`}</div>
            var amount = <div className="assembly-total">{`${commas(this.assembly.floors.reduce((sum, floor) => sum + floor.SF, 0))} SF`}</div>
        }
        
        return (
            <div className="assembly-container">
                <div className="assembly-header">
                    <div className="assembly-info">
                        <div className="assembly-section">{this.assembly.section}</div>
                        {title}
                        {amount}
                    </div>
                    <button className="toggle-floors" onClick={this.toggle_floors}>{this.state.toggledSign}</button>
                    
                </div>
                

                {this.assembly.floors.map((floor, idx) => {
                    return <Floor
                                key={idx}
                                gypAssemblies={this.props.gypAssemblies}
                                gypAssembly={this.props.gypAssembly}
                                floor={idx}
                                change_appState={this.props.change_appState}
                                toggled={this.state.toggled}/>
                })}
            </div>
        )
    }
    
}

export default Assembly;