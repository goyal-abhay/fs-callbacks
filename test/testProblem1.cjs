const bothFunctions = require("../problem1.cjs");
bothFunctions.writeDirectoryAndFiles("./", num, () => {
  bothFunctions.removeDirectoryAndFiles("./", num, () => {
    console.log("Both functions are working");
  });
});
