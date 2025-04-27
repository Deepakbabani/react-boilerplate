import fs from "fs";
import path from "path";

async function copyTemplate(
  projectName: string,
  userName: string,
  stateManagementChoice: string
) {
  const templatePath = `templates/${stateManagementChoice}`;

  // If the template path does not exist, throw an error
  if (!fs.existsSync(templatePath)) {
    console.error("❌ Template not found!");
    process.exit(1);
  }

  // Copy the files from the template to the project folder
  await copyFiles(templatePath, userName, projectName);
}

async function copyFiles(
  templatePath: string,
  userName: string,
  projectName: string
) {
  const files = fs.readdirSync(templatePath);

  files.forEach((file) => {
    // Skip copying node_modules and package-lock.json
    if (file === "node_modules" || file === "package-lock.json") {
      console.log(`⏭️ Skipping file/folder: ${file}`);
      return; // Skip this file/folder
    }

    const currentPath = path.join(templatePath, file);
    const destPath = path.join(projectName, file);

    const stats = fs.statSync(currentPath);
    if (stats.isDirectory()) {
      fs.mkdirSync(destPath, { recursive: true });
      copyFiles(currentPath, userName, destPath);
    } else {
      let content = fs.readFileSync(currentPath, "utf8");
      if (file === "App.tsx") {
        content = content.replace(
          /<p>Enjoy coding with the best practices!<\/p>/,
          `<p>Hello ${userName} 👋</p>`
        );
      }
      fs.writeFileSync(destPath, content);
    }
  });
}

export { copyTemplate };
