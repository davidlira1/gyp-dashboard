const fs = require('fs');
const faker = require('faker');


const randomNum = (min = 0, max) => {
    return min + Math.floor(Math.random() * ((max + 1) - min));
}
var companyNames = [
    'Powlowski',           "O'Connell",
    'Runolfsdottir Group', 'Borer Group',
    'Schamberger',         'Terry',
    'Reynolds',            'Bode',
    'Rowe',                'Jerde',
    'Roob',                'Buckridge',
    'Hauck',               'Reilly',
    'Sanford',             'Brekke',
    'Hammes Inc',          'Monahan',
    'Littel Group',        'Bechtelar',
    'Schimmel',            'Hodkiewicz',
    'Okuneva',             'Parker',
    'Kiehn Inc',           'Reichel Inc',
    'Altenwerth',          'Adams Group',
    'Erdman LLC',          'Lind'
  ]
var data = [];
// for (var i = 0; i < 30; i++) {
//     var companyName = faker.company.companyName();
//     while(data.includes(companyName)) {
//         companyName = faker.company.companyName();
//     }
//     companyName = companyName.split(' - ')[0];
//     companyName = companyName.split(',')[0];
//     data.push(companyName)
// }

for (var i = 0; i < 100; i++) {
    var companies = [];
    var randIdxs = [];
    for (var j = 0; j < randomNum(1,5); j++) {
        var randIdx = randomNum(0, 29);
        while(randIdxs.includes(randIdx)) {
            randIdx = randomNum(0, 29);
        }
        companies.push(companyNames[randIdx]);
    }

    var project = {
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        zipCode: faker.address.zipCode(),
        state: faker.address.stateAbbr(),
        companies
    }
    data+= JSON.stringify(project) + '\n';
}

//console.log(data);


fs.writeFile(__dirname + 'projects_data.txt', data, (err) => {
    if(err) console.error(err);
    console.log('Wrote projects_data.txt! ^_^')
});
