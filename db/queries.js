const pool = require('./');
const Promise = require('bluebird')

const getTop10Bidders = () => {
    var query = `SELECT * FROM companies ORDER BY moneyinprojects DESC LIMIT 10`;
    return pool.query(query);
}

// const getProject = (street) => {
//     console.log('comes through')
//     var query = `SELECT * FROM projects WHERE street LIKE '%${street}%'`;
//     return pool.query(query);
// }

const getProjects = (page, street) => {
    //each page will be 20 records
    console.log(page, street);
    var offset = (page - 1) * 20;
    var query = street === '*' 
                ? `SELECT * FROM projects ORDER BY id DESC LIMIT 20 OFFSET ${offset}`
                : `SELECT * FROM projects WHERE street LIKE '%${street}%' ORDER BY STREET LIMIT 20`;
    console.log(query);
    var projects = [];
    return pool.query(query)
    .then(projectsResults => {
        var promises = [];
        projects = projectsResults.rows;
        projectsResults.rows.forEach(project => {
            query = `SELECT company_id FROM projects_companies WHERE project_id = ${project.id}`;
            promises.push(pool.query(query))
        })
        return Promise.all(promises);
    })
    .then(companiesPerProject => {
        var promises = [];
        companiesPerProject.forEach(project => {
            var ids = '';
            project.rows.forEach(company => {
                ids+= `${company.company_id},`;
            })
            ids = ids.substring(0, ids.length - 1);
            query = `SELECT * from companies WHERE id IN (${ids})`;
            promises.push(pool.query(query));
        })
        return Promise.all(promises);
    })
    .then(results => {
        projects.forEach((project, idx) => {
            project.companies = results[idx].rows;
        })
        return projects;
    })
    .catch(err => {
        if (err) console.log(err);
    })
}

// const getListingBookings = (listingId) => {
//     console.log('* inside of query')
//     var query = `SELECT * FROM bookings WHERE "listingId" = ${listingId}`;
//     return pool.query(query);
// }

// const postBooking = (newBooking) => {
//     var values = [];
//     for (var key in newBooking) {
//         values.push(newBooking[key]);
//     }
    
//     const query = {
//         text: 'INSERT INTO bookings("listingId", nights, month, "checkIn", "checkOut", guests, children, infants) VALUES($1, $2, $3, $4, $5, $6, $7, $8)',
//         values
//     }

//     return pool.query(query);
// }

// const updateBooking = (bookingId, updates) => {
//     var keyVals = '';
//     for(var key in updates) {
//         var update = typeof updates[key] === 'string' ? `'${updates[key]}'`: updates[key];
//         keyVals+= `${key} = ${update},`;
//     }
//     keyVals = keyVals.substring(0, keyVals.length - 1);

//     var query = `UPDATE bookings SET ${keyVals} WHERE id=${bookingId}`;
    
//     return pool.query(query);
// }

// const deleteBooking = (bookingId) => {
//     var query = `DELETE FROM bookings WHERE id=${bookingId}`;
//     return pool.query(query);
// }

module.exports = {
    getProjects,
    getTop10Bidders
}
