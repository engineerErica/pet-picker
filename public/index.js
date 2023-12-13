const pets = [];
const form = document.querySelector('form');

const appendPet = (name, picURL, isFriendly, species) => {
  const petList = document.querySelector('ul');
  const li = document.createElement('li');
  const h3 = document.createElement('h3');
  h3.textContent = name;
  const img = document.createElement('img');
  img.src = picURL;
  const h4 = document.createElement('h4');
  h4.textContent = isFriendly ? 'Friendly!' : 'Not so friendly...'
  const h5 = document.createElement('h5');
  h5.textContent = `Species: ${species}`;
  li.append(h3, img, h4, h5);
  petList.append(li);
}

const handleSubmit = (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const formObj = Object.fromEntries(formData);
  formObj.isFriendly = formObj.isFriendly === 'on';
  console.log(Object.keys(formObj));
  form.reset();
  pets.push(formObj);
  // console.log(pets);
  appendPet(formObj.petName, formObj.petPicture, formObj.isFriendly, formObj.species);
}
const main = () => {
  form.addEventListener('submit', handleSubmit);
}
main();
