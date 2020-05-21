class Gyp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            SF: 0,
            thick: 0,
            soundMat: 0
        }
    }

    change_input(ev, key) {
        var value = ev.currentTarget.value;
        this.setState({
            [key]: value
        })
    }

    render() {
        return (
            <form className="calculator-form">
                <div className="calculator-section">
                    <label>SF</label>
                    <input type="text" value={this.state.SF} onChange={(ev) => this.change_input(ev, 'SF')}/>
                </div>
                
                <div className="calculator-section">
                    <label>Thickness</label>
                    <input type="text" value={this.state.thick} onChange={(ev) => this.change_input(ev, 'thick')}/>
                </div>
    
                <div className="calculator-section">
                    <label>SoundMat</label>
                    <input type="text" value={this.state.soundMat} onChange={(ev) => this.change_input(ev, 'soundMat')}/>
                </div>
            
                <input type="submit" value="Save"/>
            </form>
        )
    }
    
}

export default Gyp;