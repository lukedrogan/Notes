const express = require('express');
const fs = require('fs');

const app = express()
const PORT = process.env.PORT || 3080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// require('./routes/apiRoutes')(app);
// require('./routes/htmlRoutes')(app);

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });
  
  app.get("/", function(req, res) {
    res.json(path.join(__dirname, "public/index.html"));
  });
  