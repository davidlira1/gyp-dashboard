import Mobil_Gyp from './Mobil_Gyp';
import commas from '../../calculations/commas.js';

class Floor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggled_mobils: false,
            toggledSign: '+'
        }
        this.assembly = this.props.gypAssemblies[this.props.gypAssembly];
        this.floor = this.assembly.floors[this.props.floor];
        this.addRem_mobil = this.addRem_mobil.bind(this);
        this.toggle_mobils = this.toggle_mobils.bind(this);
    }

    toggle_mobils() {
        var toggledSign = this.state.toggledSign === '+' ? '-' : '+';
        this.setState({
            toggled_mobils: !this.state.toggled_mobils,
            toggledSign
        })
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
        
        var floorContainer = this.props.toggled ? "floor-container" : "floor-container hide";

        return (
            <div className={floorContainer}>
                <div className="floor-header">
                    <div className="floor-info">
                        <div className="floor-name">{this.floor.floor}</div>
                        <div className="floor-amount">{`${commas(this.floor.SF)} SF`}</div>
                    </div>
                    <button className="toggle-mobils" onClick={this.toggle_mobils}>{this.state.toggledSign}</button>
                </div>
                
                {this.state.toggled_mobils 
                ? <button id="add" className="addRem-button" onClick={this.addRem_mobil}>+</button>
                : null }

                {this.floor.mobilizations.map((mobil,idx) => {
                    return <Mobil_Gyp 
                                gypAssemblies={this.props.gypAssemblies}
                                gypAssembly={this.props.gypAssembly}
                                floor={this.props.floor}
                                mobil={idx}
                                change_appState={this.props.change_appState}
                                toggled={this.state.toggled_mobils}/>
                })}

            </div>
        )
    }
    
}

export default Floor;