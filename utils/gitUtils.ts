import fs from "fs";
import path from "path";

// Delete a folder and all of its contents recursively
function deleteFolderRecursive(filePath: string) {
  if (fs.existsSync(filePath)) {
    fs.readdirSync(filePath).forEach((file) => {
      const currentPath = path.join(filePath, file);
      if (fs.lstatSync(currentPath).isDirectory()) {
        deleteFolderRecursive(currentPath); // Recurse into sub-directory
      } else {
        fs.unlinkSync(currentPath); // Delete file
      }
    });
    fs.rmdirSync(filePath); // Remove empty folder
  }
}

export { deleteFolderRecursive };
