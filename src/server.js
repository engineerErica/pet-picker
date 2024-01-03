const Pet = require('./db/models/pets')

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

app.get('/petlist', async (req, res) => {
  const petList = await Pet.list();
  // console.log(petList);
  res.send(petList);
})

app.post('/addpet', async (req, res) => {
  const { body } = req;
  // console.log(body)
  const { petName, petPicture, species, isFriendly } = body; // won't work without the middleware above!
  console.log(petName, petPicture, species, isFriendly)
  const newPet = await Pet.create(petName, petPicture, species, isFriendly); // creates a fellow and adds it to the list
  res.send(newPet);
});

// deleting pets using sql and express
 app.delete('/deletepet:id', async (req, res) => {
  const { id } = req.params;
  // console.log('id: ', id)
  await Pet.delete(id)
 })
