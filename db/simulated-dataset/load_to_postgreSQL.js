const load_to_postgreSQL = () => {
    const { Client } = require('pg');
    var client = new Client({
        user: 'postgres',
        password: 'pw'
    });
    
    client.connect();
    
    client
    .query('DROP DATABASE IF EXISTS gypfill')
    .then(() => {
        return client.query('CREATE DATABASE gypfill');
    })
    .then(() => {
        console.log('Created database gypfill');
        client.end();
        client = new Client({
            user: 'postgres',
            password: 'pw',
            database: 'gypfill'
        })
        client.connect();
    
        return client.query(
            `CREATE TABLE projects (
                id SERIAL NOT NULL PRIMARY KEY,
                street VARCHAR(50),
                city VARCHAR(50),
                state VARCHAR(20),
                zip VARCHAR(20),
                price int NOT NULL
            )`
        );
    
    })
    .then(() => {
        console.log('Created table projects');
        return client.query(
            `CREATE TABLE companies (
                id SERIAL NOT NULL PRIMARY KEY,
                name VARCHAR(50),
                countprojects int,
                moneyinprojects int
            )`
        );
    })
    .then(() => {
        console.log('Created table companies');
        return client.query(
            `CREATE TABLE projects_companies (
                id SERIAL NOT NULL PRIMARY KEY,
                project_id int NOT NULL,
                company_id int NOT NULL
            )`
        );
    })
    .then(() => {
        console.log('Created table projects_companies');
        
        return client.query(
            `COPY projects FROM '${__dirname}/projects_data.txt' WITH CSV HEADER`
        )
    })
    .then(() => {
        console.log('Populated projects table with data!');
        return client.query(
            `COPY companies FROM '${__dirname}/companies_data.txt' WITH CSV HEADER`
        )
    })
    .then(() => {
        console.log('Populated companies table with data!');
        return client.query(
            `COPY projects_companies FROM '${__dirname}/projects_companies_data.txt' WITH CSV HEADER`
        );
    })
    .then(() => {
        console.log('Populated projects_companies table with data!');
        return client.query(
            `CREATE INDEX projects_street on projects("street")`
        );
    })
    .then(() => {
        console.log('Created projects_street index!');
        return client.query(
            `CREATE INDEX companies_name on companies("name")`
        );
    })
    .then(() => {
        console.log('Created companies_name index!');
        client.end();
    })
    .catch(e => console.error(e.stack));
}

module.exports = load_to_postgreSQL;