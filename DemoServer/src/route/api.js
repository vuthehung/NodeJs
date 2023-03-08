import express from 'express';
import apiController  from '../controller/apiController';

let router = express.Router()

const initAPIRoute = (app) => {
    router.get('/users', apiController.getAllUsers) //get -> read

    router.post('/create-user', apiController.createNewUser) //post -> create

    router.put('/update-user', apiController.updateUser) //put -> update

    router.delete('/delete-user/:id', apiController.deleteUser) //delete -> delete

    return app.use('/api/v1', router)
}

export default initAPIRoute;