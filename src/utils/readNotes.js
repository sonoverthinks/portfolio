import fs from "fs";
import path from "path";

const root = process.cwd();

const readNoteFiles = (fileName) =>
  fs.readFileSync(path.join(root, "src", "notes", fileName), "utf8");

export default readNoteFiles;
