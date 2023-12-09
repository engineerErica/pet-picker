const pets = [];
const form = document.querySelector('form');

const handleSubmit = (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const formObj = Object.fromEntries(formData);
  formObj.isFriendly = formObj.isFriendly === 'on';
  // console.log(formObj);
  form.reset();
  pets.push(formObj);
  console.log(pets);
}
const main = () => {
  form.addEventListener('submit', handleSubmit);
}
main();
