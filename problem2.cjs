const fs = require("fs");

let newFile = (path, fileName) => {
  fs.appendFile(`${path}filenames.txt`, `${fileName}\n`, (err) => {
    if (err) {
      throw err;
    } else {
      console.log(`${fileName} added in filenames.txt`);
    }
  });
};

let readFile = (path, cb) => {
  fs.readFile(`${path}lipsum.txt`, "utf-8", (err, data) => {
    if (err) {
      throw err;
    }
    cb(data);
  });
};

let convertToUpperCase = (path, data, cb) => {
  fs.writeFile(`${path}uppercase.txt`, data.toUpperCase(), (err) => {
    if (err) {
      throw err;
    } else {
      console.log("Text converted to UpperCase");
      newFile(path, "uppercase.txt");
      cb();
    }
  });
};

let convertToLowerCase = (path, cb) => {
  fs.readFile(`${path}uppercase.txt`, "utf-8", (err, data) => {
    if (err) {
      throw err;
    }
    fs.writeFile(
      `${path}lowercase.txt`,
      data.toString().toLowerCase().replace(/\./g, ".\n"),
      (err) => {
        if (err) {
          throw err;
        }
        console.log("Converted to LowerCase and splitted into sentences");
        newFile(path, "lowercase.txt");
        cb();
      }
    );
  });
};

let sortFile = (path, cb) => {
  fs.readFile(`${path}lowercase.txt`, "utf-8", (err, data) => {
    if (err) {
      throw err;
    }
    fs.writeFile(
      `${path}lowerSorted.txt`,
      data.split("\n").sort().join("\n"),
      (err) => {
        if (err) {
          throw err;
        }
        console.log("Sorted the lowercase file successfully");
        newFile(path, "lowerSorted.txt");
        cb();
      }
    );
  });
  fs.readFile(`${path}uppercase.txt`, "utf-8", (err, data) => {
    if (err) {
      throw err;
    }
    fs.writeFile(
      `${path}upperSorted.txt`,
      data.split("\n").sort().join("\n"),
      (err) => {
        if (err) {
          throw err;
        }
        console.log("Sorted the uppercase file successfully");
        newFile(path, "upperSorted.txt");
        cb();
      }
    );
  });
};

let deleteFiles = (path, cb) => {
  fs.readFile(`${path}filenames.txt`, "utf-8", (err, data) => {
    if (err) {
      throw err;
    }
    data
      .split("\n")
      .filter((element) => element !== "")
      .map((element) => {
        fs.rm(`${path}${element}`, (err) => {
          if (err) {
            throw err;
          }
          console.log(`file ${element} deleted successfully`);
        });
      });
    cb();
  });
};

module.exports.readFile = readFile;
module.exports.convertToUpperCase = convertToUpperCase;
module.exports.convertToLowerCase = convertToLowerCase;
module.exports.sortFile = sortFile;
module.exports.deleteFiles = deleteFiles;
