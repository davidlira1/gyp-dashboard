//we are receiving all the assemblies
//concentrating on just one assembly
import Floor from './Floor';
import commas from '../../calculations/commas.js';

class Assembly extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.assembly = this.props.gypAssemblies[this.props.gypAssembly]; //this worked
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
                    <div className="assembly-section">{this.assembly.section}</div>
                    {title}
                    {amount}
                </div>
                
                {this.assembly.floors.map((floor, idx) => {
                    return <Floor
                                key={idx}
                                gypAssemblies={this.props.gypAssemblies}
                                gypAssembly={this.props.gypAssembly}
                                floor={idx}
                                change_appState={this.props.change_appState}/>
                })}
            </div>
        )
    }
    
}

export default Assembly;