var generate_projects = require('./generate_projects');
var generate_companies = require('./generate_companies');
var generate_projects_companies = require('./generate_projects_companies');
var load_to_postgreSQL = require('./load_to_postgreSQL');

generate_projects()
.then(() => {
    console.log('Wrote projects_data.txt! ^_^');
    return generate_companies();
})
.then(() => {
    console.log('Wrote companies_data.txt! ^_^');
    return generate_projects_companies();
})
.then(() => {
    console.log('Wrote projects_companies_data.txt! ^_^');
    return load_to_postgreSQL()
})
.then(() => {
    console.log('Loaded Data to postgreSQL! ^_^');
})
.catch((err) => {
    if(err) console.log(err);
})

