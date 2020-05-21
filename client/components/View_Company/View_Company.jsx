import '../../styles/View_Company.css';

class View_Company extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
        // this.set_appState = this.set_appState.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost:3000/company/')
        .then(response => {
            return response.json();
        })
        .then(company => {
            //
            this.props.set_appState({currentCompany: company});
        })
    }

    
    render() {
        return (
            <div>
                <div>company</div>
                
            </div>
        )
    }
}

export default View_Company;