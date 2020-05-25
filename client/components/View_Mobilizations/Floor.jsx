import Mobil_Gyp from './Mobil_Gyp';
import commas from '../../calculations/commas.js';

class Floor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.assembly = this.props.gypAssemblies[this.props.gypAssembly];
        this.floor = this.assembly.floors[this.props.floor];
        this.addRem_mobil = this.addRem_mobil.bind(this);
    }

    addRem_mobil(ev) {
        console.log('add')
        var action = ev.currentTarget.id;

        var updatedMobils = action === 'add' 
                            ?  this.floor.mobilizations.concat({date: '', SF: 0, materials: {bags: 0, tons: 0, perFoam: 0}})
                            : null;

        var updatedGypAssemblies = this.props.gypAssemblies.map(gypAssembly => gypAssembly);
        updatedGypAssemblies[this.props.gypAssembly].floors[this.props.floor].mobilizations = updatedMobils;

        this.props.change_appState(updatedGypAssemblies);
    }

    render() {
        
        return (
            <div className="floor-container">
                <div className="floor-header">
                    <div className="floor-name">{this.floor.floor}</div>
                    <div className="floor-amount">{`${commas(this.floor.SF)} SF`}</div>
                </div>
                
                <button id="add" className="addRem-button" onClick={this.addRem_mobil}>+</button>

                {this.floor.mobilizations.map((mobil,idx) => {
                    return <Mobil_Gyp 
                                gypAssemblies={this.props.gypAssemblies}
                                gypAssembly={this.props.gypAssembly}
                                floor={this.props.floor}
                                mobil={idx}
                                change_appState={this.props.change_appState}/>
                })}

            </div>
        )
    }
    
}

export default Floor;