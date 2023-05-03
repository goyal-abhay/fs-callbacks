const fs = require("fs");

let writeDirectoryAndFiles = (path, num, cb) => {
  fs.mkdir(`${path}JSON-Directory`, (err) => {
    if (err) {
      throw err;
    } else {
      console.log("JSON-Directory Created Successfully");
    }
  });

  for (let i = 1; i <= num; i++) {
    fs.writeFile(`${path}JSON-Directory/jsonFile${i}.json`, "", (err) => {
      if (err) {
        throw err;
      } else {
        console.log(`jsonFile${i}.json created successfully`);
      }
    });
  }
  cb();
};

let removeDirectoryAndFiles = (path, num, cb) => {
  for (let i = 1; i <= num; i++) {
    fs.unlink(`${path}JSON-Directory/jsonFile${i}.json`, (err) => {
      if (err) {
        throw err;
      } else {
        console.log(`jsonFile${i}.json deleted successfully`);
      }
    });
  }

  fs.rmdir(`${path}JSON-Directory`, (err) => {
    if (err) {
      throw err;
    } else {
      console.log("JSON-Directory Deleted Successfully");
      cb();
    }
  });
};

module.exports = { writeDirectoryAndFiles, removeDirectoryAndFiles };
