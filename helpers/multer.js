import { promises as fs } from "fs";

const folderAlreadyExist = (path) => {
  return fs
    .access(path)
    .then(() => true)
    .catch(() => false);
};

const createFolderIfNotExist = async (folderName) => {
  if (!(await folderAlreadyExist(folderName))) {
    await fs.mkdir(folderName);
  }
};

export default createFolderIfNotExist