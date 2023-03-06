import express from 'express';
import homeController from '../controller/homeController';

let router = express.Router()

const initWebRoute = (app) => {
    router.get('/', homeController.getHomePage)

    router.get('/detail/user/:userId', homeController.getDetailPage)

    router.get('/abc', (req, res) => {
        res.send('<h1>111111111</h1>')
    })

    return app.use('/', router)
}

export default initWebRoute;