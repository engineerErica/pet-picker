const pets = [];

const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formObj = Object.fromEntries(formData);
    formObj.isFriendly = formObj.isFriendly === 'on';
    // console.log(formObj)
    form.reset();
    pets.push(formObj);
    console.log(pets)
}
const main = () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', handleSubmit);
}
main();
// const express = require('express');
// const app = express();
// app.get('/health', (req, res) => {
//     res.send('hello');
// })
// app.listen(3001, () => {
//     console.log('http://localhost:3001');
// });
