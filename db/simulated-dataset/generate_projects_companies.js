const { fs } = require('./helpers');
const { randomNum } = require('./helpers');

const generate_projects_companies = () => {
        var projectsCompaniesData = 'id,project_id,company_id\n';
        var count = 0;
        for(var project_id = 1; project_id <= 2000; project_id++) {
            for(var j = 0; j < randomNum(1,3); j++) {
                count++;
                var company_id = randomNum(1,400);
                projectsCompaniesData+= `${count},${project_id},${company_id}\n`;
            }
        }
    
        return fs.writeFileAsync(__dirname + '/projects_companies_data.txt', projectsCompaniesData);
}

module.exports = generate_projects_companies;
