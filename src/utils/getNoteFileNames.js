import fs from "fs";
import path from "path";

const root = process.cwd();

const getNoteFileNames = () => fs.readdirSync(path.join(root, "src", "notes"));

export default getNoteFileNames;
