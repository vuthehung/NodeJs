import pool from "../configs/connectDB";

let getAllUsers = (req, res) => {
    return res.status(200).json({
        message: 'hello'
    })
}

let createNewUser = async (req, res) => {
    let {firstname, lastname, email, address} = req.body

    if(!firstname || !lastname || !email || !address) {
        return res.status(200).json({
            message: 'missing data'
        })
    }
    await pool.execute(`insert into users (firstname, lastname, email, address) values(?, ?, ?, ?)`, [firstname, lastname, email, address])
    return res.status(200).json({
        message: 'ok'
    })
}

let updateUser = async (req, res) => {
    let {id, firstname, lastname, email, address} = req.body
    if(!firstname || !lastname || !email || !address || !id) {
        return res.status(200).json({
            message: 'missing data'
        })
    }
    await pool.execute('update users set firstname = ?, lastname = ?, email = ?, address = ? where id = ?',
    [firstname, lastname, email, address, id])
    return res.status(200).json({
        message: 'ok'
    })
}

let deleteUser = async (req, res) => {
    let userId = req.params.id
    if(!userId) {
        return res.status(200).json({
            message: 'missing data'
        })
    }
    await pool.execute('delete from users where id = ?', [userId])
    return res.status(200).json({
        message: 'ok'
    })
}
module.exports = {
    getAllUsers, createNewUser, updateUser, deleteUser
}