import Assembly from './Assembly';
import '../../styles/View_Mobilizations.css';

class View_Mobilizations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gypAssemblies: [
                {   
                    type: 'gyp',
                    section: 'Units',
                    gypThick: 1.5,
                    gypType: '2010+',
                    smThick: .25,
                    floors: [
                        {
                            floor: '2nd Floor',
                            SF : 32000,
                            mobilizations: [
                                {
                                    date: '11/03/20',
                                    SF: 12000,
                                    materials: {
                                        bags: 200,
                                        tons: 20,
                                        perFoam: 5
                                    }
                                },
                                {
                                    date: '11/17/20',
                                    SF: 13000,
                                    materials: {
                                        bags: 250,
                                        tons: 21,
                                        perFoam: 6
                                    }
                                }

                            ]
                        },
                        {
                            floor : '3rd Floor',
                            SF : 36000,
                            mobilizations: [
                                {
                                    date: '11/21/20',
                                    SF: 14000,
                                    materials: {
                                        bags: 300,
                                        tons: 22,
                                        perFoam: 8
                                    }
                                },
                                {
                                    date: '11/25/20',
                                    SF: 15000,
                                    materials: {
                                        bags: 350,
                                        tons: 25,
                                        perFoam: 9
                                    }
                                }

                            ]
                        },
                        {
                            floor : '4th Floor',
                            SF : 18000,
                            mobilizations: []
                        } 
                    ]
                },
                {
                    type: 'gyp',
                    section: 'Corridors',
                    gypThick: 1.25,
                    gypType: '2010+',
                    smThick: null,
                    floors: [
                        {
                            floor : '2nd Floor',
                            SF : 24000,
                            mobilizations: [
                                {
                                    date: '11/03/20',
                                    SF: 12000,
                                    materials: {
                                        bags: 200,
                                        tons: 20,
                                        perFoam: 5
                                    }
                                },
                                {
                                    date: '11/17/20',
                                    SF: 10000,
                                    materials: {
                                        bags: 250,
                                        tons: 21,
                                        perFoam: 6
                                    }
                                }

                            ]
                        },
                        {
                            floor : '3rd Floor',
                            SF : 22000,
                            mobilizations: [
                                {
                                    date: '11/23/20',
                                    SF: 12000,
                                    materials: {
                                        bags: 200,
                                        tons: 20,
                                        perFoam: 5
                                    }
                                },
                                {
                                    date: '11/27/20',
                                    SF: 8000,
                                    materials: {
                                        bags: 250,
                                        tons: 21,
                                        perFoam: 6
                                    }
                                }

                            ]
                        },
                        {
                            floor : '4th Floor',
                            SF : 18000,
                            mobilizations: []
                        } 
                    ]
                }
            ]
        }
        
        this.change_appState = this.change_appState.bind(this);

    }

    change_appState(gypAssemblies) {
        this.setState({gypAssemblies});
    }


    render() {
        return (
            <div className="mobilizations-container">
                {this.state.gypAssemblies.map((gypAssembly,idx) => {
                    return <Assembly 
                                key={idx}
                                gypAssemblies={this.state.gypAssemblies}
                                gypAssembly={idx}
                                change_appState={this.change_appState}/>
                                
                })}
            </div>
        )
    }
    
}

export default View_Mobilizations;