import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRoute from './route/web';
import initAPIRoute from './route/api';

require('dotenv').config();

const app = express()
const port = process.env.PORT

// config Post request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

configViewEngine(app);

//init web route
initWebRoute(app);

//init api route
initAPIRoute(app);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})