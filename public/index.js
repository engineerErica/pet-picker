const pets = [];
const form = document.querySelector('form');
const petList = document.querySelector('ul');

const appendPet = (obj) => {
  const li = document.createElement('li');

  const h3 = document.createElement('h3');
  h3.textContent = obj.name;

  const img = document.createElement('img');
  img.src = obj.url;

  const h4 = document.createElement('h4');
  h4.textContent = obj.isFriendly === "on" ? 'Friendly!' : 'not so friendly.'
  const h5 = document.createElement('h5');
  h5.textContent = `Species: ${obj.species}`;

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.addEventListener('click', (e) => {
    try {
      fetch(`/deletepet${obj.id}`, {
        method: 'DELETE'
      })
    } catch (err) {
      console.error(err);
      return null;
    }
    li.remove();
  });

  li.append(h3, img, h4, h5, removeBtn);
  petList.append(li);
}

const handleAddPetSubmit = (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const formObj = Object.fromEntries(formData);
  formObj.isFriendly = formObj.isFriendly === 'on';
  // console.log(Object.keys(formObj));
  console.log(formObj)
  form.reset();
  pets.push(formObj);
  // console.log(pets);
  // appendPet(formObj.petName, formObj.petPicture, formObj.isFriendly, formObj.species);

  // try {
    fetch('/addpet', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formObj),
    }).then(res => res.json()).then(data => appendPet(data));
  // } catch (err) {
  //   console.error(err);
  //   return null;
  // }
}

fetch('/petlist').then(res => res.json()).then(data => data.forEach(pet => appendPet(pet)));

const main = () => {
  form.addEventListener('submit', handleAddPetSubmit);
}
main();
