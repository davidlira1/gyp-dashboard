import Input_Select from './Input_Select';
import Table from './Table';

class GypAssembly extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalSF: 0,
            gypBags: 0,
            gypBags$: 0,
            gypBags$unit: 0,
            tons: 0,
            tons$: 0,
            tons$unit: 0
        }
        this.change = this.change.bind(this);

    }

    componentDidMount() {
        this.calculate();
    }

    change(ev, category, key) {
        var value = ev.currentTarget.value;
        console.log('VALUE',value)
        var updatedGypAssembly = Object.assign({}, this.props.gypAssembly);

        if(category === 'floorSF') {
            updatedGypAssembly.floors[this.props.id].SF = Number(value.split(' ')[0]);
        } else if (category === 'addRemFloor') {
            var action = ev.currentTarget.id;
            console.log(action)
            updatedGypAssembly.floors = action === 'add' ? updatedGypAssembly.floors.concat({})
                                                         : updatedGypAssembly.floors.filter((floor, idx) => {
                                                             console.log('idx',idx); return idx !== updatedGypAssembly.floors.length - 1})
        }
        console.log('inside', updatedGypAssembly)
        this.props.change_calculatorState("gypAssemblies", this.props.id, updatedGypAssembly);
    }

    addRem_floor() {
        
    }

    calculate() {
        var totalSF = this.props.gypAssembly.floors.reduce((sum, curr) => sum + curr.SF, 0);
        var gypBags = Math.ceil((totalSF * (this.props.gypAssembly.gypThick/12) / 27) * 10);
        var gypBags$ = Math.ceil(gypBags * 20);
        var gypBags$unit = (gypBags$ / this.state.SF).toFixed(2);

        var tons = Math.ceil(gypBags / 100);
        var tons$ = Math.ceil(tons * 50);
        var tons$unit = (tons$ / this.state.SF).toFixed(2);
        this.setState({
            totalSF,
            gypBags,
            gypBags$,
            gypBags$unit,
            tons,
            tons$,
            tons$unit
        })

    }

    render() {
        var inputGroup = this.props.gypAssembly.floors.map(floor => {
             return [
                        <Input_Select
                                            selected={floor.floor}
                                            valuesTexts={['Floor','1st Floor', '2nd Floor', '3rd Floor', '4th Floor', '5th Floor', '6th Floor', '7th Floor', '8th Floor']}/>,
                        <input type="text" className="calculator-valueBox"  value={floor.SF.toLocaleString() + ' SF'} onChange={(ev) => this.change(ev, 'floorSF', key)}/> 
                    ]
        })
        inputGroup.push([<div>Total</div>,<div>{this.state.totalSF.toLocaleString() + ' SF'}</div>])
        inputGroup.push([<div>Gyp Type</div>, <Input_Select css={"calculator-valueBox"}
                                                selected={this.props.gypAssembly.type}
                                                valuesTexts={['2010+', '3010+', '4010+', 'CMD']}/>]);
                                                inputGroup.push([<div>Gyp Thick</div>,<Input_Select css={"calculator-valueBox"}
                                                selected={this.props.gypAssembly.type}
                                                valuesTexts={{.75 : '3/4"', 1 : '1"', 1.25 : '1-1/4"', 1.5 : '1-1/2"'}}/>]);
        inputGroup.push([<div>SM Thick</div>,<Input_Select css={"calculator-valueBox"}
                                                selected={this.props.gypAssembly.type}
                                                valuesTexts={{.75 : '3/4"', 1 : '1"', 1.25 : '1-1/4"', 1.5 : '1-1/2"'}}/>]);
        var s = this.state;
        return (
            
            <div className="calculator-gypAssembly">
                <Input_Select css={"calculator-select-section"} 
                             valuesTexts={['', 'Home', 'Units', 'Corridors']}/>

                <button className="calculator-addSubBtns" id="add" onClick={(ev) => this.change(ev, 'addRemFloor')}>+</button>
                <button className="calculator-addSubBtns" id="subtract" onClick={(ev) => this.change(ev, 'addRemFloor')}>-</button>
                
                <Table css={"calculator-table"}
                       rows={inputGroup} />

                <Table  css={"calculator-table"}
                        rows={[['Bags', 'Tons', 'Perf Foam'],
                               [s.gypBags, s.tons, 0],
                               [s.gypBags$,s.tons$,0]]}/>

                <Table  css={"calculator-table"}
                        rows={[['Sound Mat','Duct Tape','Paper'],
                               [0,0,0],
                               ['$2,323','$2,023','$2,021']]}/> 
            </div>
        )
    }
    
}

export default GypAssembly;