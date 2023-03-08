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

let createNewUser = async (req, res) => {
    console.log('>> check req: ', req.body)
    let {firstname, lastname, email, address} = req.body

    await pool.execute(`insert into users (firstname, lastname, email, address) values(?, ?, ?, ?)`, [firstname, lastname, email, address])
    return res.redirect('/')
}

let deleteUser = async (req, res) => {
    let {userId} = req.body
    await pool.execute('delete from users where id = ?', [userId])
    return res.redirect('/')
}   

let getEditUser = async (req, res) => {
    let userId = req.params.id
    let [user] = await pool.execute('select * from users where id = ?', [userId])
    return res.render('update.ejs', {dataUser: user[0]})
}

let postUpdateUser = async (req, res) => {
    let {id, firstname, lastname, email, address} = req.body
    await pool.execute('update users set firstname = ?, lastname = ?, email = ?, address = ? where id = ?',
    [firstname, lastname, email, address, id])
    return res.redirect('/')
}

let getUploadFile = (req, res) => {
    return res.render('upload.ejs')
}

let handleUploadFile = (req, res) => {
    return res.send('success')
}
module.exports = {
    getHomePage, getDetailPage, createNewUser, deleteUser, getEditUser, postUpdateUser,
    getUploadFile, handleUploadFile
}