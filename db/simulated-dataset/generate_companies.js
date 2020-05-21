const { fs } = require('./helpers');
const faker = require('faker');

const generate_companies = () => {
    var projects = '';
    var projects_companies = '';

    fs.readFileAsync(__dirname + '/projects_data.txt', 'utf-8')
    .then(results => {
        projects = results.split('\n');
        return fs.readFileAsync(__dirname + '/projects_companies_data.txt', 'utf-8');
    })
    .then(results => {
        projects_companies = results.split('\n');
        var companies = [];
        for (var i = 0; i < 400; i++) {
            var companyName = faker.company.companyName();
            while(companies.includes(companyName)) {
                companyName = faker.company.companyName();
            }
            companyName = companyName.split(' - ')[0];
            companyName = companyName.split(',')[0];
            companies.push(companyName)
        }
        var companiesData = 'id,name\n';
        
        companies.forEach((company, idx) => {
            var projectNums= projects_companies.filter(project_company => {
                var row = project_company.split(',');
                
                return Number(row[2]) === idx;
            }).map(project => Number(project.split(',')[1]))
            var prices = projects.filter(project => {
                var row = project.split(',');
                return projectNums.includes(Number(row[0]))
            }).map(price => Number(price.split(',')[5]))
            countProjects = prices.length;
            var moneyInProjects = prices.reduce((alloc, curr) => {
                return alloc + curr;
            }, 0)
            companiesData+= `${idx+1},"${company}",${countProjects},${moneyInProjects}\n`;
        })

        return fs.writeFileAsync(__dirname + '/companies_data.txt', companiesData)
    })
}

module.exports = generate_companies;
