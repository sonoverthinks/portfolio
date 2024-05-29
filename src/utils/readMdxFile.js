import fs from "fs";
import path from "path";

const root = process.cwd();

const readMdxFile = (fileName) => {
  fs.readFileSync(path.join(root, "src", "about", fileName), "utf8");
};

export default readMdxFile;
