const util = require("util");
const fs = require("fs");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class db {
  readDbJson() {
    return readFileAsync("db/db.json", 'utf8');
  }

  getAllNotes() {
    return this.readDbJson().then((notes) => {
      let parsedDbNotes;
      try {
        parsedDbNotes = [].concat(JSON.parse(notes));
      } catch (error) {
        parsedDbNotes = [];
      }
      return parsedDbNotes;
    });
  }
}

module.exports = new db();
