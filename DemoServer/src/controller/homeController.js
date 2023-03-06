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

let getCreateNewUser = async (req, res) => {
    console.log('>> check req: ', req.body)
    let {firstname, lastname, email, address} = req.body

    await pool.execute(`insert into users (firstname, lastname, email, address) values(?, ?, ?, ?)`, [firstname, lastname, email, address])
    return res.redirect('/')
}
module.exports = {
    getHomePage, getDetailPage, getCreateNewUser
}