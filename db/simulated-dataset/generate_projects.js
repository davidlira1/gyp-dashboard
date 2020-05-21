const { fs } = require('./helpers');
const faker = require('faker');
const { randomNum } = require('./helpers');

const generate_projects = () => {
    var projectsData = 'id,street,city,zip,state,price\n';
    for (var i = 0; i < 2000; i++) {
        var price = randomNum(20000,180000);
        projectsData+= `${i+1},"${faker.address.streetAddress()}","${faker.address.city()}","${faker.address.stateAbbr()}","${faker.address.zipCode()}",${price}\n`;
    }
    
    
    return fs.writeFileAsync(__dirname + '/projects_data.txt', projectsData);
}

module.exports = generate_projects;

