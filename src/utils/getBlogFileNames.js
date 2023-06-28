import fs from "fs";
import path from "path";

const root = process.cwd();

const getBlogFileNames = () => fs.readdirSync(path.join(root, "src", "blogs"));

export default getBlogFileNames;
