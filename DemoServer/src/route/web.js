import express from 'express';
import homeController from '../controller/homeController';

let router = express.Router()

const initWebRoute = (app) => {
    router.get('/', homeController.getHomePage)

    router.get('/detail/user/:userId', homeController.getDetailPage)

    router.post('/create-new-user', homeController.createNewUser)

    router.post('/delete-user', homeController.deleteUser)

    router.get('/edit-user/user/:id', homeController.getEditUser)

    router.post('/post-update', homeController.postUpdateUser)

    router.get('/upload', homeController.getUploadFile)

    router.post('/upload-profile-pic', homeController.handleUploadFile)

    return app.use('/', router)
}

export default initWebRoute;