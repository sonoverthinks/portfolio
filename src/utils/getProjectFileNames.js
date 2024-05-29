import fs from "fs";
import path from "path";

const root = process.cwd();

const getProjectFileNames = () =>
  fs.readdirSync(path.join(root, "src", "projects"));

export default getProjectFileNames;
