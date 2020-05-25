import Table from '../pieces/Table';
import gypcrete from '../../calculations/gypcrete.js';
import commas from '../../calculations/commas.js';
import ordinal from '../../misc/ordinal.js';

class Mobil_Gyp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bags: 0,
            tons: 0,
            perFoam: 0
        }
        this.assembly = this.props.gypAssemblies[this.props.gypAssembly];
        this.floor = this.assembly.floors[this.props.floor];
        this.mobil = this.floor.mobilizations[this.props.mobil];
        this.materials = this.mobil.materials;
        this.change_input = this.change_input.bind(this);
    }

    componentDidMount() {
        this.calculate(this.mobil.SF);
    }

    change_input(ev) {
        var value = ev.currentTarget.value.split(' ')[0].replace(/\,/, '');
        console.log(value)
        var item = ev.currentTarget.id;
        var updatedGypAssemblies = this.props.gypAssemblies.map(gypAssembly => gypAssembly);
        var mobilization = updatedGypAssemblies[this.props.gypAssembly].floors[this.props.floor].mobilizations[this.props.mobil];
        if(item === 'SF'){
            mobilization[item] = Number(value);
            this.calculate(value);
        } else if (item === 'date') {
             mobilization[item] = value;
        } else {
            mobilization.materials[item] = value;
        }

        this.props.change_appState(updatedGypAssemblies);
    }

    calculate(SF) {
        var { bags, tons, perFoam } = gypcrete(SF, this.assembly.gypThick);
        this.setState({bags,tons,perFoam})
    }

    render() {

        var mobilContainer = this.props.toggled ? 'mobil-container' : 'mobil-container hide';
        return (
            <div className={mobilContainer}>
                <div>{`${ordinal(this.props.mobil + 1)} Mobilization`}</div>
                <input type="text" id="SF" value={`${commas(this.mobil.SF)} SF`} onChange={this.change_input}/>
                <Table className="mobil-table" rows={ [ ['Bags', 'Tons', 'Per Foam'],
                               
                               [commas(this.state.bags), commas(this.state.tons), commas(this.state.perFoam)],
                               
                               [<input type="text" id="bags" value={this.materials.bags} onChange={this.change_input}/>,
                                <input type="text" id="tons" value={this.materials.tons} onChange={this.change_input}/>,
                                <input type="text" id="perFoam" value={this.materials.perFoam} onChange={this.change_input}/>] ] }/>

                

                <input type="text" id="date" value={this.mobil.date} onChange={this.change_input}/>     
           </div>
        )
    }
    
}

export default Mobil_Gyp;