const express = require('express');
const path = require('path');
const app = express();

const PORT = 8085;

app.use(express.static(path.join(require.main.filename, '..', '..', 'public')));
console.log(path.join(require.main.filename, '..', '..', 'public'), 'HERE');

app.get('/', (req, res, next) => {
    res.render('index');
});

app.listen(PORT, () => {
    console.log('Server is running on port: ' + PORT);
});