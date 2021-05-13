const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes')

const app = express()
const PORT = process.env.PORT || 3080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

app.use(htmlRoutes);

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });

