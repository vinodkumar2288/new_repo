const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    // Example endpoint
    res.send('Hello, World! Security scan active.');
});

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
