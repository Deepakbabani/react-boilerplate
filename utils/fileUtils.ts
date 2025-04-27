import fs from "fs";
import path from "path";

async function copyTemplate(
  projectName: string,
  userName: string,
  stateManagementChoice: string
) {
  const templatePath = path.resolve(
    __dirname,
    "..",
    "templates",
    stateManagementChoice
  );

  // If the template path does not exist, throw an error
  if (!fs.existsSync(templatePath)) {
    console.error(`❌ Template not found at path: ${templatePath}`);
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

  for (const file of files) {
    // Skip copying node_modules and package-lock.json
    if (file === "node_modules" || file === "package-lock.json") {
      console.log(`⏭️ Skipping file/folder: ${file}`);
      continue; // Skip this file/folder
    }

    const currentPath = path.join(templatePath, file);
    const destPath = path.join(projectName, file);

    const stats = fs.statSync(currentPath);
    if (stats.isDirectory()) {
      fs.mkdirSync(destPath, { recursive: true });
      await copyFiles(currentPath, userName, destPath); // Use await here for recursion
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
  }
}

export { copyTemplate };
