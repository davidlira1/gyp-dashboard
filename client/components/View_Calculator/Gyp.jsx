class Gyp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            SF: 0,
            gypType: null,
            gypThick: null,
            soundMat: null
        }
    }

    change_input(ev, key) {
        var value = Number(ev.currentTarget.value);
        console.log('value', value, typeof value);
        this.setState({
            [key]: value
        })
    }

    render() {
        return (
            <form className="calculator-form">
                <div className="calculator-gyp-inputs">
                    <div className="calculator-section">
                        <label>SF</label>
                        <input className="calculator-valueBox" type="text" value={this.state.SF} onChange={(ev) => this.change_input(ev, 'SF')}/>
                    </div>

                    <div className="calculator-section">
                        <label>Gyp Type</label>
                        <select className="calculator-valueBox" value={this.state.gypType} onChange={(ev) => this.change_input(ev, 'gypType')}>
                            <option value={0}>-</option>
                            <option value='2010+'>2010+</option>
                            <option value='3010+"'>3010+</option>
                            <option value='4010+'>4010+</option>
                        </select>
                    </div>
                    
                    <div className="calculator-section">
                        <label>Gyp Thick</label>
                        <select className="calculator-valueBox" value={this.state.gypThick} onChange={(ev) => this.change_input(ev, 'gypThick')}>
                            <option value={0}>"</option>
                            <option value={.75}>3/4"</option>
                            <option value={1}>1"</option>
                            <option value={1.5}>1 1/2"</option>
                            <option value={1.75}>1 3/4"</option>
                            <option value={2}>2"</option>
                            <option value={2.25}>2 1/4"</option>
                            <option value={2.5}>2 1/2"</option>
                            <option value={2.75}>2 3/4"</option>
                        </select>
                    </div>
        
                    <div className="calculator-section">
                        <label>SoundMat</label>
                        <select className="calculator-valueBox" value={this.state.soundMat} onChange={(ev) => this.change_input(ev, 'soundMat')}>
                            <option value={0}>"</option>
                            <option value={.75}>3/4"</option>
                            <option value={1}>1"</option>
                            <option value={1.5}>1 1/2"</option>
                            <option value={1.75}>1 3/4"</option>
                            <option value={2}>2"</option>
                            <option value={2.25}>2 1/4"</option>
                            <option value={2.5}>2 1/2"</option>
                            <option value={2.75}>2 3/4"</option>
                        </select>
                    </div>
                </div>

                {this.state.gypThick ? 
                    <table className="calculator-gypResults">
                        <tr>
                            <th>Bags</th>
                            <th>Tons</th>
                            <th>Perf Foam</th>
                            <th>Roto Starter</th>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>
                : null
                }
                

            </form>
        )
    }
    
}

export default Gyp;