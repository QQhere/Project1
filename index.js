const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const cors = require('cors');
app.use(cors());

app.use(express.json()); // for parsing application/json
app.use(express.static(__dirname));
app.post('/run-js-code', (req, res) => {
    // Mã JavaScript từ dữ liệu nhập vào
    const jsCode = req.body.jsCode;

    // Ghi mã JavaScript vào một tệp tạm thời
    fs.writeFile(path.join(__dirname, 'temp.js'), jsCode, (err) => {
        console.log('Mã JavaScript đã được ghi vào tệp tạm thời!');
        if (err) throw err;
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
