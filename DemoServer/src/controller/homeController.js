import pool from "../configs/connectDB"

let getHomePage = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM users')
    return res.render('index.ejs', { dataUser: rows })
}

let getDetailPage = async (req, res) => {
    let userId = req.params.userId
    const [rows] = await pool.execute(`SELECT * FROM users where id = ?`, [userId])
    return res.send(JSON.stringify(rows))
}

module.exports = {
    getHomePage, getDetailPage
}