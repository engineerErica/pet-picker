const path = require('path');
const express = require('express');
const app = express();
app.get('/health', (req, res) => {
  res.send('hello');
})
app.listen(8080, () => {
  console.log('http://localhost:8080');
});
app.use(express.json());
const PORT = 8080;

//navigating to HTML file or static folder
const publicDir = path.join(__dirname, '..', 'public');
// here we are rendering the Static file 
const staticAssets = express.static(publicDir);
// Here we are using the static file with every request
app.use(staticAssets);


/** deleting pets using sql and express
 * app.delete('/deletepet:id/', async (req, res) => {
 * const { id } = req.params;
 * await Pet.delete(id)
 * })
 */