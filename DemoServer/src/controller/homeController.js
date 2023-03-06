import connection from "../configs/connectDB"

let getHomePage = (req, res) => {
    //logic
    let data = [];
    connection.query(
        'SELECT * FROM `users` ',
        function (err, results, fields) {
            results.map((row) => {
                data.push({
                    id: row.id,
                    email: row.email,
                    address: row.address,
                    firstName: row.firstname,
                    lastName: row.lastname
                })

            });
            return res.render('index.ejs', { dataUser: JSON.stringify(data) })
        })
}

module.exports = {
    getHomePage 
}