class View_Proposal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
        //this.change_input = this.change_input.bind(this);
        
    }

    makePDF() {
        console.log('makePDF')
    }


    render() {
        return (
            <div>
               <h1>Proposal</h1>
               <div>a proposal for light weight concrete</div>
               <button onClick={this.makePDF}></button>
            </div>
        )       
    }
}

export default View_Proposal;