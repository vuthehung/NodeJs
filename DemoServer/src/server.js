import express from 'express';
import configViewEngine from './configs/viewEngine';

const app = express()
const port = 3000
configViewEngine(app);

app.get('/', (req, res) => {
  res.render('index.ejs')
})
app.get('/abc', (req, res) => {
  res.send('<h1>111111111</h1>')
})
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})