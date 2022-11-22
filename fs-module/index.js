const fs = require("fs");
const path = require("path");

// Write file
fs.writeFile("newFile.txt", "Content of a new File", (err) => {
  if (err) throw err;
  console.log("Successfully written a new file");
});

const filePath = path.join(process.cwd(), "newFile.txt");

// Read File
fs.readFile(filePath, (err, content) => {
  if (err) throw err;
  console.log(content.toString());
});

// Read directory
fs.readdir(process.cwd(), (err, files) => {
  if (err) throw err;
  console.log(files);
  // files are returned as an array of strings
});

// Delete File
fs.unlink(filePath, (err) => {
  if (err) throw err;
  console.log("Successfully deleted the file specified");
});

// Make Directory
fs.mkdir(
  `${process.cwd()}/myFolder/secondFolder`,
  { recursive: true },
  (err) => {
    if (err) throw err;
    console.log("Successfully created a new Folder");
  }
);

// Remove Directory
fs.rmdir(`${process.cwd()}/myFolder/secondFolder`, (err) => {
  if (err) throw err;
  console.log("Successfully deleted a Folder");
});

// Rename files and folders
fs.rename(
  `${process.cwd()}/myFolder/newDirectory`,
  `${process.cwd()}/myFolder/renamedDirectory`,
  (err) => {
    if (err) throw err;
    console.log("Successfully renamed a Folder");
  }
);

// Append content to a file
fs.appendFile(filePath, `\nNew Content to be added!`, (err) => {
  if (err) throw err;
  console.log("New Content Added");
});
