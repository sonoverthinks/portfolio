const extractCurrentPath = (path) => {
  if (path === "/") return "/";
  else {
    const newPath = `/${path.split("/")[1]}`;
    if (newPath === "/blog" || newPath === "/tags") {
      return "/";
    }
    return newPath;
  }
};

export default extractCurrentPath;
