let problem2 = require("../problem2.cjs");
let path = "./";
problem2.readFile(path, (data) => {
  problem2.convertToUpperCase(path, data, () => {
    problem2.convertToLowerCase(path, () => {
      problem2.sortFile(path, () => {
        problem2.deleteFiles(path, () => {
          console.log("Process Completed");
        });
      });
    });
  });
});
