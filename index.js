const express = require('express');
const app = express();
app.get('/health', (req, res) => {
    res.send('hello');
})
app.listen(3001, () => {
    console.log('http://localhost:3001');
});
