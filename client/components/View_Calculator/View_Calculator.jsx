// import Projects from './Projects';
import './../../styles/View_Calculator.css'

class View_Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            SF: 0,
            thick: 0,
            soundMat: 0
        }
        //this.change_input = this.change_input.bind(this);
        
    }

    change_input(ev, key) {
        var value = ev.currentTarget.value;
        this.setState({
            [key]: value
        })
    }



    render() {
        return (
            <div className="calculator-container">
                <h1>Calculator</h1>
                <form >
                    <label>SF
                        <input type="text" value={this.state.SF} onChange={(ev) => this.change_input(ev, 'SF')}/>
                    </label>
                    <label>Thickness
                        <input type="text" value={this.state.thick} onChange={(ev) => this.change_input(ev, 'thick')}/>
                    </label>
                    <label>SoundMat
                        <input type="text" value={this.state.soundMat} onChange={(ev) => this.change_input(ev, 'soundMat')}/>
                    </label>
                 
                    <input type="submit" value="Save"/>
                    
                </form>

                <button onClick={() => this.props.set_appState({view: 'View_Proposal'})}>Proposal</button>
            </div>
        )       
    }
}

export default View_Calculator;