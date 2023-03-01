const express = require('express');
const router = requre('./routers');
const app = express();
const port = 4000;

app.use(router)

app.listen(port, ()  => {
    console.log(`Example app listening at http://localhost:${port}`);
})