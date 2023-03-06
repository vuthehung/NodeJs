import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRoute from './route/web';


require('dotenv').config();

const app = express()
const port = process.env.PORT

// config Post request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

configViewEngine(app);
initWebRoute(app);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})