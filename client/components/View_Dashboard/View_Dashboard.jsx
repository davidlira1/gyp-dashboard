import '../../styles/View_Dashboard.css';

class View_Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
        // this.set_appState = this.set_appState.bind(this);
    }

    componentDidMount() {//18.144.38.149
        fetch(`http://${this.props.host}:3000/companies/top10Bidders`)
        .then(response => response.json())
        .then(results => {
            var companies = [];
            var totalBid$ = [];

            results.forEach(result => {
                companies.push(result.name);
                totalBid$.push(result.moneyinprojects);
                
            })
            this.createChart(companies, totalBid$);
        })
        
    }

    createChart(labels, data) {
        var companyView = function () {
            this.props.set_appState({view: 'View_Company'});
        }
        companyView = companyView.bind(this);
        console.log(labels, data)
        var ctx = document.getElementById('chart').getContext('2d');
        var chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels,
                datasets: [{
                    label: 'Top Bidders',
                    data,
                    borderColor: 'rgb(51, 204, 204)',
                    fill: false,
                    lineTension: 0.05
                }
                ]
            },
            options: {
                maintainAspectRatio: true,
                onClick: function(ev) {
                    var n = chart.getElementAtEvent(ev);
                    var company = n[0]._chart.config.data.labels[n[0]._index];
                    console.log(n);
                    companyView();
                },
                tooltips: {
                    mode: 'point',
                    callbacks: {
                        label: function(tooltipItem, data) {
                            return data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                        }
                    }
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            callback: function(value, index, values) {
                                var withCommas = new Intl.NumberFormat('en-US');
                                value = withCommas.format(value);
                                return '$' + value;
                            }
                        }
                    }]
                }
            }
        })
    }

    render() {
        return (
            <div>
                <div className="chart-container">
                    <canvas id="chart" aria-label="chart"></canvas>
                </div>
                
            </div>
        )
    }
}

export default View_Dashboard;